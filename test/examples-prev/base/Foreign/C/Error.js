
$hs.modules.ForeignziCziError = new $hs.Module();
$hs.modules.ForeignziCziError.dependencies = ["GHC.Unit", "GHC.Integer", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Classes", "GHC.IO", "GHC.IO.Exception", "GHC.Ptr", "Foreign.C.String", "Foreign.C.Types", "Foreign.Marshal.Error"];
$hs.modules.ForeignziCziError.initBeforeDependencies = function () {
    this.hs_eOK = new $hs.Thunk();
    this.hs_e2BIG = new $hs.Thunk();
    this.hs_eACCES = new $hs.Thunk();
    this.hs_eADDRINUSE = new $hs.Thunk();
    this.hs_eADDRNOTAVAIL = new $hs.Thunk();
    this.hs_eADV = new $hs.Thunk();
    this.hs_eAFNOSUPPORT = new $hs.Thunk();
    this.hs_eAGAIN = new $hs.Thunk();
    this.hs_eALREADY = new $hs.Thunk();
    this.hs_eBADF = new $hs.Thunk();
    this.hs_eBADMSG = new $hs.Thunk();
    this.hs_eBADRPC = new $hs.Thunk();
    this.hs_eBUSY = new $hs.Thunk();
    this.hs_eCHILD = new $hs.Thunk();
    this.hs_eCOMM = new $hs.Thunk();
    this.hs_eCONNABORTED = new $hs.Thunk();
    this.hs_eCONNREFUSED = new $hs.Thunk();
    this.hs_eCONNRESET = new $hs.Thunk();
    this.hs_eDEADLK = new $hs.Thunk();
    this.hs_eDESTADDRREQ = new $hs.Thunk();
    this.hs_eDIRTY = new $hs.Thunk();
    this.hs_eDOM = new $hs.Thunk();
    this.hs_eDQUOT = new $hs.Thunk();
    this.hs_eEXIST = new $hs.Thunk();
    this.hs_eFAULT = new $hs.Thunk();
    this.hs_eFBIG = new $hs.Thunk();
    this.hs_eFTYPE = new $hs.Thunk();
    this.hs_eHOSTDOWN = new $hs.Thunk();
    this.hs_eHOSTUNREACH = new $hs.Thunk();
    this.hs_eIDRM = new $hs.Thunk();
    this.hs_eILSEQ = new $hs.Thunk();
    this.hs_eINPROGRESS = new $hs.Thunk();
    this.hs_eINTR = new $hs.Thunk();
    this.hs_eINVAL = new $hs.Thunk();
    this.hs_eIO = new $hs.Thunk();
    this.hs_eISCONN = new $hs.Thunk();
    this.hs_eISDIR = new $hs.Thunk();
    this.hs_eLOOP = new $hs.Thunk();
    this.hs_eMFILE = new $hs.Thunk();
    this.hs_eMLINK = new $hs.Thunk();
    this.hs_eMSGSIZZE = new $hs.Thunk();
    this.hs_eMULTIHOP = new $hs.Thunk();
    this.hs_eNAMETOOLONG = new $hs.Thunk();
    this.hs_eNETDOWN = new $hs.Thunk();
    this.hs_eNETRESET = new $hs.Thunk();
    this.hs_eNETUNREACH = new $hs.Thunk();
    this.hs_eNFILE = new $hs.Thunk();
    this.hs_eNOBUFS = new $hs.Thunk();
    this.hs_eNODATA = new $hs.Thunk();
    this.hs_eNODEV = new $hs.Thunk();
    this.hs_eNOENT = new $hs.Thunk();
    this.hs_eNOEXEC = new $hs.Thunk();
    this.hs_eNOLCK = new $hs.Thunk();
    this.hs_eNOLINK = new $hs.Thunk();
    this.hs_eNOMEM = new $hs.Thunk();
    this.hs_eNOMSG = new $hs.Thunk();
    this.hs_eNONET = new $hs.Thunk();
    this.hs_eNOPROTOOPT = new $hs.Thunk();
    this.hs_eNOSPC = new $hs.Thunk();
    this.hs_eNOSR = new $hs.Thunk();
    this.hs_eNOSTR = new $hs.Thunk();
    this.hs_eNOSYS = new $hs.Thunk();
    this.hs_eNOTBLK = new $hs.Thunk();
    this.hs_eNOTCONN = new $hs.Thunk();
    this.hs_eNOTDIR = new $hs.Thunk();
    this.hs_eNOTEMPTY = new $hs.Thunk();
    this.hs_eNOTSOCK = new $hs.Thunk();
    this.hs_eNOTTY = new $hs.Thunk();
    this.hs_eNXIO = new $hs.Thunk();
    this.hs_eOPNOTSUPP = new $hs.Thunk();
    this.hs_ePERM = new $hs.Thunk();
    this.hs_ePFNOSUPPORT = new $hs.Thunk();
    this.hs_ePIPE = new $hs.Thunk();
    this.hs_ePROCLIM = new $hs.Thunk();
    this.hs_ePROCUNAVAIL = new $hs.Thunk();
    this.hs_ePROGMISMATCH = new $hs.Thunk();
    this.hs_ePROGUNAVAIL = new $hs.Thunk();
    this.hs_ePROTO = new $hs.Thunk();
    this.hs_ePROTONOSUPPORT = new $hs.Thunk();
    this.hs_ePROTOTYPE = new $hs.Thunk();
    this.hs_eRANGE = new $hs.Thunk();
    this.hs_eREMCHG = new $hs.Thunk();
    this.hs_eREMOTE = new $hs.Thunk();
    this.hs_eROFS = new $hs.Thunk();
    this.hs_eRPCMISMATCH = new $hs.Thunk();
    this.hs_eRREMOTE = new $hs.Thunk();
    this.hs_eSHUTDOWN = new $hs.Thunk();
    this.hs_eSOCKTNOSUPPORT = new $hs.Thunk();
    this.hs_eSPIPE = new $hs.Thunk();
    this.hs_eSRCH = new $hs.Thunk();
    this.hs_eSRMNT = new $hs.Thunk();
    this.hs_eSTALE = new $hs.Thunk();
    this.hs_eTIME = new $hs.Thunk();
    this.hs_eTIMEDOUT = new $hs.Thunk();
    this.hs_eTOOMANYREFS = new $hs.Thunk();
    this.hs_eTXTBSY = new $hs.Thunk();
    this.hs_eUSERS = new $hs.Thunk();
    this.hs_eWOULDBLOCK = new $hs.Thunk();
    this.hs_eXDEV = new $hs.Thunk();
    this.hs_isValidErrno = new $hs.Func(1);
    this.hs_zdfEqErrno = new $hs.Data(1);
    this.hs_errnoToIOError = new $hs.Func(4);
    this.hs_getErrno = new $hs.Thunk();
    this.hs_throwErrno = new $hs.Func(1);
    this.hs_throwErrnoIf = new $hs.Func(3);
    this.hs_throwErrnoIfzu = new $hs.Func(3);
    this.hs_throwErrnoIfMinus1zu = new $hs.Func(1);
    this.hs_throwErrnoIfMinus1 = new $hs.Func(1);
    this.hs_throwErrnoIfNull = new $hs.Func(2);
    this.hs_throwErrnoIfRetry = new $hs.Func(3);
    this.hs_throwErrnoIfRetryzu = new $hs.Func(3);
    this.hs_throwErrnoIfMinus1Retryzu = new $hs.Func(1);
    this.hs_throwErrnoIfMinus1Retry = new $hs.Func(1);
    this.hs_throwErrnoIfNullRetry = new $hs.Func(2);
    this.hs_throwErrnoIfRetryMayBlock = new $hs.Func(4);
    this.hs_throwErrnoIfRetryMayBlockzu = new $hs.Func(4);
    this.hs_throwErrnoIfMinus1RetryMayBlockzu = new $hs.Func(1);
    this.hs_throwErrnoIfMinus1RetryMayBlock = new $hs.Func(1);
    this.hs_throwErrnoIfNullRetryMayBlock = new $hs.Func(3);
    this.hs_throwErrnoPath = new $hs.Func(2);
    this.hs_throwErrnoPathIf = new $hs.Func(4);
    this.hs_throwErrnoPathIfzu = new $hs.Func(4);
    this.hs_throwErrnoPathIfMinus1zu = new $hs.Func(1);
    this.hs_throwErrnoPathIfNull = new $hs.Func(3);
    this.hs_throwErrnoPathIfMinus1 = new $hs.Func(1);
    this.hs_resetErrno = new $hs.Func(1);
    this.hs_Errno = new $hs.Func(1);
    this.hs_eOK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_e2BIG.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eACCES.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eADDRINUSE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eADDRNOTAVAIL.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eADV.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eAFNOSUPPORT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eAGAIN.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eALREADY.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eBADF.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eBADMSG.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eBADRPC.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eBUSY.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eCHILD.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eCOMM.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eCONNABORTED.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eCONNREFUSED.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eCONNRESET.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eDEADLK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eDESTADDRREQ.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eDIRTY.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eDOM.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eDQUOT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eEXIST.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eFAULT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eFBIG.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eFTYPE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eHOSTDOWN.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eHOSTUNREACH.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eIDRM.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eILSEQ.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eINPROGRESS.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eINTR.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eINVAL.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eIO.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eISCONN.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eISDIR.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eLOOP.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eMFILE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eMLINK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eMSGSIZZE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eMULTIHOP.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNAMETOOLONG.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNETDOWN.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNETRESET.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNETUNREACH.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNFILE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOBUFS.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNODATA.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNODEV.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOENT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOEXEC.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOLCK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOLINK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOMEM.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOMSG.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNONET.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOPROTOOPT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOSPC.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOSR.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOSTR.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOSYS.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOTBLK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOTCONN.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOTDIR.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOTEMPTY.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOTSOCK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNOTTY.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eNXIO.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eOPNOTSUPP.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePERM.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePFNOSUPPORT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePIPE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePROCLIM.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePROCUNAVAIL.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePROGMISMATCH.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePROGUNAVAIL.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePROTO.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePROTONOSUPPORT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ePROTOTYPE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eRANGE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eREMCHG.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eREMOTE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eROFS.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eRPCMISMATCH.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eRREMOTE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eSHUTDOWN.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eSOCKTNOSUPPORT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eSPIPE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eSRCH.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eSRMNT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eSTALE.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eTIME.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eTIMEDOUT.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eTOOMANYREFS.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eTXTBSY.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eUSERS.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eWOULDBLOCK.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_eXDEV.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_isValidErrno.notEvaluated = true;
    this.hs_isValidErrno.evaluate = function (hs_ds26DGUX) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_ds26DGUX);
    };
    this.hs_zdfEqErrno.notEvaluated = true;
    this.hs_zdfEqErrno.evaluate = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this;
    };
    this.hs_errnoToIOError.notEvaluated = true;
    this.hs_errnoToIOError.evaluate = function (hs_loc26DGXc, hs_errno26DGVh, hs_maybeHdl26DGXb, hs_maybeName26DGXf) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DGXc, hs_errno26DGVh, hs_maybeHdl26DGXb, hs_maybeName26DGXf);
    };
    this.hs_getErrno.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_throwErrno.notEvaluated = true;
    this.hs_throwErrno.evaluate = function (hs_loc26DGXo) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DGXo);
    };
    this.hs_throwErrnoIf.notEvaluated = true;
    this.hs_throwErrnoIf.evaluate = function (hs_pred26DGXy, hs_loc26DGXA, hs_f26DGXv) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DGXy, hs_loc26DGXA, hs_f26DGXv);
    };
    this.hs_throwErrnoIfzu.notEvaluated = true;
    this.hs_throwErrnoIfzu.evaluate = function (hs_pred26DGXF, hs_loc26DGXG, hs_f26DGXH) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DGXF, hs_loc26DGXG, hs_f26DGXH);
    };
    this.hs_throwErrnoIfMinus1zu.notEvaluated = true;
    this.hs_throwErrnoIfMinus1zu.evaluate = function (hs_zddNum26DGXL) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DGXL);
    };
    this.hs_throwErrnoIfMinus1.notEvaluated = true;
    this.hs_throwErrnoIfMinus1.evaluate = function (hs_zddNum26DGY5) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DGY5);
    };
    this.hs_throwErrnoIfNull.notEvaluated = true;
    this.hs_throwErrnoIfNull.evaluate = function (hs_loc26DGYr, hs_f26DGYn) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DGYr, hs_f26DGYn);
    };
    this.hs_throwErrnoIfRetry.notEvaluated = true;
    this.hs_throwErrnoIfRetry.evaluate = function (hs_pred26DGYz, hs_loc26DGYE, hs_f26DGYw) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DGYz, hs_loc26DGYE, hs_f26DGYw);
    };
    this.hs_throwErrnoIfRetryzu.notEvaluated = true;
    this.hs_throwErrnoIfRetryzu.evaluate = function (hs_pred26DGYK, hs_loc26DGYL, hs_f26DGYM) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DGYK, hs_loc26DGYL, hs_f26DGYM);
    };
    this.hs_throwErrnoIfMinus1Retryzu.notEvaluated = true;
    this.hs_throwErrnoIfMinus1Retryzu.evaluate = function (hs_zddNum26DGYQ) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DGYQ);
    };
    this.hs_throwErrnoIfMinus1Retry.notEvaluated = true;
    this.hs_throwErrnoIfMinus1Retry.evaluate = function (hs_zddNum26DGZ8) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DGZ8);
    };
    this.hs_throwErrnoIfNullRetry.notEvaluated = true;
    this.hs_throwErrnoIfNullRetry.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoIfRetryMayBlock.notEvaluated = true;
    this.hs_throwErrnoIfRetryMayBlock.evaluate = function (hs_pred26DGZs, hs_loc26DGZA, hs_f26DGZp, hs_onzublock26DGZB) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DGZs, hs_loc26DGZA, hs_f26DGZp, hs_onzublock26DGZB);
    };
    this.hs_throwErrnoIfRetryMayBlockzu.notEvaluated = true;
    this.hs_throwErrnoIfRetryMayBlockzu.evaluate = function (hs_pred26DGZK, hs_loc26DGZL, hs_f26DGZM, hs_onzublock26DGZN) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DGZK, hs_loc26DGZL, hs_f26DGZM, hs_onzublock26DGZN);
    };
    this.hs_throwErrnoIfMinus1RetryMayBlockzu.notEvaluated = true;
    this.hs_throwErrnoIfMinus1RetryMayBlockzu.evaluate = function (hs_zddNum26DGZR) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DGZR);
    };
    this.hs_throwErrnoIfMinus1RetryMayBlock.notEvaluated = true;
    this.hs_throwErrnoIfMinus1RetryMayBlock.evaluate = function (hs_zddNum26DH0b) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DH0b);
    };
    this.hs_throwErrnoIfNullRetryMayBlock.notEvaluated = true;
    this.hs_throwErrnoIfNullRetryMayBlock.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoPath.notEvaluated = true;
    this.hs_throwErrnoPath.evaluate = function (hs_loc26DH0r, hs_path26DH0t) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DH0r, hs_path26DH0t);
    };
    this.hs_throwErrnoPathIf.notEvaluated = true;
    this.hs_throwErrnoPathIf.evaluate = function (hs_pred26DH0E, hs_loc26DH0G, hs_path26DH0H, hs_f26DH0B) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DH0E, hs_loc26DH0G, hs_path26DH0H, hs_f26DH0B);
    };
    this.hs_throwErrnoPathIfzu.notEvaluated = true;
    this.hs_throwErrnoPathIfzu.evaluate = function (hs_pred26DH0N, hs_loc26DH0O, hs_path26DH0P, hs_f26DH0Q) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DH0N, hs_loc26DH0O, hs_path26DH0P, hs_f26DH0Q);
    };
    this.hs_throwErrnoPathIfMinus1zu.notEvaluated = true;
    this.hs_throwErrnoPathIfMinus1zu.evaluate = function (hs_zddNum26DH0U) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DH0U);
    };
    this.hs_throwErrnoPathIfNull.notEvaluated = true;
    this.hs_throwErrnoPathIfNull.evaluate = function (hs_loc26DH1l, hs_path26DH1m, hs_f26DH1h) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DH1l, hs_path26DH1m, hs_f26DH1h);
    };
    this.hs_throwErrnoPathIfMinus1.notEvaluated = true;
    this.hs_throwErrnoPathIfMinus1.evaluate = function (hs_zddNum26DH1q) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DH1q);
    };
    this.hs_resetErrno.notEvaluated = true;
    this.hs_resetErrno.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Errno.notEvaluated = true;
    this.hs_Errno.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.ForeignziCziError.initAfterDependencies = function () {
    this.hs_isValidErrno.notEvaluated = false;
    this.hs_zdfEqErrno.notEvaluated = false;
    this.hs_zdfEqErrno.evaluate = function () {
        return this;
    };
    this.hs_errnoToIOError.notEvaluated = false;
    this.hs_throwErrno.notEvaluated = false;
    this.hs_throwErrnoIf.notEvaluated = false;
    this.hs_throwErrnoIfzu.notEvaluated = false;
    this.hs_throwErrnoIfMinus1zu.notEvaluated = false;
    this.hs_throwErrnoIfMinus1.notEvaluated = false;
    this.hs_throwErrnoIfNull.notEvaluated = false;
    this.hs_throwErrnoIfRetry.notEvaluated = false;
    this.hs_throwErrnoIfRetryzu.notEvaluated = false;
    this.hs_throwErrnoIfMinus1Retryzu.notEvaluated = false;
    this.hs_throwErrnoIfMinus1Retry.notEvaluated = false;
    this.hs_throwErrnoIfNullRetry.notEvaluated = false;
    this.hs_throwErrnoIfRetryMayBlock.notEvaluated = false;
    this.hs_throwErrnoIfRetryMayBlockzu.notEvaluated = false;
    this.hs_throwErrnoIfMinus1RetryMayBlockzu.notEvaluated = false;
    this.hs_throwErrnoIfMinus1RetryMayBlock.notEvaluated = false;
    this.hs_throwErrnoIfNullRetryMayBlock.notEvaluated = false;
    this.hs_throwErrnoPath.notEvaluated = false;
    this.hs_throwErrnoPathIf.notEvaluated = false;
    this.hs_throwErrnoPathIfzu.notEvaluated = false;
    this.hs_throwErrnoPathIfMinus1zu.notEvaluated = false;
    this.hs_throwErrnoPathIfNull.notEvaluated = false;
    this.hs_throwErrnoPathIfMinus1.notEvaluated = false;
    this.hs_resetErrno.notEvaluated = false;
    this.hs_Errno.notEvaluated = false;
    var hs_a25vijz = new $hs.Func(1);
    var hs_getzuerrno25tG51 = new $hs.Func(1);
    var hs_sat26DH1X = new $hs.Thunk();
    var hs_a125vijL = new $hs.Thunk();
    var hs_sat26DH1Y = new $hs.Thunk();
    var hs_a225vijO = new $hs.Thunk();
    var hs_sat26DH1Z = new $hs.Thunk();
    var hs_a325vijR = new $hs.Thunk();
    var hs_sat26DH20 = new $hs.Thunk();
    var hs_a425vijU = new $hs.Thunk();
    var hs_sat26DH21 = new $hs.Thunk();
    var hs_a525vijX = new $hs.Thunk();
    var hs_sat26DH22 = new $hs.Thunk();
    var hs_a625vik0 = new $hs.Thunk();
    var hs_sat26DH23 = new $hs.Thunk();
    var hs_a725vik3 = new $hs.Thunk();
    var hs_sat26DH24 = new $hs.Thunk();
    var hs_a825vik6 = new $hs.Thunk();
    var hs_sat26DH25 = new $hs.Thunk();
    var hs_a925vik9 = new $hs.Thunk();
    var hs_sat26DH26 = new $hs.Thunk();
    var hs_a1025vikc = new $hs.Thunk();
    var hs_sat26DH27 = new $hs.Thunk();
    var hs_a1125vikf = new $hs.Thunk();
    var hs_sat26DH29 = new $hs.Thunk();
    var hs_a1225viki = new $hs.Thunk();
    var hs_sat26DH2a = new $hs.Thunk();
    var hs_a1325vikm = new $hs.Thunk();
    var hs_sat26DH2b = new $hs.Thunk();
    var hs_a1425vikp = new $hs.Thunk();
    var hs_sat26DH2c = new $hs.Thunk();
    var hs_a1525viks = new $hs.Thunk();
    var hs_sat26DH2d = new $hs.Thunk();
    var hs_a1625vikv = new $hs.Thunk();
    var hs_sat26DH2e = new $hs.Thunk();
    var hs_a1725viky = new $hs.Thunk();
    var hs_sat26DH2f = new $hs.Thunk();
    var hs_a1825vikB = new $hs.Thunk();
    var hs_sat26DH2g = new $hs.Thunk();
    var hs_a1925vikE = new $hs.Thunk();
    var hs_sat26DH2h = new $hs.Thunk();
    var hs_a2025vikH = new $hs.Thunk();
    var hs_sat26DH2j = new $hs.Thunk();
    var hs_a2125vikK = new $hs.Thunk();
    var hs_sat26DH2k = new $hs.Thunk();
    var hs_a2225vikO = new $hs.Thunk();
    var hs_sat26DH2l = new $hs.Thunk();
    var hs_a2325vikR = new $hs.Thunk();
    var hs_sat26DH2m = new $hs.Thunk();
    var hs_a2425vikU = new $hs.Thunk();
    var hs_sat26DH2n = new $hs.Thunk();
    var hs_a2525vikX = new $hs.Thunk();
    var hs_sat26DH2o = new $hs.Thunk();
    var hs_a2625vil0 = new $hs.Thunk();
    var hs_sat26DH2q = new $hs.Thunk();
    var hs_a2725vil3 = new $hs.Thunk();
    var hs_sat26DH2r = new $hs.Thunk();
    var hs_a2825vil7 = new $hs.Thunk();
    var hs_sat26DH2s = new $hs.Thunk();
    var hs_a2925vila = new $hs.Thunk();
    var hs_sat26DH2t = new $hs.Thunk();
    var hs_a3025vild = new $hs.Thunk();
    var hs_sat26DH2u = new $hs.Thunk();
    var hs_a3125vilg = new $hs.Thunk();
    var hs_sat26DH2v = new $hs.Thunk();
    var hs_a3225vilj = new $hs.Thunk();
    var hs_sat26DH2w = new $hs.Thunk();
    var hs_a3325vilm = new $hs.Thunk();
    var hs_sat26DH2x = new $hs.Thunk();
    var hs_a3425vilp = new $hs.Thunk();
    var hs_sat26DH2y = new $hs.Thunk();
    var hs_a3525vils = new $hs.Thunk();
    var hs_sat26DH2z = new $hs.Thunk();
    var hs_a3625vilv = new $hs.Thunk();
    var hs_sat26DH2A = new $hs.Thunk();
    var hs_a3725vily = new $hs.Thunk();
    var hs_sat26DH2B = new $hs.Thunk();
    var hs_a3825vilB = new $hs.Thunk();
    var hs_sat26DH2C = new $hs.Thunk();
    var hs_a3925vilE = new $hs.Thunk();
    var hs_sat26DH2D = new $hs.Thunk();
    var hs_a4025vilH = new $hs.Thunk();
    var hs_sat26DH2E = new $hs.Thunk();
    var hs_a4125vilK = new $hs.Thunk();
    var hs_sat26DH2F = new $hs.Thunk();
    var hs_a4225vilN = new $hs.Thunk();
    var hs_sat26DH2G = new $hs.Thunk();
    var hs_a4325vilQ = new $hs.Thunk();
    var hs_sat26DH2H = new $hs.Thunk();
    var hs_a4425vilT = new $hs.Thunk();
    var hs_sat26DH2I = new $hs.Thunk();
    var hs_a4525vilW = new $hs.Thunk();
    var hs_sat26DH2J = new $hs.Thunk();
    var hs_a4625vilZ = new $hs.Thunk();
    var hs_sat26DH2K = new $hs.Thunk();
    var hs_a4725vim2 = new $hs.Thunk();
    var hs_sat26DH2L = new $hs.Thunk();
    var hs_a4825vim5 = new $hs.Thunk();
    var hs_sat26DH2M = new $hs.Thunk();
    var hs_a4925vim8 = new $hs.Thunk();
    var hs_sat26DH2N = new $hs.Thunk();
    var hs_a5025vimb = new $hs.Thunk();
    var hs_sat26DH2O = new $hs.Thunk();
    var hs_a5125vime = new $hs.Thunk();
    var hs_sat26DH2P = new $hs.Thunk();
    var hs_a5225vimh = new $hs.Thunk();
    var hs_sat26DH2Q = new $hs.Thunk();
    var hs_a5325vimk = new $hs.Thunk();
    var hs_sat26DH2R = new $hs.Thunk();
    var hs_a5425vimn = new $hs.Thunk();
    var hs_sat26DH2S = new $hs.Thunk();
    var hs_a5525vimq = new $hs.Thunk();
    var hs_sat26DH2T = new $hs.Thunk();
    var hs_a5625vimt = new $hs.Thunk();
    var hs_sat26DH2U = new $hs.Thunk();
    var hs_a5725vimw = new $hs.Thunk();
    var hs_sat26DH2V = new $hs.Thunk();
    var hs_a5825vimz = new $hs.Thunk();
    var hs_sat26DH2W = new $hs.Thunk();
    var hs_a5925vimC = new $hs.Thunk();
    var hs_sat26DH2X = new $hs.Thunk();
    var hs_a6025vimF = new $hs.Thunk();
    var hs_sat26DH2Y = new $hs.Thunk();
    var hs_a6125vimI = new $hs.Thunk();
    var hs_sat26DH2Z = new $hs.Thunk();
    var hs_a6225vimL = new $hs.Thunk();
    var hs_sat26DH30 = new $hs.Thunk();
    var hs_a6325vimO = new $hs.Thunk();
    var hs_sat26DH31 = new $hs.Thunk();
    var hs_a6425vimR = new $hs.Thunk();
    var hs_sat26DH32 = new $hs.Thunk();
    var hs_a6525vimU = new $hs.Thunk();
    var hs_sat26DH33 = new $hs.Thunk();
    var hs_a6625vimX = new $hs.Thunk();
    var hs_sat26DH34 = new $hs.Thunk();
    var hs_a6725vin0 = new $hs.Thunk();
    var hs_sat26DH35 = new $hs.Thunk();
    var hs_a6825vin3 = new $hs.Thunk();
    var hs_sat26DH36 = new $hs.Thunk();
    var hs_a6925vin6 = new $hs.Thunk();
    var hs_sat26DH37 = new $hs.Thunk();
    var hs_a7025vin9 = new $hs.Thunk();
    var hs_sat26DH38 = new $hs.Thunk();
    var hs_a7125vinc = new $hs.Thunk();
    var hs_sat26DH39 = new $hs.Thunk();
    var hs_a7225vinf = new $hs.Thunk();
    var hs_sat26DH3a = new $hs.Thunk();
    var hs_a7325vini = new $hs.Thunk();
    var hs_sat26DH3c = new $hs.Thunk();
    var hs_a7425vinl = new $hs.Thunk();
    var hs_sat26DH3e = new $hs.Thunk();
    var hs_a7525vinp = new $hs.Thunk();
    var hs_sat26DH3g = new $hs.Thunk();
    var hs_a7625vint = new $hs.Thunk();
    var hs_sat26DH3i = new $hs.Thunk();
    var hs_a7725vinx = new $hs.Thunk();
    var hs_sat26DH3j = new $hs.Thunk();
    var hs_a7825vinB = new $hs.Thunk();
    var hs_sat26DH3k = new $hs.Thunk();
    var hs_a7925vinE = new $hs.Thunk();
    var hs_sat26DH3l = new $hs.Thunk();
    var hs_a8025vinH = new $hs.Thunk();
    var hs_sat26DH3m = new $hs.Thunk();
    var hs_a8125vinK = new $hs.Thunk();
    var hs_sat26DH3n = new $hs.Thunk();
    var hs_a8225vinN = new $hs.Thunk();
    var hs_sat26DH3o = new $hs.Thunk();
    var hs_a8325vinQ = new $hs.Thunk();
    var hs_sat26DH3p = new $hs.Thunk();
    var hs_a8425vinT = new $hs.Thunk();
    var hs_sat26DH3r = new $hs.Thunk();
    var hs_a8525vinW = new $hs.Thunk();
    var hs_sat26DH3t = new $hs.Thunk();
    var hs_a8625vio0 = new $hs.Thunk();
    var hs_sat26DH3u = new $hs.Thunk();
    var hs_a8725vio4 = new $hs.Thunk();
    var hs_sat26DH3v = new $hs.Thunk();
    var hs_a8825vio7 = new $hs.Thunk();
    var hs_sat26DH3w = new $hs.Thunk();
    var hs_a8925vioa = new $hs.Thunk();
    var hs_sat26DH3x = new $hs.Thunk();
    var hs_a9025viod = new $hs.Thunk();
    var hs_sat26DH3y = new $hs.Thunk();
    var hs_a9125viog = new $hs.Thunk();
    var hs_sat26DH3z = new $hs.Thunk();
    var hs_a9225vioj = new $hs.Thunk();
    var hs_sat26DH3A = new $hs.Thunk();
    var hs_a9325viom = new $hs.Thunk();
    var hs_sat26DH3B = new $hs.Thunk();
    var hs_a9425viop = new $hs.Thunk();
    var hs_sat26DH3C = new $hs.Thunk();
    var hs_a9525vios = new $hs.Thunk();
    var hs_sat26DH3D = new $hs.Thunk();
    var hs_a9625viov = new $hs.Thunk();
    var hs_sat26DH3E = new $hs.Thunk();
    var hs_a9725vioy = new $hs.Thunk();
    var hs_sat26DH3F = new $hs.Thunk();
    var hs_a9825vioB = new $hs.Thunk();
    var hs_sat26DH3G = new $hs.Thunk();
    var hs_a9925vioE = new $hs.Thunk();
    var hs_zdczeze25vioM = new $hs.Func(2);
    var hs_zdczsze25vioV = new $hs.Thunk();
    var hs_sat26DH5y = new $hs.Func(1);
    var hs_a10025vit2 = new $hs.Func(1);
    var hs_a10125viu5 = new $hs.Func(1);
    var hs_a10225vivt = new $hs.Func(1);
    hs_a25vijz.evaluate = function (hs_ds26DGPS) {
        var hs_wild26DH1V = [hs_ds26DGPS, __hscore_get_errno()];
        var hs_ds126DGPX = hs_wild26DH1V[0];
        var hs_ds226DGPY = hs_wild26DH1V[1];
        var hs_sat26DH1W = new $hs.Data(1);
        hs_sat26DH1W.data = [hs_ds226DGPY];
        return [hs_ds126DGPX, hs_sat26DH1W];
    };
    hs_getzuerrno25tG51.evaluate = function (hs_eta1cW6l3) {
        return hs_a25vijz.hscall(hs_eta1cW6l3);
    };
    hs_sat26DH1X.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_a125vijL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH1X);
    };
    this.hs_eOK.evaluateOnce = function () {
        if (hs_a125vijL.notEvaluated) {
            return hs_a125vijL.hscall();
        } else {
            return hs_a125vijL;
        }
    };
    hs_sat26DH1Y.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(7);
    };
    hs_a225vijO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH1Y);
    };
    this.hs_e2BIG.evaluateOnce = function () {
        if (hs_a225vijO.notEvaluated) {
            return hs_a225vijO.hscall();
        } else {
            return hs_a225vijO;
        }
    };
    hs_sat26DH1Z.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(13);
    };
    hs_a325vijR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH1Z);
    };
    this.hs_eACCES.evaluateOnce = function () {
        if (hs_a325vijR.notEvaluated) {
            return hs_a325vijR.hscall();
        } else {
            return hs_a325vijR;
        }
    };
    hs_sat26DH20.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(98);
    };
    hs_a425vijU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH20);
    };
    this.hs_eADDRINUSE.evaluateOnce = function () {
        if (hs_a425vijU.notEvaluated) {
            return hs_a425vijU.hscall();
        } else {
            return hs_a425vijU;
        }
    };
    hs_sat26DH21.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(99);
    };
    hs_a525vijX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH21);
    };
    this.hs_eADDRNOTAVAIL.evaluateOnce = function () {
        if (hs_a525vijX.notEvaluated) {
            return hs_a525vijX.hscall();
        } else {
            return hs_a525vijX;
        }
    };
    hs_sat26DH22.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(68);
    };
    hs_a625vik0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH22);
    };
    this.hs_eADV.evaluateOnce = function () {
        if (hs_a625vik0.notEvaluated) {
            return hs_a625vik0.hscall();
        } else {
            return hs_a625vik0;
        }
    };
    hs_sat26DH23.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(97);
    };
    hs_a725vik3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH23);
    };
    this.hs_eAFNOSUPPORT.evaluateOnce = function () {
        if (hs_a725vik3.notEvaluated) {
            return hs_a725vik3.hscall();
        } else {
            return hs_a725vik3;
        }
    };
    hs_sat26DH24.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(11);
    };
    hs_a825vik6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH24);
    };
    this.hs_eAGAIN.evaluateOnce = function () {
        if (hs_a825vik6.notEvaluated) {
            return hs_a825vik6.hscall();
        } else {
            return hs_a825vik6;
        }
    };
    hs_sat26DH25.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(114);
    };
    hs_a925vik9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH25);
    };
    this.hs_eALREADY.evaluateOnce = function () {
        if (hs_a925vik9.notEvaluated) {
            return hs_a925vik9.hscall();
        } else {
            return hs_a925vik9;
        }
    };
    hs_sat26DH26.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(9);
    };
    hs_a1025vikc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH26);
    };
    this.hs_eBADF.evaluateOnce = function () {
        if (hs_a1025vikc.notEvaluated) {
            return hs_a1025vikc.hscall();
        } else {
            return hs_a1025vikc;
        }
    };
    hs_sat26DH27.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(74);
    };
    hs_a1125vikf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH27);
    };
    this.hs_eBADMSG.evaluateOnce = function () {
        if (hs_a1125vikf.notEvaluated) {
            return hs_a1125vikf.hscall();
        } else {
            return hs_a1125vikf;
        }
    };
    hs_sat26DH29.evaluateOnce = function () {
        var hs_sat26DH28 = new $hs.Thunk();
        hs_sat26DH28.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH28);
    };
    hs_a1225viki.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH29);
    };
    this.hs_eBADRPC.evaluateOnce = function () {
        if (hs_a1225viki.notEvaluated) {
            return hs_a1225viki.hscall();
        } else {
            return hs_a1225viki;
        }
    };
    hs_sat26DH2a.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
    };
    hs_a1325vikm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2a);
    };
    this.hs_eBUSY.evaluateOnce = function () {
        if (hs_a1325vikm.notEvaluated) {
            return hs_a1325vikm.hscall();
        } else {
            return hs_a1325vikm;
        }
    };
    hs_sat26DH2b.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
    };
    hs_a1425vikp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2b);
    };
    this.hs_eCHILD.evaluateOnce = function () {
        if (hs_a1425vikp.notEvaluated) {
            return hs_a1425vikp.hscall();
        } else {
            return hs_a1425vikp;
        }
    };
    hs_sat26DH2c.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(70);
    };
    hs_a1525viks.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2c);
    };
    this.hs_eCOMM.evaluateOnce = function () {
        if (hs_a1525viks.notEvaluated) {
            return hs_a1525viks.hscall();
        } else {
            return hs_a1525viks;
        }
    };
    hs_sat26DH2d.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(103);
    };
    hs_a1625vikv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2d);
    };
    this.hs_eCONNABORTED.evaluateOnce = function () {
        if (hs_a1625vikv.notEvaluated) {
            return hs_a1625vikv.hscall();
        } else {
            return hs_a1625vikv;
        }
    };
    hs_sat26DH2e.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(111);
    };
    hs_a1725viky.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2e);
    };
    this.hs_eCONNREFUSED.evaluateOnce = function () {
        if (hs_a1725viky.notEvaluated) {
            return hs_a1725viky.hscall();
        } else {
            return hs_a1725viky;
        }
    };
    hs_sat26DH2f.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(104);
    };
    hs_a1825vikB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2f);
    };
    this.hs_eCONNRESET.evaluateOnce = function () {
        if (hs_a1825vikB.notEvaluated) {
            return hs_a1825vikB.hscall();
        } else {
            return hs_a1825vikB;
        }
    };
    hs_sat26DH2g.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(35);
    };
    hs_a1925vikE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2g);
    };
    this.hs_eDEADLK.evaluateOnce = function () {
        if (hs_a1925vikE.notEvaluated) {
            return hs_a1925vikE.hscall();
        } else {
            return hs_a1925vikE;
        }
    };
    hs_sat26DH2h.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(89);
    };
    hs_a2025vikH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2h);
    };
    this.hs_eDESTADDRREQ.evaluateOnce = function () {
        if (hs_a2025vikH.notEvaluated) {
            return hs_a2025vikH.hscall();
        } else {
            return hs_a2025vikH;
        }
    };
    hs_sat26DH2j.evaluateOnce = function () {
        var hs_sat26DH2i = new $hs.Thunk();
        hs_sat26DH2i.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2i);
    };
    hs_a2125vikK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2j);
    };
    this.hs_eDIRTY.evaluateOnce = function () {
        if (hs_a2125vikK.notEvaluated) {
            return hs_a2125vikK.hscall();
        } else {
            return hs_a2125vikK;
        }
    };
    hs_sat26DH2k.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(33);
    };
    hs_a2225vikO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2k);
    };
    this.hs_eDOM.evaluateOnce = function () {
        if (hs_a2225vikO.notEvaluated) {
            return hs_a2225vikO.hscall();
        } else {
            return hs_a2225vikO;
        }
    };
    hs_sat26DH2l.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(122);
    };
    hs_a2325vikR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2l);
    };
    this.hs_eDQUOT.evaluateOnce = function () {
        if (hs_a2325vikR.notEvaluated) {
            return hs_a2325vikR.hscall();
        } else {
            return hs_a2325vikR;
        }
    };
    hs_sat26DH2m.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(17);
    };
    hs_a2425vikU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2m);
    };
    this.hs_eEXIST.evaluateOnce = function () {
        if (hs_a2425vikU.notEvaluated) {
            return hs_a2425vikU.hscall();
        } else {
            return hs_a2425vikU;
        }
    };
    hs_sat26DH2n.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(14);
    };
    hs_a2525vikX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2n);
    };
    this.hs_eFAULT.evaluateOnce = function () {
        if (hs_a2525vikX.notEvaluated) {
            return hs_a2525vikX.hscall();
        } else {
            return hs_a2525vikX;
        }
    };
    hs_sat26DH2o.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(27);
    };
    hs_a2625vil0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2o);
    };
    this.hs_eFBIG.evaluateOnce = function () {
        if (hs_a2625vil0.notEvaluated) {
            return hs_a2625vil0.hscall();
        } else {
            return hs_a2625vil0;
        }
    };
    hs_sat26DH2q.evaluateOnce = function () {
        var hs_sat26DH2p = new $hs.Thunk();
        hs_sat26DH2p.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2p);
    };
    hs_a2725vil3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2q);
    };
    this.hs_eFTYPE.evaluateOnce = function () {
        if (hs_a2725vil3.notEvaluated) {
            return hs_a2725vil3.hscall();
        } else {
            return hs_a2725vil3;
        }
    };
    hs_sat26DH2r.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(112);
    };
    hs_a2825vil7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2r);
    };
    this.hs_eHOSTDOWN.evaluateOnce = function () {
        if (hs_a2825vil7.notEvaluated) {
            return hs_a2825vil7.hscall();
        } else {
            return hs_a2825vil7;
        }
    };
    hs_sat26DH2s.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(113);
    };
    hs_a2925vila.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2s);
    };
    this.hs_eHOSTUNREACH.evaluateOnce = function () {
        if (hs_a2925vila.notEvaluated) {
            return hs_a2925vila.hscall();
        } else {
            return hs_a2925vila;
        }
    };
    hs_sat26DH2t.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(43);
    };
    hs_a3025vild.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2t);
    };
    this.hs_eIDRM.evaluateOnce = function () {
        if (hs_a3025vild.notEvaluated) {
            return hs_a3025vild.hscall();
        } else {
            return hs_a3025vild;
        }
    };
    hs_sat26DH2u.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(84);
    };
    hs_a3125vilg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2u);
    };
    this.hs_eILSEQ.evaluateOnce = function () {
        if (hs_a3125vilg.notEvaluated) {
            return hs_a3125vilg.hscall();
        } else {
            return hs_a3125vilg;
        }
    };
    hs_sat26DH2v.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(115);
    };
    hs_a3225vilj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2v);
    };
    this.hs_eINPROGRESS.evaluateOnce = function () {
        if (hs_a3225vilj.notEvaluated) {
            return hs_a3225vilj.hscall();
        } else {
            return hs_a3225vilj;
        }
    };
    hs_sat26DH2w.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
    };
    hs_a3325vilm.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2w);
    };
    this.hs_eINTR.evaluateOnce = function () {
        if (hs_a3325vilm.notEvaluated) {
            return hs_a3325vilm.hscall();
        } else {
            return hs_a3325vilm;
        }
    };
    hs_sat26DH2x.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(22);
    };
    hs_a3425vilp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2x);
    };
    this.hs_eINVAL.evaluateOnce = function () {
        if (hs_a3425vilp.notEvaluated) {
            return hs_a3425vilp.hscall();
        } else {
            return hs_a3425vilp;
        }
    };
    hs_sat26DH2y.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(5);
    };
    hs_a3525vils.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2y);
    };
    this.hs_eIO.evaluateOnce = function () {
        if (hs_a3525vils.notEvaluated) {
            return hs_a3525vils.hscall();
        } else {
            return hs_a3525vils;
        }
    };
    hs_sat26DH2z.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(106);
    };
    hs_a3625vilv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2z);
    };
    this.hs_eISCONN.evaluateOnce = function () {
        if (hs_a3625vilv.notEvaluated) {
            return hs_a3625vilv.hscall();
        } else {
            return hs_a3625vilv;
        }
    };
    hs_sat26DH2A.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(21);
    };
    hs_a3725vily.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2A);
    };
    this.hs_eISDIR.evaluateOnce = function () {
        if (hs_a3725vily.notEvaluated) {
            return hs_a3725vily.hscall();
        } else {
            return hs_a3725vily;
        }
    };
    hs_sat26DH2B.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(40);
    };
    hs_a3825vilB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2B);
    };
    this.hs_eLOOP.evaluateOnce = function () {
        if (hs_a3825vilB.notEvaluated) {
            return hs_a3825vilB.hscall();
        } else {
            return hs_a3825vilB;
        }
    };
    hs_sat26DH2C.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(24);
    };
    hs_a3925vilE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2C);
    };
    this.hs_eMFILE.evaluateOnce = function () {
        if (hs_a3925vilE.notEvaluated) {
            return hs_a3925vilE.hscall();
        } else {
            return hs_a3925vilE;
        }
    };
    hs_sat26DH2D.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(31);
    };
    hs_a4025vilH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2D);
    };
    this.hs_eMLINK.evaluateOnce = function () {
        if (hs_a4025vilH.notEvaluated) {
            return hs_a4025vilH.hscall();
        } else {
            return hs_a4025vilH;
        }
    };
    hs_sat26DH2E.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(90);
    };
    hs_a4125vilK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2E);
    };
    this.hs_eMSGSIZZE.evaluateOnce = function () {
        if (hs_a4125vilK.notEvaluated) {
            return hs_a4125vilK.hscall();
        } else {
            return hs_a4125vilK;
        }
    };
    hs_sat26DH2F.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(72);
    };
    hs_a4225vilN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2F);
    };
    this.hs_eMULTIHOP.evaluateOnce = function () {
        if (hs_a4225vilN.notEvaluated) {
            return hs_a4225vilN.hscall();
        } else {
            return hs_a4225vilN;
        }
    };
    hs_sat26DH2G.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(36);
    };
    hs_a4325vilQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2G);
    };
    this.hs_eNAMETOOLONG.evaluateOnce = function () {
        if (hs_a4325vilQ.notEvaluated) {
            return hs_a4325vilQ.hscall();
        } else {
            return hs_a4325vilQ;
        }
    };
    hs_sat26DH2H.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(100);
    };
    hs_a4425vilT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2H);
    };
    this.hs_eNETDOWN.evaluateOnce = function () {
        if (hs_a4425vilT.notEvaluated) {
            return hs_a4425vilT.hscall();
        } else {
            return hs_a4425vilT;
        }
    };
    hs_sat26DH2I.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(102);
    };
    hs_a4525vilW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2I);
    };
    this.hs_eNETRESET.evaluateOnce = function () {
        if (hs_a4525vilW.notEvaluated) {
            return hs_a4525vilW.hscall();
        } else {
            return hs_a4525vilW;
        }
    };
    hs_sat26DH2J.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(101);
    };
    hs_a4625vilZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2J);
    };
    this.hs_eNETUNREACH.evaluateOnce = function () {
        if (hs_a4625vilZ.notEvaluated) {
            return hs_a4625vilZ.hscall();
        } else {
            return hs_a4625vilZ;
        }
    };
    hs_sat26DH2K.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(23);
    };
    hs_a4725vim2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2K);
    };
    this.hs_eNFILE.evaluateOnce = function () {
        if (hs_a4725vim2.notEvaluated) {
            return hs_a4725vim2.hscall();
        } else {
            return hs_a4725vim2;
        }
    };
    hs_sat26DH2L.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(105);
    };
    hs_a4825vim5.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2L);
    };
    this.hs_eNOBUFS.evaluateOnce = function () {
        if (hs_a4825vim5.notEvaluated) {
            return hs_a4825vim5.hscall();
        } else {
            return hs_a4825vim5;
        }
    };
    hs_sat26DH2M.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(61);
    };
    hs_a4925vim8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2M);
    };
    this.hs_eNODATA.evaluateOnce = function () {
        if (hs_a4925vim8.notEvaluated) {
            return hs_a4925vim8.hscall();
        } else {
            return hs_a4925vim8;
        }
    };
    hs_sat26DH2N.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(19);
    };
    hs_a5025vimb.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2N);
    };
    this.hs_eNODEV.evaluateOnce = function () {
        if (hs_a5025vimb.notEvaluated) {
            return hs_a5025vimb.hscall();
        } else {
            return hs_a5025vimb;
        }
    };
    hs_sat26DH2O.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    hs_a5125vime.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2O);
    };
    this.hs_eNOENT.evaluateOnce = function () {
        if (hs_a5125vime.notEvaluated) {
            return hs_a5125vime.hscall();
        } else {
            return hs_a5125vime;
        }
    };
    hs_sat26DH2P.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
    };
    hs_a5225vimh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2P);
    };
    this.hs_eNOEXEC.evaluateOnce = function () {
        if (hs_a5225vimh.notEvaluated) {
            return hs_a5225vimh.hscall();
        } else {
            return hs_a5225vimh;
        }
    };
    hs_sat26DH2Q.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(37);
    };
    hs_a5325vimk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2Q);
    };
    this.hs_eNOLCK.evaluateOnce = function () {
        if (hs_a5325vimk.notEvaluated) {
            return hs_a5325vimk.hscall();
        } else {
            return hs_a5325vimk;
        }
    };
    hs_sat26DH2R.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(67);
    };
    hs_a5425vimn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2R);
    };
    this.hs_eNOLINK.evaluateOnce = function () {
        if (hs_a5425vimn.notEvaluated) {
            return hs_a5425vimn.hscall();
        } else {
            return hs_a5425vimn;
        }
    };
    hs_sat26DH2S.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(12);
    };
    hs_a5525vimq.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2S);
    };
    this.hs_eNOMEM.evaluateOnce = function () {
        if (hs_a5525vimq.notEvaluated) {
            return hs_a5525vimq.hscall();
        } else {
            return hs_a5525vimq;
        }
    };
    hs_sat26DH2T.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(42);
    };
    hs_a5625vimt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2T);
    };
    this.hs_eNOMSG.evaluateOnce = function () {
        if (hs_a5625vimt.notEvaluated) {
            return hs_a5625vimt.hscall();
        } else {
            return hs_a5625vimt;
        }
    };
    hs_sat26DH2U.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(64);
    };
    hs_a5725vimw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2U);
    };
    this.hs_eNONET.evaluateOnce = function () {
        if (hs_a5725vimw.notEvaluated) {
            return hs_a5725vimw.hscall();
        } else {
            return hs_a5725vimw;
        }
    };
    hs_sat26DH2V.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(92);
    };
    hs_a5825vimz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2V);
    };
    this.hs_eNOPROTOOPT.evaluateOnce = function () {
        if (hs_a5825vimz.notEvaluated) {
            return hs_a5825vimz.hscall();
        } else {
            return hs_a5825vimz;
        }
    };
    hs_sat26DH2W.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(28);
    };
    hs_a5925vimC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2W);
    };
    this.hs_eNOSPC.evaluateOnce = function () {
        if (hs_a5925vimC.notEvaluated) {
            return hs_a5925vimC.hscall();
        } else {
            return hs_a5925vimC;
        }
    };
    hs_sat26DH2X.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(63);
    };
    hs_a6025vimF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2X);
    };
    this.hs_eNOSR.evaluateOnce = function () {
        if (hs_a6025vimF.notEvaluated) {
            return hs_a6025vimF.hscall();
        } else {
            return hs_a6025vimF;
        }
    };
    hs_sat26DH2Y.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(60);
    };
    hs_a6125vimI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2Y);
    };
    this.hs_eNOSTR.evaluateOnce = function () {
        if (hs_a6125vimI.notEvaluated) {
            return hs_a6125vimI.hscall();
        } else {
            return hs_a6125vimI;
        }
    };
    hs_sat26DH2Z.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(38);
    };
    hs_a6225vimL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH2Z);
    };
    this.hs_eNOSYS.evaluateOnce = function () {
        if (hs_a6225vimL.notEvaluated) {
            return hs_a6225vimL.hscall();
        } else {
            return hs_a6225vimL;
        }
    };
    hs_sat26DH30.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(15);
    };
    hs_a6325vimO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH30);
    };
    this.hs_eNOTBLK.evaluateOnce = function () {
        if (hs_a6325vimO.notEvaluated) {
            return hs_a6325vimO.hscall();
        } else {
            return hs_a6325vimO;
        }
    };
    hs_sat26DH31.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(107);
    };
    hs_a6425vimR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH31);
    };
    this.hs_eNOTCONN.evaluateOnce = function () {
        if (hs_a6425vimR.notEvaluated) {
            return hs_a6425vimR.hscall();
        } else {
            return hs_a6425vimR;
        }
    };
    hs_sat26DH32.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(20);
    };
    hs_a6525vimU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH32);
    };
    this.hs_eNOTDIR.evaluateOnce = function () {
        if (hs_a6525vimU.notEvaluated) {
            return hs_a6525vimU.hscall();
        } else {
            return hs_a6525vimU;
        }
    };
    hs_sat26DH33.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(39);
    };
    hs_a6625vimX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH33);
    };
    this.hs_eNOTEMPTY.evaluateOnce = function () {
        if (hs_a6625vimX.notEvaluated) {
            return hs_a6625vimX.hscall();
        } else {
            return hs_a6625vimX;
        }
    };
    hs_sat26DH34.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(88);
    };
    hs_a6725vin0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH34);
    };
    this.hs_eNOTSOCK.evaluateOnce = function () {
        if (hs_a6725vin0.notEvaluated) {
            return hs_a6725vin0.hscall();
        } else {
            return hs_a6725vin0;
        }
    };
    hs_sat26DH35.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(25);
    };
    hs_a6825vin3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH35);
    };
    this.hs_eNOTTY.evaluateOnce = function () {
        if (hs_a6825vin3.notEvaluated) {
            return hs_a6825vin3.hscall();
        } else {
            return hs_a6825vin3;
        }
    };
    hs_sat26DH36.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(6);
    };
    hs_a6925vin6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH36);
    };
    this.hs_eNXIO.evaluateOnce = function () {
        if (hs_a6925vin6.notEvaluated) {
            return hs_a6925vin6.hscall();
        } else {
            return hs_a6925vin6;
        }
    };
    hs_sat26DH37.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(95);
    };
    hs_a7025vin9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH37);
    };
    this.hs_eOPNOTSUPP.evaluateOnce = function () {
        if (hs_a7025vin9.notEvaluated) {
            return hs_a7025vin9.hscall();
        } else {
            return hs_a7025vin9;
        }
    };
    hs_sat26DH38.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    hs_a7125vinc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH38);
    };
    this.hs_ePERM.evaluateOnce = function () {
        if (hs_a7125vinc.notEvaluated) {
            return hs_a7125vinc.hscall();
        } else {
            return hs_a7125vinc;
        }
    };
    hs_sat26DH39.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(96);
    };
    hs_a7225vinf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH39);
    };
    this.hs_ePFNOSUPPORT.evaluateOnce = function () {
        if (hs_a7225vinf.notEvaluated) {
            return hs_a7225vinf.hscall();
        } else {
            return hs_a7225vinf;
        }
    };
    hs_sat26DH3a.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(32);
    };
    hs_a7325vini.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3a);
    };
    this.hs_ePIPE.evaluateOnce = function () {
        if (hs_a7325vini.notEvaluated) {
            return hs_a7325vini.hscall();
        } else {
            return hs_a7325vini;
        }
    };
    hs_sat26DH3c.evaluateOnce = function () {
        var hs_sat26DH3b = new $hs.Thunk();
        hs_sat26DH3b.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3b);
    };
    hs_a7425vinl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3c);
    };
    this.hs_ePROCLIM.evaluateOnce = function () {
        if (hs_a7425vinl.notEvaluated) {
            return hs_a7425vinl.hscall();
        } else {
            return hs_a7425vinl;
        }
    };
    hs_sat26DH3e.evaluateOnce = function () {
        var hs_sat26DH3d = new $hs.Thunk();
        hs_sat26DH3d.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3d);
    };
    hs_a7525vinp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3e);
    };
    this.hs_ePROCUNAVAIL.evaluateOnce = function () {
        if (hs_a7525vinp.notEvaluated) {
            return hs_a7525vinp.hscall();
        } else {
            return hs_a7525vinp;
        }
    };
    hs_sat26DH3g.evaluateOnce = function () {
        var hs_sat26DH3f = new $hs.Thunk();
        hs_sat26DH3f.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3f);
    };
    hs_a7625vint.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3g);
    };
    this.hs_ePROGMISMATCH.evaluateOnce = function () {
        if (hs_a7625vint.notEvaluated) {
            return hs_a7625vint.hscall();
        } else {
            return hs_a7625vint;
        }
    };
    hs_sat26DH3i.evaluateOnce = function () {
        var hs_sat26DH3h = new $hs.Thunk();
        hs_sat26DH3h.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3h);
    };
    hs_a7725vinx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3i);
    };
    this.hs_ePROGUNAVAIL.evaluateOnce = function () {
        if (hs_a7725vinx.notEvaluated) {
            return hs_a7725vinx.hscall();
        } else {
            return hs_a7725vinx;
        }
    };
    hs_sat26DH3j.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(71);
    };
    hs_a7825vinB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3j);
    };
    this.hs_ePROTO.evaluateOnce = function () {
        if (hs_a7825vinB.notEvaluated) {
            return hs_a7825vinB.hscall();
        } else {
            return hs_a7825vinB;
        }
    };
    hs_sat26DH3k.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(93);
    };
    hs_a7925vinE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3k);
    };
    this.hs_ePROTONOSUPPORT.evaluateOnce = function () {
        if (hs_a7925vinE.notEvaluated) {
            return hs_a7925vinE.hscall();
        } else {
            return hs_a7925vinE;
        }
    };
    hs_sat26DH3l.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(91);
    };
    hs_a8025vinH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3l);
    };
    this.hs_ePROTOTYPE.evaluateOnce = function () {
        if (hs_a8025vinH.notEvaluated) {
            return hs_a8025vinH.hscall();
        } else {
            return hs_a8025vinH;
        }
    };
    hs_sat26DH3m.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(34);
    };
    hs_a8125vinK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3m);
    };
    this.hs_eRANGE.evaluateOnce = function () {
        if (hs_a8125vinK.notEvaluated) {
            return hs_a8125vinK.hscall();
        } else {
            return hs_a8125vinK;
        }
    };
    hs_sat26DH3n.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(78);
    };
    hs_a8225vinN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3n);
    };
    this.hs_eREMCHG.evaluateOnce = function () {
        if (hs_a8225vinN.notEvaluated) {
            return hs_a8225vinN.hscall();
        } else {
            return hs_a8225vinN;
        }
    };
    hs_sat26DH3o.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(66);
    };
    hs_a8325vinQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3o);
    };
    this.hs_eREMOTE.evaluateOnce = function () {
        if (hs_a8325vinQ.notEvaluated) {
            return hs_a8325vinQ.hscall();
        } else {
            return hs_a8325vinQ;
        }
    };
    hs_sat26DH3p.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(30);
    };
    hs_a8425vinT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3p);
    };
    this.hs_eROFS.evaluateOnce = function () {
        if (hs_a8425vinT.notEvaluated) {
            return hs_a8425vinT.hscall();
        } else {
            return hs_a8425vinT;
        }
    };
    hs_sat26DH3r.evaluateOnce = function () {
        var hs_sat26DH3q = new $hs.Thunk();
        hs_sat26DH3q.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3q);
    };
    hs_a8525vinW.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3r);
    };
    this.hs_eRPCMISMATCH.evaluateOnce = function () {
        if (hs_a8525vinW.notEvaluated) {
            return hs_a8525vinW.hscall();
        } else {
            return hs_a8525vinW;
        }
    };
    hs_sat26DH3t.evaluateOnce = function () {
        var hs_sat26DH3s = new $hs.Thunk();
        hs_sat26DH3s.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3s);
    };
    hs_a8625vio0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3t);
    };
    this.hs_eRREMOTE.evaluateOnce = function () {
        if (hs_a8625vio0.notEvaluated) {
            return hs_a8625vio0.hscall();
        } else {
            return hs_a8625vio0;
        }
    };
    hs_sat26DH3u.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(108);
    };
    hs_a8725vio4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3u);
    };
    this.hs_eSHUTDOWN.evaluateOnce = function () {
        if (hs_a8725vio4.notEvaluated) {
            return hs_a8725vio4.hscall();
        } else {
            return hs_a8725vio4;
        }
    };
    hs_sat26DH3v.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(94);
    };
    hs_a8825vio7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3v);
    };
    this.hs_eSOCKTNOSUPPORT.evaluateOnce = function () {
        if (hs_a8825vio7.notEvaluated) {
            return hs_a8825vio7.hscall();
        } else {
            return hs_a8825vio7;
        }
    };
    hs_sat26DH3w.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(29);
    };
    hs_a8925vioa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3w);
    };
    this.hs_eSPIPE.evaluateOnce = function () {
        if (hs_a8925vioa.notEvaluated) {
            return hs_a8925vioa.hscall();
        } else {
            return hs_a8925vioa;
        }
    };
    hs_sat26DH3x.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(3);
    };
    hs_a9025viod.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3x);
    };
    this.hs_eSRCH.evaluateOnce = function () {
        if (hs_a9025viod.notEvaluated) {
            return hs_a9025viod.hscall();
        } else {
            return hs_a9025viod;
        }
    };
    hs_sat26DH3y.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(69);
    };
    hs_a9125viog.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3y);
    };
    this.hs_eSRMNT.evaluateOnce = function () {
        if (hs_a9125viog.notEvaluated) {
            return hs_a9125viog.hscall();
        } else {
            return hs_a9125viog;
        }
    };
    hs_sat26DH3z.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(116);
    };
    hs_a9225vioj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3z);
    };
    this.hs_eSTALE.evaluateOnce = function () {
        if (hs_a9225vioj.notEvaluated) {
            return hs_a9225vioj.hscall();
        } else {
            return hs_a9225vioj;
        }
    };
    hs_sat26DH3A.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(62);
    };
    hs_a9325viom.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3A);
    };
    this.hs_eTIME.evaluateOnce = function () {
        if (hs_a9325viom.notEvaluated) {
            return hs_a9325viom.hscall();
        } else {
            return hs_a9325viom;
        }
    };
    hs_sat26DH3B.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(110);
    };
    hs_a9425viop.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3B);
    };
    this.hs_eTIMEDOUT.evaluateOnce = function () {
        if (hs_a9425viop.notEvaluated) {
            return hs_a9425viop.hscall();
        } else {
            return hs_a9425viop;
        }
    };
    hs_sat26DH3C.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(109);
    };
    hs_a9525vios.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3C);
    };
    this.hs_eTOOMANYREFS.evaluateOnce = function () {
        if (hs_a9525vios.notEvaluated) {
            return hs_a9525vios.hscall();
        } else {
            return hs_a9525vios;
        }
    };
    hs_sat26DH3D.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(26);
    };
    hs_a9625viov.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3D);
    };
    this.hs_eTXTBSY.evaluateOnce = function () {
        if (hs_a9625viov.notEvaluated) {
            return hs_a9625viov.hscall();
        } else {
            return hs_a9625viov;
        }
    };
    hs_sat26DH3E.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(87);
    };
    hs_a9725vioy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3E);
    };
    this.hs_eUSERS.evaluateOnce = function () {
        if (hs_a9725vioy.notEvaluated) {
            return hs_a9725vioy.hscall();
        } else {
            return hs_a9725vioy;
        }
    };
    hs_sat26DH3F.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(11);
    };
    hs_a9825vioB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3F);
    };
    this.hs_eWOULDBLOCK.evaluateOnce = function () {
        if (hs_a9825vioB.notEvaluated) {
            return hs_a9825vioB.hscall();
        } else {
            return hs_a9825vioB;
        }
    };
    hs_sat26DH3G.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(18);
    };
    hs_a9925vioE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3G);
    };
    this.hs_eXDEV.evaluateOnce = function () {
        if (hs_a9925vioE.notEvaluated) {
            return hs_a9925vioE.hscall();
        } else {
            return hs_a9925vioE;
        }
    };
    this.hs_isValidErrno.evaluate = function (hs_ds26DGUX) {
        var hs_sat26DH3J = new $hs.Thunk();
        hs_sat26DH3J.evaluateOnce = function () {
            var hs_sat26DH3I = new $hs.Thunk();
            hs_sat26DH3I.evaluateOnce = function () {
                var hs_sat26DH3H = new $hs.Thunk();
                hs_sat26DH3H.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3H);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH3I);
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_ds26DGUX, hs_sat26DH3J);
    };
    hs_zdczeze25vioM.evaluate = function (hs_errno126DGV5, hs_errno226DGV7) {
        var hs_sat26DH3K = new $hs.Thunk();
        hs_sat26DH3K.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_isValidErrno.hscall(hs_errno226DGV7);
        };
        var hs_sat26DH3M = new $hs.Thunk();
        hs_sat26DH3M.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_isValidErrno.hscall(hs_errno126DGV5);
        };
        var hs_wild26DH3L = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DH3M, hs_sat26DH3K);
        switch (hs_wild26DH3L.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_errno126DGV5, hs_errno226DGV7);
        }
    };
    this.hs_zdfEqErrno.data = [hs_zdczeze25vioM, hs_zdczsze25vioV];
    hs_zdczsze25vioV.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno);
    };
    this.hs_errnoToIOError.evaluate = function (hs_loc26DGXc, hs_errno26DGVh, hs_maybeHdl26DGXb, hs_maybeName26DGXf) {
        var hs_errType26DGWT = new $hs.Thunk();
        hs_errType26DGWT.evaluateOnce = function () {
            var hs_wild26DH5n = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a125vijL);
            switch (hs_wild26DH5n.tag) {
            case 1:
                var hs_wild126DH5m = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a225vijO);
                switch (hs_wild126DH5m.tag) {
                case 1:
                    var hs_wild226DH5l = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a325vijR);
                    switch (hs_wild226DH5l.tag) {
                    case 1:
                        var hs_wild326DH5k = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a425vijU);
                        switch (hs_wild326DH5k.tag) {
                        case 1:
                            var hs_wild426DH5j = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a525vijX);
                            switch (hs_wild426DH5j.tag) {
                            case 1:
                                var hs_wild526DH5i = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a625vik0);
                                switch (hs_wild526DH5i.tag) {
                                case 1:
                                    var hs_wild626DH5h = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a725vik3);
                                    switch (hs_wild626DH5h.tag) {
                                    case 1:
                                        var hs_wild726DH5g = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a825vik6);
                                        switch (hs_wild726DH5g.tag) {
                                        case 1:
                                            var hs_wild826DH5f = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a925vik9);
                                            switch (hs_wild826DH5f.tag) {
                                            case 1:
                                                var hs_wild926DH5e = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1025vikc);
                                                switch (hs_wild926DH5e.tag) {
                                                case 1:
                                                    var hs_wild1026DH5d = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1125vikf);
                                                    switch (hs_wild1026DH5d.tag) {
                                                    case 1:
                                                        var hs_wild1126DH5c = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1225viki);
                                                        switch (hs_wild1126DH5c.tag) {
                                                        case 1:
                                                            var hs_wild1226DH5b = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1325vikm);
                                                            switch (hs_wild1226DH5b.tag) {
                                                            case 1:
                                                                var hs_wild1326DH5a = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1425vikp);
                                                                switch (hs_wild1326DH5a.tag) {
                                                                case 1:
                                                                    var hs_wild1426DH59 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1525viks);
                                                                    switch (hs_wild1426DH59.tag) {
                                                                    case 1:
                                                                        var hs_wild1526DH58 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1625vikv);
                                                                        switch (hs_wild1526DH58.tag) {
                                                                        case 1:
                                                                            var hs_wild1626DH57 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1725viky);
                                                                            switch (hs_wild1626DH57.tag) {
                                                                            case 1:
                                                                                var hs_wild1726DH56 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1825vikB);
                                                                                switch (hs_wild1726DH56.tag) {
                                                                                case 1:
                                                                                    var hs_wild1826DH55 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a1925vikE);
                                                                                    switch (hs_wild1826DH55.tag) {
                                                                                    case 1:
                                                                                        var hs_wild1926DH54 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2025vikH);
                                                                                        switch (hs_wild1926DH54.tag) {
                                                                                        case 1:
                                                                                            var hs_wild2026DH53 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2125vikK);
                                                                                            switch (hs_wild2026DH53.tag) {
                                                                                            case 1:
                                                                                                var hs_wild2126DH52 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2225vikO);
                                                                                                switch (hs_wild2126DH52.tag) {
                                                                                                case 1:
                                                                                                    var hs_wild2226DH51 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2325vikR);
                                                                                                    switch (hs_wild2226DH51.tag) {
                                                                                                    case 1:
                                                                                                        var hs_wild2326DH50 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2425vikU);
                                                                                                        switch (hs_wild2326DH50.tag) {
                                                                                                        case 1:
                                                                                                            var hs_wild2426DH4Z = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2525vikX);
                                                                                                            switch (hs_wild2426DH4Z.tag) {
                                                                                                            case 1:
                                                                                                                var hs_wild2526DH4Y = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2625vil0);
                                                                                                                switch (hs_wild2526DH4Y.tag) {
                                                                                                                case 1:
                                                                                                                    var hs_wild2626DH4X = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2725vil3);
                                                                                                                    switch (hs_wild2626DH4X.tag) {
                                                                                                                    case 1:
                                                                                                                        var hs_wild2726DH4W = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2825vil7);
                                                                                                                        switch (hs_wild2726DH4W.tag) {
                                                                                                                        case 1:
                                                                                                                            var hs_wild2826DH4V = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a2925vila);
                                                                                                                            switch (hs_wild2826DH4V.tag) {
                                                                                                                            case 1:
                                                                                                                                var hs_wild2926DH4U = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3025vild);
                                                                                                                                switch (hs_wild2926DH4U.tag) {
                                                                                                                                case 1:
                                                                                                                                    var hs_wild3026DH4T = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3125vilg);
                                                                                                                                    switch (hs_wild3026DH4T.tag) {
                                                                                                                                    case 1:
                                                                                                                                        var hs_wild3126DH4S = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3225vilj);
                                                                                                                                        switch (hs_wild3126DH4S.tag) {
                                                                                                                                        case 1:
                                                                                                                                            var hs_wild3226DH4R = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3325vilm);
                                                                                                                                            switch (hs_wild3226DH4R.tag) {
                                                                                                                                            case 1:
                                                                                                                                                var hs_wild3326DH4Q = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3425vilp);
                                                                                                                                                switch (hs_wild3326DH4Q.tag) {
                                                                                                                                                case 1:
                                                                                                                                                    var hs_wild3426DH4P = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3525vils);
                                                                                                                                                    switch (hs_wild3426DH4P.tag) {
                                                                                                                                                    case 1:
                                                                                                                                                        var hs_wild3526DH4O = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3625vilv);
                                                                                                                                                        switch (hs_wild3526DH4O.tag) {
                                                                                                                                                        case 1:
                                                                                                                                                            var hs_wild3626DH4N = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3725vily);
                                                                                                                                                            switch (hs_wild3626DH4N.tag) {
                                                                                                                                                            case 1:
                                                                                                                                                                var hs_wild3726DH4M = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3825vilB);
                                                                                                                                                                switch (hs_wild3726DH4M.tag) {
                                                                                                                                                                case 1:
                                                                                                                                                                    var hs_wild3826DH4L = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a3925vilE);
                                                                                                                                                                    switch (hs_wild3826DH4L.tag) {
                                                                                                                                                                    case 1:
                                                                                                                                                                        var hs_wild3926DH4K = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4025vilH);
                                                                                                                                                                        switch (hs_wild3926DH4K.tag) {
                                                                                                                                                                        case 1:
                                                                                                                                                                            var hs_wild4026DH4J = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4125vilK);
                                                                                                                                                                            switch (hs_wild4026DH4J.tag) {
                                                                                                                                                                            case 1:
                                                                                                                                                                                var hs_wild4126DH4I = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4225vilN);
                                                                                                                                                                                switch (hs_wild4126DH4I.tag) {
                                                                                                                                                                                case 1:
                                                                                                                                                                                    var hs_wild4226DH4H = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4325vilQ);
                                                                                                                                                                                    switch (hs_wild4226DH4H.tag) {
                                                                                                                                                                                    case 1:
                                                                                                                                                                                        var hs_wild4326DH4G = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4425vilT);
                                                                                                                                                                                        switch (hs_wild4326DH4G.tag) {
                                                                                                                                                                                        case 1:
                                                                                                                                                                                            var hs_wild4426DH4F = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4525vilW);
                                                                                                                                                                                            switch (hs_wild4426DH4F.tag) {
                                                                                                                                                                                            case 1:
                                                                                                                                                                                                var hs_wild4526DH4E = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4625vilZ);
                                                                                                                                                                                                switch (hs_wild4526DH4E.tag) {
                                                                                                                                                                                                case 1:
                                                                                                                                                                                                    var hs_wild4626DH4D = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4725vim2);
                                                                                                                                                                                                    switch (hs_wild4626DH4D.tag) {
                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                        var hs_wild4726DH4C = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4825vim5);
                                                                                                                                                                                                        switch (hs_wild4726DH4C.tag) {
                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                            var hs_wild4826DH4B = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a4925vim8);
                                                                                                                                                                                                            switch (hs_wild4826DH4B.tag) {
                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                var hs_wild4926DH4A = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5025vimb);
                                                                                                                                                                                                                switch (hs_wild4926DH4A.tag) {
                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                    var hs_wild5026DH4z = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5125vime);
                                                                                                                                                                                                                    switch (hs_wild5026DH4z.tag) {
                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                        var hs_wild5126DH4y = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5225vimh);
                                                                                                                                                                                                                        switch (hs_wild5126DH4y.tag) {
                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                            var hs_wild5226DH4x = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5325vimk);
                                                                                                                                                                                                                            switch (hs_wild5226DH4x.tag) {
                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                var hs_wild5326DH4w = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5425vimn);
                                                                                                                                                                                                                                switch (hs_wild5326DH4w.tag) {
                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                    var hs_wild5426DH4v = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5525vimq);
                                                                                                                                                                                                                                    switch (hs_wild5426DH4v.tag) {
                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                        var hs_wild5526DH4u = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5625vimt);
                                                                                                                                                                                                                                        switch (hs_wild5526DH4u.tag) {
                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                            var hs_wild5626DH4t = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5725vimw);
                                                                                                                                                                                                                                            switch (hs_wild5626DH4t.tag) {
                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                var hs_wild5726DH4s = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5825vimz);
                                                                                                                                                                                                                                                switch (hs_wild5726DH4s.tag) {
                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                    var hs_wild5826DH4r = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a5925vimC);
                                                                                                                                                                                                                                                    switch (hs_wild5826DH4r.tag) {
                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                        var hs_wild5926DH4q = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6025vimF);
                                                                                                                                                                                                                                                        switch (hs_wild5926DH4q.tag) {
                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                            var hs_wild6026DH4p = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6125vimI);
                                                                                                                                                                                                                                                            switch (hs_wild6026DH4p.tag) {
                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                var hs_wild6126DH4o = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6225vimL);
                                                                                                                                                                                                                                                                switch (hs_wild6126DH4o.tag) {
                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                    var hs_wild6226DH4n = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6325vimO);
                                                                                                                                                                                                                                                                    switch (hs_wild6226DH4n.tag) {
                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                        var hs_wild6326DH4m = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6425vimR);
                                                                                                                                                                                                                                                                        switch (hs_wild6326DH4m.tag) {
                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                            var hs_wild6426DH4l = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6525vimU);
                                                                                                                                                                                                                                                                            switch (hs_wild6426DH4l.tag) {
                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                var hs_wild6526DH4k = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6625vimX);
                                                                                                                                                                                                                                                                                switch (hs_wild6526DH4k.tag) {
                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                    var hs_wild6626DH4j = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6725vin0);
                                                                                                                                                                                                                                                                                    switch (hs_wild6626DH4j.tag) {
                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                        var hs_wild6726DH4i = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6825vin3);
                                                                                                                                                                                                                                                                                        switch (hs_wild6726DH4i.tag) {
                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                            var hs_wild6826DH4h = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a6925vin6);
                                                                                                                                                                                                                                                                                            switch (hs_wild6826DH4h.tag) {
                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                var hs_wild6926DH4g = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7025vin9);
                                                                                                                                                                                                                                                                                                switch (hs_wild6926DH4g.tag) {
                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                    var hs_wild7026DH4f = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7125vinc);
                                                                                                                                                                                                                                                                                                    switch (hs_wild7026DH4f.tag) {
                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                        var hs_wild7126DH4e = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7225vinf);
                                                                                                                                                                                                                                                                                                        switch (hs_wild7126DH4e.tag) {
                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                            var hs_wild7226DH4d = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7325vini);
                                                                                                                                                                                                                                                                                                            switch (hs_wild7226DH4d.tag) {
                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                var hs_wild7326DH4c = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7425vinl);
                                                                                                                                                                                                                                                                                                                switch (hs_wild7326DH4c.tag) {
                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                    var hs_wild7426DH4b = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7525vinp);
                                                                                                                                                                                                                                                                                                                    switch (hs_wild7426DH4b.tag) {
                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                        var hs_wild7526DH4a = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7625vint);
                                                                                                                                                                                                                                                                                                                        switch (hs_wild7526DH4a.tag) {
                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                            var hs_wild7626DH49 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7725vinx);
                                                                                                                                                                                                                                                                                                                            switch (hs_wild7626DH49.tag) {
                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                var hs_wild7726DH48 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7825vinB);
                                                                                                                                                                                                                                                                                                                                switch (hs_wild7726DH48.tag) {
                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                    var hs_wild7826DH47 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a7925vinE);
                                                                                                                                                                                                                                                                                                                                    switch (hs_wild7826DH47.tag) {
                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                        var hs_wild7926DH46 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8025vinH);
                                                                                                                                                                                                                                                                                                                                        switch (hs_wild7926DH46.tag) {
                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                            var hs_wild8026DH45 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8125vinK);
                                                                                                                                                                                                                                                                                                                                            switch (hs_wild8026DH45.tag) {
                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                var hs_wild8126DH44 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8225vinN);
                                                                                                                                                                                                                                                                                                                                                switch (hs_wild8126DH44.tag) {
                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                    var hs_wild8226DH43 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8325vinQ);
                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild8226DH43.tag) {
                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                        var hs_wild8326DH42 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8425vinT);
                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild8326DH42.tag) {
                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                            var hs_wild8426DH41 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8525vinW);
                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild8426DH41.tag) {
                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                var hs_wild8526DH40 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8625vio0);
                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild8526DH40.tag) {
                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                    var hs_wild8626DH3Z = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8725vio4);
                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild8626DH3Z.tag) {
                                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                                        var hs_wild8726DH3Y = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8825vio7);
                                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild8726DH3Y.tag) {
                                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                                            var hs_wild8826DH3X = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a8925vioa);
                                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild8826DH3X.tag) {
                                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                                var hs_wild8926DH3W = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9025viod);
                                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild8926DH3W.tag) {
                                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                                    var hs_wild9026DH3V = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9125viog);
                                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild9026DH3V.tag) {
                                                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                                                        var hs_wild9126DH3U = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9225vioj);
                                                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild9126DH3U.tag) {
                                                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                                                            var hs_wild9226DH3T = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9325viom);
                                                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild9226DH3T.tag) {
                                                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                                                var hs_wild9326DH3S = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9425viop);
                                                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild9326DH3S.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                                                    var hs_wild9426DH3R = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9525vios);
                                                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild9426DH3R.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                                                                        var hs_wild9526DH3Q = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9625viov);
                                                                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild9526DH3Q.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                                                                            var hs_wild9626DH3P = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9725vioy);
                                                                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild9626DH3P.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                                                                var hs_wild9726DH3O = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9825vioB);
                                                                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild9726DH3O.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                                                                    var hs_wild9826DH3N = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DGVh, hs_a9925vioE);
                                                                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild9826DH3N.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(12);
                                                                                                                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(12);
                                                                                                                                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(4);
                                                                                                                                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(3);
                                                                                                                                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(4);
                                                                                                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(17);
                                                                                                                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(17);
                                                                                                                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(18);
                                                                                                                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(9);
                                                                                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(2);
                                                                                                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(6);
                                                                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(6);
                                                                                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(11);
                                                                                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(7);
                                                                                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(6);
                                                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(18);
                                                                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(11);
                                                                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(11);
                                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(11);
                                                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(11);
                                                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(7);
                                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(18);
                                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(7);
                                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                                var $res = new $hs.Data(2);
                                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                                            var $res = new $hs.Data(6);
                                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                                        var $res = new $hs.Data(13);
                                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                                    var $res = new $hs.Data(9);
                                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                                var $res = new $hs.Data(14);
                                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                                            var $res = new $hs.Data(13);
                                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                                        var $res = new $hs.Data(13);
                                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                                    var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                                var $res = new $hs.Data(13);
                                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                                            var $res = new $hs.Data(4);
                                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                                        var $res = new $hs.Data(4);
                                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                                    var $res = new $hs.Data(16);
                                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                                var $res = new $hs.Data(2);
                                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                                            var $res = new $hs.Data(2);
                                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                                        var $res = new $hs.Data(4);
                                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                                    var $res = new $hs.Data(18);
                                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                                var $res = new $hs.Data(4);
                                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                                            var $res = new $hs.Data(13);
                                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                                        var $res = new $hs.Data(2);
                                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                case 2:
                                                                                                                                                                                                                    var $res = new $hs.Data(16);
                                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                                }
                                                                                                                                                                                                            case 2:
                                                                                                                                                                                                                var $res = new $hs.Data(2);
                                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                                return $res;
                                                                                                                                                                                                            }
                                                                                                                                                                                                        case 2:
                                                                                                                                                                                                            var $res = new $hs.Data(4);
                                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                                            return $res;
                                                                                                                                                                                                        }
                                                                                                                                                                                                    case 2:
                                                                                                                                                                                                        var $res = new $hs.Data(4);
                                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                                        return $res;
                                                                                                                                                                                                    }
                                                                                                                                                                                                case 2:
                                                                                                                                                                                                    var $res = new $hs.Data(2);
                                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                                    return $res;
                                                                                                                                                                                                }
                                                                                                                                                                                            case 2:
                                                                                                                                                                                                var $res = new $hs.Data(18);
                                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                                return $res;
                                                                                                                                                                                            }
                                                                                                                                                                                        case 2:
                                                                                                                                                                                            var $res = new $hs.Data(18);
                                                                                                                                                                                            $res.data = [];
                                                                                                                                                                                            return $res;
                                                                                                                                                                                        }
                                                                                                                                                                                    case 2:
                                                                                                                                                                                        var $res = new $hs.Data(13);
                                                                                                                                                                                        $res.data = [];
                                                                                                                                                                                        return $res;
                                                                                                                                                                                    }
                                                                                                                                                                                case 2:
                                                                                                                                                                                    var $res = new $hs.Data(16);
                                                                                                                                                                                    $res.data = [];
                                                                                                                                                                                    return $res;
                                                                                                                                                                                }
                                                                                                                                                                            case 2:
                                                                                                                                                                                var $res = new $hs.Data(4);
                                                                                                                                                                                $res.data = [];
                                                                                                                                                                                return $res;
                                                                                                                                                                            }
                                                                                                                                                                        case 2:
                                                                                                                                                                            var $res = new $hs.Data(4);
                                                                                                                                                                            $res.data = [];
                                                                                                                                                                            return $res;
                                                                                                                                                                        }
                                                                                                                                                                    case 2:
                                                                                                                                                                        var $res = new $hs.Data(4);
                                                                                                                                                                        $res.data = [];
                                                                                                                                                                        return $res;
                                                                                                                                                                    }
                                                                                                                                                                case 2:
                                                                                                                                                                    var $res = new $hs.Data(13);
                                                                                                                                                                    $res.data = [];
                                                                                                                                                                    return $res;
                                                                                                                                                                }
                                                                                                                                                            case 2:
                                                                                                                                                                var $res = new $hs.Data(14);
                                                                                                                                                                $res.data = [];
                                                                                                                                                                return $res;
                                                                                                                                                            }
                                                                                                                                                        case 2:
                                                                                                                                                            var $res = new $hs.Data(1);
                                                                                                                                                            $res.data = [];
                                                                                                                                                            return $res;
                                                                                                                                                        }
                                                                                                                                                    case 2:
                                                                                                                                                        var $res = new $hs.Data(15);
                                                                                                                                                        $res.data = [];
                                                                                                                                                        return $res;
                                                                                                                                                    }
                                                                                                                                                case 2:
                                                                                                                                                    var $res = new $hs.Data(13);
                                                                                                                                                    $res.data = [];
                                                                                                                                                    return $res;
                                                                                                                                                }
                                                                                                                                            case 2:
                                                                                                                                                var $res = new $hs.Data(19);
                                                                                                                                                $res.data = [];
                                                                                                                                                return $res;
                                                                                                                                            }
                                                                                                                                        case 2:
                                                                                                                                            var $res = new $hs.Data(1);
                                                                                                                                            $res.data = [];
                                                                                                                                            return $res;
                                                                                                                                        }
                                                                                                                                    case 2:
                                                                                                                                        var $res = new $hs.Data(13);
                                                                                                                                        $res.data = [];
                                                                                                                                        return $res;
                                                                                                                                    }
                                                                                                                                case 2:
                                                                                                                                    var $res = new $hs.Data(18);
                                                                                                                                    $res.data = [];
                                                                                                                                    return $res;
                                                                                                                                }
                                                                                                                            case 2:
                                                                                                                                var $res = new $hs.Data(2);
                                                                                                                                $res.data = [];
                                                                                                                                return $res;
                                                                                                                            }
                                                                                                                        case 2:
                                                                                                                            var $res = new $hs.Data(2);
                                                                                                                            $res.data = [];
                                                                                                                            return $res;
                                                                                                                        }
                                                                                                                    case 2:
                                                                                                                        var $res = new $hs.Data(14);
                                                                                                                        $res.data = [];
                                                                                                                        return $res;
                                                                                                                    }
                                                                                                                case 2:
                                                                                                                    var $res = new $hs.Data(7);
                                                                                                                    $res.data = [];
                                                                                                                    return $res;
                                                                                                                }
                                                                                                            case 2:
                                                                                                                var $res = new $hs.Data(12);
                                                                                                                $res.data = [];
                                                                                                                return $res;
                                                                                                            }
                                                                                                        case 2:
                                                                                                            var $res = new $hs.Data(1);
                                                                                                            $res.data = [];
                                                                                                            return $res;
                                                                                                        }
                                                                                                    case 2:
                                                                                                        var $res = new $hs.Data(7);
                                                                                                        $res.data = [];
                                                                                                        return $res;
                                                                                                    }
                                                                                                case 2:
                                                                                                    var $res = new $hs.Data(13);
                                                                                                    $res.data = [];
                                                                                                    return $res;
                                                                                                }
                                                                                            case 2:
                                                                                                var $res = new $hs.Data(9);
                                                                                                $res.data = [];
                                                                                                return $res;
                                                                                            }
                                                                                        case 2:
                                                                                            var $res = new $hs.Data(13);
                                                                                            $res.data = [];
                                                                                            return $res;
                                                                                        }
                                                                                    case 2:
                                                                                        var $res = new $hs.Data(3);
                                                                                        $res.data = [];
                                                                                        return $res;
                                                                                    }
                                                                                case 2:
                                                                                    var $res = new $hs.Data(18);
                                                                                    $res.data = [];
                                                                                    return $res;
                                                                                }
                                                                            case 2:
                                                                                var $res = new $hs.Data(2);
                                                                                $res.data = [];
                                                                                return $res;
                                                                            }
                                                                        case 2:
                                                                            var $res = new $hs.Data(12);
                                                                            $res.data = [];
                                                                            return $res;
                                                                        }
                                                                    case 2:
                                                                        var $res = new $hs.Data(18);
                                                                        $res.data = [];
                                                                        return $res;
                                                                    }
                                                                case 2:
                                                                    var $res = new $hs.Data(2);
                                                                    $res.data = [];
                                                                    return $res;
                                                                }
                                                            case 2:
                                                                var $res = new $hs.Data(3);
                                                                $res.data = [];
                                                                return $res;
                                                            }
                                                        case 2:
                                                            var $res = new $hs.Data(12);
                                                            $res.data = [];
                                                            return $res;
                                                        }
                                                    case 2:
                                                        var $res = new $hs.Data(14);
                                                        $res.data = [];
                                                        return $res;
                                                    }
                                                case 2:
                                                    var $res = new $hs.Data(13);
                                                    $res.data = [];
                                                    return $res;
                                                }
                                            case 2:
                                                var $res = new $hs.Data(1);
                                                $res.data = [];
                                                return $res;
                                            }
                                        case 2:
                                            var $res = new $hs.Data(4);
                                            $res.data = [];
                                            return $res;
                                        }
                                    case 2:
                                        var $res = new $hs.Data(16);
                                        $res.data = [];
                                        return $res;
                                    }
                                case 2:
                                    var $res = new $hs.Data(12);
                                    $res.data = [];
                                    return $res;
                                }
                            case 2:
                                var $res = new $hs.Data(16);
                                $res.data = [];
                                return $res;
                            }
                        case 2:
                            var $res = new $hs.Data(3);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var $res = new $hs.Data(7);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(4);
                    $res.data = [];
                    return $res;
                }
            case 2:
                var $res = new $hs.Data(12);
                $res.data = [];
                return $res;
            }
        };
        var hs_sat26DH5x = new $hs.Thunk();
        hs_sat26DH5x.evaluateOnce = function () {
            var hs_sat26DH5s = new $hs.Func(1);
            hs_sat26DH5s.evaluate = function (hs_str26DGXd) {
                var hs_sat26DH5o = new $hs.Data(2);
                hs_sat26DH5o.data = [hs_errno26DGVh];
                var hs_sat26DH5p = new $hs.Data(1);
                hs_sat26DH5p.data = [hs_maybeHdl26DGXb, hs_errType26DGWT, hs_loc26DGXc, hs_str26DGXd, hs_sat26DH5o, hs_maybeName26DGXf];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DH5p);
            };
            var hs_sat26DH5w = new $hs.Thunk();
            hs_sat26DH5w.evaluateOnce = function () {
                var hs_sat26DH5v = new $hs.Thunk();
                hs_sat26DH5v.evaluateOnce = function () {
                    var hs_ds26DH5r = hs_errno26DGVh;
                    if (hs_errno26DGVh.notEvaluated) {
                        hs_ds26DH5r = hs_errno26DGVh.hscall();
                    }
                    var hs_ds126DGWY = hs_ds26DH5r.data[0];
                    var hs_sat26DH5u = new $hs.Func(1);
                    hs_sat26DH5u.evaluate = function (hs_ds226DGWZ) {
                        var hs_wild26DH5q = [hs_ds226DGWZ, strerror(hs_ds126DGWY)];
                        var hs_ds326DGX4 = hs_wild26DH5q[0];
                        var hs_ds426DGX5 = hs_wild26DH5q[1];
                        var hs_sat26DH5t = new $hs.Data(1);
                        hs_sat26DH5t.data = [hs_ds426DGX5];
                        return [hs_ds326DGX4, hs_sat26DH5t];
                    };
                    if (hs_sat26DH5u.notEvaluated) {
                        return hs_sat26DH5u.hscall();
                    } else {
                        return hs_sat26DH5u;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DH5v, $hs.modules.ForeignziCziString.hs_peekCString);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DH5w, hs_sat26DH5s);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DH5x);
    };
    hs_sat26DH5y.evaluate = function (hs_e26DGXk) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_e26DGXk);
    };
    this.hs_getErrno.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_getzuerrno25tG51, hs_sat26DH5y);
    };
    this.hs_throwErrno.evaluate = function (hs_loc26DGXo) {
        var hs_sat26DH5A = new $hs.Func(1);
        hs_sat26DH5A.evaluate = function (hs_errno26DGXp) {
            var hs_sat26DH5z = new $hs.Thunk();
            hs_sat26DH5z.evaluateOnce = function () {
                return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_loc26DGXo, hs_errno26DGXp, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26DH5z);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DH5A);
    };
    this.hs_throwErrnoIf.evaluate = function (hs_pred26DGXy, hs_loc26DGXA, hs_f26DGXv) {
        var hs_sat26DH5C = new $hs.Func(1);
        hs_sat26DH5C.evaluate = function (hs_res26DGXx) {
            var hs_wild26DH5B = hs_pred26DGXy.hscall(hs_res26DGXx);
            switch (hs_wild26DH5B.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DGXx);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DGXA);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DGXv, hs_sat26DH5C);
    };
    this.hs_throwErrnoIfzu.evaluate = function (hs_pred26DGXF, hs_loc26DGXG, hs_f26DGXH) {
        var hs_sat26DH5D = new $hs.Thunk();
        hs_sat26DH5D.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoIf.hscall(hs_pred26DGXF, hs_loc26DGXG, hs_f26DGXH);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH5D);
    };
    this.hs_throwErrnoIfMinus1zu.evaluate = function (hs_zddNum26DGXL) {
        var hs_zddEq26DGXM = new $hs.Thunk();
        hs_zddEq26DGXM.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DGXL);
        };
        var hs_ds26DGXQ = new $hs.Thunk();
        hs_ds26DGXQ.evaluateOnce = function () {
            var hs_sat26DH5F = new $hs.Thunk();
            hs_sat26DH5F.evaluateOnce = function () {
                var hs_sat26DH5E = new $hs.Thunk();
                hs_sat26DH5E.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DGXL, hs_sat26DH5E);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DGXL, hs_sat26DH5F);
        };
        var hs_sat26DH5H = new $hs.Func(2);
        hs_sat26DH5H.evaluate = function (hs_loc26DGXX, hs_f26DGXT) {
            var hs_sat26DH5G = new $hs.Thunk();
            hs_sat26DH5G.evaluateOnce = function () {
                var hs_sat26DGY1 = new $hs.Func(1);
                hs_sat26DGY1.evaluate = function (hs_res26DGXV) {
                    var hs_wild26DGY0 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGXM, hs_res26DGXV, hs_ds26DGXQ);
                    switch (hs_wild26DGY0.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DGXV);
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DGXX);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DGXT, hs_sat26DGY1);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH5G);
        };
        if (hs_sat26DH5H.notEvaluated) {
            return hs_sat26DH5H.hscall();
        } else {
            return hs_sat26DH5H;
        }
    };
    this.hs_throwErrnoIfMinus1.evaluate = function (hs_zddNum26DGY5) {
        var hs_zddEq26DGY6 = new $hs.Thunk();
        hs_zddEq26DGY6.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DGY5);
        };
        var hs_ds26DGYa = new $hs.Thunk();
        hs_ds26DGYa.evaluateOnce = function () {
            var hs_sat26DH5J = new $hs.Thunk();
            hs_sat26DH5J.evaluateOnce = function () {
                var hs_sat26DH5I = new $hs.Thunk();
                hs_sat26DH5I.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DGY5, hs_sat26DH5I);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DGY5, hs_sat26DH5J);
        };
        var hs_sat26DH5L = new $hs.Func(2);
        hs_sat26DH5L.evaluate = function (hs_loc26DGYh, hs_f26DGYd) {
            var hs_sat26DH5K = new $hs.Func(1);
            hs_sat26DH5K.evaluate = function (hs_res26DGYf) {
                var hs_wild26DGYj = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGY6, hs_res26DGYf, hs_ds26DGYa);
                switch (hs_wild26DGYj.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DGYf);
                case 2:
                    return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DGYh);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DGYd, hs_sat26DH5K);
        };
        if (hs_sat26DH5L.notEvaluated) {
            return hs_sat26DH5L.hscall();
        } else {
            return hs_sat26DH5L;
        }
    };
    this.hs_throwErrnoIfNull.evaluate = function (hs_loc26DGYr, hs_f26DGYn) {
        var hs_sat26DH5N = new $hs.Func(1);
        hs_sat26DH5N.evaluate = function (hs_res26DGYp) {
            var hs_wild26DH5M = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_res26DGYp, $hs.modules.GHCziPtr.hs_nullPtr);
            switch (hs_wild26DH5M.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DGYp);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DGYr);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DGYn, hs_sat26DH5N);
    };
    this.hs_throwErrnoIfRetry.evaluate = function (hs_pred26DGYz, hs_loc26DGYE, hs_f26DGYw) {
        var hs_sat26DH5R = new $hs.Func(1);
        hs_sat26DH5R.evaluate = function (hs_res26DGYy) {
            var hs_wild26DH5O = hs_pred26DGYz.hscall(hs_res26DGYy);
            switch (hs_wild26DH5O.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DGYy);
            case 2:
                var hs_sat26DH5Q = new $hs.Func(1);
                hs_sat26DH5Q.evaluate = function (hs_err26DGYC) {
                    var hs_wild126DH5P = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DGYC, hs_a3325vilm);
                    switch (hs_wild126DH5P.tag) {
                    case 1:
                        return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DGYE);
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_pred26DGYz, hs_loc26DGYE, hs_f26DGYw);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DH5Q);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DGYw, hs_sat26DH5R);
    };
    this.hs_throwErrnoIfRetryzu.evaluate = function (hs_pred26DGYK, hs_loc26DGYL, hs_f26DGYM) {
        var hs_sat26DH5S = new $hs.Thunk();
        hs_sat26DH5S.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_pred26DGYK, hs_loc26DGYL, hs_f26DGYM);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH5S);
    };
    this.hs_throwErrnoIfMinus1Retryzu.evaluate = function (hs_zddNum26DGYQ) {
        var hs_zddEq26DGYR = new $hs.Thunk();
        hs_zddEq26DGYR.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DGYQ);
        };
        var hs_ds26DGYV = new $hs.Thunk();
        hs_ds26DGYV.evaluateOnce = function () {
            var hs_sat26DH5U = new $hs.Thunk();
            hs_sat26DH5U.evaluateOnce = function () {
                var hs_sat26DH5T = new $hs.Thunk();
                hs_sat26DH5T.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DGYQ, hs_sat26DH5T);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DGYQ, hs_sat26DH5U);
        };
        var hs_pred26DGYZ = new $hs.Func(1);
        hs_pred26DGYZ.evaluate = function (hs_ds126DGYY) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGYR, hs_ds126DGYY, hs_ds26DGYV);
        };
        var hs_sat26DH5W = new $hs.Func(2);
        hs_sat26DH5W.evaluate = function (hs_loc26DGZ2, hs_f26DGZ3) {
            var hs_sat26DH5V = new $hs.Thunk();
            hs_sat26DH5V.evaluateOnce = function () {
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_pred26DGYZ, hs_loc26DGZ2, hs_f26DGZ3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH5V);
        };
        if (hs_sat26DH5W.notEvaluated) {
            return hs_sat26DH5W.hscall();
        } else {
            return hs_sat26DH5W;
        }
    };
    this.hs_throwErrnoIfMinus1Retry.evaluate = function (hs_zddNum26DGZ8) {
        var hs_zddEq26DGZ9 = new $hs.Thunk();
        hs_zddEq26DGZ9.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DGZ8);
        };
        var hs_ds26DGZd = new $hs.Thunk();
        hs_ds26DGZd.evaluateOnce = function () {
            var hs_sat26DH5Y = new $hs.Thunk();
            hs_sat26DH5Y.evaluateOnce = function () {
                var hs_sat26DH5X = new $hs.Thunk();
                hs_sat26DH5X.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DGZ8, hs_sat26DH5X);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DGZ8, hs_sat26DH5Y);
        };
        var hs_sat26DH5Z = new $hs.Func(1);
        hs_sat26DH5Z.evaluate = function (hs_ds126DGZf) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGZ9, hs_ds126DGZf, hs_ds26DGZd);
        };
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_sat26DH5Z);
    };
    hs_a10025vit2.evaluate = function (hs_ds26DGZk) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ds26DGZk, $hs.modules.GHCziPtr.hs_nullPtr);
    };
    this.hs_throwErrnoIfNullRetry.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_a10025vit2, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoIfRetryMayBlock.evaluate = function (hs_pred26DGZs, hs_loc26DGZA, hs_f26DGZp, hs_onzublock26DGZB) {
        var hs_sat26DH68 = new $hs.Func(1);
        hs_sat26DH68.evaluate = function (hs_res26DGZr) {
            var hs_wild26DH60 = hs_pred26DGZs.hscall(hs_res26DGZr);
            switch (hs_wild26DH60.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DGZr);
            case 2:
                var hs_sat26DH67 = new $hs.Func(1);
                hs_sat26DH67.evaluate = function (hs_err26DGZv) {
                    var hs_wild126DH61 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DGZv, hs_a3325vilm);
                    switch (hs_wild126DH61.tag) {
                    case 1:
                        var hs_sat26DH62 = new $hs.Thunk();
                        hs_sat26DH62.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DGZv, hs_a825vik6);
                        };
                        var hs_sat26DH64 = new $hs.Thunk();
                        hs_sat26DH64.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DGZv, hs_a9825vioB);
                        };
                        var hs_wild226DH63 = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DH64, hs_sat26DH62);
                        switch (hs_wild226DH63.tag) {
                        case 1:
                            return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DGZA);
                        case 2:
                            var hs_sat26DH66 = new $hs.Func(1);
                            hs_sat26DH66.evaluate = function (hs_ds26DH65) {
                                return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DGZs, hs_loc26DGZA, hs_f26DGZp, hs_onzublock26DGZB);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_onzublock26DGZB, hs_sat26DH66);
                        }
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DGZs, hs_loc26DGZA, hs_f26DGZp, hs_onzublock26DGZB);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DH67);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DGZp, hs_sat26DH68);
    };
    this.hs_throwErrnoIfRetryMayBlockzu.evaluate = function (hs_pred26DGZK, hs_loc26DGZL, hs_f26DGZM, hs_onzublock26DGZN) {
        var hs_sat26DH69 = new $hs.Thunk();
        hs_sat26DH69.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DGZK, hs_loc26DGZL, hs_f26DGZM, hs_onzublock26DGZN);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH69);
    };
    this.hs_throwErrnoIfMinus1RetryMayBlockzu.evaluate = function (hs_zddNum26DGZR) {
        var hs_zddEq26DGZS = new $hs.Thunk();
        hs_zddEq26DGZS.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DGZR);
        };
        var hs_ds26DGZW = new $hs.Thunk();
        hs_ds26DGZW.evaluateOnce = function () {
            var hs_sat26DH6b = new $hs.Thunk();
            hs_sat26DH6b.evaluateOnce = function () {
                var hs_sat26DH6a = new $hs.Thunk();
                hs_sat26DH6a.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DGZR, hs_sat26DH6a);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DGZR, hs_sat26DH6b);
        };
        var hs_pred26DH00 = new $hs.Func(1);
        hs_pred26DH00.evaluate = function (hs_ds126DGZZ) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DGZS, hs_ds126DGZZ, hs_ds26DGZW);
        };
        var hs_sat26DH6d = new $hs.Func(3);
        hs_sat26DH6d.evaluate = function (hs_loc26DH04, hs_f26DH05, hs_onzublock26DH06) {
            var hs_sat26DH6c = new $hs.Thunk();
            hs_sat26DH6c.evaluateOnce = function () {
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DH00, hs_loc26DH04, hs_f26DH05, hs_onzublock26DH06);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH6c);
        };
        if (hs_sat26DH6d.notEvaluated) {
            return hs_sat26DH6d.hscall();
        } else {
            return hs_sat26DH6d;
        }
    };
    this.hs_throwErrnoIfMinus1RetryMayBlock.evaluate = function (hs_zddNum26DH0b) {
        var hs_zddEq26DH0c = new $hs.Thunk();
        hs_zddEq26DH0c.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DH0b);
        };
        var hs_ds26DH0g = new $hs.Thunk();
        hs_ds26DH0g.evaluateOnce = function () {
            var hs_sat26DH6f = new $hs.Thunk();
            hs_sat26DH6f.evaluateOnce = function () {
                var hs_sat26DH6e = new $hs.Thunk();
                hs_sat26DH6e.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DH0b, hs_sat26DH6e);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DH0b, hs_sat26DH6f);
        };
        var hs_sat26DH6g = new $hs.Func(1);
        hs_sat26DH6g.evaluate = function (hs_ds126DH0i) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DH0c, hs_ds126DH0i, hs_ds26DH0g);
        };
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_sat26DH6g);
    };
    hs_a10125viu5.evaluate = function (hs_ds26DH0n) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ds26DH0n, $hs.modules.GHCziPtr.hs_nullPtr);
    };
    this.hs_throwErrnoIfNullRetryMayBlock.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_a10125viu5, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoPath.evaluate = function (hs_loc26DH0r, hs_path26DH0t) {
        var hs_sat26DH6j = new $hs.Func(1);
        hs_sat26DH6j.evaluate = function (hs_errno26DH0s) {
            var hs_sat26DH6i = new $hs.Thunk();
            hs_sat26DH6i.evaluateOnce = function () {
                var hs_sat26DH6h = new $hs.Data(2);
                hs_sat26DH6h.data = [hs_path26DH0t];
                return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_loc26DH0r, hs_errno26DH0s, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26DH6h);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26DH6i);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DH6j);
    };
    this.hs_throwErrnoPathIf.evaluate = function (hs_pred26DH0E, hs_loc26DH0G, hs_path26DH0H, hs_f26DH0B) {
        var hs_sat26DH6l = new $hs.Func(1);
        hs_sat26DH6l.evaluate = function (hs_res26DH0D) {
            var hs_wild26DH6k = hs_pred26DH0E.hscall(hs_res26DH0D);
            switch (hs_wild26DH6k.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DH0D);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DH0G, hs_path26DH0H);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DH0B, hs_sat26DH6l);
    };
    this.hs_throwErrnoPathIfzu.evaluate = function (hs_pred26DH0N, hs_loc26DH0O, hs_path26DH0P, hs_f26DH0Q) {
        var hs_sat26DH6m = new $hs.Thunk();
        hs_sat26DH6m.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoPathIf.hscall(hs_pred26DH0N, hs_loc26DH0O, hs_path26DH0P, hs_f26DH0Q);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH6m);
    };
    this.hs_throwErrnoPathIfMinus1zu.evaluate = function (hs_zddNum26DH0U) {
        var hs_zddEq26DH0V = new $hs.Thunk();
        hs_zddEq26DH0V.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DH0U);
        };
        var hs_ds26DH0Z = new $hs.Thunk();
        hs_ds26DH0Z.evaluateOnce = function () {
            var hs_sat26DH6o = new $hs.Thunk();
            hs_sat26DH6o.evaluateOnce = function () {
                var hs_sat26DH6n = new $hs.Thunk();
                hs_sat26DH6n.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DH0U, hs_sat26DH6n);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DH0U, hs_sat26DH6o);
        };
        var hs_sat26DH6q = new $hs.Func(3);
        hs_sat26DH6q.evaluate = function (hs_loc26DH17, hs_path26DH18, hs_f26DH13) {
            var hs_sat26DH6p = new $hs.Thunk();
            hs_sat26DH6p.evaluateOnce = function () {
                var hs_sat26DH1c = new $hs.Func(1);
                hs_sat26DH1c.evaluate = function (hs_res26DH15) {
                    var hs_wild26DH1b = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DH0V, hs_res26DH15, hs_ds26DH0Z);
                    switch (hs_wild26DH1b.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DH15);
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DH17, hs_path26DH18);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DH13, hs_sat26DH1c);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DH6p);
        };
        if (hs_sat26DH6q.notEvaluated) {
            return hs_sat26DH6q.hscall();
        } else {
            return hs_sat26DH6q;
        }
    };
    this.hs_throwErrnoPathIfNull.evaluate = function (hs_loc26DH1l, hs_path26DH1m, hs_f26DH1h) {
        var hs_sat26DH6s = new $hs.Func(1);
        hs_sat26DH6s.evaluate = function (hs_res26DH1j) {
            var hs_wild26DH6r = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_res26DH1j, $hs.modules.GHCziPtr.hs_nullPtr);
            switch (hs_wild26DH6r.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DH1j);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DH1l, hs_path26DH1m);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DH1h, hs_sat26DH6s);
    };
    this.hs_throwErrnoPathIfMinus1.evaluate = function (hs_zddNum26DH1q) {
        var hs_zddEq26DH1r = new $hs.Thunk();
        hs_zddEq26DH1r.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DH1q);
        };
        var hs_ds26DH1v = new $hs.Thunk();
        hs_ds26DH1v.evaluateOnce = function () {
            var hs_sat26DH6u = new $hs.Thunk();
            hs_sat26DH6u.evaluateOnce = function () {
                var hs_sat26DH6t = new $hs.Thunk();
                hs_sat26DH6t.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DH1q, hs_sat26DH6t);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DH1q, hs_sat26DH6u);
        };
        var hs_sat26DH6w = new $hs.Func(3);
        hs_sat26DH6w.evaluate = function (hs_loc26DH1D, hs_path26DH1E, hs_f26DH1z) {
            var hs_sat26DH6v = new $hs.Func(1);
            hs_sat26DH6v.evaluate = function (hs_res26DH1B) {
                var hs_wild26DH1G = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DH1r, hs_res26DH1B, hs_ds26DH1v);
                switch (hs_wild26DH1G.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DH1B);
                case 2:
                    return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DH1D, hs_path26DH1E);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DH1z, hs_sat26DH6v);
        };
        if (hs_sat26DH6w.notEvaluated) {
            return hs_sat26DH6w.hscall();
        } else {
            return hs_sat26DH6w;
        }
    };
    hs_a10225vivt.evaluate = function (hs_eta26DH1Q) {
        var hs_sat26DH6z = new $hs.Thunk();
        hs_sat26DH6z.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_ds26DH6y = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DH6z);
        var hs_ds126DH1P = hs_ds26DH6y.data[0];
        var hs_wild26DH6x = [hs_eta26DH1Q, __hscore_set_errno(hs_ds126DH1P)];
        var hs_ds226DH1U = hs_wild26DH6x[0];
        return [hs_ds226DH1U, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_resetErrno.evaluate = function (hs_eta1cW6l3) {
        return hs_a10225vivt.hscall(hs_eta1cW6l3);
    };
    this.hs_Errno.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziError.hs_Errno.hscall(hs_eta1cW6l3);
    };
};

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
    this.hs_isValidErrno.evaluate = function (hs_ds26DiK4) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_ds26DiK4);
    };
    this.hs_zdfEqErrno.notEvaluated = true;
    this.hs_zdfEqErrno.evaluate = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this;
    };
    this.hs_errnoToIOError.notEvaluated = true;
    this.hs_errnoToIOError.evaluate = function (hs_loc26DiMh, hs_errno26DiKm, hs_maybeHdl26DiMg, hs_maybeName26DiMk) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DiMh, hs_errno26DiKm, hs_maybeHdl26DiMg, hs_maybeName26DiMk);
    };
    this.hs_getErrno.evaluateOnce = function () {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_throwErrno.notEvaluated = true;
    this.hs_throwErrno.evaluate = function (hs_loc26DiMt) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DiMt);
    };
    this.hs_throwErrnoIf.notEvaluated = true;
    this.hs_throwErrnoIf.evaluate = function (hs_pred26DiMD, hs_loc26DiMF, hs_f26DiMA) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiMD, hs_loc26DiMF, hs_f26DiMA);
    };
    this.hs_throwErrnoIfzu.notEvaluated = true;
    this.hs_throwErrnoIfzu.evaluate = function (hs_pred26DiMK, hs_loc26DiML, hs_f26DiMM) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiMK, hs_loc26DiML, hs_f26DiMM);
    };
    this.hs_throwErrnoIfMinus1zu.notEvaluated = true;
    this.hs_throwErrnoIfMinus1zu.evaluate = function (hs_zddNum26DiMQ) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiMQ);
    };
    this.hs_throwErrnoIfMinus1.notEvaluated = true;
    this.hs_throwErrnoIfMinus1.evaluate = function (hs_zddNum26DiNa) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiNa);
    };
    this.hs_throwErrnoIfNull.notEvaluated = true;
    this.hs_throwErrnoIfNull.evaluate = function (hs_loc26DiNw, hs_f26DiNs) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DiNw, hs_f26DiNs);
    };
    this.hs_throwErrnoIfRetry.notEvaluated = true;
    this.hs_throwErrnoIfRetry.evaluate = function (hs_pred26DiNE, hs_loc26DiNJ, hs_f26DiNB) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiNE, hs_loc26DiNJ, hs_f26DiNB);
    };
    this.hs_throwErrnoIfRetryzu.notEvaluated = true;
    this.hs_throwErrnoIfRetryzu.evaluate = function (hs_pred26DiNP, hs_loc26DiNQ, hs_f26DiNR) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiNP, hs_loc26DiNQ, hs_f26DiNR);
    };
    this.hs_throwErrnoIfMinus1Retryzu.notEvaluated = true;
    this.hs_throwErrnoIfMinus1Retryzu.evaluate = function (hs_zddNum26DiNV) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiNV);
    };
    this.hs_throwErrnoIfMinus1Retry.notEvaluated = true;
    this.hs_throwErrnoIfMinus1Retry.evaluate = function (hs_zddNum26DiOd) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiOd);
    };
    this.hs_throwErrnoIfNullRetry.notEvaluated = true;
    this.hs_throwErrnoIfNullRetry.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoIfRetryMayBlock.notEvaluated = true;
    this.hs_throwErrnoIfRetryMayBlock.evaluate = function (hs_pred26DiOw, hs_loc26DiOE, hs_f26DiOt, hs_onzublock26DiOF) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiOw, hs_loc26DiOE, hs_f26DiOt, hs_onzublock26DiOF);
    };
    this.hs_throwErrnoIfRetryMayBlockzu.notEvaluated = true;
    this.hs_throwErrnoIfRetryMayBlockzu.evaluate = function (hs_pred26DiOP, hs_loc26DiOQ, hs_f26DiOR, hs_onzublock26DiOS) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiOP, hs_loc26DiOQ, hs_f26DiOR, hs_onzublock26DiOS);
    };
    this.hs_throwErrnoIfMinus1RetryMayBlockzu.notEvaluated = true;
    this.hs_throwErrnoIfMinus1RetryMayBlockzu.evaluate = function (hs_zddNum26DiOW) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiOW);
    };
    this.hs_throwErrnoIfMinus1RetryMayBlock.notEvaluated = true;
    this.hs_throwErrnoIfMinus1RetryMayBlock.evaluate = function (hs_zddNum26DiPg) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiPg);
    };
    this.hs_throwErrnoIfNullRetryMayBlock.notEvaluated = true;
    this.hs_throwErrnoIfNullRetryMayBlock.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoPath.notEvaluated = true;
    this.hs_throwErrnoPath.evaluate = function (hs_loc26DiPv, hs_path26DiPx) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DiPv, hs_path26DiPx);
    };
    this.hs_throwErrnoPathIf.notEvaluated = true;
    this.hs_throwErrnoPathIf.evaluate = function (hs_pred26DiPI, hs_loc26DiPK, hs_path26DiPL, hs_f26DiPF) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiPI, hs_loc26DiPK, hs_path26DiPL, hs_f26DiPF);
    };
    this.hs_throwErrnoPathIfzu.notEvaluated = true;
    this.hs_throwErrnoPathIfzu.evaluate = function (hs_pred26DiPR, hs_loc26DiPS, hs_path26DiPT, hs_f26DiPU) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_pred26DiPR, hs_loc26DiPS, hs_path26DiPT, hs_f26DiPU);
    };
    this.hs_throwErrnoPathIfMinus1zu.notEvaluated = true;
    this.hs_throwErrnoPathIfMinus1zu.evaluate = function (hs_zddNum26DiPY) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiPY);
    };
    this.hs_throwErrnoPathIfNull.notEvaluated = true;
    this.hs_throwErrnoPathIfNull.evaluate = function (hs_loc26DiQp, hs_path26DiQq, hs_f26DiQl) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_loc26DiQp, hs_path26DiQq, hs_f26DiQl);
    };
    this.hs_throwErrnoPathIfMinus1.notEvaluated = true;
    this.hs_throwErrnoPathIfMinus1.evaluate = function (hs_zddNum26DiQu) {
        $hs.modules.ForeignziCziError.loadDependencies();
        return this.evaluate(hs_zddNum26DiQu);
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
    var hs_a25uUah = new $hs.Func(1);
    var hs_getzuerrno25tq9N = new $hs.Func(1);
    var hs_sat26DiR0 = new $hs.Thunk();
    var hs_a125uUas = new $hs.Thunk();
    var hs_sat26DiR1 = new $hs.Thunk();
    var hs_a225uUau = new $hs.Thunk();
    var hs_sat26DiR2 = new $hs.Thunk();
    var hs_a325uUaw = new $hs.Thunk();
    var hs_sat26DiR3 = new $hs.Thunk();
    var hs_a425uUay = new $hs.Thunk();
    var hs_sat26DiR4 = new $hs.Thunk();
    var hs_a525uUaA = new $hs.Thunk();
    var hs_sat26DiR5 = new $hs.Thunk();
    var hs_a625uUaC = new $hs.Thunk();
    var hs_sat26DiR6 = new $hs.Thunk();
    var hs_a725uUaE = new $hs.Thunk();
    var hs_sat26DiR7 = new $hs.Thunk();
    var hs_a825uUaG = new $hs.Thunk();
    var hs_sat26DiR8 = new $hs.Thunk();
    var hs_a925uUaI = new $hs.Thunk();
    var hs_sat26DiR9 = new $hs.Thunk();
    var hs_a1025uUaK = new $hs.Thunk();
    var hs_sat26DiRa = new $hs.Thunk();
    var hs_a1125uUaM = new $hs.Thunk();
    var hs_sat26DiRc = new $hs.Thunk();
    var hs_a1225uUaO = new $hs.Thunk();
    var hs_sat26DiRd = new $hs.Thunk();
    var hs_a1325uUaR = new $hs.Thunk();
    var hs_sat26DiRe = new $hs.Thunk();
    var hs_a1425uUaT = new $hs.Thunk();
    var hs_sat26DiRf = new $hs.Thunk();
    var hs_a1525uUaV = new $hs.Thunk();
    var hs_sat26DiRg = new $hs.Thunk();
    var hs_a1625uUaX = new $hs.Thunk();
    var hs_sat26DiRh = new $hs.Thunk();
    var hs_a1725uUaZ = new $hs.Thunk();
    var hs_sat26DiRi = new $hs.Thunk();
    var hs_a1825uUb1 = new $hs.Thunk();
    var hs_sat26DiRj = new $hs.Thunk();
    var hs_a1925uUb3 = new $hs.Thunk();
    var hs_sat26DiRk = new $hs.Thunk();
    var hs_a2025uUb5 = new $hs.Thunk();
    var hs_sat26DiRm = new $hs.Thunk();
    var hs_a2125uUb7 = new $hs.Thunk();
    var hs_sat26DiRn = new $hs.Thunk();
    var hs_a2225uUba = new $hs.Thunk();
    var hs_sat26DiRo = new $hs.Thunk();
    var hs_a2325uUbc = new $hs.Thunk();
    var hs_sat26DiRp = new $hs.Thunk();
    var hs_a2425uUbe = new $hs.Thunk();
    var hs_sat26DiRq = new $hs.Thunk();
    var hs_a2525uUbg = new $hs.Thunk();
    var hs_sat26DiRr = new $hs.Thunk();
    var hs_a2625uUbi = new $hs.Thunk();
    var hs_sat26DiRt = new $hs.Thunk();
    var hs_a2725uUbk = new $hs.Thunk();
    var hs_sat26DiRu = new $hs.Thunk();
    var hs_a2825uUbn = new $hs.Thunk();
    var hs_sat26DiRv = new $hs.Thunk();
    var hs_a2925uUbp = new $hs.Thunk();
    var hs_sat26DiRw = new $hs.Thunk();
    var hs_a3025uUbr = new $hs.Thunk();
    var hs_sat26DiRx = new $hs.Thunk();
    var hs_a3125uUbt = new $hs.Thunk();
    var hs_sat26DiRy = new $hs.Thunk();
    var hs_a3225uUbv = new $hs.Thunk();
    var hs_sat26DiRz = new $hs.Thunk();
    var hs_a3325uUbx = new $hs.Thunk();
    var hs_sat26DiRA = new $hs.Thunk();
    var hs_a3425uUbz = new $hs.Thunk();
    var hs_sat26DiRB = new $hs.Thunk();
    var hs_a3525uUbB = new $hs.Thunk();
    var hs_sat26DiRC = new $hs.Thunk();
    var hs_a3625uUbD = new $hs.Thunk();
    var hs_sat26DiRD = new $hs.Thunk();
    var hs_a3725uUbF = new $hs.Thunk();
    var hs_sat26DiRE = new $hs.Thunk();
    var hs_a3825uUbH = new $hs.Thunk();
    var hs_sat26DiRF = new $hs.Thunk();
    var hs_a3925uUbJ = new $hs.Thunk();
    var hs_sat26DiRG = new $hs.Thunk();
    var hs_a4025uUbL = new $hs.Thunk();
    var hs_sat26DiRH = new $hs.Thunk();
    var hs_a4125uUbN = new $hs.Thunk();
    var hs_sat26DiRI = new $hs.Thunk();
    var hs_a4225uUbP = new $hs.Thunk();
    var hs_sat26DiRJ = new $hs.Thunk();
    var hs_a4325uUbR = new $hs.Thunk();
    var hs_sat26DiRK = new $hs.Thunk();
    var hs_a4425uUbT = new $hs.Thunk();
    var hs_sat26DiRL = new $hs.Thunk();
    var hs_a4525uUbV = new $hs.Thunk();
    var hs_sat26DiRM = new $hs.Thunk();
    var hs_a4625uUbX = new $hs.Thunk();
    var hs_sat26DiRN = new $hs.Thunk();
    var hs_a4725uUbZ = new $hs.Thunk();
    var hs_sat26DiRO = new $hs.Thunk();
    var hs_a4825uUc1 = new $hs.Thunk();
    var hs_sat26DiRP = new $hs.Thunk();
    var hs_a4925uUc3 = new $hs.Thunk();
    var hs_sat26DiRQ = new $hs.Thunk();
    var hs_a5025uUc5 = new $hs.Thunk();
    var hs_sat26DiRR = new $hs.Thunk();
    var hs_a5125uUc7 = new $hs.Thunk();
    var hs_sat26DiRS = new $hs.Thunk();
    var hs_a5225uUc9 = new $hs.Thunk();
    var hs_sat26DiRT = new $hs.Thunk();
    var hs_a5325uUcb = new $hs.Thunk();
    var hs_sat26DiRU = new $hs.Thunk();
    var hs_a5425uUcd = new $hs.Thunk();
    var hs_sat26DiRV = new $hs.Thunk();
    var hs_a5525uUcf = new $hs.Thunk();
    var hs_sat26DiRW = new $hs.Thunk();
    var hs_a5625uUch = new $hs.Thunk();
    var hs_sat26DiRX = new $hs.Thunk();
    var hs_a5725uUcj = new $hs.Thunk();
    var hs_sat26DiRY = new $hs.Thunk();
    var hs_a5825uUcl = new $hs.Thunk();
    var hs_sat26DiRZ = new $hs.Thunk();
    var hs_a5925uUcn = new $hs.Thunk();
    var hs_sat26DiS0 = new $hs.Thunk();
    var hs_a6025uUcp = new $hs.Thunk();
    var hs_sat26DiS1 = new $hs.Thunk();
    var hs_a6125uUcr = new $hs.Thunk();
    var hs_sat26DiS2 = new $hs.Thunk();
    var hs_a6225uUct = new $hs.Thunk();
    var hs_sat26DiS3 = new $hs.Thunk();
    var hs_a6325uUcv = new $hs.Thunk();
    var hs_sat26DiS4 = new $hs.Thunk();
    var hs_a6425uUcx = new $hs.Thunk();
    var hs_sat26DiS5 = new $hs.Thunk();
    var hs_a6525uUcz = new $hs.Thunk();
    var hs_sat26DiS6 = new $hs.Thunk();
    var hs_a6625uUcB = new $hs.Thunk();
    var hs_sat26DiS7 = new $hs.Thunk();
    var hs_a6725uUcD = new $hs.Thunk();
    var hs_sat26DiS8 = new $hs.Thunk();
    var hs_a6825uUcF = new $hs.Thunk();
    var hs_sat26DiS9 = new $hs.Thunk();
    var hs_a6925uUcH = new $hs.Thunk();
    var hs_sat26DiSa = new $hs.Thunk();
    var hs_a7025uUcJ = new $hs.Thunk();
    var hs_sat26DiSb = new $hs.Thunk();
    var hs_a7125uUcL = new $hs.Thunk();
    var hs_sat26DiSc = new $hs.Thunk();
    var hs_a7225uUcN = new $hs.Thunk();
    var hs_sat26DiSd = new $hs.Thunk();
    var hs_a7325uUcP = new $hs.Thunk();
    var hs_sat26DiSf = new $hs.Thunk();
    var hs_a7425uUcR = new $hs.Thunk();
    var hs_sat26DiSh = new $hs.Thunk();
    var hs_a7525uUcU = new $hs.Thunk();
    var hs_sat26DiSj = new $hs.Thunk();
    var hs_a7625uUcX = new $hs.Thunk();
    var hs_sat26DiSl = new $hs.Thunk();
    var hs_a7725uUd0 = new $hs.Thunk();
    var hs_sat26DiSm = new $hs.Thunk();
    var hs_a7825uUd3 = new $hs.Thunk();
    var hs_sat26DiSn = new $hs.Thunk();
    var hs_a7925uUd5 = new $hs.Thunk();
    var hs_sat26DiSo = new $hs.Thunk();
    var hs_a8025uUd7 = new $hs.Thunk();
    var hs_sat26DiSp = new $hs.Thunk();
    var hs_a8125uUd9 = new $hs.Thunk();
    var hs_sat26DiSq = new $hs.Thunk();
    var hs_a8225uUdb = new $hs.Thunk();
    var hs_sat26DiSr = new $hs.Thunk();
    var hs_a8325uUdd = new $hs.Thunk();
    var hs_sat26DiSs = new $hs.Thunk();
    var hs_a8425uUdf = new $hs.Thunk();
    var hs_sat26DiSu = new $hs.Thunk();
    var hs_a8525uUdh = new $hs.Thunk();
    var hs_sat26DiSw = new $hs.Thunk();
    var hs_a8625uUdk = new $hs.Thunk();
    var hs_sat26DiSx = new $hs.Thunk();
    var hs_a8725uUdn = new $hs.Thunk();
    var hs_sat26DiSy = new $hs.Thunk();
    var hs_a8825uUdp = new $hs.Thunk();
    var hs_sat26DiSz = new $hs.Thunk();
    var hs_a8925uUdr = new $hs.Thunk();
    var hs_sat26DiSA = new $hs.Thunk();
    var hs_a9025uUdt = new $hs.Thunk();
    var hs_sat26DiSB = new $hs.Thunk();
    var hs_a9125uUdv = new $hs.Thunk();
    var hs_sat26DiSC = new $hs.Thunk();
    var hs_a9225uUdx = new $hs.Thunk();
    var hs_sat26DiSD = new $hs.Thunk();
    var hs_a9325uUdz = new $hs.Thunk();
    var hs_sat26DiSE = new $hs.Thunk();
    var hs_a9425uUdB = new $hs.Thunk();
    var hs_sat26DiSF = new $hs.Thunk();
    var hs_a9525uUdD = new $hs.Thunk();
    var hs_sat26DiSG = new $hs.Thunk();
    var hs_a9625uUdF = new $hs.Thunk();
    var hs_sat26DiSH = new $hs.Thunk();
    var hs_a9725uUdH = new $hs.Thunk();
    var hs_sat26DiSI = new $hs.Thunk();
    var hs_a9825uUdJ = new $hs.Thunk();
    var hs_sat26DiSJ = new $hs.Thunk();
    var hs_a9925uUdL = new $hs.Thunk();
    var hs_zdczeze25uUdS = new $hs.Func(2);
    var hs_zdczsze25uUe0 = new $hs.Thunk();
    var hs_sat26DiUB = new $hs.Func(1);
    var hs_a10025uUi6 = new $hs.Func(1);
    var hs_a10125uUj9 = new $hs.Func(1);
    var hs_a10225uUkw = new $hs.Func(1);
    hs_a25uUah.evaluate = function (hs_ds26DiGA) {
        var hs_wild26DiQZ = [hs_ds26DiGA, __hscore_get_errno()];
        var hs_ds126DiGF = hs_wild26DiQZ[0];
        var hs_ds226DiGG = hs_wild26DiQZ[1];
        var hs_sat26DiQY = new $hs.Data(1);
        hs_sat26DiQY.data = [hs_ds226DiGG];
        return [hs_ds126DiGF, hs_sat26DiQY];
    };
    hs_getzuerrno25tq9N.evaluate = function (hs_eta1cW6l3) {
        return hs_a25uUah.hscall(hs_eta1cW6l3);
    };
    hs_sat26DiR0.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_a125uUas.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR0);
    };
    this.hs_eOK.evaluateOnce = function () {
        if (hs_a125uUas.notEvaluated) {
            return hs_a125uUas.hscall();
        } else {
            return hs_a125uUas;
        }
    };
    hs_sat26DiR1.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(7);
    };
    hs_a225uUau.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR1);
    };
    this.hs_e2BIG.evaluateOnce = function () {
        if (hs_a225uUau.notEvaluated) {
            return hs_a225uUau.hscall();
        } else {
            return hs_a225uUau;
        }
    };
    hs_sat26DiR2.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(13);
    };
    hs_a325uUaw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR2);
    };
    this.hs_eACCES.evaluateOnce = function () {
        if (hs_a325uUaw.notEvaluated) {
            return hs_a325uUaw.hscall();
        } else {
            return hs_a325uUaw;
        }
    };
    hs_sat26DiR3.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(98);
    };
    hs_a425uUay.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR3);
    };
    this.hs_eADDRINUSE.evaluateOnce = function () {
        if (hs_a425uUay.notEvaluated) {
            return hs_a425uUay.hscall();
        } else {
            return hs_a425uUay;
        }
    };
    hs_sat26DiR4.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(99);
    };
    hs_a525uUaA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR4);
    };
    this.hs_eADDRNOTAVAIL.evaluateOnce = function () {
        if (hs_a525uUaA.notEvaluated) {
            return hs_a525uUaA.hscall();
        } else {
            return hs_a525uUaA;
        }
    };
    hs_sat26DiR5.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(68);
    };
    hs_a625uUaC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR5);
    };
    this.hs_eADV.evaluateOnce = function () {
        if (hs_a625uUaC.notEvaluated) {
            return hs_a625uUaC.hscall();
        } else {
            return hs_a625uUaC;
        }
    };
    hs_sat26DiR6.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(97);
    };
    hs_a725uUaE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR6);
    };
    this.hs_eAFNOSUPPORT.evaluateOnce = function () {
        if (hs_a725uUaE.notEvaluated) {
            return hs_a725uUaE.hscall();
        } else {
            return hs_a725uUaE;
        }
    };
    hs_sat26DiR7.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(11);
    };
    hs_a825uUaG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR7);
    };
    this.hs_eAGAIN.evaluateOnce = function () {
        if (hs_a825uUaG.notEvaluated) {
            return hs_a825uUaG.hscall();
        } else {
            return hs_a825uUaG;
        }
    };
    hs_sat26DiR8.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(114);
    };
    hs_a925uUaI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR8);
    };
    this.hs_eALREADY.evaluateOnce = function () {
        if (hs_a925uUaI.notEvaluated) {
            return hs_a925uUaI.hscall();
        } else {
            return hs_a925uUaI;
        }
    };
    hs_sat26DiR9.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(9);
    };
    hs_a1025uUaK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiR9);
    };
    this.hs_eBADF.evaluateOnce = function () {
        if (hs_a1025uUaK.notEvaluated) {
            return hs_a1025uUaK.hscall();
        } else {
            return hs_a1025uUaK;
        }
    };
    hs_sat26DiRa.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(74);
    };
    hs_a1125uUaM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRa);
    };
    this.hs_eBADMSG.evaluateOnce = function () {
        if (hs_a1125uUaM.notEvaluated) {
            return hs_a1125uUaM.hscall();
        } else {
            return hs_a1125uUaM;
        }
    };
    hs_sat26DiRc.evaluateOnce = function () {
        var hs_sat26DiRb = new $hs.Thunk();
        hs_sat26DiRb.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRb);
    };
    hs_a1225uUaO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRc);
    };
    this.hs_eBADRPC.evaluateOnce = function () {
        if (hs_a1225uUaO.notEvaluated) {
            return hs_a1225uUaO.hscall();
        } else {
            return hs_a1225uUaO;
        }
    };
    hs_sat26DiRd.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
    };
    hs_a1325uUaR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRd);
    };
    this.hs_eBUSY.evaluateOnce = function () {
        if (hs_a1325uUaR.notEvaluated) {
            return hs_a1325uUaR.hscall();
        } else {
            return hs_a1325uUaR;
        }
    };
    hs_sat26DiRe.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(10);
    };
    hs_a1425uUaT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRe);
    };
    this.hs_eCHILD.evaluateOnce = function () {
        if (hs_a1425uUaT.notEvaluated) {
            return hs_a1425uUaT.hscall();
        } else {
            return hs_a1425uUaT;
        }
    };
    hs_sat26DiRf.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(70);
    };
    hs_a1525uUaV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRf);
    };
    this.hs_eCOMM.evaluateOnce = function () {
        if (hs_a1525uUaV.notEvaluated) {
            return hs_a1525uUaV.hscall();
        } else {
            return hs_a1525uUaV;
        }
    };
    hs_sat26DiRg.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(103);
    };
    hs_a1625uUaX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRg);
    };
    this.hs_eCONNABORTED.evaluateOnce = function () {
        if (hs_a1625uUaX.notEvaluated) {
            return hs_a1625uUaX.hscall();
        } else {
            return hs_a1625uUaX;
        }
    };
    hs_sat26DiRh.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(111);
    };
    hs_a1725uUaZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRh);
    };
    this.hs_eCONNREFUSED.evaluateOnce = function () {
        if (hs_a1725uUaZ.notEvaluated) {
            return hs_a1725uUaZ.hscall();
        } else {
            return hs_a1725uUaZ;
        }
    };
    hs_sat26DiRi.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(104);
    };
    hs_a1825uUb1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRi);
    };
    this.hs_eCONNRESET.evaluateOnce = function () {
        if (hs_a1825uUb1.notEvaluated) {
            return hs_a1825uUb1.hscall();
        } else {
            return hs_a1825uUb1;
        }
    };
    hs_sat26DiRj.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(35);
    };
    hs_a1925uUb3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRj);
    };
    this.hs_eDEADLK.evaluateOnce = function () {
        if (hs_a1925uUb3.notEvaluated) {
            return hs_a1925uUb3.hscall();
        } else {
            return hs_a1925uUb3;
        }
    };
    hs_sat26DiRk.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(89);
    };
    hs_a2025uUb5.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRk);
    };
    this.hs_eDESTADDRREQ.evaluateOnce = function () {
        if (hs_a2025uUb5.notEvaluated) {
            return hs_a2025uUb5.hscall();
        } else {
            return hs_a2025uUb5;
        }
    };
    hs_sat26DiRm.evaluateOnce = function () {
        var hs_sat26DiRl = new $hs.Thunk();
        hs_sat26DiRl.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRl);
    };
    hs_a2125uUb7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRm);
    };
    this.hs_eDIRTY.evaluateOnce = function () {
        if (hs_a2125uUb7.notEvaluated) {
            return hs_a2125uUb7.hscall();
        } else {
            return hs_a2125uUb7;
        }
    };
    hs_sat26DiRn.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(33);
    };
    hs_a2225uUba.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRn);
    };
    this.hs_eDOM.evaluateOnce = function () {
        if (hs_a2225uUba.notEvaluated) {
            return hs_a2225uUba.hscall();
        } else {
            return hs_a2225uUba;
        }
    };
    hs_sat26DiRo.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(122);
    };
    hs_a2325uUbc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRo);
    };
    this.hs_eDQUOT.evaluateOnce = function () {
        if (hs_a2325uUbc.notEvaluated) {
            return hs_a2325uUbc.hscall();
        } else {
            return hs_a2325uUbc;
        }
    };
    hs_sat26DiRp.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(17);
    };
    hs_a2425uUbe.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRp);
    };
    this.hs_eEXIST.evaluateOnce = function () {
        if (hs_a2425uUbe.notEvaluated) {
            return hs_a2425uUbe.hscall();
        } else {
            return hs_a2425uUbe;
        }
    };
    hs_sat26DiRq.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(14);
    };
    hs_a2525uUbg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRq);
    };
    this.hs_eFAULT.evaluateOnce = function () {
        if (hs_a2525uUbg.notEvaluated) {
            return hs_a2525uUbg.hscall();
        } else {
            return hs_a2525uUbg;
        }
    };
    hs_sat26DiRr.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(27);
    };
    hs_a2625uUbi.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRr);
    };
    this.hs_eFBIG.evaluateOnce = function () {
        if (hs_a2625uUbi.notEvaluated) {
            return hs_a2625uUbi.hscall();
        } else {
            return hs_a2625uUbi;
        }
    };
    hs_sat26DiRt.evaluateOnce = function () {
        var hs_sat26DiRs = new $hs.Thunk();
        hs_sat26DiRs.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRs);
    };
    hs_a2725uUbk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRt);
    };
    this.hs_eFTYPE.evaluateOnce = function () {
        if (hs_a2725uUbk.notEvaluated) {
            return hs_a2725uUbk.hscall();
        } else {
            return hs_a2725uUbk;
        }
    };
    hs_sat26DiRu.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(112);
    };
    hs_a2825uUbn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRu);
    };
    this.hs_eHOSTDOWN.evaluateOnce = function () {
        if (hs_a2825uUbn.notEvaluated) {
            return hs_a2825uUbn.hscall();
        } else {
            return hs_a2825uUbn;
        }
    };
    hs_sat26DiRv.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(113);
    };
    hs_a2925uUbp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRv);
    };
    this.hs_eHOSTUNREACH.evaluateOnce = function () {
        if (hs_a2925uUbp.notEvaluated) {
            return hs_a2925uUbp.hscall();
        } else {
            return hs_a2925uUbp;
        }
    };
    hs_sat26DiRw.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(43);
    };
    hs_a3025uUbr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRw);
    };
    this.hs_eIDRM.evaluateOnce = function () {
        if (hs_a3025uUbr.notEvaluated) {
            return hs_a3025uUbr.hscall();
        } else {
            return hs_a3025uUbr;
        }
    };
    hs_sat26DiRx.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(84);
    };
    hs_a3125uUbt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRx);
    };
    this.hs_eILSEQ.evaluateOnce = function () {
        if (hs_a3125uUbt.notEvaluated) {
            return hs_a3125uUbt.hscall();
        } else {
            return hs_a3125uUbt;
        }
    };
    hs_sat26DiRy.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(115);
    };
    hs_a3225uUbv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRy);
    };
    this.hs_eINPROGRESS.evaluateOnce = function () {
        if (hs_a3225uUbv.notEvaluated) {
            return hs_a3225uUbv.hscall();
        } else {
            return hs_a3225uUbv;
        }
    };
    hs_sat26DiRz.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
    };
    hs_a3325uUbx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRz);
    };
    this.hs_eINTR.evaluateOnce = function () {
        if (hs_a3325uUbx.notEvaluated) {
            return hs_a3325uUbx.hscall();
        } else {
            return hs_a3325uUbx;
        }
    };
    hs_sat26DiRA.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(22);
    };
    hs_a3425uUbz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRA);
    };
    this.hs_eINVAL.evaluateOnce = function () {
        if (hs_a3425uUbz.notEvaluated) {
            return hs_a3425uUbz.hscall();
        } else {
            return hs_a3425uUbz;
        }
    };
    hs_sat26DiRB.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(5);
    };
    hs_a3525uUbB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRB);
    };
    this.hs_eIO.evaluateOnce = function () {
        if (hs_a3525uUbB.notEvaluated) {
            return hs_a3525uUbB.hscall();
        } else {
            return hs_a3525uUbB;
        }
    };
    hs_sat26DiRC.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(106);
    };
    hs_a3625uUbD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRC);
    };
    this.hs_eISCONN.evaluateOnce = function () {
        if (hs_a3625uUbD.notEvaluated) {
            return hs_a3625uUbD.hscall();
        } else {
            return hs_a3625uUbD;
        }
    };
    hs_sat26DiRD.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(21);
    };
    hs_a3725uUbF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRD);
    };
    this.hs_eISDIR.evaluateOnce = function () {
        if (hs_a3725uUbF.notEvaluated) {
            return hs_a3725uUbF.hscall();
        } else {
            return hs_a3725uUbF;
        }
    };
    hs_sat26DiRE.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(40);
    };
    hs_a3825uUbH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRE);
    };
    this.hs_eLOOP.evaluateOnce = function () {
        if (hs_a3825uUbH.notEvaluated) {
            return hs_a3825uUbH.hscall();
        } else {
            return hs_a3825uUbH;
        }
    };
    hs_sat26DiRF.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(24);
    };
    hs_a3925uUbJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRF);
    };
    this.hs_eMFILE.evaluateOnce = function () {
        if (hs_a3925uUbJ.notEvaluated) {
            return hs_a3925uUbJ.hscall();
        } else {
            return hs_a3925uUbJ;
        }
    };
    hs_sat26DiRG.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(31);
    };
    hs_a4025uUbL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRG);
    };
    this.hs_eMLINK.evaluateOnce = function () {
        if (hs_a4025uUbL.notEvaluated) {
            return hs_a4025uUbL.hscall();
        } else {
            return hs_a4025uUbL;
        }
    };
    hs_sat26DiRH.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(90);
    };
    hs_a4125uUbN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRH);
    };
    this.hs_eMSGSIZZE.evaluateOnce = function () {
        if (hs_a4125uUbN.notEvaluated) {
            return hs_a4125uUbN.hscall();
        } else {
            return hs_a4125uUbN;
        }
    };
    hs_sat26DiRI.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(72);
    };
    hs_a4225uUbP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRI);
    };
    this.hs_eMULTIHOP.evaluateOnce = function () {
        if (hs_a4225uUbP.notEvaluated) {
            return hs_a4225uUbP.hscall();
        } else {
            return hs_a4225uUbP;
        }
    };
    hs_sat26DiRJ.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(36);
    };
    hs_a4325uUbR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRJ);
    };
    this.hs_eNAMETOOLONG.evaluateOnce = function () {
        if (hs_a4325uUbR.notEvaluated) {
            return hs_a4325uUbR.hscall();
        } else {
            return hs_a4325uUbR;
        }
    };
    hs_sat26DiRK.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(100);
    };
    hs_a4425uUbT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRK);
    };
    this.hs_eNETDOWN.evaluateOnce = function () {
        if (hs_a4425uUbT.notEvaluated) {
            return hs_a4425uUbT.hscall();
        } else {
            return hs_a4425uUbT;
        }
    };
    hs_sat26DiRL.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(102);
    };
    hs_a4525uUbV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRL);
    };
    this.hs_eNETRESET.evaluateOnce = function () {
        if (hs_a4525uUbV.notEvaluated) {
            return hs_a4525uUbV.hscall();
        } else {
            return hs_a4525uUbV;
        }
    };
    hs_sat26DiRM.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(101);
    };
    hs_a4625uUbX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRM);
    };
    this.hs_eNETUNREACH.evaluateOnce = function () {
        if (hs_a4625uUbX.notEvaluated) {
            return hs_a4625uUbX.hscall();
        } else {
            return hs_a4625uUbX;
        }
    };
    hs_sat26DiRN.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(23);
    };
    hs_a4725uUbZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRN);
    };
    this.hs_eNFILE.evaluateOnce = function () {
        if (hs_a4725uUbZ.notEvaluated) {
            return hs_a4725uUbZ.hscall();
        } else {
            return hs_a4725uUbZ;
        }
    };
    hs_sat26DiRO.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(105);
    };
    hs_a4825uUc1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRO);
    };
    this.hs_eNOBUFS.evaluateOnce = function () {
        if (hs_a4825uUc1.notEvaluated) {
            return hs_a4825uUc1.hscall();
        } else {
            return hs_a4825uUc1;
        }
    };
    hs_sat26DiRP.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(61);
    };
    hs_a4925uUc3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRP);
    };
    this.hs_eNODATA.evaluateOnce = function () {
        if (hs_a4925uUc3.notEvaluated) {
            return hs_a4925uUc3.hscall();
        } else {
            return hs_a4925uUc3;
        }
    };
    hs_sat26DiRQ.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(19);
    };
    hs_a5025uUc5.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRQ);
    };
    this.hs_eNODEV.evaluateOnce = function () {
        if (hs_a5025uUc5.notEvaluated) {
            return hs_a5025uUc5.hscall();
        } else {
            return hs_a5025uUc5;
        }
    };
    hs_sat26DiRR.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    hs_a5125uUc7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRR);
    };
    this.hs_eNOENT.evaluateOnce = function () {
        if (hs_a5125uUc7.notEvaluated) {
            return hs_a5125uUc7.hscall();
        } else {
            return hs_a5125uUc7;
        }
    };
    hs_sat26DiRS.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
    };
    hs_a5225uUc9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRS);
    };
    this.hs_eNOEXEC.evaluateOnce = function () {
        if (hs_a5225uUc9.notEvaluated) {
            return hs_a5225uUc9.hscall();
        } else {
            return hs_a5225uUc9;
        }
    };
    hs_sat26DiRT.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(37);
    };
    hs_a5325uUcb.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRT);
    };
    this.hs_eNOLCK.evaluateOnce = function () {
        if (hs_a5325uUcb.notEvaluated) {
            return hs_a5325uUcb.hscall();
        } else {
            return hs_a5325uUcb;
        }
    };
    hs_sat26DiRU.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(67);
    };
    hs_a5425uUcd.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRU);
    };
    this.hs_eNOLINK.evaluateOnce = function () {
        if (hs_a5425uUcd.notEvaluated) {
            return hs_a5425uUcd.hscall();
        } else {
            return hs_a5425uUcd;
        }
    };
    hs_sat26DiRV.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(12);
    };
    hs_a5525uUcf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRV);
    };
    this.hs_eNOMEM.evaluateOnce = function () {
        if (hs_a5525uUcf.notEvaluated) {
            return hs_a5525uUcf.hscall();
        } else {
            return hs_a5525uUcf;
        }
    };
    hs_sat26DiRW.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(42);
    };
    hs_a5625uUch.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRW);
    };
    this.hs_eNOMSG.evaluateOnce = function () {
        if (hs_a5625uUch.notEvaluated) {
            return hs_a5625uUch.hscall();
        } else {
            return hs_a5625uUch;
        }
    };
    hs_sat26DiRX.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(64);
    };
    hs_a5725uUcj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRX);
    };
    this.hs_eNONET.evaluateOnce = function () {
        if (hs_a5725uUcj.notEvaluated) {
            return hs_a5725uUcj.hscall();
        } else {
            return hs_a5725uUcj;
        }
    };
    hs_sat26DiRY.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(92);
    };
    hs_a5825uUcl.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRY);
    };
    this.hs_eNOPROTOOPT.evaluateOnce = function () {
        if (hs_a5825uUcl.notEvaluated) {
            return hs_a5825uUcl.hscall();
        } else {
            return hs_a5825uUcl;
        }
    };
    hs_sat26DiRZ.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(28);
    };
    hs_a5925uUcn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiRZ);
    };
    this.hs_eNOSPC.evaluateOnce = function () {
        if (hs_a5925uUcn.notEvaluated) {
            return hs_a5925uUcn.hscall();
        } else {
            return hs_a5925uUcn;
        }
    };
    hs_sat26DiS0.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(63);
    };
    hs_a6025uUcp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS0);
    };
    this.hs_eNOSR.evaluateOnce = function () {
        if (hs_a6025uUcp.notEvaluated) {
            return hs_a6025uUcp.hscall();
        } else {
            return hs_a6025uUcp;
        }
    };
    hs_sat26DiS1.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(60);
    };
    hs_a6125uUcr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS1);
    };
    this.hs_eNOSTR.evaluateOnce = function () {
        if (hs_a6125uUcr.notEvaluated) {
            return hs_a6125uUcr.hscall();
        } else {
            return hs_a6125uUcr;
        }
    };
    hs_sat26DiS2.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(38);
    };
    hs_a6225uUct.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS2);
    };
    this.hs_eNOSYS.evaluateOnce = function () {
        if (hs_a6225uUct.notEvaluated) {
            return hs_a6225uUct.hscall();
        } else {
            return hs_a6225uUct;
        }
    };
    hs_sat26DiS3.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(15);
    };
    hs_a6325uUcv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS3);
    };
    this.hs_eNOTBLK.evaluateOnce = function () {
        if (hs_a6325uUcv.notEvaluated) {
            return hs_a6325uUcv.hscall();
        } else {
            return hs_a6325uUcv;
        }
    };
    hs_sat26DiS4.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(107);
    };
    hs_a6425uUcx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS4);
    };
    this.hs_eNOTCONN.evaluateOnce = function () {
        if (hs_a6425uUcx.notEvaluated) {
            return hs_a6425uUcx.hscall();
        } else {
            return hs_a6425uUcx;
        }
    };
    hs_sat26DiS5.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(20);
    };
    hs_a6525uUcz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS5);
    };
    this.hs_eNOTDIR.evaluateOnce = function () {
        if (hs_a6525uUcz.notEvaluated) {
            return hs_a6525uUcz.hscall();
        } else {
            return hs_a6525uUcz;
        }
    };
    hs_sat26DiS6.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(39);
    };
    hs_a6625uUcB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS6);
    };
    this.hs_eNOTEMPTY.evaluateOnce = function () {
        if (hs_a6625uUcB.notEvaluated) {
            return hs_a6625uUcB.hscall();
        } else {
            return hs_a6625uUcB;
        }
    };
    hs_sat26DiS7.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(88);
    };
    hs_a6725uUcD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS7);
    };
    this.hs_eNOTSOCK.evaluateOnce = function () {
        if (hs_a6725uUcD.notEvaluated) {
            return hs_a6725uUcD.hscall();
        } else {
            return hs_a6725uUcD;
        }
    };
    hs_sat26DiS8.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(25);
    };
    hs_a6825uUcF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS8);
    };
    this.hs_eNOTTY.evaluateOnce = function () {
        if (hs_a6825uUcF.notEvaluated) {
            return hs_a6825uUcF.hscall();
        } else {
            return hs_a6825uUcF;
        }
    };
    hs_sat26DiS9.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(6);
    };
    hs_a6925uUcH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiS9);
    };
    this.hs_eNXIO.evaluateOnce = function () {
        if (hs_a6925uUcH.notEvaluated) {
            return hs_a6925uUcH.hscall();
        } else {
            return hs_a6925uUcH;
        }
    };
    hs_sat26DiSa.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(95);
    };
    hs_a7025uUcJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSa);
    };
    this.hs_eOPNOTSUPP.evaluateOnce = function () {
        if (hs_a7025uUcJ.notEvaluated) {
            return hs_a7025uUcJ.hscall();
        } else {
            return hs_a7025uUcJ;
        }
    };
    hs_sat26DiSb.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    hs_a7125uUcL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSb);
    };
    this.hs_ePERM.evaluateOnce = function () {
        if (hs_a7125uUcL.notEvaluated) {
            return hs_a7125uUcL.hscall();
        } else {
            return hs_a7125uUcL;
        }
    };
    hs_sat26DiSc.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(96);
    };
    hs_a7225uUcN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSc);
    };
    this.hs_ePFNOSUPPORT.evaluateOnce = function () {
        if (hs_a7225uUcN.notEvaluated) {
            return hs_a7225uUcN.hscall();
        } else {
            return hs_a7225uUcN;
        }
    };
    hs_sat26DiSd.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(32);
    };
    hs_a7325uUcP.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSd);
    };
    this.hs_ePIPE.evaluateOnce = function () {
        if (hs_a7325uUcP.notEvaluated) {
            return hs_a7325uUcP.hscall();
        } else {
            return hs_a7325uUcP;
        }
    };
    hs_sat26DiSf.evaluateOnce = function () {
        var hs_sat26DiSe = new $hs.Thunk();
        hs_sat26DiSe.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSe);
    };
    hs_a7425uUcR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSf);
    };
    this.hs_ePROCLIM.evaluateOnce = function () {
        if (hs_a7425uUcR.notEvaluated) {
            return hs_a7425uUcR.hscall();
        } else {
            return hs_a7425uUcR;
        }
    };
    hs_sat26DiSh.evaluateOnce = function () {
        var hs_sat26DiSg = new $hs.Thunk();
        hs_sat26DiSg.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSg);
    };
    hs_a7525uUcU.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSh);
    };
    this.hs_ePROCUNAVAIL.evaluateOnce = function () {
        if (hs_a7525uUcU.notEvaluated) {
            return hs_a7525uUcU.hscall();
        } else {
            return hs_a7525uUcU;
        }
    };
    hs_sat26DiSj.evaluateOnce = function () {
        var hs_sat26DiSi = new $hs.Thunk();
        hs_sat26DiSi.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSi);
    };
    hs_a7625uUcX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSj);
    };
    this.hs_ePROGMISMATCH.evaluateOnce = function () {
        if (hs_a7625uUcX.notEvaluated) {
            return hs_a7625uUcX.hscall();
        } else {
            return hs_a7625uUcX;
        }
    };
    hs_sat26DiSl.evaluateOnce = function () {
        var hs_sat26DiSk = new $hs.Thunk();
        hs_sat26DiSk.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSk);
    };
    hs_a7725uUd0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSl);
    };
    this.hs_ePROGUNAVAIL.evaluateOnce = function () {
        if (hs_a7725uUd0.notEvaluated) {
            return hs_a7725uUd0.hscall();
        } else {
            return hs_a7725uUd0;
        }
    };
    hs_sat26DiSm.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(71);
    };
    hs_a7825uUd3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSm);
    };
    this.hs_ePROTO.evaluateOnce = function () {
        if (hs_a7825uUd3.notEvaluated) {
            return hs_a7825uUd3.hscall();
        } else {
            return hs_a7825uUd3;
        }
    };
    hs_sat26DiSn.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(93);
    };
    hs_a7925uUd5.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSn);
    };
    this.hs_ePROTONOSUPPORT.evaluateOnce = function () {
        if (hs_a7925uUd5.notEvaluated) {
            return hs_a7925uUd5.hscall();
        } else {
            return hs_a7925uUd5;
        }
    };
    hs_sat26DiSo.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(91);
    };
    hs_a8025uUd7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSo);
    };
    this.hs_ePROTOTYPE.evaluateOnce = function () {
        if (hs_a8025uUd7.notEvaluated) {
            return hs_a8025uUd7.hscall();
        } else {
            return hs_a8025uUd7;
        }
    };
    hs_sat26DiSp.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(34);
    };
    hs_a8125uUd9.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSp);
    };
    this.hs_eRANGE.evaluateOnce = function () {
        if (hs_a8125uUd9.notEvaluated) {
            return hs_a8125uUd9.hscall();
        } else {
            return hs_a8125uUd9;
        }
    };
    hs_sat26DiSq.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(78);
    };
    hs_a8225uUdb.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSq);
    };
    this.hs_eREMCHG.evaluateOnce = function () {
        if (hs_a8225uUdb.notEvaluated) {
            return hs_a8225uUdb.hscall();
        } else {
            return hs_a8225uUdb;
        }
    };
    hs_sat26DiSr.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(66);
    };
    hs_a8325uUdd.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSr);
    };
    this.hs_eREMOTE.evaluateOnce = function () {
        if (hs_a8325uUdd.notEvaluated) {
            return hs_a8325uUdd.hscall();
        } else {
            return hs_a8325uUdd;
        }
    };
    hs_sat26DiSs.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(30);
    };
    hs_a8425uUdf.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSs);
    };
    this.hs_eROFS.evaluateOnce = function () {
        if (hs_a8425uUdf.notEvaluated) {
            return hs_a8425uUdf.hscall();
        } else {
            return hs_a8425uUdf;
        }
    };
    hs_sat26DiSu.evaluateOnce = function () {
        var hs_sat26DiSt = new $hs.Thunk();
        hs_sat26DiSt.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSt);
    };
    hs_a8525uUdh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSu);
    };
    this.hs_eRPCMISMATCH.evaluateOnce = function () {
        if (hs_a8525uUdh.notEvaluated) {
            return hs_a8525uUdh.hscall();
        } else {
            return hs_a8525uUdh;
        }
    };
    hs_sat26DiSw.evaluateOnce = function () {
        var hs_sat26DiSv = new $hs.Thunk();
        hs_sat26DiSv.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSv);
    };
    hs_a8625uUdk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSw);
    };
    this.hs_eRREMOTE.evaluateOnce = function () {
        if (hs_a8625uUdk.notEvaluated) {
            return hs_a8625uUdk.hscall();
        } else {
            return hs_a8625uUdk;
        }
    };
    hs_sat26DiSx.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(108);
    };
    hs_a8725uUdn.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSx);
    };
    this.hs_eSHUTDOWN.evaluateOnce = function () {
        if (hs_a8725uUdn.notEvaluated) {
            return hs_a8725uUdn.hscall();
        } else {
            return hs_a8725uUdn;
        }
    };
    hs_sat26DiSy.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(94);
    };
    hs_a8825uUdp.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSy);
    };
    this.hs_eSOCKTNOSUPPORT.evaluateOnce = function () {
        if (hs_a8825uUdp.notEvaluated) {
            return hs_a8825uUdp.hscall();
        } else {
            return hs_a8825uUdp;
        }
    };
    hs_sat26DiSz.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(29);
    };
    hs_a8925uUdr.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSz);
    };
    this.hs_eSPIPE.evaluateOnce = function () {
        if (hs_a8925uUdr.notEvaluated) {
            return hs_a8925uUdr.hscall();
        } else {
            return hs_a8925uUdr;
        }
    };
    hs_sat26DiSA.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(3);
    };
    hs_a9025uUdt.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSA);
    };
    this.hs_eSRCH.evaluateOnce = function () {
        if (hs_a9025uUdt.notEvaluated) {
            return hs_a9025uUdt.hscall();
        } else {
            return hs_a9025uUdt;
        }
    };
    hs_sat26DiSB.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(69);
    };
    hs_a9125uUdv.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSB);
    };
    this.hs_eSRMNT.evaluateOnce = function () {
        if (hs_a9125uUdv.notEvaluated) {
            return hs_a9125uUdv.hscall();
        } else {
            return hs_a9125uUdv;
        }
    };
    hs_sat26DiSC.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(116);
    };
    hs_a9225uUdx.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSC);
    };
    this.hs_eSTALE.evaluateOnce = function () {
        if (hs_a9225uUdx.notEvaluated) {
            return hs_a9225uUdx.hscall();
        } else {
            return hs_a9225uUdx;
        }
    };
    hs_sat26DiSD.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(62);
    };
    hs_a9325uUdz.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSD);
    };
    this.hs_eTIME.evaluateOnce = function () {
        if (hs_a9325uUdz.notEvaluated) {
            return hs_a9325uUdz.hscall();
        } else {
            return hs_a9325uUdz;
        }
    };
    hs_sat26DiSE.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(110);
    };
    hs_a9425uUdB.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSE);
    };
    this.hs_eTIMEDOUT.evaluateOnce = function () {
        if (hs_a9425uUdB.notEvaluated) {
            return hs_a9425uUdB.hscall();
        } else {
            return hs_a9425uUdB;
        }
    };
    hs_sat26DiSF.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(109);
    };
    hs_a9525uUdD.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSF);
    };
    this.hs_eTOOMANYREFS.evaluateOnce = function () {
        if (hs_a9525uUdD.notEvaluated) {
            return hs_a9525uUdD.hscall();
        } else {
            return hs_a9525uUdD;
        }
    };
    hs_sat26DiSG.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(26);
    };
    hs_a9625uUdF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSG);
    };
    this.hs_eTXTBSY.evaluateOnce = function () {
        if (hs_a9625uUdF.notEvaluated) {
            return hs_a9625uUdF.hscall();
        } else {
            return hs_a9625uUdF;
        }
    };
    hs_sat26DiSH.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(87);
    };
    hs_a9725uUdH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSH);
    };
    this.hs_eUSERS.evaluateOnce = function () {
        if (hs_a9725uUdH.notEvaluated) {
            return hs_a9725uUdH.hscall();
        } else {
            return hs_a9725uUdH;
        }
    };
    hs_sat26DiSI.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(11);
    };
    hs_a9825uUdJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSI);
    };
    this.hs_eWOULDBLOCK.evaluateOnce = function () {
        if (hs_a9825uUdJ.notEvaluated) {
            return hs_a9825uUdJ.hscall();
        } else {
            return hs_a9825uUdJ;
        }
    };
    hs_sat26DiSJ.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(18);
    };
    hs_a9925uUdL.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSJ);
    };
    this.hs_eXDEV.evaluateOnce = function () {
        if (hs_a9925uUdL.notEvaluated) {
            return hs_a9925uUdL.hscall();
        } else {
            return hs_a9925uUdL;
        }
    };
    this.hs_isValidErrno.evaluate = function (hs_ds26DiK4) {
        var hs_sat26DiSK = new $hs.Thunk();
        hs_sat26DiSK.evaluateOnce = function () {
            var hs_sat26DiSL = new $hs.Thunk();
            hs_sat26DiSL.evaluateOnce = function () {
                var hs_sat26DiSM = new $hs.Thunk();
                hs_sat26DiSM.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSM);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiSL);
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_ds26DiK4, hs_sat26DiSK);
    };
    hs_zdczeze25uUdS.evaluate = function (hs_errno126DiKb, hs_errno226DiKd) {
        var hs_sat26DiSN = new $hs.Thunk();
        hs_sat26DiSN.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_isValidErrno.hscall(hs_errno226DiKd);
        };
        var hs_sat26DiSO = new $hs.Thunk();
        hs_sat26DiSO.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_isValidErrno.hscall(hs_errno126DiKb);
        };
        var hs_wild26DiSP = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DiSO, hs_sat26DiSN);
        switch (hs_wild26DiSP.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_errno126DiKb, hs_errno226DiKd);
        }
    };
    this.hs_zdfEqErrno.data = [hs_zdczeze25uUdS, hs_zdczsze25uUe0];
    hs_zdczsze25uUe0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmzsze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno);
    };
    this.hs_errnoToIOError.evaluate = function (hs_loc26DiMh, hs_errno26DiKm, hs_maybeHdl26DiMg, hs_maybeName26DiMk) {
        var hs_errType26DiLY = new $hs.Thunk();
        hs_errType26DiLY.evaluateOnce = function () {
            var hs_wild26DiT0 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a125uUas);
            switch (hs_wild26DiT0.tag) {
            case 1:
                var hs_wild126DiT1 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a225uUau);
                switch (hs_wild126DiT1.tag) {
                case 1:
                    var hs_wild226DiT2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a325uUaw);
                    switch (hs_wild226DiT2.tag) {
                    case 1:
                        var hs_wild326DiT3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a425uUay);
                        switch (hs_wild326DiT3.tag) {
                        case 1:
                            var hs_wild426DiT4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a525uUaA);
                            switch (hs_wild426DiT4.tag) {
                            case 1:
                                var hs_wild526DiT5 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a625uUaC);
                                switch (hs_wild526DiT5.tag) {
                                case 1:
                                    var hs_wild626DiT6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a725uUaE);
                                    switch (hs_wild626DiT6.tag) {
                                    case 1:
                                        var hs_wild726DiT7 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a825uUaG);
                                        switch (hs_wild726DiT7.tag) {
                                        case 1:
                                            var hs_wild826DiT8 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a925uUaI);
                                            switch (hs_wild826DiT8.tag) {
                                            case 1:
                                                var hs_wild926DiT9 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1025uUaK);
                                                switch (hs_wild926DiT9.tag) {
                                                case 1:
                                                    var hs_wild1026DiTa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1125uUaM);
                                                    switch (hs_wild1026DiTa.tag) {
                                                    case 1:
                                                        var hs_wild1126DiTb = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1225uUaO);
                                                        switch (hs_wild1126DiTb.tag) {
                                                        case 1:
                                                            var hs_wild1226DiTc = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1325uUaR);
                                                            switch (hs_wild1226DiTc.tag) {
                                                            case 1:
                                                                var hs_wild1326DiTd = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1425uUaT);
                                                                switch (hs_wild1326DiTd.tag) {
                                                                case 1:
                                                                    var hs_wild1426DiTe = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1525uUaV);
                                                                    switch (hs_wild1426DiTe.tag) {
                                                                    case 1:
                                                                        var hs_wild1526DiTf = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1625uUaX);
                                                                        switch (hs_wild1526DiTf.tag) {
                                                                        case 1:
                                                                            var hs_wild1626DiTg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1725uUaZ);
                                                                            switch (hs_wild1626DiTg.tag) {
                                                                            case 1:
                                                                                var hs_wild1726DiTh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1825uUb1);
                                                                                switch (hs_wild1726DiTh.tag) {
                                                                                case 1:
                                                                                    var hs_wild1826DiTi = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a1925uUb3);
                                                                                    switch (hs_wild1826DiTi.tag) {
                                                                                    case 1:
                                                                                        var hs_wild1926DiTj = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2025uUb5);
                                                                                        switch (hs_wild1926DiTj.tag) {
                                                                                        case 1:
                                                                                            var hs_wild2026DiTk = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2125uUb7);
                                                                                            switch (hs_wild2026DiTk.tag) {
                                                                                            case 1:
                                                                                                var hs_wild2126DiTl = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2225uUba);
                                                                                                switch (hs_wild2126DiTl.tag) {
                                                                                                case 1:
                                                                                                    var hs_wild2226DiTm = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2325uUbc);
                                                                                                    switch (hs_wild2226DiTm.tag) {
                                                                                                    case 1:
                                                                                                        var hs_wild2326DiTn = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2425uUbe);
                                                                                                        switch (hs_wild2326DiTn.tag) {
                                                                                                        case 1:
                                                                                                            var hs_wild2426DiTo = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2525uUbg);
                                                                                                            switch (hs_wild2426DiTo.tag) {
                                                                                                            case 1:
                                                                                                                var hs_wild2526DiTp = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2625uUbi);
                                                                                                                switch (hs_wild2526DiTp.tag) {
                                                                                                                case 1:
                                                                                                                    var hs_wild2626DiTq = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2725uUbk);
                                                                                                                    switch (hs_wild2626DiTq.tag) {
                                                                                                                    case 1:
                                                                                                                        var hs_wild2726DiTr = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2825uUbn);
                                                                                                                        switch (hs_wild2726DiTr.tag) {
                                                                                                                        case 1:
                                                                                                                            var hs_wild2826DiTs = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a2925uUbp);
                                                                                                                            switch (hs_wild2826DiTs.tag) {
                                                                                                                            case 1:
                                                                                                                                var hs_wild2926DiTt = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3025uUbr);
                                                                                                                                switch (hs_wild2926DiTt.tag) {
                                                                                                                                case 1:
                                                                                                                                    var hs_wild3026DiTu = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3125uUbt);
                                                                                                                                    switch (hs_wild3026DiTu.tag) {
                                                                                                                                    case 1:
                                                                                                                                        var hs_wild3126DiTv = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3225uUbv);
                                                                                                                                        switch (hs_wild3126DiTv.tag) {
                                                                                                                                        case 1:
                                                                                                                                            var hs_wild3226DiTw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3325uUbx);
                                                                                                                                            switch (hs_wild3226DiTw.tag) {
                                                                                                                                            case 1:
                                                                                                                                                var hs_wild3326DiTx = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3425uUbz);
                                                                                                                                                switch (hs_wild3326DiTx.tag) {
                                                                                                                                                case 1:
                                                                                                                                                    var hs_wild3426DiTy = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3525uUbB);
                                                                                                                                                    switch (hs_wild3426DiTy.tag) {
                                                                                                                                                    case 1:
                                                                                                                                                        var hs_wild3526DiTz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3625uUbD);
                                                                                                                                                        switch (hs_wild3526DiTz.tag) {
                                                                                                                                                        case 1:
                                                                                                                                                            var hs_wild3626DiTA = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3725uUbF);
                                                                                                                                                            switch (hs_wild3626DiTA.tag) {
                                                                                                                                                            case 1:
                                                                                                                                                                var hs_wild3726DiTB = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3825uUbH);
                                                                                                                                                                switch (hs_wild3726DiTB.tag) {
                                                                                                                                                                case 1:
                                                                                                                                                                    var hs_wild3826DiTC = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a3925uUbJ);
                                                                                                                                                                    switch (hs_wild3826DiTC.tag) {
                                                                                                                                                                    case 1:
                                                                                                                                                                        var hs_wild3926DiTD = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4025uUbL);
                                                                                                                                                                        switch (hs_wild3926DiTD.tag) {
                                                                                                                                                                        case 1:
                                                                                                                                                                            var hs_wild4026DiTE = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4125uUbN);
                                                                                                                                                                            switch (hs_wild4026DiTE.tag) {
                                                                                                                                                                            case 1:
                                                                                                                                                                                var hs_wild4126DiTF = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4225uUbP);
                                                                                                                                                                                switch (hs_wild4126DiTF.tag) {
                                                                                                                                                                                case 1:
                                                                                                                                                                                    var hs_wild4226DiTG = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4325uUbR);
                                                                                                                                                                                    switch (hs_wild4226DiTG.tag) {
                                                                                                                                                                                    case 1:
                                                                                                                                                                                        var hs_wild4326DiTH = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4425uUbT);
                                                                                                                                                                                        switch (hs_wild4326DiTH.tag) {
                                                                                                                                                                                        case 1:
                                                                                                                                                                                            var hs_wild4426DiTI = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4525uUbV);
                                                                                                                                                                                            switch (hs_wild4426DiTI.tag) {
                                                                                                                                                                                            case 1:
                                                                                                                                                                                                var hs_wild4526DiTJ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4625uUbX);
                                                                                                                                                                                                switch (hs_wild4526DiTJ.tag) {
                                                                                                                                                                                                case 1:
                                                                                                                                                                                                    var hs_wild4626DiTK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4725uUbZ);
                                                                                                                                                                                                    switch (hs_wild4626DiTK.tag) {
                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                        var hs_wild4726DiTL = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4825uUc1);
                                                                                                                                                                                                        switch (hs_wild4726DiTL.tag) {
                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                            var hs_wild4826DiTM = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a4925uUc3);
                                                                                                                                                                                                            switch (hs_wild4826DiTM.tag) {
                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                var hs_wild4926DiTN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5025uUc5);
                                                                                                                                                                                                                switch (hs_wild4926DiTN.tag) {
                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                    var hs_wild5026DiTO = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5125uUc7);
                                                                                                                                                                                                                    switch (hs_wild5026DiTO.tag) {
                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                        var hs_wild5126DiTP = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5225uUc9);
                                                                                                                                                                                                                        switch (hs_wild5126DiTP.tag) {
                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                            var hs_wild5226DiTQ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5325uUcb);
                                                                                                                                                                                                                            switch (hs_wild5226DiTQ.tag) {
                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                var hs_wild5326DiTR = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5425uUcd);
                                                                                                                                                                                                                                switch (hs_wild5326DiTR.tag) {
                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                    var hs_wild5426DiTS = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5525uUcf);
                                                                                                                                                                                                                                    switch (hs_wild5426DiTS.tag) {
                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                        var hs_wild5526DiTT = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5625uUch);
                                                                                                                                                                                                                                        switch (hs_wild5526DiTT.tag) {
                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                            var hs_wild5626DiTU = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5725uUcj);
                                                                                                                                                                                                                                            switch (hs_wild5626DiTU.tag) {
                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                var hs_wild5726DiTV = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5825uUcl);
                                                                                                                                                                                                                                                switch (hs_wild5726DiTV.tag) {
                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                    var hs_wild5826DiTW = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a5925uUcn);
                                                                                                                                                                                                                                                    switch (hs_wild5826DiTW.tag) {
                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                        var hs_wild5926DiTX = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6025uUcp);
                                                                                                                                                                                                                                                        switch (hs_wild5926DiTX.tag) {
                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                            var hs_wild6026DiTY = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6125uUcr);
                                                                                                                                                                                                                                                            switch (hs_wild6026DiTY.tag) {
                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                var hs_wild6126DiTZ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6225uUct);
                                                                                                                                                                                                                                                                switch (hs_wild6126DiTZ.tag) {
                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                    var hs_wild6226DiU0 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6325uUcv);
                                                                                                                                                                                                                                                                    switch (hs_wild6226DiU0.tag) {
                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                        var hs_wild6326DiU1 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6425uUcx);
                                                                                                                                                                                                                                                                        switch (hs_wild6326DiU1.tag) {
                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                            var hs_wild6426DiU2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6525uUcz);
                                                                                                                                                                                                                                                                            switch (hs_wild6426DiU2.tag) {
                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                var hs_wild6526DiU3 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6625uUcB);
                                                                                                                                                                                                                                                                                switch (hs_wild6526DiU3.tag) {
                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                    var hs_wild6626DiU4 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6725uUcD);
                                                                                                                                                                                                                                                                                    switch (hs_wild6626DiU4.tag) {
                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                        var hs_wild6726DiU5 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6825uUcF);
                                                                                                                                                                                                                                                                                        switch (hs_wild6726DiU5.tag) {
                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                            var hs_wild6826DiU6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a6925uUcH);
                                                                                                                                                                                                                                                                                            switch (hs_wild6826DiU6.tag) {
                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                var hs_wild6926DiU7 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7025uUcJ);
                                                                                                                                                                                                                                                                                                switch (hs_wild6926DiU7.tag) {
                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                    var hs_wild7026DiU8 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7125uUcL);
                                                                                                                                                                                                                                                                                                    switch (hs_wild7026DiU8.tag) {
                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                        var hs_wild7126DiU9 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7225uUcN);
                                                                                                                                                                                                                                                                                                        switch (hs_wild7126DiU9.tag) {
                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                            var hs_wild7226DiUa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7325uUcP);
                                                                                                                                                                                                                                                                                                            switch (hs_wild7226DiUa.tag) {
                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                var hs_wild7326DiUb = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7425uUcR);
                                                                                                                                                                                                                                                                                                                switch (hs_wild7326DiUb.tag) {
                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                    var hs_wild7426DiUc = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7525uUcU);
                                                                                                                                                                                                                                                                                                                    switch (hs_wild7426DiUc.tag) {
                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                        var hs_wild7526DiUd = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7625uUcX);
                                                                                                                                                                                                                                                                                                                        switch (hs_wild7526DiUd.tag) {
                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                            var hs_wild7626DiUe = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7725uUd0);
                                                                                                                                                                                                                                                                                                                            switch (hs_wild7626DiUe.tag) {
                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                var hs_wild7726DiUf = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7825uUd3);
                                                                                                                                                                                                                                                                                                                                switch (hs_wild7726DiUf.tag) {
                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                    var hs_wild7826DiUg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a7925uUd5);
                                                                                                                                                                                                                                                                                                                                    switch (hs_wild7826DiUg.tag) {
                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                        var hs_wild7926DiUh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8025uUd7);
                                                                                                                                                                                                                                                                                                                                        switch (hs_wild7926DiUh.tag) {
                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                            var hs_wild8026DiUi = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8125uUd9);
                                                                                                                                                                                                                                                                                                                                            switch (hs_wild8026DiUi.tag) {
                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                var hs_wild8126DiUj = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8225uUdb);
                                                                                                                                                                                                                                                                                                                                                switch (hs_wild8126DiUj.tag) {
                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                    var hs_wild8226DiUk = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8325uUdd);
                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild8226DiUk.tag) {
                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                        var hs_wild8326DiUl = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8425uUdf);
                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild8326DiUl.tag) {
                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                            var hs_wild8426DiUm = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8525uUdh);
                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild8426DiUm.tag) {
                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                var hs_wild8526DiUn = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8625uUdk);
                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild8526DiUn.tag) {
                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                    var hs_wild8626DiUo = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8725uUdn);
                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild8626DiUo.tag) {
                                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                                        var hs_wild8726DiUp = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8825uUdp);
                                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild8726DiUp.tag) {
                                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                                            var hs_wild8826DiUq = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a8925uUdr);
                                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild8826DiUq.tag) {
                                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                                var hs_wild8926DiUr = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9025uUdt);
                                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild8926DiUr.tag) {
                                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                                    var hs_wild9026DiUs = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9125uUdv);
                                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild9026DiUs.tag) {
                                                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                                                        var hs_wild9126DiUt = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9225uUdx);
                                                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild9126DiUt.tag) {
                                                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                                                            var hs_wild9226DiUu = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9325uUdz);
                                                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild9226DiUu.tag) {
                                                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                                                var hs_wild9326DiUv = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9425uUdB);
                                                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild9326DiUv.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                                                    var hs_wild9426DiUw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9525uUdD);
                                                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild9426DiUw.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                    case 1:
                                                                                                                                                                                                                                                                                                                                                                                                        var hs_wild9526DiUx = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9625uUdF);
                                                                                                                                                                                                                                                                                                                                                                                                        switch (hs_wild9526DiUx.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                        case 1:
                                                                                                                                                                                                                                                                                                                                                                                                            var hs_wild9626DiUy = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9725uUdH);
                                                                                                                                                                                                                                                                                                                                                                                                            switch (hs_wild9626DiUy.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                            case 1:
                                                                                                                                                                                                                                                                                                                                                                                                                var hs_wild9726DiUz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9825uUdJ);
                                                                                                                                                                                                                                                                                                                                                                                                                switch (hs_wild9726DiUz.tag) {
                                                                                                                                                                                                                                                                                                                                                                                                                case 1:
                                                                                                                                                                                                                                                                                                                                                                                                                    var hs_wild9826DiUA = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_errno26DiKm, hs_a9925uUdL);
                                                                                                                                                                                                                                                                                                                                                                                                                    switch (hs_wild9826DiUA.tag) {
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
        var hs_sat26DiSQ = new $hs.Thunk();
        hs_sat26DiSQ.evaluateOnce = function () {
            var hs_sat26DiSS = new $hs.Func(1);
            hs_sat26DiSS.evaluate = function (hs_str26DiMi) {
                var hs_sat26DiSZ = new $hs.Data(2);
                hs_sat26DiSZ.data = [hs_errno26DiKm];
                var hs_sat26DiSY = new $hs.Data(1);
                hs_sat26DiSY.data = [hs_maybeHdl26DiMg, hs_errType26DiLY, hs_loc26DiMh, hs_str26DiMi, hs_sat26DiSZ, hs_maybeName26DiMk];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DiSY);
            };
            var hs_sat26DiSR = new $hs.Thunk();
            hs_sat26DiSR.evaluateOnce = function () {
                var hs_sat26DiST = new $hs.Thunk();
                hs_sat26DiST.evaluateOnce = function () {
                    var hs_ds26DiSV = hs_errno26DiKm;
                    if (hs_errno26DiKm.notEvaluated) {
                        hs_ds26DiSV = hs_errno26DiKm.hscall();
                    }
                    var hs_ds126DiM3 = hs_ds26DiSV.data[0];
                    var hs_sat26DiSU = new $hs.Func(1);
                    hs_sat26DiSU.evaluate = function (hs_ds226DiM4) {
                        var hs_wild26DiSX = [hs_ds226DiM4, strerror(hs_ds126DiM3)];
                        var hs_ds326DiM9 = hs_wild26DiSX[0];
                        var hs_ds426DiMa = hs_wild26DiSX[1];
                        var hs_sat26DiSW = new $hs.Data(1);
                        hs_sat26DiSW.data = [hs_ds426DiMa];
                        return [hs_ds326DiM9, hs_sat26DiSW];
                    };
                    if (hs_sat26DiSU.notEvaluated) {
                        return hs_sat26DiSU.hscall();
                    } else {
                        return hs_sat26DiSU;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DiST, $hs.modules.ForeignziCziString.hs_peekCString);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DiSR, hs_sat26DiSS);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.GHCziIO.hs_unsafePerformIO, hs_sat26DiSQ);
    };
    hs_sat26DiUB.evaluate = function (hs_e26DiMp) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_e26DiMp);
    };
    this.hs_getErrno.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_getzuerrno25tq9N, hs_sat26DiUB);
    };
    this.hs_throwErrno.evaluate = function (hs_loc26DiMt) {
        var hs_sat26DiUC = new $hs.Func(1);
        hs_sat26DiUC.evaluate = function (hs_errno26DiMu) {
            var hs_sat26DiUD = new $hs.Thunk();
            hs_sat26DiUD.evaluateOnce = function () {
                return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_loc26DiMt, hs_errno26DiMu, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26DiUD);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DiUC);
    };
    this.hs_throwErrnoIf.evaluate = function (hs_pred26DiMD, hs_loc26DiMF, hs_f26DiMA) {
        var hs_sat26DiUE = new $hs.Func(1);
        hs_sat26DiUE.evaluate = function (hs_res26DiMC) {
            var hs_wild26DiUF = hs_pred26DiMD.hscall(hs_res26DiMC);
            switch (hs_wild26DiUF.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiMC);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DiMF);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiMA, hs_sat26DiUE);
    };
    this.hs_throwErrnoIfzu.evaluate = function (hs_pred26DiMK, hs_loc26DiML, hs_f26DiMM) {
        var hs_sat26DiUG = new $hs.Thunk();
        hs_sat26DiUG.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoIf.hscall(hs_pred26DiMK, hs_loc26DiML, hs_f26DiMM);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiUG);
    };
    this.hs_throwErrnoIfMinus1zu.evaluate = function (hs_zddNum26DiMQ) {
        var hs_zddEq26DiMR = new $hs.Thunk();
        hs_zddEq26DiMR.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiMQ);
        };
        var hs_ds26DiMV = new $hs.Thunk();
        hs_ds26DiMV.evaluateOnce = function () {
            var hs_sat26DiUJ = new $hs.Thunk();
            hs_sat26DiUJ.evaluateOnce = function () {
                var hs_sat26DiUK = new $hs.Thunk();
                hs_sat26DiUK.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiMQ, hs_sat26DiUK);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiMQ, hs_sat26DiUJ);
        };
        var hs_sat26DiUH = new $hs.Func(2);
        hs_sat26DiUH.evaluate = function (hs_loc26DiN2, hs_f26DiMY) {
            var hs_sat26DiUI = new $hs.Thunk();
            hs_sat26DiUI.evaluateOnce = function () {
                var hs_sat26DiN6 = new $hs.Func(1);
                hs_sat26DiN6.evaluate = function (hs_res26DiN0) {
                    var hs_wild26DiN5 = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiMR, hs_res26DiN0, hs_ds26DiMV);
                    switch (hs_wild26DiN5.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiN0);
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DiN2);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiMY, hs_sat26DiN6);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiUI);
        };
        if (hs_sat26DiUH.notEvaluated) {
            return hs_sat26DiUH.hscall();
        } else {
            return hs_sat26DiUH;
        }
    };
    this.hs_throwErrnoIfMinus1.evaluate = function (hs_zddNum26DiNa) {
        var hs_zddEq26DiNb = new $hs.Thunk();
        hs_zddEq26DiNb.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiNa);
        };
        var hs_ds26DiNf = new $hs.Thunk();
        hs_ds26DiNf.evaluateOnce = function () {
            var hs_sat26DiUN = new $hs.Thunk();
            hs_sat26DiUN.evaluateOnce = function () {
                var hs_sat26DiUO = new $hs.Thunk();
                hs_sat26DiUO.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiNa, hs_sat26DiUO);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiNa, hs_sat26DiUN);
        };
        var hs_sat26DiUL = new $hs.Func(2);
        hs_sat26DiUL.evaluate = function (hs_loc26DiNm, hs_f26DiNi) {
            var hs_sat26DiUM = new $hs.Func(1);
            hs_sat26DiUM.evaluate = function (hs_res26DiNk) {
                var hs_wild26DiNo = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiNb, hs_res26DiNk, hs_ds26DiNf);
                switch (hs_wild26DiNo.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiNk);
                case 2:
                    return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DiNm);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiNi, hs_sat26DiUM);
        };
        if (hs_sat26DiUL.notEvaluated) {
            return hs_sat26DiUL.hscall();
        } else {
            return hs_sat26DiUL;
        }
    };
    this.hs_throwErrnoIfNull.evaluate = function (hs_loc26DiNw, hs_f26DiNs) {
        var hs_sat26DiUP = new $hs.Func(1);
        hs_sat26DiUP.evaluate = function (hs_res26DiNu) {
            var hs_wild26DiUQ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_res26DiNu, $hs.modules.GHCziPtr.hs_nullPtr);
            switch (hs_wild26DiUQ.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiNu);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DiNw);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiNs, hs_sat26DiUP);
    };
    this.hs_throwErrnoIfRetry.evaluate = function (hs_pred26DiNE, hs_loc26DiNJ, hs_f26DiNB) {
        var hs_sat26DiUR = new $hs.Func(1);
        hs_sat26DiUR.evaluate = function (hs_res26DiND) {
            var hs_wild26DiUT = hs_pred26DiNE.hscall(hs_res26DiND);
            switch (hs_wild26DiUT.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiND);
            case 2:
                var hs_sat26DiUS = new $hs.Func(1);
                hs_sat26DiUS.evaluate = function (hs_err26DiNH) {
                    var hs_wild126DiUU = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DiNH, hs_a3325uUbx);
                    switch (hs_wild126DiUU.tag) {
                    case 1:
                        return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DiNJ);
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_pred26DiNE, hs_loc26DiNJ, hs_f26DiNB);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DiUS);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiNB, hs_sat26DiUR);
    };
    this.hs_throwErrnoIfRetryzu.evaluate = function (hs_pred26DiNP, hs_loc26DiNQ, hs_f26DiNR) {
        var hs_sat26DiUV = new $hs.Thunk();
        hs_sat26DiUV.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_pred26DiNP, hs_loc26DiNQ, hs_f26DiNR);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiUV);
    };
    this.hs_throwErrnoIfMinus1Retryzu.evaluate = function (hs_zddNum26DiNV) {
        var hs_zddEq26DiNW = new $hs.Thunk();
        hs_zddEq26DiNW.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiNV);
        };
        var hs_ds26DiO0 = new $hs.Thunk();
        hs_ds26DiO0.evaluateOnce = function () {
            var hs_sat26DiUY = new $hs.Thunk();
            hs_sat26DiUY.evaluateOnce = function () {
                var hs_sat26DiUZ = new $hs.Thunk();
                hs_sat26DiUZ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiNV, hs_sat26DiUZ);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiNV, hs_sat26DiUY);
        };
        var hs_pred26DiO4 = new $hs.Func(1);
        hs_pred26DiO4.evaluate = function (hs_ds126DiO3) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiNW, hs_ds126DiO3, hs_ds26DiO0);
        };
        var hs_sat26DiUW = new $hs.Func(2);
        hs_sat26DiUW.evaluate = function (hs_loc26DiO7, hs_f26DiO8) {
            var hs_sat26DiUX = new $hs.Thunk();
            hs_sat26DiUX.evaluateOnce = function () {
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_pred26DiO4, hs_loc26DiO7, hs_f26DiO8);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiUX);
        };
        if (hs_sat26DiUW.notEvaluated) {
            return hs_sat26DiUW.hscall();
        } else {
            return hs_sat26DiUW;
        }
    };
    this.hs_throwErrnoIfMinus1Retry.evaluate = function (hs_zddNum26DiOd) {
        var hs_zddEq26DiOe = new $hs.Thunk();
        hs_zddEq26DiOe.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiOd);
        };
        var hs_ds26DiOi = new $hs.Thunk();
        hs_ds26DiOi.evaluateOnce = function () {
            var hs_sat26DiV1 = new $hs.Thunk();
            hs_sat26DiV1.evaluateOnce = function () {
                var hs_sat26DiV2 = new $hs.Thunk();
                hs_sat26DiV2.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiOd, hs_sat26DiV2);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiOd, hs_sat26DiV1);
        };
        var hs_sat26DiV0 = new $hs.Func(1);
        hs_sat26DiV0.evaluate = function (hs_ds126DiOk) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiOe, hs_ds126DiOk, hs_ds26DiOi);
        };
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_sat26DiV0);
    };
    hs_a10025uUi6.evaluate = function (hs_ds26DiOo) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ds26DiOo, $hs.modules.GHCziPtr.hs_nullPtr);
    };
    this.hs_throwErrnoIfNullRetry.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetry.hscall(hs_a10025uUi6, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoIfRetryMayBlock.evaluate = function (hs_pred26DiOw, hs_loc26DiOE, hs_f26DiOt, hs_onzublock26DiOF) {
        var hs_sat26DiV3 = new $hs.Func(1);
        hs_sat26DiV3.evaluate = function (hs_res26DiOv) {
            var hs_wild26DiV5 = hs_pred26DiOw.hscall(hs_res26DiOv);
            switch (hs_wild26DiV5.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiOv);
            case 2:
                var hs_sat26DiV4 = new $hs.Func(1);
                hs_sat26DiV4.evaluate = function (hs_err26DiOz) {
                    var hs_wild126DiV6 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DiOz, hs_a3325uUbx);
                    switch (hs_wild126DiV6.tag) {
                    case 1:
                        var hs_sat26DiV8 = new $hs.Thunk();
                        hs_sat26DiV8.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DiOz, hs_a825uUaG);
                        };
                        var hs_sat26DiV9 = new $hs.Thunk();
                        hs_sat26DiV9.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziError.hs_zdfEqErrno, hs_err26DiOz, hs_a9825uUdJ);
                        };
                        var hs_wild226DiVa = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DiV9, hs_sat26DiV8);
                        switch (hs_wild226DiVa.tag) {
                        case 1:
                            return $hs.modules.ForeignziCziError.hs_throwErrno.hscall(hs_loc26DiOE);
                        case 2:
                            var hs_sat26DiV7 = new $hs.Func(1);
                            hs_sat26DiV7.evaluate = function (hs_ds26DiOH) {
                                return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DiOw, hs_loc26DiOE, hs_f26DiOt, hs_onzublock26DiOF);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_onzublock26DiOF, hs_sat26DiV7);
                        }
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DiOw, hs_loc26DiOE, hs_f26DiOt, hs_onzublock26DiOF);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DiV4);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiOt, hs_sat26DiV3);
    };
    this.hs_throwErrnoIfRetryMayBlockzu.evaluate = function (hs_pred26DiOP, hs_loc26DiOQ, hs_f26DiOR, hs_onzublock26DiOS) {
        var hs_sat26DiVb = new $hs.Thunk();
        hs_sat26DiVb.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DiOP, hs_loc26DiOQ, hs_f26DiOR, hs_onzublock26DiOS);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiVb);
    };
    this.hs_throwErrnoIfMinus1RetryMayBlockzu.evaluate = function (hs_zddNum26DiOW) {
        var hs_zddEq26DiOX = new $hs.Thunk();
        hs_zddEq26DiOX.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiOW);
        };
        var hs_ds26DiP1 = new $hs.Thunk();
        hs_ds26DiP1.evaluateOnce = function () {
            var hs_sat26DiVe = new $hs.Thunk();
            hs_sat26DiVe.evaluateOnce = function () {
                var hs_sat26DiVf = new $hs.Thunk();
                hs_sat26DiVf.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiOW, hs_sat26DiVf);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiOW, hs_sat26DiVe);
        };
        var hs_pred26DiP5 = new $hs.Func(1);
        hs_pred26DiP5.evaluate = function (hs_ds126DiP4) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiOX, hs_ds126DiP4, hs_ds26DiP1);
        };
        var hs_sat26DiVc = new $hs.Func(3);
        hs_sat26DiVc.evaluate = function (hs_loc26DiP9, hs_f26DiPa, hs_onzublock26DiPb) {
            var hs_sat26DiVd = new $hs.Thunk();
            hs_sat26DiVd.evaluateOnce = function () {
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_pred26DiP5, hs_loc26DiP9, hs_f26DiPa, hs_onzublock26DiPb);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiVd);
        };
        if (hs_sat26DiVc.notEvaluated) {
            return hs_sat26DiVc.hscall();
        } else {
            return hs_sat26DiVc;
        }
    };
    this.hs_throwErrnoIfMinus1RetryMayBlock.evaluate = function (hs_zddNum26DiPg) {
        var hs_zddEq26DiPh = new $hs.Thunk();
        hs_zddEq26DiPh.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiPg);
        };
        var hs_ds26DiPl = new $hs.Thunk();
        hs_ds26DiPl.evaluateOnce = function () {
            var hs_sat26DiVh = new $hs.Thunk();
            hs_sat26DiVh.evaluateOnce = function () {
                var hs_sat26DiVi = new $hs.Thunk();
                hs_sat26DiVi.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiPg, hs_sat26DiVi);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiPg, hs_sat26DiVh);
        };
        var hs_sat26DiVg = new $hs.Func(1);
        hs_sat26DiVg.evaluate = function (hs_ds126DiPn) {
            return $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiPh, hs_ds126DiPn, hs_ds26DiPl);
        };
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_sat26DiVg);
    };
    hs_a10125uUj9.evaluate = function (hs_ds26DiPr) {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_ds26DiPr, $hs.modules.GHCziPtr.hs_nullPtr);
    };
    this.hs_throwErrnoIfNullRetryMayBlock.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziError.hs_throwErrnoIfRetryMayBlock.hscall(hs_a10125uUj9, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_throwErrnoPath.evaluate = function (hs_loc26DiPv, hs_path26DiPx) {
        var hs_sat26DiVj = new $hs.Func(1);
        hs_sat26DiVj.evaluate = function (hs_errno26DiPw) {
            var hs_sat26DiVk = new $hs.Thunk();
            hs_sat26DiVk.evaluateOnce = function () {
                var hs_sat26DiVl = new $hs.Data(2);
                hs_sat26DiVl.data = [hs_path26DiPx];
                return $hs.modules.ForeignziCziError.hs_errnoToIOError.hscall(hs_loc26DiPv, hs_errno26DiPw, $hs.modules.DataziMaybe.hs_Nothing, hs_sat26DiVl);
            };
            return $hs.modules.GHCziIOziException.hs_ioError.hscall(hs_sat26DiVk);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.ForeignziCziError.hs_getErrno, hs_sat26DiVj);
    };
    this.hs_throwErrnoPathIf.evaluate = function (hs_pred26DiPI, hs_loc26DiPK, hs_path26DiPL, hs_f26DiPF) {
        var hs_sat26DiVm = new $hs.Func(1);
        hs_sat26DiVm.evaluate = function (hs_res26DiPH) {
            var hs_wild26DiVn = hs_pred26DiPI.hscall(hs_res26DiPH);
            switch (hs_wild26DiVn.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiPH);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DiPK, hs_path26DiPL);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiPF, hs_sat26DiVm);
    };
    this.hs_throwErrnoPathIfzu.evaluate = function (hs_pred26DiPR, hs_loc26DiPS, hs_path26DiPT, hs_f26DiPU) {
        var hs_sat26DiVo = new $hs.Thunk();
        hs_sat26DiVo.evaluateOnce = function () {
            return $hs.modules.ForeignziCziError.hs_throwErrnoPathIf.hscall(hs_pred26DiPR, hs_loc26DiPS, hs_path26DiPT, hs_f26DiPU);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiVo);
    };
    this.hs_throwErrnoPathIfMinus1zu.evaluate = function (hs_zddNum26DiPY) {
        var hs_zddEq26DiPZ = new $hs.Thunk();
        hs_zddEq26DiPZ.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiPY);
        };
        var hs_ds26DiQ3 = new $hs.Thunk();
        hs_ds26DiQ3.evaluateOnce = function () {
            var hs_sat26DiVr = new $hs.Thunk();
            hs_sat26DiVr.evaluateOnce = function () {
                var hs_sat26DiVs = new $hs.Thunk();
                hs_sat26DiVs.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiPY, hs_sat26DiVs);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiPY, hs_sat26DiVr);
        };
        var hs_sat26DiVp = new $hs.Func(3);
        hs_sat26DiVp.evaluate = function (hs_loc26DiQb, hs_path26DiQc, hs_f26DiQ7) {
            var hs_sat26DiVq = new $hs.Thunk();
            hs_sat26DiVq.evaluateOnce = function () {
                var hs_sat26DiQg = new $hs.Func(1);
                hs_sat26DiQg.evaluate = function (hs_res26DiQ9) {
                    var hs_wild26DiQf = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiPZ, hs_res26DiQ9, hs_ds26DiQ3);
                    switch (hs_wild26DiQf.tag) {
                    case 1:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiQ9);
                    case 2:
                        return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DiQb, hs_path26DiQc);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiQ7, hs_sat26DiQg);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.ForeignziMarshalziError.hs_void, hs_sat26DiVq);
        };
        if (hs_sat26DiVp.notEvaluated) {
            return hs_sat26DiVp.hscall();
        } else {
            return hs_sat26DiVp;
        }
    };
    this.hs_throwErrnoPathIfNull.evaluate = function (hs_loc26DiQp, hs_path26DiQq, hs_f26DiQl) {
        var hs_sat26DiVt = new $hs.Func(1);
        hs_sat26DiVt.evaluate = function (hs_res26DiQn) {
            var hs_wild26DiVu = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_res26DiQn, $hs.modules.GHCziPtr.hs_nullPtr);
            switch (hs_wild26DiVu.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiQn);
            case 2:
                return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DiQp, hs_path26DiQq);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiQl, hs_sat26DiVt);
    };
    this.hs_throwErrnoPathIfMinus1.evaluate = function (hs_zddNum26DiQu) {
        var hs_zddEq26DiQv = new $hs.Thunk();
        hs_zddEq26DiQv.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DiQu);
        };
        var hs_ds26DiQz = new $hs.Thunk();
        hs_ds26DiQz.evaluateOnce = function () {
            var hs_sat26DiVx = new $hs.Thunk();
            hs_sat26DiVx.evaluateOnce = function () {
                var hs_sat26DiVy = new $hs.Thunk();
                hs_sat26DiVy.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DiQu, hs_sat26DiVy);
            };
            return $hs.modules.GHCziNum.hs_negate.hscall(hs_zddNum26DiQu, hs_sat26DiVx);
        };
        var hs_sat26DiVv = new $hs.Func(3);
        hs_sat26DiVv.evaluate = function (hs_loc26DiQH, hs_path26DiQI, hs_f26DiQD) {
            var hs_sat26DiVw = new $hs.Func(1);
            hs_sat26DiVw.evaluate = function (hs_res26DiQF) {
                var hs_wild26DiQK = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26DiQv, hs_res26DiQF, hs_ds26DiQz);
                switch (hs_wild26DiQK.tag) {
                case 1:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_res26DiQF);
                case 2:
                    return $hs.modules.ForeignziCziError.hs_throwErrnoPath.hscall(hs_loc26DiQH, hs_path26DiQI);
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_f26DiQD, hs_sat26DiVw);
        };
        if (hs_sat26DiVv.notEvaluated) {
            return hs_sat26DiVv.hscall();
        } else {
            return hs_sat26DiVv;
        }
    };
    hs_a10225uUkw.evaluate = function (hs_eta26DiQT) {
        var hs_sat26DiVz = new $hs.Thunk();
        hs_sat26DiVz.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
        };
        var hs_ds26DiVA = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DiVz);
        var hs_ds126DiQS = hs_ds26DiVA.data[0];
        var hs_wild26DiVB = [hs_eta26DiQT, __hscore_set_errno(hs_ds126DiQS)];
        var hs_ds226DiQX = hs_wild26DiVB[0];
        return [hs_ds226DiQX, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_resetErrno.evaluate = function (hs_eta1cW6l3) {
        return hs_a10225uUkw.hscall(hs_eta1cW6l3);
    };
    this.hs_Errno.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziCziError.hs_Errno.hscall(hs_eta1cW6l3);
    };
};
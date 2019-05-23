
$hs.modules.ForeignziPtr = new $hs.Module();
$hs.modules.ForeignziPtr.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "Data.Typeable.Internal", "GHC.Classes", "GHC.Read", "GHC.Word", "Data.Bits", "Foreign.Storable"];
$hs.modules.ForeignziPtr.initBeforeDependencies = function () {
    this.hs_intPtrToPtr = new $hs.Func(1);
    this.hs_ptrToIntPtr = new $hs.Func(1);
    this.hs_wordPtrToPtr = new $hs.Func(1);
    this.hs_ptrToWordPtr = new $hs.Func(1);
    this.hs_freeHaskellFunPtr = new $hs.Func(2);
    this.hs_zdfReadWordPtr = new $hs.Data(1);
    this.hs_zdfShowWordPtr = new $hs.Data(1);
    this.hs_zdfReadIntPtr = new $hs.Data(1);
    this.hs_zdfShowIntPtr = new $hs.Data(1);
    this.hs_zdfBoundedIntPtr = new $hs.Data(1);
    this.hs_zdfStorableIntPtr = new $hs.Data(1);
    this.hs_zdfEnumIntPtr = new $hs.Data(1);
    this.hs_zdfEqIntPtr = new $hs.Data(1);
    this.hs_zdfOrdIntPtr = new $hs.Data(1);
    this.hs_zdfNumIntPtr = new $hs.Data(1);
    this.hs_zdfRealIntPtr = new $hs.Data(1);
    this.hs_zdfIntegralIntPtr = new $hs.Data(1);
    this.hs_zdfBitsIntPtr = new $hs.Data(1);
    this.hs_zdfBoundedWordPtr = new $hs.Data(1);
    this.hs_zdfStorableWordPtr = new $hs.Data(1);
    this.hs_zdfEnumWordPtr = new $hs.Data(1);
    this.hs_zdfEqWordPtr = new $hs.Data(1);
    this.hs_zdfOrdWordPtr = new $hs.Data(1);
    this.hs_zdfNumWordPtr = new $hs.Data(1);
    this.hs_zdfRealWordPtr = new $hs.Data(1);
    this.hs_zdfIntegralWordPtr = new $hs.Data(1);
    this.hs_zdfBitsWordPtr = new $hs.Data(1);
    this.hs_zdfTypeableWordPtr = new $hs.Thunk();
    this.hs_zdfTypeableIntPtr = new $hs.Thunk();
    this.hs_IntPtr = new $hs.Func(1);
    this.hs_WordPtr = new $hs.Func(1);
    this.hs_intPtrToPtr.notEvaluated = true;
    this.hs_intPtrToPtr.evaluate = function (hs_ds26Dnap) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26Dnap);
    };
    this.hs_ptrToIntPtr.notEvaluated = true;
    this.hs_ptrToIntPtr.evaluate = function (hs_ds26Dnav) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26Dnav);
    };
    this.hs_wordPtrToPtr.notEvaluated = true;
    this.hs_wordPtrToPtr.evaluate = function (hs_ds26DnaB) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26DnaB);
    };
    this.hs_ptrToWordPtr.notEvaluated = true;
    this.hs_ptrToWordPtr.evaluate = function (hs_ds26DnaI) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26DnaI);
    };
    this.hs_freeHaskellFunPtr.notEvaluated = true;
    this.hs_freeHaskellFunPtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfReadWordPtr.notEvaluated = true;
    this.hs_zdfReadWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfShowWordPtr.notEvaluated = true;
    this.hs_zdfShowWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfReadIntPtr.notEvaluated = true;
    this.hs_zdfReadIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfShowIntPtr.notEvaluated = true;
    this.hs_zdfShowIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedIntPtr.notEvaluated = true;
    this.hs_zdfBoundedIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfStorableIntPtr.notEvaluated = true;
    this.hs_zdfStorableIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfEnumIntPtr.notEvaluated = true;
    this.hs_zdfEnumIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfEqIntPtr.notEvaluated = true;
    this.hs_zdfEqIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfOrdIntPtr.notEvaluated = true;
    this.hs_zdfOrdIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfNumIntPtr.notEvaluated = true;
    this.hs_zdfNumIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfRealIntPtr.notEvaluated = true;
    this.hs_zdfRealIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralIntPtr.notEvaluated = true;
    this.hs_zdfIntegralIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfBitsIntPtr.notEvaluated = true;
    this.hs_zdfBitsIntPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedWordPtr.notEvaluated = true;
    this.hs_zdfBoundedWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfStorableWordPtr.notEvaluated = true;
    this.hs_zdfStorableWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfEnumWordPtr.notEvaluated = true;
    this.hs_zdfEnumWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfEqWordPtr.notEvaluated = true;
    this.hs_zdfEqWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfOrdWordPtr.notEvaluated = true;
    this.hs_zdfOrdWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfNumWordPtr.notEvaluated = true;
    this.hs_zdfNumWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfRealWordPtr.notEvaluated = true;
    this.hs_zdfRealWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralWordPtr.notEvaluated = true;
    this.hs_zdfIntegralWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfBitsWordPtr.notEvaluated = true;
    this.hs_zdfBitsWordPtr.evaluate = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this;
    };
    this.hs_zdfTypeableWordPtr.evaluateOnce = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_zdfTypeableIntPtr.evaluateOnce = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_IntPtr.notEvaluated = true;
    this.hs_IntPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_WordPtr.notEvaluated = true;
    this.hs_WordPtr.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.ForeignziPtr.initAfterDependencies = function () {
    this.hs_intPtrToPtr.notEvaluated = false;
    this.hs_ptrToIntPtr.notEvaluated = false;
    this.hs_wordPtrToPtr.notEvaluated = false;
    this.hs_ptrToWordPtr.notEvaluated = false;
    this.hs_freeHaskellFunPtr.notEvaluated = false;
    this.hs_zdfReadWordPtr.notEvaluated = false;
    this.hs_zdfReadWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfShowWordPtr.notEvaluated = false;
    this.hs_zdfShowWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfReadIntPtr.notEvaluated = false;
    this.hs_zdfReadIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfShowIntPtr.notEvaluated = false;
    this.hs_zdfShowIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedIntPtr.notEvaluated = false;
    this.hs_zdfBoundedIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableIntPtr.notEvaluated = false;
    this.hs_zdfStorableIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumIntPtr.notEvaluated = false;
    this.hs_zdfEnumIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEqIntPtr.notEvaluated = false;
    this.hs_zdfEqIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdIntPtr.notEvaluated = false;
    this.hs_zdfOrdIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfNumIntPtr.notEvaluated = false;
    this.hs_zdfNumIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfRealIntPtr.notEvaluated = false;
    this.hs_zdfRealIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralIntPtr.notEvaluated = false;
    this.hs_zdfIntegralIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsIntPtr.notEvaluated = false;
    this.hs_zdfBitsIntPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedWordPtr.notEvaluated = false;
    this.hs_zdfBoundedWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableWordPtr.notEvaluated = false;
    this.hs_zdfStorableWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumWordPtr.notEvaluated = false;
    this.hs_zdfEnumWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfEqWordPtr.notEvaluated = false;
    this.hs_zdfEqWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdWordPtr.notEvaluated = false;
    this.hs_zdfOrdWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfNumWordPtr.notEvaluated = false;
    this.hs_zdfNumWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfRealWordPtr.notEvaluated = false;
    this.hs_zdfRealWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralWordPtr.notEvaluated = false;
    this.hs_zdfIntegralWordPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsWordPtr.notEvaluated = false;
    this.hs_zdfBitsWordPtr.evaluate = function () {
        return this;
    };
    this.hs_IntPtr.notEvaluated = false;
    this.hs_WordPtr.notEvaluated = false;
    var hs_zdwccall25uYEy = new $hs.Func(2);
    var hs_a25uYEF = new $hs.Func(2);
    var hs_a125uYES = new $hs.Thunk();
    var hs_zdcreadList25uYET = new $hs.Thunk();
    var hs_a225uYEU = new $hs.Thunk();
    var hs_zdcreadsPrec25uYEV = new $hs.Thunk();
    var hs_zdcreadListPrec25uYEW = new $hs.Thunk();
    var hs_zdcreadPrec25uYEX = new $hs.Thunk();
    var hs_a325uYEY = new $hs.Thunk();
    var hs_zdcshowList25uYEZ = new $hs.Thunk();
    var hs_a425uYF0 = new $hs.Thunk();
    var hs_zdcshow25uYF1 = new $hs.Thunk();
    var hs_a525uYF2 = new $hs.Thunk();
    var hs_zdcshowsPrec25uYF3 = new $hs.Thunk();
    var hs_a625uYF4 = new $hs.Thunk();
    var hs_zdcreadList125uYF5 = new $hs.Thunk();
    var hs_a725uYF6 = new $hs.Thunk();
    var hs_zdcreadsPrec125uYF7 = new $hs.Thunk();
    var hs_zdcreadListPrec125uYF8 = new $hs.Thunk();
    var hs_zdcreadPrec125uYF9 = new $hs.Thunk();
    var hs_a825uYFa = new $hs.Thunk();
    var hs_zdcshowList125uYFb = new $hs.Thunk();
    var hs_a925uYFc = new $hs.Thunk();
    var hs_zdcshow125uYFd = new $hs.Thunk();
    var hs_a1025uYFe = new $hs.Thunk();
    var hs_zdcshowsPrec125uYFf = new $hs.Thunk();
    var hs_a1125uYFg = new $hs.Thunk();
    var hs_zdczizazi25uYFh = new $hs.Thunk();
    var hs_a1225uYFi = new $hs.Thunk();
    var hs_zdczizbzi25uYFj = new $hs.Thunk();
    var hs_a1325uYFk = new $hs.Thunk();
    var hs_zdcxor25uYFl = new $hs.Thunk();
    var hs_a1425uYFm = new $hs.Thunk();
    var hs_zdccomplement25uYFn = new $hs.Thunk();
    var hs_a1525uYFo = new $hs.Thunk();
    var hs_zdcshift25uYFp = new $hs.Thunk();
    var hs_a1625uYFq = new $hs.Thunk();
    var hs_zdcrotate25uYFr = new $hs.Thunk();
    var hs_a1725uYFs = new $hs.Thunk();
    var hs_zdcbit25uYFt = new $hs.Thunk();
    var hs_a1825uYFu = new $hs.Thunk();
    var hs_zdcsetBit25uYFv = new $hs.Thunk();
    var hs_a1925uYFw = new $hs.Thunk();
    var hs_zdcclearBit25uYFx = new $hs.Thunk();
    var hs_a2025uYFy = new $hs.Thunk();
    var hs_zdccomplementBit25uYFz = new $hs.Thunk();
    var hs_a2125uYFA = new $hs.Thunk();
    var hs_zdctestBit25uYFB = new $hs.Thunk();
    var hs_a2225uYFC = new $hs.Thunk();
    var hs_zdcbitSizze25uYFD = new $hs.Thunk();
    var hs_a2325uYFE = new $hs.Thunk();
    var hs_zdcisSigned25uYFF = new $hs.Thunk();
    var hs_a2425uYFG = new $hs.Thunk();
    var hs_zdcshiftL25uYFH = new $hs.Thunk();
    var hs_a2525uYFI = new $hs.Thunk();
    var hs_zdcshiftR25uYFJ = new $hs.Thunk();
    var hs_a2625uYFK = new $hs.Thunk();
    var hs_zdcrotateL25uYFL = new $hs.Thunk();
    var hs_a2725uYFM = new $hs.Thunk();
    var hs_zdcrotateR25uYFN = new $hs.Thunk();
    var hs_a2825uYFO = new $hs.Thunk();
    var hs_zdcquot25uYFP = new $hs.Thunk();
    var hs_a2925uYFQ = new $hs.Thunk();
    var hs_zdcrem25uYFR = new $hs.Thunk();
    var hs_a3025uYFS = new $hs.Thunk();
    var hs_zdcdiv25uYFT = new $hs.Thunk();
    var hs_a3125uYFU = new $hs.Thunk();
    var hs_zdcmod25uYFV = new $hs.Thunk();
    var hs_a3225uYFW = new $hs.Thunk();
    var hs_zdcquotRem25uYFX = new $hs.Thunk();
    var hs_a3325uYFY = new $hs.Thunk();
    var hs_zdcdivMod25uYFZ = new $hs.Thunk();
    var hs_a3425uYG0 = new $hs.Thunk();
    var hs_zdctoInteger25uYG1 = new $hs.Thunk();
    var hs_a3525uYG2 = new $hs.Thunk();
    var hs_zdcminBound25uYG3 = new $hs.Thunk();
    var hs_a3625uYG4 = new $hs.Thunk();
    var hs_zdcmaxBound25uYG5 = new $hs.Thunk();
    var hs_a3725uYG6 = new $hs.Thunk();
    var hs_zdctoRational25uYG7 = new $hs.Thunk();
    var hs_a3825uYG8 = new $hs.Thunk();
    var hs_zdcsizzeOf25uYG9 = new $hs.Thunk();
    var hs_a3925uYGa = new $hs.Thunk();
    var hs_zdcalignment25uYGb = new $hs.Thunk();
    var hs_a4025uYGc = new $hs.Thunk();
    var hs_zdcpeekElemOff25uYGd = new $hs.Thunk();
    var hs_a4125uYGe = new $hs.Thunk();
    var hs_zdcpokeElemOff25uYGf = new $hs.Thunk();
    var hs_a4225uYGg = new $hs.Thunk();
    var hs_zdcpeekByteOff25uYGh = new $hs.Thunk();
    var hs_a4325uYGi = new $hs.Thunk();
    var hs_zdcpokeByteOff25uYGj = new $hs.Thunk();
    var hs_a4425uYGk = new $hs.Thunk();
    var hs_zdcpeek25uYGl = new $hs.Thunk();
    var hs_a4525uYGm = new $hs.Thunk();
    var hs_zdcpoke25uYGn = new $hs.Thunk();
    var hs_a4625uYGo = new $hs.Thunk();
    var hs_zdcsucc25uYGp = new $hs.Thunk();
    var hs_a4725uYGq = new $hs.Thunk();
    var hs_zdcpred25uYGr = new $hs.Thunk();
    var hs_a4825uYGs = new $hs.Thunk();
    var hs_zdctoEnum25uYGt = new $hs.Thunk();
    var hs_a4925uYGu = new $hs.Thunk();
    var hs_zdcfromEnum25uYGv = new $hs.Thunk();
    var hs_a5025uYGw = new $hs.Thunk();
    var hs_zdcenumFrom25uYGx = new $hs.Thunk();
    var hs_a5125uYGy = new $hs.Thunk();
    var hs_zdcenumFromThen25uYGz = new $hs.Thunk();
    var hs_a5225uYGA = new $hs.Thunk();
    var hs_zdcenumFromTo25uYGB = new $hs.Thunk();
    var hs_a5325uYGC = new $hs.Thunk();
    var hs_zdcenumFromThenTo25uYGD = new $hs.Thunk();
    var hs_a5425uYGE = new $hs.Thunk();
    var hs_zdczp25uYGF = new $hs.Thunk();
    var hs_a5525uYGG = new $hs.Thunk();
    var hs_zdczt25uYGH = new $hs.Thunk();
    var hs_a5625uYGI = new $hs.Thunk();
    var hs_zdczm25uYGJ = new $hs.Thunk();
    var hs_a5725uYGK = new $hs.Thunk();
    var hs_zdcnegate25uYGL = new $hs.Thunk();
    var hs_a5825uYGM = new $hs.Thunk();
    var hs_zdcabs25uYGN = new $hs.Thunk();
    var hs_a5925uYGO = new $hs.Thunk();
    var hs_zdcsignum25uYGP = new $hs.Thunk();
    var hs_a6025uYGQ = new $hs.Thunk();
    var hs_zdcfromInteger25uYGR = new $hs.Thunk();
    var hs_a6125uYGS = new $hs.Thunk();
    var hs_zdccompare25uYGT = new $hs.Thunk();
    var hs_a6225uYGU = new $hs.Thunk();
    var hs_zdczl25uYGV = new $hs.Thunk();
    var hs_a6325uYGW = new $hs.Thunk();
    var hs_zdczgze25uYGX = new $hs.Thunk();
    var hs_a6425uYGY = new $hs.Thunk();
    var hs_zdczg25uYGZ = new $hs.Thunk();
    var hs_a6525uYH0 = new $hs.Thunk();
    var hs_zdczlze25uYH1 = new $hs.Thunk();
    var hs_a6625uYH2 = new $hs.Thunk();
    var hs_zdcmax25uYH3 = new $hs.Thunk();
    var hs_a6725uYH4 = new $hs.Thunk();
    var hs_zdcmin25uYH5 = new $hs.Thunk();
    var hs_a6825uYH6 = new $hs.Thunk();
    var hs_zdczeze25uYH7 = new $hs.Thunk();
    var hs_a6925uYH8 = new $hs.Thunk();
    var hs_zdczsze25uYH9 = new $hs.Thunk();
    var hs_a7025uYHa = new $hs.Thunk();
    var hs_zdczizazi125uYHb = new $hs.Thunk();
    var hs_a7125uYHc = new $hs.Thunk();
    var hs_zdczizbzi125uYHd = new $hs.Thunk();
    var hs_a7225uYHe = new $hs.Thunk();
    var hs_zdcxor125uYHf = new $hs.Thunk();
    var hs_a7325uYHg = new $hs.Thunk();
    var hs_zdccomplement125uYHh = new $hs.Thunk();
    var hs_a7425uYHi = new $hs.Thunk();
    var hs_zdcshift125uYHj = new $hs.Thunk();
    var hs_a7525uYHk = new $hs.Thunk();
    var hs_zdcrotate125uYHl = new $hs.Thunk();
    var hs_a7625uYHm = new $hs.Thunk();
    var hs_zdcbit125uYHn = new $hs.Thunk();
    var hs_a7725uYHo = new $hs.Thunk();
    var hs_zdcsetBit125uYHp = new $hs.Thunk();
    var hs_a7825uYHq = new $hs.Thunk();
    var hs_zdcclearBit125uYHr = new $hs.Thunk();
    var hs_a7925uYHs = new $hs.Thunk();
    var hs_zdccomplementBit125uYHt = new $hs.Thunk();
    var hs_a8025uYHu = new $hs.Thunk();
    var hs_zdctestBit125uYHv = new $hs.Thunk();
    var hs_a8125uYHw = new $hs.Thunk();
    var hs_zdcbitSizze125uYHx = new $hs.Thunk();
    var hs_a8225uYHy = new $hs.Thunk();
    var hs_zdcisSigned125uYHz = new $hs.Thunk();
    var hs_a8325uYHA = new $hs.Thunk();
    var hs_zdcshiftL125uYHB = new $hs.Thunk();
    var hs_a8425uYHC = new $hs.Thunk();
    var hs_zdcshiftR125uYHD = new $hs.Thunk();
    var hs_a8525uYHE = new $hs.Thunk();
    var hs_zdcrotateL125uYHF = new $hs.Thunk();
    var hs_a8625uYHG = new $hs.Thunk();
    var hs_zdcrotateR125uYHH = new $hs.Thunk();
    var hs_a8725uYHI = new $hs.Thunk();
    var hs_zdcquot125uYHJ = new $hs.Thunk();
    var hs_a8825uYHK = new $hs.Thunk();
    var hs_zdcrem125uYHL = new $hs.Thunk();
    var hs_a8925uYHM = new $hs.Thunk();
    var hs_zdcdiv125uYHN = new $hs.Thunk();
    var hs_a9025uYHO = new $hs.Thunk();
    var hs_zdcmod125uYHP = new $hs.Thunk();
    var hs_a9125uYHQ = new $hs.Thunk();
    var hs_zdcquotRem125uYHR = new $hs.Thunk();
    var hs_a9225uYHS = new $hs.Thunk();
    var hs_zdcdivMod125uYHT = new $hs.Thunk();
    var hs_a9325uYHU = new $hs.Thunk();
    var hs_zdctoInteger125uYHV = new $hs.Thunk();
    var hs_a9425uYHW = new $hs.Thunk();
    var hs_zdcminBound125uYHX = new $hs.Thunk();
    var hs_a9525uYHY = new $hs.Thunk();
    var hs_zdcmaxBound125uYHZ = new $hs.Thunk();
    var hs_a9625uYI0 = new $hs.Thunk();
    var hs_zdctoRational125uYI1 = new $hs.Thunk();
    var hs_a9725uYI2 = new $hs.Thunk();
    var hs_zdcsizzeOf125uYI3 = new $hs.Thunk();
    var hs_a9825uYI4 = new $hs.Thunk();
    var hs_zdcalignment125uYI5 = new $hs.Thunk();
    var hs_a9925uYI6 = new $hs.Thunk();
    var hs_zdcpeekElemOff125uYI7 = new $hs.Thunk();
    var hs_a10025uYI8 = new $hs.Thunk();
    var hs_zdcpokeElemOff125uYI9 = new $hs.Thunk();
    var hs_a10125uYIa = new $hs.Thunk();
    var hs_zdcpeekByteOff125uYIb = new $hs.Thunk();
    var hs_a10225uYIc = new $hs.Thunk();
    var hs_zdcpokeByteOff125uYId = new $hs.Thunk();
    var hs_a10325uYIe = new $hs.Thunk();
    var hs_zdcpeek125uYIf = new $hs.Thunk();
    var hs_a10425uYIg = new $hs.Thunk();
    var hs_zdcpoke125uYIh = new $hs.Thunk();
    var hs_a10525uYIi = new $hs.Thunk();
    var hs_zdcsucc125uYIj = new $hs.Thunk();
    var hs_a10625uYIk = new $hs.Thunk();
    var hs_zdcpred125uYIl = new $hs.Thunk();
    var hs_a10725uYIm = new $hs.Thunk();
    var hs_zdctoEnum125uYIn = new $hs.Thunk();
    var hs_a10825uYIo = new $hs.Thunk();
    var hs_zdcfromEnum125uYIp = new $hs.Thunk();
    var hs_a10925uYIq = new $hs.Thunk();
    var hs_zdcenumFrom125uYIr = new $hs.Thunk();
    var hs_a11025uYIs = new $hs.Thunk();
    var hs_zdcenumFromThen125uYIt = new $hs.Thunk();
    var hs_a11125uYIu = new $hs.Thunk();
    var hs_zdcenumFromTo125uYIv = new $hs.Thunk();
    var hs_a11225uYIw = new $hs.Thunk();
    var hs_zdcenumFromThenTo125uYIx = new $hs.Thunk();
    var hs_a11325uYIy = new $hs.Thunk();
    var hs_zdczp125uYIz = new $hs.Thunk();
    var hs_a11425uYIA = new $hs.Thunk();
    var hs_zdczt125uYIB = new $hs.Thunk();
    var hs_a11525uYIC = new $hs.Thunk();
    var hs_zdczm125uYID = new $hs.Thunk();
    var hs_a11625uYIE = new $hs.Thunk();
    var hs_zdcnegate125uYIF = new $hs.Thunk();
    var hs_a11725uYIG = new $hs.Thunk();
    var hs_zdcabs125uYIH = new $hs.Thunk();
    var hs_a11825uYII = new $hs.Thunk();
    var hs_zdcsignum125uYIJ = new $hs.Thunk();
    var hs_a11925uYIK = new $hs.Thunk();
    var hs_zdcfromInteger125uYIL = new $hs.Thunk();
    var hs_a12025uYIM = new $hs.Thunk();
    var hs_zdccompare125uYIN = new $hs.Thunk();
    var hs_a12125uYIO = new $hs.Thunk();
    var hs_zdczl125uYIP = new $hs.Thunk();
    var hs_a12225uYIQ = new $hs.Thunk();
    var hs_zdczgze125uYIR = new $hs.Thunk();
    var hs_a12325uYIS = new $hs.Thunk();
    var hs_zdczg125uYIT = new $hs.Thunk();
    var hs_a12425uYIU = new $hs.Thunk();
    var hs_zdczlze125uYIV = new $hs.Thunk();
    var hs_a12525uYIW = new $hs.Thunk();
    var hs_zdcmax125uYIX = new $hs.Thunk();
    var hs_a12625uYIY = new $hs.Thunk();
    var hs_zdcmin125uYIZ = new $hs.Thunk();
    var hs_a12725uYJ0 = new $hs.Thunk();
    var hs_zdczeze125uYJ1 = new $hs.Thunk();
    var hs_a12825uYJ2 = new $hs.Thunk();
    var hs_zdczsze125uYJ3 = new $hs.Thunk();
    var hs_zdctypeOf25uYJ4 = new $hs.Func(1);
    var hs_zdctypeOf125uYJb = new $hs.Func(1);
    this.hs_intPtrToPtr.evaluate = function (hs_ds26Dnap) {
        var hs_wild26Dnfy = hs_ds26Dnap;
        if (hs_ds26Dnap.notEvaluated) {
            hs_wild26Dnfy = hs_ds26Dnap.hscall();
        }
        var hs_izh26Dnas = hs_wild26Dnfy.data[0];
        throw "primitive operation int2Addr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dnfz];
        return $res;
    };
    this.hs_ptrToIntPtr.evaluate = function (hs_ds26Dnav) {
        var hs_wild26DnfA = hs_ds26Dnav;
        if (hs_ds26Dnav.notEvaluated) {
            hs_wild26DnfA = hs_ds26Dnav.hscall();
        }
        var hs_azh26Dnay = hs_wild26DnfA.data[0];
        throw "primitive operation addr2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DnfB];
        return $res;
    };
    this.hs_wordPtrToPtr.evaluate = function (hs_ds26DnaB) {
        var hs_wild26DnfC = hs_ds26DnaB;
        if (hs_ds26DnaB.notEvaluated) {
            hs_wild26DnfC = hs_ds26DnaB.hscall();
        }
        var hs_wzh26DnaE = hs_wild26DnfC.data[0];
        var hs_sat26DnfD = hs_wzh26DnaE;
        throw "primitive operation int2Addr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DnfE];
        return $res;
    };
    this.hs_ptrToWordPtr.evaluate = function (hs_ds26DnaI) {
        var hs_wild26DnfF = hs_ds26DnaI;
        if (hs_ds26DnaI.notEvaluated) {
            hs_wild26DnfF = hs_ds26DnaI.hscall();
        }
        var hs_azh26DnaL = hs_wild26DnfF.data[0];
        throw "primitive operation addr2Int#. Not implemeted yet.";
        var hs_sat26DnfH = hs_sat26DnfG;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DnfH];
        return $res;
    };
    hs_zdwccall25uYEy.evaluate = function (hs_ds26DnaS, hs_eta26DnaT) {
        return [hs_eta26DnaT, freeHaskellFunctionPtr(hs_ds26DnaS)];
    };
    hs_a25uYEF.evaluate = function (hs_ds26DnaY, hs_eta26Dnb3) {
        var hs_ds126DnfI = hs_ds26DnaY;
        if (hs_ds26DnaY.notEvaluated) {
            hs_ds126DnfI = hs_ds26DnaY.hscall();
        }
        var hs_ds226Dnb2 = hs_ds126DnfI.data[0];
        var hs_wild26DnfJ = [hs_eta26Dnb3, freeHaskellFunctionPtr(hs_ds226Dnb2)];
        var hs_ds326Dnb7 = hs_wild26DnfJ[0];
        return [hs_ds326Dnb7, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_freeHaskellFunPtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25uYEF.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a125uYES.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadList25uYET.evaluateOnce = function () {
        if (hs_a125uYES.notEvaluated) {
            return hs_a125uYES.hscall();
        } else {
            return hs_a125uYES;
        }
    };
    hs_a225uYEU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadsPrec25uYEV.evaluateOnce = function () {
        if (hs_a225uYEU.notEvaluated) {
            return hs_a225uYEU.hscall();
        } else {
            return hs_a225uYEU;
        }
    };
    this.hs_zdfReadWordPtr.data = [hs_a225uYEU, hs_a125uYES, hs_zdcreadPrec25uYEX, hs_zdcreadListPrec25uYEW];
    hs_zdcreadListPrec25uYEW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadWordPtr);
    };
    hs_zdcreadPrec25uYEX.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadWordPtr);
    };
    hs_a325uYEY.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshowList25uYEZ.evaluateOnce = function () {
        if (hs_a325uYEY.notEvaluated) {
            return hs_a325uYEY.hscall();
        } else {
            return hs_a325uYEY;
        }
    };
    hs_a425uYF0.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshow25uYF1.evaluateOnce = function () {
        if (hs_a425uYF0.notEvaluated) {
            return hs_a425uYF0.hscall();
        } else {
            return hs_a425uYF0;
        }
    };
    hs_a525uYF2.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshowsPrec25uYF3.evaluateOnce = function () {
        if (hs_a525uYF2.notEvaluated) {
            return hs_a525uYF2.hscall();
        } else {
            return hs_a525uYF2;
        }
    };
    this.hs_zdfShowWordPtr.data = [hs_a525uYF2, hs_a425uYF0, hs_a325uYEY];
    hs_a625uYF4.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_zdcreadList125uYF5.evaluateOnce = function () {
        if (hs_a625uYF4.notEvaluated) {
            return hs_a625uYF4.hscall();
        } else {
            return hs_a625uYF4;
        }
    };
    hs_a725uYF6.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_zdcreadsPrec125uYF7.evaluateOnce = function () {
        if (hs_a725uYF6.notEvaluated) {
            return hs_a725uYF6.hscall();
        } else {
            return hs_a725uYF6;
        }
    };
    this.hs_zdfReadIntPtr.data = [hs_a725uYF6, hs_a625uYF4, hs_zdcreadPrec125uYF9, hs_zdcreadListPrec125uYF8];
    hs_zdcreadListPrec125uYF8.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadIntPtr);
    };
    hs_zdcreadPrec125uYF9.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadIntPtr);
    };
    hs_a825uYFa.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshowList125uYFb.evaluateOnce = function () {
        if (hs_a825uYFa.notEvaluated) {
            return hs_a825uYFa.hscall();
        } else {
            return hs_a825uYFa;
        }
    };
    hs_a925uYFc.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshow125uYFd.evaluateOnce = function () {
        if (hs_a925uYFc.notEvaluated) {
            return hs_a925uYFc.hscall();
        } else {
            return hs_a925uYFc;
        }
    };
    hs_a1025uYFe.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshowsPrec125uYFf.evaluateOnce = function () {
        if (hs_a1025uYFe.notEvaluated) {
            return hs_a1025uYFe.hscall();
        } else {
            return hs_a1025uYFe;
        }
    };
    this.hs_zdfShowIntPtr.data = [hs_a1025uYFe, hs_a925uYFc, hs_a825uYFa];
    hs_a1125uYFg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdczizazi25uYFh.evaluateOnce = function () {
        if (hs_a1125uYFg.notEvaluated) {
            return hs_a1125uYFg.hscall();
        } else {
            return hs_a1125uYFg;
        }
    };
    hs_a1225uYFi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdczizbzi25uYFj.evaluateOnce = function () {
        if (hs_a1225uYFi.notEvaluated) {
            return hs_a1225uYFi.hscall();
        } else {
            return hs_a1225uYFi;
        }
    };
    hs_a1325uYFk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcxor25uYFl.evaluateOnce = function () {
        if (hs_a1325uYFk.notEvaluated) {
            return hs_a1325uYFk.hscall();
        } else {
            return hs_a1325uYFk;
        }
    };
    hs_a1425uYFm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdccomplement25uYFn.evaluateOnce = function () {
        if (hs_a1425uYFm.notEvaluated) {
            return hs_a1425uYFm.hscall();
        } else {
            return hs_a1425uYFm;
        }
    };
    hs_a1525uYFo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcshift25uYFp.evaluateOnce = function () {
        if (hs_a1525uYFo.notEvaluated) {
            return hs_a1525uYFo.hscall();
        } else {
            return hs_a1525uYFo;
        }
    };
    hs_a1625uYFq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcrotate25uYFr.evaluateOnce = function () {
        if (hs_a1625uYFq.notEvaluated) {
            return hs_a1625uYFq.hscall();
        } else {
            return hs_a1625uYFq;
        }
    };
    hs_a1725uYFs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcbit25uYFt.evaluateOnce = function () {
        if (hs_a1725uYFs.notEvaluated) {
            return hs_a1725uYFs.hscall();
        } else {
            return hs_a1725uYFs;
        }
    };
    hs_a1825uYFu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcsetBit25uYFv.evaluateOnce = function () {
        if (hs_a1825uYFu.notEvaluated) {
            return hs_a1825uYFu.hscall();
        } else {
            return hs_a1825uYFu;
        }
    };
    hs_a1925uYFw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcclearBit25uYFx.evaluateOnce = function () {
        if (hs_a1925uYFw.notEvaluated) {
            return hs_a1925uYFw.hscall();
        } else {
            return hs_a1925uYFw;
        }
    };
    hs_a2025uYFy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdccomplementBit25uYFz.evaluateOnce = function () {
        if (hs_a2025uYFy.notEvaluated) {
            return hs_a2025uYFy.hscall();
        } else {
            return hs_a2025uYFy;
        }
    };
    hs_a2125uYFA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdctestBit25uYFB.evaluateOnce = function () {
        if (hs_a2125uYFA.notEvaluated) {
            return hs_a2125uYFA.hscall();
        } else {
            return hs_a2125uYFA;
        }
    };
    hs_a2225uYFC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcbitSizze25uYFD.evaluateOnce = function () {
        if (hs_a2225uYFC.notEvaluated) {
            return hs_a2225uYFC.hscall();
        } else {
            return hs_a2225uYFC;
        }
    };
    hs_a2325uYFE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcisSigned25uYFF.evaluateOnce = function () {
        if (hs_a2325uYFE.notEvaluated) {
            return hs_a2325uYFE.hscall();
        } else {
            return hs_a2325uYFE;
        }
    };
    hs_a2425uYFG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcshiftL25uYFH.evaluateOnce = function () {
        if (hs_a2425uYFG.notEvaluated) {
            return hs_a2425uYFG.hscall();
        } else {
            return hs_a2425uYFG;
        }
    };
    hs_a2525uYFI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcshiftR25uYFJ.evaluateOnce = function () {
        if (hs_a2525uYFI.notEvaluated) {
            return hs_a2525uYFI.hscall();
        } else {
            return hs_a2525uYFI;
        }
    };
    hs_a2625uYFK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcrotateL25uYFL.evaluateOnce = function () {
        if (hs_a2625uYFK.notEvaluated) {
            return hs_a2625uYFK.hscall();
        } else {
            return hs_a2625uYFK;
        }
    };
    hs_a2725uYFM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcrotateR25uYFN.evaluateOnce = function () {
        if (hs_a2725uYFM.notEvaluated) {
            return hs_a2725uYFM.hscall();
        } else {
            return hs_a2725uYFM;
        }
    };
    hs_a2825uYFO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcquot25uYFP.evaluateOnce = function () {
        if (hs_a2825uYFO.notEvaluated) {
            return hs_a2825uYFO.hscall();
        } else {
            return hs_a2825uYFO;
        }
    };
    hs_a2925uYFQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcrem25uYFR.evaluateOnce = function () {
        if (hs_a2925uYFQ.notEvaluated) {
            return hs_a2925uYFQ.hscall();
        } else {
            return hs_a2925uYFQ;
        }
    };
    hs_a3025uYFS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcdiv25uYFT.evaluateOnce = function () {
        if (hs_a3025uYFS.notEvaluated) {
            return hs_a3025uYFS.hscall();
        } else {
            return hs_a3025uYFS;
        }
    };
    hs_a3125uYFU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcmod25uYFV.evaluateOnce = function () {
        if (hs_a3125uYFU.notEvaluated) {
            return hs_a3125uYFU.hscall();
        } else {
            return hs_a3125uYFU;
        }
    };
    hs_a3225uYFW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcquotRem25uYFX.evaluateOnce = function () {
        if (hs_a3225uYFW.notEvaluated) {
            return hs_a3225uYFW.hscall();
        } else {
            return hs_a3225uYFW;
        }
    };
    hs_a3325uYFY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcdivMod25uYFZ.evaluateOnce = function () {
        if (hs_a3325uYFY.notEvaluated) {
            return hs_a3325uYFY.hscall();
        } else {
            return hs_a3325uYFY;
        }
    };
    hs_a3425uYG0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdctoInteger25uYG1.evaluateOnce = function () {
        if (hs_a3425uYG0.notEvaluated) {
            return hs_a3425uYG0.hscall();
        } else {
            return hs_a3425uYG0;
        }
    };
    hs_a3525uYG2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
    };
    hs_zdcminBound25uYG3.evaluateOnce = function () {
        if (hs_a3525uYG2.notEvaluated) {
            return hs_a3525uYG2.hscall();
        } else {
            return hs_a3525uYG2;
        }
    };
    hs_a3625uYG4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
    };
    hs_zdcmaxBound25uYG5.evaluateOnce = function () {
        if (hs_a3625uYG4.notEvaluated) {
            return hs_a3625uYG4.hscall();
        } else {
            return hs_a3625uYG4;
        }
    };
    this.hs_zdfBoundedIntPtr.data = [hs_a3525uYG2, hs_a3625uYG4];
    hs_a3725uYG6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInt);
    };
    hs_zdctoRational25uYG7.evaluateOnce = function () {
        if (hs_a3725uYG6.notEvaluated) {
            return hs_a3725uYG6.hscall();
        } else {
            return hs_a3725uYG6;
        }
    };
    hs_a3825uYG8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcsizzeOf25uYG9.evaluateOnce = function () {
        if (hs_a3825uYG8.notEvaluated) {
            return hs_a3825uYG8.hscall();
        } else {
            return hs_a3825uYG8;
        }
    };
    hs_a3925uYGa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcalignment25uYGb.evaluateOnce = function () {
        if (hs_a3925uYGa.notEvaluated) {
            return hs_a3925uYGa.hscall();
        } else {
            return hs_a3925uYGa;
        }
    };
    hs_a4025uYGc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpeekElemOff25uYGd.evaluateOnce = function () {
        if (hs_a4025uYGc.notEvaluated) {
            return hs_a4025uYGc.hscall();
        } else {
            return hs_a4025uYGc;
        }
    };
    hs_a4125uYGe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpokeElemOff25uYGf.evaluateOnce = function () {
        if (hs_a4125uYGe.notEvaluated) {
            return hs_a4125uYGe.hscall();
        } else {
            return hs_a4125uYGe;
        }
    };
    hs_a4225uYGg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpeekByteOff25uYGh.evaluateOnce = function () {
        if (hs_a4225uYGg.notEvaluated) {
            return hs_a4225uYGg.hscall();
        } else {
            return hs_a4225uYGg;
        }
    };
    hs_a4325uYGi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpokeByteOff25uYGj.evaluateOnce = function () {
        if (hs_a4325uYGi.notEvaluated) {
            return hs_a4325uYGi.hscall();
        } else {
            return hs_a4325uYGi;
        }
    };
    hs_a4425uYGk.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpeek25uYGl.evaluateOnce = function () {
        if (hs_a4425uYGk.notEvaluated) {
            return hs_a4425uYGk.hscall();
        } else {
            return hs_a4425uYGk;
        }
    };
    hs_a4525uYGm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpoke25uYGn.evaluateOnce = function () {
        if (hs_a4525uYGm.notEvaluated) {
            return hs_a4525uYGm.hscall();
        } else {
            return hs_a4525uYGm;
        }
    };
    this.hs_zdfStorableIntPtr.data = [hs_a3825uYG8, hs_a3925uYGa, hs_a4025uYGc, hs_a4125uYGe, hs_a4225uYGg, hs_a4325uYGi, hs_a4425uYGk, hs_a4525uYGm];
    hs_a4625uYGo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcsucc25uYGp.evaluateOnce = function () {
        if (hs_a4625uYGo.notEvaluated) {
            return hs_a4625uYGo.hscall();
        } else {
            return hs_a4625uYGo;
        }
    };
    hs_a4725uYGq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcpred25uYGr.evaluateOnce = function () {
        if (hs_a4725uYGq.notEvaluated) {
            return hs_a4725uYGq.hscall();
        } else {
            return hs_a4725uYGq;
        }
    };
    hs_a4825uYGs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdctoEnum25uYGt.evaluateOnce = function () {
        if (hs_a4825uYGs.notEvaluated) {
            return hs_a4825uYGs.hscall();
        } else {
            return hs_a4825uYGs;
        }
    };
    hs_a4925uYGu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcfromEnum25uYGv.evaluateOnce = function () {
        if (hs_a4925uYGu.notEvaluated) {
            return hs_a4925uYGu.hscall();
        } else {
            return hs_a4925uYGu;
        }
    };
    hs_a5025uYGw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFrom25uYGx.evaluateOnce = function () {
        if (hs_a5025uYGw.notEvaluated) {
            return hs_a5025uYGw.hscall();
        } else {
            return hs_a5025uYGw;
        }
    };
    hs_a5125uYGy.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFromThen25uYGz.evaluateOnce = function () {
        if (hs_a5125uYGy.notEvaluated) {
            return hs_a5125uYGy.hscall();
        } else {
            return hs_a5125uYGy;
        }
    };
    hs_a5225uYGA.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFromTo25uYGB.evaluateOnce = function () {
        if (hs_a5225uYGA.notEvaluated) {
            return hs_a5225uYGA.hscall();
        } else {
            return hs_a5225uYGA;
        }
    };
    hs_a5325uYGC.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFromThenTo25uYGD.evaluateOnce = function () {
        if (hs_a5325uYGC.notEvaluated) {
            return hs_a5325uYGC.hscall();
        } else {
            return hs_a5325uYGC;
        }
    };
    this.hs_zdfEnumIntPtr.data = [hs_a4625uYGo, hs_a4725uYGq, hs_a4825uYGs, hs_a4925uYGu, hs_a5025uYGw, hs_a5125uYGy, hs_a5225uYGA, hs_a5325uYGC];
    hs_a5425uYGE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdczp25uYGF.evaluateOnce = function () {
        if (hs_a5425uYGE.notEvaluated) {
            return hs_a5425uYGE.hscall();
        } else {
            return hs_a5425uYGE;
        }
    };
    hs_a5525uYGG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdczt25uYGH.evaluateOnce = function () {
        if (hs_a5525uYGG.notEvaluated) {
            return hs_a5525uYGG.hscall();
        } else {
            return hs_a5525uYGG;
        }
    };
    hs_a5625uYGI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdczm25uYGJ.evaluateOnce = function () {
        if (hs_a5625uYGI.notEvaluated) {
            return hs_a5625uYGI.hscall();
        } else {
            return hs_a5625uYGI;
        }
    };
    hs_a5725uYGK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcnegate25uYGL.evaluateOnce = function () {
        if (hs_a5725uYGK.notEvaluated) {
            return hs_a5725uYGK.hscall();
        } else {
            return hs_a5725uYGK;
        }
    };
    hs_a5825uYGM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcabs25uYGN.evaluateOnce = function () {
        if (hs_a5825uYGM.notEvaluated) {
            return hs_a5825uYGM.hscall();
        } else {
            return hs_a5825uYGM;
        }
    };
    hs_a5925uYGO.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcsignum25uYGP.evaluateOnce = function () {
        if (hs_a5925uYGO.notEvaluated) {
            return hs_a5925uYGO.hscall();
        } else {
            return hs_a5925uYGO;
        }
    };
    hs_a6025uYGQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromInteger25uYGR.evaluateOnce = function () {
        if (hs_a6025uYGQ.notEvaluated) {
            return hs_a6025uYGQ.hscall();
        } else {
            return hs_a6025uYGQ;
        }
    };
    hs_a6125uYGS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdccompare25uYGT.evaluateOnce = function () {
        if (hs_a6125uYGS.notEvaluated) {
            return hs_a6125uYGS.hscall();
        } else {
            return hs_a6125uYGS;
        }
    };
    hs_a6225uYGU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdczl25uYGV.evaluateOnce = function () {
        if (hs_a6225uYGU.notEvaluated) {
            return hs_a6225uYGU.hscall();
        } else {
            return hs_a6225uYGU;
        }
    };
    hs_a6325uYGW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdczgze25uYGX.evaluateOnce = function () {
        if (hs_a6325uYGW.notEvaluated) {
            return hs_a6325uYGW.hscall();
        } else {
            return hs_a6325uYGW;
        }
    };
    hs_a6425uYGY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdczg25uYGZ.evaluateOnce = function () {
        if (hs_a6425uYGY.notEvaluated) {
            return hs_a6425uYGY.hscall();
        } else {
            return hs_a6425uYGY;
        }
    };
    hs_a6525uYH0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdczlze25uYH1.evaluateOnce = function () {
        if (hs_a6525uYH0.notEvaluated) {
            return hs_a6525uYH0.hscall();
        } else {
            return hs_a6525uYH0;
        }
    };
    hs_a6625uYH2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdcmax25uYH3.evaluateOnce = function () {
        if (hs_a6625uYH2.notEvaluated) {
            return hs_a6625uYH2.hscall();
        } else {
            return hs_a6625uYH2;
        }
    };
    hs_a6725uYH4.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt);
    };
    hs_zdcmin25uYH5.evaluateOnce = function () {
        if (hs_a6725uYH4.notEvaluated) {
            return hs_a6725uYH4.hscall();
        } else {
            return hs_a6725uYH4;
        }
    };
    hs_a6825uYH6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt);
    };
    hs_zdczeze25uYH7.evaluateOnce = function () {
        if (hs_a6825uYH6.notEvaluated) {
            return hs_a6825uYH6.hscall();
        } else {
            return hs_a6825uYH6;
        }
    };
    hs_a6925uYH8.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt);
    };
    hs_zdczsze25uYH9.evaluateOnce = function () {
        if (hs_a6925uYH8.notEvaluated) {
            return hs_a6925uYH8.hscall();
        } else {
            return hs_a6925uYH8;
        }
    };
    this.hs_zdfEqIntPtr.data = [hs_a6825uYH6, hs_a6925uYH8];
    this.hs_zdfOrdIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqIntPtr, hs_a6125uYGS, hs_a6225uYGU, hs_a6325uYGW, hs_a6425uYGY, hs_a6525uYH0, hs_a6625uYH2, hs_a6725uYH4];
    this.hs_zdfNumIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqIntPtr, $hs.modules.ForeignziPtr.hs_zdfShowIntPtr, hs_a5425uYGE, hs_a5525uYGG, hs_a5625uYGI, hs_a5725uYGK, hs_a5825uYGM, hs_a5925uYGO, hs_a6025uYGQ];
    this.hs_zdfRealIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumIntPtr, $hs.modules.ForeignziPtr.hs_zdfOrdIntPtr, hs_a3725uYG6];
    this.hs_zdfIntegralIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfRealIntPtr, $hs.modules.ForeignziPtr.hs_zdfEnumIntPtr, hs_a2825uYFO, hs_a2925uYFQ, hs_a3025uYFS, hs_a3125uYFU, hs_a3225uYFW, hs_a3325uYFY, hs_a3425uYG0];
    this.hs_zdfBitsIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumIntPtr, hs_a1125uYFg, hs_a1225uYFi, hs_a1325uYFk, hs_a1425uYFm, hs_a1525uYFo, hs_a1625uYFq, hs_a1725uYFs, hs_a1825uYFu, hs_a1925uYFw, hs_a2025uYFy, hs_a2125uYFA, hs_a2225uYFC, hs_a2325uYFE, hs_a2425uYFG, hs_a2525uYFI, hs_a2625uYFK, hs_a2725uYFM];
    hs_a7025uYHa.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdczizazi125uYHb.evaluateOnce = function () {
        if (hs_a7025uYHa.notEvaluated) {
            return hs_a7025uYHa.hscall();
        } else {
            return hs_a7025uYHa;
        }
    };
    hs_a7125uYHc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdczizbzi125uYHd.evaluateOnce = function () {
        if (hs_a7125uYHc.notEvaluated) {
            return hs_a7125uYHc.hscall();
        } else {
            return hs_a7125uYHc;
        }
    };
    hs_a7225uYHe.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcxor125uYHf.evaluateOnce = function () {
        if (hs_a7225uYHe.notEvaluated) {
            return hs_a7225uYHe.hscall();
        } else {
            return hs_a7225uYHe;
        }
    };
    hs_a7325uYHg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdccomplement125uYHh.evaluateOnce = function () {
        if (hs_a7325uYHg.notEvaluated) {
            return hs_a7325uYHg.hscall();
        } else {
            return hs_a7325uYHg;
        }
    };
    hs_a7425uYHi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshift125uYHj.evaluateOnce = function () {
        if (hs_a7425uYHi.notEvaluated) {
            return hs_a7425uYHi.hscall();
        } else {
            return hs_a7425uYHi;
        }
    };
    hs_a7525uYHk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotate125uYHl.evaluateOnce = function () {
        if (hs_a7525uYHk.notEvaluated) {
            return hs_a7525uYHk.hscall();
        } else {
            return hs_a7525uYHk;
        }
    };
    hs_a7625uYHm.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcbit125uYHn.evaluateOnce = function () {
        if (hs_a7625uYHm.notEvaluated) {
            return hs_a7625uYHm.hscall();
        } else {
            return hs_a7625uYHm;
        }
    };
    hs_a7725uYHo.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcsetBit125uYHp.evaluateOnce = function () {
        if (hs_a7725uYHo.notEvaluated) {
            return hs_a7725uYHo.hscall();
        } else {
            return hs_a7725uYHo;
        }
    };
    hs_a7825uYHq.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcclearBit125uYHr.evaluateOnce = function () {
        if (hs_a7825uYHq.notEvaluated) {
            return hs_a7825uYHq.hscall();
        } else {
            return hs_a7825uYHq;
        }
    };
    hs_a7925uYHs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdccomplementBit125uYHt.evaluateOnce = function () {
        if (hs_a7925uYHs.notEvaluated) {
            return hs_a7925uYHs.hscall();
        } else {
            return hs_a7925uYHs;
        }
    };
    hs_a8025uYHu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdctestBit125uYHv.evaluateOnce = function () {
        if (hs_a8025uYHu.notEvaluated) {
            return hs_a8025uYHu.hscall();
        } else {
            return hs_a8025uYHu;
        }
    };
    hs_a8125uYHw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcbitSizze125uYHx.evaluateOnce = function () {
        if (hs_a8125uYHw.notEvaluated) {
            return hs_a8125uYHw.hscall();
        } else {
            return hs_a8125uYHw;
        }
    };
    hs_a8225uYHy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcisSigned125uYHz.evaluateOnce = function () {
        if (hs_a8225uYHy.notEvaluated) {
            return hs_a8225uYHy.hscall();
        } else {
            return hs_a8225uYHy;
        }
    };
    hs_a8325uYHA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftL125uYHB.evaluateOnce = function () {
        if (hs_a8325uYHA.notEvaluated) {
            return hs_a8325uYHA.hscall();
        } else {
            return hs_a8325uYHA;
        }
    };
    hs_a8425uYHC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftR125uYHD.evaluateOnce = function () {
        if (hs_a8425uYHC.notEvaluated) {
            return hs_a8425uYHC.hscall();
        } else {
            return hs_a8425uYHC;
        }
    };
    hs_a8525uYHE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotateL125uYHF.evaluateOnce = function () {
        if (hs_a8525uYHE.notEvaluated) {
            return hs_a8525uYHE.hscall();
        } else {
            return hs_a8525uYHE;
        }
    };
    hs_a8625uYHG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotateR125uYHH.evaluateOnce = function () {
        if (hs_a8625uYHG.notEvaluated) {
            return hs_a8625uYHG.hscall();
        } else {
            return hs_a8625uYHG;
        }
    };
    hs_a8725uYHI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcquot125uYHJ.evaluateOnce = function () {
        if (hs_a8725uYHI.notEvaluated) {
            return hs_a8725uYHI.hscall();
        } else {
            return hs_a8725uYHI;
        }
    };
    hs_a8825uYHK.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcrem125uYHL.evaluateOnce = function () {
        if (hs_a8825uYHK.notEvaluated) {
            return hs_a8825uYHK.hscall();
        } else {
            return hs_a8825uYHK;
        }
    };
    hs_a8925uYHM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcdiv125uYHN.evaluateOnce = function () {
        if (hs_a8925uYHM.notEvaluated) {
            return hs_a8925uYHM.hscall();
        } else {
            return hs_a8925uYHM;
        }
    };
    hs_a9025uYHO.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcmod125uYHP.evaluateOnce = function () {
        if (hs_a9025uYHO.notEvaluated) {
            return hs_a9025uYHO.hscall();
        } else {
            return hs_a9025uYHO;
        }
    };
    hs_a9125uYHQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcquotRem125uYHR.evaluateOnce = function () {
        if (hs_a9125uYHQ.notEvaluated) {
            return hs_a9125uYHQ.hscall();
        } else {
            return hs_a9125uYHQ;
        }
    };
    hs_a9225uYHS.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcdivMod125uYHT.evaluateOnce = function () {
        if (hs_a9225uYHS.notEvaluated) {
            return hs_a9225uYHS.hscall();
        } else {
            return hs_a9225uYHS;
        }
    };
    hs_a9325uYHU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdctoInteger125uYHV.evaluateOnce = function () {
        if (hs_a9325uYHU.notEvaluated) {
            return hs_a9325uYHU.hscall();
        } else {
            return hs_a9325uYHU;
        }
    };
    hs_a9425uYHW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcminBound125uYHX.evaluateOnce = function () {
        if (hs_a9425uYHW.notEvaluated) {
            return hs_a9425uYHW.hscall();
        } else {
            return hs_a9425uYHW;
        }
    };
    hs_a9525uYHY.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcmaxBound125uYHZ.evaluateOnce = function () {
        if (hs_a9525uYHY.notEvaluated) {
            return hs_a9525uYHY.hscall();
        } else {
            return hs_a9525uYHY;
        }
    };
    this.hs_zdfBoundedWordPtr.data = [hs_a9425uYHW, hs_a9525uYHY];
    hs_a9625uYI0.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord);
    };
    hs_zdctoRational125uYI1.evaluateOnce = function () {
        if (hs_a9625uYI0.notEvaluated) {
            return hs_a9625uYI0.hscall();
        } else {
            return hs_a9625uYI0;
        }
    };
    hs_a9725uYI2.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcsizzeOf125uYI3.evaluateOnce = function () {
        if (hs_a9725uYI2.notEvaluated) {
            return hs_a9725uYI2.hscall();
        } else {
            return hs_a9725uYI2;
        }
    };
    hs_a9825uYI4.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcalignment125uYI5.evaluateOnce = function () {
        if (hs_a9825uYI4.notEvaluated) {
            return hs_a9825uYI4.hscall();
        } else {
            return hs_a9825uYI4;
        }
    };
    hs_a9925uYI6.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpeekElemOff125uYI7.evaluateOnce = function () {
        if (hs_a9925uYI6.notEvaluated) {
            return hs_a9925uYI6.hscall();
        } else {
            return hs_a9925uYI6;
        }
    };
    hs_a10025uYI8.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpokeElemOff125uYI9.evaluateOnce = function () {
        if (hs_a10025uYI8.notEvaluated) {
            return hs_a10025uYI8.hscall();
        } else {
            return hs_a10025uYI8;
        }
    };
    hs_a10125uYIa.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpeekByteOff125uYIb.evaluateOnce = function () {
        if (hs_a10125uYIa.notEvaluated) {
            return hs_a10125uYIa.hscall();
        } else {
            return hs_a10125uYIa;
        }
    };
    hs_a10225uYIc.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpokeByteOff125uYId.evaluateOnce = function () {
        if (hs_a10225uYIc.notEvaluated) {
            return hs_a10225uYIc.hscall();
        } else {
            return hs_a10225uYIc;
        }
    };
    hs_a10325uYIe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpeek125uYIf.evaluateOnce = function () {
        if (hs_a10325uYIe.notEvaluated) {
            return hs_a10325uYIe.hscall();
        } else {
            return hs_a10325uYIe;
        }
    };
    hs_a10425uYIg.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpoke125uYIh.evaluateOnce = function () {
        if (hs_a10425uYIg.notEvaluated) {
            return hs_a10425uYIg.hscall();
        } else {
            return hs_a10425uYIg;
        }
    };
    this.hs_zdfStorableWordPtr.data = [hs_a9725uYI2, hs_a9825uYI4, hs_a9925uYI6, hs_a10025uYI8, hs_a10125uYIa, hs_a10225uYIc, hs_a10325uYIe, hs_a10425uYIg];
    hs_a10525uYIi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcsucc125uYIj.evaluateOnce = function () {
        if (hs_a10525uYIi.notEvaluated) {
            return hs_a10525uYIi.hscall();
        } else {
            return hs_a10525uYIi;
        }
    };
    hs_a10625uYIk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcpred125uYIl.evaluateOnce = function () {
        if (hs_a10625uYIk.notEvaluated) {
            return hs_a10625uYIk.hscall();
        } else {
            return hs_a10625uYIk;
        }
    };
    hs_a10725uYIm.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdctoEnum125uYIn.evaluateOnce = function () {
        if (hs_a10725uYIm.notEvaluated) {
            return hs_a10725uYIm.hscall();
        } else {
            return hs_a10725uYIm;
        }
    };
    hs_a10825uYIo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcfromEnum125uYIp.evaluateOnce = function () {
        if (hs_a10825uYIo.notEvaluated) {
            return hs_a10825uYIo.hscall();
        } else {
            return hs_a10825uYIo;
        }
    };
    hs_a10925uYIq.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFrom125uYIr.evaluateOnce = function () {
        if (hs_a10925uYIq.notEvaluated) {
            return hs_a10925uYIq.hscall();
        } else {
            return hs_a10925uYIq;
        }
    };
    hs_a11025uYIs.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFromThen125uYIt.evaluateOnce = function () {
        if (hs_a11025uYIs.notEvaluated) {
            return hs_a11025uYIs.hscall();
        } else {
            return hs_a11025uYIs;
        }
    };
    hs_a11125uYIu.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFromTo125uYIv.evaluateOnce = function () {
        if (hs_a11125uYIu.notEvaluated) {
            return hs_a11125uYIu.hscall();
        } else {
            return hs_a11125uYIu;
        }
    };
    hs_a11225uYIw.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFromThenTo125uYIx.evaluateOnce = function () {
        if (hs_a11225uYIw.notEvaluated) {
            return hs_a11225uYIw.hscall();
        } else {
            return hs_a11225uYIw;
        }
    };
    this.hs_zdfEnumWordPtr.data = [hs_a10525uYIi, hs_a10625uYIk, hs_a10725uYIm, hs_a10825uYIo, hs_a10925uYIq, hs_a11025uYIs, hs_a11125uYIu, hs_a11225uYIw];
    hs_a11325uYIy.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdczp125uYIz.evaluateOnce = function () {
        if (hs_a11325uYIy.notEvaluated) {
            return hs_a11325uYIy.hscall();
        } else {
            return hs_a11325uYIy;
        }
    };
    hs_a11425uYIA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdczt125uYIB.evaluateOnce = function () {
        if (hs_a11425uYIA.notEvaluated) {
            return hs_a11425uYIA.hscall();
        } else {
            return hs_a11425uYIA;
        }
    };
    hs_a11525uYIC.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdczm125uYID.evaluateOnce = function () {
        if (hs_a11525uYIC.notEvaluated) {
            return hs_a11525uYIC.hscall();
        } else {
            return hs_a11525uYIC;
        }
    };
    hs_a11625uYIE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcnegate125uYIF.evaluateOnce = function () {
        if (hs_a11625uYIE.notEvaluated) {
            return hs_a11625uYIE.hscall();
        } else {
            return hs_a11625uYIE;
        }
    };
    hs_a11725uYIG.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcabs125uYIH.evaluateOnce = function () {
        if (hs_a11725uYIG.notEvaluated) {
            return hs_a11725uYIG.hscall();
        } else {
            return hs_a11725uYIG;
        }
    };
    hs_a11825uYII.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcsignum125uYIJ.evaluateOnce = function () {
        if (hs_a11825uYII.notEvaluated) {
            return hs_a11825uYII.hscall();
        } else {
            return hs_a11825uYII;
        }
    };
    hs_a11925uYIK.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcfromInteger125uYIL.evaluateOnce = function () {
        if (hs_a11925uYIK.notEvaluated) {
            return hs_a11925uYIK.hscall();
        } else {
            return hs_a11925uYIK;
        }
    };
    hs_a12025uYIM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdccompare125uYIN.evaluateOnce = function () {
        if (hs_a12025uYIM.notEvaluated) {
            return hs_a12025uYIM.hscall();
        } else {
            return hs_a12025uYIM;
        }
    };
    hs_a12125uYIO.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczl125uYIP.evaluateOnce = function () {
        if (hs_a12125uYIO.notEvaluated) {
            return hs_a12125uYIO.hscall();
        } else {
            return hs_a12125uYIO;
        }
    };
    hs_a12225uYIQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczgze125uYIR.evaluateOnce = function () {
        if (hs_a12225uYIQ.notEvaluated) {
            return hs_a12225uYIQ.hscall();
        } else {
            return hs_a12225uYIQ;
        }
    };
    hs_a12325uYIS.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczg125uYIT.evaluateOnce = function () {
        if (hs_a12325uYIS.notEvaluated) {
            return hs_a12325uYIS.hscall();
        } else {
            return hs_a12325uYIS;
        }
    };
    hs_a12425uYIU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczlze125uYIV.evaluateOnce = function () {
        if (hs_a12425uYIU.notEvaluated) {
            return hs_a12425uYIU.hscall();
        } else {
            return hs_a12425uYIU;
        }
    };
    hs_a12525uYIW.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcmax125uYIX.evaluateOnce = function () {
        if (hs_a12525uYIW.notEvaluated) {
            return hs_a12525uYIW.hscall();
        } else {
            return hs_a12525uYIW;
        }
    };
    hs_a12625uYIY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcmin125uYIZ.evaluateOnce = function () {
        if (hs_a12625uYIY.notEvaluated) {
            return hs_a12625uYIY.hscall();
        } else {
            return hs_a12625uYIY;
        }
    };
    hs_a12725uYJ0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord);
    };
    hs_zdczeze125uYJ1.evaluateOnce = function () {
        if (hs_a12725uYJ0.notEvaluated) {
            return hs_a12725uYJ0.hscall();
        } else {
            return hs_a12725uYJ0;
        }
    };
    hs_a12825uYJ2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord);
    };
    hs_zdczsze125uYJ3.evaluateOnce = function () {
        if (hs_a12825uYJ2.notEvaluated) {
            return hs_a12825uYJ2.hscall();
        } else {
            return hs_a12825uYJ2;
        }
    };
    this.hs_zdfEqWordPtr.data = [hs_a12725uYJ0, hs_a12825uYJ2];
    this.hs_zdfOrdWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqWordPtr, hs_a12025uYIM, hs_a12125uYIO, hs_a12225uYIQ, hs_a12325uYIS, hs_a12425uYIU, hs_a12525uYIW, hs_a12625uYIY];
    this.hs_zdfNumWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqWordPtr, $hs.modules.ForeignziPtr.hs_zdfShowWordPtr, hs_a11325uYIy, hs_a11425uYIA, hs_a11525uYIC, hs_a11625uYIE, hs_a11725uYIG, hs_a11825uYII, hs_a11925uYIK];
    this.hs_zdfRealWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumWordPtr, $hs.modules.ForeignziPtr.hs_zdfOrdWordPtr, hs_a9625uYI0];
    this.hs_zdfIntegralWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfRealWordPtr, $hs.modules.ForeignziPtr.hs_zdfEnumWordPtr, hs_a8725uYHI, hs_a8825uYHK, hs_a8925uYHM, hs_a9025uYHO, hs_a9125uYHQ, hs_a9225uYHS, hs_a9325uYHU];
    this.hs_zdfBitsWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumWordPtr, hs_a7025uYHa, hs_a7125uYHc, hs_a7225uYHe, hs_a7325uYHg, hs_a7425uYHi, hs_a7525uYHk, hs_a7625uYHm, hs_a7725uYHo, hs_a7825uYHq, hs_a7925uYHs, hs_a8025uYHu, hs_a8125uYHw, hs_a8225uYHy, hs_a8325uYHA, hs_a8425uYHC, hs_a8525uYHE, hs_a8625uYHG];
    hs_zdctypeOf25uYJ4.evaluate = function (hs_ds26Dnfq) {
        var hs_sat26DnfK = new $hs.Thunk();
        hs_sat26DnfK.evaluateOnce = function () {
            var hs_sat26DnfM = new $hs.Thunk();
            hs_sat26DnfM.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("WordPtr\x00");
            };
            var hs_sat26DnfN = new $hs.Thunk();
            hs_sat26DnfN.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.Ptr\x00");
            };
            var hs_sat26DnfL = new $hs.Thunk();
            hs_sat26DnfL.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DnfL, hs_sat26DnfN, hs_sat26DnfM);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DnfK, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableWordPtr.evaluateOnce = function () {
        if (hs_zdctypeOf25uYJ4.notEvaluated) {
            return hs_zdctypeOf25uYJ4.hscall();
        } else {
            return hs_zdctypeOf25uYJ4;
        }
    };
    hs_zdctypeOf125uYJb.evaluate = function (hs_ds26Dnfx) {
        var hs_sat26DnfO = new $hs.Thunk();
        hs_sat26DnfO.evaluateOnce = function () {
            var hs_sat26DnfQ = new $hs.Thunk();
            hs_sat26DnfQ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("IntPtr\x00");
            };
            var hs_sat26DnfR = new $hs.Thunk();
            hs_sat26DnfR.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Foreign.Ptr\x00");
            };
            var hs_sat26DnfP = new $hs.Thunk();
            hs_sat26DnfP.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("base\x00");
            };
            return $hs.modules.DataziTypeableziInternal.hs_mkTyCon.hscall($hs.alert("Unsupported literal: Int64"), $hs.alert("Unsupported literal: Int64"), hs_sat26DnfP, hs_sat26DnfR, hs_sat26DnfQ);
        };
        return $hs.modules.DataziTypeableziInternal.hs_mkTyConApp.hscall(hs_sat26DnfO, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableIntPtr.evaluateOnce = function () {
        if (hs_zdctypeOf125uYJb.notEvaluated) {
            return hs_zdctypeOf125uYJb.hscall();
        } else {
            return hs_zdctypeOf125uYJb;
        }
    };
    this.hs_IntPtr.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziPtr.hs_IntPtr.hscall(hs_eta1cW6l3);
    };
    this.hs_WordPtr.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziPtr.hs_WordPtr.hscall(hs_eta1cW6l3);
    };
};
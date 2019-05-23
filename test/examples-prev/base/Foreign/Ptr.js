
$hs.modules.ForeignziPtr = new $hs.Module();
$hs.modules.ForeignziPtr.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "Data.Typeable", "GHC.Classes", "GHC.Read", "GHC.Word", "Data.Bits", "Foreign.Storable"];
$hs.modules.ForeignziPtr.initBeforeDependencies = function () {
    this.hs_intPtrToPtr = new $hs.Func(1);
    this.hs_ptrToIntPtr = new $hs.Func(1);
    this.hs_wordPtrToPtr = new $hs.Func(1);
    this.hs_ptrToWordPtr = new $hs.Func(1);
    this.hs_freeHaskellFunPtr = new $hs.Func(2);
    this.hs_zdfReadWordPtr = new $hs.Data(1);
    this.hs_zdfShowWordPtr = new $hs.Data(1);
    this.hs_zdfTypeableWordPtr = new $hs.Thunk();
    this.hs_zdfReadIntPtr = new $hs.Data(1);
    this.hs_zdfShowIntPtr = new $hs.Data(1);
    this.hs_zdfTypeableIntPtr = new $hs.Thunk();
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
    this.hs_IntPtr = new $hs.Func(1);
    this.hs_WordPtr = new $hs.Func(1);
    this.hs_intPtrToPtr.notEvaluated = true;
    this.hs_intPtrToPtr.evaluate = function (hs_ds26DLRf) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26DLRf);
    };
    this.hs_ptrToIntPtr.notEvaluated = true;
    this.hs_ptrToIntPtr.evaluate = function (hs_ds26DLRl) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26DLRl);
    };
    this.hs_wordPtrToPtr.notEvaluated = true;
    this.hs_wordPtrToPtr.evaluate = function (hs_ds26DLRr) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26DLRr);
    };
    this.hs_ptrToWordPtr.notEvaluated = true;
    this.hs_ptrToWordPtr.evaluate = function (hs_ds26DLRy) {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluate(hs_ds26DLRy);
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
    this.hs_zdfTypeableWordPtr.evaluateOnce = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluateOnce();
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
    this.hs_zdfTypeableIntPtr.evaluateOnce = function () {
        $hs.modules.ForeignziPtr.loadDependencies();
        return this.evaluateOnce();
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
    var hs_sat26DM0H = new $hs.Thunk();
    var hs_tyConIntPtr25tjGx = new $hs.Thunk();
    var hs_sat26DM0I = new $hs.Thunk();
    var hs_tyConWordPtr25tjGv = new $hs.Thunk();
    var hs_zdwccall25vnlr = new $hs.Func(2);
    var hs_a25vnly = new $hs.Func(2);
    var hs_a125vnlM = new $hs.Thunk();
    var hs_zdcreadList25vnlO = new $hs.Thunk();
    var hs_a225vnlQ = new $hs.Thunk();
    var hs_zdcreadsPrec25vnlS = new $hs.Thunk();
    var hs_zdcreadListPrec25vnlU = new $hs.Thunk();
    var hs_zdcreadPrec25vnlW = new $hs.Thunk();
    var hs_a325vnlY = new $hs.Thunk();
    var hs_zdcshowList25vnm0 = new $hs.Thunk();
    var hs_a425vnm2 = new $hs.Thunk();
    var hs_zdcshow25vnm4 = new $hs.Thunk();
    var hs_a525vnm6 = new $hs.Thunk();
    var hs_zdcshowsPrec25vnm8 = new $hs.Thunk();
    var hs_zdctypeOf25vnma = new $hs.Func(1);
    var hs_a625vnme = new $hs.Thunk();
    var hs_zdcreadList125vnmg = new $hs.Thunk();
    var hs_a725vnmi = new $hs.Thunk();
    var hs_zdcreadsPrec125vnmk = new $hs.Thunk();
    var hs_zdcreadListPrec125vnmm = new $hs.Thunk();
    var hs_zdcreadPrec125vnmo = new $hs.Thunk();
    var hs_a825vnmq = new $hs.Thunk();
    var hs_zdcshowList125vnms = new $hs.Thunk();
    var hs_a925vnmu = new $hs.Thunk();
    var hs_zdcshow125vnmw = new $hs.Thunk();
    var hs_a1025vnmy = new $hs.Thunk();
    var hs_zdcshowsPrec125vnmA = new $hs.Thunk();
    var hs_zdctypeOf125vnmC = new $hs.Func(1);
    var hs_a1125vnmG = new $hs.Thunk();
    var hs_zdczizazi25vnmI = new $hs.Thunk();
    var hs_a1225vnmK = new $hs.Thunk();
    var hs_zdczizbzi25vnmM = new $hs.Thunk();
    var hs_a1325vnmO = new $hs.Thunk();
    var hs_zdcxor25vnmQ = new $hs.Thunk();
    var hs_a1425vnmS = new $hs.Thunk();
    var hs_zdccomplement25vnmU = new $hs.Thunk();
    var hs_a1525vnmW = new $hs.Thunk();
    var hs_zdcshift25vnmY = new $hs.Thunk();
    var hs_a1625vnn0 = new $hs.Thunk();
    var hs_zdcrotate25vnn2 = new $hs.Thunk();
    var hs_a1725vnn4 = new $hs.Thunk();
    var hs_zdcbit25vnn6 = new $hs.Thunk();
    var hs_a1825vnn8 = new $hs.Thunk();
    var hs_zdcsetBit25vnna = new $hs.Thunk();
    var hs_a1925vnnc = new $hs.Thunk();
    var hs_zdcclearBit25vnne = new $hs.Thunk();
    var hs_a2025vnng = new $hs.Thunk();
    var hs_zdccomplementBit25vnni = new $hs.Thunk();
    var hs_a2125vnnk = new $hs.Thunk();
    var hs_zdctestBit25vnnm = new $hs.Thunk();
    var hs_a2225vnno = new $hs.Thunk();
    var hs_zdcbitSizze25vnnq = new $hs.Thunk();
    var hs_a2325vnns = new $hs.Thunk();
    var hs_zdcisSigned25vnnu = new $hs.Thunk();
    var hs_a2425vnnw = new $hs.Thunk();
    var hs_zdcshiftL25vnny = new $hs.Thunk();
    var hs_a2525vnnA = new $hs.Thunk();
    var hs_zdcshiftR25vnnC = new $hs.Thunk();
    var hs_a2625vnnE = new $hs.Thunk();
    var hs_zdcrotateL25vnnG = new $hs.Thunk();
    var hs_a2725vnnI = new $hs.Thunk();
    var hs_zdcrotateR25vnnK = new $hs.Thunk();
    var hs_a2825vnnM = new $hs.Thunk();
    var hs_zdcquot25vnnO = new $hs.Thunk();
    var hs_a2925vnnQ = new $hs.Thunk();
    var hs_zdcrem25vnnS = new $hs.Thunk();
    var hs_a3025vnnU = new $hs.Thunk();
    var hs_zdcdiv25vnnW = new $hs.Thunk();
    var hs_a3125vnnY = new $hs.Thunk();
    var hs_zdcmod25vno0 = new $hs.Thunk();
    var hs_a3225vno2 = new $hs.Thunk();
    var hs_zdcquotRem25vno4 = new $hs.Thunk();
    var hs_a3325vno6 = new $hs.Thunk();
    var hs_zdcdivMod25vno8 = new $hs.Thunk();
    var hs_a3425vnoa = new $hs.Thunk();
    var hs_zdctoInteger25vnoc = new $hs.Thunk();
    var hs_a3525vnoe = new $hs.Thunk();
    var hs_zdcminBound25vnog = new $hs.Thunk();
    var hs_a3625vnoi = new $hs.Thunk();
    var hs_zdcmaxBound25vnok = new $hs.Thunk();
    var hs_a3725vnom = new $hs.Thunk();
    var hs_zdctoRational25vnoo = new $hs.Thunk();
    var hs_a3825vnoq = new $hs.Thunk();
    var hs_zdcsizzeOf25vnos = new $hs.Thunk();
    var hs_a3925vnou = new $hs.Thunk();
    var hs_zdcalignment25vnow = new $hs.Thunk();
    var hs_a4025vnoy = new $hs.Thunk();
    var hs_zdcpeekElemOff25vnoA = new $hs.Thunk();
    var hs_a4125vnoC = new $hs.Thunk();
    var hs_zdcpokeElemOff25vnoE = new $hs.Thunk();
    var hs_a4225vnoG = new $hs.Thunk();
    var hs_zdcpeekByteOff25vnoI = new $hs.Thunk();
    var hs_a4325vnoK = new $hs.Thunk();
    var hs_zdcpokeByteOff25vnoM = new $hs.Thunk();
    var hs_a4425vnoO = new $hs.Thunk();
    var hs_zdcpeek25vnoQ = new $hs.Thunk();
    var hs_a4525vnoS = new $hs.Thunk();
    var hs_zdcpoke25vnoU = new $hs.Thunk();
    var hs_a4625vnoW = new $hs.Thunk();
    var hs_zdcsucc25vnoY = new $hs.Thunk();
    var hs_a4725vnp0 = new $hs.Thunk();
    var hs_zdcpred25vnp2 = new $hs.Thunk();
    var hs_a4825vnp4 = new $hs.Thunk();
    var hs_zdctoEnum25vnp6 = new $hs.Thunk();
    var hs_a4925vnp8 = new $hs.Thunk();
    var hs_zdcfromEnum25vnpa = new $hs.Thunk();
    var hs_a5025vnpc = new $hs.Thunk();
    var hs_zdcenumFrom25vnpe = new $hs.Thunk();
    var hs_a5125vnpg = new $hs.Thunk();
    var hs_zdcenumFromThen25vnpi = new $hs.Thunk();
    var hs_a5225vnpk = new $hs.Thunk();
    var hs_zdcenumFromTo25vnpm = new $hs.Thunk();
    var hs_a5325vnpo = new $hs.Thunk();
    var hs_zdcenumFromThenTo25vnpq = new $hs.Thunk();
    var hs_a5425vnps = new $hs.Thunk();
    var hs_zdczp25vnpu = new $hs.Thunk();
    var hs_a5525vnpw = new $hs.Thunk();
    var hs_zdczt25vnpy = new $hs.Thunk();
    var hs_a5625vnpA = new $hs.Thunk();
    var hs_zdczm25vnpC = new $hs.Thunk();
    var hs_a5725vnpE = new $hs.Thunk();
    var hs_zdcnegate25vnpG = new $hs.Thunk();
    var hs_a5825vnpI = new $hs.Thunk();
    var hs_zdcabs25vnpK = new $hs.Thunk();
    var hs_a5925vnpM = new $hs.Thunk();
    var hs_zdcsignum25vnpO = new $hs.Thunk();
    var hs_a6025vnpQ = new $hs.Thunk();
    var hs_zdcfromInteger25vnpS = new $hs.Thunk();
    var hs_a6125vnpU = new $hs.Thunk();
    var hs_zdccompare25vnpW = new $hs.Thunk();
    var hs_a6225vnpY = new $hs.Thunk();
    var hs_zdczl25vnq0 = new $hs.Thunk();
    var hs_a6325vnq2 = new $hs.Thunk();
    var hs_zdczgze25vnq4 = new $hs.Thunk();
    var hs_a6425vnq6 = new $hs.Thunk();
    var hs_zdczg25vnq8 = new $hs.Thunk();
    var hs_a6525vnqa = new $hs.Thunk();
    var hs_zdczlze25vnqc = new $hs.Thunk();
    var hs_a6625vnqe = new $hs.Thunk();
    var hs_zdcmax25vnqg = new $hs.Thunk();
    var hs_a6725vnqi = new $hs.Thunk();
    var hs_zdcmin25vnqk = new $hs.Thunk();
    var hs_a6825vnqm = new $hs.Thunk();
    var hs_zdczeze25vnqo = new $hs.Thunk();
    var hs_a6925vnqq = new $hs.Thunk();
    var hs_zdczsze25vnqs = new $hs.Thunk();
    var hs_a7025vnqu = new $hs.Thunk();
    var hs_zdczizazi125vnqw = new $hs.Thunk();
    var hs_a7125vnqy = new $hs.Thunk();
    var hs_zdczizbzi125vnqA = new $hs.Thunk();
    var hs_a7225vnqC = new $hs.Thunk();
    var hs_zdcxor125vnqE = new $hs.Thunk();
    var hs_a7325vnqG = new $hs.Thunk();
    var hs_zdccomplement125vnqI = new $hs.Thunk();
    var hs_a7425vnqK = new $hs.Thunk();
    var hs_zdcshift125vnqM = new $hs.Thunk();
    var hs_a7525vnqO = new $hs.Thunk();
    var hs_zdcrotate125vnqQ = new $hs.Thunk();
    var hs_a7625vnqS = new $hs.Thunk();
    var hs_zdcbit125vnqU = new $hs.Thunk();
    var hs_a7725vnqW = new $hs.Thunk();
    var hs_zdcsetBit125vnqY = new $hs.Thunk();
    var hs_a7825vnr0 = new $hs.Thunk();
    var hs_zdcclearBit125vnr2 = new $hs.Thunk();
    var hs_a7925vnr4 = new $hs.Thunk();
    var hs_zdccomplementBit125vnr6 = new $hs.Thunk();
    var hs_a8025vnr8 = new $hs.Thunk();
    var hs_zdctestBit125vnra = new $hs.Thunk();
    var hs_a8125vnrc = new $hs.Thunk();
    var hs_zdcbitSizze125vnre = new $hs.Thunk();
    var hs_a8225vnrg = new $hs.Thunk();
    var hs_zdcisSigned125vnri = new $hs.Thunk();
    var hs_a8325vnrk = new $hs.Thunk();
    var hs_zdcshiftL125vnrm = new $hs.Thunk();
    var hs_a8425vnro = new $hs.Thunk();
    var hs_zdcshiftR125vnrq = new $hs.Thunk();
    var hs_a8525vnrs = new $hs.Thunk();
    var hs_zdcrotateL125vnru = new $hs.Thunk();
    var hs_a8625vnrw = new $hs.Thunk();
    var hs_zdcrotateR125vnry = new $hs.Thunk();
    var hs_a8725vnrA = new $hs.Thunk();
    var hs_zdcquot125vnrC = new $hs.Thunk();
    var hs_a8825vnrE = new $hs.Thunk();
    var hs_zdcrem125vnrG = new $hs.Thunk();
    var hs_a8925vnrI = new $hs.Thunk();
    var hs_zdcdiv125vnrK = new $hs.Thunk();
    var hs_a9025vnrM = new $hs.Thunk();
    var hs_zdcmod125vnrO = new $hs.Thunk();
    var hs_a9125vnrQ = new $hs.Thunk();
    var hs_zdcquotRem125vnrS = new $hs.Thunk();
    var hs_a9225vnrU = new $hs.Thunk();
    var hs_zdcdivMod125vnrW = new $hs.Thunk();
    var hs_a9325vnrY = new $hs.Thunk();
    var hs_zdctoInteger125vns0 = new $hs.Thunk();
    var hs_a9425vns2 = new $hs.Thunk();
    var hs_zdcminBound125vns4 = new $hs.Thunk();
    var hs_a9525vns6 = new $hs.Thunk();
    var hs_zdcmaxBound125vns8 = new $hs.Thunk();
    var hs_a9625vnsa = new $hs.Thunk();
    var hs_zdctoRational125vnsc = new $hs.Thunk();
    var hs_a9725vnse = new $hs.Thunk();
    var hs_zdcsizzeOf125vnsg = new $hs.Thunk();
    var hs_a9825vnsi = new $hs.Thunk();
    var hs_zdcalignment125vnsk = new $hs.Thunk();
    var hs_a9925vnsm = new $hs.Thunk();
    var hs_zdcpeekElemOff125vnso = new $hs.Thunk();
    var hs_a10025vnsq = new $hs.Thunk();
    var hs_zdcpokeElemOff125vnss = new $hs.Thunk();
    var hs_a10125vnsu = new $hs.Thunk();
    var hs_zdcpeekByteOff125vnsw = new $hs.Thunk();
    var hs_a10225vnsy = new $hs.Thunk();
    var hs_zdcpokeByteOff125vnsA = new $hs.Thunk();
    var hs_a10325vnsC = new $hs.Thunk();
    var hs_zdcpeek125vnsE = new $hs.Thunk();
    var hs_a10425vnsG = new $hs.Thunk();
    var hs_zdcpoke125vnsI = new $hs.Thunk();
    var hs_a10525vnsK = new $hs.Thunk();
    var hs_zdcsucc125vnsM = new $hs.Thunk();
    var hs_a10625vnsO = new $hs.Thunk();
    var hs_zdcpred125vnsQ = new $hs.Thunk();
    var hs_a10725vnsS = new $hs.Thunk();
    var hs_zdctoEnum125vnsU = new $hs.Thunk();
    var hs_a10825vnsW = new $hs.Thunk();
    var hs_zdcfromEnum125vnsY = new $hs.Thunk();
    var hs_a10925vnt0 = new $hs.Thunk();
    var hs_zdcenumFrom125vnt2 = new $hs.Thunk();
    var hs_a11025vnt4 = new $hs.Thunk();
    var hs_zdcenumFromThen125vnt6 = new $hs.Thunk();
    var hs_a11125vnt8 = new $hs.Thunk();
    var hs_zdcenumFromTo125vnta = new $hs.Thunk();
    var hs_a11225vntc = new $hs.Thunk();
    var hs_zdcenumFromThenTo125vnte = new $hs.Thunk();
    var hs_a11325vntg = new $hs.Thunk();
    var hs_zdczp125vnti = new $hs.Thunk();
    var hs_a11425vntk = new $hs.Thunk();
    var hs_zdczt125vntm = new $hs.Thunk();
    var hs_a11525vnto = new $hs.Thunk();
    var hs_zdczm125vntq = new $hs.Thunk();
    var hs_a11625vnts = new $hs.Thunk();
    var hs_zdcnegate125vntu = new $hs.Thunk();
    var hs_a11725vntw = new $hs.Thunk();
    var hs_zdcabs125vnty = new $hs.Thunk();
    var hs_a11825vntA = new $hs.Thunk();
    var hs_zdcsignum125vntC = new $hs.Thunk();
    var hs_a11925vntE = new $hs.Thunk();
    var hs_zdcfromInteger125vntG = new $hs.Thunk();
    var hs_a12025vntI = new $hs.Thunk();
    var hs_zdccompare125vntK = new $hs.Thunk();
    var hs_a12125vntM = new $hs.Thunk();
    var hs_zdczl125vntO = new $hs.Thunk();
    var hs_a12225vntQ = new $hs.Thunk();
    var hs_zdczgze125vntS = new $hs.Thunk();
    var hs_a12325vntU = new $hs.Thunk();
    var hs_zdczg125vntW = new $hs.Thunk();
    var hs_a12425vntY = new $hs.Thunk();
    var hs_zdczlze125vnu0 = new $hs.Thunk();
    var hs_a12525vnu2 = new $hs.Thunk();
    var hs_zdcmax125vnu4 = new $hs.Thunk();
    var hs_a12625vnu6 = new $hs.Thunk();
    var hs_zdcmin125vnu8 = new $hs.Thunk();
    var hs_a12725vnua = new $hs.Thunk();
    var hs_zdczeze125vnuc = new $hs.Thunk();
    var hs_a12825vnue = new $hs.Thunk();
    var hs_zdczsze125vnug = new $hs.Thunk();
    this.hs_intPtrToPtr.evaluate = function (hs_ds26DLRf) {
        var hs_wild26DM0y = hs_ds26DLRf;
        if (hs_ds26DLRf.notEvaluated) {
            hs_wild26DM0y = hs_ds26DLRf.hscall();
        }
        var hs_izh26DLRi = hs_wild26DM0y.data[0];
        throw "primitive operation int2Addr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DM0x];
        return $res;
    };
    this.hs_ptrToIntPtr.evaluate = function (hs_ds26DLRl) {
        var hs_wild26DM0A = hs_ds26DLRl;
        if (hs_ds26DLRl.notEvaluated) {
            hs_wild26DM0A = hs_ds26DLRl.hscall();
        }
        var hs_azh26DLRo = hs_wild26DM0A.data[0];
        throw "primitive operation addr2Int#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DM0z];
        return $res;
    };
    this.hs_wordPtrToPtr.evaluate = function (hs_ds26DLRr) {
        var hs_wild26DM0D = hs_ds26DLRr;
        if (hs_ds26DLRr.notEvaluated) {
            hs_wild26DM0D = hs_ds26DLRr.hscall();
        }
        var hs_wzh26DLRu = hs_wild26DM0D.data[0];
        var hs_sat26DM0C = hs_wzh26DLRu;
        throw "primitive operation int2Addr#. Not implemeted yet.";
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DM0B];
        return $res;
    };
    this.hs_ptrToWordPtr.evaluate = function (hs_ds26DLRy) {
        var hs_wild26DM0G = hs_ds26DLRy;
        if (hs_ds26DLRy.notEvaluated) {
            hs_wild26DM0G = hs_ds26DLRy.hscall();
        }
        var hs_azh26DLRB = hs_wild26DM0G.data[0];
        throw "primitive operation addr2Int#. Not implemeted yet.";
        var hs_sat26DM0E = hs_sat26DM0F;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DM0E];
        return $res;
    };
    hs_sat26DM0H.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("IntPtr\x00");
    };
    hs_tyConIntPtr25tjGx.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DM0H);
    };
    hs_sat26DM0I.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("WordPtr\x00");
    };
    hs_tyConWordPtr25tjGv.evaluateOnce = function () {
        return $hs.modules.DataziTypeable.hs_mkTyCon.hscall(hs_sat26DM0I);
    };
    hs_zdwccall25vnlr.evaluate = function (hs_ds26DLRK, hs_eta1cW6l3) {
        var hs_sat26DM0J = new $hs.Func(1);
        hs_sat26DM0J.evaluate = function (hs_eta1cW6l3) {
            return [hs_eta1cW6l3, freeHaskellFunctionPtr(hs_ds26DLRK)];
        };
        return hs_sat26DM0J.hscall(hs_eta1cW6l3);
    };
    hs_a25vnly.evaluate = function (hs_ds26DLRR, hs_eta26DLRW) {
        var hs_ds126DM0L = hs_ds26DLRR;
        if (hs_ds26DLRR.notEvaluated) {
            hs_ds126DM0L = hs_ds26DLRR.hscall();
        }
        var hs_ds226DLRV = hs_ds126DM0L.data[0];
        var hs_wild26DM0K = [hs_eta26DLRW, freeHaskellFunctionPtr(hs_ds226DLRV)];
        var hs_ds326DLS0 = hs_wild26DM0K[0];
        return [hs_ds326DLS0, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_freeHaskellFunPtr.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25vnly.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a125vnlM.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadList25vnlO.evaluateOnce = function () {
        if (hs_a125vnlM.notEvaluated) {
            return hs_a125vnlM.hscall();
        } else {
            return hs_a125vnlM;
        }
    };
    hs_a225vnlQ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziWord.hs_zdfReadWord);
    };
    hs_zdcreadsPrec25vnlS.evaluateOnce = function () {
        if (hs_a225vnlQ.notEvaluated) {
            return hs_a225vnlQ.hscall();
        } else {
            return hs_a225vnlQ;
        }
    };
    this.hs_zdfReadWordPtr.data = [hs_a225vnlQ, hs_a125vnlM, hs_zdcreadPrec25vnlW, hs_zdcreadListPrec25vnlU];
    hs_zdcreadListPrec25vnlU.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadWordPtr);
    };
    hs_zdcreadPrec25vnlW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadWordPtr);
    };
    hs_a325vnlY.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshowList25vnm0.evaluateOnce = function () {
        if (hs_a325vnlY.notEvaluated) {
            return hs_a325vnlY.hscall();
        } else {
            return hs_a325vnlY;
        }
    };
    hs_a425vnm2.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshow25vnm4.evaluateOnce = function () {
        if (hs_a425vnm2.notEvaluated) {
            return hs_a425vnm2.hscall();
        } else {
            return hs_a425vnm2;
        }
    };
    hs_a525vnm6.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord);
    };
    hs_zdcshowsPrec25vnm8.evaluateOnce = function () {
        if (hs_a525vnm6.notEvaluated) {
            return hs_a525vnm6.hscall();
        } else {
            return hs_a525vnm6;
        }
    };
    this.hs_zdfShowWordPtr.data = [hs_a525vnm6, hs_a425vnm2, hs_a325vnlY];
    hs_zdctypeOf25vnma.evaluate = function (hs_ds26DLSs) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConWordPtr25tjGv, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableWordPtr.evaluateOnce = function () {
        if (hs_zdctypeOf25vnma.notEvaluated) {
            return hs_zdctypeOf25vnma.hscall();
        } else {
            return hs_zdctypeOf25vnma;
        }
    };
    hs_a625vnme.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readList.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_zdcreadList125vnmg.evaluateOnce = function () {
        if (hs_a625vnme.notEvaluated) {
            return hs_a625vnme.hscall();
        } else {
            return hs_a625vnme;
        }
    };
    hs_a725vnmi.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt);
    };
    hs_zdcreadsPrec125vnmk.evaluateOnce = function () {
        if (hs_a725vnmi.notEvaluated) {
            return hs_a725vnmi.hscall();
        } else {
            return hs_a725vnmi;
        }
    };
    this.hs_zdfReadIntPtr.data = [hs_a725vnmi, hs_a625vnme, hs_zdcreadPrec125vnmo, hs_zdcreadListPrec125vnmm];
    hs_zdcreadListPrec125vnmm.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadIntPtr);
    };
    hs_zdcreadPrec125vnmo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.ForeignziPtr.hs_zdfReadIntPtr);
    };
    hs_a825vnmq.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showList.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshowList125vnms.evaluateOnce = function () {
        if (hs_a825vnmq.notEvaluated) {
            return hs_a825vnmq.hscall();
        } else {
            return hs_a825vnmq;
        }
    };
    hs_a925vnmu.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshow125vnmw.evaluateOnce = function () {
        if (hs_a925vnmu.notEvaluated) {
            return hs_a925vnmu.hscall();
        } else {
            return hs_a925vnmu;
        }
    };
    hs_a1025vnmy.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt);
    };
    hs_zdcshowsPrec125vnmA.evaluateOnce = function () {
        if (hs_a1025vnmy.notEvaluated) {
            return hs_a1025vnmy.hscall();
        } else {
            return hs_a1025vnmy;
        }
    };
    this.hs_zdfShowIntPtr.data = [hs_a1025vnmy, hs_a925vnmu, hs_a825vnmq];
    hs_zdctypeOf125vnmC.evaluate = function (hs_ds26DLSU) {
        return $hs.modules.DataziTypeable.hs_mkTyConApp.hscall(hs_tyConIntPtr25tjGx, $hs.modules.GHCziTypes.hs_ZMZN);
    };
    this.hs_zdfTypeableIntPtr.evaluateOnce = function () {
        if (hs_zdctypeOf125vnmC.notEvaluated) {
            return hs_zdctypeOf125vnmC.hscall();
        } else {
            return hs_zdctypeOf125vnmC;
        }
    };
    hs_a1125vnmG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdczizazi25vnmI.evaluateOnce = function () {
        if (hs_a1125vnmG.notEvaluated) {
            return hs_a1125vnmG.hscall();
        } else {
            return hs_a1125vnmG;
        }
    };
    hs_a1225vnmK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdczizbzi25vnmM.evaluateOnce = function () {
        if (hs_a1225vnmK.notEvaluated) {
            return hs_a1225vnmK.hscall();
        } else {
            return hs_a1225vnmK;
        }
    };
    hs_a1325vnmO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcxor25vnmQ.evaluateOnce = function () {
        if (hs_a1325vnmO.notEvaluated) {
            return hs_a1325vnmO.hscall();
        } else {
            return hs_a1325vnmO;
        }
    };
    hs_a1425vnmS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdccomplement25vnmU.evaluateOnce = function () {
        if (hs_a1425vnmS.notEvaluated) {
            return hs_a1425vnmS.hscall();
        } else {
            return hs_a1425vnmS;
        }
    };
    hs_a1525vnmW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcshift25vnmY.evaluateOnce = function () {
        if (hs_a1525vnmW.notEvaluated) {
            return hs_a1525vnmW.hscall();
        } else {
            return hs_a1525vnmW;
        }
    };
    hs_a1625vnn0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcrotate25vnn2.evaluateOnce = function () {
        if (hs_a1625vnn0.notEvaluated) {
            return hs_a1625vnn0.hscall();
        } else {
            return hs_a1625vnn0;
        }
    };
    hs_a1725vnn4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcbit25vnn6.evaluateOnce = function () {
        if (hs_a1725vnn4.notEvaluated) {
            return hs_a1725vnn4.hscall();
        } else {
            return hs_a1725vnn4;
        }
    };
    hs_a1825vnn8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcsetBit25vnna.evaluateOnce = function () {
        if (hs_a1825vnn8.notEvaluated) {
            return hs_a1825vnn8.hscall();
        } else {
            return hs_a1825vnn8;
        }
    };
    hs_a1925vnnc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcclearBit25vnne.evaluateOnce = function () {
        if (hs_a1925vnnc.notEvaluated) {
            return hs_a1925vnnc.hscall();
        } else {
            return hs_a1925vnnc;
        }
    };
    hs_a2025vnng.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdccomplementBit25vnni.evaluateOnce = function () {
        if (hs_a2025vnng.notEvaluated) {
            return hs_a2025vnng.hscall();
        } else {
            return hs_a2025vnng;
        }
    };
    hs_a2125vnnk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdctestBit25vnnm.evaluateOnce = function () {
        if (hs_a2125vnnk.notEvaluated) {
            return hs_a2125vnnk.hscall();
        } else {
            return hs_a2125vnnk;
        }
    };
    hs_a2225vnno.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcbitSizze25vnnq.evaluateOnce = function () {
        if (hs_a2225vnno.notEvaluated) {
            return hs_a2225vnno.hscall();
        } else {
            return hs_a2225vnno;
        }
    };
    hs_a2325vnns.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcisSigned25vnnu.evaluateOnce = function () {
        if (hs_a2325vnns.notEvaluated) {
            return hs_a2325vnns.hscall();
        } else {
            return hs_a2325vnns;
        }
    };
    hs_a2425vnnw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcshiftL25vnny.evaluateOnce = function () {
        if (hs_a2425vnnw.notEvaluated) {
            return hs_a2425vnnw.hscall();
        } else {
            return hs_a2425vnnw;
        }
    };
    hs_a2525vnnA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcshiftR25vnnC.evaluateOnce = function () {
        if (hs_a2525vnnA.notEvaluated) {
            return hs_a2525vnnA.hscall();
        } else {
            return hs_a2525vnnA;
        }
    };
    hs_a2625vnnE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcrotateL25vnnG.evaluateOnce = function () {
        if (hs_a2625vnnE.notEvaluated) {
            return hs_a2625vnnE.hscall();
        } else {
            return hs_a2625vnnE;
        }
    };
    hs_a2725vnnI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_zdcrotateR25vnnK.evaluateOnce = function () {
        if (hs_a2725vnnI.notEvaluated) {
            return hs_a2725vnnI.hscall();
        } else {
            return hs_a2725vnnI;
        }
    };
    hs_a2825vnnM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcquot25vnnO.evaluateOnce = function () {
        if (hs_a2825vnnM.notEvaluated) {
            return hs_a2825vnnM.hscall();
        } else {
            return hs_a2825vnnM;
        }
    };
    hs_a2925vnnQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcrem25vnnS.evaluateOnce = function () {
        if (hs_a2925vnnQ.notEvaluated) {
            return hs_a2925vnnQ.hscall();
        } else {
            return hs_a2925vnnQ;
        }
    };
    hs_a3025vnnU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcdiv25vnnW.evaluateOnce = function () {
        if (hs_a3025vnnU.notEvaluated) {
            return hs_a3025vnnU.hscall();
        } else {
            return hs_a3025vnnU;
        }
    };
    hs_a3125vnnY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcmod25vno0.evaluateOnce = function () {
        if (hs_a3125vnnY.notEvaluated) {
            return hs_a3125vnnY.hscall();
        } else {
            return hs_a3125vnnY;
        }
    };
    hs_a3225vno2.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcquotRem25vno4.evaluateOnce = function () {
        if (hs_a3225vno2.notEvaluated) {
            return hs_a3225vno2.hscall();
        } else {
            return hs_a3225vno2;
        }
    };
    hs_a3325vno6.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdcdivMod25vno8.evaluateOnce = function () {
        if (hs_a3325vno6.notEvaluated) {
            return hs_a3325vno6.hscall();
        } else {
            return hs_a3325vno6;
        }
    };
    hs_a3425vnoa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt);
    };
    hs_zdctoInteger25vnoc.evaluateOnce = function () {
        if (hs_a3425vnoa.notEvaluated) {
            return hs_a3425vnoa.hscall();
        } else {
            return hs_a3425vnoa;
        }
    };
    hs_a3525vnoe.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
    };
    hs_zdcminBound25vnog.evaluateOnce = function () {
        if (hs_a3525vnoe.notEvaluated) {
            return hs_a3525vnoe.hscall();
        } else {
            return hs_a3525vnoe;
        }
    };
    hs_a3625vnoi.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
    };
    hs_zdcmaxBound25vnok.evaluateOnce = function () {
        if (hs_a3625vnoi.notEvaluated) {
            return hs_a3625vnoi.hscall();
        } else {
            return hs_a3625vnoi;
        }
    };
    this.hs_zdfBoundedIntPtr.data = [hs_a3525vnoe, hs_a3625vnoi];
    hs_a3725vnom.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziReal.hs_zdfRealInt);
    };
    hs_zdctoRational25vnoo.evaluateOnce = function () {
        if (hs_a3725vnom.notEvaluated) {
            return hs_a3725vnom.hscall();
        } else {
            return hs_a3725vnom;
        }
    };
    hs_a3825vnoq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcsizzeOf25vnos.evaluateOnce = function () {
        if (hs_a3825vnoq.notEvaluated) {
            return hs_a3825vnoq.hscall();
        } else {
            return hs_a3825vnoq;
        }
    };
    hs_a3925vnou.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcalignment25vnow.evaluateOnce = function () {
        if (hs_a3925vnou.notEvaluated) {
            return hs_a3925vnou.hscall();
        } else {
            return hs_a3925vnou;
        }
    };
    hs_a4025vnoy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpeekElemOff25vnoA.evaluateOnce = function () {
        if (hs_a4025vnoy.notEvaluated) {
            return hs_a4025vnoy.hscall();
        } else {
            return hs_a4025vnoy;
        }
    };
    hs_a4125vnoC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpokeElemOff25vnoE.evaluateOnce = function () {
        if (hs_a4125vnoC.notEvaluated) {
            return hs_a4125vnoC.hscall();
        } else {
            return hs_a4125vnoC;
        }
    };
    hs_a4225vnoG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpeekByteOff25vnoI.evaluateOnce = function () {
        if (hs_a4225vnoG.notEvaluated) {
            return hs_a4225vnoG.hscall();
        } else {
            return hs_a4225vnoG;
        }
    };
    hs_a4325vnoK.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpokeByteOff25vnoM.evaluateOnce = function () {
        if (hs_a4325vnoK.notEvaluated) {
            return hs_a4325vnoK.hscall();
        } else {
            return hs_a4325vnoK;
        }
    };
    hs_a4425vnoO.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpeek25vnoQ.evaluateOnce = function () {
        if (hs_a4425vnoO.notEvaluated) {
            return hs_a4425vnoO.hscall();
        } else {
            return hs_a4425vnoO;
        }
    };
    hs_a4525vnoS.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt);
    };
    hs_zdcpoke25vnoU.evaluateOnce = function () {
        if (hs_a4525vnoS.notEvaluated) {
            return hs_a4525vnoS.hscall();
        } else {
            return hs_a4525vnoS;
        }
    };
    this.hs_zdfStorableIntPtr.data = [hs_a3825vnoq, hs_a3925vnou, hs_a4025vnoy, hs_a4125vnoC, hs_a4225vnoG, hs_a4325vnoK, hs_a4425vnoO, hs_a4525vnoS];
    hs_a4625vnoW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcsucc25vnoY.evaluateOnce = function () {
        if (hs_a4625vnoW.notEvaluated) {
            return hs_a4625vnoW.hscall();
        } else {
            return hs_a4625vnoW;
        }
    };
    hs_a4725vnp0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcpred25vnp2.evaluateOnce = function () {
        if (hs_a4725vnp0.notEvaluated) {
            return hs_a4725vnp0.hscall();
        } else {
            return hs_a4725vnp0;
        }
    };
    hs_a4825vnp4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdctoEnum25vnp6.evaluateOnce = function () {
        if (hs_a4825vnp4.notEvaluated) {
            return hs_a4825vnp4.hscall();
        } else {
            return hs_a4825vnp4;
        }
    };
    hs_a4925vnp8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcfromEnum25vnpa.evaluateOnce = function () {
        if (hs_a4925vnp8.notEvaluated) {
            return hs_a4925vnp8.hscall();
        } else {
            return hs_a4925vnp8;
        }
    };
    hs_a5025vnpc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFrom25vnpe.evaluateOnce = function () {
        if (hs_a5025vnpc.notEvaluated) {
            return hs_a5025vnpc.hscall();
        } else {
            return hs_a5025vnpc;
        }
    };
    hs_a5125vnpg.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFromThen25vnpi.evaluateOnce = function () {
        if (hs_a5125vnpg.notEvaluated) {
            return hs_a5125vnpg.hscall();
        } else {
            return hs_a5125vnpg;
        }
    };
    hs_a5225vnpk.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFromTo25vnpm.evaluateOnce = function () {
        if (hs_a5225vnpk.notEvaluated) {
            return hs_a5225vnpk.hscall();
        } else {
            return hs_a5225vnpk;
        }
    };
    hs_a5325vnpo.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt);
    };
    hs_zdcenumFromThenTo25vnpq.evaluateOnce = function () {
        if (hs_a5325vnpo.notEvaluated) {
            return hs_a5325vnpo.hscall();
        } else {
            return hs_a5325vnpo;
        }
    };
    this.hs_zdfEnumIntPtr.data = [hs_a4625vnoW, hs_a4725vnp0, hs_a4825vnp4, hs_a4925vnp8, hs_a5025vnpc, hs_a5125vnpg, hs_a5225vnpk, hs_a5325vnpo];
    hs_a5425vnps.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdczp25vnpu.evaluateOnce = function () {
        if (hs_a5425vnps.notEvaluated) {
            return hs_a5425vnps.hscall();
        } else {
            return hs_a5425vnps;
        }
    };
    hs_a5525vnpw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdczt25vnpy.evaluateOnce = function () {
        if (hs_a5525vnpw.notEvaluated) {
            return hs_a5525vnpw.hscall();
        } else {
            return hs_a5525vnpw;
        }
    };
    hs_a5625vnpA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdczm25vnpC.evaluateOnce = function () {
        if (hs_a5625vnpA.notEvaluated) {
            return hs_a5625vnpA.hscall();
        } else {
            return hs_a5625vnpA;
        }
    };
    hs_a5725vnpE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcnegate25vnpG.evaluateOnce = function () {
        if (hs_a5725vnpE.notEvaluated) {
            return hs_a5725vnpE.hscall();
        } else {
            return hs_a5725vnpE;
        }
    };
    hs_a5825vnpI.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcabs25vnpK.evaluateOnce = function () {
        if (hs_a5825vnpI.notEvaluated) {
            return hs_a5825vnpI.hscall();
        } else {
            return hs_a5825vnpI;
        }
    };
    hs_a5925vnpM.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcsignum25vnpO.evaluateOnce = function () {
        if (hs_a5925vnpM.notEvaluated) {
            return hs_a5925vnpM.hscall();
        } else {
            return hs_a5925vnpM;
        }
    };
    hs_a6025vnpQ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcfromInteger25vnpS.evaluateOnce = function () {
        if (hs_a6025vnpQ.notEvaluated) {
            return hs_a6025vnpQ.hscall();
        } else {
            return hs_a6025vnpQ;
        }
    };
    hs_a6125vnpU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdccompare25vnpW.evaluateOnce = function () {
        if (hs_a6125vnpU.notEvaluated) {
            return hs_a6125vnpU.hscall();
        } else {
            return hs_a6125vnpU;
        }
    };
    hs_a6225vnpY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdczl25vnq0.evaluateOnce = function () {
        if (hs_a6225vnpY.notEvaluated) {
            return hs_a6225vnpY.hscall();
        } else {
            return hs_a6225vnpY;
        }
    };
    hs_a6325vnq2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdczgze25vnq4.evaluateOnce = function () {
        if (hs_a6325vnq2.notEvaluated) {
            return hs_a6325vnq2.hscall();
        } else {
            return hs_a6325vnq2;
        }
    };
    hs_a6425vnq6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdczg25vnq8.evaluateOnce = function () {
        if (hs_a6425vnq6.notEvaluated) {
            return hs_a6425vnq6.hscall();
        } else {
            return hs_a6425vnq6;
        }
    };
    hs_a6525vnqa.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdczlze25vnqc.evaluateOnce = function () {
        if (hs_a6525vnqa.notEvaluated) {
            return hs_a6525vnqa.hscall();
        } else {
            return hs_a6525vnqa;
        }
    };
    hs_a6625vnqe.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdcmax25vnqg.evaluateOnce = function () {
        if (hs_a6625vnqe.notEvaluated) {
            return hs_a6625vnqe.hscall();
        } else {
            return hs_a6625vnqe;
        }
    };
    hs_a6725vnqi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziBase.hs_zdfOrdInt);
    };
    hs_zdcmin25vnqk.evaluateOnce = function () {
        if (hs_a6725vnqi.notEvaluated) {
            return hs_a6725vnqi.hscall();
        } else {
            return hs_a6725vnqi;
        }
    };
    hs_a6825vnqm.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt);
    };
    hs_zdczeze25vnqo.evaluateOnce = function () {
        if (hs_a6825vnqm.notEvaluated) {
            return hs_a6825vnqm.hscall();
        } else {
            return hs_a6825vnqm;
        }
    };
    hs_a6925vnqq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziBase.hs_zdfEqInt);
    };
    hs_zdczsze25vnqs.evaluateOnce = function () {
        if (hs_a6925vnqq.notEvaluated) {
            return hs_a6925vnqq.hscall();
        } else {
            return hs_a6925vnqq;
        }
    };
    this.hs_zdfEqIntPtr.data = [hs_a6825vnqm, hs_a6925vnqq];
    this.hs_zdfOrdIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqIntPtr, hs_a6125vnpU, hs_a6225vnpY, hs_a6325vnq2, hs_a6425vnq6, hs_a6525vnqa, hs_a6625vnqe, hs_a6725vnqi];
    this.hs_zdfNumIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqIntPtr, $hs.modules.ForeignziPtr.hs_zdfShowIntPtr, hs_a5425vnps, hs_a5525vnpw, hs_a5625vnpA, hs_a5725vnpE, hs_a5825vnpI, hs_a5925vnpM, hs_a6025vnpQ];
    this.hs_zdfRealIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumIntPtr, $hs.modules.ForeignziPtr.hs_zdfOrdIntPtr, hs_a3725vnom];
    this.hs_zdfIntegralIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfRealIntPtr, $hs.modules.ForeignziPtr.hs_zdfEnumIntPtr, hs_a2825vnnM, hs_a2925vnnQ, hs_a3025vnnU, hs_a3125vnnY, hs_a3225vno2, hs_a3325vno6, hs_a3425vnoa];
    this.hs_zdfBitsIntPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumIntPtr, hs_a1125vnmG, hs_a1225vnmK, hs_a1325vnmO, hs_a1425vnmS, hs_a1525vnmW, hs_a1625vnn0, hs_a1725vnn4, hs_a1825vnn8, hs_a1925vnnc, hs_a2025vnng, hs_a2125vnnk, hs_a2225vnno, hs_a2325vnns, hs_a2425vnnw, hs_a2525vnnA, hs_a2625vnnE, hs_a2725vnnI];
    hs_a7025vnqu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdczizazi125vnqw.evaluateOnce = function () {
        if (hs_a7025vnqu.notEvaluated) {
            return hs_a7025vnqu.hscall();
        } else {
            return hs_a7025vnqu;
        }
    };
    hs_a7125vnqy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdczizbzi125vnqA.evaluateOnce = function () {
        if (hs_a7125vnqy.notEvaluated) {
            return hs_a7125vnqy.hscall();
        } else {
            return hs_a7125vnqy;
        }
    };
    hs_a7225vnqC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcxor125vnqE.evaluateOnce = function () {
        if (hs_a7225vnqC.notEvaluated) {
            return hs_a7225vnqC.hscall();
        } else {
            return hs_a7225vnqC;
        }
    };
    hs_a7325vnqG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdccomplement125vnqI.evaluateOnce = function () {
        if (hs_a7325vnqG.notEvaluated) {
            return hs_a7325vnqG.hscall();
        } else {
            return hs_a7325vnqG;
        }
    };
    hs_a7425vnqK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshift125vnqM.evaluateOnce = function () {
        if (hs_a7425vnqK.notEvaluated) {
            return hs_a7425vnqK.hscall();
        } else {
            return hs_a7425vnqK;
        }
    };
    hs_a7525vnqO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotate125vnqQ.evaluateOnce = function () {
        if (hs_a7525vnqO.notEvaluated) {
            return hs_a7525vnqO.hscall();
        } else {
            return hs_a7525vnqO;
        }
    };
    hs_a7625vnqS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcbit125vnqU.evaluateOnce = function () {
        if (hs_a7625vnqS.notEvaluated) {
            return hs_a7625vnqS.hscall();
        } else {
            return hs_a7625vnqS;
        }
    };
    hs_a7725vnqW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcsetBit125vnqY.evaluateOnce = function () {
        if (hs_a7725vnqW.notEvaluated) {
            return hs_a7725vnqW.hscall();
        } else {
            return hs_a7725vnqW;
        }
    };
    hs_a7825vnr0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcclearBit125vnr2.evaluateOnce = function () {
        if (hs_a7825vnr0.notEvaluated) {
            return hs_a7825vnr0.hscall();
        } else {
            return hs_a7825vnr0;
        }
    };
    hs_a7925vnr4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdccomplementBit125vnr6.evaluateOnce = function () {
        if (hs_a7925vnr4.notEvaluated) {
            return hs_a7925vnr4.hscall();
        } else {
            return hs_a7925vnr4;
        }
    };
    hs_a8025vnr8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdctestBit125vnra.evaluateOnce = function () {
        if (hs_a8025vnr8.notEvaluated) {
            return hs_a8025vnr8.hscall();
        } else {
            return hs_a8025vnr8;
        }
    };
    hs_a8125vnrc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcbitSizze125vnre.evaluateOnce = function () {
        if (hs_a8125vnrc.notEvaluated) {
            return hs_a8125vnrc.hscall();
        } else {
            return hs_a8125vnrc;
        }
    };
    hs_a8225vnrg.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcisSigned125vnri.evaluateOnce = function () {
        if (hs_a8225vnrg.notEvaluated) {
            return hs_a8225vnrg.hscall();
        } else {
            return hs_a8225vnrg;
        }
    };
    hs_a8325vnrk.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftL125vnrm.evaluateOnce = function () {
        if (hs_a8325vnrk.notEvaluated) {
            return hs_a8325vnrk.hscall();
        } else {
            return hs_a8325vnrk;
        }
    };
    hs_a8425vnro.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcshiftR125vnrq.evaluateOnce = function () {
        if (hs_a8425vnro.notEvaluated) {
            return hs_a8425vnro.hscall();
        } else {
            return hs_a8425vnro;
        }
    };
    hs_a8525vnrs.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotateL125vnru.evaluateOnce = function () {
        if (hs_a8525vnrs.notEvaluated) {
            return hs_a8525vnrs.hscall();
        } else {
            return hs_a8525vnrs;
        }
    };
    hs_a8625vnrw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord);
    };
    hs_zdcrotateR125vnry.evaluateOnce = function () {
        if (hs_a8625vnrw.notEvaluated) {
            return hs_a8625vnrw.hscall();
        } else {
            return hs_a8625vnrw;
        }
    };
    hs_a8725vnrA.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quot.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcquot125vnrC.evaluateOnce = function () {
        if (hs_a8725vnrA.notEvaluated) {
            return hs_a8725vnrA.hscall();
        } else {
            return hs_a8725vnrA;
        }
    };
    hs_a8825vnrE.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_rem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcrem125vnrG.evaluateOnce = function () {
        if (hs_a8825vnrE.notEvaluated) {
            return hs_a8825vnrE.hscall();
        } else {
            return hs_a8825vnrE;
        }
    };
    hs_a8925vnrI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_div.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcdiv125vnrK.evaluateOnce = function () {
        if (hs_a8925vnrI.notEvaluated) {
            return hs_a8925vnrI.hscall();
        } else {
            return hs_a8925vnrI;
        }
    };
    hs_a9025vnrM.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_mod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcmod125vnrO.evaluateOnce = function () {
        if (hs_a9025vnrM.notEvaluated) {
            return hs_a9025vnrM.hscall();
        } else {
            return hs_a9025vnrM;
        }
    };
    hs_a9125vnrQ.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_quotRem.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcquotRem125vnrS.evaluateOnce = function () {
        if (hs_a9125vnrQ.notEvaluated) {
            return hs_a9125vnrQ.hscall();
        } else {
            return hs_a9125vnrQ;
        }
    };
    hs_a9225vnrU.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_divMod.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdcdivMod125vnrW.evaluateOnce = function () {
        if (hs_a9225vnrU.notEvaluated) {
            return hs_a9225vnrU.hscall();
        } else {
            return hs_a9225vnrU;
        }
    };
    hs_a9325vnrY.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord);
    };
    hs_zdctoInteger125vns0.evaluateOnce = function () {
        if (hs_a9325vnrY.notEvaluated) {
            return hs_a9325vnrY.hscall();
        } else {
            return hs_a9325vnrY;
        }
    };
    hs_a9425vns2.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcminBound125vns4.evaluateOnce = function () {
        if (hs_a9425vns2.notEvaluated) {
            return hs_a9425vns2.hscall();
        } else {
            return hs_a9425vns2;
        }
    };
    hs_a9525vns6.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziWord.hs_zdfBoundedWord);
    };
    hs_zdcmaxBound125vns8.evaluateOnce = function () {
        if (hs_a9525vns6.notEvaluated) {
            return hs_a9525vns6.hscall();
        } else {
            return hs_a9525vns6;
        }
    };
    this.hs_zdfBoundedWordPtr.data = [hs_a9425vns2, hs_a9525vns6];
    hs_a9625vnsa.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_toRational.hscall($hs.modules.GHCziWord.hs_zdfRealWord);
    };
    hs_zdctoRational125vnsc.evaluateOnce = function () {
        if (hs_a9625vnsa.notEvaluated) {
            return hs_a9625vnsa.hscall();
        } else {
            return hs_a9625vnsa;
        }
    };
    hs_a9725vnse.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcsizzeOf125vnsg.evaluateOnce = function () {
        if (hs_a9725vnse.notEvaluated) {
            return hs_a9725vnse.hscall();
        } else {
            return hs_a9725vnse;
        }
    };
    hs_a9825vnsi.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcalignment125vnsk.evaluateOnce = function () {
        if (hs_a9825vnsi.notEvaluated) {
            return hs_a9825vnsi.hscall();
        } else {
            return hs_a9825vnsi;
        }
    };
    hs_a9925vnsm.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpeekElemOff125vnso.evaluateOnce = function () {
        if (hs_a9925vnsm.notEvaluated) {
            return hs_a9925vnsm.hscall();
        } else {
            return hs_a9925vnsm;
        }
    };
    hs_a10025vnsq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpokeElemOff125vnss.evaluateOnce = function () {
        if (hs_a10025vnsq.notEvaluated) {
            return hs_a10025vnsq.hscall();
        } else {
            return hs_a10025vnsq;
        }
    };
    hs_a10125vnsu.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpeekByteOff125vnsw.evaluateOnce = function () {
        if (hs_a10125vnsu.notEvaluated) {
            return hs_a10125vnsu.hscall();
        } else {
            return hs_a10125vnsu;
        }
    };
    hs_a10225vnsy.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpokeByteOff125vnsA.evaluateOnce = function () {
        if (hs_a10225vnsy.notEvaluated) {
            return hs_a10225vnsy.hscall();
        } else {
            return hs_a10225vnsy;
        }
    };
    hs_a10325vnsC.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpeek125vnsE.evaluateOnce = function () {
        if (hs_a10325vnsC.notEvaluated) {
            return hs_a10325vnsC.hscall();
        } else {
            return hs_a10325vnsC;
        }
    };
    hs_a10425vnsG.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord);
    };
    hs_zdcpoke125vnsI.evaluateOnce = function () {
        if (hs_a10425vnsG.notEvaluated) {
            return hs_a10425vnsG.hscall();
        } else {
            return hs_a10425vnsG;
        }
    };
    this.hs_zdfStorableWordPtr.data = [hs_a9725vnse, hs_a9825vnsi, hs_a9925vnsm, hs_a10025vnsq, hs_a10125vnsu, hs_a10225vnsy, hs_a10325vnsC, hs_a10425vnsG];
    hs_a10525vnsK.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_succ.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcsucc125vnsM.evaluateOnce = function () {
        if (hs_a10525vnsK.notEvaluated) {
            return hs_a10525vnsK.hscall();
        } else {
            return hs_a10525vnsK;
        }
    };
    hs_a10625vnsO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_pred.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcpred125vnsQ.evaluateOnce = function () {
        if (hs_a10625vnsO.notEvaluated) {
            return hs_a10625vnsO.hscall();
        } else {
            return hs_a10625vnsO;
        }
    };
    hs_a10725vnsS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdctoEnum125vnsU.evaluateOnce = function () {
        if (hs_a10725vnsS.notEvaluated) {
            return hs_a10725vnsS.hscall();
        } else {
            return hs_a10725vnsS;
        }
    };
    hs_a10825vnsW.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcfromEnum125vnsY.evaluateOnce = function () {
        if (hs_a10825vnsW.notEvaluated) {
            return hs_a10825vnsW.hscall();
        } else {
            return hs_a10825vnsW;
        }
    };
    hs_a10925vnt0.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFrom.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFrom125vnt2.evaluateOnce = function () {
        if (hs_a10925vnt0.notEvaluated) {
            return hs_a10925vnt0.hscall();
        } else {
            return hs_a10925vnt0;
        }
    };
    hs_a11025vnt4.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThen.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFromThen125vnt6.evaluateOnce = function () {
        if (hs_a11025vnt4.notEvaluated) {
            return hs_a11025vnt4.hscall();
        } else {
            return hs_a11025vnt4;
        }
    };
    hs_a11125vnt8.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFromTo125vnta.evaluateOnce = function () {
        if (hs_a11125vnt8.notEvaluated) {
            return hs_a11125vnt8.hscall();
        } else {
            return hs_a11125vnt8;
        }
    };
    hs_a11225vntc.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziWord.hs_zdfEnumWord);
    };
    hs_zdcenumFromThenTo125vnte.evaluateOnce = function () {
        if (hs_a11225vntc.notEvaluated) {
            return hs_a11225vntc.hscall();
        } else {
            return hs_a11225vntc;
        }
    };
    this.hs_zdfEnumWordPtr.data = [hs_a10525vnsK, hs_a10625vnsO, hs_a10725vnsS, hs_a10825vnsW, hs_a10925vnt0, hs_a11025vnt4, hs_a11125vnt8, hs_a11225vntc];
    hs_a11325vntg.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdczp125vnti.evaluateOnce = function () {
        if (hs_a11325vntg.notEvaluated) {
            return hs_a11325vntg.hscall();
        } else {
            return hs_a11325vntg;
        }
    };
    hs_a11425vntk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdczt125vntm.evaluateOnce = function () {
        if (hs_a11425vntk.notEvaluated) {
            return hs_a11425vntk.hscall();
        } else {
            return hs_a11425vntk;
        }
    };
    hs_a11525vnto.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdczm125vntq.evaluateOnce = function () {
        if (hs_a11525vnto.notEvaluated) {
            return hs_a11525vnto.hscall();
        } else {
            return hs_a11525vnto;
        }
    };
    hs_a11625vnts.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcnegate125vntu.evaluateOnce = function () {
        if (hs_a11625vnts.notEvaluated) {
            return hs_a11625vnts.hscall();
        } else {
            return hs_a11625vnts;
        }
    };
    hs_a11725vntw.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcabs125vnty.evaluateOnce = function () {
        if (hs_a11725vntw.notEvaluated) {
            return hs_a11725vntw.hscall();
        } else {
            return hs_a11725vntw;
        }
    };
    hs_a11825vntA.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcsignum125vntC.evaluateOnce = function () {
        if (hs_a11825vntA.notEvaluated) {
            return hs_a11825vntA.hscall();
        } else {
            return hs_a11825vntA;
        }
    };
    hs_a11925vntE.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcfromInteger125vntG.evaluateOnce = function () {
        if (hs_a11925vntE.notEvaluated) {
            return hs_a11925vntE.hscall();
        } else {
            return hs_a11925vntE;
        }
    };
    hs_a12025vntI.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_compare.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdccompare125vntK.evaluateOnce = function () {
        if (hs_a12025vntI.notEvaluated) {
            return hs_a12025vntI.hscall();
        } else {
            return hs_a12025vntI;
        }
    };
    hs_a12125vntM.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczl125vntO.evaluateOnce = function () {
        if (hs_a12125vntM.notEvaluated) {
            return hs_a12125vntM.hscall();
        } else {
            return hs_a12125vntM;
        }
    };
    hs_a12225vntQ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczgze125vntS.evaluateOnce = function () {
        if (hs_a12225vntQ.notEvaluated) {
            return hs_a12225vntQ.hscall();
        } else {
            return hs_a12225vntQ;
        }
    };
    hs_a12325vntU.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczg125vntW.evaluateOnce = function () {
        if (hs_a12325vntU.notEvaluated) {
            return hs_a12325vntU.hscall();
        } else {
            return hs_a12325vntU;
        }
    };
    hs_a12425vntY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdczlze125vnu0.evaluateOnce = function () {
        if (hs_a12425vntY.notEvaluated) {
            return hs_a12425vntY.hscall();
        } else {
            return hs_a12425vntY;
        }
    };
    hs_a12525vnu2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_max.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcmax125vnu4.evaluateOnce = function () {
        if (hs_a12525vnu2.notEvaluated) {
            return hs_a12525vnu2.hscall();
        } else {
            return hs_a12525vnu2;
        }
    };
    hs_a12625vnu6.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_min.hscall($hs.modules.GHCziWord.hs_zdfOrdWord);
    };
    hs_zdcmin125vnu8.evaluateOnce = function () {
        if (hs_a12625vnu6.notEvaluated) {
            return hs_a12625vnu6.hscall();
        } else {
            return hs_a12625vnu6;
        }
    };
    hs_a12725vnua.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord);
    };
    hs_zdczeze125vnuc.evaluateOnce = function () {
        if (hs_a12725vnua.notEvaluated) {
            return hs_a12725vnua.hscall();
        } else {
            return hs_a12725vnua;
        }
    };
    hs_a12825vnue.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord);
    };
    hs_zdczsze125vnug.evaluateOnce = function () {
        if (hs_a12825vnue.notEvaluated) {
            return hs_a12825vnue.hscall();
        } else {
            return hs_a12825vnue;
        }
    };
    this.hs_zdfEqWordPtr.data = [hs_a12725vnua, hs_a12825vnue];
    this.hs_zdfOrdWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqWordPtr, hs_a12025vntI, hs_a12125vntM, hs_a12225vntQ, hs_a12325vntU, hs_a12425vntY, hs_a12525vnu2, hs_a12625vnu6];
    this.hs_zdfNumWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfEqWordPtr, $hs.modules.ForeignziPtr.hs_zdfShowWordPtr, hs_a11325vntg, hs_a11425vntk, hs_a11525vnto, hs_a11625vnts, hs_a11725vntw, hs_a11825vntA, hs_a11925vntE];
    this.hs_zdfRealWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumWordPtr, $hs.modules.ForeignziPtr.hs_zdfOrdWordPtr, hs_a9625vnsa];
    this.hs_zdfIntegralWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfRealWordPtr, $hs.modules.ForeignziPtr.hs_zdfEnumWordPtr, hs_a8725vnrA, hs_a8825vnrE, hs_a8925vnrI, hs_a9025vnrM, hs_a9125vnrQ, hs_a9225vnrU, hs_a9325vnrY];
    this.hs_zdfBitsWordPtr.data = [$hs.modules.ForeignziPtr.hs_zdfNumWordPtr, hs_a7025vnqu, hs_a7125vnqy, hs_a7225vnqC, hs_a7325vnqG, hs_a7425vnqK, hs_a7525vnqO, hs_a7625vnqS, hs_a7725vnqW, hs_a7825vnr0, hs_a7925vnr4, hs_a8025vnr8, hs_a8125vnrc, hs_a8225vnrg, hs_a8325vnrk, hs_a8425vnro, hs_a8525vnrs, hs_a8625vnrw];
    this.hs_IntPtr.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziPtr.hs_IntPtr.hscall(hs_eta1cW6l3);
    };
    this.hs_WordPtr.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.ForeignziPtr.hs_WordPtr.hscall(hs_eta1cW6l3);
    };
};
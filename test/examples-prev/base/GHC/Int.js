
$hs.modules.GHCziInt = new $hs.Module();
$hs.modules.GHCziInt.dependencies = ["GHC.IntWord64", "GHC.Integer", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Real", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Arr", "GHC.Read", "GHC.Word", "Data.Bits"];
$hs.modules.GHCziInt.initBeforeDependencies = function () {
    this.hs_zdfEqInt64 = new $hs.Data(1);
    this.hs_zdfOrdInt64 = new $hs.Data(1);
    this.hs_zdfBoundedInt64 = new $hs.Data(1);
    this.hs_zdfShowInt64 = new $hs.Data(1);
    this.hs_zdfNumInt64 = new $hs.Data(1);
    this.hs_zdfEnumInt64 = new $hs.Data(1);
    this.hs_zdfRealInt64 = new $hs.Data(1);
    this.hs_zdfIntegralInt64 = new $hs.Data(1);
    this.hs_zdfBitsInt64 = new $hs.Data(1);
    this.hs_zdfReadInt64 = new $hs.Data(1);
    this.hs_zdfIxInt64 = new $hs.Data(1);
    this.hs_zdfEqInt8 = new $hs.Data(1);
    this.hs_zdfOrdInt8 = new $hs.Data(1);
    this.hs_zdfShowInt8 = new $hs.Data(1);
    this.hs_zdfNumInt8 = new $hs.Data(1);
    this.hs_zdfRealInt8 = new $hs.Data(1);
    this.hs_zdfEnumInt8 = new $hs.Data(1);
    this.hs_zdfIntegralInt8 = new $hs.Data(1);
    this.hs_zdfBoundedInt8 = new $hs.Data(1);
    this.hs_zdfBitsInt8 = new $hs.Data(1);
    this.hs_zdfReadInt8 = new $hs.Data(1);
    this.hs_zdfIxInt8 = new $hs.Data(1);
    this.hs_zdfEqInt16 = new $hs.Data(1);
    this.hs_zdfOrdInt16 = new $hs.Data(1);
    this.hs_zdfShowInt16 = new $hs.Data(1);
    this.hs_zdfNumInt16 = new $hs.Data(1);
    this.hs_zdfRealInt16 = new $hs.Data(1);
    this.hs_zdfEnumInt16 = new $hs.Data(1);
    this.hs_zdfIntegralInt16 = new $hs.Data(1);
    this.hs_zdfBoundedInt16 = new $hs.Data(1);
    this.hs_zdfBitsInt16 = new $hs.Data(1);
    this.hs_zdfReadInt16 = new $hs.Data(1);
    this.hs_zdfIxInt16 = new $hs.Data(1);
    this.hs_zdfEqInt32 = new $hs.Data(1);
    this.hs_zdfOrdInt32 = new $hs.Data(1);
    this.hs_zdfShowInt32 = new $hs.Data(1);
    this.hs_zdfNumInt32 = new $hs.Data(1);
    this.hs_zdfEnumInt32 = new $hs.Data(1);
    this.hs_zdfRealInt32 = new $hs.Data(1);
    this.hs_zdfIntegralInt32 = new $hs.Data(1);
    this.hs_zdfBoundedInt32 = new $hs.Data(1);
    this.hs_zdfBitsInt32 = new $hs.Data(1);
    this.hs_zdfReadInt32 = new $hs.Data(1);
    this.hs_zdfIxInt32 = new $hs.Data(1);
    this.hs_I8zh = new $hs.Func(1);
    this.hs_I16zh = new $hs.Func(1);
    this.hs_I32zh = new $hs.Func(1);
    this.hs_I64zh = new $hs.Func(1);
    this.hs_zdfEqInt64.notEvaluated = true;
    this.hs_zdfEqInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfOrdInt64.notEvaluated = true;
    this.hs_zdfOrdInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedInt64.notEvaluated = true;
    this.hs_zdfBoundedInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfShowInt64.notEvaluated = true;
    this.hs_zdfShowInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfNumInt64.notEvaluated = true;
    this.hs_zdfNumInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfEnumInt64.notEvaluated = true;
    this.hs_zdfEnumInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfRealInt64.notEvaluated = true;
    this.hs_zdfRealInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralInt64.notEvaluated = true;
    this.hs_zdfIntegralInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBitsInt64.notEvaluated = true;
    this.hs_zdfBitsInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfReadInt64.notEvaluated = true;
    this.hs_zdfReadInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIxInt64.notEvaluated = true;
    this.hs_zdfIxInt64.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfEqInt8.notEvaluated = true;
    this.hs_zdfEqInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfOrdInt8.notEvaluated = true;
    this.hs_zdfOrdInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfShowInt8.notEvaluated = true;
    this.hs_zdfShowInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfNumInt8.notEvaluated = true;
    this.hs_zdfNumInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfRealInt8.notEvaluated = true;
    this.hs_zdfRealInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfEnumInt8.notEvaluated = true;
    this.hs_zdfEnumInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralInt8.notEvaluated = true;
    this.hs_zdfIntegralInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedInt8.notEvaluated = true;
    this.hs_zdfBoundedInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBitsInt8.notEvaluated = true;
    this.hs_zdfBitsInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfReadInt8.notEvaluated = true;
    this.hs_zdfReadInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIxInt8.notEvaluated = true;
    this.hs_zdfIxInt8.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfEqInt16.notEvaluated = true;
    this.hs_zdfEqInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfOrdInt16.notEvaluated = true;
    this.hs_zdfOrdInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfShowInt16.notEvaluated = true;
    this.hs_zdfShowInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfNumInt16.notEvaluated = true;
    this.hs_zdfNumInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfRealInt16.notEvaluated = true;
    this.hs_zdfRealInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfEnumInt16.notEvaluated = true;
    this.hs_zdfEnumInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralInt16.notEvaluated = true;
    this.hs_zdfIntegralInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedInt16.notEvaluated = true;
    this.hs_zdfBoundedInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBitsInt16.notEvaluated = true;
    this.hs_zdfBitsInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfReadInt16.notEvaluated = true;
    this.hs_zdfReadInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIxInt16.notEvaluated = true;
    this.hs_zdfIxInt16.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfEqInt32.notEvaluated = true;
    this.hs_zdfEqInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfOrdInt32.notEvaluated = true;
    this.hs_zdfOrdInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfShowInt32.notEvaluated = true;
    this.hs_zdfShowInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfNumInt32.notEvaluated = true;
    this.hs_zdfNumInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfEnumInt32.notEvaluated = true;
    this.hs_zdfEnumInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfRealInt32.notEvaluated = true;
    this.hs_zdfRealInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIntegralInt32.notEvaluated = true;
    this.hs_zdfIntegralInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBoundedInt32.notEvaluated = true;
    this.hs_zdfBoundedInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfBitsInt32.notEvaluated = true;
    this.hs_zdfBitsInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfReadInt32.notEvaluated = true;
    this.hs_zdfReadInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_zdfIxInt32.notEvaluated = true;
    this.hs_zdfIxInt32.evaluate = function () {
        $hs.modules.GHCziInt.loadDependencies();
        return this;
    };
    this.hs_I8zh.notEvaluated = true;
    this.hs_I8zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziInt.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_I16zh.notEvaluated = true;
    this.hs_I16zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziInt.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_I32zh.notEvaluated = true;
    this.hs_I32zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziInt.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_I64zh.notEvaluated = true;
    this.hs_I64zh.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziInt.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.GHCziInt.initAfterDependencies = function () {
    this.hs_zdfEqInt64.notEvaluated = false;
    this.hs_zdfEqInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdInt64.notEvaluated = false;
    this.hs_zdfOrdInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedInt64.notEvaluated = false;
    this.hs_zdfBoundedInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfShowInt64.notEvaluated = false;
    this.hs_zdfShowInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfNumInt64.notEvaluated = false;
    this.hs_zdfNumInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumInt64.notEvaluated = false;
    this.hs_zdfEnumInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfRealInt64.notEvaluated = false;
    this.hs_zdfRealInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralInt64.notEvaluated = false;
    this.hs_zdfIntegralInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsInt64.notEvaluated = false;
    this.hs_zdfBitsInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfReadInt64.notEvaluated = false;
    this.hs_zdfReadInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfIxInt64.notEvaluated = false;
    this.hs_zdfIxInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfEqInt8.notEvaluated = false;
    this.hs_zdfEqInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdInt8.notEvaluated = false;
    this.hs_zdfOrdInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfShowInt8.notEvaluated = false;
    this.hs_zdfShowInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfNumInt8.notEvaluated = false;
    this.hs_zdfNumInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfRealInt8.notEvaluated = false;
    this.hs_zdfRealInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumInt8.notEvaluated = false;
    this.hs_zdfEnumInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralInt8.notEvaluated = false;
    this.hs_zdfIntegralInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedInt8.notEvaluated = false;
    this.hs_zdfBoundedInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsInt8.notEvaluated = false;
    this.hs_zdfBitsInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfReadInt8.notEvaluated = false;
    this.hs_zdfReadInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfIxInt8.notEvaluated = false;
    this.hs_zdfIxInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfEqInt16.notEvaluated = false;
    this.hs_zdfEqInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdInt16.notEvaluated = false;
    this.hs_zdfOrdInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfShowInt16.notEvaluated = false;
    this.hs_zdfShowInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfNumInt16.notEvaluated = false;
    this.hs_zdfNumInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfRealInt16.notEvaluated = false;
    this.hs_zdfRealInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumInt16.notEvaluated = false;
    this.hs_zdfEnumInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralInt16.notEvaluated = false;
    this.hs_zdfIntegralInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedInt16.notEvaluated = false;
    this.hs_zdfBoundedInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsInt16.notEvaluated = false;
    this.hs_zdfBitsInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfReadInt16.notEvaluated = false;
    this.hs_zdfReadInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfIxInt16.notEvaluated = false;
    this.hs_zdfIxInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfEqInt32.notEvaluated = false;
    this.hs_zdfEqInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdInt32.notEvaluated = false;
    this.hs_zdfOrdInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfShowInt32.notEvaluated = false;
    this.hs_zdfShowInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfNumInt32.notEvaluated = false;
    this.hs_zdfNumInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumInt32.notEvaluated = false;
    this.hs_zdfEnumInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfRealInt32.notEvaluated = false;
    this.hs_zdfRealInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfIntegralInt32.notEvaluated = false;
    this.hs_zdfIntegralInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfBoundedInt32.notEvaluated = false;
    this.hs_zdfBoundedInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsInt32.notEvaluated = false;
    this.hs_zdfBitsInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfReadInt32.notEvaluated = false;
    this.hs_zdfReadInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfIxInt32.notEvaluated = false;
    this.hs_zdfIxInt32.evaluate = function () {
        return this;
    };
    this.hs_I8zh.notEvaluated = false;
    this.hs_I16zh.notEvaluated = false;
    this.hs_I32zh.notEvaluated = false;
    this.hs_I64zh.notEvaluated = false;
    var hs_iShiftRA64zh25skZo = new $hs.Func(2);
    var hs_iShiftL64zh25skZm = new $hs.Func(2);
    var hs_modInt64zh25skZk = new $hs.Func(2);
    var hs_divInt64zh25skZi = new $hs.Func(2);
    var hs_zdcfromInteger25v9aK = new $hs.Func(1);
    var hs_zdcnegate25v9aR = new $hs.Func(1);
    var hs_zdczm25v9b0 = new $hs.Func(2);
    var hs_zdczt25v9be = new $hs.Func(2);
    var hs_zdczp25v9bs = new $hs.Func(2);
    var hs_zdcfromEnum25v9bG = new $hs.Func(1);
    var hs_zdctoInteger25v9bN = new $hs.Func(1);
    var hs_zdcisSigned25v9bU = new $hs.Func(1);
    var hs_zdcbitSizze25v9bY = new $hs.Func(1);
    var hs_zdcrotate25v9c2 = new $hs.Func(2);
    var hs_zdcshift25v9ct = new $hs.Func(2);
    var hs_zdccomplement25v9cM = new $hs.Func(1);
    var hs_zdcxor25v9cX = new $hs.Func(2);
    var hs_zdczizbzi25v9dd = new $hs.Func(2);
    var hs_zdczizazi25v9dt = new $hs.Func(2);
    var hs_zdcfromInteger125v9dJ = new $hs.Func(1);
    var hs_zdcnegate125v9dQ = new $hs.Func(1);
    var hs_zdczm125v9dZ = new $hs.Func(2);
    var hs_zdczt125v9ed = new $hs.Func(2);
    var hs_zdczp125v9er = new $hs.Func(2);
    var hs_zdcfromEnum125v9eF = new $hs.Func(1);
    var hs_zdctoInteger125v9eM = new $hs.Func(1);
    var hs_zdcisSigned125v9eT = new $hs.Func(1);
    var hs_zdcbitSizze125v9eX = new $hs.Func(1);
    var hs_zdcrotate125v9f1 = new $hs.Func(2);
    var hs_zdcshift125v9fs = new $hs.Func(2);
    var hs_zdccomplement125v9fL = new $hs.Func(1);
    var hs_zdcxor125v9fW = new $hs.Func(2);
    var hs_zdczizbzi125v9gc = new $hs.Func(2);
    var hs_zdczizazi125v9gs = new $hs.Func(2);
    var hs_zdcfromInteger225v9gI = new $hs.Func(1);
    var hs_zdcnegate225v9gP = new $hs.Func(1);
    var hs_zdczm225v9gY = new $hs.Func(2);
    var hs_zdczt225v9hc = new $hs.Func(2);
    var hs_zdczp225v9hq = new $hs.Func(2);
    var hs_zdcfromEnum225v9hE = new $hs.Func(1);
    var hs_zdctoEnum25v9hL = new $hs.Func(1);
    var hs_zdctoInteger225v9hS = new $hs.Func(1);
    var hs_zdcisSigned225v9hZ = new $hs.Func(1);
    var hs_zdcbitSizze225v9i3 = new $hs.Func(1);
    var hs_zdcrotate225v9i7 = new $hs.Func(2);
    var hs_zdcshift225v9iy = new $hs.Func(2);
    var hs_zdccomplement225v9iR = new $hs.Func(1);
    var hs_zdcxor225v9j2 = new $hs.Func(2);
    var hs_zdczizbzi225v9ji = new $hs.Func(2);
    var hs_zdczizazi225v9jy = new $hs.Func(2);
    var hs_zdczsze25v9jO = new $hs.Func(2);
    var hs_zdczeze25v9k0 = new $hs.Func(2);
    var hs_zdczlze25v9kc = new $hs.Func(2);
    var hs_zdczg25v9ko = new $hs.Func(2);
    var hs_zdczgze25v9kA = new $hs.Func(2);
    var hs_zdczl25v9kM = new $hs.Func(2);
    var hs_zdcmin25v9kY = new $hs.Thunk();
    var hs_zdcmax25v9l0 = new $hs.Thunk();
    var hs_zdccompare25v9l2 = new $hs.Thunk();
    var hs_zdcfromInteger325v9l4 = new $hs.Func(1);
    var hs_zdcnegate325v9la = new $hs.Func(1);
    var hs_zdczm325v9lj = new $hs.Func(2);
    var hs_zdczt325v9lx = new $hs.Func(2);
    var hs_zdczp325v9lL = new $hs.Func(2);
    var hs_zdctoEnum125v9lZ = new $hs.Func(1);
    var hs_zdctoInteger325v9m8 = new $hs.Func(1);
    var hs_zdcisSigned325v9mf = new $hs.Func(1);
    var hs_zdcbitSizze325v9mj = new $hs.Func(1);
    var hs_zdcrotate325v9mn = new $hs.Func(2);
    var hs_zdcshift325v9mQ = new $hs.Func(2);
    var hs_zdccomplement325v9nb = new $hs.Func(1);
    var hs_zdcxor325v9no = new $hs.Func(2);
    var hs_zdczizbzi325v9nI = new $hs.Func(2);
    var hs_zdczizazi325v9o2 = new $hs.Func(2);
    var hs_sat26DyoV = new $hs.Thunk();
    var hs_sat26DyoW = new $hs.Thunk();
    var hs_zdcenumFromThenTo25v9om = new $hs.Thunk();
    var hs_zdcenumFromTo25v9oo = new $hs.Thunk();
    var hs_zdcenumFromThen25v9oq = new $hs.Thunk();
    var hs_zdcenumFrom25v9os = new $hs.Thunk();
    var hs_zdcfromEnum325v9ou = new $hs.Func(1);
    var hs_zdcpred25v9ow = new $hs.Func(1);
    var hs_zdcsucc25v9oy = new $hs.Func(1);
    var hs_zdcdivMod25v9oA = new $hs.Func(2);
    var hs_zdcquotRem25v9oC = new $hs.Func(2);
    var hs_zdcmod25v9oE = new $hs.Func(2);
    var hs_zdcdiv25v9oG = new $hs.Func(2);
    var hs_zdcrem25v9oI = new $hs.Func(2);
    var hs_zdcshowList25v9oK = new $hs.Thunk();
    var hs_zdcshow25v9oM = new $hs.Thunk();
    var hs_zdcshowsPrec25v9oO = new $hs.Func(2);
    var hs_zdcsignum25v9oQ = new $hs.Func(1);
    var hs_zdcabs25v9oS = new $hs.Func(1);
    var hs_zdcquot25v9oU = new $hs.Func(2);
    var hs_zdctoRational25v9oW = new $hs.Func(1);
    var hs_zdcmaxBound25v9oY = new $hs.Thunk();
    var hs_zdcminBound25v9p0 = new $hs.Thunk();
    var hs_zdcrotateR25v9sH = new $hs.Thunk();
    var hs_zdcrotateL25v9sJ = new $hs.Thunk();
    var hs_zdcshiftR25v9sL = new $hs.Thunk();
    var hs_zdcshiftL25v9sN = new $hs.Thunk();
    var hs_zdctestBit25v9sP = new $hs.Thunk();
    var hs_zdccomplementBit25v9sR = new $hs.Thunk();
    var hs_zdcclearBit25v9sT = new $hs.Thunk();
    var hs_zdcsetBit25v9sV = new $hs.Thunk();
    var hs_zdcbit25v9sX = new $hs.Thunk();
    var hs_zdcreadsPrec25v9sZ = new $hs.Func(2);
    var hs_zdcreadListPrec25v9tn = new $hs.Thunk();
    var hs_zdcreadPrec25v9tp = new $hs.Thunk();
    var hs_zdcreadList25v9tr = new $hs.Thunk();
    var hs_zdcinRange25v9tt = new $hs.Func(2);
    var hs_zdcunsafeIndex25v9tG = new $hs.Func(2);
    var hs_zdcrange25v9tS = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze25v9u1 = new $hs.Thunk();
    var hs_zdcrangeSizze25v9u3 = new $hs.Thunk();
    var hs_zdcindex25v9u5 = new $hs.Thunk();
    var hs_zdczlze125v9u7 = new $hs.Func(2);
    var hs_zdczg125v9uj = new $hs.Func(2);
    var hs_zdczgze125v9uv = new $hs.Func(2);
    var hs_zdczl125v9uH = new $hs.Func(2);
    var hs_zdccompare125v9uT = new $hs.Func(2);
    var hs_zdczeze125v9v7 = new $hs.Func(2);
    var hs_zdczsze125v9vj = new $hs.Func(2);
    var hs_zdcmin125v9vq = new $hs.Thunk();
    var hs_zdcmax125v9vs = new $hs.Thunk();
    var hs_zdcinRange125v9vu = new $hs.Func(2);
    var hs_sat26Dyrk = new $hs.Thunk();
    var hs_sat26Dyrl = new $hs.Thunk();
    var hs_zdcshowList125v9vH = new $hs.Thunk();
    var hs_zdcshow125v9vJ = new $hs.Thunk();
    var hs_zdctoRational125v9vL = new $hs.Func(1);
    var hs_zdcenumFromThenTo125v9vN = new $hs.Thunk();
    var hs_zdcenumFromTo125v9vP = new $hs.Thunk();
    var hs_zdcenumFromThen125v9vR = new $hs.Thunk();
    var hs_zdcenumFrom125v9vT = new $hs.Thunk();
    var hs_zdctoEnum225v9vV = new $hs.Func(1);
    var hs_zdcpred125v9vX = new $hs.Func(1);
    var hs_zdcsucc125v9vZ = new $hs.Func(1);
    var hs_zdcquotRem125v9w1 = new $hs.Func(2);
    var hs_zdcmod125v9w3 = new $hs.Func(2);
    var hs_zdcdiv125v9w5 = new $hs.Func(2);
    var hs_zdcrem125v9w7 = new $hs.Func(2);
    var hs_zdcquot125v9w9 = new $hs.Func(2);
    var hs_zdcshowsPrec125v9wb = new $hs.Func(2);
    var hs_zdcsignum125v9wd = new $hs.Func(1);
    var hs_zdcabs125v9wf = new $hs.Func(1);
    var hs_zdcmaxBound125v9wh = new $hs.Thunk();
    var hs_zdcminBound125v9wj = new $hs.Thunk();
    var hs_zdcdivMod125v9wl = new $hs.Func(2);
    var hs_zdcrotateR125v9zV = new $hs.Thunk();
    var hs_zdcrotateL125v9zX = new $hs.Thunk();
    var hs_zdcshiftR125v9zZ = new $hs.Thunk();
    var hs_zdcshiftL125v9A1 = new $hs.Thunk();
    var hs_zdctestBit125v9A3 = new $hs.Thunk();
    var hs_zdccomplementBit125v9A5 = new $hs.Thunk();
    var hs_zdcclearBit125v9A7 = new $hs.Thunk();
    var hs_zdcsetBit125v9A9 = new $hs.Thunk();
    var hs_zdcbit125v9Ab = new $hs.Thunk();
    var hs_zdcreadsPrec125v9Ad = new $hs.Func(2);
    var hs_zdcreadListPrec125v9AB = new $hs.Thunk();
    var hs_zdcreadPrec125v9AD = new $hs.Thunk();
    var hs_zdcreadList125v9AF = new $hs.Thunk();
    var hs_zdcunsafeIndex125v9AH = new $hs.Func(2);
    var hs_zdcrange125v9AT = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze125v9B2 = new $hs.Thunk();
    var hs_zdcrangeSizze125v9B4 = new $hs.Thunk();
    var hs_zdcindex125v9B6 = new $hs.Thunk();
    var hs_zdczlze225v9B8 = new $hs.Func(2);
    var hs_zdczg225v9Bk = new $hs.Func(2);
    var hs_zdczgze225v9Bw = new $hs.Func(2);
    var hs_zdczl225v9BI = new $hs.Func(2);
    var hs_zdccompare225v9BU = new $hs.Func(2);
    var hs_zdczeze225v9C8 = new $hs.Func(2);
    var hs_zdczsze225v9Ck = new $hs.Func(2);
    var hs_zdcmin225v9Cr = new $hs.Thunk();
    var hs_zdcmax225v9Ct = new $hs.Thunk();
    var hs_zdcinRange225v9Cv = new $hs.Func(2);
    var hs_sat26DytB = new $hs.Thunk();
    var hs_sat26DytC = new $hs.Thunk();
    var hs_zdcshowList225v9CI = new $hs.Thunk();
    var hs_zdcshow225v9CK = new $hs.Thunk();
    var hs_zdctoRational225v9CM = new $hs.Func(1);
    var hs_zdcenumFromThenTo225v9CO = new $hs.Thunk();
    var hs_zdcenumFromTo225v9CQ = new $hs.Thunk();
    var hs_zdcenumFromThen225v9CS = new $hs.Thunk();
    var hs_zdcenumFrom225v9CU = new $hs.Thunk();
    var hs_zdctoEnum325v9CW = new $hs.Func(1);
    var hs_zdcpred225v9CY = new $hs.Func(1);
    var hs_zdcsucc225v9D0 = new $hs.Func(1);
    var hs_zdcquotRem225v9D2 = new $hs.Func(2);
    var hs_zdcmod225v9D4 = new $hs.Func(2);
    var hs_zdcdiv225v9D6 = new $hs.Func(2);
    var hs_zdcrem225v9D8 = new $hs.Func(2);
    var hs_zdcquot225v9Da = new $hs.Func(2);
    var hs_zdcshowsPrec225v9Dc = new $hs.Func(2);
    var hs_zdcsignum225v9De = new $hs.Func(1);
    var hs_zdcabs225v9Dg = new $hs.Func(1);
    var hs_zdcmaxBound225v9Di = new $hs.Thunk();
    var hs_zdcminBound225v9Dk = new $hs.Thunk();
    var hs_zdcdivMod225v9Dm = new $hs.Func(2);
    var hs_zdcrotateR225v9GW = new $hs.Thunk();
    var hs_zdcrotateL225v9GY = new $hs.Thunk();
    var hs_zdcshiftR225v9H0 = new $hs.Thunk();
    var hs_zdcshiftL225v9H2 = new $hs.Thunk();
    var hs_zdctestBit225v9H4 = new $hs.Thunk();
    var hs_zdccomplementBit225v9H6 = new $hs.Thunk();
    var hs_zdcclearBit225v9H8 = new $hs.Thunk();
    var hs_zdcsetBit225v9Ha = new $hs.Thunk();
    var hs_zdcbit225v9Hc = new $hs.Thunk();
    var hs_zdcreadsPrec225v9He = new $hs.Func(2);
    var hs_zdcreadListPrec225v9HC = new $hs.Thunk();
    var hs_zdcreadPrec225v9HE = new $hs.Thunk();
    var hs_zdcreadList225v9HG = new $hs.Thunk();
    var hs_zdcunsafeIndex225v9HI = new $hs.Func(2);
    var hs_zdcrange225v9HU = new $hs.Func(1);
    var hs_zdcunsafeRangeSizze225v9I3 = new $hs.Thunk();
    var hs_zdcrangeSizze225v9I5 = new $hs.Thunk();
    var hs_zdcindex225v9I7 = new $hs.Thunk();
    var hs_zdczlze325v9I9 = new $hs.Func(2);
    var hs_zdczg325v9Il = new $hs.Func(2);
    var hs_zdczgze325v9Ix = new $hs.Func(2);
    var hs_zdczl325v9IJ = new $hs.Func(2);
    var hs_zdccompare325v9IV = new $hs.Func(2);
    var hs_zdczeze325v9J9 = new $hs.Func(2);
    var hs_zdczsze325v9Jl = new $hs.Func(2);
    var hs_zdcmin325v9Js = new $hs.Thunk();
    var hs_zdcmax325v9Ju = new $hs.Thunk();
    var hs_zdcinRange325v9Jw = new $hs.Func(2);
    var hs_sat26DyvS = new $hs.Thunk();
    var hs_sat26DyvT = new $hs.Thunk();
    var hs_zdcshowList325v9JJ = new $hs.Thunk();
    var hs_zdcshow325v9JL = new $hs.Thunk();
    var hs_zdcenumFromThenTo325v9JN = new $hs.Thunk();
    var hs_zdcenumFromTo325v9JP = new $hs.Thunk();
    var hs_zdcenumFromThen325v9JR = new $hs.Thunk();
    var hs_zdcenumFrom325v9JT = new $hs.Thunk();
    var hs_zdcpred325v9JV = new $hs.Func(1);
    var hs_zdcsucc325v9JX = new $hs.Func(1);
    var hs_zdctoRational325v9JZ = new $hs.Func(1);
    var hs_zdcquotRem325v9K1 = new $hs.Func(2);
    var hs_zdcmod325v9K3 = new $hs.Func(2);
    var hs_zdcdiv325v9K5 = new $hs.Func(2);
    var hs_zdcrem325v9K7 = new $hs.Func(2);
    var hs_zdcquot325v9K9 = new $hs.Func(2);
    var hs_zdcshowsPrec325v9Kb = new $hs.Func(2);
    var hs_zdcsignum325v9Kd = new $hs.Func(1);
    var hs_zdcabs325v9Kf = new $hs.Func(1);
    var hs_zdcmaxBound325v9Kh = new $hs.Thunk();
    var hs_zdcminBound325v9Kj = new $hs.Thunk();
    var hs_zdcdivMod325v9Kl = new $hs.Func(2);
    var hs_zdcrotateR325v9NG = new $hs.Thunk();
    var hs_zdcrotateL325v9NI = new $hs.Thunk();
    var hs_zdcshiftR325v9NK = new $hs.Thunk();
    var hs_zdcshiftL325v9NM = new $hs.Thunk();
    var hs_zdctestBit325v9NO = new $hs.Thunk();
    var hs_zdccomplementBit325v9NQ = new $hs.Thunk();
    var hs_zdcclearBit325v9NS = new $hs.Thunk();
    var hs_zdcsetBit325v9NU = new $hs.Thunk();
    var hs_zdcbit325v9NW = new $hs.Thunk();
    var hs_zdcreadsPrec325v9NY = new $hs.Func(2);
    var hs_zdcreadListPrec325v9Om = new $hs.Thunk();
    var hs_zdcreadPrec325v9Oo = new $hs.Thunk();
    var hs_zdcreadList325v9Oq = new $hs.Thunk();
    var hs_zdcrange325v9Os = new $hs.Func(1);
    var hs_zdcunsafeIndex325v9OB = new $hs.Func(2);
    var hs_zdcunsafeRangeSizze325v9ON = new $hs.Thunk();
    var hs_zdcrangeSizze325v9OP = new $hs.Thunk();
    var hs_zdcindex325v9OR = new $hs.Thunk();
    hs_iShiftRA64zh25skZo.evaluate = function (hs_a26DxFY, hs_b26DxFW) {
        var hs_wild26Dyl8 = hs_b26DxFW >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26Dyl8.tag) {
        case 1:
            return $hs.modules.GHCziIntWord64.hs_uncheckedIShiftRA64zh.hscall(hs_a26DxFY, hs_b26DxFW);
        case 2:
            var hs_wild126DxG0 = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            var hs_wild226Dyl9 = $hs.modules.GHCziIntWord64.hs_ltInt64zh.hscall(hs_a26DxFY, hs_wild126DxG0);
            switch (hs_wild226Dyl9.tag) {
            case 1:
                return $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            case 2:
                return $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(-1);
            }
        }
    };
    hs_iShiftL64zh25skZm.evaluate = function (hs_a26DxG6, hs_b26DxG4) {
        var hs_wild26Dyla = hs_b26DxG4 >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild26Dyla.tag) {
        case 1:
            return $hs.modules.GHCziIntWord64.hs_uncheckedIShiftL64zh.hscall(hs_a26DxG6, hs_b26DxG4);
        case 2:
            return $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
        }
    };
    hs_modInt64zh25skZk.evaluate = function (hs_xzh26DxG9, hs_yzh26DxGa) {
        var hs_rzh26DxGr = $hs.modules.GHCziIntWord64.hs_remInt64zh.hscall(hs_xzh26DxG9, hs_yzh26DxGa);
        var hs_sat26Dyld = new $hs.Thunk();
        hs_sat26Dyld.evaluateOnce = function () {
            var hs_sat26Dylb = new $hs.Thunk();
            hs_sat26Dylb.evaluateOnce = function () {
                var hs_wild26DxGn = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
                return $hs.modules.GHCziIntWord64.hs_gtInt64zh.hscall(hs_yzh26DxGa, hs_wild26DxGn);
            };
            var hs_sat26Dylc = new $hs.Thunk();
            hs_sat26Dylc.evaluateOnce = function () {
                var hs_wild26DxGk = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
                return $hs.modules.GHCziIntWord64.hs_ltInt64zh.hscall(hs_xzh26DxG9, hs_wild26DxGk);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dylc, hs_sat26Dylb);
        };
        var hs_sat26Dylh = new $hs.Thunk();
        hs_sat26Dylh.evaluateOnce = function () {
            var hs_sat26Dyle = new $hs.Thunk();
            hs_sat26Dyle.evaluateOnce = function () {
                var hs_wild26DxGg = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
                return $hs.modules.GHCziIntWord64.hs_ltInt64zh.hscall(hs_yzh26DxGa, hs_wild26DxGg);
            };
            var hs_sat26Dylf = new $hs.Thunk();
            hs_sat26Dylf.evaluateOnce = function () {
                var hs_wild26DxGd = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
                return $hs.modules.GHCziIntWord64.hs_gtInt64zh.hscall(hs_xzh26DxG9, hs_wild26DxGd);
            };
            return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dylf, hs_sat26Dyle);
        };
        var hs_wild26Dylg = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26Dylh, hs_sat26Dyld);
        switch (hs_wild26Dylg.tag) {
        case 1:
            if (hs_rzh26DxGr.notEvaluated) {
                return hs_rzh26DxGr.hscall();
            } else {
                return hs_rzh26DxGr;
            }
        case 2:
            var hs_wild126DxGt = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            var hs_wild226Dyli = $hs.modules.GHCziIntWord64.hs_neInt64zh.hscall(hs_rzh26DxGr, hs_wild126DxGt);
            switch (hs_wild226Dyli.tag) {
            case 1:
                return $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            case 2:
                return $hs.modules.GHCziIntWord64.hs_plusInt64zh.hscall(hs_rzh26DxGr, hs_yzh26DxGa);
            }
        }
    };
    hs_divInt64zh25skZi.evaluate = function (hs_xzh26DxGy, hs_yzh26DxGC) {
        var hs_sat26Dylj = new $hs.Thunk();
        hs_sat26Dylj.evaluateOnce = function () {
            var hs_wild26DxGD = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            return $hs.modules.GHCziIntWord64.hs_ltInt64zh.hscall(hs_yzh26DxGC, hs_wild26DxGD);
        };
        var hs_sat26Dyll = new $hs.Thunk();
        hs_sat26Dyll.evaluateOnce = function () {
            var hs_wild26DxGz = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
            return $hs.modules.GHCziIntWord64.hs_gtInt64zh.hscall(hs_xzh26DxGy, hs_wild26DxGz);
        };
        var hs_wild26Dylk = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyll, hs_sat26Dylj);
        switch (hs_wild26Dylk.tag) {
        case 1:
            var hs_sat26Dylm = new $hs.Thunk();
            hs_sat26Dylm.evaluateOnce = function () {
                var hs_wild126DxGK = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
                return $hs.modules.GHCziIntWord64.hs_gtInt64zh.hscall(hs_yzh26DxGC, hs_wild126DxGK);
            };
            var hs_sat26Dylo = new $hs.Thunk();
            hs_sat26Dylo.evaluateOnce = function () {
                var hs_wild126DxGH = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
                return $hs.modules.GHCziIntWord64.hs_ltInt64zh.hscall(hs_xzh26DxGy, hs_wild126DxGH);
            };
            var hs_wild126Dyln = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dylo, hs_sat26Dylm);
            switch (hs_wild126Dyln.tag) {
            case 1:
                return $hs.modules.GHCziIntWord64.hs_quotInt64zh.hscall(hs_xzh26DxGy, hs_yzh26DxGC);
            case 2:
                var hs_wild226DxGQ = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(1);
                var hs_wild326DxGP = $hs.modules.GHCziIntWord64.hs_minusInt64zh.hscall(hs_xzh26DxGy, hs_yzh26DxGC);
                var hs_wild426DxGS = $hs.modules.GHCziIntWord64.hs_plusInt64zh.hscall(hs_wild326DxGP, hs_wild226DxGQ);
                return $hs.modules.GHCziIntWord64.hs_quotInt64zh.hscall(hs_wild426DxGS, hs_yzh26DxGC);
            }
        case 2:
            var hs_wild126DxGW = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(1);
            var hs_wild226DxGV = $hs.modules.GHCziIntWord64.hs_minusInt64zh.hscall(hs_xzh26DxGy, hs_yzh26DxGC);
            var hs_wild326DxGY = $hs.modules.GHCziIntWord64.hs_minusInt64zh.hscall(hs_wild226DxGV, hs_wild126DxGW);
            return $hs.modules.GHCziIntWord64.hs_quotInt64zh.hscall(hs_wild326DxGY, hs_yzh26DxGC);
        }
    };
    hs_zdcfromInteger25v9aK.evaluate = function (hs_i26DxH2) {
        var hs_wild26DxH4 = $hs.modules.GHCziInteger.hs_toIntzh.hscall(hs_i26DxH2);
        var hs_sat26Dylp = hs_wild26DxH4 >= 0 ? hs_wild26DxH4 & 127 : (hs_wild26DxH4 ^ ~0) & 127 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dylp];
        return $res;
    };
    hs_zdcnegate25v9aR.evaluate = function (hs_ds26DxH9) {
        var hs_wild26Dyls = hs_ds26DxH9;
        if (hs_ds26DxH9.notEvaluated) {
            hs_wild26Dyls = hs_ds26DxH9.hscall();
        }
        var hs_xzh26DxHc = hs_wild26Dyls.data[0];
        var hs_sat26Dylr = -hs_xzh26DxHc;
        var hs_sat26Dylq = hs_sat26Dylr >= 0 ? hs_sat26Dylr & 127 : (hs_sat26Dylr ^ ~0) & 127 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dylq];
        return $res;
    };
    hs_zdczm25v9b0.evaluate = function (hs_ds26DxHj, hs_ds126DxHm) {
        var hs_wild26Dylw = hs_ds26DxHj;
        if (hs_ds26DxHj.notEvaluated) {
            hs_wild26Dylw = hs_ds26DxHj.hscall();
        }
        var hs_xzh26DxHp = hs_wild26Dylw.data[0];
        var hs_wild126Dylv = hs_ds126DxHm;
        if (hs_ds126DxHm.notEvaluated) {
            hs_wild126Dylv = hs_ds126DxHm.hscall();
        }
        var hs_yzh26DxHq = hs_wild126Dylv.data[0];
        var hs_sat26Dylu = ($hs.Int.addCarry(hs_xzh26DxHp, ~hs_yzh26DxHq, 1))[0];
        var hs_sat26Dylt = hs_sat26Dylu >= 0 ? hs_sat26Dylu & 127 : (hs_sat26Dylu ^ ~0) & 127 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dylt];
        return $res;
    };
    hs_zdczt25v9be.evaluate = function (hs_ds26DxHx, hs_ds126DxHA) {
        var hs_wild26DylA = hs_ds26DxHx;
        if (hs_ds26DxHx.notEvaluated) {
            hs_wild26DylA = hs_ds26DxHx.hscall();
        }
        var hs_xzh26DxHD = hs_wild26DylA.data[0];
        var hs_wild126Dylz = hs_ds126DxHA;
        if (hs_ds126DxHA.notEvaluated) {
            hs_wild126Dylz = hs_ds126DxHA.hscall();
        }
        var hs_yzh26DxHE = hs_wild126Dylz.data[0];
        var hs_sat26Dyly = $hs.Int.mul(hs_xzh26DxHD, hs_yzh26DxHE);
        var hs_sat26Dylx = hs_sat26Dyly >= 0 ? hs_sat26Dyly & 127 : (hs_sat26Dyly ^ ~0) & 127 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dylx];
        return $res;
    };
    hs_zdczp25v9bs.evaluate = function (hs_ds26DxHL, hs_ds126DxHO) {
        var hs_wild26DylE = hs_ds26DxHL;
        if (hs_ds26DxHL.notEvaluated) {
            hs_wild26DylE = hs_ds26DxHL.hscall();
        }
        var hs_xzh26DxHR = hs_wild26DylE.data[0];
        var hs_wild126DylD = hs_ds126DxHO;
        if (hs_ds126DxHO.notEvaluated) {
            hs_wild126DylD = hs_ds126DxHO.hscall();
        }
        var hs_yzh26DxHS = hs_wild126DylD.data[0];
        var hs_sat26DylC = ($hs.Int.addCarry(hs_xzh26DxHR, hs_yzh26DxHS, 0))[0];
        var hs_sat26DylB = hs_sat26DylC >= 0 ? hs_sat26DylC & 127 : (hs_sat26DylC ^ ~0) & 127 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DylB];
        return $res;
    };
    hs_zdcfromEnum25v9bG.evaluate = function (hs_ds26DxHY) {
        var hs_wild26DylF = hs_ds26DxHY;
        if (hs_ds26DxHY.notEvaluated) {
            hs_wild26DylF = hs_ds26DxHY.hscall();
        }
        var hs_xzh26DxI1 = hs_wild26DylF.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_xzh26DxI1];
        return $res;
    };
    hs_zdctoInteger25v9bN.evaluate = function (hs_ds26DxI5) {
        var hs_wild26DylG = hs_ds26DxI5;
        if (hs_ds26DxI5.notEvaluated) {
            hs_wild26DylG = hs_ds26DxI5.hscall();
        }
        var hs_xzh26DxI8 = hs_wild26DylG.data[0];
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_xzh26DxI8);
    };
    hs_zdcisSigned25v9bU.evaluate = function (hs_ds26DxIc) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze25v9bY.evaluate = function (hs_ds26DxIg) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    hs_zdcrotate25v9c2.evaluate = function (hs_ds26DxIl, hs_ds126DxIo) {
        var hs_wild26DylT = hs_ds26DxIl;
        if (hs_ds26DxIl.notEvaluated) {
            hs_wild26DylT = hs_ds26DxIl.hscall();
        }
        var hs_xzh26DxIy = hs_wild26DylT.data[0];
        var hs_wild126DylS = hs_ds126DxIo;
        if (hs_ds126DxIo.notEvaluated) {
            hs_wild126DylS = hs_ds126DxIo.hscall();
        }
        var hs_izh26DxIs = hs_wild126DylS.data[0];
        var hs_sat26DylR = 7;
        var hs_sat26DylQ = hs_izh26DxIs;
        var hs_sat26DylP = hs_sat26DylQ & hs_sat26DylR;
        var hs_izqzh26DxIw = hs_sat26DylP;
        var hs_sat26DylO = hs_xzh26DxIy;
        var hs_xzqzh26DxIA = hs_sat26DylO & 255;
        var hs_wild226DylN = hs_izqzh26DxIw == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DylN.tag) {
        case 1:
            var hs_sat26DylM = ($hs.Int.addCarry(8, ~hs_izqzh26DxIw, 1))[0];
            var hs_sat26DylL = hs_xzqzh26DxIA >> hs_sat26DylM;
            var hs_sat26DylK = hs_xzqzh26DxIA << hs_izqzh26DxIw;
            var hs_sat26DylJ = hs_sat26DylK | hs_sat26DylL;
            var hs_sat26DylI = hs_sat26DylJ;
            var hs_sat26DylH = hs_sat26DylI >= 0 ? hs_sat26DylI & 127 : (hs_sat26DylI ^ ~0) & 127 ^ ~0;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DylH];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DxIy];
            return $res;
        }
    };
    hs_zdcshift25v9ct.evaluate = function (hs_eta26DxIM, hs_eta126DxIP) {
        var hs_wild26DylX = hs_eta26DxIM;
        if (hs_eta26DxIM.notEvaluated) {
            hs_wild26DylX = hs_eta26DxIM.hscall();
        }
        var hs_xzh26DxIU = hs_wild26DylX.data[0];
        var hs_wild126DylW = hs_eta126DxIP;
        if (hs_eta126DxIP.notEvaluated) {
            hs_wild126DylW = hs_eta126DxIP.hscall();
        }
        var hs_izh26DxIS = hs_wild126DylW.data[0];
        var hs_wild226DylV = hs_izh26DxIS >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DylV.tag) {
        case 1:
            var hs_sat26DylU = -hs_izh26DxIS;
            var hs_wild326DxIX = $hs.modules.GHCziBase.hs_iShiftRAzh.hscall(hs_xzh26DxIU, hs_sat26DylU);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DxIX];
            return $res;
        case 2:
            var hs_wild326DxIZ = $hs.modules.GHCziBase.hs_iShiftLzh.hscall(hs_xzh26DxIU, hs_izh26DxIS);
            var hs_sat26DylY = hs_wild326DxIZ >= 0 ? hs_wild326DxIZ & 127 : (hs_wild326DxIZ ^ ~0) & 127 ^ ~0;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DylY];
            return $res;
        }
    };
    hs_zdccomplement25v9cM.evaluate = function (hs_ds26DxJ4) {
        var hs_wild26Dym3 = hs_ds26DxJ4;
        if (hs_ds26DxJ4.notEvaluated) {
            hs_wild26Dym3 = hs_ds26DxJ4.hscall();
        }
        var hs_xzh26DxJ7 = hs_wild26Dym3.data[0];
        var hs_sat26Dym2 = -1;
        var hs_sat26Dym1 = hs_xzh26DxJ7;
        var hs_sat26Dym0 = hs_sat26Dym1 ^ hs_sat26Dym2;
        var hs_sat26DylZ = hs_sat26Dym0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DylZ];
        return $res;
    };
    hs_zdcxor25v9cX.evaluate = function (hs_ds26DxJg, hs_ds126DxJj) {
        var hs_wild26Dym9 = hs_ds26DxJg;
        if (hs_ds26DxJg.notEvaluated) {
            hs_wild26Dym9 = hs_ds26DxJg.hscall();
        }
        var hs_xzh26DxJm = hs_wild26Dym9.data[0];
        var hs_wild126Dym8 = hs_ds126DxJj;
        if (hs_ds126DxJj.notEvaluated) {
            hs_wild126Dym8 = hs_ds126DxJj.hscall();
        }
        var hs_yzh26DxJo = hs_wild126Dym8.data[0];
        var hs_sat26Dym7 = hs_yzh26DxJo;
        var hs_sat26Dym6 = hs_xzh26DxJm;
        var hs_sat26Dym5 = hs_sat26Dym6 ^ hs_sat26Dym7;
        var hs_sat26Dym4 = hs_sat26Dym5;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dym4];
        return $res;
    };
    hs_zdczizbzi25v9dd.evaluate = function (hs_ds26DxJw, hs_ds126DxJz) {
        var hs_wild26Dymf = hs_ds26DxJw;
        if (hs_ds26DxJw.notEvaluated) {
            hs_wild26Dymf = hs_ds26DxJw.hscall();
        }
        var hs_xzh26DxJC = hs_wild26Dymf.data[0];
        var hs_wild126Dyme = hs_ds126DxJz;
        if (hs_ds126DxJz.notEvaluated) {
            hs_wild126Dyme = hs_ds126DxJz.hscall();
        }
        var hs_yzh26DxJE = hs_wild126Dyme.data[0];
        var hs_sat26Dymd = hs_yzh26DxJE;
        var hs_sat26Dymc = hs_xzh26DxJC;
        var hs_sat26Dymb = hs_sat26Dymc | hs_sat26Dymd;
        var hs_sat26Dyma = hs_sat26Dymb;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dyma];
        return $res;
    };
    hs_zdczizazi25v9dt.evaluate = function (hs_ds26DxJM, hs_ds126DxJP) {
        var hs_wild26Dyml = hs_ds26DxJM;
        if (hs_ds26DxJM.notEvaluated) {
            hs_wild26Dyml = hs_ds26DxJM.hscall();
        }
        var hs_xzh26DxJS = hs_wild26Dyml.data[0];
        var hs_wild126Dymk = hs_ds126DxJP;
        if (hs_ds126DxJP.notEvaluated) {
            hs_wild126Dymk = hs_ds126DxJP.hscall();
        }
        var hs_yzh26DxJU = hs_wild126Dymk.data[0];
        var hs_sat26Dymj = hs_yzh26DxJU;
        var hs_sat26Dymi = hs_xzh26DxJS;
        var hs_sat26Dymh = hs_sat26Dymi & hs_sat26Dymj;
        var hs_sat26Dymg = hs_sat26Dymh;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dymg];
        return $res;
    };
    hs_zdcfromInteger125v9dJ.evaluate = function (hs_i26DxK1) {
        var hs_wild26DxK3 = $hs.modules.GHCziInteger.hs_toIntzh.hscall(hs_i26DxK1);
        var hs_sat26Dymm = hs_wild26DxK3 >= 0 ? hs_wild26DxK3 & 32767 : (hs_wild26DxK3 ^ ~0) & 32767 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dymm];
        return $res;
    };
    hs_zdcnegate125v9dQ.evaluate = function (hs_ds26DxK8) {
        var hs_wild26Dymp = hs_ds26DxK8;
        if (hs_ds26DxK8.notEvaluated) {
            hs_wild26Dymp = hs_ds26DxK8.hscall();
        }
        var hs_xzh26DxKb = hs_wild26Dymp.data[0];
        var hs_sat26Dymo = -hs_xzh26DxKb;
        var hs_sat26Dymn = hs_sat26Dymo >= 0 ? hs_sat26Dymo & 32767 : (hs_sat26Dymo ^ ~0) & 32767 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dymn];
        return $res;
    };
    hs_zdczm125v9dZ.evaluate = function (hs_ds26DxKi, hs_ds126DxKl) {
        var hs_wild26Dymt = hs_ds26DxKi;
        if (hs_ds26DxKi.notEvaluated) {
            hs_wild26Dymt = hs_ds26DxKi.hscall();
        }
        var hs_xzh26DxKo = hs_wild26Dymt.data[0];
        var hs_wild126Dyms = hs_ds126DxKl;
        if (hs_ds126DxKl.notEvaluated) {
            hs_wild126Dyms = hs_ds126DxKl.hscall();
        }
        var hs_yzh26DxKp = hs_wild126Dyms.data[0];
        var hs_sat26Dymr = ($hs.Int.addCarry(hs_xzh26DxKo, ~hs_yzh26DxKp, 1))[0];
        var hs_sat26Dymq = hs_sat26Dymr >= 0 ? hs_sat26Dymr & 32767 : (hs_sat26Dymr ^ ~0) & 32767 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dymq];
        return $res;
    };
    hs_zdczt125v9ed.evaluate = function (hs_ds26DxKw, hs_ds126DxKz) {
        var hs_wild26Dymx = hs_ds26DxKw;
        if (hs_ds26DxKw.notEvaluated) {
            hs_wild26Dymx = hs_ds26DxKw.hscall();
        }
        var hs_xzh26DxKC = hs_wild26Dymx.data[0];
        var hs_wild126Dymw = hs_ds126DxKz;
        if (hs_ds126DxKz.notEvaluated) {
            hs_wild126Dymw = hs_ds126DxKz.hscall();
        }
        var hs_yzh26DxKD = hs_wild126Dymw.data[0];
        var hs_sat26Dymv = $hs.Int.mul(hs_xzh26DxKC, hs_yzh26DxKD);
        var hs_sat26Dymu = hs_sat26Dymv >= 0 ? hs_sat26Dymv & 32767 : (hs_sat26Dymv ^ ~0) & 32767 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dymu];
        return $res;
    };
    hs_zdczp125v9er.evaluate = function (hs_ds26DxKK, hs_ds126DxKN) {
        var hs_wild26DymB = hs_ds26DxKK;
        if (hs_ds26DxKK.notEvaluated) {
            hs_wild26DymB = hs_ds26DxKK.hscall();
        }
        var hs_xzh26DxKQ = hs_wild26DymB.data[0];
        var hs_wild126DymA = hs_ds126DxKN;
        if (hs_ds126DxKN.notEvaluated) {
            hs_wild126DymA = hs_ds126DxKN.hscall();
        }
        var hs_yzh26DxKR = hs_wild126DymA.data[0];
        var hs_sat26Dymz = ($hs.Int.addCarry(hs_xzh26DxKQ, hs_yzh26DxKR, 0))[0];
        var hs_sat26Dymy = hs_sat26Dymz >= 0 ? hs_sat26Dymz & 32767 : (hs_sat26Dymz ^ ~0) & 32767 ^ ~0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dymy];
        return $res;
    };
    hs_zdcfromEnum125v9eF.evaluate = function (hs_ds26DxKX) {
        var hs_wild26DymC = hs_ds26DxKX;
        if (hs_ds26DxKX.notEvaluated) {
            hs_wild26DymC = hs_ds26DxKX.hscall();
        }
        var hs_xzh26DxL0 = hs_wild26DymC.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_xzh26DxL0];
        return $res;
    };
    hs_zdctoInteger125v9eM.evaluate = function (hs_ds26DxL4) {
        var hs_wild26DymD = hs_ds26DxL4;
        if (hs_ds26DxL4.notEvaluated) {
            hs_wild26DymD = hs_ds26DxL4.hscall();
        }
        var hs_xzh26DxL7 = hs_wild26DymD.data[0];
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_xzh26DxL7);
    };
    hs_zdcisSigned125v9eT.evaluate = function (hs_ds26DxLb) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze125v9eX.evaluate = function (hs_ds26DxLf) {
        var $res = new $hs.Data(1);
        $res.data = [16];
        return $res;
    };
    hs_zdcrotate125v9f1.evaluate = function (hs_ds26DxLk, hs_ds126DxLn) {
        var hs_wild26DymQ = hs_ds26DxLk;
        if (hs_ds26DxLk.notEvaluated) {
            hs_wild26DymQ = hs_ds26DxLk.hscall();
        }
        var hs_xzh26DxLx = hs_wild26DymQ.data[0];
        var hs_wild126DymP = hs_ds126DxLn;
        if (hs_ds126DxLn.notEvaluated) {
            hs_wild126DymP = hs_ds126DxLn.hscall();
        }
        var hs_izh26DxLr = hs_wild126DymP.data[0];
        var hs_sat26DymO = 15;
        var hs_sat26DymN = hs_izh26DxLr;
        var hs_sat26DymM = hs_sat26DymN & hs_sat26DymO;
        var hs_izqzh26DxLv = hs_sat26DymM;
        var hs_sat26DymL = hs_xzh26DxLx;
        var hs_xzqzh26DxLz = hs_sat26DymL & 65535;
        var hs_wild226DymK = hs_izqzh26DxLv == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DymK.tag) {
        case 1:
            var hs_sat26DymJ = ($hs.Int.addCarry(16, ~hs_izqzh26DxLv, 1))[0];
            var hs_sat26DymI = hs_xzqzh26DxLz >> hs_sat26DymJ;
            var hs_sat26DymH = hs_xzqzh26DxLz << hs_izqzh26DxLv;
            var hs_sat26DymG = hs_sat26DymH | hs_sat26DymI;
            var hs_sat26DymF = hs_sat26DymG;
            var hs_sat26DymE = hs_sat26DymF >= 0 ? hs_sat26DymF & 32767 : (hs_sat26DymF ^ ~0) & 32767 ^ ~0;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DymE];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DxLx];
            return $res;
        }
    };
    hs_zdcshift125v9fs.evaluate = function (hs_eta26DxLL, hs_eta126DxLO) {
        var hs_wild26DymU = hs_eta26DxLL;
        if (hs_eta26DxLL.notEvaluated) {
            hs_wild26DymU = hs_eta26DxLL.hscall();
        }
        var hs_xzh26DxLT = hs_wild26DymU.data[0];
        var hs_wild126DymT = hs_eta126DxLO;
        if (hs_eta126DxLO.notEvaluated) {
            hs_wild126DymT = hs_eta126DxLO.hscall();
        }
        var hs_izh26DxLR = hs_wild126DymT.data[0];
        var hs_wild226DymS = hs_izh26DxLR >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DymS.tag) {
        case 1:
            var hs_sat26DymR = -hs_izh26DxLR;
            var hs_wild326DxLW = $hs.modules.GHCziBase.hs_iShiftRAzh.hscall(hs_xzh26DxLT, hs_sat26DymR);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DxLW];
            return $res;
        case 2:
            var hs_wild326DxLY = $hs.modules.GHCziBase.hs_iShiftLzh.hscall(hs_xzh26DxLT, hs_izh26DxLR);
            var hs_sat26DymV = hs_wild326DxLY >= 0 ? hs_wild326DxLY & 32767 : (hs_wild326DxLY ^ ~0) & 32767 ^ ~0;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DymV];
            return $res;
        }
    };
    hs_zdccomplement125v9fL.evaluate = function (hs_ds26DxM3) {
        var hs_wild26Dyn0 = hs_ds26DxM3;
        if (hs_ds26DxM3.notEvaluated) {
            hs_wild26Dyn0 = hs_ds26DxM3.hscall();
        }
        var hs_xzh26DxM6 = hs_wild26Dyn0.data[0];
        var hs_sat26DymZ = -1;
        var hs_sat26DymY = hs_xzh26DxM6;
        var hs_sat26DymX = hs_sat26DymY ^ hs_sat26DymZ;
        var hs_sat26DymW = hs_sat26DymX;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DymW];
        return $res;
    };
    hs_zdcxor125v9fW.evaluate = function (hs_ds26DxMf, hs_ds126DxMi) {
        var hs_wild26Dyn6 = hs_ds26DxMf;
        if (hs_ds26DxMf.notEvaluated) {
            hs_wild26Dyn6 = hs_ds26DxMf.hscall();
        }
        var hs_xzh26DxMl = hs_wild26Dyn6.data[0];
        var hs_wild126Dyn5 = hs_ds126DxMi;
        if (hs_ds126DxMi.notEvaluated) {
            hs_wild126Dyn5 = hs_ds126DxMi.hscall();
        }
        var hs_yzh26DxMn = hs_wild126Dyn5.data[0];
        var hs_sat26Dyn4 = hs_yzh26DxMn;
        var hs_sat26Dyn3 = hs_xzh26DxMl;
        var hs_sat26Dyn2 = hs_sat26Dyn3 ^ hs_sat26Dyn4;
        var hs_sat26Dyn1 = hs_sat26Dyn2;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dyn1];
        return $res;
    };
    hs_zdczizbzi125v9gc.evaluate = function (hs_ds26DxMv, hs_ds126DxMy) {
        var hs_wild26Dync = hs_ds26DxMv;
        if (hs_ds26DxMv.notEvaluated) {
            hs_wild26Dync = hs_ds26DxMv.hscall();
        }
        var hs_xzh26DxMB = hs_wild26Dync.data[0];
        var hs_wild126Dynb = hs_ds126DxMy;
        if (hs_ds126DxMy.notEvaluated) {
            hs_wild126Dynb = hs_ds126DxMy.hscall();
        }
        var hs_yzh26DxMD = hs_wild126Dynb.data[0];
        var hs_sat26Dyna = hs_yzh26DxMD;
        var hs_sat26Dyn9 = hs_xzh26DxMB;
        var hs_sat26Dyn8 = hs_sat26Dyn9 | hs_sat26Dyna;
        var hs_sat26Dyn7 = hs_sat26Dyn8;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dyn7];
        return $res;
    };
    hs_zdczizazi125v9gs.evaluate = function (hs_ds26DxML, hs_ds126DxMO) {
        var hs_wild26Dyni = hs_ds26DxML;
        if (hs_ds26DxML.notEvaluated) {
            hs_wild26Dyni = hs_ds26DxML.hscall();
        }
        var hs_xzh26DxMR = hs_wild26Dyni.data[0];
        var hs_wild126Dynh = hs_ds126DxMO;
        if (hs_ds126DxMO.notEvaluated) {
            hs_wild126Dynh = hs_ds126DxMO.hscall();
        }
        var hs_yzh26DxMT = hs_wild126Dynh.data[0];
        var hs_sat26Dyng = hs_yzh26DxMT;
        var hs_sat26Dynf = hs_xzh26DxMR;
        var hs_sat26Dyne = hs_sat26Dynf & hs_sat26Dyng;
        var hs_sat26Dynd = hs_sat26Dyne;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dynd];
        return $res;
    };
    hs_zdcfromInteger225v9gI.evaluate = function (hs_i26DxN0) {
        var hs_wild26DxN2 = $hs.modules.GHCziInteger.hs_toIntzh.hscall(hs_i26DxN0);
        var hs_sat26Dynj = hs_wild26DxN2;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dynj];
        return $res;
    };
    hs_zdcnegate225v9gP.evaluate = function (hs_ds26DxN7) {
        var hs_wild26Dynm = hs_ds26DxN7;
        if (hs_ds26DxN7.notEvaluated) {
            hs_wild26Dynm = hs_ds26DxN7.hscall();
        }
        var hs_xzh26DxNa = hs_wild26Dynm.data[0];
        var hs_sat26Dynl = -hs_xzh26DxNa;
        var hs_sat26Dynk = hs_sat26Dynl;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dynk];
        return $res;
    };
    hs_zdczm225v9gY.evaluate = function (hs_ds26DxNh, hs_ds126DxNk) {
        var hs_wild26Dynq = hs_ds26DxNh;
        if (hs_ds26DxNh.notEvaluated) {
            hs_wild26Dynq = hs_ds26DxNh.hscall();
        }
        var hs_xzh26DxNn = hs_wild26Dynq.data[0];
        var hs_wild126Dynp = hs_ds126DxNk;
        if (hs_ds126DxNk.notEvaluated) {
            hs_wild126Dynp = hs_ds126DxNk.hscall();
        }
        var hs_yzh26DxNo = hs_wild126Dynp.data[0];
        var hs_sat26Dyno = ($hs.Int.addCarry(hs_xzh26DxNn, ~hs_yzh26DxNo, 1))[0];
        var hs_sat26Dynn = hs_sat26Dyno;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dynn];
        return $res;
    };
    hs_zdczt225v9hc.evaluate = function (hs_ds26DxNv, hs_ds126DxNy) {
        var hs_wild26Dynu = hs_ds26DxNv;
        if (hs_ds26DxNv.notEvaluated) {
            hs_wild26Dynu = hs_ds26DxNv.hscall();
        }
        var hs_xzh26DxNB = hs_wild26Dynu.data[0];
        var hs_wild126Dynt = hs_ds126DxNy;
        if (hs_ds126DxNy.notEvaluated) {
            hs_wild126Dynt = hs_ds126DxNy.hscall();
        }
        var hs_yzh26DxNC = hs_wild126Dynt.data[0];
        var hs_sat26Dyns = $hs.Int.mul(hs_xzh26DxNB, hs_yzh26DxNC);
        var hs_sat26Dynr = hs_sat26Dyns;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dynr];
        return $res;
    };
    hs_zdczp225v9hq.evaluate = function (hs_ds26DxNJ, hs_ds126DxNM) {
        var hs_wild26Dyny = hs_ds26DxNJ;
        if (hs_ds26DxNJ.notEvaluated) {
            hs_wild26Dyny = hs_ds26DxNJ.hscall();
        }
        var hs_xzh26DxNP = hs_wild26Dyny.data[0];
        var hs_wild126Dynx = hs_ds126DxNM;
        if (hs_ds126DxNM.notEvaluated) {
            hs_wild126Dynx = hs_ds126DxNM.hscall();
        }
        var hs_yzh26DxNQ = hs_wild126Dynx.data[0];
        var hs_sat26Dynw = ($hs.Int.addCarry(hs_xzh26DxNP, hs_yzh26DxNQ, 0))[0];
        var hs_sat26Dynv = hs_sat26Dynw;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dynv];
        return $res;
    };
    hs_zdcfromEnum225v9hE.evaluate = function (hs_ds26DxNW) {
        var hs_wild26Dynz = hs_ds26DxNW;
        if (hs_ds26DxNW.notEvaluated) {
            hs_wild26Dynz = hs_ds26DxNW.hscall();
        }
        var hs_xzh26DxNZ = hs_wild26Dynz.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_xzh26DxNZ];
        return $res;
    };
    hs_zdctoEnum25v9hL.evaluate = function (hs_ds26DxO3) {
        var hs_wild26DynA = hs_ds26DxO3;
        if (hs_ds26DxO3.notEvaluated) {
            hs_wild26DynA = hs_ds26DxO3.hscall();
        }
        var hs_izh26DxO6 = hs_wild26DynA.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_izh26DxO6];
        return $res;
    };
    hs_zdctoInteger225v9hS.evaluate = function (hs_ds26DxOa) {
        var hs_wild26DynB = hs_ds26DxOa;
        if (hs_ds26DxOa.notEvaluated) {
            hs_wild26DynB = hs_ds26DxOa.hscall();
        }
        var hs_xzh26DxOd = hs_wild26DynB.data[0];
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(hs_xzh26DxOd);
    };
    hs_zdcisSigned225v9hZ.evaluate = function (hs_ds26DxOh) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze225v9i3.evaluate = function (hs_ds26DxOl) {
        var $res = new $hs.Data(1);
        $res.data = [32];
        return $res;
    };
    hs_zdcrotate225v9i7.evaluate = function (hs_ds26DxOq, hs_ds126DxOt) {
        var hs_wild26DynO = hs_ds26DxOq;
        if (hs_ds26DxOq.notEvaluated) {
            hs_wild26DynO = hs_ds26DxOq.hscall();
        }
        var hs_xzh26DxOD = hs_wild26DynO.data[0];
        var hs_wild126DynN = hs_ds126DxOt;
        if (hs_ds126DxOt.notEvaluated) {
            hs_wild126DynN = hs_ds126DxOt.hscall();
        }
        var hs_izh26DxOx = hs_wild126DynN.data[0];
        var hs_sat26DynM = 31;
        var hs_sat26DynL = hs_izh26DxOx;
        var hs_sat26DynK = hs_sat26DynL & hs_sat26DynM;
        var hs_izqzh26DxOB = hs_sat26DynK;
        var hs_sat26DynJ = hs_xzh26DxOD;
        var hs_xzqzh26DxOF = hs_sat26DynJ;
        var hs_wild226DynI = hs_izqzh26DxOB == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DynI.tag) {
        case 1:
            var hs_sat26DynH = ($hs.Int.addCarry(32, ~hs_izqzh26DxOB, 1))[0];
            var hs_sat26DynG = hs_xzqzh26DxOF >> hs_sat26DynH;
            var hs_sat26DynF = hs_xzqzh26DxOF << hs_izqzh26DxOB;
            var hs_sat26DynE = hs_sat26DynF | hs_sat26DynG;
            var hs_sat26DynD = hs_sat26DynE;
            var hs_sat26DynC = hs_sat26DynD;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DynC];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DxOD];
            return $res;
        }
    };
    hs_zdcshift225v9iy.evaluate = function (hs_eta26DxOR, hs_eta126DxOU) {
        var hs_wild26DynS = hs_eta26DxOR;
        if (hs_eta26DxOR.notEvaluated) {
            hs_wild26DynS = hs_eta26DxOR.hscall();
        }
        var hs_xzh26DxOZ = hs_wild26DynS.data[0];
        var hs_wild126DynR = hs_eta126DxOU;
        if (hs_eta126DxOU.notEvaluated) {
            hs_wild126DynR = hs_eta126DxOU.hscall();
        }
        var hs_izh26DxOX = hs_wild126DynR.data[0];
        var hs_wild226DynQ = hs_izh26DxOX >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DynQ.tag) {
        case 1:
            var hs_sat26DynP = -hs_izh26DxOX;
            var hs_wild326DxP2 = $hs.modules.GHCziBase.hs_iShiftRAzh.hscall(hs_xzh26DxOZ, hs_sat26DynP);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DxP2];
            return $res;
        case 2:
            var hs_wild326DxP4 = $hs.modules.GHCziBase.hs_iShiftLzh.hscall(hs_xzh26DxOZ, hs_izh26DxOX);
            var hs_sat26DynT = hs_wild326DxP4;
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26DynT];
            return $res;
        }
    };
    hs_zdccomplement225v9iR.evaluate = function (hs_ds26DxP9) {
        var hs_wild26DynY = hs_ds26DxP9;
        if (hs_ds26DxP9.notEvaluated) {
            hs_wild26DynY = hs_ds26DxP9.hscall();
        }
        var hs_xzh26DxPc = hs_wild26DynY.data[0];
        var hs_sat26DynX = -1;
        var hs_sat26DynW = hs_xzh26DxPc;
        var hs_sat26DynV = hs_sat26DynW ^ hs_sat26DynX;
        var hs_sat26DynU = hs_sat26DynV;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DynU];
        return $res;
    };
    hs_zdcxor225v9j2.evaluate = function (hs_ds26DxPl, hs_ds126DxPo) {
        var hs_wild26Dyo4 = hs_ds26DxPl;
        if (hs_ds26DxPl.notEvaluated) {
            hs_wild26Dyo4 = hs_ds26DxPl.hscall();
        }
        var hs_xzh26DxPr = hs_wild26Dyo4.data[0];
        var hs_wild126Dyo3 = hs_ds126DxPo;
        if (hs_ds126DxPo.notEvaluated) {
            hs_wild126Dyo3 = hs_ds126DxPo.hscall();
        }
        var hs_yzh26DxPt = hs_wild126Dyo3.data[0];
        var hs_sat26Dyo2 = hs_yzh26DxPt;
        var hs_sat26Dyo1 = hs_xzh26DxPr;
        var hs_sat26Dyo0 = hs_sat26Dyo1 ^ hs_sat26Dyo2;
        var hs_sat26DynZ = hs_sat26Dyo0;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DynZ];
        return $res;
    };
    hs_zdczizbzi225v9ji.evaluate = function (hs_ds26DxPB, hs_ds126DxPE) {
        var hs_wild26Dyoa = hs_ds26DxPB;
        if (hs_ds26DxPB.notEvaluated) {
            hs_wild26Dyoa = hs_ds26DxPB.hscall();
        }
        var hs_xzh26DxPH = hs_wild26Dyoa.data[0];
        var hs_wild126Dyo9 = hs_ds126DxPE;
        if (hs_ds126DxPE.notEvaluated) {
            hs_wild126Dyo9 = hs_ds126DxPE.hscall();
        }
        var hs_yzh26DxPJ = hs_wild126Dyo9.data[0];
        var hs_sat26Dyo8 = hs_yzh26DxPJ;
        var hs_sat26Dyo7 = hs_xzh26DxPH;
        var hs_sat26Dyo6 = hs_sat26Dyo7 | hs_sat26Dyo8;
        var hs_sat26Dyo5 = hs_sat26Dyo6;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dyo5];
        return $res;
    };
    hs_zdczizazi225v9jy.evaluate = function (hs_ds26DxPR, hs_ds126DxPU) {
        var hs_wild26Dyog = hs_ds26DxPR;
        if (hs_ds26DxPR.notEvaluated) {
            hs_wild26Dyog = hs_ds26DxPR.hscall();
        }
        var hs_xzh26DxPX = hs_wild26Dyog.data[0];
        var hs_wild126Dyof = hs_ds126DxPU;
        if (hs_ds126DxPU.notEvaluated) {
            hs_wild126Dyof = hs_ds126DxPU.hscall();
        }
        var hs_yzh26DxPZ = hs_wild126Dyof.data[0];
        var hs_sat26Dyoe = hs_yzh26DxPZ;
        var hs_sat26Dyod = hs_xzh26DxPX;
        var hs_sat26Dyoc = hs_sat26Dyod & hs_sat26Dyoe;
        var hs_sat26Dyob = hs_sat26Dyoc;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26Dyob];
        return $res;
    };
    hs_zdczsze25v9jO.evaluate = function (hs_ds26DxQ7, hs_ds126DxQa) {
        var hs_wild26Dyoi = hs_ds26DxQ7;
        if (hs_ds26DxQ7.notEvaluated) {
            hs_wild26Dyoi = hs_ds26DxQ7.hscall();
        }
        var hs_xzh26DxQd = hs_wild26Dyoi.data[0];
        var hs_wild126Dyoh = hs_ds126DxQa;
        if (hs_ds126DxQa.notEvaluated) {
            hs_wild126Dyoh = hs_ds126DxQa.hscall();
        }
        var hs_yzh26DxQe = hs_wild126Dyoh.data[0];
        return $hs.modules.GHCziIntWord64.hs_neInt64zh.hscall(hs_xzh26DxQd, hs_yzh26DxQe);
    };
    hs_zdczeze25v9k0.evaluate = function (hs_ds26DxQj, hs_ds126DxQm) {
        var hs_wild26Dyok = hs_ds26DxQj;
        if (hs_ds26DxQj.notEvaluated) {
            hs_wild26Dyok = hs_ds26DxQj.hscall();
        }
        var hs_xzh26DxQp = hs_wild26Dyok.data[0];
        var hs_wild126Dyoj = hs_ds126DxQm;
        if (hs_ds126DxQm.notEvaluated) {
            hs_wild126Dyoj = hs_ds126DxQm.hscall();
        }
        var hs_yzh26DxQq = hs_wild126Dyoj.data[0];
        return $hs.modules.GHCziIntWord64.hs_eqInt64zh.hscall(hs_xzh26DxQp, hs_yzh26DxQq);
    };
    this.hs_zdfEqInt64.data = [hs_zdczeze25v9k0, hs_zdczsze25v9jO];
    hs_zdczlze25v9kc.evaluate = function (hs_ds26DxQv, hs_ds126DxQy) {
        var hs_wild26Dyom = hs_ds26DxQv;
        if (hs_ds26DxQv.notEvaluated) {
            hs_wild26Dyom = hs_ds26DxQv.hscall();
        }
        var hs_xzh26DxQB = hs_wild26Dyom.data[0];
        var hs_wild126Dyol = hs_ds126DxQy;
        if (hs_ds126DxQy.notEvaluated) {
            hs_wild126Dyol = hs_ds126DxQy.hscall();
        }
        var hs_yzh26DxQC = hs_wild126Dyol.data[0];
        return $hs.modules.GHCziIntWord64.hs_leInt64zh.hscall(hs_xzh26DxQB, hs_yzh26DxQC);
    };
    hs_zdczg25v9ko.evaluate = function (hs_ds26DxQH, hs_ds126DxQK) {
        var hs_wild26Dyoo = hs_ds26DxQH;
        if (hs_ds26DxQH.notEvaluated) {
            hs_wild26Dyoo = hs_ds26DxQH.hscall();
        }
        var hs_xzh26DxQN = hs_wild26Dyoo.data[0];
        var hs_wild126Dyon = hs_ds126DxQK;
        if (hs_ds126DxQK.notEvaluated) {
            hs_wild126Dyon = hs_ds126DxQK.hscall();
        }
        var hs_yzh26DxQO = hs_wild126Dyon.data[0];
        return $hs.modules.GHCziIntWord64.hs_gtInt64zh.hscall(hs_xzh26DxQN, hs_yzh26DxQO);
    };
    hs_zdczgze25v9kA.evaluate = function (hs_ds26DxQT, hs_ds126DxQW) {
        var hs_wild26Dyoq = hs_ds26DxQT;
        if (hs_ds26DxQT.notEvaluated) {
            hs_wild26Dyoq = hs_ds26DxQT.hscall();
        }
        var hs_xzh26DxQZ = hs_wild26Dyoq.data[0];
        var hs_wild126Dyop = hs_ds126DxQW;
        if (hs_ds126DxQW.notEvaluated) {
            hs_wild126Dyop = hs_ds126DxQW.hscall();
        }
        var hs_yzh26DxR0 = hs_wild126Dyop.data[0];
        return $hs.modules.GHCziIntWord64.hs_geInt64zh.hscall(hs_xzh26DxQZ, hs_yzh26DxR0);
    };
    hs_zdczl25v9kM.evaluate = function (hs_ds26DxR5, hs_ds126DxR8) {
        var hs_wild26Dyos = hs_ds26DxR5;
        if (hs_ds26DxR5.notEvaluated) {
            hs_wild26Dyos = hs_ds26DxR5.hscall();
        }
        var hs_xzh26DxRb = hs_wild26Dyos.data[0];
        var hs_wild126Dyor = hs_ds126DxR8;
        if (hs_ds126DxR8.notEvaluated) {
            hs_wild126Dyor = hs_ds126DxR8.hscall();
        }
        var hs_yzh26DxRc = hs_wild126Dyor.data[0];
        return $hs.modules.GHCziIntWord64.hs_ltInt64zh.hscall(hs_xzh26DxRb, hs_yzh26DxRc);
    };
    this.hs_zdfOrdInt64.data = [$hs.modules.GHCziInt.hs_zdfEqInt64, hs_zdccompare25v9l2, hs_zdczl25v9kM, hs_zdczgze25v9kA, hs_zdczg25v9ko, hs_zdczlze25v9kc, hs_zdcmax25v9l0, hs_zdcmin25v9kY];
    hs_zdcmin25v9kY.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcmax25v9l0.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdccompare25v9l2.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmcompare.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64);
    };
    hs_zdcfromInteger325v9l4.evaluate = function (hs_i26DxRm) {
        var hs_wild26DxRo = $hs.modules.GHCziInteger.hs_integerToInt64.hscall(hs_i26DxRm);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild26DxRo];
        return $res;
    };
    hs_zdcnegate325v9la.evaluate = function (hs_ds26DxRs) {
        var hs_wild26Dyot = hs_ds26DxRs;
        if (hs_ds26DxRs.notEvaluated) {
            hs_wild26Dyot = hs_ds26DxRs.hscall();
        }
        var hs_xzh26DxRv = hs_wild26Dyot.data[0];
        var hs_wild126DxRx = $hs.modules.GHCziIntWord64.hs_negateInt64zh.hscall(hs_xzh26DxRv);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DxRx];
        return $res;
    };
    hs_zdczm325v9lj.evaluate = function (hs_ds26DxRC, hs_ds126DxRF) {
        var hs_wild26Dyov = hs_ds26DxRC;
        if (hs_ds26DxRC.notEvaluated) {
            hs_wild26Dyov = hs_ds26DxRC.hscall();
        }
        var hs_xzh26DxRI = hs_wild26Dyov.data[0];
        var hs_wild126Dyou = hs_ds126DxRF;
        if (hs_ds126DxRF.notEvaluated) {
            hs_wild126Dyou = hs_ds126DxRF.hscall();
        }
        var hs_yzh26DxRJ = hs_wild126Dyou.data[0];
        var hs_wild226DxRL = $hs.modules.GHCziIntWord64.hs_minusInt64zh.hscall(hs_xzh26DxRI, hs_yzh26DxRJ);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DxRL];
        return $res;
    };
    hs_zdczt325v9lx.evaluate = function (hs_ds26DxRQ, hs_ds126DxRT) {
        var hs_wild26Dyox = hs_ds26DxRQ;
        if (hs_ds26DxRQ.notEvaluated) {
            hs_wild26Dyox = hs_ds26DxRQ.hscall();
        }
        var hs_xzh26DxRW = hs_wild26Dyox.data[0];
        var hs_wild126Dyow = hs_ds126DxRT;
        if (hs_ds126DxRT.notEvaluated) {
            hs_wild126Dyow = hs_ds126DxRT.hscall();
        }
        var hs_yzh26DxRX = hs_wild126Dyow.data[0];
        var hs_wild226DxRZ = $hs.modules.GHCziIntWord64.hs_timesInt64zh.hscall(hs_xzh26DxRW, hs_yzh26DxRX);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DxRZ];
        return $res;
    };
    hs_zdczp325v9lL.evaluate = function (hs_ds26DxS4, hs_ds126DxS7) {
        var hs_wild26Dyoz = hs_ds26DxS4;
        if (hs_ds26DxS4.notEvaluated) {
            hs_wild26Dyoz = hs_ds26DxS4.hscall();
        }
        var hs_xzh26DxSa = hs_wild26Dyoz.data[0];
        var hs_wild126Dyoy = hs_ds126DxS7;
        if (hs_ds126DxS7.notEvaluated) {
            hs_wild126Dyoy = hs_ds126DxS7.hscall();
        }
        var hs_yzh26DxSb = hs_wild126Dyoy.data[0];
        var hs_wild226DxSd = $hs.modules.GHCziIntWord64.hs_plusInt64zh.hscall(hs_xzh26DxSa, hs_yzh26DxSb);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild226DxSd];
        return $res;
    };
    hs_zdctoEnum125v9lZ.evaluate = function (hs_ds26DxSh) {
        var hs_wild26DyoA = hs_ds26DxSh;
        if (hs_ds26DxSh.notEvaluated) {
            hs_wild26DyoA = hs_ds26DxSh.hscall();
        }
        var hs_izh26DxSk = hs_wild26DyoA.data[0];
        var hs_wild126DxSm = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(hs_izh26DxSk);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild126DxSm];
        return $res;
    };
    hs_zdctoInteger325v9m8.evaluate = function (hs_ds26DxSq) {
        var hs_wild26DyoB = hs_ds26DxSq;
        if (hs_ds26DxSq.notEvaluated) {
            hs_wild26DyoB = hs_ds26DxSq.hscall();
        }
        var hs_x26DxSt = hs_wild26DyoB.data[0];
        return $hs.modules.GHCziInteger.hs_int64ToInteger.hscall(hs_x26DxSt);
    };
    hs_zdcisSigned325v9mf.evaluate = function (hs_ds26DxSx) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze325v9mj.evaluate = function (hs_ds26DxSB) {
        var $res = new $hs.Data(1);
        $res.data = [64];
        return $res;
    };
    hs_zdcrotate325v9mn.evaluate = function (hs_ds26DxSG, hs_ds126DxSJ) {
        var hs_wild26DyoI = hs_ds26DxSG;
        if (hs_ds26DxSG.notEvaluated) {
            hs_wild26DyoI = hs_ds26DxSG.hscall();
        }
        var hs_xzh26DxSS = hs_wild26DyoI.data[0];
        var hs_wild126DyoH = hs_ds126DxSJ;
        if (hs_ds126DxSJ.notEvaluated) {
            hs_wild126DyoH = hs_ds126DxSJ.hscall();
        }
        var hs_izh26DxSN = hs_wild126DyoH.data[0];
        var hs_sat26DyoG = 63;
        var hs_sat26DyoF = hs_izh26DxSN;
        var hs_sat26DyoE = hs_sat26DyoF & hs_sat26DyoG;
        var hs_izqzh26DxSR = hs_sat26DyoE;
        var hs_xzqzh26DxSV = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_xzh26DxSS);
        var hs_wild226DyoD = hs_izqzh26DxSR == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DyoD.tag) {
        case 1:
            var hs_sat26DyoC = ($hs.Int.addCarry(64, ~hs_izqzh26DxSR, 1))[0];
            var hs_wild326DxT0 = $hs.modules.GHCziIntWord64.hs_uncheckedShiftRL64zh.hscall(hs_xzqzh26DxSV, hs_sat26DyoC);
            var hs_wild426DxSZ = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_xzqzh26DxSV, hs_izqzh26DxSR);
            var hs_wild526DxT2 = $hs.modules.GHCziIntWord64.hs_or64zh.hscall(hs_wild426DxSZ, hs_wild326DxT0);
            var hs_wild626DxT4 = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild526DxT2);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild626DxT4];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_xzh26DxSS];
            return $res;
        }
    };
    hs_zdcshift325v9mQ.evaluate = function (hs_eta26DxT9, hs_eta126DxTc) {
        var hs_wild26DyoM = hs_eta26DxT9;
        if (hs_eta26DxT9.notEvaluated) {
            hs_wild26DyoM = hs_eta26DxT9.hscall();
        }
        var hs_xzh26DxTh = hs_wild26DyoM.data[0];
        var hs_wild126DyoL = hs_eta126DxTc;
        if (hs_eta126DxTc.notEvaluated) {
            hs_wild126DyoL = hs_eta126DxTc.hscall();
        }
        var hs_izh26DxTf = hs_wild126DyoL.data[0];
        var hs_wild226DyoK = hs_izh26DxTf >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DyoK.tag) {
        case 1:
            var hs_sat26DyoJ = -hs_izh26DxTf;
            var hs_wild326DxTk = hs_iShiftRA64zh25skZo.hscall(hs_xzh26DxTh, hs_sat26DyoJ);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DxTk];
            return $res;
        case 2:
            var hs_wild326DyoN = hs_izh26DxTf >= 64 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DyoN.tag) {
            case 1:
                var hs_wild426DxTn = $hs.modules.GHCziIntWord64.hs_uncheckedIShiftL64zh.hscall(hs_xzh26DxTh, hs_izh26DxTf);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DxTn];
                return $res;
            case 2:
                var hs_wild426DxTp = $hs.modules.GHCziIntWord64.hs_intToInt64zh.hscall(0);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DxTp];
                return $res;
            }
        }
    };
    hs_zdccomplement325v9nb.evaluate = function (hs_ds26DxTt) {
        var hs_wild26DyoO = hs_ds26DxTt;
        if (hs_ds26DxTt.notEvaluated) {
            hs_wild26DyoO = hs_ds26DxTt.hscall();
        }
        var hs_xzh26DxTw = hs_wild26DyoO.data[0];
        var hs_wild126DxTy = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_xzh26DxTw);
        var hs_wild226DxTA = $hs.modules.GHCziIntWord64.hs_not64zh.hscall(hs_wild126DxTy);
        var hs_wild326DxTC = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild226DxTA);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild326DxTC];
        return $res;
    };
    hs_zdcxor325v9no.evaluate = function (hs_ds26DxTH, hs_ds126DxTK) {
        var hs_wild26DyoQ = hs_ds26DxTH;
        if (hs_ds26DxTH.notEvaluated) {
            hs_wild26DyoQ = hs_ds26DxTH.hscall();
        }
        var hs_xzh26DxTP = hs_wild26DyoQ.data[0];
        var hs_wild126DyoP = hs_ds126DxTK;
        if (hs_ds126DxTK.notEvaluated) {
            hs_wild126DyoP = hs_ds126DxTK.hscall();
        }
        var hs_yzh26DxTN = hs_wild126DyoP.data[0];
        var hs_wild226DxTS = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_yzh26DxTN);
        var hs_wild326DxTR = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_xzh26DxTP);
        var hs_wild426DxTU = $hs.modules.GHCziIntWord64.hs_xor64zh.hscall(hs_wild326DxTR, hs_wild226DxTS);
        var hs_wild526DxTW = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild426DxTU);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild526DxTW];
        return $res;
    };
    hs_zdczizbzi325v9nI.evaluate = function (hs_ds26DxU1, hs_ds126DxU4) {
        var hs_wild26DyoS = hs_ds26DxU1;
        if (hs_ds26DxU1.notEvaluated) {
            hs_wild26DyoS = hs_ds26DxU1.hscall();
        }
        var hs_xzh26DxU9 = hs_wild26DyoS.data[0];
        var hs_wild126DyoR = hs_ds126DxU4;
        if (hs_ds126DxU4.notEvaluated) {
            hs_wild126DyoR = hs_ds126DxU4.hscall();
        }
        var hs_yzh26DxU7 = hs_wild126DyoR.data[0];
        var hs_wild226DxUc = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_yzh26DxU7);
        var hs_wild326DxUb = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_xzh26DxU9);
        var hs_wild426DxUe = $hs.modules.GHCziIntWord64.hs_or64zh.hscall(hs_wild326DxUb, hs_wild226DxUc);
        var hs_wild526DxUg = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild426DxUe);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild526DxUg];
        return $res;
    };
    hs_zdczizazi325v9o2.evaluate = function (hs_ds26DxUl, hs_ds126DxUo) {
        var hs_wild26DyoU = hs_ds26DxUl;
        if (hs_ds26DxUl.notEvaluated) {
            hs_wild26DyoU = hs_ds26DxUl.hscall();
        }
        var hs_xzh26DxUt = hs_wild26DyoU.data[0];
        var hs_wild126DyoT = hs_ds126DxUo;
        if (hs_ds126DxUo.notEvaluated) {
            hs_wild126DyoT = hs_ds126DxUo.hscall();
        }
        var hs_yzh26DxUr = hs_wild126DyoT.data[0];
        var hs_wild226DxUw = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_yzh26DxUr);
        var hs_wild326DxUv = $hs.modules.GHCziIntWord64.hs_int64ToWord64zh.hscall(hs_xzh26DxUt);
        var hs_wild426DxUy = $hs.modules.GHCziIntWord64.hs_and64zh.hscall(hs_wild326DxUv, hs_wild226DxUw);
        var hs_wild526DxUA = $hs.modules.GHCziIntWord64.hs_word64ToInt64zh.hscall(hs_wild426DxUy);
        var $res = new $hs.Data(1);
        $res.data = [hs_wild526DxUA];
        return $res;
    };
    hs_sat26DyoV.evaluateOnce = function () {
        var hs_sat26Dyp3 = new $hs.Thunk();
        hs_sat26Dyp3.evaluateOnce = function () {
            var hs_sat26DyoX = new $hs.Thunk();
            hs_sat26DyoX.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
            };
            var hs_sat26Dyp2 = new $hs.Thunk();
            hs_sat26Dyp2.evaluateOnce = function () {
                var hs_sat26Dyp0 = new $hs.Thunk();
                hs_sat26Dyp0.evaluateOnce = function () {
                    var hs_sat26DyoY = new $hs.Thunk();
                    hs_sat26DyoY.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
                    };
                    var hs_sat26DyoZ = new $hs.Thunk();
                    hs_sat26DyoZ.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                    };
                    return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26DyoZ, hs_sat26DyoY);
                };
                var hs_sat26Dyp1 = new $hs.Thunk();
                hs_sat26Dyp1.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
                };
                return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26Dyp1, hs_sat26Dyp0);
            };
            return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26Dyp2, hs_sat26DyoX);
        };
        var hs_sat26Dyp4 = new $hs.Thunk();
        hs_sat26Dyp4.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26Dyp4, hs_sat26Dyp3);
    };
    hs_sat26DyoW.evaluateOnce = function () {
        var hs_sat26Dypd = new $hs.Thunk();
        hs_sat26Dypd.evaluateOnce = function () {
            var hs_sat26Dypb = new $hs.Thunk();
            hs_sat26Dypb.evaluateOnce = function () {
                var hs_sat26Dyp5 = new $hs.Thunk();
                hs_sat26Dyp5.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
                };
                var hs_sat26Dypa = new $hs.Thunk();
                hs_sat26Dypa.evaluateOnce = function () {
                    var hs_sat26Dyp8 = new $hs.Thunk();
                    hs_sat26Dyp8.evaluateOnce = function () {
                        var hs_sat26Dyp6 = new $hs.Thunk();
                        hs_sat26Dyp6.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
                        };
                        var hs_sat26Dyp7 = new $hs.Thunk();
                        hs_sat26Dyp7.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                        };
                        return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26Dyp7, hs_sat26Dyp6);
                    };
                    var hs_sat26Dyp9 = new $hs.Thunk();
                    hs_sat26Dyp9.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
                    };
                    return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26Dyp9, hs_sat26Dyp8);
                };
                return $hs.modules.GHCziInteger.hs_timesInteger.hscall(hs_sat26Dypa, hs_sat26Dyp5);
            };
            var hs_sat26Dypc = new $hs.Thunk();
            hs_sat26Dypc.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
            };
            return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26Dypc, hs_sat26Dypb);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dypd);
    };
    this.hs_zdfBoundedInt64.data = [hs_zdcminBound25v9p0, hs_zdcmaxBound25v9oY];
    this.hs_zdfShowInt64.data = [hs_zdcshowsPrec25v9oO, hs_zdcshow25v9oM, hs_zdcshowList25v9oK];
    this.hs_zdfNumInt64.data = [$hs.modules.GHCziInt.hs_zdfEqInt64, $hs.modules.GHCziInt.hs_zdfShowInt64, hs_zdczp325v9lL, hs_zdczt325v9lx, hs_zdczm325v9lj, hs_zdcnegate325v9la, hs_zdcabs25v9oS, hs_zdcsignum25v9oQ, hs_zdcfromInteger325v9l4];
    this.hs_zdfEnumInt64.data = [hs_zdcsucc25v9oy, hs_zdcpred25v9ow, hs_zdctoEnum125v9lZ, hs_zdcfromEnum325v9ou, hs_zdcenumFrom25v9os, hs_zdcenumFromThen25v9oq, hs_zdcenumFromTo25v9oo, hs_zdcenumFromThenTo25v9om];
    this.hs_zdfRealInt64.data = [$hs.modules.GHCziInt.hs_zdfNumInt64, $hs.modules.GHCziInt.hs_zdfOrdInt64, hs_zdctoRational25v9oW];
    this.hs_zdfIntegralInt64.data = [$hs.modules.GHCziInt.hs_zdfRealInt64, $hs.modules.GHCziInt.hs_zdfEnumInt64, hs_zdcquot25v9oU, hs_zdcrem25v9oI, hs_zdcdiv25v9oG, hs_zdcmod25v9oE, hs_zdcquotRem25v9oC, hs_zdcdivMod25v9oA, hs_zdctoInteger325v9m8];
    hs_zdcenumFromThenTo25v9om.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcenumFromTo25v9oo.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromTo.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64);
    };
    hs_zdcenumFromThen25v9oq.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFromThen.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcenumFrom25v9os.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_integralEnumFrom.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziInt.hs_zdfBoundedInt64);
    };
    hs_zdcfromEnum325v9ou.evaluate = function (hs_x26DxVi) {
        var hs_wild26DxVl = hs_x26DxVi;
        if (hs_x26DxVi.notEvaluated) {
            hs_wild26DxVl = hs_x26DxVi.hscall();
        }
        var hs_xzh26DxVu = hs_wild26DxVl.data[0];
        var hs_sat26Dypg = new $hs.Thunk();
        hs_sat26Dypg.evaluateOnce = function () {
            var hs_sat26Dypf = new $hs.Thunk();
            hs_sat26Dypf.evaluateOnce = function () {
                var hs_sat26Dype = new $hs.Thunk();
                hs_sat26Dype.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dype);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64, hs_wild26DxVl, hs_sat26Dypf);
        };
        var hs_sat26Dypk = new $hs.Thunk();
        hs_sat26Dypk.evaluateOnce = function () {
            var hs_sat26Dypi = new $hs.Thunk();
            hs_sat26Dypi.evaluateOnce = function () {
                var hs_sat26Dyph = new $hs.Thunk();
                hs_sat26Dyph.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziEnum.hs_zdfBoundedInt);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyph);
            };
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64, hs_wild26DxVl, hs_sat26Dypi);
        };
        var hs_wild126Dypj = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dypk, hs_sat26Dypg);
        switch (hs_wild126Dypj.tag) {
        case 1:
            var hs_sat26Dypl = new $hs.Thunk();
            hs_sat26Dypl.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int64\x00");
            };
            return $hs.modules.GHCziWord.hs_fromEnumError.hscall($hs.modules.GHCziInt.hs_zdfShowInt64, hs_sat26Dypl, hs_wild26DxVl);
        case 2:
            var hs_wild226DxVw = $hs.modules.GHCziIntWord64.hs_int64ToIntzh.hscall(hs_xzh26DxVu);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild226DxVw];
            return $res;
        }
    };
    hs_zdcpred25v9ow.evaluate = function (hs_x26DxVy) {
        var hs_sat26Dypn = new $hs.Thunk();
        hs_sat26Dypn.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
        };
        var hs_wild26Dypm = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_x26DxVy, hs_sat26Dypn);
        switch (hs_wild26Dypm.tag) {
        case 1:
            var hs_sat26Dypo = new $hs.Thunk();
            hs_sat26Dypo.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int64\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26Dypo);
        case 2:
            var hs_sat26Dypq = new $hs.Thunk();
            hs_sat26Dypq.evaluateOnce = function () {
                var hs_sat26Dypp = new $hs.Thunk();
                hs_sat26Dypp.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dypp);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_x26DxVy, hs_sat26Dypq);
        }
    };
    hs_zdcsucc25v9oy.evaluate = function (hs_x26DxVF) {
        var hs_sat26Dyps = new $hs.Thunk();
        hs_sat26Dyps.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
        };
        var hs_wild26Dypr = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_x26DxVF, hs_sat26Dyps);
        switch (hs_wild26Dypr.tag) {
        case 1:
            var hs_sat26Dypt = new $hs.Thunk();
            hs_sat26Dypt.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int64\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26Dypt);
        case 2:
            var hs_sat26Dypv = new $hs.Thunk();
            hs_sat26Dypv.evaluateOnce = function () {
                var hs_sat26Dypu = new $hs.Thunk();
                hs_sat26Dypu.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dypu);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_x26DxVF, hs_sat26Dypv);
        }
    };
    hs_zdcdivMod25v9oA.evaluate = function (hs_x26DxVN, hs_y26DxVQ) {
        var hs_wild26DxVX = hs_x26DxVN;
        if (hs_x26DxVN.notEvaluated) {
            hs_wild26DxVX = hs_x26DxVN.hscall();
        }
        var hs_xzh26DxW5 = hs_wild26DxVX.data[0];
        var hs_wild126DxVT = hs_y26DxVQ;
        if (hs_y26DxVQ.notEvaluated) {
            hs_wild126DxVT = hs_y26DxVQ.hscall();
        }
        var hs_yzh26DxW6 = hs_wild126DxVT.data[0];
        var hs_sat26Dypy = new $hs.Thunk();
        hs_sat26Dypy.evaluateOnce = function () {
            var hs_sat26Dypw = new $hs.Thunk();
            hs_sat26Dypw.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dypw);
        };
        var hs_wild226Dypx = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxVT, hs_sat26Dypy);
        switch (hs_wild226Dypx.tag) {
        case 1:
            var hs_sat26DypC = new $hs.Thunk();
            hs_sat26DypC.evaluateOnce = function () {
                var hs_sat26DypB = new $hs.Thunk();
                hs_sat26DypB.evaluateOnce = function () {
                    var hs_sat26DypA = new $hs.Thunk();
                    hs_sat26DypA.evaluateOnce = function () {
                        var hs_sat26Dypz = new $hs.Thunk();
                        hs_sat26Dypz.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dypz);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DypA);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxVT, hs_sat26DypB);
            };
            var hs_sat26DypF = new $hs.Thunk();
            hs_sat26DypF.evaluateOnce = function () {
                var hs_sat26DypD = new $hs.Thunk();
                hs_sat26DypD.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild26DxVX, hs_sat26DypD);
            };
            var hs_wild326DypE = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DypF, hs_sat26DypC);
            switch (hs_wild326DypE.tag) {
            case 1:
                var hs_sat26DypG = new $hs.Thunk();
                hs_sat26DypG.evaluateOnce = function () {
                    var hs_wild426DxWb = hs_modInt64zh25skZk.hscall(hs_xzh26DxW5, hs_yzh26DxW6);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild426DxWb];
                    return $res;
                };
                var hs_sat26DypH = new $hs.Thunk();
                hs_sat26DypH.evaluateOnce = function () {
                    var hs_wild426DxW8 = hs_divInt64zh25skZi.hscall(hs_xzh26DxW5, hs_yzh26DxW6);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild426DxW8];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DypH, hs_sat26DypG];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquotRem25v9oC.evaluate = function (hs_x26DxWf, hs_y26DxWi) {
        var hs_wild26DxWp = hs_x26DxWf;
        if (hs_x26DxWf.notEvaluated) {
            hs_wild26DxWp = hs_x26DxWf.hscall();
        }
        var hs_xzh26DxWx = hs_wild26DxWp.data[0];
        var hs_wild126DxWl = hs_y26DxWi;
        if (hs_y26DxWi.notEvaluated) {
            hs_wild126DxWl = hs_y26DxWi.hscall();
        }
        var hs_yzh26DxWy = hs_wild126DxWl.data[0];
        var hs_sat26DypK = new $hs.Thunk();
        hs_sat26DypK.evaluateOnce = function () {
            var hs_sat26DypI = new $hs.Thunk();
            hs_sat26DypI.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DypI);
        };
        var hs_wild226DypJ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxWl, hs_sat26DypK);
        switch (hs_wild226DypJ.tag) {
        case 1:
            var hs_sat26DypO = new $hs.Thunk();
            hs_sat26DypO.evaluateOnce = function () {
                var hs_sat26DypN = new $hs.Thunk();
                hs_sat26DypN.evaluateOnce = function () {
                    var hs_sat26DypM = new $hs.Thunk();
                    hs_sat26DypM.evaluateOnce = function () {
                        var hs_sat26DypL = new $hs.Thunk();
                        hs_sat26DypL.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DypL);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DypM);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxWl, hs_sat26DypN);
            };
            var hs_sat26DypR = new $hs.Thunk();
            hs_sat26DypR.evaluateOnce = function () {
                var hs_sat26DypP = new $hs.Thunk();
                hs_sat26DypP.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild26DxWp, hs_sat26DypP);
            };
            var hs_wild326DypQ = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DypR, hs_sat26DypO);
            switch (hs_wild326DypQ.tag) {
            case 1:
                var hs_sat26DypS = new $hs.Thunk();
                hs_sat26DypS.evaluateOnce = function () {
                    var hs_wild426DxWD = $hs.modules.GHCziIntWord64.hs_remInt64zh.hscall(hs_xzh26DxWx, hs_yzh26DxWy);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild426DxWD];
                    return $res;
                };
                var hs_sat26DypT = new $hs.Thunk();
                hs_sat26DypT.evaluateOnce = function () {
                    var hs_wild426DxWA = $hs.modules.GHCziIntWord64.hs_quotInt64zh.hscall(hs_xzh26DxWx, hs_yzh26DxWy);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild426DxWA];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DypT, hs_sat26DypS];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcmod25v9oE.evaluate = function (hs_x26DxWH, hs_y26DxWK) {
        var hs_wild26DxWR = hs_x26DxWH;
        if (hs_x26DxWH.notEvaluated) {
            hs_wild26DxWR = hs_x26DxWH.hscall();
        }
        var hs_xzh26DxWZ = hs_wild26DxWR.data[0];
        var hs_wild126DxWN = hs_y26DxWK;
        if (hs_y26DxWK.notEvaluated) {
            hs_wild126DxWN = hs_y26DxWK.hscall();
        }
        var hs_yzh26DxX0 = hs_wild126DxWN.data[0];
        var hs_sat26DypW = new $hs.Thunk();
        hs_sat26DypW.evaluateOnce = function () {
            var hs_sat26DypU = new $hs.Thunk();
            hs_sat26DypU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DypU);
        };
        var hs_wild226DypV = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxWN, hs_sat26DypW);
        switch (hs_wild226DypV.tag) {
        case 1:
            var hs_sat26Dyq0 = new $hs.Thunk();
            hs_sat26Dyq0.evaluateOnce = function () {
                var hs_sat26DypZ = new $hs.Thunk();
                hs_sat26DypZ.evaluateOnce = function () {
                    var hs_sat26DypY = new $hs.Thunk();
                    hs_sat26DypY.evaluateOnce = function () {
                        var hs_sat26DypX = new $hs.Thunk();
                        hs_sat26DypX.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DypX);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DypY);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxWN, hs_sat26DypZ);
            };
            var hs_sat26Dyq3 = new $hs.Thunk();
            hs_sat26Dyq3.evaluateOnce = function () {
                var hs_sat26Dyq1 = new $hs.Thunk();
                hs_sat26Dyq1.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild26DxWR, hs_sat26Dyq1);
            };
            var hs_wild326Dyq2 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyq3, hs_sat26Dyq0);
            switch (hs_wild326Dyq2.tag) {
            case 1:
                var hs_wild426DxX2 = hs_modInt64zh25skZk.hscall(hs_xzh26DxWZ, hs_yzh26DxX0);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DxX2];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcdiv25v9oG.evaluate = function (hs_x26DxX5, hs_y26DxX8) {
        var hs_wild26DxXf = hs_x26DxX5;
        if (hs_x26DxX5.notEvaluated) {
            hs_wild26DxXf = hs_x26DxX5.hscall();
        }
        var hs_xzh26DxXn = hs_wild26DxXf.data[0];
        var hs_wild126DxXb = hs_y26DxX8;
        if (hs_y26DxX8.notEvaluated) {
            hs_wild126DxXb = hs_y26DxX8.hscall();
        }
        var hs_yzh26DxXo = hs_wild126DxXb.data[0];
        var hs_sat26Dyq6 = new $hs.Thunk();
        hs_sat26Dyq6.evaluateOnce = function () {
            var hs_sat26Dyq4 = new $hs.Thunk();
            hs_sat26Dyq4.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyq4);
        };
        var hs_wild226Dyq5 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxXb, hs_sat26Dyq6);
        switch (hs_wild226Dyq5.tag) {
        case 1:
            var hs_sat26Dyqa = new $hs.Thunk();
            hs_sat26Dyqa.evaluateOnce = function () {
                var hs_sat26Dyq9 = new $hs.Thunk();
                hs_sat26Dyq9.evaluateOnce = function () {
                    var hs_sat26Dyq8 = new $hs.Thunk();
                    hs_sat26Dyq8.evaluateOnce = function () {
                        var hs_sat26Dyq7 = new $hs.Thunk();
                        hs_sat26Dyq7.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyq7);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyq8);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxXb, hs_sat26Dyq9);
            };
            var hs_sat26Dyqd = new $hs.Thunk();
            hs_sat26Dyqd.evaluateOnce = function () {
                var hs_sat26Dyqb = new $hs.Thunk();
                hs_sat26Dyqb.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild26DxXf, hs_sat26Dyqb);
            };
            var hs_wild326Dyqc = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyqd, hs_sat26Dyqa);
            switch (hs_wild326Dyqc.tag) {
            case 1:
                var hs_wild426DxXq = hs_divInt64zh25skZi.hscall(hs_xzh26DxXn, hs_yzh26DxXo);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DxXq];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcrem25v9oI.evaluate = function (hs_x26DxXt, hs_y26DxXw) {
        var hs_wild26DxXD = hs_x26DxXt;
        if (hs_x26DxXt.notEvaluated) {
            hs_wild26DxXD = hs_x26DxXt.hscall();
        }
        var hs_xzh26DxXL = hs_wild26DxXD.data[0];
        var hs_wild126DxXz = hs_y26DxXw;
        if (hs_y26DxXw.notEvaluated) {
            hs_wild126DxXz = hs_y26DxXw.hscall();
        }
        var hs_yzh26DxXM = hs_wild126DxXz.data[0];
        var hs_sat26Dyqg = new $hs.Thunk();
        hs_sat26Dyqg.evaluateOnce = function () {
            var hs_sat26Dyqe = new $hs.Thunk();
            hs_sat26Dyqe.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqe);
        };
        var hs_wild226Dyqf = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxXz, hs_sat26Dyqg);
        switch (hs_wild226Dyqf.tag) {
        case 1:
            var hs_sat26Dyqk = new $hs.Thunk();
            hs_sat26Dyqk.evaluateOnce = function () {
                var hs_sat26Dyqj = new $hs.Thunk();
                hs_sat26Dyqj.evaluateOnce = function () {
                    var hs_sat26Dyqi = new $hs.Thunk();
                    hs_sat26Dyqi.evaluateOnce = function () {
                        var hs_sat26Dyqh = new $hs.Thunk();
                        hs_sat26Dyqh.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqh);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqi);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxXz, hs_sat26Dyqj);
            };
            var hs_sat26Dyqn = new $hs.Thunk();
            hs_sat26Dyqn.evaluateOnce = function () {
                var hs_sat26Dyql = new $hs.Thunk();
                hs_sat26Dyql.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild26DxXD, hs_sat26Dyql);
            };
            var hs_wild326Dyqm = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyqn, hs_sat26Dyqk);
            switch (hs_wild326Dyqm.tag) {
            case 1:
                var hs_wild426DxXO = $hs.modules.GHCziIntWord64.hs_remInt64zh.hscall(hs_xzh26DxXL, hs_yzh26DxXM);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DxXO];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcshowList25v9oK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshow25v9oM.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziInt.hs_zdfShowInt64);
    };
    hs_zdcshowsPrec25v9oO.evaluate = function (hs_p26DxXR, hs_x26DxXS) {
        var hs_sat26Dyqo = new $hs.Thunk();
        hs_sat26Dyqo.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, hs_x26DxXS);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziNum.hs_zdfShowInteger, hs_p26DxXR, hs_sat26Dyqo);
    };
    hs_zdcsignum25v9oQ.evaluate = function (hs_x26DxXV) {
        var hs_sat26Dyqr = new $hs.Thunk();
        hs_sat26Dyqr.evaluateOnce = function () {
            var hs_sat26Dyqp = new $hs.Thunk();
            hs_sat26Dyqp.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqp);
        };
        var hs_wild26Dyqq = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64, hs_x26DxXV, hs_sat26Dyqr);
        switch (hs_wild26Dyqq.tag) {
        case 1:
            var hs_sat26Dyqu = new $hs.Thunk();
            hs_sat26Dyqu.evaluateOnce = function () {
                var hs_sat26Dyqs = new $hs.Thunk();
                hs_sat26Dyqs.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqs);
            };
            var hs_wild126Dyqt = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_x26DxXV, hs_sat26Dyqu);
            switch (hs_wild126Dyqt.tag) {
            case 1:
                var hs_sat26Dyqw = new $hs.Thunk();
                hs_sat26Dyqw.evaluateOnce = function () {
                    var hs_sat26Dyqv = new $hs.Thunk();
                    hs_sat26Dyqv.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqv);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqw);
            case 2:
                var hs_sat26Dyqx = new $hs.Thunk();
                hs_sat26Dyqx.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqx);
            }
        case 2:
            var hs_sat26Dyqy = new $hs.Thunk();
            hs_sat26Dyqy.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqy);
        }
    };
    hs_zdcabs25v9oS.evaluate = function (hs_x26DxY7) {
        var hs_sat26DyqB = new $hs.Thunk();
        hs_sat26DyqB.evaluateOnce = function () {
            var hs_sat26Dyqz = new $hs.Thunk();
            hs_sat26Dyqz.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26Dyqz);
        };
        var hs_wild26DyqA = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64, hs_x26DxY7, hs_sat26DyqB);
        switch (hs_wild26DyqA.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_x26DxY7);
        case 2:
            if (hs_x26DxY7.notEvaluated) {
                return hs_x26DxY7.hscall();
            } else {
                return hs_x26DxY7;
            }
        }
    };
    hs_zdcquot25v9oU.evaluate = function (hs_x26DxYd, hs_y26DxYg) {
        var hs_wild26DxYn = hs_x26DxYd;
        if (hs_x26DxYd.notEvaluated) {
            hs_wild26DxYn = hs_x26DxYd.hscall();
        }
        var hs_xzh26DxYv = hs_wild26DxYn.data[0];
        var hs_wild126DxYj = hs_y26DxYg;
        if (hs_y26DxYg.notEvaluated) {
            hs_wild126DxYj = hs_y26DxYg.hscall();
        }
        var hs_yzh26DxYw = hs_wild126DxYj.data[0];
        var hs_sat26DyqE = new $hs.Thunk();
        hs_sat26DyqE.evaluateOnce = function () {
            var hs_sat26DyqC = new $hs.Thunk();
            hs_sat26DyqC.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DyqC);
        };
        var hs_wild226DyqD = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxYj, hs_sat26DyqE);
        switch (hs_wild226DyqD.tag) {
        case 1:
            var hs_sat26DyqI = new $hs.Thunk();
            hs_sat26DyqI.evaluateOnce = function () {
                var hs_sat26DyqH = new $hs.Thunk();
                hs_sat26DyqH.evaluateOnce = function () {
                    var hs_sat26DyqG = new $hs.Thunk();
                    hs_sat26DyqG.evaluateOnce = function () {
                        var hs_sat26DyqF = new $hs.Thunk();
                        hs_sat26DyqF.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DyqF);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DyqG);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild126DxYj, hs_sat26DyqH);
            };
            var hs_sat26DyqL = new $hs.Thunk();
            hs_sat26DyqL.evaluateOnce = function () {
                var hs_sat26DyqJ = new $hs.Thunk();
                hs_sat26DyqJ.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt64);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt64, hs_wild26DxYn, hs_sat26DyqJ);
            };
            var hs_wild326DyqK = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DyqL, hs_sat26DyqI);
            switch (hs_wild326DyqK.tag) {
            case 1:
                var hs_wild426DxYy = $hs.modules.GHCziIntWord64.hs_quotInt64zh.hscall(hs_xzh26DxYv, hs_yzh26DxYw);
                var $res = new $hs.Data(1);
                $res.data = [hs_wild426DxYy];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdctoRational25v9oW.evaluate = function (hs_x26DxYA) {
        var hs_sat26DyqM = new $hs.Thunk();
        hs_sat26DyqM.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DyqN = new $hs.Thunk();
        hs_sat26DyqN.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, hs_x26DxYA);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DyqN, hs_sat26DyqM);
    };
    hs_zdcmaxBound25v9oY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DyoV);
    };
    hs_zdcminBound25v9p0.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_sat26DyoW);
    };
    this.hs_zdfBitsInt64.data = [$hs.modules.GHCziInt.hs_zdfNumInt64, hs_zdczizazi325v9o2, hs_zdczizbzi325v9nI, hs_zdcxor325v9no, hs_zdccomplement325v9nb, hs_zdcshift325v9mQ, hs_zdcrotate325v9mn, hs_zdcbit25v9sX, hs_zdcsetBit25v9sV, hs_zdcclearBit25v9sT, hs_zdccomplementBit25v9sR, hs_zdctestBit25v9sP, hs_zdcbitSizze325v9mj, hs_zdcisSigned325v9mf, hs_zdcshiftL25v9sN, hs_zdcshiftR25v9sL, hs_zdcrotateL25v9sJ, hs_zdcrotateR25v9sH];
    hs_zdcrotateR25v9sH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcrotateL25v9sJ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftR25v9sL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcshiftL25v9sN.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdctestBit25v9sP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdccomplementBit25v9sR.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcclearBit25v9sT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcsetBit25v9sV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcbit25v9sX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt64);
    };
    hs_zdcreadsPrec25v9sZ.evaluate = function (hs_p26DxZz, hs_s26DxZA) {
        var hs_ds26DxZx = new $hs.Func(1);
        hs_ds26DxZx.evaluate = function (hs_ds126DxZk) {
            var hs_ds226DyqO = hs_ds126DxZk;
            if (hs_ds126DxZk.notEvaluated) {
                hs_ds226DyqO = hs_ds126DxZk.hscall();
            }
            switch (hs_ds226DyqO.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DxZo = hs_ds226DyqO.data[0];
                var hs_ds426DxZw = hs_ds226DyqO.data[1];
                var hs_wild26DyqP = hs_ds326DxZo;
                if (hs_ds326DxZo.notEvaluated) {
                    hs_wild26DyqP = hs_ds326DxZo.hscall();
                }
                var hs_x26DxZs = hs_wild26DyqP.data[0];
                var hs_r26DxZu = hs_wild26DyqP.data[1];
                var hs_sat26DyqQ = new $hs.Thunk();
                hs_sat26DyqQ.evaluateOnce = function () {
                    return hs_ds26DxZx.hscall(hs_ds426DxZw);
                };
                var hs_sat26DyqR = new $hs.Thunk();
                hs_sat26DyqR.evaluateOnce = function () {
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt64, hs_x26DxZs);
                };
                var hs_sat26DyqS = new $hs.Data(1);
                hs_sat26DyqS.data = [hs_sat26DyqR, hs_r26DxZu];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DyqS, hs_sat26DyqQ];
                return $res;
            }
        };
        var hs_sat26DyqT = new $hs.Thunk();
        hs_sat26DyqT.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInteger, hs_p26DxZz, hs_s26DxZA);
        };
        return hs_ds26DxZx.hscall(hs_sat26DyqT);
    };
    this.hs_zdfReadInt64.data = [hs_zdcreadsPrec25v9sZ, hs_zdcreadList25v9tr, hs_zdcreadPrec25v9tp, hs_zdcreadListPrec25v9tn];
    hs_zdcreadListPrec25v9tn.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadPrec25v9tp.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcreadList25v9tr.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziInt.hs_zdfReadInt64);
    };
    hs_zdcinRange25v9tt.evaluate = function (hs_ds26DxZM, hs_i26DxZR) {
        var hs_wild26DyqU = hs_ds26DxZM;
        if (hs_ds26DxZM.notEvaluated) {
            hs_wild26DyqU = hs_ds26DxZM.hscall();
        }
        var hs_m26DxZQ = hs_wild26DyqU.data[0];
        var hs_n26DxZT = hs_wild26DyqU.data[1];
        var hs_sat26DyqV = new $hs.Thunk();
        hs_sat26DyqV.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64, hs_i26DxZR, hs_n26DxZT);
        };
        var hs_sat26DyqW = new $hs.Thunk();
        hs_sat26DyqW.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt64, hs_m26DxZQ, hs_i26DxZR);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DyqW, hs_sat26DyqV);
    };
    hs_zdcunsafeIndex25v9tG.evaluate = function (hs_ds26DxZZ, hs_i26Dy03) {
        var hs_wild26DyqX = hs_ds26DxZZ;
        if (hs_ds26DxZZ.notEvaluated) {
            hs_wild26DyqX = hs_ds26DxZZ.hscall();
        }
        var hs_m26Dy05 = hs_wild26DyqX.data[0];
        var hs_sat26DyqZ = new $hs.Thunk();
        hs_sat26DyqZ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dy05);
        };
        var hs_sat26Dyr0 = new $hs.Thunk();
        hs_sat26Dyr0.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziNum.hs_zdfNumInt, hs_i26Dy03);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dyr0, hs_sat26DyqZ);
    };
    hs_zdcrange25v9tS.evaluate = function (hs_ds26Dy0a) {
        var hs_wild26Dyr1 = hs_ds26Dy0a;
        if (hs_ds26Dy0a.notEvaluated) {
            hs_wild26Dyr1 = hs_ds26Dy0a.hscall();
        }
        var hs_m26Dy0e = hs_wild26Dyr1.data[0];
        var hs_n26Dy0f = hs_wild26Dyr1.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt64, hs_m26Dy0e, hs_n26Dy0f);
    };
    this.hs_zdfIxInt64.data = [$hs.modules.GHCziInt.hs_zdfOrdInt64, hs_zdcrange25v9tS, hs_zdcindex25v9u5, hs_zdcunsafeIndex25v9tG, hs_zdcinRange25v9tt, hs_zdcrangeSizze25v9u3, hs_zdcunsafeRangeSizze25v9u1];
    hs_zdcunsafeRangeSizze25v9u1.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt64);
    };
    hs_zdcrangeSizze25v9u3.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt64);
    };
    hs_zdcindex25v9u5.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziInt.hs_zdfIxInt64);
    };
    hs_zdczlze125v9u7.evaluate = function (hs_a26Dy0q, hs_b26Dy0t) {
        var hs_wild26Dyr3 = hs_a26Dy0q;
        if (hs_a26Dy0q.notEvaluated) {
            hs_wild26Dyr3 = hs_a26Dy0q.hscall();
        }
        var hs_a126Dy0w = hs_wild26Dyr3.data[0];
        var hs_wild126Dyr2 = hs_b26Dy0t;
        if (hs_b26Dy0t.notEvaluated) {
            hs_wild126Dyr2 = hs_b26Dy0t.hscall();
        }
        var hs_b126Dy0x = hs_wild126Dyr2.data[0];
        return hs_a126Dy0w <= hs_b126Dy0x ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg125v9uj.evaluate = function (hs_a26Dy0C, hs_b26Dy0F) {
        var hs_wild26Dyr5 = hs_a26Dy0C;
        if (hs_a26Dy0C.notEvaluated) {
            hs_wild26Dyr5 = hs_a26Dy0C.hscall();
        }
        var hs_a126Dy0I = hs_wild26Dyr5.data[0];
        var hs_wild126Dyr4 = hs_b26Dy0F;
        if (hs_b26Dy0F.notEvaluated) {
            hs_wild126Dyr4 = hs_b26Dy0F.hscall();
        }
        var hs_b126Dy0J = hs_wild126Dyr4.data[0];
        return hs_a126Dy0I > hs_b126Dy0J ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze125v9uv.evaluate = function (hs_a26Dy0O, hs_b26Dy0R) {
        var hs_wild26Dyr7 = hs_a26Dy0O;
        if (hs_a26Dy0O.notEvaluated) {
            hs_wild26Dyr7 = hs_a26Dy0O.hscall();
        }
        var hs_a126Dy0U = hs_wild26Dyr7.data[0];
        var hs_wild126Dyr6 = hs_b26Dy0R;
        if (hs_b26Dy0R.notEvaluated) {
            hs_wild126Dyr6 = hs_b26Dy0R.hscall();
        }
        var hs_b126Dy0V = hs_wild126Dyr6.data[0];
        return hs_a126Dy0U >= hs_b126Dy0V ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl125v9uH.evaluate = function (hs_a26Dy10, hs_b26Dy13) {
        var hs_wild26Dyr9 = hs_a26Dy10;
        if (hs_a26Dy10.notEvaluated) {
            hs_wild26Dyr9 = hs_a26Dy10.hscall();
        }
        var hs_a126Dy16 = hs_wild26Dyr9.data[0];
        var hs_wild126Dyr8 = hs_b26Dy13;
        if (hs_b26Dy13.notEvaluated) {
            hs_wild126Dyr8 = hs_b26Dy13.hscall();
        }
        var hs_b126Dy17 = hs_wild126Dyr8.data[0];
        return hs_a126Dy16 < hs_b126Dy17 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare125v9uT.evaluate = function (hs_a26Dy1c, hs_b26Dy1f) {
        var hs_wild26Dyrd = hs_a26Dy1c;
        if (hs_a26Dy1c.notEvaluated) {
            hs_wild26Dyrd = hs_a26Dy1c.hscall();
        }
        var hs_a126Dy1i = hs_wild26Dyrd.data[0];
        var hs_wild126Dyrc = hs_b26Dy1f;
        if (hs_b26Dy1f.notEvaluated) {
            hs_wild126Dyrc = hs_b26Dy1f.hscall();
        }
        var hs_b126Dy1j = hs_wild126Dyrc.data[0];
        var hs_wild226Dyrb = hs_a126Dy1i < hs_b126Dy1j ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dyrb.tag) {
        case 1:
            var hs_wild326Dyra = hs_a126Dy1i == hs_b126Dy1j ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dyra.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze125v9v7.evaluate = function (hs_ds26Dy1q, hs_ds126Dy1t) {
        var hs_wild26Dyrf = hs_ds26Dy1q;
        if (hs_ds26Dy1q.notEvaluated) {
            hs_wild26Dyrf = hs_ds26Dy1q.hscall();
        }
        var hs_a126Dy1w = hs_wild26Dyrf.data[0];
        var hs_wild126Dyre = hs_ds126Dy1t;
        if (hs_ds126Dy1t.notEvaluated) {
            hs_wild126Dyre = hs_ds126Dy1t.hscall();
        }
        var hs_b126Dy1x = hs_wild126Dyre.data[0];
        return hs_a126Dy1w == hs_b126Dy1x ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqInt8.data = [hs_zdczeze125v9v7, hs_zdczsze125v9vj];
    hs_zdczsze125v9vj.evaluate = function (hs_a26Dy1C, hs_b26Dy1D) {
        var hs_sat26Dyrg = new $hs.Thunk();
        hs_sat26Dyrg.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_a26Dy1C, hs_b26Dy1D);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dyrg);
    };
    this.hs_zdfOrdInt8.data = [$hs.modules.GHCziInt.hs_zdfEqInt8, hs_zdccompare125v9uT, hs_zdczl125v9uH, hs_zdczgze125v9uv, hs_zdczg125v9uj, hs_zdczlze125v9u7, hs_zdcmax125v9vs, hs_zdcmin125v9vq];
    hs_zdcmin125v9vq.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcmax125v9vs.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8);
    };
    hs_zdcinRange125v9vu.evaluate = function (hs_ds26Dy1N, hs_i26Dy1S) {
        var hs_wild26Dyrh = hs_ds26Dy1N;
        if (hs_ds26Dy1N.notEvaluated) {
            hs_wild26Dyrh = hs_ds26Dy1N.hscall();
        }
        var hs_m26Dy1R = hs_wild26Dyrh.data[0];
        var hs_n26Dy1U = hs_wild26Dyrh.data[1];
        var hs_sat26Dyri = new $hs.Thunk();
        hs_sat26Dyri.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8, hs_i26Dy1S, hs_n26Dy1U);
        };
        var hs_sat26Dyrj = new $hs.Thunk();
        hs_sat26Dyrj.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8, hs_m26Dy1R, hs_i26Dy1S);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyrj, hs_sat26Dyri);
    };
    hs_sat26Dyrk.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(127);
    };
    hs_sat26Dyrl.evaluateOnce = function () {
        var hs_sat26Dyrm = new $hs.Thunk();
        hs_sat26Dyrm.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dyrm);
    };
    this.hs_zdfShowInt8.data = [hs_zdcshowsPrec125v9wb, hs_zdcshow125v9vJ, hs_zdcshowList125v9vH];
    this.hs_zdfNumInt8.data = [$hs.modules.GHCziInt.hs_zdfEqInt8, $hs.modules.GHCziInt.hs_zdfShowInt8, hs_zdczp25v9bs, hs_zdczt25v9be, hs_zdczm25v9b0, hs_zdcnegate25v9aR, hs_zdcabs125v9wf, hs_zdcsignum125v9wd, hs_zdcfromInteger25v9aK];
    this.hs_zdfRealInt8.data = [$hs.modules.GHCziInt.hs_zdfNumInt8, $hs.modules.GHCziInt.hs_zdfOrdInt8, hs_zdctoRational125v9vL];
    this.hs_zdfEnumInt8.data = [hs_zdcsucc125v9vZ, hs_zdcpred125v9vX, hs_zdctoEnum225v9vV, hs_zdcfromEnum25v9bG, hs_zdcenumFrom125v9vT, hs_zdcenumFromThen125v9vR, hs_zdcenumFromTo125v9vP, hs_zdcenumFromThenTo125v9vN];
    this.hs_zdfIntegralInt8.data = [$hs.modules.GHCziInt.hs_zdfRealInt8, $hs.modules.GHCziInt.hs_zdfEnumInt8, hs_zdcquot125v9w9, hs_zdcrem125v9w7, hs_zdcdiv125v9w5, hs_zdcmod125v9w3, hs_zdcquotRem125v9w1, hs_zdcdivMod125v9wl, hs_zdctoInteger25v9bN];
    this.hs_zdfBoundedInt8.data = [hs_zdcminBound125v9wj, hs_zdcmaxBound125v9wh];
    hs_zdcshowList125v9vH.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdcshow125v9vJ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziInt.hs_zdfShowInt8);
    };
    hs_zdctoRational125v9vL.evaluate = function (hs_x26Dy2D) {
        var hs_sat26Dyrn = new $hs.Thunk();
        hs_sat26Dyrn.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26Dyro = new $hs.Thunk();
        hs_sat26Dyro.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8, hs_x26Dy2D);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dyro, hs_sat26Dyrn);
    };
    hs_zdcenumFromThenTo125v9vN.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromTo125v9vP.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8);
    };
    hs_zdcenumFromThen125v9vR.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8, $hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdcenumFrom125v9vT.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8, $hs.modules.GHCziInt.hs_zdfBoundedInt8);
    };
    hs_zdctoEnum225v9vV.evaluate = function (hs_i26Dy2H) {
        var hs_wild26Dy2K = hs_i26Dy2H;
        if (hs_i26Dy2H.notEvaluated) {
            hs_wild26Dy2K = hs_i26Dy2H.hscall();
        }
        var hs_izh26Dy2W = hs_wild26Dy2K.data[0];
        var hs_sat26Dyrr = new $hs.Thunk();
        hs_sat26Dyrr.evaluateOnce = function () {
            var hs_sat26Dyrq = new $hs.Thunk();
            hs_sat26Dyrq.evaluateOnce = function () {
                var hs_sat26Dyrp = new $hs.Thunk();
                hs_sat26Dyrp.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dyrp);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26Dy2K, hs_sat26Dyrq);
        };
        var hs_sat26Dyrv = new $hs.Thunk();
        hs_sat26Dyrv.evaluateOnce = function () {
            var hs_sat26Dyrt = new $hs.Thunk();
            hs_sat26Dyrt.evaluateOnce = function () {
                var hs_sat26Dyrs = new $hs.Thunk();
                hs_sat26Dyrs.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dyrs);
            };
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26Dy2K, hs_sat26Dyrt);
        };
        var hs_wild126Dyru = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyrv, hs_sat26Dyrr);
        switch (hs_wild126Dyru.tag) {
        case 1:
            var hs_sat26Dyrw = new $hs.Thunk();
            hs_sat26Dyrw.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
            };
            var hs_sat26Dyrx = new $hs.Thunk();
            hs_sat26Dyrx.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
            };
            var hs_sat26Dyry = new $hs.Data(1);
            hs_sat26Dyry.data = [hs_sat26Dyrx, hs_sat26Dyrw];
            var hs_sat26Dyrz = new $hs.Thunk();
            hs_sat26Dyrz.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int8\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziInt.hs_zdfShowInt8, hs_sat26Dyrz, hs_wild26Dy2K, hs_sat26Dyry);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_izh26Dy2W];
            return $res;
        }
    };
    hs_zdcpred125v9vX.evaluate = function (hs_x26Dy2Y) {
        var hs_sat26DyrB = new $hs.Thunk();
        hs_sat26DyrB.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
        };
        var hs_wild26DyrA = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_x26Dy2Y, hs_sat26DyrB);
        switch (hs_wild26DyrA.tag) {
        case 1:
            var hs_sat26DyrC = new $hs.Thunk();
            hs_sat26DyrC.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int8\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DyrC);
        case 2:
            var hs_sat26DyrE = new $hs.Thunk();
            hs_sat26DyrE.evaluateOnce = function () {
                var hs_sat26DyrD = new $hs.Thunk();
                hs_sat26DyrD.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DyrD);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_x26Dy2Y, hs_sat26DyrE);
        }
    };
    hs_zdcsucc125v9vZ.evaluate = function (hs_x26Dy35) {
        var hs_sat26DyrG = new $hs.Thunk();
        hs_sat26DyrG.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
        };
        var hs_wild26DyrF = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_x26Dy35, hs_sat26DyrG);
        switch (hs_wild26DyrF.tag) {
        case 1:
            var hs_sat26DyrH = new $hs.Thunk();
            hs_sat26DyrH.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int8\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26DyrH);
        case 2:
            var hs_sat26DyrJ = new $hs.Thunk();
            hs_sat26DyrJ.evaluateOnce = function () {
                var hs_sat26DyrI = new $hs.Thunk();
                hs_sat26DyrI.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DyrI);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_x26Dy35, hs_sat26DyrJ);
        }
    };
    hs_zdcquotRem125v9w1.evaluate = function (hs_x26Dy3d, hs_y26Dy3g) {
        var hs_wild26Dy3n = hs_x26Dy3d;
        if (hs_x26Dy3d.notEvaluated) {
            hs_wild26Dy3n = hs_x26Dy3d.hscall();
        }
        var hs_xzh26Dy3v = hs_wild26Dy3n.data[0];
        var hs_wild126Dy3j = hs_y26Dy3g;
        if (hs_y26Dy3g.notEvaluated) {
            hs_wild126Dy3j = hs_y26Dy3g.hscall();
        }
        var hs_yzh26Dy3w = hs_wild126Dy3j.data[0];
        var hs_sat26DyrM = new $hs.Thunk();
        hs_sat26DyrM.evaluateOnce = function () {
            var hs_sat26DyrK = new $hs.Thunk();
            hs_sat26DyrK.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DyrK);
        };
        var hs_wild226DyrL = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy3j, hs_sat26DyrM);
        switch (hs_wild226DyrL.tag) {
        case 1:
            var hs_sat26DyrQ = new $hs.Thunk();
            hs_sat26DyrQ.evaluateOnce = function () {
                var hs_sat26DyrP = new $hs.Thunk();
                hs_sat26DyrP.evaluateOnce = function () {
                    var hs_sat26DyrO = new $hs.Thunk();
                    hs_sat26DyrO.evaluateOnce = function () {
                        var hs_sat26DyrN = new $hs.Thunk();
                        hs_sat26DyrN.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DyrN);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DyrO);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy3j, hs_sat26DyrP);
            };
            var hs_sat26DyrU = new $hs.Thunk();
            hs_sat26DyrU.evaluateOnce = function () {
                var hs_sat26DyrR = new $hs.Thunk();
                hs_sat26DyrR.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild26Dy3n, hs_sat26DyrR);
            };
            var hs_wild326DyrT = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DyrU, hs_sat26DyrQ);
            switch (hs_wild326DyrT.tag) {
            case 1:
                var hs_sat26DyrW = new $hs.Thunk();
                hs_sat26DyrW.evaluateOnce = function () {
                    var hs_wild426Dy3C = hs_xzh26Dy3v % hs_yzh26Dy3w;
                    var hs_sat26DyrS = hs_wild426Dy3C >= 0 ? hs_wild426Dy3C & 127 : (hs_wild426Dy3C ^ ~0) & 127 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DyrS];
                    return $res;
                };
                var hs_sat26DyrX = new $hs.Thunk();
                hs_sat26DyrX.evaluateOnce = function () {
                    var hs_wild426Dy3y = hs_xzh26Dy3v / hs_yzh26Dy3w & ~0;
                    var hs_sat26DyrV = hs_wild426Dy3y >= 0 ? hs_wild426Dy3y & 127 : (hs_wild426Dy3y ^ ~0) & 127 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26DyrV];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DyrX, hs_sat26DyrW];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcmod125v9w3.evaluate = function (hs_x26Dy3H, hs_y26Dy3K) {
        var hs_wild26Dy3R = hs_x26Dy3H;
        if (hs_x26Dy3H.notEvaluated) {
            hs_wild26Dy3R = hs_x26Dy3H.hscall();
        }
        var hs_xzh26Dy3Z = hs_wild26Dy3R.data[0];
        var hs_wild126Dy3N = hs_y26Dy3K;
        if (hs_y26Dy3K.notEvaluated) {
            hs_wild126Dy3N = hs_y26Dy3K.hscall();
        }
        var hs_yzh26Dy40 = hs_wild126Dy3N.data[0];
        var hs_sat26Dys0 = new $hs.Thunk();
        hs_sat26Dys0.evaluateOnce = function () {
            var hs_sat26DyrY = new $hs.Thunk();
            hs_sat26DyrY.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DyrY);
        };
        var hs_wild226DyrZ = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy3N, hs_sat26Dys0);
        switch (hs_wild226DyrZ.tag) {
        case 1:
            var hs_sat26Dys4 = new $hs.Thunk();
            hs_sat26Dys4.evaluateOnce = function () {
                var hs_sat26Dys3 = new $hs.Thunk();
                hs_sat26Dys3.evaluateOnce = function () {
                    var hs_sat26Dys2 = new $hs.Thunk();
                    hs_sat26Dys2.evaluateOnce = function () {
                        var hs_sat26Dys1 = new $hs.Thunk();
                        hs_sat26Dys1.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dys1);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dys2);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy3N, hs_sat26Dys3);
            };
            var hs_sat26Dys8 = new $hs.Thunk();
            hs_sat26Dys8.evaluateOnce = function () {
                var hs_sat26Dys5 = new $hs.Thunk();
                hs_sat26Dys5.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild26Dy3R, hs_sat26Dys5);
            };
            var hs_wild326Dys7 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dys8, hs_sat26Dys4);
            switch (hs_wild326Dys7.tag) {
            case 1:
                var hs_wild426Dy42 = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_xzh26Dy3Z, hs_yzh26Dy40);
                var hs_sat26Dys6 = hs_wild426Dy42 >= 0 ? hs_wild426Dy42 & 127 : (hs_wild426Dy42 ^ ~0) & 127 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dys6];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcdiv125v9w5.evaluate = function (hs_x26Dy46, hs_y26Dy49) {
        var hs_wild26Dy4g = hs_x26Dy46;
        if (hs_x26Dy46.notEvaluated) {
            hs_wild26Dy4g = hs_x26Dy46.hscall();
        }
        var hs_xzh26Dy4o = hs_wild26Dy4g.data[0];
        var hs_wild126Dy4c = hs_y26Dy49;
        if (hs_y26Dy49.notEvaluated) {
            hs_wild126Dy4c = hs_y26Dy49.hscall();
        }
        var hs_yzh26Dy4p = hs_wild126Dy4c.data[0];
        var hs_sat26Dysb = new $hs.Thunk();
        hs_sat26Dysb.evaluateOnce = function () {
            var hs_sat26Dys9 = new $hs.Thunk();
            hs_sat26Dys9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dys9);
        };
        var hs_wild226Dysa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy4c, hs_sat26Dysb);
        switch (hs_wild226Dysa.tag) {
        case 1:
            var hs_sat26Dysf = new $hs.Thunk();
            hs_sat26Dysf.evaluateOnce = function () {
                var hs_sat26Dyse = new $hs.Thunk();
                hs_sat26Dyse.evaluateOnce = function () {
                    var hs_sat26Dysd = new $hs.Thunk();
                    hs_sat26Dysd.evaluateOnce = function () {
                        var hs_sat26Dysc = new $hs.Thunk();
                        hs_sat26Dysc.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dysc);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dysd);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy4c, hs_sat26Dyse);
            };
            var hs_sat26Dysj = new $hs.Thunk();
            hs_sat26Dysj.evaluateOnce = function () {
                var hs_sat26Dysg = new $hs.Thunk();
                hs_sat26Dysg.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild26Dy4g, hs_sat26Dysg);
            };
            var hs_wild326Dysi = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dysj, hs_sat26Dysf);
            switch (hs_wild326Dysi.tag) {
            case 1:
                var hs_wild426Dy4r = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_xzh26Dy4o, hs_yzh26Dy4p);
                var hs_sat26Dysh = hs_wild426Dy4r >= 0 ? hs_wild426Dy4r & 127 : (hs_wild426Dy4r ^ ~0) & 127 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dysh];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcrem125v9w7.evaluate = function (hs_x26Dy4v, hs_y26Dy4y) {
        var hs_wild26Dy4F = hs_x26Dy4v;
        if (hs_x26Dy4v.notEvaluated) {
            hs_wild26Dy4F = hs_x26Dy4v.hscall();
        }
        var hs_xzh26Dy4N = hs_wild26Dy4F.data[0];
        var hs_wild126Dy4B = hs_y26Dy4y;
        if (hs_y26Dy4y.notEvaluated) {
            hs_wild126Dy4B = hs_y26Dy4y.hscall();
        }
        var hs_yzh26Dy4O = hs_wild126Dy4B.data[0];
        var hs_sat26Dysm = new $hs.Thunk();
        hs_sat26Dysm.evaluateOnce = function () {
            var hs_sat26Dysk = new $hs.Thunk();
            hs_sat26Dysk.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dysk);
        };
        var hs_wild226Dysl = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy4B, hs_sat26Dysm);
        switch (hs_wild226Dysl.tag) {
        case 1:
            var hs_sat26Dysq = new $hs.Thunk();
            hs_sat26Dysq.evaluateOnce = function () {
                var hs_sat26Dysp = new $hs.Thunk();
                hs_sat26Dysp.evaluateOnce = function () {
                    var hs_sat26Dyso = new $hs.Thunk();
                    hs_sat26Dyso.evaluateOnce = function () {
                        var hs_sat26Dysn = new $hs.Thunk();
                        hs_sat26Dysn.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dysn);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dyso);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy4B, hs_sat26Dysp);
            };
            var hs_sat26Dysu = new $hs.Thunk();
            hs_sat26Dysu.evaluateOnce = function () {
                var hs_sat26Dysr = new $hs.Thunk();
                hs_sat26Dysr.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild26Dy4F, hs_sat26Dysr);
            };
            var hs_wild326Dyst = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dysu, hs_sat26Dysq);
            switch (hs_wild326Dyst.tag) {
            case 1:
                var hs_wild426Dy4Q = hs_xzh26Dy4N % hs_yzh26Dy4O;
                var hs_sat26Dyss = hs_wild426Dy4Q >= 0 ? hs_wild426Dy4Q & 127 : (hs_wild426Dy4Q ^ ~0) & 127 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyss];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquot125v9w9.evaluate = function (hs_x26Dy4U, hs_y26Dy4X) {
        var hs_wild26Dy54 = hs_x26Dy4U;
        if (hs_x26Dy4U.notEvaluated) {
            hs_wild26Dy54 = hs_x26Dy4U.hscall();
        }
        var hs_xzh26Dy5c = hs_wild26Dy54.data[0];
        var hs_wild126Dy50 = hs_y26Dy4X;
        if (hs_y26Dy4X.notEvaluated) {
            hs_wild126Dy50 = hs_y26Dy4X.hscall();
        }
        var hs_yzh26Dy5d = hs_wild126Dy50.data[0];
        var hs_sat26Dysx = new $hs.Thunk();
        hs_sat26Dysx.evaluateOnce = function () {
            var hs_sat26Dysv = new $hs.Thunk();
            hs_sat26Dysv.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dysv);
        };
        var hs_wild226Dysw = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy50, hs_sat26Dysx);
        switch (hs_wild226Dysw.tag) {
        case 1:
            var hs_sat26DysB = new $hs.Thunk();
            hs_sat26DysB.evaluateOnce = function () {
                var hs_sat26DysA = new $hs.Thunk();
                hs_sat26DysA.evaluateOnce = function () {
                    var hs_sat26Dysz = new $hs.Thunk();
                    hs_sat26Dysz.evaluateOnce = function () {
                        var hs_sat26Dysy = new $hs.Thunk();
                        hs_sat26Dysy.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dysy);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dysz);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy50, hs_sat26DysA);
            };
            var hs_sat26DysF = new $hs.Thunk();
            hs_sat26DysF.evaluateOnce = function () {
                var hs_sat26DysC = new $hs.Thunk();
                hs_sat26DysC.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild26Dy54, hs_sat26DysC);
            };
            var hs_wild326DysE = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DysF, hs_sat26DysB);
            switch (hs_wild326DysE.tag) {
            case 1:
                var hs_wild426Dy5f = hs_xzh26Dy5c / hs_yzh26Dy5d & ~0;
                var hs_sat26DysD = hs_wild426Dy5f >= 0 ? hs_wild426Dy5f & 127 : (hs_wild426Dy5f ^ ~0) & 127 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DysD];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcshowsPrec125v9wb.evaluate = function (hs_p26Dy5j, hs_x26Dy5k) {
        var hs_sat26DysG = new $hs.Thunk();
        hs_sat26DysG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x26Dy5k);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_p26Dy5j, hs_sat26DysG);
    };
    hs_zdcsignum125v9wd.evaluate = function (hs_x26Dy5n) {
        var hs_sat26DysJ = new $hs.Thunk();
        hs_sat26DysJ.evaluateOnce = function () {
            var hs_sat26DysH = new $hs.Thunk();
            hs_sat26DysH.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysH);
        };
        var hs_wild26DysI = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8, hs_x26Dy5n, hs_sat26DysJ);
        switch (hs_wild26DysI.tag) {
        case 1:
            var hs_sat26DysM = new $hs.Thunk();
            hs_sat26DysM.evaluateOnce = function () {
                var hs_sat26DysK = new $hs.Thunk();
                hs_sat26DysK.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysK);
            };
            var hs_wild126DysL = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_x26Dy5n, hs_sat26DysM);
            switch (hs_wild126DysL.tag) {
            case 1:
                var hs_sat26DysO = new $hs.Thunk();
                hs_sat26DysO.evaluateOnce = function () {
                    var hs_sat26DysN = new $hs.Thunk();
                    hs_sat26DysN.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysN);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysO);
            case 2:
                var hs_sat26DysP = new $hs.Thunk();
                hs_sat26DysP.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysP);
            }
        case 2:
            var hs_sat26DysQ = new $hs.Thunk();
            hs_sat26DysQ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysQ);
        }
    };
    hs_zdcabs125v9wf.evaluate = function (hs_x26Dy5z) {
        var hs_sat26DysT = new $hs.Thunk();
        hs_sat26DysT.evaluateOnce = function () {
            var hs_sat26DysR = new $hs.Thunk();
            hs_sat26DysR.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysR);
        };
        var hs_wild26DysS = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt8, hs_x26Dy5z, hs_sat26DysT);
        switch (hs_wild26DysS.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_x26Dy5z);
        case 2:
            if (hs_x26Dy5z.notEvaluated) {
                return hs_x26Dy5z.hscall();
            } else {
                return hs_x26Dy5z;
            }
        }
    };
    hs_zdcmaxBound125v9wh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dyrk);
    };
    hs_zdcminBound125v9wj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26Dyrl);
    };
    hs_zdcdivMod125v9wl.evaluate = function (hs_x26Dy5I, hs_y26Dy5L) {
        var hs_wild26Dy5S = hs_x26Dy5I;
        if (hs_x26Dy5I.notEvaluated) {
            hs_wild26Dy5S = hs_x26Dy5I.hscall();
        }
        var hs_xzh26Dy60 = hs_wild26Dy5S.data[0];
        var hs_wild126Dy5O = hs_y26Dy5L;
        if (hs_y26Dy5L.notEvaluated) {
            hs_wild126Dy5O = hs_y26Dy5L.hscall();
        }
        var hs_yzh26Dy61 = hs_wild126Dy5O.data[0];
        var hs_sat26DysW = new $hs.Thunk();
        hs_sat26DysW.evaluateOnce = function () {
            var hs_sat26DysU = new $hs.Thunk();
            hs_sat26DysU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysU);
        };
        var hs_wild226DysV = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy5O, hs_sat26DysW);
        switch (hs_wild226DysV.tag) {
        case 1:
            var hs_sat26Dyt0 = new $hs.Thunk();
            hs_sat26Dyt0.evaluateOnce = function () {
                var hs_sat26DysZ = new $hs.Thunk();
                hs_sat26DysZ.evaluateOnce = function () {
                    var hs_sat26DysY = new $hs.Thunk();
                    hs_sat26DysY.evaluateOnce = function () {
                        var hs_sat26DysX = new $hs.Thunk();
                        hs_sat26DysX.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysX);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt8, hs_sat26DysY);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild126Dy5O, hs_sat26DysZ);
            };
            var hs_sat26Dyt4 = new $hs.Thunk();
            hs_sat26Dyt4.evaluateOnce = function () {
                var hs_sat26Dyt1 = new $hs.Thunk();
                hs_sat26Dyt1.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt8);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt8, hs_wild26Dy5S, hs_sat26Dyt1);
            };
            var hs_wild326Dyt3 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyt4, hs_sat26Dyt0);
            switch (hs_wild326Dyt3.tag) {
            case 1:
                var hs_sat26Dyt6 = new $hs.Thunk();
                hs_sat26Dyt6.evaluateOnce = function () {
                    var hs_wild426Dy67 = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_xzh26Dy60, hs_yzh26Dy61);
                    var hs_sat26Dyt2 = hs_wild426Dy67 >= 0 ? hs_wild426Dy67 & 127 : (hs_wild426Dy67 ^ ~0) & 127 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyt2];
                    return $res;
                };
                var hs_sat26Dyt7 = new $hs.Thunk();
                hs_sat26Dyt7.evaluateOnce = function () {
                    var hs_wild426Dy63 = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_xzh26Dy60, hs_yzh26Dy61);
                    var hs_sat26Dyt5 = hs_wild426Dy63 >= 0 ? hs_wild426Dy63 & 127 : (hs_wild426Dy63 ^ ~0) & 127 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyt5];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyt7, hs_sat26Dyt6];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    this.hs_zdfBitsInt8.data = [$hs.modules.GHCziInt.hs_zdfNumInt8, hs_zdczizazi25v9dt, hs_zdczizbzi25v9dd, hs_zdcxor25v9cX, hs_zdccomplement25v9cM, hs_zdcshift25v9ct, hs_zdcrotate25v9c2, hs_zdcbit125v9Ab, hs_zdcsetBit125v9A9, hs_zdcclearBit125v9A7, hs_zdccomplementBit125v9A5, hs_zdctestBit125v9A3, hs_zdcbitSizze25v9bY, hs_zdcisSigned25v9bU, hs_zdcshiftL125v9A1, hs_zdcshiftR125v9zZ, hs_zdcrotateL125v9zX, hs_zdcrotateR125v9zV];
    hs_zdcrotateR125v9zV.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcrotateL125v9zX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftR125v9zZ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcshiftL125v9A1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdctestBit125v9A3.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdccomplementBit125v9A5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcclearBit125v9A7.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcsetBit125v9A9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcbit125v9Ab.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt8);
    };
    hs_zdcreadsPrec125v9Ad.evaluate = function (hs_p26Dy6N, hs_s26Dy6O) {
        var hs_ds26Dy6L = new $hs.Func(1);
        hs_ds26Dy6L.evaluate = function (hs_ds126Dy6y) {
            var hs_ds226Dyt8 = hs_ds126Dy6y;
            if (hs_ds126Dy6y.notEvaluated) {
                hs_ds226Dyt8 = hs_ds126Dy6y.hscall();
            }
            switch (hs_ds226Dyt8.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326Dy6C = hs_ds226Dyt8.data[0];
                var hs_ds426Dy6K = hs_ds226Dyt8.data[1];
                var hs_wild26Dyt9 = hs_ds326Dy6C;
                if (hs_ds326Dy6C.notEvaluated) {
                    hs_wild26Dyt9 = hs_ds326Dy6C.hscall();
                }
                var hs_x26Dy6G = hs_wild26Dyt9.data[0];
                var hs_r26Dy6I = hs_wild26Dyt9.data[1];
                var hs_sat26Dyta = new $hs.Thunk();
                hs_sat26Dyta.evaluateOnce = function () {
                    return hs_ds26Dy6L.hscall(hs_ds426Dy6K);
                };
                var hs_sat26Dytb = new $hs.Thunk();
                hs_sat26Dytb.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt8, hs_x26Dy6G);
                };
                var hs_sat26Dytc = new $hs.Data(1);
                hs_sat26Dytc.data = [hs_sat26Dytb, hs_r26Dy6I];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dytc, hs_sat26Dyta];
                return $res;
            }
        };
        var hs_sat26Dytd = new $hs.Thunk();
        hs_sat26Dytd.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt, hs_p26Dy6N, hs_s26Dy6O);
        };
        return hs_ds26Dy6L.hscall(hs_sat26Dytd);
    };
    this.hs_zdfReadInt8.data = [hs_zdcreadsPrec125v9Ad, hs_zdcreadList125v9AF, hs_zdcreadPrec125v9AD, hs_zdcreadListPrec125v9AB];
    hs_zdcreadListPrec125v9AB.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadPrec125v9AD.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcreadList125v9AF.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziInt.hs_zdfReadInt8);
    };
    hs_zdcunsafeIndex125v9AH.evaluate = function (hs_ds26Dy70, hs_i26Dy74) {
        var hs_wild26Dyte = hs_ds26Dy70;
        if (hs_ds26Dy70.notEvaluated) {
            hs_wild26Dyte = hs_ds26Dy70.hscall();
        }
        var hs_m26Dy76 = hs_wild26Dyte.data[0];
        var hs_sat26Dytg = new $hs.Thunk();
        hs_sat26Dytg.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dy76);
        };
        var hs_sat26Dyth = new $hs.Thunk();
        hs_sat26Dyth.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8, $hs.modules.GHCziNum.hs_zdfNumInt, hs_i26Dy74);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dyth, hs_sat26Dytg);
    };
    hs_zdcrange125v9AT.evaluate = function (hs_ds26Dy7b) {
        var hs_wild26Dyti = hs_ds26Dy7b;
        if (hs_ds26Dy7b.notEvaluated) {
            hs_wild26Dyti = hs_ds26Dy7b.hscall();
        }
        var hs_m26Dy7f = hs_wild26Dyti.data[0];
        var hs_n26Dy7g = hs_wild26Dyti.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt8, hs_m26Dy7f, hs_n26Dy7g);
    };
    this.hs_zdfIxInt8.data = [$hs.modules.GHCziInt.hs_zdfOrdInt8, hs_zdcrange125v9AT, hs_zdcindex125v9B6, hs_zdcunsafeIndex125v9AH, hs_zdcinRange125v9vu, hs_zdcrangeSizze125v9B4, hs_zdcunsafeRangeSizze125v9B2];
    hs_zdcunsafeRangeSizze125v9B2.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt8);
    };
    hs_zdcrangeSizze125v9B4.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt8);
    };
    hs_zdcindex125v9B6.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziInt.hs_zdfIxInt8);
    };
    hs_zdczlze225v9B8.evaluate = function (hs_a26Dy7r, hs_b26Dy7u) {
        var hs_wild26Dytk = hs_a26Dy7r;
        if (hs_a26Dy7r.notEvaluated) {
            hs_wild26Dytk = hs_a26Dy7r.hscall();
        }
        var hs_a126Dy7x = hs_wild26Dytk.data[0];
        var hs_wild126Dytj = hs_b26Dy7u;
        if (hs_b26Dy7u.notEvaluated) {
            hs_wild126Dytj = hs_b26Dy7u.hscall();
        }
        var hs_b126Dy7y = hs_wild126Dytj.data[0];
        return hs_a126Dy7x <= hs_b126Dy7y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg225v9Bk.evaluate = function (hs_a26Dy7D, hs_b26Dy7G) {
        var hs_wild26Dytm = hs_a26Dy7D;
        if (hs_a26Dy7D.notEvaluated) {
            hs_wild26Dytm = hs_a26Dy7D.hscall();
        }
        var hs_a126Dy7J = hs_wild26Dytm.data[0];
        var hs_wild126Dytl = hs_b26Dy7G;
        if (hs_b26Dy7G.notEvaluated) {
            hs_wild126Dytl = hs_b26Dy7G.hscall();
        }
        var hs_b126Dy7K = hs_wild126Dytl.data[0];
        return hs_a126Dy7J > hs_b126Dy7K ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze225v9Bw.evaluate = function (hs_a26Dy7P, hs_b26Dy7S) {
        var hs_wild26Dyto = hs_a26Dy7P;
        if (hs_a26Dy7P.notEvaluated) {
            hs_wild26Dyto = hs_a26Dy7P.hscall();
        }
        var hs_a126Dy7V = hs_wild26Dyto.data[0];
        var hs_wild126Dytn = hs_b26Dy7S;
        if (hs_b26Dy7S.notEvaluated) {
            hs_wild126Dytn = hs_b26Dy7S.hscall();
        }
        var hs_b126Dy7W = hs_wild126Dytn.data[0];
        return hs_a126Dy7V >= hs_b126Dy7W ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl225v9BI.evaluate = function (hs_a26Dy81, hs_b26Dy84) {
        var hs_wild26Dytq = hs_a26Dy81;
        if (hs_a26Dy81.notEvaluated) {
            hs_wild26Dytq = hs_a26Dy81.hscall();
        }
        var hs_a126Dy87 = hs_wild26Dytq.data[0];
        var hs_wild126Dytp = hs_b26Dy84;
        if (hs_b26Dy84.notEvaluated) {
            hs_wild126Dytp = hs_b26Dy84.hscall();
        }
        var hs_b126Dy88 = hs_wild126Dytp.data[0];
        return hs_a126Dy87 < hs_b126Dy88 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare225v9BU.evaluate = function (hs_a26Dy8d, hs_b26Dy8g) {
        var hs_wild26Dytu = hs_a26Dy8d;
        if (hs_a26Dy8d.notEvaluated) {
            hs_wild26Dytu = hs_a26Dy8d.hscall();
        }
        var hs_a126Dy8j = hs_wild26Dytu.data[0];
        var hs_wild126Dytt = hs_b26Dy8g;
        if (hs_b26Dy8g.notEvaluated) {
            hs_wild126Dytt = hs_b26Dy8g.hscall();
        }
        var hs_b126Dy8k = hs_wild126Dytt.data[0];
        var hs_wild226Dyts = hs_a126Dy8j < hs_b126Dy8k ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226Dyts.tag) {
        case 1:
            var hs_wild326Dytr = hs_a126Dy8j == hs_b126Dy8k ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326Dytr.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze225v9C8.evaluate = function (hs_ds26Dy8r, hs_ds126Dy8u) {
        var hs_wild26Dytw = hs_ds26Dy8r;
        if (hs_ds26Dy8r.notEvaluated) {
            hs_wild26Dytw = hs_ds26Dy8r.hscall();
        }
        var hs_a126Dy8x = hs_wild26Dytw.data[0];
        var hs_wild126Dytv = hs_ds126Dy8u;
        if (hs_ds126Dy8u.notEvaluated) {
            hs_wild126Dytv = hs_ds126Dy8u.hscall();
        }
        var hs_b126Dy8y = hs_wild126Dytv.data[0];
        return hs_a126Dy8x == hs_b126Dy8y ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqInt16.data = [hs_zdczeze225v9C8, hs_zdczsze225v9Ck];
    hs_zdczsze225v9Ck.evaluate = function (hs_a26Dy8D, hs_b26Dy8E) {
        var hs_sat26Dytx = new $hs.Thunk();
        hs_sat26Dytx.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_a26Dy8D, hs_b26Dy8E);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dytx);
    };
    this.hs_zdfOrdInt16.data = [$hs.modules.GHCziInt.hs_zdfEqInt16, hs_zdccompare225v9BU, hs_zdczl225v9BI, hs_zdczgze225v9Bw, hs_zdczg225v9Bk, hs_zdczlze225v9B8, hs_zdcmax225v9Ct, hs_zdcmin225v9Cr];
    hs_zdcmin225v9Cr.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdcmax225v9Ct.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16);
    };
    hs_zdcinRange225v9Cv.evaluate = function (hs_ds26Dy8O, hs_i26Dy8T) {
        var hs_wild26Dyty = hs_ds26Dy8O;
        if (hs_ds26Dy8O.notEvaluated) {
            hs_wild26Dyty = hs_ds26Dy8O.hscall();
        }
        var hs_m26Dy8S = hs_wild26Dyty.data[0];
        var hs_n26Dy8V = hs_wild26Dyty.data[1];
        var hs_sat26Dytz = new $hs.Thunk();
        hs_sat26Dytz.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16, hs_i26Dy8T, hs_n26Dy8V);
        };
        var hs_sat26DytA = new $hs.Thunk();
        hs_sat26DytA.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16, hs_m26Dy8S, hs_i26Dy8T);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DytA, hs_sat26Dytz);
    };
    hs_sat26DytB.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(32767);
    };
    hs_sat26DytC.evaluateOnce = function () {
        var hs_sat26DytD = new $hs.Thunk();
        hs_sat26DytD.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(32768);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DytD);
    };
    this.hs_zdfShowInt16.data = [hs_zdcshowsPrec225v9Dc, hs_zdcshow225v9CK, hs_zdcshowList225v9CI];
    this.hs_zdfNumInt16.data = [$hs.modules.GHCziInt.hs_zdfEqInt16, $hs.modules.GHCziInt.hs_zdfShowInt16, hs_zdczp125v9er, hs_zdczt125v9ed, hs_zdczm125v9dZ, hs_zdcnegate125v9dQ, hs_zdcabs225v9Dg, hs_zdcsignum225v9De, hs_zdcfromInteger125v9dJ];
    this.hs_zdfRealInt16.data = [$hs.modules.GHCziInt.hs_zdfNumInt16, $hs.modules.GHCziInt.hs_zdfOrdInt16, hs_zdctoRational225v9CM];
    this.hs_zdfEnumInt16.data = [hs_zdcsucc225v9D0, hs_zdcpred225v9CY, hs_zdctoEnum325v9CW, hs_zdcfromEnum125v9eF, hs_zdcenumFrom225v9CU, hs_zdcenumFromThen225v9CS, hs_zdcenumFromTo225v9CQ, hs_zdcenumFromThenTo225v9CO];
    this.hs_zdfIntegralInt16.data = [$hs.modules.GHCziInt.hs_zdfRealInt16, $hs.modules.GHCziInt.hs_zdfEnumInt16, hs_zdcquot225v9Da, hs_zdcrem225v9D8, hs_zdcdiv225v9D6, hs_zdcmod225v9D4, hs_zdcquotRem225v9D2, hs_zdcdivMod225v9Dm, hs_zdctoInteger125v9eM];
    this.hs_zdfBoundedInt16.data = [hs_zdcminBound225v9Dk, hs_zdcmaxBound225v9Di];
    hs_zdcshowList225v9CI.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdcshow225v9CK.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziInt.hs_zdfShowInt16);
    };
    hs_zdctoRational225v9CM.evaluate = function (hs_x26Dy9E) {
        var hs_sat26DytE = new $hs.Thunk();
        hs_sat26DytE.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26DytF = new $hs.Thunk();
        hs_sat26DytF.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16, hs_x26Dy9E);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26DytF, hs_sat26DytE);
    };
    hs_zdcenumFromThenTo225v9CO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromTo225v9CQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16);
    };
    hs_zdcenumFromThen225v9CS.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16, $hs.modules.GHCziInt.hs_zdfBoundedInt16);
    };
    hs_zdcenumFrom225v9CU.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16, $hs.modules.GHCziInt.hs_zdfBoundedInt16);
    };
    hs_zdctoEnum325v9CW.evaluate = function (hs_i26Dy9I) {
        var hs_wild26Dy9L = hs_i26Dy9I;
        if (hs_i26Dy9I.notEvaluated) {
            hs_wild26Dy9L = hs_i26Dy9I.hscall();
        }
        var hs_izh26Dy9X = hs_wild26Dy9L.data[0];
        var hs_sat26DytI = new $hs.Thunk();
        hs_sat26DytI.evaluateOnce = function () {
            var hs_sat26DytH = new $hs.Thunk();
            hs_sat26DytH.evaluateOnce = function () {
                var hs_sat26DytG = new $hs.Thunk();
                hs_sat26DytG.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DytG);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26Dy9L, hs_sat26DytH);
        };
        var hs_sat26DytM = new $hs.Thunk();
        hs_sat26DytM.evaluateOnce = function () {
            var hs_sat26DytK = new $hs.Thunk();
            hs_sat26DytK.evaluateOnce = function () {
                var hs_sat26DytJ = new $hs.Thunk();
                hs_sat26DytJ.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DytJ);
            };
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26Dy9L, hs_sat26DytK);
        };
        var hs_wild126DytL = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DytM, hs_sat26DytI);
        switch (hs_wild126DytL.tag) {
        case 1:
            var hs_sat26DytN = new $hs.Thunk();
            hs_sat26DytN.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
            };
            var hs_sat26DytO = new $hs.Thunk();
            hs_sat26DytO.evaluateOnce = function () {
                return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
            };
            var hs_sat26DytP = new $hs.Data(1);
            hs_sat26DytP.data = [hs_sat26DytO, hs_sat26DytN];
            var hs_sat26DytQ = new $hs.Thunk();
            hs_sat26DytQ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int16\x00");
            };
            return $hs.modules.GHCziWord.hs_toEnumError.hscall($hs.modules.GHCziInt.hs_zdfShowInt16, hs_sat26DytQ, hs_wild26Dy9L, hs_sat26DytP);
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [hs_izh26Dy9X];
            return $res;
        }
    };
    hs_zdcpred225v9CY.evaluate = function (hs_x26Dy9Z) {
        var hs_sat26DytS = new $hs.Thunk();
        hs_sat26DytS.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
        };
        var hs_wild26DytR = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_x26Dy9Z, hs_sat26DytS);
        switch (hs_wild26DytR.tag) {
        case 1:
            var hs_sat26DytT = new $hs.Thunk();
            hs_sat26DytT.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int16\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DytT);
        case 2:
            var hs_sat26DytV = new $hs.Thunk();
            hs_sat26DytV.evaluateOnce = function () {
                var hs_sat26DytU = new $hs.Thunk();
                hs_sat26DytU.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DytU);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_x26Dy9Z, hs_sat26DytV);
        }
    };
    hs_zdcsucc225v9D0.evaluate = function (hs_x26Dya6) {
        var hs_sat26DytX = new $hs.Thunk();
        hs_sat26DytX.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
        };
        var hs_wild26DytW = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_x26Dya6, hs_sat26DytX);
        switch (hs_wild26DytW.tag) {
        case 1:
            var hs_sat26DytY = new $hs.Thunk();
            hs_sat26DytY.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int16\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26DytY);
        case 2:
            var hs_sat26Dyu0 = new $hs.Thunk();
            hs_sat26Dyu0.evaluateOnce = function () {
                var hs_sat26DytZ = new $hs.Thunk();
                hs_sat26DytZ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DytZ);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_x26Dya6, hs_sat26Dyu0);
        }
    };
    hs_zdcquotRem225v9D2.evaluate = function (hs_x26Dyae, hs_y26Dyah) {
        var hs_wild26Dyao = hs_x26Dyae;
        if (hs_x26Dyae.notEvaluated) {
            hs_wild26Dyao = hs_x26Dyae.hscall();
        }
        var hs_xzh26Dyaw = hs_wild26Dyao.data[0];
        var hs_wild126Dyak = hs_y26Dyah;
        if (hs_y26Dyah.notEvaluated) {
            hs_wild126Dyak = hs_y26Dyah.hscall();
        }
        var hs_yzh26Dyax = hs_wild126Dyak.data[0];
        var hs_sat26Dyu3 = new $hs.Thunk();
        hs_sat26Dyu3.evaluateOnce = function () {
            var hs_sat26Dyu1 = new $hs.Thunk();
            hs_sat26Dyu1.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyu1);
        };
        var hs_wild226Dyu2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126Dyak, hs_sat26Dyu3);
        switch (hs_wild226Dyu2.tag) {
        case 1:
            var hs_sat26Dyu7 = new $hs.Thunk();
            hs_sat26Dyu7.evaluateOnce = function () {
                var hs_sat26Dyu6 = new $hs.Thunk();
                hs_sat26Dyu6.evaluateOnce = function () {
                    var hs_sat26Dyu5 = new $hs.Thunk();
                    hs_sat26Dyu5.evaluateOnce = function () {
                        var hs_sat26Dyu4 = new $hs.Thunk();
                        hs_sat26Dyu4.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyu4);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyu5);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126Dyak, hs_sat26Dyu6);
            };
            var hs_sat26Dyub = new $hs.Thunk();
            hs_sat26Dyub.evaluateOnce = function () {
                var hs_sat26Dyu8 = new $hs.Thunk();
                hs_sat26Dyu8.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild26Dyao, hs_sat26Dyu8);
            };
            var hs_wild326Dyua = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyub, hs_sat26Dyu7);
            switch (hs_wild326Dyua.tag) {
            case 1:
                var hs_sat26Dyud = new $hs.Thunk();
                hs_sat26Dyud.evaluateOnce = function () {
                    var hs_wild426DyaD = hs_xzh26Dyaw % hs_yzh26Dyax;
                    var hs_sat26Dyu9 = hs_wild426DyaD >= 0 ? hs_wild426DyaD & 32767 : (hs_wild426DyaD ^ ~0) & 32767 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyu9];
                    return $res;
                };
                var hs_sat26Dyue = new $hs.Thunk();
                hs_sat26Dyue.evaluateOnce = function () {
                    var hs_wild426Dyaz = hs_xzh26Dyaw / hs_yzh26Dyax & ~0;
                    var hs_sat26Dyuc = hs_wild426Dyaz >= 0 ? hs_wild426Dyaz & 32767 : (hs_wild426Dyaz ^ ~0) & 32767 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyuc];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyue, hs_sat26Dyud];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcmod225v9D4.evaluate = function (hs_x26DyaI, hs_y26DyaL) {
        var hs_wild26DyaS = hs_x26DyaI;
        if (hs_x26DyaI.notEvaluated) {
            hs_wild26DyaS = hs_x26DyaI.hscall();
        }
        var hs_xzh26Dyb0 = hs_wild26DyaS.data[0];
        var hs_wild126DyaO = hs_y26DyaL;
        if (hs_y26DyaL.notEvaluated) {
            hs_wild126DyaO = hs_y26DyaL.hscall();
        }
        var hs_yzh26Dyb1 = hs_wild126DyaO.data[0];
        var hs_sat26Dyuh = new $hs.Thunk();
        hs_sat26Dyuh.evaluateOnce = function () {
            var hs_sat26Dyuf = new $hs.Thunk();
            hs_sat26Dyuf.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyuf);
        };
        var hs_wild226Dyug = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126DyaO, hs_sat26Dyuh);
        switch (hs_wild226Dyug.tag) {
        case 1:
            var hs_sat26Dyul = new $hs.Thunk();
            hs_sat26Dyul.evaluateOnce = function () {
                var hs_sat26Dyuk = new $hs.Thunk();
                hs_sat26Dyuk.evaluateOnce = function () {
                    var hs_sat26Dyuj = new $hs.Thunk();
                    hs_sat26Dyuj.evaluateOnce = function () {
                        var hs_sat26Dyui = new $hs.Thunk();
                        hs_sat26Dyui.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyui);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyuj);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126DyaO, hs_sat26Dyuk);
            };
            var hs_sat26Dyup = new $hs.Thunk();
            hs_sat26Dyup.evaluateOnce = function () {
                var hs_sat26Dyum = new $hs.Thunk();
                hs_sat26Dyum.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild26DyaS, hs_sat26Dyum);
            };
            var hs_wild326Dyuo = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyup, hs_sat26Dyul);
            switch (hs_wild326Dyuo.tag) {
            case 1:
                var hs_wild426Dyb3 = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_xzh26Dyb0, hs_yzh26Dyb1);
                var hs_sat26Dyun = hs_wild426Dyb3 >= 0 ? hs_wild426Dyb3 & 32767 : (hs_wild426Dyb3 ^ ~0) & 32767 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyun];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcdiv225v9D6.evaluate = function (hs_x26Dyb7, hs_y26Dyba) {
        var hs_wild26Dybh = hs_x26Dyb7;
        if (hs_x26Dyb7.notEvaluated) {
            hs_wild26Dybh = hs_x26Dyb7.hscall();
        }
        var hs_xzh26Dybp = hs_wild26Dybh.data[0];
        var hs_wild126Dybd = hs_y26Dyba;
        if (hs_y26Dyba.notEvaluated) {
            hs_wild126Dybd = hs_y26Dyba.hscall();
        }
        var hs_yzh26Dybq = hs_wild126Dybd.data[0];
        var hs_sat26Dyus = new $hs.Thunk();
        hs_sat26Dyus.evaluateOnce = function () {
            var hs_sat26Dyuq = new $hs.Thunk();
            hs_sat26Dyuq.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyuq);
        };
        var hs_wild226Dyur = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126Dybd, hs_sat26Dyus);
        switch (hs_wild226Dyur.tag) {
        case 1:
            var hs_sat26Dyuw = new $hs.Thunk();
            hs_sat26Dyuw.evaluateOnce = function () {
                var hs_sat26Dyuv = new $hs.Thunk();
                hs_sat26Dyuv.evaluateOnce = function () {
                    var hs_sat26Dyuu = new $hs.Thunk();
                    hs_sat26Dyuu.evaluateOnce = function () {
                        var hs_sat26Dyut = new $hs.Thunk();
                        hs_sat26Dyut.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyut);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyuu);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126Dybd, hs_sat26Dyuv);
            };
            var hs_sat26DyuA = new $hs.Thunk();
            hs_sat26DyuA.evaluateOnce = function () {
                var hs_sat26Dyux = new $hs.Thunk();
                hs_sat26Dyux.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild26Dybh, hs_sat26Dyux);
            };
            var hs_wild326Dyuz = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DyuA, hs_sat26Dyuw);
            switch (hs_wild326Dyuz.tag) {
            case 1:
                var hs_wild426Dybs = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_xzh26Dybp, hs_yzh26Dybq);
                var hs_sat26Dyuy = hs_wild426Dybs >= 0 ? hs_wild426Dybs & 32767 : (hs_wild426Dybs ^ ~0) & 32767 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyuy];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcrem225v9D8.evaluate = function (hs_x26Dybw, hs_y26Dybz) {
        var hs_wild26DybG = hs_x26Dybw;
        if (hs_x26Dybw.notEvaluated) {
            hs_wild26DybG = hs_x26Dybw.hscall();
        }
        var hs_xzh26DybO = hs_wild26DybG.data[0];
        var hs_wild126DybC = hs_y26Dybz;
        if (hs_y26Dybz.notEvaluated) {
            hs_wild126DybC = hs_y26Dybz.hscall();
        }
        var hs_yzh26DybP = hs_wild126DybC.data[0];
        var hs_sat26DyuD = new $hs.Thunk();
        hs_sat26DyuD.evaluateOnce = function () {
            var hs_sat26DyuB = new $hs.Thunk();
            hs_sat26DyuB.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DyuB);
        };
        var hs_wild226DyuC = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126DybC, hs_sat26DyuD);
        switch (hs_wild226DyuC.tag) {
        case 1:
            var hs_sat26DyuH = new $hs.Thunk();
            hs_sat26DyuH.evaluateOnce = function () {
                var hs_sat26DyuG = new $hs.Thunk();
                hs_sat26DyuG.evaluateOnce = function () {
                    var hs_sat26DyuF = new $hs.Thunk();
                    hs_sat26DyuF.evaluateOnce = function () {
                        var hs_sat26DyuE = new $hs.Thunk();
                        hs_sat26DyuE.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DyuE);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DyuF);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126DybC, hs_sat26DyuG);
            };
            var hs_sat26DyuL = new $hs.Thunk();
            hs_sat26DyuL.evaluateOnce = function () {
                var hs_sat26DyuI = new $hs.Thunk();
                hs_sat26DyuI.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild26DybG, hs_sat26DyuI);
            };
            var hs_wild326DyuK = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DyuL, hs_sat26DyuH);
            switch (hs_wild326DyuK.tag) {
            case 1:
                var hs_wild426DybR = hs_xzh26DybO % hs_yzh26DybP;
                var hs_sat26DyuJ = hs_wild426DybR >= 0 ? hs_wild426DybR & 32767 : (hs_wild426DybR ^ ~0) & 32767 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DyuJ];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquot225v9Da.evaluate = function (hs_x26DybV, hs_y26DybY) {
        var hs_wild26Dyc5 = hs_x26DybV;
        if (hs_x26DybV.notEvaluated) {
            hs_wild26Dyc5 = hs_x26DybV.hscall();
        }
        var hs_xzh26Dycd = hs_wild26Dyc5.data[0];
        var hs_wild126Dyc1 = hs_y26DybY;
        if (hs_y26DybY.notEvaluated) {
            hs_wild126Dyc1 = hs_y26DybY.hscall();
        }
        var hs_yzh26Dyce = hs_wild126Dyc1.data[0];
        var hs_sat26DyuO = new $hs.Thunk();
        hs_sat26DyuO.evaluateOnce = function () {
            var hs_sat26DyuM = new $hs.Thunk();
            hs_sat26DyuM.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DyuM);
        };
        var hs_wild226DyuN = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126Dyc1, hs_sat26DyuO);
        switch (hs_wild226DyuN.tag) {
        case 1:
            var hs_sat26DyuS = new $hs.Thunk();
            hs_sat26DyuS.evaluateOnce = function () {
                var hs_sat26DyuR = new $hs.Thunk();
                hs_sat26DyuR.evaluateOnce = function () {
                    var hs_sat26DyuQ = new $hs.Thunk();
                    hs_sat26DyuQ.evaluateOnce = function () {
                        var hs_sat26DyuP = new $hs.Thunk();
                        hs_sat26DyuP.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DyuP);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DyuQ);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126Dyc1, hs_sat26DyuR);
            };
            var hs_sat26DyuW = new $hs.Thunk();
            hs_sat26DyuW.evaluateOnce = function () {
                var hs_sat26DyuT = new $hs.Thunk();
                hs_sat26DyuT.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild26Dyc5, hs_sat26DyuT);
            };
            var hs_wild326DyuV = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DyuW, hs_sat26DyuS);
            switch (hs_wild326DyuV.tag) {
            case 1:
                var hs_wild426Dycg = hs_xzh26Dycd / hs_yzh26Dyce & ~0;
                var hs_sat26DyuU = hs_wild426Dycg >= 0 ? hs_wild426Dycg & 32767 : (hs_wild426Dycg ^ ~0) & 32767 ^ ~0;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DyuU];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcshowsPrec225v9Dc.evaluate = function (hs_p26Dyck, hs_x26Dycl) {
        var hs_sat26DyuX = new $hs.Thunk();
        hs_sat26DyuX.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x26Dycl);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_p26Dyck, hs_sat26DyuX);
    };
    hs_zdcsignum225v9De.evaluate = function (hs_x26Dyco) {
        var hs_sat26Dyv0 = new $hs.Thunk();
        hs_sat26Dyv0.evaluateOnce = function () {
            var hs_sat26DyuY = new $hs.Thunk();
            hs_sat26DyuY.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DyuY);
        };
        var hs_wild26DyuZ = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16, hs_x26Dyco, hs_sat26Dyv0);
        switch (hs_wild26DyuZ.tag) {
        case 1:
            var hs_sat26Dyv3 = new $hs.Thunk();
            hs_sat26Dyv3.evaluateOnce = function () {
                var hs_sat26Dyv1 = new $hs.Thunk();
                hs_sat26Dyv1.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyv1);
            };
            var hs_wild126Dyv2 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_x26Dyco, hs_sat26Dyv3);
            switch (hs_wild126Dyv2.tag) {
            case 1:
                var hs_sat26Dyv5 = new $hs.Thunk();
                hs_sat26Dyv5.evaluateOnce = function () {
                    var hs_sat26Dyv4 = new $hs.Thunk();
                    hs_sat26Dyv4.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyv4);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyv5);
            case 2:
                var hs_sat26Dyv6 = new $hs.Thunk();
                hs_sat26Dyv6.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyv6);
            }
        case 2:
            var hs_sat26Dyv7 = new $hs.Thunk();
            hs_sat26Dyv7.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyv7);
        }
    };
    hs_zdcabs225v9Dg.evaluate = function (hs_x26DycA) {
        var hs_sat26Dyva = new $hs.Thunk();
        hs_sat26Dyva.evaluateOnce = function () {
            var hs_sat26Dyv8 = new $hs.Thunk();
            hs_sat26Dyv8.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyv8);
        };
        var hs_wild26Dyv9 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt16, hs_x26DycA, hs_sat26Dyva);
        switch (hs_wild26Dyv9.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_x26DycA);
        case 2:
            if (hs_x26DycA.notEvaluated) {
                return hs_x26DycA.hscall();
            } else {
                return hs_x26DycA;
            }
        }
    };
    hs_zdcmaxBound225v9Di.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DytB);
    };
    hs_zdcminBound225v9Dk.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26DytC);
    };
    hs_zdcdivMod225v9Dm.evaluate = function (hs_x26DycJ, hs_y26DycM) {
        var hs_wild26DycT = hs_x26DycJ;
        if (hs_x26DycJ.notEvaluated) {
            hs_wild26DycT = hs_x26DycJ.hscall();
        }
        var hs_xzh26Dyd1 = hs_wild26DycT.data[0];
        var hs_wild126DycP = hs_y26DycM;
        if (hs_y26DycM.notEvaluated) {
            hs_wild126DycP = hs_y26DycM.hscall();
        }
        var hs_yzh26Dyd2 = hs_wild126DycP.data[0];
        var hs_sat26Dyvd = new $hs.Thunk();
        hs_sat26Dyvd.evaluateOnce = function () {
            var hs_sat26Dyvb = new $hs.Thunk();
            hs_sat26Dyvb.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyvb);
        };
        var hs_wild226Dyvc = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126DycP, hs_sat26Dyvd);
        switch (hs_wild226Dyvc.tag) {
        case 1:
            var hs_sat26Dyvh = new $hs.Thunk();
            hs_sat26Dyvh.evaluateOnce = function () {
                var hs_sat26Dyvg = new $hs.Thunk();
                hs_sat26Dyvg.evaluateOnce = function () {
                    var hs_sat26Dyvf = new $hs.Thunk();
                    hs_sat26Dyvf.evaluateOnce = function () {
                        var hs_sat26Dyve = new $hs.Thunk();
                        hs_sat26Dyve.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyve);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt16, hs_sat26Dyvf);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild126DycP, hs_sat26Dyvg);
            };
            var hs_sat26Dyvl = new $hs.Thunk();
            hs_sat26Dyvl.evaluateOnce = function () {
                var hs_sat26Dyvi = new $hs.Thunk();
                hs_sat26Dyvi.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt16);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt16, hs_wild26DycT, hs_sat26Dyvi);
            };
            var hs_wild326Dyvk = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyvl, hs_sat26Dyvh);
            switch (hs_wild326Dyvk.tag) {
            case 1:
                var hs_sat26Dyvn = new $hs.Thunk();
                hs_sat26Dyvn.evaluateOnce = function () {
                    var hs_wild426Dyd8 = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_xzh26Dyd1, hs_yzh26Dyd2);
                    var hs_sat26Dyvj = hs_wild426Dyd8 >= 0 ? hs_wild426Dyd8 & 32767 : (hs_wild426Dyd8 ^ ~0) & 32767 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyvj];
                    return $res;
                };
                var hs_sat26Dyvo = new $hs.Thunk();
                hs_sat26Dyvo.evaluateOnce = function () {
                    var hs_wild426Dyd4 = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_xzh26Dyd1, hs_yzh26Dyd2);
                    var hs_sat26Dyvm = hs_wild426Dyd4 >= 0 ? hs_wild426Dyd4 & 32767 : (hs_wild426Dyd4 ^ ~0) & 32767 ^ ~0;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyvm];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyvo, hs_sat26Dyvn];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    this.hs_zdfBitsInt16.data = [$hs.modules.GHCziInt.hs_zdfNumInt16, hs_zdczizazi125v9gs, hs_zdczizbzi125v9gc, hs_zdcxor125v9fW, hs_zdccomplement125v9fL, hs_zdcshift125v9fs, hs_zdcrotate125v9f1, hs_zdcbit225v9Hc, hs_zdcsetBit225v9Ha, hs_zdcclearBit225v9H8, hs_zdccomplementBit225v9H6, hs_zdctestBit225v9H4, hs_zdcbitSizze125v9eX, hs_zdcisSigned125v9eT, hs_zdcshiftL225v9H2, hs_zdcshiftR225v9H0, hs_zdcrotateL225v9GY, hs_zdcrotateR225v9GW];
    hs_zdcrotateR225v9GW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcrotateL225v9GY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshiftR225v9H0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcshiftL225v9H2.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdctestBit225v9H4.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdccomplementBit225v9H6.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcclearBit225v9H8.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcsetBit225v9Ha.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcbit225v9Hc.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt16);
    };
    hs_zdcreadsPrec225v9He.evaluate = function (hs_p26DydO, hs_s26DydP) {
        var hs_ds26DydM = new $hs.Func(1);
        hs_ds26DydM.evaluate = function (hs_ds126Dydz) {
            var hs_ds226Dyvp = hs_ds126Dydz;
            if (hs_ds126Dydz.notEvaluated) {
                hs_ds226Dyvp = hs_ds126Dydz.hscall();
            }
            switch (hs_ds226Dyvp.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326DydD = hs_ds226Dyvp.data[0];
                var hs_ds426DydL = hs_ds226Dyvp.data[1];
                var hs_wild26Dyvq = hs_ds326DydD;
                if (hs_ds326DydD.notEvaluated) {
                    hs_wild26Dyvq = hs_ds326DydD.hscall();
                }
                var hs_x26DydH = hs_wild26Dyvq.data[0];
                var hs_r26DydJ = hs_wild26Dyvq.data[1];
                var hs_sat26Dyvr = new $hs.Thunk();
                hs_sat26Dyvr.evaluateOnce = function () {
                    return hs_ds26DydM.hscall(hs_ds426DydL);
                };
                var hs_sat26Dyvs = new $hs.Thunk();
                hs_sat26Dyvs.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt16, hs_x26DydH);
                };
                var hs_sat26Dyvt = new $hs.Data(1);
                hs_sat26Dyvt.data = [hs_sat26Dyvs, hs_r26DydJ];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26Dyvt, hs_sat26Dyvr];
                return $res;
            }
        };
        var hs_sat26Dyvu = new $hs.Thunk();
        hs_sat26Dyvu.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt, hs_p26DydO, hs_s26DydP);
        };
        return hs_ds26DydM.hscall(hs_sat26Dyvu);
    };
    this.hs_zdfReadInt16.data = [hs_zdcreadsPrec225v9He, hs_zdcreadList225v9HG, hs_zdcreadPrec225v9HE, hs_zdcreadListPrec225v9HC];
    hs_zdcreadListPrec225v9HC.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt16);
    };
    hs_zdcreadPrec225v9HE.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt16);
    };
    hs_zdcreadList225v9HG.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziInt.hs_zdfReadInt16);
    };
    hs_zdcunsafeIndex225v9HI.evaluate = function (hs_ds26Dye1, hs_i26Dye5) {
        var hs_wild26Dyvv = hs_ds26Dye1;
        if (hs_ds26Dye1.notEvaluated) {
            hs_wild26Dyvv = hs_ds26Dye1.hscall();
        }
        var hs_m26Dye7 = hs_wild26Dyvv.data[0];
        var hs_sat26Dyvx = new $hs.Thunk();
        hs_sat26Dyvx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dye7);
        };
        var hs_sat26Dyvy = new $hs.Thunk();
        hs_sat26Dyvy.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16, $hs.modules.GHCziNum.hs_zdfNumInt, hs_i26Dye5);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dyvy, hs_sat26Dyvx);
    };
    hs_zdcrange225v9HU.evaluate = function (hs_ds26Dyec) {
        var hs_wild26Dyvz = hs_ds26Dyec;
        if (hs_ds26Dyec.notEvaluated) {
            hs_wild26Dyvz = hs_ds26Dyec.hscall();
        }
        var hs_m26Dyeg = hs_wild26Dyvz.data[0];
        var hs_n26Dyeh = hs_wild26Dyvz.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt16, hs_m26Dyeg, hs_n26Dyeh);
    };
    this.hs_zdfIxInt16.data = [$hs.modules.GHCziInt.hs_zdfOrdInt16, hs_zdcrange225v9HU, hs_zdcindex225v9I7, hs_zdcunsafeIndex225v9HI, hs_zdcinRange225v9Cv, hs_zdcrangeSizze225v9I5, hs_zdcunsafeRangeSizze225v9I3];
    hs_zdcunsafeRangeSizze225v9I3.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt16);
    };
    hs_zdcrangeSizze225v9I5.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt16);
    };
    hs_zdcindex225v9I7.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziInt.hs_zdfIxInt16);
    };
    hs_zdczlze325v9I9.evaluate = function (hs_a26Dyes, hs_b26Dyev) {
        var hs_wild26DyvB = hs_a26Dyes;
        if (hs_a26Dyes.notEvaluated) {
            hs_wild26DyvB = hs_a26Dyes.hscall();
        }
        var hs_a126Dyey = hs_wild26DyvB.data[0];
        var hs_wild126DyvA = hs_b26Dyev;
        if (hs_b26Dyev.notEvaluated) {
            hs_wild126DyvA = hs_b26Dyev.hscall();
        }
        var hs_b126Dyez = hs_wild126DyvA.data[0];
        return hs_a126Dyey <= hs_b126Dyez ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczg325v9Il.evaluate = function (hs_a26DyeE, hs_b26DyeH) {
        var hs_wild26DyvD = hs_a26DyeE;
        if (hs_a26DyeE.notEvaluated) {
            hs_wild26DyvD = hs_a26DyeE.hscall();
        }
        var hs_a126DyeK = hs_wild26DyvD.data[0];
        var hs_wild126DyvC = hs_b26DyeH;
        if (hs_b26DyeH.notEvaluated) {
            hs_wild126DyvC = hs_b26DyeH.hscall();
        }
        var hs_b126DyeL = hs_wild126DyvC.data[0];
        return hs_a126DyeK > hs_b126DyeL ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczgze325v9Ix.evaluate = function (hs_a26DyeQ, hs_b26DyeT) {
        var hs_wild26DyvF = hs_a26DyeQ;
        if (hs_a26DyeQ.notEvaluated) {
            hs_wild26DyvF = hs_a26DyeQ.hscall();
        }
        var hs_a126DyeW = hs_wild26DyvF.data[0];
        var hs_wild126DyvE = hs_b26DyeT;
        if (hs_b26DyeT.notEvaluated) {
            hs_wild126DyvE = hs_b26DyeT.hscall();
        }
        var hs_b126DyeX = hs_wild126DyvE.data[0];
        return hs_a126DyeW >= hs_b126DyeX ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdczl325v9IJ.evaluate = function (hs_a26Dyf2, hs_b26Dyf5) {
        var hs_wild26DyvH = hs_a26Dyf2;
        if (hs_a26Dyf2.notEvaluated) {
            hs_wild26DyvH = hs_a26Dyf2.hscall();
        }
        var hs_a126Dyf8 = hs_wild26DyvH.data[0];
        var hs_wild126DyvG = hs_b26Dyf5;
        if (hs_b26Dyf5.notEvaluated) {
            hs_wild126DyvG = hs_b26Dyf5.hscall();
        }
        var hs_b126Dyf9 = hs_wild126DyvG.data[0];
        return hs_a126Dyf8 < hs_b126Dyf9 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    hs_zdccompare325v9IV.evaluate = function (hs_a26Dyfe, hs_b26Dyfh) {
        var hs_wild26DyvL = hs_a26Dyfe;
        if (hs_a26Dyfe.notEvaluated) {
            hs_wild26DyvL = hs_a26Dyfe.hscall();
        }
        var hs_a126Dyfk = hs_wild26DyvL.data[0];
        var hs_wild126DyvK = hs_b26Dyfh;
        if (hs_b26Dyfh.notEvaluated) {
            hs_wild126DyvK = hs_b26Dyfh.hscall();
        }
        var hs_b126Dyfl = hs_wild126DyvK.data[0];
        var hs_wild226DyvJ = hs_a126Dyfk < hs_b126Dyfl ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DyvJ.tag) {
        case 1:
            var hs_wild326DyvI = hs_a126Dyfk == hs_b126Dyfl ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            switch (hs_wild326DyvI.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczeze325v9J9.evaluate = function (hs_ds26Dyfs, hs_ds126Dyfv) {
        var hs_wild26DyvN = hs_ds26Dyfs;
        if (hs_ds26Dyfs.notEvaluated) {
            hs_wild26DyvN = hs_ds26Dyfs.hscall();
        }
        var hs_a126Dyfy = hs_wild26DyvN.data[0];
        var hs_wild126DyvM = hs_ds126Dyfv;
        if (hs_ds126Dyfv.notEvaluated) {
            hs_wild126DyvM = hs_ds126Dyfv.hscall();
        }
        var hs_b126Dyfz = hs_wild126DyvM.data[0];
        return hs_a126Dyfy == hs_b126Dyfz ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
    };
    this.hs_zdfEqInt32.data = [hs_zdczeze325v9J9, hs_zdczsze325v9Jl];
    hs_zdczsze325v9Jl.evaluate = function (hs_a26DyfE, hs_b26DyfF) {
        var hs_sat26DyvO = new $hs.Thunk();
        hs_sat26DyvO.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_a26DyfE, hs_b26DyfF);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DyvO);
    };
    this.hs_zdfOrdInt32.data = [$hs.modules.GHCziInt.hs_zdfEqInt32, hs_zdccompare325v9IV, hs_zdczl325v9IJ, hs_zdczgze325v9Ix, hs_zdczg325v9Il, hs_zdczlze325v9I9, hs_zdcmax325v9Ju, hs_zdcmin325v9Js];
    hs_zdcmin325v9Js.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcmax325v9Ju.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32);
    };
    hs_zdcinRange325v9Jw.evaluate = function (hs_ds26DyfP, hs_i26DyfU) {
        var hs_wild26DyvP = hs_ds26DyfP;
        if (hs_ds26DyfP.notEvaluated) {
            hs_wild26DyvP = hs_ds26DyfP.hscall();
        }
        var hs_m26DyfT = hs_wild26DyvP.data[0];
        var hs_n26DyfW = hs_wild26DyvP.data[1];
        var hs_sat26DyvQ = new $hs.Thunk();
        hs_sat26DyvQ.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_i26DyfU, hs_n26DyfW);
        };
        var hs_sat26DyvR = new $hs.Thunk();
        hs_sat26DyvR.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_m26DyfT, hs_i26DyfU);
        };
        return $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DyvR, hs_sat26DyvQ);
    };
    hs_sat26DyvS.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
    };
    hs_sat26DyvT.evaluateOnce = function () {
        var hs_sat26DyvW = new $hs.Thunk();
        hs_sat26DyvW.evaluateOnce = function () {
            var hs_sat26DyvU = new $hs.Thunk();
            hs_sat26DyvU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2147483647);
            };
            var hs_sat26DyvV = new $hs.Thunk();
            hs_sat26DyvV.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziInteger.hs_plusInteger.hscall(hs_sat26DyvV, hs_sat26DyvU);
        };
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DyvW);
    };
    this.hs_zdfShowInt32.data = [hs_zdcshowsPrec325v9Kb, hs_zdcshow325v9JL, hs_zdcshowList325v9JJ];
    this.hs_zdfNumInt32.data = [$hs.modules.GHCziInt.hs_zdfEqInt32, $hs.modules.GHCziInt.hs_zdfShowInt32, hs_zdczp225v9hq, hs_zdczt225v9hc, hs_zdczm225v9gY, hs_zdcnegate225v9gP, hs_zdcabs325v9Kf, hs_zdcsignum325v9Kd, hs_zdcfromInteger225v9gI];
    this.hs_zdfEnumInt32.data = [hs_zdcsucc325v9JX, hs_zdcpred325v9JV, hs_zdctoEnum25v9hL, hs_zdcfromEnum225v9hE, hs_zdcenumFrom325v9JT, hs_zdcenumFromThen325v9JR, hs_zdcenumFromTo325v9JP, hs_zdcenumFromThenTo325v9JN];
    this.hs_zdfRealInt32.data = [$hs.modules.GHCziInt.hs_zdfNumInt32, $hs.modules.GHCziInt.hs_zdfOrdInt32, hs_zdctoRational325v9JZ];
    this.hs_zdfIntegralInt32.data = [$hs.modules.GHCziInt.hs_zdfRealInt32, $hs.modules.GHCziInt.hs_zdfEnumInt32, hs_zdcquot325v9K9, hs_zdcrem325v9K7, hs_zdcdiv325v9K5, hs_zdcmod325v9K3, hs_zdcquotRem325v9K1, hs_zdcdivMod325v9Kl, hs_zdctoInteger225v9hS];
    this.hs_zdfBoundedInt32.data = [hs_zdcminBound325v9Kj, hs_zdcmaxBound325v9Kh];
    hs_zdcshowList325v9JJ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcshow325v9JL.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziInt.hs_zdfShowInt32);
    };
    hs_zdcenumFromThenTo325v9JN.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromTo325v9JP.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32);
    };
    hs_zdcenumFromThen325v9JR.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFromThen.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32, $hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcenumFrom325v9JT.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_boundedEnumFrom.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32, $hs.modules.GHCziInt.hs_zdfBoundedInt32);
    };
    hs_zdcpred325v9JV.evaluate = function (hs_x26DygD) {
        var hs_sat26DyvY = new $hs.Thunk();
        hs_sat26DyvY.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
        };
        var hs_wild26DyvX = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_x26DygD, hs_sat26DyvY);
        switch (hs_wild26DyvX.tag) {
        case 1:
            var hs_sat26DyvZ = new $hs.Thunk();
            hs_sat26DyvZ.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int32\x00");
            };
            return $hs.modules.GHCziWord.hs_predError.hscall(hs_sat26DyvZ);
        case 2:
            var hs_sat26Dyw1 = new $hs.Thunk();
            hs_sat26Dyw1.evaluateOnce = function () {
                var hs_sat26Dyw0 = new $hs.Thunk();
                hs_sat26Dyw0.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyw0);
            };
            return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_x26DygD, hs_sat26Dyw1);
        }
    };
    hs_zdcsucc325v9JX.evaluate = function (hs_x26DygK) {
        var hs_sat26Dyw3 = new $hs.Thunk();
        hs_sat26Dyw3.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
        };
        var hs_wild26Dyw2 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_x26DygK, hs_sat26Dyw3);
        switch (hs_wild26Dyw2.tag) {
        case 1:
            var hs_sat26Dyw4 = new $hs.Thunk();
            hs_sat26Dyw4.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Int32\x00");
            };
            return $hs.modules.GHCziWord.hs_succError.hscall(hs_sat26Dyw4);
        case 2:
            var hs_sat26Dyw6 = new $hs.Thunk();
            hs_sat26Dyw6.evaluateOnce = function () {
                var hs_sat26Dyw5 = new $hs.Thunk();
                hs_sat26Dyw5.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyw5);
            };
            return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_x26DygK, hs_sat26Dyw6);
        }
    };
    hs_zdctoRational325v9JZ.evaluate = function (hs_x26DygR) {
        var hs_sat26Dyw7 = new $hs.Thunk();
        hs_sat26Dyw7.evaluateOnce = function () {
            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
        };
        var hs_sat26Dyw8 = new $hs.Thunk();
        hs_sat26Dyw8.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_toInteger.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, hs_x26DygR);
        };
        return $hs.modules.GHCziReal.hs_zv.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, hs_sat26Dyw8, hs_sat26Dyw7);
    };
    hs_zdcquotRem325v9K1.evaluate = function (hs_x26DygW, hs_y26DygZ) {
        var hs_wild26Dyh6 = hs_x26DygW;
        if (hs_x26DygW.notEvaluated) {
            hs_wild26Dyh6 = hs_x26DygW.hscall();
        }
        var hs_xzh26Dyhe = hs_wild26Dyh6.data[0];
        var hs_wild126Dyh2 = hs_y26DygZ;
        if (hs_y26DygZ.notEvaluated) {
            hs_wild126Dyh2 = hs_y26DygZ.hscall();
        }
        var hs_yzh26Dyhf = hs_wild126Dyh2.data[0];
        var hs_sat26Dywb = new $hs.Thunk();
        hs_sat26Dywb.evaluateOnce = function () {
            var hs_sat26Dyw9 = new $hs.Thunk();
            hs_sat26Dyw9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyw9);
        };
        var hs_wild226Dywa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyh2, hs_sat26Dywb);
        switch (hs_wild226Dywa.tag) {
        case 1:
            var hs_sat26Dywf = new $hs.Thunk();
            hs_sat26Dywf.evaluateOnce = function () {
                var hs_sat26Dywe = new $hs.Thunk();
                hs_sat26Dywe.evaluateOnce = function () {
                    var hs_sat26Dywd = new $hs.Thunk();
                    hs_sat26Dywd.evaluateOnce = function () {
                        var hs_sat26Dywc = new $hs.Thunk();
                        hs_sat26Dywc.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dywc);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dywd);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyh2, hs_sat26Dywe);
            };
            var hs_sat26Dywj = new $hs.Thunk();
            hs_sat26Dywj.evaluateOnce = function () {
                var hs_sat26Dywg = new $hs.Thunk();
                hs_sat26Dywg.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild26Dyh6, hs_sat26Dywg);
            };
            var hs_wild326Dywi = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dywj, hs_sat26Dywf);
            switch (hs_wild326Dywi.tag) {
            case 1:
                var hs_sat26Dywl = new $hs.Thunk();
                hs_sat26Dywl.evaluateOnce = function () {
                    var hs_wild426Dyhl = hs_xzh26Dyhe % hs_yzh26Dyhf;
                    var hs_sat26Dywh = hs_wild426Dyhl;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dywh];
                    return $res;
                };
                var hs_sat26Dywm = new $hs.Thunk();
                hs_sat26Dywm.evaluateOnce = function () {
                    var hs_wild426Dyhh = hs_xzh26Dyhe / hs_yzh26Dyhf & ~0;
                    var hs_sat26Dywk = hs_wild426Dyhh;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dywk];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dywm, hs_sat26Dywl];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcmod325v9K3.evaluate = function (hs_x26Dyhq, hs_y26Dyht) {
        var hs_wild26DyhA = hs_x26Dyhq;
        if (hs_x26Dyhq.notEvaluated) {
            hs_wild26DyhA = hs_x26Dyhq.hscall();
        }
        var hs_xzh26DyhI = hs_wild26DyhA.data[0];
        var hs_wild126Dyhw = hs_y26Dyht;
        if (hs_y26Dyht.notEvaluated) {
            hs_wild126Dyhw = hs_y26Dyht.hscall();
        }
        var hs_yzh26DyhJ = hs_wild126Dyhw.data[0];
        var hs_sat26Dywp = new $hs.Thunk();
        hs_sat26Dywp.evaluateOnce = function () {
            var hs_sat26Dywn = new $hs.Thunk();
            hs_sat26Dywn.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dywn);
        };
        var hs_wild226Dywo = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyhw, hs_sat26Dywp);
        switch (hs_wild226Dywo.tag) {
        case 1:
            var hs_sat26Dywt = new $hs.Thunk();
            hs_sat26Dywt.evaluateOnce = function () {
                var hs_sat26Dyws = new $hs.Thunk();
                hs_sat26Dyws.evaluateOnce = function () {
                    var hs_sat26Dywr = new $hs.Thunk();
                    hs_sat26Dywr.evaluateOnce = function () {
                        var hs_sat26Dywq = new $hs.Thunk();
                        hs_sat26Dywq.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dywq);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dywr);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyhw, hs_sat26Dyws);
            };
            var hs_sat26Dywx = new $hs.Thunk();
            hs_sat26Dywx.evaluateOnce = function () {
                var hs_sat26Dywu = new $hs.Thunk();
                hs_sat26Dywu.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild26DyhA, hs_sat26Dywu);
            };
            var hs_wild326Dyww = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dywx, hs_sat26Dywt);
            switch (hs_wild326Dyww.tag) {
            case 1:
                var hs_wild426DyhL = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_xzh26DyhI, hs_yzh26DyhJ);
                var hs_sat26Dywv = hs_wild426DyhL;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dywv];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcdiv325v9K5.evaluate = function (hs_x26DyhP, hs_y26DyhS) {
        var hs_wild26DyhZ = hs_x26DyhP;
        if (hs_x26DyhP.notEvaluated) {
            hs_wild26DyhZ = hs_x26DyhP.hscall();
        }
        var hs_xzh26Dyi7 = hs_wild26DyhZ.data[0];
        var hs_wild126DyhV = hs_y26DyhS;
        if (hs_y26DyhS.notEvaluated) {
            hs_wild126DyhV = hs_y26DyhS.hscall();
        }
        var hs_yzh26Dyi8 = hs_wild126DyhV.data[0];
        var hs_sat26DywA = new $hs.Thunk();
        hs_sat26DywA.evaluateOnce = function () {
            var hs_sat26Dywy = new $hs.Thunk();
            hs_sat26Dywy.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dywy);
        };
        var hs_wild226Dywz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126DyhV, hs_sat26DywA);
        switch (hs_wild226Dywz.tag) {
        case 1:
            var hs_sat26DywE = new $hs.Thunk();
            hs_sat26DywE.evaluateOnce = function () {
                var hs_sat26DywD = new $hs.Thunk();
                hs_sat26DywD.evaluateOnce = function () {
                    var hs_sat26DywC = new $hs.Thunk();
                    hs_sat26DywC.evaluateOnce = function () {
                        var hs_sat26DywB = new $hs.Thunk();
                        hs_sat26DywB.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywB);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywC);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126DyhV, hs_sat26DywD);
            };
            var hs_sat26DywI = new $hs.Thunk();
            hs_sat26DywI.evaluateOnce = function () {
                var hs_sat26DywF = new $hs.Thunk();
                hs_sat26DywF.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild26DyhZ, hs_sat26DywF);
            };
            var hs_wild326DywH = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DywI, hs_sat26DywE);
            switch (hs_wild326DywH.tag) {
            case 1:
                var hs_wild426Dyia = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_xzh26Dyi7, hs_yzh26Dyi8);
                var hs_sat26DywG = hs_wild426Dyia;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DywG];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcrem325v9K7.evaluate = function (hs_x26Dyie, hs_y26Dyih) {
        var hs_wild26Dyio = hs_x26Dyie;
        if (hs_x26Dyie.notEvaluated) {
            hs_wild26Dyio = hs_x26Dyie.hscall();
        }
        var hs_xzh26Dyiw = hs_wild26Dyio.data[0];
        var hs_wild126Dyik = hs_y26Dyih;
        if (hs_y26Dyih.notEvaluated) {
            hs_wild126Dyik = hs_y26Dyih.hscall();
        }
        var hs_yzh26Dyix = hs_wild126Dyik.data[0];
        var hs_sat26DywL = new $hs.Thunk();
        hs_sat26DywL.evaluateOnce = function () {
            var hs_sat26DywJ = new $hs.Thunk();
            hs_sat26DywJ.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywJ);
        };
        var hs_wild226DywK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyik, hs_sat26DywL);
        switch (hs_wild226DywK.tag) {
        case 1:
            var hs_sat26DywP = new $hs.Thunk();
            hs_sat26DywP.evaluateOnce = function () {
                var hs_sat26DywO = new $hs.Thunk();
                hs_sat26DywO.evaluateOnce = function () {
                    var hs_sat26DywN = new $hs.Thunk();
                    hs_sat26DywN.evaluateOnce = function () {
                        var hs_sat26DywM = new $hs.Thunk();
                        hs_sat26DywM.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywM);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywN);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyik, hs_sat26DywO);
            };
            var hs_sat26DywT = new $hs.Thunk();
            hs_sat26DywT.evaluateOnce = function () {
                var hs_sat26DywQ = new $hs.Thunk();
                hs_sat26DywQ.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild26Dyio, hs_sat26DywQ);
            };
            var hs_wild326DywS = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DywT, hs_sat26DywP);
            switch (hs_wild326DywS.tag) {
            case 1:
                var hs_wild426Dyiz = hs_xzh26Dyiw % hs_yzh26Dyix;
                var hs_sat26DywR = hs_wild426Dyiz;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26DywR];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcquot325v9K9.evaluate = function (hs_x26DyiD, hs_y26DyiG) {
        var hs_wild26DyiN = hs_x26DyiD;
        if (hs_x26DyiD.notEvaluated) {
            hs_wild26DyiN = hs_x26DyiD.hscall();
        }
        var hs_xzh26DyiV = hs_wild26DyiN.data[0];
        var hs_wild126DyiJ = hs_y26DyiG;
        if (hs_y26DyiG.notEvaluated) {
            hs_wild126DyiJ = hs_y26DyiG.hscall();
        }
        var hs_yzh26DyiW = hs_wild126DyiJ.data[0];
        var hs_sat26DywW = new $hs.Thunk();
        hs_sat26DywW.evaluateOnce = function () {
            var hs_sat26DywU = new $hs.Thunk();
            hs_sat26DywU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywU);
        };
        var hs_wild226DywV = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126DyiJ, hs_sat26DywW);
        switch (hs_wild226DywV.tag) {
        case 1:
            var hs_sat26Dyx0 = new $hs.Thunk();
            hs_sat26Dyx0.evaluateOnce = function () {
                var hs_sat26DywZ = new $hs.Thunk();
                hs_sat26DywZ.evaluateOnce = function () {
                    var hs_sat26DywY = new $hs.Thunk();
                    hs_sat26DywY.evaluateOnce = function () {
                        var hs_sat26DywX = new $hs.Thunk();
                        hs_sat26DywX.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywX);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DywY);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126DyiJ, hs_sat26DywZ);
            };
            var hs_sat26Dyx4 = new $hs.Thunk();
            hs_sat26Dyx4.evaluateOnce = function () {
                var hs_sat26Dyx1 = new $hs.Thunk();
                hs_sat26Dyx1.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild26DyiN, hs_sat26Dyx1);
            };
            var hs_wild326Dyx3 = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyx4, hs_sat26Dyx0);
            switch (hs_wild326Dyx3.tag) {
            case 1:
                var hs_wild426DyiY = hs_xzh26DyiV / hs_yzh26DyiW & ~0;
                var hs_sat26Dyx2 = hs_wild426DyiY;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyx2];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    hs_zdcshowsPrec325v9Kb.evaluate = function (hs_p26Dyj2, hs_x26Dyj3) {
        var hs_sat26Dyx5 = new $hs.Thunk();
        hs_sat26Dyx5.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_x26Dyj3);
        };
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_p26Dyj2, hs_sat26Dyx5);
    };
    hs_zdcsignum325v9Kd.evaluate = function (hs_x26Dyj6) {
        var hs_sat26Dyx8 = new $hs.Thunk();
        hs_sat26Dyx8.evaluateOnce = function () {
            var hs_sat26Dyx6 = new $hs.Thunk();
            hs_sat26Dyx6.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyx6);
        };
        var hs_wild26Dyx7 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_x26Dyj6, hs_sat26Dyx8);
        switch (hs_wild26Dyx7.tag) {
        case 1:
            var hs_sat26Dyxb = new $hs.Thunk();
            hs_sat26Dyxb.evaluateOnce = function () {
                var hs_sat26Dyx9 = new $hs.Thunk();
                hs_sat26Dyx9.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyx9);
            };
            var hs_wild126Dyxa = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_x26Dyj6, hs_sat26Dyxb);
            switch (hs_wild126Dyxa.tag) {
            case 1:
                var hs_sat26Dyxd = new $hs.Thunk();
                hs_sat26Dyxd.evaluateOnce = function () {
                    var hs_sat26Dyxc = new $hs.Thunk();
                    hs_sat26Dyxc.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxc);
                };
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxd);
            case 2:
                var hs_sat26Dyxe = new $hs.Thunk();
                hs_sat26Dyxe.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxe);
            }
        case 2:
            var hs_sat26Dyxf = new $hs.Thunk();
            hs_sat26Dyxf.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxf);
        }
    };
    hs_zdcabs325v9Kf.evaluate = function (hs_x26Dyji) {
        var hs_sat26Dyxi = new $hs.Thunk();
        hs_sat26Dyxi.evaluateOnce = function () {
            var hs_sat26Dyxg = new $hs.Thunk();
            hs_sat26Dyxg.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxg);
        };
        var hs_wild26Dyxh = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziInt.hs_zdfOrdInt32, hs_x26Dyji, hs_sat26Dyxi);
        switch (hs_wild26Dyxh.tag) {
        case 1:
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_x26Dyji);
        case 2:
            if (hs_x26Dyji.notEvaluated) {
                return hs_x26Dyji.hscall();
            } else {
                return hs_x26Dyji;
            }
        }
    };
    hs_zdcmaxBound325v9Kh.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DyvS);
    };
    hs_zdcminBound325v9Kj.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DyvT);
    };
    hs_zdcdivMod325v9Kl.evaluate = function (hs_x26Dyjt, hs_y26Dyjw) {
        var hs_wild26DyjD = hs_x26Dyjt;
        if (hs_x26Dyjt.notEvaluated) {
            hs_wild26DyjD = hs_x26Dyjt.hscall();
        }
        var hs_xzh26DyjL = hs_wild26DyjD.data[0];
        var hs_wild126Dyjz = hs_y26Dyjw;
        if (hs_y26Dyjw.notEvaluated) {
            hs_wild126Dyjz = hs_y26Dyjw.hscall();
        }
        var hs_yzh26DyjM = hs_wild126Dyjz.data[0];
        var hs_sat26Dyxl = new $hs.Thunk();
        hs_sat26Dyxl.evaluateOnce = function () {
            var hs_sat26Dyxj = new $hs.Thunk();
            hs_sat26Dyxj.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxj);
        };
        var hs_wild226Dyxk = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyjz, hs_sat26Dyxl);
        switch (hs_wild226Dyxk.tag) {
        case 1:
            var hs_sat26Dyxp = new $hs.Thunk();
            hs_sat26Dyxp.evaluateOnce = function () {
                var hs_sat26Dyxo = new $hs.Thunk();
                hs_sat26Dyxo.evaluateOnce = function () {
                    var hs_sat26Dyxn = new $hs.Thunk();
                    hs_sat26Dyxn.evaluateOnce = function () {
                        var hs_sat26Dyxm = new $hs.Thunk();
                        hs_sat26Dyxm.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxm);
                    };
                    return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26Dyxn);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild126Dyjz, hs_sat26Dyxo);
            };
            var hs_sat26Dyxt = new $hs.Thunk();
            hs_sat26Dyxt.evaluateOnce = function () {
                var hs_sat26Dyxq = new $hs.Thunk();
                hs_sat26Dyxq.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_wild26DyjD, hs_sat26Dyxq);
            };
            var hs_wild326Dyxs = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26Dyxt, hs_sat26Dyxp);
            switch (hs_wild326Dyxs.tag) {
            case 1:
                var hs_sat26Dyxv = new $hs.Thunk();
                hs_sat26Dyxv.evaluateOnce = function () {
                    var hs_wild426DyjS = $hs.modules.GHCziBase.hs_modIntzh.hscall(hs_xzh26DyjL, hs_yzh26DyjM);
                    var hs_sat26Dyxr = hs_wild426DyjS;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyxr];
                    return $res;
                };
                var hs_sat26Dyxw = new $hs.Thunk();
                hs_sat26Dyxw.evaluateOnce = function () {
                    var hs_wild426DyjO = $hs.modules.GHCziBase.hs_divIntzh.hscall(hs_xzh26DyjL, hs_yzh26DyjM);
                    var hs_sat26Dyxu = hs_wild426DyjO;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26Dyxu];
                    return $res;
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dyxw, hs_sat26Dyxv];
                return $res;
            case 2:
                if ($hs.modules.GHCziErr.hs_overflowError.notEvaluated) {
                    return $hs.modules.GHCziErr.hs_overflowError.hscall();
                } else {
                    return $hs.modules.GHCziErr.hs_overflowError;
                }
            }
        case 2:
            if ($hs.modules.GHCziErr.hs_divZZeroError.notEvaluated) {
                return $hs.modules.GHCziErr.hs_divZZeroError.hscall();
            } else {
                return $hs.modules.GHCziErr.hs_divZZeroError;
            }
        }
    };
    this.hs_zdfBitsInt32.data = [$hs.modules.GHCziInt.hs_zdfNumInt32, hs_zdczizazi225v9jy, hs_zdczizbzi225v9ji, hs_zdcxor225v9j2, hs_zdccomplement225v9iR, hs_zdcshift225v9iy, hs_zdcrotate225v9i7, hs_zdcbit325v9NW, hs_zdcsetBit325v9NU, hs_zdcclearBit325v9NS, hs_zdccomplementBit325v9NQ, hs_zdctestBit325v9NO, hs_zdcbitSizze225v9i3, hs_zdcisSigned225v9hZ, hs_zdcshiftL325v9NM, hs_zdcshiftR325v9NK, hs_zdcrotateL325v9NI, hs_zdcrotateR325v9NG];
    hs_zdcrotateR325v9NG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcrotateL325v9NI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmrotateL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftR325v9NK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftR.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcshiftL325v9NM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmshiftL.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdctestBit325v9NO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmtestBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdccomplementBit325v9NQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmcomplementBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcclearBit325v9NS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmclearBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcsetBit325v9NU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmsetBit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcbit325v9NW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zddmbit.hscall($hs.modules.GHCziInt.hs_zdfBitsInt32);
    };
    hs_zdcreadsPrec325v9NY.evaluate = function (hs_p26Dyky, hs_s26Dykz) {
        var hs_ds26Dykw = new $hs.Func(1);
        hs_ds26Dykw.evaluate = function (hs_ds126Dykj) {
            var hs_ds226Dyxx = hs_ds126Dykj;
            if (hs_ds126Dykj.notEvaluated) {
                hs_ds226Dyxx = hs_ds126Dykj.hscall();
            }
            switch (hs_ds226Dyxx.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var hs_ds326Dykn = hs_ds226Dyxx.data[0];
                var hs_ds426Dykv = hs_ds226Dyxx.data[1];
                var hs_wild26Dyxy = hs_ds326Dykn;
                if (hs_ds326Dykn.notEvaluated) {
                    hs_wild26Dyxy = hs_ds326Dykn.hscall();
                }
                var hs_x26Dykr = hs_wild26Dyxy.data[0];
                var hs_r26Dykt = hs_wild26Dyxy.data[1];
                var hs_sat26Dyxz = new $hs.Thunk();
                hs_sat26Dyxz.evaluateOnce = function () {
                    return hs_ds26Dykw.hscall(hs_ds426Dykv);
                };
                var hs_sat26DyxA = new $hs.Thunk();
                hs_sat26DyxA.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt32, hs_x26Dykr);
                };
                var hs_sat26DyxB = new $hs.Data(1);
                hs_sat26DyxB.data = [hs_sat26DyxA, hs_r26Dykt];
                var $res = new $hs.Data(2);
                $res.data = [hs_sat26DyxB, hs_sat26Dyxz];
                return $res;
            }
        };
        var hs_sat26DyxC = new $hs.Thunk();
        hs_sat26DyxC.evaluateOnce = function () {
            return $hs.modules.GHCziRead.hs_readsPrec.hscall($hs.modules.GHCziRead.hs_zdfReadInt, hs_p26Dyky, hs_s26Dykz);
        };
        return hs_ds26Dykw.hscall(hs_sat26DyxC);
    };
    this.hs_zdfReadInt32.data = [hs_zdcreadsPrec325v9NY, hs_zdcreadList325v9Oq, hs_zdcreadPrec325v9Oo, hs_zdcreadListPrec325v9Om];
    hs_zdcreadListPrec325v9Om.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadListPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadPrec325v9Oo.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadPrec.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcreadList325v9Oq.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadList.hscall($hs.modules.GHCziInt.hs_zdfReadInt32);
    };
    hs_zdcrange325v9Os.evaluate = function (hs_ds26DykK) {
        var hs_wild26DyxD = hs_ds26DykK;
        if (hs_ds26DykK.notEvaluated) {
            hs_wild26DyxD = hs_ds26DykK.hscall();
        }
        var hs_m26DykO = hs_wild26DyxD.data[0];
        var hs_n26DykP = hs_wild26DyxD.data[1];
        return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziInt.hs_zdfEnumInt32, hs_m26DykO, hs_n26DykP);
    };
    hs_zdcunsafeIndex325v9OB.evaluate = function (hs_ds26DykU, hs_i26DykY) {
        var hs_wild26DyxE = hs_ds26DykU;
        if (hs_ds26DykU.notEvaluated) {
            hs_wild26DyxE = hs_ds26DykU.hscall();
        }
        var hs_m26Dyl0 = hs_wild26DyxE.data[0];
        var hs_sat26DyxG = new $hs.Thunk();
        hs_sat26DyxG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_m26Dyl0);
        };
        var hs_sat26DyxH = new $hs.Thunk();
        hs_sat26DyxH.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DykY);
        };
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DyxH, hs_sat26DyxG);
    };
    this.hs_zdfIxInt32.data = [$hs.modules.GHCziInt.hs_zdfOrdInt32, hs_zdcrange325v9Os, hs_zdcindex325v9OR, hs_zdcunsafeIndex325v9OB, hs_zdcinRange325v9Jw, hs_zdcrangeSizze325v9OP, hs_zdcunsafeRangeSizze325v9ON];
    hs_zdcunsafeRangeSizze325v9ON.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt32);
    };
    hs_zdcrangeSizze325v9OP.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziInt.hs_zdfIxInt32);
    };
    hs_zdcindex325v9OR.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziInt.hs_zdfIxInt32);
    };
    this.hs_I8zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_I16zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_I32zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_I64zh.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
};
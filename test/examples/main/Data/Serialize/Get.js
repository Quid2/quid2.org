
$hs.modules.DataziSerializzeziGet = new $hs.Module();
$hs.modules.DataziSerializzeziGet.dependencies = ["Data.Sequence", "Data.Tree", "Data.IntMap", "Data.IntSet", "Data.Map", "Data.Set", "Data.ByteString", "Data.ByteString.Unsafe", "Data.ByteString.Internal", "Data.ByteString.Lazy", "Data.Array.Base", "GHC.IntWord64", "GHC.Tuple", "GHC.Types", "GHC.Unit", "GHC.CString", "GHC.Integer", "Data.List", "Prelude", "GHC.Base", "GHC.Classes", "GHC.Err", "GHC.Int", "GHC.List", "GHC.Num", "GHC.Ptr", "GHC.Real", "GHC.Show", "GHC.Word", "Control.Applicative", "Control.Monad", "Data.Bits", "Data.Either", "Data.Maybe", "Foreign.Storable", "Foreign.ForeignPtr.Imp"];
$hs.modules.DataziSerializzeziGet.initBeforeDependencies = function () {
    this.hs_label = new $hs.Func(6);
    this.hs_runGet = new $hs.Func(2);
    this.hs_runGetPartial = new $hs.Func(2);
    this.hs_runGetLazzyState = new $hs.Func(2);
    this.hs_runGetLazzy = new $hs.Func(2);
    this.hs_runGetState = new $hs.Func(3);
    this.hs_zdfShowResult = new $hs.Func(1);
    this.hs_zdfFunctorResult = new $hs.Data(1);
    this.hs_zdfFunctorGet = new $hs.Data(1);
    this.hs_zdfMonadGet = new $hs.Data(1);
    this.hs_zdfApplicativeGet = new $hs.Data(1);
    this.hs_lookAheadM = new $hs.Func(1);
    this.hs_lookAheadE = new $hs.Func(1);
    this.hs_lookAhead = new $hs.Func(1);
    this.hs_getTwoOf = new $hs.Func(2);
    this.hs_zdfMonadPlusGet = new $hs.Data(1);
    this.hs_zdfAlternativeGet = new $hs.Data(1);
    this.hs_zdfEqMore = new $hs.Data(1);
    this.hs_ensure = new $hs.Func(1);
    this.hs_isolate = new $hs.Func(2);
    this.hs_isEmpty = new $hs.Thunk();
    this.hs_remaining = new $hs.Thunk();
    this.hs_uncheckedLookAhead = new $hs.Func(1);
    this.hs_uncheckedSkip = new $hs.Func(1);
    this.hs_getBytes = new $hs.Func(1);
    this.hs_getWord64le = new $hs.Thunk();
    this.hs_getWord64be = new $hs.Thunk();
    this.hs_getSeqOf = new $hs.Func(1);
    this.hs_getListOf = new $hs.Func(1);
    this.hs_getTreeOf = new $hs.Func(1);
    this.hs_getSetOf = new $hs.Func(2);
    this.hs_getMapOf = new $hs.Func(3);
    this.hs_getIntSetOf = new $hs.Func(1);
    this.hs_getIntMapOf = new $hs.Func(2);
    this.hs_getIArrayOf = new $hs.Func(4);
    this.hs_getWord32le = new $hs.Thunk();
    this.hs_getWord32be = new $hs.Thunk();
    this.hs_getWord16le = new $hs.Thunk();
    this.hs_getWord16be = new $hs.Thunk();
    this.hs_getByteString = new $hs.Func(1);
    this.hs_getLazzyByteString = new $hs.Func(1);
    this.hs_getWordhost = new $hs.Thunk();
    this.hs_getWord8 = new $hs.Thunk();
    this.hs_getMaybeOf = new $hs.Func(1);
    this.hs_getEitherOf = new $hs.Func(2);
    this.hs_getWord64host = new $hs.Thunk();
    this.hs_getWord32host = new $hs.Thunk();
    this.hs_getWord16host = new $hs.Thunk();
    this.hs_skip = new $hs.Func(1);
    this.hs_Complete = new $hs.Data(1);
    this.hs_Incomplete = new $hs.Data(2);
    this.hs_Fail = new $hs.Func(1);
    this.hs_Partial = new $hs.Func(1);
    this.hs_Done = new $hs.Func(2);
    this.hs_Get = new $hs.Func(1);
    this.hs_label.notEvaluated = true;
    this.hs_label.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_runGet.notEvaluated = true;
    this.hs_runGet.evaluate = function (hs_eta26zyBi, hs_eta126zyBh) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta26zyBi, hs_eta126zyBh);
    };
    this.hs_runGetPartial.notEvaluated = true;
    this.hs_runGetPartial.evaluate = function (hs_eta26zyBu, hs_eta126zyBt) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta26zyBu, hs_eta126zyBt);
    };
    this.hs_runGetLazzyState.notEvaluated = true;
    this.hs_runGetLazzyState.evaluate = function (hs_eta26zyBV, hs_eta126zyBX) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta26zyBV, hs_eta126zyBX);
    };
    this.hs_runGetLazzy.notEvaluated = true;
    this.hs_runGetLazzy.evaluate = function (hs_eta26zyCl, hs_eta126zyCn) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta26zyCl, hs_eta126zyCn);
    };
    this.hs_runGetState.notEvaluated = true;
    this.hs_runGetState.evaluate = function (hs_eta26zyCv, hs_eta126zyCt, hs_eta226zyCs) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta26zyCv, hs_eta126zyCt, hs_eta226zyCs);
    };
    this.hs_zdfShowResult.notEvaluated = true;
    this.hs_zdfShowResult.evaluate = function (hs_zddShow26zyD8) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_zddShow26zyD8);
    };
    this.hs_zdfFunctorResult.notEvaluated = true;
    this.hs_zdfFunctorResult.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_zdfFunctorGet.notEvaluated = true;
    this.hs_zdfFunctorGet.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_zdfMonadGet.notEvaluated = true;
    this.hs_zdfMonadGet.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_zdfApplicativeGet.notEvaluated = true;
    this.hs_zdfApplicativeGet.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_lookAheadM.notEvaluated = true;
    this.hs_lookAheadM.evaluate = function (hs_gma26zyED) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_gma26zyED);
    };
    this.hs_lookAheadE.notEvaluated = true;
    this.hs_lookAheadE.evaluate = function (hs_gea26zyEW) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_gea26zyEW);
    };
    this.hs_lookAhead.notEvaluated = true;
    this.hs_lookAhead.evaluate = function (hs_ga26zyFi) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_ga26zyFi);
    };
    this.hs_getTwoOf.notEvaluated = true;
    this.hs_getTwoOf.evaluate = function (hs_ma26zyFz, hs_mb26zyFA) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_ma26zyFz, hs_mb26zyFA);
    };
    this.hs_zdfMonadPlusGet.notEvaluated = true;
    this.hs_zdfMonadPlusGet.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_zdfAlternativeGet.notEvaluated = true;
    this.hs_zdfAlternativeGet.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_zdfEqMore.notEvaluated = true;
    this.hs_zdfEqMore.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_ensure.notEvaluated = true;
    this.hs_ensure.evaluate = function (hs_n26zyGS) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyGS);
    };
    this.hs_isolate.notEvaluated = true;
    this.hs_isolate.evaluate = function (hs_n26zyHd, hs_m26zyI0) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyHd, hs_m26zyI0);
    };
    this.hs_isEmpty.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_remaining.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_uncheckedLookAhead.notEvaluated = true;
    this.hs_uncheckedLookAhead.evaluate = function (hs_n26zyIq) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyIq);
    };
    this.hs_uncheckedSkip.notEvaluated = true;
    this.hs_uncheckedSkip.evaluate = function (hs_n26zyIx) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyIx);
    };
    this.hs_getBytes.notEvaluated = true;
    this.hs_getBytes.evaluate = function (hs_n26zyIL) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyIL);
    };
    this.hs_getWord64le.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getWord64be.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getSeqOf.notEvaluated = true;
    this.hs_getSeqOf.evaluate = function (hs_m26zyLS) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_m26zyLS);
    };
    this.hs_getListOf.notEvaluated = true;
    this.hs_getListOf.evaluate = function (hs_m26zyMf) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_m26zyMf);
    };
    this.hs_getTreeOf.notEvaluated = true;
    this.hs_getTreeOf.evaluate = function (hs_m26zyMu) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_m26zyMu);
    };
    this.hs_getSetOf.notEvaluated = true;
    this.hs_getSetOf.evaluate = function (hs_zddOrd26zyMB, hs_m26zyMz) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_zddOrd26zyMB, hs_m26zyMz);
    };
    this.hs_getMapOf.notEvaluated = true;
    this.hs_getMapOf.evaluate = function (hs_zddOrd26zyMJ, hs_k26zyMF, hs_m26zyMG) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_zddOrd26zyMJ, hs_k26zyMF, hs_m26zyMG);
    };
    this.hs_getIntSetOf.notEvaluated = true;
    this.hs_getIntSetOf.evaluate = function (hs_m26zyML) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_m26zyML);
    };
    this.hs_getIntMapOf.notEvaluated = true;
    this.hs_getIntMapOf.evaluate = function (hs_i26zyMP, hs_m26zyMQ) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_i26zyMP, hs_m26zyMQ);
    };
    this.hs_getIArrayOf.notEvaluated = true;
    this.hs_getIArrayOf.evaluate = function (hs_zddIx26zyMY, hs_zddIArray26zyMX, hs_ix26zyN0, hs_e26zyN2) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_zddIx26zyMY, hs_zddIArray26zyMX, hs_ix26zyN0, hs_e26zyN2);
    };
    this.hs_getWord32le.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getWord32be.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getWord16le.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getWord16be.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getByteString.notEvaluated = true;
    this.hs_getByteString.evaluate = function (hs_n26zyOH) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyOH);
    };
    this.hs_getLazzyByteString.notEvaluated = true;
    this.hs_getLazzyByteString.evaluate = function (hs_n26zyOT) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyOT);
    };
    this.hs_getWordhost.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getWord8.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getMaybeOf.notEvaluated = true;
    this.hs_getMaybeOf.evaluate = function (hs_m26zyPq) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_m26zyPq);
    };
    this.hs_getEitherOf.notEvaluated = true;
    this.hs_getEitherOf.evaluate = function (hs_ma26zyPA, hs_mb26zyPz) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_ma26zyPA, hs_mb26zyPz);
    };
    this.hs_getWord64host.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getWord32host.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_getWord16host.evaluateOnce = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_skip.notEvaluated = true;
    this.hs_skip.evaluate = function (hs_n26zyPG) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_n26zyPG);
    };
    this.hs_Complete.notEvaluated = true;
    this.hs_Complete.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_Incomplete.notEvaluated = true;
    this.hs_Incomplete.evaluate = function () {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this;
    };
    this.hs_Fail.notEvaluated = true;
    this.hs_Fail.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Partial.notEvaluated = true;
    this.hs_Partial.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Done.notEvaluated = true;
    this.hs_Done.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_Get.notEvaluated = true;
    this.hs_Get.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.DataziSerializzeziGet.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
};
$hs.modules.DataziSerializzeziGet.initAfterDependencies = function () {
    this.hs_label.notEvaluated = false;
    this.hs_runGet.notEvaluated = false;
    this.hs_runGetPartial.notEvaluated = false;
    this.hs_runGetLazzyState.notEvaluated = false;
    this.hs_runGetLazzy.notEvaluated = false;
    this.hs_runGetState.notEvaluated = false;
    this.hs_zdfShowResult.notEvaluated = false;
    this.hs_zdfFunctorResult.notEvaluated = false;
    this.hs_zdfFunctorResult.evaluate = function () {
        return this;
    };
    this.hs_zdfFunctorGet.notEvaluated = false;
    this.hs_zdfFunctorGet.evaluate = function () {
        return this;
    };
    this.hs_zdfMonadGet.notEvaluated = false;
    this.hs_zdfMonadGet.evaluate = function () {
        return this;
    };
    this.hs_zdfApplicativeGet.notEvaluated = false;
    this.hs_zdfApplicativeGet.evaluate = function () {
        return this;
    };
    this.hs_lookAheadM.notEvaluated = false;
    this.hs_lookAheadE.notEvaluated = false;
    this.hs_lookAhead.notEvaluated = false;
    this.hs_getTwoOf.notEvaluated = false;
    this.hs_zdfMonadPlusGet.notEvaluated = false;
    this.hs_zdfMonadPlusGet.evaluate = function () {
        return this;
    };
    this.hs_zdfAlternativeGet.notEvaluated = false;
    this.hs_zdfAlternativeGet.evaluate = function () {
        return this;
    };
    this.hs_zdfEqMore.notEvaluated = false;
    this.hs_zdfEqMore.evaluate = function () {
        return this;
    };
    this.hs_ensure.notEvaluated = false;
    this.hs_isolate.notEvaluated = false;
    this.hs_uncheckedLookAhead.notEvaluated = false;
    this.hs_uncheckedSkip.notEvaluated = false;
    this.hs_getBytes.notEvaluated = false;
    this.hs_getSeqOf.notEvaluated = false;
    this.hs_getListOf.notEvaluated = false;
    this.hs_getTreeOf.notEvaluated = false;
    this.hs_getSetOf.notEvaluated = false;
    this.hs_getMapOf.notEvaluated = false;
    this.hs_getIntSetOf.notEvaluated = false;
    this.hs_getIntMapOf.notEvaluated = false;
    this.hs_getIArrayOf.notEvaluated = false;
    this.hs_getByteString.notEvaluated = false;
    this.hs_getLazzyByteString.notEvaluated = false;
    this.hs_getMaybeOf.notEvaluated = false;
    this.hs_getEitherOf.notEvaluated = false;
    this.hs_skip.notEvaluated = false;
    this.hs_Complete.notEvaluated = false;
    this.hs_Complete.evaluate = function () {
        return this;
    };
    this.hs_Incomplete.notEvaluated = false;
    this.hs_Incomplete.evaluate = function () {
        return this;
    };
    this.hs_Fail.notEvaluated = false;
    this.hs_Partial.notEvaluated = false;
    this.hs_Done.notEvaluated = false;
    this.hs_Get.notEvaluated = false;
    var hs_failDesc25r9Me = new $hs.Func(1);
    var hs_finalK25r9Ma = new $hs.Func(3);
    var hs_a25ra4f = new $hs.Func(4);
    var hs_failK25r9Mb = new $hs.Func(2);
    var hs_unGet25r9M6 = new $hs.Func(1);
    var hs_a125ra4I = new $hs.Func(6);
    var hs_zdcshow25ra6q = new $hs.Func(1);
    var hs_zdcshowList25ra6P = new $hs.Func(1);
    var hs_zdcshowsPrec25ra6Q = new $hs.Func(1);
    var hs_zdczlzd25ra72 = new $hs.Thunk();
    var hs_zdcfmap25ra73 = new $hs.Func(2);
    var hs_a225ra7k = new $hs.Func(6);
    var hs_zdcfmap125ra7F = new $hs.Func(6);
    var hs_zdczlzd125ra7G = new $hs.Thunk();
    var hs_zdcempty25ra7H = new $hs.Thunk();
    var hs_a325ra7J = new $hs.Func(5);
    var hs_zdcreturn25ra7U = new $hs.Func(5);
    var hs_a425ra7V = new $hs.Func(6);
    var hs_zdczgzgze25ra8f = new $hs.Func(6);
    var hs_zdczgzg25ra8g = new $hs.Thunk();
    var hs_zdcpure25ra8h = new $hs.Thunk();
    var hs_zdczlztzg25ra8i = new $hs.Thunk();
    var hs_zdczlzt25ra8j = new $hs.Thunk();
    var hs_zdcztzg25ra8k = new $hs.Thunk();
    var hs_a525ra9l = new $hs.Func(6);
    var hs_zdcmplus25ra9C = new $hs.Func(6);
    var hs_zdcmzzero25ra9D = new $hs.Thunk();
    var hs_zdczlzbzg25ra9F = new $hs.Thunk();
    var hs_zdcmany25ra9G = new $hs.Thunk();
    var hs_zdcsome25ra9H = new $hs.Thunk();
    var hs_zdczeze25ra9I = new $hs.Func(2);
    var hs_zdczsze25ra9Q = new $hs.Func(2);
    var hs_sat26zyRR = new $hs.Func(4);
    var hs_sat26zyRS = new $hs.Func(1);
    var hs_demandInput25r9Md = new $hs.Thunk();
    var hs_ensureRec25r9Mc = new $hs.Func(1);
    var hs_sat26zyTs = new $hs.Func(1);
    var hs_sat26zyTu = new $hs.Thunk();
    var hs_sat26zyU8 = new $hs.Func(1);
    var hs_sat26zyUa = new $hs.Thunk();
    var hs_sat26zyV3 = new $hs.Func(1);
    var hs_sat26zyV5 = new $hs.Thunk();
    var hs_sat26zyVs = new $hs.Func(1);
    var hs_sat26zyVu = new $hs.Thunk();
    var hs_sat26zyVF = new $hs.Func(1);
    var hs_sat26zyVH = new $hs.Thunk();
    var hs_sat26zyVS = new $hs.Func(1);
    var hs_sat26zyVU = new $hs.Thunk();
    var hs_getPtr25r9Mf = new $hs.Func(2);
    var hs_sat26zyWd = new $hs.Thunk();
    var hs_sat26zyWe = new $hs.Thunk();
    var hs_sat26zyWn = new $hs.Thunk();
    var hs_sat26zyWo = new $hs.Thunk();
    var hs_sat26zyWp = new $hs.Thunk();
    hs_failDesc25r9Me.evaluate = function (hs_err26zyAd) {
        var hs_msg26zyAe = new $hs.Thunk();
        hs_msg26zyAe.evaluateOnce = function () {
            var hs_sat26zyQf = new $hs.Thunk();
            hs_sat26zyQf.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Failed reading: \x00");
            };
            return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zyQf, hs_err26zyAd);
        };
        var hs_sat26zyQe = new $hs.Func(4);
        hs_sat26zyQe.evaluate = function (hs_ds26zyAk, hs_ds126zyAl, hs_f26zyAj, hs_ds226zyAm) {
            return hs_f26zyAj.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_msg26zyAe);
        };
        if (hs_sat26zyQe.notEvaluated) {
            return hs_sat26zyQe.hscall();
        } else {
            return hs_sat26zyQe;
        }
    };
    hs_finalK25r9Ma.evaluate = function (hs_s26zyAs, hs_ds26zyAt, hs_a626zyAr) {
        var $res = new $hs.Data(3);
        $res.data = [hs_a626zyAr, hs_s26zyAs];
        return $res;
    };
    hs_a25ra4f.evaluate = function (hs_s026zyAA, hs_m026zyAB, hs_ds26zyAD, hs_k26zyAC) {
        return hs_k26zyAC.hscall(hs_s026zyAA, hs_m026zyAB, hs_s026zyAA);
    };
    hs_failK25r9Mb.evaluate = function (hs_ls26zyAH, hs_s26zyAG) {
        var hs_sat26zyQg = new $hs.Thunk();
        hs_sat26zyQg.evaluateOnce = function () {
            var hs_sat26zyQi = new $hs.Thunk();
            hs_sat26zyQi.evaluateOnce = function () {
                var hs_wild26zyAN = hs_ls26zyAH;
                if (hs_ls26zyAH.notEvaluated) {
                    hs_wild26zyAN = hs_ls26zyAH.hscall();
                }
                switch (hs_wild26zyAN.tag) {
                case 1:
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Empty call stack\x00");
                case 2:
                    var hs_sat26zyQn = new $hs.Thunk();
                    hs_sat26zyQn.evaluateOnce = function () {
                        var hs_sat26zyQp = new $hs.Data(1);
                        hs_sat26zyQp.data = ["\n"];
                        var hs_sat26zyQq = new $hs.Data(2);
                        hs_sat26zyQq.data = [hs_sat26zyQp, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26zyQo = new $hs.Thunk();
                        hs_sat26zyQo.evaluateOnce = function () {
                            var hs_sat26zyQr = new $hs.Thunk();
                            hs_sat26zyQr.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("\n\t\x00");
                            };
                            return $hs.modules.DataziList.hs_intercalate.hscall(hs_sat26zyQr, hs_wild26zyAN);
                        };
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zyQo, hs_sat26zyQq);
                    };
                    var hs_sat26zyQk = new $hs.Thunk();
                    hs_sat26zyQk.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("From:\t\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zyQk, hs_sat26zyQn);
                }
            };
            var hs_sat26zyQj = new $hs.Data(2);
            hs_sat26zyQj.data = [hs_sat26zyQi, $hs.modules.GHCziTypes.hs_ZMZN];
            var hs_sat26zyQh = new $hs.Data(2);
            hs_sat26zyQh.data = [hs_s26zyAG, hs_sat26zyQj];
            return $hs.modules.DataziList.hs_unlines.hscall(hs_sat26zyQh);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zyQg];
        return $res;
    };
    hs_unGet25r9M6.evaluate = function (hs_ds26zyAX) {
        if (hs_ds26zyAX.notEvaluated) {
            return hs_ds26zyAX.hscall();
        } else {
            return hs_ds26zyAX;
        }
    };
    hs_a125ra4I.evaluate = function (hs_l26zyB8, hs_m26zyBe, hs_s026zyB5, hs_m026zyB6, hs_f26zyBa, hs_k26zyBd) {
        var hs_sat26zyQs = new $hs.Func(1);
        hs_sat26zyQs.evaluate = function (hs_ls26zyB9) {
            var hs_sat26zyQt = new $hs.Data(2);
            hs_sat26zyQt.data = [hs_l26zyB8, hs_ls26zyB9];
            return hs_f26zyBa.hscall(hs_sat26zyQt);
        };
        return hs_m26zyBe.hscall(hs_s026zyB5, hs_m026zyB6, hs_sat26zyQs, hs_k26zyBd);
    };
    this.hs_label.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125ra4I.hscall(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_runGet.evaluate = function (hs_eta26zyBi, hs_eta126zyBh) {
        var hs_wild26zyQv = hs_eta26zyBi.hscall(hs_eta126zyBh, $hs.modules.DataziSerializzeziGet.hs_Complete, hs_failK25r9Mb, hs_finalK25r9Ma);
        switch (hs_wild26zyQv.tag) {
        case 1:
            var hs_i26zyBl = hs_wild26zyQv.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_i26zyBl];
            return $res;
        case 2:
            var hs_sat26zyQu = new $hs.Thunk();
            hs_sat26zyQu.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Failed reading: Internal error: unexpected Partial.\x00");
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zyQu];
            return $res;
        case 3:
            var hs_a626zyBq = hs_wild26zyQv.data[0];
            var $res = new $hs.Data(2);
            $res.data = [hs_a626zyBq];
            return $res;
        }
    };
    this.hs_runGetPartial.evaluate = function (hs_eta26zyBu, hs_eta126zyBt) {
        return hs_eta26zyBu.hscall(hs_eta126zyBt, $hs.modules.DataziSerializzeziGet.hs_Incomplete, hs_failK25r9Mb, hs_finalK25r9Ma);
    };
    this.hs_runGetLazzyState.evaluate = function (hs_eta26zyBV, hs_eta126zyBX) {
        var hs_loop26zyBN = new $hs.Func(2);
        hs_loop26zyBN.evaluate = function (hs_ds26zyBG, hs_ds126zyBA) {
            var hs_wild26zyQA = hs_ds126zyBA;
            if (hs_ds126zyBA.notEvaluated) {
                hs_wild26zyQA = hs_ds126zyBA.hscall();
            }
            switch (hs_wild26zyQA.tag) {
            case 1:
                var hs_sat26zyQF = new $hs.Thunk();
                hs_sat26zyQF.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Failed reading: Internal error: unexpected end of input\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zyQF];
                return $res;
            case 2:
                var hs_c26zyBF = hs_wild26zyQA.data[0];
                var hs_cs26zyBM = hs_wild26zyQA.data[1];
                var hs_wild126zyQB = hs_ds26zyBG.hscall(hs_c26zyBF);
                switch (hs_wild126zyQB.tag) {
                case 1:
                    var hs_str26zyBJ = hs_wild126zyQB.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_str26zyBJ];
                    return $res;
                case 2:
                    var hs_kzq26zyBL = hs_wild126zyQB.data[0];
                    return hs_loop26zyBN.hscall(hs_kzq26zyBL, hs_cs26zyBM);
                case 3:
                    var hs_r26zyBQ = hs_wild126zyQB.data[0];
                    var hs_czq26zyBR = hs_wild126zyQB.data[1];
                    var hs_sat26zyQD = new $hs.Thunk();
                    hs_sat26zyQD.evaluateOnce = function () {
                        var hs_sat26zyQE = new $hs.Data(2);
                        hs_sat26zyQE.data = [hs_czq26zyBR, hs_cs26zyBM];
                        return $hs.modules.DataziByteStringziLazzy.hs_fromChunks.hscall(hs_sat26zyQE);
                    };
                    var hs_sat26zyQC = new $hs.Data(1);
                    hs_sat26zyQC.data = [hs_r26zyBQ, hs_sat26zyQD];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_sat26zyQC];
                    return $res;
                }
            }
        };
        var hs_sat26zyQz = new $hs.Thunk();
        hs_sat26zyQz.evaluateOnce = function () {
            return $hs.modules.DataziByteStringziLazzy.hs_toChunks.hscall(hs_eta126zyBX);
        };
        var hs_sat26zyQy = new $hs.Func(1);
        hs_sat26zyQy.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziSerializzeziGet.hs_runGetPartial.hscall(hs_eta26zyBV, hs_eta1cW6l3);
        };
        return hs_loop26zyBN.hscall(hs_sat26zyQy, hs_sat26zyQz);
    };
    this.hs_runGetLazzy.evaluate = function (hs_eta26zyCl, hs_eta126zyCn) {
        var hs_loop26zyCh = new $hs.Func(2);
        hs_loop26zyCh.evaluate = function (hs_ds26zyCa, hs_ds126zyC4) {
            var hs_wild26zyQI = hs_ds126zyC4;
            if (hs_ds126zyC4.notEvaluated) {
                hs_wild26zyQI = hs_ds126zyC4.hscall();
            }
            switch (hs_wild26zyQI.tag) {
            case 1:
                var hs_sat26zyQL = new $hs.Thunk();
                hs_sat26zyQL.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Failed reading: Internal error: unexpected end of input\x00");
                };
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zyQL];
                return $res;
            case 2:
                var hs_c26zyC9 = hs_wild26zyQI.data[0];
                var hs_cs26zyCg = hs_wild26zyQI.data[1];
                var hs_wild126zyQJ = hs_ds26zyCa.hscall(hs_c26zyC9);
                switch (hs_wild126zyQJ.tag) {
                case 1:
                    var hs_str26zyCd = hs_wild126zyQJ.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_str26zyCd];
                    return $res;
                case 2:
                    var hs_kzq26zyCf = hs_wild126zyQJ.data[0];
                    return hs_loop26zyCh.hscall(hs_kzq26zyCf, hs_cs26zyCg);
                case 3:
                    var hs_r26zyCk = hs_wild126zyQJ.data[0];
                    var $res = new $hs.Data(2);
                    $res.data = [hs_r26zyCk];
                    return $res;
                }
            }
        };
        var hs_sat26zyQH = new $hs.Thunk();
        hs_sat26zyQH.evaluateOnce = function () {
            return $hs.modules.DataziByteStringziLazzy.hs_toChunks.hscall(hs_eta126zyCn);
        };
        var hs_sat26zyQG = new $hs.Func(1);
        hs_sat26zyQG.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.DataziSerializzeziGet.hs_runGetPartial.hscall(hs_eta26zyCl, hs_eta1cW6l3);
        };
        return hs_loop26zyCh.hscall(hs_sat26zyQG, hs_sat26zyQH);
    };
    this.hs_runGetState.evaluate = function (hs_eta26zyCv, hs_eta126zyCt, hs_eta226zyCs) {
        var hs_sat26zyQN = new $hs.Thunk();
        hs_sat26zyQN.evaluateOnce = function () {
            return $hs.modules.DataziByteString.hs_drop.hscall(hs_eta226zyCs, hs_eta126zyCt);
        };
        var hs_wild26zyQO = hs_eta26zyCv.hscall(hs_sat26zyQN, $hs.modules.DataziSerializzeziGet.hs_Complete, hs_failK25r9Mb, hs_finalK25r9Ma);
        switch (hs_wild26zyQO.tag) {
        case 1:
            var hs_i26zyCy = hs_wild26zyQO.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_i26zyCy];
            return $res;
        case 2:
            var hs_sat26zyQM = new $hs.Thunk();
            hs_sat26zyQM.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Failed reading: Internal error: unexpected Partial.\x00");
            };
            var $res = new $hs.Data(1);
            $res.data = [hs_sat26zyQM];
            return $res;
        case 3:
            var hs_a626zyCD = hs_wild26zyQO.data[0];
            var hs_bs26zyCE = hs_wild26zyQO.data[1];
            var hs_sat26zyQQ = new $hs.Data(1);
            hs_sat26zyQQ.data = [hs_a626zyCD, hs_bs26zyCE];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26zyQQ];
            return $res;
        }
    };
    hs_zdcshow25ra6q.evaluate = function (hs_zddShow26zyCV) {
        var hs_zddShow126zyCJ = new $hs.Thunk();
        hs_zddShow126zyCJ.evaluateOnce = function () {
            return $hs.modules.GHCziShow.hs_zdfShowZMZN.hscall($hs.modules.GHCziShow.hs_zdfShowChar);
        };
        var hs_sat26zyQR = new $hs.Func(1);
        hs_sat26zyQR.evaluate = function (hs_ds26zyCL) {
            var hs_wild26zyQT = hs_ds26zyCL;
            if (hs_ds26zyCL.notEvaluated) {
                hs_wild26zyQT = hs_ds26zyCL.hscall();
            }
            switch (hs_wild26zyQT.tag) {
            case 1:
                var hs_msg26zyCP = hs_wild26zyQT.data[0];
                var hs_sat26zyR2 = new $hs.Thunk();
                hs_sat26zyR2.evaluateOnce = function () {
                    return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow126zyCJ, hs_msg26zyCP);
                };
                var hs_sat26zyR1 = new $hs.Thunk();
                hs_sat26zyR1.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Fail \x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zyR1, hs_sat26zyR2);
            case 2:
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Partial _\x00");
            case 3:
                var hs_r26zyCW = hs_wild26zyQT.data[0];
                var hs_bs26zyD0 = hs_wild26zyQT.data[1];
                var hs_sat26zyQV = new $hs.Thunk();
                hs_sat26zyQV.evaluateOnce = function () {
                    var hs_sat26zyQX = new $hs.Thunk();
                    hs_sat26zyQX.evaluateOnce = function () {
                        var hs_sat26zyQZ = new $hs.Thunk();
                        hs_sat26zyQZ.evaluateOnce = function () {
                            return $hs.modules.GHCziShow.hs_show.hscall($hs.modules.DataziByteStringziInternal.hs_zdfShowByteString, hs_bs26zyD0);
                        };
                        var hs_sat26zyR0 = new $hs.Data(1);
                        hs_sat26zyR0.data = [" "];
                        var hs_sat26zyQY = new $hs.Data(2);
                        hs_sat26zyQY.data = [hs_sat26zyR0, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zyQY, hs_sat26zyQZ);
                    };
                    var hs_sat26zyQW = new $hs.Thunk();
                    hs_sat26zyQW.evaluateOnce = function () {
                        return $hs.modules.GHCziShow.hs_show.hscall(hs_zddShow26zyCV, hs_r26zyCW);
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zyQW, hs_sat26zyQX);
                };
                var hs_sat26zyQU = new $hs.Thunk();
                hs_sat26zyQU.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Done \x00");
                };
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26zyQU, hs_sat26zyQV);
            }
        };
        if (hs_sat26zyQR.notEvaluated) {
            return hs_sat26zyQR.hscall();
        } else {
            return hs_sat26zyQR;
        }
    };
    this.hs_zdfShowResult.evaluate = function (hs_zddShow26zyD8) {
        var hs_sat26zyR4 = new $hs.Thunk();
        hs_sat26zyR4.evaluateOnce = function () {
            return hs_zdcshowList25ra6P.hscall(hs_zddShow26zyD8);
        };
        var hs_sat26zyR5 = new $hs.Thunk();
        hs_sat26zyR5.evaluateOnce = function () {
            return hs_zdcshow25ra6q.hscall(hs_zddShow26zyD8);
        };
        var hs_sat26zyR3 = new $hs.Thunk();
        hs_sat26zyR3.evaluateOnce = function () {
            return hs_zdcshowsPrec25ra6Q.hscall(hs_zddShow26zyD8);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zyR3, hs_sat26zyR5, hs_sat26zyR4];
        return $res;
    };
    hs_zdcshowList25ra6P.evaluate = function (hs_zddShow26zyDd) {
        var hs_sat26zyR6 = new $hs.Thunk();
        hs_sat26zyR6.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziGet.hs_zdfShowResult.hscall(hs_zddShow26zyDd);
        };
        return $hs.modules.GHCziShow.hs_zddmshowList.hscall(hs_sat26zyR6);
    };
    hs_zdcshowsPrec25ra6Q.evaluate = function (hs_zddShow26zyDg) {
        var hs_sat26zyR7 = new $hs.Thunk();
        hs_sat26zyR7.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziGet.hs_zdfShowResult.hscall(hs_zddShow26zyDg);
        };
        return $hs.modules.GHCziShow.hs_zddmshowsPrec.hscall(hs_sat26zyR7);
    };
    this.hs_zdfFunctorResult.data = [hs_zdcfmap25ra73, hs_zdczlzd25ra72];
    hs_zdczlzd25ra72.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorResult);
    };
    hs_zdcfmap25ra73.evaluate = function (hs_ds26zyDr, hs_ds126zyDm) {
        var hs_wild26zyR9 = hs_ds126zyDm;
        if (hs_ds126zyDm.notEvaluated) {
            hs_wild26zyR9 = hs_ds126zyDm.hscall();
        }
        switch (hs_wild26zyR9.tag) {
        case 1:
            var hs_msg26zyDp = hs_wild26zyR9.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_msg26zyDp];
            return $res;
        case 2:
            var hs_k26zyDt = hs_wild26zyR9.data[0];
            var hs_sat26zyR8 = new $hs.Thunk();
            hs_sat26zyR8.evaluateOnce = function () {
                var hs_sat26zyRa = new $hs.Thunk();
                hs_sat26zyRa.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorResult, hs_ds26zyDr);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zyRa, hs_k26zyDt);
            };
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26zyR8];
            return $res;
        case 3:
            var hs_r26zyDx = hs_wild26zyR9.data[0];
            var hs_bs26zyDz = hs_wild26zyR9.data[1];
            var hs_sat26zyRb = new $hs.Thunk();
            hs_sat26zyRb.evaluateOnce = function () {
                return hs_ds26zyDr.hscall(hs_r26zyDx);
            };
            var $res = new $hs.Data(3);
            $res.data = [hs_sat26zyRb, hs_bs26zyDz];
            return $res;
        }
    };
    hs_a225ra7k.evaluate = function (hs_p26zyDQ, hs_m26zyDU, hs_s026zyDH, hs_m026zyDI, hs_f26zyDJ, hs_k26zyDR) {
        var hs_sat26zyRc = new $hs.Func(3);
        hs_sat26zyRc.evaluate = function (hs_s26zyDN, hs_m126zyDO, hs_a626zyDP) {
            var hs_sat26zyRd = new $hs.Thunk();
            hs_sat26zyRd.evaluateOnce = function () {
                return hs_p26zyDQ.hscall(hs_a626zyDP);
            };
            return hs_k26zyDR.hscall(hs_s26zyDN, hs_m126zyDO, hs_sat26zyRd);
        };
        return hs_m26zyDU.hscall(hs_s026zyDH, hs_m026zyDI, hs_f26zyDJ, hs_sat26zyRc);
    };
    hs_zdcfmap125ra7F.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225ra7k.hscall(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfFunctorGet.data = [hs_a225ra7k, hs_zdczlzd125ra7G];
    hs_zdczlzd125ra7G.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzlzd.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet);
    };
    hs_zdcempty25ra7H.evaluateOnce = function () {
        var hs_sat26zyRe = new $hs.Thunk();
        hs_sat26zyRe.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("empty\x00");
        };
        return hs_failDesc25r9Me.hscall(hs_sat26zyRe);
    };
    hs_a325ra7J.evaluate = function (hs_a626zyE7, hs_s026zyE5, hs_m26zyE6, hs_ds26zyE9, hs_k26zyE8) {
        return hs_k26zyE8.hscall(hs_s026zyE5, hs_m26zyE6, hs_a626zyE7);
    };
    hs_zdcreturn25ra7U.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325ra7J.hscall(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425ra7V.evaluate = function (hs_m26zyEu, hs_g26zyEs, hs_s026zyEi, hs_m026zyEj, hs_f26zyEk, hs_k26zyEr) {
        var hs_sat26zyRf = new $hs.Func(3);
        hs_sat26zyRf.evaluate = function (hs_s26zyEp, hs_m126zyEq, hs_a626zyEo) {
            return hs_g26zyEs.hscall(hs_a626zyEo, hs_s26zyEp, hs_m126zyEq, hs_f26zyEk, hs_k26zyEr);
        };
        return hs_m26zyEu.hscall(hs_s026zyEi, hs_m026zyEj, hs_f26zyEk, hs_sat26zyRf);
    };
    hs_zdczgzgze25ra8f.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a425ra7V.hscall(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_zdfMonadGet.data = [hs_a425ra7V, hs_zdczgzg25ra8g, hs_a325ra7J, hs_failDesc25r9Me];
    hs_zdczgzg25ra8g.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zddmzgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
    };
    hs_zdcpure25ra8h.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
    };
    hs_zdczlztzg25ra8i.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_ap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
    };
    this.hs_zdfApplicativeGet.data = [$hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, hs_zdcpure25ra8h, hs_zdczlztzg25ra8i, hs_zdcztzg25ra8k, hs_zdczlzt25ra8j];
    hs_zdczlzt25ra8j.evaluateOnce = function () {
        return $hs.modules.ControlziApplicative.hs_zddmzlzt.hscall($hs.modules.DataziSerializzeziGet.hs_zdfApplicativeGet);
    };
    hs_zdcztzg25ra8k.evaluateOnce = function () {
        return $hs.modules.ControlziApplicative.hs_zddmztzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfApplicativeGet);
    };
    this.hs_lookAheadM.evaluate = function (hs_gma26zyED) {
        var hs_sat26zyRg = new $hs.Func(1);
        hs_sat26zyRg.evaluate = function (hs_s26zyEL) {
            var hs_sat26zyRh = new $hs.Func(1);
            hs_sat26zyRh.evaluate = function (hs_ma26zyEF) {
                var hs_sat26zyRj = new $hs.Thunk();
                hs_sat26zyRj.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_ma26zyEF);
                };
                var hs_sat26zyRi = new $hs.Thunk();
                hs_sat26zyRi.evaluateOnce = function () {
                    var hs_sat26zyRl = new $hs.Func(4);
                    hs_sat26zyRl.evaluate = function (hs_ds26zyEO, hs_m26zyEM, hs_ds126zyRm, hs_k26zyEN) {
                        return hs_k26zyEN.hscall(hs_s26zyEL, hs_m26zyEM, $hs.modules.GHCziUnit.hs_Z0T);
                    };
                    var hs_sat26zyRk = new $hs.Thunk();
                    hs_sat26zyRk.evaluateOnce = function () {
                        return $hs.modules.DataziMaybe.hs_isNothing.hscall(hs_ma26zyEF);
                    };
                    return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyRk, hs_sat26zyRl);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyRi, hs_sat26zyRj);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_gma26zyED, hs_sat26zyRh);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a25ra4f, hs_sat26zyRg);
    };
    this.hs_lookAheadE.evaluate = function (hs_gea26zyEW) {
        var hs_sat26zyRn = new $hs.Func(1);
        hs_sat26zyRn.evaluate = function (hs_s26zyF5) {
            var hs_sat26zyRo = new $hs.Func(1);
            hs_sat26zyRo.evaluate = function (hs_ea26zyEY) {
                var hs_sat26zyRq = new $hs.Thunk();
                hs_sat26zyRq.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_ea26zyEY);
                };
                var hs_sat26zyRp = new $hs.Thunk();
                hs_sat26zyRp.evaluateOnce = function () {
                    var hs_wild26zyRs = hs_ea26zyEY;
                    if (hs_ea26zyEY.notEvaluated) {
                        hs_wild26zyRs = hs_ea26zyEY.hscall();
                    }
                    switch (hs_wild26zyRs.tag) {
                    case 1:
                        var hs_sat26zyRt = new $hs.Func(4);
                        hs_sat26zyRt.evaluate = function (hs_ds126zyF8, hs_m26zyF6, hs_ds226zyF9, hs_k26zyF7) {
                            return hs_k26zyF7.hscall(hs_s26zyF5, hs_m26zyF6, $hs.modules.GHCziUnit.hs_Z0T);
                        };
                        if (hs_sat26zyRt.notEvaluated) {
                            return hs_sat26zyRt.hscall();
                        } else {
                            return hs_sat26zyRt;
                        }
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziUnit.hs_Z0T);
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyRp, hs_sat26zyRq);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_gea26zyEW, hs_sat26zyRo);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a25ra4f, hs_sat26zyRn);
    };
    this.hs_lookAhead.evaluate = function (hs_ga26zyFi) {
        var hs_sat26zyRv = new $hs.Func(1);
        hs_sat26zyRv.evaluate = function (hs_s26zyFo) {
            var hs_sat26zyRw = new $hs.Func(1);
            hs_sat26zyRw.evaluate = function (hs_a626zyFt) {
                var hs_sat26zyRy = new $hs.Thunk();
                hs_sat26zyRy.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a626zyFt);
                };
                var hs_sat26zyRx = new $hs.Func(4);
                hs_sat26zyRx.evaluate = function (hs_ds26zyFr, hs_m26zyFp, hs_ds126zyRz, hs_k26zyFq) {
                    return hs_k26zyFq.hscall(hs_s26zyFo, hs_m26zyFp, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyRx, hs_sat26zyRy);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_ga26zyFi, hs_sat26zyRw);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a25ra4f, hs_sat26zyRv);
    };
    this.hs_getTwoOf.evaluate = function (hs_ma26zyFz, hs_mb26zyFA) {
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziTuple.hs_Z2T, hs_ma26zyFz, hs_mb26zyFA);
    };
    hs_a525ra9l.evaluate = function (hs_a626zyFR, hs_b26zyFO, hs_s026zyFI, hs_m026zyFJ, hs_f26zyFM, hs_k26zyFN) {
        var hs_sat26zyRA = new $hs.Func(2);
        hs_sat26zyRA.evaluate = function (hs_ds26zyFP, hs_ds126zyRB) {
            return hs_b26zyFO.hscall(hs_s026zyFI, hs_m026zyFJ, hs_f26zyFM, hs_k26zyFN);
        };
        return hs_a626zyFR.hscall(hs_s026zyFI, hs_m026zyFJ, hs_sat26zyRA, hs_k26zyFN);
    };
    hs_zdcmplus25ra9C.evaluate = function (hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525ra9l.hscall(hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcmzzero25ra9D.evaluateOnce = function () {
        var hs_sat26zyRC = new $hs.Thunk();
        hs_sat26zyRC.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("mzero\x00");
        };
        return hs_failDesc25r9Me.hscall(hs_sat26zyRC);
    };
    this.hs_zdfMonadPlusGet.data = [$hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_zdcmzzero25ra9D, hs_a525ra9l];
    hs_zdczlzbzg25ra9F.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_mplus.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadPlusGet);
    };
    this.hs_zdfAlternativeGet.data = [$hs.modules.DataziSerializzeziGet.hs_zdfApplicativeGet, hs_zdcempty25ra7H, hs_zdczlzbzg25ra9F, hs_zdcsome25ra9H, hs_zdcmany25ra9G];
    hs_zdcmany25ra9G.evaluateOnce = function () {
        return $hs.modules.ControlziApplicative.hs_zddmmany.hscall($hs.modules.DataziSerializzeziGet.hs_zdfAlternativeGet);
    };
    hs_zdcsome25ra9H.evaluateOnce = function () {
        return $hs.modules.ControlziApplicative.hs_zddmsome.hscall($hs.modules.DataziSerializzeziGet.hs_zdfAlternativeGet);
    };
    hs_zdczeze25ra9I.evaluate = function (hs_a626zyG1, hs_b26zyG3) {
        var hs_wild26zyRE = hs_a626zyG1;
        if (hs_a626zyG1.notEvaluated) {
            hs_wild26zyRE = hs_a626zyG1.hscall();
        }
        switch (hs_wild26zyRE.tag) {
        case 1:
            var hs_wild126zyRF = hs_b26zyG3;
            if (hs_b26zyG3.notEvaluated) {
                hs_wild126zyRF = hs_b26zyG3.hscall();
            }
            switch (hs_wild126zyRF.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126zyRD = hs_b26zyG3;
            if (hs_b26zyG3.notEvaluated) {
                hs_wild126zyRD = hs_b26zyG3.hscall();
            }
            switch (hs_wild126zyRD.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfEqMore.data = [hs_zdczeze25ra9I, hs_zdczsze25ra9Q];
    hs_zdczsze25ra9Q.evaluate = function (hs_a626zyG9, hs_b26zyGa) {
        var hs_sat26zyRG = new $hs.Thunk();
        hs_sat26zyRG.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfEqMore, hs_a626zyG9, hs_b26zyGa);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26zyRG);
    };
    hs_sat26zyRR.evaluate = function (hs_i026zyGo, hs_m026zyGj, hs_kf26zyGs, hs_ks26zyGp) {
        var hs_wild26zyRK = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfEqMore, hs_m026zyGj, $hs.modules.DataziSerializzeziGet.hs_Complete);
        switch (hs_wild26zyRK.tag) {
        case 1:
            var hs_sat26zyRL = new $hs.Func(1);
            hs_sat26zyRL.evaluate = function (hs_s26zyGm) {
                var hs_wild126zyRP = $hs.modules.DataziByteString.hs_null.hscall(hs_s26zyGm);
                switch (hs_wild126zyRP.tag) {
                case 1:
                    var hs_sat26zyRQ = new $hs.Thunk();
                    hs_sat26zyRQ.evaluateOnce = function () {
                        return $hs.modules.DataziByteString.hs_append.hscall(hs_i026zyGo, hs_s26zyGm);
                    };
                    return hs_ks26zyGp.hscall(hs_sat26zyRQ, $hs.modules.DataziSerializzeziGet.hs_Incomplete, $hs.modules.GHCziUnit.hs_Z0T);
                case 2:
                    var hs_sat26zyRN = new $hs.Thunk();
                    hs_sat26zyRN.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("too few bytes\x00");
                    };
                    var hs_sat26zyRO = new $hs.Thunk();
                    hs_sat26zyRO.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("demandInput\x00");
                    };
                    var hs_sat26zyRM = new $hs.Data(2);
                    hs_sat26zyRM.data = [hs_sat26zyRO, $hs.modules.GHCziTypes.hs_ZMZN];
                    return hs_kf26zyGs.hscall(hs_sat26zyRM, hs_sat26zyRN);
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall($hs.modules.DataziSerializzeziGet.hs_Partial, hs_sat26zyRL);
        case 2:
            var hs_sat26zyRI = new $hs.Thunk();
            hs_sat26zyRI.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("too few bytes\x00");
            };
            var hs_sat26zyRJ = new $hs.Thunk();
            hs_sat26zyRJ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("demandInput\x00");
            };
            var hs_sat26zyRH = new $hs.Data(2);
            hs_sat26zyRH.data = [hs_sat26zyRJ, $hs.modules.GHCziTypes.hs_ZMZN];
            return hs_kf26zyGs.hscall(hs_sat26zyRH, hs_sat26zyRI);
        }
    };
    hs_sat26zyRS.evaluate = function (hs_tpl26zyGd) {
        if (hs_tpl26zyGd.notEvaluated) {
            return hs_tpl26zyGd.hscall();
        } else {
            return hs_tpl26zyGd;
        }
    };
    hs_demandInput25r9Md.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyRS, hs_sat26zyRR);
    };
    hs_ensureRec25r9Mc.evaluate = function (hs_n26zyGK) {
        var hs_sat26zyRU = new $hs.Func(4);
        hs_sat26zyRU.evaluate = function (hs_i026zyGI, hs_m026zyGN, hs_kf26zyGO, hs_ks26zyGP) {
            var hs_sat26zyRV = new $hs.Thunk();
            hs_sat26zyRV.evaluateOnce = function () {
                return $hs.modules.DataziByteString.hs_length.hscall(hs_i026zyGI);
            };
            var hs_wild26zyRW = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26zyRV, hs_n26zyGK);
            switch (hs_wild26zyRW.tag) {
            case 1:
                var hs_sat26zyRX = new $hs.Thunk();
                hs_sat26zyRX.evaluateOnce = function () {
                    return hs_ensureRec25r9Mc.hscall(hs_n26zyGK);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_demandInput25r9Md, hs_sat26zyRX, hs_i026zyGI, hs_m026zyGN, hs_kf26zyGO, hs_ks26zyGP);
            case 2:
                return hs_ks26zyGP.hscall(hs_i026zyGI, hs_m026zyGN, hs_i026zyGI);
            }
        };
        var hs_sat26zyRT = new $hs.Func(1);
        hs_sat26zyRT.evaluate = function (hs_tpl26zyGC) {
            if (hs_tpl26zyGC.notEvaluated) {
                return hs_tpl26zyGC.hscall();
            } else {
                return hs_tpl26zyGC;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyRT, hs_sat26zyRU);
    };
    this.hs_ensure.evaluate = function (hs_n26zyGS) {
        var hs_n126zyH4 = hs_n26zyGS;
        if (hs_n26zyGS.notEvaluated) {
            hs_n126zyH4 = hs_n26zyGS.hscall();
        }
        var hs_sat26zyS0 = new $hs.Func(4);
        hs_sat26zyS0.evaluate = function (hs_i026zyH2, hs_m026zyH7, hs_kf26zyH8, hs_ks26zyH9) {
            var hs_sat26zyS1 = new $hs.Thunk();
            hs_sat26zyS1.evaluateOnce = function () {
                return $hs.modules.DataziByteString.hs_length.hscall(hs_i026zyH2);
            };
            var hs_wild26zyS2 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26zyS1, hs_n126zyH4);
            switch (hs_wild26zyS2.tag) {
            case 1:
                var hs_sat26zyS3 = new $hs.Thunk();
                hs_sat26zyS3.evaluateOnce = function () {
                    return hs_ensureRec25r9Mc.hscall(hs_n126zyH4);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_demandInput25r9Md, hs_sat26zyS3, hs_i026zyH2, hs_m026zyH7, hs_kf26zyH8, hs_ks26zyH9);
            case 2:
                return hs_ks26zyH9.hscall(hs_i026zyH2, hs_m026zyH7, hs_i026zyH2);
            }
        };
        var hs_sat26zyRY = new $hs.Func(1);
        hs_sat26zyRY.evaluate = function (hs_tpl26zyGW) {
            if (hs_tpl26zyGW.notEvaluated) {
                return hs_tpl26zyGW.hscall();
            } else {
                return hs_tpl26zyGW;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyRY, hs_sat26zyS0);
    };
    this.hs_isolate.evaluate = function (hs_n26zyHd, hs_m26zyI0) {
        var hs_sat26zyS5 = new $hs.Thunk();
        hs_sat26zyS5.evaluateOnce = function () {
            var hs_sat26zySb = new $hs.Func(1);
            hs_sat26zySb.evaluate = function (hs_s26zyHE) {
                var hs_ds26zyHF = new $hs.Thunk();
                hs_ds26zyHF.evaluateOnce = function () {
                    return $hs.modules.DataziByteString.hs_splitAt.hscall(hs_n26zyHd, hs_s26zyHE);
                };
                var hs_rest26zyHL = new $hs.Thunk();
                hs_rest26zyHL.evaluateOnce = function () {
                    var hs_wild26zySy = hs_ds26zyHF;
                    if (hs_ds26zyHF.notEvaluated) {
                        hs_wild26zySy = hs_ds26zyHF.hscall();
                    }
                    var hs_rest126zyHK = hs_wild26zySy.data[1];
                    if (hs_rest126zyHK.notEvaluated) {
                        return hs_rest126zyHK.hscall();
                    } else {
                        return hs_rest126zyHK;
                    }
                };
                var hs_sat26zySj = new $hs.Thunk();
                hs_sat26zySj.evaluateOnce = function () {
                    var hs_sat26zySn = new $hs.Func(1);
                    hs_sat26zySn.evaluate = function (hs_a626zyIg) {
                        var hs_sat26zySo = new $hs.Func(1);
                        hs_sat26zySo.evaluate = function (hs_used26zyI3) {
                            var hs_sat26zySq = new $hs.Thunk();
                            hs_sat26zySq.evaluateOnce = function () {
                                var hs_sat26zySv = new $hs.Thunk();
                                hs_sat26zySv.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a626zyIg);
                                };
                                var hs_sat26zySu = new $hs.Func(4);
                                hs_sat26zySu.evaluate = function (hs_ds126zyIe, hs_m126zyIc, hs_ds226zySw, hs_k26zyId) {
                                    return hs_k26zyId.hscall(hs_rest26zyHL, hs_m126zyIc, $hs.modules.GHCziUnit.hs_Z0T);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySu, hs_sat26zySv);
                            };
                            var hs_sat26zySp = new $hs.Thunk();
                            hs_sat26zySp.evaluateOnce = function () {
                                var hs_sat26zySs = new $hs.Thunk();
                                hs_sat26zySs.evaluateOnce = function () {
                                    var hs_sat26zySt = new $hs.Thunk();
                                    hs_sat26zySt.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("not all bytes parsed in isolate\x00");
                                    };
                                    return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySt);
                                };
                                var hs_sat26zySr = new $hs.Thunk();
                                hs_sat26zySr.evaluateOnce = function () {
                                    return $hs.modules.DataziByteString.hs_null.hscall(hs_used26zyI3);
                                };
                                return $hs.modules.ControlziMonad.hs_unless.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySr, hs_sat26zySs);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySp, hs_sat26zySq);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a25ra4f, hs_sat26zySo);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_m26zyI0, hs_sat26zySn);
                };
                var hs_s126zyHR = new $hs.Thunk();
                hs_s126zyHR.evaluateOnce = function () {
                    var hs_wild26zySm = hs_ds26zyHF;
                    if (hs_ds26zyHF.notEvaluated) {
                        hs_wild26zySm = hs_ds26zyHF.hscall();
                    }
                    var hs_szq26zyHQ = hs_wild26zySm.data[0];
                    if (hs_szq26zyHQ.notEvaluated) {
                        return hs_szq26zyHQ.hscall();
                    } else {
                        return hs_szq26zyHQ;
                    }
                };
                var hs_sat26zySi = new $hs.Func(4);
                hs_sat26zySi.evaluate = function (hs_ds126zyHY, hs_m126zyHW, hs_ds226zySk, hs_k26zyHX) {
                    return hs_k26zyHX.hscall(hs_s126zyHR, hs_m126zyHW, $hs.modules.GHCziUnit.hs_Z0T);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySi, hs_sat26zySj);
            };
            var hs_sat26zySa = new $hs.Thunk();
            hs_sat26zySa.evaluateOnce = function () {
                var hs_n126zyHu = hs_n26zyHd;
                if (hs_n26zyHd.notEvaluated) {
                    hs_n126zyHu = hs_n26zyHd.hscall();
                }
                var hs_sat26zySe = new $hs.Func(4);
                hs_sat26zySe.evaluate = function (hs_i026zyHs, hs_m026zyHx, hs_kf26zyHy, hs_ks26zyHz) {
                    var hs_sat26zySf = new $hs.Thunk();
                    hs_sat26zySf.evaluateOnce = function () {
                        return $hs.modules.DataziByteString.hs_length.hscall(hs_i026zyHs);
                    };
                    var hs_wild26zySg = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26zySf, hs_n126zyHu);
                    switch (hs_wild26zySg.tag) {
                    case 1:
                        var hs_sat26zySh = new $hs.Thunk();
                        hs_sat26zySh.evaluateOnce = function () {
                            return hs_ensureRec25r9Mc.hscall(hs_n126zyHu);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_demandInput25r9Md, hs_sat26zySh, hs_i026zyHs, hs_m026zyHx, hs_kf26zyHy, hs_ks26zyHz);
                    case 2:
                        return hs_ks26zyHz.hscall(hs_i026zyHs, hs_m026zyHx, hs_i026zyHs);
                    }
                };
                var hs_sat26zySc = new $hs.Func(1);
                hs_sat26zySc.evaluate = function (hs_tpl26zyHm) {
                    if (hs_tpl26zyHm.notEvaluated) {
                        return hs_tpl26zyHm.hscall();
                    } else {
                        return hs_tpl26zyHm;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zySc, hs_sat26zySe);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySa, hs_sat26zySb);
        };
        var hs_sat26zyS4 = new $hs.Thunk();
        hs_sat26zyS4.evaluateOnce = function () {
            var hs_sat26zyS7 = new $hs.Thunk();
            hs_sat26zyS7.evaluateOnce = function () {
                var hs_sat26zyS9 = new $hs.Thunk();
                hs_sat26zyS9.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Attempted to isolate a negative number of bytes\x00");
                };
                return $hs.modules.GHCziBase.hs_fail.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyS9);
            };
            var hs_sat26zyS6 = new $hs.Thunk();
            hs_sat26zyS6.evaluateOnce = function () {
                var hs_sat26zyS8 = new $hs.Data(1);
                hs_sat26zyS8.data = [0];
                return $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26zyHd, hs_sat26zyS8);
            };
            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyS6, hs_sat26zyS7);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyS4, hs_sat26zyS5);
    };
    this.hs_isEmpty.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziByteString.hs_null, hs_a25ra4f);
    };
    this.hs_remaining.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziByteString.hs_length, hs_a25ra4f);
    };
    this.hs_uncheckedLookAhead.evaluate = function (hs_n26zyIq) {
        var hs_sat26zySz = new $hs.Func(1);
        hs_sat26zySz.evaluate = function (hs_s26zyIr) {
            var hs_sat26zySA = new $hs.Thunk();
            hs_sat26zySA.evaluateOnce = function () {
                return $hs.modules.DataziByteString.hs_take.hscall(hs_n26zyIq, hs_s26zyIr);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySA);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a25ra4f, hs_sat26zySz);
    };
    this.hs_uncheckedSkip.evaluate = function (hs_n26zyIx) {
        var hs_sat26zySB = new $hs.Func(1);
        hs_sat26zySB.evaluate = function (hs_s26zyIy) {
            var hs_s126zyIz = new $hs.Thunk();
            hs_s126zyIz.evaluateOnce = function () {
                return $hs.modules.DataziByteString.hs_drop.hscall(hs_n26zyIx, hs_s26zyIy);
            };
            var hs_sat26zySC = new $hs.Func(4);
            hs_sat26zySC.evaluate = function (hs_ds26zyIG, hs_m26zyIE, hs_ds126zyIH, hs_k26zyIF) {
                return hs_k26zyIF.hscall(hs_s126zyIz, hs_m26zyIE, $hs.modules.GHCziUnit.hs_Z0T);
            };
            if (hs_sat26zySC.notEvaluated) {
                return hs_sat26zySC.hscall();
            } else {
                return hs_sat26zySC;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_a25ra4f, hs_sat26zySB);
    };
    this.hs_getBytes.evaluate = function (hs_n26zyIL) {
        var hs_sat26zySE = new $hs.Func(1);
        hs_sat26zySE.evaluate = function (hs_s26zyJ7) {
            var hs_sat26zySM = new $hs.Thunk();
            hs_sat26zySM.evaluateOnce = function () {
                var hs_sat26zySO = new $hs.Thunk();
                hs_sat26zySO.evaluateOnce = function () {
                    return $hs.modules.DataziByteStringziUnsafe.hs_unsafeTake.hscall(hs_n26zyIL, hs_s26zyJ7);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySO);
            };
            var hs_s126zyJ8 = new $hs.Thunk();
            hs_s126zyJ8.evaluateOnce = function () {
                return $hs.modules.DataziByteStringziUnsafe.hs_unsafeDrop.hscall(hs_n26zyIL, hs_s26zyJ7);
            };
            var hs_sat26zySL = new $hs.Func(4);
            hs_sat26zySL.evaluate = function (hs_ds26zyJf, hs_m26zyJd, hs_ds126zySN, hs_k26zyJe) {
                return hs_k26zyJe.hscall(hs_s126zyJ8, hs_m26zyJd, $hs.modules.GHCziUnit.hs_Z0T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySL, hs_sat26zySM);
        };
        var hs_sat26zySD = new $hs.Thunk();
        hs_sat26zySD.evaluateOnce = function () {
            var hs_n126zyIX = hs_n26zyIL;
            if (hs_n26zyIL.notEvaluated) {
                hs_n126zyIX = hs_n26zyIL.hscall();
            }
            var hs_sat26zySH = new $hs.Func(4);
            hs_sat26zySH.evaluate = function (hs_i026zyIV, hs_m026zyJ0, hs_kf26zyJ1, hs_ks26zyJ2) {
                var hs_sat26zySI = new $hs.Thunk();
                hs_sat26zySI.evaluateOnce = function () {
                    return $hs.modules.DataziByteString.hs_length.hscall(hs_i026zyIV);
                };
                var hs_wild26zySJ = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26zySI, hs_n126zyIX);
                switch (hs_wild26zySJ.tag) {
                case 1:
                    var hs_sat26zySK = new $hs.Thunk();
                    hs_sat26zySK.evaluateOnce = function () {
                        return hs_ensureRec25r9Mc.hscall(hs_n126zyIX);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_demandInput25r9Md, hs_sat26zySK, hs_i026zyIV, hs_m026zyJ0, hs_kf26zyJ1, hs_ks26zyJ2);
                case 2:
                    return hs_ks26zyJ2.hscall(hs_i026zyIV, hs_m026zyJ0, hs_i026zyIV);
                }
            };
            var hs_sat26zySF = new $hs.Func(1);
            hs_sat26zySF.evaluate = function (hs_tpl26zyIP) {
                if (hs_tpl26zyIP.notEvaluated) {
                    return hs_tpl26zyIP.hscall();
                } else {
                    return hs_tpl26zyIP;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zySF, hs_sat26zySH);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zySD, hs_sat26zySE);
    };
    hs_sat26zyTs.evaluate = function (hs_s26zyJo) {
        var hs_sat26zySQ = new $hs.Thunk();
        hs_sat26zySQ.evaluateOnce = function () {
            var hs_sat26zySS = new $hs.Thunk();
            hs_sat26zySS.evaluateOnce = function () {
                var hs_sat26zyTq = new $hs.Thunk();
                hs_sat26zyTq.evaluateOnce = function () {
                    var hs_sat26zyTr = new $hs.Data(1);
                    hs_sat26zyTr.data = [0];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyTr);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTq);
            };
            var hs_sat26zySR = new $hs.Thunk();
            hs_sat26zySR.evaluateOnce = function () {
                var hs_sat26zySU = new $hs.Thunk();
                hs_sat26zySU.evaluateOnce = function () {
                    var hs_sat26zyTn = new $hs.Thunk();
                    hs_sat26zyTn.evaluateOnce = function () {
                        var hs_sat26zyTp = new $hs.Data(1);
                        hs_sat26zyTp.data = [1];
                        return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyTp);
                    };
                    var hs_wild26zyTo = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTn);
                    var hs_w26zyKk = hs_wild26zyTo.data[0];
                    var hs_wild126zyKm = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyKk, 8);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126zyKm];
                    return $res;
                };
                var hs_sat26zyST = new $hs.Thunk();
                hs_sat26zyST.evaluateOnce = function () {
                    var hs_sat26zySW = new $hs.Thunk();
                    hs_sat26zySW.evaluateOnce = function () {
                        var hs_sat26zyTk = new $hs.Thunk();
                        hs_sat26zyTk.evaluateOnce = function () {
                            var hs_sat26zyTm = new $hs.Data(1);
                            hs_sat26zyTm.data = [2];
                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyTm);
                        };
                        var hs_wild26zyTl = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTk);
                        var hs_w26zyKb = hs_wild26zyTl.data[0];
                        var hs_wild126zyKd = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyKb, 16);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126zyKd];
                        return $res;
                    };
                    var hs_sat26zySV = new $hs.Thunk();
                    hs_sat26zySV.evaluateOnce = function () {
                        var hs_sat26zySY = new $hs.Thunk();
                        hs_sat26zySY.evaluateOnce = function () {
                            var hs_sat26zyTh = new $hs.Thunk();
                            hs_sat26zyTh.evaluateOnce = function () {
                                var hs_sat26zyTj = new $hs.Data(1);
                                hs_sat26zyTj.data = [3];
                                return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyTj);
                            };
                            var hs_wild26zyTi = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTh);
                            var hs_w26zyK2 = hs_wild26zyTi.data[0];
                            var hs_wild126zyK4 = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyK2, 24);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild126zyK4];
                            return $res;
                        };
                        var hs_sat26zySX = new $hs.Thunk();
                        hs_sat26zySX.evaluateOnce = function () {
                            var hs_sat26zyT0 = new $hs.Thunk();
                            hs_sat26zyT0.evaluateOnce = function () {
                                var hs_sat26zyTe = new $hs.Thunk();
                                hs_sat26zyTe.evaluateOnce = function () {
                                    var hs_sat26zyTg = new $hs.Data(1);
                                    hs_sat26zyTg.data = [4];
                                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyTg);
                                };
                                var hs_wild26zyTf = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTe);
                                var hs_w26zyJT = hs_wild26zyTf.data[0];
                                var hs_wild126zyJV = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyJT, 32);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_wild126zyJV];
                                return $res;
                            };
                            var hs_sat26zySZ = new $hs.Thunk();
                            hs_sat26zySZ.evaluateOnce = function () {
                                var hs_sat26zyT2 = new $hs.Thunk();
                                hs_sat26zyT2.evaluateOnce = function () {
                                    var hs_sat26zyTb = new $hs.Thunk();
                                    hs_sat26zyTb.evaluateOnce = function () {
                                        var hs_sat26zyTd = new $hs.Data(1);
                                        hs_sat26zyTd.data = [5];
                                        return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyTd);
                                    };
                                    var hs_wild26zyTc = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTb);
                                    var hs_w26zyJK = hs_wild26zyTc.data[0];
                                    var hs_wild126zyJM = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyJK, 40);
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_wild126zyJM];
                                    return $res;
                                };
                                var hs_sat26zyT1 = new $hs.Thunk();
                                hs_sat26zyT1.evaluateOnce = function () {
                                    var hs_sat26zyT4 = new $hs.Thunk();
                                    hs_sat26zyT4.evaluateOnce = function () {
                                        var hs_sat26zyT8 = new $hs.Thunk();
                                        hs_sat26zyT8.evaluateOnce = function () {
                                            var hs_sat26zyTa = new $hs.Data(1);
                                            hs_sat26zyTa.data = [6];
                                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyTa);
                                        };
                                        var hs_wild26zyT9 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyT8);
                                        var hs_w26zyJB = hs_wild26zyT9.data[0];
                                        var hs_wild126zyJD = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyJB, 48);
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_wild126zyJD];
                                        return $res;
                                    };
                                    var hs_sat26zyT3 = new $hs.Thunk();
                                    hs_sat26zyT3.evaluateOnce = function () {
                                        var hs_sat26zyT5 = new $hs.Thunk();
                                        hs_sat26zyT5.evaluateOnce = function () {
                                            var hs_sat26zyT7 = new $hs.Data(1);
                                            hs_sat26zyT7.data = [7];
                                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyJo, hs_sat26zyT7);
                                        };
                                        var hs_wild26zyT6 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyT5);
                                        var hs_w26zyJt = hs_wild26zyT6.data[0];
                                        var hs_wild126zyJv = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyJt, 56);
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_wild126zyJv];
                                        return $res;
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyT3, hs_sat26zyT4);
                                };
                                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyT1, hs_sat26zyT2);
                            };
                            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zySZ, hs_sat26zyT0);
                        };
                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zySX, hs_sat26zySY);
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zySV, hs_sat26zySW);
                };
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyST, hs_sat26zySU);
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zySR, hs_sat26zySS);
        };
        var hs_sat26zySP = new $hs.Thunk();
        hs_sat26zySP.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
        };
        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zySP, hs_sat26zySQ);
    };
    hs_sat26zyTu.evaluateOnce = function () {
        var hs_sat26zyTt = new $hs.Data(1);
        hs_sat26zyTt.data = [8];
        return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_sat26zyTt);
    };
    this.hs_getWord64le.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyTu, hs_sat26zyTs);
    };
    hs_sat26zyU8.evaluate = function (hs_s26zyKy) {
        var hs_sat26zyTw = new $hs.Thunk();
        hs_sat26zyTw.evaluateOnce = function () {
            var hs_sat26zyTy = new $hs.Thunk();
            hs_sat26zyTy.evaluateOnce = function () {
                var hs_sat26zyU6 = new $hs.Thunk();
                hs_sat26zyU6.evaluateOnce = function () {
                    var hs_sat26zyU7 = new $hs.Data(1);
                    hs_sat26zyU7.data = [7];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyU7);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyU6);
            };
            var hs_sat26zyTx = new $hs.Thunk();
            hs_sat26zyTx.evaluateOnce = function () {
                var hs_sat26zyTA = new $hs.Thunk();
                hs_sat26zyTA.evaluateOnce = function () {
                    var hs_sat26zyU3 = new $hs.Thunk();
                    hs_sat26zyU3.evaluateOnce = function () {
                        var hs_sat26zyU5 = new $hs.Data(1);
                        hs_sat26zyU5.data = [6];
                        return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyU5);
                    };
                    var hs_wild26zyU4 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyU3);
                    var hs_w26zyLu = hs_wild26zyU4.data[0];
                    var hs_wild126zyLw = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyLu, 8);
                    var $res = new $hs.Data(1);
                    $res.data = [hs_wild126zyLw];
                    return $res;
                };
                var hs_sat26zyTz = new $hs.Thunk();
                hs_sat26zyTz.evaluateOnce = function () {
                    var hs_sat26zyTC = new $hs.Thunk();
                    hs_sat26zyTC.evaluateOnce = function () {
                        var hs_sat26zyU0 = new $hs.Thunk();
                        hs_sat26zyU0.evaluateOnce = function () {
                            var hs_sat26zyU2 = new $hs.Data(1);
                            hs_sat26zyU2.data = [5];
                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyU2);
                        };
                        var hs_wild26zyU1 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyU0);
                        var hs_w26zyLl = hs_wild26zyU1.data[0];
                        var hs_wild126zyLn = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyLl, 16);
                        var $res = new $hs.Data(1);
                        $res.data = [hs_wild126zyLn];
                        return $res;
                    };
                    var hs_sat26zyTB = new $hs.Thunk();
                    hs_sat26zyTB.evaluateOnce = function () {
                        var hs_sat26zyTE = new $hs.Thunk();
                        hs_sat26zyTE.evaluateOnce = function () {
                            var hs_sat26zyTX = new $hs.Thunk();
                            hs_sat26zyTX.evaluateOnce = function () {
                                var hs_sat26zyTZ = new $hs.Data(1);
                                hs_sat26zyTZ.data = [4];
                                return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyTZ);
                            };
                            var hs_wild26zyTY = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTX);
                            var hs_w26zyLc = hs_wild26zyTY.data[0];
                            var hs_wild126zyLe = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyLc, 24);
                            var $res = new $hs.Data(1);
                            $res.data = [hs_wild126zyLe];
                            return $res;
                        };
                        var hs_sat26zyTD = new $hs.Thunk();
                        hs_sat26zyTD.evaluateOnce = function () {
                            var hs_sat26zyTG = new $hs.Thunk();
                            hs_sat26zyTG.evaluateOnce = function () {
                                var hs_sat26zyTU = new $hs.Thunk();
                                hs_sat26zyTU.evaluateOnce = function () {
                                    var hs_sat26zyTW = new $hs.Data(1);
                                    hs_sat26zyTW.data = [3];
                                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyTW);
                                };
                                var hs_wild26zyTV = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTU);
                                var hs_w26zyL3 = hs_wild26zyTV.data[0];
                                var hs_wild126zyL5 = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyL3, 32);
                                var $res = new $hs.Data(1);
                                $res.data = [hs_wild126zyL5];
                                return $res;
                            };
                            var hs_sat26zyTF = new $hs.Thunk();
                            hs_sat26zyTF.evaluateOnce = function () {
                                var hs_sat26zyTI = new $hs.Thunk();
                                hs_sat26zyTI.evaluateOnce = function () {
                                    var hs_sat26zyTR = new $hs.Thunk();
                                    hs_sat26zyTR.evaluateOnce = function () {
                                        var hs_sat26zyTT = new $hs.Data(1);
                                        hs_sat26zyTT.data = [2];
                                        return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyTT);
                                    };
                                    var hs_wild26zyTS = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTR);
                                    var hs_w26zyKU = hs_wild26zyTS.data[0];
                                    var hs_wild126zyKW = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyKU, 40);
                                    var $res = new $hs.Data(1);
                                    $res.data = [hs_wild126zyKW];
                                    return $res;
                                };
                                var hs_sat26zyTH = new $hs.Thunk();
                                hs_sat26zyTH.evaluateOnce = function () {
                                    var hs_sat26zyTK = new $hs.Thunk();
                                    hs_sat26zyTK.evaluateOnce = function () {
                                        var hs_sat26zyTO = new $hs.Thunk();
                                        hs_sat26zyTO.evaluateOnce = function () {
                                            var hs_sat26zyTQ = new $hs.Data(1);
                                            hs_sat26zyTQ.data = [1];
                                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyTQ);
                                        };
                                        var hs_wild26zyTP = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTO);
                                        var hs_w26zyKL = hs_wild26zyTP.data[0];
                                        var hs_wild126zyKN = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyKL, 48);
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_wild126zyKN];
                                        return $res;
                                    };
                                    var hs_sat26zyTJ = new $hs.Thunk();
                                    hs_sat26zyTJ.evaluateOnce = function () {
                                        var hs_sat26zyTL = new $hs.Thunk();
                                        hs_sat26zyTL.evaluateOnce = function () {
                                            var hs_sat26zyTN = new $hs.Data(1);
                                            hs_sat26zyTN.data = [0];
                                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyKy, hs_sat26zyTN);
                                        };
                                        var hs_wild26zyTM = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyTL);
                                        var hs_w26zyKD = hs_wild26zyTM.data[0];
                                        var hs_wild126zyKF = $hs.modules.GHCziIntWord64.hs_uncheckedShiftL64zh.hscall(hs_w26zyKD, 56);
                                        var $res = new $hs.Data(1);
                                        $res.data = [hs_wild126zyKF];
                                        return $res;
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyTJ, hs_sat26zyTK);
                                };
                                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyTH, hs_sat26zyTI);
                            };
                            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyTF, hs_sat26zyTG);
                        };
                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyTD, hs_sat26zyTE);
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyTB, hs_sat26zyTC);
                };
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyTz, hs_sat26zyTA);
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26zyTx, hs_sat26zyTy);
        };
        var hs_sat26zyTv = new $hs.Thunk();
        hs_sat26zyTv.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
        };
        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zyTv, hs_sat26zyTw);
    };
    hs_sat26zyUa.evaluateOnce = function () {
        var hs_sat26zyU9 = new $hs.Data(1);
        hs_sat26zyU9.data = [8];
        return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_sat26zyU9);
    };
    this.hs_getWord64be.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyUa, hs_sat26zyU8);
    };
    this.hs_getSeqOf.evaluate = function (hs_m26zyLS) {
        var hs_zddEq26zyLG = new $hs.Thunk();
        hs_zddEq26zyLG.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
        };
        var hs_go26zyLW = new $hs.Func(2);
        hs_go26zyLW.evaluate = function (hs_xs26zyLO, hs_ds26zyLK) {
            var hs_sat26zyUd = new $hs.Thunk();
            hs_sat26zyUd.evaluateOnce = function () {
                var hs_sat26zyUl = new $hs.Thunk();
                hs_sat26zyUl.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyUl);
            };
            var hs_wild26zyUe = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26zyLG, hs_ds26zyLK, hs_sat26zyUd);
            switch (hs_wild26zyUe.tag) {
            case 1:
                var hs_nt26zyLU = hs_xs26zyLO;
                if (hs_xs26zyLO.notEvaluated) {
                    hs_nt26zyLU = hs_xs26zyLO.hscall();
                }
                var hs_n26zyLY = hs_ds26zyLK;
                if (hs_ds26zyLK.notEvaluated) {
                    hs_n26zyLY = hs_ds26zyLK.hscall();
                }
                var hs_sat26zyUf = new $hs.Func(1);
                hs_sat26zyUf.evaluate = function (hs_x26zyLV) {
                    var hs_sat26zyUi = new $hs.Thunk();
                    hs_sat26zyUi.evaluateOnce = function () {
                        var hs_sat26zyUj = new $hs.Thunk();
                        hs_sat26zyUj.evaluateOnce = function () {
                            var hs_sat26zyUk = new $hs.Thunk();
                            hs_sat26zyUk.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyUk);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_n26zyLY, hs_sat26zyUj);
                    };
                    var hs_sat26zyUh = new $hs.Thunk();
                    hs_sat26zyUh.evaluateOnce = function () {
                        return $hs.modules.DataziSequence.hs_zbzg.hscall(hs_nt26zyLU, hs_x26zyLV);
                    };
                    return hs_go26zyLW.hscall(hs_sat26zyUh, hs_sat26zyUi);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_m26zyLS, hs_sat26zyUf);
            case 2:
                var hs_sat26zyUc = new $hs.Thunk();
                hs_sat26zyUc.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
                };
                return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zyUc, hs_xs26zyLO);
            }
        };
        var hs_sat26zyUb = new $hs.Func(1);
        hs_sat26zyUb.evaluate = function (hs_eta1cW6l3) {
            return hs_go26zyLW.hscall($hs.modules.DataziSequence.hs_empty, hs_eta1cW6l3);
        };
        return $hs.modules.ControlziMonad.hs_zezlzl.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyUb, $hs.modules.DataziSerializzeziGet.hs_getWord64be);
    };
    this.hs_getListOf.evaluate = function (hs_m26zyMf) {
        var hs_zddEq26zyM7 = new $hs.Thunk();
        hs_zddEq26zyM7.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_zdp1Num.hscall($hs.modules.GHCziWord.hs_zdfNumWord64);
        };
        var hs_go26zyMl = new $hs.Func(2);
        hs_go26zyMl.evaluate = function (hs_as26zyMk, hs_ds26zyMb) {
            var hs_sat26zyUo = new $hs.Thunk();
            hs_sat26zyUo.evaluateOnce = function () {
                var hs_sat26zyUv = new $hs.Thunk();
                hs_sat26zyUv.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyUv);
            };
            var hs_wild26zyUp = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26zyM7, hs_ds26zyMb, hs_sat26zyUo);
            switch (hs_wild26zyUp.tag) {
            case 1:
                var hs_sat26zyUq = new $hs.Func(1);
                hs_sat26zyUq.evaluate = function (hs_x26zyMh) {
                    var hs_x126zyMj = hs_x26zyMh;
                    if (hs_x26zyMh.notEvaluated) {
                        hs_x126zyMj = hs_x26zyMh.hscall();
                    }
                    var hs_sat26zyUs = new $hs.Thunk();
                    hs_sat26zyUs.evaluateOnce = function () {
                        var hs_sat26zyUt = new $hs.Thunk();
                        hs_sat26zyUt.evaluateOnce = function () {
                            var hs_sat26zyUu = new $hs.Thunk();
                            hs_sat26zyUu.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26zyUu);
                        };
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_ds26zyMb, hs_sat26zyUt);
                    };
                    var hs_sat26zyUr = new $hs.Data(2);
                    hs_sat26zyUr.data = [hs_x126zyMj, hs_as26zyMk];
                    return hs_go26zyMl.hscall(hs_sat26zyUr, hs_sat26zyUs);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_m26zyMf, hs_sat26zyUq);
            case 2:
                var hs_sat26zyUn = new $hs.Thunk();
                hs_sat26zyUn.evaluateOnce = function () {
                    return $hs.modules.GHCziList.hs_reverse.hscall(hs_as26zyMk);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyUn);
            }
        };
        var hs_sat26zyUm = new $hs.Func(1);
        hs_sat26zyUm.evaluate = function (hs_eta1cW6l3) {
            return hs_go26zyMl.hscall($hs.modules.GHCziTypes.hs_ZMZN, hs_eta1cW6l3);
        };
        return $hs.modules.ControlziMonad.hs_zezlzl.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyUm, $hs.modules.DataziSerializzeziGet.hs_getWord64be);
    };
    this.hs_getTreeOf.evaluate = function (hs_m26zyMu) {
        var hs_sat26zyUw = new $hs.Thunk();
        hs_sat26zyUw.evaluateOnce = function () {
            var hs_sat26zyUx = new $hs.Thunk();
            hs_sat26zyUx.evaluateOnce = function () {
                return $hs.modules.DataziSerializzeziGet.hs_getTreeOf.hscall(hs_m26zyMu);
            };
            return $hs.modules.DataziSerializzeziGet.hs_getListOf.hscall(hs_sat26zyUx);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.DataziTree.hs_Node, hs_m26zyMu, hs_sat26zyUw);
    };
    this.hs_getSetOf.evaluate = function (hs_zddOrd26zyMB, hs_m26zyMz) {
        var hs_sat26zyUy = new $hs.Thunk();
        hs_sat26zyUy.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziGet.hs_getListOf.hscall(hs_m26zyMz);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziSet.hs_fromDistinctAscList, hs_sat26zyUy);
    };
    this.hs_getMapOf.evaluate = function (hs_zddOrd26zyMJ, hs_k26zyMF, hs_m26zyMG) {
        var hs_sat26zyUz = new $hs.Thunk();
        hs_sat26zyUz.evaluateOnce = function () {
            var hs_sat26zyUA = new $hs.Thunk();
            hs_sat26zyUA.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziTuple.hs_Z2T, hs_k26zyMF, hs_m26zyMG);
            };
            return $hs.modules.DataziSerializzeziGet.hs_getListOf.hscall(hs_sat26zyUA);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziMap.hs_fromDistinctAscList, hs_sat26zyUz);
    };
    this.hs_getIntSetOf.evaluate = function (hs_m26zyML) {
        var hs_sat26zyUB = new $hs.Thunk();
        hs_sat26zyUB.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziGet.hs_getListOf.hscall(hs_m26zyML);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziIntSet.hs_fromDistinctAscList, hs_sat26zyUB);
    };
    this.hs_getIntMapOf.evaluate = function (hs_i26zyMP, hs_m26zyMQ) {
        var hs_sat26zyUC = new $hs.Thunk();
        hs_sat26zyUC.evaluateOnce = function () {
            var hs_sat26zyUD = new $hs.Thunk();
            hs_sat26zyUD.evaluateOnce = function () {
                return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziTuple.hs_Z2T, hs_i26zyMP, hs_m26zyMQ);
            };
            return $hs.modules.DataziSerializzeziGet.hs_getListOf.hscall(hs_sat26zyUD);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziIntMap.hs_fromDistinctAscList, hs_sat26zyUC);
    };
    this.hs_getIArrayOf.evaluate = function (hs_zddIx26zyMY, hs_zddIArray26zyMX, hs_ix26zyN0, hs_e26zyN2) {
        var hs_sat26zyUF = new $hs.Thunk();
        hs_sat26zyUF.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziGet.hs_getListOf.hscall(hs_e26zyN2);
        };
        var hs_sat26zyUG = new $hs.Thunk();
        hs_sat26zyUG.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziGet.hs_getTwoOf.hscall(hs_ix26zyN0, hs_ix26zyN0);
        };
        var hs_sat26zyUE = new $hs.Thunk();
        hs_sat26zyUE.evaluateOnce = function () {
            return $hs.modules.DataziArrayziBase.hs_listArray.hscall(hs_zddIArray26zyMX, hs_zddIx26zyMY);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyUE, hs_sat26zyUG, hs_sat26zyUF);
    };
    hs_sat26zyV3.evaluate = function (hs_s26zyN8) {
        var hs_sat26zyUI = new $hs.Thunk();
        hs_sat26zyUI.evaluateOnce = function () {
            var hs_sat26zyUK = new $hs.Thunk();
            hs_sat26zyUK.evaluateOnce = function () {
                var hs_sat26zyV1 = new $hs.Thunk();
                hs_sat26zyV1.evaluateOnce = function () {
                    var hs_sat26zyV2 = new $hs.Data(1);
                    hs_sat26zyV2.data = [0];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyN8, hs_sat26zyV2);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyV1);
            };
            var hs_sat26zyUJ = new $hs.Thunk();
            hs_sat26zyUJ.evaluateOnce = function () {
                var hs_sat26zyUM = new $hs.Thunk();
                hs_sat26zyUM.evaluateOnce = function () {
                    var hs_sat26zyUX = new $hs.Thunk();
                    hs_sat26zyUX.evaluateOnce = function () {
                        var hs_sat26zyV0 = new $hs.Data(1);
                        hs_sat26zyV0.data = [1];
                        return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyN8, hs_sat26zyV0);
                    };
                    var hs_wild26zyUY = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyUX);
                    var hs_w26zyNs = hs_wild26zyUY.data[0];
                    var hs_sat26zyUZ = hs_w26zyNs << 8;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zyUZ];
                    return $res;
                };
                var hs_sat26zyUL = new $hs.Thunk();
                hs_sat26zyUL.evaluateOnce = function () {
                    var hs_sat26zyUO = new $hs.Thunk();
                    hs_sat26zyUO.evaluateOnce = function () {
                        var hs_sat26zyUT = new $hs.Thunk();
                        hs_sat26zyUT.evaluateOnce = function () {
                            var hs_sat26zyUW = new $hs.Data(1);
                            hs_sat26zyUW.data = [2];
                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyN8, hs_sat26zyUW);
                        };
                        var hs_wild26zyUU = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyUT);
                        var hs_w26zyNk = hs_wild26zyUU.data[0];
                        var hs_sat26zyUV = hs_w26zyNk << 16;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zyUV];
                        return $res;
                    };
                    var hs_sat26zyUN = new $hs.Thunk();
                    hs_sat26zyUN.evaluateOnce = function () {
                        var hs_sat26zyUP = new $hs.Thunk();
                        hs_sat26zyUP.evaluateOnce = function () {
                            var hs_sat26zyUS = new $hs.Data(1);
                            hs_sat26zyUS.data = [3];
                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyN8, hs_sat26zyUS);
                        };
                        var hs_wild26zyUQ = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyUP);
                        var hs_w26zyNd = hs_wild26zyUQ.data[0];
                        var hs_sat26zyUR = hs_w26zyNd << 24;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zyUR];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_sat26zyUN, hs_sat26zyUO);
                };
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_sat26zyUL, hs_sat26zyUM);
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_sat26zyUJ, hs_sat26zyUK);
        };
        var hs_sat26zyUH = new $hs.Thunk();
        hs_sat26zyUH.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
        };
        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zyUH, hs_sat26zyUI);
    };
    hs_sat26zyV5.evaluateOnce = function () {
        var hs_sat26zyV4 = new $hs.Data(1);
        hs_sat26zyV4.data = [4];
        return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_sat26zyV4);
    };
    this.hs_getWord32le.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyV5, hs_sat26zyV3);
    };
    hs_sat26zyVs.evaluate = function (hs_s26zyNF) {
        var hs_sat26zyV7 = new $hs.Thunk();
        hs_sat26zyV7.evaluateOnce = function () {
            var hs_sat26zyV9 = new $hs.Thunk();
            hs_sat26zyV9.evaluateOnce = function () {
                var hs_sat26zyVq = new $hs.Thunk();
                hs_sat26zyVq.evaluateOnce = function () {
                    var hs_sat26zyVr = new $hs.Data(1);
                    hs_sat26zyVr.data = [3];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyNF, hs_sat26zyVr);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyVq);
            };
            var hs_sat26zyV8 = new $hs.Thunk();
            hs_sat26zyV8.evaluateOnce = function () {
                var hs_sat26zyVb = new $hs.Thunk();
                hs_sat26zyVb.evaluateOnce = function () {
                    var hs_sat26zyVm = new $hs.Thunk();
                    hs_sat26zyVm.evaluateOnce = function () {
                        var hs_sat26zyVp = new $hs.Data(1);
                        hs_sat26zyVp.data = [2];
                        return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyNF, hs_sat26zyVp);
                    };
                    var hs_wild26zyVn = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyVm);
                    var hs_w26zyNZ = hs_wild26zyVn.data[0];
                    var hs_sat26zyVo = hs_w26zyNZ << 8;
                    var $res = new $hs.Data(1);
                    $res.data = [hs_sat26zyVo];
                    return $res;
                };
                var hs_sat26zyVa = new $hs.Thunk();
                hs_sat26zyVa.evaluateOnce = function () {
                    var hs_sat26zyVd = new $hs.Thunk();
                    hs_sat26zyVd.evaluateOnce = function () {
                        var hs_sat26zyVi = new $hs.Thunk();
                        hs_sat26zyVi.evaluateOnce = function () {
                            var hs_sat26zyVl = new $hs.Data(1);
                            hs_sat26zyVl.data = [1];
                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyNF, hs_sat26zyVl);
                        };
                        var hs_wild26zyVj = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyVi);
                        var hs_w26zyNR = hs_wild26zyVj.data[0];
                        var hs_sat26zyVk = hs_w26zyNR << 16;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zyVk];
                        return $res;
                    };
                    var hs_sat26zyVc = new $hs.Thunk();
                    hs_sat26zyVc.evaluateOnce = function () {
                        var hs_sat26zyVe = new $hs.Thunk();
                        hs_sat26zyVe.evaluateOnce = function () {
                            var hs_sat26zyVh = new $hs.Data(1);
                            hs_sat26zyVh.data = [0];
                            return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyNF, hs_sat26zyVh);
                        };
                        var hs_wild26zyVf = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26zyVe);
                        var hs_w26zyNK = hs_wild26zyVf.data[0];
                        var hs_sat26zyVg = hs_w26zyNK << 24;
                        var $res = new $hs.Data(1);
                        $res.data = [hs_sat26zyVg];
                        return $res;
                    };
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_sat26zyVc, hs_sat26zyVd);
                };
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_sat26zyVa, hs_sat26zyVb);
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32, hs_sat26zyV8, hs_sat26zyV9);
        };
        var hs_sat26zyV6 = new $hs.Thunk();
        hs_sat26zyV6.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
        };
        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zyV6, hs_sat26zyV7);
    };
    hs_sat26zyVu.evaluateOnce = function () {
        var hs_sat26zyVt = new $hs.Data(1);
        hs_sat26zyVt.data = [4];
        return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_sat26zyVt);
    };
    this.hs_getWord32be.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyVu, hs_sat26zyVs);
    };
    hs_sat26zyVF.evaluate = function (hs_s26zyOc) {
        var hs_sat26zyVw = new $hs.Thunk();
        hs_sat26zyVw.evaluateOnce = function () {
            var hs_sat26zyVy = new $hs.Thunk();
            hs_sat26zyVy.evaluateOnce = function () {
                var hs_sat26zyVD = new $hs.Thunk();
                hs_sat26zyVD.evaluateOnce = function () {
                    var hs_sat26zyVE = new $hs.Data(1);
                    hs_sat26zyVE.data = [0];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyOc, hs_sat26zyVE);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26zyVD);
            };
            var hs_sat26zyVx = new $hs.Thunk();
            hs_sat26zyVx.evaluateOnce = function () {
                var hs_sat26zyVz = new $hs.Thunk();
                hs_sat26zyVz.evaluateOnce = function () {
                    var hs_sat26zyVC = new $hs.Data(1);
                    hs_sat26zyVC.data = [1];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyOc, hs_sat26zyVC);
                };
                var hs_wild26zyVA = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26zyVz);
                var hs_w26zyOh = hs_wild26zyVA.data[0];
                var hs_sat26zyVB = hs_w26zyOh << 8;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zyVB];
                return $res;
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26zyVx, hs_sat26zyVy);
        };
        var hs_sat26zyVv = new $hs.Thunk();
        hs_sat26zyVv.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
        };
        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zyVv, hs_sat26zyVw);
    };
    hs_sat26zyVH.evaluateOnce = function () {
        var hs_sat26zyVG = new $hs.Data(1);
        hs_sat26zyVG.data = [2];
        return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_sat26zyVG);
    };
    this.hs_getWord16le.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyVH, hs_sat26zyVF);
    };
    hs_sat26zyVS.evaluate = function (hs_s26zyOt) {
        var hs_sat26zyVJ = new $hs.Thunk();
        hs_sat26zyVJ.evaluateOnce = function () {
            var hs_sat26zyVL = new $hs.Thunk();
            hs_sat26zyVL.evaluateOnce = function () {
                var hs_sat26zyVQ = new $hs.Thunk();
                hs_sat26zyVQ.evaluateOnce = function () {
                    var hs_sat26zyVR = new $hs.Data(1);
                    hs_sat26zyVR.data = [1];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyOt, hs_sat26zyVR);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26zyVQ);
            };
            var hs_sat26zyVK = new $hs.Thunk();
            hs_sat26zyVK.evaluateOnce = function () {
                var hs_sat26zyVM = new $hs.Thunk();
                hs_sat26zyVM.evaluateOnce = function () {
                    var hs_sat26zyVP = new $hs.Data(1);
                    hs_sat26zyVP.data = [0];
                    return $hs.modules.DataziByteString.hs_index.hscall(hs_s26zyOt, hs_sat26zyVP);
                };
                var hs_wild26zyVN = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_sat26zyVM);
                var hs_w26zyOy = hs_wild26zyVN.data[0];
                var hs_sat26zyVO = hs_w26zyOy << 8;
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26zyVO];
                return $res;
            };
            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord16, hs_sat26zyVK, hs_sat26zyVL);
        };
        var hs_sat26zyVI = new $hs.Thunk();
        hs_sat26zyVI.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
        };
        return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zyVI, hs_sat26zyVJ);
    };
    hs_sat26zyVU.evaluateOnce = function () {
        var hs_sat26zyVT = new $hs.Data(1);
        hs_sat26zyVT.data = [2];
        return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_sat26zyVT);
    };
    this.hs_getWord16be.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyVU, hs_sat26zyVS);
    };
    this.hs_getByteString.evaluate = function (hs_n26zyOH) {
        var hs_sat26zyVW = new $hs.Func(1);
        hs_sat26zyVW.evaluate = function (hs_bs26zyOL) {
            var hs_sat26zyVY = new $hs.Thunk();
            hs_sat26zyVY.evaluateOnce = function () {
                return $hs.modules.DataziByteString.hs_copy.hscall(hs_bs26zyOL);
            };
            var hs_sat26zyVX = new $hs.Thunk();
            hs_sat26zyVX.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
            };
            return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zyVX, hs_sat26zyVY);
        };
        var hs_sat26zyVV = new $hs.Thunk();
        hs_sat26zyVV.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_n26zyOH);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyVV, hs_sat26zyVW);
    };
    this.hs_getLazzyByteString.evaluate = function (hs_n26zyOT) {
        var hs_sat26zyW0 = new $hs.Thunk();
        hs_sat26zyW0.evaluateOnce = function () {
            var hs_sat26zyW2 = new $hs.Thunk();
            hs_sat26zyW2.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziNum.hs_zdfNumInt, hs_n26zyOT);
            };
            return $hs.modules.DataziSerializzeziGet.hs_getByteString.hscall(hs_sat26zyW2);
        };
        var hs_sat26zyVZ = new $hs.Func(1);
        hs_sat26zyVZ.evaluate = function (hs_bs26zyOQ) {
            var hs_sat26zyW1 = new $hs.Data(2);
            hs_sat26zyW1.data = [hs_bs26zyOQ, $hs.modules.GHCziTypes.hs_ZMZN];
            return $hs.modules.DataziByteStringziLazzy.hs_fromChunks.hscall(hs_sat26zyW1);
        };
        return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, hs_sat26zyVZ, hs_sat26zyW0);
    };
    hs_getPtr25r9Mf.evaluate = function (hs_zddStorable26zyP9, hs_n26zyOY) {
        var hs_sat26zyW4 = new $hs.Func(1);
        hs_sat26zyW4.evaluate = function (hs_ds26zyP2) {
            var hs_wild26zyW7 = hs_ds26zyP2;
            if (hs_ds26zyP2.notEvaluated) {
                hs_wild26zyW7 = hs_ds26zyP2.hscall();
            }
            var hs_fp26zyP7 = hs_wild26zyW7.data[0];
            var hs_o26zyPb = hs_wild26zyW7.data[1];
            var hs_sat26zyW6 = new $hs.Thunk();
            hs_sat26zyW6.evaluateOnce = function () {
                var hs_sat26zyW9 = new $hs.Thunk();
                hs_sat26zyW9.evaluateOnce = function () {
                    var hs_sat26zyWa = new $hs.Func(1);
                    hs_sat26zyWa.evaluate = function (hs_p26zyPa) {
                        var hs_sat26zyWb = new $hs.Thunk();
                        hs_sat26zyWb.evaluateOnce = function () {
                            var hs_sat26zyWc = new $hs.Thunk();
                            hs_sat26zyWc.evaluateOnce = function () {
                                return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_p26zyPa, hs_o26zyPb);
                            };
                            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_sat26zyWc);
                        };
                        return $hs.modules.ForeignziStorable.hs_peek.hscall(hs_zddStorable26zyP9, hs_sat26zyWb);
                    };
                    return $hs.modules.ForeignziForeignPtrziImp.hs_withForeignPtr.hscall(hs_fp26zyP7, hs_sat26zyWa);
                };
                return $hs.modules.DataziByteStringziInternal.hs_inlinePerformIO.hscall(hs_sat26zyW9);
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyW6);
        };
        var hs_sat26zyW3 = new $hs.Thunk();
        hs_sat26zyW3.evaluateOnce = function () {
            var hs_sat26zyW5 = new $hs.Thunk();
            hs_sat26zyW5.evaluateOnce = function () {
                return $hs.modules.DataziSerializzeziGet.hs_getBytes.hscall(hs_n26zyOY);
            };
            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziByteStringziInternal.hs_toForeignPtr, hs_sat26zyW5);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyW3, hs_sat26zyW4);
    };
    hs_sat26zyWd.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, $hs.modules.GHCziErr.hs_undefined);
    };
    this.hs_getWordhost.evaluateOnce = function () {
        return hs_getPtr25r9Mf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_sat26zyWd);
    };
    hs_sat26zyWe.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, $hs.modules.GHCziErr.hs_undefined);
    };
    this.hs_getWord8.evaluateOnce = function () {
        return hs_getPtr25r9Mf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26zyWe);
    };
    this.hs_getMaybeOf.evaluate = function (hs_m26zyPq) {
        var hs_sat26zyWf = new $hs.Func(1);
        hs_sat26zyWf.evaluate = function (hs_tag26zyPm) {
            var hs_sat26zyWg = new $hs.Thunk();
            hs_sat26zyWg.evaluateOnce = function () {
                var hs_sat26zyWi = new $hs.Thunk();
                hs_sat26zyWi.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zyWi);
            };
            var hs_wild26zyWh = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_tag26zyPm, hs_sat26zyWg);
            switch (hs_wild26zyWh.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziMaybe.hs_Just, hs_m26zyPq);
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.DataziMaybe.hs_Nothing);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.DataziSerializzeziGet.hs_getWord8, hs_sat26zyWf);
    };
    this.hs_getEitherOf.evaluate = function (hs_ma26zyPA, hs_mb26zyPz) {
        var hs_sat26zyWj = new $hs.Func(1);
        hs_sat26zyWj.evaluate = function (hs_tag26zyPv) {
            var hs_sat26zyWk = new $hs.Thunk();
            hs_sat26zyWk.evaluateOnce = function () {
                var hs_sat26zyWm = new $hs.Thunk();
                hs_sat26zyWm.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zyWm);
            };
            var hs_wild26zyWl = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_tag26zyPv, hs_sat26zyWk);
            switch (hs_wild26zyWl.tag) {
            case 1:
                return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziEither.hs_Right, hs_mb26zyPz);
            case 2:
                return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.DataziSerializzeziGet.hs_zdfFunctorGet, $hs.modules.DataziEither.hs_Left, hs_ma26zyPA);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.DataziSerializzeziGet.hs_getWord8, hs_sat26zyWj);
    };
    hs_sat26zyWn.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, $hs.modules.GHCziErr.hs_undefined);
    };
    this.hs_getWord64host.evaluateOnce = function () {
        return hs_getPtr25r9Mf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_sat26zyWn);
    };
    hs_sat26zyWo.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, $hs.modules.GHCziErr.hs_undefined);
    };
    this.hs_getWord32host.evaluateOnce = function () {
        return hs_getPtr25r9Mf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_sat26zyWo);
    };
    hs_sat26zyWp.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, $hs.modules.GHCziErr.hs_undefined);
    };
    this.hs_getWord16host.evaluateOnce = function () {
        return hs_getPtr25r9Mf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_sat26zyWp);
    };
    this.hs_skip.evaluate = function (hs_n26zyPG) {
        var hs_sat26zyWr = new $hs.Func(1);
        hs_sat26zyWr.evaluate = function (hs_s26zyQ2) {
            var hs_s126zyQ3 = new $hs.Thunk();
            hs_s126zyQ3.evaluateOnce = function () {
                return $hs.modules.DataziByteString.hs_drop.hscall(hs_n26zyPG, hs_s26zyQ2);
            };
            var hs_sat26zyWy = new $hs.Func(4);
            hs_sat26zyWy.evaluate = function (hs_ds26zyQa, hs_m26zyQ8, hs_ds126zyQb, hs_k26zyQ9) {
                return hs_k26zyQ9.hscall(hs_s126zyQ3, hs_m26zyQ8, $hs.modules.GHCziUnit.hs_Z0T);
            };
            if (hs_sat26zyWy.notEvaluated) {
                return hs_sat26zyWy.hscall();
            } else {
                return hs_sat26zyWy;
            }
        };
        var hs_sat26zyWq = new $hs.Thunk();
        hs_sat26zyWq.evaluateOnce = function () {
            var hs_n126zyPS = hs_n26zyPG;
            if (hs_n26zyPG.notEvaluated) {
                hs_n126zyPS = hs_n26zyPG.hscall();
            }
            var hs_sat26zyWu = new $hs.Func(4);
            hs_sat26zyWu.evaluate = function (hs_i026zyPQ, hs_m026zyPV, hs_kf26zyPW, hs_ks26zyPX) {
                var hs_sat26zyWv = new $hs.Thunk();
                hs_sat26zyWv.evaluateOnce = function () {
                    return $hs.modules.DataziByteString.hs_length.hscall(hs_i026zyPQ);
                };
                var hs_wild26zyWw = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26zyWv, hs_n126zyPS);
                switch (hs_wild26zyWw.tag) {
                case 1:
                    var hs_sat26zyWx = new $hs.Thunk();
                    hs_sat26zyWx.evaluateOnce = function () {
                        return hs_ensureRec25r9Mc.hscall(hs_n126zyPS);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_demandInput25r9Md, hs_sat26zyWx, hs_i026zyPQ, hs_m026zyPV, hs_kf26zyPW, hs_ks26zyPX);
                case 2:
                    return hs_ks26zyPX.hscall(hs_i026zyPQ, hs_m026zyPV, hs_i026zyPQ);
                }
            };
            var hs_sat26zyWs = new $hs.Func(1);
            hs_sat26zyWs.evaluate = function (hs_tpl26zyPK) {
                if (hs_tpl26zyPK.notEvaluated) {
                    return hs_tpl26zyPK.hscall();
                } else {
                    return hs_tpl26zyPK;
                }
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26zyWs, hs_sat26zyWu);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zyWq, hs_sat26zyWr);
    };
    this.hs_Complete.data = [];
    this.hs_Incomplete.data = [];
    this.hs_Fail.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Partial.evaluate = function (hs_eta1cW6l3) {
        var $res = new $hs.Data(2);
        $res.data = [hs_eta1cW6l3];
        return $res;
    };
    this.hs_Done.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(3);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_Get.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.DataziSerializzeziGet.hs_Get.hscall(hs_eta1cW6l3);
    };
};
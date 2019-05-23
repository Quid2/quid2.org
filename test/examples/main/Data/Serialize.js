
$hs.modules.DataziSerializze = new $hs.Module();
$hs.modules.DataziSerializze.dependencies = ["Data.ByteString", "Data.ByteString.Lazy", "Data.Array.Base", "GHC.Tuple", "GHC.Unit", "GHC.CString", "GHC.Integer", "Data.List", "Prelude", "GHC.Base", "GHC.Classes", "GHC.Enum", "GHC.Err", "GHC.Float", "GHC.Int", "GHC.Num", "GHC.Real", "GHC.Word", "Control.Monad", "Data.Bits", "Data.Serialize.Put", "Data.Serialize.Get"];
$hs.modules.DataziSerializze.initBeforeDependencies = function () {
    this.hs_put = new $hs.Func(1);
    this.hs_get = new $hs.Func(1);
    this.hs_decode = new $hs.Func(1);
    this.hs_decodeLazzy = new $hs.Func(1);
    this.hs_encode = new $hs.Func(1);
    this.hs_encodeLazzy = new $hs.Func(1);
    this.hs_zdfSerializzeZLZR = new $hs.Data(1);
    this.hs_zdfSerializzeBool = new $hs.Data(1);
    this.hs_zdfSerializzeOrdering = new $hs.Data(1);
    this.hs_zdfSerializzeWord8 = new $hs.Data(1);
    this.hs_zdfSerializzeWord16 = new $hs.Data(1);
    this.hs_zdfSerializzeWord32 = new $hs.Data(1);
    this.hs_zdfSerializzeWord64 = new $hs.Data(1);
    this.hs_zdfSerializzeInt8 = new $hs.Data(1);
    this.hs_zdfSerializzeInt16 = new $hs.Data(1);
    this.hs_zdfSerializzeInt32 = new $hs.Data(1);
    this.hs_zdfSerializzeInt64 = new $hs.Data(1);
    this.hs_zdfSerializzeWord = new $hs.Data(1);
    this.hs_zdfSerializzeInt = new $hs.Data(1);
    this.hs_zdfSerializzeRatio = new $hs.Func(2);
    this.hs_zdfSerializzeChar = new $hs.Data(1);
    this.hs_zdfSerializzeZLz2cUZR = new $hs.Func(2);
    this.hs_zdfSerializzeZLz2cUz2cUZR = new $hs.Func(3);
    this.hs_zdfSerializzeZLz2cUz2cUz2cUZR = new $hs.Func(4);
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUZR = new $hs.Func(5);
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(6);
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(7);
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(8);
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(9);
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR = new $hs.Func(10);
    this.hs_zdfSerializzeZMZN = new $hs.Func(1);
    this.hs_zdfSerializzeMaybe = new $hs.Func(1);
    this.hs_zdfSerializzeEither = new $hs.Func(2);
    this.hs_zdfSerializzeByteString0 = new $hs.Data(1);
    this.hs_zdfSerializzeByteString = new $hs.Data(1);
    this.hs_zdfSerializzeSet = new $hs.Func(2);
    this.hs_zdfSerializzeMap = new $hs.Func(3);
    this.hs_zdfSerializzeIntSet = new $hs.Data(1);
    this.hs_zdfSerializzeIntMap = new $hs.Func(1);
    this.hs_zdfSerializzeSeq = new $hs.Func(1);
    this.hs_zdfSerializzeTree = new $hs.Func(1);
    this.hs_zdfSerializzeArray = new $hs.Func(3);
    this.hs_zdfSerializzeUArray = new $hs.Func(4);
    this.hs_zdfSerializzeInteger = new $hs.Data(1);
    this.hs_zdfSerializzeFloat = new $hs.Data(1);
    this.hs_zdfSerializzeDouble = new $hs.Data(1);
    this.hs_DZCSerializze = new $hs.Func(2);
    this.hs_put.notEvaluated = true;
    this.hs_put.evaluate = function (hs_tpl26zxBQ) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_tpl26zxBQ);
    };
    this.hs_get.notEvaluated = true;
    this.hs_get.evaluate = function (hs_tpl26zxBW) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_tpl26zxBW);
    };
    this.hs_decode.notEvaluated = true;
    this.hs_decode.evaluate = function (hs_zddSerializze226zxC2) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxC2);
    };
    this.hs_decodeLazzy.notEvaluated = true;
    this.hs_decodeLazzy.evaluate = function (hs_zddSerializze226zxC5) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxC5);
    };
    this.hs_encode.notEvaluated = true;
    this.hs_encode.evaluate = function (hs_zddSerializze226zxC8) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxC8);
    };
    this.hs_encodeLazzy.notEvaluated = true;
    this.hs_encodeLazzy.evaluate = function (hs_zddSerializze226zxCb) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxCb);
    };
    this.hs_zdfSerializzeZLZR.notEvaluated = true;
    this.hs_zdfSerializzeZLZR.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeBool.notEvaluated = true;
    this.hs_zdfSerializzeBool.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeOrdering.notEvaluated = true;
    this.hs_zdfSerializzeOrdering.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeWord8.notEvaluated = true;
    this.hs_zdfSerializzeWord8.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeWord16.notEvaluated = true;
    this.hs_zdfSerializzeWord16.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeWord32.notEvaluated = true;
    this.hs_zdfSerializzeWord32.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeWord64.notEvaluated = true;
    this.hs_zdfSerializzeWord64.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeInt8.notEvaluated = true;
    this.hs_zdfSerializzeInt8.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeInt16.notEvaluated = true;
    this.hs_zdfSerializzeInt16.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeInt32.notEvaluated = true;
    this.hs_zdfSerializzeInt32.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeInt64.notEvaluated = true;
    this.hs_zdfSerializzeInt64.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeWord.notEvaluated = true;
    this.hs_zdfSerializzeWord.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeInt.notEvaluated = true;
    this.hs_zdfSerializzeInt.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeRatio.notEvaluated = true;
    this.hs_zdfSerializzeRatio.evaluate = function (hs_zddSerializze226zxDF, hs_zddIntegral26zxDG) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxDF, hs_zddIntegral26zxDG);
    };
    this.hs_zdfSerializzeChar.notEvaluated = true;
    this.hs_zdfSerializzeChar.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeZLz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUZR.evaluate = function (hs_zddSerializze226zxGq, hs_zddSerializze326zxGr) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxGq, hs_zddSerializze326zxGr);
    };
    this.hs_zdfSerializzeZLz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxH1, hs_zddSerializze326zxH2, hs_zddSerializze426zxH3) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxH1, hs_zddSerializze326zxH2, hs_zddSerializze426zxH3);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxHN, hs_zddSerializze326zxHO, hs_zddSerializze426zxHP, hs_zddSerializze526zxHQ) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxHN, hs_zddSerializze326zxHO, hs_zddSerializze426zxHP, hs_zddSerializze526zxHQ);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxIK, hs_zddSerializze326zxIL, hs_zddSerializze426zxIM, hs_zddSerializze526zxIN, hs_zddSerializze626zxIO) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxIK, hs_zddSerializze326zxIL, hs_zddSerializze426zxIM, hs_zddSerializze526zxIN, hs_zddSerializze626zxIO);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxK6, hs_zddSerializze326zxK7, hs_zddSerializze426zxK8, hs_zddSerializze526zxK9, hs_zddSerializze626zxKa, hs_zddSerializze726zxKb) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxK6, hs_zddSerializze326zxK7, hs_zddSerializze426zxK8, hs_zddSerializze526zxK9, hs_zddSerializze626zxKa, hs_zddSerializze726zxKb);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxLC, hs_zddSerializze326zxLD, hs_zddSerializze426zxLE, hs_zddSerializze526zxLF, hs_zddSerializze626zxLG, hs_zddSerializze726zxLH, hs_zddSerializze826zxLI) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxLC, hs_zddSerializze326zxLD, hs_zddSerializze426zxLE, hs_zddSerializze526zxLF, hs_zddSerializze626zxLG, hs_zddSerializze726zxLH, hs_zddSerializze826zxLI);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxNi, hs_zddSerializze326zxNj, hs_zddSerializze426zxNk, hs_zddSerializze526zxNl, hs_zddSerializze626zxNm, hs_zddSerializze726zxNn, hs_zddSerializze826zxNo, hs_zddSerializze926zxNp) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxNi, hs_zddSerializze326zxNj, hs_zddSerializze426zxNk, hs_zddSerializze526zxNl, hs_zddSerializze626zxNm, hs_zddSerializze726zxNn, hs_zddSerializze826zxNo, hs_zddSerializze926zxNp);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxP8, hs_zddSerializze326zxP9, hs_zddSerializze426zxPa, hs_zddSerializze526zxPb, hs_zddSerializze626zxPc, hs_zddSerializze726zxPd, hs_zddSerializze826zxPe, hs_zddSerializze926zxPf, hs_zddSerializze1026zxPg) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxP8, hs_zddSerializze326zxP9, hs_zddSerializze426zxPa, hs_zddSerializze526zxPb, hs_zddSerializze626zxPc, hs_zddSerializze726zxPd, hs_zddSerializze826zxPe, hs_zddSerializze926zxPf, hs_zddSerializze1026zxPg);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = true;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxR8, hs_zddSerializze326zxR9, hs_zddSerializze426zxRa, hs_zddSerializze526zxRb, hs_zddSerializze626zxRc, hs_zddSerializze726zxRd, hs_zddSerializze826zxRe, hs_zddSerializze926zxRf, hs_zddSerializze1026zxRg, hs_zddSerializze1126zxRh) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxR8, hs_zddSerializze326zxR9, hs_zddSerializze426zxRa, hs_zddSerializze526zxRb, hs_zddSerializze626zxRc, hs_zddSerializze726zxRd, hs_zddSerializze826zxRe, hs_zddSerializze926zxRf, hs_zddSerializze1026zxRg, hs_zddSerializze1126zxRh);
    };
    this.hs_zdfSerializzeZMZN.notEvaluated = true;
    this.hs_zdfSerializzeZMZN.evaluate = function (hs_zddSerializze226zxRt) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxRt);
    };
    this.hs_zdfSerializzeMaybe.notEvaluated = true;
    this.hs_zdfSerializzeMaybe.evaluate = function (hs_zddSerializze226zxRG) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxRG);
    };
    this.hs_zdfSerializzeEither.notEvaluated = true;
    this.hs_zdfSerializzeEither.evaluate = function (hs_zddSerializze226zxRZ, hs_zddSerializze326zxS0) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxRZ, hs_zddSerializze326zxS0);
    };
    this.hs_zdfSerializzeByteString0.notEvaluated = true;
    this.hs_zdfSerializzeByteString0.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeByteString.notEvaluated = true;
    this.hs_zdfSerializzeByteString.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeSet.notEvaluated = true;
    this.hs_zdfSerializzeSet.evaluate = function (hs_zddOrd26zxSy, hs_zddSerializze226zxSz) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddOrd26zxSy, hs_zddSerializze226zxSz);
    };
    this.hs_zdfSerializzeMap.notEvaluated = true;
    this.hs_zdfSerializzeMap.evaluate = function (hs_zddOrd26zxSX, hs_zddSerializze226zxSY, hs_zddSerializze326zxSZ) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddOrd26zxSX, hs_zddSerializze226zxSY, hs_zddSerializze326zxSZ);
    };
    this.hs_zdfSerializzeIntSet.notEvaluated = true;
    this.hs_zdfSerializzeIntSet.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeIntMap.notEvaluated = true;
    this.hs_zdfSerializzeIntMap.evaluate = function (hs_zddSerializze226zxTh) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxTh);
    };
    this.hs_zdfSerializzeSeq.notEvaluated = true;
    this.hs_zdfSerializzeSeq.evaluate = function (hs_zddSerializze226zxTt) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxTt);
    };
    this.hs_zdfSerializzeTree.notEvaluated = true;
    this.hs_zdfSerializzeTree.evaluate = function (hs_zddSerializze226zxTF) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxTF);
    };
    this.hs_zdfSerializzeArray.notEvaluated = true;
    this.hs_zdfSerializzeArray.evaluate = function (hs_zddSerializze226zxU3, hs_zddIx26zxU4, hs_zddSerializze326zxU5) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxU3, hs_zddIx26zxU4, hs_zddSerializze326zxU5);
    };
    this.hs_zdfSerializzeUArray.notEvaluated = true;
    this.hs_zdfSerializzeUArray.evaluate = function (hs_zddSerializze226zxUy, hs_zddIx26zxUz, hs_zddSerializze326zxUA, hs_zddIArray26zxUB) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_zddSerializze226zxUy, hs_zddIx26zxUz, hs_zddSerializze326zxUA, hs_zddIArray26zxUB);
    };
    this.hs_zdfSerializzeInteger.notEvaluated = true;
    this.hs_zdfSerializzeInteger.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeFloat.notEvaluated = true;
    this.hs_zdfSerializzeFloat.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_zdfSerializzeDouble.notEvaluated = true;
    this.hs_zdfSerializzeDouble.evaluate = function () {
        $hs.modules.DataziSerializze.loadDependencies();
        return this;
    };
    this.hs_DZCSerializze.notEvaluated = true;
    this.hs_DZCSerializze.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziSerializze.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.DataziSerializze.initAfterDependencies = function () {
    this.hs_put.notEvaluated = false;
    this.hs_get.notEvaluated = false;
    this.hs_decode.notEvaluated = false;
    this.hs_decodeLazzy.notEvaluated = false;
    this.hs_encode.notEvaluated = false;
    this.hs_encodeLazzy.notEvaluated = false;
    this.hs_zdfSerializzeZLZR.notEvaluated = false;
    this.hs_zdfSerializzeZLZR.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeBool.notEvaluated = false;
    this.hs_zdfSerializzeBool.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeOrdering.notEvaluated = false;
    this.hs_zdfSerializzeOrdering.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeWord8.notEvaluated = false;
    this.hs_zdfSerializzeWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeWord16.notEvaluated = false;
    this.hs_zdfSerializzeWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeWord32.notEvaluated = false;
    this.hs_zdfSerializzeWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeWord64.notEvaluated = false;
    this.hs_zdfSerializzeWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeInt8.notEvaluated = false;
    this.hs_zdfSerializzeInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeInt16.notEvaluated = false;
    this.hs_zdfSerializzeInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeInt32.notEvaluated = false;
    this.hs_zdfSerializzeInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeInt64.notEvaluated = false;
    this.hs_zdfSerializzeInt64.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeWord.notEvaluated = false;
    this.hs_zdfSerializzeWord.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeInt.notEvaluated = false;
    this.hs_zdfSerializzeInt.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeRatio.notEvaluated = false;
    this.hs_zdfSerializzeChar.notEvaluated = false;
    this.hs_zdfSerializzeChar.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeZLz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.notEvaluated = false;
    this.hs_zdfSerializzeZMZN.notEvaluated = false;
    this.hs_zdfSerializzeMaybe.notEvaluated = false;
    this.hs_zdfSerializzeEither.notEvaluated = false;
    this.hs_zdfSerializzeByteString0.notEvaluated = false;
    this.hs_zdfSerializzeByteString0.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeByteString.notEvaluated = false;
    this.hs_zdfSerializzeByteString.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeSet.notEvaluated = false;
    this.hs_zdfSerializzeMap.notEvaluated = false;
    this.hs_zdfSerializzeIntSet.notEvaluated = false;
    this.hs_zdfSerializzeIntSet.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeIntMap.notEvaluated = false;
    this.hs_zdfSerializzeSeq.notEvaluated = false;
    this.hs_zdfSerializzeTree.notEvaluated = false;
    this.hs_zdfSerializzeArray.notEvaluated = false;
    this.hs_zdfSerializzeUArray.notEvaluated = false;
    this.hs_zdfSerializzeInteger.notEvaluated = false;
    this.hs_zdfSerializzeInteger.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeFloat.notEvaluated = false;
    this.hs_zdfSerializzeFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfSerializzeDouble.notEvaluated = false;
    this.hs_zdfSerializzeDouble.evaluate = function () {
        return this;
    };
    this.hs_DZCSerializze.notEvaluated = false;
    var hs_zdcget25r963 = new $hs.Thunk();
    var hs_zdcput25r964 = new $hs.Func(1);
    var hs_sat26zxWi = new $hs.Thunk();
    var hs_zdcget125r968 = new $hs.Thunk();
    var hs_sat26zxWl = new $hs.Thunk();
    var hs_zdcput125r96c = new $hs.Thunk();
    var hs_sat26zxWo = new $hs.Thunk();
    var hs_zdcget225r96g = new $hs.Thunk();
    var hs_sat26zxWr = new $hs.Thunk();
    var hs_zdcput225r96k = new $hs.Thunk();
    var hs_sat26zxWs = new $hs.Thunk();
    var hs_sat26zxWt = new $hs.Thunk();
    var hs_zdcget325r96o = new $hs.Thunk();
    var hs_zdcput325r96r = new $hs.Func(1);
    var hs_sat26zxWv = new $hs.Thunk();
    var hs_sat26zxWw = new $hs.Thunk();
    var hs_zdcget425r96v = new $hs.Thunk();
    var hs_zdcput425r96y = new $hs.Func(1);
    var hs_sat26zxWy = new $hs.Thunk();
    var hs_sat26zxWz = new $hs.Thunk();
    var hs_zdcget525r96C = new $hs.Thunk();
    var hs_zdcput525r96F = new $hs.Func(1);
    var hs_sat26zxWB = new $hs.Thunk();
    var hs_sat26zxWC = new $hs.Thunk();
    var hs_zdcget625r96J = new $hs.Thunk();
    var hs_zdcput625r96M = new $hs.Func(1);
    var hs_sat26zxWE = new $hs.Thunk();
    var hs_sat26zxWF = new $hs.Thunk();
    var hs_zdcget725r96Q = new $hs.Thunk();
    var hs_zdcput725r96T = new $hs.Func(1);
    var hs_sat26zxWH = new $hs.Thunk();
    var hs_sat26zxWI = new $hs.Thunk();
    var hs_zdcget825r96X = new $hs.Thunk();
    var hs_zdcput825r970 = new $hs.Func(1);
    var hs_zdcget925r974 = new $hs.Func(2);
    var hs_zdcput925r97c = new $hs.Func(3);
    var hs_sat26zxWT = new $hs.Data(1);
    var hs_sat26zxWU = new $hs.Thunk();
    var hs_shiftL625r97t = new $hs.Thunk();
    var hs_sat26zxWV = new $hs.Thunk();
    var hs_sat26zxWW = new $hs.Thunk();
    var hs_getByte25r97w = new $hs.Thunk();
    var hs_sat26zxXN = new $hs.Func(1);
    var hs_zdcget1025r97z = new $hs.Thunk();
    var hs_zdcput1025r98H = new $hs.Func(1);
    var hs_zdcget1125r99U = new $hs.Func(2);
    var hs_zdcput1125r9a1 = new $hs.Func(2);
    var hs_zdcget1225r9ae = new $hs.Func(3);
    var hs_zdcput1225r9ao = new $hs.Func(4);
    var hs_zdcget1325r9aQ = new $hs.Func(4);
    var hs_zdcput1325r9b3 = new $hs.Func(5);
    var hs_zdcget1425r9bD = new $hs.Func(5);
    var hs_zdcput1425r9bT = new $hs.Func(6);
    var hs_zdcget1525r9cB = new $hs.Func(6);
    var hs_zdcput1525r9db = new $hs.Func(6);
    var hs_zdcget1625r9dY = new $hs.Func(7);
    var hs_zdcput1625r9eC = new $hs.Func(7);
    var hs_zdcget1725r9fv = new $hs.Func(8);
    var hs_zdcput1725r9gd = new $hs.Func(8);
    var hs_zdcget1825r9hc = new $hs.Func(9);
    var hs_zdcput1825r9hY = new $hs.Func(9);
    var hs_zdcget1925r9j3 = new $hs.Func(10);
    var hs_zdcput1925r9jT = new $hs.Func(10);
    var hs_zdcget2025r9l4 = new $hs.Func(1);
    var hs_zdcput2025r9l8 = new $hs.Func(1);
    var hs_zddSerializze25r9lg = new $hs.Thunk();
    var hs_zdcget2125r9lh = new $hs.Func(1);
    var hs_zdcput2125r9ll = new $hs.Func(1);
    var hs_zdcget2225r9lt = new $hs.Func(2);
    var hs_zdcput2225r9lA = new $hs.Func(2);
    var hs_sat26zy0Q = new $hs.Thunk();
    var hs_zdcget2325r9lN = new $hs.Thunk();
    var hs_zdcput2325r9lP = new $hs.Func(1);
    var hs_sat26zy0U = new $hs.Thunk();
    var hs_zdcget2425r9lV = new $hs.Thunk();
    var hs_zdcput2425r9lX = new $hs.Func(1);
    var hs_zdcget2525r9m4 = new $hs.Func(2);
    var hs_zdcput2525r9ma = new $hs.Func(2);
    var hs_zdcget2625r9mm = new $hs.Func(3);
    var hs_zdcput2625r9mv = new $hs.Func(3);
    var hs_sat26zy19 = new $hs.Thunk();
    var hs_zdcget2725r9mM = new $hs.Thunk();
    var hs_sat26zy1a = new $hs.Thunk();
    var hs_zdcput2725r9mO = new $hs.Thunk();
    var hs_zdcget2825r9mQ = new $hs.Func(1);
    var hs_zdcput2825r9mV = new $hs.Func(1);
    var hs_zdcget2925r9n4 = new $hs.Func(1);
    var hs_zdcput2925r9n8 = new $hs.Func(1);
    var hs_zdcget3025r9ng = new $hs.Func(1);
    var hs_zdcput3025r9nk = new $hs.Func(1);
    var hs_zdcget3125r9ns = new $hs.Func(3);
    var hs_zdcput3125r9nB = new $hs.Func(3);
    var hs_zdcget3225r9nS = new $hs.Func(4);
    var hs_zdcput3225r9o3 = new $hs.Func(4);
    var hs_zddNum26zxUF = new $hs.Thunk();
    var hs_zddEq26zxUH = new $hs.Thunk();
    var hs_sat26zy1I = new $hs.Func(1);
    var hs_unroll25r8HN = new $hs.Thunk();
    var hs_zdcput3325r9oC = new $hs.Func(1);
    var hs_sat26zy25 = new $hs.Thunk();
    var hs_zddNum26zxVi = new $hs.Thunk();
    var hs_sat26zy29 = new $hs.Func(2);
    var hs_roll25r8HO = new $hs.Thunk();
    var hs_sat26zy2p = new $hs.Func(1);
    var hs_sat26zy2q = new $hs.Thunk();
    var hs_zdcget3325r9pc = new $hs.Thunk();
    var hs_sat26zy2r = new $hs.Thunk();
    var hs_sat26zy2s = new $hs.Thunk();
    var hs_sat26zy2t = new $hs.Thunk();
    var hs_zdcget3425r9pA = new $hs.Thunk();
    var hs_sat26zy2u = new $hs.Thunk();
    var hs_sat26zy2v = new $hs.Thunk();
    var hs_sat26zy2w = new $hs.Thunk();
    var hs_zdcget3525r9pE = new $hs.Thunk();
    var hs_zddSerializze125r9pI = new $hs.Thunk();
    var hs_zdcput3425r9pJ = new $hs.Func(1);
    var hs_zdcput3525r9pN = new $hs.Func(1);
    this.hs_put.evaluate = function (hs_tpl26zxBQ) {
        var hs_tpl26zxW8 = hs_tpl26zxBQ;
        if (hs_tpl26zxBQ.notEvaluated) {
            hs_tpl26zxW8 = hs_tpl26zxBQ.hscall();
        }
        var hs_tpl26zxBU = hs_tpl26zxW8.data[0];
        if (hs_tpl26zxBU.notEvaluated) {
            return hs_tpl26zxBU.hscall();
        } else {
            return hs_tpl26zxBU;
        }
    };
    this.hs_get.evaluate = function (hs_tpl26zxBW) {
        var hs_tpl26zxWa = hs_tpl26zxBW;
        if (hs_tpl26zxBW.notEvaluated) {
            hs_tpl26zxWa = hs_tpl26zxBW.hscall();
        }
        var hs_tpl26zxC0 = hs_tpl26zxWa.data[1];
        if (hs_tpl26zxC0.notEvaluated) {
            return hs_tpl26zxC0.hscall();
        } else {
            return hs_tpl26zxC0;
        }
    };
    this.hs_decode.evaluate = function (hs_zddSerializze226zxC2) {
        var hs_sat26zxWb = new $hs.Thunk();
        hs_sat26zxWb.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxC2);
        };
        return $hs.modules.DataziSerializzeziGet.hs_runGet.hscall(hs_sat26zxWb);
    };
    this.hs_decodeLazzy.evaluate = function (hs_zddSerializze226zxC5) {
        var hs_sat26zxWc = new $hs.Thunk();
        hs_sat26zxWc.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxC5);
        };
        return $hs.modules.DataziSerializzeziGet.hs_runGetLazzy.hscall(hs_sat26zxWc);
    };
    this.hs_encode.evaluate = function (hs_zddSerializze226zxC8) {
        var hs_sat26zxWd = new $hs.Thunk();
        hs_sat26zxWd.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxC8);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziPut.hs_runPut, hs_sat26zxWd);
    };
    this.hs_encodeLazzy.evaluate = function (hs_zddSerializze226zxCb) {
        var hs_sat26zxWe = new $hs.Thunk();
        hs_sat26zxWe.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxCb);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziPut.hs_runPutLazzy, hs_sat26zxWe);
    };
    hs_zdcget25r963.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziUnit.hs_Z0T);
    };
    hs_zdcput25r964.evaluate = function (hs_ds26zxCm) {
        var hs_wild26zxWf = hs_ds26zxCm;
        if (hs_ds26zxCm.notEvaluated) {
            hs_wild26zxWf = hs_ds26zxCm.hscall();
        }
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, $hs.modules.GHCziUnit.hs_Z0T);
    };
    this.hs_zdfSerializzeZLZR.data = [hs_zdcput25r964, hs_zdcget25r963];
    hs_sat26zxWi.evaluateOnce = function () {
        var hs_sat26zxWh = new $hs.Thunk();
        hs_sat26zxWh.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt);
        };
        var hs_sat26zxWg = new $hs.Thunk();
        hs_sat26zxWg.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zxWg, hs_sat26zxWh);
    };
    hs_zdcget125r968.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWi, $hs.modules.DataziSerializzeziGet.hs_getWord8);
    };
    hs_sat26zxWl.evaluateOnce = function () {
        var hs_sat26zxWk = new $hs.Thunk();
        hs_sat26zxWk.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumBool);
        };
        var hs_sat26zxWj = new $hs.Thunk();
        hs_sat26zxWj.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zxWj, hs_sat26zxWk);
    };
    hs_zdcput125r96c.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziPut.hs_putWord8, hs_sat26zxWl);
    };
    this.hs_zdfSerializzeBool.data = [hs_zdcput125r96c, hs_zdcget125r968];
    hs_sat26zxWo.evaluateOnce = function () {
        var hs_sat26zxWn = new $hs.Thunk();
        hs_sat26zxWn.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt);
        };
        var hs_sat26zxWm = new $hs.Thunk();
        hs_sat26zxWm.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_toEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zxWm, hs_sat26zxWn);
    };
    hs_zdcget225r96g.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWo, $hs.modules.DataziSerializzeziGet.hs_getWord8);
    };
    hs_sat26zxWr.evaluateOnce = function () {
        var hs_sat26zxWq = new $hs.Thunk();
        hs_sat26zxWq.evaluateOnce = function () {
            return $hs.modules.GHCziEnum.hs_fromEnum.hscall($hs.modules.GHCziEnum.hs_zdfEnumOrdering);
        };
        var hs_sat26zxWp = new $hs.Thunk();
        hs_sat26zxWp.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8);
        };
        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26zxWp, hs_sat26zxWq);
    };
    hs_zdcput225r96k.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.DataziSerializzeziPut.hs_putWord8, hs_sat26zxWr);
    };
    this.hs_zdfSerializzeOrdering.data = [hs_zdcput225r96k, hs_zdcget225r96g];
    this.hs_zdfSerializzeWord8.data = [$hs.modules.DataziSerializzeziPut.hs_putWord8, $hs.modules.DataziSerializzeziGet.hs_getWord8];
    this.hs_zdfSerializzeWord16.data = [$hs.modules.DataziSerializzeziPut.hs_putWord16be, $hs.modules.DataziSerializzeziGet.hs_getWord16be];
    this.hs_zdfSerializzeWord32.data = [$hs.modules.DataziSerializzeziPut.hs_putWord32be, $hs.modules.DataziSerializzeziGet.hs_getWord32be];
    this.hs_zdfSerializzeWord64.data = [$hs.modules.DataziSerializzeziPut.hs_putWord64be, $hs.modules.DataziSerializzeziGet.hs_getWord64be];
    hs_sat26zxWs.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8);
    };
    hs_sat26zxWt.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziInt.hs_zdfNumInt8);
    };
    hs_zdcget325r96o.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWt, hs_sat26zxWs);
    };
    hs_zdcput325r96r.evaluate = function (hs_i26zxCJ) {
        var hs_sat26zxWu = new $hs.Thunk();
        hs_sat26zxWu.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt8, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_i26zxCJ);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxWu);
    };
    this.hs_zdfSerializzeInt8.data = [hs_zdcput325r96r, hs_zdcget325r96o];
    hs_sat26zxWv.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord16);
    };
    hs_sat26zxWw.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord16, $hs.modules.GHCziInt.hs_zdfNumInt16);
    };
    hs_zdcget425r96v.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWw, hs_sat26zxWv);
    };
    hs_zdcput425r96y.evaluate = function (hs_i26zxCQ) {
        var hs_sat26zxWx = new $hs.Thunk();
        hs_sat26zxWx.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt16, $hs.modules.GHCziWord.hs_zdfNumWord16, hs_i26zxCQ);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord16, hs_sat26zxWx);
    };
    this.hs_zdfSerializzeInt16.data = [hs_zdcput425r96y, hs_zdcget425r96v];
    hs_sat26zxWy.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord32);
    };
    hs_sat26zxWz.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord32, $hs.modules.GHCziInt.hs_zdfNumInt32);
    };
    hs_zdcget525r96C.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWz, hs_sat26zxWy);
    };
    hs_zdcput525r96F.evaluate = function (hs_i26zxCX) {
        var hs_sat26zxWA = new $hs.Thunk();
        hs_sat26zxWA.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziWord.hs_zdfNumWord32, hs_i26zxCX);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord32, hs_sat26zxWA);
    };
    this.hs_zdfSerializzeInt32.data = [hs_zdcput525r96F, hs_zdcget525r96C];
    hs_sat26zxWB.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord64);
    };
    hs_sat26zxWC.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziInt.hs_zdfNumInt64);
    };
    hs_zdcget625r96J.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWC, hs_sat26zxWB);
    };
    hs_zdcput625r96M.evaluate = function (hs_i26zxD4) {
        var hs_sat26zxWD = new $hs.Thunk();
        hs_sat26zxWD.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_i26zxD4);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord64, hs_sat26zxWD);
    };
    this.hs_zdfSerializzeInt64.data = [hs_zdcput625r96M, hs_zdcget625r96J];
    hs_sat26zxWE.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord64);
    };
    hs_sat26zxWF.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfNumWord);
    };
    hs_zdcget725r96Q.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWF, hs_sat26zxWE);
    };
    hs_zdcput725r96T.evaluate = function (hs_i26zxDb) {
        var hs_sat26zxWG = new $hs.Thunk();
        hs_sat26zxWG.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_i26zxDb);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord64, hs_sat26zxWG);
    };
    this.hs_zdfSerializzeWord.data = [hs_zdcput725r96T, hs_zdcget725r96Q];
    hs_sat26zxWH.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt64);
    };
    hs_sat26zxWI.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_zdcget825r96X.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWI, hs_sat26zxWH);
    };
    hs_zdcput825r970.evaluate = function (hs_i26zxDi) {
        var hs_sat26zxWJ = new $hs.Thunk();
        hs_sat26zxWJ.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziInt.hs_zdfNumInt64, hs_i26zxDi);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt64, hs_sat26zxWJ);
    };
    this.hs_zdfSerializzeInt.data = [hs_zdcput825r970, hs_zdcget825r96X];
    hs_zdcget925r974.evaluate = function (hs_zddSerializze226zxDp, hs_zddIntegral26zxDn) {
        var hs_sat26zxWL = new $hs.Thunk();
        hs_sat26zxWL.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxDp);
        };
        var hs_sat26zxWM = new $hs.Thunk();
        hs_sat26zxWM.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxDp);
        };
        var hs_sat26zxWK = new $hs.Thunk();
        hs_sat26zxWK.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_zv.hscall(hs_zddIntegral26zxDn);
        };
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWK, hs_sat26zxWM, hs_sat26zxWL);
    };
    hs_zdcput925r97c.evaluate = function (hs_zddSerializze226zxDw, hs_zddIntegral26zxDx, hs_r26zxDy) {
        var hs_sat26zxWO = new $hs.Thunk();
        hs_sat26zxWO.evaluateOnce = function () {
            var hs_sat26zxWQ = new $hs.Thunk();
            hs_sat26zxWQ.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_denominator.hscall(hs_zddIntegral26zxDx, hs_r26zxDy);
            };
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxDw, hs_sat26zxWQ);
        };
        var hs_sat26zxWN = new $hs.Thunk();
        hs_sat26zxWN.evaluateOnce = function () {
            var hs_sat26zxWP = new $hs.Thunk();
            hs_sat26zxWP.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_numerator.hscall(hs_zddIntegral26zxDx, hs_r26zxDy);
            };
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxDw, hs_sat26zxWP);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxWN, hs_sat26zxWO);
    };
    this.hs_zdfSerializzeRatio.evaluate = function (hs_zddSerializze226zxDF, hs_zddIntegral26zxDG) {
        var hs_sat26zxWS = new $hs.Thunk();
        hs_sat26zxWS.evaluateOnce = function () {
            return hs_zdcget925r974.hscall(hs_zddSerializze226zxDF, hs_zddIntegral26zxDG);
        };
        var hs_sat26zxWR = new $hs.Func(1);
        hs_sat26zxWR.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcput925r97c.hscall(hs_zddSerializze226zxDF, hs_zddIntegral26zxDG, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zxWR, hs_sat26zxWS];
        return $res;
    };
    hs_sat26zxWT.data = [6];
    hs_sat26zxWU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
    };
    hs_shiftL625r97t.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_flip.hscall(hs_sat26zxWU, hs_sat26zxWT);
    };
    hs_sat26zxWV.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8);
    };
    hs_sat26zxWW.evaluateOnce = function () {
        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziNum.hs_zdfNumInt);
    };
    hs_getByte25r97w.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWW, hs_sat26zxWV);
    };
    hs_sat26zxXN.evaluate = function (hs_w26zxDR) {
        var hs_sat26zxWY = new $hs.Func(1);
        hs_sat26zxWY.evaluate = function (hs_r26zxET) {
            var hs_sat26zxXM = new $hs.Thunk();
            hs_sat26zxXM.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_chr.hscall(hs_r26zxET);
            };
            var hs_sat26zxXL = new $hs.Thunk();
            hs_sat26zxXL.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
            };
            return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zxXL, hs_sat26zxXM);
        };
        var hs_sat26zxWX = new $hs.Thunk();
        hs_sat26zxWX.evaluateOnce = function () {
            var hs_sat26zxWZ = new $hs.Data(1);
            hs_sat26zxWZ.data = [128];
            var hs_wild26zxX0 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_w26zxDR, hs_sat26zxWZ);
            switch (hs_wild26zxX0.tag) {
            case 1:
                var hs_sat26zxX2 = new $hs.Data(1);
                hs_sat26zxX2.data = [224];
                var hs_wild126zxX3 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_w26zxDR, hs_sat26zxX2);
                switch (hs_wild126zxX3.tag) {
                case 1:
                    var hs_sat26zxXc = new $hs.Data(1);
                    hs_sat26zxXc.data = [240];
                    var hs_wild226zxXd = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_w26zxDR, hs_sat26zxXc);
                    switch (hs_wild226zxXd.tag) {
                    case 1:
                        var hs_sat26zxXs = new $hs.Func(1);
                        hs_sat26zxXs.evaluate = function (hs_x26zxEc) {
                            var hs_sat26zxXw = new $hs.Func(1);
                            hs_sat26zxXw.evaluate = function (hs_y26zxEb) {
                                var hs_sat26zxXA = new $hs.Func(1);
                                hs_sat26zxXA.evaluate = function (hs_zz26zxEa) {
                                    var hs_sat26zxXD = new $hs.Thunk();
                                    hs_sat26zxXD.evaluateOnce = function () {
                                        var hs_sat26zxXE = new $hs.Thunk();
                                        hs_sat26zxXE.evaluateOnce = function () {
                                            var hs_sat26zxXF = new $hs.Thunk();
                                            hs_sat26zxXF.evaluateOnce = function () {
                                                var hs_sat26zxXG = new $hs.Thunk();
                                                hs_sat26zxXG.evaluateOnce = function () {
                                                    var hs_sat26zxXH = new $hs.Thunk();
                                                    hs_sat26zxXH.evaluateOnce = function () {
                                                        var hs_sat26zxXI = new $hs.Thunk();
                                                        hs_sat26zxXI.evaluateOnce = function () {
                                                            var hs_sat26zxXJ = new $hs.Thunk();
                                                            hs_sat26zxXJ.evaluateOnce = function () {
                                                                var hs_sat26zxXK = new $hs.Data(1);
                                                                hs_sat26zxXK.data = [240];
                                                                return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXK, hs_w26zxDR);
                                                            };
                                                            return hs_shiftL625r97t.hscall(hs_sat26zxXJ);
                                                        };
                                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26zxEc, hs_sat26zxXI);
                                                    };
                                                    return hs_shiftL625r97t.hscall(hs_sat26zxXH);
                                                };
                                                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_y26zxEb, hs_sat26zxXG);
                                            };
                                            return hs_shiftL625r97t.hscall(hs_sat26zxXF);
                                        };
                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_zz26zxEa, hs_sat26zxXE);
                                    };
                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXD);
                                };
                                var hs_sat26zxXz = new $hs.Thunk();
                                hs_sat26zxXz.evaluateOnce = function () {
                                    var hs_sat26zxXB = new $hs.Thunk();
                                    hs_sat26zxXB.evaluateOnce = function () {
                                        var hs_sat26zxXC = new $hs.Data(1);
                                        hs_sat26zxXC.data = [128];
                                        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXC);
                                    };
                                    return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXB, hs_getByte25r97w);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXz, hs_sat26zxXA);
                            };
                            var hs_sat26zxXv = new $hs.Thunk();
                            hs_sat26zxXv.evaluateOnce = function () {
                                var hs_sat26zxXx = new $hs.Thunk();
                                hs_sat26zxXx.evaluateOnce = function () {
                                    var hs_sat26zxXy = new $hs.Data(1);
                                    hs_sat26zxXy.data = [128];
                                    return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXy);
                                };
                                return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXx, hs_getByte25r97w);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXv, hs_sat26zxXw);
                        };
                        var hs_sat26zxXr = new $hs.Thunk();
                        hs_sat26zxXr.evaluateOnce = function () {
                            var hs_sat26zxXt = new $hs.Thunk();
                            hs_sat26zxXt.evaluateOnce = function () {
                                var hs_sat26zxXu = new $hs.Data(1);
                                hs_sat26zxXu.data = [128];
                                return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXu);
                            };
                            return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXt, hs_getByte25r97w);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXr, hs_sat26zxXs);
                    case 2:
                        var hs_sat26zxXe = new $hs.Func(1);
                        hs_sat26zxXe.evaluate = function (hs_x26zxEx) {
                            var hs_sat26zxXi = new $hs.Func(1);
                            hs_sat26zxXi.evaluate = function (hs_y26zxEw) {
                                var hs_sat26zxXl = new $hs.Thunk();
                                hs_sat26zxXl.evaluateOnce = function () {
                                    var hs_sat26zxXm = new $hs.Thunk();
                                    hs_sat26zxXm.evaluateOnce = function () {
                                        var hs_sat26zxXn = new $hs.Thunk();
                                        hs_sat26zxXn.evaluateOnce = function () {
                                            var hs_sat26zxXo = new $hs.Thunk();
                                            hs_sat26zxXo.evaluateOnce = function () {
                                                var hs_sat26zxXp = new $hs.Thunk();
                                                hs_sat26zxXp.evaluateOnce = function () {
                                                    var hs_sat26zxXq = new $hs.Data(1);
                                                    hs_sat26zxXq.data = [224];
                                                    return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXq, hs_w26zxDR);
                                                };
                                                return hs_shiftL625r97t.hscall(hs_sat26zxXp);
                                            };
                                            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26zxEx, hs_sat26zxXo);
                                        };
                                        return hs_shiftL625r97t.hscall(hs_sat26zxXn);
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_y26zxEw, hs_sat26zxXm);
                                };
                                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXl);
                            };
                            var hs_sat26zxXh = new $hs.Thunk();
                            hs_sat26zxXh.evaluateOnce = function () {
                                var hs_sat26zxXj = new $hs.Thunk();
                                hs_sat26zxXj.evaluateOnce = function () {
                                    var hs_sat26zxXk = new $hs.Data(1);
                                    hs_sat26zxXk.data = [128];
                                    return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXk);
                                };
                                return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXj, hs_getByte25r97w);
                            };
                            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXh, hs_sat26zxXi);
                        };
                        var hs_sat26zxXb = new $hs.Thunk();
                        hs_sat26zxXb.evaluateOnce = function () {
                            var hs_sat26zxXf = new $hs.Thunk();
                            hs_sat26zxXf.evaluateOnce = function () {
                                var hs_sat26zxXg = new $hs.Data(1);
                                hs_sat26zxXg.data = [128];
                                return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXg);
                            };
                            return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXf, hs_getByte25r97w);
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxXb, hs_sat26zxXe);
                    }
                case 2:
                    var hs_sat26zxX4 = new $hs.Func(1);
                    hs_sat26zxX4.evaluate = function (hs_x26zxEK) {
                        var hs_sat26zxX7 = new $hs.Thunk();
                        hs_sat26zxX7.evaluateOnce = function () {
                            var hs_sat26zxX8 = new $hs.Thunk();
                            hs_sat26zxX8.evaluateOnce = function () {
                                var hs_sat26zxX9 = new $hs.Thunk();
                                hs_sat26zxX9.evaluateOnce = function () {
                                    var hs_sat26zxXa = new $hs.Data(1);
                                    hs_sat26zxXa.data = [192];
                                    return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxXa, hs_w26zxDR);
                                };
                                return hs_shiftL625r97t.hscall(hs_sat26zxX9);
                            };
                            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_x26zxEK, hs_sat26zxX8);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxX7);
                    };
                    var hs_sat26zxX1 = new $hs.Thunk();
                    hs_sat26zxX1.evaluateOnce = function () {
                        var hs_sat26zxX5 = new $hs.Thunk();
                        hs_sat26zxX5.evaluateOnce = function () {
                            var hs_sat26zxX6 = new $hs.Data(1);
                            hs_sat26zxX6.data = [128];
                            return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxX6);
                        };
                        return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxX5, hs_getByte25r97w);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxX1, hs_sat26zxX4);
                }
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_w26zxDR);
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxWX, hs_sat26zxWY);
    };
    hs_zdcget1025r97z.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_getByte25r97w, hs_sat26zxXN);
    };
    hs_zdcput1025r98H.evaluate = function (hs_a26zxF0) {
        var hs_c26zxF1 = new $hs.Thunk();
        hs_c26zxF1.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_ord.hscall(hs_a26zxF0);
        };
        var hs_zz26zxF5 = new $hs.Thunk();
        hs_zz26zxF5.evaluateOnce = function () {
            var hs_sat26zxYO = new $hs.Thunk();
            hs_sat26zxYO.evaluateOnce = function () {
                var hs_sat26zxYP = new $hs.Data(1);
                hs_sat26zxYP.data = [63];
                return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_c26zxF1, hs_sat26zxYP);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYO);
        };
        var hs_y26zxFb = new $hs.Thunk();
        hs_y26zxFb.evaluateOnce = function () {
            var hs_sat26zxYK = new $hs.Thunk();
            hs_sat26zxYK.evaluateOnce = function () {
                var hs_sat26zxYM = new $hs.Data(1);
                hs_sat26zxYM.data = [63];
                var hs_sat26zxYL = new $hs.Thunk();
                hs_sat26zxYL.evaluateOnce = function () {
                    var hs_sat26zxYN = new $hs.Data(1);
                    hs_sat26zxYN.data = [6];
                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_c26zxF1, hs_sat26zxYN);
                };
                return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxYL, hs_sat26zxYM);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYK);
        };
        var hs_x26zxFh = new $hs.Thunk();
        hs_x26zxFh.evaluateOnce = function () {
            var hs_sat26zxYG = new $hs.Thunk();
            hs_sat26zxYG.evaluateOnce = function () {
                var hs_sat26zxYI = new $hs.Data(1);
                hs_sat26zxYI.data = [63];
                var hs_sat26zxYH = new $hs.Thunk();
                hs_sat26zxYH.evaluateOnce = function () {
                    var hs_sat26zxYJ = new $hs.Data(1);
                    hs_sat26zxYJ.data = [12];
                    return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_c26zxF1, hs_sat26zxYJ);
                };
                return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxYH, hs_sat26zxYI);
            };
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYG);
        };
        var hs_sat26zxXP = new $hs.Data(1);
        hs_sat26zxXP.data = [127];
        var hs_wild26zxXQ = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_c26zxF1, hs_sat26zxXP);
        switch (hs_wild26zxXQ.tag) {
        case 1:
            var hs_sat26zxXS = new $hs.Data(1);
            hs_sat26zxXS.data = [2047];
            var hs_wild126zxXT = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_c26zxF1, hs_sat26zxXS);
            switch (hs_wild126zxXT.tag) {
            case 1:
                var hs_sat26zxY2 = new $hs.Data(1);
                hs_sat26zxY2.data = [65535];
                var hs_wild226zxY3 = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_c26zxF1, hs_sat26zxY2);
                switch (hs_wild226zxY3.tag) {
                case 1:
                    var hs_sat26zxYh = new $hs.Data(1);
                    hs_sat26zxYh.data = [1114111];
                    var hs_wild326zxYi = $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_c26zxF1, hs_sat26zxYh);
                    switch (hs_wild326zxYi.tag) {
                    case 1:
                        var hs_sat26zxYF = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Not a valid Unicode code point\x00");
                        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26zxYF);
                    case 2:
                        var hs_sat26zxYj = new $hs.Thunk();
                        hs_sat26zxYj.evaluateOnce = function () {
                            var hs_sat26zxYt = new $hs.Thunk();
                            hs_sat26zxYt.evaluateOnce = function () {
                                var hs_sat26zxYy = new $hs.Thunk();
                                hs_sat26zxYy.evaluateOnce = function () {
                                    var hs_sat26zxYC = new $hs.Thunk();
                                    hs_sat26zxYC.evaluateOnce = function () {
                                        var hs_sat26zxYD = new $hs.Thunk();
                                        hs_sat26zxYD.evaluateOnce = function () {
                                            var hs_sat26zxYE = new $hs.Thunk();
                                            hs_sat26zxYE.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYE);
                                        };
                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxYD, hs_zz26zxF5);
                                    };
                                    return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxYC);
                                };
                                var hs_sat26zxYx = new $hs.Thunk();
                                hs_sat26zxYx.evaluateOnce = function () {
                                    var hs_sat26zxYz = new $hs.Thunk();
                                    hs_sat26zxYz.evaluateOnce = function () {
                                        var hs_sat26zxYA = new $hs.Thunk();
                                        hs_sat26zxYA.evaluateOnce = function () {
                                            var hs_sat26zxYB = new $hs.Thunk();
                                            hs_sat26zxYB.evaluateOnce = function () {
                                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
                                            };
                                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYB);
                                        };
                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxYA, hs_y26zxFb);
                                    };
                                    return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxYz);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxYx, hs_sat26zxYy);
                            };
                            var hs_sat26zxYs = new $hs.Thunk();
                            hs_sat26zxYs.evaluateOnce = function () {
                                var hs_sat26zxYu = new $hs.Thunk();
                                hs_sat26zxYu.evaluateOnce = function () {
                                    var hs_sat26zxYv = new $hs.Thunk();
                                    hs_sat26zxYv.evaluateOnce = function () {
                                        var hs_sat26zxYw = new $hs.Thunk();
                                        hs_sat26zxYw.evaluateOnce = function () {
                                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
                                        };
                                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYw);
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxYv, hs_x26zxFh);
                                };
                                return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxYu);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxYs, hs_sat26zxYt);
                        };
                        var hs_sat26zxYg = new $hs.Thunk();
                        hs_sat26zxYg.evaluateOnce = function () {
                            var hs_sat26zxYk = new $hs.Thunk();
                            hs_sat26zxYk.evaluateOnce = function () {
                                var hs_sat26zxYm = new $hs.Thunk();
                                hs_sat26zxYm.evaluateOnce = function () {
                                    var hs_sat26zxYo = new $hs.Thunk();
                                    hs_sat26zxYo.evaluateOnce = function () {
                                        var hs_sat26zxYq = new $hs.Data(1);
                                        hs_sat26zxYq.data = [7];
                                        var hs_sat26zxYp = new $hs.Thunk();
                                        hs_sat26zxYp.evaluateOnce = function () {
                                            var hs_sat26zxYr = new $hs.Data(1);
                                            hs_sat26zxYr.data = [18];
                                            return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_c26zxF1, hs_sat26zxYr);
                                        };
                                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26zxYp, hs_sat26zxYq);
                                    };
                                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYo);
                                };
                                var hs_sat26zxYl = new $hs.Thunk();
                                hs_sat26zxYl.evaluateOnce = function () {
                                    var hs_sat26zxYn = new $hs.Thunk();
                                    hs_sat26zxYn.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(240);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYn);
                                };
                                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxYl, hs_sat26zxYm);
                            };
                            return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxYk);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxYg, hs_sat26zxYj);
                    }
                case 2:
                    var hs_sat26zxY4 = new $hs.Thunk();
                    hs_sat26zxY4.evaluateOnce = function () {
                        var hs_sat26zxY9 = new $hs.Thunk();
                        hs_sat26zxY9.evaluateOnce = function () {
                            var hs_sat26zxYd = new $hs.Thunk();
                            hs_sat26zxYd.evaluateOnce = function () {
                                var hs_sat26zxYe = new $hs.Thunk();
                                hs_sat26zxYe.evaluateOnce = function () {
                                    var hs_sat26zxYf = new $hs.Thunk();
                                    hs_sat26zxYf.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYf);
                                };
                                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxYe, hs_zz26zxF5);
                            };
                            return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxYd);
                        };
                        var hs_sat26zxY8 = new $hs.Thunk();
                        hs_sat26zxY8.evaluateOnce = function () {
                            var hs_sat26zxYa = new $hs.Thunk();
                            hs_sat26zxYa.evaluateOnce = function () {
                                var hs_sat26zxYb = new $hs.Thunk();
                                hs_sat26zxYb.evaluateOnce = function () {
                                    var hs_sat26zxYc = new $hs.Thunk();
                                    hs_sat26zxYc.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxYc);
                                };
                                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxYb, hs_y26zxFb);
                            };
                            return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxYa);
                        };
                        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxY8, hs_sat26zxY9);
                    };
                    var hs_sat26zxY1 = new $hs.Thunk();
                    hs_sat26zxY1.evaluateOnce = function () {
                        var hs_sat26zxY5 = new $hs.Thunk();
                        hs_sat26zxY5.evaluateOnce = function () {
                            var hs_sat26zxY6 = new $hs.Thunk();
                            hs_sat26zxY6.evaluateOnce = function () {
                                var hs_sat26zxY7 = new $hs.Thunk();
                                hs_sat26zxY7.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(224);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxY7);
                            };
                            return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxY6, hs_x26zxFh);
                        };
                        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxY5);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxY1, hs_sat26zxY4);
                }
            case 2:
                var hs_sat26zxXU = new $hs.Thunk();
                hs_sat26zxXU.evaluateOnce = function () {
                    var hs_sat26zxXY = new $hs.Thunk();
                    hs_sat26zxXY.evaluateOnce = function () {
                        var hs_sat26zxXZ = new $hs.Thunk();
                        hs_sat26zxXZ.evaluateOnce = function () {
                            var hs_sat26zxY0 = new $hs.Thunk();
                            hs_sat26zxY0.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(128);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxY0);
                        };
                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxXZ, hs_zz26zxF5);
                    };
                    return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxXY);
                };
                var hs_sat26zxXR = new $hs.Thunk();
                hs_sat26zxXR.evaluateOnce = function () {
                    var hs_sat26zxXV = new $hs.Thunk();
                    hs_sat26zxXV.evaluateOnce = function () {
                        var hs_sat26zxXW = new $hs.Thunk();
                        hs_sat26zxXW.evaluateOnce = function () {
                            var hs_sat26zxXX = new $hs.Thunk();
                            hs_sat26zxXX.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(192);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zxXX);
                        };
                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord8, hs_sat26zxXW, hs_y26zxFb);
                    };
                    return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxXV);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxXR, hs_sat26zxXU);
            }
        case 2:
            var hs_sat26zxXO = new $hs.Thunk();
            hs_sat26zxXO.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_c26zxF1);
            };
            return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zxXO);
        }
    };
    this.hs_zdfSerializzeChar.data = [hs_zdcput1025r98H, hs_zdcget1025r97z];
    hs_zdcget1125r99U.evaluate = function (hs_zddSerializze226zxGd, hs_zddSerializze326zxGf) {
        var hs_sat26zxYR = new $hs.Thunk();
        hs_sat26zxYR.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxGf);
        };
        var hs_sat26zxYQ = new $hs.Thunk();
        hs_sat26zxYQ.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxGd);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getTwoOf.hscall(hs_sat26zxYQ, hs_sat26zxYR);
    };
    hs_zdcput1125r9a1.evaluate = function (hs_zddSerializze226zxGk, hs_zddSerializze326zxGm) {
        var hs_sat26zxYT = new $hs.Thunk();
        hs_sat26zxYT.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxGm);
        };
        var hs_sat26zxYS = new $hs.Thunk();
        hs_sat26zxYS.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxGk);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putTwoOf.hscall(hs_sat26zxYS, hs_sat26zxYT);
    };
    this.hs_zdfSerializzeZLz2cUZR.evaluate = function (hs_zddSerializze226zxGq, hs_zddSerializze326zxGr) {
        var hs_sat26zxYV = new $hs.Thunk();
        hs_sat26zxYV.evaluateOnce = function () {
            return hs_zdcget1125r99U.hscall(hs_zddSerializze226zxGq, hs_zddSerializze326zxGr);
        };
        var hs_sat26zxYU = new $hs.Thunk();
        hs_sat26zxYU.evaluateOnce = function () {
            return hs_zdcput1125r9a1.hscall(hs_zddSerializze226zxGq, hs_zddSerializze326zxGr);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zxYU, hs_sat26zxYV];
        return $res;
    };
    hs_zdcget1225r9ae.evaluate = function (hs_zddSerializze226zxGy, hs_zddSerializze326zxGA, hs_zddSerializze426zxGC) {
        var hs_sat26zxYX = new $hs.Thunk();
        hs_sat26zxYX.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze426zxGC);
        };
        var hs_sat26zxYY = new $hs.Thunk();
        hs_sat26zxYY.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxGA);
        };
        var hs_sat26zxYW = new $hs.Thunk();
        hs_sat26zxYW.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxGy);
        };
        return $hs.modules.ControlziMonad.hs_liftM3.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziTuple.hs_Z3T, hs_sat26zxYW, hs_sat26zxYY, hs_sat26zxYX);
    };
    hs_zdcput1225r9ao.evaluate = function (hs_zddSerializze226zxGO, hs_zddSerializze326zxGR, hs_zddSerializze426zxGV, hs_ds26zxGJ) {
        var hs_wild26zxZ0 = hs_ds26zxGJ;
        if (hs_ds26zxGJ.notEvaluated) {
            hs_wild26zxZ0 = hs_ds26zxGJ.hscall();
        }
        var hs_a26zxGP = hs_wild26zxZ0.data[0];
        var hs_b26zxGS = hs_wild26zxZ0.data[1];
        var hs_c26zxGW = hs_wild26zxZ0.data[2];
        var hs_sat26zxZ1 = new $hs.Thunk();
        hs_sat26zxZ1.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze426zxGV, hs_c26zxGW);
        };
        var hs_sat26zxYZ = new $hs.Thunk();
        hs_sat26zxYZ.evaluateOnce = function () {
            var hs_sat26zxZ3 = new $hs.Thunk();
            hs_sat26zxZ3.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxGR, hs_b26zxGS);
            };
            var hs_sat26zxZ2 = new $hs.Thunk();
            hs_sat26zxZ2.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxGO, hs_a26zxGP);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZ2, hs_sat26zxZ3);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxYZ, hs_sat26zxZ1);
    };
    this.hs_zdfSerializzeZLz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxH1, hs_zddSerializze326zxH2, hs_zddSerializze426zxH3) {
        var hs_sat26zxZ5 = new $hs.Thunk();
        hs_sat26zxZ5.evaluateOnce = function () {
            return hs_zdcget1225r9ae.hscall(hs_zddSerializze226zxH1, hs_zddSerializze326zxH2, hs_zddSerializze426zxH3);
        };
        var hs_sat26zxZ4 = new $hs.Func(1);
        hs_sat26zxZ4.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcput1225r9ao.hscall(hs_zddSerializze226zxH1, hs_zddSerializze326zxH2, hs_zddSerializze426zxH3, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zxZ4, hs_sat26zxZ5];
        return $res;
    };
    hs_zdcget1325r9aQ.evaluate = function (hs_zddSerializze226zxHb, hs_zddSerializze326zxHd, hs_zddSerializze426zxHf, hs_zddSerializze526zxHh) {
        var hs_sat26zxZ7 = new $hs.Thunk();
        hs_sat26zxZ7.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze526zxHh);
        };
        var hs_sat26zxZ8 = new $hs.Thunk();
        hs_sat26zxZ8.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze426zxHf);
        };
        var hs_sat26zxZ9 = new $hs.Thunk();
        hs_sat26zxZ9.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxHd);
        };
        var hs_sat26zxZ6 = new $hs.Thunk();
        hs_sat26zxZ6.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxHb);
        };
        return $hs.modules.ControlziMonad.hs_liftM4.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziTuple.hs_Z4T, hs_sat26zxZ6, hs_sat26zxZ9, hs_sat26zxZ8, hs_sat26zxZ7);
    };
    hs_zdcput1325r9b3.evaluate = function (hs_zddSerializze226zxHv, hs_zddSerializze326zxHy, hs_zddSerializze426zxHC, hs_zddSerializze526zxHG, hs_ds26zxHp) {
        var hs_wild26zxZb = hs_ds26zxHp;
        if (hs_ds26zxHp.notEvaluated) {
            hs_wild26zxZb = hs_ds26zxHp.hscall();
        }
        var hs_a26zxHw = hs_wild26zxZb.data[0];
        var hs_b26zxHz = hs_wild26zxZb.data[1];
        var hs_c26zxHD = hs_wild26zxZb.data[2];
        var hs_d26zxHH = hs_wild26zxZb.data[3];
        var hs_sat26zxZc = new $hs.Thunk();
        hs_sat26zxZc.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze526zxHG, hs_d26zxHH);
        };
        var hs_sat26zxZa = new $hs.Thunk();
        hs_sat26zxZa.evaluateOnce = function () {
            var hs_sat26zxZe = new $hs.Thunk();
            hs_sat26zxZe.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze426zxHC, hs_c26zxHD);
            };
            var hs_sat26zxZd = new $hs.Thunk();
            hs_sat26zxZd.evaluateOnce = function () {
                var hs_sat26zxZg = new $hs.Thunk();
                hs_sat26zxZg.evaluateOnce = function () {
                    return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxHy, hs_b26zxHz);
                };
                var hs_sat26zxZf = new $hs.Thunk();
                hs_sat26zxZf.evaluateOnce = function () {
                    return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxHv, hs_a26zxHw);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZf, hs_sat26zxZg);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZd, hs_sat26zxZe);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZa, hs_sat26zxZc);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxHN, hs_zddSerializze326zxHO, hs_zddSerializze426zxHP, hs_zddSerializze526zxHQ) {
        var hs_sat26zxZi = new $hs.Thunk();
        hs_sat26zxZi.evaluateOnce = function () {
            return hs_zdcget1325r9aQ.hscall(hs_zddSerializze226zxHN, hs_zddSerializze326zxHO, hs_zddSerializze426zxHP, hs_zddSerializze526zxHQ);
        };
        var hs_sat26zxZh = new $hs.Func(1);
        hs_sat26zxZh.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcput1325r9b3.hscall(hs_zddSerializze226zxHN, hs_zddSerializze326zxHO, hs_zddSerializze426zxHP, hs_zddSerializze526zxHQ, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zxZh, hs_sat26zxZi];
        return $res;
    };
    hs_zdcget1425r9bD.evaluate = function (hs_zddSerializze226zxHZ, hs_zddSerializze326zxI1, hs_zddSerializze426zxI3, hs_zddSerializze526zxI5, hs_zddSerializze626zxI7) {
        var hs_sat26zxZk = new $hs.Thunk();
        hs_sat26zxZk.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze626zxI7);
        };
        var hs_sat26zxZl = new $hs.Thunk();
        hs_sat26zxZl.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze526zxI5);
        };
        var hs_sat26zxZm = new $hs.Thunk();
        hs_sat26zxZm.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze426zxI3);
        };
        var hs_sat26zxZn = new $hs.Thunk();
        hs_sat26zxZn.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxI1);
        };
        var hs_sat26zxZj = new $hs.Thunk();
        hs_sat26zxZj.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxHZ);
        };
        return $hs.modules.ControlziMonad.hs_liftM5.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, $hs.modules.GHCziTuple.hs_Z5T, hs_sat26zxZj, hs_sat26zxZn, hs_sat26zxZm, hs_sat26zxZl, hs_sat26zxZk);
    };
    hs_zdcput1425r9bT.evaluate = function (hs_zddSerializze226zxIn, hs_zddSerializze326zxIq, hs_zddSerializze426zxIu, hs_zddSerializze526zxIy, hs_zddSerializze626zxIC, hs_ds26zxIg) {
        var hs_wild26zxZp = hs_ds26zxIg;
        if (hs_ds26zxIg.notEvaluated) {
            hs_wild26zxZp = hs_ds26zxIg.hscall();
        }
        var hs_a26zxIo = hs_wild26zxZp.data[0];
        var hs_b26zxIr = hs_wild26zxZp.data[1];
        var hs_c26zxIv = hs_wild26zxZp.data[2];
        var hs_d26zxIz = hs_wild26zxZp.data[3];
        var hs_e26zxID = hs_wild26zxZp.data[4];
        var hs_sat26zxZq = new $hs.Thunk();
        hs_sat26zxZq.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze626zxIC, hs_e26zxID);
        };
        var hs_sat26zxZo = new $hs.Thunk();
        hs_sat26zxZo.evaluateOnce = function () {
            var hs_sat26zxZs = new $hs.Thunk();
            hs_sat26zxZs.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze526zxIy, hs_d26zxIz);
            };
            var hs_sat26zxZr = new $hs.Thunk();
            hs_sat26zxZr.evaluateOnce = function () {
                var hs_sat26zxZu = new $hs.Thunk();
                hs_sat26zxZu.evaluateOnce = function () {
                    return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze426zxIu, hs_c26zxIv);
                };
                var hs_sat26zxZt = new $hs.Thunk();
                hs_sat26zxZt.evaluateOnce = function () {
                    var hs_sat26zxZw = new $hs.Thunk();
                    hs_sat26zxZw.evaluateOnce = function () {
                        return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxIq, hs_b26zxIr);
                    };
                    var hs_sat26zxZv = new $hs.Thunk();
                    hs_sat26zxZv.evaluateOnce = function () {
                        return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxIn, hs_a26zxIo);
                    };
                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZv, hs_sat26zxZw);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZt, hs_sat26zxZu);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZr, hs_sat26zxZs);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zxZo, hs_sat26zxZq);
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxIK, hs_zddSerializze326zxIL, hs_zddSerializze426zxIM, hs_zddSerializze526zxIN, hs_zddSerializze626zxIO) {
        var hs_sat26zxZy = new $hs.Thunk();
        hs_sat26zxZy.evaluateOnce = function () {
            return hs_zdcget1425r9bD.hscall(hs_zddSerializze226zxIK, hs_zddSerializze326zxIL, hs_zddSerializze426zxIM, hs_zddSerializze526zxIN, hs_zddSerializze626zxIO);
        };
        var hs_sat26zxZx = new $hs.Func(1);
        hs_sat26zxZx.evaluate = function (hs_eta1cW6l3) {
            return hs_zdcput1425r9bT.hscall(hs_zddSerializze226zxIK, hs_zddSerializze326zxIL, hs_zddSerializze426zxIM, hs_zddSerializze526zxIN, hs_zddSerializze626zxIO, hs_eta1cW6l3);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zxZx, hs_sat26zxZy];
        return $res;
    };
    hs_zdcget1525r9cB.evaluate = function (hs_zddSerializze226zxIY, hs_zddSerializze326zxIZ, hs_zddSerializze426zxJ0, hs_zddSerializze526zxJ1, hs_zddSerializze626zxJ2, hs_zddSerializze726zxJ3) {
        var hs_sat26zxZA = new $hs.Func(1);
        hs_sat26zxZA.evaluate = function (hs_ds26zxJ8) {
            var hs_wild26zxZF = hs_ds26zxJ8;
            if (hs_ds26zxJ8.notEvaluated) {
                hs_wild26zxZF = hs_ds26zxJ8.hscall();
            }
            var hs_a26zxJj = hs_wild26zxZF.data[0];
            var hs_ds126zxJc = hs_wild26zxZF.data[1];
            var hs_wild126zxZE = hs_ds126zxJc;
            if (hs_ds126zxJc.notEvaluated) {
                hs_wild126zxZE = hs_ds126zxJc.hscall();
            }
            var hs_b26zxJk = hs_wild126zxZE.data[0];
            var hs_c26zxJl = hs_wild126zxZE.data[1];
            var hs_d26zxJm = hs_wild126zxZE.data[2];
            var hs_e26zxJn = hs_wild126zxZE.data[3];
            var hs_f26zxJo = hs_wild126zxZE.data[4];
            var hs_sat26zxZD = new $hs.Data(1);
            hs_sat26zxZD.data = [hs_a26zxJj, hs_b26zxJk, hs_c26zxJl, hs_d26zxJm, hs_e26zxJn, hs_f26zxJo];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxZD);
        };
        var hs_sat26zxZz = new $hs.Thunk();
        hs_sat26zxZz.evaluateOnce = function () {
            var hs_sat26zxZB = new $hs.Thunk();
            hs_sat26zxZB.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxIZ, hs_zddSerializze426zxJ0, hs_zddSerializze526zxJ1, hs_zddSerializze626zxJ2, hs_zddSerializze726zxJ3);
            };
            var hs_sat26zxZC = $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxIY, hs_sat26zxZB);
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_sat26zxZC);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxZz, hs_sat26zxZA);
    };
    hs_zdcput1525r9db.evaluate = function (hs_zddSerializze226zxJG, hs_zddSerializze326zxJz, hs_zddSerializze426zxJA, hs_zddSerializze526zxJB, hs_zddSerializze626zxJC, hs_zddSerializze726zxJD) {
        var hs_zddSerializze826zxJE = new $hs.Thunk();
        hs_zddSerializze826zxJE.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxJz, hs_zddSerializze426zxJA, hs_zddSerializze526zxJB, hs_zddSerializze626zxJC, hs_zddSerializze726zxJD);
        };
        var hs_zddSerializze926zxJH = new $hs.Thunk();
        hs_zddSerializze926zxJH.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxJG, hs_zddSerializze826zxJE);
        };
        var hs_sat26zxZG = new $hs.Func(1);
        hs_sat26zxZG.evaluate = function (hs_ds26zxJJ) {
            var hs_wild26zxZI = hs_ds26zxJJ;
            if (hs_ds26zxJJ.notEvaluated) {
                hs_wild26zxZI = hs_ds26zxJJ.hscall();
            }
            var hs_a26zxJR = hs_wild26zxZI.data[0];
            var hs_b26zxJS = hs_wild26zxZI.data[1];
            var hs_c26zxJT = hs_wild26zxZI.data[2];
            var hs_d26zxJU = hs_wild26zxZI.data[3];
            var hs_e26zxJV = hs_wild26zxZI.data[4];
            var hs_f26zxJW = hs_wild26zxZI.data[5];
            var hs_sat26zxZJ = new $hs.Data(1);
            hs_sat26zxZJ.data = [hs_b26zxJS, hs_c26zxJT, hs_d26zxJU, hs_e26zxJV, hs_f26zxJW];
            var hs_sat26zxZH = new $hs.Data(1);
            hs_sat26zxZH.data = [hs_a26zxJR, hs_sat26zxZJ];
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze926zxJH, hs_sat26zxZH);
        };
        if (hs_sat26zxZG.notEvaluated) {
            return hs_sat26zxZG.hscall();
        } else {
            return hs_sat26zxZG;
        }
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxK6, hs_zddSerializze326zxK7, hs_zddSerializze426zxK8, hs_zddSerializze526zxK9, hs_zddSerializze626zxKa, hs_zddSerializze726zxKb) {
        var hs_sat26zxZL = new $hs.Thunk();
        hs_sat26zxZL.evaluateOnce = function () {
            return hs_zdcget1525r9cB.hscall(hs_zddSerializze226zxK6, hs_zddSerializze326zxK7, hs_zddSerializze426zxK8, hs_zddSerializze526zxK9, hs_zddSerializze626zxKa, hs_zddSerializze726zxKb);
        };
        var hs_sat26zxZK = new $hs.Thunk();
        hs_sat26zxZK.evaluateOnce = function () {
            return hs_zdcput1525r9db.hscall(hs_zddSerializze226zxK6, hs_zddSerializze326zxK7, hs_zddSerializze426zxK8, hs_zddSerializze526zxK9, hs_zddSerializze626zxKa, hs_zddSerializze726zxKb);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zxZK, hs_sat26zxZL];
        return $res;
    };
    hs_zdcget1625r9dY.evaluate = function (hs_zddSerializze226zxKm, hs_zddSerializze326zxKn, hs_zddSerializze426zxKo, hs_zddSerializze526zxKp, hs_zddSerializze626zxKq, hs_zddSerializze726zxKr, hs_zddSerializze826zxKs) {
        var hs_sat26zxZN = new $hs.Func(1);
        hs_sat26zxZN.evaluate = function (hs_ds26zxKx) {
            var hs_wild26zxZS = hs_ds26zxKx;
            if (hs_ds26zxKx.notEvaluated) {
                hs_wild26zxZS = hs_ds26zxKx.hscall();
            }
            var hs_a26zxKJ = hs_wild26zxZS.data[0];
            var hs_ds126zxKB = hs_wild26zxZS.data[1];
            var hs_wild126zxZR = hs_ds126zxKB;
            if (hs_ds126zxKB.notEvaluated) {
                hs_wild126zxZR = hs_ds126zxKB.hscall();
            }
            var hs_b26zxKK = hs_wild126zxZR.data[0];
            var hs_c26zxKL = hs_wild126zxZR.data[1];
            var hs_d26zxKM = hs_wild126zxZR.data[2];
            var hs_e26zxKN = hs_wild126zxZR.data[3];
            var hs_f26zxKO = hs_wild126zxZR.data[4];
            var hs_g26zxKP = hs_wild126zxZR.data[5];
            var hs_sat26zxZQ = new $hs.Data(1);
            hs_sat26zxZQ.data = [hs_a26zxKJ, hs_b26zxKK, hs_c26zxKL, hs_d26zxKM, hs_e26zxKN, hs_f26zxKO, hs_g26zxKP];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxZQ);
        };
        var hs_sat26zxZM = new $hs.Thunk();
        hs_sat26zxZM.evaluateOnce = function () {
            var hs_sat26zxZO = new $hs.Thunk();
            hs_sat26zxZO.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxKn, hs_zddSerializze426zxKo, hs_zddSerializze526zxKp, hs_zddSerializze626zxKq, hs_zddSerializze726zxKr, hs_zddSerializze826zxKs);
            };
            var hs_sat26zxZP = $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxKm, hs_sat26zxZO);
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_sat26zxZP);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxZM, hs_sat26zxZN);
    };
    hs_zdcput1625r9eC.evaluate = function (hs_zddSerializze226zxL9, hs_zddSerializze326zxL1, hs_zddSerializze426zxL2, hs_zddSerializze526zxL3, hs_zddSerializze626zxL4, hs_zddSerializze726zxL5, hs_zddSerializze826zxL6) {
        var hs_zddSerializze926zxL7 = new $hs.Thunk();
        hs_zddSerializze926zxL7.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxL1, hs_zddSerializze426zxL2, hs_zddSerializze526zxL3, hs_zddSerializze626zxL4, hs_zddSerializze726zxL5, hs_zddSerializze826zxL6);
        };
        var hs_zddSerializze1026zxLa = new $hs.Thunk();
        hs_zddSerializze1026zxLa.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxL9, hs_zddSerializze926zxL7);
        };
        var hs_sat26zxZT = new $hs.Func(1);
        hs_sat26zxZT.evaluate = function (hs_ds26zxLc) {
            var hs_wild26zxZV = hs_ds26zxLc;
            if (hs_ds26zxLc.notEvaluated) {
                hs_wild26zxZV = hs_ds26zxLc.hscall();
            }
            var hs_a26zxLl = hs_wild26zxZV.data[0];
            var hs_b26zxLm = hs_wild26zxZV.data[1];
            var hs_c26zxLn = hs_wild26zxZV.data[2];
            var hs_d26zxLo = hs_wild26zxZV.data[3];
            var hs_e26zxLp = hs_wild26zxZV.data[4];
            var hs_f26zxLq = hs_wild26zxZV.data[5];
            var hs_g26zxLr = hs_wild26zxZV.data[6];
            var hs_sat26zxZW = new $hs.Data(1);
            hs_sat26zxZW.data = [hs_b26zxLm, hs_c26zxLn, hs_d26zxLo, hs_e26zxLp, hs_f26zxLq, hs_g26zxLr];
            var hs_sat26zxZU = new $hs.Data(1);
            hs_sat26zxZU.data = [hs_a26zxLl, hs_sat26zxZW];
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze1026zxLa, hs_sat26zxZU);
        };
        if (hs_sat26zxZT.notEvaluated) {
            return hs_sat26zxZT.hscall();
        } else {
            return hs_sat26zxZT;
        }
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxLC, hs_zddSerializze326zxLD, hs_zddSerializze426zxLE, hs_zddSerializze526zxLF, hs_zddSerializze626zxLG, hs_zddSerializze726zxLH, hs_zddSerializze826zxLI) {
        var hs_sat26zxZY = new $hs.Thunk();
        hs_sat26zxZY.evaluateOnce = function () {
            return hs_zdcget1625r9dY.hscall(hs_zddSerializze226zxLC, hs_zddSerializze326zxLD, hs_zddSerializze426zxLE, hs_zddSerializze526zxLF, hs_zddSerializze626zxLG, hs_zddSerializze726zxLH, hs_zddSerializze826zxLI);
        };
        var hs_sat26zxZX = new $hs.Thunk();
        hs_sat26zxZX.evaluateOnce = function () {
            return hs_zdcput1625r9eC.hscall(hs_zddSerializze226zxLC, hs_zddSerializze326zxLD, hs_zddSerializze426zxLE, hs_zddSerializze526zxLF, hs_zddSerializze626zxLG, hs_zddSerializze726zxLH, hs_zddSerializze826zxLI);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zxZX, hs_sat26zxZY];
        return $res;
    };
    hs_zdcget1725r9fv.evaluate = function (hs_zddSerializze226zxLU, hs_zddSerializze326zxLV, hs_zddSerializze426zxLW, hs_zddSerializze526zxLX, hs_zddSerializze626zxLY, hs_zddSerializze726zxLZ, hs_zddSerializze826zxM0, hs_zddSerializze926zxM1) {
        var hs_sat26zy00 = new $hs.Func(1);
        hs_sat26zy00.evaluate = function (hs_ds26zxM6) {
            var hs_wild26zy05 = hs_ds26zxM6;
            if (hs_ds26zxM6.notEvaluated) {
                hs_wild26zy05 = hs_ds26zxM6.hscall();
            }
            var hs_a26zxMj = hs_wild26zy05.data[0];
            var hs_ds126zxMa = hs_wild26zy05.data[1];
            var hs_wild126zy04 = hs_ds126zxMa;
            if (hs_ds126zxMa.notEvaluated) {
                hs_wild126zy04 = hs_ds126zxMa.hscall();
            }
            var hs_b26zxMk = hs_wild126zy04.data[0];
            var hs_c26zxMl = hs_wild126zy04.data[1];
            var hs_d26zxMm = hs_wild126zy04.data[2];
            var hs_e26zxMn = hs_wild126zy04.data[3];
            var hs_f26zxMo = hs_wild126zy04.data[4];
            var hs_g26zxMp = hs_wild126zy04.data[5];
            var hs_h26zxMq = hs_wild126zy04.data[6];
            var hs_sat26zy03 = new $hs.Data(1);
            hs_sat26zy03.data = [hs_a26zxMj, hs_b26zxMk, hs_c26zxMl, hs_d26zxMm, hs_e26zxMn, hs_f26zxMo, hs_g26zxMp, hs_h26zxMq];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy03);
        };
        var hs_sat26zxZZ = new $hs.Thunk();
        hs_sat26zxZZ.evaluateOnce = function () {
            var hs_sat26zy01 = new $hs.Thunk();
            hs_sat26zy01.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxLV, hs_zddSerializze426zxLW, hs_zddSerializze526zxLX, hs_zddSerializze626zxLY, hs_zddSerializze726zxLZ, hs_zddSerializze826zxM0, hs_zddSerializze926zxM1);
            };
            var hs_sat26zy02 = $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxLU, hs_sat26zy01);
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_sat26zy02);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zxZZ, hs_sat26zy00);
    };
    hs_zdcput1725r9gd.evaluate = function (hs_zddSerializze226zxMM, hs_zddSerializze326zxMD, hs_zddSerializze426zxME, hs_zddSerializze526zxMF, hs_zddSerializze626zxMG, hs_zddSerializze726zxMH, hs_zddSerializze826zxMI, hs_zddSerializze926zxMJ) {
        var hs_zddSerializze1026zxMK = new $hs.Thunk();
        hs_zddSerializze1026zxMK.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxMD, hs_zddSerializze426zxME, hs_zddSerializze526zxMF, hs_zddSerializze626zxMG, hs_zddSerializze726zxMH, hs_zddSerializze826zxMI, hs_zddSerializze926zxMJ);
        };
        var hs_zddSerializze1126zxMN = new $hs.Thunk();
        hs_zddSerializze1126zxMN.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxMM, hs_zddSerializze1026zxMK);
        };
        var hs_sat26zy06 = new $hs.Func(1);
        hs_sat26zy06.evaluate = function (hs_ds26zxMP) {
            var hs_wild26zy08 = hs_ds26zxMP;
            if (hs_ds26zxMP.notEvaluated) {
                hs_wild26zy08 = hs_ds26zxMP.hscall();
            }
            var hs_a26zxMZ = hs_wild26zy08.data[0];
            var hs_b26zxN0 = hs_wild26zy08.data[1];
            var hs_c26zxN1 = hs_wild26zy08.data[2];
            var hs_d26zxN2 = hs_wild26zy08.data[3];
            var hs_e26zxN3 = hs_wild26zy08.data[4];
            var hs_f26zxN4 = hs_wild26zy08.data[5];
            var hs_g26zxN5 = hs_wild26zy08.data[6];
            var hs_h26zxN6 = hs_wild26zy08.data[7];
            var hs_sat26zy09 = new $hs.Data(1);
            hs_sat26zy09.data = [hs_b26zxN0, hs_c26zxN1, hs_d26zxN2, hs_e26zxN3, hs_f26zxN4, hs_g26zxN5, hs_h26zxN6];
            var hs_sat26zy07 = new $hs.Data(1);
            hs_sat26zy07.data = [hs_a26zxMZ, hs_sat26zy09];
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze1126zxMN, hs_sat26zy07);
        };
        if (hs_sat26zy06.notEvaluated) {
            return hs_sat26zy06.hscall();
        } else {
            return hs_sat26zy06;
        }
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxNi, hs_zddSerializze326zxNj, hs_zddSerializze426zxNk, hs_zddSerializze526zxNl, hs_zddSerializze626zxNm, hs_zddSerializze726zxNn, hs_zddSerializze826zxNo, hs_zddSerializze926zxNp) {
        var hs_sat26zy0b = new $hs.Thunk();
        hs_sat26zy0b.evaluateOnce = function () {
            return hs_zdcget1725r9fv.hscall(hs_zddSerializze226zxNi, hs_zddSerializze326zxNj, hs_zddSerializze426zxNk, hs_zddSerializze526zxNl, hs_zddSerializze626zxNm, hs_zddSerializze726zxNn, hs_zddSerializze826zxNo, hs_zddSerializze926zxNp);
        };
        var hs_sat26zy0a = new $hs.Thunk();
        hs_sat26zy0a.evaluateOnce = function () {
            return hs_zdcput1725r9gd.hscall(hs_zddSerializze226zxNi, hs_zddSerializze326zxNj, hs_zddSerializze426zxNk, hs_zddSerializze526zxNl, hs_zddSerializze626zxNm, hs_zddSerializze726zxNn, hs_zddSerializze826zxNo, hs_zddSerializze926zxNp);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy0a, hs_sat26zy0b];
        return $res;
    };
    hs_zdcget1825r9hc.evaluate = function (hs_zddSerializze226zxNC, hs_zddSerializze326zxND, hs_zddSerializze426zxNE, hs_zddSerializze526zxNF, hs_zddSerializze626zxNG, hs_zddSerializze726zxNH, hs_zddSerializze826zxNI, hs_zddSerializze926zxNJ, hs_zddSerializze1026zxNK) {
        var hs_sat26zy0d = new $hs.Func(1);
        hs_sat26zy0d.evaluate = function (hs_ds26zxNP) {
            var hs_wild26zy0i = hs_ds26zxNP;
            if (hs_ds26zxNP.notEvaluated) {
                hs_wild26zy0i = hs_ds26zxNP.hscall();
            }
            var hs_a26zxO3 = hs_wild26zy0i.data[0];
            var hs_ds126zxNT = hs_wild26zy0i.data[1];
            var hs_wild126zy0h = hs_ds126zxNT;
            if (hs_ds126zxNT.notEvaluated) {
                hs_wild126zy0h = hs_ds126zxNT.hscall();
            }
            var hs_b26zxO4 = hs_wild126zy0h.data[0];
            var hs_c26zxO5 = hs_wild126zy0h.data[1];
            var hs_d26zxO6 = hs_wild126zy0h.data[2];
            var hs_e26zxO7 = hs_wild126zy0h.data[3];
            var hs_f26zxO8 = hs_wild126zy0h.data[4];
            var hs_g26zxO9 = hs_wild126zy0h.data[5];
            var hs_h26zxOa = hs_wild126zy0h.data[6];
            var hs_i26zxOb = hs_wild126zy0h.data[7];
            var hs_sat26zy0g = new $hs.Data(1);
            hs_sat26zy0g.data = [hs_a26zxO3, hs_b26zxO4, hs_c26zxO5, hs_d26zxO6, hs_e26zxO7, hs_f26zxO8, hs_g26zxO9, hs_h26zxOa, hs_i26zxOb];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy0g);
        };
        var hs_sat26zy0c = new $hs.Thunk();
        hs_sat26zy0c.evaluateOnce = function () {
            var hs_sat26zy0e = new $hs.Thunk();
            hs_sat26zy0e.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxND, hs_zddSerializze426zxNE, hs_zddSerializze526zxNF, hs_zddSerializze626zxNG, hs_zddSerializze726zxNH, hs_zddSerializze826zxNI, hs_zddSerializze926zxNJ, hs_zddSerializze1026zxNK);
            };
            var hs_sat26zy0f = $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxNC, hs_sat26zy0e);
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_sat26zy0f);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy0c, hs_sat26zy0d);
    };
    hs_zdcput1825r9hY.evaluate = function (hs_zddSerializze226zxOz, hs_zddSerializze326zxOp, hs_zddSerializze426zxOq, hs_zddSerializze526zxOr, hs_zddSerializze626zxOs, hs_zddSerializze726zxOt, hs_zddSerializze826zxOu, hs_zddSerializze926zxOv, hs_zddSerializze1026zxOw) {
        var hs_zddSerializze1126zxOx = new $hs.Thunk();
        hs_zddSerializze1126zxOx.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxOp, hs_zddSerializze426zxOq, hs_zddSerializze526zxOr, hs_zddSerializze626zxOs, hs_zddSerializze726zxOt, hs_zddSerializze826zxOu, hs_zddSerializze926zxOv, hs_zddSerializze1026zxOw);
        };
        var hs_zddSerializze1226zxOA = new $hs.Thunk();
        hs_zddSerializze1226zxOA.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxOz, hs_zddSerializze1126zxOx);
        };
        var hs_sat26zy0j = new $hs.Func(1);
        hs_sat26zy0j.evaluate = function (hs_ds26zxOC) {
            var hs_wild26zy0l = hs_ds26zxOC;
            if (hs_ds26zxOC.notEvaluated) {
                hs_wild26zy0l = hs_ds26zxOC.hscall();
            }
            var hs_a26zxON = hs_wild26zy0l.data[0];
            var hs_b26zxOO = hs_wild26zy0l.data[1];
            var hs_c26zxOP = hs_wild26zy0l.data[2];
            var hs_d26zxOQ = hs_wild26zy0l.data[3];
            var hs_e26zxOR = hs_wild26zy0l.data[4];
            var hs_f26zxOS = hs_wild26zy0l.data[5];
            var hs_g26zxOT = hs_wild26zy0l.data[6];
            var hs_h26zxOU = hs_wild26zy0l.data[7];
            var hs_i26zxOV = hs_wild26zy0l.data[8];
            var hs_sat26zy0m = new $hs.Data(1);
            hs_sat26zy0m.data = [hs_b26zxOO, hs_c26zxOP, hs_d26zxOQ, hs_e26zxOR, hs_f26zxOS, hs_g26zxOT, hs_h26zxOU, hs_i26zxOV];
            var hs_sat26zy0k = new $hs.Data(1);
            hs_sat26zy0k.data = [hs_a26zxON, hs_sat26zy0m];
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze1226zxOA, hs_sat26zy0k);
        };
        if (hs_sat26zy0j.notEvaluated) {
            return hs_sat26zy0j.hscall();
        } else {
            return hs_sat26zy0j;
        }
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxP8, hs_zddSerializze326zxP9, hs_zddSerializze426zxPa, hs_zddSerializze526zxPb, hs_zddSerializze626zxPc, hs_zddSerializze726zxPd, hs_zddSerializze826zxPe, hs_zddSerializze926zxPf, hs_zddSerializze1026zxPg) {
        var hs_sat26zy0o = new $hs.Thunk();
        hs_sat26zy0o.evaluateOnce = function () {
            return hs_zdcget1825r9hc.hscall(hs_zddSerializze226zxP8, hs_zddSerializze326zxP9, hs_zddSerializze426zxPa, hs_zddSerializze526zxPb, hs_zddSerializze626zxPc, hs_zddSerializze726zxPd, hs_zddSerializze826zxPe, hs_zddSerializze926zxPf, hs_zddSerializze1026zxPg);
        };
        var hs_sat26zy0n = new $hs.Thunk();
        hs_sat26zy0n.evaluateOnce = function () {
            return hs_zdcput1825r9hY.hscall(hs_zddSerializze226zxP8, hs_zddSerializze326zxP9, hs_zddSerializze426zxPa, hs_zddSerializze526zxPb, hs_zddSerializze626zxPc, hs_zddSerializze726zxPd, hs_zddSerializze826zxPe, hs_zddSerializze926zxPf, hs_zddSerializze1026zxPg);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy0n, hs_sat26zy0o];
        return $res;
    };
    hs_zdcget1925r9j3.evaluate = function (hs_zddSerializze226zxPu, hs_zddSerializze326zxPv, hs_zddSerializze426zxPw, hs_zddSerializze526zxPx, hs_zddSerializze626zxPy, hs_zddSerializze726zxPz, hs_zddSerializze826zxPA, hs_zddSerializze926zxPB, hs_zddSerializze1026zxPC, hs_zddSerializze1126zxPD) {
        var hs_sat26zy0q = new $hs.Func(1);
        hs_sat26zy0q.evaluate = function (hs_ds26zxPI) {
            var hs_wild26zy0v = hs_ds26zxPI;
            if (hs_ds26zxPI.notEvaluated) {
                hs_wild26zy0v = hs_ds26zxPI.hscall();
            }
            var hs_a26zxPX = hs_wild26zy0v.data[0];
            var hs_ds126zxPM = hs_wild26zy0v.data[1];
            var hs_wild126zy0u = hs_ds126zxPM;
            if (hs_ds126zxPM.notEvaluated) {
                hs_wild126zy0u = hs_ds126zxPM.hscall();
            }
            var hs_b26zxPY = hs_wild126zy0u.data[0];
            var hs_c26zxPZ = hs_wild126zy0u.data[1];
            var hs_d26zxQ0 = hs_wild126zy0u.data[2];
            var hs_e26zxQ1 = hs_wild126zy0u.data[3];
            var hs_f26zxQ2 = hs_wild126zy0u.data[4];
            var hs_g26zxQ3 = hs_wild126zy0u.data[5];
            var hs_h26zxQ4 = hs_wild126zy0u.data[6];
            var hs_i26zxQ5 = hs_wild126zy0u.data[7];
            var hs_j26zxQ6 = hs_wild126zy0u.data[8];
            var hs_sat26zy0t = new $hs.Data(1);
            hs_sat26zy0t.data = [hs_a26zxPX, hs_b26zxPY, hs_c26zxPZ, hs_d26zxQ0, hs_e26zxQ1, hs_f26zxQ2, hs_g26zxQ3, hs_h26zxQ4, hs_i26zxQ5, hs_j26zxQ6];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy0t);
        };
        var hs_sat26zy0p = new $hs.Thunk();
        hs_sat26zy0p.evaluateOnce = function () {
            var hs_sat26zy0r = new $hs.Thunk();
            hs_sat26zy0r.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxPv, hs_zddSerializze426zxPw, hs_zddSerializze526zxPx, hs_zddSerializze626zxPy, hs_zddSerializze726zxPz, hs_zddSerializze826zxPA, hs_zddSerializze926zxPB, hs_zddSerializze1026zxPC, hs_zddSerializze1126zxPD);
            };
            var hs_sat26zy0s = $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxPu, hs_sat26zy0r);
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_sat26zy0s);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy0p, hs_sat26zy0q);
    };
    hs_zdcput1925r9jT.evaluate = function (hs_zddSerializze226zxQw, hs_zddSerializze326zxQl, hs_zddSerializze426zxQm, hs_zddSerializze526zxQn, hs_zddSerializze626zxQo, hs_zddSerializze726zxQp, hs_zddSerializze826zxQq, hs_zddSerializze926zxQr, hs_zddSerializze1026zxQs, hs_zddSerializze1126zxQt) {
        var hs_zddSerializze1226zxQu = new $hs.Thunk();
        hs_zddSerializze1226zxQu.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.hscall(hs_zddSerializze326zxQl, hs_zddSerializze426zxQm, hs_zddSerializze526zxQn, hs_zddSerializze626zxQo, hs_zddSerializze726zxQp, hs_zddSerializze826zxQq, hs_zddSerializze926zxQr, hs_zddSerializze1026zxQs, hs_zddSerializze1126zxQt);
        };
        var hs_zddSerializze1326zxQx = new $hs.Thunk();
        hs_zddSerializze1326zxQx.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall(hs_zddSerializze226zxQw, hs_zddSerializze1226zxQu);
        };
        var hs_sat26zy0w = new $hs.Func(1);
        hs_sat26zy0w.evaluate = function (hs_ds26zxQz) {
            var hs_wild26zy0y = hs_ds26zxQz;
            if (hs_ds26zxQz.notEvaluated) {
                hs_wild26zy0y = hs_ds26zxQz.hscall();
            }
            var hs_a26zxQL = hs_wild26zy0y.data[0];
            var hs_b26zxQM = hs_wild26zy0y.data[1];
            var hs_c26zxQN = hs_wild26zy0y.data[2];
            var hs_d26zxQO = hs_wild26zy0y.data[3];
            var hs_e26zxQP = hs_wild26zy0y.data[4];
            var hs_f26zxQQ = hs_wild26zy0y.data[5];
            var hs_g26zxQR = hs_wild26zy0y.data[6];
            var hs_h26zxQS = hs_wild26zy0y.data[7];
            var hs_i26zxQT = hs_wild26zy0y.data[8];
            var hs_j26zxQU = hs_wild26zy0y.data[9];
            var hs_sat26zy0z = new $hs.Data(1);
            hs_sat26zy0z.data = [hs_b26zxQM, hs_c26zxQN, hs_d26zxQO, hs_e26zxQP, hs_f26zxQQ, hs_g26zxQR, hs_h26zxQS, hs_i26zxQT, hs_j26zxQU];
            var hs_sat26zy0x = new $hs.Data(1);
            hs_sat26zy0x.data = [hs_a26zxQL, hs_sat26zy0z];
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze1326zxQx, hs_sat26zy0x);
        };
        if (hs_sat26zy0w.notEvaluated) {
            return hs_sat26zy0w.hscall();
        } else {
            return hs_sat26zy0w;
        }
    };
    this.hs_zdfSerializzeZLz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUz2cUZR.evaluate = function (hs_zddSerializze226zxR8, hs_zddSerializze326zxR9, hs_zddSerializze426zxRa, hs_zddSerializze526zxRb, hs_zddSerializze626zxRc, hs_zddSerializze726zxRd, hs_zddSerializze826zxRe, hs_zddSerializze926zxRf, hs_zddSerializze1026zxRg, hs_zddSerializze1126zxRh) {
        var hs_sat26zy0B = new $hs.Thunk();
        hs_sat26zy0B.evaluateOnce = function () {
            return hs_zdcget1925r9j3.hscall(hs_zddSerializze226zxR8, hs_zddSerializze326zxR9, hs_zddSerializze426zxRa, hs_zddSerializze526zxRb, hs_zddSerializze626zxRc, hs_zddSerializze726zxRd, hs_zddSerializze826zxRe, hs_zddSerializze926zxRf, hs_zddSerializze1026zxRg, hs_zddSerializze1126zxRh);
        };
        var hs_sat26zy0A = new $hs.Thunk();
        hs_sat26zy0A.evaluateOnce = function () {
            return hs_zdcput1925r9jT.hscall(hs_zddSerializze226zxR8, hs_zddSerializze326zxR9, hs_zddSerializze426zxRa, hs_zddSerializze526zxRb, hs_zddSerializze626zxRc, hs_zddSerializze726zxRd, hs_zddSerializze826zxRe, hs_zddSerializze926zxRf, hs_zddSerializze1026zxRg, hs_zddSerializze1126zxRh);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy0A, hs_sat26zy0B];
        return $res;
    };
    hs_zdcget2025r9l4.evaluate = function (hs_zddSerializze226zxRm) {
        var hs_sat26zy0C = new $hs.Thunk();
        hs_sat26zy0C.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxRm);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getListOf.hscall(hs_sat26zy0C);
    };
    hs_zdcput2025r9l8.evaluate = function (hs_zddSerializze226zxRq) {
        var hs_sat26zy0D = new $hs.Thunk();
        hs_sat26zy0D.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxRq);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putListOf.hscall(hs_sat26zy0D);
    };
    this.hs_zdfSerializzeZMZN.evaluate = function (hs_zddSerializze226zxRt) {
        var hs_sat26zy0F = new $hs.Thunk();
        hs_sat26zy0F.evaluateOnce = function () {
            return hs_zdcget2025r9l4.hscall(hs_zddSerializze226zxRt);
        };
        var hs_sat26zy0E = new $hs.Thunk();
        hs_sat26zy0E.evaluateOnce = function () {
            return hs_zdcput2025r9l8.hscall(hs_zddSerializze226zxRt);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy0E, hs_sat26zy0F];
        return $res;
    };
    hs_zddSerializze25r9lg.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_zdfSerializzeZMZN.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8);
    };
    hs_zdcget2125r9lh.evaluate = function (hs_zddSerializze226zxRz) {
        var hs_sat26zy0G = new $hs.Thunk();
        hs_sat26zy0G.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxRz);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getMaybeOf.hscall(hs_sat26zy0G);
    };
    hs_zdcput2125r9ll.evaluate = function (hs_zddSerializze226zxRD) {
        var hs_sat26zy0H = new $hs.Thunk();
        hs_sat26zy0H.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxRD);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putMaybeOf.hscall(hs_sat26zy0H);
    };
    this.hs_zdfSerializzeMaybe.evaluate = function (hs_zddSerializze226zxRG) {
        var hs_sat26zy0J = new $hs.Thunk();
        hs_sat26zy0J.evaluateOnce = function () {
            return hs_zdcget2125r9lh.hscall(hs_zddSerializze226zxRG);
        };
        var hs_sat26zy0I = new $hs.Thunk();
        hs_sat26zy0I.evaluateOnce = function () {
            return hs_zdcput2125r9ll.hscall(hs_zddSerializze226zxRG);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy0I, hs_sat26zy0J];
        return $res;
    };
    hs_zdcget2225r9lt.evaluate = function (hs_zddSerializze226zxRM, hs_zddSerializze326zxRO) {
        var hs_sat26zy0L = new $hs.Thunk();
        hs_sat26zy0L.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxRO);
        };
        var hs_sat26zy0K = new $hs.Thunk();
        hs_sat26zy0K.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxRM);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getEitherOf.hscall(hs_sat26zy0K, hs_sat26zy0L);
    };
    hs_zdcput2225r9lA.evaluate = function (hs_zddSerializze226zxRT, hs_zddSerializze326zxRV) {
        var hs_sat26zy0N = new $hs.Thunk();
        hs_sat26zy0N.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxRV);
        };
        var hs_sat26zy0M = new $hs.Thunk();
        hs_sat26zy0M.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxRT);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putEitherOf.hscall(hs_sat26zy0M, hs_sat26zy0N);
    };
    this.hs_zdfSerializzeEither.evaluate = function (hs_zddSerializze226zxRZ, hs_zddSerializze326zxS0) {
        var hs_sat26zy0P = new $hs.Thunk();
        hs_sat26zy0P.evaluateOnce = function () {
            return hs_zdcget2225r9lt.hscall(hs_zddSerializze226zxRZ, hs_zddSerializze326zxS0);
        };
        var hs_sat26zy0O = new $hs.Thunk();
        hs_sat26zy0O.evaluateOnce = function () {
            return hs_zdcput2225r9lA.hscall(hs_zddSerializze226zxRZ, hs_zddSerializze326zxS0);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy0O, hs_sat26zy0P];
        return $res;
    };
    hs_sat26zy0Q.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt);
    };
    hs_zdcget2325r9lN.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy0Q, $hs.modules.DataziSerializzeziGet.hs_getByteString);
    };
    hs_zdcput2325r9lP.evaluate = function (hs_bs26zxS7) {
        var hs_sat26zy0S = new $hs.Thunk();
        hs_sat26zy0S.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziPut.hs_putByteString.hscall(hs_bs26zxS7);
        };
        var hs_sat26zy0R = new $hs.Thunk();
        hs_sat26zy0R.evaluateOnce = function () {
            var hs_sat26zy0T = new $hs.Thunk();
            hs_sat26zy0T.evaluateOnce = function () {
                return $hs.modules.DataziByteString.hs_length.hscall(hs_bs26zxS7);
            };
            return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt, hs_sat26zy0T);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zy0R, hs_sat26zy0S);
    };
    this.hs_zdfSerializzeByteString0.data = [hs_zdcput2325r9lP, hs_zdcget2325r9lN];
    hs_sat26zy0U.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt64);
    };
    hs_zdcget2425r9lV.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy0U, $hs.modules.DataziSerializzeziGet.hs_getLazzyByteString);
    };
    hs_zdcput2425r9lX.evaluate = function (hs_bs26zxSf) {
        var hs_sat26zy0W = new $hs.Thunk();
        hs_sat26zy0W.evaluateOnce = function () {
            return $hs.modules.DataziSerializzeziPut.hs_putLazzyByteString.hscall(hs_bs26zxSf);
        };
        var hs_sat26zy0V = new $hs.Thunk();
        hs_sat26zy0V.evaluateOnce = function () {
            var hs_sat26zy0X = new $hs.Thunk();
            hs_sat26zy0X.evaluateOnce = function () {
                var hs_sat26zy0Y = new $hs.Thunk();
                hs_sat26zy0Y.evaluateOnce = function () {
                    return $hs.modules.DataziByteStringziLazzy.hs_length.hscall(hs_bs26zxSf);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt64, $hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26zy0Y);
            };
            return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt, hs_sat26zy0X);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zy0V, hs_sat26zy0W);
    };
    this.hs_zdfSerializzeByteString.data = [hs_zdcput2425r9lX, hs_zdcget2425r9lV];
    hs_zdcget2525r9m4.evaluate = function (hs_zddOrd26zxSn, hs_zddSerializze226zxSo) {
        var hs_sat26zy0Z = new $hs.Thunk();
        hs_sat26zy0Z.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxSo);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getSetOf.hscall(hs_zddOrd26zxSn, hs_sat26zy0Z);
    };
    hs_zdcput2525r9ma.evaluate = function (hs_zddOrd26zxSv, hs_zddSerializze226zxSt) {
        var hs_sat26zy10 = new $hs.Thunk();
        hs_sat26zy10.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxSt);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putSetOf.hscall(hs_sat26zy10);
    };
    this.hs_zdfSerializzeSet.evaluate = function (hs_zddOrd26zxSy, hs_zddSerializze226zxSz) {
        var hs_sat26zy12 = new $hs.Thunk();
        hs_sat26zy12.evaluateOnce = function () {
            return hs_zdcget2525r9m4.hscall(hs_zddOrd26zxSy, hs_zddSerializze226zxSz);
        };
        var hs_sat26zy11 = new $hs.Thunk();
        hs_sat26zy11.evaluateOnce = function () {
            return hs_zdcput2525r9ma.hscall(hs_zddOrd26zxSy, hs_zddSerializze226zxSz);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy11, hs_sat26zy12];
        return $res;
    };
    hs_zdcget2625r9mm.evaluate = function (hs_zddOrd26zxSG, hs_zddSerializze226zxSH, hs_zddSerializze326zxSJ) {
        var hs_sat26zy14 = new $hs.Thunk();
        hs_sat26zy14.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxSJ);
        };
        var hs_sat26zy13 = new $hs.Thunk();
        hs_sat26zy13.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxSH);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getMapOf.hscall(hs_zddOrd26zxSG, hs_sat26zy13, hs_sat26zy14);
    };
    hs_zdcput2625r9mv.evaluate = function (hs_zddOrd26zxSP, hs_zddSerializze226zxSQ, hs_zddSerializze326zxSS) {
        var hs_sat26zy16 = new $hs.Thunk();
        hs_sat26zy16.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxSS);
        };
        var hs_sat26zy15 = new $hs.Thunk();
        hs_sat26zy15.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxSQ);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putMapOf.hscall(hs_zddOrd26zxSP, hs_sat26zy15, hs_sat26zy16);
    };
    this.hs_zdfSerializzeMap.evaluate = function (hs_zddOrd26zxSX, hs_zddSerializze226zxSY, hs_zddSerializze326zxSZ) {
        var hs_sat26zy18 = new $hs.Thunk();
        hs_sat26zy18.evaluateOnce = function () {
            return hs_zdcget2625r9mm.hscall(hs_zddOrd26zxSX, hs_zddSerializze226zxSY, hs_zddSerializze326zxSZ);
        };
        var hs_sat26zy17 = new $hs.Thunk();
        hs_sat26zy17.evaluateOnce = function () {
            return hs_zdcput2625r9mv.hscall(hs_zddOrd26zxSX, hs_zddSerializze226zxSY, hs_zddSerializze326zxSZ);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy17, hs_sat26zy18];
        return $res;
    };
    hs_sat26zy19.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt);
    };
    hs_zdcget2725r9mM.evaluateOnce = function () {
        return $hs.modules.DataziSerializzeziGet.hs_getIntSetOf.hscall(hs_sat26zy19);
    };
    hs_sat26zy1a.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt);
    };
    hs_zdcput2725r9mO.evaluateOnce = function () {
        return $hs.modules.DataziSerializzeziPut.hs_putIntSetOf.hscall(hs_sat26zy1a);
    };
    this.hs_zdfSerializzeIntSet.data = [hs_zdcput2725r9mO, hs_zdcget2725r9mM];
    hs_zdcget2825r9mQ.evaluate = function (hs_zddSerializze226zxT9) {
        var hs_sat26zy1c = new $hs.Thunk();
        hs_sat26zy1c.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxT9);
        };
        var hs_sat26zy1b = new $hs.Thunk();
        hs_sat26zy1b.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getIntMapOf.hscall(hs_sat26zy1b, hs_sat26zy1c);
    };
    hs_zdcput2825r9mV.evaluate = function (hs_zddSerializze226zxTe) {
        var hs_sat26zy1e = new $hs.Thunk();
        hs_sat26zy1e.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxTe);
        };
        var hs_sat26zy1d = new $hs.Thunk();
        hs_sat26zy1d.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putIntMapOf.hscall(hs_sat26zy1d, hs_sat26zy1e);
    };
    this.hs_zdfSerializzeIntMap.evaluate = function (hs_zddSerializze226zxTh) {
        var hs_sat26zy1g = new $hs.Thunk();
        hs_sat26zy1g.evaluateOnce = function () {
            return hs_zdcget2825r9mQ.hscall(hs_zddSerializze226zxTh);
        };
        var hs_sat26zy1f = new $hs.Thunk();
        hs_sat26zy1f.evaluateOnce = function () {
            return hs_zdcput2825r9mV.hscall(hs_zddSerializze226zxTh);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy1f, hs_sat26zy1g];
        return $res;
    };
    hs_zdcget2925r9n4.evaluate = function (hs_zddSerializze226zxTm) {
        var hs_sat26zy1h = new $hs.Thunk();
        hs_sat26zy1h.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxTm);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getSeqOf.hscall(hs_sat26zy1h);
    };
    hs_zdcput2925r9n8.evaluate = function (hs_zddSerializze226zxTq) {
        var hs_sat26zy1i = new $hs.Thunk();
        hs_sat26zy1i.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxTq);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putSeqOf.hscall(hs_sat26zy1i);
    };
    this.hs_zdfSerializzeSeq.evaluate = function (hs_zddSerializze226zxTt) {
        var hs_sat26zy1k = new $hs.Thunk();
        hs_sat26zy1k.evaluateOnce = function () {
            return hs_zdcget2925r9n4.hscall(hs_zddSerializze226zxTt);
        };
        var hs_sat26zy1j = new $hs.Thunk();
        hs_sat26zy1j.evaluateOnce = function () {
            return hs_zdcput2925r9n8.hscall(hs_zddSerializze226zxTt);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy1j, hs_sat26zy1k];
        return $res;
    };
    hs_zdcget3025r9ng.evaluate = function (hs_zddSerializze226zxTy) {
        var hs_sat26zy1l = new $hs.Thunk();
        hs_sat26zy1l.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxTy);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getTreeOf.hscall(hs_sat26zy1l);
    };
    hs_zdcput3025r9nk.evaluate = function (hs_zddSerializze226zxTC) {
        var hs_sat26zy1m = new $hs.Thunk();
        hs_sat26zy1m.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxTC);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putTreeOf.hscall(hs_sat26zy1m);
    };
    this.hs_zdfSerializzeTree.evaluate = function (hs_zddSerializze226zxTF) {
        var hs_sat26zy1o = new $hs.Thunk();
        hs_sat26zy1o.evaluateOnce = function () {
            return hs_zdcget3025r9ng.hscall(hs_zddSerializze226zxTF);
        };
        var hs_sat26zy1n = new $hs.Thunk();
        hs_sat26zy1n.evaluateOnce = function () {
            return hs_zdcput3025r9nk.hscall(hs_zddSerializze226zxTF);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy1n, hs_sat26zy1o];
        return $res;
    };
    hs_zdcget3125r9ns.evaluate = function (hs_zddSerializze226zxTN, hs_zddIx26zxTM, hs_zddSerializze326zxTP) {
        var hs_sat26zy1q = new $hs.Thunk();
        hs_sat26zy1q.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxTP);
        };
        var hs_sat26zy1p = new $hs.Thunk();
        hs_sat26zy1p.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxTN);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getIArrayOf.hscall(hs_zddIx26zxTM, $hs.modules.DataziArrayziBase.hs_zdfIArrayArraye, hs_sat26zy1p, hs_sat26zy1q);
    };
    hs_zdcput3125r9nB.evaluate = function (hs_zddSerializze226zxTW, hs_zddIx26zxTV, hs_zddSerializze326zxTY) {
        var hs_sat26zy1s = new $hs.Thunk();
        hs_sat26zy1s.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxTY);
        };
        var hs_sat26zy1r = new $hs.Thunk();
        hs_sat26zy1r.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxTW);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putIArrayOf.hscall(hs_zddIx26zxTV, $hs.modules.DataziArrayziBase.hs_zdfIArrayArraye, hs_sat26zy1r, hs_sat26zy1s);
    };
    this.hs_zdfSerializzeArray.evaluate = function (hs_zddSerializze226zxU3, hs_zddIx26zxU4, hs_zddSerializze326zxU5) {
        var hs_sat26zy1u = new $hs.Thunk();
        hs_sat26zy1u.evaluateOnce = function () {
            return hs_zdcget3125r9ns.hscall(hs_zddSerializze226zxU3, hs_zddIx26zxU4, hs_zddSerializze326zxU5);
        };
        var hs_sat26zy1t = new $hs.Thunk();
        hs_sat26zy1t.evaluateOnce = function () {
            return hs_zdcput3125r9nB.hscall(hs_zddSerializze226zxU3, hs_zddIx26zxU4, hs_zddSerializze326zxU5);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy1t, hs_sat26zy1u];
        return $res;
    };
    hs_zdcget3225r9nS.evaluate = function (hs_zddSerializze226zxUf, hs_zddIx26zxUd, hs_zddSerializze326zxUh, hs_zddIArray26zxUe) {
        var hs_sat26zy1w = new $hs.Thunk();
        hs_sat26zy1w.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze326zxUh);
        };
        var hs_sat26zy1v = new $hs.Thunk();
        hs_sat26zy1v.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze226zxUf);
        };
        return $hs.modules.DataziSerializzeziGet.hs_getIArrayOf.hscall(hs_zddIx26zxUd, hs_zddIArray26zxUe, hs_sat26zy1v, hs_sat26zy1w);
    };
    hs_zdcput3225r9o3.evaluate = function (hs_zddSerializze226zxUq, hs_zddIx26zxUo, hs_zddSerializze326zxUs, hs_zddIArray26zxUp) {
        var hs_sat26zy1y = new $hs.Thunk();
        hs_sat26zy1y.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze326zxUs);
        };
        var hs_sat26zy1x = new $hs.Thunk();
        hs_sat26zy1x.evaluateOnce = function () {
            return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze226zxUq);
        };
        return $hs.modules.DataziSerializzeziPut.hs_putIArrayOf.hscall(hs_zddIx26zxUo, hs_zddIArray26zxUp, hs_sat26zy1x, hs_sat26zy1y);
    };
    this.hs_zdfSerializzeUArray.evaluate = function (hs_zddSerializze226zxUy, hs_zddIx26zxUz, hs_zddSerializze326zxUA, hs_zddIArray26zxUB) {
        var hs_sat26zy1A = new $hs.Thunk();
        hs_sat26zy1A.evaluateOnce = function () {
            return hs_zdcget3225r9nS.hscall(hs_zddSerializze226zxUy, hs_zddIx26zxUz, hs_zddSerializze326zxUA, hs_zddIArray26zxUB);
        };
        var hs_sat26zy1z = new $hs.Thunk();
        hs_sat26zy1z.evaluateOnce = function () {
            return hs_zdcput3225r9o3.hscall(hs_zddSerializze226zxUy, hs_zddIx26zxUz, hs_zddSerializze326zxUA, hs_zddIArray26zxUB);
        };
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26zy1z, hs_sat26zy1A];
        return $res;
    };
    hs_zddNum26zxUF.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInteger);
    };
    hs_zddEq26zxUH.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26zxUF);
    };
    hs_sat26zy1I.evaluate = function (hs_ds26zxUJ) {
        var hs_sat26zy1B = new $hs.Thunk();
        hs_sat26zy1B.evaluateOnce = function () {
            var hs_sat26zy1H = new $hs.Thunk();
            hs_sat26zy1H.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26zxUF, hs_sat26zy1H);
        };
        var hs_wild26zy1C = $hs.modules.GHCziClasses.hs_zeze.hscall(hs_zddEq26zxUH, hs_ds26zxUJ, hs_sat26zy1B);
        switch (hs_wild26zy1C.tag) {
        case 1:
            var hs_sat26zy1E = new $hs.Thunk();
            hs_sat26zy1E.evaluateOnce = function () {
                var hs_sat26zy1G = new $hs.Data(1);
                hs_sat26zy1G.data = [8];
                return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_ds26zxUJ, hs_sat26zy1G);
            };
            var hs_sat26zy1F = new $hs.Thunk();
            hs_sat26zy1F.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ds26zxUJ);
            };
            var hs_sat26zy1D = new $hs.Data(1);
            hs_sat26zy1D.data = [hs_sat26zy1F, hs_sat26zy1E];
            var $res = new $hs.Data(2);
            $res.data = [hs_sat26zy1D];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_unroll25r8HN.evaluateOnce = function () {
        return $hs.modules.DataziList.hs_unfoldr.hscall(hs_sat26zy1I);
    };
    hs_zdcput3325r9oC.evaluate = function (hs_n26zxUU) {
        var hs_sat26zy1K = new $hs.Thunk();
        hs_sat26zy1K.evaluateOnce = function () {
            var hs_sat26zy23 = new $hs.Thunk();
            hs_sat26zy23.evaluateOnce = function () {
                var hs_sat26zy24 = new $hs.Thunk();
                hs_sat26zy24.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_maxBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26zy24);
            };
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26zxUU, hs_sat26zy23);
        };
        var hs_sat26zy1L = new $hs.Thunk();
        hs_sat26zy1L.evaluateOnce = function () {
            var hs_sat26zy21 = new $hs.Thunk();
            hs_sat26zy21.evaluateOnce = function () {
                var hs_sat26zy22 = new $hs.Thunk();
                hs_sat26zy22.evaluateOnce = function () {
                    return $hs.modules.GHCziEnum.hs_minBound.hscall($hs.modules.GHCziInt.hs_zdfBoundedInt32);
                };
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26zy22);
            };
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInteger, hs_n26zxUU, hs_sat26zy21);
        };
        var hs_wild26zy1M = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26zy1L, hs_sat26zy1K);
        switch (hs_wild26zy1M.tag) {
        case 1:
            var hs_sat26zy1S = new $hs.Thunk();
            hs_sat26zy1S.evaluateOnce = function () {
                var hs_sat26zy1W = new $hs.Thunk();
                hs_sat26zy1W.evaluateOnce = function () {
                    var hs_sat26zy1Z = new $hs.Thunk();
                    hs_sat26zy1Z.evaluateOnce = function () {
                        var hs_sat26zy20 = new $hs.Thunk();
                        hs_sat26zy20.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26zxUU);
                        };
                        return hs_unroll25r8HN.hscall(hs_sat26zy20);
                    };
                    return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze25r9lg, hs_sat26zy1Z);
                };
                var hs_sat26zy1V = new $hs.Thunk();
                hs_sat26zy1V.evaluateOnce = function () {
                    var hs_sat26zy1X = new $hs.Thunk();
                    hs_sat26zy1X.evaluateOnce = function () {
                        var hs_sat26zy1Y = new $hs.Thunk();
                        hs_sat26zy1Y.evaluateOnce = function () {
                            return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_n26zxUU);
                        };
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zy1Y);
                    };
                    return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8, hs_sat26zy1X);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zy1V, hs_sat26zy1W);
            };
            var hs_sat26zy1R = new $hs.Thunk();
            hs_sat26zy1R.evaluateOnce = function () {
                var hs_sat26zy1T = new $hs.Thunk();
                hs_sat26zy1T.evaluateOnce = function () {
                    var hs_sat26zy1U = new $hs.Thunk();
                    hs_sat26zy1U.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zy1U);
                };
                return $hs.modules.DataziSerializzeziPut.hs_putWord8.hscall(hs_sat26zy1T);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zy1R, hs_sat26zy1S);
        case 2:
            var hs_sat26zy1N = new $hs.Thunk();
            hs_sat26zy1N.evaluateOnce = function () {
                var hs_sat26zy1Q = new $hs.Thunk();
                hs_sat26zy1Q.evaluateOnce = function () {
                    return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInteger, $hs.modules.GHCziInt.hs_zdfNumInt32, hs_n26zxUU);
                };
                return $hs.modules.DataziSerializze.hs_put.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt32, hs_sat26zy1Q);
            };
            var hs_sat26zy1J = new $hs.Thunk();
            hs_sat26zy1J.evaluateOnce = function () {
                var hs_sat26zy1O = new $hs.Thunk();
                hs_sat26zy1O.evaluateOnce = function () {
                    var hs_sat26zy1P = new $hs.Thunk();
                    hs_sat26zy1P.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zy1P);
                };
                return $hs.modules.DataziSerializzeziPut.hs_putWord8.hscall(hs_sat26zy1O);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.DataziSerializzeziPut.hs_zdfMonadPutM, hs_sat26zy1J, hs_sat26zy1N);
        }
    };
    hs_sat26zy25.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
    };
    hs_zddNum26zxVi.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInteger);
    };
    hs_sat26zy29.evaluate = function (hs_b26zxVo, hs_a26zxVl) {
        var hs_sat26zy27 = new $hs.Thunk();
        hs_sat26zy27.evaluateOnce = function () {
            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, hs_zddNum26zxVi, hs_b26zxVo);
        };
        var hs_sat26zy26 = new $hs.Thunk();
        hs_sat26zy26.evaluateOnce = function () {
            var hs_sat26zy28 = new $hs.Data(1);
            hs_sat26zy28.data = [8];
            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_a26zxVl, hs_sat26zy28);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_sat26zy26, hs_sat26zy27);
    };
    hs_roll25r8HO.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_foldr.hscall(hs_sat26zy29, hs_sat26zy25);
    };
    hs_sat26zy2p.evaluate = function (hs_tag26zxVv) {
        var hs_sat26zy2b = new $hs.Thunk();
        hs_sat26zy2b.evaluateOnce = function () {
            var hs_sat26zy2o = new $hs.Thunk();
            hs_sat26zy2o.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zy2o);
        };
        var hs_wild26zy2c = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_tag26zxVv, hs_sat26zy2b);
        switch (hs_wild26zy2c.tag) {
        case 1:
            var hs_sat26zy2f = new $hs.Func(1);
            hs_sat26zy2f.evaluate = function (hs_sign26zxVE) {
                var hs_sat26zy2h = new $hs.Func(1);
                hs_sat26zy2h.evaluate = function (hs_bytes26zxVI) {
                    var hs_sat26zy2j = new $hs.Thunk();
                    hs_sat26zy2j.evaluateOnce = function () {
                        var hs_sat26zy2k = new $hs.Thunk();
                        hs_sat26zy2k.evaluateOnce = function () {
                            var hs_sat26zy2n = new $hs.Thunk();
                            hs_sat26zy2n.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26zy2n);
                        };
                        var hs_wild126zy2l = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord8, hs_sign26zxVE, hs_sat26zy2k);
                        switch (hs_wild126zy2l.tag) {
                        case 1:
                            var hs_sat26zy2m = new $hs.Thunk();
                            hs_sat26zy2m.evaluateOnce = function () {
                                return hs_roll25r8HO.hscall(hs_bytes26zxVI);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26zy2m);
                        case 2:
                            return hs_roll25r8HO.hscall(hs_bytes26zxVI);
                        }
                    };
                    var hs_sat26zy2i = new $hs.Thunk();
                    hs_sat26zy2i.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet);
                    };
                    return $hs.modules.Prelude.hs_zdzn.hscall(hs_sat26zy2i, hs_sat26zy2j);
                };
                var hs_sat26zy2g = new $hs.Thunk();
                hs_sat26zy2g.evaluateOnce = function () {
                    return $hs.modules.DataziSerializze.hs_get.hscall(hs_zddSerializze25r9lg);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy2g, hs_sat26zy2h);
            };
            var hs_sat26zy2e = new $hs.Thunk();
            hs_sat26zy2e.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy2e, hs_sat26zy2f);
        case 2:
            var hs_sat26zy2d = new $hs.Thunk();
            hs_sat26zy2d.evaluateOnce = function () {
                return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt32);
            };
            var hs_sat26zy2a = new $hs.Thunk();
            hs_sat26zy2a.evaluateOnce = function () {
                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziInt.hs_zdfIntegralInt32, $hs.modules.GHCziNum.hs_zdfNumInteger);
            };
            return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy2a, hs_sat26zy2d);
        }
    };
    hs_sat26zy2q.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeWord8);
    };
    hs_zdcget3325r9pc.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy2q, hs_sat26zy2p);
    };
    this.hs_zdfSerializzeInteger.data = [hs_zdcput3325r9oC, hs_zdcget3325r9pc];
    hs_sat26zy2r.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt);
    };
    hs_sat26zy2s.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInteger);
    };
    hs_sat26zy2t.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat);
    };
    hs_zdcget3425r9pA.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy2t, hs_sat26zy2s, hs_sat26zy2r);
    };
    hs_sat26zy2u.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInt);
    };
    hs_sat26zy2v.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_get.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInteger);
    };
    hs_sat26zy2w.evaluateOnce = function () {
        return $hs.modules.GHCziFloat.hs_encodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble);
    };
    hs_zdcget3525r9pE.evaluateOnce = function () {
        return $hs.modules.ControlziMonad.hs_liftM2.hscall($hs.modules.DataziSerializzeziGet.hs_zdfMonadGet, hs_sat26zy2w, hs_sat26zy2v, hs_sat26zy2u);
    };
    hs_zddSerializze125r9pI.evaluateOnce = function () {
        return $hs.modules.DataziSerializze.hs_zdfSerializzeZLz2cUZR.hscall($hs.modules.DataziSerializze.hs_zdfSerializzeInteger, $hs.modules.DataziSerializze.hs_zdfSerializzeInt);
    };
    hs_zdcput3425r9pJ.evaluate = function (hs_f26zxW1) {
        var hs_sat26zy2x = new $hs.Thunk();
        hs_sat26zy2x.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatFloat, hs_f26zxW1);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze125r9pI, hs_sat26zy2x);
    };
    this.hs_zdfSerializzeFloat.data = [hs_zdcput3425r9pJ, hs_zdcget3425r9pA];
    hs_zdcput3525r9pN.evaluate = function (hs_d26zxW5) {
        var hs_sat26zy2y = new $hs.Thunk();
        hs_sat26zy2y.evaluateOnce = function () {
            return $hs.modules.GHCziFloat.hs_decodeFloat.hscall($hs.modules.GHCziFloat.hs_zdfRealFloatDouble, hs_d26zxW5);
        };
        return $hs.modules.DataziSerializze.hs_put.hscall(hs_zddSerializze125r9pI, hs_sat26zy2y);
    };
    this.hs_zdfSerializzeDouble.data = [hs_zdcput3525r9pN, hs_zdcget3525r9pE];
    this.hs_DZCSerializze.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
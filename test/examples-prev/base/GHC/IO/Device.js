
$hs.modules.GHCziIOziDevice = new $hs.Module();
$hs.modules.GHCziIOziDevice.dependencies = ["GHC.Types", "GHC.Bool", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.IO", "GHC.Arr", "GHC.IO.Exception", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
$hs.modules.GHCziIOziDevice.initBeforeDependencies = function () {
    this.hs_ready = new $hs.Func(1);
    this.hs_close = new $hs.Func(1);
    this.hs_isTerminal = new $hs.Func(1);
    this.hs_isSeekable = new $hs.Func(1);
    this.hs_seek = new $hs.Func(1);
    this.hs_tell = new $hs.Func(1);
    this.hs_getSizze = new $hs.Func(1);
    this.hs_setSizze = new $hs.Func(1);
    this.hs_setEcho = new $hs.Func(1);
    this.hs_getEcho = new $hs.Func(1);
    this.hs_setRaw = new $hs.Func(1);
    this.hs_devType = new $hs.Func(1);
    this.hs_dup = new $hs.Func(1);
    this.hs_dup2 = new $hs.Func(1);
    this.hs_read = new $hs.Func(1);
    this.hs_readNonBlocking = new $hs.Func(1);
    this.hs_write = new $hs.Func(1);
    this.hs_writeNonBlocking = new $hs.Func(1);
    this.hs_zddmisSeekable = new $hs.Func(2);
    this.hs_zddmisTerminal = new $hs.Func(2);
    this.hs_zddmseek = new $hs.Func(4);
    this.hs_zddmtell = new $hs.Func(2);
    this.hs_zddmgetSizze = new $hs.Func(2);
    this.hs_zddmsetSizze = new $hs.Func(3);
    this.hs_zddmsetEcho = new $hs.Func(3);
    this.hs_zddmgetEcho = new $hs.Func(2);
    this.hs_zddmsetRaw = new $hs.Func(3);
    this.hs_zddmdup = new $hs.Func(2);
    this.hs_zddmdup2 = new $hs.Func(3);
    this.hs_zdfShowSeekMode = new $hs.Data(1);
    this.hs_zdfReadSeekMode = new $hs.Data(1);
    this.hs_zdfEnumSeekMode = new $hs.Data(1);
    this.hs_zdfEqSeekMode = new $hs.Data(1);
    this.hs_zdfOrdSeekMode = new $hs.Data(1);
    this.hs_zdfIxSeekMode = new $hs.Data(1);
    this.hs_zdfEqIODeviceType = new $hs.Data(1);
    this.hs_AbsoluteSeek = new $hs.Data(1);
    this.hs_RelativeSeek = new $hs.Data(2);
    this.hs_SeekFromEnd = new $hs.Data(3);
    this.hs_Directory = new $hs.Data(1);
    this.hs_Stream = new $hs.Data(2);
    this.hs_RegularFile = new $hs.Data(3);
    this.hs_RawDevice = new $hs.Data(4);
    this.hs_DZCRawIO = new $hs.Func(4);
    this.hs_DZCIODevice = new $hs.Func(14);
    this.hs_ready.notEvaluated = true;
    this.hs_ready.evaluate = function (hs_tpl26Docn) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Docn);
    };
    this.hs_close.notEvaluated = true;
    this.hs_close.evaluate = function (hs_tpl26DocF) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DocF);
    };
    this.hs_isTerminal.notEvaluated = true;
    this.hs_isTerminal.evaluate = function (hs_tpl26DocX) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DocX);
    };
    this.hs_isSeekable.notEvaluated = true;
    this.hs_isSeekable.evaluate = function (hs_tpl26Dodf) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Dodf);
    };
    this.hs_seek.notEvaluated = true;
    this.hs_seek.evaluate = function (hs_tpl26Dodx) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Dodx);
    };
    this.hs_tell.notEvaluated = true;
    this.hs_tell.evaluate = function (hs_tpl26DodP) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DodP);
    };
    this.hs_getSizze.notEvaluated = true;
    this.hs_getSizze.evaluate = function (hs_tpl26Doe7) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Doe7);
    };
    this.hs_setSizze.notEvaluated = true;
    this.hs_setSizze.evaluate = function (hs_tpl26Doep) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Doep);
    };
    this.hs_setEcho.notEvaluated = true;
    this.hs_setEcho.evaluate = function (hs_tpl26DoeH) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DoeH);
    };
    this.hs_getEcho.notEvaluated = true;
    this.hs_getEcho.evaluate = function (hs_tpl26DoeZ) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DoeZ);
    };
    this.hs_setRaw.notEvaluated = true;
    this.hs_setRaw.evaluate = function (hs_tpl26Dofh) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Dofh);
    };
    this.hs_devType.notEvaluated = true;
    this.hs_devType.evaluate = function (hs_tpl26Dofz) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Dofz);
    };
    this.hs_dup.notEvaluated = true;
    this.hs_dup.evaluate = function (hs_tpl26DofR) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DofR);
    };
    this.hs_dup2.notEvaluated = true;
    this.hs_dup2.evaluate = function (hs_tpl26Dog9) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Dog9);
    };
    this.hs_read.notEvaluated = true;
    this.hs_read.evaluate = function (hs_tpl26Dogr) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Dogr);
    };
    this.hs_readNonBlocking.notEvaluated = true;
    this.hs_readNonBlocking.evaluate = function (hs_tpl26Dogz) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26Dogz);
    };
    this.hs_write.notEvaluated = true;
    this.hs_write.evaluate = function (hs_tpl26DogH) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DogH);
    };
    this.hs_writeNonBlocking.notEvaluated = true;
    this.hs_writeNonBlocking.evaluate = function (hs_tpl26DogP) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26DogP);
    };
    this.hs_zddmisSeekable.notEvaluated = true;
    this.hs_zddmisSeekable.evaluate = function (hs_zddIODevice26Doh3, hs_ds26Doh4) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26Doh3, hs_ds26Doh4);
    };
    this.hs_zddmisTerminal.notEvaluated = true;
    this.hs_zddmisTerminal.evaluate = function (hs_zddIODevice26Doh7, hs_ds26Doh8) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26Doh7, hs_ds26Doh8);
    };
    this.hs_zddmseek.notEvaluated = true;
    this.hs_zddmseek.evaluate = function (hs_zddIODevice26Dohd, hs_ds26Dohe, hs_ds126Dohf, hs_ds226Dohg) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26Dohd, hs_ds26Dohe, hs_ds126Dohf, hs_ds226Dohg);
    };
    this.hs_zddmtell.notEvaluated = true;
    this.hs_zddmtell.evaluate = function (hs_zddIODevice26Dohj, hs_ds26Dohk) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26Dohj, hs_ds26Dohk);
    };
    this.hs_zddmgetSizze.notEvaluated = true;
    this.hs_zddmgetSizze.evaluate = function (hs_zddIODevice26Dohn, hs_ds26Doho) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26Dohn, hs_ds26Doho);
    };
    this.hs_zddmsetSizze.notEvaluated = true;
    this.hs_zddmsetSizze.evaluate = function (hs_zddIODevice26Dohs, hs_ds26Doht, hs_ds126Dohu) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26Dohs, hs_ds26Doht, hs_ds126Dohu);
    };
    this.hs_zddmsetEcho.notEvaluated = true;
    this.hs_zddmsetEcho.evaluate = function (hs_zddIODevice26Dohy, hs_ds26Dohz, hs_ds126DohA) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26Dohy, hs_ds26Dohz, hs_ds126DohA);
    };
    this.hs_zddmgetEcho.notEvaluated = true;
    this.hs_zddmgetEcho.evaluate = function (hs_zddIODevice26DohD, hs_ds26DohE) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26DohD, hs_ds26DohE);
    };
    this.hs_zddmsetRaw.notEvaluated = true;
    this.hs_zddmsetRaw.evaluate = function (hs_zddIODevice26DohI, hs_ds26DohJ, hs_ds126DohK) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26DohI, hs_ds26DohJ, hs_ds126DohK);
    };
    this.hs_zddmdup.notEvaluated = true;
    this.hs_zddmdup.evaluate = function (hs_zddIODevice26DohN, hs_ds26DohO) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26DohN, hs_ds26DohO);
    };
    this.hs_zddmdup2.notEvaluated = true;
    this.hs_zddmdup2.evaluate = function (hs_zddIODevice26DohS, hs_ds26DohT, hs_ds126DohU) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26DohS, hs_ds26DohT, hs_ds126DohU);
    };
    this.hs_zdfShowSeekMode.notEvaluated = true;
    this.hs_zdfShowSeekMode.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_zdfReadSeekMode.notEvaluated = true;
    this.hs_zdfReadSeekMode.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_zdfEnumSeekMode.notEvaluated = true;
    this.hs_zdfEnumSeekMode.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_zdfEqSeekMode.notEvaluated = true;
    this.hs_zdfEqSeekMode.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_zdfOrdSeekMode.notEvaluated = true;
    this.hs_zdfOrdSeekMode.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_zdfIxSeekMode.notEvaluated = true;
    this.hs_zdfIxSeekMode.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_zdfEqIODeviceType.notEvaluated = true;
    this.hs_zdfEqIODeviceType.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_AbsoluteSeek.notEvaluated = true;
    this.hs_AbsoluteSeek.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_RelativeSeek.notEvaluated = true;
    this.hs_RelativeSeek.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_SeekFromEnd.notEvaluated = true;
    this.hs_SeekFromEnd.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_Directory.notEvaluated = true;
    this.hs_Directory.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_Stream.notEvaluated = true;
    this.hs_Stream.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_RegularFile.notEvaluated = true;
    this.hs_RegularFile.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_RawDevice.notEvaluated = true;
    this.hs_RawDevice.evaluate = function () {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this;
    };
    this.hs_DZCRawIO.notEvaluated = true;
    this.hs_DZCRawIO.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_DZCIODevice.notEvaluated = true;
    this.hs_DZCIODevice.evaluate = function (hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziIOziDevice.initAfterDependencies = function () {
    this.hs_ready.notEvaluated = false;
    this.hs_close.notEvaluated = false;
    this.hs_isTerminal.notEvaluated = false;
    this.hs_isSeekable.notEvaluated = false;
    this.hs_seek.notEvaluated = false;
    this.hs_tell.notEvaluated = false;
    this.hs_getSizze.notEvaluated = false;
    this.hs_setSizze.notEvaluated = false;
    this.hs_setEcho.notEvaluated = false;
    this.hs_getEcho.notEvaluated = false;
    this.hs_setRaw.notEvaluated = false;
    this.hs_devType.notEvaluated = false;
    this.hs_dup.notEvaluated = false;
    this.hs_dup2.notEvaluated = false;
    this.hs_read.notEvaluated = false;
    this.hs_readNonBlocking.notEvaluated = false;
    this.hs_write.notEvaluated = false;
    this.hs_writeNonBlocking.notEvaluated = false;
    this.hs_zddmisSeekable.notEvaluated = false;
    this.hs_zddmisTerminal.notEvaluated = false;
    this.hs_zddmseek.notEvaluated = false;
    this.hs_zddmtell.notEvaluated = false;
    this.hs_zddmgetSizze.notEvaluated = false;
    this.hs_zddmsetSizze.notEvaluated = false;
    this.hs_zddmsetEcho.notEvaluated = false;
    this.hs_zddmgetEcho.notEvaluated = false;
    this.hs_zddmsetRaw.notEvaluated = false;
    this.hs_zddmdup.notEvaluated = false;
    this.hs_zddmdup2.notEvaluated = false;
    this.hs_zdfShowSeekMode.notEvaluated = false;
    this.hs_zdfShowSeekMode.evaluate = function () {
        return this;
    };
    this.hs_zdfReadSeekMode.notEvaluated = false;
    this.hs_zdfReadSeekMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEnumSeekMode.notEvaluated = false;
    this.hs_zdfEnumSeekMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEqSeekMode.notEvaluated = false;
    this.hs_zdfEqSeekMode.evaluate = function () {
        return this;
    };
    this.hs_zdfOrdSeekMode.notEvaluated = false;
    this.hs_zdfOrdSeekMode.evaluate = function () {
        return this;
    };
    this.hs_zdfIxSeekMode.notEvaluated = false;
    this.hs_zdfIxSeekMode.evaluate = function () {
        return this;
    };
    this.hs_zdfEqIODeviceType.notEvaluated = false;
    this.hs_zdfEqIODeviceType.evaluate = function () {
        return this;
    };
    this.hs_AbsoluteSeek.notEvaluated = false;
    this.hs_AbsoluteSeek.evaluate = function () {
        return this;
    };
    this.hs_RelativeSeek.notEvaluated = false;
    this.hs_RelativeSeek.evaluate = function () {
        return this;
    };
    this.hs_SeekFromEnd.notEvaluated = false;
    this.hs_SeekFromEnd.evaluate = function () {
        return this;
    };
    this.hs_Directory.notEvaluated = false;
    this.hs_Directory.evaluate = function () {
        return this;
    };
    this.hs_Stream.notEvaluated = false;
    this.hs_Stream.evaluate = function () {
        return this;
    };
    this.hs_RegularFile.notEvaluated = false;
    this.hs_RegularFile.evaluate = function () {
        return this;
    };
    this.hs_RawDevice.notEvaluated = false;
    this.hs_RawDevice.evaluate = function () {
        return this;
    };
    this.hs_DZCRawIO.notEvaluated = false;
    this.hs_DZCIODevice.notEvaluated = false;
    var hs_zdtag2conzuSeekMode25sASt = new $hs.Func(1);
    var hs_zdmaxtagzuSeekMode25sASr = new $hs.Data(1);
    var hs_ioezuunsupportedOperation25sAR2 = new $hs.Thunk();
    var hs_zdcshowsPrec25uZLG = new $hs.Func(2);
    var hs_sat26Doqn = new $hs.Thunk();
    var hs_zdcshowList25uZLQ = new $hs.Thunk();
    var hs_zdcshow25uZLS = new $hs.Thunk();
    var hs_sat26DoqB = new $hs.Thunk();
    var hs_zdcreadPrec25uZLW = new $hs.Thunk();
    var hs_zdcreadListPrec25uZMb = new $hs.Thunk();
    var hs_zdcreadList25uZMd = new $hs.Thunk();
    var hs_zdcreadsPrec25uZMf = new $hs.Thunk();
    var hs_zdcenumFromThen25uZMh = new $hs.Func(2);
    var hs_zdcenumFrom25uZME = new $hs.Func(1);
    var hs_zdcfromEnum25uZMP = new $hs.Func(1);
    var hs_zdctoEnum25uZMU = new $hs.Func(1);
    var hs_zdcpred25uZNf = new $hs.Func(1);
    var hs_zdcsucc25uZNx = new $hs.Func(1);
    var hs_zdcenumFromThenTo25uZNO = new $hs.Thunk();
    var hs_zdcenumFromTo25uZNQ = new $hs.Thunk();
    var hs_zdcinRange25uZNS = new $hs.Func(2);
    var hs_zdcunsafeIndex25uZOh = new $hs.Func(2);
    var hs_zdcrange25uZOA = new $hs.Func(1);
    var hs_zdczlze25uZOY = new $hs.Func(2);
    var hs_zdczg25uZP8 = new $hs.Func(2);
    var hs_zdczgze25uZPi = new $hs.Func(2);
    var hs_zdczl25uZPs = new $hs.Func(2);
    var hs_zdccompare25uZPC = new $hs.Func(2);
    var hs_zdczeze25uZPU = new $hs.Func(2);
    var hs_zdczsze25uZQ4 = new $hs.Func(2);
    var hs_zdcmin25uZQb = new $hs.Thunk();
    var hs_zdcmax25uZQd = new $hs.Thunk();
    var hs_zdcunsafeRangeSizze25uZQf = new $hs.Thunk();
    var hs_zdcrangeSizze25uZQh = new $hs.Thunk();
    var hs_zdcindex25uZQj = new $hs.Thunk();
    var hs_zdczeze125uZQl = new $hs.Func(2);
    var hs_zdczsze125uZQw = new $hs.Func(2);
    this.hs_ready.evaluate = function (hs_tpl26Docn) {
        var hs_tpl26DomS = hs_tpl26Docn;
        if (hs_tpl26Docn.notEvaluated) {
            hs_tpl26DomS = hs_tpl26Docn.hscall();
        }
        var hs_tpl26DocD = hs_tpl26DomS.data[0];
        if (hs_tpl26DocD.notEvaluated) {
            return hs_tpl26DocD.hscall();
        } else {
            return hs_tpl26DocD;
        }
    };
    this.hs_close.evaluate = function (hs_tpl26DocF) {
        var hs_tpl26Don7 = hs_tpl26DocF;
        if (hs_tpl26DocF.notEvaluated) {
            hs_tpl26Don7 = hs_tpl26DocF.hscall();
        }
        var hs_tpl26DocV = hs_tpl26Don7.data[1];
        if (hs_tpl26DocV.notEvaluated) {
            return hs_tpl26DocV.hscall();
        } else {
            return hs_tpl26DocV;
        }
    };
    this.hs_isTerminal.evaluate = function (hs_tpl26DocX) {
        var hs_tpl26Donl = hs_tpl26DocX;
        if (hs_tpl26DocX.notEvaluated) {
            hs_tpl26Donl = hs_tpl26DocX.hscall();
        }
        var hs_tpl26Dodd = hs_tpl26Donl.data[2];
        if (hs_tpl26Dodd.notEvaluated) {
            return hs_tpl26Dodd.hscall();
        } else {
            return hs_tpl26Dodd;
        }
    };
    this.hs_isSeekable.evaluate = function (hs_tpl26Dodf) {
        var hs_tpl26Donz = hs_tpl26Dodf;
        if (hs_tpl26Dodf.notEvaluated) {
            hs_tpl26Donz = hs_tpl26Dodf.hscall();
        }
        var hs_tpl26Dodv = hs_tpl26Donz.data[3];
        if (hs_tpl26Dodv.notEvaluated) {
            return hs_tpl26Dodv.hscall();
        } else {
            return hs_tpl26Dodv;
        }
    };
    this.hs_seek.evaluate = function (hs_tpl26Dodx) {
        var hs_tpl26DonN = hs_tpl26Dodx;
        if (hs_tpl26Dodx.notEvaluated) {
            hs_tpl26DonN = hs_tpl26Dodx.hscall();
        }
        var hs_tpl26DodN = hs_tpl26DonN.data[4];
        if (hs_tpl26DodN.notEvaluated) {
            return hs_tpl26DodN.hscall();
        } else {
            return hs_tpl26DodN;
        }
    };
    this.hs_tell.evaluate = function (hs_tpl26DodP) {
        var hs_tpl26Doo1 = hs_tpl26DodP;
        if (hs_tpl26DodP.notEvaluated) {
            hs_tpl26Doo1 = hs_tpl26DodP.hscall();
        }
        var hs_tpl26Doe5 = hs_tpl26Doo1.data[5];
        if (hs_tpl26Doe5.notEvaluated) {
            return hs_tpl26Doe5.hscall();
        } else {
            return hs_tpl26Doe5;
        }
    };
    this.hs_getSizze.evaluate = function (hs_tpl26Doe7) {
        var hs_tpl26Doof = hs_tpl26Doe7;
        if (hs_tpl26Doe7.notEvaluated) {
            hs_tpl26Doof = hs_tpl26Doe7.hscall();
        }
        var hs_tpl26Doen = hs_tpl26Doof.data[6];
        if (hs_tpl26Doen.notEvaluated) {
            return hs_tpl26Doen.hscall();
        } else {
            return hs_tpl26Doen;
        }
    };
    this.hs_setSizze.evaluate = function (hs_tpl26Doep) {
        var hs_tpl26Doot = hs_tpl26Doep;
        if (hs_tpl26Doep.notEvaluated) {
            hs_tpl26Doot = hs_tpl26Doep.hscall();
        }
        var hs_tpl26DoeF = hs_tpl26Doot.data[7];
        if (hs_tpl26DoeF.notEvaluated) {
            return hs_tpl26DoeF.hscall();
        } else {
            return hs_tpl26DoeF;
        }
    };
    this.hs_setEcho.evaluate = function (hs_tpl26DoeH) {
        var hs_tpl26DooH = hs_tpl26DoeH;
        if (hs_tpl26DoeH.notEvaluated) {
            hs_tpl26DooH = hs_tpl26DoeH.hscall();
        }
        var hs_tpl26DoeX = hs_tpl26DooH.data[8];
        if (hs_tpl26DoeX.notEvaluated) {
            return hs_tpl26DoeX.hscall();
        } else {
            return hs_tpl26DoeX;
        }
    };
    this.hs_getEcho.evaluate = function (hs_tpl26DoeZ) {
        var hs_tpl26DooV = hs_tpl26DoeZ;
        if (hs_tpl26DoeZ.notEvaluated) {
            hs_tpl26DooV = hs_tpl26DoeZ.hscall();
        }
        var hs_tpl26Doff = hs_tpl26DooV.data[9];
        if (hs_tpl26Doff.notEvaluated) {
            return hs_tpl26Doff.hscall();
        } else {
            return hs_tpl26Doff;
        }
    };
    this.hs_setRaw.evaluate = function (hs_tpl26Dofh) {
        var hs_tpl26Dop9 = hs_tpl26Dofh;
        if (hs_tpl26Dofh.notEvaluated) {
            hs_tpl26Dop9 = hs_tpl26Dofh.hscall();
        }
        var hs_tpl26Dofx = hs_tpl26Dop9.data[10];
        if (hs_tpl26Dofx.notEvaluated) {
            return hs_tpl26Dofx.hscall();
        } else {
            return hs_tpl26Dofx;
        }
    };
    this.hs_devType.evaluate = function (hs_tpl26Dofz) {
        var hs_tpl26Dopn = hs_tpl26Dofz;
        if (hs_tpl26Dofz.notEvaluated) {
            hs_tpl26Dopn = hs_tpl26Dofz.hscall();
        }
        var hs_tpl26DofP = hs_tpl26Dopn.data[11];
        if (hs_tpl26DofP.notEvaluated) {
            return hs_tpl26DofP.hscall();
        } else {
            return hs_tpl26DofP;
        }
    };
    this.hs_dup.evaluate = function (hs_tpl26DofR) {
        var hs_tpl26DopB = hs_tpl26DofR;
        if (hs_tpl26DofR.notEvaluated) {
            hs_tpl26DopB = hs_tpl26DofR.hscall();
        }
        var hs_tpl26Dog7 = hs_tpl26DopB.data[12];
        if (hs_tpl26Dog7.notEvaluated) {
            return hs_tpl26Dog7.hscall();
        } else {
            return hs_tpl26Dog7;
        }
    };
    this.hs_dup2.evaluate = function (hs_tpl26Dog9) {
        var hs_tpl26DopP = hs_tpl26Dog9;
        if (hs_tpl26Dog9.notEvaluated) {
            hs_tpl26DopP = hs_tpl26Dog9.hscall();
        }
        var hs_tpl26Dogp = hs_tpl26DopP.data[13];
        if (hs_tpl26Dogp.notEvaluated) {
            return hs_tpl26Dogp.hscall();
        } else {
            return hs_tpl26Dogp;
        }
    };
    this.hs_read.evaluate = function (hs_tpl26Dogr) {
        var hs_tpl26Doq2 = hs_tpl26Dogr;
        if (hs_tpl26Dogr.notEvaluated) {
            hs_tpl26Doq2 = hs_tpl26Dogr.hscall();
        }
        var hs_tpl26Dogx = hs_tpl26Doq2.data[0];
        if (hs_tpl26Dogx.notEvaluated) {
            return hs_tpl26Dogx.hscall();
        } else {
            return hs_tpl26Dogx;
        }
    };
    this.hs_readNonBlocking.evaluate = function (hs_tpl26Dogz) {
        var hs_tpl26Doq7 = hs_tpl26Dogz;
        if (hs_tpl26Dogz.notEvaluated) {
            hs_tpl26Doq7 = hs_tpl26Dogz.hscall();
        }
        var hs_tpl26DogF = hs_tpl26Doq7.data[1];
        if (hs_tpl26DogF.notEvaluated) {
            return hs_tpl26DogF.hscall();
        } else {
            return hs_tpl26DogF;
        }
    };
    this.hs_write.evaluate = function (hs_tpl26DogH) {
        var hs_tpl26Doqb = hs_tpl26DogH;
        if (hs_tpl26DogH.notEvaluated) {
            hs_tpl26Doqb = hs_tpl26DogH.hscall();
        }
        var hs_tpl26DogN = hs_tpl26Doqb.data[2];
        if (hs_tpl26DogN.notEvaluated) {
            return hs_tpl26DogN.hscall();
        } else {
            return hs_tpl26DogN;
        }
    };
    this.hs_writeNonBlocking.evaluate = function (hs_tpl26DogP) {
        var hs_tpl26Doqf = hs_tpl26DogP;
        if (hs_tpl26DogP.notEvaluated) {
            hs_tpl26Doqf = hs_tpl26DogP.hscall();
        }
        var hs_tpl26DogV = hs_tpl26Doqf.data[3];
        if (hs_tpl26DogV.notEvaluated) {
            return hs_tpl26DogV.hscall();
        } else {
            return hs_tpl26DogV;
        }
    };
    hs_zdtag2conzuSeekMode25sASt.evaluate = function (hs_ds26DogX) {
        var hs_wild26Doqi = hs_ds26DogX;
        if (hs_ds26DogX.notEvaluated) {
            hs_wild26Doqi = hs_ds26DogX.hscall();
        }
        var hs_a26Doh0 = hs_wild26Doqi.data[0];
        throw "primitive operation tagToEnum#. Not implemeted yet.";
    };
    hs_zdmaxtagzuSeekMode25sASr.data = [2];
    this.hs_zddmisSeekable.evaluate = function (hs_zddIODevice26Doh3, hs_ds26Doh4) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
    };
    this.hs_zddmisTerminal.evaluate = function (hs_zddIODevice26Doh7, hs_ds26Doh8) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziBool.hs_False);
    };
    hs_ioezuunsupportedOperation25sAR2.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_throwIO.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, $hs.modules.GHCziIOziException.hs_unsupportedOperation);
    };
    this.hs_zddmseek.evaluate = function (hs_zddIODevice26Dohd, hs_ds26Dohe, hs_ds126Dohf, hs_ds226Dohg) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmtell.evaluate = function (hs_zddIODevice26Dohj, hs_ds26Dohk) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmgetSizze.evaluate = function (hs_zddIODevice26Dohn, hs_ds26Doho) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmsetSizze.evaluate = function (hs_zddIODevice26Dohs, hs_ds26Doht, hs_ds126Dohu) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmsetEcho.evaluate = function (hs_zddIODevice26Dohy, hs_ds26Dohz, hs_ds126DohA) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmgetEcho.evaluate = function (hs_zddIODevice26DohD, hs_ds26DohE) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmsetRaw.evaluate = function (hs_zddIODevice26DohI, hs_ds26DohJ, hs_ds126DohK) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmdup.evaluate = function (hs_zddIODevice26DohN, hs_ds26DohO) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    this.hs_zddmdup2.evaluate = function (hs_zddIODevice26DohS, hs_ds26DohT, hs_ds126DohU) {
        if (hs_ioezuunsupportedOperation25sAR2.notEvaluated) {
            return hs_ioezuunsupportedOperation25sAR2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25sAR2;
        }
    };
    hs_zdcshowsPrec25uZLG.evaluate = function (hs_ds26Doi4, hs_ds126DohZ) {
        var hs_wild26Doqj = hs_ds126DohZ;
        if (hs_ds126DohZ.notEvaluated) {
            hs_wild26Doqj = hs_ds126DohZ.hscall();
        }
        switch (hs_wild26Doqj.tag) {
        case 1:
            var hs_sat26Doqk = new $hs.Thunk();
            hs_sat26Doqk.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("AbsoluteSeek\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Doqk);
        case 2:
            var hs_sat26Doql = new $hs.Thunk();
            hs_sat26Doql.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("RelativeSeek\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Doql);
        case 3:
            var hs_sat26Doqm = new $hs.Thunk();
            hs_sat26Doqm.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SeekFromEnd\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26Doqm);
        }
    };
    hs_sat26Doqn.evaluateOnce = function () {
        var hs_sat26Doqo = new $hs.Data(1);
        hs_sat26Doqo.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziDevice.hs_zdfShowSeekMode, hs_sat26Doqo);
    };
    this.hs_zdfShowSeekMode.data = [hs_zdcshowsPrec25uZLG, hs_zdcshow25uZLS, hs_zdcshowList25uZLQ];
    hs_zdcshowList25uZLQ.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26Doqn);
    };
    hs_zdcshow25uZLS.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziDevice.hs_zdfShowSeekMode);
    };
    hs_sat26DoqB.evaluateOnce = function () {
        var hs_sat26Doqp = new $hs.Thunk();
        hs_sat26Doqp.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziDevice.hs_SeekFromEnd);
        };
        var hs_sat26Doqq = new $hs.Thunk();
        hs_sat26Doqq.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("SeekFromEnd\x00");
        };
        var hs_sat26Doqr = new $hs.Data(1);
        hs_sat26Doqr.data = [hs_sat26Doqq, hs_sat26Doqp];
        var hs_sat26Doqs = new $hs.Data(2);
        hs_sat26Doqs.data = [hs_sat26Doqr, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26Doqt = new $hs.Thunk();
        hs_sat26Doqt.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziDevice.hs_RelativeSeek);
        };
        var hs_sat26Doqu = new $hs.Thunk();
        hs_sat26Doqu.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("RelativeSeek\x00");
        };
        var hs_sat26Doqv = new $hs.Data(1);
        hs_sat26Doqv.data = [hs_sat26Doqu, hs_sat26Doqt];
        var hs_sat26Doqw = new $hs.Data(2);
        hs_sat26Doqw.data = [hs_sat26Doqv, hs_sat26Doqs];
        var hs_sat26Doqx = new $hs.Thunk();
        hs_sat26Doqx.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziDevice.hs_AbsoluteSeek);
        };
        var hs_sat26Doqy = new $hs.Thunk();
        hs_sat26Doqy.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("AbsoluteSeek\x00");
        };
        var hs_sat26Doqz = new $hs.Data(1);
        hs_sat26Doqz.data = [hs_sat26Doqy, hs_sat26Doqx];
        var hs_sat26DoqA = new $hs.Data(2);
        hs_sat26DoqA.data = [hs_sat26Doqz, hs_sat26Doqw];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26DoqA);
    };
    hs_zdcreadPrec25uZLW.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26DoqB);
    };
    this.hs_zdfReadSeekMode.data = [hs_zdcreadsPrec25uZMf, hs_zdcreadList25uZMd, hs_zdcreadPrec25uZLW, hs_zdcreadListPrec25uZMb];
    hs_zdcreadListPrec25uZMb.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziDevice.hs_zdfReadSeekMode);
    };
    hs_zdcreadList25uZMd.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziDevice.hs_zdfReadSeekMode);
    };
    hs_zdcreadsPrec25uZMf.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziDevice.hs_zdfReadSeekMode);
    };
    hs_zdcenumFromThen25uZMh.evaluate = function (hs_a26DoiR, hs_b26DoiO) {
        var hs_zdj26DoiQ = new $hs.Func(1);
        hs_zdj26DoiQ.evaluate = function (hs_azh26DoiE) {
            var hs_zdj126DoiN = new $hs.Func(1);
            hs_zdj126DoiN.evaluate = function (hs_bzh26DoiG) {
                var hs_sat26DoqI = new $hs.Thunk();
                hs_sat26DoqI.evaluateOnce = function () {
                    var hs_sat26DoqF = new $hs.Thunk();
                    hs_sat26DoqF.evaluateOnce = function () {
                        var hs_sat26DoqC = new $hs.Data(1);
                        hs_sat26DoqC.data = [hs_bzh26DoiG];
                        var hs_sat26DoqE = new $hs.Data(1);
                        hs_sat26DoqE.data = [hs_azh26DoiE];
                        var hs_wild26DoqD = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_sat26DoqE, hs_sat26DoqC);
                        switch (hs_wild26DoqD.tag) {
                        case 1:
                            if (hs_zdmaxtagzuSeekMode25sASr.notEvaluated) {
                                return hs_zdmaxtagzuSeekMode25sASr.hscall();
                            } else {
                                return hs_zdmaxtagzuSeekMode25sASr;
                            }
                        case 2:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        }
                    };
                    var hs_sat26DoqG = new $hs.Data(1);
                    hs_sat26DoqG.data = [hs_bzh26DoiG];
                    var hs_sat26DoqH = new $hs.Data(1);
                    hs_sat26DoqH.data = [hs_azh26DoiE];
                    return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DoqH, hs_sat26DoqG, hs_sat26DoqF);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25sASt, hs_sat26DoqI);
            };
            var hs_wild26DoqJ = hs_b26DoiO;
            if (hs_b26DoiO.notEvaluated) {
                hs_wild26DoqJ = hs_b26DoiO.hscall();
            }
            switch (hs_wild26DoqJ.tag) {
            case 1:
                return hs_zdj126DoiN.hscall(0);
            case 2:
                return hs_zdj126DoiN.hscall(1);
            case 3:
                return hs_zdj126DoiN.hscall(2);
            }
        };
        var hs_wild26DoqK = hs_a26DoiR;
        if (hs_a26DoiR.notEvaluated) {
            hs_wild26DoqK = hs_a26DoiR.hscall();
        }
        switch (hs_wild26DoqK.tag) {
        case 1:
            return hs_zdj26DoiQ.hscall(0);
        case 2:
            return hs_zdj26DoiQ.hscall(1);
        case 3:
            return hs_zdj26DoiQ.hscall(2);
        }
    };
    hs_zdcenumFrom25uZME.evaluate = function (hs_a26DoiW) {
        var hs_wild26DoqL = hs_a26DoiW;
        if (hs_a26DoiW.notEvaluated) {
            hs_wild26DoqL = hs_a26DoiW.hscall();
        }
        switch (hs_wild26DoqL.tag) {
        case 1:
            var hs_sat26DoqN = new $hs.Thunk();
            hs_sat26DoqN.evaluateOnce = function () {
                var hs_sat26DoqM = new $hs.Data(1);
                hs_sat26DoqM.data = [0];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DoqM, hs_zdmaxtagzuSeekMode25sASr);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25sASt, hs_sat26DoqN);
        case 2:
            var hs_sat26DoqP = new $hs.Thunk();
            hs_sat26DoqP.evaluateOnce = function () {
                var hs_sat26DoqO = new $hs.Data(1);
                hs_sat26DoqO.data = [1];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DoqO, hs_zdmaxtagzuSeekMode25sASr);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25sASt, hs_sat26DoqP);
        case 3:
            var hs_sat26DoqR = new $hs.Thunk();
            hs_sat26DoqR.evaluateOnce = function () {
                var hs_sat26DoqQ = new $hs.Data(1);
                hs_sat26DoqQ.data = [2];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DoqQ, hs_zdmaxtagzuSeekMode25sASr);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25sASt, hs_sat26DoqR);
        }
    };
    hs_zdcfromEnum25uZMP.evaluate = function (hs_a26Doj7) {
        var hs_wild26DoqS = hs_a26Doj7;
        if (hs_a26Doj7.notEvaluated) {
            hs_wild26DoqS = hs_a26Doj7.hscall();
        }
        switch (hs_wild26DoqS.tag) {
        case 1:
            var $res = new $hs.Data(1);
            $res.data = [0];
            return $res;
        case 2:
            var $res = new $hs.Data(1);
            $res.data = [1];
            return $res;
        case 3:
            var $res = new $hs.Data(1);
            $res.data = [2];
            return $res;
        }
    };
    hs_zdctoEnum25uZMU.evaluate = function (hs_a26Dojc) {
        var hs_sat26DoqT = new $hs.Thunk();
        hs_sat26DoqT.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26Dojc, hs_zdmaxtagzuSeekMode25sASr);
        };
        var hs_sat26DoqW = new $hs.Thunk();
        hs_sat26DoqW.evaluateOnce = function () {
            var hs_sat26DoqU = new $hs.Data(1);
            hs_sat26DoqU.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a26Dojc, hs_sat26DoqU);
        };
        var hs_wild26DoqV = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26DoqW, hs_sat26DoqT);
        switch (hs_wild26DoqV.tag) {
        case 1:
            var hs_sat26Dor4 = new $hs.Thunk();
            hs_sat26Dor4.evaluateOnce = function () {
                var hs_sat26Dor2 = new $hs.Thunk();
                hs_sat26Dor2.evaluateOnce = function () {
                    var hs_sat26Dor0 = new $hs.Thunk();
                    hs_sat26Dor0.evaluateOnce = function () {
                        var hs_sat26DoqX = new $hs.Data(1);
                        hs_sat26DoqX.data = [")"];
                        var hs_sat26DoqY = new $hs.Data(2);
                        hs_sat26DoqY.data = [hs_sat26DoqX, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26DoqZ = new $hs.Data(1);
                        hs_sat26DoqZ.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26DoqZ, hs_zdmaxtagzuSeekMode25sASr, hs_sat26DoqY);
                    };
                    var hs_sat26Dor1 = new $hs.Thunk();
                    hs_sat26Dor1.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(") is outside of enumeration's range (0,\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dor1, hs_sat26Dor0);
                };
                var hs_sat26Dor3 = new $hs.Data(1);
                hs_sat26Dor3.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26Dor3, hs_a26Dojc, hs_sat26Dor2);
            };
            var hs_sat26Dor6 = new $hs.Thunk();
            hs_sat26Dor6.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("toEnum{SeekMode}: tag (\x00");
            };
            var hs_sat26Dor5 = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26Dor6, hs_sat26Dor4);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dor5);
        case 2:
            var hs_wild126Dor7 = hs_a26Dojc;
            if (hs_a26Dojc.notEvaluated) {
                hs_wild126Dor7 = hs_a26Dojc.hscall();
            }
            var hs_a126Dojt = hs_wild126Dor7.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        }
    };
    hs_zdcpred25uZNf.evaluate = function (hs_a26DojK) {
        var hs_zdj26DojJ = new $hs.Func(1);
        hs_zdj26DojJ.evaluate = function (hs_azh26DojA) {
            var hs_sat26Dor8 = new $hs.Data(1);
            hs_sat26Dor8.data = [hs_azh26DojA];
            var hs_sat26Dora = new $hs.Data(1);
            hs_sat26Dora.data = [0];
            var hs_wild26Dor9 = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_sat26Dora, hs_sat26Dor8);
            switch (hs_wild26Dor9.tag) {
            case 1:
                var hs_sat26Dorb = new $hs.Data(1);
                hs_sat26Dorb.data = [-1];
                var hs_sat26Dord = new $hs.Data(1);
                hs_sat26Dord.data = [hs_azh26DojA];
                var hs_wild126Dorc = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dord, hs_sat26Dorb);
                var hs_a126DojH = hs_wild126Dorc.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26Dore = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("pred{SeekMode}: tried to take `pred' of first tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dore);
            }
        };
        var hs_wild26Dorf = hs_a26DojK;
        if (hs_a26DojK.notEvaluated) {
            hs_wild26Dorf = hs_a26DojK.hscall();
        }
        switch (hs_wild26Dorf.tag) {
        case 1:
            return hs_zdj26DojJ.hscall(0);
        case 2:
            return hs_zdj26DojJ.hscall(1);
        case 3:
            return hs_zdj26DojJ.hscall(2);
        }
    };
    hs_zdcsucc25uZNx.evaluate = function (hs_a26Dok1) {
        var hs_zdj26Dok0 = new $hs.Func(1);
        hs_zdj26Dok0.evaluate = function (hs_azh26DojR) {
            var hs_sat26Dorh = new $hs.Data(1);
            hs_sat26Dorh.data = [hs_azh26DojR];
            var hs_wild26Dorg = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_zdmaxtagzuSeekMode25sASr, hs_sat26Dorh);
            switch (hs_wild26Dorg.tag) {
            case 1:
                var hs_sat26Dori = new $hs.Data(1);
                hs_sat26Dori.data = [1];
                var hs_sat26Dork = new $hs.Data(1);
                hs_sat26Dork.data = [hs_azh26DojR];
                var hs_wild126Dorj = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26Dork, hs_sat26Dori);
                var hs_a126DojY = hs_wild126Dorj.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26Dorl = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("succ{SeekMode}: tried to take `succ' of last tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26Dorl);
            }
        };
        var hs_wild26Dorm = hs_a26Dok1;
        if (hs_a26Dok1.notEvaluated) {
            hs_wild26Dorm = hs_a26Dok1.hscall();
        }
        switch (hs_wild26Dorm.tag) {
        case 1:
            return hs_zdj26Dok0.hscall(0);
        case 2:
            return hs_zdj26Dok0.hscall(1);
        case 3:
            return hs_zdj26Dok0.hscall(2);
        }
    };
    this.hs_zdfEnumSeekMode.data = [hs_zdcsucc25uZNx, hs_zdcpred25uZNf, hs_zdctoEnum25uZMU, hs_zdcfromEnum25uZMP, hs_zdcenumFrom25uZME, hs_zdcenumFromThen25uZMh, hs_zdcenumFromTo25uZNQ, hs_zdcenumFromThenTo25uZNO];
    hs_zdcenumFromThenTo25uZNO.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziIOziDevice.hs_zdfEnumSeekMode);
    };
    hs_zdcenumFromTo25uZNQ.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziIOziDevice.hs_zdfEnumSeekMode);
    };
    hs_zdcinRange25uZNS.evaluate = function (hs_ds26Dokb, hs_c26Dokj) {
        var hs_wild26Dorp = hs_ds26Dokb;
        if (hs_ds26Dokb.notEvaluated) {
            hs_wild26Dorp = hs_ds26Dokb.hscall();
        }
        var hs_a26Doku = hs_wild26Dorp.data[0];
        var hs_b26Dokr = hs_wild26Dorp.data[1];
        var hs_zdj26Dokt = new $hs.Func(1);
        hs_zdj26Dokt.evaluate = function (hs_azh26Dokl) {
            var hs_zdj126Dokq = new $hs.Func(1);
            hs_zdj126Dokq.evaluate = function (hs_bzh26Dokn) {
                var hs_wild126Doro = hs_c26Dokj;
                if (hs_c26Dokj.notEvaluated) {
                    hs_wild126Doro = hs_c26Dokj.hscall();
                }
                switch (hs_wild126Doro.tag) {
                case 1:
                    var hs_wild226Dorn = 0 >= hs_azh26Dokl ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dorn.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 0 <= hs_bzh26Dokn ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 2:
                    var hs_wild226Dorq = 1 >= hs_azh26Dokl ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dorq.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 1 <= hs_bzh26Dokn ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 3:
                    var hs_wild226Dorr = 2 >= hs_azh26Dokl ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dorr.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 2 <= hs_bzh26Dokn ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                }
            };
            var hs_wild126Dors = hs_b26Dokr;
            if (hs_b26Dokr.notEvaluated) {
                hs_wild126Dors = hs_b26Dokr.hscall();
            }
            switch (hs_wild126Dors.tag) {
            case 1:
                return hs_zdj126Dokq.hscall(0);
            case 2:
                return hs_zdj126Dokq.hscall(1);
            case 3:
                return hs_zdj126Dokq.hscall(2);
            }
        };
        var hs_wild126Dort = hs_a26Doku;
        if (hs_a26Doku.notEvaluated) {
            hs_wild126Dort = hs_a26Doku.hscall();
        }
        switch (hs_wild126Dort.tag) {
        case 1:
            return hs_zdj26Dokt.hscall(0);
        case 2:
            return hs_zdj26Dokt.hscall(1);
        case 3:
            return hs_zdj26Dokt.hscall(2);
        }
    };
    hs_zdcunsafeIndex25uZOh.evaluate = function (hs_c26DokA, hs_d26DokG) {
        var hs_wild26Dorw = hs_c26DokA;
        if (hs_c26DokA.notEvaluated) {
            hs_wild26Dorw = hs_c26DokA.hscall();
        }
        var hs_a26DokN = hs_wild26Dorw.data[0];
        var hs_zdj26DokM = new $hs.Func(1);
        hs_zdj26DokM.evaluate = function (hs_azh26DokI) {
            var hs_wild126Dorv = hs_d26DokG;
            if (hs_d26DokG.notEvaluated) {
                hs_wild126Dorv = hs_d26DokG.hscall();
            }
            switch (hs_wild126Dorv.tag) {
            case 1:
                var hs_sat26Doru = ($hs.Int.addCarry(0, ~hs_azh26DokI, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Doru];
                return $res;
            case 2:
                var hs_sat26Dory = ($hs.Int.addCarry(1, ~hs_azh26DokI, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dory];
                return $res;
            case 3:
                var hs_sat26Dorz = ($hs.Int.addCarry(2, ~hs_azh26DokI, 1))[0];
                var $res = new $hs.Data(1);
                $res.data = [hs_sat26Dorz];
                return $res;
            }
        };
        var hs_wild126DorA = hs_a26DokN;
        if (hs_a26DokN.notEvaluated) {
            hs_wild126DorA = hs_a26DokN.hscall();
        }
        switch (hs_wild126DorA.tag) {
        case 1:
            return hs_zdj26DokM.hscall(0);
        case 2:
            return hs_zdj26DokM.hscall(1);
        case 3:
            return hs_zdj26DokM.hscall(2);
        }
    };
    hs_zdcrange25uZOA.evaluate = function (hs_ds26DokS) {
        var hs_wild26DorC = hs_ds26DokS;
        if (hs_ds26DokS.notEvaluated) {
            hs_wild26DorC = hs_ds26DokS.hscall();
        }
        var hs_a26Dolb = hs_wild26DorC.data[0];
        var hs_b26DokY = hs_wild26DorC.data[1];
        var hs_zdj26Dola = new $hs.Func(1);
        hs_zdj26Dola.evaluate = function (hs_azh26Dol0) {
            var hs_wild126DorB = hs_b26DokY;
            if (hs_b26DokY.notEvaluated) {
                hs_wild126DorB = hs_b26DokY.hscall();
            }
            switch (hs_wild126DorB.tag) {
            case 1:
                var hs_sat26DorF = new $hs.Thunk();
                hs_sat26DorF.evaluateOnce = function () {
                    var hs_sat26DorD = new $hs.Data(1);
                    hs_sat26DorD.data = [0];
                    var hs_sat26DorE = new $hs.Data(1);
                    hs_sat26DorE.data = [hs_azh26Dol0];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DorE, hs_sat26DorD);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25sASt, hs_sat26DorF);
            case 2:
                var hs_sat26DorI = new $hs.Thunk();
                hs_sat26DorI.evaluateOnce = function () {
                    var hs_sat26DorG = new $hs.Data(1);
                    hs_sat26DorG.data = [1];
                    var hs_sat26DorH = new $hs.Data(1);
                    hs_sat26DorH.data = [hs_azh26Dol0];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DorH, hs_sat26DorG);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25sASt, hs_sat26DorI);
            case 3:
                var hs_sat26DorL = new $hs.Thunk();
                hs_sat26DorL.evaluateOnce = function () {
                    var hs_sat26DorJ = new $hs.Data(1);
                    hs_sat26DorJ.data = [2];
                    var hs_sat26DorK = new $hs.Data(1);
                    hs_sat26DorK.data = [hs_azh26Dol0];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26DorK, hs_sat26DorJ);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25sASt, hs_sat26DorL);
            }
        };
        var hs_wild126DorM = hs_a26Dolb;
        if (hs_a26Dolb.notEvaluated) {
            hs_wild126DorM = hs_a26Dolb.hscall();
        }
        switch (hs_wild126DorM.tag) {
        case 1:
            return hs_zdj26Dola.hscall(0);
        case 2:
            return hs_zdj26Dola.hscall(1);
        case 3:
            return hs_zdj26Dola.hscall(2);
        }
    };
    hs_zdczlze25uZOY.evaluate = function (hs_a26Dolh, hs_b26Dolj) {
        var hs_wild26DorO = hs_a26Dolh;
        if (hs_a26Dolh.notEvaluated) {
            hs_wild26DorO = hs_a26Dolh.hscall();
        }
        switch (hs_wild26DorO.tag) {
        case 1:
            var hs_wild126DorN = hs_b26Dolj;
            if (hs_b26Dolj.notEvaluated) {
                hs_wild126DorN = hs_b26Dolj.hscall();
            }
            switch (hs_wild126DorN.tag) {
            case 1:
                return 0 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DorP = hs_b26Dolj;
            if (hs_b26Dolj.notEvaluated) {
                hs_wild126DorP = hs_b26Dolj.hscall();
            }
            switch (hs_wild126DorP.tag) {
            case 1:
                return 1 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DorQ = hs_b26Dolj;
            if (hs_b26Dolj.notEvaluated) {
                hs_wild126DorQ = hs_b26Dolj.hscall();
            }
            switch (hs_wild126DorQ.tag) {
            case 1:
                return 2 <= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 <= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 <= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczg25uZP8.evaluate = function (hs_a26Dolr, hs_b26Dolt) {
        var hs_wild26DorS = hs_a26Dolr;
        if (hs_a26Dolr.notEvaluated) {
            hs_wild26DorS = hs_a26Dolr.hscall();
        }
        switch (hs_wild26DorS.tag) {
        case 1:
            var hs_wild126DorR = hs_b26Dolt;
            if (hs_b26Dolt.notEvaluated) {
                hs_wild126DorR = hs_b26Dolt.hscall();
            }
            switch (hs_wild126DorR.tag) {
            case 1:
                return 0 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DorT = hs_b26Dolt;
            if (hs_b26Dolt.notEvaluated) {
                hs_wild126DorT = hs_b26Dolt.hscall();
            }
            switch (hs_wild126DorT.tag) {
            case 1:
                return 1 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DorU = hs_b26Dolt;
            if (hs_b26Dolt.notEvaluated) {
                hs_wild126DorU = hs_b26Dolt.hscall();
            }
            switch (hs_wild126DorU.tag) {
            case 1:
                return 2 > 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 > 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 > 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczgze25uZPi.evaluate = function (hs_a26DolB, hs_b26DolD) {
        var hs_wild26DorW = hs_a26DolB;
        if (hs_a26DolB.notEvaluated) {
            hs_wild26DorW = hs_a26DolB.hscall();
        }
        switch (hs_wild26DorW.tag) {
        case 1:
            var hs_wild126DorV = hs_b26DolD;
            if (hs_b26DolD.notEvaluated) {
                hs_wild126DorV = hs_b26DolD.hscall();
            }
            switch (hs_wild126DorV.tag) {
            case 1:
                return 0 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126DorX = hs_b26DolD;
            if (hs_b26DolD.notEvaluated) {
                hs_wild126DorX = hs_b26DolD.hscall();
            }
            switch (hs_wild126DorX.tag) {
            case 1:
                return 1 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126DorY = hs_b26DolD;
            if (hs_b26DolD.notEvaluated) {
                hs_wild126DorY = hs_b26DolD.hscall();
            }
            switch (hs_wild126DorY.tag) {
            case 1:
                return 2 >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 >= 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 >= 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdczl25uZPs.evaluate = function (hs_a26DolL, hs_b26DolN) {
        var hs_wild26Dos0 = hs_a26DolL;
        if (hs_a26DolL.notEvaluated) {
            hs_wild26Dos0 = hs_a26DolL.hscall();
        }
        switch (hs_wild26Dos0.tag) {
        case 1:
            var hs_wild126DorZ = hs_b26DolN;
            if (hs_b26DolN.notEvaluated) {
                hs_wild126DorZ = hs_b26DolN.hscall();
            }
            switch (hs_wild126DorZ.tag) {
            case 1:
                return 0 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126Dos1 = hs_b26DolN;
            if (hs_b26DolN.notEvaluated) {
                hs_wild126Dos1 = hs_b26DolN.hscall();
            }
            switch (hs_wild126Dos1.tag) {
            case 1:
                return 1 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126Dos2 = hs_b26DolN;
            if (hs_b26DolN.notEvaluated) {
                hs_wild126Dos2 = hs_b26DolN.hscall();
            }
            switch (hs_wild126Dos2.tag) {
            case 1:
                return 2 < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    hs_zdccompare25uZPC.evaluate = function (hs_a26Dom7, hs_b26DolX) {
        var hs_zdj26Dom6 = new $hs.Func(1);
        hs_zdj26Dom6.evaluate = function (hs_azh26DolZ) {
            var hs_wild26Dos5 = hs_b26DolX;
            if (hs_b26DolX.notEvaluated) {
                hs_wild26Dos5 = hs_b26DolX.hscall();
            }
            switch (hs_wild26Dos5.tag) {
            case 1:
                var hs_wild126Dos4 = hs_azh26DolZ < 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Dos4.tag) {
                case 1:
                    var hs_wild226Dos3 = hs_azh26DolZ == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dos3.tag) {
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
            case 2:
                var hs_wild126Dos7 = hs_azh26DolZ < 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Dos7.tag) {
                case 1:
                    var hs_wild226Dos6 = hs_azh26DolZ == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dos6.tag) {
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
            case 3:
                var hs_wild126Dos9 = hs_azh26DolZ < 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                switch (hs_wild126Dos9.tag) {
                case 1:
                    var hs_wild226Dos8 = hs_azh26DolZ == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226Dos8.tag) {
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
            }
        };
        var hs_wild26Dosa = hs_a26Dom7;
        if (hs_a26Dom7.notEvaluated) {
            hs_wild26Dosa = hs_a26Dom7.hscall();
        }
        switch (hs_wild26Dosa.tag) {
        case 1:
            return hs_zdj26Dom6.hscall(0);
        case 2:
            return hs_zdj26Dom6.hscall(1);
        case 3:
            return hs_zdj26Dom6.hscall(2);
        }
    };
    hs_zdczeze25uZPU.evaluate = function (hs_a26Domd, hs_b26Domf) {
        var hs_wild26Dosc = hs_a26Domd;
        if (hs_a26Domd.notEvaluated) {
            hs_wild26Dosc = hs_a26Domd.hscall();
        }
        switch (hs_wild26Dosc.tag) {
        case 1:
            var hs_wild126Dosb = hs_b26Domf;
            if (hs_b26Domf.notEvaluated) {
                hs_wild126Dosb = hs_b26Domf.hscall();
            }
            switch (hs_wild126Dosb.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126Dosd = hs_b26Domf;
            if (hs_b26Domf.notEvaluated) {
                hs_wild126Dosd = hs_b26Domf.hscall();
            }
            switch (hs_wild126Dosd.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126Dose = hs_b26Domf;
            if (hs_b26Domf.notEvaluated) {
                hs_wild126Dose = hs_b26Domf.hscall();
            }
            switch (hs_wild126Dose.tag) {
            case 1:
                return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqSeekMode.data = [hs_zdczeze25uZPU, hs_zdczsze25uZQ4];
    hs_zdczsze25uZQ4.evaluate = function (hs_a26Domn, hs_b26Domo) {
        var hs_sat26Dosf = new $hs.Thunk();
        hs_sat26Dosf.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqSeekMode, hs_a26Domn, hs_b26Domo);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dosf);
    };
    this.hs_zdfOrdSeekMode.data = [$hs.modules.GHCziIOziDevice.hs_zdfEqSeekMode, hs_zdccompare25uZPC, hs_zdczl25uZPs, hs_zdczgze25uZPi, hs_zdczg25uZP8, hs_zdczlze25uZOY, hs_zdcmax25uZQd, hs_zdcmin25uZQb];
    hs_zdcmin25uZQb.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziDevice.hs_zdfOrdSeekMode);
    };
    hs_zdcmax25uZQd.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziDevice.hs_zdfOrdSeekMode);
    };
    this.hs_zdfIxSeekMode.data = [$hs.modules.GHCziIOziDevice.hs_zdfOrdSeekMode, hs_zdcrange25uZOA, hs_zdcindex25uZQj, hs_zdcunsafeIndex25uZOh, hs_zdcinRange25uZNS, hs_zdcrangeSizze25uZQh, hs_zdcunsafeRangeSizze25uZQf];
    hs_zdcunsafeRangeSizze25uZQf.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziIOziDevice.hs_zdfIxSeekMode);
    };
    hs_zdcrangeSizze25uZQh.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziIOziDevice.hs_zdfIxSeekMode);
    };
    hs_zdcindex25uZQj.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziIOziDevice.hs_zdfIxSeekMode);
    };
    hs_zdczeze125uZQl.evaluate = function (hs_a26DomE, hs_b26DomG) {
        var hs_wild26Dosh = hs_a26DomE;
        if (hs_a26DomE.notEvaluated) {
            hs_wild26Dosh = hs_a26DomE.hscall();
        }
        switch (hs_wild26Dosh.tag) {
        case 1:
            var hs_wild126Dosg = hs_b26DomG;
            if (hs_b26DomG.notEvaluated) {
                hs_wild126Dosg = hs_b26DomG.hscall();
            }
            switch (hs_wild126Dosg.tag) {
            case 1:
                return 0 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 0 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 0 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 0 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 2:
            var hs_wild126Dosi = hs_b26DomG;
            if (hs_b26DomG.notEvaluated) {
                hs_wild126Dosi = hs_b26DomG.hscall();
            }
            switch (hs_wild126Dosi.tag) {
            case 1:
                return 1 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 1 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 1 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 1 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 3:
            var hs_wild126Dosj = hs_b26DomG;
            if (hs_b26DomG.notEvaluated) {
                hs_wild126Dosj = hs_b26DomG.hscall();
            }
            switch (hs_wild126Dosj.tag) {
            case 1:
                return 2 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 2 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 2 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 2 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        case 4:
            var hs_wild126Dosk = hs_b26DomG;
            if (hs_b26DomG.notEvaluated) {
                hs_wild126Dosk = hs_b26DomG.hscall();
            }
            switch (hs_wild126Dosk.tag) {
            case 1:
                return 3 == 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 2:
                return 3 == 1 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 3:
                return 3 == 2 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            case 4:
                return 3 == 3 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
            }
        }
    };
    this.hs_zdfEqIODeviceType.data = [hs_zdczeze125uZQl, hs_zdczsze125uZQw];
    hs_zdczsze125uZQw.evaluate = function (hs_a26DomP, hs_b26DomQ) {
        var hs_sat26Dosl = new $hs.Thunk();
        hs_sat26Dosl.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_a26DomP, hs_b26DomQ);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26Dosl);
    };
    this.hs_AbsoluteSeek.data = [];
    this.hs_RelativeSeek.data = [];
    this.hs_SeekFromEnd.data = [];
    this.hs_Directory.data = [];
    this.hs_Stream.data = [];
    this.hs_RegularFile.data = [];
    this.hs_RawDevice.data = [];
    this.hs_DZCRawIO.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_DZCIODevice.evaluate = function (hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
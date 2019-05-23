
$hs.modules.GHCziIOziDevice = new $hs.Module();
$hs.modules.GHCziIOziDevice.dependencies = ["GHC.Types", "GHC.CString", "GHC.Base", "GHC.Enum", "GHC.Num", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.IO", "GHC.Arr", "GHC.IO.Exception", "GHC.Read", "Text.ParserCombinators.ReadPrec"];
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
    this.hs_ready.evaluate = function (hs_tpl26D0nu) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0nu);
    };
    this.hs_close.notEvaluated = true;
    this.hs_close.evaluate = function (hs_tpl26D0nM) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0nM);
    };
    this.hs_isTerminal.notEvaluated = true;
    this.hs_isTerminal.evaluate = function (hs_tpl26D0o4) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0o4);
    };
    this.hs_isSeekable.notEvaluated = true;
    this.hs_isSeekable.evaluate = function (hs_tpl26D0om) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0om);
    };
    this.hs_seek.notEvaluated = true;
    this.hs_seek.evaluate = function (hs_tpl26D0oE) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0oE);
    };
    this.hs_tell.notEvaluated = true;
    this.hs_tell.evaluate = function (hs_tpl26D0oW) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0oW);
    };
    this.hs_getSizze.notEvaluated = true;
    this.hs_getSizze.evaluate = function (hs_tpl26D0pe) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0pe);
    };
    this.hs_setSizze.notEvaluated = true;
    this.hs_setSizze.evaluate = function (hs_tpl26D0pw) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0pw);
    };
    this.hs_setEcho.notEvaluated = true;
    this.hs_setEcho.evaluate = function (hs_tpl26D0pO) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0pO);
    };
    this.hs_getEcho.notEvaluated = true;
    this.hs_getEcho.evaluate = function (hs_tpl26D0q6) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0q6);
    };
    this.hs_setRaw.notEvaluated = true;
    this.hs_setRaw.evaluate = function (hs_tpl26D0qo) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0qo);
    };
    this.hs_devType.notEvaluated = true;
    this.hs_devType.evaluate = function (hs_tpl26D0qG) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0qG);
    };
    this.hs_dup.notEvaluated = true;
    this.hs_dup.evaluate = function (hs_tpl26D0qY) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0qY);
    };
    this.hs_dup2.notEvaluated = true;
    this.hs_dup2.evaluate = function (hs_tpl26D0rg) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0rg);
    };
    this.hs_read.notEvaluated = true;
    this.hs_read.evaluate = function (hs_tpl26D0ry) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0ry);
    };
    this.hs_readNonBlocking.notEvaluated = true;
    this.hs_readNonBlocking.evaluate = function (hs_tpl26D0rG) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0rG);
    };
    this.hs_write.notEvaluated = true;
    this.hs_write.evaluate = function (hs_tpl26D0rO) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0rO);
    };
    this.hs_writeNonBlocking.notEvaluated = true;
    this.hs_writeNonBlocking.evaluate = function (hs_tpl26D0rW) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_tpl26D0rW);
    };
    this.hs_zddmisSeekable.notEvaluated = true;
    this.hs_zddmisSeekable.evaluate = function (hs_zddIODevice26D0sa, hs_ds26D0sb) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sa, hs_ds26D0sb);
    };
    this.hs_zddmisTerminal.notEvaluated = true;
    this.hs_zddmisTerminal.evaluate = function (hs_zddIODevice26D0se, hs_ds26D0sf) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0se, hs_ds26D0sf);
    };
    this.hs_zddmseek.notEvaluated = true;
    this.hs_zddmseek.evaluate = function (hs_zddIODevice26D0sk, hs_ds26D0sl, hs_ds126D0sm, hs_ds226D0sn) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sk, hs_ds26D0sl, hs_ds126D0sm, hs_ds226D0sn);
    };
    this.hs_zddmtell.notEvaluated = true;
    this.hs_zddmtell.evaluate = function (hs_zddIODevice26D0sq, hs_ds26D0sr) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sq, hs_ds26D0sr);
    };
    this.hs_zddmgetSizze.notEvaluated = true;
    this.hs_zddmgetSizze.evaluate = function (hs_zddIODevice26D0su, hs_ds26D0sv) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0su, hs_ds26D0sv);
    };
    this.hs_zddmsetSizze.notEvaluated = true;
    this.hs_zddmsetSizze.evaluate = function (hs_zddIODevice26D0sz, hs_ds26D0sA, hs_ds126D0sB) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sz, hs_ds26D0sA, hs_ds126D0sB);
    };
    this.hs_zddmsetEcho.notEvaluated = true;
    this.hs_zddmsetEcho.evaluate = function (hs_zddIODevice26D0sF, hs_ds26D0sG, hs_ds126D0sH) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sF, hs_ds26D0sG, hs_ds126D0sH);
    };
    this.hs_zddmgetEcho.notEvaluated = true;
    this.hs_zddmgetEcho.evaluate = function (hs_zddIODevice26D0sK, hs_ds26D0sL) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sK, hs_ds26D0sL);
    };
    this.hs_zddmsetRaw.notEvaluated = true;
    this.hs_zddmsetRaw.evaluate = function (hs_zddIODevice26D0sP, hs_ds26D0sQ, hs_ds126D0sR) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sP, hs_ds26D0sQ, hs_ds126D0sR);
    };
    this.hs_zddmdup.notEvaluated = true;
    this.hs_zddmdup.evaluate = function (hs_zddIODevice26D0sU, hs_ds26D0sV) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sU, hs_ds26D0sV);
    };
    this.hs_zddmdup2.notEvaluated = true;
    this.hs_zddmdup2.evaluate = function (hs_zddIODevice26D0sZ, hs_ds26D0t0, hs_ds126D0t1) {
        $hs.modules.GHCziIOziDevice.loadDependencies();
        return this.evaluate(hs_zddIODevice26D0sZ, hs_ds26D0t0, hs_ds126D0t1);
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
    var hs_zdtag2conzuSeekMode25ssfW = new $hs.Func(1);
    var hs_zdmaxtagzuSeekMode25ssfV = new $hs.Data(1);
    var hs_ioezuunsupportedOperation25ssf2 = new $hs.Thunk();
    var hs_zdcshowsPrec25uBWM = new $hs.Func(2);
    var hs_sat26D0AM = new $hs.Thunk();
    var hs_zdcshowList25uBWV = new $hs.Thunk();
    var hs_zdcshow25uBWW = new $hs.Thunk();
    var hs_sat26D0AZ = new $hs.Thunk();
    var hs_zdcreadPrec25uBWZ = new $hs.Thunk();
    var hs_zdcreadListPrec25uBXd = new $hs.Thunk();
    var hs_zdcreadList25uBXe = new $hs.Thunk();
    var hs_zdcreadsPrec25uBXf = new $hs.Thunk();
    var hs_zdcenumFromThen25uBXg = new $hs.Func(2);
    var hs_zdcenumFrom25uBXC = new $hs.Func(1);
    var hs_zdcfromEnum25uBXM = new $hs.Func(1);
    var hs_zdctoEnum25uBXQ = new $hs.Func(1);
    var hs_zdcpred25uBYa = new $hs.Func(1);
    var hs_zdcsucc25uBYr = new $hs.Func(1);
    var hs_zdcenumFromThenTo25uBYH = new $hs.Thunk();
    var hs_zdcenumFromTo25uBYI = new $hs.Thunk();
    var hs_zdcinRange25uBYJ = new $hs.Func(2);
    var hs_zdcunsafeIndex25uBZ7 = new $hs.Func(2);
    var hs_zdcrange25uBZk = new $hs.Func(1);
    var hs_zdczlze25uBZH = new $hs.Func(2);
    var hs_zdczg25uBZQ = new $hs.Func(2);
    var hs_zdczgze25uBZZ = new $hs.Func(2);
    var hs_zdczl25uC08 = new $hs.Func(2);
    var hs_zdccompare25uC0h = new $hs.Func(2);
    var hs_zdczeze25uC0q = new $hs.Func(2);
    var hs_zdczsze25uC0z = new $hs.Func(2);
    var hs_zdcmin25uC0F = new $hs.Thunk();
    var hs_zdcmax25uC0G = new $hs.Thunk();
    var hs_zdcunsafeRangeSizze25uC0H = new $hs.Thunk();
    var hs_zdcrangeSizze25uC0I = new $hs.Thunk();
    var hs_zdcindex25uC0J = new $hs.Thunk();
    var hs_zdczeze125uC0K = new $hs.Func(2);
    var hs_zdczsze125uC0U = new $hs.Func(2);
    this.hs_ready.evaluate = function (hs_tpl26D0nu) {
        var hs_tpl26D0xt = hs_tpl26D0nu;
        if (hs_tpl26D0nu.notEvaluated) {
            hs_tpl26D0xt = hs_tpl26D0nu.hscall();
        }
        var hs_tpl26D0nK = hs_tpl26D0xt.data[0];
        if (hs_tpl26D0nK.notEvaluated) {
            return hs_tpl26D0nK.hscall();
        } else {
            return hs_tpl26D0nK;
        }
    };
    this.hs_close.evaluate = function (hs_tpl26D0nM) {
        var hs_tpl26D0xH = hs_tpl26D0nM;
        if (hs_tpl26D0nM.notEvaluated) {
            hs_tpl26D0xH = hs_tpl26D0nM.hscall();
        }
        var hs_tpl26D0o2 = hs_tpl26D0xH.data[1];
        if (hs_tpl26D0o2.notEvaluated) {
            return hs_tpl26D0o2.hscall();
        } else {
            return hs_tpl26D0o2;
        }
    };
    this.hs_isTerminal.evaluate = function (hs_tpl26D0o4) {
        var hs_tpl26D0xV = hs_tpl26D0o4;
        if (hs_tpl26D0o4.notEvaluated) {
            hs_tpl26D0xV = hs_tpl26D0o4.hscall();
        }
        var hs_tpl26D0ok = hs_tpl26D0xV.data[2];
        if (hs_tpl26D0ok.notEvaluated) {
            return hs_tpl26D0ok.hscall();
        } else {
            return hs_tpl26D0ok;
        }
    };
    this.hs_isSeekable.evaluate = function (hs_tpl26D0om) {
        var hs_tpl26D0y9 = hs_tpl26D0om;
        if (hs_tpl26D0om.notEvaluated) {
            hs_tpl26D0y9 = hs_tpl26D0om.hscall();
        }
        var hs_tpl26D0oC = hs_tpl26D0y9.data[3];
        if (hs_tpl26D0oC.notEvaluated) {
            return hs_tpl26D0oC.hscall();
        } else {
            return hs_tpl26D0oC;
        }
    };
    this.hs_seek.evaluate = function (hs_tpl26D0oE) {
        var hs_tpl26D0yn = hs_tpl26D0oE;
        if (hs_tpl26D0oE.notEvaluated) {
            hs_tpl26D0yn = hs_tpl26D0oE.hscall();
        }
        var hs_tpl26D0oU = hs_tpl26D0yn.data[4];
        if (hs_tpl26D0oU.notEvaluated) {
            return hs_tpl26D0oU.hscall();
        } else {
            return hs_tpl26D0oU;
        }
    };
    this.hs_tell.evaluate = function (hs_tpl26D0oW) {
        var hs_tpl26D0yB = hs_tpl26D0oW;
        if (hs_tpl26D0oW.notEvaluated) {
            hs_tpl26D0yB = hs_tpl26D0oW.hscall();
        }
        var hs_tpl26D0pc = hs_tpl26D0yB.data[5];
        if (hs_tpl26D0pc.notEvaluated) {
            return hs_tpl26D0pc.hscall();
        } else {
            return hs_tpl26D0pc;
        }
    };
    this.hs_getSizze.evaluate = function (hs_tpl26D0pe) {
        var hs_tpl26D0yP = hs_tpl26D0pe;
        if (hs_tpl26D0pe.notEvaluated) {
            hs_tpl26D0yP = hs_tpl26D0pe.hscall();
        }
        var hs_tpl26D0pu = hs_tpl26D0yP.data[6];
        if (hs_tpl26D0pu.notEvaluated) {
            return hs_tpl26D0pu.hscall();
        } else {
            return hs_tpl26D0pu;
        }
    };
    this.hs_setSizze.evaluate = function (hs_tpl26D0pw) {
        var hs_tpl26D0z3 = hs_tpl26D0pw;
        if (hs_tpl26D0pw.notEvaluated) {
            hs_tpl26D0z3 = hs_tpl26D0pw.hscall();
        }
        var hs_tpl26D0pM = hs_tpl26D0z3.data[7];
        if (hs_tpl26D0pM.notEvaluated) {
            return hs_tpl26D0pM.hscall();
        } else {
            return hs_tpl26D0pM;
        }
    };
    this.hs_setEcho.evaluate = function (hs_tpl26D0pO) {
        var hs_tpl26D0zh = hs_tpl26D0pO;
        if (hs_tpl26D0pO.notEvaluated) {
            hs_tpl26D0zh = hs_tpl26D0pO.hscall();
        }
        var hs_tpl26D0q4 = hs_tpl26D0zh.data[8];
        if (hs_tpl26D0q4.notEvaluated) {
            return hs_tpl26D0q4.hscall();
        } else {
            return hs_tpl26D0q4;
        }
    };
    this.hs_getEcho.evaluate = function (hs_tpl26D0q6) {
        var hs_tpl26D0zv = hs_tpl26D0q6;
        if (hs_tpl26D0q6.notEvaluated) {
            hs_tpl26D0zv = hs_tpl26D0q6.hscall();
        }
        var hs_tpl26D0qm = hs_tpl26D0zv.data[9];
        if (hs_tpl26D0qm.notEvaluated) {
            return hs_tpl26D0qm.hscall();
        } else {
            return hs_tpl26D0qm;
        }
    };
    this.hs_setRaw.evaluate = function (hs_tpl26D0qo) {
        var hs_tpl26D0zJ = hs_tpl26D0qo;
        if (hs_tpl26D0qo.notEvaluated) {
            hs_tpl26D0zJ = hs_tpl26D0qo.hscall();
        }
        var hs_tpl26D0qE = hs_tpl26D0zJ.data[10];
        if (hs_tpl26D0qE.notEvaluated) {
            return hs_tpl26D0qE.hscall();
        } else {
            return hs_tpl26D0qE;
        }
    };
    this.hs_devType.evaluate = function (hs_tpl26D0qG) {
        var hs_tpl26D0zX = hs_tpl26D0qG;
        if (hs_tpl26D0qG.notEvaluated) {
            hs_tpl26D0zX = hs_tpl26D0qG.hscall();
        }
        var hs_tpl26D0qW = hs_tpl26D0zX.data[11];
        if (hs_tpl26D0qW.notEvaluated) {
            return hs_tpl26D0qW.hscall();
        } else {
            return hs_tpl26D0qW;
        }
    };
    this.hs_dup.evaluate = function (hs_tpl26D0qY) {
        var hs_tpl26D0Ab = hs_tpl26D0qY;
        if (hs_tpl26D0qY.notEvaluated) {
            hs_tpl26D0Ab = hs_tpl26D0qY.hscall();
        }
        var hs_tpl26D0re = hs_tpl26D0Ab.data[12];
        if (hs_tpl26D0re.notEvaluated) {
            return hs_tpl26D0re.hscall();
        } else {
            return hs_tpl26D0re;
        }
    };
    this.hs_dup2.evaluate = function (hs_tpl26D0rg) {
        var hs_tpl26D0Ap = hs_tpl26D0rg;
        if (hs_tpl26D0rg.notEvaluated) {
            hs_tpl26D0Ap = hs_tpl26D0rg.hscall();
        }
        var hs_tpl26D0rw = hs_tpl26D0Ap.data[13];
        if (hs_tpl26D0rw.notEvaluated) {
            return hs_tpl26D0rw.hscall();
        } else {
            return hs_tpl26D0rw;
        }
    };
    this.hs_read.evaluate = function (hs_tpl26D0ry) {
        var hs_tpl26D0At = hs_tpl26D0ry;
        if (hs_tpl26D0ry.notEvaluated) {
            hs_tpl26D0At = hs_tpl26D0ry.hscall();
        }
        var hs_tpl26D0rE = hs_tpl26D0At.data[0];
        if (hs_tpl26D0rE.notEvaluated) {
            return hs_tpl26D0rE.hscall();
        } else {
            return hs_tpl26D0rE;
        }
    };
    this.hs_readNonBlocking.evaluate = function (hs_tpl26D0rG) {
        var hs_tpl26D0Ax = hs_tpl26D0rG;
        if (hs_tpl26D0rG.notEvaluated) {
            hs_tpl26D0Ax = hs_tpl26D0rG.hscall();
        }
        var hs_tpl26D0rM = hs_tpl26D0Ax.data[1];
        if (hs_tpl26D0rM.notEvaluated) {
            return hs_tpl26D0rM.hscall();
        } else {
            return hs_tpl26D0rM;
        }
    };
    this.hs_write.evaluate = function (hs_tpl26D0rO) {
        var hs_tpl26D0AB = hs_tpl26D0rO;
        if (hs_tpl26D0rO.notEvaluated) {
            hs_tpl26D0AB = hs_tpl26D0rO.hscall();
        }
        var hs_tpl26D0rU = hs_tpl26D0AB.data[2];
        if (hs_tpl26D0rU.notEvaluated) {
            return hs_tpl26D0rU.hscall();
        } else {
            return hs_tpl26D0rU;
        }
    };
    this.hs_writeNonBlocking.evaluate = function (hs_tpl26D0rW) {
        var hs_tpl26D0AF = hs_tpl26D0rW;
        if (hs_tpl26D0rW.notEvaluated) {
            hs_tpl26D0AF = hs_tpl26D0rW.hscall();
        }
        var hs_tpl26D0s2 = hs_tpl26D0AF.data[3];
        if (hs_tpl26D0s2.notEvaluated) {
            return hs_tpl26D0s2.hscall();
        } else {
            return hs_tpl26D0s2;
        }
    };
    hs_zdtag2conzuSeekMode25ssfW.evaluate = function (hs_ds26D0s4) {
        var hs_wild26D0AG = hs_ds26D0s4;
        if (hs_ds26D0s4.notEvaluated) {
            hs_wild26D0AG = hs_ds26D0s4.hscall();
        }
        var hs_a26D0s7 = hs_wild26D0AG.data[0];
        throw "primitive operation tagToEnum#. Not implemeted yet.";
    };
    hs_zdmaxtagzuSeekMode25ssfV.data = [2];
    this.hs_zddmisSeekable.evaluate = function (hs_zddIODevice26D0sa, hs_ds26D0sb) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
    };
    this.hs_zddmisTerminal.evaluate = function (hs_zddIODevice26D0se, hs_ds26D0sf) {
        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziTypes.hs_False);
    };
    hs_ioezuunsupportedOperation25ssf2.evaluateOnce = function () {
        return $hs.modules.GHCziIO.hs_throwIO.hscall($hs.modules.GHCziIOziException.hs_zdfExceptionIOException, $hs.modules.GHCziIOziException.hs_unsupportedOperation);
    };
    this.hs_zddmseek.evaluate = function (hs_zddIODevice26D0sk, hs_ds26D0sl, hs_ds126D0sm, hs_ds226D0sn) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmtell.evaluate = function (hs_zddIODevice26D0sq, hs_ds26D0sr) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmgetSizze.evaluate = function (hs_zddIODevice26D0su, hs_ds26D0sv) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmsetSizze.evaluate = function (hs_zddIODevice26D0sz, hs_ds26D0sA, hs_ds126D0sB) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmsetEcho.evaluate = function (hs_zddIODevice26D0sF, hs_ds26D0sG, hs_ds126D0sH) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmgetEcho.evaluate = function (hs_zddIODevice26D0sK, hs_ds26D0sL) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmsetRaw.evaluate = function (hs_zddIODevice26D0sP, hs_ds26D0sQ, hs_ds126D0sR) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmdup.evaluate = function (hs_zddIODevice26D0sU, hs_ds26D0sV) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    this.hs_zddmdup2.evaluate = function (hs_zddIODevice26D0sZ, hs_ds26D0t0, hs_ds126D0t1) {
        if (hs_ioezuunsupportedOperation25ssf2.notEvaluated) {
            return hs_ioezuunsupportedOperation25ssf2.hscall();
        } else {
            return hs_ioezuunsupportedOperation25ssf2;
        }
    };
    hs_zdcshowsPrec25uBWM.evaluate = function (hs_ds26D0ta, hs_ds126D0t5) {
        var hs_wild26D0AI = hs_ds126D0t5;
        if (hs_ds126D0t5.notEvaluated) {
            hs_wild26D0AI = hs_ds126D0t5.hscall();
        }
        switch (hs_wild26D0AI.tag) {
        case 1:
            var hs_sat26D0AK = new $hs.Thunk();
            hs_sat26D0AK.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("AbsoluteSeek\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D0AK);
        case 2:
            var hs_sat26D0AH = new $hs.Thunk();
            hs_sat26D0AH.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RelativeSeek\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D0AH);
        case 3:
            var hs_sat26D0AJ = new $hs.Thunk();
            hs_sat26D0AJ.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SeekFromEnd\x00");
            };
            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26D0AJ);
        }
    };
    hs_sat26D0AM.evaluateOnce = function () {
        var hs_sat26D0AL = new $hs.Data(1);
        hs_sat26D0AL.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziIOziDevice.hs_zdfShowSeekMode, hs_sat26D0AL);
    };
    this.hs_zdfShowSeekMode.data = [hs_zdcshowsPrec25uBWM, hs_zdcshow25uBWW, hs_zdcshowList25uBWV];
    hs_zdcshowList25uBWV.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26D0AM);
    };
    hs_zdcshow25uBWW.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziIOziDevice.hs_zdfShowSeekMode);
    };
    hs_sat26D0AZ.evaluateOnce = function () {
        var hs_sat26D0AO = new $hs.Thunk();
        hs_sat26D0AO.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziDevice.hs_SeekFromEnd);
        };
        var hs_sat26D0AP = new $hs.Thunk();
        hs_sat26D0AP.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("SeekFromEnd\x00");
        };
        var hs_sat26D0AQ = new $hs.Data(1);
        hs_sat26D0AQ.data = [hs_sat26D0AP, hs_sat26D0AO];
        var hs_sat26D0AR = new $hs.Data(2);
        hs_sat26D0AR.data = [hs_sat26D0AQ, $hs.modules.GHCziTypes.hs_ZMZN];
        var hs_sat26D0AS = new $hs.Thunk();
        hs_sat26D0AS.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziDevice.hs_RelativeSeek);
        };
        var hs_sat26D0AT = new $hs.Thunk();
        hs_sat26D0AT.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("RelativeSeek\x00");
        };
        var hs_sat26D0AU = new $hs.Data(1);
        hs_sat26D0AU.data = [hs_sat26D0AT, hs_sat26D0AS];
        var hs_sat26D0AV = new $hs.Data(2);
        hs_sat26D0AV.data = [hs_sat26D0AU, hs_sat26D0AR];
        var hs_sat26D0AW = new $hs.Thunk();
        hs_sat26D0AW.evaluateOnce = function () {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.TextziParserCombinatorsziReadPrec.hs_zdfMonadReadPrec, $hs.modules.GHCziIOziDevice.hs_AbsoluteSeek);
        };
        var hs_sat26D0AX = new $hs.Thunk();
        hs_sat26D0AX.evaluateOnce = function () {
            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("AbsoluteSeek\x00");
        };
        var hs_sat26D0AY = new $hs.Data(1);
        hs_sat26D0AY.data = [hs_sat26D0AX, hs_sat26D0AW];
        var hs_sat26D0AN = new $hs.Data(2);
        hs_sat26D0AN.data = [hs_sat26D0AY, hs_sat26D0AV];
        return $hs.modules.GHCziRead.hs_choose.hscall(hs_sat26D0AN);
    };
    hs_zdcreadPrec25uBWZ.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_parens.hscall(hs_sat26D0AZ);
    };
    this.hs_zdfReadSeekMode.data = [hs_zdcreadsPrec25uBXf, hs_zdcreadList25uBXe, hs_zdcreadPrec25uBWZ, hs_zdcreadListPrec25uBXd];
    hs_zdcreadListPrec25uBXd.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListPrecDefault.hscall($hs.modules.GHCziIOziDevice.hs_zdfReadSeekMode);
    };
    hs_zdcreadList25uBXe.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_readListDefault.hscall($hs.modules.GHCziIOziDevice.hs_zdfReadSeekMode);
    };
    hs_zdcreadsPrec25uBXf.evaluateOnce = function () {
        return $hs.modules.GHCziRead.hs_zddmreadsPrec.hscall($hs.modules.GHCziIOziDevice.hs_zdfReadSeekMode);
    };
    hs_zdcenumFromThen25uBXg.evaluate = function (hs_a26D0tQ, hs_b26D0tN) {
        var hs_zdj26D0tP = new $hs.Func(1);
        hs_zdj26D0tP.evaluate = function (hs_azh26D0tD) {
            var hs_zdj126D0tM = new $hs.Func(1);
            hs_zdj126D0tM.evaluate = function (hs_bzh26D0tF) {
                var hs_sat26D0B2 = new $hs.Thunk();
                hs_sat26D0B2.evaluateOnce = function () {
                    var hs_sat26D0B4 = new $hs.Thunk();
                    hs_sat26D0B4.evaluateOnce = function () {
                        var hs_sat26D0B6 = new $hs.Data(1);
                        hs_sat26D0B6.data = [hs_bzh26D0tF];
                        var hs_sat26D0B7 = new $hs.Data(1);
                        hs_sat26D0B7.data = [hs_azh26D0tD];
                        var hs_wild26D0B8 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_sat26D0B7, hs_sat26D0B6);
                        switch (hs_wild26D0B8.tag) {
                        case 1:
                            if (hs_zdmaxtagzuSeekMode25ssfV.notEvaluated) {
                                return hs_zdmaxtagzuSeekMode25ssfV.hscall();
                            } else {
                                return hs_zdmaxtagzuSeekMode25ssfV;
                            }
                        case 2:
                            var $res = new $hs.Data(1);
                            $res.data = [0];
                            return $res;
                        }
                    };
                    var hs_sat26D0B5 = new $hs.Data(1);
                    hs_sat26D0B5.data = [hs_bzh26D0tF];
                    var hs_sat26D0B3 = new $hs.Data(1);
                    hs_sat26D0B3.data = [hs_azh26D0tD];
                    return $hs.modules.GHCziEnum.hs_enumFromThenTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D0B3, hs_sat26D0B5, hs_sat26D0B4);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25ssfW, hs_sat26D0B2);
            };
            var hs_wild26D0B1 = hs_b26D0tN;
            if (hs_b26D0tN.notEvaluated) {
                hs_wild26D0B1 = hs_b26D0tN.hscall();
            }
            switch (hs_wild26D0B1.tag) {
            case 1:
                return hs_zdj126D0tM.hscall(0);
            case 2:
                return hs_zdj126D0tM.hscall(1);
            case 3:
                return hs_zdj126D0tM.hscall(2);
            }
        };
        var hs_wild26D0B0 = hs_a26D0tQ;
        if (hs_a26D0tQ.notEvaluated) {
            hs_wild26D0B0 = hs_a26D0tQ.hscall();
        }
        switch (hs_wild26D0B0.tag) {
        case 1:
            return hs_zdj26D0tP.hscall(0);
        case 2:
            return hs_zdj26D0tP.hscall(1);
        case 3:
            return hs_zdj26D0tP.hscall(2);
        }
    };
    hs_zdcenumFrom25uBXC.evaluate = function (hs_a26D0tU) {
        var hs_wild26D0Ba = hs_a26D0tU;
        if (hs_a26D0tU.notEvaluated) {
            hs_wild26D0Ba = hs_a26D0tU.hscall();
        }
        switch (hs_wild26D0Ba.tag) {
        case 1:
            var hs_sat26D0Be = new $hs.Thunk();
            hs_sat26D0Be.evaluateOnce = function () {
                var hs_sat26D0Bf = new $hs.Data(1);
                hs_sat26D0Bf.data = [0];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D0Bf, hs_zdmaxtagzuSeekMode25ssfV);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25ssfW, hs_sat26D0Be);
        case 2:
            var hs_sat26D0B9 = new $hs.Thunk();
            hs_sat26D0B9.evaluateOnce = function () {
                var hs_sat26D0Bb = new $hs.Data(1);
                hs_sat26D0Bb.data = [1];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D0Bb, hs_zdmaxtagzuSeekMode25ssfV);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25ssfW, hs_sat26D0B9);
        case 3:
            var hs_sat26D0Bc = new $hs.Thunk();
            hs_sat26D0Bc.evaluateOnce = function () {
                var hs_sat26D0Bd = new $hs.Data(1);
                hs_sat26D0Bd.data = [2];
                return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D0Bd, hs_zdmaxtagzuSeekMode25ssfV);
            };
            return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25ssfW, hs_sat26D0Bc);
        }
    };
    hs_zdcfromEnum25uBXM.evaluate = function (hs_a26D0u4) {
        var hs_wild26D0Bg = hs_a26D0u4;
        if (hs_a26D0u4.notEvaluated) {
            hs_wild26D0Bg = hs_a26D0u4.hscall();
        }
        switch (hs_wild26D0Bg.tag) {
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
    hs_zdctoEnum25uBXQ.evaluate = function (hs_a26D0u8) {
        var hs_sat26D0Bi = new $hs.Thunk();
        hs_sat26D0Bi.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26D0u8, hs_zdmaxtagzuSeekMode25ssfV);
        };
        var hs_sat26D0Bj = new $hs.Thunk();
        hs_sat26D0Bj.evaluateOnce = function () {
            var hs_sat26D0Bv = new $hs.Data(1);
            hs_sat26D0Bv.data = [0];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a26D0u8, hs_sat26D0Bv);
        };
        var hs_wild26D0Bk = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_sat26D0Bj, hs_sat26D0Bi);
        switch (hs_wild26D0Bk.tag) {
        case 1:
            var hs_sat26D0Bl = new $hs.Thunk();
            hs_sat26D0Bl.evaluateOnce = function () {
                var hs_sat26D0Bp = new $hs.Thunk();
                hs_sat26D0Bp.evaluateOnce = function () {
                    var hs_sat26D0Br = new $hs.Thunk();
                    hs_sat26D0Br.evaluateOnce = function () {
                        var hs_sat26D0Bt = new $hs.Data(1);
                        hs_sat26D0Bt.data = [")"];
                        var hs_sat26D0Bu = new $hs.Data(2);
                        hs_sat26D0Bu.data = [hs_sat26D0Bt, $hs.modules.GHCziTypes.hs_ZMZN];
                        var hs_sat26D0Bs = new $hs.Data(1);
                        hs_sat26D0Bs.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D0Bs, hs_zdmaxtagzuSeekMode25ssfV, hs_sat26D0Bu);
                    };
                    var hs_sat26D0Bq = new $hs.Thunk();
                    hs_sat26D0Bq.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(") is outside of enumeration's range (0,\x00");
                    };
                    return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D0Bq, hs_sat26D0Br);
                };
                var hs_sat26D0Bo = new $hs.Data(1);
                hs_sat26D0Bo.data = [0];
                return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziShow.hs_zdfShowInt, hs_sat26D0Bo, hs_a26D0u8, hs_sat26D0Bp);
            };
            var hs_sat26D0Bm = new $hs.Thunk();
            hs_sat26D0Bm.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("toEnum{SeekMode}: tag (\x00");
            };
            var hs_sat26D0Bn = $hs.modules.GHCziBase.hs_zpzp.hscall(hs_sat26D0Bm, hs_sat26D0Bl);
            return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D0Bn);
        case 2:
            var hs_wild126D0Bh = hs_a26D0u8;
            if (hs_a26D0u8.notEvaluated) {
                hs_wild126D0Bh = hs_a26D0u8.hscall();
            }
            var hs_a126D0up = hs_wild126D0Bh.data[0];
            throw "primitive operation tagToEnum#. Not implemeted yet.";
        }
    };
    hs_zdcpred25uBYa.evaluate = function (hs_a26D0uF) {
        var hs_zdj26D0uE = new $hs.Func(1);
        hs_zdj26D0uE.evaluate = function (hs_azh26D0uv) {
            var hs_sat26D0Bx = new $hs.Data(1);
            hs_sat26D0Bx.data = [hs_azh26D0uv];
            var hs_sat26D0By = new $hs.Data(1);
            hs_sat26D0By.data = [0];
            var hs_wild26D0Bz = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_sat26D0By, hs_sat26D0Bx);
            switch (hs_wild26D0Bz.tag) {
            case 1:
                var hs_sat26D0BB = new $hs.Data(1);
                hs_sat26D0BB.data = [-1];
                var hs_sat26D0BC = new $hs.Data(1);
                hs_sat26D0BC.data = [hs_azh26D0uv];
                var hs_wild126D0BD = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0BC, hs_sat26D0BB);
                var hs_a126D0uC = hs_wild126D0BD.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26D0BA = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("pred{SeekMode}: tried to take `pred' of first tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D0BA);
            }
        };
        var hs_wild26D0Bw = hs_a26D0uF;
        if (hs_a26D0uF.notEvaluated) {
            hs_wild26D0Bw = hs_a26D0uF.hscall();
        }
        switch (hs_wild26D0Bw.tag) {
        case 1:
            return hs_zdj26D0uE.hscall(0);
        case 2:
            return hs_zdj26D0uE.hscall(1);
        case 3:
            return hs_zdj26D0uE.hscall(2);
        }
    };
    hs_zdcsucc25uBYr.evaluate = function (hs_a26D0uV) {
        var hs_zdj26D0uU = new $hs.Func(1);
        hs_zdj26D0uU.evaluate = function (hs_azh26D0uL) {
            var hs_sat26D0BF = new $hs.Data(1);
            hs_sat26D0BF.data = [hs_azh26D0uL];
            var hs_wild26D0BG = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_zdmaxtagzuSeekMode25ssfV, hs_sat26D0BF);
            switch (hs_wild26D0BG.tag) {
            case 1:
                var hs_sat26D0BI = new $hs.Data(1);
                hs_sat26D0BI.data = [1];
                var hs_sat26D0BJ = new $hs.Data(1);
                hs_sat26D0BJ.data = [hs_azh26D0uL];
                var hs_wild126D0BK = $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26D0BJ, hs_sat26D0BI);
                var hs_a126D0uS = hs_wild126D0BK.data[0];
                throw "primitive operation tagToEnum#. Not implemeted yet.";
            case 2:
                var hs_sat26D0BH = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("succ{SeekMode}: tried to take `succ' of last tag in enumeration\x00");
                return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26D0BH);
            }
        };
        var hs_wild26D0BE = hs_a26D0uV;
        if (hs_a26D0uV.notEvaluated) {
            hs_wild26D0BE = hs_a26D0uV.hscall();
        }
        switch (hs_wild26D0BE.tag) {
        case 1:
            return hs_zdj26D0uU.hscall(0);
        case 2:
            return hs_zdj26D0uU.hscall(1);
        case 3:
            return hs_zdj26D0uU.hscall(2);
        }
    };
    this.hs_zdfEnumSeekMode.data = [hs_zdcsucc25uBYr, hs_zdcpred25uBYa, hs_zdctoEnum25uBXQ, hs_zdcfromEnum25uBXM, hs_zdcenumFrom25uBXC, hs_zdcenumFromThen25uBXg, hs_zdcenumFromTo25uBYI, hs_zdcenumFromThenTo25uBYH];
    hs_zdcenumFromThenTo25uBYH.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromThenTo.hscall($hs.modules.GHCziIOziDevice.hs_zdfEnumSeekMode);
    };
    hs_zdcenumFromTo25uBYI.evaluateOnce = function () {
        return $hs.modules.GHCziEnum.hs_zddmenumFromTo.hscall($hs.modules.GHCziIOziDevice.hs_zdfEnumSeekMode);
    };
    hs_zdcinRange25uBYJ.evaluate = function (hs_ds26D0v2, hs_c26D0va) {
        var hs_wild26D0BM = hs_ds26D0v2;
        if (hs_ds26D0v2.notEvaluated) {
            hs_wild26D0BM = hs_ds26D0v2.hscall();
        }
        var hs_a26D0vl = hs_wild26D0BM.data[0];
        var hs_b26D0vi = hs_wild26D0BM.data[1];
        var hs_zdj26D0vk = new $hs.Func(1);
        hs_zdj26D0vk.evaluate = function (hs_azh26D0vc) {
            var hs_zdj126D0vh = new $hs.Func(1);
            hs_zdj126D0vh.evaluate = function (hs_bzh26D0ve) {
                var hs_wild126D0BO = hs_c26D0va;
                if (hs_c26D0va.notEvaluated) {
                    hs_wild126D0BO = hs_c26D0va.hscall();
                }
                switch (hs_wild126D0BO.tag) {
                case 1:
                    var hs_wild226D0BR = 0 >= hs_azh26D0vc ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D0BR.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 0 <= hs_bzh26D0ve ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 2:
                    var hs_wild226D0BP = 1 >= hs_azh26D0vc ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D0BP.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 1 <= hs_bzh26D0ve ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                case 3:
                    var hs_wild226D0BQ = 2 >= hs_azh26D0vc ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    switch (hs_wild226D0BQ.tag) {
                    case 1:
                        var $res = new $hs.Data(1);
                        $res.data = [];
                        return $res;
                    case 2:
                        return 2 <= hs_bzh26D0ve ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
                    }
                }
            };
            var hs_wild126D0BN = hs_b26D0vi;
            if (hs_b26D0vi.notEvaluated) {
                hs_wild126D0BN = hs_b26D0vi.hscall();
            }
            switch (hs_wild126D0BN.tag) {
            case 1:
                return hs_zdj126D0vh.hscall(0);
            case 2:
                return hs_zdj126D0vh.hscall(1);
            case 3:
                return hs_zdj126D0vh.hscall(2);
            }
        };
        var hs_wild126D0BL = hs_a26D0vl;
        if (hs_a26D0vl.notEvaluated) {
            hs_wild126D0BL = hs_a26D0vl.hscall();
        }
        switch (hs_wild126D0BL.tag) {
        case 1:
            return hs_zdj26D0vk.hscall(0);
        case 2:
            return hs_zdj26D0vk.hscall(1);
        case 3:
            return hs_zdj26D0vk.hscall(2);
        }
    };
    hs_zdcunsafeIndex25uBZ7.evaluate = function (hs_c26D0vq, hs_d26D0vw) {
        var hs_wild26D0BU = hs_c26D0vq;
        if (hs_c26D0vq.notEvaluated) {
            hs_wild26D0BU = hs_c26D0vq.hscall();
        }
        var hs_a26D0vu = hs_wild26D0BU.data[0];
        var hs_wild126D0BT = hs_a26D0vu;
        if (hs_a26D0vu.notEvaluated) {
            hs_wild126D0BT = hs_a26D0vu.hscall();
        }
        switch (hs_wild126D0BT.tag) {
        case 1:
            var hs_wild226D0BX = hs_d26D0vw;
            if (hs_d26D0vw.notEvaluated) {
                hs_wild226D0BX = hs_d26D0vw.hscall();
            }
            switch (hs_wild226D0BX.tag) {
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
        case 2:
            var hs_wild226D0BS = hs_d26D0vw;
            if (hs_d26D0vw.notEvaluated) {
                hs_wild226D0BS = hs_d26D0vw.hscall();
            }
            switch (hs_wild226D0BS.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [-1];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [1];
                return $res;
            }
        case 3:
            var hs_wild226D0BW = hs_d26D0vw;
            if (hs_d26D0vw.notEvaluated) {
                hs_wild226D0BW = hs_d26D0vw.hscall();
            }
            switch (hs_wild226D0BW.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [-2];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [-1];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [0];
                return $res;
            }
        }
    };
    hs_zdcrange25uBZk.evaluate = function (hs_ds26D0vC) {
        var hs_wild26D0BZ = hs_ds26D0vC;
        if (hs_ds26D0vC.notEvaluated) {
            hs_wild26D0BZ = hs_ds26D0vC.hscall();
        }
        var hs_a26D0vV = hs_wild26D0BZ.data[0];
        var hs_b26D0vI = hs_wild26D0BZ.data[1];
        var hs_zdj26D0vU = new $hs.Func(1);
        hs_zdj26D0vU.evaluate = function (hs_azh26D0vK) {
            var hs_wild126D0C1 = hs_b26D0vI;
            if (hs_b26D0vI.notEvaluated) {
                hs_wild126D0C1 = hs_b26D0vI.hscall();
            }
            switch (hs_wild126D0C1.tag) {
            case 1:
                var hs_sat26D0C7 = new $hs.Thunk();
                hs_sat26D0C7.evaluateOnce = function () {
                    var hs_sat26D0C9 = new $hs.Data(1);
                    hs_sat26D0C9.data = [0];
                    var hs_sat26D0C8 = new $hs.Data(1);
                    hs_sat26D0C8.data = [hs_azh26D0vK];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D0C8, hs_sat26D0C9);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25ssfW, hs_sat26D0C7);
            case 2:
                var hs_sat26D0C0 = new $hs.Thunk();
                hs_sat26D0C0.evaluateOnce = function () {
                    var hs_sat26D0C3 = new $hs.Data(1);
                    hs_sat26D0C3.data = [1];
                    var hs_sat26D0C2 = new $hs.Data(1);
                    hs_sat26D0C2.data = [hs_azh26D0vK];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D0C2, hs_sat26D0C3);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25ssfW, hs_sat26D0C0);
            case 3:
                var hs_sat26D0C4 = new $hs.Thunk();
                hs_sat26D0C4.evaluateOnce = function () {
                    var hs_sat26D0C6 = new $hs.Data(1);
                    hs_sat26D0C6.data = [2];
                    var hs_sat26D0C5 = new $hs.Data(1);
                    hs_sat26D0C5.data = [hs_azh26D0vK];
                    return $hs.modules.GHCziEnum.hs_enumFromTo.hscall($hs.modules.GHCziEnum.hs_zdfEnumInt, hs_sat26D0C5, hs_sat26D0C6);
                };
                return $hs.modules.GHCziBase.hs_map.hscall(hs_zdtag2conzuSeekMode25ssfW, hs_sat26D0C4);
            }
        };
        var hs_wild126D0BY = hs_a26D0vV;
        if (hs_a26D0vV.notEvaluated) {
            hs_wild126D0BY = hs_a26D0vV.hscall();
        }
        switch (hs_wild126D0BY.tag) {
        case 1:
            return hs_zdj26D0vU.hscall(0);
        case 2:
            return hs_zdj26D0vU.hscall(1);
        case 3:
            return hs_zdj26D0vU.hscall(2);
        }
    };
    hs_zdczlze25uBZH.evaluate = function (hs_a26D0w0, hs_b26D0w2) {
        var hs_wild26D0Cb = hs_a26D0w0;
        if (hs_a26D0w0.notEvaluated) {
            hs_wild26D0Cb = hs_a26D0w0.hscall();
        }
        switch (hs_wild26D0Cb.tag) {
        case 1:
            var hs_wild126D0Cd = hs_b26D0w2;
            if (hs_b26D0w2.notEvaluated) {
                hs_wild126D0Cd = hs_b26D0w2.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D0Ca = hs_b26D0w2;
            if (hs_b26D0w2.notEvaluated) {
                hs_wild126D0Ca = hs_b26D0w2.hscall();
            }
            switch (hs_wild126D0Ca.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D0Cc = hs_b26D0w2;
            if (hs_b26D0w2.notEvaluated) {
                hs_wild126D0Cc = hs_b26D0w2.hscall();
            }
            switch (hs_wild126D0Cc.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczg25uBZQ.evaluate = function (hs_a26D0w9, hs_b26D0wb) {
        var hs_wild26D0Cf = hs_a26D0w9;
        if (hs_a26D0w9.notEvaluated) {
            hs_wild26D0Cf = hs_a26D0w9.hscall();
        }
        switch (hs_wild26D0Cf.tag) {
        case 1:
            var hs_wild126D0Ch = hs_b26D0wb;
            if (hs_b26D0wb.notEvaluated) {
                hs_wild126D0Ch = hs_b26D0wb.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        case 2:
            var hs_wild126D0Ce = hs_b26D0wb;
            if (hs_b26D0wb.notEvaluated) {
                hs_wild126D0Ce = hs_b26D0wb.hscall();
            }
            switch (hs_wild126D0Ce.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D0Cg = hs_b26D0wb;
            if (hs_b26D0wb.notEvaluated) {
                hs_wild126D0Cg = hs_b26D0wb.hscall();
            }
            switch (hs_wild126D0Cg.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczgze25uBZZ.evaluate = function (hs_a26D0wi, hs_b26D0wk) {
        var hs_wild26D0Cj = hs_a26D0wi;
        if (hs_a26D0wi.notEvaluated) {
            hs_wild26D0Cj = hs_a26D0wi.hscall();
        }
        switch (hs_wild26D0Cj.tag) {
        case 1:
            var hs_wild126D0Cl = hs_b26D0wk;
            if (hs_b26D0wk.notEvaluated) {
                hs_wild126D0Cl = hs_b26D0wk.hscall();
            }
            switch (hs_wild126D0Cl.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D0Ci = hs_b26D0wk;
            if (hs_b26D0wk.notEvaluated) {
                hs_wild126D0Ci = hs_b26D0wk.hscall();
            }
            switch (hs_wild126D0Ci.tag) {
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D0Ck = hs_b26D0wk;
            if (hs_b26D0wk.notEvaluated) {
                hs_wild126D0Ck = hs_b26D0wk.hscall();
            }
            var $res = new $hs.Data(2);
            $res.data = [];
            return $res;
        }
    };
    hs_zdczl25uC08.evaluate = function (hs_a26D0wr, hs_b26D0wt) {
        var hs_wild26D0Cn = hs_a26D0wr;
        if (hs_a26D0wr.notEvaluated) {
            hs_wild26D0Cn = hs_a26D0wr.hscall();
        }
        switch (hs_wild26D0Cn.tag) {
        case 1:
            var hs_wild126D0Cp = hs_b26D0wt;
            if (hs_b26D0wt.notEvaluated) {
                hs_wild126D0Cp = hs_b26D0wt.hscall();
            }
            switch (hs_wild126D0Cp.tag) {
            case 1:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D0Cm = hs_b26D0wt;
            if (hs_b26D0wt.notEvaluated) {
                hs_wild126D0Cm = hs_b26D0wt.hscall();
            }
            switch (hs_wild126D0Cm.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D0Co = hs_b26D0wt;
            if (hs_b26D0wt.notEvaluated) {
                hs_wild126D0Co = hs_b26D0wt.hscall();
            }
            var $res = new $hs.Data(1);
            $res.data = [];
            return $res;
        }
    };
    hs_zdccompare25uC0h.evaluate = function (hs_a26D0wA, hs_b26D0wC) {
        var hs_wild26D0Cr = hs_a26D0wA;
        if (hs_a26D0wA.notEvaluated) {
            hs_wild26D0Cr = hs_a26D0wA.hscall();
        }
        switch (hs_wild26D0Cr.tag) {
        case 1:
            var hs_wild126D0Ct = hs_b26D0wC;
            if (hs_b26D0wC.notEvaluated) {
                hs_wild126D0Ct = hs_b26D0wC.hscall();
            }
            switch (hs_wild126D0Ct.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D0Cq = hs_b26D0wC;
            if (hs_b26D0wC.notEvaluated) {
                hs_wild126D0Cq = hs_b26D0wC.hscall();
            }
            switch (hs_wild126D0Cq.tag) {
            case 1:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D0Cs = hs_b26D0wC;
            if (hs_b26D0wC.notEvaluated) {
                hs_wild126D0Cs = hs_b26D0wC.hscall();
            }
            switch (hs_wild126D0Cs.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(3);
                $res.data = [];
                return $res;
            }
        }
    };
    hs_zdczeze25uC0q.evaluate = function (hs_a26D0wJ, hs_b26D0wL) {
        var hs_wild26D0Cv = hs_a26D0wJ;
        if (hs_a26D0wJ.notEvaluated) {
            hs_wild26D0Cv = hs_a26D0wJ.hscall();
        }
        switch (hs_wild26D0Cv.tag) {
        case 1:
            var hs_wild126D0Cx = hs_b26D0wL;
            if (hs_b26D0wL.notEvaluated) {
                hs_wild126D0Cx = hs_b26D0wL.hscall();
            }
            switch (hs_wild126D0Cx.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D0Cu = hs_b26D0wL;
            if (hs_b26D0wL.notEvaluated) {
                hs_wild126D0Cu = hs_b26D0wL.hscall();
            }
            switch (hs_wild126D0Cu.tag) {
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D0Cw = hs_b26D0wL;
            if (hs_b26D0wL.notEvaluated) {
                hs_wild126D0Cw = hs_b26D0wL.hscall();
            }
            switch (hs_wild126D0Cw.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfEqSeekMode.data = [hs_zdczeze25uC0q, hs_zdczsze25uC0z];
    hs_zdczsze25uC0z.evaluate = function (hs_a26D0wS, hs_b26D0wT) {
        var hs_sat26D0Cy = new $hs.Thunk();
        hs_sat26D0Cy.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqSeekMode, hs_a26D0wS, hs_b26D0wT);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D0Cy);
    };
    this.hs_zdfOrdSeekMode.data = [$hs.modules.GHCziIOziDevice.hs_zdfEqSeekMode, hs_zdccompare25uC0h, hs_zdczl25uC08, hs_zdczgze25uBZZ, hs_zdczg25uBZQ, hs_zdczlze25uBZH, hs_zdcmax25uC0G, hs_zdcmin25uC0F];
    hs_zdcmin25uC0F.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmin.hscall($hs.modules.GHCziIOziDevice.hs_zdfOrdSeekMode);
    };
    hs_zdcmax25uC0G.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zddmmax.hscall($hs.modules.GHCziIOziDevice.hs_zdfOrdSeekMode);
    };
    this.hs_zdfIxSeekMode.data = [$hs.modules.GHCziIOziDevice.hs_zdfOrdSeekMode, hs_zdcrange25uBZk, hs_zdcindex25uC0J, hs_zdcunsafeIndex25uBZ7, hs_zdcinRange25uBYJ, hs_zdcrangeSizze25uC0I, hs_zdcunsafeRangeSizze25uC0H];
    hs_zdcunsafeRangeSizze25uC0H.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmunsafeRangeSizze.hscall($hs.modules.GHCziIOziDevice.hs_zdfIxSeekMode);
    };
    hs_zdcrangeSizze25uC0I.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmrangeSizze.hscall($hs.modules.GHCziIOziDevice.hs_zdfIxSeekMode);
    };
    hs_zdcindex25uC0J.evaluateOnce = function () {
        return $hs.modules.GHCziArr.hs_zddmindex.hscall($hs.modules.GHCziIOziDevice.hs_zdfIxSeekMode);
    };
    hs_zdczeze125uC0K.evaluate = function (hs_a26D0x3, hs_b26D0x5) {
        var hs_wild26D0CA = hs_a26D0x3;
        if (hs_a26D0x3.notEvaluated) {
            hs_wild26D0CA = hs_a26D0x3.hscall();
        }
        switch (hs_wild26D0CA.tag) {
        case 1:
            var hs_wild126D0CD = hs_b26D0x5;
            if (hs_b26D0x5.notEvaluated) {
                hs_wild126D0CD = hs_b26D0x5.hscall();
            }
            switch (hs_wild126D0CD.tag) {
            case 1:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            case 2:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 3:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            case 4:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 2:
            var hs_wild126D0Cz = hs_b26D0x5;
            if (hs_b26D0x5.notEvaluated) {
                hs_wild126D0Cz = hs_b26D0x5.hscall();
            }
            switch (hs_wild126D0Cz.tag) {
            case 2:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 3:
            var hs_wild126D0CB = hs_b26D0x5;
            if (hs_b26D0x5.notEvaluated) {
                hs_wild126D0CB = hs_b26D0x5.hscall();
            }
            switch (hs_wild126D0CB.tag) {
            case 3:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        case 4:
            var hs_wild126D0CC = hs_b26D0x5;
            if (hs_b26D0x5.notEvaluated) {
                hs_wild126D0CC = hs_b26D0x5.hscall();
            }
            switch (hs_wild126D0CC.tag) {
            case 4:
                var $res = new $hs.Data(2);
                $res.data = [];
                return $res;
            default:
                var $res = new $hs.Data(1);
                $res.data = [];
                return $res;
            }
        }
    };
    this.hs_zdfEqIODeviceType.data = [hs_zdczeze125uC0K, hs_zdczsze125uC0U];
    hs_zdczsze125uC0U.evaluate = function (hs_a26D0xd, hs_b26D0xe) {
        var hs_sat26D0CE = new $hs.Thunk();
        hs_sat26D0CE.evaluateOnce = function () {
            return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziIOziDevice.hs_zdfEqIODeviceType, hs_a26D0xd, hs_b26D0xe);
        };
        return $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26D0CE);
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
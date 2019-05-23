
$hs.modules.ForeignziStorable = new $hs.Module();
$hs.modules.ForeignziStorable.dependencies = ["GHC.Integer", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Err", "GHC.Classes", "GHC.Int", "GHC.Ptr", "GHC.Storable"];
$hs.modules.ForeignziStorable.initBeforeDependencies = function () {
    this.hs_sizzeOf = new $hs.Func(1);
    this.hs_alignment = new $hs.Func(1);
    this.hs_peekElemOff = new $hs.Func(1);
    this.hs_pokeElemOff = new $hs.Func(1);
    this.hs_peekByteOff = new $hs.Func(1);
    this.hs_pokeByteOff = new $hs.Func(1);
    this.hs_peek = new $hs.Func(1);
    this.hs_poke = new $hs.Func(1);
    this.hs_zddmpoke = new $hs.Func(2);
    this.hs_zddmpeek = new $hs.Func(2);
    this.hs_zddmpokeByteOff = new $hs.Func(3);
    this.hs_zddmpeekByteOff = new $hs.Func(3);
    this.hs_zddmpokeElemOff = new $hs.Func(4);
    this.hs_zddmpeekElemOff = new $hs.Func(3);
    this.hs_zdfStorableChar = new $hs.Data(1);
    this.hs_zdfStorableInt = new $hs.Data(1);
    this.hs_zdfStorableWord = new $hs.Data(1);
    this.hs_zdfStorablePtr = new $hs.Data(1);
    this.hs_zdfStorableFunPtr = new $hs.Data(1);
    this.hs_zdfStorableStablePtr = new $hs.Data(1);
    this.hs_zdfStorableFloat = new $hs.Data(1);
    this.hs_zdfStorableDouble = new $hs.Data(1);
    this.hs_zdfStorableWord8 = new $hs.Data(1);
    this.hs_zdfStorableWord16 = new $hs.Data(1);
    this.hs_zdfStorableWord32 = new $hs.Data(1);
    this.hs_zdfStorableWord64 = new $hs.Data(1);
    this.hs_zdfStorableInt8 = new $hs.Data(1);
    this.hs_zdfStorableInt16 = new $hs.Data(1);
    this.hs_zdfStorableInt32 = new $hs.Data(1);
    this.hs_zdfStorableBool = new $hs.Data(1);
    this.hs_zdfStorableInt64 = new $hs.Data(1);
    this.hs_DZCStorable = new $hs.Func(8);
    this.hs_sizzeOf.notEvaluated = true;
    this.hs_sizzeOf.evaluate = function (hs_tpl26DM8t) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM8t);
    };
    this.hs_alignment.notEvaluated = true;
    this.hs_alignment.evaluate = function (hs_tpl26DM8F) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM8F);
    };
    this.hs_peekElemOff.notEvaluated = true;
    this.hs_peekElemOff.evaluate = function (hs_tpl26DM8R) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM8R);
    };
    this.hs_pokeElemOff.notEvaluated = true;
    this.hs_pokeElemOff.evaluate = function (hs_tpl26DM93) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM93);
    };
    this.hs_peekByteOff.notEvaluated = true;
    this.hs_peekByteOff.evaluate = function (hs_tpl26DM9f) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM9f);
    };
    this.hs_pokeByteOff.notEvaluated = true;
    this.hs_pokeByteOff.evaluate = function (hs_tpl26DM9r) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM9r);
    };
    this.hs_peek.notEvaluated = true;
    this.hs_peek.evaluate = function (hs_tpl26DM9D) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM9D);
    };
    this.hs_poke.notEvaluated = true;
    this.hs_poke.evaluate = function (hs_tpl26DM9P) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DM9P);
    };
    this.hs_zddmpoke.notEvaluated = true;
    this.hs_zddmpoke.evaluate = function (hs_zddStorable26DMa2, hs_ptr26DMa3) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26DMa2, hs_ptr26DMa3);
    };
    this.hs_zddmpeek.notEvaluated = true;
    this.hs_zddmpeek.evaluate = function (hs_zddStorable26DMa7, hs_ptr26DMa8) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26DMa7, hs_ptr26DMa8);
    };
    this.hs_zddmpokeByteOff.notEvaluated = true;
    this.hs_zddmpokeByteOff.evaluate = function (hs_zddStorable26DMad, hs_ptr26DMae, hs_off26DMaf) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26DMad, hs_ptr26DMae, hs_off26DMaf);
    };
    this.hs_zddmpeekByteOff.notEvaluated = true;
    this.hs_zddmpeekByteOff.evaluate = function (hs_zddStorable26DMak, hs_ptr26DMal, hs_off26DMam) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26DMak, hs_ptr26DMal, hs_off26DMam);
    };
    this.hs_zddmpokeElemOff.notEvaluated = true;
    this.hs_zddmpokeElemOff.evaluate = function (hs_zddStorable26DMas, hs_ptr26DMat, hs_off26DMau, hs_val26DMav) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26DMas, hs_ptr26DMat, hs_off26DMau, hs_val26DMav);
    };
    this.hs_zddmpeekElemOff.notEvaluated = true;
    this.hs_zddmpeekElemOff.evaluate = function (hs_zddStorable26DMaB, hs_ptr26DMaC, hs_off26DMaD) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26DMaB, hs_ptr26DMaC, hs_off26DMaD);
    };
    this.hs_zdfStorableChar.notEvaluated = true;
    this.hs_zdfStorableChar.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableInt.notEvaluated = true;
    this.hs_zdfStorableInt.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableWord.notEvaluated = true;
    this.hs_zdfStorableWord.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorablePtr.notEvaluated = true;
    this.hs_zdfStorablePtr.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableFunPtr.notEvaluated = true;
    this.hs_zdfStorableFunPtr.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableStablePtr.notEvaluated = true;
    this.hs_zdfStorableStablePtr.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableFloat.notEvaluated = true;
    this.hs_zdfStorableFloat.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableDouble.notEvaluated = true;
    this.hs_zdfStorableDouble.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableWord8.notEvaluated = true;
    this.hs_zdfStorableWord8.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableWord16.notEvaluated = true;
    this.hs_zdfStorableWord16.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableWord32.notEvaluated = true;
    this.hs_zdfStorableWord32.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableWord64.notEvaluated = true;
    this.hs_zdfStorableWord64.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableInt8.notEvaluated = true;
    this.hs_zdfStorableInt8.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableInt16.notEvaluated = true;
    this.hs_zdfStorableInt16.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableInt32.notEvaluated = true;
    this.hs_zdfStorableInt32.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableBool.notEvaluated = true;
    this.hs_zdfStorableBool.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_zdfStorableInt64.notEvaluated = true;
    this.hs_zdfStorableInt64.evaluate = function () {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this;
    };
    this.hs_DZCStorable.notEvaluated = true;
    this.hs_DZCStorable.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.ForeignziStorable.initAfterDependencies = function () {
    this.hs_sizzeOf.notEvaluated = false;
    this.hs_alignment.notEvaluated = false;
    this.hs_peekElemOff.notEvaluated = false;
    this.hs_pokeElemOff.notEvaluated = false;
    this.hs_peekByteOff.notEvaluated = false;
    this.hs_pokeByteOff.notEvaluated = false;
    this.hs_peek.notEvaluated = false;
    this.hs_poke.notEvaluated = false;
    this.hs_zddmpoke.notEvaluated = false;
    this.hs_zddmpeek.notEvaluated = false;
    this.hs_zddmpokeByteOff.notEvaluated = false;
    this.hs_zddmpeekByteOff.notEvaluated = false;
    this.hs_zddmpokeElemOff.notEvaluated = false;
    this.hs_zddmpeekElemOff.notEvaluated = false;
    this.hs_zdfStorableChar.notEvaluated = false;
    this.hs_zdfStorableChar.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableInt.notEvaluated = false;
    this.hs_zdfStorableInt.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableWord.notEvaluated = false;
    this.hs_zdfStorableWord.evaluate = function () {
        return this;
    };
    this.hs_zdfStorablePtr.notEvaluated = false;
    this.hs_zdfStorablePtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableFunPtr.notEvaluated = false;
    this.hs_zdfStorableFunPtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableStablePtr.notEvaluated = false;
    this.hs_zdfStorableStablePtr.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableFloat.notEvaluated = false;
    this.hs_zdfStorableFloat.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableDouble.notEvaluated = false;
    this.hs_zdfStorableDouble.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableWord8.notEvaluated = false;
    this.hs_zdfStorableWord8.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableWord16.notEvaluated = false;
    this.hs_zdfStorableWord16.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableWord32.notEvaluated = false;
    this.hs_zdfStorableWord32.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableWord64.notEvaluated = false;
    this.hs_zdfStorableWord64.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableInt8.notEvaluated = false;
    this.hs_zdfStorableInt8.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableInt16.notEvaluated = false;
    this.hs_zdfStorableInt16.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableInt32.notEvaluated = false;
    this.hs_zdfStorableInt32.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableBool.notEvaluated = false;
    this.hs_zdfStorableBool.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableInt64.notEvaluated = false;
    this.hs_zdfStorableInt64.evaluate = function () {
        return this;
    };
    this.hs_DZCStorable.notEvaluated = false;
    var hs_zdcalignment25vnEr = new $hs.Func(1);
    var hs_zdcsizzeOf25vnEv = new $hs.Func(1);
    var hs_zdcpoke25vnEz = new $hs.Func(1);
    var hs_zdcpeek25vnEB = new $hs.Func(1);
    var hs_zdcpokeByteOff25vnED = new $hs.Func(2);
    var hs_zdcpeekByteOff25vnEF = new $hs.Func(2);
    var hs_zdcalignment125vnEX = new $hs.Func(1);
    var hs_zdcsizzeOf125vnF1 = new $hs.Func(1);
    var hs_zdcpoke125vnF5 = new $hs.Func(1);
    var hs_zdcpeek125vnF7 = new $hs.Func(1);
    var hs_zdcpokeByteOff125vnF9 = new $hs.Func(2);
    var hs_zdcpeekByteOff125vnFb = new $hs.Func(2);
    var hs_zdcalignment225vnFt = new $hs.Func(1);
    var hs_zdcsizzeOf225vnFx = new $hs.Func(1);
    var hs_zdcpoke225vnFB = new $hs.Func(1);
    var hs_zdcpeek225vnFD = new $hs.Func(1);
    var hs_zdcpokeByteOff225vnFF = new $hs.Func(2);
    var hs_zdcpeekByteOff225vnFH = new $hs.Func(2);
    var hs_zdcalignment325vnFZ = new $hs.Func(1);
    var hs_zdcsizzeOf325vnG3 = new $hs.Func(1);
    var hs_zdcpoke325vnG7 = new $hs.Func(1);
    var hs_zdcpeek325vnG9 = new $hs.Func(1);
    var hs_zdcpokeByteOff325vnGb = new $hs.Func(2);
    var hs_zdcpeekByteOff325vnGd = new $hs.Func(2);
    var hs_zdcalignment425vnGv = new $hs.Func(1);
    var hs_zdcsizzeOf425vnGz = new $hs.Func(1);
    var hs_zdcpoke425vnGD = new $hs.Func(1);
    var hs_zdcpeek425vnGF = new $hs.Func(1);
    var hs_zdcpokeByteOff425vnGH = new $hs.Func(2);
    var hs_zdcpeekByteOff425vnGJ = new $hs.Func(2);
    var hs_zdcalignment525vnH1 = new $hs.Func(1);
    var hs_zdcsizzeOf525vnH5 = new $hs.Func(1);
    var hs_zdcpoke525vnH9 = new $hs.Func(1);
    var hs_zdcpeek525vnHb = new $hs.Func(1);
    var hs_zdcpokeByteOff525vnHd = new $hs.Func(2);
    var hs_zdcpeekByteOff525vnHf = new $hs.Func(2);
    var hs_zdcalignment625vnHx = new $hs.Func(1);
    var hs_zdcsizzeOf625vnHB = new $hs.Func(1);
    var hs_zdcpoke625vnHF = new $hs.Func(1);
    var hs_zdcpeek625vnHH = new $hs.Func(1);
    var hs_zdcpokeByteOff625vnHJ = new $hs.Func(2);
    var hs_zdcpeekByteOff625vnHL = new $hs.Func(2);
    var hs_zdcalignment725vnI3 = new $hs.Func(1);
    var hs_zdcsizzeOf725vnI7 = new $hs.Func(1);
    var hs_zdcpoke725vnIb = new $hs.Func(1);
    var hs_zdcpeek725vnId = new $hs.Func(1);
    var hs_zdcpokeByteOff725vnIf = new $hs.Func(2);
    var hs_zdcpeekByteOff725vnIh = new $hs.Func(2);
    var hs_zdcalignment825vnIz = new $hs.Func(1);
    var hs_zdcsizzeOf825vnID = new $hs.Func(1);
    var hs_zdcpoke825vnIH = new $hs.Func(1);
    var hs_zdcpeek825vnIJ = new $hs.Func(1);
    var hs_zdcpokeByteOff825vnIL = new $hs.Func(2);
    var hs_zdcpeekByteOff825vnIN = new $hs.Func(2);
    var hs_zdcalignment925vnJ5 = new $hs.Func(1);
    var hs_zdcsizzeOf925vnJ9 = new $hs.Func(1);
    var hs_zdcpoke925vnJd = new $hs.Func(1);
    var hs_zdcpeek925vnJf = new $hs.Func(1);
    var hs_zdcpokeByteOff925vnJh = new $hs.Func(2);
    var hs_zdcpeekByteOff925vnJj = new $hs.Func(2);
    var hs_zdcalignment1025vnJB = new $hs.Func(1);
    var hs_zdcsizzeOf1025vnJF = new $hs.Func(1);
    var hs_zdcpoke1025vnJJ = new $hs.Func(1);
    var hs_zdcpeek1025vnJL = new $hs.Func(1);
    var hs_zdcpokeByteOff1025vnJN = new $hs.Func(2);
    var hs_zdcpeekByteOff1025vnJP = new $hs.Func(2);
    var hs_zdcalignment1125vnK7 = new $hs.Func(1);
    var hs_zdcsizzeOf1125vnKb = new $hs.Func(1);
    var hs_zdcpoke1125vnKf = new $hs.Func(1);
    var hs_zdcpeek1125vnKh = new $hs.Func(1);
    var hs_zdcpokeByteOff1125vnKj = new $hs.Func(2);
    var hs_zdcpeekByteOff1125vnKl = new $hs.Func(2);
    var hs_zdcalignment1225vnKD = new $hs.Func(1);
    var hs_zdcsizzeOf1225vnKH = new $hs.Func(1);
    var hs_zdcpoke1225vnKL = new $hs.Func(1);
    var hs_zdcpeek1225vnKN = new $hs.Func(1);
    var hs_zdcpokeByteOff1225vnKP = new $hs.Func(2);
    var hs_zdcpeekByteOff1225vnKR = new $hs.Func(2);
    var hs_zdcalignment1325vnL9 = new $hs.Func(1);
    var hs_zdcsizzeOf1325vnLd = new $hs.Func(1);
    var hs_zdcpoke1325vnLh = new $hs.Func(1);
    var hs_zdcpeek1325vnLj = new $hs.Func(1);
    var hs_zdcpokeByteOff1325vnLl = new $hs.Func(2);
    var hs_zdcpeekByteOff1325vnLn = new $hs.Func(2);
    var hs_zdcalignment1425vnLF = new $hs.Func(1);
    var hs_zdcsizzeOf1425vnLJ = new $hs.Func(1);
    var hs_zdcpoke1425vnLN = new $hs.Func(1);
    var hs_zdcpeek1425vnLP = new $hs.Func(1);
    var hs_zdcpokeByteOff1425vnLR = new $hs.Func(2);
    var hs_zdcpeekByteOff1425vnLT = new $hs.Func(2);
    var hs_zdcsizzeOf1525vnMb = new $hs.Func(1);
    var hs_zdcalignment1525vnMf = new $hs.Func(1);
    var hs_zdcpeekElemOff25vnMj = new $hs.Func(2);
    var hs_zdcpokeElemOff25vnMy = new $hs.Func(3);
    var hs_zdcpoke1525vnML = new $hs.Func(1);
    var hs_zdcpeek1525vnMN = new $hs.Func(1);
    var hs_zdcpokeByteOff1525vnMP = new $hs.Func(2);
    var hs_zdcpeekByteOff1525vnMR = new $hs.Func(2);
    var hs_zdcalignment1625vnN9 = new $hs.Func(1);
    var hs_zdcsizzeOf1625vnNd = new $hs.Func(1);
    var hs_zdcpoke1625vnNh = new $hs.Func(1);
    var hs_zdcpeek1625vnNj = new $hs.Func(1);
    var hs_zdcpokeByteOff1625vnNl = new $hs.Func(2);
    var hs_zdcpeekByteOff1625vnNn = new $hs.Func(2);
    this.hs_sizzeOf.evaluate = function (hs_tpl26DM8t) {
        var hs_tpl26DMjU = hs_tpl26DM8t;
        if (hs_tpl26DM8t.notEvaluated) {
            hs_tpl26DMjU = hs_tpl26DM8t.hscall();
        }
        var hs_tpl26DM8D = hs_tpl26DMjU.data[0];
        if (hs_tpl26DM8D.notEvaluated) {
            return hs_tpl26DM8D.hscall();
        } else {
            return hs_tpl26DM8D;
        }
    };
    this.hs_alignment.evaluate = function (hs_tpl26DM8F) {
        var hs_tpl26DMk3 = hs_tpl26DM8F;
        if (hs_tpl26DM8F.notEvaluated) {
            hs_tpl26DMk3 = hs_tpl26DM8F.hscall();
        }
        var hs_tpl26DM8P = hs_tpl26DMk3.data[1];
        if (hs_tpl26DM8P.notEvaluated) {
            return hs_tpl26DM8P.hscall();
        } else {
            return hs_tpl26DM8P;
        }
    };
    this.hs_peekElemOff.evaluate = function (hs_tpl26DM8R) {
        var hs_tpl26DMkb = hs_tpl26DM8R;
        if (hs_tpl26DM8R.notEvaluated) {
            hs_tpl26DMkb = hs_tpl26DM8R.hscall();
        }
        var hs_tpl26DM91 = hs_tpl26DMkb.data[2];
        if (hs_tpl26DM91.notEvaluated) {
            return hs_tpl26DM91.hscall();
        } else {
            return hs_tpl26DM91;
        }
    };
    this.hs_pokeElemOff.evaluate = function (hs_tpl26DM93) {
        var hs_tpl26DMkj = hs_tpl26DM93;
        if (hs_tpl26DM93.notEvaluated) {
            hs_tpl26DMkj = hs_tpl26DM93.hscall();
        }
        var hs_tpl26DM9d = hs_tpl26DMkj.data[3];
        if (hs_tpl26DM9d.notEvaluated) {
            return hs_tpl26DM9d.hscall();
        } else {
            return hs_tpl26DM9d;
        }
    };
    this.hs_peekByteOff.evaluate = function (hs_tpl26DM9f) {
        var hs_tpl26DMkr = hs_tpl26DM9f;
        if (hs_tpl26DM9f.notEvaluated) {
            hs_tpl26DMkr = hs_tpl26DM9f.hscall();
        }
        var hs_tpl26DM9p = hs_tpl26DMkr.data[4];
        if (hs_tpl26DM9p.notEvaluated) {
            return hs_tpl26DM9p.hscall();
        } else {
            return hs_tpl26DM9p;
        }
    };
    this.hs_pokeByteOff.evaluate = function (hs_tpl26DM9r) {
        var hs_tpl26DMkz = hs_tpl26DM9r;
        if (hs_tpl26DM9r.notEvaluated) {
            hs_tpl26DMkz = hs_tpl26DM9r.hscall();
        }
        var hs_tpl26DM9B = hs_tpl26DMkz.data[5];
        if (hs_tpl26DM9B.notEvaluated) {
            return hs_tpl26DM9B.hscall();
        } else {
            return hs_tpl26DM9B;
        }
    };
    this.hs_peek.evaluate = function (hs_tpl26DM9D) {
        var hs_tpl26DMkH = hs_tpl26DM9D;
        if (hs_tpl26DM9D.notEvaluated) {
            hs_tpl26DMkH = hs_tpl26DM9D.hscall();
        }
        var hs_tpl26DM9N = hs_tpl26DMkH.data[6];
        if (hs_tpl26DM9N.notEvaluated) {
            return hs_tpl26DM9N.hscall();
        } else {
            return hs_tpl26DM9N;
        }
    };
    this.hs_poke.evaluate = function (hs_tpl26DM9P) {
        var hs_tpl26DMkP = hs_tpl26DM9P;
        if (hs_tpl26DM9P.notEvaluated) {
            hs_tpl26DMkP = hs_tpl26DM9P.hscall();
        }
        var hs_tpl26DM9Z = hs_tpl26DMkP.data[7];
        if (hs_tpl26DM9Z.notEvaluated) {
            return hs_tpl26DM9Z.hscall();
        } else {
            return hs_tpl26DM9Z;
        }
    };
    this.hs_zddmpoke.evaluate = function (hs_zddStorable26DMa2, hs_ptr26DMa3) {
        var hs_sat26DMkW = new $hs.Data(1);
        hs_sat26DMkW.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26DMa2, hs_ptr26DMa3, hs_sat26DMkW);
    };
    this.hs_zddmpeek.evaluate = function (hs_zddStorable26DMa7, hs_ptr26DMa8) {
        var hs_sat26DMkX = new $hs.Data(1);
        hs_sat26DMkX.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26DMa7, hs_ptr26DMa8, hs_sat26DMkX);
    };
    this.hs_zddmpokeByteOff.evaluate = function (hs_zddStorable26DMad, hs_ptr26DMae, hs_off26DMaf) {
        var hs_sat26DMkY = new $hs.Thunk();
        hs_sat26DMkY.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMae, hs_off26DMaf);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26DMad, hs_sat26DMkY);
    };
    this.hs_zddmpeekByteOff.evaluate = function (hs_zddStorable26DMak, hs_ptr26DMal, hs_off26DMam) {
        var hs_sat26DMkZ = new $hs.Thunk();
        hs_sat26DMkZ.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMal, hs_off26DMam);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall(hs_zddStorable26DMak, hs_sat26DMkZ);
    };
    this.hs_zddmpokeElemOff.evaluate = function (hs_zddStorable26DMas, hs_ptr26DMat, hs_off26DMau, hs_val26DMav) {
        var hs_sat26DMl1 = new $hs.Thunk();
        hs_sat26DMl1.evaluateOnce = function () {
            var hs_sat26DMl0 = new $hs.Thunk();
            hs_sat26DMl0.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DMas, hs_val26DMav);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26DMau, hs_sat26DMl0);
        };
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall(hs_zddStorable26DMas, hs_ptr26DMat, hs_sat26DMl1, hs_val26DMav);
    };
    this.hs_zddmpeekElemOff.evaluate = function (hs_zddStorable26DMaB, hs_ptr26DMaC, hs_off26DMaD) {
        var hs_sat26DMl3 = new $hs.Thunk();
        hs_sat26DMl3.evaluateOnce = function () {
            var hs_sat26DMl2 = new $hs.Thunk();
            hs_sat26DMl2.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DMaB, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26DMaD, hs_sat26DMl2);
        };
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall(hs_zddStorable26DMaB, hs_ptr26DMaC, hs_sat26DMl3);
    };
    hs_zdcalignment25vnEr.evaluate = function (hs_ds26DMaJ) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf25vnEv.evaluate = function (hs_ds26DMaN) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableChar.data = [hs_zdcsizzeOf25vnEv, hs_zdcalignment25vnEr, $hs.modules.GHCziStorable.hs_readWideCharOffPtr, $hs.modules.GHCziStorable.hs_writeWideCharOffPtr, hs_zdcpeekByteOff25vnEF, hs_zdcpokeByteOff25vnED, hs_zdcpeek25vnEB, hs_zdcpoke25vnEz];
    hs_zdcpoke25vnEz.evaluate = function (hs_ptr26DMaX) {
        var hs_sat26DMl4 = new $hs.Data(1);
        hs_sat26DMl4.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_ptr26DMaX, hs_sat26DMl4);
    };
    hs_zdcpeek25vnEB.evaluate = function (hs_ptr26DMb0) {
        var hs_sat26DMl5 = new $hs.Data(1);
        hs_sat26DMl5.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_ptr26DMb0, hs_sat26DMl5);
    };
    hs_zdcpokeByteOff25vnED.evaluate = function (hs_ptr26DMb4, hs_off26DMb5) {
        var hs_sat26DMl6 = new $hs.Thunk();
        hs_sat26DMl6.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMb4, hs_off26DMb5);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26DMl6);
    };
    hs_zdcpeekByteOff25vnEF.evaluate = function (hs_ptr26DMb9, hs_off26DMba) {
        var hs_sat26DMl7 = new $hs.Thunk();
        hs_sat26DMl7.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMb9, hs_off26DMba);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26DMl7);
    };
    hs_zdcalignment125vnEX.evaluate = function (hs_ds26DMbf) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf125vnF1.evaluate = function (hs_ds26DMbj) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableInt.data = [hs_zdcsizzeOf125vnF1, hs_zdcalignment125vnEX, $hs.modules.GHCziStorable.hs_readIntOffPtr, $hs.modules.GHCziStorable.hs_writeIntOffPtr, hs_zdcpeekByteOff125vnFb, hs_zdcpokeByteOff125vnF9, hs_zdcpeek125vnF7, hs_zdcpoke125vnF5];
    hs_zdcpoke125vnF5.evaluate = function (hs_ptr26DMbt) {
        var hs_sat26DMl8 = new $hs.Data(1);
        hs_sat26DMl8.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_ptr26DMbt, hs_sat26DMl8);
    };
    hs_zdcpeek125vnF7.evaluate = function (hs_ptr26DMbw) {
        var hs_sat26DMl9 = new $hs.Data(1);
        hs_sat26DMl9.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_ptr26DMbw, hs_sat26DMl9);
    };
    hs_zdcpokeByteOff125vnF9.evaluate = function (hs_ptr26DMbA, hs_off26DMbB) {
        var hs_sat26DMla = new $hs.Thunk();
        hs_sat26DMla.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMbA, hs_off26DMbB);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_sat26DMla);
    };
    hs_zdcpeekByteOff125vnFb.evaluate = function (hs_ptr26DMbF, hs_off26DMbG) {
        var hs_sat26DMlb = new $hs.Thunk();
        hs_sat26DMlb.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMbF, hs_off26DMbG);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_sat26DMlb);
    };
    hs_zdcalignment225vnFt.evaluate = function (hs_ds26DMbL) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf225vnFx.evaluate = function (hs_ds26DMbP) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableWord.data = [hs_zdcsizzeOf225vnFx, hs_zdcalignment225vnFt, $hs.modules.GHCziStorable.hs_readWordOffPtr, $hs.modules.GHCziStorable.hs_writeWordOffPtr, hs_zdcpeekByteOff225vnFH, hs_zdcpokeByteOff225vnFF, hs_zdcpeek225vnFD, hs_zdcpoke225vnFB];
    hs_zdcpoke225vnFB.evaluate = function (hs_ptr26DMbZ) {
        var hs_sat26DMlc = new $hs.Data(1);
        hs_sat26DMlc.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_ptr26DMbZ, hs_sat26DMlc);
    };
    hs_zdcpeek225vnFD.evaluate = function (hs_ptr26DMc2) {
        var hs_sat26DMld = new $hs.Data(1);
        hs_sat26DMld.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_ptr26DMc2, hs_sat26DMld);
    };
    hs_zdcpokeByteOff225vnFF.evaluate = function (hs_ptr26DMc6, hs_off26DMc7) {
        var hs_sat26DMle = new $hs.Thunk();
        hs_sat26DMle.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMc6, hs_off26DMc7);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_sat26DMle);
    };
    hs_zdcpeekByteOff225vnFH.evaluate = function (hs_ptr26DMcb, hs_off26DMcc) {
        var hs_sat26DMlf = new $hs.Thunk();
        hs_sat26DMlf.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMcb, hs_off26DMcc);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_sat26DMlf);
    };
    hs_zdcalignment325vnFZ.evaluate = function (hs_ds26DMch) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf325vnG3.evaluate = function (hs_ds26DMcl) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorablePtr.data = [hs_zdcsizzeOf325vnG3, hs_zdcalignment325vnFZ, $hs.modules.GHCziStorable.hs_readPtrOffPtr, $hs.modules.GHCziStorable.hs_writePtrOffPtr, hs_zdcpeekByteOff325vnGd, hs_zdcpokeByteOff325vnGb, hs_zdcpeek325vnG9, hs_zdcpoke325vnG7];
    hs_zdcpoke325vnG7.evaluate = function (hs_ptr26DMcv) {
        var hs_sat26DMlg = new $hs.Data(1);
        hs_sat26DMlg.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_ptr26DMcv, hs_sat26DMlg);
    };
    hs_zdcpeek325vnG9.evaluate = function (hs_ptr26DMcy) {
        var hs_sat26DMlh = new $hs.Data(1);
        hs_sat26DMlh.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_ptr26DMcy, hs_sat26DMlh);
    };
    hs_zdcpokeByteOff325vnGb.evaluate = function (hs_ptr26DMcC, hs_off26DMcD) {
        var hs_sat26DMli = new $hs.Thunk();
        hs_sat26DMli.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMcC, hs_off26DMcD);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26DMli);
    };
    hs_zdcpeekByteOff325vnGd.evaluate = function (hs_ptr26DMcH, hs_off26DMcI) {
        var hs_sat26DMlj = new $hs.Thunk();
        hs_sat26DMlj.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMcH, hs_off26DMcI);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26DMlj);
    };
    hs_zdcalignment425vnGv.evaluate = function (hs_ds26DMcN) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf425vnGz.evaluate = function (hs_ds26DMcR) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableFunPtr.data = [hs_zdcsizzeOf425vnGz, hs_zdcalignment425vnGv, $hs.modules.GHCziStorable.hs_readFunPtrOffPtr, $hs.modules.GHCziStorable.hs_writeFunPtrOffPtr, hs_zdcpeekByteOff425vnGJ, hs_zdcpokeByteOff425vnGH, hs_zdcpeek425vnGF, hs_zdcpoke425vnGD];
    hs_zdcpoke425vnGD.evaluate = function (hs_ptr26DMd1) {
        var hs_sat26DMlk = new $hs.Data(1);
        hs_sat26DMlk.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_ptr26DMd1, hs_sat26DMlk);
    };
    hs_zdcpeek425vnGF.evaluate = function (hs_ptr26DMd4) {
        var hs_sat26DMll = new $hs.Data(1);
        hs_sat26DMll.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_ptr26DMd4, hs_sat26DMll);
    };
    hs_zdcpokeByteOff425vnGH.evaluate = function (hs_ptr26DMd8, hs_off26DMd9) {
        var hs_sat26DMlm = new $hs.Thunk();
        hs_sat26DMlm.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMd8, hs_off26DMd9);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_sat26DMlm);
    };
    hs_zdcpeekByteOff425vnGJ.evaluate = function (hs_ptr26DMdd, hs_off26DMde) {
        var hs_sat26DMln = new $hs.Thunk();
        hs_sat26DMln.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMdd, hs_off26DMde);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_sat26DMln);
    };
    hs_zdcalignment525vnH1.evaluate = function (hs_ds26DMdj) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf525vnH5.evaluate = function (hs_ds26DMdn) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableStablePtr.data = [hs_zdcsizzeOf525vnH5, hs_zdcalignment525vnH1, $hs.modules.GHCziStorable.hs_readStablePtrOffPtr, $hs.modules.GHCziStorable.hs_writeStablePtrOffPtr, hs_zdcpeekByteOff525vnHf, hs_zdcpokeByteOff525vnHd, hs_zdcpeek525vnHb, hs_zdcpoke525vnH9];
    hs_zdcpoke525vnH9.evaluate = function (hs_ptr26DMdx) {
        var hs_sat26DMlo = new $hs.Data(1);
        hs_sat26DMlo.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_ptr26DMdx, hs_sat26DMlo);
    };
    hs_zdcpeek525vnHb.evaluate = function (hs_ptr26DMdA) {
        var hs_sat26DMlp = new $hs.Data(1);
        hs_sat26DMlp.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_ptr26DMdA, hs_sat26DMlp);
    };
    hs_zdcpokeByteOff525vnHd.evaluate = function (hs_ptr26DMdE, hs_off26DMdF) {
        var hs_sat26DMlq = new $hs.Thunk();
        hs_sat26DMlq.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMdE, hs_off26DMdF);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_sat26DMlq);
    };
    hs_zdcpeekByteOff525vnHf.evaluate = function (hs_ptr26DMdJ, hs_off26DMdK) {
        var hs_sat26DMlr = new $hs.Thunk();
        hs_sat26DMlr.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMdJ, hs_off26DMdK);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_sat26DMlr);
    };
    hs_zdcalignment625vnHx.evaluate = function (hs_ds26DMdP) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf625vnHB.evaluate = function (hs_ds26DMdT) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableFloat.data = [hs_zdcsizzeOf625vnHB, hs_zdcalignment625vnHx, $hs.modules.GHCziStorable.hs_readFloatOffPtr, $hs.modules.GHCziStorable.hs_writeFloatOffPtr, hs_zdcpeekByteOff625vnHL, hs_zdcpokeByteOff625vnHJ, hs_zdcpeek625vnHH, hs_zdcpoke625vnHF];
    hs_zdcpoke625vnHF.evaluate = function (hs_ptr26DMe3) {
        var hs_sat26DMls = new $hs.Data(1);
        hs_sat26DMls.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_ptr26DMe3, hs_sat26DMls);
    };
    hs_zdcpeek625vnHH.evaluate = function (hs_ptr26DMe6) {
        var hs_sat26DMlt = new $hs.Data(1);
        hs_sat26DMlt.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_ptr26DMe6, hs_sat26DMlt);
    };
    hs_zdcpokeByteOff625vnHJ.evaluate = function (hs_ptr26DMea, hs_off26DMeb) {
        var hs_sat26DMlu = new $hs.Thunk();
        hs_sat26DMlu.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMea, hs_off26DMeb);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_sat26DMlu);
    };
    hs_zdcpeekByteOff625vnHL.evaluate = function (hs_ptr26DMef, hs_off26DMeg) {
        var hs_sat26DMlv = new $hs.Thunk();
        hs_sat26DMlv.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMef, hs_off26DMeg);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_sat26DMlv);
    };
    hs_zdcalignment725vnI3.evaluate = function (hs_ds26DMel) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf725vnI7.evaluate = function (hs_ds26DMep) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableDouble.data = [hs_zdcsizzeOf725vnI7, hs_zdcalignment725vnI3, $hs.modules.GHCziStorable.hs_readDoubleOffPtr, $hs.modules.GHCziStorable.hs_writeDoubleOffPtr, hs_zdcpeekByteOff725vnIh, hs_zdcpokeByteOff725vnIf, hs_zdcpeek725vnId, hs_zdcpoke725vnIb];
    hs_zdcpoke725vnIb.evaluate = function (hs_ptr26DMez) {
        var hs_sat26DMlw = new $hs.Data(1);
        hs_sat26DMlw.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_ptr26DMez, hs_sat26DMlw);
    };
    hs_zdcpeek725vnId.evaluate = function (hs_ptr26DMeC) {
        var hs_sat26DMlx = new $hs.Data(1);
        hs_sat26DMlx.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_ptr26DMeC, hs_sat26DMlx);
    };
    hs_zdcpokeByteOff725vnIf.evaluate = function (hs_ptr26DMeG, hs_off26DMeH) {
        var hs_sat26DMly = new $hs.Thunk();
        hs_sat26DMly.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMeG, hs_off26DMeH);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_sat26DMly);
    };
    hs_zdcpeekByteOff725vnIh.evaluate = function (hs_ptr26DMeL, hs_off26DMeM) {
        var hs_sat26DMlz = new $hs.Thunk();
        hs_sat26DMlz.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMeL, hs_off26DMeM);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_sat26DMlz);
    };
    hs_zdcalignment825vnIz.evaluate = function (hs_ds26DMeR) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    hs_zdcsizzeOf825vnID.evaluate = function (hs_ds26DMeV) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    this.hs_zdfStorableWord8.data = [hs_zdcsizzeOf825vnID, hs_zdcalignment825vnIz, $hs.modules.GHCziStorable.hs_readWord8OffPtr, $hs.modules.GHCziStorable.hs_writeWord8OffPtr, hs_zdcpeekByteOff825vnIN, hs_zdcpokeByteOff825vnIL, hs_zdcpeek825vnIJ, hs_zdcpoke825vnIH];
    hs_zdcpoke825vnIH.evaluate = function (hs_ptr26DMf5) {
        var hs_sat26DMlA = new $hs.Data(1);
        hs_sat26DMlA.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_ptr26DMf5, hs_sat26DMlA);
    };
    hs_zdcpeek825vnIJ.evaluate = function (hs_ptr26DMf8) {
        var hs_sat26DMlB = new $hs.Data(1);
        hs_sat26DMlB.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_ptr26DMf8, hs_sat26DMlB);
    };
    hs_zdcpokeByteOff825vnIL.evaluate = function (hs_ptr26DMfc, hs_off26DMfd) {
        var hs_sat26DMlC = new $hs.Thunk();
        hs_sat26DMlC.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMfc, hs_off26DMfd);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DMlC);
    };
    hs_zdcpeekByteOff825vnIN.evaluate = function (hs_ptr26DMfh, hs_off26DMfi) {
        var hs_sat26DMlD = new $hs.Thunk();
        hs_sat26DMlD.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMfh, hs_off26DMfi);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DMlD);
    };
    hs_zdcalignment925vnJ5.evaluate = function (hs_ds26DMfn) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    hs_zdcsizzeOf925vnJ9.evaluate = function (hs_ds26DMfr) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    this.hs_zdfStorableWord16.data = [hs_zdcsizzeOf925vnJ9, hs_zdcalignment925vnJ5, $hs.modules.GHCziStorable.hs_readWord16OffPtr, $hs.modules.GHCziStorable.hs_writeWord16OffPtr, hs_zdcpeekByteOff925vnJj, hs_zdcpokeByteOff925vnJh, hs_zdcpeek925vnJf, hs_zdcpoke925vnJd];
    hs_zdcpoke925vnJd.evaluate = function (hs_ptr26DMfB) {
        var hs_sat26DMlE = new $hs.Data(1);
        hs_sat26DMlE.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_ptr26DMfB, hs_sat26DMlE);
    };
    hs_zdcpeek925vnJf.evaluate = function (hs_ptr26DMfE) {
        var hs_sat26DMlF = new $hs.Data(1);
        hs_sat26DMlF.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_ptr26DMfE, hs_sat26DMlF);
    };
    hs_zdcpokeByteOff925vnJh.evaluate = function (hs_ptr26DMfI, hs_off26DMfJ) {
        var hs_sat26DMlG = new $hs.Thunk();
        hs_sat26DMlG.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMfI, hs_off26DMfJ);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_sat26DMlG);
    };
    hs_zdcpeekByteOff925vnJj.evaluate = function (hs_ptr26DMfN, hs_off26DMfO) {
        var hs_sat26DMlH = new $hs.Thunk();
        hs_sat26DMlH.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMfN, hs_off26DMfO);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_sat26DMlH);
    };
    hs_zdcalignment1025vnJB.evaluate = function (hs_ds26DMfT) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1025vnJF.evaluate = function (hs_ds26DMfX) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableWord32.data = [hs_zdcsizzeOf1025vnJF, hs_zdcalignment1025vnJB, $hs.modules.GHCziStorable.hs_readWord32OffPtr, $hs.modules.GHCziStorable.hs_writeWord32OffPtr, hs_zdcpeekByteOff1025vnJP, hs_zdcpokeByteOff1025vnJN, hs_zdcpeek1025vnJL, hs_zdcpoke1025vnJJ];
    hs_zdcpoke1025vnJJ.evaluate = function (hs_ptr26DMg7) {
        var hs_sat26DMlI = new $hs.Data(1);
        hs_sat26DMlI.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26DMg7, hs_sat26DMlI);
    };
    hs_zdcpeek1025vnJL.evaluate = function (hs_ptr26DMga) {
        var hs_sat26DMlJ = new $hs.Data(1);
        hs_sat26DMlJ.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26DMga, hs_sat26DMlJ);
    };
    hs_zdcpokeByteOff1025vnJN.evaluate = function (hs_ptr26DMge, hs_off26DMgf) {
        var hs_sat26DMlK = new $hs.Thunk();
        hs_sat26DMlK.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMge, hs_off26DMgf);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_sat26DMlK);
    };
    hs_zdcpeekByteOff1025vnJP.evaluate = function (hs_ptr26DMgj, hs_off26DMgk) {
        var hs_sat26DMlL = new $hs.Thunk();
        hs_sat26DMlL.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMgj, hs_off26DMgk);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_sat26DMlL);
    };
    hs_zdcalignment1125vnK7.evaluate = function (hs_ds26DMgp) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1125vnKb.evaluate = function (hs_ds26DMgt) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableWord64.data = [hs_zdcsizzeOf1125vnKb, hs_zdcalignment1125vnK7, $hs.modules.GHCziStorable.hs_readWord64OffPtr, $hs.modules.GHCziStorable.hs_writeWord64OffPtr, hs_zdcpeekByteOff1125vnKl, hs_zdcpokeByteOff1125vnKj, hs_zdcpeek1125vnKh, hs_zdcpoke1125vnKf];
    hs_zdcpoke1125vnKf.evaluate = function (hs_ptr26DMgD) {
        var hs_sat26DMlM = new $hs.Data(1);
        hs_sat26DMlM.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_ptr26DMgD, hs_sat26DMlM);
    };
    hs_zdcpeek1125vnKh.evaluate = function (hs_ptr26DMgG) {
        var hs_sat26DMlN = new $hs.Data(1);
        hs_sat26DMlN.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_ptr26DMgG, hs_sat26DMlN);
    };
    hs_zdcpokeByteOff1125vnKj.evaluate = function (hs_ptr26DMgK, hs_off26DMgL) {
        var hs_sat26DMlO = new $hs.Thunk();
        hs_sat26DMlO.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMgK, hs_off26DMgL);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_sat26DMlO);
    };
    hs_zdcpeekByteOff1125vnKl.evaluate = function (hs_ptr26DMgP, hs_off26DMgQ) {
        var hs_sat26DMlP = new $hs.Thunk();
        hs_sat26DMlP.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMgP, hs_off26DMgQ);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_sat26DMlP);
    };
    hs_zdcalignment1225vnKD.evaluate = function (hs_ds26DMgV) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    hs_zdcsizzeOf1225vnKH.evaluate = function (hs_ds26DMgZ) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    this.hs_zdfStorableInt8.data = [hs_zdcsizzeOf1225vnKH, hs_zdcalignment1225vnKD, $hs.modules.GHCziStorable.hs_readInt8OffPtr, $hs.modules.GHCziStorable.hs_writeInt8OffPtr, hs_zdcpeekByteOff1225vnKR, hs_zdcpokeByteOff1225vnKP, hs_zdcpeek1225vnKN, hs_zdcpoke1225vnKL];
    hs_zdcpoke1225vnKL.evaluate = function (hs_ptr26DMh9) {
        var hs_sat26DMlQ = new $hs.Data(1);
        hs_sat26DMlQ.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_ptr26DMh9, hs_sat26DMlQ);
    };
    hs_zdcpeek1225vnKN.evaluate = function (hs_ptr26DMhc) {
        var hs_sat26DMlR = new $hs.Data(1);
        hs_sat26DMlR.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_ptr26DMhc, hs_sat26DMlR);
    };
    hs_zdcpokeByteOff1225vnKP.evaluate = function (hs_ptr26DMhg, hs_off26DMhh) {
        var hs_sat26DMlS = new $hs.Thunk();
        hs_sat26DMlS.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMhg, hs_off26DMhh);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_sat26DMlS);
    };
    hs_zdcpeekByteOff1225vnKR.evaluate = function (hs_ptr26DMhl, hs_off26DMhm) {
        var hs_sat26DMlT = new $hs.Thunk();
        hs_sat26DMlT.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMhl, hs_off26DMhm);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_sat26DMlT);
    };
    hs_zdcalignment1325vnL9.evaluate = function (hs_ds26DMhr) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    hs_zdcsizzeOf1325vnLd.evaluate = function (hs_ds26DMhv) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    this.hs_zdfStorableInt16.data = [hs_zdcsizzeOf1325vnLd, hs_zdcalignment1325vnL9, $hs.modules.GHCziStorable.hs_readInt16OffPtr, $hs.modules.GHCziStorable.hs_writeInt16OffPtr, hs_zdcpeekByteOff1325vnLn, hs_zdcpokeByteOff1325vnLl, hs_zdcpeek1325vnLj, hs_zdcpoke1325vnLh];
    hs_zdcpoke1325vnLh.evaluate = function (hs_ptr26DMhF) {
        var hs_sat26DMlU = new $hs.Data(1);
        hs_sat26DMlU.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_ptr26DMhF, hs_sat26DMlU);
    };
    hs_zdcpeek1325vnLj.evaluate = function (hs_ptr26DMhI) {
        var hs_sat26DMlV = new $hs.Data(1);
        hs_sat26DMlV.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_ptr26DMhI, hs_sat26DMlV);
    };
    hs_zdcpokeByteOff1325vnLl.evaluate = function (hs_ptr26DMhM, hs_off26DMhN) {
        var hs_sat26DMlW = new $hs.Thunk();
        hs_sat26DMlW.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMhM, hs_off26DMhN);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_sat26DMlW);
    };
    hs_zdcpeekByteOff1325vnLn.evaluate = function (hs_ptr26DMhR, hs_off26DMhS) {
        var hs_sat26DMlX = new $hs.Thunk();
        hs_sat26DMlX.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMhR, hs_off26DMhS);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_sat26DMlX);
    };
    hs_zdcalignment1425vnLF.evaluate = function (hs_ds26DMhX) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1425vnLJ.evaluate = function (hs_ds26DMi1) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableInt32.data = [hs_zdcsizzeOf1425vnLJ, hs_zdcalignment1425vnLF, $hs.modules.GHCziStorable.hs_readInt32OffPtr, $hs.modules.GHCziStorable.hs_writeInt32OffPtr, hs_zdcpeekByteOff1425vnLT, hs_zdcpokeByteOff1425vnLR, hs_zdcpeek1425vnLP, hs_zdcpoke1425vnLN];
    hs_zdcpoke1425vnLN.evaluate = function (hs_ptr26DMib) {
        var hs_sat26DMlY = new $hs.Data(1);
        hs_sat26DMlY.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_ptr26DMib, hs_sat26DMlY);
    };
    hs_zdcpeek1425vnLP.evaluate = function (hs_ptr26DMie) {
        var hs_sat26DMlZ = new $hs.Data(1);
        hs_sat26DMlZ.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_ptr26DMie, hs_sat26DMlZ);
    };
    hs_zdcpokeByteOff1425vnLR.evaluate = function (hs_ptr26DMii, hs_off26DMij) {
        var hs_sat26DMm0 = new $hs.Thunk();
        hs_sat26DMm0.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMii, hs_off26DMij);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DMm0);
    };
    hs_zdcpeekByteOff1425vnLT.evaluate = function (hs_ptr26DMin, hs_off26DMio) {
        var hs_sat26DMm1 = new $hs.Thunk();
        hs_sat26DMm1.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMin, hs_off26DMio);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DMm1);
    };
    hs_zdcsizzeOf1525vnMb.evaluate = function (hs_ds26DMit) {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcalignment1525vnMf.evaluate = function (hs_ds26DMix) {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcpeekElemOff25vnMj.evaluate = function (hs_p26DMiJ, hs_i26DMiL) {
        var hs_sat26DMm3 = new $hs.Thunk();
        hs_sat26DMm3.evaluateOnce = function () {
            var hs_sat26DMm2 = new $hs.Thunk();
            hs_sat26DMm2.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26DMiJ);
            };
            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DMm2, hs_i26DMiL);
        };
        var hs_sat26DMm6 = new $hs.Thunk();
        hs_sat26DMm6.evaluateOnce = function () {
            var hs_ds26DMiE = new $hs.Thunk();
            hs_ds26DMiE.evaluateOnce = function () {
                var hs_sat26DMm4 = new $hs.Thunk();
                hs_sat26DMm4.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DMm4);
            };
            var hs_sat26DMm5 = new $hs.Func(1);
            hs_sat26DMm5.evaluate = function (hs_ds126DMiG) {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_ds126DMiG, hs_ds26DMiE);
            };
            return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DMm5);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DMm6, hs_sat26DMm3);
    };
    hs_zdcpokeElemOff25vnMy.evaluate = function (hs_p26DMiS, hs_i26DMiU, hs_x26DMiV) {
        var hs_sat26DMma = new $hs.Thunk();
        hs_sat26DMma.evaluateOnce = function () {
            var hs_wild26DMm7 = hs_x26DMiV;
            if (hs_x26DMiV.notEvaluated) {
                hs_wild26DMm7 = hs_x26DMiV.hscall();
            }
            switch (hs_wild26DMm7.tag) {
            case 1:
                var hs_sat26DMm8 = new $hs.Thunk();
                hs_sat26DMm8.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DMm8);
            case 2:
                var hs_sat26DMm9 = new $hs.Thunk();
                hs_sat26DMm9.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DMm9);
            }
        };
        var hs_sat26DMmb = new $hs.Thunk();
        hs_sat26DMmb.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26DMiS);
        };
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DMmb, hs_i26DMiU, hs_sat26DMma);
    };
    this.hs_zdfStorableBool.data = [hs_zdcsizzeOf1525vnMb, hs_zdcalignment1525vnMf, hs_zdcpeekElemOff25vnMj, hs_zdcpokeElemOff25vnMy, hs_zdcpeekByteOff1525vnMR, hs_zdcpokeByteOff1525vnMP, hs_zdcpeek1525vnMN, hs_zdcpoke1525vnML];
    hs_zdcpoke1525vnML.evaluate = function (hs_ptr26DMj9) {
        var hs_sat26DMmc = new $hs.Data(1);
        hs_sat26DMmc.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_ptr26DMj9, hs_sat26DMmc);
    };
    hs_zdcpeek1525vnMN.evaluate = function (hs_ptr26DMjc) {
        var hs_sat26DMmd = new $hs.Data(1);
        hs_sat26DMmd.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_ptr26DMjc, hs_sat26DMmd);
    };
    hs_zdcpokeByteOff1525vnMP.evaluate = function (hs_ptr26DMjg, hs_off26DMjh) {
        var hs_sat26DMme = new $hs.Thunk();
        hs_sat26DMme.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMjg, hs_off26DMjh);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_sat26DMme);
    };
    hs_zdcpeekByteOff1525vnMR.evaluate = function (hs_ptr26DMjl, hs_off26DMjm) {
        var hs_sat26DMmf = new $hs.Thunk();
        hs_sat26DMmf.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMjl, hs_off26DMjm);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_sat26DMmf);
    };
    hs_zdcalignment1625vnN9.evaluate = function (hs_ds26DMjr) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1625vnNd.evaluate = function (hs_ds26DMjv) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableInt64.data = [hs_zdcsizzeOf1625vnNd, hs_zdcalignment1625vnN9, $hs.modules.GHCziStorable.hs_readInt64OffPtr, $hs.modules.GHCziStorable.hs_writeInt64OffPtr, hs_zdcpeekByteOff1625vnNn, hs_zdcpokeByteOff1625vnNl, hs_zdcpeek1625vnNj, hs_zdcpoke1625vnNh];
    hs_zdcpoke1625vnNh.evaluate = function (hs_ptr26DMjF) {
        var hs_sat26DMmg = new $hs.Data(1);
        hs_sat26DMmg.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_ptr26DMjF, hs_sat26DMmg);
    };
    hs_zdcpeek1625vnNj.evaluate = function (hs_ptr26DMjI) {
        var hs_sat26DMmh = new $hs.Data(1);
        hs_sat26DMmh.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_ptr26DMjI, hs_sat26DMmh);
    };
    hs_zdcpokeByteOff1625vnNl.evaluate = function (hs_ptr26DMjM, hs_off26DMjN) {
        var hs_sat26DMmi = new $hs.Thunk();
        hs_sat26DMmi.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMjM, hs_off26DMjN);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_sat26DMmi);
    };
    hs_zdcpeekByteOff1625vnNn.evaluate = function (hs_ptr26DMjR, hs_off26DMjS) {
        var hs_sat26DMmj = new $hs.Thunk();
        hs_sat26DMmj.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DMjR, hs_off26DMjS);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_sat26DMmj);
    };
    this.hs_DZCStorable.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
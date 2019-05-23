
$hs.modules.ForeignziStorable = new $hs.Module();
$hs.modules.ForeignziStorable.dependencies = ["GHC.Unit", "GHC.Integer", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Err", "GHC.Classes", "GHC.Int", "GHC.Ptr", "GHC.Storable", "GHC.Word", "Data.Bits"];
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
    this.hs_zdfStorableFingerprint = new $hs.Data(1);
    this.hs_DZCStorable = new $hs.Func(8);
    this.hs_sizzeOf.notEvaluated = true;
    this.hs_sizzeOf.evaluate = function (hs_tpl26Dnpt) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26Dnpt);
    };
    this.hs_alignment.notEvaluated = true;
    this.hs_alignment.evaluate = function (hs_tpl26DnpF) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DnpF);
    };
    this.hs_peekElemOff.notEvaluated = true;
    this.hs_peekElemOff.evaluate = function (hs_tpl26DnpR) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DnpR);
    };
    this.hs_pokeElemOff.notEvaluated = true;
    this.hs_pokeElemOff.evaluate = function (hs_tpl26Dnq3) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26Dnq3);
    };
    this.hs_peekByteOff.notEvaluated = true;
    this.hs_peekByteOff.evaluate = function (hs_tpl26Dnqf) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26Dnqf);
    };
    this.hs_pokeByteOff.notEvaluated = true;
    this.hs_pokeByteOff.evaluate = function (hs_tpl26Dnqr) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26Dnqr);
    };
    this.hs_peek.notEvaluated = true;
    this.hs_peek.evaluate = function (hs_tpl26DnqD) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DnqD);
    };
    this.hs_poke.notEvaluated = true;
    this.hs_poke.evaluate = function (hs_tpl26DnqP) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_tpl26DnqP);
    };
    this.hs_zddmpoke.notEvaluated = true;
    this.hs_zddmpoke.evaluate = function (hs_zddStorable26Dnr2, hs_ptr26Dnr3) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26Dnr2, hs_ptr26Dnr3);
    };
    this.hs_zddmpeek.notEvaluated = true;
    this.hs_zddmpeek.evaluate = function (hs_zddStorable26Dnr7, hs_ptr26Dnr8) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26Dnr7, hs_ptr26Dnr8);
    };
    this.hs_zddmpokeByteOff.notEvaluated = true;
    this.hs_zddmpokeByteOff.evaluate = function (hs_zddStorable26Dnrd, hs_ptr26Dnre, hs_off26Dnrf) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26Dnrd, hs_ptr26Dnre, hs_off26Dnrf);
    };
    this.hs_zddmpeekByteOff.notEvaluated = true;
    this.hs_zddmpeekByteOff.evaluate = function (hs_zddStorable26Dnrk, hs_ptr26Dnrl, hs_off26Dnrm) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26Dnrk, hs_ptr26Dnrl, hs_off26Dnrm);
    };
    this.hs_zddmpokeElemOff.notEvaluated = true;
    this.hs_zddmpokeElemOff.evaluate = function (hs_zddStorable26Dnrs, hs_ptr26Dnrt, hs_off26Dnru, hs_val26Dnrv) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26Dnrs, hs_ptr26Dnrt, hs_off26Dnru, hs_val26Dnrv);
    };
    this.hs_zddmpeekElemOff.notEvaluated = true;
    this.hs_zddmpeekElemOff.evaluate = function (hs_zddStorable26DnrB, hs_ptr26DnrC, hs_off26DnrD) {
        $hs.modules.ForeignziStorable.loadDependencies();
        return this.evaluate(hs_zddStorable26DnrB, hs_ptr26DnrC, hs_off26DnrD);
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
    this.hs_zdfStorableFingerprint.notEvaluated = true;
    this.hs_zdfStorableFingerprint.evaluate = function () {
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
    this.hs_zdfStorableFingerprint.notEvaluated = false;
    this.hs_zdfStorableFingerprint.evaluate = function () {
        return this;
    };
    this.hs_DZCStorable.notEvaluated = false;
    var hs_zdcalignment25uYVq = new $hs.Func(1);
    var hs_zdcsizzeOf25uYVt = new $hs.Func(1);
    var hs_zdcpoke25uYVw = new $hs.Func(1);
    var hs_zdcpeek25uYVx = new $hs.Func(1);
    var hs_zdcpokeByteOff25uYVy = new $hs.Func(2);
    var hs_zdcpeekByteOff25uYVz = new $hs.Func(2);
    var hs_zdcalignment125uYVQ = new $hs.Func(1);
    var hs_zdcsizzeOf125uYVT = new $hs.Func(1);
    var hs_zdcpoke125uYVW = new $hs.Func(1);
    var hs_zdcpeek125uYVX = new $hs.Func(1);
    var hs_zdcpokeByteOff125uYVY = new $hs.Func(2);
    var hs_zdcpeekByteOff125uYVZ = new $hs.Func(2);
    var hs_zdcalignment225uYWg = new $hs.Func(1);
    var hs_zdcsizzeOf225uYWj = new $hs.Func(1);
    var hs_zdcpoke225uYWm = new $hs.Func(1);
    var hs_zdcpeek225uYWn = new $hs.Func(1);
    var hs_zdcpokeByteOff225uYWo = new $hs.Func(2);
    var hs_zdcpeekByteOff225uYWp = new $hs.Func(2);
    var hs_zdcalignment325uYWG = new $hs.Func(1);
    var hs_zdcsizzeOf325uYWJ = new $hs.Func(1);
    var hs_zdcpoke325uYWM = new $hs.Func(1);
    var hs_zdcpeek325uYWN = new $hs.Func(1);
    var hs_zdcpokeByteOff325uYWO = new $hs.Func(2);
    var hs_zdcpeekByteOff325uYWP = new $hs.Func(2);
    var hs_zdcalignment425uYX6 = new $hs.Func(1);
    var hs_zdcsizzeOf425uYX9 = new $hs.Func(1);
    var hs_zdcpoke425uYXc = new $hs.Func(1);
    var hs_zdcpeek425uYXd = new $hs.Func(1);
    var hs_zdcpokeByteOff425uYXe = new $hs.Func(2);
    var hs_zdcpeekByteOff425uYXf = new $hs.Func(2);
    var hs_zdcalignment525uYXw = new $hs.Func(1);
    var hs_zdcsizzeOf525uYXz = new $hs.Func(1);
    var hs_zdcpoke525uYXC = new $hs.Func(1);
    var hs_zdcpeek525uYXD = new $hs.Func(1);
    var hs_zdcpokeByteOff525uYXE = new $hs.Func(2);
    var hs_zdcpeekByteOff525uYXF = new $hs.Func(2);
    var hs_zdcalignment625uYXW = new $hs.Func(1);
    var hs_zdcsizzeOf625uYXZ = new $hs.Func(1);
    var hs_zdcpoke625uYY2 = new $hs.Func(1);
    var hs_zdcpeek625uYY3 = new $hs.Func(1);
    var hs_zdcpokeByteOff625uYY4 = new $hs.Func(2);
    var hs_zdcpeekByteOff625uYY5 = new $hs.Func(2);
    var hs_zdcalignment725uYYm = new $hs.Func(1);
    var hs_zdcsizzeOf725uYYp = new $hs.Func(1);
    var hs_zdcpoke725uYYs = new $hs.Func(1);
    var hs_zdcpeek725uYYt = new $hs.Func(1);
    var hs_zdcpokeByteOff725uYYu = new $hs.Func(2);
    var hs_zdcpeekByteOff725uYYv = new $hs.Func(2);
    var hs_zdcalignment825uYYM = new $hs.Func(1);
    var hs_zdcsizzeOf825uYYP = new $hs.Func(1);
    var hs_zdcpoke825uYYS = new $hs.Func(1);
    var hs_zdcpeek825uYYT = new $hs.Func(1);
    var hs_zdcpokeByteOff825uYYU = new $hs.Func(2);
    var hs_zdcpeekByteOff825uYYV = new $hs.Func(2);
    var hs_zdcalignment925uYZc = new $hs.Func(1);
    var hs_zdcsizzeOf925uYZf = new $hs.Func(1);
    var hs_zdcpoke925uYZi = new $hs.Func(1);
    var hs_zdcpeek925uYZj = new $hs.Func(1);
    var hs_zdcpokeByteOff925uYZk = new $hs.Func(2);
    var hs_zdcpeekByteOff925uYZl = new $hs.Func(2);
    var hs_zdcalignment1025uYZC = new $hs.Func(1);
    var hs_zdcsizzeOf1025uYZF = new $hs.Func(1);
    var hs_zdcpoke1025uYZI = new $hs.Func(1);
    var hs_zdcpeek1025uYZJ = new $hs.Func(1);
    var hs_zdcpokeByteOff1025uYZK = new $hs.Func(2);
    var hs_zdcpeekByteOff1025uYZL = new $hs.Func(2);
    var hs_zdcalignment1125uZ02 = new $hs.Func(1);
    var hs_zdcsizzeOf1125uZ05 = new $hs.Func(1);
    var hs_zdcpoke1125uZ08 = new $hs.Func(1);
    var hs_zdcpeek1125uZ09 = new $hs.Func(1);
    var hs_zdcpokeByteOff1125uZ0a = new $hs.Func(2);
    var hs_zdcpeekByteOff1125uZ0b = new $hs.Func(2);
    var hs_zdcalignment1225uZ0s = new $hs.Func(1);
    var hs_zdcsizzeOf1225uZ0v = new $hs.Func(1);
    var hs_zdcpoke1225uZ0y = new $hs.Func(1);
    var hs_zdcpeek1225uZ0z = new $hs.Func(1);
    var hs_zdcpokeByteOff1225uZ0A = new $hs.Func(2);
    var hs_zdcpeekByteOff1225uZ0B = new $hs.Func(2);
    var hs_zdcalignment1325uZ0S = new $hs.Func(1);
    var hs_zdcsizzeOf1325uZ0V = new $hs.Func(1);
    var hs_zdcpoke1325uZ0Y = new $hs.Func(1);
    var hs_zdcpeek1325uZ0Z = new $hs.Func(1);
    var hs_zdcpokeByteOff1325uZ10 = new $hs.Func(2);
    var hs_zdcpeekByteOff1325uZ11 = new $hs.Func(2);
    var hs_zdcalignment1425uZ1i = new $hs.Func(1);
    var hs_zdcsizzeOf1425uZ1l = new $hs.Func(1);
    var hs_zdcpoke1425uZ1o = new $hs.Func(1);
    var hs_zdcpeek1425uZ1p = new $hs.Func(1);
    var hs_zdcpokeByteOff1425uZ1q = new $hs.Func(2);
    var hs_zdcpeekByteOff1425uZ1r = new $hs.Func(2);
    var hs_zdcsizzeOf1525uZ1I = new $hs.Func(1);
    var hs_zdcalignment1525uZ1L = new $hs.Func(1);
    var hs_zdcpeekElemOff25uZ1O = new $hs.Func(2);
    var hs_zdcpokeElemOff25uZ22 = new $hs.Func(3);
    var hs_zdcpoke1525uZ2e = new $hs.Func(1);
    var hs_zdcpeek1525uZ2f = new $hs.Func(1);
    var hs_zdcpokeByteOff1525uZ2g = new $hs.Func(2);
    var hs_zdcpeekByteOff1525uZ2h = new $hs.Func(2);
    var hs_zdcalignment1625uZ2y = new $hs.Func(1);
    var hs_zdcsizzeOf1625uZ2B = new $hs.Func(1);
    var hs_zdcpoke1625uZ2E = new $hs.Func(1);
    var hs_zdcpeek1625uZ2F = new $hs.Func(1);
    var hs_zdcpokeByteOff1625uZ2G = new $hs.Func(2);
    var hs_zdcpeekByteOff1625uZ2H = new $hs.Func(2);
    var hs_zdcalignment1725uZ2Y = new $hs.Func(1);
    var hs_zdcsizzeOf1725uZ31 = new $hs.Func(1);
    var hs_zdcpeek1725uZ34 = new $hs.Func(1);
    var hs_zdcpoke1725uZ44 = new $hs.Func(2);
    var hs_zdcpokeByteOff1725uZ4L = new $hs.Func(2);
    var hs_zdcpeekByteOff1725uZ4M = new $hs.Func(2);
    var hs_zdcpokeElemOff125uZ4N = new $hs.Func(3);
    var hs_zdcpeekElemOff125uZ4O = new $hs.Func(2);
    this.hs_sizzeOf.evaluate = function (hs_tpl26Dnpt) {
        var hs_tpl26DnBA = hs_tpl26Dnpt;
        if (hs_tpl26Dnpt.notEvaluated) {
            hs_tpl26DnBA = hs_tpl26Dnpt.hscall();
        }
        var hs_tpl26DnpD = hs_tpl26DnBA.data[0];
        if (hs_tpl26DnpD.notEvaluated) {
            return hs_tpl26DnpD.hscall();
        } else {
            return hs_tpl26DnpD;
        }
    };
    this.hs_alignment.evaluate = function (hs_tpl26DnpF) {
        var hs_tpl26DnBI = hs_tpl26DnpF;
        if (hs_tpl26DnpF.notEvaluated) {
            hs_tpl26DnBI = hs_tpl26DnpF.hscall();
        }
        var hs_tpl26DnpP = hs_tpl26DnBI.data[1];
        if (hs_tpl26DnpP.notEvaluated) {
            return hs_tpl26DnpP.hscall();
        } else {
            return hs_tpl26DnpP;
        }
    };
    this.hs_peekElemOff.evaluate = function (hs_tpl26DnpR) {
        var hs_tpl26DnBQ = hs_tpl26DnpR;
        if (hs_tpl26DnpR.notEvaluated) {
            hs_tpl26DnBQ = hs_tpl26DnpR.hscall();
        }
        var hs_tpl26Dnq1 = hs_tpl26DnBQ.data[2];
        if (hs_tpl26Dnq1.notEvaluated) {
            return hs_tpl26Dnq1.hscall();
        } else {
            return hs_tpl26Dnq1;
        }
    };
    this.hs_pokeElemOff.evaluate = function (hs_tpl26Dnq3) {
        var hs_tpl26DnBY = hs_tpl26Dnq3;
        if (hs_tpl26Dnq3.notEvaluated) {
            hs_tpl26DnBY = hs_tpl26Dnq3.hscall();
        }
        var hs_tpl26Dnqd = hs_tpl26DnBY.data[3];
        if (hs_tpl26Dnqd.notEvaluated) {
            return hs_tpl26Dnqd.hscall();
        } else {
            return hs_tpl26Dnqd;
        }
    };
    this.hs_peekByteOff.evaluate = function (hs_tpl26Dnqf) {
        var hs_tpl26DnC6 = hs_tpl26Dnqf;
        if (hs_tpl26Dnqf.notEvaluated) {
            hs_tpl26DnC6 = hs_tpl26Dnqf.hscall();
        }
        var hs_tpl26Dnqp = hs_tpl26DnC6.data[4];
        if (hs_tpl26Dnqp.notEvaluated) {
            return hs_tpl26Dnqp.hscall();
        } else {
            return hs_tpl26Dnqp;
        }
    };
    this.hs_pokeByteOff.evaluate = function (hs_tpl26Dnqr) {
        var hs_tpl26DnCe = hs_tpl26Dnqr;
        if (hs_tpl26Dnqr.notEvaluated) {
            hs_tpl26DnCe = hs_tpl26Dnqr.hscall();
        }
        var hs_tpl26DnqB = hs_tpl26DnCe.data[5];
        if (hs_tpl26DnqB.notEvaluated) {
            return hs_tpl26DnqB.hscall();
        } else {
            return hs_tpl26DnqB;
        }
    };
    this.hs_peek.evaluate = function (hs_tpl26DnqD) {
        var hs_tpl26DnCm = hs_tpl26DnqD;
        if (hs_tpl26DnqD.notEvaluated) {
            hs_tpl26DnCm = hs_tpl26DnqD.hscall();
        }
        var hs_tpl26DnqN = hs_tpl26DnCm.data[6];
        if (hs_tpl26DnqN.notEvaluated) {
            return hs_tpl26DnqN.hscall();
        } else {
            return hs_tpl26DnqN;
        }
    };
    this.hs_poke.evaluate = function (hs_tpl26DnqP) {
        var hs_tpl26DnCu = hs_tpl26DnqP;
        if (hs_tpl26DnqP.notEvaluated) {
            hs_tpl26DnCu = hs_tpl26DnqP.hscall();
        }
        var hs_tpl26DnqZ = hs_tpl26DnCu.data[7];
        if (hs_tpl26DnqZ.notEvaluated) {
            return hs_tpl26DnqZ.hscall();
        } else {
            return hs_tpl26DnqZ;
        }
    };
    this.hs_zddmpoke.evaluate = function (hs_zddStorable26Dnr2, hs_ptr26Dnr3) {
        var hs_sat26DnCv = new $hs.Data(1);
        hs_sat26DnCv.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall(hs_zddStorable26Dnr2, hs_ptr26Dnr3, hs_sat26DnCv);
    };
    this.hs_zddmpeek.evaluate = function (hs_zddStorable26Dnr7, hs_ptr26Dnr8) {
        var hs_sat26DnCw = new $hs.Data(1);
        hs_sat26DnCw.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall(hs_zddStorable26Dnr7, hs_ptr26Dnr8, hs_sat26DnCw);
    };
    this.hs_zddmpokeByteOff.evaluate = function (hs_zddStorable26Dnrd, hs_ptr26Dnre, hs_off26Dnrf) {
        var hs_sat26DnCx = new $hs.Thunk();
        hs_sat26DnCx.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnre, hs_off26Dnrf);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall(hs_zddStorable26Dnrd, hs_sat26DnCx);
    };
    this.hs_zddmpeekByteOff.evaluate = function (hs_zddStorable26Dnrk, hs_ptr26Dnrl, hs_off26Dnrm) {
        var hs_sat26DnCy = new $hs.Thunk();
        hs_sat26DnCy.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnrl, hs_off26Dnrm);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall(hs_zddStorable26Dnrk, hs_sat26DnCy);
    };
    this.hs_zddmpokeElemOff.evaluate = function (hs_zddStorable26Dnrs, hs_ptr26Dnrt, hs_off26Dnru, hs_val26Dnrv) {
        var hs_sat26DnCz = new $hs.Thunk();
        hs_sat26DnCz.evaluateOnce = function () {
            var hs_sat26DnCA = new $hs.Thunk();
            hs_sat26DnCA.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26Dnrs, hs_val26Dnrv);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26Dnru, hs_sat26DnCA);
        };
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall(hs_zddStorable26Dnrs, hs_ptr26Dnrt, hs_sat26DnCz, hs_val26Dnrv);
    };
    this.hs_zddmpeekElemOff.evaluate = function (hs_zddStorable26DnrB, hs_ptr26DnrC, hs_off26DnrD) {
        var hs_sat26DnCB = new $hs.Thunk();
        hs_sat26DnCB.evaluateOnce = function () {
            var hs_sat26DnCC = new $hs.Thunk();
            hs_sat26DnCC.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall(hs_zddStorable26DnrB, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26DnrD, hs_sat26DnCC);
        };
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall(hs_zddStorable26DnrB, hs_ptr26DnrC, hs_sat26DnCB);
    };
    hs_zdcalignment25uYVq.evaluate = function (hs_ds26DnrI) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf25uYVt.evaluate = function (hs_ds26DnrL) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableChar.data = [hs_zdcsizzeOf25uYVt, hs_zdcalignment25uYVq, $hs.modules.GHCziStorable.hs_readWideCharOffPtr, $hs.modules.GHCziStorable.hs_writeWideCharOffPtr, hs_zdcpeekByteOff25uYVz, hs_zdcpokeByteOff25uYVy, hs_zdcpeek25uYVx, hs_zdcpoke25uYVw];
    hs_zdcpoke25uYVw.evaluate = function (hs_ptr26DnrR) {
        var hs_sat26DnCD = new $hs.Data(1);
        hs_sat26DnCD.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_ptr26DnrR, hs_sat26DnCD);
    };
    hs_zdcpeek25uYVx.evaluate = function (hs_ptr26DnrU) {
        var hs_sat26DnCE = new $hs.Data(1);
        hs_sat26DnCE.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_ptr26DnrU, hs_sat26DnCE);
    };
    hs_zdcpokeByteOff25uYVy.evaluate = function (hs_ptr26DnrY, hs_off26DnrZ) {
        var hs_sat26DnCF = new $hs.Thunk();
        hs_sat26DnCF.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnrY, hs_off26DnrZ);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26DnCF);
    };
    hs_zdcpeekByteOff25uYVz.evaluate = function (hs_ptr26Dns3, hs_off26Dns4) {
        var hs_sat26DnCG = new $hs.Thunk();
        hs_sat26DnCG.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dns3, hs_off26Dns4);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableChar, hs_sat26DnCG);
    };
    hs_zdcalignment125uYVQ.evaluate = function (hs_ds26Dns8) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf125uYVT.evaluate = function (hs_ds26Dnsb) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableInt.data = [hs_zdcsizzeOf125uYVT, hs_zdcalignment125uYVQ, $hs.modules.GHCziStorable.hs_readIntOffPtr, $hs.modules.GHCziStorable.hs_writeIntOffPtr, hs_zdcpeekByteOff125uYVZ, hs_zdcpokeByteOff125uYVY, hs_zdcpeek125uYVX, hs_zdcpoke125uYVW];
    hs_zdcpoke125uYVW.evaluate = function (hs_ptr26Dnsh) {
        var hs_sat26DnCH = new $hs.Data(1);
        hs_sat26DnCH.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_ptr26Dnsh, hs_sat26DnCH);
    };
    hs_zdcpeek125uYVX.evaluate = function (hs_ptr26Dnsk) {
        var hs_sat26DnCI = new $hs.Data(1);
        hs_sat26DnCI.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_ptr26Dnsk, hs_sat26DnCI);
    };
    hs_zdcpokeByteOff125uYVY.evaluate = function (hs_ptr26Dnso, hs_off26Dnsp) {
        var hs_sat26DnCJ = new $hs.Thunk();
        hs_sat26DnCJ.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnso, hs_off26Dnsp);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_sat26DnCJ);
    };
    hs_zdcpeekByteOff125uYVZ.evaluate = function (hs_ptr26Dnst, hs_off26Dnsu) {
        var hs_sat26DnCK = new $hs.Thunk();
        hs_sat26DnCK.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnst, hs_off26Dnsu);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt, hs_sat26DnCK);
    };
    hs_zdcalignment225uYWg.evaluate = function (hs_ds26Dnsy) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf225uYWj.evaluate = function (hs_ds26DnsB) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableWord.data = [hs_zdcsizzeOf225uYWj, hs_zdcalignment225uYWg, $hs.modules.GHCziStorable.hs_readWordOffPtr, $hs.modules.GHCziStorable.hs_writeWordOffPtr, hs_zdcpeekByteOff225uYWp, hs_zdcpokeByteOff225uYWo, hs_zdcpeek225uYWn, hs_zdcpoke225uYWm];
    hs_zdcpoke225uYWm.evaluate = function (hs_ptr26DnsH) {
        var hs_sat26DnCL = new $hs.Data(1);
        hs_sat26DnCL.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_ptr26DnsH, hs_sat26DnCL);
    };
    hs_zdcpeek225uYWn.evaluate = function (hs_ptr26DnsK) {
        var hs_sat26DnCM = new $hs.Data(1);
        hs_sat26DnCM.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_ptr26DnsK, hs_sat26DnCM);
    };
    hs_zdcpokeByteOff225uYWo.evaluate = function (hs_ptr26DnsO, hs_off26DnsP) {
        var hs_sat26DnCN = new $hs.Thunk();
        hs_sat26DnCN.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnsO, hs_off26DnsP);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_sat26DnCN);
    };
    hs_zdcpeekByteOff225uYWp.evaluate = function (hs_ptr26DnsT, hs_off26DnsU) {
        var hs_sat26DnCO = new $hs.Thunk();
        hs_sat26DnCO.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnsT, hs_off26DnsU);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord, hs_sat26DnCO);
    };
    hs_zdcalignment325uYWG.evaluate = function (hs_ds26DnsY) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf325uYWJ.evaluate = function (hs_ds26Dnt1) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorablePtr.data = [hs_zdcsizzeOf325uYWJ, hs_zdcalignment325uYWG, $hs.modules.GHCziStorable.hs_readPtrOffPtr, $hs.modules.GHCziStorable.hs_writePtrOffPtr, hs_zdcpeekByteOff325uYWP, hs_zdcpokeByteOff325uYWO, hs_zdcpeek325uYWN, hs_zdcpoke325uYWM];
    hs_zdcpoke325uYWM.evaluate = function (hs_ptr26Dnt7) {
        var hs_sat26DnCP = new $hs.Data(1);
        hs_sat26DnCP.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_ptr26Dnt7, hs_sat26DnCP);
    };
    hs_zdcpeek325uYWN.evaluate = function (hs_ptr26Dnta) {
        var hs_sat26DnCQ = new $hs.Data(1);
        hs_sat26DnCQ.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_ptr26Dnta, hs_sat26DnCQ);
    };
    hs_zdcpokeByteOff325uYWO.evaluate = function (hs_ptr26Dnte, hs_off26Dntf) {
        var hs_sat26DnCR = new $hs.Thunk();
        hs_sat26DnCR.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnte, hs_off26Dntf);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26DnCR);
    };
    hs_zdcpeekByteOff325uYWP.evaluate = function (hs_ptr26Dntj, hs_off26Dntk) {
        var hs_sat26DnCS = new $hs.Thunk();
        hs_sat26DnCS.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dntj, hs_off26Dntk);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorablePtr, hs_sat26DnCS);
    };
    hs_zdcalignment425uYX6.evaluate = function (hs_ds26Dnto) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf425uYX9.evaluate = function (hs_ds26Dntr) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableFunPtr.data = [hs_zdcsizzeOf425uYX9, hs_zdcalignment425uYX6, $hs.modules.GHCziStorable.hs_readFunPtrOffPtr, $hs.modules.GHCziStorable.hs_writeFunPtrOffPtr, hs_zdcpeekByteOff425uYXf, hs_zdcpokeByteOff425uYXe, hs_zdcpeek425uYXd, hs_zdcpoke425uYXc];
    hs_zdcpoke425uYXc.evaluate = function (hs_ptr26Dntx) {
        var hs_sat26DnCT = new $hs.Data(1);
        hs_sat26DnCT.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_ptr26Dntx, hs_sat26DnCT);
    };
    hs_zdcpeek425uYXd.evaluate = function (hs_ptr26DntA) {
        var hs_sat26DnCU = new $hs.Data(1);
        hs_sat26DnCU.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_ptr26DntA, hs_sat26DnCU);
    };
    hs_zdcpokeByteOff425uYXe.evaluate = function (hs_ptr26DntE, hs_off26DntF) {
        var hs_sat26DnCV = new $hs.Thunk();
        hs_sat26DnCV.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DntE, hs_off26DntF);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_sat26DnCV);
    };
    hs_zdcpeekByteOff425uYXf.evaluate = function (hs_ptr26DntJ, hs_off26DntK) {
        var hs_sat26DnCW = new $hs.Thunk();
        hs_sat26DnCW.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DntJ, hs_off26DntK);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFunPtr, hs_sat26DnCW);
    };
    hs_zdcalignment525uYXw.evaluate = function (hs_ds26DntO) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf525uYXz.evaluate = function (hs_ds26DntR) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableStablePtr.data = [hs_zdcsizzeOf525uYXz, hs_zdcalignment525uYXw, $hs.modules.GHCziStorable.hs_readStablePtrOffPtr, $hs.modules.GHCziStorable.hs_writeStablePtrOffPtr, hs_zdcpeekByteOff525uYXF, hs_zdcpokeByteOff525uYXE, hs_zdcpeek525uYXD, hs_zdcpoke525uYXC];
    hs_zdcpoke525uYXC.evaluate = function (hs_ptr26DntX) {
        var hs_sat26DnCX = new $hs.Data(1);
        hs_sat26DnCX.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_ptr26DntX, hs_sat26DnCX);
    };
    hs_zdcpeek525uYXD.evaluate = function (hs_ptr26Dnu0) {
        var hs_sat26DnCY = new $hs.Data(1);
        hs_sat26DnCY.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_ptr26Dnu0, hs_sat26DnCY);
    };
    hs_zdcpokeByteOff525uYXE.evaluate = function (hs_ptr26Dnu4, hs_off26Dnu5) {
        var hs_sat26DnCZ = new $hs.Thunk();
        hs_sat26DnCZ.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnu4, hs_off26Dnu5);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_sat26DnCZ);
    };
    hs_zdcpeekByteOff525uYXF.evaluate = function (hs_ptr26Dnu9, hs_off26Dnua) {
        var hs_sat26DnD0 = new $hs.Thunk();
        hs_sat26DnD0.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnu9, hs_off26Dnua);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableStablePtr, hs_sat26DnD0);
    };
    hs_zdcalignment625uYXW.evaluate = function (hs_ds26Dnue) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf625uYXZ.evaluate = function (hs_ds26Dnuh) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableFloat.data = [hs_zdcsizzeOf625uYXZ, hs_zdcalignment625uYXW, $hs.modules.GHCziStorable.hs_readFloatOffPtr, $hs.modules.GHCziStorable.hs_writeFloatOffPtr, hs_zdcpeekByteOff625uYY5, hs_zdcpokeByteOff625uYY4, hs_zdcpeek625uYY3, hs_zdcpoke625uYY2];
    hs_zdcpoke625uYY2.evaluate = function (hs_ptr26Dnun) {
        var hs_sat26DnD1 = new $hs.Data(1);
        hs_sat26DnD1.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_ptr26Dnun, hs_sat26DnD1);
    };
    hs_zdcpeek625uYY3.evaluate = function (hs_ptr26Dnuq) {
        var hs_sat26DnD2 = new $hs.Data(1);
        hs_sat26DnD2.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_ptr26Dnuq, hs_sat26DnD2);
    };
    hs_zdcpokeByteOff625uYY4.evaluate = function (hs_ptr26Dnuu, hs_off26Dnuv) {
        var hs_sat26DnD3 = new $hs.Thunk();
        hs_sat26DnD3.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnuu, hs_off26Dnuv);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_sat26DnD3);
    };
    hs_zdcpeekByteOff625uYY5.evaluate = function (hs_ptr26Dnuz, hs_off26DnuA) {
        var hs_sat26DnD4 = new $hs.Thunk();
        hs_sat26DnD4.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnuz, hs_off26DnuA);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFloat, hs_sat26DnD4);
    };
    hs_zdcalignment725uYYm.evaluate = function (hs_ds26DnuE) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf725uYYp.evaluate = function (hs_ds26DnuH) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableDouble.data = [hs_zdcsizzeOf725uYYp, hs_zdcalignment725uYYm, $hs.modules.GHCziStorable.hs_readDoubleOffPtr, $hs.modules.GHCziStorable.hs_writeDoubleOffPtr, hs_zdcpeekByteOff725uYYv, hs_zdcpokeByteOff725uYYu, hs_zdcpeek725uYYt, hs_zdcpoke725uYYs];
    hs_zdcpoke725uYYs.evaluate = function (hs_ptr26DnuN) {
        var hs_sat26DnD5 = new $hs.Data(1);
        hs_sat26DnD5.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_ptr26DnuN, hs_sat26DnD5);
    };
    hs_zdcpeek725uYYt.evaluate = function (hs_ptr26DnuQ) {
        var hs_sat26DnD6 = new $hs.Data(1);
        hs_sat26DnD6.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_ptr26DnuQ, hs_sat26DnD6);
    };
    hs_zdcpokeByteOff725uYYu.evaluate = function (hs_ptr26DnuU, hs_off26DnuV) {
        var hs_sat26DnD7 = new $hs.Thunk();
        hs_sat26DnD7.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnuU, hs_off26DnuV);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_sat26DnD7);
    };
    hs_zdcpeekByteOff725uYYv.evaluate = function (hs_ptr26DnuZ, hs_off26Dnv0) {
        var hs_sat26DnD8 = new $hs.Thunk();
        hs_sat26DnD8.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnuZ, hs_off26Dnv0);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableDouble, hs_sat26DnD8);
    };
    hs_zdcalignment825uYYM.evaluate = function (hs_ds26Dnv4) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    hs_zdcsizzeOf825uYYP.evaluate = function (hs_ds26Dnv7) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    this.hs_zdfStorableWord8.data = [hs_zdcsizzeOf825uYYP, hs_zdcalignment825uYYM, $hs.modules.GHCziStorable.hs_readWord8OffPtr, $hs.modules.GHCziStorable.hs_writeWord8OffPtr, hs_zdcpeekByteOff825uYYV, hs_zdcpokeByteOff825uYYU, hs_zdcpeek825uYYT, hs_zdcpoke825uYYS];
    hs_zdcpoke825uYYS.evaluate = function (hs_ptr26Dnvd) {
        var hs_sat26DnD9 = new $hs.Data(1);
        hs_sat26DnD9.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_ptr26Dnvd, hs_sat26DnD9);
    };
    hs_zdcpeek825uYYT.evaluate = function (hs_ptr26Dnvg) {
        var hs_sat26DnDa = new $hs.Data(1);
        hs_sat26DnDa.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_ptr26Dnvg, hs_sat26DnDa);
    };
    hs_zdcpokeByteOff825uYYU.evaluate = function (hs_ptr26Dnvk, hs_off26Dnvl) {
        var hs_sat26DnDb = new $hs.Thunk();
        hs_sat26DnDb.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnvk, hs_off26Dnvl);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DnDb);
    };
    hs_zdcpeekByteOff825uYYV.evaluate = function (hs_ptr26Dnvp, hs_off26Dnvq) {
        var hs_sat26DnDc = new $hs.Thunk();
        hs_sat26DnDc.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnvp, hs_off26Dnvq);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DnDc);
    };
    hs_zdcalignment925uYZc.evaluate = function (hs_ds26Dnvu) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    hs_zdcsizzeOf925uYZf.evaluate = function (hs_ds26Dnvx) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    this.hs_zdfStorableWord16.data = [hs_zdcsizzeOf925uYZf, hs_zdcalignment925uYZc, $hs.modules.GHCziStorable.hs_readWord16OffPtr, $hs.modules.GHCziStorable.hs_writeWord16OffPtr, hs_zdcpeekByteOff925uYZl, hs_zdcpokeByteOff925uYZk, hs_zdcpeek925uYZj, hs_zdcpoke925uYZi];
    hs_zdcpoke925uYZi.evaluate = function (hs_ptr26DnvD) {
        var hs_sat26DnDd = new $hs.Data(1);
        hs_sat26DnDd.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_ptr26DnvD, hs_sat26DnDd);
    };
    hs_zdcpeek925uYZj.evaluate = function (hs_ptr26DnvG) {
        var hs_sat26DnDe = new $hs.Data(1);
        hs_sat26DnDe.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_ptr26DnvG, hs_sat26DnDe);
    };
    hs_zdcpokeByteOff925uYZk.evaluate = function (hs_ptr26DnvK, hs_off26DnvL) {
        var hs_sat26DnDf = new $hs.Thunk();
        hs_sat26DnDf.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnvK, hs_off26DnvL);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_sat26DnDf);
    };
    hs_zdcpeekByteOff925uYZl.evaluate = function (hs_ptr26DnvP, hs_off26DnvQ) {
        var hs_sat26DnDg = new $hs.Thunk();
        hs_sat26DnDg.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnvP, hs_off26DnvQ);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord16, hs_sat26DnDg);
    };
    hs_zdcalignment1025uYZC.evaluate = function (hs_ds26DnvU) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1025uYZF.evaluate = function (hs_ds26DnvX) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableWord32.data = [hs_zdcsizzeOf1025uYZF, hs_zdcalignment1025uYZC, $hs.modules.GHCziStorable.hs_readWord32OffPtr, $hs.modules.GHCziStorable.hs_writeWord32OffPtr, hs_zdcpeekByteOff1025uYZL, hs_zdcpokeByteOff1025uYZK, hs_zdcpeek1025uYZJ, hs_zdcpoke1025uYZI];
    hs_zdcpoke1025uYZI.evaluate = function (hs_ptr26Dnw3) {
        var hs_sat26DnDh = new $hs.Data(1);
        hs_sat26DnDh.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26Dnw3, hs_sat26DnDh);
    };
    hs_zdcpeek1025uYZJ.evaluate = function (hs_ptr26Dnw6) {
        var hs_sat26DnDi = new $hs.Data(1);
        hs_sat26DnDi.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26Dnw6, hs_sat26DnDi);
    };
    hs_zdcpokeByteOff1025uYZK.evaluate = function (hs_ptr26Dnwa, hs_off26Dnwb) {
        var hs_sat26DnDj = new $hs.Thunk();
        hs_sat26DnDj.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnwa, hs_off26Dnwb);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_sat26DnDj);
    };
    hs_zdcpeekByteOff1025uYZL.evaluate = function (hs_ptr26Dnwf, hs_off26Dnwg) {
        var hs_sat26DnDk = new $hs.Thunk();
        hs_sat26DnDk.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnwf, hs_off26Dnwg);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_sat26DnDk);
    };
    hs_zdcalignment1125uZ02.evaluate = function (hs_ds26Dnwk) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1125uZ05.evaluate = function (hs_ds26Dnwn) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableWord64.data = [hs_zdcsizzeOf1125uZ05, hs_zdcalignment1125uZ02, $hs.modules.GHCziStorable.hs_readWord64OffPtr, $hs.modules.GHCziStorable.hs_writeWord64OffPtr, hs_zdcpeekByteOff1125uZ0b, hs_zdcpokeByteOff1125uZ0a, hs_zdcpeek1125uZ09, hs_zdcpoke1125uZ08];
    hs_zdcpoke1125uZ08.evaluate = function (hs_ptr26Dnwt) {
        var hs_sat26DnDl = new $hs.Data(1);
        hs_sat26DnDl.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_ptr26Dnwt, hs_sat26DnDl);
    };
    hs_zdcpeek1125uZ09.evaluate = function (hs_ptr26Dnww) {
        var hs_sat26DnDm = new $hs.Data(1);
        hs_sat26DnDm.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_ptr26Dnww, hs_sat26DnDm);
    };
    hs_zdcpokeByteOff1125uZ0a.evaluate = function (hs_ptr26DnwA, hs_off26DnwB) {
        var hs_sat26DnDn = new $hs.Thunk();
        hs_sat26DnDn.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnwA, hs_off26DnwB);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_sat26DnDn);
    };
    hs_zdcpeekByteOff1125uZ0b.evaluate = function (hs_ptr26DnwF, hs_off26DnwG) {
        var hs_sat26DnDo = new $hs.Thunk();
        hs_sat26DnDo.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnwF, hs_off26DnwG);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord64, hs_sat26DnDo);
    };
    hs_zdcalignment1225uZ0s.evaluate = function (hs_ds26DnwK) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    hs_zdcsizzeOf1225uZ0v.evaluate = function (hs_ds26DnwN) {
        var $res = new $hs.Data(1);
        $res.data = [1];
        return $res;
    };
    this.hs_zdfStorableInt8.data = [hs_zdcsizzeOf1225uZ0v, hs_zdcalignment1225uZ0s, $hs.modules.GHCziStorable.hs_readInt8OffPtr, $hs.modules.GHCziStorable.hs_writeInt8OffPtr, hs_zdcpeekByteOff1225uZ0B, hs_zdcpokeByteOff1225uZ0A, hs_zdcpeek1225uZ0z, hs_zdcpoke1225uZ0y];
    hs_zdcpoke1225uZ0y.evaluate = function (hs_ptr26DnwT) {
        var hs_sat26DnDp = new $hs.Data(1);
        hs_sat26DnDp.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_ptr26DnwT, hs_sat26DnDp);
    };
    hs_zdcpeek1225uZ0z.evaluate = function (hs_ptr26DnwW) {
        var hs_sat26DnDq = new $hs.Data(1);
        hs_sat26DnDq.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_ptr26DnwW, hs_sat26DnDq);
    };
    hs_zdcpokeByteOff1225uZ0A.evaluate = function (hs_ptr26Dnx0, hs_off26Dnx1) {
        var hs_sat26DnDr = new $hs.Thunk();
        hs_sat26DnDr.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnx0, hs_off26Dnx1);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_sat26DnDr);
    };
    hs_zdcpeekByteOff1225uZ0B.evaluate = function (hs_ptr26Dnx5, hs_off26Dnx6) {
        var hs_sat26DnDs = new $hs.Thunk();
        hs_sat26DnDs.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnx5, hs_off26Dnx6);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt8, hs_sat26DnDs);
    };
    hs_zdcalignment1325uZ0S.evaluate = function (hs_ds26Dnxa) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    hs_zdcsizzeOf1325uZ0V.evaluate = function (hs_ds26Dnxd) {
        var $res = new $hs.Data(1);
        $res.data = [2];
        return $res;
    };
    this.hs_zdfStorableInt16.data = [hs_zdcsizzeOf1325uZ0V, hs_zdcalignment1325uZ0S, $hs.modules.GHCziStorable.hs_readInt16OffPtr, $hs.modules.GHCziStorable.hs_writeInt16OffPtr, hs_zdcpeekByteOff1325uZ11, hs_zdcpokeByteOff1325uZ10, hs_zdcpeek1325uZ0Z, hs_zdcpoke1325uZ0Y];
    hs_zdcpoke1325uZ0Y.evaluate = function (hs_ptr26Dnxj) {
        var hs_sat26DnDt = new $hs.Data(1);
        hs_sat26DnDt.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_ptr26Dnxj, hs_sat26DnDt);
    };
    hs_zdcpeek1325uZ0Z.evaluate = function (hs_ptr26Dnxm) {
        var hs_sat26DnDu = new $hs.Data(1);
        hs_sat26DnDu.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_ptr26Dnxm, hs_sat26DnDu);
    };
    hs_zdcpokeByteOff1325uZ10.evaluate = function (hs_ptr26Dnxq, hs_off26Dnxr) {
        var hs_sat26DnDv = new $hs.Thunk();
        hs_sat26DnDv.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnxq, hs_off26Dnxr);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_sat26DnDv);
    };
    hs_zdcpeekByteOff1325uZ11.evaluate = function (hs_ptr26Dnxv, hs_off26Dnxw) {
        var hs_sat26DnDw = new $hs.Thunk();
        hs_sat26DnDw.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnxv, hs_off26Dnxw);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt16, hs_sat26DnDw);
    };
    hs_zdcalignment1425uZ1i.evaluate = function (hs_ds26DnxA) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1425uZ1l.evaluate = function (hs_ds26DnxD) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    this.hs_zdfStorableInt32.data = [hs_zdcsizzeOf1425uZ1l, hs_zdcalignment1425uZ1i, $hs.modules.GHCziStorable.hs_readInt32OffPtr, $hs.modules.GHCziStorable.hs_writeInt32OffPtr, hs_zdcpeekByteOff1425uZ1r, hs_zdcpokeByteOff1425uZ1q, hs_zdcpeek1425uZ1p, hs_zdcpoke1425uZ1o];
    hs_zdcpoke1425uZ1o.evaluate = function (hs_ptr26DnxJ) {
        var hs_sat26DnDx = new $hs.Data(1);
        hs_sat26DnDx.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_ptr26DnxJ, hs_sat26DnDx);
    };
    hs_zdcpeek1425uZ1p.evaluate = function (hs_ptr26DnxM) {
        var hs_sat26DnDy = new $hs.Data(1);
        hs_sat26DnDy.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_ptr26DnxM, hs_sat26DnDy);
    };
    hs_zdcpokeByteOff1425uZ1q.evaluate = function (hs_ptr26DnxQ, hs_off26DnxR) {
        var hs_sat26DnDz = new $hs.Thunk();
        hs_sat26DnDz.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnxQ, hs_off26DnxR);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DnDz);
    };
    hs_zdcpeekByteOff1425uZ1r.evaluate = function (hs_ptr26DnxV, hs_off26DnxW) {
        var hs_sat26DnDA = new $hs.Thunk();
        hs_sat26DnDA.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnxV, hs_off26DnxW);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DnDA);
    };
    hs_zdcsizzeOf1525uZ1I.evaluate = function (hs_ds26Dny0) {
        return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcalignment1525uZ1L.evaluate = function (hs_ds26Dny3) {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcpeekElemOff25uZ1O.evaluate = function (hs_p26Dnye, hs_i26Dnyg) {
        var hs_sat26DnDC = new $hs.Thunk();
        hs_sat26DnDC.evaluateOnce = function () {
            var hs_sat26DnDF = new $hs.Thunk();
            hs_sat26DnDF.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Dnye);
            };
            return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DnDF, hs_i26Dnyg);
        };
        var hs_sat26DnDB = new $hs.Thunk();
        hs_sat26DnDB.evaluateOnce = function () {
            var hs_ds26Dny9 = new $hs.Thunk();
            hs_ds26Dny9.evaluateOnce = function () {
                var hs_sat26DnDE = new $hs.Thunk();
                hs_sat26DnDE.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DnDE);
            };
            var hs_sat26DnDD = new $hs.Func(1);
            hs_sat26DnDD.evaluate = function (hs_ds126Dnyb) {
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziInt.hs_zdfEqInt32, hs_ds126Dnyb, hs_ds26Dny9);
            };
            return $hs.modules.ControlziMonad.hs_liftM.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnDD);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DnDB, hs_sat26DnDC);
    };
    hs_zdcpokeElemOff25uZ22.evaluate = function (hs_p26Dnym, hs_i26Dnyo, hs_x26Dnyp) {
        var hs_sat26DnDH = new $hs.Thunk();
        hs_sat26DnDH.evaluateOnce = function () {
            var hs_wild26DnDJ = hs_x26Dnyp;
            if (hs_x26Dnyp.notEvaluated) {
                hs_wild26DnDJ = hs_x26Dnyp.hscall();
            }
            switch (hs_wild26DnDJ.tag) {
            case 1:
                var hs_sat26DnDK = new $hs.Thunk();
                hs_sat26DnDK.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DnDK);
            case 2:
                var hs_sat26DnDI = new $hs.Thunk();
                hs_sat26DnDI.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziInt.hs_zdfNumInt32, hs_sat26DnDI);
            }
        };
        var hs_sat26DnDG = new $hs.Thunk();
        hs_sat26DnDG.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Dnym);
        };
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt32, hs_sat26DnDG, hs_i26Dnyo, hs_sat26DnDH);
    };
    this.hs_zdfStorableBool.data = [hs_zdcsizzeOf1525uZ1I, hs_zdcalignment1525uZ1L, hs_zdcpeekElemOff25uZ1O, hs_zdcpokeElemOff25uZ22, hs_zdcpeekByteOff1525uZ2h, hs_zdcpokeByteOff1525uZ2g, hs_zdcpeek1525uZ2f, hs_zdcpoke1525uZ2e];
    hs_zdcpoke1525uZ2e.evaluate = function (hs_ptr26Dnyz) {
        var hs_sat26DnDL = new $hs.Data(1);
        hs_sat26DnDL.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_ptr26Dnyz, hs_sat26DnDL);
    };
    hs_zdcpeek1525uZ2f.evaluate = function (hs_ptr26DnyC) {
        var hs_sat26DnDM = new $hs.Data(1);
        hs_sat26DnDM.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_ptr26DnyC, hs_sat26DnDM);
    };
    hs_zdcpokeByteOff1525uZ2g.evaluate = function (hs_ptr26DnyG, hs_off26DnyH) {
        var hs_sat26DnDN = new $hs.Thunk();
        hs_sat26DnDN.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnyG, hs_off26DnyH);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_sat26DnDN);
    };
    hs_zdcpeekByteOff1525uZ2h.evaluate = function (hs_ptr26DnyL, hs_off26DnyM) {
        var hs_sat26DnDO = new $hs.Thunk();
        hs_sat26DnDO.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnyL, hs_off26DnyM);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableBool, hs_sat26DnDO);
    };
    hs_zdcalignment1625uZ2y.evaluate = function (hs_ds26DnyQ) {
        var $res = new $hs.Data(1);
        $res.data = [4];
        return $res;
    };
    hs_zdcsizzeOf1625uZ2B.evaluate = function (hs_ds26DnyT) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    this.hs_zdfStorableInt64.data = [hs_zdcsizzeOf1625uZ2B, hs_zdcalignment1625uZ2y, $hs.modules.GHCziStorable.hs_readInt64OffPtr, $hs.modules.GHCziStorable.hs_writeInt64OffPtr, hs_zdcpeekByteOff1625uZ2H, hs_zdcpokeByteOff1625uZ2G, hs_zdcpeek1625uZ2F, hs_zdcpoke1625uZ2E];
    hs_zdcpoke1625uZ2E.evaluate = function (hs_ptr26DnyZ) {
        var hs_sat26DnDP = new $hs.Data(1);
        hs_sat26DnDP.data = [0];
        return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_ptr26DnyZ, hs_sat26DnDP);
    };
    hs_zdcpeek1625uZ2F.evaluate = function (hs_ptr26Dnz2) {
        var hs_sat26DnDQ = new $hs.Data(1);
        hs_sat26DnDQ.data = [0];
        return $hs.modules.ForeignziStorable.hs_peekElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_ptr26Dnz2, hs_sat26DnDQ);
    };
    hs_zdcpokeByteOff1625uZ2G.evaluate = function (hs_ptr26Dnz6, hs_off26Dnz7) {
        var hs_sat26DnDR = new $hs.Thunk();
        hs_sat26DnDR.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnz6, hs_off26Dnz7);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_sat26DnDR);
    };
    hs_zdcpeekByteOff1625uZ2H.evaluate = function (hs_ptr26Dnzb, hs_off26Dnzc) {
        var hs_sat26DnDS = new $hs.Thunk();
        hs_sat26DnDS.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26Dnzb, hs_off26Dnzc);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableInt64, hs_sat26DnDS);
    };
    hs_zdcalignment1725uZ2Y.evaluate = function (hs_ds26Dnzg) {
        var $res = new $hs.Data(1);
        $res.data = [8];
        return $res;
    };
    hs_zdcsizzeOf1725uZ31.evaluate = function (hs_ds26Dnzj) {
        var $res = new $hs.Data(1);
        $res.data = [16];
        return $res;
    };
    hs_zdcpeek1725uZ34.evaluate = function (hs_p026DnzU) {
        var hs_peekW6426DnzF = new $hs.Func(3);
        hs_peekW6426DnzF.evaluate = function (hs_ds26Dnzv, hs_ds126Dnzq, hs_i26Dnzy) {
            var hs_wild26DnzH = hs_ds126Dnzq;
            if (hs_ds126Dnzq.notEvaluated) {
                hs_wild26DnzH = hs_ds126Dnzq.hscall();
            }
            var hs_ds226Dnzt = hs_wild26DnzH.data[0];
            var hs_ds326DnE0 = hs_ds226Dnzt;
            if (hs_ds226Dnzt.notEvaluated) {
                hs_ds326DnE0 = hs_ds226Dnzt.hscall();
            }
            switch (hs_ds326DnE0) {
            case 0:
                var hs_i126DnzT = hs_i26Dnzy;
                if (hs_i26Dnzy.notEvaluated) {
                    hs_i126DnzT = hs_i26Dnzy.hscall();
                }
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_i126DnzT);
            default:
                var hs_ds426DnzB = hs_ds26Dnzv;
                if (hs_ds26Dnzv.notEvaluated) {
                    hs_ds426DnzB = hs_ds26Dnzv.hscall();
                }
                var hs_i126DnzK = hs_i26Dnzy;
                if (hs_i26Dnzy.notEvaluated) {
                    hs_i126DnzK = hs_i26Dnzy.hscall();
                }
                var hs_sat26DnE4 = new $hs.Func(1);
                hs_sat26DnE4.evaluate = function (hs_w826DnzN) {
                    var hs_sat26DnE6 = new $hs.Thunk();
                    hs_sat26DnE6.evaluateOnce = function () {
                        var hs_sat26DnEb = new $hs.Thunk();
                        hs_sat26DnEb.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord8, $hs.modules.GHCziWord.hs_zdfNumWord64, hs_w826DnzN);
                        };
                        var hs_sat26DnEa = new $hs.Thunk();
                        hs_sat26DnEa.evaluateOnce = function () {
                            var hs_sat26DnEc = new $hs.Data(1);
                            hs_sat26DnEc.data = [8];
                            return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_i126DnzK, hs_sat26DnEc);
                        };
                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_sat26DnEa, hs_sat26DnEb);
                    };
                    var hs_sat26DnE7 = new $hs.Thunk();
                    hs_sat26DnE7.evaluateOnce = function () {
                        var hs_sat26DnE9 = new $hs.Data(1);
                        hs_sat26DnE9.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild26DnzH, hs_sat26DnE9);
                    };
                    var hs_sat26DnE5 = new $hs.Thunk();
                    hs_sat26DnE5.evaluateOnce = function () {
                        var hs_sat26DnE8 = new $hs.Data(1);
                        hs_sat26DnE8.data = [1];
                        return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ds426DnzB, hs_sat26DnE8);
                    };
                    return hs_peekW6426DnzF.hscall(hs_sat26DnE5, hs_sat26DnE7, hs_sat26DnE6);
                };
                var hs_sat26DnE1 = new $hs.Thunk();
                hs_sat26DnE1.evaluateOnce = function () {
                    return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_ds426DnzB);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnE1, hs_sat26DnE4);
            }
        };
        var hs_sat26DnDU = new $hs.Func(1);
        hs_sat26DnDU.evaluate = function (hs_high26DnA9) {
            var hs_sat26DnEe = new $hs.Func(1);
            hs_sat26DnEe.evaluate = function (hs_low26DnAc) {
                var hs_sat26DnEl = new $hs.Thunk();
                hs_sat26DnEl.evaluateOnce = function () {
                    var hs_tpl26DnAf = hs_high26DnA9;
                    if (hs_high26DnA9.notEvaluated) {
                        hs_tpl26DnAf = hs_high26DnA9.hscall();
                    }
                    var hs_tpl126DnAg = hs_low26DnAc;
                    if (hs_low26DnAc.notEvaluated) {
                        hs_tpl126DnAg = hs_low26DnAc.hscall();
                    }
                    var $res = new $hs.Data(1);
                    $res.data = [hs_tpl26DnAf, hs_tpl126DnAg];
                    return $res;
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnEl);
            };
            var hs_sat26DnEd = new $hs.Thunk();
            hs_sat26DnEd.evaluateOnce = function () {
                var hs_sat26DnEg = new $hs.Thunk();
                hs_sat26DnEg.evaluateOnce = function () {
                    var hs_sat26DnEk = new $hs.Thunk();
                    hs_sat26DnEk.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DnEk);
                };
                var hs_sat26DnEh = new $hs.Data(1);
                hs_sat26DnEh.data = [8];
                var hs_sat26DnEf = new $hs.Thunk();
                hs_sat26DnEf.evaluateOnce = function () {
                    var hs_sat26DnEj = new $hs.Data(1);
                    hs_sat26DnEj.data = [8];
                    var hs_sat26DnEi = new $hs.Thunk();
                    hs_sat26DnEi.evaluateOnce = function () {
                        return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p026DnzU);
                    };
                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_sat26DnEi, hs_sat26DnEj);
                };
                return hs_peekW6426DnzF.hscall(hs_sat26DnEf, hs_sat26DnEh, hs_sat26DnEg);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnEd, hs_sat26DnEe);
        };
        var hs_sat26DnDT = new $hs.Thunk();
        hs_sat26DnDT.evaluateOnce = function () {
            var hs_sat26DnDW = new $hs.Thunk();
            hs_sat26DnDW.evaluateOnce = function () {
                var hs_sat26DnDY = new $hs.Thunk();
                hs_sat26DnDY.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                };
                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord64, hs_sat26DnDY);
            };
            var hs_sat26DnDX = new $hs.Data(1);
            hs_sat26DnDX.data = [8];
            var hs_sat26DnDV = new $hs.Thunk();
            hs_sat26DnDV.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p026DnzU);
            };
            return hs_peekW6426DnzF.hscall(hs_sat26DnDV, hs_sat26DnDX, hs_sat26DnDW);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnDT, hs_sat26DnDU);
    };
    hs_zdcpoke1725uZ44.evaluate = function (hs_p026DnAQ, hs_ds26DnAn) {
        var hs_wild26DnEp = hs_ds26DnAn;
        if (hs_ds26DnAn.notEvaluated) {
            hs_wild26DnEp = hs_ds26DnAn.hscall();
        }
        var hs_high26DnAT = hs_wild26DnEp.data[0];
        var hs_low26DnAZ = hs_wild26DnEp.data[1];
        var hs_pokeW6426DnAL = new $hs.Func(3);
        hs_pokeW6426DnAL.evaluate = function (hs_ds126DnAD, hs_ds226DnAv, hs_ds326DnAA) {
            var hs_wild126DnAE = hs_ds226DnAv;
            if (hs_ds226DnAv.notEvaluated) {
                hs_wild126DnAE = hs_ds226DnAv.hscall();
            }
            var hs_ds426DnAy = hs_wild126DnAE.data[0];
            var hs_ds526DnEt = hs_ds426DnAy;
            if (hs_ds426DnAy.notEvaluated) {
                hs_ds526DnEt = hs_ds426DnAy.hscall();
            }
            switch (hs_ds526DnEt) {
            case 0:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            default:
                var hs_ds626DnAH = hs_ds326DnAA;
                if (hs_ds326DnAA.notEvaluated) {
                    hs_ds626DnAH = hs_ds326DnAA.hscall();
                }
                var hs_sat26DnEw = new $hs.Thunk();
                hs_sat26DnEw.evaluateOnce = function () {
                    var hs_sat26DnEB = new $hs.Thunk();
                    hs_sat26DnEB.evaluateOnce = function () {
                        var hs_sat26DnED = new $hs.Data(1);
                        hs_sat26DnED.data = [8];
                        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord64, hs_ds626DnAH, hs_sat26DnED);
                    };
                    var hs_sat26DnEA = new $hs.Thunk();
                    hs_sat26DnEA.evaluateOnce = function () {
                        var hs_sat26DnEC = new $hs.Data(1);
                        hs_sat26DnEC.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126DnAE, hs_sat26DnEC);
                    };
                    return hs_pokeW6426DnAL.hscall(hs_ds126DnAD, hs_sat26DnEA, hs_sat26DnEB);
                };
                var hs_sat26DnEu = new $hs.Thunk();
                hs_sat26DnEu.evaluateOnce = function () {
                    var hs_sat26DnEy = new $hs.Thunk();
                    hs_sat26DnEy.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziWord.hs_zdfIntegralWord64, $hs.modules.GHCziWord.hs_zdfNumWord8, hs_ds626DnAH);
                    };
                    var hs_sat26DnEx = new $hs.Thunk();
                    hs_sat26DnEx.evaluateOnce = function () {
                        var hs_sat26DnEz = new $hs.Data(1);
                        hs_sat26DnEz.data = [1];
                        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_wild126DnAE, hs_sat26DnEz);
                    };
                    return $hs.modules.ForeignziStorable.hs_pokeElemOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_ds126DnAD, hs_sat26DnEx, hs_sat26DnEy);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnEu, hs_sat26DnEw);
            }
        };
        var hs_sat26DnEq = new $hs.Thunk();
        hs_sat26DnEq.evaluateOnce = function () {
            var hs_sat26DnEF = new $hs.Data(1);
            hs_sat26DnEF.data = [8];
            var hs_sat26DnEE = new $hs.Thunk();
            hs_sat26DnEE.evaluateOnce = function () {
                var hs_sat26DnEH = new $hs.Data(1);
                hs_sat26DnEH.data = [8];
                var hs_sat26DnEG = new $hs.Thunk();
                hs_sat26DnEG.evaluateOnce = function () {
                    return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p026DnAQ);
                };
                return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_sat26DnEG, hs_sat26DnEH);
            };
            return hs_pokeW6426DnAL.hscall(hs_sat26DnEE, hs_sat26DnEF, hs_low26DnAZ);
        };
        var hs_sat26DnEo = new $hs.Thunk();
        hs_sat26DnEo.evaluateOnce = function () {
            var hs_sat26DnEs = new $hs.Data(1);
            hs_sat26DnEs.data = [8];
            var hs_sat26DnEr = new $hs.Thunk();
            hs_sat26DnEr.evaluateOnce = function () {
                return $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p026DnAQ);
            };
            return hs_pokeW6426DnAL.hscall(hs_sat26DnEr, hs_sat26DnEs, hs_high26DnAT);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DnEo, hs_sat26DnEq);
    };
    this.hs_zdfStorableFingerprint.data = [hs_zdcsizzeOf1725uZ31, hs_zdcalignment1725uZ2Y, hs_zdcpeekElemOff125uZ4O, hs_zdcpokeElemOff125uZ4N, hs_zdcpeekByteOff1725uZ4M, hs_zdcpokeByteOff1725uZ4L, hs_zdcpeek1725uZ34, hs_zdcpoke1725uZ44];
    hs_zdcpokeByteOff1725uZ4L.evaluate = function (hs_ptr26DnB7, hs_off26DnB8) {
        var hs_sat26DnEI = new $hs.Thunk();
        hs_sat26DnEI.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnB7, hs_off26DnB8);
        };
        return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_sat26DnEI);
    };
    hs_zdcpeekByteOff1725uZ4M.evaluate = function (hs_ptr26DnBc, hs_off26DnBd) {
        var hs_sat26DnEJ = new $hs.Thunk();
        hs_sat26DnEJ.evaluateOnce = function () {
            return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_ptr26DnBc, hs_off26DnBd);
        };
        return $hs.modules.ForeignziStorable.hs_peek.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_sat26DnEJ);
    };
    hs_zdcpokeElemOff125uZ4N.evaluate = function (hs_ptr26DnBi, hs_off26DnBj, hs_val26DnBk) {
        var hs_sat26DnEK = new $hs.Thunk();
        hs_sat26DnEK.evaluateOnce = function () {
            var hs_sat26DnEL = new $hs.Thunk();
            hs_sat26DnEL.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_val26DnBk);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26DnBj, hs_sat26DnEL);
        };
        return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_ptr26DnBi, hs_sat26DnEK, hs_val26DnBk);
    };
    hs_zdcpeekElemOff125uZ4O.evaluate = function (hs_ptr26DnBp, hs_off26DnBq) {
        var hs_sat26DnEM = new $hs.Thunk();
        hs_sat26DnEM.evaluateOnce = function () {
            var hs_sat26DnEN = new $hs.Thunk();
            hs_sat26DnEN.evaluateOnce = function () {
                return $hs.modules.ForeignziStorable.hs_sizzeOf.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, $hs.modules.GHCziErr.hs_undefined);
            };
            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_off26DnBq, hs_sat26DnEN);
        };
        return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableFingerprint, hs_ptr26DnBp, hs_sat26DnEM);
    };
    this.hs_DZCStorable.evaluate = function (hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
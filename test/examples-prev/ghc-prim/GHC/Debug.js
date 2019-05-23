
$hs.modules.GHCziDebug = new $hs.Module();
$hs.modules.GHCziDebug.dependencies = ["GHC.Unit"];
$hs.modules.GHCziDebug.initBeforeDependencies = function () {
    this.hs_debugLn = new $hs.Func(2);
    this.hs_debugErrLn = new $hs.Func(2);
    this.hs_debugLn.notEvaluated = true;
    this.hs_debugLn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziDebug.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_debugErrLn.notEvaluated = true;
    this.hs_debugErrLn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziDebug.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziDebug.initAfterDependencies = function () {
    this.hs_debugLn.notEvaluated = false;
    this.hs_debugErrLn.notEvaluated = false;
    var hs_mkMBA25r5kI = new $hs.Func(2);
    var hs_a25r5mI = new $hs.Func(2);
    var hs_a125r5mY = new $hs.Func(2);
    hs_mkMBA25r5kI.evaluate = function (hs_s026ztSt, hs_xs26ztSq) {
        var hs_len26ztSn = new $hs.Func(2);
        hs_len26ztSn.evaluate = function (hs_l26ztSk, hs_ds26ztSi) {
            var hs_wild26ztTt = hs_ds26ztSi;
            if (hs_ds26ztSi.notEvaluated) {
                hs_wild26ztTt = hs_ds26ztSi.hscall();
            }
            switch (hs_wild26ztTt.tag) {
            case 1:
                if (hs_l26ztSk.notEvaluated) {
                    return hs_l26ztSk.hscall();
                } else {
                    return hs_l26ztSk;
                }
            case 2:
                var hs_xszq26ztSp = hs_wild26ztTt.data[1];
                var hs_sat26ztTu = ($hs.Int.addCarry(hs_l26ztSk, 1, 0))[0];
                return hs_len26ztSn.hscall(hs_sat26ztTu, hs_xszq26ztSp);
            }
        };
        var hs_l26ztSs = hs_len26ztSn.hscall(1, hs_xs26ztSq);
        throw "primitive operation newByteArray#. Not implemeted yet.";
        var hs_s126ztST = hs_wild26ztTx[0];
        var hs_mba26ztSS = hs_wild26ztTx[1];
        var hs_write26ztSO = new $hs.Func(4);
        hs_write26ztSO.evaluate = function (hs_mba126ztSE, hs_offset26ztSF, hs_ds26ztSC, hs_s26ztSG) {
            var hs_wild126ztTw = hs_ds26ztSC;
            if (hs_ds26ztSC.notEvaluated) {
                hs_wild126ztTw = hs_ds26ztSC.hscall();
            }
            switch (hs_wild126ztTw.tag) {
            case 1:
                throw "primitive operation writeCharArray#. Not implemeted yet.";
            case 2:
                var hs_ds126ztSJ = hs_wild126ztTw.data[0];
                var hs_xszq26ztSQ = hs_wild126ztTw.data[1];
                var hs_wild226ztTz = hs_ds126ztSJ;
                if (hs_ds126ztSJ.notEvaluated) {
                    hs_wild226ztTz = hs_ds126ztSJ.hscall();
                }
                var hs_x26ztSM = hs_wild226ztTz.data[0];
                throw "primitive operation writeCharArray#. Not implemeted yet.";
                var hs_sat26ztTy = ($hs.Int.addCarry(hs_offset26ztSF, 1, 0))[0];
                return hs_write26ztSO.hscall(hs_mba126ztSE, hs_sat26ztTy, hs_xszq26ztSQ, hs_szq26ztSR);
            }
        };
        var hs_s226ztSV = hs_write26ztSO.hscall(hs_mba26ztSS, 0, hs_xs26ztSq, hs_s126ztST);
        return [hs_s226ztSV, hs_mba26ztSS];
    };
    hs_a25r5mI.evaluate = function (hs_xs26ztT2, hs_s026ztT1) {
        var hs_wild26ztTB = hs_mkMBA25r5kI.hscall(hs_s026ztT1, hs_xs26ztT2);
        var hs_s126ztT8 = hs_wild26ztTB[0];
        var hs_mba26ztT7 = hs_wild26ztTB[1];
        var hs_wild126ztTA = [hs_s126ztT8, debugLn(hs_mba26ztT7)];
        var hs_ds26ztTc = hs_wild126ztTA[0];
        return [hs_ds26ztTc, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_debugLn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a25r5mI.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a125r5mY.evaluate = function (hs_xs26ztTi, hs_s026ztTh) {
        var hs_wild26ztTD = hs_mkMBA25r5kI.hscall(hs_s026ztTh, hs_xs26ztTi);
        var hs_s126ztTo = hs_wild26ztTD[0];
        var hs_mba26ztTn = hs_wild26ztTD[1];
        var hs_wild126ztTC = [hs_s126ztTo, debugErrLn(hs_mba26ztTn)];
        var hs_ds26ztTs = hs_wild126ztTC[0];
        return [hs_ds26ztTs, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_debugErrLn.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a125r5mY.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};

$hs.modules.GHCziStorable = new $hs.Module();
$hs.modules.GHCziStorable.dependencies = ["GHC.Unit", "GHC.Base"];
$hs.modules.GHCziStorable.initBeforeDependencies = function () {
    this.hs_writeWord64OffPtr = new $hs.Func(3);
    this.hs_writeInt64OffPtr = new $hs.Func(3);
    this.hs_writeWord32OffPtr = new $hs.Func(3);
    this.hs_writeInt32OffPtr = new $hs.Func(3);
    this.hs_writeWord16OffPtr = new $hs.Func(3);
    this.hs_writeInt16OffPtr = new $hs.Func(3);
    this.hs_writeWord8OffPtr = new $hs.Func(3);
    this.hs_writeInt8OffPtr = new $hs.Func(3);
    this.hs_writeStablePtrOffPtr = new $hs.Func(3);
    this.hs_writeDoubleOffPtr = new $hs.Func(3);
    this.hs_writeFloatOffPtr = new $hs.Func(3);
    this.hs_writeFunPtrOffPtr = new $hs.Func(3);
    this.hs_writePtrOffPtr = new $hs.Func(3);
    this.hs_writeWordOffPtr = new $hs.Func(3);
    this.hs_writeIntOffPtr = new $hs.Func(3);
    this.hs_writeWideCharOffPtr = new $hs.Func(3);
    this.hs_readWord64OffPtr = new $hs.Func(2);
    this.hs_readInt64OffPtr = new $hs.Func(2);
    this.hs_readWord32OffPtr = new $hs.Func(2);
    this.hs_readInt32OffPtr = new $hs.Func(2);
    this.hs_readWord16OffPtr = new $hs.Func(2);
    this.hs_readInt16OffPtr = new $hs.Func(2);
    this.hs_readWord8OffPtr = new $hs.Func(2);
    this.hs_readInt8OffPtr = new $hs.Func(2);
    this.hs_readStablePtrOffPtr = new $hs.Func(2);
    this.hs_readDoubleOffPtr = new $hs.Func(2);
    this.hs_readFloatOffPtr = new $hs.Func(2);
    this.hs_readFunPtrOffPtr = new $hs.Func(2);
    this.hs_readPtrOffPtr = new $hs.Func(2);
    this.hs_readWordOffPtr = new $hs.Func(2);
    this.hs_readIntOffPtr = new $hs.Func(2);
    this.hs_readWideCharOffPtr = new $hs.Func(2);
    this.hs_writeWord64OffPtr.notEvaluated = true;
    this.hs_writeWord64OffPtr.evaluate = function (hs_ds26DB94, hs_ds126DB97, hs_ds226DB9a) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DB94, hs_ds126DB97, hs_ds226DB9a);
    };
    this.hs_writeInt64OffPtr.notEvaluated = true;
    this.hs_writeInt64OffPtr.evaluate = function (hs_ds26DB9r, hs_ds126DB9u, hs_ds226DB9x) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DB9r, hs_ds126DB9u, hs_ds226DB9x);
    };
    this.hs_writeWord32OffPtr.notEvaluated = true;
    this.hs_writeWord32OffPtr.evaluate = function (hs_ds26DB9O, hs_ds126DB9R, hs_ds226DB9U) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DB9O, hs_ds126DB9R, hs_ds226DB9U);
    };
    this.hs_writeInt32OffPtr.notEvaluated = true;
    this.hs_writeInt32OffPtr.evaluate = function (hs_ds26DBab, hs_ds126DBae, hs_ds226DBah) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBab, hs_ds126DBae, hs_ds226DBah);
    };
    this.hs_writeWord16OffPtr.notEvaluated = true;
    this.hs_writeWord16OffPtr.evaluate = function (hs_ds26DBay, hs_ds126DBaB, hs_ds226DBaE) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBay, hs_ds126DBaB, hs_ds226DBaE);
    };
    this.hs_writeInt16OffPtr.notEvaluated = true;
    this.hs_writeInt16OffPtr.evaluate = function (hs_ds26DBaV, hs_ds126DBaY, hs_ds226DBb1) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBaV, hs_ds126DBaY, hs_ds226DBb1);
    };
    this.hs_writeWord8OffPtr.notEvaluated = true;
    this.hs_writeWord8OffPtr.evaluate = function (hs_ds26DBbi, hs_ds126DBbl, hs_ds226DBbo) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBbi, hs_ds126DBbl, hs_ds226DBbo);
    };
    this.hs_writeInt8OffPtr.notEvaluated = true;
    this.hs_writeInt8OffPtr.evaluate = function (hs_ds26DBbF, hs_ds126DBbI, hs_ds226DBbL) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBbF, hs_ds126DBbI, hs_ds226DBbL);
    };
    this.hs_writeStablePtrOffPtr.notEvaluated = true;
    this.hs_writeStablePtrOffPtr.evaluate = function (hs_ds26DBc2, hs_ds126DBc5, hs_ds226DBc8) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBc2, hs_ds126DBc5, hs_ds226DBc8);
    };
    this.hs_writeDoubleOffPtr.notEvaluated = true;
    this.hs_writeDoubleOffPtr.evaluate = function (hs_ds26DBcp, hs_ds126DBcs, hs_ds226DBcv) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBcp, hs_ds126DBcs, hs_ds226DBcv);
    };
    this.hs_writeFloatOffPtr.notEvaluated = true;
    this.hs_writeFloatOffPtr.evaluate = function (hs_ds26DBcM, hs_ds126DBcP, hs_ds226DBcS) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBcM, hs_ds126DBcP, hs_ds226DBcS);
    };
    this.hs_writeFunPtrOffPtr.notEvaluated = true;
    this.hs_writeFunPtrOffPtr.evaluate = function (hs_ds26DBd9, hs_ds126DBdc, hs_ds226DBdf) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBd9, hs_ds126DBdc, hs_ds226DBdf);
    };
    this.hs_writePtrOffPtr.notEvaluated = true;
    this.hs_writePtrOffPtr.evaluate = function (hs_ds26DBdw, hs_ds126DBdz, hs_ds226DBdC) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBdw, hs_ds126DBdz, hs_ds226DBdC);
    };
    this.hs_writeWordOffPtr.notEvaluated = true;
    this.hs_writeWordOffPtr.evaluate = function (hs_ds26DBdT, hs_ds126DBdW, hs_ds226DBdZ) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBdT, hs_ds126DBdW, hs_ds226DBdZ);
    };
    this.hs_writeIntOffPtr.notEvaluated = true;
    this.hs_writeIntOffPtr.evaluate = function (hs_ds26DBeg, hs_ds126DBej, hs_ds226DBem) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBeg, hs_ds126DBej, hs_ds226DBem);
    };
    this.hs_writeWideCharOffPtr.notEvaluated = true;
    this.hs_writeWideCharOffPtr.evaluate = function (hs_ds26DBeD, hs_ds126DBeG, hs_ds226DBeJ) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBeD, hs_ds126DBeG, hs_ds226DBeJ);
    };
    this.hs_readWord64OffPtr.notEvaluated = true;
    this.hs_readWord64OffPtr.evaluate = function (hs_ds26DBeZ, hs_ds126DBf2) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBeZ, hs_ds126DBf2);
    };
    this.hs_readInt64OffPtr.notEvaluated = true;
    this.hs_readInt64OffPtr.evaluate = function (hs_ds26DBfl, hs_ds126DBfo) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBfl, hs_ds126DBfo);
    };
    this.hs_readWord32OffPtr.notEvaluated = true;
    this.hs_readWord32OffPtr.evaluate = function (hs_ds26DBfH, hs_ds126DBfK) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBfH, hs_ds126DBfK);
    };
    this.hs_readInt32OffPtr.notEvaluated = true;
    this.hs_readInt32OffPtr.evaluate = function (hs_ds26DBg3, hs_ds126DBg6) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBg3, hs_ds126DBg6);
    };
    this.hs_readWord16OffPtr.notEvaluated = true;
    this.hs_readWord16OffPtr.evaluate = function (hs_ds26DBgp, hs_ds126DBgs) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBgp, hs_ds126DBgs);
    };
    this.hs_readInt16OffPtr.notEvaluated = true;
    this.hs_readInt16OffPtr.evaluate = function (hs_ds26DBgL, hs_ds126DBgO) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBgL, hs_ds126DBgO);
    };
    this.hs_readWord8OffPtr.notEvaluated = true;
    this.hs_readWord8OffPtr.evaluate = function (hs_ds26DBh7, hs_ds126DBha) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBh7, hs_ds126DBha);
    };
    this.hs_readInt8OffPtr.notEvaluated = true;
    this.hs_readInt8OffPtr.evaluate = function (hs_ds26DBht, hs_ds126DBhw) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBht, hs_ds126DBhw);
    };
    this.hs_readStablePtrOffPtr.notEvaluated = true;
    this.hs_readStablePtrOffPtr.evaluate = function (hs_ds26DBhP, hs_ds126DBhS) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBhP, hs_ds126DBhS);
    };
    this.hs_readDoubleOffPtr.notEvaluated = true;
    this.hs_readDoubleOffPtr.evaluate = function (hs_ds26DBib, hs_ds126DBie) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBib, hs_ds126DBie);
    };
    this.hs_readFloatOffPtr.notEvaluated = true;
    this.hs_readFloatOffPtr.evaluate = function (hs_ds26DBix, hs_ds126DBiA) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBix, hs_ds126DBiA);
    };
    this.hs_readFunPtrOffPtr.notEvaluated = true;
    this.hs_readFunPtrOffPtr.evaluate = function (hs_ds26DBiT, hs_ds126DBiW) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBiT, hs_ds126DBiW);
    };
    this.hs_readPtrOffPtr.notEvaluated = true;
    this.hs_readPtrOffPtr.evaluate = function (hs_ds26DBjf, hs_ds126DBji) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBjf, hs_ds126DBji);
    };
    this.hs_readWordOffPtr.notEvaluated = true;
    this.hs_readWordOffPtr.evaluate = function (hs_ds26DBjB, hs_ds126DBjE) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBjB, hs_ds126DBjE);
    };
    this.hs_readIntOffPtr.notEvaluated = true;
    this.hs_readIntOffPtr.evaluate = function (hs_ds26DBjX, hs_ds126DBk0) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBjX, hs_ds126DBk0);
    };
    this.hs_readWideCharOffPtr.notEvaluated = true;
    this.hs_readWideCharOffPtr.evaluate = function (hs_ds26DBkj, hs_ds126DBkm) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DBkj, hs_ds126DBkm);
    };
};
$hs.modules.GHCziStorable.initAfterDependencies = function () {
    this.hs_writeWord64OffPtr.notEvaluated = false;
    this.hs_writeInt64OffPtr.notEvaluated = false;
    this.hs_writeWord32OffPtr.notEvaluated = false;
    this.hs_writeInt32OffPtr.notEvaluated = false;
    this.hs_writeWord16OffPtr.notEvaluated = false;
    this.hs_writeInt16OffPtr.notEvaluated = false;
    this.hs_writeWord8OffPtr.notEvaluated = false;
    this.hs_writeInt8OffPtr.notEvaluated = false;
    this.hs_writeStablePtrOffPtr.notEvaluated = false;
    this.hs_writeDoubleOffPtr.notEvaluated = false;
    this.hs_writeFloatOffPtr.notEvaluated = false;
    this.hs_writeFunPtrOffPtr.notEvaluated = false;
    this.hs_writePtrOffPtr.notEvaluated = false;
    this.hs_writeWordOffPtr.notEvaluated = false;
    this.hs_writeIntOffPtr.notEvaluated = false;
    this.hs_writeWideCharOffPtr.notEvaluated = false;
    this.hs_readWord64OffPtr.notEvaluated = false;
    this.hs_readInt64OffPtr.notEvaluated = false;
    this.hs_readWord32OffPtr.notEvaluated = false;
    this.hs_readInt32OffPtr.notEvaluated = false;
    this.hs_readWord16OffPtr.notEvaluated = false;
    this.hs_readInt16OffPtr.notEvaluated = false;
    this.hs_readWord8OffPtr.notEvaluated = false;
    this.hs_readInt8OffPtr.notEvaluated = false;
    this.hs_readStablePtrOffPtr.notEvaluated = false;
    this.hs_readDoubleOffPtr.notEvaluated = false;
    this.hs_readFloatOffPtr.notEvaluated = false;
    this.hs_readFunPtrOffPtr.notEvaluated = false;
    this.hs_readPtrOffPtr.notEvaluated = false;
    this.hs_readWordOffPtr.notEvaluated = false;
    this.hs_readIntOffPtr.notEvaluated = false;
    this.hs_readWideCharOffPtr.notEvaluated = false;
    this.hs_writeWord64OffPtr.evaluate = function (hs_ds26DB94, hs_ds126DB97, hs_ds226DB9a) {
        var hs_wild26DBkF = hs_ds26DB94;
        if (hs_ds26DB94.notEvaluated) {
            hs_wild26DBkF = hs_ds26DB94.hscall();
        }
        var hs_a26DB9h = hs_wild26DBkF.data[0];
        var hs_wild126DBkE = hs_ds126DB97;
        if (hs_ds126DB97.notEvaluated) {
            hs_wild126DBkE = hs_ds126DB97.hscall();
        }
        var hs_i26DB9i = hs_wild126DBkE.data[0];
        var hs_wild226DBkD = hs_ds226DB9a;
        if (hs_ds226DB9a.notEvaluated) {
            hs_wild226DBkD = hs_ds226DB9a.hscall();
        }
        var hs_x26DB9j = hs_wild226DBkD.data[0];
        var hs_sat26DBkG = new $hs.Func(1);
        hs_sat26DBkG.evaluate = function (hs_s26DB9k) {
            throw "primitive operation writeWord64OffAddr#. Not implemeted yet.";
            return [hs_s226DB9m, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBkH = new $hs.Func(1);
        hs_sat26DBkH.evaluate = function (hs_tpl26DB9e) {
            if (hs_tpl26DB9e.notEvaluated) {
                return hs_tpl26DB9e.hscall();
            } else {
                return hs_tpl26DB9e;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBkH, hs_sat26DBkG);
    };
    this.hs_writeInt64OffPtr.evaluate = function (hs_ds26DB9r, hs_ds126DB9u, hs_ds226DB9x) {
        var hs_wild26DBkK = hs_ds26DB9r;
        if (hs_ds26DB9r.notEvaluated) {
            hs_wild26DBkK = hs_ds26DB9r.hscall();
        }
        var hs_a26DB9E = hs_wild26DBkK.data[0];
        var hs_wild126DBkJ = hs_ds126DB9u;
        if (hs_ds126DB9u.notEvaluated) {
            hs_wild126DBkJ = hs_ds126DB9u.hscall();
        }
        var hs_i26DB9F = hs_wild126DBkJ.data[0];
        var hs_wild226DBkI = hs_ds226DB9x;
        if (hs_ds226DB9x.notEvaluated) {
            hs_wild226DBkI = hs_ds226DB9x.hscall();
        }
        var hs_x26DB9G = hs_wild226DBkI.data[0];
        var hs_sat26DBkL = new $hs.Func(1);
        hs_sat26DBkL.evaluate = function (hs_s26DB9H) {
            throw "primitive operation writeInt64OffAddr#. Not implemeted yet.";
            return [hs_s226DB9J, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBkM = new $hs.Func(1);
        hs_sat26DBkM.evaluate = function (hs_tpl26DB9B) {
            if (hs_tpl26DB9B.notEvaluated) {
                return hs_tpl26DB9B.hscall();
            } else {
                return hs_tpl26DB9B;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBkM, hs_sat26DBkL);
    };
    this.hs_writeWord32OffPtr.evaluate = function (hs_ds26DB9O, hs_ds126DB9R, hs_ds226DB9U) {
        var hs_wild26DBkP = hs_ds26DB9O;
        if (hs_ds26DB9O.notEvaluated) {
            hs_wild26DBkP = hs_ds26DB9O.hscall();
        }
        var hs_a26DBa1 = hs_wild26DBkP.data[0];
        var hs_wild126DBkO = hs_ds126DB9R;
        if (hs_ds126DB9R.notEvaluated) {
            hs_wild126DBkO = hs_ds126DB9R.hscall();
        }
        var hs_i26DBa2 = hs_wild126DBkO.data[0];
        var hs_wild226DBkN = hs_ds226DB9U;
        if (hs_ds226DB9U.notEvaluated) {
            hs_wild226DBkN = hs_ds226DB9U.hscall();
        }
        var hs_x26DBa3 = hs_wild226DBkN.data[0];
        var hs_sat26DBkQ = new $hs.Func(1);
        hs_sat26DBkQ.evaluate = function (hs_s26DBa4) {
            throw "primitive operation writeWord32OffAddr#. Not implemeted yet.";
            return [hs_s226DBa6, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBkR = new $hs.Func(1);
        hs_sat26DBkR.evaluate = function (hs_tpl26DB9Y) {
            if (hs_tpl26DB9Y.notEvaluated) {
                return hs_tpl26DB9Y.hscall();
            } else {
                return hs_tpl26DB9Y;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBkR, hs_sat26DBkQ);
    };
    this.hs_writeInt32OffPtr.evaluate = function (hs_ds26DBab, hs_ds126DBae, hs_ds226DBah) {
        var hs_wild26DBkU = hs_ds26DBab;
        if (hs_ds26DBab.notEvaluated) {
            hs_wild26DBkU = hs_ds26DBab.hscall();
        }
        var hs_a26DBao = hs_wild26DBkU.data[0];
        var hs_wild126DBkT = hs_ds126DBae;
        if (hs_ds126DBae.notEvaluated) {
            hs_wild126DBkT = hs_ds126DBae.hscall();
        }
        var hs_i26DBap = hs_wild126DBkT.data[0];
        var hs_wild226DBkS = hs_ds226DBah;
        if (hs_ds226DBah.notEvaluated) {
            hs_wild226DBkS = hs_ds226DBah.hscall();
        }
        var hs_x26DBaq = hs_wild226DBkS.data[0];
        var hs_sat26DBkV = new $hs.Func(1);
        hs_sat26DBkV.evaluate = function (hs_s26DBar) {
            throw "primitive operation writeInt32OffAddr#. Not implemeted yet.";
            return [hs_s226DBat, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBkW = new $hs.Func(1);
        hs_sat26DBkW.evaluate = function (hs_tpl26DBal) {
            if (hs_tpl26DBal.notEvaluated) {
                return hs_tpl26DBal.hscall();
            } else {
                return hs_tpl26DBal;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBkW, hs_sat26DBkV);
    };
    this.hs_writeWord16OffPtr.evaluate = function (hs_ds26DBay, hs_ds126DBaB, hs_ds226DBaE) {
        var hs_wild26DBkZ = hs_ds26DBay;
        if (hs_ds26DBay.notEvaluated) {
            hs_wild26DBkZ = hs_ds26DBay.hscall();
        }
        var hs_a26DBaL = hs_wild26DBkZ.data[0];
        var hs_wild126DBkY = hs_ds126DBaB;
        if (hs_ds126DBaB.notEvaluated) {
            hs_wild126DBkY = hs_ds126DBaB.hscall();
        }
        var hs_i26DBaM = hs_wild126DBkY.data[0];
        var hs_wild226DBkX = hs_ds226DBaE;
        if (hs_ds226DBaE.notEvaluated) {
            hs_wild226DBkX = hs_ds226DBaE.hscall();
        }
        var hs_x26DBaN = hs_wild226DBkX.data[0];
        var hs_sat26DBl0 = new $hs.Func(1);
        hs_sat26DBl0.evaluate = function (hs_s26DBaO) {
            throw "primitive operation writeWord16OffAddr#. Not implemeted yet.";
            return [hs_s226DBaQ, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBl1 = new $hs.Func(1);
        hs_sat26DBl1.evaluate = function (hs_tpl26DBaI) {
            if (hs_tpl26DBaI.notEvaluated) {
                return hs_tpl26DBaI.hscall();
            } else {
                return hs_tpl26DBaI;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBl1, hs_sat26DBl0);
    };
    this.hs_writeInt16OffPtr.evaluate = function (hs_ds26DBaV, hs_ds126DBaY, hs_ds226DBb1) {
        var hs_wild26DBl4 = hs_ds26DBaV;
        if (hs_ds26DBaV.notEvaluated) {
            hs_wild26DBl4 = hs_ds26DBaV.hscall();
        }
        var hs_a26DBb8 = hs_wild26DBl4.data[0];
        var hs_wild126DBl3 = hs_ds126DBaY;
        if (hs_ds126DBaY.notEvaluated) {
            hs_wild126DBl3 = hs_ds126DBaY.hscall();
        }
        var hs_i26DBb9 = hs_wild126DBl3.data[0];
        var hs_wild226DBl2 = hs_ds226DBb1;
        if (hs_ds226DBb1.notEvaluated) {
            hs_wild226DBl2 = hs_ds226DBb1.hscall();
        }
        var hs_x26DBba = hs_wild226DBl2.data[0];
        var hs_sat26DBl5 = new $hs.Func(1);
        hs_sat26DBl5.evaluate = function (hs_s26DBbb) {
            throw "primitive operation writeInt16OffAddr#. Not implemeted yet.";
            return [hs_s226DBbd, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBl6 = new $hs.Func(1);
        hs_sat26DBl6.evaluate = function (hs_tpl26DBb5) {
            if (hs_tpl26DBb5.notEvaluated) {
                return hs_tpl26DBb5.hscall();
            } else {
                return hs_tpl26DBb5;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBl6, hs_sat26DBl5);
    };
    this.hs_writeWord8OffPtr.evaluate = function (hs_ds26DBbi, hs_ds126DBbl, hs_ds226DBbo) {
        var hs_wild26DBl9 = hs_ds26DBbi;
        if (hs_ds26DBbi.notEvaluated) {
            hs_wild26DBl9 = hs_ds26DBbi.hscall();
        }
        var hs_a26DBbv = hs_wild26DBl9.data[0];
        var hs_wild126DBl8 = hs_ds126DBbl;
        if (hs_ds126DBbl.notEvaluated) {
            hs_wild126DBl8 = hs_ds126DBbl.hscall();
        }
        var hs_i26DBbw = hs_wild126DBl8.data[0];
        var hs_wild226DBl7 = hs_ds226DBbo;
        if (hs_ds226DBbo.notEvaluated) {
            hs_wild226DBl7 = hs_ds226DBbo.hscall();
        }
        var hs_x26DBbx = hs_wild226DBl7.data[0];
        var hs_sat26DBla = new $hs.Func(1);
        hs_sat26DBla.evaluate = function (hs_s26DBby) {
            throw "primitive operation writeWord8OffAddr#. Not implemeted yet.";
            return [hs_s226DBbA, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlb = new $hs.Func(1);
        hs_sat26DBlb.evaluate = function (hs_tpl26DBbs) {
            if (hs_tpl26DBbs.notEvaluated) {
                return hs_tpl26DBbs.hscall();
            } else {
                return hs_tpl26DBbs;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlb, hs_sat26DBla);
    };
    this.hs_writeInt8OffPtr.evaluate = function (hs_ds26DBbF, hs_ds126DBbI, hs_ds226DBbL) {
        var hs_wild26DBle = hs_ds26DBbF;
        if (hs_ds26DBbF.notEvaluated) {
            hs_wild26DBle = hs_ds26DBbF.hscall();
        }
        var hs_a26DBbS = hs_wild26DBle.data[0];
        var hs_wild126DBld = hs_ds126DBbI;
        if (hs_ds126DBbI.notEvaluated) {
            hs_wild126DBld = hs_ds126DBbI.hscall();
        }
        var hs_i26DBbT = hs_wild126DBld.data[0];
        var hs_wild226DBlc = hs_ds226DBbL;
        if (hs_ds226DBbL.notEvaluated) {
            hs_wild226DBlc = hs_ds226DBbL.hscall();
        }
        var hs_x26DBbU = hs_wild226DBlc.data[0];
        var hs_sat26DBlf = new $hs.Func(1);
        hs_sat26DBlf.evaluate = function (hs_s26DBbV) {
            throw "primitive operation writeInt8OffAddr#. Not implemeted yet.";
            return [hs_s226DBbX, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlg = new $hs.Func(1);
        hs_sat26DBlg.evaluate = function (hs_tpl26DBbP) {
            if (hs_tpl26DBbP.notEvaluated) {
                return hs_tpl26DBbP.hscall();
            } else {
                return hs_tpl26DBbP;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlg, hs_sat26DBlf);
    };
    this.hs_writeStablePtrOffPtr.evaluate = function (hs_ds26DBc2, hs_ds126DBc5, hs_ds226DBc8) {
        var hs_wild26DBlj = hs_ds26DBc2;
        if (hs_ds26DBc2.notEvaluated) {
            hs_wild26DBlj = hs_ds26DBc2.hscall();
        }
        var hs_a26DBcf = hs_wild26DBlj.data[0];
        var hs_wild126DBli = hs_ds126DBc5;
        if (hs_ds126DBc5.notEvaluated) {
            hs_wild126DBli = hs_ds126DBc5.hscall();
        }
        var hs_i26DBcg = hs_wild126DBli.data[0];
        var hs_wild226DBlh = hs_ds226DBc8;
        if (hs_ds226DBc8.notEvaluated) {
            hs_wild226DBlh = hs_ds226DBc8.hscall();
        }
        var hs_x26DBch = hs_wild226DBlh.data[0];
        var hs_sat26DBlk = new $hs.Func(1);
        hs_sat26DBlk.evaluate = function (hs_s26DBci) {
            throw "primitive operation writeStablePtrOffAddr#. Not implemeted yet.";
            return [hs_s226DBck, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBll = new $hs.Func(1);
        hs_sat26DBll.evaluate = function (hs_tpl26DBcc) {
            if (hs_tpl26DBcc.notEvaluated) {
                return hs_tpl26DBcc.hscall();
            } else {
                return hs_tpl26DBcc;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBll, hs_sat26DBlk);
    };
    this.hs_writeDoubleOffPtr.evaluate = function (hs_ds26DBcp, hs_ds126DBcs, hs_ds226DBcv) {
        var hs_wild26DBlo = hs_ds26DBcp;
        if (hs_ds26DBcp.notEvaluated) {
            hs_wild26DBlo = hs_ds26DBcp.hscall();
        }
        var hs_a26DBcC = hs_wild26DBlo.data[0];
        var hs_wild126DBln = hs_ds126DBcs;
        if (hs_ds126DBcs.notEvaluated) {
            hs_wild126DBln = hs_ds126DBcs.hscall();
        }
        var hs_i26DBcD = hs_wild126DBln.data[0];
        var hs_wild226DBlm = hs_ds226DBcv;
        if (hs_ds226DBcv.notEvaluated) {
            hs_wild226DBlm = hs_ds226DBcv.hscall();
        }
        var hs_x26DBcE = hs_wild226DBlm.data[0];
        var hs_sat26DBlp = new $hs.Func(1);
        hs_sat26DBlp.evaluate = function (hs_s26DBcF) {
            throw "primitive operation writeDoubleOffAddr#. Not implemeted yet.";
            return [hs_s226DBcH, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlq = new $hs.Func(1);
        hs_sat26DBlq.evaluate = function (hs_tpl26DBcz) {
            if (hs_tpl26DBcz.notEvaluated) {
                return hs_tpl26DBcz.hscall();
            } else {
                return hs_tpl26DBcz;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlq, hs_sat26DBlp);
    };
    this.hs_writeFloatOffPtr.evaluate = function (hs_ds26DBcM, hs_ds126DBcP, hs_ds226DBcS) {
        var hs_wild26DBlt = hs_ds26DBcM;
        if (hs_ds26DBcM.notEvaluated) {
            hs_wild26DBlt = hs_ds26DBcM.hscall();
        }
        var hs_a26DBcZ = hs_wild26DBlt.data[0];
        var hs_wild126DBls = hs_ds126DBcP;
        if (hs_ds126DBcP.notEvaluated) {
            hs_wild126DBls = hs_ds126DBcP.hscall();
        }
        var hs_i26DBd0 = hs_wild126DBls.data[0];
        var hs_wild226DBlr = hs_ds226DBcS;
        if (hs_ds226DBcS.notEvaluated) {
            hs_wild226DBlr = hs_ds226DBcS.hscall();
        }
        var hs_x26DBd1 = hs_wild226DBlr.data[0];
        var hs_sat26DBlu = new $hs.Func(1);
        hs_sat26DBlu.evaluate = function (hs_s26DBd2) {
            throw "primitive operation writeFloatOffAddr#. Not implemeted yet.";
            return [hs_s226DBd4, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlv = new $hs.Func(1);
        hs_sat26DBlv.evaluate = function (hs_tpl26DBcW) {
            if (hs_tpl26DBcW.notEvaluated) {
                return hs_tpl26DBcW.hscall();
            } else {
                return hs_tpl26DBcW;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlv, hs_sat26DBlu);
    };
    this.hs_writeFunPtrOffPtr.evaluate = function (hs_ds26DBd9, hs_ds126DBdc, hs_ds226DBdf) {
        var hs_wild26DBly = hs_ds26DBd9;
        if (hs_ds26DBd9.notEvaluated) {
            hs_wild26DBly = hs_ds26DBd9.hscall();
        }
        var hs_a26DBdm = hs_wild26DBly.data[0];
        var hs_wild126DBlx = hs_ds126DBdc;
        if (hs_ds126DBdc.notEvaluated) {
            hs_wild126DBlx = hs_ds126DBdc.hscall();
        }
        var hs_i26DBdn = hs_wild126DBlx.data[0];
        var hs_wild226DBlw = hs_ds226DBdf;
        if (hs_ds226DBdf.notEvaluated) {
            hs_wild226DBlw = hs_ds226DBdf.hscall();
        }
        var hs_x26DBdo = hs_wild226DBlw.data[0];
        var hs_sat26DBlz = new $hs.Func(1);
        hs_sat26DBlz.evaluate = function (hs_s26DBdp) {
            throw "primitive operation writeAddrOffAddr#. Not implemeted yet.";
            return [hs_s226DBdr, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlA = new $hs.Func(1);
        hs_sat26DBlA.evaluate = function (hs_tpl26DBdj) {
            if (hs_tpl26DBdj.notEvaluated) {
                return hs_tpl26DBdj.hscall();
            } else {
                return hs_tpl26DBdj;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlA, hs_sat26DBlz);
    };
    this.hs_writePtrOffPtr.evaluate = function (hs_ds26DBdw, hs_ds126DBdz, hs_ds226DBdC) {
        var hs_wild26DBlD = hs_ds26DBdw;
        if (hs_ds26DBdw.notEvaluated) {
            hs_wild26DBlD = hs_ds26DBdw.hscall();
        }
        var hs_a26DBdJ = hs_wild26DBlD.data[0];
        var hs_wild126DBlC = hs_ds126DBdz;
        if (hs_ds126DBdz.notEvaluated) {
            hs_wild126DBlC = hs_ds126DBdz.hscall();
        }
        var hs_i26DBdK = hs_wild126DBlC.data[0];
        var hs_wild226DBlB = hs_ds226DBdC;
        if (hs_ds226DBdC.notEvaluated) {
            hs_wild226DBlB = hs_ds226DBdC.hscall();
        }
        var hs_x26DBdL = hs_wild226DBlB.data[0];
        var hs_sat26DBlE = new $hs.Func(1);
        hs_sat26DBlE.evaluate = function (hs_s26DBdM) {
            throw "primitive operation writeAddrOffAddr#. Not implemeted yet.";
            return [hs_s226DBdO, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlF = new $hs.Func(1);
        hs_sat26DBlF.evaluate = function (hs_tpl26DBdG) {
            if (hs_tpl26DBdG.notEvaluated) {
                return hs_tpl26DBdG.hscall();
            } else {
                return hs_tpl26DBdG;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlF, hs_sat26DBlE);
    };
    this.hs_writeWordOffPtr.evaluate = function (hs_ds26DBdT, hs_ds126DBdW, hs_ds226DBdZ) {
        var hs_wild26DBlI = hs_ds26DBdT;
        if (hs_ds26DBdT.notEvaluated) {
            hs_wild26DBlI = hs_ds26DBdT.hscall();
        }
        var hs_a26DBe6 = hs_wild26DBlI.data[0];
        var hs_wild126DBlH = hs_ds126DBdW;
        if (hs_ds126DBdW.notEvaluated) {
            hs_wild126DBlH = hs_ds126DBdW.hscall();
        }
        var hs_i26DBe7 = hs_wild126DBlH.data[0];
        var hs_wild226DBlG = hs_ds226DBdZ;
        if (hs_ds226DBdZ.notEvaluated) {
            hs_wild226DBlG = hs_ds226DBdZ.hscall();
        }
        var hs_x26DBe8 = hs_wild226DBlG.data[0];
        var hs_sat26DBlJ = new $hs.Func(1);
        hs_sat26DBlJ.evaluate = function (hs_s26DBe9) {
            throw "primitive operation writeWordOffAddr#. Not implemeted yet.";
            return [hs_s226DBeb, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlK = new $hs.Func(1);
        hs_sat26DBlK.evaluate = function (hs_tpl26DBe3) {
            if (hs_tpl26DBe3.notEvaluated) {
                return hs_tpl26DBe3.hscall();
            } else {
                return hs_tpl26DBe3;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlK, hs_sat26DBlJ);
    };
    this.hs_writeIntOffPtr.evaluate = function (hs_ds26DBeg, hs_ds126DBej, hs_ds226DBem) {
        var hs_wild26DBlN = hs_ds26DBeg;
        if (hs_ds26DBeg.notEvaluated) {
            hs_wild26DBlN = hs_ds26DBeg.hscall();
        }
        var hs_a26DBet = hs_wild26DBlN.data[0];
        var hs_wild126DBlM = hs_ds126DBej;
        if (hs_ds126DBej.notEvaluated) {
            hs_wild126DBlM = hs_ds126DBej.hscall();
        }
        var hs_i26DBeu = hs_wild126DBlM.data[0];
        var hs_wild226DBlL = hs_ds226DBem;
        if (hs_ds226DBem.notEvaluated) {
            hs_wild226DBlL = hs_ds226DBem.hscall();
        }
        var hs_x26DBev = hs_wild226DBlL.data[0];
        var hs_sat26DBlO = new $hs.Func(1);
        hs_sat26DBlO.evaluate = function (hs_s26DBew) {
            throw "primitive operation writeIntOffAddr#. Not implemeted yet.";
            return [hs_s226DBey, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlP = new $hs.Func(1);
        hs_sat26DBlP.evaluate = function (hs_tpl26DBeq) {
            if (hs_tpl26DBeq.notEvaluated) {
                return hs_tpl26DBeq.hscall();
            } else {
                return hs_tpl26DBeq;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlP, hs_sat26DBlO);
    };
    this.hs_writeWideCharOffPtr.evaluate = function (hs_ds26DBeD, hs_ds126DBeG, hs_ds226DBeJ) {
        var hs_wild26DBlS = hs_ds26DBeD;
        if (hs_ds26DBeD.notEvaluated) {
            hs_wild26DBlS = hs_ds26DBeD.hscall();
        }
        var hs_a26DBeQ = hs_wild26DBlS.data[0];
        var hs_wild126DBlR = hs_ds126DBeG;
        if (hs_ds126DBeG.notEvaluated) {
            hs_wild126DBlR = hs_ds126DBeG.hscall();
        }
        var hs_i26DBeR = hs_wild126DBlR.data[0];
        var hs_wild226DBlQ = hs_ds226DBeJ;
        if (hs_ds226DBeJ.notEvaluated) {
            hs_wild226DBlQ = hs_ds226DBeJ.hscall();
        }
        var hs_x26DBeS = hs_wild226DBlQ.data[0];
        var hs_sat26DBlT = new $hs.Func(1);
        hs_sat26DBlT.evaluate = function (hs_s26DBeT) {
            throw "primitive operation writeWideCharOffAddr#. Not implemeted yet.";
            return [hs_s226DBeV, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DBlU = new $hs.Func(1);
        hs_sat26DBlU.evaluate = function (hs_tpl26DBeN) {
            if (hs_tpl26DBeN.notEvaluated) {
                return hs_tpl26DBeN.hscall();
            } else {
                return hs_tpl26DBeN;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBlU, hs_sat26DBlT);
    };
    this.hs_readWord64OffPtr.evaluate = function (hs_ds26DBeZ, hs_ds126DBf2) {
        var hs_wild26DBlX = hs_ds26DBeZ;
        if (hs_ds26DBeZ.notEvaluated) {
            hs_wild26DBlX = hs_ds26DBeZ.hscall();
        }
        var hs_a26DBf9 = hs_wild26DBlX.data[0];
        var hs_wild126DBlW = hs_ds126DBf2;
        if (hs_ds126DBf2.notEvaluated) {
            hs_wild126DBlW = hs_ds126DBf2.hscall();
        }
        var hs_i26DBfa = hs_wild126DBlW.data[0];
        var hs_sat26DBlZ = new $hs.Func(1);
        hs_sat26DBlZ.evaluate = function (hs_s26DBfb) {
            throw "primitive operation readWord64OffAddr#. Not implemeted yet.";
            var hs_s226DBff = hs_wild226DBlV[0];
            var hs_x26DBfg = hs_wild226DBlV[1];
            var hs_sat26DBlY = new $hs.Data(1);
            hs_sat26DBlY.data = [hs_x26DBfg];
            return [hs_s226DBff, hs_sat26DBlY];
        };
        var hs_sat26DBm0 = new $hs.Func(1);
        hs_sat26DBm0.evaluate = function (hs_tpl26DBf6) {
            if (hs_tpl26DBf6.notEvaluated) {
                return hs_tpl26DBf6.hscall();
            } else {
                return hs_tpl26DBf6;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBm0, hs_sat26DBlZ);
    };
    this.hs_readInt64OffPtr.evaluate = function (hs_ds26DBfl, hs_ds126DBfo) {
        var hs_wild26DBm3 = hs_ds26DBfl;
        if (hs_ds26DBfl.notEvaluated) {
            hs_wild26DBm3 = hs_ds26DBfl.hscall();
        }
        var hs_a26DBfv = hs_wild26DBm3.data[0];
        var hs_wild126DBm2 = hs_ds126DBfo;
        if (hs_ds126DBfo.notEvaluated) {
            hs_wild126DBm2 = hs_ds126DBfo.hscall();
        }
        var hs_i26DBfw = hs_wild126DBm2.data[0];
        var hs_sat26DBm5 = new $hs.Func(1);
        hs_sat26DBm5.evaluate = function (hs_s26DBfx) {
            throw "primitive operation readInt64OffAddr#. Not implemeted yet.";
            var hs_s226DBfB = hs_wild226DBm1[0];
            var hs_x26DBfC = hs_wild226DBm1[1];
            var hs_sat26DBm4 = new $hs.Data(1);
            hs_sat26DBm4.data = [hs_x26DBfC];
            return [hs_s226DBfB, hs_sat26DBm4];
        };
        var hs_sat26DBm6 = new $hs.Func(1);
        hs_sat26DBm6.evaluate = function (hs_tpl26DBfs) {
            if (hs_tpl26DBfs.notEvaluated) {
                return hs_tpl26DBfs.hscall();
            } else {
                return hs_tpl26DBfs;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBm6, hs_sat26DBm5);
    };
    this.hs_readWord32OffPtr.evaluate = function (hs_ds26DBfH, hs_ds126DBfK) {
        var hs_wild26DBm9 = hs_ds26DBfH;
        if (hs_ds26DBfH.notEvaluated) {
            hs_wild26DBm9 = hs_ds26DBfH.hscall();
        }
        var hs_a26DBfR = hs_wild26DBm9.data[0];
        var hs_wild126DBm8 = hs_ds126DBfK;
        if (hs_ds126DBfK.notEvaluated) {
            hs_wild126DBm8 = hs_ds126DBfK.hscall();
        }
        var hs_i26DBfS = hs_wild126DBm8.data[0];
        var hs_sat26DBmb = new $hs.Func(1);
        hs_sat26DBmb.evaluate = function (hs_s26DBfT) {
            throw "primitive operation readWord32OffAddr#. Not implemeted yet.";
            var hs_s226DBfX = hs_wild226DBm7[0];
            var hs_x26DBfY = hs_wild226DBm7[1];
            var hs_sat26DBma = new $hs.Data(1);
            hs_sat26DBma.data = [hs_x26DBfY];
            return [hs_s226DBfX, hs_sat26DBma];
        };
        var hs_sat26DBmc = new $hs.Func(1);
        hs_sat26DBmc.evaluate = function (hs_tpl26DBfO) {
            if (hs_tpl26DBfO.notEvaluated) {
                return hs_tpl26DBfO.hscall();
            } else {
                return hs_tpl26DBfO;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmc, hs_sat26DBmb);
    };
    this.hs_readInt32OffPtr.evaluate = function (hs_ds26DBg3, hs_ds126DBg6) {
        var hs_wild26DBmf = hs_ds26DBg3;
        if (hs_ds26DBg3.notEvaluated) {
            hs_wild26DBmf = hs_ds26DBg3.hscall();
        }
        var hs_a26DBgd = hs_wild26DBmf.data[0];
        var hs_wild126DBme = hs_ds126DBg6;
        if (hs_ds126DBg6.notEvaluated) {
            hs_wild126DBme = hs_ds126DBg6.hscall();
        }
        var hs_i26DBge = hs_wild126DBme.data[0];
        var hs_sat26DBmh = new $hs.Func(1);
        hs_sat26DBmh.evaluate = function (hs_s26DBgf) {
            throw "primitive operation readInt32OffAddr#. Not implemeted yet.";
            var hs_s226DBgj = hs_wild226DBmd[0];
            var hs_x26DBgk = hs_wild226DBmd[1];
            var hs_sat26DBmg = new $hs.Data(1);
            hs_sat26DBmg.data = [hs_x26DBgk];
            return [hs_s226DBgj, hs_sat26DBmg];
        };
        var hs_sat26DBmi = new $hs.Func(1);
        hs_sat26DBmi.evaluate = function (hs_tpl26DBga) {
            if (hs_tpl26DBga.notEvaluated) {
                return hs_tpl26DBga.hscall();
            } else {
                return hs_tpl26DBga;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmi, hs_sat26DBmh);
    };
    this.hs_readWord16OffPtr.evaluate = function (hs_ds26DBgp, hs_ds126DBgs) {
        var hs_wild26DBml = hs_ds26DBgp;
        if (hs_ds26DBgp.notEvaluated) {
            hs_wild26DBml = hs_ds26DBgp.hscall();
        }
        var hs_a26DBgz = hs_wild26DBml.data[0];
        var hs_wild126DBmk = hs_ds126DBgs;
        if (hs_ds126DBgs.notEvaluated) {
            hs_wild126DBmk = hs_ds126DBgs.hscall();
        }
        var hs_i26DBgA = hs_wild126DBmk.data[0];
        var hs_sat26DBmn = new $hs.Func(1);
        hs_sat26DBmn.evaluate = function (hs_s26DBgB) {
            throw "primitive operation readWord16OffAddr#. Not implemeted yet.";
            var hs_s226DBgF = hs_wild226DBmj[0];
            var hs_x26DBgG = hs_wild226DBmj[1];
            var hs_sat26DBmm = new $hs.Data(1);
            hs_sat26DBmm.data = [hs_x26DBgG];
            return [hs_s226DBgF, hs_sat26DBmm];
        };
        var hs_sat26DBmo = new $hs.Func(1);
        hs_sat26DBmo.evaluate = function (hs_tpl26DBgw) {
            if (hs_tpl26DBgw.notEvaluated) {
                return hs_tpl26DBgw.hscall();
            } else {
                return hs_tpl26DBgw;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmo, hs_sat26DBmn);
    };
    this.hs_readInt16OffPtr.evaluate = function (hs_ds26DBgL, hs_ds126DBgO) {
        var hs_wild26DBmr = hs_ds26DBgL;
        if (hs_ds26DBgL.notEvaluated) {
            hs_wild26DBmr = hs_ds26DBgL.hscall();
        }
        var hs_a26DBgV = hs_wild26DBmr.data[0];
        var hs_wild126DBmq = hs_ds126DBgO;
        if (hs_ds126DBgO.notEvaluated) {
            hs_wild126DBmq = hs_ds126DBgO.hscall();
        }
        var hs_i26DBgW = hs_wild126DBmq.data[0];
        var hs_sat26DBmt = new $hs.Func(1);
        hs_sat26DBmt.evaluate = function (hs_s26DBgX) {
            throw "primitive operation readInt16OffAddr#. Not implemeted yet.";
            var hs_s226DBh1 = hs_wild226DBmp[0];
            var hs_x26DBh2 = hs_wild226DBmp[1];
            var hs_sat26DBms = new $hs.Data(1);
            hs_sat26DBms.data = [hs_x26DBh2];
            return [hs_s226DBh1, hs_sat26DBms];
        };
        var hs_sat26DBmu = new $hs.Func(1);
        hs_sat26DBmu.evaluate = function (hs_tpl26DBgS) {
            if (hs_tpl26DBgS.notEvaluated) {
                return hs_tpl26DBgS.hscall();
            } else {
                return hs_tpl26DBgS;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmu, hs_sat26DBmt);
    };
    this.hs_readWord8OffPtr.evaluate = function (hs_ds26DBh7, hs_ds126DBha) {
        var hs_wild26DBmx = hs_ds26DBh7;
        if (hs_ds26DBh7.notEvaluated) {
            hs_wild26DBmx = hs_ds26DBh7.hscall();
        }
        var hs_a26DBhh = hs_wild26DBmx.data[0];
        var hs_wild126DBmw = hs_ds126DBha;
        if (hs_ds126DBha.notEvaluated) {
            hs_wild126DBmw = hs_ds126DBha.hscall();
        }
        var hs_i26DBhi = hs_wild126DBmw.data[0];
        var hs_sat26DBmz = new $hs.Func(1);
        hs_sat26DBmz.evaluate = function (hs_s26DBhj) {
            throw "primitive operation readWord8OffAddr#. Not implemeted yet.";
            var hs_s226DBhn = hs_wild226DBmv[0];
            var hs_x26DBho = hs_wild226DBmv[1];
            var hs_sat26DBmy = new $hs.Data(1);
            hs_sat26DBmy.data = [hs_x26DBho];
            return [hs_s226DBhn, hs_sat26DBmy];
        };
        var hs_sat26DBmA = new $hs.Func(1);
        hs_sat26DBmA.evaluate = function (hs_tpl26DBhe) {
            if (hs_tpl26DBhe.notEvaluated) {
                return hs_tpl26DBhe.hscall();
            } else {
                return hs_tpl26DBhe;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmA, hs_sat26DBmz);
    };
    this.hs_readInt8OffPtr.evaluate = function (hs_ds26DBht, hs_ds126DBhw) {
        var hs_wild26DBmD = hs_ds26DBht;
        if (hs_ds26DBht.notEvaluated) {
            hs_wild26DBmD = hs_ds26DBht.hscall();
        }
        var hs_a26DBhD = hs_wild26DBmD.data[0];
        var hs_wild126DBmC = hs_ds126DBhw;
        if (hs_ds126DBhw.notEvaluated) {
            hs_wild126DBmC = hs_ds126DBhw.hscall();
        }
        var hs_i26DBhE = hs_wild126DBmC.data[0];
        var hs_sat26DBmF = new $hs.Func(1);
        hs_sat26DBmF.evaluate = function (hs_s26DBhF) {
            throw "primitive operation readInt8OffAddr#. Not implemeted yet.";
            var hs_s226DBhJ = hs_wild226DBmB[0];
            var hs_x26DBhK = hs_wild226DBmB[1];
            var hs_sat26DBmE = new $hs.Data(1);
            hs_sat26DBmE.data = [hs_x26DBhK];
            return [hs_s226DBhJ, hs_sat26DBmE];
        };
        var hs_sat26DBmG = new $hs.Func(1);
        hs_sat26DBmG.evaluate = function (hs_tpl26DBhA) {
            if (hs_tpl26DBhA.notEvaluated) {
                return hs_tpl26DBhA.hscall();
            } else {
                return hs_tpl26DBhA;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmG, hs_sat26DBmF);
    };
    this.hs_readStablePtrOffPtr.evaluate = function (hs_ds26DBhP, hs_ds126DBhS) {
        var hs_wild26DBmJ = hs_ds26DBhP;
        if (hs_ds26DBhP.notEvaluated) {
            hs_wild26DBmJ = hs_ds26DBhP.hscall();
        }
        var hs_a26DBhZ = hs_wild26DBmJ.data[0];
        var hs_wild126DBmI = hs_ds126DBhS;
        if (hs_ds126DBhS.notEvaluated) {
            hs_wild126DBmI = hs_ds126DBhS.hscall();
        }
        var hs_i26DBi0 = hs_wild126DBmI.data[0];
        var hs_sat26DBmL = new $hs.Func(1);
        hs_sat26DBmL.evaluate = function (hs_s26DBi1) {
            throw "primitive operation readStablePtrOffAddr#. Not implemeted yet.";
            var hs_s226DBi5 = hs_wild226DBmH[0];
            var hs_x26DBi6 = hs_wild226DBmH[1];
            var hs_sat26DBmK = new $hs.Data(1);
            hs_sat26DBmK.data = [hs_x26DBi6];
            return [hs_s226DBi5, hs_sat26DBmK];
        };
        var hs_sat26DBmM = new $hs.Func(1);
        hs_sat26DBmM.evaluate = function (hs_tpl26DBhW) {
            if (hs_tpl26DBhW.notEvaluated) {
                return hs_tpl26DBhW.hscall();
            } else {
                return hs_tpl26DBhW;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmM, hs_sat26DBmL);
    };
    this.hs_readDoubleOffPtr.evaluate = function (hs_ds26DBib, hs_ds126DBie) {
        var hs_wild26DBmP = hs_ds26DBib;
        if (hs_ds26DBib.notEvaluated) {
            hs_wild26DBmP = hs_ds26DBib.hscall();
        }
        var hs_a26DBil = hs_wild26DBmP.data[0];
        var hs_wild126DBmO = hs_ds126DBie;
        if (hs_ds126DBie.notEvaluated) {
            hs_wild126DBmO = hs_ds126DBie.hscall();
        }
        var hs_i26DBim = hs_wild126DBmO.data[0];
        var hs_sat26DBmR = new $hs.Func(1);
        hs_sat26DBmR.evaluate = function (hs_s26DBin) {
            throw "primitive operation readDoubleOffAddr#. Not implemeted yet.";
            var hs_s226DBir = hs_wild226DBmN[0];
            var hs_x26DBis = hs_wild226DBmN[1];
            var hs_sat26DBmQ = new $hs.Data(1);
            hs_sat26DBmQ.data = [hs_x26DBis];
            return [hs_s226DBir, hs_sat26DBmQ];
        };
        var hs_sat26DBmS = new $hs.Func(1);
        hs_sat26DBmS.evaluate = function (hs_tpl26DBii) {
            if (hs_tpl26DBii.notEvaluated) {
                return hs_tpl26DBii.hscall();
            } else {
                return hs_tpl26DBii;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmS, hs_sat26DBmR);
    };
    this.hs_readFloatOffPtr.evaluate = function (hs_ds26DBix, hs_ds126DBiA) {
        var hs_wild26DBmV = hs_ds26DBix;
        if (hs_ds26DBix.notEvaluated) {
            hs_wild26DBmV = hs_ds26DBix.hscall();
        }
        var hs_a26DBiH = hs_wild26DBmV.data[0];
        var hs_wild126DBmU = hs_ds126DBiA;
        if (hs_ds126DBiA.notEvaluated) {
            hs_wild126DBmU = hs_ds126DBiA.hscall();
        }
        var hs_i26DBiI = hs_wild126DBmU.data[0];
        var hs_sat26DBmX = new $hs.Func(1);
        hs_sat26DBmX.evaluate = function (hs_s26DBiJ) {
            throw "primitive operation readFloatOffAddr#. Not implemeted yet.";
            var hs_s226DBiN = hs_wild226DBmT[0];
            var hs_x26DBiO = hs_wild226DBmT[1];
            var hs_sat26DBmW = new $hs.Data(1);
            hs_sat26DBmW.data = [hs_x26DBiO];
            return [hs_s226DBiN, hs_sat26DBmW];
        };
        var hs_sat26DBmY = new $hs.Func(1);
        hs_sat26DBmY.evaluate = function (hs_tpl26DBiE) {
            if (hs_tpl26DBiE.notEvaluated) {
                return hs_tpl26DBiE.hscall();
            } else {
                return hs_tpl26DBiE;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBmY, hs_sat26DBmX);
    };
    this.hs_readFunPtrOffPtr.evaluate = function (hs_ds26DBiT, hs_ds126DBiW) {
        var hs_wild26DBn1 = hs_ds26DBiT;
        if (hs_ds26DBiT.notEvaluated) {
            hs_wild26DBn1 = hs_ds26DBiT.hscall();
        }
        var hs_a26DBj3 = hs_wild26DBn1.data[0];
        var hs_wild126DBn0 = hs_ds126DBiW;
        if (hs_ds126DBiW.notEvaluated) {
            hs_wild126DBn0 = hs_ds126DBiW.hscall();
        }
        var hs_i26DBj4 = hs_wild126DBn0.data[0];
        var hs_sat26DBn3 = new $hs.Func(1);
        hs_sat26DBn3.evaluate = function (hs_s26DBj5) {
            throw "primitive operation readAddrOffAddr#. Not implemeted yet.";
            var hs_s226DBj9 = hs_wild226DBmZ[0];
            var hs_x26DBja = hs_wild226DBmZ[1];
            var hs_sat26DBn2 = new $hs.Data(1);
            hs_sat26DBn2.data = [hs_x26DBja];
            return [hs_s226DBj9, hs_sat26DBn2];
        };
        var hs_sat26DBn4 = new $hs.Func(1);
        hs_sat26DBn4.evaluate = function (hs_tpl26DBj0) {
            if (hs_tpl26DBj0.notEvaluated) {
                return hs_tpl26DBj0.hscall();
            } else {
                return hs_tpl26DBj0;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBn4, hs_sat26DBn3);
    };
    this.hs_readPtrOffPtr.evaluate = function (hs_ds26DBjf, hs_ds126DBji) {
        var hs_wild26DBn7 = hs_ds26DBjf;
        if (hs_ds26DBjf.notEvaluated) {
            hs_wild26DBn7 = hs_ds26DBjf.hscall();
        }
        var hs_a26DBjp = hs_wild26DBn7.data[0];
        var hs_wild126DBn6 = hs_ds126DBji;
        if (hs_ds126DBji.notEvaluated) {
            hs_wild126DBn6 = hs_ds126DBji.hscall();
        }
        var hs_i26DBjq = hs_wild126DBn6.data[0];
        var hs_sat26DBn9 = new $hs.Func(1);
        hs_sat26DBn9.evaluate = function (hs_s26DBjr) {
            throw "primitive operation readAddrOffAddr#. Not implemeted yet.";
            var hs_s226DBjv = hs_wild226DBn5[0];
            var hs_x26DBjw = hs_wild226DBn5[1];
            var hs_sat26DBn8 = new $hs.Data(1);
            hs_sat26DBn8.data = [hs_x26DBjw];
            return [hs_s226DBjv, hs_sat26DBn8];
        };
        var hs_sat26DBna = new $hs.Func(1);
        hs_sat26DBna.evaluate = function (hs_tpl26DBjm) {
            if (hs_tpl26DBjm.notEvaluated) {
                return hs_tpl26DBjm.hscall();
            } else {
                return hs_tpl26DBjm;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBna, hs_sat26DBn9);
    };
    this.hs_readWordOffPtr.evaluate = function (hs_ds26DBjB, hs_ds126DBjE) {
        var hs_wild26DBnd = hs_ds26DBjB;
        if (hs_ds26DBjB.notEvaluated) {
            hs_wild26DBnd = hs_ds26DBjB.hscall();
        }
        var hs_a26DBjL = hs_wild26DBnd.data[0];
        var hs_wild126DBnc = hs_ds126DBjE;
        if (hs_ds126DBjE.notEvaluated) {
            hs_wild126DBnc = hs_ds126DBjE.hscall();
        }
        var hs_i26DBjM = hs_wild126DBnc.data[0];
        var hs_sat26DBnf = new $hs.Func(1);
        hs_sat26DBnf.evaluate = function (hs_s26DBjN) {
            throw "primitive operation readWordOffAddr#. Not implemeted yet.";
            var hs_s226DBjR = hs_wild226DBnb[0];
            var hs_x26DBjS = hs_wild226DBnb[1];
            var hs_sat26DBne = new $hs.Data(1);
            hs_sat26DBne.data = [hs_x26DBjS];
            return [hs_s226DBjR, hs_sat26DBne];
        };
        var hs_sat26DBng = new $hs.Func(1);
        hs_sat26DBng.evaluate = function (hs_tpl26DBjI) {
            if (hs_tpl26DBjI.notEvaluated) {
                return hs_tpl26DBjI.hscall();
            } else {
                return hs_tpl26DBjI;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBng, hs_sat26DBnf);
    };
    this.hs_readIntOffPtr.evaluate = function (hs_ds26DBjX, hs_ds126DBk0) {
        var hs_wild26DBnj = hs_ds26DBjX;
        if (hs_ds26DBjX.notEvaluated) {
            hs_wild26DBnj = hs_ds26DBjX.hscall();
        }
        var hs_a26DBk7 = hs_wild26DBnj.data[0];
        var hs_wild126DBni = hs_ds126DBk0;
        if (hs_ds126DBk0.notEvaluated) {
            hs_wild126DBni = hs_ds126DBk0.hscall();
        }
        var hs_i26DBk8 = hs_wild126DBni.data[0];
        var hs_sat26DBnl = new $hs.Func(1);
        hs_sat26DBnl.evaluate = function (hs_s26DBk9) {
            throw "primitive operation readIntOffAddr#. Not implemeted yet.";
            var hs_s226DBkd = hs_wild226DBnh[0];
            var hs_x26DBke = hs_wild226DBnh[1];
            var hs_sat26DBnk = new $hs.Data(1);
            hs_sat26DBnk.data = [hs_x26DBke];
            return [hs_s226DBkd, hs_sat26DBnk];
        };
        var hs_sat26DBnm = new $hs.Func(1);
        hs_sat26DBnm.evaluate = function (hs_tpl26DBk4) {
            if (hs_tpl26DBk4.notEvaluated) {
                return hs_tpl26DBk4.hscall();
            } else {
                return hs_tpl26DBk4;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBnm, hs_sat26DBnl);
    };
    this.hs_readWideCharOffPtr.evaluate = function (hs_ds26DBkj, hs_ds126DBkm) {
        var hs_wild26DBnp = hs_ds26DBkj;
        if (hs_ds26DBkj.notEvaluated) {
            hs_wild26DBnp = hs_ds26DBkj.hscall();
        }
        var hs_a26DBkt = hs_wild26DBnp.data[0];
        var hs_wild126DBno = hs_ds126DBkm;
        if (hs_ds126DBkm.notEvaluated) {
            hs_wild126DBno = hs_ds126DBkm.hscall();
        }
        var hs_i26DBku = hs_wild126DBno.data[0];
        var hs_sat26DBnr = new $hs.Func(1);
        hs_sat26DBnr.evaluate = function (hs_s26DBkv) {
            throw "primitive operation readWideCharOffAddr#. Not implemeted yet.";
            var hs_s226DBkz = hs_wild226DBnn[0];
            var hs_x26DBkA = hs_wild226DBnn[1];
            var hs_sat26DBnq = new $hs.Data(1);
            hs_sat26DBnq.data = [hs_x26DBkA];
            return [hs_s226DBkz, hs_sat26DBnq];
        };
        var hs_sat26DBns = new $hs.Func(1);
        hs_sat26DBns.evaluate = function (hs_tpl26DBkq) {
            if (hs_tpl26DBkq.notEvaluated) {
                return hs_tpl26DBkq.hscall();
            } else {
                return hs_tpl26DBkq;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DBns, hs_sat26DBnr);
    };
};
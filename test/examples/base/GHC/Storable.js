
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
    this.hs_writeWord64OffPtr.evaluate = function (hs_ds26DdMZ, hs_ds126DdN2, hs_ds226DdN5) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdMZ, hs_ds126DdN2, hs_ds226DdN5);
    };
    this.hs_writeInt64OffPtr.notEvaluated = true;
    this.hs_writeInt64OffPtr.evaluate = function (hs_ds26DdNm, hs_ds126DdNp, hs_ds226DdNs) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdNm, hs_ds126DdNp, hs_ds226DdNs);
    };
    this.hs_writeWord32OffPtr.notEvaluated = true;
    this.hs_writeWord32OffPtr.evaluate = function (hs_ds26DdNJ, hs_ds126DdNM, hs_ds226DdNP) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdNJ, hs_ds126DdNM, hs_ds226DdNP);
    };
    this.hs_writeInt32OffPtr.notEvaluated = true;
    this.hs_writeInt32OffPtr.evaluate = function (hs_ds26DdO6, hs_ds126DdO9, hs_ds226DdOc) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdO6, hs_ds126DdO9, hs_ds226DdOc);
    };
    this.hs_writeWord16OffPtr.notEvaluated = true;
    this.hs_writeWord16OffPtr.evaluate = function (hs_ds26DdOt, hs_ds126DdOw, hs_ds226DdOz) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdOt, hs_ds126DdOw, hs_ds226DdOz);
    };
    this.hs_writeInt16OffPtr.notEvaluated = true;
    this.hs_writeInt16OffPtr.evaluate = function (hs_ds26DdOQ, hs_ds126DdOT, hs_ds226DdOW) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdOQ, hs_ds126DdOT, hs_ds226DdOW);
    };
    this.hs_writeWord8OffPtr.notEvaluated = true;
    this.hs_writeWord8OffPtr.evaluate = function (hs_ds26DdPd, hs_ds126DdPg, hs_ds226DdPj) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdPd, hs_ds126DdPg, hs_ds226DdPj);
    };
    this.hs_writeInt8OffPtr.notEvaluated = true;
    this.hs_writeInt8OffPtr.evaluate = function (hs_ds26DdPA, hs_ds126DdPD, hs_ds226DdPG) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdPA, hs_ds126DdPD, hs_ds226DdPG);
    };
    this.hs_writeStablePtrOffPtr.notEvaluated = true;
    this.hs_writeStablePtrOffPtr.evaluate = function (hs_ds26DdPX, hs_ds126DdQ0, hs_ds226DdQ3) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdPX, hs_ds126DdQ0, hs_ds226DdQ3);
    };
    this.hs_writeDoubleOffPtr.notEvaluated = true;
    this.hs_writeDoubleOffPtr.evaluate = function (hs_ds26DdQk, hs_ds126DdQn, hs_ds226DdQq) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdQk, hs_ds126DdQn, hs_ds226DdQq);
    };
    this.hs_writeFloatOffPtr.notEvaluated = true;
    this.hs_writeFloatOffPtr.evaluate = function (hs_ds26DdQH, hs_ds126DdQK, hs_ds226DdQN) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdQH, hs_ds126DdQK, hs_ds226DdQN);
    };
    this.hs_writeFunPtrOffPtr.notEvaluated = true;
    this.hs_writeFunPtrOffPtr.evaluate = function (hs_ds26DdR4, hs_ds126DdR7, hs_ds226DdRa) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdR4, hs_ds126DdR7, hs_ds226DdRa);
    };
    this.hs_writePtrOffPtr.notEvaluated = true;
    this.hs_writePtrOffPtr.evaluate = function (hs_ds26DdRr, hs_ds126DdRu, hs_ds226DdRx) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdRr, hs_ds126DdRu, hs_ds226DdRx);
    };
    this.hs_writeWordOffPtr.notEvaluated = true;
    this.hs_writeWordOffPtr.evaluate = function (hs_ds26DdRO, hs_ds126DdRR, hs_ds226DdRU) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdRO, hs_ds126DdRR, hs_ds226DdRU);
    };
    this.hs_writeIntOffPtr.notEvaluated = true;
    this.hs_writeIntOffPtr.evaluate = function (hs_ds26DdSb, hs_ds126DdSe, hs_ds226DdSh) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdSb, hs_ds126DdSe, hs_ds226DdSh);
    };
    this.hs_writeWideCharOffPtr.notEvaluated = true;
    this.hs_writeWideCharOffPtr.evaluate = function (hs_ds26DdSy, hs_ds126DdSB, hs_ds226DdSE) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdSy, hs_ds126DdSB, hs_ds226DdSE);
    };
    this.hs_readWord64OffPtr.notEvaluated = true;
    this.hs_readWord64OffPtr.evaluate = function (hs_ds26DdSU, hs_ds126DdSX) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdSU, hs_ds126DdSX);
    };
    this.hs_readInt64OffPtr.notEvaluated = true;
    this.hs_readInt64OffPtr.evaluate = function (hs_ds26DdTg, hs_ds126DdTj) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdTg, hs_ds126DdTj);
    };
    this.hs_readWord32OffPtr.notEvaluated = true;
    this.hs_readWord32OffPtr.evaluate = function (hs_ds26DdTC, hs_ds126DdTF) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdTC, hs_ds126DdTF);
    };
    this.hs_readInt32OffPtr.notEvaluated = true;
    this.hs_readInt32OffPtr.evaluate = function (hs_ds26DdTY, hs_ds126DdU1) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdTY, hs_ds126DdU1);
    };
    this.hs_readWord16OffPtr.notEvaluated = true;
    this.hs_readWord16OffPtr.evaluate = function (hs_ds26DdUk, hs_ds126DdUn) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdUk, hs_ds126DdUn);
    };
    this.hs_readInt16OffPtr.notEvaluated = true;
    this.hs_readInt16OffPtr.evaluate = function (hs_ds26DdUG, hs_ds126DdUJ) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdUG, hs_ds126DdUJ);
    };
    this.hs_readWord8OffPtr.notEvaluated = true;
    this.hs_readWord8OffPtr.evaluate = function (hs_ds26DdV2, hs_ds126DdV5) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdV2, hs_ds126DdV5);
    };
    this.hs_readInt8OffPtr.notEvaluated = true;
    this.hs_readInt8OffPtr.evaluate = function (hs_ds26DdVo, hs_ds126DdVr) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdVo, hs_ds126DdVr);
    };
    this.hs_readStablePtrOffPtr.notEvaluated = true;
    this.hs_readStablePtrOffPtr.evaluate = function (hs_ds26DdVK, hs_ds126DdVN) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdVK, hs_ds126DdVN);
    };
    this.hs_readDoubleOffPtr.notEvaluated = true;
    this.hs_readDoubleOffPtr.evaluate = function (hs_ds26DdW6, hs_ds126DdW9) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdW6, hs_ds126DdW9);
    };
    this.hs_readFloatOffPtr.notEvaluated = true;
    this.hs_readFloatOffPtr.evaluate = function (hs_ds26DdWs, hs_ds126DdWv) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdWs, hs_ds126DdWv);
    };
    this.hs_readFunPtrOffPtr.notEvaluated = true;
    this.hs_readFunPtrOffPtr.evaluate = function (hs_ds26DdWO, hs_ds126DdWR) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdWO, hs_ds126DdWR);
    };
    this.hs_readPtrOffPtr.notEvaluated = true;
    this.hs_readPtrOffPtr.evaluate = function (hs_ds26DdXa, hs_ds126DdXd) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdXa, hs_ds126DdXd);
    };
    this.hs_readWordOffPtr.notEvaluated = true;
    this.hs_readWordOffPtr.evaluate = function (hs_ds26DdXw, hs_ds126DdXz) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdXw, hs_ds126DdXz);
    };
    this.hs_readIntOffPtr.notEvaluated = true;
    this.hs_readIntOffPtr.evaluate = function (hs_ds26DdXS, hs_ds126DdXV) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdXS, hs_ds126DdXV);
    };
    this.hs_readWideCharOffPtr.notEvaluated = true;
    this.hs_readWideCharOffPtr.evaluate = function (hs_ds26DdYe, hs_ds126DdYh) {
        $hs.modules.GHCziStorable.loadDependencies();
        return this.evaluate(hs_ds26DdYe, hs_ds126DdYh);
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
    this.hs_writeWord64OffPtr.evaluate = function (hs_ds26DdMZ, hs_ds126DdN2, hs_ds226DdN5) {
        var hs_wild26DdYB = hs_ds26DdMZ;
        if (hs_ds26DdMZ.notEvaluated) {
            hs_wild26DdYB = hs_ds26DdMZ.hscall();
        }
        var hs_a26DdNc = hs_wild26DdYB.data[0];
        var hs_wild126DdYA = hs_ds126DdN2;
        if (hs_ds126DdN2.notEvaluated) {
            hs_wild126DdYA = hs_ds126DdN2.hscall();
        }
        var hs_i26DdNd = hs_wild126DdYA.data[0];
        var hs_wild226DdYz = hs_ds226DdN5;
        if (hs_ds226DdN5.notEvaluated) {
            hs_wild226DdYz = hs_ds226DdN5.hscall();
        }
        var hs_x26DdNe = hs_wild226DdYz.data[0];
        var hs_sat26DdYC = new $hs.Func(1);
        hs_sat26DdYC.evaluate = function (hs_s26DdNf) {
            throw "primitive operation writeWord64OffAddr#. Not implemeted yet.";
            return [hs_s226DdNh, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdYy = new $hs.Func(1);
        hs_sat26DdYy.evaluate = function (hs_tpl26DdN9) {
            if (hs_tpl26DdN9.notEvaluated) {
                return hs_tpl26DdN9.hscall();
            } else {
                return hs_tpl26DdN9;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdYy, hs_sat26DdYC);
    };
    this.hs_writeInt64OffPtr.evaluate = function (hs_ds26DdNm, hs_ds126DdNp, hs_ds226DdNs) {
        var hs_wild26DdYG = hs_ds26DdNm;
        if (hs_ds26DdNm.notEvaluated) {
            hs_wild26DdYG = hs_ds26DdNm.hscall();
        }
        var hs_a26DdNz = hs_wild26DdYG.data[0];
        var hs_wild126DdYF = hs_ds126DdNp;
        if (hs_ds126DdNp.notEvaluated) {
            hs_wild126DdYF = hs_ds126DdNp.hscall();
        }
        var hs_i26DdNA = hs_wild126DdYF.data[0];
        var hs_wild226DdYE = hs_ds226DdNs;
        if (hs_ds226DdNs.notEvaluated) {
            hs_wild226DdYE = hs_ds226DdNs.hscall();
        }
        var hs_x26DdNB = hs_wild226DdYE.data[0];
        var hs_sat26DdYH = new $hs.Func(1);
        hs_sat26DdYH.evaluate = function (hs_s26DdNC) {
            throw "primitive operation writeInt64OffAddr#. Not implemeted yet.";
            return [hs_s226DdNE, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdYD = new $hs.Func(1);
        hs_sat26DdYD.evaluate = function (hs_tpl26DdNw) {
            if (hs_tpl26DdNw.notEvaluated) {
                return hs_tpl26DdNw.hscall();
            } else {
                return hs_tpl26DdNw;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdYD, hs_sat26DdYH);
    };
    this.hs_writeWord32OffPtr.evaluate = function (hs_ds26DdNJ, hs_ds126DdNM, hs_ds226DdNP) {
        var hs_wild26DdYL = hs_ds26DdNJ;
        if (hs_ds26DdNJ.notEvaluated) {
            hs_wild26DdYL = hs_ds26DdNJ.hscall();
        }
        var hs_a26DdNW = hs_wild26DdYL.data[0];
        var hs_wild126DdYK = hs_ds126DdNM;
        if (hs_ds126DdNM.notEvaluated) {
            hs_wild126DdYK = hs_ds126DdNM.hscall();
        }
        var hs_i26DdNX = hs_wild126DdYK.data[0];
        var hs_wild226DdYJ = hs_ds226DdNP;
        if (hs_ds226DdNP.notEvaluated) {
            hs_wild226DdYJ = hs_ds226DdNP.hscall();
        }
        var hs_x26DdNY = hs_wild226DdYJ.data[0];
        var hs_sat26DdYM = new $hs.Func(1);
        hs_sat26DdYM.evaluate = function (hs_s26DdNZ) {
            throw "primitive operation writeWord32OffAddr#. Not implemeted yet.";
            return [hs_s226DdO1, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdYI = new $hs.Func(1);
        hs_sat26DdYI.evaluate = function (hs_tpl26DdNT) {
            if (hs_tpl26DdNT.notEvaluated) {
                return hs_tpl26DdNT.hscall();
            } else {
                return hs_tpl26DdNT;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdYI, hs_sat26DdYM);
    };
    this.hs_writeInt32OffPtr.evaluate = function (hs_ds26DdO6, hs_ds126DdO9, hs_ds226DdOc) {
        var hs_wild26DdYQ = hs_ds26DdO6;
        if (hs_ds26DdO6.notEvaluated) {
            hs_wild26DdYQ = hs_ds26DdO6.hscall();
        }
        var hs_a26DdOj = hs_wild26DdYQ.data[0];
        var hs_wild126DdYP = hs_ds126DdO9;
        if (hs_ds126DdO9.notEvaluated) {
            hs_wild126DdYP = hs_ds126DdO9.hscall();
        }
        var hs_i26DdOk = hs_wild126DdYP.data[0];
        var hs_wild226DdYO = hs_ds226DdOc;
        if (hs_ds226DdOc.notEvaluated) {
            hs_wild226DdYO = hs_ds226DdOc.hscall();
        }
        var hs_x26DdOl = hs_wild226DdYO.data[0];
        var hs_sat26DdYR = new $hs.Func(1);
        hs_sat26DdYR.evaluate = function (hs_s26DdOm) {
            throw "primitive operation writeInt32OffAddr#. Not implemeted yet.";
            return [hs_s226DdOo, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdYN = new $hs.Func(1);
        hs_sat26DdYN.evaluate = function (hs_tpl26DdOg) {
            if (hs_tpl26DdOg.notEvaluated) {
                return hs_tpl26DdOg.hscall();
            } else {
                return hs_tpl26DdOg;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdYN, hs_sat26DdYR);
    };
    this.hs_writeWord16OffPtr.evaluate = function (hs_ds26DdOt, hs_ds126DdOw, hs_ds226DdOz) {
        var hs_wild26DdYV = hs_ds26DdOt;
        if (hs_ds26DdOt.notEvaluated) {
            hs_wild26DdYV = hs_ds26DdOt.hscall();
        }
        var hs_a26DdOG = hs_wild26DdYV.data[0];
        var hs_wild126DdYU = hs_ds126DdOw;
        if (hs_ds126DdOw.notEvaluated) {
            hs_wild126DdYU = hs_ds126DdOw.hscall();
        }
        var hs_i26DdOH = hs_wild126DdYU.data[0];
        var hs_wild226DdYT = hs_ds226DdOz;
        if (hs_ds226DdOz.notEvaluated) {
            hs_wild226DdYT = hs_ds226DdOz.hscall();
        }
        var hs_x26DdOI = hs_wild226DdYT.data[0];
        var hs_sat26DdYW = new $hs.Func(1);
        hs_sat26DdYW.evaluate = function (hs_s26DdOJ) {
            throw "primitive operation writeWord16OffAddr#. Not implemeted yet.";
            return [hs_s226DdOL, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdYS = new $hs.Func(1);
        hs_sat26DdYS.evaluate = function (hs_tpl26DdOD) {
            if (hs_tpl26DdOD.notEvaluated) {
                return hs_tpl26DdOD.hscall();
            } else {
                return hs_tpl26DdOD;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdYS, hs_sat26DdYW);
    };
    this.hs_writeInt16OffPtr.evaluate = function (hs_ds26DdOQ, hs_ds126DdOT, hs_ds226DdOW) {
        var hs_wild26DdZ0 = hs_ds26DdOQ;
        if (hs_ds26DdOQ.notEvaluated) {
            hs_wild26DdZ0 = hs_ds26DdOQ.hscall();
        }
        var hs_a26DdP3 = hs_wild26DdZ0.data[0];
        var hs_wild126DdYZ = hs_ds126DdOT;
        if (hs_ds126DdOT.notEvaluated) {
            hs_wild126DdYZ = hs_ds126DdOT.hscall();
        }
        var hs_i26DdP4 = hs_wild126DdYZ.data[0];
        var hs_wild226DdYY = hs_ds226DdOW;
        if (hs_ds226DdOW.notEvaluated) {
            hs_wild226DdYY = hs_ds226DdOW.hscall();
        }
        var hs_x26DdP5 = hs_wild226DdYY.data[0];
        var hs_sat26DdZ1 = new $hs.Func(1);
        hs_sat26DdZ1.evaluate = function (hs_s26DdP6) {
            throw "primitive operation writeInt16OffAddr#. Not implemeted yet.";
            return [hs_s226DdP8, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdYX = new $hs.Func(1);
        hs_sat26DdYX.evaluate = function (hs_tpl26DdP0) {
            if (hs_tpl26DdP0.notEvaluated) {
                return hs_tpl26DdP0.hscall();
            } else {
                return hs_tpl26DdP0;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdYX, hs_sat26DdZ1);
    };
    this.hs_writeWord8OffPtr.evaluate = function (hs_ds26DdPd, hs_ds126DdPg, hs_ds226DdPj) {
        var hs_wild26DdZ5 = hs_ds26DdPd;
        if (hs_ds26DdPd.notEvaluated) {
            hs_wild26DdZ5 = hs_ds26DdPd.hscall();
        }
        var hs_a26DdPq = hs_wild26DdZ5.data[0];
        var hs_wild126DdZ4 = hs_ds126DdPg;
        if (hs_ds126DdPg.notEvaluated) {
            hs_wild126DdZ4 = hs_ds126DdPg.hscall();
        }
        var hs_i26DdPr = hs_wild126DdZ4.data[0];
        var hs_wild226DdZ3 = hs_ds226DdPj;
        if (hs_ds226DdPj.notEvaluated) {
            hs_wild226DdZ3 = hs_ds226DdPj.hscall();
        }
        var hs_x26DdPs = hs_wild226DdZ3.data[0];
        var hs_sat26DdZ6 = new $hs.Func(1);
        hs_sat26DdZ6.evaluate = function (hs_s26DdPt) {
            throw "primitive operation writeWord8OffAddr#. Not implemeted yet.";
            return [hs_s226DdPv, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZ2 = new $hs.Func(1);
        hs_sat26DdZ2.evaluate = function (hs_tpl26DdPn) {
            if (hs_tpl26DdPn.notEvaluated) {
                return hs_tpl26DdPn.hscall();
            } else {
                return hs_tpl26DdPn;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZ2, hs_sat26DdZ6);
    };
    this.hs_writeInt8OffPtr.evaluate = function (hs_ds26DdPA, hs_ds126DdPD, hs_ds226DdPG) {
        var hs_wild26DdZa = hs_ds26DdPA;
        if (hs_ds26DdPA.notEvaluated) {
            hs_wild26DdZa = hs_ds26DdPA.hscall();
        }
        var hs_a26DdPN = hs_wild26DdZa.data[0];
        var hs_wild126DdZ9 = hs_ds126DdPD;
        if (hs_ds126DdPD.notEvaluated) {
            hs_wild126DdZ9 = hs_ds126DdPD.hscall();
        }
        var hs_i26DdPO = hs_wild126DdZ9.data[0];
        var hs_wild226DdZ8 = hs_ds226DdPG;
        if (hs_ds226DdPG.notEvaluated) {
            hs_wild226DdZ8 = hs_ds226DdPG.hscall();
        }
        var hs_x26DdPP = hs_wild226DdZ8.data[0];
        var hs_sat26DdZb = new $hs.Func(1);
        hs_sat26DdZb.evaluate = function (hs_s26DdPQ) {
            throw "primitive operation writeInt8OffAddr#. Not implemeted yet.";
            return [hs_s226DdPS, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZ7 = new $hs.Func(1);
        hs_sat26DdZ7.evaluate = function (hs_tpl26DdPK) {
            if (hs_tpl26DdPK.notEvaluated) {
                return hs_tpl26DdPK.hscall();
            } else {
                return hs_tpl26DdPK;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZ7, hs_sat26DdZb);
    };
    this.hs_writeStablePtrOffPtr.evaluate = function (hs_ds26DdPX, hs_ds126DdQ0, hs_ds226DdQ3) {
        var hs_wild26DdZf = hs_ds26DdPX;
        if (hs_ds26DdPX.notEvaluated) {
            hs_wild26DdZf = hs_ds26DdPX.hscall();
        }
        var hs_a26DdQa = hs_wild26DdZf.data[0];
        var hs_wild126DdZe = hs_ds126DdQ0;
        if (hs_ds126DdQ0.notEvaluated) {
            hs_wild126DdZe = hs_ds126DdQ0.hscall();
        }
        var hs_i26DdQb = hs_wild126DdZe.data[0];
        var hs_wild226DdZd = hs_ds226DdQ3;
        if (hs_ds226DdQ3.notEvaluated) {
            hs_wild226DdZd = hs_ds226DdQ3.hscall();
        }
        var hs_x26DdQc = hs_wild226DdZd.data[0];
        var hs_sat26DdZg = new $hs.Func(1);
        hs_sat26DdZg.evaluate = function (hs_s26DdQd) {
            throw "primitive operation writeStablePtrOffAddr#. Not implemeted yet.";
            return [hs_s226DdQf, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZc = new $hs.Func(1);
        hs_sat26DdZc.evaluate = function (hs_tpl26DdQ7) {
            if (hs_tpl26DdQ7.notEvaluated) {
                return hs_tpl26DdQ7.hscall();
            } else {
                return hs_tpl26DdQ7;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZc, hs_sat26DdZg);
    };
    this.hs_writeDoubleOffPtr.evaluate = function (hs_ds26DdQk, hs_ds126DdQn, hs_ds226DdQq) {
        var hs_wild26DdZk = hs_ds26DdQk;
        if (hs_ds26DdQk.notEvaluated) {
            hs_wild26DdZk = hs_ds26DdQk.hscall();
        }
        var hs_a26DdQx = hs_wild26DdZk.data[0];
        var hs_wild126DdZj = hs_ds126DdQn;
        if (hs_ds126DdQn.notEvaluated) {
            hs_wild126DdZj = hs_ds126DdQn.hscall();
        }
        var hs_i26DdQy = hs_wild126DdZj.data[0];
        var hs_wild226DdZi = hs_ds226DdQq;
        if (hs_ds226DdQq.notEvaluated) {
            hs_wild226DdZi = hs_ds226DdQq.hscall();
        }
        var hs_x26DdQz = hs_wild226DdZi.data[0];
        var hs_sat26DdZl = new $hs.Func(1);
        hs_sat26DdZl.evaluate = function (hs_s26DdQA) {
            throw "primitive operation writeDoubleOffAddr#. Not implemeted yet.";
            return [hs_s226DdQC, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZh = new $hs.Func(1);
        hs_sat26DdZh.evaluate = function (hs_tpl26DdQu) {
            if (hs_tpl26DdQu.notEvaluated) {
                return hs_tpl26DdQu.hscall();
            } else {
                return hs_tpl26DdQu;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZh, hs_sat26DdZl);
    };
    this.hs_writeFloatOffPtr.evaluate = function (hs_ds26DdQH, hs_ds126DdQK, hs_ds226DdQN) {
        var hs_wild26DdZp = hs_ds26DdQH;
        if (hs_ds26DdQH.notEvaluated) {
            hs_wild26DdZp = hs_ds26DdQH.hscall();
        }
        var hs_a26DdQU = hs_wild26DdZp.data[0];
        var hs_wild126DdZo = hs_ds126DdQK;
        if (hs_ds126DdQK.notEvaluated) {
            hs_wild126DdZo = hs_ds126DdQK.hscall();
        }
        var hs_i26DdQV = hs_wild126DdZo.data[0];
        var hs_wild226DdZn = hs_ds226DdQN;
        if (hs_ds226DdQN.notEvaluated) {
            hs_wild226DdZn = hs_ds226DdQN.hscall();
        }
        var hs_x26DdQW = hs_wild226DdZn.data[0];
        var hs_sat26DdZq = new $hs.Func(1);
        hs_sat26DdZq.evaluate = function (hs_s26DdQX) {
            throw "primitive operation writeFloatOffAddr#. Not implemeted yet.";
            return [hs_s226DdQZ, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZm = new $hs.Func(1);
        hs_sat26DdZm.evaluate = function (hs_tpl26DdQR) {
            if (hs_tpl26DdQR.notEvaluated) {
                return hs_tpl26DdQR.hscall();
            } else {
                return hs_tpl26DdQR;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZm, hs_sat26DdZq);
    };
    this.hs_writeFunPtrOffPtr.evaluate = function (hs_ds26DdR4, hs_ds126DdR7, hs_ds226DdRa) {
        var hs_wild26DdZu = hs_ds26DdR4;
        if (hs_ds26DdR4.notEvaluated) {
            hs_wild26DdZu = hs_ds26DdR4.hscall();
        }
        var hs_a26DdRh = hs_wild26DdZu.data[0];
        var hs_wild126DdZt = hs_ds126DdR7;
        if (hs_ds126DdR7.notEvaluated) {
            hs_wild126DdZt = hs_ds126DdR7.hscall();
        }
        var hs_i26DdRi = hs_wild126DdZt.data[0];
        var hs_wild226DdZs = hs_ds226DdRa;
        if (hs_ds226DdRa.notEvaluated) {
            hs_wild226DdZs = hs_ds226DdRa.hscall();
        }
        var hs_x26DdRj = hs_wild226DdZs.data[0];
        var hs_sat26DdZv = new $hs.Func(1);
        hs_sat26DdZv.evaluate = function (hs_s26DdRk) {
            throw "primitive operation writeAddrOffAddr#. Not implemeted yet.";
            return [hs_s226DdRm, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZr = new $hs.Func(1);
        hs_sat26DdZr.evaluate = function (hs_tpl26DdRe) {
            if (hs_tpl26DdRe.notEvaluated) {
                return hs_tpl26DdRe.hscall();
            } else {
                return hs_tpl26DdRe;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZr, hs_sat26DdZv);
    };
    this.hs_writePtrOffPtr.evaluate = function (hs_ds26DdRr, hs_ds126DdRu, hs_ds226DdRx) {
        var hs_wild26DdZz = hs_ds26DdRr;
        if (hs_ds26DdRr.notEvaluated) {
            hs_wild26DdZz = hs_ds26DdRr.hscall();
        }
        var hs_a26DdRE = hs_wild26DdZz.data[0];
        var hs_wild126DdZy = hs_ds126DdRu;
        if (hs_ds126DdRu.notEvaluated) {
            hs_wild126DdZy = hs_ds126DdRu.hscall();
        }
        var hs_i26DdRF = hs_wild126DdZy.data[0];
        var hs_wild226DdZx = hs_ds226DdRx;
        if (hs_ds226DdRx.notEvaluated) {
            hs_wild226DdZx = hs_ds226DdRx.hscall();
        }
        var hs_x26DdRG = hs_wild226DdZx.data[0];
        var hs_sat26DdZA = new $hs.Func(1);
        hs_sat26DdZA.evaluate = function (hs_s26DdRH) {
            throw "primitive operation writeAddrOffAddr#. Not implemeted yet.";
            return [hs_s226DdRJ, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZw = new $hs.Func(1);
        hs_sat26DdZw.evaluate = function (hs_tpl26DdRB) {
            if (hs_tpl26DdRB.notEvaluated) {
                return hs_tpl26DdRB.hscall();
            } else {
                return hs_tpl26DdRB;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZw, hs_sat26DdZA);
    };
    this.hs_writeWordOffPtr.evaluate = function (hs_ds26DdRO, hs_ds126DdRR, hs_ds226DdRU) {
        var hs_wild26DdZE = hs_ds26DdRO;
        if (hs_ds26DdRO.notEvaluated) {
            hs_wild26DdZE = hs_ds26DdRO.hscall();
        }
        var hs_a26DdS1 = hs_wild26DdZE.data[0];
        var hs_wild126DdZD = hs_ds126DdRR;
        if (hs_ds126DdRR.notEvaluated) {
            hs_wild126DdZD = hs_ds126DdRR.hscall();
        }
        var hs_i26DdS2 = hs_wild126DdZD.data[0];
        var hs_wild226DdZC = hs_ds226DdRU;
        if (hs_ds226DdRU.notEvaluated) {
            hs_wild226DdZC = hs_ds226DdRU.hscall();
        }
        var hs_x26DdS3 = hs_wild226DdZC.data[0];
        var hs_sat26DdZF = new $hs.Func(1);
        hs_sat26DdZF.evaluate = function (hs_s26DdS4) {
            throw "primitive operation writeWordOffAddr#. Not implemeted yet.";
            return [hs_s226DdS6, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZB = new $hs.Func(1);
        hs_sat26DdZB.evaluate = function (hs_tpl26DdRY) {
            if (hs_tpl26DdRY.notEvaluated) {
                return hs_tpl26DdRY.hscall();
            } else {
                return hs_tpl26DdRY;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZB, hs_sat26DdZF);
    };
    this.hs_writeIntOffPtr.evaluate = function (hs_ds26DdSb, hs_ds126DdSe, hs_ds226DdSh) {
        var hs_wild26DdZJ = hs_ds26DdSb;
        if (hs_ds26DdSb.notEvaluated) {
            hs_wild26DdZJ = hs_ds26DdSb.hscall();
        }
        var hs_a26DdSo = hs_wild26DdZJ.data[0];
        var hs_wild126DdZI = hs_ds126DdSe;
        if (hs_ds126DdSe.notEvaluated) {
            hs_wild126DdZI = hs_ds126DdSe.hscall();
        }
        var hs_i26DdSp = hs_wild126DdZI.data[0];
        var hs_wild226DdZH = hs_ds226DdSh;
        if (hs_ds226DdSh.notEvaluated) {
            hs_wild226DdZH = hs_ds226DdSh.hscall();
        }
        var hs_x26DdSq = hs_wild226DdZH.data[0];
        var hs_sat26DdZK = new $hs.Func(1);
        hs_sat26DdZK.evaluate = function (hs_s26DdSr) {
            throw "primitive operation writeIntOffAddr#. Not implemeted yet.";
            return [hs_s226DdSt, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZG = new $hs.Func(1);
        hs_sat26DdZG.evaluate = function (hs_tpl26DdSl) {
            if (hs_tpl26DdSl.notEvaluated) {
                return hs_tpl26DdSl.hscall();
            } else {
                return hs_tpl26DdSl;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZG, hs_sat26DdZK);
    };
    this.hs_writeWideCharOffPtr.evaluate = function (hs_ds26DdSy, hs_ds126DdSB, hs_ds226DdSE) {
        var hs_wild26DdZO = hs_ds26DdSy;
        if (hs_ds26DdSy.notEvaluated) {
            hs_wild26DdZO = hs_ds26DdSy.hscall();
        }
        var hs_a26DdSL = hs_wild26DdZO.data[0];
        var hs_wild126DdZN = hs_ds126DdSB;
        if (hs_ds126DdSB.notEvaluated) {
            hs_wild126DdZN = hs_ds126DdSB.hscall();
        }
        var hs_i26DdSM = hs_wild126DdZN.data[0];
        var hs_wild226DdZM = hs_ds226DdSE;
        if (hs_ds226DdSE.notEvaluated) {
            hs_wild226DdZM = hs_ds226DdSE.hscall();
        }
        var hs_x26DdSN = hs_wild226DdZM.data[0];
        var hs_sat26DdZP = new $hs.Func(1);
        hs_sat26DdZP.evaluate = function (hs_s26DdSO) {
            throw "primitive operation writeWideCharOffAddr#. Not implemeted yet.";
            return [hs_s226DdSQ, $hs.modules.GHCziUnit.hs_Z0T];
        };
        var hs_sat26DdZL = new $hs.Func(1);
        hs_sat26DdZL.evaluate = function (hs_tpl26DdSI) {
            if (hs_tpl26DdSI.notEvaluated) {
                return hs_tpl26DdSI.hscall();
            } else {
                return hs_tpl26DdSI;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZL, hs_sat26DdZP);
    };
    this.hs_readWord64OffPtr.evaluate = function (hs_ds26DdSU, hs_ds126DdSX) {
        var hs_wild26DdZS = hs_ds26DdSU;
        if (hs_ds26DdSU.notEvaluated) {
            hs_wild26DdZS = hs_ds26DdSU.hscall();
        }
        var hs_a26DdT4 = hs_wild26DdZS.data[0];
        var hs_wild126DdZR = hs_ds126DdSX;
        if (hs_ds126DdSX.notEvaluated) {
            hs_wild126DdZR = hs_ds126DdSX.hscall();
        }
        var hs_i26DdT5 = hs_wild126DdZR.data[0];
        var hs_sat26DdZT = new $hs.Func(1);
        hs_sat26DdZT.evaluate = function (hs_s26DdT6) {
            throw "primitive operation readWord64OffAddr#. Not implemeted yet.";
            var hs_s226DdTa = hs_wild226DdZV[0];
            var hs_x26DdTb = hs_wild226DdZV[1];
            var hs_sat26DdZU = new $hs.Data(1);
            hs_sat26DdZU.data = [hs_x26DdTb];
            return [hs_s226DdTa, hs_sat26DdZU];
        };
        var hs_sat26DdZQ = new $hs.Func(1);
        hs_sat26DdZQ.evaluate = function (hs_tpl26DdT1) {
            if (hs_tpl26DdT1.notEvaluated) {
                return hs_tpl26DdT1.hscall();
            } else {
                return hs_tpl26DdT1;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZQ, hs_sat26DdZT);
    };
    this.hs_readInt64OffPtr.evaluate = function (hs_ds26DdTg, hs_ds126DdTj) {
        var hs_wild26DdZY = hs_ds26DdTg;
        if (hs_ds26DdTg.notEvaluated) {
            hs_wild26DdZY = hs_ds26DdTg.hscall();
        }
        var hs_a26DdTq = hs_wild26DdZY.data[0];
        var hs_wild126DdZX = hs_ds126DdTj;
        if (hs_ds126DdTj.notEvaluated) {
            hs_wild126DdZX = hs_ds126DdTj.hscall();
        }
        var hs_i26DdTr = hs_wild126DdZX.data[0];
        var hs_sat26DdZZ = new $hs.Func(1);
        hs_sat26DdZZ.evaluate = function (hs_s26DdTs) {
            throw "primitive operation readInt64OffAddr#. Not implemeted yet.";
            var hs_s226DdTw = hs_wild226De01[0];
            var hs_x26DdTx = hs_wild226De01[1];
            var hs_sat26De00 = new $hs.Data(1);
            hs_sat26De00.data = [hs_x26DdTx];
            return [hs_s226DdTw, hs_sat26De00];
        };
        var hs_sat26DdZW = new $hs.Func(1);
        hs_sat26DdZW.evaluate = function (hs_tpl26DdTn) {
            if (hs_tpl26DdTn.notEvaluated) {
                return hs_tpl26DdTn.hscall();
            } else {
                return hs_tpl26DdTn;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DdZW, hs_sat26DdZZ);
    };
    this.hs_readWord32OffPtr.evaluate = function (hs_ds26DdTC, hs_ds126DdTF) {
        var hs_wild26De04 = hs_ds26DdTC;
        if (hs_ds26DdTC.notEvaluated) {
            hs_wild26De04 = hs_ds26DdTC.hscall();
        }
        var hs_a26DdTM = hs_wild26De04.data[0];
        var hs_wild126De03 = hs_ds126DdTF;
        if (hs_ds126DdTF.notEvaluated) {
            hs_wild126De03 = hs_ds126DdTF.hscall();
        }
        var hs_i26DdTN = hs_wild126De03.data[0];
        var hs_sat26De05 = new $hs.Func(1);
        hs_sat26De05.evaluate = function (hs_s26DdTO) {
            throw "primitive operation readWord32OffAddr#. Not implemeted yet.";
            var hs_s226DdTS = hs_wild226De07[0];
            var hs_x26DdTT = hs_wild226De07[1];
            var hs_sat26De06 = new $hs.Data(1);
            hs_sat26De06.data = [hs_x26DdTT];
            return [hs_s226DdTS, hs_sat26De06];
        };
        var hs_sat26De02 = new $hs.Func(1);
        hs_sat26De02.evaluate = function (hs_tpl26DdTJ) {
            if (hs_tpl26DdTJ.notEvaluated) {
                return hs_tpl26DdTJ.hscall();
            } else {
                return hs_tpl26DdTJ;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De02, hs_sat26De05);
    };
    this.hs_readInt32OffPtr.evaluate = function (hs_ds26DdTY, hs_ds126DdU1) {
        var hs_wild26De0a = hs_ds26DdTY;
        if (hs_ds26DdTY.notEvaluated) {
            hs_wild26De0a = hs_ds26DdTY.hscall();
        }
        var hs_a26DdU8 = hs_wild26De0a.data[0];
        var hs_wild126De09 = hs_ds126DdU1;
        if (hs_ds126DdU1.notEvaluated) {
            hs_wild126De09 = hs_ds126DdU1.hscall();
        }
        var hs_i26DdU9 = hs_wild126De09.data[0];
        var hs_sat26De0b = new $hs.Func(1);
        hs_sat26De0b.evaluate = function (hs_s26DdUa) {
            throw "primitive operation readInt32OffAddr#. Not implemeted yet.";
            var hs_s226DdUe = hs_wild226De0d[0];
            var hs_x26DdUf = hs_wild226De0d[1];
            var hs_sat26De0c = new $hs.Data(1);
            hs_sat26De0c.data = [hs_x26DdUf];
            return [hs_s226DdUe, hs_sat26De0c];
        };
        var hs_sat26De08 = new $hs.Func(1);
        hs_sat26De08.evaluate = function (hs_tpl26DdU5) {
            if (hs_tpl26DdU5.notEvaluated) {
                return hs_tpl26DdU5.hscall();
            } else {
                return hs_tpl26DdU5;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De08, hs_sat26De0b);
    };
    this.hs_readWord16OffPtr.evaluate = function (hs_ds26DdUk, hs_ds126DdUn) {
        var hs_wild26De0g = hs_ds26DdUk;
        if (hs_ds26DdUk.notEvaluated) {
            hs_wild26De0g = hs_ds26DdUk.hscall();
        }
        var hs_a26DdUu = hs_wild26De0g.data[0];
        var hs_wild126De0f = hs_ds126DdUn;
        if (hs_ds126DdUn.notEvaluated) {
            hs_wild126De0f = hs_ds126DdUn.hscall();
        }
        var hs_i26DdUv = hs_wild126De0f.data[0];
        var hs_sat26De0h = new $hs.Func(1);
        hs_sat26De0h.evaluate = function (hs_s26DdUw) {
            throw "primitive operation readWord16OffAddr#. Not implemeted yet.";
            var hs_s226DdUA = hs_wild226De0j[0];
            var hs_x26DdUB = hs_wild226De0j[1];
            var hs_sat26De0i = new $hs.Data(1);
            hs_sat26De0i.data = [hs_x26DdUB];
            return [hs_s226DdUA, hs_sat26De0i];
        };
        var hs_sat26De0e = new $hs.Func(1);
        hs_sat26De0e.evaluate = function (hs_tpl26DdUr) {
            if (hs_tpl26DdUr.notEvaluated) {
                return hs_tpl26DdUr.hscall();
            } else {
                return hs_tpl26DdUr;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0e, hs_sat26De0h);
    };
    this.hs_readInt16OffPtr.evaluate = function (hs_ds26DdUG, hs_ds126DdUJ) {
        var hs_wild26De0m = hs_ds26DdUG;
        if (hs_ds26DdUG.notEvaluated) {
            hs_wild26De0m = hs_ds26DdUG.hscall();
        }
        var hs_a26DdUQ = hs_wild26De0m.data[0];
        var hs_wild126De0l = hs_ds126DdUJ;
        if (hs_ds126DdUJ.notEvaluated) {
            hs_wild126De0l = hs_ds126DdUJ.hscall();
        }
        var hs_i26DdUR = hs_wild126De0l.data[0];
        var hs_sat26De0n = new $hs.Func(1);
        hs_sat26De0n.evaluate = function (hs_s26DdUS) {
            throw "primitive operation readInt16OffAddr#. Not implemeted yet.";
            var hs_s226DdUW = hs_wild226De0p[0];
            var hs_x26DdUX = hs_wild226De0p[1];
            var hs_sat26De0o = new $hs.Data(1);
            hs_sat26De0o.data = [hs_x26DdUX];
            return [hs_s226DdUW, hs_sat26De0o];
        };
        var hs_sat26De0k = new $hs.Func(1);
        hs_sat26De0k.evaluate = function (hs_tpl26DdUN) {
            if (hs_tpl26DdUN.notEvaluated) {
                return hs_tpl26DdUN.hscall();
            } else {
                return hs_tpl26DdUN;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0k, hs_sat26De0n);
    };
    this.hs_readWord8OffPtr.evaluate = function (hs_ds26DdV2, hs_ds126DdV5) {
        var hs_wild26De0s = hs_ds26DdV2;
        if (hs_ds26DdV2.notEvaluated) {
            hs_wild26De0s = hs_ds26DdV2.hscall();
        }
        var hs_a26DdVc = hs_wild26De0s.data[0];
        var hs_wild126De0r = hs_ds126DdV5;
        if (hs_ds126DdV5.notEvaluated) {
            hs_wild126De0r = hs_ds126DdV5.hscall();
        }
        var hs_i26DdVd = hs_wild126De0r.data[0];
        var hs_sat26De0t = new $hs.Func(1);
        hs_sat26De0t.evaluate = function (hs_s26DdVe) {
            throw "primitive operation readWord8OffAddr#. Not implemeted yet.";
            var hs_s226DdVi = hs_wild226De0v[0];
            var hs_x26DdVj = hs_wild226De0v[1];
            var hs_sat26De0u = new $hs.Data(1);
            hs_sat26De0u.data = [hs_x26DdVj];
            return [hs_s226DdVi, hs_sat26De0u];
        };
        var hs_sat26De0q = new $hs.Func(1);
        hs_sat26De0q.evaluate = function (hs_tpl26DdV9) {
            if (hs_tpl26DdV9.notEvaluated) {
                return hs_tpl26DdV9.hscall();
            } else {
                return hs_tpl26DdV9;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0q, hs_sat26De0t);
    };
    this.hs_readInt8OffPtr.evaluate = function (hs_ds26DdVo, hs_ds126DdVr) {
        var hs_wild26De0y = hs_ds26DdVo;
        if (hs_ds26DdVo.notEvaluated) {
            hs_wild26De0y = hs_ds26DdVo.hscall();
        }
        var hs_a26DdVy = hs_wild26De0y.data[0];
        var hs_wild126De0x = hs_ds126DdVr;
        if (hs_ds126DdVr.notEvaluated) {
            hs_wild126De0x = hs_ds126DdVr.hscall();
        }
        var hs_i26DdVz = hs_wild126De0x.data[0];
        var hs_sat26De0z = new $hs.Func(1);
        hs_sat26De0z.evaluate = function (hs_s26DdVA) {
            throw "primitive operation readInt8OffAddr#. Not implemeted yet.";
            var hs_s226DdVE = hs_wild226De0B[0];
            var hs_x26DdVF = hs_wild226De0B[1];
            var hs_sat26De0A = new $hs.Data(1);
            hs_sat26De0A.data = [hs_x26DdVF];
            return [hs_s226DdVE, hs_sat26De0A];
        };
        var hs_sat26De0w = new $hs.Func(1);
        hs_sat26De0w.evaluate = function (hs_tpl26DdVv) {
            if (hs_tpl26DdVv.notEvaluated) {
                return hs_tpl26DdVv.hscall();
            } else {
                return hs_tpl26DdVv;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0w, hs_sat26De0z);
    };
    this.hs_readStablePtrOffPtr.evaluate = function (hs_ds26DdVK, hs_ds126DdVN) {
        var hs_wild26De0E = hs_ds26DdVK;
        if (hs_ds26DdVK.notEvaluated) {
            hs_wild26De0E = hs_ds26DdVK.hscall();
        }
        var hs_a26DdVU = hs_wild26De0E.data[0];
        var hs_wild126De0D = hs_ds126DdVN;
        if (hs_ds126DdVN.notEvaluated) {
            hs_wild126De0D = hs_ds126DdVN.hscall();
        }
        var hs_i26DdVV = hs_wild126De0D.data[0];
        var hs_sat26De0F = new $hs.Func(1);
        hs_sat26De0F.evaluate = function (hs_s26DdVW) {
            throw "primitive operation readStablePtrOffAddr#. Not implemeted yet.";
            var hs_s226DdW0 = hs_wild226De0H[0];
            var hs_x26DdW1 = hs_wild226De0H[1];
            var hs_sat26De0G = new $hs.Data(1);
            hs_sat26De0G.data = [hs_x26DdW1];
            return [hs_s226DdW0, hs_sat26De0G];
        };
        var hs_sat26De0C = new $hs.Func(1);
        hs_sat26De0C.evaluate = function (hs_tpl26DdVR) {
            if (hs_tpl26DdVR.notEvaluated) {
                return hs_tpl26DdVR.hscall();
            } else {
                return hs_tpl26DdVR;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0C, hs_sat26De0F);
    };
    this.hs_readDoubleOffPtr.evaluate = function (hs_ds26DdW6, hs_ds126DdW9) {
        var hs_wild26De0K = hs_ds26DdW6;
        if (hs_ds26DdW6.notEvaluated) {
            hs_wild26De0K = hs_ds26DdW6.hscall();
        }
        var hs_a26DdWg = hs_wild26De0K.data[0];
        var hs_wild126De0J = hs_ds126DdW9;
        if (hs_ds126DdW9.notEvaluated) {
            hs_wild126De0J = hs_ds126DdW9.hscall();
        }
        var hs_i26DdWh = hs_wild126De0J.data[0];
        var hs_sat26De0L = new $hs.Func(1);
        hs_sat26De0L.evaluate = function (hs_s26DdWi) {
            throw "primitive operation readDoubleOffAddr#. Not implemeted yet.";
            var hs_s226DdWm = hs_wild226De0N[0];
            var hs_x26DdWn = hs_wild226De0N[1];
            var hs_sat26De0M = new $hs.Data(1);
            hs_sat26De0M.data = [hs_x26DdWn];
            return [hs_s226DdWm, hs_sat26De0M];
        };
        var hs_sat26De0I = new $hs.Func(1);
        hs_sat26De0I.evaluate = function (hs_tpl26DdWd) {
            if (hs_tpl26DdWd.notEvaluated) {
                return hs_tpl26DdWd.hscall();
            } else {
                return hs_tpl26DdWd;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0I, hs_sat26De0L);
    };
    this.hs_readFloatOffPtr.evaluate = function (hs_ds26DdWs, hs_ds126DdWv) {
        var hs_wild26De0Q = hs_ds26DdWs;
        if (hs_ds26DdWs.notEvaluated) {
            hs_wild26De0Q = hs_ds26DdWs.hscall();
        }
        var hs_a26DdWC = hs_wild26De0Q.data[0];
        var hs_wild126De0P = hs_ds126DdWv;
        if (hs_ds126DdWv.notEvaluated) {
            hs_wild126De0P = hs_ds126DdWv.hscall();
        }
        var hs_i26DdWD = hs_wild126De0P.data[0];
        var hs_sat26De0R = new $hs.Func(1);
        hs_sat26De0R.evaluate = function (hs_s26DdWE) {
            throw "primitive operation readFloatOffAddr#. Not implemeted yet.";
            var hs_s226DdWI = hs_wild226De0T[0];
            var hs_x26DdWJ = hs_wild226De0T[1];
            var hs_sat26De0S = new $hs.Data(1);
            hs_sat26De0S.data = [hs_x26DdWJ];
            return [hs_s226DdWI, hs_sat26De0S];
        };
        var hs_sat26De0O = new $hs.Func(1);
        hs_sat26De0O.evaluate = function (hs_tpl26DdWz) {
            if (hs_tpl26DdWz.notEvaluated) {
                return hs_tpl26DdWz.hscall();
            } else {
                return hs_tpl26DdWz;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0O, hs_sat26De0R);
    };
    this.hs_readFunPtrOffPtr.evaluate = function (hs_ds26DdWO, hs_ds126DdWR) {
        var hs_wild26De0W = hs_ds26DdWO;
        if (hs_ds26DdWO.notEvaluated) {
            hs_wild26De0W = hs_ds26DdWO.hscall();
        }
        var hs_a26DdWY = hs_wild26De0W.data[0];
        var hs_wild126De0V = hs_ds126DdWR;
        if (hs_ds126DdWR.notEvaluated) {
            hs_wild126De0V = hs_ds126DdWR.hscall();
        }
        var hs_i26DdWZ = hs_wild126De0V.data[0];
        var hs_sat26De0X = new $hs.Func(1);
        hs_sat26De0X.evaluate = function (hs_s26DdX0) {
            throw "primitive operation readAddrOffAddr#. Not implemeted yet.";
            var hs_s226DdX4 = hs_wild226De0Z[0];
            var hs_x26DdX5 = hs_wild226De0Z[1];
            var hs_sat26De0Y = new $hs.Data(1);
            hs_sat26De0Y.data = [hs_x26DdX5];
            return [hs_s226DdX4, hs_sat26De0Y];
        };
        var hs_sat26De0U = new $hs.Func(1);
        hs_sat26De0U.evaluate = function (hs_tpl26DdWV) {
            if (hs_tpl26DdWV.notEvaluated) {
                return hs_tpl26DdWV.hscall();
            } else {
                return hs_tpl26DdWV;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De0U, hs_sat26De0X);
    };
    this.hs_readPtrOffPtr.evaluate = function (hs_ds26DdXa, hs_ds126DdXd) {
        var hs_wild26De12 = hs_ds26DdXa;
        if (hs_ds26DdXa.notEvaluated) {
            hs_wild26De12 = hs_ds26DdXa.hscall();
        }
        var hs_a26DdXk = hs_wild26De12.data[0];
        var hs_wild126De11 = hs_ds126DdXd;
        if (hs_ds126DdXd.notEvaluated) {
            hs_wild126De11 = hs_ds126DdXd.hscall();
        }
        var hs_i26DdXl = hs_wild126De11.data[0];
        var hs_sat26De13 = new $hs.Func(1);
        hs_sat26De13.evaluate = function (hs_s26DdXm) {
            throw "primitive operation readAddrOffAddr#. Not implemeted yet.";
            var hs_s226DdXq = hs_wild226De15[0];
            var hs_x26DdXr = hs_wild226De15[1];
            var hs_sat26De14 = new $hs.Data(1);
            hs_sat26De14.data = [hs_x26DdXr];
            return [hs_s226DdXq, hs_sat26De14];
        };
        var hs_sat26De10 = new $hs.Func(1);
        hs_sat26De10.evaluate = function (hs_tpl26DdXh) {
            if (hs_tpl26DdXh.notEvaluated) {
                return hs_tpl26DdXh.hscall();
            } else {
                return hs_tpl26DdXh;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De10, hs_sat26De13);
    };
    this.hs_readWordOffPtr.evaluate = function (hs_ds26DdXw, hs_ds126DdXz) {
        var hs_wild26De18 = hs_ds26DdXw;
        if (hs_ds26DdXw.notEvaluated) {
            hs_wild26De18 = hs_ds26DdXw.hscall();
        }
        var hs_a26DdXG = hs_wild26De18.data[0];
        var hs_wild126De17 = hs_ds126DdXz;
        if (hs_ds126DdXz.notEvaluated) {
            hs_wild126De17 = hs_ds126DdXz.hscall();
        }
        var hs_i26DdXH = hs_wild126De17.data[0];
        var hs_sat26De19 = new $hs.Func(1);
        hs_sat26De19.evaluate = function (hs_s26DdXI) {
            throw "primitive operation readWordOffAddr#. Not implemeted yet.";
            var hs_s226DdXM = hs_wild226De1b[0];
            var hs_x26DdXN = hs_wild226De1b[1];
            var hs_sat26De1a = new $hs.Data(1);
            hs_sat26De1a.data = [hs_x26DdXN];
            return [hs_s226DdXM, hs_sat26De1a];
        };
        var hs_sat26De16 = new $hs.Func(1);
        hs_sat26De16.evaluate = function (hs_tpl26DdXD) {
            if (hs_tpl26DdXD.notEvaluated) {
                return hs_tpl26DdXD.hscall();
            } else {
                return hs_tpl26DdXD;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De16, hs_sat26De19);
    };
    this.hs_readIntOffPtr.evaluate = function (hs_ds26DdXS, hs_ds126DdXV) {
        var hs_wild26De1e = hs_ds26DdXS;
        if (hs_ds26DdXS.notEvaluated) {
            hs_wild26De1e = hs_ds26DdXS.hscall();
        }
        var hs_a26DdY2 = hs_wild26De1e.data[0];
        var hs_wild126De1d = hs_ds126DdXV;
        if (hs_ds126DdXV.notEvaluated) {
            hs_wild126De1d = hs_ds126DdXV.hscall();
        }
        var hs_i26DdY3 = hs_wild126De1d.data[0];
        var hs_sat26De1f = new $hs.Func(1);
        hs_sat26De1f.evaluate = function (hs_s26DdY4) {
            throw "primitive operation readIntOffAddr#. Not implemeted yet.";
            var hs_s226DdY8 = hs_wild226De1h[0];
            var hs_x26DdY9 = hs_wild226De1h[1];
            var hs_sat26De1g = new $hs.Data(1);
            hs_sat26De1g.data = [hs_x26DdY9];
            return [hs_s226DdY8, hs_sat26De1g];
        };
        var hs_sat26De1c = new $hs.Func(1);
        hs_sat26De1c.evaluate = function (hs_tpl26DdXZ) {
            if (hs_tpl26DdXZ.notEvaluated) {
                return hs_tpl26DdXZ.hscall();
            } else {
                return hs_tpl26DdXZ;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De1c, hs_sat26De1f);
    };
    this.hs_readWideCharOffPtr.evaluate = function (hs_ds26DdYe, hs_ds126DdYh) {
        var hs_wild26De1k = hs_ds26DdYe;
        if (hs_ds26DdYe.notEvaluated) {
            hs_wild26De1k = hs_ds26DdYe.hscall();
        }
        var hs_a26DdYo = hs_wild26De1k.data[0];
        var hs_wild126De1j = hs_ds126DdYh;
        if (hs_ds126DdYh.notEvaluated) {
            hs_wild126De1j = hs_ds126DdYh.hscall();
        }
        var hs_i26DdYp = hs_wild126De1j.data[0];
        var hs_sat26De1l = new $hs.Func(1);
        hs_sat26De1l.evaluate = function (hs_s26DdYq) {
            throw "primitive operation readWideCharOffAddr#. Not implemeted yet.";
            var hs_s226DdYu = hs_wild226De1n[0];
            var hs_x26DdYv = hs_wild226De1n[1];
            var hs_sat26De1m = new $hs.Data(1);
            hs_sat26De1m.data = [hs_x26DdYv];
            return [hs_s226DdYu, hs_sat26De1m];
        };
        var hs_sat26De1i = new $hs.Func(1);
        hs_sat26De1i.evaluate = function (hs_tpl26DdYl) {
            if (hs_tpl26DdYl.notEvaluated) {
                return hs_tpl26DdYl.hscall();
            } else {
                return hs_tpl26DdYl;
            }
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26De1i, hs_sat26De1l);
    };
};

$hs.modules.DataziBits = new $hs.Module();
$hs.modules.DataziBits.dependencies = ["GHC.CString", "GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Err", "GHC.Classes"];
$hs.modules.DataziBits.initBeforeDependencies = function () {
    this.hs_zdp1Bits = new $hs.Func(1);
    this.hs_zizazi = new $hs.Func(1);
    this.hs_zizbzi = new $hs.Func(1);
    this.hs_xor = new $hs.Func(1);
    this.hs_complement = new $hs.Func(1);
    this.hs_shift = new $hs.Func(1);
    this.hs_rotate = new $hs.Func(1);
    this.hs_bit = new $hs.Func(1);
    this.hs_setBit = new $hs.Func(1);
    this.hs_clearBit = new $hs.Func(1);
    this.hs_complementBit = new $hs.Func(1);
    this.hs_testBit = new $hs.Func(1);
    this.hs_bitSizze = new $hs.Func(1);
    this.hs_isSigned = new $hs.Func(1);
    this.hs_shiftL = new $hs.Func(1);
    this.hs_shiftR = new $hs.Func(1);
    this.hs_rotateL = new $hs.Func(1);
    this.hs_rotateR = new $hs.Func(1);
    this.hs_zddmrotateR = new $hs.Func(3);
    this.hs_zddmrotateL = new $hs.Func(3);
    this.hs_zddmshiftR = new $hs.Func(3);
    this.hs_zddmshiftL = new $hs.Func(3);
    this.hs_zddmtestBit = new $hs.Func(3);
    this.hs_zddmcomplementBit = new $hs.Func(3);
    this.hs_zddmclearBit = new $hs.Func(3);
    this.hs_zddmsetBit = new $hs.Func(3);
    this.hs_zddmbit = new $hs.Func(2);
    this.hs_zddmrotate = new $hs.Func(3);
    this.hs_zddmshift = new $hs.Func(3);
    this.hs_zdfBitsInt = new $hs.Data(1);
    this.hs_zdfBitsInteger = new $hs.Data(1);
    this.hs_DZCBits = new $hs.Func(18);
    this.hs_zdp1Bits.notEvaluated = true;
    this.hs_zdp1Bits.evaluate = function (hs_tpl26Dgy5) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26Dgy5);
    };
    this.hs_zizazi.notEvaluated = true;
    this.hs_zizazi.evaluate = function (hs_tpl26Dgyr) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26Dgyr);
    };
    this.hs_zizbzi.notEvaluated = true;
    this.hs_zizbzi.evaluate = function (hs_tpl26DgyN) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgyN);
    };
    this.hs_xor.notEvaluated = true;
    this.hs_xor.evaluate = function (hs_tpl26Dgz9) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26Dgz9);
    };
    this.hs_complement.notEvaluated = true;
    this.hs_complement.evaluate = function (hs_tpl26Dgzv) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26Dgzv);
    };
    this.hs_shift.notEvaluated = true;
    this.hs_shift.evaluate = function (hs_tpl26DgzR) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgzR);
    };
    this.hs_rotate.notEvaluated = true;
    this.hs_rotate.evaluate = function (hs_tpl26DgAd) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgAd);
    };
    this.hs_bit.notEvaluated = true;
    this.hs_bit.evaluate = function (hs_tpl26DgAz) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgAz);
    };
    this.hs_setBit.notEvaluated = true;
    this.hs_setBit.evaluate = function (hs_tpl26DgAV) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgAV);
    };
    this.hs_clearBit.notEvaluated = true;
    this.hs_clearBit.evaluate = function (hs_tpl26DgBh) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgBh);
    };
    this.hs_complementBit.notEvaluated = true;
    this.hs_complementBit.evaluate = function (hs_tpl26DgBD) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgBD);
    };
    this.hs_testBit.notEvaluated = true;
    this.hs_testBit.evaluate = function (hs_tpl26DgBZ) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgBZ);
    };
    this.hs_bitSizze.notEvaluated = true;
    this.hs_bitSizze.evaluate = function (hs_tpl26DgCl) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgCl);
    };
    this.hs_isSigned.notEvaluated = true;
    this.hs_isSigned.evaluate = function (hs_tpl26DgCH) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgCH);
    };
    this.hs_shiftL.notEvaluated = true;
    this.hs_shiftL.evaluate = function (hs_tpl26DgD3) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgD3);
    };
    this.hs_shiftR.notEvaluated = true;
    this.hs_shiftR.evaluate = function (hs_tpl26DgDp) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgDp);
    };
    this.hs_rotateL.notEvaluated = true;
    this.hs_rotateL.evaluate = function (hs_tpl26DgDL) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgDL);
    };
    this.hs_rotateR.notEvaluated = true;
    this.hs_rotateR.evaluate = function (hs_tpl26DgE7) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DgE7);
    };
    this.hs_zddmrotateR.notEvaluated = true;
    this.hs_zddmrotateR.evaluate = function (hs_zddBits26DgEv, hs_x26DgEw, hs_i26DgEx) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgEv, hs_x26DgEw, hs_i26DgEx);
    };
    this.hs_zddmrotateL.notEvaluated = true;
    this.hs_zddmrotateL.evaluate = function (hs_zddBits26DgEC, hs_x26DgED, hs_i26DgEE) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgEC, hs_x26DgED, hs_i26DgEE);
    };
    this.hs_zddmshiftR.notEvaluated = true;
    this.hs_zddmshiftR.evaluate = function (hs_zddBits26DgEI, hs_x26DgEJ, hs_i26DgEK) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgEI, hs_x26DgEJ, hs_i26DgEK);
    };
    this.hs_zddmshiftL.notEvaluated = true;
    this.hs_zddmshiftL.evaluate = function (hs_zddBits26DgEP, hs_x26DgEQ, hs_i26DgER) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgEP, hs_x26DgEQ, hs_i26DgER);
    };
    this.hs_zddmtestBit.notEvaluated = true;
    this.hs_zddmtestBit.evaluate = function (hs_zddBits26DgEW, hs_eta26DgEZ, hs_eta126DgF0) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgEW, hs_eta26DgEZ, hs_eta126DgF0);
    };
    this.hs_zddmcomplementBit.notEvaluated = true;
    this.hs_zddmcomplementBit.evaluate = function (hs_zddBits26DgF8, hs_x26DgF9, hs_i26DgFa) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgF8, hs_x26DgF9, hs_i26DgFa);
    };
    this.hs_zddmclearBit.notEvaluated = true;
    this.hs_zddmclearBit.evaluate = function (hs_zddBits26DgFf, hs_x26DgFg, hs_i26DgFh) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgFf, hs_x26DgFg, hs_i26DgFh);
    };
    this.hs_zddmsetBit.notEvaluated = true;
    this.hs_zddmsetBit.evaluate = function (hs_zddBits26DgFn, hs_x26DgFo, hs_i26DgFp) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgFn, hs_x26DgFo, hs_i26DgFp);
    };
    this.hs_zddmbit.notEvaluated = true;
    this.hs_zddmbit.evaluate = function (hs_zddBits26DgFt, hs_eta26DgFx) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgFt, hs_eta26DgFx);
    };
    this.hs_zddmrotate.notEvaluated = true;
    this.hs_zddmrotate.evaluate = function (hs_zddBits26DgFH, hs_x26DgFG, hs_i26DgFB) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgFH, hs_x26DgFG, hs_i26DgFB);
    };
    this.hs_zddmshift.notEvaluated = true;
    this.hs_zddmshift.evaluate = function (hs_zddBits26DgFS, hs_x26DgFR, hs_i26DgFM) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DgFS, hs_x26DgFR, hs_i26DgFM);
    };
    this.hs_zdfBitsInt.notEvaluated = true;
    this.hs_zdfBitsInt.evaluate = function () {
        $hs.modules.DataziBits.loadDependencies();
        return this;
    };
    this.hs_zdfBitsInteger.notEvaluated = true;
    this.hs_zdfBitsInteger.evaluate = function () {
        $hs.modules.DataziBits.loadDependencies();
        return this;
    };
    this.hs_DZCBits.notEvaluated = true;
    this.hs_DZCBits.evaluate = function (hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.DataziBits.initAfterDependencies = function () {
    this.hs_zdp1Bits.notEvaluated = false;
    this.hs_zizazi.notEvaluated = false;
    this.hs_zizbzi.notEvaluated = false;
    this.hs_xor.notEvaluated = false;
    this.hs_complement.notEvaluated = false;
    this.hs_shift.notEvaluated = false;
    this.hs_rotate.notEvaluated = false;
    this.hs_bit.notEvaluated = false;
    this.hs_setBit.notEvaluated = false;
    this.hs_clearBit.notEvaluated = false;
    this.hs_complementBit.notEvaluated = false;
    this.hs_testBit.notEvaluated = false;
    this.hs_bitSizze.notEvaluated = false;
    this.hs_isSigned.notEvaluated = false;
    this.hs_shiftL.notEvaluated = false;
    this.hs_shiftR.notEvaluated = false;
    this.hs_rotateL.notEvaluated = false;
    this.hs_rotateR.notEvaluated = false;
    this.hs_zddmrotateR.notEvaluated = false;
    this.hs_zddmrotateL.notEvaluated = false;
    this.hs_zddmshiftR.notEvaluated = false;
    this.hs_zddmshiftL.notEvaluated = false;
    this.hs_zddmtestBit.notEvaluated = false;
    this.hs_zddmcomplementBit.notEvaluated = false;
    this.hs_zddmclearBit.notEvaluated = false;
    this.hs_zddmsetBit.notEvaluated = false;
    this.hs_zddmbit.notEvaluated = false;
    this.hs_zddmrotate.notEvaluated = false;
    this.hs_zddmshift.notEvaluated = false;
    this.hs_zdfBitsInt.notEvaluated = false;
    this.hs_zdfBitsInt.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsInteger.notEvaluated = false;
    this.hs_zdfBitsInteger.evaluate = function () {
        return this;
    };
    this.hs_DZCBits.notEvaluated = false;
    var hs_zdcisSigned25uS9E = new $hs.Func(1);
    var hs_zdcbitSizze25uS9H = new $hs.Func(1);
    var hs_zdcrotate25uS9K = new $hs.Func(2);
    var hs_zdcshift25uSa6 = new $hs.Func(2);
    var hs_zdccomplement25uSan = new $hs.Func(1);
    var hs_zdcxor25uSaw = new $hs.Func(2);
    var hs_zdczizbzi25uSaL = new $hs.Func(2);
    var hs_zdczizazi25uSb0 = new $hs.Func(2);
    var hs_zdcrotateR25uSbf = new $hs.Func(2);
    var hs_zdcrotateL25uSbg = new $hs.Func(2);
    var hs_zdcshiftR25uSbh = new $hs.Func(2);
    var hs_zdcshiftL25uSbi = new $hs.Func(2);
    var hs_zdctestBit25uSbj = new $hs.Func(2);
    var hs_zdccomplementBit25uSbk = new $hs.Func(2);
    var hs_zdcclearBit25uSbl = new $hs.Func(2);
    var hs_zdcsetBit25uSbm = new $hs.Func(2);
    var hs_zdcbit25uSbn = new $hs.Func(1);
    var hs_zdcisSigned125uScc = new $hs.Func(1);
    var hs_zdcbitSizze125uScf = new $hs.Func(1);
    var hs_zdcshift125uScj = new $hs.Func(2);
    var hs_zdcrotateR125uScv = new $hs.Func(2);
    var hs_zdcrotateL125uScw = new $hs.Func(2);
    var hs_zdcshiftR125uScx = new $hs.Func(2);
    var hs_zdcshiftL125uScy = new $hs.Func(2);
    var hs_zdctestBit125uScz = new $hs.Func(2);
    var hs_zdccomplementBit125uScA = new $hs.Func(2);
    var hs_zdcclearBit125uScB = new $hs.Func(2);
    var hs_zdcsetBit125uScC = new $hs.Func(2);
    var hs_zdcbit125uScD = new $hs.Func(1);
    var hs_zdcrotate125uScE = new $hs.Func(2);
    this.hs_zdp1Bits.evaluate = function (hs_tpl26Dgy5) {
        var hs_tpl26DgK4 = hs_tpl26Dgy5;
        if (hs_tpl26Dgy5.notEvaluated) {
            hs_tpl26DgK4 = hs_tpl26Dgy5.hscall();
        }
        var hs_tpl26Dgyp = hs_tpl26DgK4.data[0];
        if (hs_tpl26Dgyp.notEvaluated) {
            return hs_tpl26Dgyp.hscall();
        } else {
            return hs_tpl26Dgyp;
        }
    };
    this.hs_zizazi.evaluate = function (hs_tpl26Dgyr) {
        var hs_tpl26DgKm = hs_tpl26Dgyr;
        if (hs_tpl26Dgyr.notEvaluated) {
            hs_tpl26DgKm = hs_tpl26Dgyr.hscall();
        }
        var hs_tpl26DgyL = hs_tpl26DgKm.data[1];
        if (hs_tpl26DgyL.notEvaluated) {
            return hs_tpl26DgyL.hscall();
        } else {
            return hs_tpl26DgyL;
        }
    };
    this.hs_zizbzi.evaluate = function (hs_tpl26DgyN) {
        var hs_tpl26DgKE = hs_tpl26DgyN;
        if (hs_tpl26DgyN.notEvaluated) {
            hs_tpl26DgKE = hs_tpl26DgyN.hscall();
        }
        var hs_tpl26Dgz7 = hs_tpl26DgKE.data[2];
        if (hs_tpl26Dgz7.notEvaluated) {
            return hs_tpl26Dgz7.hscall();
        } else {
            return hs_tpl26Dgz7;
        }
    };
    this.hs_xor.evaluate = function (hs_tpl26Dgz9) {
        var hs_tpl26DgKW = hs_tpl26Dgz9;
        if (hs_tpl26Dgz9.notEvaluated) {
            hs_tpl26DgKW = hs_tpl26Dgz9.hscall();
        }
        var hs_tpl26Dgzt = hs_tpl26DgKW.data[3];
        if (hs_tpl26Dgzt.notEvaluated) {
            return hs_tpl26Dgzt.hscall();
        } else {
            return hs_tpl26Dgzt;
        }
    };
    this.hs_complement.evaluate = function (hs_tpl26Dgzv) {
        var hs_tpl26DgLe = hs_tpl26Dgzv;
        if (hs_tpl26Dgzv.notEvaluated) {
            hs_tpl26DgLe = hs_tpl26Dgzv.hscall();
        }
        var hs_tpl26DgzP = hs_tpl26DgLe.data[4];
        if (hs_tpl26DgzP.notEvaluated) {
            return hs_tpl26DgzP.hscall();
        } else {
            return hs_tpl26DgzP;
        }
    };
    this.hs_shift.evaluate = function (hs_tpl26DgzR) {
        var hs_tpl26DgLw = hs_tpl26DgzR;
        if (hs_tpl26DgzR.notEvaluated) {
            hs_tpl26DgLw = hs_tpl26DgzR.hscall();
        }
        var hs_tpl26DgAb = hs_tpl26DgLw.data[5];
        if (hs_tpl26DgAb.notEvaluated) {
            return hs_tpl26DgAb.hscall();
        } else {
            return hs_tpl26DgAb;
        }
    };
    this.hs_rotate.evaluate = function (hs_tpl26DgAd) {
        var hs_tpl26DgLO = hs_tpl26DgAd;
        if (hs_tpl26DgAd.notEvaluated) {
            hs_tpl26DgLO = hs_tpl26DgAd.hscall();
        }
        var hs_tpl26DgAx = hs_tpl26DgLO.data[6];
        if (hs_tpl26DgAx.notEvaluated) {
            return hs_tpl26DgAx.hscall();
        } else {
            return hs_tpl26DgAx;
        }
    };
    this.hs_bit.evaluate = function (hs_tpl26DgAz) {
        var hs_tpl26DgM6 = hs_tpl26DgAz;
        if (hs_tpl26DgAz.notEvaluated) {
            hs_tpl26DgM6 = hs_tpl26DgAz.hscall();
        }
        var hs_tpl26DgAT = hs_tpl26DgM6.data[7];
        if (hs_tpl26DgAT.notEvaluated) {
            return hs_tpl26DgAT.hscall();
        } else {
            return hs_tpl26DgAT;
        }
    };
    this.hs_setBit.evaluate = function (hs_tpl26DgAV) {
        var hs_tpl26DgMo = hs_tpl26DgAV;
        if (hs_tpl26DgAV.notEvaluated) {
            hs_tpl26DgMo = hs_tpl26DgAV.hscall();
        }
        var hs_tpl26DgBf = hs_tpl26DgMo.data[8];
        if (hs_tpl26DgBf.notEvaluated) {
            return hs_tpl26DgBf.hscall();
        } else {
            return hs_tpl26DgBf;
        }
    };
    this.hs_clearBit.evaluate = function (hs_tpl26DgBh) {
        var hs_tpl26DgMG = hs_tpl26DgBh;
        if (hs_tpl26DgBh.notEvaluated) {
            hs_tpl26DgMG = hs_tpl26DgBh.hscall();
        }
        var hs_tpl26DgBB = hs_tpl26DgMG.data[9];
        if (hs_tpl26DgBB.notEvaluated) {
            return hs_tpl26DgBB.hscall();
        } else {
            return hs_tpl26DgBB;
        }
    };
    this.hs_complementBit.evaluate = function (hs_tpl26DgBD) {
        var hs_tpl26DgMY = hs_tpl26DgBD;
        if (hs_tpl26DgBD.notEvaluated) {
            hs_tpl26DgMY = hs_tpl26DgBD.hscall();
        }
        var hs_tpl26DgBX = hs_tpl26DgMY.data[10];
        if (hs_tpl26DgBX.notEvaluated) {
            return hs_tpl26DgBX.hscall();
        } else {
            return hs_tpl26DgBX;
        }
    };
    this.hs_testBit.evaluate = function (hs_tpl26DgBZ) {
        var hs_tpl26DgNg = hs_tpl26DgBZ;
        if (hs_tpl26DgBZ.notEvaluated) {
            hs_tpl26DgNg = hs_tpl26DgBZ.hscall();
        }
        var hs_tpl26DgCj = hs_tpl26DgNg.data[11];
        if (hs_tpl26DgCj.notEvaluated) {
            return hs_tpl26DgCj.hscall();
        } else {
            return hs_tpl26DgCj;
        }
    };
    this.hs_bitSizze.evaluate = function (hs_tpl26DgCl) {
        var hs_tpl26DgNy = hs_tpl26DgCl;
        if (hs_tpl26DgCl.notEvaluated) {
            hs_tpl26DgNy = hs_tpl26DgCl.hscall();
        }
        var hs_tpl26DgCF = hs_tpl26DgNy.data[12];
        if (hs_tpl26DgCF.notEvaluated) {
            return hs_tpl26DgCF.hscall();
        } else {
            return hs_tpl26DgCF;
        }
    };
    this.hs_isSigned.evaluate = function (hs_tpl26DgCH) {
        var hs_tpl26DgNQ = hs_tpl26DgCH;
        if (hs_tpl26DgCH.notEvaluated) {
            hs_tpl26DgNQ = hs_tpl26DgCH.hscall();
        }
        var hs_tpl26DgD1 = hs_tpl26DgNQ.data[13];
        if (hs_tpl26DgD1.notEvaluated) {
            return hs_tpl26DgD1.hscall();
        } else {
            return hs_tpl26DgD1;
        }
    };
    this.hs_shiftL.evaluate = function (hs_tpl26DgD3) {
        var hs_tpl26DgO8 = hs_tpl26DgD3;
        if (hs_tpl26DgD3.notEvaluated) {
            hs_tpl26DgO8 = hs_tpl26DgD3.hscall();
        }
        var hs_tpl26DgDn = hs_tpl26DgO8.data[14];
        if (hs_tpl26DgDn.notEvaluated) {
            return hs_tpl26DgDn.hscall();
        } else {
            return hs_tpl26DgDn;
        }
    };
    this.hs_shiftR.evaluate = function (hs_tpl26DgDp) {
        var hs_tpl26DgOq = hs_tpl26DgDp;
        if (hs_tpl26DgDp.notEvaluated) {
            hs_tpl26DgOq = hs_tpl26DgDp.hscall();
        }
        var hs_tpl26DgDJ = hs_tpl26DgOq.data[15];
        if (hs_tpl26DgDJ.notEvaluated) {
            return hs_tpl26DgDJ.hscall();
        } else {
            return hs_tpl26DgDJ;
        }
    };
    this.hs_rotateL.evaluate = function (hs_tpl26DgDL) {
        var hs_tpl26DgOI = hs_tpl26DgDL;
        if (hs_tpl26DgDL.notEvaluated) {
            hs_tpl26DgOI = hs_tpl26DgDL.hscall();
        }
        var hs_tpl26DgE5 = hs_tpl26DgOI.data[16];
        if (hs_tpl26DgE5.notEvaluated) {
            return hs_tpl26DgE5.hscall();
        } else {
            return hs_tpl26DgE5;
        }
    };
    this.hs_rotateR.evaluate = function (hs_tpl26DgE7) {
        var hs_tpl26DgP0 = hs_tpl26DgE7;
        if (hs_tpl26DgE7.notEvaluated) {
            hs_tpl26DgP0 = hs_tpl26DgE7.hscall();
        }
        var hs_tpl26DgEr = hs_tpl26DgP0.data[17];
        if (hs_tpl26DgEr.notEvaluated) {
            return hs_tpl26DgEr.hscall();
        } else {
            return hs_tpl26DgEr;
        }
    };
    this.hs_zddmrotateR.evaluate = function (hs_zddBits26DgEv, hs_x26DgEw, hs_i26DgEx) {
        var hs_sat26DgP1 = new $hs.Thunk();
        hs_sat26DgP1.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DgEx);
        };
        return $hs.modules.DataziBits.hs_rotate.hscall(hs_zddBits26DgEv, hs_x26DgEw, hs_sat26DgP1);
    };
    this.hs_zddmrotateL.evaluate = function (hs_zddBits26DgEC, hs_x26DgED, hs_i26DgEE) {
        return $hs.modules.DataziBits.hs_rotate.hscall(hs_zddBits26DgEC, hs_x26DgED, hs_i26DgEE);
    };
    this.hs_zddmshiftR.evaluate = function (hs_zddBits26DgEI, hs_x26DgEJ, hs_i26DgEK) {
        var hs_sat26DgP2 = new $hs.Thunk();
        hs_sat26DgP2.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DgEK);
        };
        return $hs.modules.DataziBits.hs_shift.hscall(hs_zddBits26DgEI, hs_x26DgEJ, hs_sat26DgP2);
    };
    this.hs_zddmshiftL.evaluate = function (hs_zddBits26DgEP, hs_x26DgEQ, hs_i26DgER) {
        return $hs.modules.DataziBits.hs_shift.hscall(hs_zddBits26DgEP, hs_x26DgEQ, hs_i26DgER);
    };
    this.hs_zddmtestBit.evaluate = function (hs_zddBits26DgEW, hs_eta26DgEZ, hs_eta126DgF0) {
        var hs_zddNum26DgEX = new $hs.Thunk();
        hs_zddNum26DgEX.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zdp1Bits.hscall(hs_zddBits26DgEW);
        };
        var hs_sat26DgP3 = new $hs.Thunk();
        hs_sat26DgP3.evaluateOnce = function () {
            var hs_sat26DgP7 = new $hs.Thunk();
            hs_sat26DgP7.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DgEX, hs_sat26DgP7);
        };
        var hs_sat26DgP4 = new $hs.Thunk();
        hs_sat26DgP4.evaluateOnce = function () {
            var hs_sat26DgP6 = new $hs.Thunk();
            hs_sat26DgP6.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DgEW, hs_eta126DgF0);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall(hs_zddBits26DgEW, hs_eta26DgEZ, hs_sat26DgP6);
        };
        var hs_sat26DgP5 = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DgEX);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DgP5, hs_sat26DgP4, hs_sat26DgP3);
    };
    this.hs_zddmcomplementBit.evaluate = function (hs_zddBits26DgF8, hs_x26DgF9, hs_i26DgFa) {
        var hs_sat26DgP8 = new $hs.Thunk();
        hs_sat26DgP8.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DgF8, hs_i26DgFa);
        };
        return $hs.modules.DataziBits.hs_xor.hscall(hs_zddBits26DgF8, hs_x26DgF9, hs_sat26DgP8);
    };
    this.hs_zddmclearBit.evaluate = function (hs_zddBits26DgFf, hs_x26DgFg, hs_i26DgFh) {
        var hs_sat26DgP9 = new $hs.Thunk();
        hs_sat26DgP9.evaluateOnce = function () {
            var hs_sat26DgPa = new $hs.Thunk();
            hs_sat26DgPa.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DgFf, hs_i26DgFh);
            };
            return $hs.modules.DataziBits.hs_complement.hscall(hs_zddBits26DgFf, hs_sat26DgPa);
        };
        return $hs.modules.DataziBits.hs_zizazi.hscall(hs_zddBits26DgFf, hs_x26DgFg, hs_sat26DgP9);
    };
    this.hs_zddmsetBit.evaluate = function (hs_zddBits26DgFn, hs_x26DgFo, hs_i26DgFp) {
        var hs_sat26DgPb = new $hs.Thunk();
        hs_sat26DgPb.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DgFn, hs_i26DgFp);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall(hs_zddBits26DgFn, hs_x26DgFo, hs_sat26DgPb);
    };
    this.hs_zddmbit.evaluate = function (hs_zddBits26DgFt, hs_eta26DgFx) {
        var hs_sat26DgPc = new $hs.Thunk();
        hs_sat26DgPc.evaluateOnce = function () {
            var hs_sat26DgPd = new $hs.Thunk();
            hs_sat26DgPd.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DgPe = $hs.modules.DataziBits.hs_zdp1Bits.hscall(hs_zddBits26DgFt);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DgPe, hs_sat26DgPd);
        };
        return $hs.modules.DataziBits.hs_shiftL.hscall(hs_zddBits26DgFt, hs_sat26DgPc, hs_eta26DgFx);
    };
    this.hs_zddmrotate.evaluate = function (hs_zddBits26DgFH, hs_x26DgFG, hs_i26DgFB) {
        var hs_sat26DgPg = new $hs.Data(1);
        hs_sat26DgPg.data = [0];
        var hs_wild26DgPh = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i26DgFB, hs_sat26DgPg);
        switch (hs_wild26DgPh.tag) {
        case 1:
            var hs_sat26DgPi = new $hs.Data(1);
            hs_sat26DgPi.data = [0];
            var hs_wild126DgPj = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i26DgFB, hs_sat26DgPi);
            switch (hs_wild126DgPj.tag) {
            case 1:
                if (hs_x26DgFG.notEvaluated) {
                    return hs_x26DgFG.hscall();
                } else {
                    return hs_x26DgFG;
                }
            case 2:
                return $hs.modules.DataziBits.hs_rotateL.hscall(hs_zddBits26DgFH, hs_x26DgFG, hs_i26DgFB);
            }
        case 2:
            var hs_sat26DgPf = new $hs.Thunk();
            hs_sat26DgPf.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DgFB);
            };
            return $hs.modules.DataziBits.hs_rotateR.hscall(hs_zddBits26DgFH, hs_x26DgFG, hs_sat26DgPf);
        }
    };
    this.hs_zddmshift.evaluate = function (hs_zddBits26DgFS, hs_x26DgFR, hs_i26DgFM) {
        var hs_sat26DgPl = new $hs.Data(1);
        hs_sat26DgPl.data = [0];
        var hs_wild26DgPm = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i26DgFM, hs_sat26DgPl);
        switch (hs_wild26DgPm.tag) {
        case 1:
            var hs_sat26DgPn = new $hs.Data(1);
            hs_sat26DgPn.data = [0];
            var hs_wild126DgPo = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_i26DgFM, hs_sat26DgPn);
            switch (hs_wild126DgPo.tag) {
            case 1:
                if (hs_x26DgFR.notEvaluated) {
                    return hs_x26DgFR.hscall();
                } else {
                    return hs_x26DgFR;
                }
            case 2:
                return $hs.modules.DataziBits.hs_shiftL.hscall(hs_zddBits26DgFS, hs_x26DgFR, hs_i26DgFM);
            }
        case 2:
            var hs_sat26DgPk = new $hs.Thunk();
            hs_sat26DgPk.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DgFM);
            };
            return $hs.modules.DataziBits.hs_shiftR.hscall(hs_zddBits26DgFS, hs_x26DgFR, hs_sat26DgPk);
        }
    };
    hs_zdcisSigned25uS9E.evaluate = function (hs_ds26DgFW) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze25uS9H.evaluate = function (hs_ds26DgFZ) {
        var $res = new $hs.Data(1);
        $res.data = [32];
        return $res;
    };
    hs_zdcrotate25uS9K.evaluate = function (hs_eta26DgG3, hs_eta126DgG6) {
        var hs_wild26DgPq = hs_eta26DgG3;
        if (hs_eta26DgG3.notEvaluated) {
            hs_wild26DgPq = hs_eta26DgG3.hscall();
        }
        var hs_xzh26DgGe = hs_wild26DgPq.data[0];
        var hs_wild126DgPp = hs_eta126DgG6;
        if (hs_eta126DgG6.notEvaluated) {
            hs_wild126DgPp = hs_eta126DgG6.hscall();
        }
        var hs_izh26DgGa = hs_wild126DgPp.data[0];
        var hs_sat26DgPr = hs_izh26DgGa;
        var hs_sat26DgPs = hs_sat26DgPr & 31;
        var hs_izqzh26DgGd = hs_sat26DgPs;
        var hs_sat26DgPt = ($hs.Int.addCarry(32, ~hs_izqzh26DgGd, 1))[0];
        var hs_sat26DgPu = hs_xzh26DgGe;
        var hs_sat26DgPv = hs_sat26DgPu >> hs_sat26DgPt;
        var hs_sat26DgPw = hs_xzh26DgGe;
        var hs_sat26DgPx = hs_sat26DgPw << hs_izqzh26DgGd;
        var hs_sat26DgPy = hs_sat26DgPx | hs_sat26DgPv;
        var hs_sat26DgPz = hs_sat26DgPy;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DgPz];
        return $res;
    };
    hs_zdcshift25uSa6.evaluate = function (hs_eta26DgGp, hs_eta126DgGs) {
        var hs_wild26DgPB = hs_eta26DgGp;
        if (hs_eta26DgGp.notEvaluated) {
            hs_wild26DgPB = hs_eta26DgGp.hscall();
        }
        var hs_xzh26DgGx = hs_wild26DgPB.data[0];
        var hs_wild126DgPA = hs_eta126DgGs;
        if (hs_eta126DgGs.notEvaluated) {
            hs_wild126DgPA = hs_eta126DgGs.hscall();
        }
        var hs_izh26DgGv = hs_wild126DgPA.data[0];
        var hs_wild226DgPC = hs_izh26DgGv >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DgPC.tag) {
        case 1:
            var hs_sat26DgPD = -hs_izh26DgGv;
            var hs_wild326DgGA = $hs.modules.GHCziBase.hs_iShiftRAzh.hscall(hs_xzh26DgGx, hs_sat26DgPD);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DgGA];
            return $res;
        case 2:
            var hs_wild326DgGC = $hs.modules.GHCziBase.hs_iShiftLzh.hscall(hs_xzh26DgGx, hs_izh26DgGv);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DgGC];
            return $res;
        }
    };
    hs_zdccomplement25uSan.evaluate = function (hs_ds26DgGF) {
        var hs_wild26DgPE = hs_ds26DgGF;
        if (hs_ds26DgGF.notEvaluated) {
            hs_wild26DgPE = hs_ds26DgGF.hscall();
        }
        var hs_xzh26DgGI = hs_wild26DgPE.data[0];
        var hs_sat26DgPF = hs_xzh26DgGI;
        var hs_sat26DgPG = hs_sat26DgPF ^ 0;
        var hs_sat26DgPH = hs_sat26DgPG;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DgPH];
        return $res;
    };
    hs_zdcxor25uSaw.evaluate = function (hs_ds26DgGP, hs_ds126DgGS) {
        var hs_wild26DgPJ = hs_ds26DgGP;
        if (hs_ds26DgGP.notEvaluated) {
            hs_wild26DgPJ = hs_ds26DgGP.hscall();
        }
        var hs_xzh26DgGV = hs_wild26DgPJ.data[0];
        var hs_wild126DgPI = hs_ds126DgGS;
        if (hs_ds126DgGS.notEvaluated) {
            hs_wild126DgPI = hs_ds126DgGS.hscall();
        }
        var hs_yzh26DgGX = hs_wild126DgPI.data[0];
        var hs_sat26DgPK = hs_yzh26DgGX;
        var hs_sat26DgPL = hs_xzh26DgGV;
        var hs_sat26DgPM = hs_sat26DgPL ^ hs_sat26DgPK;
        var hs_sat26DgPN = hs_sat26DgPM;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DgPN];
        return $res;
    };
    hs_zdczizbzi25uSaL.evaluate = function (hs_ds26DgH4, hs_ds126DgH7) {
        var hs_wild26DgPP = hs_ds26DgH4;
        if (hs_ds26DgH4.notEvaluated) {
            hs_wild26DgPP = hs_ds26DgH4.hscall();
        }
        var hs_xzh26DgHa = hs_wild26DgPP.data[0];
        var hs_wild126DgPO = hs_ds126DgH7;
        if (hs_ds126DgH7.notEvaluated) {
            hs_wild126DgPO = hs_ds126DgH7.hscall();
        }
        var hs_yzh26DgHc = hs_wild126DgPO.data[0];
        var hs_sat26DgPQ = hs_yzh26DgHc;
        var hs_sat26DgPR = hs_xzh26DgHa;
        var hs_sat26DgPS = hs_sat26DgPR | hs_sat26DgPQ;
        var hs_sat26DgPT = hs_sat26DgPS;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DgPT];
        return $res;
    };
    hs_zdczizazi25uSb0.evaluate = function (hs_ds26DgHj, hs_ds126DgHm) {
        var hs_wild26DgPV = hs_ds26DgHj;
        if (hs_ds26DgHj.notEvaluated) {
            hs_wild26DgPV = hs_ds26DgHj.hscall();
        }
        var hs_xzh26DgHp = hs_wild26DgPV.data[0];
        var hs_wild126DgPU = hs_ds126DgHm;
        if (hs_ds126DgHm.notEvaluated) {
            hs_wild126DgPU = hs_ds126DgHm.hscall();
        }
        var hs_yzh26DgHr = hs_wild126DgPU.data[0];
        var hs_sat26DgPW = hs_yzh26DgHr;
        var hs_sat26DgPX = hs_xzh26DgHp;
        var hs_sat26DgPY = hs_sat26DgPX & hs_sat26DgPW;
        var hs_sat26DgPZ = hs_sat26DgPY;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DgPZ];
        return $res;
    };
    this.hs_zdfBitsInt.data = [$hs.modules.GHCziNum.hs_zdfNumInt, hs_zdczizazi25uSb0, hs_zdczizbzi25uSaL, hs_zdcxor25uSaw, hs_zdccomplement25uSan, hs_zdcshift25uSa6, hs_zdcrotate25uS9K, hs_zdcbit25uSbn, hs_zdcsetBit25uSbm, hs_zdcclearBit25uSbl, hs_zdccomplementBit25uSbk, hs_zdctestBit25uSbj, hs_zdcbitSizze25uS9H, hs_zdcisSigned25uS9E, hs_zdcshiftL25uSbi, hs_zdcshiftR25uSbh, hs_zdcrotateL25uSbg, hs_zdcrotateR25uSbf];
    hs_zdcrotateR25uSbf.evaluate = function (hs_eta26DgHG, hs_eta126DgHH) {
        var hs_sat26DgQ0 = new $hs.Thunk();
        hs_sat26DgQ0.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DgHH);
        };
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgHG, hs_sat26DgQ0);
    };
    hs_zdcrotateL25uSbg.evaluate = function (hs_eta26DgHL, hs_eta126DgHM) {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgHL, hs_eta126DgHM);
    };
    hs_zdcshiftR25uSbh.evaluate = function (hs_eta26DgHP, hs_eta126DgHQ) {
        var hs_sat26DgQ1 = new $hs.Thunk();
        hs_sat26DgQ1.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DgHQ);
        };
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgHP, hs_sat26DgQ1);
    };
    hs_zdcshiftL25uSbi.evaluate = function (hs_eta26DgHU, hs_eta126DgHV) {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgHU, hs_eta126DgHV);
    };
    hs_zdctestBit25uSbj.evaluate = function (hs_eta26DgI1, hs_eta126DgI2) {
        var hs_zddNum26DgHZ = new $hs.Thunk();
        hs_zddNum26DgHZ.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
        };
        var hs_sat26DgQ2 = new $hs.Thunk();
        hs_sat26DgQ2.evaluateOnce = function () {
            var hs_sat26DgQ6 = new $hs.Thunk();
            hs_sat26DgQ6.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DgHZ, hs_sat26DgQ6);
        };
        var hs_sat26DgQ3 = new $hs.Thunk();
        hs_sat26DgQ3.evaluateOnce = function () {
            var hs_sat26DgQ5 = new $hs.Thunk();
            hs_sat26DgQ5.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DgI2);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgI1, hs_sat26DgQ5);
        };
        var hs_sat26DgQ4 = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DgHZ);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DgQ4, hs_sat26DgQ3, hs_sat26DgQ2);
    };
    hs_zdccomplementBit25uSbk.evaluate = function (hs_eta26DgI9, hs_eta126DgIa) {
        var hs_sat26DgQ7 = new $hs.Thunk();
        hs_sat26DgQ7.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DgIa);
        };
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgI9, hs_sat26DgQ7);
    };
    hs_zdcclearBit25uSbl.evaluate = function (hs_eta26DgIe, hs_eta126DgIf) {
        var hs_sat26DgQ8 = new $hs.Thunk();
        hs_sat26DgQ8.evaluateOnce = function () {
            var hs_sat26DgQ9 = new $hs.Thunk();
            hs_sat26DgQ9.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DgIf);
            };
            return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DgQ9);
        };
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgIe, hs_sat26DgQ8);
    };
    hs_zdcsetBit25uSbm.evaluate = function (hs_eta26DgIk, hs_eta126DgIl) {
        var hs_sat26DgQa = new $hs.Thunk();
        hs_sat26DgQa.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DgIl);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DgIk, hs_sat26DgQa);
    };
    hs_zdcbit25uSbn.evaluate = function (hs_eta26DgIr) {
        var hs_sat26DgQb = new $hs.Thunk();
        hs_sat26DgQb.evaluateOnce = function () {
            var hs_sat26DgQc = new $hs.Thunk();
            hs_sat26DgQc.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DgQd = $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DgQd, hs_sat26DgQc);
        };
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DgQb, hs_eta26DgIr);
    };
    hs_zdcisSigned125uScc.evaluate = function (hs_ds26DgIu) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze125uScf.evaluate = function (hs_ds26DgIy) {
        var hs_sat26DgQe = $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Data.Bits.bitSize(Integer)\x00");
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DgQe);
    };
    hs_zdcshift125uScj.evaluate = function (hs_x26DgII, hs_i26DgIC) {
        var hs_wild26DgIF = hs_i26DgIC;
        if (hs_i26DgIC.notEvaluated) {
            hs_wild26DgIF = hs_i26DgIC.hscall();
        }
        var hs_izh26DgIJ = hs_wild26DgIF.data[0];
        var hs_sat26DgQf = new $hs.Data(1);
        hs_sat26DgQf.data = [0];
        var hs_wild126DgQg = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_wild26DgIF, hs_sat26DgQf);
        switch (hs_wild126DgQg.tag) {
        case 1:
            var hs_sat26DgQh = -hs_izh26DgIJ;
            return $hs.modules.GHCziInteger.hs_shiftRInteger.hscall(hs_x26DgII, hs_sat26DgQh);
        case 2:
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_x26DgII, hs_izh26DgIJ);
        }
    };
    this.hs_zdfBitsInteger.data = [$hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziInteger.hs_andInteger, $hs.modules.GHCziInteger.hs_orInteger, $hs.modules.GHCziInteger.hs_xorInteger, $hs.modules.GHCziInteger.hs_complementInteger, hs_zdcshift125uScj, hs_zdcrotate125uScE, hs_zdcbit125uScD, hs_zdcsetBit125uScC, hs_zdcclearBit125uScB, hs_zdccomplementBit125uScA, hs_zdctestBit125uScz, hs_zdcbitSizze125uScf, hs_zdcisSigned125uScc, hs_zdcshiftL125uScy, hs_zdcshiftR125uScx, hs_zdcrotateL125uScw, hs_zdcrotateR125uScv];
    hs_zdcrotateR125uScv.evaluate = function (hs_eta26DgIX, hs_eta126DgIY) {
        var hs_sat26DgQi = new $hs.Thunk();
        hs_sat26DgQi.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DgIY);
        };
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgIX, hs_sat26DgQi);
    };
    hs_zdcrotateL125uScw.evaluate = function (hs_eta26DgJ2, hs_eta126DgJ3) {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgJ2, hs_eta126DgJ3);
    };
    hs_zdcshiftR125uScx.evaluate = function (hs_eta26DgJ6, hs_eta126DgJ7) {
        var hs_sat26DgQj = new $hs.Thunk();
        hs_sat26DgQj.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DgJ7);
        };
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgJ6, hs_sat26DgQj);
    };
    hs_zdcshiftL125uScy.evaluate = function (hs_eta26DgJb, hs_eta126DgJc) {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgJb, hs_eta126DgJc);
    };
    hs_zdctestBit125uScz.evaluate = function (hs_eta26DgJi, hs_eta126DgJj) {
        var hs_zddNum26DgJg = new $hs.Thunk();
        hs_zddNum26DgJg.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInteger);
        };
        var hs_sat26DgQk = new $hs.Thunk();
        hs_sat26DgQk.evaluateOnce = function () {
            var hs_sat26DgQo = new $hs.Thunk();
            hs_sat26DgQo.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DgJg, hs_sat26DgQo);
        };
        var hs_sat26DgQl = new $hs.Thunk();
        hs_sat26DgQl.evaluateOnce = function () {
            var hs_sat26DgQn = new $hs.Thunk();
            hs_sat26DgQn.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DgJj);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgJi, hs_sat26DgQn);
        };
        var hs_sat26DgQm = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DgJg);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DgQm, hs_sat26DgQl, hs_sat26DgQk);
    };
    hs_zdccomplementBit125uScA.evaluate = function (hs_eta26DgJq, hs_eta126DgJr) {
        var hs_sat26DgQp = new $hs.Thunk();
        hs_sat26DgQp.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DgJr);
        };
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgJq, hs_sat26DgQp);
    };
    hs_zdcclearBit125uScB.evaluate = function (hs_eta26DgJv, hs_eta126DgJw) {
        var hs_sat26DgQq = new $hs.Thunk();
        hs_sat26DgQq.evaluateOnce = function () {
            var hs_sat26DgQr = new $hs.Thunk();
            hs_sat26DgQr.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DgJw);
            };
            return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_sat26DgQr);
        };
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgJv, hs_sat26DgQq);
    };
    hs_zdcsetBit125uScC.evaluate = function (hs_eta26DgJB, hs_eta126DgJC) {
        var hs_sat26DgQs = new $hs.Thunk();
        hs_sat26DgQs.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DgJC);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DgJB, hs_sat26DgQs);
    };
    hs_zdcbit125uScD.evaluate = function (hs_eta26DgJI) {
        var hs_sat26DgQt = new $hs.Thunk();
        hs_sat26DgQt.evaluateOnce = function () {
            var hs_sat26DgQu = new $hs.Thunk();
            hs_sat26DgQu.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DgQv = $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInteger);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DgQv, hs_sat26DgQu);
        };
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_sat26DgQt, hs_eta26DgJI);
    };
    hs_zdcrotate125uScE.evaluate = function (hs_x26DgJL, hs_i26DgJM) {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_x26DgJL, hs_i26DgJM);
    };
    this.hs_DZCBits.evaluate = function (hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
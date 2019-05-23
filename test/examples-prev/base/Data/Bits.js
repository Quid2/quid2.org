
$hs.modules.DataziBits = new $hs.Module();
$hs.modules.DataziBits.dependencies = ["GHC.Integer", "GHC.Base", "GHC.Num", "GHC.Err", "GHC.Classes"];
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
    this.hs_zdp1Bits.evaluate = function (hs_tpl26DDRj) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDRj);
    };
    this.hs_zizazi.notEvaluated = true;
    this.hs_zizazi.evaluate = function (hs_tpl26DDRF) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDRF);
    };
    this.hs_zizbzi.notEvaluated = true;
    this.hs_zizbzi.evaluate = function (hs_tpl26DDS1) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDS1);
    };
    this.hs_xor.notEvaluated = true;
    this.hs_xor.evaluate = function (hs_tpl26DDSn) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDSn);
    };
    this.hs_complement.notEvaluated = true;
    this.hs_complement.evaluate = function (hs_tpl26DDSJ) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDSJ);
    };
    this.hs_shift.notEvaluated = true;
    this.hs_shift.evaluate = function (hs_tpl26DDT5) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDT5);
    };
    this.hs_rotate.notEvaluated = true;
    this.hs_rotate.evaluate = function (hs_tpl26DDTr) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDTr);
    };
    this.hs_bit.notEvaluated = true;
    this.hs_bit.evaluate = function (hs_tpl26DDTN) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDTN);
    };
    this.hs_setBit.notEvaluated = true;
    this.hs_setBit.evaluate = function (hs_tpl26DDU9) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDU9);
    };
    this.hs_clearBit.notEvaluated = true;
    this.hs_clearBit.evaluate = function (hs_tpl26DDUv) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDUv);
    };
    this.hs_complementBit.notEvaluated = true;
    this.hs_complementBit.evaluate = function (hs_tpl26DDUR) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDUR);
    };
    this.hs_testBit.notEvaluated = true;
    this.hs_testBit.evaluate = function (hs_tpl26DDVd) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDVd);
    };
    this.hs_bitSizze.notEvaluated = true;
    this.hs_bitSizze.evaluate = function (hs_tpl26DDVz) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDVz);
    };
    this.hs_isSigned.notEvaluated = true;
    this.hs_isSigned.evaluate = function (hs_tpl26DDVV) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDVV);
    };
    this.hs_shiftL.notEvaluated = true;
    this.hs_shiftL.evaluate = function (hs_tpl26DDWh) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDWh);
    };
    this.hs_shiftR.notEvaluated = true;
    this.hs_shiftR.evaluate = function (hs_tpl26DDWD) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDWD);
    };
    this.hs_rotateL.notEvaluated = true;
    this.hs_rotateL.evaluate = function (hs_tpl26DDWZ) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDWZ);
    };
    this.hs_rotateR.notEvaluated = true;
    this.hs_rotateR.evaluate = function (hs_tpl26DDXl) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_tpl26DDXl);
    };
    this.hs_zddmrotateR.notEvaluated = true;
    this.hs_zddmrotateR.evaluate = function (hs_zddBits26DDXJ, hs_x26DDXK, hs_i26DDXL) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDXJ, hs_x26DDXK, hs_i26DDXL);
    };
    this.hs_zddmrotateL.notEvaluated = true;
    this.hs_zddmrotateL.evaluate = function (hs_zddBits26DDXQ, hs_x26DDXR, hs_i26DDXS) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDXQ, hs_x26DDXR, hs_i26DDXS);
    };
    this.hs_zddmshiftR.notEvaluated = true;
    this.hs_zddmshiftR.evaluate = function (hs_zddBits26DDXW, hs_x26DDXX, hs_i26DDXY) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDXW, hs_x26DDXX, hs_i26DDXY);
    };
    this.hs_zddmshiftL.notEvaluated = true;
    this.hs_zddmshiftL.evaluate = function (hs_zddBits26DDY3, hs_x26DDY4, hs_i26DDY5) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDY3, hs_x26DDY4, hs_i26DDY5);
    };
    this.hs_zddmtestBit.notEvaluated = true;
    this.hs_zddmtestBit.evaluate = function (hs_zddBits26DDYa, hs_eta26DDYd, hs_eta126DDYe) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDYa, hs_eta26DDYd, hs_eta126DDYe);
    };
    this.hs_zddmcomplementBit.notEvaluated = true;
    this.hs_zddmcomplementBit.evaluate = function (hs_zddBits26DDYm, hs_x26DDYn, hs_i26DDYo) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDYm, hs_x26DDYn, hs_i26DDYo);
    };
    this.hs_zddmclearBit.notEvaluated = true;
    this.hs_zddmclearBit.evaluate = function (hs_zddBits26DDYt, hs_x26DDYu, hs_i26DDYv) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDYt, hs_x26DDYu, hs_i26DDYv);
    };
    this.hs_zddmsetBit.notEvaluated = true;
    this.hs_zddmsetBit.evaluate = function (hs_zddBits26DDYB, hs_x26DDYC, hs_i26DDYD) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDYB, hs_x26DDYC, hs_i26DDYD);
    };
    this.hs_zddmbit.notEvaluated = true;
    this.hs_zddmbit.evaluate = function (hs_zddBits26DDYH, hs_eta26DDYL) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDYH, hs_eta26DDYL);
    };
    this.hs_zddmrotate.notEvaluated = true;
    this.hs_zddmrotate.evaluate = function (hs_zddBits26DDYV, hs_x26DDYU, hs_i26DDYP) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDYV, hs_x26DDYU, hs_i26DDYP);
    };
    this.hs_zddmshift.notEvaluated = true;
    this.hs_zddmshift.evaluate = function (hs_zddBits26DDZ6, hs_x26DDZ5, hs_i26DDZ0) {
        $hs.modules.DataziBits.loadDependencies();
        return this.evaluate(hs_zddBits26DDZ6, hs_x26DDZ5, hs_i26DDZ0);
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
    var hs_zdcisSigned25vfsT = new $hs.Func(1);
    var hs_zdcbitSizze25vfsX = new $hs.Func(1);
    var hs_zdcrotate25vft1 = new $hs.Func(2);
    var hs_zdcshift25vftq = new $hs.Func(2);
    var hs_zdccomplement25vftI = new $hs.Func(1);
    var hs_zdcxor25vftT = new $hs.Func(2);
    var hs_zdczizbzi25vfu9 = new $hs.Func(2);
    var hs_zdczizazi25vfup = new $hs.Func(2);
    var hs_zdcrotateR25vfuF = new $hs.Func(2);
    var hs_zdcrotateL25vfuH = new $hs.Func(2);
    var hs_zdcshiftR25vfuJ = new $hs.Func(2);
    var hs_zdcshiftL25vfuL = new $hs.Func(2);
    var hs_zdctestBit25vfuN = new $hs.Func(2);
    var hs_zdccomplementBit25vfuP = new $hs.Func(2);
    var hs_zdcclearBit25vfuR = new $hs.Func(2);
    var hs_zdcsetBit25vfuT = new $hs.Func(2);
    var hs_zdcbit25vfuV = new $hs.Func(1);
    var hs_zdcisSigned125vfvL = new $hs.Func(1);
    var hs_zdcbitSizze125vfvP = new $hs.Func(1);
    var hs_zdcshift125vfvU = new $hs.Func(2);
    var hs_zdcrotateR125vfw7 = new $hs.Func(2);
    var hs_zdcrotateL125vfw9 = new $hs.Func(2);
    var hs_zdcshiftR125vfwb = new $hs.Func(2);
    var hs_zdcshiftL125vfwd = new $hs.Func(2);
    var hs_zdctestBit125vfwf = new $hs.Func(2);
    var hs_zdccomplementBit125vfwh = new $hs.Func(2);
    var hs_zdcclearBit125vfwj = new $hs.Func(2);
    var hs_zdcsetBit125vfwl = new $hs.Func(2);
    var hs_zdcbit125vfwn = new $hs.Func(1);
    var hs_zdcrotate125vfwp = new $hs.Func(2);
    this.hs_zdp1Bits.evaluate = function (hs_tpl26DDRj) {
        var hs_tpl26DE3y = hs_tpl26DDRj;
        if (hs_tpl26DDRj.notEvaluated) {
            hs_tpl26DE3y = hs_tpl26DDRj.hscall();
        }
        var hs_tpl26DDRD = hs_tpl26DE3y.data[0];
        if (hs_tpl26DDRD.notEvaluated) {
            return hs_tpl26DDRD.hscall();
        } else {
            return hs_tpl26DDRD;
        }
    };
    this.hs_zizazi.evaluate = function (hs_tpl26DDRF) {
        var hs_tpl26DE3R = hs_tpl26DDRF;
        if (hs_tpl26DDRF.notEvaluated) {
            hs_tpl26DE3R = hs_tpl26DDRF.hscall();
        }
        var hs_tpl26DDRZ = hs_tpl26DE3R.data[1];
        if (hs_tpl26DDRZ.notEvaluated) {
            return hs_tpl26DDRZ.hscall();
        } else {
            return hs_tpl26DDRZ;
        }
    };
    this.hs_zizbzi.evaluate = function (hs_tpl26DDS1) {
        var hs_tpl26DE49 = hs_tpl26DDS1;
        if (hs_tpl26DDS1.notEvaluated) {
            hs_tpl26DE49 = hs_tpl26DDS1.hscall();
        }
        var hs_tpl26DDSl = hs_tpl26DE49.data[2];
        if (hs_tpl26DDSl.notEvaluated) {
            return hs_tpl26DDSl.hscall();
        } else {
            return hs_tpl26DDSl;
        }
    };
    this.hs_xor.evaluate = function (hs_tpl26DDSn) {
        var hs_tpl26DE4r = hs_tpl26DDSn;
        if (hs_tpl26DDSn.notEvaluated) {
            hs_tpl26DE4r = hs_tpl26DDSn.hscall();
        }
        var hs_tpl26DDSH = hs_tpl26DE4r.data[3];
        if (hs_tpl26DDSH.notEvaluated) {
            return hs_tpl26DDSH.hscall();
        } else {
            return hs_tpl26DDSH;
        }
    };
    this.hs_complement.evaluate = function (hs_tpl26DDSJ) {
        var hs_tpl26DE4J = hs_tpl26DDSJ;
        if (hs_tpl26DDSJ.notEvaluated) {
            hs_tpl26DE4J = hs_tpl26DDSJ.hscall();
        }
        var hs_tpl26DDT3 = hs_tpl26DE4J.data[4];
        if (hs_tpl26DDT3.notEvaluated) {
            return hs_tpl26DDT3.hscall();
        } else {
            return hs_tpl26DDT3;
        }
    };
    this.hs_shift.evaluate = function (hs_tpl26DDT5) {
        var hs_tpl26DE51 = hs_tpl26DDT5;
        if (hs_tpl26DDT5.notEvaluated) {
            hs_tpl26DE51 = hs_tpl26DDT5.hscall();
        }
        var hs_tpl26DDTp = hs_tpl26DE51.data[5];
        if (hs_tpl26DDTp.notEvaluated) {
            return hs_tpl26DDTp.hscall();
        } else {
            return hs_tpl26DDTp;
        }
    };
    this.hs_rotate.evaluate = function (hs_tpl26DDTr) {
        var hs_tpl26DE5j = hs_tpl26DDTr;
        if (hs_tpl26DDTr.notEvaluated) {
            hs_tpl26DE5j = hs_tpl26DDTr.hscall();
        }
        var hs_tpl26DDTL = hs_tpl26DE5j.data[6];
        if (hs_tpl26DDTL.notEvaluated) {
            return hs_tpl26DDTL.hscall();
        } else {
            return hs_tpl26DDTL;
        }
    };
    this.hs_bit.evaluate = function (hs_tpl26DDTN) {
        var hs_tpl26DE5B = hs_tpl26DDTN;
        if (hs_tpl26DDTN.notEvaluated) {
            hs_tpl26DE5B = hs_tpl26DDTN.hscall();
        }
        var hs_tpl26DDU7 = hs_tpl26DE5B.data[7];
        if (hs_tpl26DDU7.notEvaluated) {
            return hs_tpl26DDU7.hscall();
        } else {
            return hs_tpl26DDU7;
        }
    };
    this.hs_setBit.evaluate = function (hs_tpl26DDU9) {
        var hs_tpl26DE5T = hs_tpl26DDU9;
        if (hs_tpl26DDU9.notEvaluated) {
            hs_tpl26DE5T = hs_tpl26DDU9.hscall();
        }
        var hs_tpl26DDUt = hs_tpl26DE5T.data[8];
        if (hs_tpl26DDUt.notEvaluated) {
            return hs_tpl26DDUt.hscall();
        } else {
            return hs_tpl26DDUt;
        }
    };
    this.hs_clearBit.evaluate = function (hs_tpl26DDUv) {
        var hs_tpl26DE6b = hs_tpl26DDUv;
        if (hs_tpl26DDUv.notEvaluated) {
            hs_tpl26DE6b = hs_tpl26DDUv.hscall();
        }
        var hs_tpl26DDUP = hs_tpl26DE6b.data[9];
        if (hs_tpl26DDUP.notEvaluated) {
            return hs_tpl26DDUP.hscall();
        } else {
            return hs_tpl26DDUP;
        }
    };
    this.hs_complementBit.evaluate = function (hs_tpl26DDUR) {
        var hs_tpl26DE6t = hs_tpl26DDUR;
        if (hs_tpl26DDUR.notEvaluated) {
            hs_tpl26DE6t = hs_tpl26DDUR.hscall();
        }
        var hs_tpl26DDVb = hs_tpl26DE6t.data[10];
        if (hs_tpl26DDVb.notEvaluated) {
            return hs_tpl26DDVb.hscall();
        } else {
            return hs_tpl26DDVb;
        }
    };
    this.hs_testBit.evaluate = function (hs_tpl26DDVd) {
        var hs_tpl26DE6L = hs_tpl26DDVd;
        if (hs_tpl26DDVd.notEvaluated) {
            hs_tpl26DE6L = hs_tpl26DDVd.hscall();
        }
        var hs_tpl26DDVx = hs_tpl26DE6L.data[11];
        if (hs_tpl26DDVx.notEvaluated) {
            return hs_tpl26DDVx.hscall();
        } else {
            return hs_tpl26DDVx;
        }
    };
    this.hs_bitSizze.evaluate = function (hs_tpl26DDVz) {
        var hs_tpl26DE73 = hs_tpl26DDVz;
        if (hs_tpl26DDVz.notEvaluated) {
            hs_tpl26DE73 = hs_tpl26DDVz.hscall();
        }
        var hs_tpl26DDVT = hs_tpl26DE73.data[12];
        if (hs_tpl26DDVT.notEvaluated) {
            return hs_tpl26DDVT.hscall();
        } else {
            return hs_tpl26DDVT;
        }
    };
    this.hs_isSigned.evaluate = function (hs_tpl26DDVV) {
        var hs_tpl26DE7l = hs_tpl26DDVV;
        if (hs_tpl26DDVV.notEvaluated) {
            hs_tpl26DE7l = hs_tpl26DDVV.hscall();
        }
        var hs_tpl26DDWf = hs_tpl26DE7l.data[13];
        if (hs_tpl26DDWf.notEvaluated) {
            return hs_tpl26DDWf.hscall();
        } else {
            return hs_tpl26DDWf;
        }
    };
    this.hs_shiftL.evaluate = function (hs_tpl26DDWh) {
        var hs_tpl26DE7D = hs_tpl26DDWh;
        if (hs_tpl26DDWh.notEvaluated) {
            hs_tpl26DE7D = hs_tpl26DDWh.hscall();
        }
        var hs_tpl26DDWB = hs_tpl26DE7D.data[14];
        if (hs_tpl26DDWB.notEvaluated) {
            return hs_tpl26DDWB.hscall();
        } else {
            return hs_tpl26DDWB;
        }
    };
    this.hs_shiftR.evaluate = function (hs_tpl26DDWD) {
        var hs_tpl26DE7V = hs_tpl26DDWD;
        if (hs_tpl26DDWD.notEvaluated) {
            hs_tpl26DE7V = hs_tpl26DDWD.hscall();
        }
        var hs_tpl26DDWX = hs_tpl26DE7V.data[15];
        if (hs_tpl26DDWX.notEvaluated) {
            return hs_tpl26DDWX.hscall();
        } else {
            return hs_tpl26DDWX;
        }
    };
    this.hs_rotateL.evaluate = function (hs_tpl26DDWZ) {
        var hs_tpl26DE8d = hs_tpl26DDWZ;
        if (hs_tpl26DDWZ.notEvaluated) {
            hs_tpl26DE8d = hs_tpl26DDWZ.hscall();
        }
        var hs_tpl26DDXj = hs_tpl26DE8d.data[16];
        if (hs_tpl26DDXj.notEvaluated) {
            return hs_tpl26DDXj.hscall();
        } else {
            return hs_tpl26DDXj;
        }
    };
    this.hs_rotateR.evaluate = function (hs_tpl26DDXl) {
        var hs_tpl26DE8v = hs_tpl26DDXl;
        if (hs_tpl26DDXl.notEvaluated) {
            hs_tpl26DE8v = hs_tpl26DDXl.hscall();
        }
        var hs_tpl26DDXF = hs_tpl26DE8v.data[17];
        if (hs_tpl26DDXF.notEvaluated) {
            return hs_tpl26DDXF.hscall();
        } else {
            return hs_tpl26DDXF;
        }
    };
    this.hs_zddmrotateR.evaluate = function (hs_zddBits26DDXJ, hs_x26DDXK, hs_i26DDXL) {
        var hs_sat26DE8M = new $hs.Thunk();
        hs_sat26DE8M.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DDXL);
        };
        return $hs.modules.DataziBits.hs_rotate.hscall(hs_zddBits26DDXJ, hs_x26DDXK, hs_sat26DE8M);
    };
    this.hs_zddmrotateL.evaluate = function (hs_zddBits26DDXQ, hs_x26DDXR, hs_i26DDXS) {
        return $hs.modules.DataziBits.hs_rotate.hscall(hs_zddBits26DDXQ, hs_x26DDXR, hs_i26DDXS);
    };
    this.hs_zddmshiftR.evaluate = function (hs_zddBits26DDXW, hs_x26DDXX, hs_i26DDXY) {
        var hs_sat26DE8N = new $hs.Thunk();
        hs_sat26DE8N.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DDXY);
        };
        return $hs.modules.DataziBits.hs_shift.hscall(hs_zddBits26DDXW, hs_x26DDXX, hs_sat26DE8N);
    };
    this.hs_zddmshiftL.evaluate = function (hs_zddBits26DDY3, hs_x26DDY4, hs_i26DDY5) {
        return $hs.modules.DataziBits.hs_shift.hscall(hs_zddBits26DDY3, hs_x26DDY4, hs_i26DDY5);
    };
    this.hs_zddmtestBit.evaluate = function (hs_zddBits26DDYa, hs_eta26DDYd, hs_eta126DDYe) {
        var hs_zddNum26DDYb = new $hs.Thunk();
        hs_zddNum26DDYb.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zdp1Bits.hscall(hs_zddBits26DDYa);
        };
        var hs_sat26DE8P = new $hs.Thunk();
        hs_sat26DE8P.evaluateOnce = function () {
            var hs_sat26DE8O = new $hs.Thunk();
            hs_sat26DE8O.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DDYb, hs_sat26DE8O);
        };
        var hs_sat26DE8S = new $hs.Thunk();
        hs_sat26DE8S.evaluateOnce = function () {
            var hs_sat26DE8Q = new $hs.Thunk();
            hs_sat26DE8Q.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DDYa, hs_eta126DDYe);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall(hs_zddBits26DDYa, hs_eta26DDYd, hs_sat26DE8Q);
        };
        var hs_sat26DE8R = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DDYb);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DE8R, hs_sat26DE8S, hs_sat26DE8P);
    };
    this.hs_zddmcomplementBit.evaluate = function (hs_zddBits26DDYm, hs_x26DDYn, hs_i26DDYo) {
        var hs_sat26DE8T = new $hs.Thunk();
        hs_sat26DE8T.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DDYm, hs_i26DDYo);
        };
        return $hs.modules.DataziBits.hs_xor.hscall(hs_zddBits26DDYm, hs_x26DDYn, hs_sat26DE8T);
    };
    this.hs_zddmclearBit.evaluate = function (hs_zddBits26DDYt, hs_x26DDYu, hs_i26DDYv) {
        var hs_sat26DE8V = new $hs.Thunk();
        hs_sat26DE8V.evaluateOnce = function () {
            var hs_sat26DE8U = new $hs.Thunk();
            hs_sat26DE8U.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DDYt, hs_i26DDYv);
            };
            return $hs.modules.DataziBits.hs_complement.hscall(hs_zddBits26DDYt, hs_sat26DE8U);
        };
        return $hs.modules.DataziBits.hs_zizazi.hscall(hs_zddBits26DDYt, hs_x26DDYu, hs_sat26DE8V);
    };
    this.hs_zddmsetBit.evaluate = function (hs_zddBits26DDYB, hs_x26DDYC, hs_i26DDYD) {
        var hs_sat26DE8W = new $hs.Thunk();
        hs_sat26DE8W.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall(hs_zddBits26DDYB, hs_i26DDYD);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall(hs_zddBits26DDYB, hs_x26DDYC, hs_sat26DE8W);
    };
    this.hs_zddmbit.evaluate = function (hs_zddBits26DDYH, hs_eta26DDYL) {
        var hs_sat26DE8Z = new $hs.Thunk();
        hs_sat26DE8Z.evaluateOnce = function () {
            var hs_sat26DE8X = new $hs.Thunk();
            hs_sat26DE8X.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DE8Y = $hs.modules.DataziBits.hs_zdp1Bits.hscall(hs_zddBits26DDYH);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DE8Y, hs_sat26DE8X);
        };
        return $hs.modules.DataziBits.hs_shiftL.hscall(hs_zddBits26DDYH, hs_sat26DE8Z, hs_eta26DDYL);
    };
    this.hs_zddmrotate.evaluate = function (hs_zddBits26DDYV, hs_x26DDYU, hs_i26DDYP) {
        var hs_sat26DE91 = new $hs.Data(1);
        hs_sat26DE91.data = [0];
        var hs_wild26DE90 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i26DDYP, hs_sat26DE91);
        switch (hs_wild26DE90.tag) {
        case 1:
            var hs_sat26DE93 = new $hs.Data(1);
            hs_sat26DE93.data = [0];
            var hs_wild126DE92 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i26DDYP, hs_sat26DE93);
            switch (hs_wild126DE92.tag) {
            case 1:
                if (hs_x26DDYU.notEvaluated) {
                    return hs_x26DDYU.hscall();
                } else {
                    return hs_x26DDYU;
                }
            case 2:
                return $hs.modules.DataziBits.hs_rotateL.hscall(hs_zddBits26DDYV, hs_x26DDYU, hs_i26DDYP);
            }
        case 2:
            var hs_sat26DE94 = new $hs.Thunk();
            hs_sat26DE94.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DDYP);
            };
            return $hs.modules.DataziBits.hs_rotateR.hscall(hs_zddBits26DDYV, hs_x26DDYU, hs_sat26DE94);
        }
    };
    this.hs_zddmshift.evaluate = function (hs_zddBits26DDZ6, hs_x26DDZ5, hs_i26DDZ0) {
        var hs_sat26DE96 = new $hs.Data(1);
        hs_sat26DE96.data = [0];
        var hs_wild26DE95 = $hs.modules.GHCziClasses.hs_zl.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i26DDZ0, hs_sat26DE96);
        switch (hs_wild26DE95.tag) {
        case 1:
            var hs_sat26DE98 = new $hs.Data(1);
            hs_sat26DE98.data = [0];
            var hs_wild126DE97 = $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_i26DDZ0, hs_sat26DE98);
            switch (hs_wild126DE97.tag) {
            case 1:
                if (hs_x26DDZ5.notEvaluated) {
                    return hs_x26DDZ5.hscall();
                } else {
                    return hs_x26DDZ5;
                }
            case 2:
                return $hs.modules.DataziBits.hs_shiftL.hscall(hs_zddBits26DDZ6, hs_x26DDZ5, hs_i26DDZ0);
            }
        case 2:
            var hs_sat26DE99 = new $hs.Thunk();
            hs_sat26DE99.evaluateOnce = function () {
                return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_i26DDZ0);
            };
            return $hs.modules.DataziBits.hs_shiftR.hscall(hs_zddBits26DDZ6, hs_x26DDZ5, hs_sat26DE99);
        }
    };
    hs_zdcisSigned25vfsT.evaluate = function (hs_ds26DDZb) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze25vfsX.evaluate = function (hs_ds26DDZf) {
        var $res = new $hs.Data(1);
        $res.data = [32];
        return $res;
    };
    hs_zdcrotate25vft1.evaluate = function (hs_eta26DDZk, hs_eta126DDZn) {
        var hs_wild26DE9k = hs_eta26DDZk;
        if (hs_eta26DDZk.notEvaluated) {
            hs_wild26DE9k = hs_eta26DDZk.hscall();
        }
        var hs_xzh26DDZy = hs_wild26DE9k.data[0];
        var hs_wild126DE9j = hs_eta126DDZn;
        if (hs_eta126DDZn.notEvaluated) {
            hs_wild126DE9j = hs_eta126DDZn.hscall();
        }
        var hs_izh26DDZr = hs_wild126DE9j.data[0];
        var hs_sat26DE9i = ($hs.Int.addCarry(32, ~1, 1))[0];
        var hs_sat26DE9h = hs_sat26DE9i;
        var hs_sat26DE9g = hs_izh26DDZr;
        var hs_sat26DE9f = hs_sat26DE9g & hs_sat26DE9h;
        var hs_izqzh26DDZw = hs_sat26DE9f;
        var hs_xzqzh26DDZz = hs_xzh26DDZy;
        var hs_sat26DE9e = ($hs.Int.addCarry(32, ~hs_izqzh26DDZw, 1))[0];
        var hs_sat26DE9d = hs_xzqzh26DDZz >> hs_sat26DE9e;
        var hs_sat26DE9c = hs_xzqzh26DDZz << hs_izqzh26DDZw;
        var hs_sat26DE9b = hs_sat26DE9c | hs_sat26DE9d;
        var hs_sat26DE9a = hs_sat26DE9b;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DE9a];
        return $res;
    };
    hs_zdcshift25vftq.evaluate = function (hs_eta26DDZJ, hs_eta126DDZM) {
        var hs_wild26DE9o = hs_eta26DDZJ;
        if (hs_eta26DDZJ.notEvaluated) {
            hs_wild26DE9o = hs_eta26DDZJ.hscall();
        }
        var hs_xzh26DDZR = hs_wild26DE9o.data[0];
        var hs_wild126DE9n = hs_eta126DDZM;
        if (hs_eta126DDZM.notEvaluated) {
            hs_wild126DE9n = hs_eta126DDZM.hscall();
        }
        var hs_izh26DDZP = hs_wild126DE9n.data[0];
        var hs_wild226DE9m = hs_izh26DDZP >= 0 ? $hs.modules.GHCziBool.hs_True : $hs.modules.GHCziBool.hs_False;
        switch (hs_wild226DE9m.tag) {
        case 1:
            var hs_sat26DE9l = -hs_izh26DDZP;
            var hs_wild326DDZU = $hs.modules.GHCziBase.hs_iShiftRAzh.hscall(hs_xzh26DDZR, hs_sat26DE9l);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDZU];
            return $res;
        case 2:
            var hs_wild326DDZW = $hs.modules.GHCziBase.hs_iShiftLzh.hscall(hs_xzh26DDZR, hs_izh26DDZP);
            var $res = new $hs.Data(1);
            $res.data = [hs_wild326DDZW];
            return $res;
        }
    };
    hs_zdccomplement25vftI.evaluate = function (hs_ds26DE00) {
        var hs_wild26DE9t = hs_ds26DE00;
        if (hs_ds26DE00.notEvaluated) {
            hs_wild26DE9t = hs_ds26DE00.hscall();
        }
        var hs_xzh26DE03 = hs_wild26DE9t.data[0];
        var hs_sat26DE9s = -1;
        var hs_sat26DE9r = hs_xzh26DE03;
        var hs_sat26DE9q = hs_sat26DE9r ^ hs_sat26DE9s;
        var hs_sat26DE9p = hs_sat26DE9q;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DE9p];
        return $res;
    };
    hs_zdcxor25vftT.evaluate = function (hs_ds26DE0c, hs_ds126DE0f) {
        var hs_wild26DE9z = hs_ds26DE0c;
        if (hs_ds26DE0c.notEvaluated) {
            hs_wild26DE9z = hs_ds26DE0c.hscall();
        }
        var hs_xzh26DE0i = hs_wild26DE9z.data[0];
        var hs_wild126DE9y = hs_ds126DE0f;
        if (hs_ds126DE0f.notEvaluated) {
            hs_wild126DE9y = hs_ds126DE0f.hscall();
        }
        var hs_yzh26DE0k = hs_wild126DE9y.data[0];
        var hs_sat26DE9x = hs_yzh26DE0k;
        var hs_sat26DE9w = hs_xzh26DE0i;
        var hs_sat26DE9v = hs_sat26DE9w ^ hs_sat26DE9x;
        var hs_sat26DE9u = hs_sat26DE9v;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DE9u];
        return $res;
    };
    hs_zdczizbzi25vfu9.evaluate = function (hs_ds26DE0s, hs_ds126DE0v) {
        var hs_wild26DE9F = hs_ds26DE0s;
        if (hs_ds26DE0s.notEvaluated) {
            hs_wild26DE9F = hs_ds26DE0s.hscall();
        }
        var hs_xzh26DE0y = hs_wild26DE9F.data[0];
        var hs_wild126DE9E = hs_ds126DE0v;
        if (hs_ds126DE0v.notEvaluated) {
            hs_wild126DE9E = hs_ds126DE0v.hscall();
        }
        var hs_yzh26DE0A = hs_wild126DE9E.data[0];
        var hs_sat26DE9D = hs_yzh26DE0A;
        var hs_sat26DE9C = hs_xzh26DE0y;
        var hs_sat26DE9B = hs_sat26DE9C | hs_sat26DE9D;
        var hs_sat26DE9A = hs_sat26DE9B;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DE9A];
        return $res;
    };
    hs_zdczizazi25vfup.evaluate = function (hs_ds26DE0I, hs_ds126DE0L) {
        var hs_wild26DE9L = hs_ds26DE0I;
        if (hs_ds26DE0I.notEvaluated) {
            hs_wild26DE9L = hs_ds26DE0I.hscall();
        }
        var hs_xzh26DE0O = hs_wild26DE9L.data[0];
        var hs_wild126DE9K = hs_ds126DE0L;
        if (hs_ds126DE0L.notEvaluated) {
            hs_wild126DE9K = hs_ds126DE0L.hscall();
        }
        var hs_yzh26DE0Q = hs_wild126DE9K.data[0];
        var hs_sat26DE9J = hs_yzh26DE0Q;
        var hs_sat26DE9I = hs_xzh26DE0O;
        var hs_sat26DE9H = hs_sat26DE9I & hs_sat26DE9J;
        var hs_sat26DE9G = hs_sat26DE9H;
        var $res = new $hs.Data(1);
        $res.data = [hs_sat26DE9G];
        return $res;
    };
    this.hs_zdfBitsInt.data = [$hs.modules.GHCziNum.hs_zdfNumInt, hs_zdczizazi25vfup, hs_zdczizbzi25vfu9, hs_zdcxor25vftT, hs_zdccomplement25vftI, hs_zdcshift25vftq, hs_zdcrotate25vft1, hs_zdcbit25vfuV, hs_zdcsetBit25vfuT, hs_zdcclearBit25vfuR, hs_zdccomplementBit25vfuP, hs_zdctestBit25vfuN, hs_zdcbitSizze25vfsX, hs_zdcisSigned25vfsT, hs_zdcshiftL25vfuL, hs_zdcshiftR25vfuJ, hs_zdcrotateL25vfuH, hs_zdcrotateR25vfuF];
    hs_zdcrotateR25vfuF.evaluate = function (hs_eta26DE1e, hs_eta126DE1f) {
        var hs_sat26DE9M = new $hs.Thunk();
        hs_sat26DE9M.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DE1f);
        };
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1e, hs_sat26DE9M);
    };
    hs_zdcrotateL25vfuH.evaluate = function (hs_eta26DE1j, hs_eta126DE1k) {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1j, hs_eta126DE1k);
    };
    hs_zdcshiftR25vfuJ.evaluate = function (hs_eta26DE1n, hs_eta126DE1o) {
        var hs_sat26DE9N = new $hs.Thunk();
        hs_sat26DE9N.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DE1o);
        };
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1n, hs_sat26DE9N);
    };
    hs_zdcshiftL25vfuL.evaluate = function (hs_eta26DE1s, hs_eta126DE1t) {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1s, hs_eta126DE1t);
    };
    hs_zdctestBit25vfuN.evaluate = function (hs_eta26DE1z, hs_eta126DE1A) {
        var hs_zddNum26DE1x = new $hs.Thunk();
        hs_zddNum26DE1x.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
        };
        var hs_sat26DE9P = new $hs.Thunk();
        hs_sat26DE9P.evaluateOnce = function () {
            var hs_sat26DE9O = new $hs.Thunk();
            hs_sat26DE9O.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DE1x, hs_sat26DE9O);
        };
        var hs_sat26DE9S = new $hs.Thunk();
        hs_sat26DE9S.evaluateOnce = function () {
            var hs_sat26DE9Q = new $hs.Thunk();
            hs_sat26DE9Q.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DE1A);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1z, hs_sat26DE9Q);
        };
        var hs_sat26DE9R = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DE1x);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DE9R, hs_sat26DE9S, hs_sat26DE9P);
    };
    hs_zdccomplementBit25vfuP.evaluate = function (hs_eta26DE1H, hs_eta126DE1I) {
        var hs_sat26DE9T = new $hs.Thunk();
        hs_sat26DE9T.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DE1I);
        };
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1H, hs_sat26DE9T);
    };
    hs_zdcclearBit25vfuR.evaluate = function (hs_eta26DE1M, hs_eta126DE1N) {
        var hs_sat26DE9V = new $hs.Thunk();
        hs_sat26DE9V.evaluateOnce = function () {
            var hs_sat26DE9U = new $hs.Thunk();
            hs_sat26DE9U.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DE1N);
            };
            return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DE9U);
        };
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1M, hs_sat26DE9V);
    };
    hs_zdcsetBit25vfuT.evaluate = function (hs_eta26DE1S, hs_eta126DE1T) {
        var hs_sat26DE9W = new $hs.Thunk();
        hs_sat26DE9W.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta126DE1T);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_eta26DE1S, hs_sat26DE9W);
    };
    hs_zdcbit25vfuV.evaluate = function (hs_eta26DE1Z) {
        var hs_sat26DE9Z = new $hs.Thunk();
        hs_sat26DE9Z.evaluateOnce = function () {
            var hs_sat26DE9X = new $hs.Thunk();
            hs_sat26DE9X.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DE9Y = $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInt);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DE9Y, hs_sat26DE9X);
        };
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInt, hs_sat26DE9Z, hs_eta26DE1Z);
    };
    hs_zdcisSigned125vfvL.evaluate = function (hs_ds26DE23) {
        var $res = new $hs.Data(2);
        $res.data = [];
        return $res;
    };
    hs_zdcbitSizze125vfvP.evaluate = function (hs_ds26DE28) {
        var hs_sat26DEa0 = $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Data.Bits.bitSize(Integer)\x00");
        return $hs.modules.GHCziErr.hs_error.hscall(hs_sat26DEa0);
    };
    hs_zdcshift125vfvU.evaluate = function (hs_x26DE2j, hs_i26DE2d) {
        var hs_wild26DE2g = hs_i26DE2d;
        if (hs_i26DE2d.notEvaluated) {
            hs_wild26DE2g = hs_i26DE2d.hscall();
        }
        var hs_izh26DE2k = hs_wild26DE2g.data[0];
        var hs_sat26DEa3 = new $hs.Data(1);
        hs_sat26DEa3.data = [0];
        var hs_wild126DEa2 = $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_wild26DE2g, hs_sat26DEa3);
        switch (hs_wild126DEa2.tag) {
        case 1:
            var hs_sat26DEa1 = -hs_izh26DE2k;
            return $hs.modules.GHCziInteger.hs_shiftRInteger.hscall(hs_x26DE2j, hs_sat26DEa1);
        case 2:
            return $hs.modules.GHCziInteger.hs_shiftLInteger.hscall(hs_x26DE2j, hs_izh26DE2k);
        }
    };
    this.hs_zdfBitsInteger.data = [$hs.modules.GHCziNum.hs_zdfNumInteger, $hs.modules.GHCziInteger.hs_andInteger, $hs.modules.GHCziInteger.hs_orInteger, $hs.modules.GHCziInteger.hs_xorInteger, $hs.modules.GHCziInteger.hs_complementInteger, hs_zdcshift125vfvU, hs_zdcrotate125vfwp, hs_zdcbit125vfwn, hs_zdcsetBit125vfwl, hs_zdcclearBit125vfwj, hs_zdccomplementBit125vfwh, hs_zdctestBit125vfwf, hs_zdcbitSizze125vfvP, hs_zdcisSigned125vfvL, hs_zdcshiftL125vfwd, hs_zdcshiftR125vfwb, hs_zdcrotateL125vfw9, hs_zdcrotateR125vfw7];
    hs_zdcrotateR125vfw7.evaluate = function (hs_eta26DE2I, hs_eta126DE2J) {
        var hs_sat26DEa4 = new $hs.Thunk();
        hs_sat26DEa4.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DE2J);
        };
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE2I, hs_sat26DEa4);
    };
    hs_zdcrotateL125vfw9.evaluate = function (hs_eta26DE2N, hs_eta126DE2O) {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE2N, hs_eta126DE2O);
    };
    hs_zdcshiftR125vfwb.evaluate = function (hs_eta26DE2R, hs_eta126DE2S) {
        var hs_sat26DEa5 = new $hs.Thunk();
        hs_sat26DEa5.evaluateOnce = function () {
            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_eta126DE2S);
        };
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE2R, hs_sat26DEa5);
    };
    hs_zdcshiftL125vfwd.evaluate = function (hs_eta26DE2W, hs_eta126DE2X) {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE2W, hs_eta126DE2X);
    };
    hs_zdctestBit125vfwf.evaluate = function (hs_eta26DE33, hs_eta126DE34) {
        var hs_zddNum26DE31 = new $hs.Thunk();
        hs_zddNum26DE31.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInteger);
        };
        var hs_sat26DEa7 = new $hs.Thunk();
        hs_sat26DEa7.evaluateOnce = function () {
            var hs_sat26DEa6 = new $hs.Thunk();
            hs_sat26DEa6.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_zddNum26DE31, hs_sat26DEa6);
        };
        var hs_sat26DEaa = new $hs.Thunk();
        hs_sat26DEaa.evaluateOnce = function () {
            var hs_sat26DEa8 = new $hs.Thunk();
            hs_sat26DEa8.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DE34);
            };
            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE33, hs_sat26DEa8);
        };
        var hs_sat26DEa9 = $hs.modules.GHCziNum.hs_zdp1Num.hscall(hs_zddNum26DE31);
        return $hs.modules.GHCziClasses.hs_zsze.hscall(hs_sat26DEa9, hs_sat26DEaa, hs_sat26DEa7);
    };
    hs_zdccomplementBit125vfwh.evaluate = function (hs_eta26DE3b, hs_eta126DE3c) {
        var hs_sat26DEab = new $hs.Thunk();
        hs_sat26DEab.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DE3c);
        };
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE3b, hs_sat26DEab);
    };
    hs_zdcclearBit125vfwj.evaluate = function (hs_eta26DE3g, hs_eta126DE3h) {
        var hs_sat26DEad = new $hs.Thunk();
        hs_sat26DEad.evaluateOnce = function () {
            var hs_sat26DEac = new $hs.Thunk();
            hs_sat26DEac.evaluateOnce = function () {
                return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DE3h);
            };
            return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_sat26DEac);
        };
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE3g, hs_sat26DEad);
    };
    hs_zdcsetBit125vfwl.evaluate = function (hs_eta26DE3m, hs_eta126DE3n) {
        var hs_sat26DEae = new $hs.Thunk();
        hs_sat26DEae.evaluateOnce = function () {
            return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta126DE3n);
        };
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_eta26DE3m, hs_sat26DEae);
    };
    hs_zdcbit125vfwn.evaluate = function (hs_eta26DE3t) {
        var hs_sat26DEah = new $hs.Thunk();
        hs_sat26DEah.evaluateOnce = function () {
            var hs_sat26DEaf = new $hs.Thunk();
            hs_sat26DEaf.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
            };
            var hs_sat26DEag = $hs.modules.DataziBits.hs_zdp1Bits.hscall($hs.modules.DataziBits.hs_zdfBitsInteger);
            return $hs.modules.GHCziNum.hs_fromInteger.hscall(hs_sat26DEag, hs_sat26DEaf);
        };
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_sat26DEah, hs_eta26DE3t);
    };
    hs_zdcrotate125vfwp.evaluate = function (hs_x26DE3w, hs_i26DE3x) {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.DataziBits.hs_zdfBitsInteger, hs_x26DE3w, hs_i26DE3x);
    };
    this.hs_DZCBits.evaluate = function (hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6lk, hs_eta1cW6lj, hs_eta1cW6li, hs_eta1cW6lh, hs_eta1cW6lg, hs_eta1cW6lf, hs_eta1cW6le, hs_eta1cW6ld, hs_eta1cW6lc, hs_eta1cW6lb, hs_eta1cW6la, hs_eta1cW6l9, hs_eta1cW6l8, hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
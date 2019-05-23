
$hs.modules.GHCziEventziEPoll = new $hs.Module();
$hs.modules.GHCziEventziEPoll.dependencies = ["GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Word", "Data.Bits", "Data.Monoid", "Foreign.C.Error", "Foreign.C.Types", "Foreign.Marshal.Utils", "Foreign.Storable", "System.Posix.Internals", "System.Posix.Types", "GHC.Event.Array", "GHC.Event.Internal"];
$hs.modules.GHCziEventziEPoll.initBeforeDependencies = function () {
    this.hs_zdWEPoll = new $hs.Func(2);
    this.hs_available = new $hs.Data(2);
    this.hs_zdfStorableEvent = new $hs.Data(1);
    this.hs_zdfEqEventType = new $hs.Data(1);
    this.hs_zdfShowEventType = new $hs.Data(1);
    this.hs_zdfNumEventType = new $hs.Data(1);
    this.hs_zdfBitsEventType = new $hs.Data(1);
    this.hs_zdfShowEvent = new $hs.Data(1);
    this.hs_zdfShowEPollFd = new $hs.Data(1);
    this.hs_zdfEqEPollFd = new $hs.Data(1);
    this.hs_new = new $hs.Thunk();
    this.hs_EventType = new $hs.Func(1);
    this.hs_ControlOp = new $hs.Func(1);
    this.hs_Event = new $hs.Func(2);
    this.hs_EPollFd = new $hs.Func(1);
    this.hs_EPoll = new $hs.Func(2);
    this.hs_zdWEPoll.notEvaluated = true;
    this.hs_zdWEPoll.evaluate = function (hs_tpl26DsLf, hs_tpl26DsLh) {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this.evaluate(hs_tpl26DsLf, hs_tpl26DsLh);
    };
    this.hs_available.notEvaluated = true;
    this.hs_available.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfStorableEvent.notEvaluated = true;
    this.hs_zdfStorableEvent.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfEqEventType.notEvaluated = true;
    this.hs_zdfEqEventType.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfShowEventType.notEvaluated = true;
    this.hs_zdfShowEventType.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfNumEventType.notEvaluated = true;
    this.hs_zdfNumEventType.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfBitsEventType.notEvaluated = true;
    this.hs_zdfBitsEventType.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfShowEvent.notEvaluated = true;
    this.hs_zdfShowEvent.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfShowEPollFd.notEvaluated = true;
    this.hs_zdfShowEPollFd.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfEqEPollFd.notEvaluated = true;
    this.hs_zdfEqEPollFd.evaluate = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_new.evaluateOnce = function () {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_EventType.notEvaluated = true;
    this.hs_EventType.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ControlOp.notEvaluated = true;
    this.hs_ControlOp.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Event.notEvaluated = true;
    this.hs_Event.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_EPollFd.notEvaluated = true;
    this.hs_EPollFd.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_EPoll.notEvaluated = true;
    this.hs_EPoll.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.GHCziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.GHCziEventziEPoll.initAfterDependencies = function () {
    this.hs_zdWEPoll.notEvaluated = false;
    this.hs_available.notEvaluated = false;
    this.hs_available.evaluate = function () {
        return this;
    };
    this.hs_zdfStorableEvent.notEvaluated = false;
    this.hs_zdfStorableEvent.evaluate = function () {
        return this;
    };
    this.hs_zdfEqEventType.notEvaluated = false;
    this.hs_zdfEqEventType.evaluate = function () {
        return this;
    };
    this.hs_zdfShowEventType.notEvaluated = false;
    this.hs_zdfShowEventType.evaluate = function () {
        return this;
    };
    this.hs_zdfNumEventType.notEvaluated = false;
    this.hs_zdfNumEventType.evaluate = function () {
        return this;
    };
    this.hs_zdfBitsEventType.notEvaluated = false;
    this.hs_zdfBitsEventType.evaluate = function () {
        return this;
    };
    this.hs_zdfShowEvent.notEvaluated = false;
    this.hs_zdfShowEvent.evaluate = function () {
        return this;
    };
    this.hs_zdfShowEPollFd.notEvaluated = false;
    this.hs_zdfShowEPollFd.evaluate = function () {
        return this;
    };
    this.hs_zdfEqEPollFd.notEvaluated = false;
    this.hs_zdfEqEPollFd.evaluate = function () {
        return this;
    };
    this.hs_EventType.notEvaluated = false;
    this.hs_ControlOp.notEvaluated = false;
    this.hs_Event.notEvaluated = false;
    this.hs_EPollFd.notEvaluated = false;
    this.hs_EPoll.notEvaluated = false;
    var hs_epollFd25u2zH = new $hs.Func(1);
    var hs_a25v4fb = new $hs.Func(1);
    var hs_a125v4fe = new $hs.Func(1);
    var hs_a225v4fh = new $hs.Func(5);
    var hs_czuepollzuctl25u2zK = new $hs.Func(5);
    var hs_zdcpoke25v4fM = new $hs.Func(2);
    var hs_zdcpeek25v4g6 = new $hs.Func(1);
    var hs_zdcalignment25v4gk = new $hs.Func(1);
    var hs_zdcsizzeOf25v4gn = new $hs.Func(1);
    var hs_zdcpokeByteOff25v4gq = new $hs.Thunk();
    var hs_zdcpeekByteOff25v4gr = new $hs.Thunk();
    var hs_zdcpokeElemOff25v4gs = new $hs.Thunk();
    var hs_zdcpeekElemOff25v4gt = new $hs.Thunk();
    var hs_a325v4gu = new $hs.Thunk();
    var hs_zdczizazi25v4gv = new $hs.Thunk();
    var hs_a425v4gw = new $hs.Thunk();
    var hs_zdczizbzi25v4gx = new $hs.Thunk();
    var hs_a525v4gy = new $hs.Thunk();
    var hs_zdcxor25v4gz = new $hs.Thunk();
    var hs_a625v4gA = new $hs.Thunk();
    var hs_zdccomplement25v4gB = new $hs.Thunk();
    var hs_a725v4gC = new $hs.Thunk();
    var hs_zdcshift25v4gD = new $hs.Thunk();
    var hs_a825v4gE = new $hs.Thunk();
    var hs_zdcrotate25v4gF = new $hs.Thunk();
    var hs_a925v4gG = new $hs.Thunk();
    var hs_zdcbit25v4gH = new $hs.Thunk();
    var hs_a1025v4gI = new $hs.Thunk();
    var hs_zdcsetBit25v4gJ = new $hs.Thunk();
    var hs_a1125v4gK = new $hs.Thunk();
    var hs_zdcclearBit25v4gL = new $hs.Thunk();
    var hs_a1225v4gM = new $hs.Thunk();
    var hs_zdccomplementBit25v4gN = new $hs.Thunk();
    var hs_a1325v4gO = new $hs.Thunk();
    var hs_zdctestBit25v4gP = new $hs.Thunk();
    var hs_a1425v4gQ = new $hs.Thunk();
    var hs_zdcbitSizze25v4gR = new $hs.Thunk();
    var hs_a1525v4gS = new $hs.Thunk();
    var hs_zdcisSigned25v4gT = new $hs.Thunk();
    var hs_a1625v4gU = new $hs.Thunk();
    var hs_zdcshiftL25v4gV = new $hs.Thunk();
    var hs_a1725v4gW = new $hs.Thunk();
    var hs_zdcshiftR25v4gX = new $hs.Thunk();
    var hs_a1825v4gY = new $hs.Thunk();
    var hs_zdcrotateL25v4gZ = new $hs.Thunk();
    var hs_a1925v4h0 = new $hs.Thunk();
    var hs_zdcrotateR25v4h1 = new $hs.Thunk();
    var hs_a2025v4h2 = new $hs.Thunk();
    var hs_zdczp25v4h3 = new $hs.Thunk();
    var hs_a2125v4h4 = new $hs.Thunk();
    var hs_zdczt25v4h5 = new $hs.Thunk();
    var hs_a2225v4h6 = new $hs.Thunk();
    var hs_zdczm25v4h7 = new $hs.Thunk();
    var hs_a2325v4h8 = new $hs.Thunk();
    var hs_zdcnegate25v4h9 = new $hs.Thunk();
    var hs_a2425v4ha = new $hs.Thunk();
    var hs_zdcabs25v4hb = new $hs.Thunk();
    var hs_a2525v4hc = new $hs.Thunk();
    var hs_zdcsignum25v4hd = new $hs.Thunk();
    var hs_a2625v4he = new $hs.Thunk();
    var hs_zdcfromInteger25v4hf = new $hs.Thunk();
    var hs_a2725v4hg = new $hs.Thunk();
    var hs_zdczeze25v4hh = new $hs.Thunk();
    var hs_a2825v4hi = new $hs.Thunk();
    var hs_zdczsze25v4hj = new $hs.Thunk();
    var hs_zdcshowsPrec25v4hk = new $hs.Func(2);
    var hs_sat26DsT5 = new $hs.Thunk();
    var hs_zdcshowList25v4hD = new $hs.Thunk();
    var hs_zdcshow25v4hE = new $hs.Thunk();
    var hs_zdcshowsPrec125v4hH = new $hs.Func(2);
    var hs_sat26DsTv = new $hs.Thunk();
    var hs_zdcshowList125v4ie = new $hs.Thunk();
    var hs_zdcshow125v4if = new $hs.Thunk();
    var hs_zdcshowsPrec225v4ii = new $hs.Func(2);
    var hs_sat26DsTL = new $hs.Thunk();
    var hs_zdcshowList225v4iB = new $hs.Thunk();
    var hs_zdcshow225v4iC = new $hs.Thunk();
    var hs_a2925v4iF = new $hs.Thunk();
    var hs_zdczeze125v4iG = new $hs.Thunk();
    var hs_a3025v4iH = new $hs.Thunk();
    var hs_zdczsze125v4iI = new $hs.Thunk();
    var hs_delete25u2zO = new $hs.Func(1);
    var hs_sat26DsTQ = new $hs.Thunk();
    var hs_a3125v4iR = new $hs.Thunk();
    var hs_sat26DsTR = new $hs.Thunk();
    var hs_a3225v4iT = new $hs.Thunk();
    var hs_sat26DsTS = new $hs.Thunk();
    var hs_a3325v4iV = new $hs.Thunk();
    var hs_sat26DsTT = new $hs.Thunk();
    var hs_a3425v4iX = new $hs.Thunk();
    var hs_sat26DsTU = new $hs.Thunk();
    var hs_a3525v4iZ = new $hs.Thunk();
    var hs_sat26DsTV = new $hs.Thunk();
    var hs_a3625v4j1 = new $hs.Thunk();
    var hs_sat26DsTW = new $hs.Thunk();
    var hs_a3725v4j3 = new $hs.Thunk();
    var hs_modifyFd25u2zP = new $hs.Func(4);
    var hs_poll25u2zQ = new $hs.Func(3);
    var hs_sat26DsVh = new $hs.Func(1);
    var hs_sat26DsVv = new $hs.Thunk();
    this.hs_zdWEPoll.evaluate = function (hs_tpl26DsLf, hs_tpl26DsLh) {
        var hs_tpl26DsLj = hs_tpl26DsLf;
        if (hs_tpl26DsLf.notEvaluated) {
            hs_tpl26DsLj = hs_tpl26DsLf.hscall();
        }
        var hs_tpl26DsLk = hs_tpl26DsLh;
        if (hs_tpl26DsLh.notEvaluated) {
            hs_tpl26DsLk = hs_tpl26DsLh.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DsLj, hs_tpl26DsLk];
        return $res;
    };
    this.hs_available.data = [];
    hs_epollFd25u2zH.evaluate = function (hs_ds26DsLm) {
        var hs_wild26DsSr = hs_ds26DsLm;
        if (hs_ds26DsLm.notEvaluated) {
            hs_wild26DsSr = hs_ds26DsLm.hscall();
        }
        var hs_ds126DsLq = hs_wild26DsSr.data[0];
        if (hs_ds126DsLq.notEvaluated) {
            return hs_ds126DsLq.hscall();
        } else {
            return hs_ds126DsLq;
        }
    };
    hs_a25v4fb.evaluate = function (hs_ds26DsLt) {
        if (hs_ds26DsLt.notEvaluated) {
            return hs_ds26DsLt.hscall();
        } else {
            return hs_ds26DsLt;
        }
    };
    hs_a125v4fe.evaluate = function (hs_ds26DsLw) {
        if (hs_ds26DsLw.notEvaluated) {
            return hs_ds26DsLw.hscall();
        } else {
            return hs_ds26DsLw;
        }
    };
    hs_a225v4fh.evaluate = function (hs_ds26DsLD, hs_ds126DsLG, hs_ds226DsLJ, hs_ds326DsLM, hs_eta26DsLU) {
        var hs_ds426DsSw = hs_ds26DsLD;
        if (hs_ds26DsLD.notEvaluated) {
            hs_ds426DsSw = hs_ds26DsLD.hscall();
        }
        var hs_ds526DsLQ = hs_ds426DsSw.data[0];
        var hs_ds626DsSv = hs_ds126DsLG;
        if (hs_ds126DsLG.notEvaluated) {
            hs_ds626DsSv = hs_ds126DsLG.hscall();
        }
        var hs_ds726DsLR = hs_ds626DsSv.data[0];
        var hs_ds826DsSu = hs_ds226DsLJ;
        if (hs_ds226DsLJ.notEvaluated) {
            hs_ds826DsSu = hs_ds226DsLJ.hscall();
        }
        var hs_ds926DsLS = hs_ds826DsSu.data[0];
        var hs_ds1026DsSt = hs_ds326DsLM;
        if (hs_ds326DsLM.notEvaluated) {
            hs_ds1026DsSt = hs_ds326DsLM.hscall();
        }
        var hs_ds1126DsLT = hs_ds1026DsSt.data[0];
        var hs_wild26DsSx = [hs_eta26DsLU, epoll_ctl(hs_ds526DsLQ, hs_ds726DsLR, hs_ds926DsLS, hs_ds1126DsLT)];
        var hs_ds1226DsLZ = hs_wild26DsSx[0];
        var hs_ds1326DsM0 = hs_wild26DsSx[1];
        var hs_sat26DsSs = new $hs.Data(1);
        hs_sat26DsSs.data = [hs_ds1326DsM0];
        return [hs_ds1226DsLZ, hs_sat26DsSs];
    };
    hs_czuepollzuctl25u2zK.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225v4fh.hscall(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcpoke25v4fM.evaluate = function (hs_ptr26DsM5, hs_e26DsM7) {
        var hs_sat26DsSz = new $hs.Thunk();
        hs_sat26DsSz.evaluateOnce = function () {
            var hs_sat26DsSG = new $hs.Thunk();
            hs_sat26DsSG.evaluateOnce = function () {
                var hs_wild26DsSI = hs_e26DsM7;
                if (hs_e26DsM7.notEvaluated) {
                    hs_wild26DsSI = hs_e26DsM7.hscall();
                }
                var hs_ds126DsMj = hs_wild26DsSI.data[1];
                if (hs_ds126DsMj.notEvaluated) {
                    return hs_ds126DsMj.hscall();
                } else {
                    return hs_ds126DsMj;
                }
            };
            var hs_sat26DsSF = new $hs.Data(1);
            hs_sat26DsSF.data = [4];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.SystemziPosixziTypes.hs_zdfStorableFd, hs_ptr26DsM5, hs_sat26DsSF, hs_sat26DsSG);
        };
        var hs_sat26DsSy = new $hs.Thunk();
        hs_sat26DsSy.evaluateOnce = function () {
            var hs_sat26DsSB = new $hs.Thunk();
            hs_sat26DsSB.evaluateOnce = function () {
                var hs_sat26DsSC = new $hs.Thunk();
                hs_sat26DsSC.evaluateOnce = function () {
                    var hs_wild26DsSE = hs_e26DsM7;
                    if (hs_e26DsM7.notEvaluated) {
                        hs_wild26DsSE = hs_e26DsM7.hscall();
                    }
                    var hs_ds26DsMb = hs_wild26DsSE.data[0];
                    if (hs_ds26DsMb.notEvaluated) {
                        return hs_ds26DsMb.hscall();
                    } else {
                        return hs_ds26DsMb;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_a125v4fe, hs_sat26DsSC);
            };
            var hs_sat26DsSA = new $hs.Data(1);
            hs_sat26DsSA.data = [0];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26DsM5, hs_sat26DsSA, hs_sat26DsSB);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsSy, hs_sat26DsSz);
    };
    hs_zdcpeek25v4g6.evaluate = function (hs_ptr26DsMo) {
        var hs_sat26DsSK = new $hs.Func(1);
        hs_sat26DsSK.evaluate = function (hs_ets26DsMv) {
            var hs_sat26DsSN = new $hs.Func(1);
            hs_sat26DsSN.evaluate = function (hs_ed26DsMw) {
                var hs_sat26DsSP = new $hs.Data(1);
                hs_sat26DsSP.data = [hs_ets26DsMv, hs_ed26DsMw];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsSP);
            };
            var hs_sat26DsSM = new $hs.Thunk();
            hs_sat26DsSM.evaluateOnce = function () {
                var hs_sat26DsSO = new $hs.Data(1);
                hs_sat26DsSO.data = [4];
                return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.SystemziPosixziTypes.hs_zdfStorableFd, hs_ptr26DsMo, hs_sat26DsSO);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsSM, hs_sat26DsSN);
        };
        var hs_sat26DsSJ = new $hs.Thunk();
        hs_sat26DsSJ.evaluateOnce = function () {
            var hs_sat26DsSL = new $hs.Data(1);
            hs_sat26DsSL.data = [0];
            return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26DsMo, hs_sat26DsSL);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsSJ, hs_sat26DsSK);
    };
    hs_zdcalignment25v4gk.evaluate = function (hs_ds26DsMC) {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcsizzeOf25v4gn.evaluate = function (hs_ds26DsMF) {
        var $res = new $hs.Data(1);
        $res.data = [12];
        return $res;
    };
    this.hs_zdfStorableEvent.data = [hs_zdcsizzeOf25v4gn, hs_zdcalignment25v4gk, hs_zdcpeekElemOff25v4gt, hs_zdcpokeElemOff25v4gs, hs_zdcpeekByteOff25v4gr, hs_zdcpokeByteOff25v4gq, hs_zdcpeek25v4g6, hs_zdcpoke25v4fM];
    hs_zdcpokeByteOff25v4gq.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeByteOff.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_zdcpeekByteOff25v4gr.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekByteOff.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_zdcpokeElemOff25v4gs.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeElemOff.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_zdcpeekElemOff25v4gt.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekElemOff.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_a325v4gu.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi25v4gv.evaluateOnce = function () {
        if (hs_a325v4gu.notEvaluated) {
            return hs_a325v4gu.hscall();
        } else {
            return hs_a325v4gu;
        }
    };
    hs_a425v4gw.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi25v4gx.evaluateOnce = function () {
        if (hs_a425v4gw.notEvaluated) {
            return hs_a425v4gw.hscall();
        } else {
            return hs_a425v4gw;
        }
    };
    hs_a525v4gy.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor25v4gz.evaluateOnce = function () {
        if (hs_a525v4gy.notEvaluated) {
            return hs_a525v4gy.hscall();
        } else {
            return hs_a525v4gy;
        }
    };
    hs_a625v4gA.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement25v4gB.evaluateOnce = function () {
        if (hs_a625v4gA.notEvaluated) {
            return hs_a625v4gA.hscall();
        } else {
            return hs_a625v4gA;
        }
    };
    hs_a725v4gC.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift25v4gD.evaluateOnce = function () {
        if (hs_a725v4gC.notEvaluated) {
            return hs_a725v4gC.hscall();
        } else {
            return hs_a725v4gC;
        }
    };
    hs_a825v4gE.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate25v4gF.evaluateOnce = function () {
        if (hs_a825v4gE.notEvaluated) {
            return hs_a825v4gE.hscall();
        } else {
            return hs_a825v4gE;
        }
    };
    hs_a925v4gG.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit25v4gH.evaluateOnce = function () {
        if (hs_a925v4gG.notEvaluated) {
            return hs_a925v4gG.hscall();
        } else {
            return hs_a925v4gG;
        }
    };
    hs_a1025v4gI.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit25v4gJ.evaluateOnce = function () {
        if (hs_a1025v4gI.notEvaluated) {
            return hs_a1025v4gI.hscall();
        } else {
            return hs_a1025v4gI;
        }
    };
    hs_a1125v4gK.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit25v4gL.evaluateOnce = function () {
        if (hs_a1125v4gK.notEvaluated) {
            return hs_a1125v4gK.hscall();
        } else {
            return hs_a1125v4gK;
        }
    };
    hs_a1225v4gM.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit25v4gN.evaluateOnce = function () {
        if (hs_a1225v4gM.notEvaluated) {
            return hs_a1225v4gM.hscall();
        } else {
            return hs_a1225v4gM;
        }
    };
    hs_a1325v4gO.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit25v4gP.evaluateOnce = function () {
        if (hs_a1325v4gO.notEvaluated) {
            return hs_a1325v4gO.hscall();
        } else {
            return hs_a1325v4gO;
        }
    };
    hs_a1425v4gQ.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze25v4gR.evaluateOnce = function () {
        if (hs_a1425v4gQ.notEvaluated) {
            return hs_a1425v4gQ.hscall();
        } else {
            return hs_a1425v4gQ;
        }
    };
    hs_a1525v4gS.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned25v4gT.evaluateOnce = function () {
        if (hs_a1525v4gS.notEvaluated) {
            return hs_a1525v4gS.hscall();
        } else {
            return hs_a1525v4gS;
        }
    };
    hs_a1625v4gU.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL25v4gV.evaluateOnce = function () {
        if (hs_a1625v4gU.notEvaluated) {
            return hs_a1625v4gU.hscall();
        } else {
            return hs_a1625v4gU;
        }
    };
    hs_a1725v4gW.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR25v4gX.evaluateOnce = function () {
        if (hs_a1725v4gW.notEvaluated) {
            return hs_a1725v4gW.hscall();
        } else {
            return hs_a1725v4gW;
        }
    };
    hs_a1825v4gY.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL25v4gZ.evaluateOnce = function () {
        if (hs_a1825v4gY.notEvaluated) {
            return hs_a1825v4gY.hscall();
        } else {
            return hs_a1825v4gY;
        }
    };
    hs_a1925v4h0.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR25v4h1.evaluateOnce = function () {
        if (hs_a1925v4h0.notEvaluated) {
            return hs_a1925v4h0.hscall();
        } else {
            return hs_a1925v4h0;
        }
    };
    hs_a2025v4h2.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp25v4h3.evaluateOnce = function () {
        if (hs_a2025v4h2.notEvaluated) {
            return hs_a2025v4h2.hscall();
        } else {
            return hs_a2025v4h2;
        }
    };
    hs_a2125v4h4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt25v4h5.evaluateOnce = function () {
        if (hs_a2125v4h4.notEvaluated) {
            return hs_a2125v4h4.hscall();
        } else {
            return hs_a2125v4h4;
        }
    };
    hs_a2225v4h6.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm25v4h7.evaluateOnce = function () {
        if (hs_a2225v4h6.notEvaluated) {
            return hs_a2225v4h6.hscall();
        } else {
            return hs_a2225v4h6;
        }
    };
    hs_a2325v4h8.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate25v4h9.evaluateOnce = function () {
        if (hs_a2325v4h8.notEvaluated) {
            return hs_a2325v4h8.hscall();
        } else {
            return hs_a2325v4h8;
        }
    };
    hs_a2425v4ha.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs25v4hb.evaluateOnce = function () {
        if (hs_a2425v4ha.notEvaluated) {
            return hs_a2425v4ha.hscall();
        } else {
            return hs_a2425v4ha;
        }
    };
    hs_a2525v4hc.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum25v4hd.evaluateOnce = function () {
        if (hs_a2525v4hc.notEvaluated) {
            return hs_a2525v4hc.hscall();
        } else {
            return hs_a2525v4hc;
        }
    };
    hs_a2625v4he.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger25v4hf.evaluateOnce = function () {
        if (hs_a2625v4he.notEvaluated) {
            return hs_a2625v4he.hscall();
        } else {
            return hs_a2625v4he;
        }
    };
    hs_a2725v4hg.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze25v4hh.evaluateOnce = function () {
        if (hs_a2725v4hg.notEvaluated) {
            return hs_a2725v4hg.hscall();
        } else {
            return hs_a2725v4hg;
        }
    };
    hs_a2825v4hi.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze25v4hj.evaluateOnce = function () {
        if (hs_a2825v4hi.notEvaluated) {
            return hs_a2825v4hi.hscall();
        } else {
            return hs_a2825v4hi;
        }
    };
    this.hs_zdfEqEventType.data = [hs_a2725v4hg, hs_a2825v4hi];
    hs_zdcshowsPrec25v4hk.evaluate = function (hs_a3826DsND, hs_ds26DsNL) {
        var hs_sat26DsSR = new $hs.Thunk();
        hs_sat26DsSR.evaluateOnce = function () {
            var hs_sat26DsSU = new $hs.Thunk();
            hs_sat26DsSU.evaluateOnce = function () {
                var hs_sat26DsSX = new $hs.Thunk();
                hs_sat26DsSX.evaluateOnce = function () {
                    var hs_sat26DsT0 = new $hs.Thunk();
                    hs_sat26DsT0.evaluateOnce = function () {
                        var hs_sat26DsT3 = new $hs.Data(1);
                        hs_sat26DsT3.data = ["}"];
                        var hs_sat26DsT2 = new $hs.Data(2);
                        hs_sat26DsT2.data = [hs_sat26DsT3, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsT2);
                    };
                    var hs_sat26DsSZ = new $hs.Thunk();
                    hs_sat26DsSZ.evaluateOnce = function () {
                        var hs_sat26DsT1 = new $hs.Data(1);
                        hs_sat26DsT1.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32, hs_sat26DsT1, hs_ds26DsNL);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsSZ, hs_sat26DsT0);
                };
                var hs_sat26DsSW = new $hs.Thunk();
                hs_sat26DsSW.evaluateOnce = function () {
                    var hs_sat26DsSY = new $hs.Thunk();
                    hs_sat26DsSY.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("unEventType = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsSY);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsSW, hs_sat26DsSX);
            };
            var hs_sat26DsST = new $hs.Thunk();
            hs_sat26DsST.evaluateOnce = function () {
                var hs_sat26DsSV = new $hs.Thunk();
                hs_sat26DsSV.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EventType {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsSV);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsST, hs_sat26DsSU);
        };
        var hs_sat26DsSQ = new $hs.Thunk();
        hs_sat26DsSQ.evaluateOnce = function () {
            var hs_sat26DsSS = new $hs.Data(1);
            hs_sat26DsSS.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a3826DsND, hs_sat26DsSS);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DsSQ, hs_sat26DsSR);
    };
    hs_sat26DsT5.evaluateOnce = function () {
        var hs_sat26DsT4 = new $hs.Data(1);
        hs_sat26DsT4.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziEPoll.hs_zdfShowEventType, hs_sat26DsT4);
    };
    this.hs_zdfShowEventType.data = [hs_zdcshowsPrec25v4hk, hs_zdcshow25v4hE, hs_zdcshowList25v4hD];
    hs_zdcshowList25v4hD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DsT5);
    };
    hs_zdcshow25v4hE.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziEPoll.hs_zdfShowEventType);
    };
    this.hs_zdfNumEventType.data = [$hs.modules.GHCziEventziEPoll.hs_zdfEqEventType, $hs.modules.GHCziEventziEPoll.hs_zdfShowEventType, hs_a2025v4h2, hs_a2125v4h4, hs_a2225v4h6, hs_a2325v4h8, hs_a2425v4ha, hs_a2525v4hc, hs_a2625v4he];
    this.hs_zdfBitsEventType.data = [$hs.modules.GHCziEventziEPoll.hs_zdfNumEventType, hs_a325v4gu, hs_a425v4gw, hs_a525v4gy, hs_a625v4gA, hs_a725v4gC, hs_a825v4gE, hs_a925v4gG, hs_a1025v4gI, hs_a1125v4gK, hs_a1225v4gM, hs_a1325v4gO, hs_a1425v4gQ, hs_a1525v4gS, hs_a1625v4gU, hs_a1725v4gW, hs_a1825v4gY, hs_a1925v4h0];
    hs_zdcshowsPrec125v4hH.evaluate = function (hs_a3826DsO4, hs_ds26DsO0) {
        var hs_wild26DsT7 = hs_ds26DsO0;
        if (hs_ds26DsO0.notEvaluated) {
            hs_wild26DsT7 = hs_ds26DsO0.hscall();
        }
        var hs_b126DsOc = hs_wild26DsT7.data[0];
        var hs_b226DsOj = hs_wild26DsT7.data[1];
        var hs_sat26DsT8 = new $hs.Thunk();
        hs_sat26DsT8.evaluateOnce = function () {
            var hs_sat26DsTb = new $hs.Thunk();
            hs_sat26DsTb.evaluateOnce = function () {
                var hs_sat26DsTe = new $hs.Thunk();
                hs_sat26DsTe.evaluateOnce = function () {
                    var hs_sat26DsTh = new $hs.Thunk();
                    hs_sat26DsTh.evaluateOnce = function () {
                        var hs_sat26DsTk = new $hs.Thunk();
                        hs_sat26DsTk.evaluateOnce = function () {
                            var hs_sat26DsTn = new $hs.Thunk();
                            hs_sat26DsTn.evaluateOnce = function () {
                                var hs_sat26DsTq = new $hs.Thunk();
                                hs_sat26DsTq.evaluateOnce = function () {
                                    var hs_sat26DsTt = new $hs.Data(1);
                                    hs_sat26DsTt.data = ["}"];
                                    var hs_sat26DsTs = new $hs.Data(2);
                                    hs_sat26DsTs.data = [hs_sat26DsTt, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTs);
                                };
                                var hs_sat26DsTp = new $hs.Thunk();
                                hs_sat26DsTp.evaluateOnce = function () {
                                    var hs_sat26DsTr = new $hs.Data(1);
                                    hs_sat26DsTr.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DsTr, hs_b226DsOj);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTp, hs_sat26DsTq);
                            };
                            var hs_sat26DsTm = new $hs.Thunk();
                            hs_sat26DsTm.evaluateOnce = function () {
                                var hs_sat26DsTo = new $hs.Thunk();
                                hs_sat26DsTo.evaluateOnce = function () {
                                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("eventFd = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTo);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTm, hs_sat26DsTn);
                        };
                        var hs_sat26DsTj = new $hs.Thunk();
                        hs_sat26DsTj.evaluateOnce = function () {
                            var hs_sat26DsTl = new $hs.Thunk();
                            hs_sat26DsTl.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTl);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTj, hs_sat26DsTk);
                    };
                    var hs_sat26DsTg = new $hs.Thunk();
                    hs_sat26DsTg.evaluateOnce = function () {
                        var hs_sat26DsTi = new $hs.Data(1);
                        hs_sat26DsTi.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziEPoll.hs_zdfShowEventType, hs_sat26DsTi, hs_b126DsOc);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTg, hs_sat26DsTh);
                };
                var hs_sat26DsTd = new $hs.Thunk();
                hs_sat26DsTd.evaluateOnce = function () {
                    var hs_sat26DsTf = new $hs.Thunk();
                    hs_sat26DsTf.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("eventTypes = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTf);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTd, hs_sat26DsTe);
            };
            var hs_sat26DsTa = new $hs.Thunk();
            hs_sat26DsTa.evaluateOnce = function () {
                var hs_sat26DsTc = new $hs.Thunk();
                hs_sat26DsTc.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("Event {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTc);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTa, hs_sat26DsTb);
        };
        var hs_sat26DsT6 = new $hs.Thunk();
        hs_sat26DsT6.evaluateOnce = function () {
            var hs_sat26DsT9 = new $hs.Data(1);
            hs_sat26DsT9.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a3826DsO4, hs_sat26DsT9);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DsT6, hs_sat26DsT8);
    };
    hs_sat26DsTv.evaluateOnce = function () {
        var hs_sat26DsTu = new $hs.Data(1);
        hs_sat26DsTu.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziEPoll.hs_zdfShowEvent, hs_sat26DsTu);
    };
    this.hs_zdfShowEvent.data = [hs_zdcshowsPrec125v4hH, hs_zdcshow125v4if, hs_zdcshowList125v4ie];
    hs_zdcshowList125v4ie.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DsTv);
    };
    hs_zdcshow125v4if.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziEPoll.hs_zdfShowEvent);
    };
    hs_zdcshowsPrec225v4ii.evaluate = function (hs_a3826DsOB, hs_ds26DsOJ) {
        var hs_sat26DsTx = new $hs.Thunk();
        hs_sat26DsTx.evaluateOnce = function () {
            var hs_sat26DsTA = new $hs.Thunk();
            hs_sat26DsTA.evaluateOnce = function () {
                var hs_sat26DsTD = new $hs.Thunk();
                hs_sat26DsTD.evaluateOnce = function () {
                    var hs_sat26DsTG = new $hs.Thunk();
                    hs_sat26DsTG.evaluateOnce = function () {
                        var hs_sat26DsTJ = new $hs.Data(1);
                        hs_sat26DsTJ.data = ["}"];
                        var hs_sat26DsTI = new $hs.Data(2);
                        hs_sat26DsTI.data = [hs_sat26DsTJ, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTI);
                    };
                    var hs_sat26DsTF = new $hs.Thunk();
                    hs_sat26DsTF.evaluateOnce = function () {
                        var hs_sat26DsTH = new $hs.Data(1);
                        hs_sat26DsTH.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_sat26DsTH, hs_ds26DsOJ);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTF, hs_sat26DsTG);
                };
                var hs_sat26DsTC = new $hs.Thunk();
                hs_sat26DsTC.evaluateOnce = function () {
                    var hs_sat26DsTE = new $hs.Thunk();
                    hs_sat26DsTE.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("fromEPollFd = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTE);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTC, hs_sat26DsTD);
            };
            var hs_sat26DsTz = new $hs.Thunk();
            hs_sat26DsTz.evaluateOnce = function () {
                var hs_sat26DsTB = new $hs.Thunk();
                hs_sat26DsTB.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("EPollFd {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DsTB);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsTz, hs_sat26DsTA);
        };
        var hs_sat26DsTw = new $hs.Thunk();
        hs_sat26DsTw.evaluateOnce = function () {
            var hs_sat26DsTy = new $hs.Data(1);
            hs_sat26DsTy.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_a3826DsOB, hs_sat26DsTy);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DsTw, hs_sat26DsTx);
    };
    hs_sat26DsTL.evaluateOnce = function () {
        var hs_sat26DsTK = new $hs.Data(1);
        hs_sat26DsTK.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziEventziEPoll.hs_zdfShowEPollFd, hs_sat26DsTK);
    };
    this.hs_zdfShowEPollFd.data = [hs_zdcshowsPrec225v4ii, hs_zdcshow225v4iC, hs_zdcshowList225v4iB];
    hs_zdcshowList225v4iB.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DsTL);
    };
    hs_zdcshow225v4iC.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.GHCziEventziEPoll.hs_zdfShowEPollFd);
    };
    hs_a2925v4iF.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczeze125v4iG.evaluateOnce = function () {
        if (hs_a2925v4iF.notEvaluated) {
            return hs_a2925v4iF.hscall();
        } else {
            return hs_a2925v4iF;
        }
    };
    hs_a3025v4iH.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczsze125v4iI.evaluateOnce = function () {
        if (hs_a3025v4iH.notEvaluated) {
            return hs_a3025v4iH.hscall();
        } else {
            return hs_a3025v4iH;
        }
    };
    this.hs_zdfEqEPollFd.data = [hs_a2925v4iF, hs_a3025v4iH];
    hs_delete25u2zO.evaluate = function (hs_be26DsP2) {
        var hs_sat26DsTN = new $hs.Func(1);
        hs_sat26DsTN.evaluate = function (hs_ds26DsP5) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DsTM = new $hs.Thunk();
        hs_sat26DsTM.evaluateOnce = function () {
            var hs_sat26DsTO = new $hs.Thunk();
            hs_sat26DsTO.evaluateOnce = function () {
                var hs_sat26DsTP = new $hs.Thunk();
                hs_sat26DsTP.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_a25v4fb, hs_epollFd25u2zH);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DsTP);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsTO, hs_be26DsP2);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsTM, hs_sat26DsTN);
    };
    hs_sat26DsTQ.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    hs_a3125v4iR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsTQ);
    };
    hs_sat26DsTR.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(3);
    };
    hs_a3225v4iT.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsTR);
    };
    hs_sat26DsTS.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    hs_a3325v4iV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsTS);
    };
    hs_sat26DsTT.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    hs_a3425v4iX.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DsTT);
    };
    hs_sat26DsTU.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
    };
    hs_a3525v4iZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DsTU);
    };
    hs_sat26DsTV.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
    };
    hs_a3625v4j1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DsTV);
    };
    hs_sat26DsTW.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
    };
    hs_a3725v4j3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DsTW);
    };
    hs_modifyFd25u2zP.evaluate = function (hs_ep26DsPB, hs_fd26DsPx, hs_oevt26DsPI, hs_nevt26DsPp) {
        var hs_ds26DsPG = new $hs.Thunk();
        hs_ds26DsPG.evaluateOnce = function () {
            var hs_wild26DsUf = hs_ep26DsPB;
            if (hs_ep26DsPB.notEvaluated) {
                hs_wild26DsUf = hs_ep26DsPB.hscall();
            }
            var hs_ds126DsPF = hs_wild26DsUf.data[0];
            if (hs_ds126DsPF.notEvaluated) {
                return hs_ds126DsPF.hscall();
            } else {
                return hs_ds126DsPF;
            }
        };
        var hs_ds126DsPN = new $hs.Thunk();
        hs_ds126DsPN.evaluateOnce = function () {
            var hs_sat26DsUa = new $hs.Thunk();
            hs_sat26DsUa.evaluateOnce = function () {
                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
            };
            var hs_wild26DsUb = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_oevt26DsPI, hs_sat26DsUa);
            switch (hs_wild26DsUb.tag) {
            case 1:
                var hs_sat26DsUc = new $hs.Thunk();
                hs_sat26DsUc.evaluateOnce = function () {
                    return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent);
                };
                var hs_wild126DsUd = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziEventziInternal.hs_zdfEqEvent, hs_nevt26DsPp, hs_sat26DsUc);
                switch (hs_wild126DsUd.tag) {
                case 1:
                    if (hs_a3225v4iT.notEvaluated) {
                        return hs_a3225v4iT.hscall();
                    } else {
                        return hs_a3225v4iT;
                    }
                case 2:
                    if (hs_a3325v4iV.notEvaluated) {
                        return hs_a3325v4iV.hscall();
                    } else {
                        return hs_a3325v4iV;
                    }
                }
            case 2:
                if (hs_a3125v4iR.notEvaluated) {
                    return hs_a3125v4iR.hscall();
                } else {
                    return hs_a3125v4iR;
                }
            }
        };
        var hs_sat26DsTY = new $hs.Func(1);
        hs_sat26DsTY.evaluate = function (hs_event26DsPR) {
            var hs_sat26DsU8 = new $hs.Func(1);
            hs_sat26DsU8.evaluate = function (hs_eta1cW6l3) {
                return hs_czuepollzuctl25u2zK.hscall(hs_ds26DsPG, hs_ds126DsPN, hs_fd26DsPx, hs_event26DsPR, hs_eta1cW6l3);
            };
            var hs_sat26DsU7 = new $hs.Thunk();
            hs_sat26DsU7.evaluateOnce = function () {
                var hs_sat26DsU9 = new $hs.Thunk();
                hs_sat26DsU9.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("epollControl\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsU9);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsU7, hs_sat26DsU8);
        };
        var hs_sat26DsTX = new $hs.Thunk();
        hs_sat26DsTX.evaluateOnce = function () {
            var hs_sat26DsU0 = new $hs.Thunk();
            hs_sat26DsU0.evaluateOnce = function () {
                var hs_sat26DsU2 = new $hs.Thunk();
                hs_sat26DsU2.evaluateOnce = function () {
                    var hs_wild26DsU5 = $hs.modules.GHCziEventziInternal.hs_eventIs.hscall(hs_nevt26DsPp, $hs.modules.GHCziEventziInternal.hs_evtWrite);
                    switch (hs_wild26DsU5.tag) {
                    case 1:
                        var hs_sat26DsU6 = new $hs.Thunk();
                        hs_sat26DsU6.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziEventziEPoll.hs_zdfNumEventType, hs_sat26DsU6);
                    case 2:
                        if (hs_a3525v4iZ.notEvaluated) {
                            return hs_a3525v4iZ.hscall();
                        } else {
                            return hs_a3525v4iZ;
                        }
                    }
                };
                var hs_sat26DsU1 = new $hs.Thunk();
                hs_sat26DsU1.evaluateOnce = function () {
                    var hs_wild26DsU3 = $hs.modules.GHCziEventziInternal.hs_eventIs.hscall(hs_nevt26DsPp, $hs.modules.GHCziEventziInternal.hs_evtRead);
                    switch (hs_wild26DsU3.tag) {
                    case 1:
                        var hs_sat26DsU4 = new $hs.Thunk();
                        hs_sat26DsU4.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziEventziEPoll.hs_zdfNumEventType, hs_sat26DsU4);
                    case 2:
                        if (hs_a3425v4iX.notEvaluated) {
                            return hs_a3425v4iX.hscall();
                        } else {
                            return hs_a3425v4iX;
                        }
                    }
                };
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziEventziEPoll.hs_zdfBitsEventType, hs_sat26DsU1, hs_sat26DsU2);
            };
            var hs_sat26DsTZ = new $hs.Data(1);
            hs_sat26DsTZ.data = [hs_sat26DsU0, hs_fd26DsPx];
            return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent, hs_sat26DsTZ);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsTX, hs_sat26DsTY);
    };
    hs_poll25u2zQ.evaluate = function (hs_ep26DsPY, hs_timeout26DsQL, hs_f26DsR8) {
        var hs_events26DsQ3 = new $hs.Thunk();
        hs_events26DsQ3.evaluateOnce = function () {
            var hs_wild26DsVc = hs_ep26DsPY;
            if (hs_ep26DsPY.notEvaluated) {
                hs_wild26DsVc = hs_ep26DsPY.hscall();
            }
            var hs_ds126DsQ2 = hs_wild26DsVc.data[1];
            if (hs_ds126DsQ2.notEvaluated) {
                return hs_ds126DsQ2.hscall();
            } else {
                return hs_ds126DsQ2;
            }
        };
        var hs_sat26DsUh = new $hs.Func(1);
        hs_sat26DsUh.evaluate = function (hs_n26DsQX) {
            var hs_sat26DsUH = new $hs.Thunk();
            hs_sat26DsUH.evaluateOnce = function () {
                var hs_sat26DsUL = new $hs.Thunk();
                hs_sat26DsUL.evaluateOnce = function () {
                    var hs_sat26DsV5 = new $hs.Func(1);
                    hs_sat26DsV5.evaluate = function (hs_cap26DsRD) {
                        var hs_sat26DsV7 = new $hs.Thunk();
                        hs_sat26DsV7.evaluateOnce = function () {
                            var hs_sat26DsV9 = new $hs.Thunk();
                            hs_sat26DsV9.evaluateOnce = function () {
                                var hs_sat26DsVa = new $hs.Data(1);
                                hs_sat26DsVa.data = [2];
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DsVa, hs_cap26DsRD);
                            };
                            return $hs.modules.GHCziEventziArray.hs_ensureCapacity.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent, hs_events26DsQ3, hs_sat26DsV9);
                        };
                        var hs_sat26DsV6 = new $hs.Thunk();
                        hs_sat26DsV6.evaluateOnce = function () {
                            var hs_sat26DsV8 = new $hs.Thunk();
                            hs_sat26DsV8.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziClasses.hs_zdfEqInt, hs_cap26DsRD, hs_n26DsQX);
                            };
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsV8);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsV6, hs_sat26DsV7);
                    };
                    var hs_sat26DsV4 = new $hs.Thunk();
                    hs_sat26DsV4.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziArray.hs_capacity.hscall(hs_events26DsQ3);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsV4, hs_sat26DsV5);
                };
                var hs_sat26DsUK = new $hs.Thunk();
                hs_sat26DsUK.evaluateOnce = function () {
                    var hs_sat26DsUN = new $hs.Func(1);
                    hs_sat26DsUN.evaluate = function (hs_e26DsR3) {
                        var hs_sat26DsUP = new $hs.Thunk();
                        hs_sat26DsUP.evaluateOnce = function () {
                            var hs_e126DsRf = new $hs.Thunk();
                            hs_e126DsRf.evaluateOnce = function () {
                                var hs_wild26DsV3 = hs_e26DsR3;
                                if (hs_e26DsR3.notEvaluated) {
                                    hs_wild26DsV3 = hs_e26DsR3.hscall();
                                }
                                var hs_ds26DsRe = hs_wild26DsV3.data[0];
                                if (hs_ds26DsRe.notEvaluated) {
                                    return hs_ds26DsRe.hscall();
                                } else {
                                    return hs_ds26DsRe;
                                }
                            };
                            var hs_remap26DsRr = new $hs.Func(3);
                            hs_remap26DsRr.evaluate = function (hs_zddMonoid26DsRp, hs_evt26DsRk, hs_to26DsRq) {
                                var hs_sat26DsUY = new $hs.Thunk();
                                hs_sat26DsUY.evaluateOnce = function () {
                                    var hs_sat26DsV1 = new $hs.Thunk();
                                    hs_sat26DsV1.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziEventziEPoll.hs_zdfNumEventType, hs_sat26DsV1);
                                };
                                var hs_sat26DsUZ = new $hs.Thunk();
                                hs_sat26DsUZ.evaluateOnce = function () {
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziEventziEPoll.hs_zdfBitsEventType, hs_e126DsRf, hs_evt26DsRk);
                                };
                                var hs_wild26DsV0 = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziEventziEPoll.hs_zdfEqEventType, hs_sat26DsUZ, hs_sat26DsUY);
                                switch (hs_wild26DsV0.tag) {
                                case 1:
                                    return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DsRp);
                                case 2:
                                    if (hs_to26DsRq.notEvaluated) {
                                        return hs_to26DsRq.hscall();
                                    } else {
                                        return hs_to26DsRq;
                                    }
                                }
                            };
                            var hs_sat26DsUT = new $hs.Thunk();
                            hs_sat26DsUT.evaluateOnce = function () {
                                var hs_sat26DsUW = new $hs.Thunk();
                                hs_sat26DsUW.evaluateOnce = function () {
                                    var hs_sat26DsUX = new $hs.Thunk();
                                    hs_sat26DsUX.evaluateOnce = function () {
                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziEventziEPoll.hs_zdfBitsEventType, hs_a3525v4iZ, hs_a3625v4j1);
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziEventziEPoll.hs_zdfBitsEventType, hs_sat26DsUX, hs_a3725v4j3);
                                };
                                return hs_remap26DsRr.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent, hs_sat26DsUW, $hs.modules.GHCziEventziInternal.hs_evtWrite);
                            };
                            var hs_sat26DsUS = new $hs.Thunk();
                            hs_sat26DsUS.evaluateOnce = function () {
                                var hs_sat26DsUU = new $hs.Thunk();
                                hs_sat26DsUU.evaluateOnce = function () {
                                    var hs_sat26DsUV = new $hs.Thunk();
                                    hs_sat26DsUV.evaluateOnce = function () {
                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziEventziEPoll.hs_zdfBitsEventType, hs_a3425v4iX, hs_a3625v4j1);
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziEventziEPoll.hs_zdfBitsEventType, hs_sat26DsUV, hs_a3725v4j3);
                                };
                                return hs_remap26DsRr.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent, hs_sat26DsUU, $hs.modules.GHCziEventziInternal.hs_evtRead);
                            };
                            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.GHCziEventziInternal.hs_zdfMonoidEvent, hs_sat26DsUS, hs_sat26DsUT);
                        };
                        var hs_sat26DsUO = new $hs.Thunk();
                        hs_sat26DsUO.evaluateOnce = function () {
                            var hs_wild26DsUR = hs_e26DsR3;
                            if (hs_e26DsR3.notEvaluated) {
                                hs_wild26DsUR = hs_e26DsR3.hscall();
                            }
                            var hs_ds126DsR7 = hs_wild26DsUR.data[1];
                            if (hs_ds126DsR7.notEvaluated) {
                                return hs_ds126DsR7.hscall();
                            } else {
                                return hs_ds126DsR7;
                            }
                        };
                        return hs_f26DsR8.hscall(hs_sat26DsUO, hs_sat26DsUP);
                    };
                    var hs_sat26DsUM = new $hs.Thunk();
                    hs_sat26DsUM.evaluateOnce = function () {
                        return $hs.modules.GHCziEventziArray.hs_forMzu.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent, hs_events26DsQ3);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsUM, hs_sat26DsUN);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsUK, hs_sat26DsUL);
            };
            var hs_sat26DsUG = new $hs.Thunk();
            hs_sat26DsUG.evaluateOnce = function () {
                var hs_sat26DsUI = new $hs.Thunk();
                hs_sat26DsUI.evaluateOnce = function () {
                    var hs_sat26DsUJ = new $hs.Data(1);
                    hs_sat26DsUJ.data = [0];
                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziClasses.hs_zdfOrdInt, hs_n26DsQX, hs_sat26DsUJ);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsUI);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsUG, hs_sat26DsUH);
        };
        var hs_sat26DsUg = new $hs.Thunk();
        hs_sat26DsUg.evaluateOnce = function () {
            var hs_sat26DsUj = new $hs.Func(2);
            hs_sat26DsUj.evaluate = function (hs_es26DsQl, hs_cap26DsQo) {
                var hs_sat26DsUl = new $hs.Thunk();
                hs_sat26DsUl.evaluateOnce = function () {
                    var hs_wild26DsUC = hs_timeout26DsQL;
                    if (hs_timeout26DsQL.notEvaluated) {
                        hs_wild26DsUC = hs_timeout26DsQL.hscall();
                    }
                    switch (hs_wild26DsUC.tag) {
                    case 1:
                        var hs_s26DsQQ = hs_wild26DsUC.data[0];
                        var hs_sat26DsUE = new $hs.Thunk();
                        hs_sat26DsUE.evaluateOnce = function () {
                            var hs_sat26DsUF = new $hs.Data(1);
                            hs_sat26DsUF.data = [1000 % 1];
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DsUF, hs_s26DsQQ);
                        };
                        var hs_sat26DsUD = new $hs.Thunk();
                        hs_sat26DsUD.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziReal.hs_zdfIntegralInt);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsUD, hs_sat26DsUE);
                    case 2:
                        var hs_sat26DsUB = new $hs.Data(1);
                        hs_sat26DsUB.data = [1];
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DsUB);
                    }
                };
                var hs_ds26DsQc = new $hs.Thunk();
                hs_ds26DsQc.evaluateOnce = function () {
                    var hs_wild26DsUA = hs_ep26DsPY;
                    if (hs_ep26DsPY.notEvaluated) {
                        hs_wild26DsUA = hs_ep26DsPY.hscall();
                    }
                    var hs_ds126DsQb = hs_wild26DsUA.data[0];
                    if (hs_ds126DsQb.notEvaluated) {
                        return hs_ds126DsQb.hscall();
                    } else {
                        return hs_ds126DsQb;
                    }
                };
                var hs_sat26DsUk = new $hs.Func(1);
                hs_sat26DsUk.evaluate = function (hs_timeout126DsQr) {
                    var hs_sat26DsUn = new $hs.Thunk();
                    hs_sat26DsUn.evaluateOnce = function () {
                        var hs_ds126DsUu = hs_ds26DsQc;
                        if (hs_ds26DsQc.notEvaluated) {
                            hs_ds126DsUu = hs_ds26DsQc.hscall();
                        }
                        var hs_ds226DsQw = hs_ds126DsUu.data[0];
                        var hs_ds326DsUt = hs_es26DsQl;
                        if (hs_es26DsQl.notEvaluated) {
                            hs_ds326DsUt = hs_es26DsQl.hscall();
                        }
                        var hs_ds426DsQx = hs_ds326DsUt.data[0];
                        var hs_ds526DsUv = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_cap26DsQo);
                        var hs_ds626DsQy = hs_ds526DsUv.data[0];
                        var hs_ds726DsUw = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_timeout126DsQr);
                        var hs_ds826DsQz = hs_ds726DsUw.data[0];
                        var hs_sat26DsUs = new $hs.Func(1);
                        hs_sat26DsUs.evaluate = function (hs_ds926DsQA) {
                            var hs_wild26DsUy = [hs_ds926DsQA, epoll_wait(hs_ds226DsQw, hs_ds426DsQx, hs_ds626DsQy, hs_ds826DsQz)];
                            var hs_ds1026DsQF = hs_wild26DsUy[0];
                            var hs_ds1126DsQG = hs_wild26DsUy[1];
                            var hs_sat26DsUx = new $hs.Data(1);
                            hs_sat26DsUx.data = [hs_ds1126DsQG];
                            return [hs_ds1026DsQF, hs_sat26DsUx];
                        };
                        if (hs_sat26DsUs.notEvaluated) {
                            return hs_sat26DsUs.hscall();
                        } else {
                            return hs_sat26DsUs;
                        }
                    };
                    var hs_sat26DsUm = new $hs.Thunk();
                    hs_sat26DsUm.evaluateOnce = function () {
                        var hs_sat26DsUp = new $hs.Thunk();
                        hs_sat26DsUp.evaluateOnce = function () {
                            var hs_sat26DsUr = new $hs.Thunk();
                            hs_sat26DsUr.evaluateOnce = function () {
                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("epollWait\x00");
                            };
                            return $hs.modules.GHCziEventziInternal.hs_throwErrnoIfMinus1NoRetry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsUr);
                        };
                        var hs_sat26DsUo = new $hs.Thunk();
                        hs_sat26DsUo.evaluateOnce = function () {
                            var hs_sat26DsUq = new $hs.Thunk();
                            hs_sat26DsUq.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt);
                            };
                            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26DsUq);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DsUo, hs_sat26DsUp);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsUm, hs_sat26DsUn);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsUk, hs_sat26DsUl);
            };
            var hs_sat26DsUi = new $hs.Thunk();
            hs_sat26DsUi.evaluateOnce = function () {
                return $hs.modules.GHCziEventziArray.hs_unsafeLoad.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent, hs_events26DsQ3);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsUi, hs_sat26DsUj);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsUg, hs_sat26DsUh);
    };
    hs_sat26DsVh.evaluate = function (hs_epfd26DsSj) {
        var hs_sat26DsVe = new $hs.Func(1);
        hs_sat26DsVe.evaluate = function (hs_evts26DsSk) {
            var hs_sat26DsVg = new $hs.Thunk();
            hs_sat26DsVg.evaluateOnce = function () {
                return $hs.modules.GHCziEventziEPoll.hs_zdWEPoll.hscall(hs_epfd26DsSj, hs_evts26DsSk);
            };
            var hs_be26DsSn = $hs.modules.GHCziEventziInternal.hs_backend.hscall(hs_poll25u2zQ, hs_modifyFd25u2zP, hs_delete25u2zO, hs_sat26DsVg);
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_be26DsSn);
        };
        var hs_sat26DsVd = new $hs.Thunk();
        hs_sat26DsVd.evaluateOnce = function () {
            var hs_sat26DsVf = new $hs.Data(1);
            hs_sat26DsVf.data = [64];
            return $hs.modules.GHCziEventziArray.hs_new.hscall($hs.modules.GHCziEventziEPoll.hs_zdfStorableEvent, hs_sat26DsVf);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsVd, hs_sat26DsVe);
    };
    hs_sat26DsVv.evaluateOnce = function () {
        var hs_sat26DsVj = new $hs.Func(1);
        hs_sat26DsVj.evaluate = function (hs_fd26DsS7) {
            var hs_sat26DsVt = new $hs.Thunk();
            hs_sat26DsVt.evaluateOnce = function () {
                var hs_nt26DsSb = hs_fd26DsS7;
                if (hs_fd26DsS7.notEvaluated) {
                    hs_nt26DsSb = hs_fd26DsS7.hscall();
                }
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_nt26DsSb);
            };
            var hs_sat26DsVs = new $hs.Thunk();
            hs_sat26DsVs.evaluateOnce = function () {
                return $hs.modules.SystemziPosixziInternals.hs_setCloseOnExec.hscall(hs_fd26DsS7);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsVs, hs_sat26DsVt);
        };
        var hs_sat26DsVi = new $hs.Thunk();
        hs_sat26DsVi.evaluateOnce = function () {
            var hs_sat26DsVl = new $hs.Thunk();
            hs_sat26DsVl.evaluateOnce = function () {
                var hs_sat26DsVo = new $hs.Thunk();
                hs_sat26DsVo.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(256);
                };
                var hs_ds26DsVp = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsVo);
                var hs_ds126DsRU = hs_ds26DsVp.data[0];
                var hs_sat26DsVn = new $hs.Func(1);
                hs_sat26DsVn.evaluate = function (hs_ds226DsRV) {
                    var hs_wild26DsVr = [hs_ds226DsRV, epoll_create(hs_ds126DsRU)];
                    var hs_ds326DsS0 = hs_wild26DsVr[0];
                    var hs_ds426DsS1 = hs_wild26DsVr[1];
                    var hs_sat26DsVq = new $hs.Data(1);
                    hs_sat26DsVq.data = [hs_ds426DsS1];
                    return [hs_ds326DsS0, hs_sat26DsVq];
                };
                if (hs_sat26DsVn.notEvaluated) {
                    return hs_sat26DsVn.hscall();
                } else {
                    return hs_sat26DsVn;
                }
            };
            var hs_sat26DsVk = new $hs.Thunk();
            hs_sat26DsVk.evaluateOnce = function () {
                var hs_sat26DsVm = new $hs.Thunk();
                hs_sat26DsVm.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("epollCreate\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DsVm);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DsVk, hs_sat26DsVl);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsVi, hs_sat26DsVj);
    };
    this.hs_new.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DsVv, hs_sat26DsVh);
    };
    this.hs_EventType.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziEPoll.hs_EventType.hscall(hs_eta1cW6l3);
    };
    this.hs_ControlOp.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziEPoll.hs_ControlOp.hscall(hs_eta1cW6l3);
    };
    this.hs_Event.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_EPollFd.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.GHCziEventziEPoll.hs_EPollFd.hscall(hs_eta1cW6l3);
    };
    this.hs_EPoll.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
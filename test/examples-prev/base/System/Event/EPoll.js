
$hs.modules.SystemziEventziEPoll = new $hs.Module();
$hs.modules.SystemziEventziEPoll.dependencies = ["GHC.Types", "GHC.Unit", "GHC.Integer", "Control.Monad", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Float", "GHC.Show", "GHC.Err", "GHC.Classes", "GHC.Word", "Data.Bits", "Data.Monoid", "Foreign.C.Error", "Foreign.C.Types", "Foreign.Marshal.Utils", "Foreign.Storable", "System.Posix.Internals", "System.Posix.Types", "System.Event.Array", "System.Event.Internal"];
$hs.modules.SystemziEventziEPoll.initBeforeDependencies = function () {
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
    this.hs_zdWEPoll.evaluate = function (hs_tpl26DRP7, hs_tpl26DRPa) {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this.evaluate(hs_tpl26DRP7, hs_tpl26DRPa);
    };
    this.hs_available.notEvaluated = true;
    this.hs_available.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfStorableEvent.notEvaluated = true;
    this.hs_zdfStorableEvent.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfEqEventType.notEvaluated = true;
    this.hs_zdfEqEventType.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfShowEventType.notEvaluated = true;
    this.hs_zdfShowEventType.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfNumEventType.notEvaluated = true;
    this.hs_zdfNumEventType.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfBitsEventType.notEvaluated = true;
    this.hs_zdfBitsEventType.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfShowEvent.notEvaluated = true;
    this.hs_zdfShowEvent.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfShowEPollFd.notEvaluated = true;
    this.hs_zdfShowEPollFd.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_zdfEqEPollFd.notEvaluated = true;
    this.hs_zdfEqEPollFd.evaluate = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this;
    };
    this.hs_new.evaluateOnce = function () {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_EventType.notEvaluated = true;
    this.hs_EventType.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_ControlOp.notEvaluated = true;
    this.hs_ControlOp.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_Event.notEvaluated = true;
    this.hs_Event.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_EPollFd.notEvaluated = true;
    this.hs_EPollFd.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_EPoll.notEvaluated = true;
    this.hs_EPoll.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziEventziEPoll.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
};
$hs.modules.SystemziEventziEPoll.initAfterDependencies = function () {
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
    var hs_epollFd25uotQ = new $hs.Func(1);
    var hs_a25vtj5 = new $hs.Func(1);
    var hs_a125vtj9 = new $hs.Func(1);
    var hs_a225vtjd = new $hs.Func(5);
    var hs_czuepollzuctl25uotz = new $hs.Func(5);
    var hs_zdcpoke25vtjJ = new $hs.Func(2);
    var hs_zdcpeek25vtk4 = new $hs.Func(1);
    var hs_zdcalignment25vtkj = new $hs.Func(1);
    var hs_zdcsizzeOf25vtkn = new $hs.Func(1);
    var hs_zdcpokeByteOff25vtkr = new $hs.Thunk();
    var hs_zdcpeekByteOff25vtkt = new $hs.Thunk();
    var hs_zdcpokeElemOff25vtkv = new $hs.Thunk();
    var hs_zdcpeekElemOff25vtkx = new $hs.Thunk();
    var hs_a325vtkz = new $hs.Thunk();
    var hs_zdczizazi25vtkB = new $hs.Thunk();
    var hs_a425vtkD = new $hs.Thunk();
    var hs_zdczizbzi25vtkF = new $hs.Thunk();
    var hs_a525vtkH = new $hs.Thunk();
    var hs_zdcxor25vtkJ = new $hs.Thunk();
    var hs_a625vtkL = new $hs.Thunk();
    var hs_zdccomplement25vtkN = new $hs.Thunk();
    var hs_a725vtkP = new $hs.Thunk();
    var hs_zdcshift25vtkR = new $hs.Thunk();
    var hs_a825vtkT = new $hs.Thunk();
    var hs_zdcrotate25vtkV = new $hs.Thunk();
    var hs_a925vtkX = new $hs.Thunk();
    var hs_zdcbit25vtkZ = new $hs.Thunk();
    var hs_a1025vtl1 = new $hs.Thunk();
    var hs_zdcsetBit25vtl3 = new $hs.Thunk();
    var hs_a1125vtl5 = new $hs.Thunk();
    var hs_zdcclearBit25vtl7 = new $hs.Thunk();
    var hs_a1225vtl9 = new $hs.Thunk();
    var hs_zdccomplementBit25vtlb = new $hs.Thunk();
    var hs_a1325vtld = new $hs.Thunk();
    var hs_zdctestBit25vtlf = new $hs.Thunk();
    var hs_a1425vtlh = new $hs.Thunk();
    var hs_zdcbitSizze25vtlj = new $hs.Thunk();
    var hs_a1525vtll = new $hs.Thunk();
    var hs_zdcisSigned25vtln = new $hs.Thunk();
    var hs_a1625vtlp = new $hs.Thunk();
    var hs_zdcshiftL25vtlr = new $hs.Thunk();
    var hs_a1725vtlt = new $hs.Thunk();
    var hs_zdcshiftR25vtlv = new $hs.Thunk();
    var hs_a1825vtlx = new $hs.Thunk();
    var hs_zdcrotateL25vtlz = new $hs.Thunk();
    var hs_a1925vtlB = new $hs.Thunk();
    var hs_zdcrotateR25vtlD = new $hs.Thunk();
    var hs_a2025vtlF = new $hs.Thunk();
    var hs_zdczp25vtlH = new $hs.Thunk();
    var hs_a2125vtlJ = new $hs.Thunk();
    var hs_zdczt25vtlL = new $hs.Thunk();
    var hs_a2225vtlN = new $hs.Thunk();
    var hs_zdczm25vtlP = new $hs.Thunk();
    var hs_a2325vtlR = new $hs.Thunk();
    var hs_zdcnegate25vtlT = new $hs.Thunk();
    var hs_a2425vtlV = new $hs.Thunk();
    var hs_zdcabs25vtlX = new $hs.Thunk();
    var hs_a2525vtlZ = new $hs.Thunk();
    var hs_zdcsignum25vtm1 = new $hs.Thunk();
    var hs_a2625vtm3 = new $hs.Thunk();
    var hs_zdcfromInteger25vtm5 = new $hs.Thunk();
    var hs_a2725vtm7 = new $hs.Thunk();
    var hs_zdczeze25vtm9 = new $hs.Thunk();
    var hs_a2825vtmb = new $hs.Thunk();
    var hs_zdczsze25vtmd = new $hs.Thunk();
    var hs_zdcshowsPrec25vtmf = new $hs.Func(2);
    var hs_sat26DRYq = new $hs.Thunk();
    var hs_zdcshowList25vtmz = new $hs.Thunk();
    var hs_zdcshow25vtmB = new $hs.Thunk();
    var hs_zdcshowsPrec125vtmF = new $hs.Func(2);
    var hs_sat26DRYQ = new $hs.Thunk();
    var hs_zdcshowList125vtnd = new $hs.Thunk();
    var hs_zdcshow125vtnf = new $hs.Thunk();
    var hs_zdcshowsPrec225vtnj = new $hs.Func(2);
    var hs_sat26DRZ6 = new $hs.Thunk();
    var hs_zdcshowList225vtnD = new $hs.Thunk();
    var hs_zdcshow225vtnF = new $hs.Thunk();
    var hs_a2925vtnJ = new $hs.Thunk();
    var hs_zdczeze125vtnL = new $hs.Thunk();
    var hs_a3025vtnN = new $hs.Thunk();
    var hs_zdczsze125vtnP = new $hs.Thunk();
    var hs_delete25uotX = new $hs.Func(1);
    var hs_sat26DRZd = new $hs.Thunk();
    var hs_a3125vtnY = new $hs.Thunk();
    var hs_sat26DRZe = new $hs.Thunk();
    var hs_a3225vto1 = new $hs.Thunk();
    var hs_sat26DRZf = new $hs.Thunk();
    var hs_a3325vto4 = new $hs.Thunk();
    var hs_sat26DRZg = new $hs.Thunk();
    var hs_a3425vto7 = new $hs.Thunk();
    var hs_sat26DRZh = new $hs.Thunk();
    var hs_a3525vtoa = new $hs.Thunk();
    var hs_sat26DRZi = new $hs.Thunk();
    var hs_a3625vtod = new $hs.Thunk();
    var hs_sat26DRZj = new $hs.Thunk();
    var hs_a3725vtog = new $hs.Thunk();
    var hs_modifyFd25uotZ = new $hs.Func(4);
    var hs_poll25uou1 = new $hs.Func(3);
    var hs_sat26DS0K = new $hs.Func(1);
    var hs_sat26DS0W = new $hs.Thunk();
    this.hs_zdWEPoll.evaluate = function (hs_tpl26DRP7, hs_tpl26DRPa) {
        var hs_tpl26DRXL = hs_tpl26DRP7;
        if (hs_tpl26DRP7.notEvaluated) {
            hs_tpl26DRXL = hs_tpl26DRP7.hscall();
        }
        var hs_tpl26DRPc = hs_tpl26DRXL.data[0];
        var hs_tpl26DRPd = hs_tpl26DRPa;
        if (hs_tpl26DRPa.notEvaluated) {
            hs_tpl26DRPd = hs_tpl26DRPa.hscall();
        }
        var $res = new $hs.Data(1);
        $res.data = [hs_tpl26DRPc, hs_tpl26DRPd];
        return $res;
    };
    this.hs_available.data = [];
    hs_epollFd25uotQ.evaluate = function (hs_ds26DRPf) {
        var hs_wild26DRXM = hs_ds26DRPf;
        if (hs_ds26DRPf.notEvaluated) {
            hs_wild26DRXM = hs_ds26DRPf.hscall();
        }
        var hs_rb26DRPj = hs_wild26DRXM.data[0];
        var $res = new $hs.Data(1);
        $res.data = [hs_rb26DRPj];
        return $res;
    };
    hs_a25vtj5.evaluate = function (hs_ds26DRPn) {
        if (hs_ds26DRPn.notEvaluated) {
            return hs_ds26DRPn.hscall();
        } else {
            return hs_ds26DRPn;
        }
    };
    hs_a125vtj9.evaluate = function (hs_ds26DRPr) {
        if (hs_ds26DRPr.notEvaluated) {
            return hs_ds26DRPr.hscall();
        } else {
            return hs_ds26DRPr;
        }
    };
    hs_a225vtjd.evaluate = function (hs_ds26DRPz, hs_ds126DRPC, hs_ds226DRPF, hs_ds326DRPI, hs_eta26DRPQ) {
        var hs_ds426DRXS = hs_ds26DRPz;
        if (hs_ds26DRPz.notEvaluated) {
            hs_ds426DRXS = hs_ds26DRPz.hscall();
        }
        var hs_ds526DRPM = hs_ds426DRXS.data[0];
        var hs_ds626DRXR = hs_ds126DRPC;
        if (hs_ds126DRPC.notEvaluated) {
            hs_ds626DRXR = hs_ds126DRPC.hscall();
        }
        var hs_ds726DRPN = hs_ds626DRXR.data[0];
        var hs_ds826DRXQ = hs_ds226DRPF;
        if (hs_ds226DRPF.notEvaluated) {
            hs_ds826DRXQ = hs_ds226DRPF.hscall();
        }
        var hs_ds926DRPO = hs_ds826DRXQ.data[0];
        var hs_ds1026DRXP = hs_ds326DRPI;
        if (hs_ds326DRPI.notEvaluated) {
            hs_ds1026DRXP = hs_ds326DRPI.hscall();
        }
        var hs_ds1126DRPP = hs_ds1026DRXP.data[0];
        var hs_wild26DRXO = [hs_eta26DRPQ, epoll_ctl(hs_ds526DRPM, hs_ds726DRPN, hs_ds926DRPO, hs_ds1126DRPP)];
        var hs_ds1226DRPV = hs_wild26DRXO[0];
        var hs_ds1326DRPW = hs_wild26DRXO[1];
        var hs_sat26DRXT = new $hs.Data(1);
        hs_sat26DRXT.data = [hs_ds1326DRPW];
        return [hs_ds1226DRPV, hs_sat26DRXT];
    };
    hs_czuepollzuctl25uotz.evaluate = function (hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225vtjd.hscall(hs_eta1cW6l7, hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_zdcpoke25vtjJ.evaluate = function (hs_ptr26DRQ2, hs_e26DRQ4) {
        var hs_sat26DRXZ = new $hs.Thunk();
        hs_sat26DRXZ.evaluateOnce = function () {
            var hs_sat26DRXW = new $hs.Thunk();
            hs_sat26DRXW.evaluateOnce = function () {
                var hs_wild26DRXV = hs_e26DRQ4;
                if (hs_e26DRQ4.notEvaluated) {
                    hs_wild26DRXV = hs_e26DRQ4.hscall();
                }
                var hs_ds126DRQg = hs_wild26DRXV.data[1];
                if (hs_ds126DRQg.notEvaluated) {
                    return hs_ds126DRQg.hscall();
                } else {
                    return hs_ds126DRQg;
                }
            };
            var hs_sat26DRXX = new $hs.Data(1);
            hs_sat26DRXX.data = [4];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.SystemziPosixziTypes.hs_zdfStorableFd, hs_ptr26DRQ2, hs_sat26DRXX, hs_sat26DRXW);
        };
        var hs_sat26DRY4 = new $hs.Thunk();
        hs_sat26DRY4.evaluateOnce = function () {
            var hs_sat26DRY2 = new $hs.Thunk();
            hs_sat26DRY2.evaluateOnce = function () {
                var hs_sat26DRY1 = new $hs.Thunk();
                hs_sat26DRY1.evaluateOnce = function () {
                    var hs_wild26DRXY = hs_e26DRQ4;
                    if (hs_e26DRQ4.notEvaluated) {
                        hs_wild26DRXY = hs_e26DRQ4.hscall();
                    }
                    var hs_ds26DRQ8 = hs_wild26DRXY.data[0];
                    if (hs_ds26DRQ8.notEvaluated) {
                        return hs_ds26DRQ8.hscall();
                    } else {
                        return hs_ds26DRQ8;
                    }
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_a125vtj9, hs_sat26DRY1);
            };
            var hs_sat26DRY3 = new $hs.Data(1);
            hs_sat26DRY3.data = [0];
            return $hs.modules.ForeignziStorable.hs_pokeByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26DRQ2, hs_sat26DRY3, hs_sat26DRY2);
        };
        return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRY4, hs_sat26DRXZ);
    };
    hs_zdcpeek25vtk4.evaluate = function (hs_ptr26DRQm) {
        var hs_sat26DRY9 = new $hs.Func(1);
        hs_sat26DRY9.evaluate = function (hs_ets26DRQt) {
            var hs_sat26DRY6 = new $hs.Func(1);
            hs_sat26DRY6.evaluate = function (hs_ed26DRQu) {
                var hs_sat26DRY5 = new $hs.Data(1);
                hs_sat26DRY5.data = [hs_ets26DRQt, hs_ed26DRQu];
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRY5);
            };
            var hs_sat26DRY8 = new $hs.Thunk();
            hs_sat26DRY8.evaluateOnce = function () {
                var hs_sat26DRY7 = new $hs.Data(1);
                hs_sat26DRY7.data = [4];
                return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.SystemziPosixziTypes.hs_zdfStorableFd, hs_ptr26DRQm, hs_sat26DRY7);
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRY8, hs_sat26DRY6);
        };
        var hs_sat26DRYb = new $hs.Thunk();
        hs_sat26DRYb.evaluateOnce = function () {
            var hs_sat26DRYa = new $hs.Data(1);
            hs_sat26DRYa.data = [0];
            return $hs.modules.ForeignziStorable.hs_peekByteOff.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord32, hs_ptr26DRQm, hs_sat26DRYa);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRYb, hs_sat26DRY9);
    };
    hs_zdcalignment25vtkj.evaluate = function (hs_ds26DRQB) {
        return $hs.modules.ForeignziStorable.hs_alignment.hscall($hs.modules.ForeignziCziTypes.hs_zdfStorableCInt, $hs.modules.GHCziErr.hs_undefined);
    };
    hs_zdcsizzeOf25vtkn.evaluate = function (hs_ds26DRQF) {
        var $res = new $hs.Data(1);
        $res.data = [12];
        return $res;
    };
    this.hs_zdfStorableEvent.data = [hs_zdcsizzeOf25vtkn, hs_zdcalignment25vtkj, hs_zdcpeekElemOff25vtkx, hs_zdcpokeElemOff25vtkv, hs_zdcpeekByteOff25vtkt, hs_zdcpokeByteOff25vtkr, hs_zdcpeek25vtk4, hs_zdcpoke25vtjJ];
    hs_zdcpokeByteOff25vtkr.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeByteOff.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_zdcpeekByteOff25vtkt.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekByteOff.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_zdcpokeElemOff25vtkv.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpokeElemOff.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_zdcpeekElemOff25vtkx.evaluateOnce = function () {
        return $hs.modules.ForeignziStorable.hs_zddmpeekElemOff.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent);
    };
    hs_a325vtkz.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizazi25vtkB.evaluateOnce = function () {
        if (hs_a325vtkz.notEvaluated) {
            return hs_a325vtkz.hscall();
        } else {
            return hs_a325vtkz;
        }
    };
    hs_a425vtkD.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdczizbzi25vtkF.evaluateOnce = function () {
        if (hs_a425vtkD.notEvaluated) {
            return hs_a425vtkD.hscall();
        } else {
            return hs_a425vtkD;
        }
    };
    hs_a525vtkH.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_xor.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcxor25vtkJ.evaluateOnce = function () {
        if (hs_a525vtkH.notEvaluated) {
            return hs_a525vtkH.hscall();
        } else {
            return hs_a525vtkH;
        }
    };
    hs_a625vtkL.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplement25vtkN.evaluateOnce = function () {
        if (hs_a625vtkL.notEvaluated) {
            return hs_a625vtkL.hscall();
        } else {
            return hs_a625vtkL;
        }
    };
    hs_a725vtkP.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shift.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshift25vtkR.evaluateOnce = function () {
        if (hs_a725vtkP.notEvaluated) {
            return hs_a725vtkP.hscall();
        } else {
            return hs_a725vtkP;
        }
    };
    hs_a825vtkT.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotate.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotate25vtkV.evaluateOnce = function () {
        if (hs_a825vtkT.notEvaluated) {
            return hs_a825vtkT.hscall();
        } else {
            return hs_a825vtkT;
        }
    };
    hs_a925vtkX.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbit25vtkZ.evaluateOnce = function () {
        if (hs_a925vtkX.notEvaluated) {
            return hs_a925vtkX.hscall();
        } else {
            return hs_a925vtkX;
        }
    };
    hs_a1025vtl1.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_setBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcsetBit25vtl3.evaluateOnce = function () {
        if (hs_a1025vtl1.notEvaluated) {
            return hs_a1025vtl1.hscall();
        } else {
            return hs_a1025vtl1;
        }
    };
    hs_a1125vtl5.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_clearBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcclearBit25vtl7.evaluateOnce = function () {
        if (hs_a1125vtl5.notEvaluated) {
            return hs_a1125vtl5.hscall();
        } else {
            return hs_a1125vtl5;
        }
    };
    hs_a1225vtl9.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_complementBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdccomplementBit25vtlb.evaluateOnce = function () {
        if (hs_a1225vtl9.notEvaluated) {
            return hs_a1225vtl9.hscall();
        } else {
            return hs_a1225vtl9;
        }
    };
    hs_a1325vtld.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_testBit.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdctestBit25vtlf.evaluateOnce = function () {
        if (hs_a1325vtld.notEvaluated) {
            return hs_a1325vtld.hscall();
        } else {
            return hs_a1325vtld;
        }
    };
    hs_a1425vtlh.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_bitSizze.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcbitSizze25vtlj.evaluateOnce = function () {
        if (hs_a1425vtlh.notEvaluated) {
            return hs_a1425vtlh.hscall();
        } else {
            return hs_a1425vtlh;
        }
    };
    hs_a1525vtll.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_isSigned.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcisSigned25vtln.evaluateOnce = function () {
        if (hs_a1525vtll.notEvaluated) {
            return hs_a1525vtll.hscall();
        } else {
            return hs_a1525vtll;
        }
    };
    hs_a1625vtlp.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftL25vtlr.evaluateOnce = function () {
        if (hs_a1625vtlp.notEvaluated) {
            return hs_a1625vtlp.hscall();
        } else {
            return hs_a1625vtlp;
        }
    };
    hs_a1725vtlt.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_shiftR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcshiftR25vtlv.evaluateOnce = function () {
        if (hs_a1725vtlt.notEvaluated) {
            return hs_a1725vtlt.hscall();
        } else {
            return hs_a1725vtlt;
        }
    };
    hs_a1825vtlx.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateL.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateL25vtlz.evaluateOnce = function () {
        if (hs_a1825vtlx.notEvaluated) {
            return hs_a1825vtlx.hscall();
        } else {
            return hs_a1825vtlx;
        }
    };
    hs_a1925vtlB.evaluateOnce = function () {
        return $hs.modules.DataziBits.hs_rotateR.hscall($hs.modules.GHCziWord.hs_zdfBitsWord32);
    };
    hs_zdcrotateR25vtlD.evaluateOnce = function () {
        if (hs_a1925vtlB.notEvaluated) {
            return hs_a1925vtlB.hscall();
        } else {
            return hs_a1925vtlB;
        }
    };
    hs_a2025vtlF.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zp.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczp25vtlH.evaluateOnce = function () {
        if (hs_a2025vtlF.notEvaluated) {
            return hs_a2025vtlF.hscall();
        } else {
            return hs_a2025vtlF;
        }
    };
    hs_a2125vtlJ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczt25vtlL.evaluateOnce = function () {
        if (hs_a2125vtlJ.notEvaluated) {
            return hs_a2125vtlJ.hscall();
        } else {
            return hs_a2125vtlJ;
        }
    };
    hs_a2225vtlN.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_zm.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdczm25vtlP.evaluateOnce = function () {
        if (hs_a2225vtlN.notEvaluated) {
            return hs_a2225vtlN.hscall();
        } else {
            return hs_a2225vtlN;
        }
    };
    hs_a2325vtlR.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcnegate25vtlT.evaluateOnce = function () {
        if (hs_a2325vtlR.notEvaluated) {
            return hs_a2325vtlR.hscall();
        } else {
            return hs_a2325vtlR;
        }
    };
    hs_a2425vtlV.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_abs.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcabs25vtlX.evaluateOnce = function () {
        if (hs_a2425vtlV.notEvaluated) {
            return hs_a2425vtlV.hscall();
        } else {
            return hs_a2425vtlV;
        }
    };
    hs_a2525vtlZ.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_signum.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcsignum25vtm1.evaluateOnce = function () {
        if (hs_a2525vtlZ.notEvaluated) {
            return hs_a2525vtlZ.hscall();
        } else {
            return hs_a2525vtlZ;
        }
    };
    hs_a2625vtm3.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32);
    };
    hs_zdcfromInteger25vtm5.evaluateOnce = function () {
        if (hs_a2625vtm3.notEvaluated) {
            return hs_a2625vtm3.hscall();
        } else {
            return hs_a2625vtm3;
        }
    };
    hs_a2725vtm7.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczeze25vtm9.evaluateOnce = function () {
        if (hs_a2725vtm7.notEvaluated) {
            return hs_a2725vtm7.hscall();
        } else {
            return hs_a2725vtm7;
        }
    };
    hs_a2825vtmb.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.GHCziWord.hs_zdfEqWord32);
    };
    hs_zdczsze25vtmd.evaluateOnce = function () {
        if (hs_a2825vtmb.notEvaluated) {
            return hs_a2825vtmb.hscall();
        } else {
            return hs_a2825vtmb;
        }
    };
    this.hs_zdfEqEventType.data = [hs_a2725vtm7, hs_a2825vtmb];
    hs_zdcshowsPrec25vtmf.evaluate = function (hs_a3826DRSy, hs_ds26DRSG) {
        var hs_sat26DRYn = new $hs.Thunk();
        hs_sat26DRYn.evaluateOnce = function () {
            var hs_sat26DRYk = new $hs.Thunk();
            hs_sat26DRYk.evaluateOnce = function () {
                var hs_sat26DRYh = new $hs.Thunk();
                hs_sat26DRYh.evaluateOnce = function () {
                    var hs_sat26DRYe = new $hs.Thunk();
                    hs_sat26DRYe.evaluateOnce = function () {
                        var hs_sat26DRYc = new $hs.Data(1);
                        hs_sat26DRYc.data = ["}"];
                        var hs_sat26DRYd = new $hs.Data(2);
                        hs_sat26DRYd.data = [hs_sat26DRYc, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYd);
                    };
                    var hs_sat26DRYg = new $hs.Thunk();
                    hs_sat26DRYg.evaluateOnce = function () {
                        var hs_sat26DRYf = new $hs.Data(1);
                        hs_sat26DRYf.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.GHCziWord.hs_zdfShowWord32, hs_sat26DRYf, hs_ds26DRSG);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYg, hs_sat26DRYe);
                };
                var hs_sat26DRYj = new $hs.Thunk();
                hs_sat26DRYj.evaluateOnce = function () {
                    var hs_sat26DRYi = new $hs.Thunk();
                    hs_sat26DRYi.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("unEventType = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYi);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYj, hs_sat26DRYh);
            };
            var hs_sat26DRYm = new $hs.Thunk();
            hs_sat26DRYm.evaluateOnce = function () {
                var hs_sat26DRYl = new $hs.Thunk();
                hs_sat26DRYl.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EventType {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYl);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYm, hs_sat26DRYk);
        };
        var hs_sat26DRYp = new $hs.Thunk();
        hs_sat26DRYp.evaluateOnce = function () {
            var hs_sat26DRYo = new $hs.Data(1);
            hs_sat26DRYo.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a3826DRSy, hs_sat26DRYo);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DRYp, hs_sat26DRYn);
    };
    hs_sat26DRYq.evaluateOnce = function () {
        var hs_sat26DRYr = new $hs.Data(1);
        hs_sat26DRYr.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziEPoll.hs_zdfShowEventType, hs_sat26DRYr);
    };
    this.hs_zdfShowEventType.data = [hs_zdcshowsPrec25vtmf, hs_zdcshow25vtmB, hs_zdcshowList25vtmz];
    hs_zdcshowList25vtmz.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DRYq);
    };
    hs_zdcshow25vtmB.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziEPoll.hs_zdfShowEventType);
    };
    this.hs_zdfNumEventType.data = [$hs.modules.SystemziEventziEPoll.hs_zdfEqEventType, $hs.modules.SystemziEventziEPoll.hs_zdfShowEventType, hs_a2025vtlF, hs_a2125vtlJ, hs_a2225vtlN, hs_a2325vtlR, hs_a2425vtlV, hs_a2525vtlZ, hs_a2625vtm3];
    this.hs_zdfBitsEventType.data = [$hs.modules.SystemziEventziEPoll.hs_zdfNumEventType, hs_a325vtkz, hs_a425vtkD, hs_a525vtkH, hs_a625vtkL, hs_a725vtkP, hs_a825vtkT, hs_a925vtkX, hs_a1025vtl1, hs_a1125vtl5, hs_a1225vtl9, hs_a1325vtld, hs_a1425vtlh, hs_a1525vtll, hs_a1625vtlp, hs_a1725vtlt, hs_a1825vtlx, hs_a1925vtlB];
    hs_zdcshowsPrec125vtmF.evaluate = function (hs_a3826DRT2, hs_ds26DRSY) {
        var hs_wild26DRYs = hs_ds26DRSY;
        if (hs_ds26DRSY.notEvaluated) {
            hs_wild26DRYs = hs_ds26DRSY.hscall();
        }
        var hs_b126DRTa = hs_wild26DRYs.data[0];
        var hs_b226DRTh = hs_wild26DRYs.data[1];
        var hs_sat26DRYN = new $hs.Thunk();
        hs_sat26DRYN.evaluateOnce = function () {
            var hs_sat26DRYK = new $hs.Thunk();
            hs_sat26DRYK.evaluateOnce = function () {
                var hs_sat26DRYH = new $hs.Thunk();
                hs_sat26DRYH.evaluateOnce = function () {
                    var hs_sat26DRYE = new $hs.Thunk();
                    hs_sat26DRYE.evaluateOnce = function () {
                        var hs_sat26DRYB = new $hs.Thunk();
                        hs_sat26DRYB.evaluateOnce = function () {
                            var hs_sat26DRYy = new $hs.Thunk();
                            hs_sat26DRYy.evaluateOnce = function () {
                                var hs_sat26DRYv = new $hs.Thunk();
                                hs_sat26DRYv.evaluateOnce = function () {
                                    var hs_sat26DRYt = new $hs.Data(1);
                                    hs_sat26DRYt.data = ["}"];
                                    var hs_sat26DRYu = new $hs.Data(2);
                                    hs_sat26DRYu.data = [hs_sat26DRYt, $hs.modules.GHCziTypes.hs_ZMZN];
                                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYu);
                                };
                                var hs_sat26DRYx = new $hs.Thunk();
                                hs_sat26DRYx.evaluateOnce = function () {
                                    var hs_sat26DRYw = new $hs.Data(1);
                                    hs_sat26DRYw.data = [0];
                                    return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziPosixziTypes.hs_zdfShowFd, hs_sat26DRYw, hs_b226DRTh);
                                };
                                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYx, hs_sat26DRYv);
                            };
                            var hs_sat26DRYA = new $hs.Thunk();
                            hs_sat26DRYA.evaluateOnce = function () {
                                var hs_sat26DRYz = new $hs.Thunk();
                                hs_sat26DRYz.evaluateOnce = function () {
                                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("eventFd = \x00");
                                };
                                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYz);
                            };
                            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYA, hs_sat26DRYy);
                        };
                        var hs_sat26DRYD = new $hs.Thunk();
                        hs_sat26DRYD.evaluateOnce = function () {
                            var hs_sat26DRYC = new $hs.Thunk();
                            hs_sat26DRYC.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall(", \x00");
                            };
                            return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYC);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYD, hs_sat26DRYB);
                    };
                    var hs_sat26DRYG = new $hs.Thunk();
                    hs_sat26DRYG.evaluateOnce = function () {
                        var hs_sat26DRYF = new $hs.Data(1);
                        hs_sat26DRYF.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziEPoll.hs_zdfShowEventType, hs_sat26DRYF, hs_b126DRTa);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYG, hs_sat26DRYE);
                };
                var hs_sat26DRYJ = new $hs.Thunk();
                hs_sat26DRYJ.evaluateOnce = function () {
                    var hs_sat26DRYI = new $hs.Thunk();
                    hs_sat26DRYI.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("eventTypes = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYI);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYJ, hs_sat26DRYH);
            };
            var hs_sat26DRYM = new $hs.Thunk();
            hs_sat26DRYM.evaluateOnce = function () {
                var hs_sat26DRYL = new $hs.Thunk();
                hs_sat26DRYL.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("Event {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYL);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYM, hs_sat26DRYK);
        };
        var hs_sat26DRYP = new $hs.Thunk();
        hs_sat26DRYP.evaluateOnce = function () {
            var hs_sat26DRYO = new $hs.Data(1);
            hs_sat26DRYO.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a3826DRT2, hs_sat26DRYO);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DRYP, hs_sat26DRYN);
    };
    hs_sat26DRYQ.evaluateOnce = function () {
        var hs_sat26DRYR = new $hs.Data(1);
        hs_sat26DRYR.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziEPoll.hs_zdfShowEvent, hs_sat26DRYR);
    };
    this.hs_zdfShowEvent.data = [hs_zdcshowsPrec125vtmF, hs_zdcshow125vtnf, hs_zdcshowList125vtnd];
    hs_zdcshowList125vtnd.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DRYQ);
    };
    hs_zdcshow125vtnf.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziEPoll.hs_zdfShowEvent);
    };
    hs_zdcshowsPrec225vtnj.evaluate = function (hs_a3826DRTC, hs_ds26DRTK) {
        var hs_sat26DRZ3 = new $hs.Thunk();
        hs_sat26DRZ3.evaluateOnce = function () {
            var hs_sat26DRZ0 = new $hs.Thunk();
            hs_sat26DRZ0.evaluateOnce = function () {
                var hs_sat26DRYX = new $hs.Thunk();
                hs_sat26DRYX.evaluateOnce = function () {
                    var hs_sat26DRYU = new $hs.Thunk();
                    hs_sat26DRYU.evaluateOnce = function () {
                        var hs_sat26DRYS = new $hs.Data(1);
                        hs_sat26DRYS.data = ["}"];
                        var hs_sat26DRYT = new $hs.Data(2);
                        hs_sat26DRYT.data = [hs_sat26DRYS, $hs.modules.GHCziTypes.hs_ZMZN];
                        return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYT);
                    };
                    var hs_sat26DRYW = new $hs.Thunk();
                    hs_sat26DRYW.evaluateOnce = function () {
                        var hs_sat26DRYV = new $hs.Data(1);
                        hs_sat26DRYV.data = [0];
                        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.ForeignziCziTypes.hs_zdfShowCInt, hs_sat26DRYV, hs_ds26DRTK);
                    };
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYW, hs_sat26DRYU);
                };
                var hs_sat26DRYZ = new $hs.Thunk();
                hs_sat26DRYZ.evaluateOnce = function () {
                    var hs_sat26DRYY = new $hs.Thunk();
                    hs_sat26DRYY.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fromEPollFd = \x00");
                    };
                    return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRYY);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRYZ, hs_sat26DRYX);
            };
            var hs_sat26DRZ2 = new $hs.Thunk();
            hs_sat26DRZ2.evaluateOnce = function () {
                var hs_sat26DRZ1 = new $hs.Thunk();
                hs_sat26DRZ1.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("EPollFd {\x00");
                };
                return $hs.modules.GHCziShow.hs_showString.hscall(hs_sat26DRZ1);
            };
            return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DRZ2, hs_sat26DRZ0);
        };
        var hs_sat26DRZ5 = new $hs.Thunk();
        hs_sat26DRZ5.evaluateOnce = function () {
            var hs_sat26DRZ4 = new $hs.Data(1);
            hs_sat26DRZ4.data = [11];
            return $hs.modules.GHCziClasses.hs_zgze.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_a3826DRTC, hs_sat26DRZ4);
        };
        return $hs.modules.GHCziShow.hs_showParen.hscall(hs_sat26DRZ5, hs_sat26DRZ3);
    };
    hs_sat26DRZ6.evaluateOnce = function () {
        var hs_sat26DRZ7 = new $hs.Data(1);
        hs_sat26DRZ7.data = [0];
        return $hs.modules.GHCziShow.hs_showsPrec.hscall($hs.modules.SystemziEventziEPoll.hs_zdfShowEPollFd, hs_sat26DRZ7);
    };
    this.hs_zdfShowEPollFd.data = [hs_zdcshowsPrec225vtnj, hs_zdcshow225vtnF, hs_zdcshowList225vtnD];
    hs_zdcshowList225vtnD.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_showListzuzu.hscall(hs_sat26DRZ6);
    };
    hs_zdcshow225vtnF.evaluateOnce = function () {
        return $hs.modules.GHCziShow.hs_zddmshow.hscall($hs.modules.SystemziEventziEPoll.hs_zdfShowEPollFd);
    };
    hs_a2925vtnJ.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczeze125vtnL.evaluateOnce = function () {
        if (hs_a2925vtnJ.notEvaluated) {
            return hs_a2925vtnJ.hscall();
        } else {
            return hs_a2925vtnJ;
        }
    };
    hs_a3025vtnN.evaluateOnce = function () {
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt);
    };
    hs_zdczsze125vtnP.evaluateOnce = function () {
        if (hs_a3025vtnN.notEvaluated) {
            return hs_a3025vtnN.hscall();
        } else {
            return hs_a3025vtnN;
        }
    };
    this.hs_zdfEqEPollFd.data = [hs_a2925vtnJ, hs_a3025vtnN];
    hs_delete25uotX.evaluate = function (hs_be26DRU9) {
        var hs_sat26DRZ9 = new $hs.Func(1);
        hs_sat26DRZ9.evaluate = function (hs_ds26DRZ8) {
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
        };
        var hs_sat26DRZc = new $hs.Thunk();
        hs_sat26DRZc.evaluateOnce = function () {
            var hs_sat26DRZb = new $hs.Thunk();
            hs_sat26DRZb.evaluateOnce = function () {
                var hs_sat26DRZa = new $hs.Thunk();
                hs_sat26DRZa.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_zi.hscall(hs_a25vtj5, hs_epollFd25uotQ);
                };
                return $hs.modules.GHCziBase.hs_zi.hscall($hs.modules.SystemziPosixziInternals.hs_czuclose, hs_sat26DRZa);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRZb, hs_be26DRU9);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRZc, hs_sat26DRZ9);
    };
    hs_sat26DRZd.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    hs_a3125vtnY.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DRZd);
    };
    hs_sat26DRZe.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(3);
    };
    hs_a3225vto1.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DRZe);
    };
    hs_sat26DRZf.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
    };
    hs_a3325vto4.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DRZf);
    };
    hs_sat26DRZg.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
    };
    hs_a3425vto7.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DRZg);
    };
    hs_sat26DRZh.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(4);
    };
    hs_a3525vtoa.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DRZh);
    };
    hs_sat26DRZi.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(8);
    };
    hs_a3625vtod.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DRZi);
    };
    hs_sat26DRZj.evaluateOnce = function () {
        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(16);
    };
    hs_a3725vtog.evaluateOnce = function () {
        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord32, hs_sat26DRZj);
    };
    hs_modifyFd25uotZ.evaluate = function (hs_ep26DRUO, hs_fd26DRUK, hs_oevt26DRUV, hs_nevt26DRUC) {
        var hs_ds26DRUT = new $hs.Thunk();
        hs_ds26DRUT.evaluateOnce = function () {
            var hs_wild26DRZk = hs_ep26DRUO;
            if (hs_ep26DRUO.notEvaluated) {
                hs_wild26DRZk = hs_ep26DRUO.hscall();
            }
            var hs_rb26DRUS = hs_wild26DRZk.data[0];
            var $res = new $hs.Data(1);
            $res.data = [hs_rb26DRUS];
            return $res;
        };
        var hs_ds126DRV0 = new $hs.Thunk();
        hs_ds126DRV0.evaluateOnce = function () {
            var hs_sat26DRZn = new $hs.Thunk();
            hs_sat26DRZn.evaluateOnce = function () {
                return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
            };
            var hs_wild26DRZm = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_oevt26DRUV, hs_sat26DRZn);
            switch (hs_wild26DRZm.tag) {
            case 1:
                var hs_sat26DRZp = new $hs.Thunk();
                hs_sat26DRZp.evaluateOnce = function () {
                    return $hs.modules.DataziMonoid.hs_mempty.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent);
                };
                var hs_wild126DRZo = $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.SystemziEventziInternal.hs_zdfEqEvent, hs_nevt26DRUC, hs_sat26DRZp);
                switch (hs_wild126DRZo.tag) {
                case 1:
                    if (hs_a3225vto1.notEvaluated) {
                        return hs_a3225vto1.hscall();
                    } else {
                        return hs_a3225vto1;
                    }
                case 2:
                    if (hs_a3325vto4.notEvaluated) {
                        return hs_a3325vto4.hscall();
                    } else {
                        return hs_a3325vto4;
                    }
                }
            case 2:
                if (hs_a3125vtnY.notEvaluated) {
                    return hs_a3125vtnY.hscall();
                } else {
                    return hs_a3125vtnY;
                }
            }
        };
        var hs_sat26DRZu = new $hs.Func(1);
        hs_sat26DRZu.evaluate = function (hs_event26DRV4) {
            var hs_sat26DRZq = new $hs.Func(1);
            hs_sat26DRZq.evaluate = function (hs_eta1cW6l3) {
                return hs_czuepollzuctl25uotz.hscall(hs_ds26DRUT, hs_ds126DRV0, hs_fd26DRUK, hs_event26DRV4, hs_eta1cW6l3);
            };
            var hs_sat26DRZs = new $hs.Thunk();
            hs_sat26DRZs.evaluateOnce = function () {
                var hs_sat26DRZr = new $hs.Thunk();
                hs_sat26DRZr.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("epollControl\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DRZr);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRZs, hs_sat26DRZq);
        };
        var hs_sat26DRZC = new $hs.Thunk();
        hs_sat26DRZC.evaluateOnce = function () {
            var hs_sat26DRZA = new $hs.Thunk();
            hs_sat26DRZA.evaluateOnce = function () {
                var hs_sat26DRZx = new $hs.Thunk();
                hs_sat26DRZx.evaluateOnce = function () {
                    var hs_wild26DRZt = $hs.modules.SystemziEventziInternal.hs_eventIs.hscall(hs_nevt26DRUC, $hs.modules.SystemziEventziInternal.hs_evtWrite);
                    switch (hs_wild26DRZt.tag) {
                    case 1:
                        var hs_sat26DRZv = new $hs.Thunk();
                        hs_sat26DRZv.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziEventziEPoll.hs_zdfNumEventType, hs_sat26DRZv);
                    case 2:
                        if (hs_a3525vtoa.notEvaluated) {
                            return hs_a3525vtoa.hscall();
                        } else {
                            return hs_a3525vtoa;
                        }
                    }
                };
                var hs_sat26DRZz = new $hs.Thunk();
                hs_sat26DRZz.evaluateOnce = function () {
                    var hs_wild26DRZw = $hs.modules.SystemziEventziInternal.hs_eventIs.hscall(hs_nevt26DRUC, $hs.modules.SystemziEventziInternal.hs_evtRead);
                    switch (hs_wild26DRZw.tag) {
                    case 1:
                        var hs_sat26DRZy = new $hs.Thunk();
                        hs_sat26DRZy.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziEventziEPoll.hs_zdfNumEventType, hs_sat26DRZy);
                    case 2:
                        if (hs_a3425vto7.notEvaluated) {
                            return hs_a3425vto7.hscall();
                        } else {
                            return hs_a3425vto7;
                        }
                    }
                };
                return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziEventziEPoll.hs_zdfBitsEventType, hs_sat26DRZz, hs_sat26DRZx);
            };
            var hs_sat26DRZB = new $hs.Data(1);
            hs_sat26DRZB.data = [hs_sat26DRZA, hs_fd26DRUK];
            return $hs.modules.ForeignziMarshalziUtils.hs_with.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent, hs_sat26DRZB);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRZC, hs_sat26DRZu);
    };
    hs_poll25uou1.evaluate = function (hs_ep26DRVb, hs_timeout26DRVY, hs_f26DRWm) {
        var hs_events26DRVg = new $hs.Thunk();
        hs_events26DRVg.evaluateOnce = function () {
            var hs_wild26DRZE = hs_ep26DRVb;
            if (hs_ep26DRVb.notEvaluated) {
                hs_wild26DRZE = hs_ep26DRVb.hscall();
            }
            var hs_ds26DRVf = hs_wild26DRZE.data[1];
            if (hs_ds26DRVf.notEvaluated) {
                return hs_ds26DRVf.hscall();
            } else {
                return hs_ds26DRVf;
            }
        };
        var hs_sat26DS0b = new $hs.Func(1);
        hs_sat26DS0b.evaluate = function (hs_n26DRWb) {
            var hs_sat26DS06 = new $hs.Thunk();
            hs_sat26DS06.evaluateOnce = function () {
                var hs_sat26DRZN = new $hs.Thunk();
                hs_sat26DRZN.evaluateOnce = function () {
                    var hs_sat26DRZK = new $hs.Func(1);
                    hs_sat26DRZK.evaluate = function (hs_cap26DRWR) {
                        var hs_sat26DRZH = new $hs.Thunk();
                        hs_sat26DRZH.evaluateOnce = function () {
                            var hs_sat26DRZG = new $hs.Thunk();
                            hs_sat26DRZG.evaluateOnce = function () {
                                var hs_sat26DRZF = new $hs.Data(1);
                                hs_sat26DRZF.data = [2];
                                return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DRZF, hs_cap26DRWR);
                            };
                            return $hs.modules.SystemziEventziArray.hs_ensureCapacity.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent, hs_events26DRVg, hs_sat26DRZG);
                        };
                        var hs_sat26DRZJ = new $hs.Thunk();
                        hs_sat26DRZJ.evaluateOnce = function () {
                            var hs_sat26DRZI = new $hs.Thunk();
                            hs_sat26DRZI.evaluateOnce = function () {
                                return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziBase.hs_zdfEqInt, hs_cap26DRWR, hs_n26DRWb);
                            };
                            return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRZI);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DRZJ, hs_sat26DRZH);
                    };
                    var hs_sat26DRZL = new $hs.Thunk();
                    hs_sat26DRZL.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziArray.hs_capacity.hscall(hs_events26DRVg);
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DRZL, hs_sat26DRZK);
                };
                var hs_sat26DS05 = new $hs.Thunk();
                hs_sat26DS05.evaluateOnce = function () {
                    var hs_sat26DS03 = new $hs.Func(1);
                    hs_sat26DS03.evaluate = function (hs_e26DRWh) {
                        var hs_sat26DS01 = new $hs.Thunk();
                        hs_sat26DS01.evaluateOnce = function () {
                            var hs_e126DRWt = new $hs.Thunk();
                            hs_e126DRWt.evaluateOnce = function () {
                                var hs_wild26DRZM = hs_e26DRWh;
                                if (hs_e26DRWh.notEvaluated) {
                                    hs_wild26DRZM = hs_e26DRWh.hscall();
                                }
                                var hs_ds26DRWs = hs_wild26DRZM.data[0];
                                if (hs_ds26DRWs.notEvaluated) {
                                    return hs_ds26DRWs.hscall();
                                } else {
                                    return hs_ds26DRWs;
                                }
                            };
                            var hs_remap26DRWF = new $hs.Func(3);
                            hs_remap26DRWF.evaluate = function (hs_zddMonoid26DRWD, hs_evt26DRWy, hs_to26DRWE) {
                                var hs_sat26DRZQ = new $hs.Thunk();
                                hs_sat26DRZQ.evaluateOnce = function () {
                                    var hs_sat26DRZP = new $hs.Thunk();
                                    hs_sat26DRZP.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziEventziEPoll.hs_zdfNumEventType, hs_sat26DRZP);
                                };
                                var hs_sat26DRZS = new $hs.Thunk();
                                hs_sat26DRZS.evaluateOnce = function () {
                                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.SystemziEventziEPoll.hs_zdfBitsEventType, hs_e126DRWt, hs_evt26DRWy);
                                };
                                var hs_wild26DRZR = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziEventziEPoll.hs_zdfEqEventType, hs_sat26DRZS, hs_sat26DRZQ);
                                switch (hs_wild26DRZR.tag) {
                                case 1:
                                    return $hs.modules.DataziMonoid.hs_mempty.hscall(hs_zddMonoid26DRWD);
                                case 2:
                                    if (hs_to26DRWE.notEvaluated) {
                                        return hs_to26DRWE.hscall();
                                    } else {
                                        return hs_to26DRWE;
                                    }
                                }
                            };
                            var hs_sat26DRZV = new $hs.Thunk();
                            hs_sat26DRZV.evaluateOnce = function () {
                                var hs_sat26DRZU = new $hs.Thunk();
                                hs_sat26DRZU.evaluateOnce = function () {
                                    var hs_sat26DRZT = new $hs.Thunk();
                                    hs_sat26DRZT.evaluateOnce = function () {
                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziEventziEPoll.hs_zdfBitsEventType, hs_a3525vtoa, hs_a3625vtod);
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziEventziEPoll.hs_zdfBitsEventType, hs_sat26DRZT, hs_a3725vtog);
                                };
                                return hs_remap26DRWF.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent, hs_sat26DRZU, $hs.modules.SystemziEventziInternal.hs_evtWrite);
                            };
                            var hs_sat26DRZY = new $hs.Thunk();
                            hs_sat26DRZY.evaluateOnce = function () {
                                var hs_sat26DRZX = new $hs.Thunk();
                                hs_sat26DRZX.evaluateOnce = function () {
                                    var hs_sat26DRZW = new $hs.Thunk();
                                    hs_sat26DRZW.evaluateOnce = function () {
                                        return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziEventziEPoll.hs_zdfBitsEventType, hs_a3425vto7, hs_a3625vtod);
                                    };
                                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziEventziEPoll.hs_zdfBitsEventType, hs_sat26DRZW, hs_a3725vtog);
                                };
                                return hs_remap26DRWF.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent, hs_sat26DRZX, $hs.modules.SystemziEventziInternal.hs_evtRead);
                            };
                            return $hs.modules.DataziMonoid.hs_mappend.hscall($hs.modules.SystemziEventziInternal.hs_zdfMonoidEvent, hs_sat26DRZY, hs_sat26DRZV);
                        };
                        var hs_sat26DS02 = new $hs.Thunk();
                        hs_sat26DS02.evaluateOnce = function () {
                            var hs_wild26DS00 = hs_e26DRWh;
                            if (hs_e26DRWh.notEvaluated) {
                                hs_wild26DS00 = hs_e26DRWh.hscall();
                            }
                            var hs_ds126DRWl = hs_wild26DS00.data[1];
                            if (hs_ds126DRWl.notEvaluated) {
                                return hs_ds126DRWl.hscall();
                            } else {
                                return hs_ds126DRWl;
                            }
                        };
                        return hs_f26DRWm.hscall(hs_sat26DS02, hs_sat26DS01);
                    };
                    var hs_sat26DS04 = new $hs.Thunk();
                    hs_sat26DS04.evaluateOnce = function () {
                        return $hs.modules.SystemziEventziArray.hs_forMzu.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent, hs_events26DRVg);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DS04, hs_sat26DS03);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DS05, hs_sat26DRZN);
            };
            var hs_sat26DS09 = new $hs.Thunk();
            hs_sat26DS09.evaluateOnce = function () {
                var hs_sat26DS08 = new $hs.Thunk();
                hs_sat26DS08.evaluateOnce = function () {
                    var hs_sat26DS07 = new $hs.Data(1);
                    hs_sat26DS07.data = [0];
                    return $hs.modules.GHCziClasses.hs_zg.hscall($hs.modules.GHCziBase.hs_zdfOrdInt, hs_n26DRWb, hs_sat26DS07);
                };
                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DS08);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DS09, hs_sat26DS06);
        };
        var hs_sat26DS0A = new $hs.Thunk();
        hs_sat26DS0A.evaluateOnce = function () {
            var hs_sat26DS0y = new $hs.Func(2);
            hs_sat26DS0y.evaluate = function (hs_es26DRVy, hs_cap26DRVB) {
                var hs_sat26DS0i = new $hs.Thunk();
                hs_sat26DS0i.evaluateOnce = function () {
                    var hs_wild26DS0a = hs_timeout26DRVY;
                    if (hs_timeout26DRVY.notEvaluated) {
                        hs_wild26DS0a = hs_timeout26DRVY.hscall();
                    }
                    switch (hs_wild26DS0a.tag) {
                    case 1:
                        var hs_rb26DRW3 = hs_wild26DS0a.data[0];
                        var hs_sat26DS0e = new $hs.Thunk();
                        hs_sat26DS0e.evaluateOnce = function () {
                            var hs_sat26DS0c = new $hs.Data(1);
                            hs_sat26DS0c.data = [hs_rb26DRW3];
                            var hs_sat26DS0d = new $hs.Data(1);
                            hs_sat26DS0d.data = [1000 % 1];
                            return $hs.modules.GHCziNum.hs_zt.hscall($hs.modules.GHCziFloat.hs_zdfNumDouble, hs_sat26DS0d, hs_sat26DS0c);
                        };
                        var hs_sat26DS0f = new $hs.Thunk();
                        hs_sat26DS0f.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_ceiling.hscall($hs.modules.GHCziFloat.hs_zdfRealFracDouble, $hs.modules.GHCziReal.hs_zdfIntegralInt);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DS0f, hs_sat26DS0e);
                    case 2:
                        var hs_sat26DS0g = new $hs.Data(1);
                        hs_sat26DS0g.data = [1];
                        return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInt, hs_sat26DS0g);
                    }
                };
                var hs_ds26DRVp = new $hs.Thunk();
                hs_ds26DRVp.evaluateOnce = function () {
                    var hs_wild26DS0h = hs_ep26DRVb;
                    if (hs_ep26DRVb.notEvaluated) {
                        hs_wild26DS0h = hs_ep26DRVb.hscall();
                    }
                    var hs_rb26DRVo = hs_wild26DS0h.data[0];
                    var $res = new $hs.Data(1);
                    $res.data = [hs_rb26DRVo];
                    return $res;
                };
                var hs_sat26DS0x = new $hs.Func(1);
                hs_sat26DS0x.evaluate = function (hs_timeout126DRVE) {
                    var hs_sat26DS0r = new $hs.Thunk();
                    hs_sat26DS0r.evaluateOnce = function () {
                        var hs_ds126DS0o = hs_ds26DRVp;
                        if (hs_ds26DRVp.notEvaluated) {
                            hs_ds126DS0o = hs_ds26DRVp.hscall();
                        }
                        var hs_ds226DRVJ = hs_ds126DS0o.data[0];
                        var hs_ds326DS0n = hs_es26DRVy;
                        if (hs_es26DRVy.notEvaluated) {
                            hs_ds326DS0n = hs_es26DRVy.hscall();
                        }
                        var hs_ds426DRVK = hs_ds326DS0n.data[0];
                        var hs_ds526DS0m = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_cap26DRVB);
                        var hs_ds626DRVL = hs_ds526DS0m.data[0];
                        var hs_ds726DS0l = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_timeout126DRVE);
                        var hs_ds826DRVM = hs_ds726DS0l.data[0];
                        var hs_sat26DS0q = new $hs.Func(1);
                        hs_sat26DS0q.evaluate = function (hs_ds926DRVN) {
                            var hs_wild26DS0k = [hs_ds926DRVN, epoll_wait(hs_ds226DRVJ, hs_ds426DRVK, hs_ds626DRVL, hs_ds826DRVM)];
                            var hs_ds1026DRVS = hs_wild26DS0k[0];
                            var hs_ds1126DRVT = hs_wild26DS0k[1];
                            var hs_sat26DS0p = new $hs.Data(1);
                            hs_sat26DS0p.data = [hs_ds1126DRVT];
                            return [hs_ds1026DRVS, hs_sat26DS0p];
                        };
                        if (hs_sat26DS0q.notEvaluated) {
                            return hs_sat26DS0q.hscall();
                        } else {
                            return hs_sat26DS0q;
                        }
                    };
                    var hs_sat26DS0w = new $hs.Thunk();
                    hs_sat26DS0w.evaluateOnce = function () {
                        var hs_sat26DS0t = new $hs.Thunk();
                        hs_sat26DS0t.evaluateOnce = function () {
                            var hs_sat26DS0s = new $hs.Thunk();
                            hs_sat26DS0s.evaluateOnce = function () {
                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("epollWait\x00");
                            };
                            return $hs.modules.SystemziEventziInternal.hs_throwErrnoIfMinus1NoRetry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DS0s);
                        };
                        var hs_sat26DS0v = new $hs.Thunk();
                        hs_sat26DS0v.evaluateOnce = function () {
                            var hs_sat26DS0u = new $hs.Thunk();
                            hs_sat26DS0u.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt);
                            };
                            return $hs.modules.GHCziBase.hs_fmap.hscall($hs.modules.GHCziBase.hs_zdfFunctorIO, hs_sat26DS0u);
                        };
                        return $hs.modules.GHCziBase.hs_zi.hscall(hs_sat26DS0v, hs_sat26DS0t);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DS0w, hs_sat26DS0r);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DS0x, hs_sat26DS0i);
            };
            var hs_sat26DS0z = new $hs.Thunk();
            hs_sat26DS0z.evaluateOnce = function () {
                return $hs.modules.SystemziEventziArray.hs_unsafeLoad.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent, hs_events26DRVg);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DS0z, hs_sat26DS0y);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DS0A, hs_sat26DS0b);
    };
    hs_sat26DS0K.evaluate = function (hs_epfd26DRXv) {
        var hs_sat26DS0H = new $hs.Func(1);
        hs_sat26DS0H.evaluate = function (hs_evts26DRXy) {
            var hs_sat26DS0D = new $hs.Thunk();
            hs_sat26DS0D.evaluateOnce = function () {
                var hs_tpl26DS0B = hs_epfd26DRXv;
                if (hs_epfd26DRXv.notEvaluated) {
                    hs_tpl26DS0B = hs_epfd26DRXv.hscall();
                }
                var hs_tpl126DRXA = hs_tpl26DS0B.data[0];
                var hs_tpl226DRXB = hs_evts26DRXy;
                if (hs_evts26DRXy.notEvaluated) {
                    hs_tpl226DRXB = hs_evts26DRXy.hscall();
                }
                var $res = new $hs.Data(1);
                $res.data = [hs_tpl126DRXA, hs_tpl226DRXB];
                return $res;
            };
            var hs_be26DRXI = $hs.modules.SystemziEventziInternal.hs_backend.hscall(hs_poll25uou1, hs_modifyFd25uotZ, hs_delete25uotX, hs_sat26DS0D);
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_be26DRXI);
        };
        var hs_sat26DS0J = new $hs.Thunk();
        hs_sat26DS0J.evaluateOnce = function () {
            var hs_sat26DS0I = new $hs.Data(1);
            hs_sat26DS0I.data = [64];
            return $hs.modules.SystemziEventziArray.hs_new.hscall($hs.modules.SystemziEventziEPoll.hs_zdfStorableEvent, hs_sat26DS0I);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DS0J, hs_sat26DS0H);
    };
    hs_sat26DS0W.evaluateOnce = function () {
        var hs_sat26DS0M = new $hs.Func(1);
        hs_sat26DS0M.evaluate = function (hs_fd26DRXl) {
            var hs_nt26DRXo = hs_fd26DRXl;
            if (hs_fd26DRXl.notEvaluated) {
                hs_nt26DRXo = hs_fd26DRXl.hscall();
            }
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_nt26DRXo);
        };
        var hs_sat26DS0V = new $hs.Thunk();
        hs_sat26DS0V.evaluateOnce = function () {
            var hs_sat26DS0S = new $hs.Thunk();
            hs_sat26DS0S.evaluateOnce = function () {
                var hs_sat26DS0P = new $hs.Thunk();
                hs_sat26DS0P.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(524288);
                };
                var hs_ds26DS0O = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DS0P);
                var hs_ds126DRX8 = hs_ds26DS0O.data[0];
                var hs_sat26DS0R = new $hs.Func(1);
                hs_sat26DS0R.evaluate = function (hs_ds226DRX9) {
                    var hs_wild26DS0N = [hs_ds226DRX9, epoll_create1(hs_ds126DRX8)];
                    var hs_ds326DRXe = hs_wild26DS0N[0];
                    var hs_ds426DRXf = hs_wild26DS0N[1];
                    var hs_sat26DS0Q = new $hs.Data(1);
                    hs_sat26DS0Q.data = [hs_ds426DRXf];
                    return [hs_ds326DRXe, hs_sat26DS0Q];
                };
                if (hs_sat26DS0R.notEvaluated) {
                    return hs_sat26DS0R.hscall();
                } else {
                    return hs_sat26DS0R;
                }
            };
            var hs_sat26DS0U = new $hs.Thunk();
            hs_sat26DS0U.evaluateOnce = function () {
                var hs_sat26DS0T = new $hs.Thunk();
                hs_sat26DS0T.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("epollCreate\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DS0T);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DS0U, hs_sat26DS0S);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DS0V, hs_sat26DS0M);
    };
    this.hs_new.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DS0W, hs_sat26DS0K);
    };
    this.hs_EventType.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziEPoll.hs_EventType.hscall(hs_eta1cW6l3);
    };
    this.hs_ControlOp.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziEPoll.hs_ControlOp.hscall(hs_eta1cW6l3);
    };
    this.hs_Event.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
    this.hs_EPollFd.evaluate = function (hs_eta1cW6l3) {
        return $hs.modules.SystemziEventziEPoll.hs_EPollFd.hscall(hs_eta1cW6l3);
    };
    this.hs_EPoll.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        var $res = new $hs.Data(1);
        $res.data = [hs_eta1cW6l4, hs_eta1cW6l3];
        return $res;
    };
};
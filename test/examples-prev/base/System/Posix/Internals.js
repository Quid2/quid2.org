
$hs.modules.SystemziPosixziInternals = new $hs.Module();
$hs.modules.SystemziPosixziInternals.dependencies = ["GHC.Prim", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.IO.Device", "GHC.IO.Exception", "GHC.Ptr", "GHC.Word", "Data.Bits", "Foreign.C.Error", "Foreign.C.String", "Foreign.C.Types", "Foreign.Marshal.Alloc", "Foreign.Marshal.Utils", "Foreign.Storable", "System.Posix.Types"];
$hs.modules.SystemziPosixziInternals.initBeforeDependencies = function () {
    this.hs_withFilePath = new $hs.Thunk();
    this.hs_ioezuunknownfiletype = new $hs.Data(1);
    this.hs_getzusavedzutermios = new $hs.Func(2);
    this.hs_setzusavedzutermios = new $hs.Func(3);
    this.hs_czuaccess = new $hs.Func(3);
    this.hs_czuchmod = new $hs.Func(3);
    this.hs_czuclose = new $hs.Func(2);
    this.hs_czucreat = new $hs.Func(3);
    this.hs_czudup = new $hs.Func(2);
    this.hs_czudup2 = new $hs.Func(3);
    this.hs_czufstat = new $hs.Func(3);
    this.hs_czuisatty = new $hs.Func(2);
    this.hs_czulseek = new $hs.Func(4);
    this.hs_lstat = new $hs.Func(3);
    this.hs_czuopen = new $hs.Func(4);
    this.hs_czuread = new $hs.Func(4);
    this.hs_czusafezuread = new $hs.Func(4);
    this.hs_czustat = new $hs.Func(3);
    this.hs_czuumask = new $hs.Func(2);
    this.hs_czuwrite = new $hs.Func(4);
    this.hs_czusafezuwrite = new $hs.Func(4);
    this.hs_czuftruncate = new $hs.Func(3);
    this.hs_czuunlink = new $hs.Func(2);
    this.hs_czugetpid = new $hs.Func(1);
    this.hs_czufcntlzuread = new $hs.Func(3);
    this.hs_czufcntlzuwrite = new $hs.Func(4);
    this.hs_czufcntlzulock = new $hs.Func(4);
    this.hs_czufork = new $hs.Func(1);
    this.hs_czulink = new $hs.Func(3);
    this.hs_czumkfifo = new $hs.Func(3);
    this.hs_czupipe = new $hs.Func(2);
    this.hs_czusigemptyset = new $hs.Func(2);
    this.hs_czusigaddset = new $hs.Func(3);
    this.hs_czusigprocmask = new $hs.Func(4);
    this.hs_czutcgetattr = new $hs.Func(3);
    this.hs_czutcsetattr = new $hs.Func(4);
    this.hs_czuutime = new $hs.Func(3);
    this.hs_czuwaitpid = new $hs.Func(4);
    this.hs_ozuRDONLY = new $hs.Thunk();
    this.hs_ozuWRONLY = new $hs.Thunk();
    this.hs_ozuRDWR = new $hs.Thunk();
    this.hs_ozuAPPEND = new $hs.Thunk();
    this.hs_ozuCREAT = new $hs.Thunk();
    this.hs_ozuEXCL = new $hs.Thunk();
    this.hs_ozuTRUNC = new $hs.Thunk();
    this.hs_ozuNOCTTY = new $hs.Thunk();
    this.hs_ozuNONBLOCK = new $hs.Thunk();
    this.hs_ozuBINARY = new $hs.Thunk();
    this.hs_czuszuisreg = new $hs.Func(1);
    this.hs_czuszuischr = new $hs.Func(1);
    this.hs_czuszuisblk = new $hs.Func(1);
    this.hs_czuszuisdir = new $hs.Func(1);
    this.hs_czuszuisfifo = new $hs.Func(1);
    this.hs_sizzeofzustat = new $hs.Thunk();
    this.hs_stzumtime = new $hs.Func(2);
    this.hs_stzusizze = new $hs.Func(2);
    this.hs_stzumode = new $hs.Func(2);
    this.hs_stzudev = new $hs.Func(2);
    this.hs_stzuino = new $hs.Func(2);
    this.hs_constzuecho = new $hs.Thunk();
    this.hs_constzutcsanow = new $hs.Thunk();
    this.hs_constzuicanon = new $hs.Thunk();
    this.hs_constzuvmin = new $hs.Thunk();
    this.hs_constzuvtime = new $hs.Thunk();
    this.hs_constzusigttou = new $hs.Thunk();
    this.hs_constzusigzublock = new $hs.Thunk();
    this.hs_constzusigzusetmask = new $hs.Thunk();
    this.hs_constzufzugetfl = new $hs.Thunk();
    this.hs_constzufzusetfl = new $hs.Thunk();
    this.hs_constzufzusetfd = new $hs.Thunk();
    this.hs_constzufdzucloexec = new $hs.Thunk();
    this.hs_sizzeofzutermios = new $hs.Thunk();
    this.hs_sizzeofzusigsetzut = new $hs.Thunk();
    this.hs_tcSetAttr = new $hs.Func(2);
    this.hs_czulflag = new $hs.Func(2);
    this.hs_pokezuczulflag = new $hs.Func(3);
    this.hs_ptrzuczucc = new $hs.Func(2);
    this.hs_czuszuissock = new $hs.Func(1);
    this.hs_dEFAULTzuBUFFERzuSIZZE = new $hs.Thunk();
    this.hs_sEEKzuCUR = new $hs.Thunk();
    this.hs_sEEKzuSET = new $hs.Thunk();
    this.hs_sEEKzuEND = new $hs.Thunk();
    this.hs_fdGetMode = new $hs.Func(1);
    this.hs_setEcho = new $hs.Func(2);
    this.hs_getEcho = new $hs.Func(1);
    this.hs_setCooked = new $hs.Func(2);
    this.hs_setNonBlockingFD = new $hs.Func(2);
    this.hs_setCloseOnExec = new $hs.Func(1);
    this.hs_szuisreg = new $hs.Func(1);
    this.hs_fdFileSizze = new $hs.Func(1);
    this.hs_szuischr = new $hs.Func(1);
    this.hs_szuisblk = new $hs.Func(1);
    this.hs_szuisdir = new $hs.Func(1);
    this.hs_szuisfifo = new $hs.Func(1);
    this.hs_szuissock = new $hs.Func(1);
    this.hs_statGetType = new $hs.Func(1);
    this.hs_fileType = new $hs.Func(1);
    this.hs_fdStat = new $hs.Func(1);
    this.hs_fdType = new $hs.Func(1);
    this.hs_withFilePath.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ioezuunknownfiletype.notEvaluated = true;
    this.hs_ioezuunknownfiletype.evaluate = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this;
    };
    this.hs_getzusavedzutermios.notEvaluated = true;
    this.hs_getzusavedzutermios.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_setzusavedzutermios.notEvaluated = true;
    this.hs_setzusavedzutermios.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuaccess.notEvaluated = true;
    this.hs_czuaccess.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuchmod.notEvaluated = true;
    this.hs_czuchmod.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuclose.notEvaluated = true;
    this.hs_czuclose.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czucreat.notEvaluated = true;
    this.hs_czucreat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czudup.notEvaluated = true;
    this.hs_czudup.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czudup2.notEvaluated = true;
    this.hs_czudup2.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czufstat.notEvaluated = true;
    this.hs_czufstat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuisatty.notEvaluated = true;
    this.hs_czuisatty.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czulseek.notEvaluated = true;
    this.hs_czulseek.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_lstat.notEvaluated = true;
    this.hs_lstat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuopen.notEvaluated = true;
    this.hs_czuopen.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuread.notEvaluated = true;
    this.hs_czuread.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czusafezuread.notEvaluated = true;
    this.hs_czusafezuread.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czustat.notEvaluated = true;
    this.hs_czustat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuumask.notEvaluated = true;
    this.hs_czuumask.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuwrite.notEvaluated = true;
    this.hs_czuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czusafezuwrite.notEvaluated = true;
    this.hs_czusafezuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuftruncate.notEvaluated = true;
    this.hs_czuftruncate.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuunlink.notEvaluated = true;
    this.hs_czuunlink.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czugetpid.notEvaluated = true;
    this.hs_czugetpid.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_czufcntlzuread.notEvaluated = true;
    this.hs_czufcntlzuread.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czufcntlzuwrite.notEvaluated = true;
    this.hs_czufcntlzuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czufcntlzulock.notEvaluated = true;
    this.hs_czufcntlzulock.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czufork.notEvaluated = true;
    this.hs_czufork.evaluate = function (hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l3);
    };
    this.hs_czulink.notEvaluated = true;
    this.hs_czulink.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czumkfifo.notEvaluated = true;
    this.hs_czumkfifo.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czupipe.notEvaluated = true;
    this.hs_czupipe.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czusigemptyset.notEvaluated = true;
    this.hs_czusigemptyset.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czusigaddset.notEvaluated = true;
    this.hs_czusigaddset.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czusigprocmask.notEvaluated = true;
    this.hs_czusigprocmask.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czutcgetattr.notEvaluated = true;
    this.hs_czutcgetattr.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czutcsetattr.notEvaluated = true;
    this.hs_czutcsetattr.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuutime.notEvaluated = true;
    this.hs_czuutime.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuwaitpid.notEvaluated = true;
    this.hs_czuwaitpid.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_ozuRDONLY.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuWRONLY.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuRDWR.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuAPPEND.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuCREAT.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuEXCL.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuTRUNC.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuNOCTTY.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuNONBLOCK.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_ozuBINARY.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_czuszuisreg.notEvaluated = true;
    this.hs_czuszuisreg.evaluate = function (hs_ds26DN4d) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DN4d);
    };
    this.hs_czuszuischr.notEvaluated = true;
    this.hs_czuszuischr.evaluate = function (hs_ds26DN4o) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DN4o);
    };
    this.hs_czuszuisblk.notEvaluated = true;
    this.hs_czuszuisblk.evaluate = function (hs_ds26DN4z) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DN4z);
    };
    this.hs_czuszuisdir.notEvaluated = true;
    this.hs_czuszuisdir.evaluate = function (hs_ds26DN4K) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DN4K);
    };
    this.hs_czuszuisfifo.notEvaluated = true;
    this.hs_czuszuisfifo.evaluate = function (hs_ds26DN4V) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DN4V);
    };
    this.hs_sizzeofzustat.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_stzumtime.notEvaluated = true;
    this.hs_stzumtime.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_stzusizze.notEvaluated = true;
    this.hs_stzusizze.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_stzumode.notEvaluated = true;
    this.hs_stzumode.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_stzudev.notEvaluated = true;
    this.hs_stzudev.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_stzuino.notEvaluated = true;
    this.hs_stzuino.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_constzuecho.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzutcsanow.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzuicanon.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzuvmin.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzuvtime.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzusigttou.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzusigzublock.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzusigzusetmask.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzufzugetfl.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzufzusetfl.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzufzusetfd.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_constzufdzucloexec.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_sizzeofzutermios.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_sizzeofzusigsetzut.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_tcSetAttr.notEvaluated = true;
    this.hs_tcSetAttr.evaluate = function (hs_fd26DN7Z, hs_fun26DNai) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DN7Z, hs_fun26DNai);
    };
    this.hs_czulflag.notEvaluated = true;
    this.hs_czulflag.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_pokezuczulflag.notEvaluated = true;
    this.hs_pokezuczulflag.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_ptrzuczucc.notEvaluated = true;
    this.hs_ptrzuczucc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuszuissock.notEvaluated = true;
    this.hs_czuszuissock.evaluate = function (hs_ds26DNch) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DNch);
    };
    this.hs_dEFAULTzuBUFFERzuSIZZE.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_sEEKzuCUR.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_sEEKzuSET.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_sEEKzuEND.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_fdGetMode.notEvaluated = true;
    this.hs_fdGetMode.evaluate = function (hs_fd26DNcR) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNcR);
    };
    this.hs_setEcho.notEvaluated = true;
    this.hs_setEcho.evaluate = function (hs_fd26DNdz, hs_on26DNdV) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNdz, hs_on26DNdV);
    };
    this.hs_getEcho.notEvaluated = true;
    this.hs_getEcho.evaluate = function (hs_fd26DNer) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNer);
    };
    this.hs_setCooked.notEvaluated = true;
    this.hs_setCooked.evaluate = function (hs_fd26DNeV, hs_cooked26DNfh) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNeV, hs_cooked26DNfh);
    };
    this.hs_setNonBlockingFD.notEvaluated = true;
    this.hs_setNonBlockingFD.evaluate = function (hs_fd26DNgm, hs_set26DNgL) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNgm, hs_set26DNgL);
    };
    this.hs_setCloseOnExec.notEvaluated = true;
    this.hs_setCloseOnExec.evaluate = function (hs_fd26DNhn) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNhn);
    };
    this.hs_szuisreg.notEvaluated = true;
    this.hs_szuisreg.evaluate = function (hs_cm26DNhq) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DNhq);
    };
    this.hs_fdFileSizze.notEvaluated = true;
    this.hs_fdFileSizze.evaluate = function (hs_fd26DNhI) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNhI);
    };
    this.hs_szuischr.notEvaluated = true;
    this.hs_szuischr.evaluate = function (hs_cm26DNiL) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DNiL);
    };
    this.hs_szuisblk.notEvaluated = true;
    this.hs_szuisblk.evaluate = function (hs_cm26DNiZ) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DNiZ);
    };
    this.hs_szuisdir.notEvaluated = true;
    this.hs_szuisdir.evaluate = function (hs_cm26DNjd) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DNjd);
    };
    this.hs_szuisfifo.notEvaluated = true;
    this.hs_szuisfifo.evaluate = function (hs_cm26DNjr) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DNjr);
    };
    this.hs_szuissock.notEvaluated = true;
    this.hs_szuissock.evaluate = function (hs_cmode26DNjF) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cmode26DNjF);
    };
    this.hs_statGetType.notEvaluated = true;
    this.hs_statGetType.evaluate = function (hs_pzustat26DNjT) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_pzustat26DNjT);
    };
    this.hs_fileType.notEvaluated = true;
    this.hs_fileType.evaluate = function (hs_file26DNkn) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_file26DNkn);
    };
    this.hs_fdStat.notEvaluated = true;
    this.hs_fdStat.evaluate = function (hs_fd26DNkV) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNkV);
    };
    this.hs_fdType.notEvaluated = true;
    this.hs_fdType.evaluate = function (hs_fd26DNlY) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DNlY);
    };
};
$hs.modules.SystemziPosixziInternals.initAfterDependencies = function () {
    this.hs_ioezuunknownfiletype.notEvaluated = false;
    this.hs_ioezuunknownfiletype.evaluate = function () {
        return this;
    };
    this.hs_getzusavedzutermios.notEvaluated = false;
    this.hs_setzusavedzutermios.notEvaluated = false;
    this.hs_czuaccess.notEvaluated = false;
    this.hs_czuchmod.notEvaluated = false;
    this.hs_czuclose.notEvaluated = false;
    this.hs_czucreat.notEvaluated = false;
    this.hs_czudup.notEvaluated = false;
    this.hs_czudup2.notEvaluated = false;
    this.hs_czufstat.notEvaluated = false;
    this.hs_czuisatty.notEvaluated = false;
    this.hs_czulseek.notEvaluated = false;
    this.hs_lstat.notEvaluated = false;
    this.hs_czuopen.notEvaluated = false;
    this.hs_czuread.notEvaluated = false;
    this.hs_czusafezuread.notEvaluated = false;
    this.hs_czustat.notEvaluated = false;
    this.hs_czuumask.notEvaluated = false;
    this.hs_czuwrite.notEvaluated = false;
    this.hs_czusafezuwrite.notEvaluated = false;
    this.hs_czuftruncate.notEvaluated = false;
    this.hs_czuunlink.notEvaluated = false;
    this.hs_czugetpid.notEvaluated = false;
    this.hs_czufcntlzuread.notEvaluated = false;
    this.hs_czufcntlzuwrite.notEvaluated = false;
    this.hs_czufcntlzulock.notEvaluated = false;
    this.hs_czufork.notEvaluated = false;
    this.hs_czulink.notEvaluated = false;
    this.hs_czumkfifo.notEvaluated = false;
    this.hs_czupipe.notEvaluated = false;
    this.hs_czusigemptyset.notEvaluated = false;
    this.hs_czusigaddset.notEvaluated = false;
    this.hs_czusigprocmask.notEvaluated = false;
    this.hs_czutcgetattr.notEvaluated = false;
    this.hs_czutcsetattr.notEvaluated = false;
    this.hs_czuutime.notEvaluated = false;
    this.hs_czuwaitpid.notEvaluated = false;
    this.hs_czuszuisreg.notEvaluated = false;
    this.hs_czuszuischr.notEvaluated = false;
    this.hs_czuszuisblk.notEvaluated = false;
    this.hs_czuszuisdir.notEvaluated = false;
    this.hs_czuszuisfifo.notEvaluated = false;
    this.hs_stzumtime.notEvaluated = false;
    this.hs_stzusizze.notEvaluated = false;
    this.hs_stzumode.notEvaluated = false;
    this.hs_stzudev.notEvaluated = false;
    this.hs_stzuino.notEvaluated = false;
    this.hs_tcSetAttr.notEvaluated = false;
    this.hs_czulflag.notEvaluated = false;
    this.hs_pokezuczulflag.notEvaluated = false;
    this.hs_ptrzuczucc.notEvaluated = false;
    this.hs_czuszuissock.notEvaluated = false;
    this.hs_fdGetMode.notEvaluated = false;
    this.hs_setEcho.notEvaluated = false;
    this.hs_getEcho.notEvaluated = false;
    this.hs_setCooked.notEvaluated = false;
    this.hs_setNonBlockingFD.notEvaluated = false;
    this.hs_setCloseOnExec.notEvaluated = false;
    this.hs_szuisreg.notEvaluated = false;
    this.hs_fdFileSizze.notEvaluated = false;
    this.hs_szuischr.notEvaluated = false;
    this.hs_szuisblk.notEvaluated = false;
    this.hs_szuisdir.notEvaluated = false;
    this.hs_szuisfifo.notEvaluated = false;
    this.hs_szuissock.notEvaluated = false;
    this.hs_statGetType.notEvaluated = false;
    this.hs_fileType.notEvaluated = false;
    this.hs_fdStat.notEvaluated = false;
    this.hs_fdType.notEvaluated = false;
    var hs_a25vokh = new $hs.Thunk();
    var hs_a125vokj = new $hs.Thunk();
    var hs_a225vokl = new $hs.Func(2);
    var hs_a325vokC = new $hs.Func(3);
    var hs_a425vokV = new $hs.Func(3);
    var hs_a525volh = new $hs.Func(3);
    var hs_a625volD = new $hs.Func(2);
    var hs_a725volU = new $hs.Func(3);
    var hs_a825vomg = new $hs.Func(2);
    var hs_a925vomx = new $hs.Func(3);
    var hs_a1025vomT = new $hs.Func(3);
    var hs_a1125vonf = new $hs.Func(2);
    var hs_a1225vonw = new $hs.Func(4);
    var hs_a1325vonX = new $hs.Func(3);
    var hs_a1425vooj = new $hs.Func(4);
    var hs_a1525vooK = new $hs.Func(4);
    var hs_a1625vopb = new $hs.Func(4);
    var hs_a1725vopC = new $hs.Func(3);
    var hs_a1825vopY = new $hs.Func(2);
    var hs_a1925voqf = new $hs.Func(4);
    var hs_a2025voqG = new $hs.Func(4);
    var hs_a2125vor7 = new $hs.Func(3);
    var hs_a2225vort = new $hs.Func(2);
    var hs_a2325vorK = new $hs.Func(1);
    var hs_a2425vorW = new $hs.Func(3);
    var hs_a2525vosi = new $hs.Func(4);
    var hs_a2625vosJ = new $hs.Func(4);
    var hs_a2725vota = new $hs.Func(1);
    var hs_a2825votm = new $hs.Func(3);
    var hs_a2925votI = new $hs.Func(3);
    var hs_a3025vou4 = new $hs.Func(2);
    var hs_a3125voul = new $hs.Func(2);
    var hs_a3225vouC = new $hs.Func(3);
    var hs_a3325vouY = new $hs.Func(4);
    var hs_a3425vovp = new $hs.Func(3);
    var hs_a3525vovL = new $hs.Func(4);
    var hs_a3625vowc = new $hs.Func(3);
    var hs_a3725vowy = new $hs.Func(4);
    var hs_a3825voyW = new $hs.Func(2);
    var hs_a3925vozd = new $hs.Func(2);
    var hs_a4025vozu = new $hs.Func(2);
    var hs_a4125vozL = new $hs.Func(2);
    var hs_a4225voA2 = new $hs.Func(2);
    var hs_a4325voFa = new $hs.Func(2);
    var hs_a4425voFr = new $hs.Func(3);
    var hs_a4525voFK = new $hs.Func(2);
    this.hs_withFilePath.evaluateOnce = function () {
        if ($hs.modules.ForeignziCziString.hs_withCString.notEvaluated) {
            return $hs.modules.ForeignziCziString.hs_withCString.hscall();
        } else {
            return $hs.modules.ForeignziCziString.hs_withCString;
        }
    };
    hs_a25vokh.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fdType\x00");
    };
    hs_a125vokj.evaluateOnce = function () {
        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("unknown file type\x00");
    };
    this.hs_ioezuunknownfiletype.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_UnsupportedOperation, hs_a25vokh, hs_a125vokj, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
    hs_a225vokl.evaluate = function (hs_ds26DMQE, hs_eta26DMQJ) {
        var hs_ds126DNm9 = hs_ds26DMQE;
        if (hs_ds26DMQE.notEvaluated) {
            hs_ds126DNm9 = hs_ds26DMQE.hscall();
        }
        var hs_ds226DMQI = hs_ds126DNm9.data[0];
        var hs_wild26DNm8 = [hs_eta26DMQJ, __hscore_get_saved_termios(hs_ds226DMQI)];
        var hs_ds326DMQO = hs_wild26DNm8[0];
        var hs_ds426DMQP = hs_wild26DNm8[1];
        var hs_sat26DNma = new $hs.Data(1);
        hs_sat26DNma.data = [hs_ds426DMQP];
        return [hs_ds326DMQO, hs_sat26DNma];
    };
    this.hs_getzusavedzutermios.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225vokl.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a325vokC.evaluate = function (hs_ds26DMQW, hs_ds126DMQZ, hs_eta26DMR5) {
        var hs_ds226DNmd = hs_ds26DMQW;
        if (hs_ds26DMQW.notEvaluated) {
            hs_ds226DNmd = hs_ds26DMQW.hscall();
        }
        var hs_ds326DMR3 = hs_ds226DNmd.data[0];
        var hs_ds426DNmc = hs_ds126DMQZ;
        if (hs_ds126DMQZ.notEvaluated) {
            hs_ds426DNmc = hs_ds126DMQZ.hscall();
        }
        var hs_ds526DMR4 = hs_ds426DNmc.data[0];
        var hs_wild26DNmb = [hs_eta26DMR5, __hscore_set_saved_termios(hs_ds326DMR3, hs_ds526DMR4)];
        var hs_ds626DMR9 = hs_wild26DNmb[0];
        return [hs_ds626DMR9, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_setzusavedzutermios.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325vokC.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425vokV.evaluate = function (hs_ds26DMRf, hs_ds126DMRi, hs_eta26DMRo) {
        var hs_ds226DNmg = hs_ds26DMRf;
        if (hs_ds26DMRf.notEvaluated) {
            hs_ds226DNmg = hs_ds26DMRf.hscall();
        }
        var hs_ds326DMRm = hs_ds226DNmg.data[0];
        var hs_ds426DNmf = hs_ds126DMRi;
        if (hs_ds126DMRi.notEvaluated) {
            hs_ds426DNmf = hs_ds126DMRi.hscall();
        }
        var hs_ds526DMRn = hs_ds426DNmf.data[0];
        var hs_wild26DNme = [hs_eta26DMRo, access(hs_ds326DMRm, hs_ds526DMRn)];
        var hs_ds626DMRt = hs_wild26DNme[0];
        var hs_ds726DMRu = hs_wild26DNme[1];
        var hs_sat26DNmh = new $hs.Data(1);
        hs_sat26DNmh.data = [hs_ds726DMRu];
        return [hs_ds626DMRt, hs_sat26DNmh];
    };
    this.hs_czuaccess.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a425vokV.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a525volh.evaluate = function (hs_ds26DMRB, hs_ds126DMRE, hs_eta26DMRK) {
        var hs_ds226DNmk = hs_ds26DMRB;
        if (hs_ds26DMRB.notEvaluated) {
            hs_ds226DNmk = hs_ds26DMRB.hscall();
        }
        var hs_ds326DMRI = hs_ds226DNmk.data[0];
        var hs_ds426DNmj = hs_ds126DMRE;
        if (hs_ds126DMRE.notEvaluated) {
            hs_ds426DNmj = hs_ds126DMRE.hscall();
        }
        var hs_ds526DMRJ = hs_ds426DNmj.data[0];
        var hs_wild26DNmi = [hs_eta26DMRK, chmod(hs_ds326DMRI, hs_ds526DMRJ)];
        var hs_ds626DMRP = hs_wild26DNmi[0];
        var hs_ds726DMRQ = hs_wild26DNmi[1];
        var hs_sat26DNml = new $hs.Data(1);
        hs_sat26DNml.data = [hs_ds726DMRQ];
        return [hs_ds626DMRP, hs_sat26DNml];
    };
    this.hs_czuchmod.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525volh.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a625volD.evaluate = function (hs_ds26DMRW, hs_eta26DMS1) {
        var hs_ds126DNmn = hs_ds26DMRW;
        if (hs_ds26DMRW.notEvaluated) {
            hs_ds126DNmn = hs_ds26DMRW.hscall();
        }
        var hs_ds226DMS0 = hs_ds126DNmn.data[0];
        var hs_wild26DNmm = [hs_eta26DMS1, close(hs_ds226DMS0)];
        var hs_ds326DMS6 = hs_wild26DNmm[0];
        var hs_ds426DMS7 = hs_wild26DNmm[1];
        var hs_sat26DNmo = new $hs.Data(1);
        hs_sat26DNmo.data = [hs_ds426DMS7];
        return [hs_ds326DMS6, hs_sat26DNmo];
    };
    this.hs_czuclose.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625volD.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a725volU.evaluate = function (hs_ds26DMSe, hs_ds126DMSh, hs_eta26DMSn) {
        var hs_ds226DNmr = hs_ds26DMSe;
        if (hs_ds26DMSe.notEvaluated) {
            hs_ds226DNmr = hs_ds26DMSe.hscall();
        }
        var hs_ds326DMSl = hs_ds226DNmr.data[0];
        var hs_ds426DNmq = hs_ds126DMSh;
        if (hs_ds126DMSh.notEvaluated) {
            hs_ds426DNmq = hs_ds126DMSh.hscall();
        }
        var hs_ds526DMSm = hs_ds426DNmq.data[0];
        var hs_wild26DNmp = [hs_eta26DMSn, creat(hs_ds326DMSl, hs_ds526DMSm)];
        var hs_ds626DMSs = hs_wild26DNmp[0];
        var hs_ds726DMSt = hs_wild26DNmp[1];
        var hs_sat26DNms = new $hs.Data(1);
        hs_sat26DNms.data = [hs_ds726DMSt];
        return [hs_ds626DMSs, hs_sat26DNms];
    };
    this.hs_czucreat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a725volU.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a825vomg.evaluate = function (hs_ds26DMSz, hs_eta26DMSE) {
        var hs_ds126DNmu = hs_ds26DMSz;
        if (hs_ds26DMSz.notEvaluated) {
            hs_ds126DNmu = hs_ds26DMSz.hscall();
        }
        var hs_ds226DMSD = hs_ds126DNmu.data[0];
        var hs_wild26DNmt = [hs_eta26DMSE, dup(hs_ds226DMSD)];
        var hs_ds326DMSJ = hs_wild26DNmt[0];
        var hs_ds426DMSK = hs_wild26DNmt[1];
        var hs_sat26DNmv = new $hs.Data(1);
        hs_sat26DNmv.data = [hs_ds426DMSK];
        return [hs_ds326DMSJ, hs_sat26DNmv];
    };
    this.hs_czudup.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a825vomg.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a925vomx.evaluate = function (hs_ds26DMSR, hs_ds126DMSU, hs_eta26DMT0) {
        var hs_ds226DNmy = hs_ds26DMSR;
        if (hs_ds26DMSR.notEvaluated) {
            hs_ds226DNmy = hs_ds26DMSR.hscall();
        }
        var hs_ds326DMSY = hs_ds226DNmy.data[0];
        var hs_ds426DNmx = hs_ds126DMSU;
        if (hs_ds126DMSU.notEvaluated) {
            hs_ds426DNmx = hs_ds126DMSU.hscall();
        }
        var hs_ds526DMSZ = hs_ds426DNmx.data[0];
        var hs_wild26DNmw = [hs_eta26DMT0, dup2(hs_ds326DMSY, hs_ds526DMSZ)];
        var hs_ds626DMT5 = hs_wild26DNmw[0];
        var hs_ds726DMT6 = hs_wild26DNmw[1];
        var hs_sat26DNmz = new $hs.Data(1);
        hs_sat26DNmz.data = [hs_ds726DMT6];
        return [hs_ds626DMT5, hs_sat26DNmz];
    };
    this.hs_czudup2.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a925vomx.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1025vomT.evaluate = function (hs_ds26DMTd, hs_ds126DMTg, hs_eta26DMTm) {
        var hs_ds226DNmC = hs_ds26DMTd;
        if (hs_ds26DMTd.notEvaluated) {
            hs_ds226DNmC = hs_ds26DMTd.hscall();
        }
        var hs_ds326DMTk = hs_ds226DNmC.data[0];
        var hs_ds426DNmB = hs_ds126DMTg;
        if (hs_ds126DMTg.notEvaluated) {
            hs_ds426DNmB = hs_ds126DMTg.hscall();
        }
        var hs_ds526DMTl = hs_ds426DNmB.data[0];
        var hs_wild26DNmA = [hs_eta26DMTm, __hscore_fstat(hs_ds326DMTk, hs_ds526DMTl)];
        var hs_ds626DMTr = hs_wild26DNmA[0];
        var hs_ds726DMTs = hs_wild26DNmA[1];
        var hs_sat26DNmD = new $hs.Data(1);
        hs_sat26DNmD.data = [hs_ds726DMTs];
        return [hs_ds626DMTr, hs_sat26DNmD];
    };
    this.hs_czufstat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1025vomT.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1125vonf.evaluate = function (hs_ds26DMTy, hs_eta26DMTD) {
        var hs_ds126DNmF = hs_ds26DMTy;
        if (hs_ds26DMTy.notEvaluated) {
            hs_ds126DNmF = hs_ds26DMTy.hscall();
        }
        var hs_ds226DMTC = hs_ds126DNmF.data[0];
        var hs_wild26DNmE = [hs_eta26DMTD, isatty(hs_ds226DMTC)];
        var hs_ds326DMTI = hs_wild26DNmE[0];
        var hs_ds426DMTJ = hs_wild26DNmE[1];
        var hs_sat26DNmG = new $hs.Data(1);
        hs_sat26DNmG.data = [hs_ds426DMTJ];
        return [hs_ds326DMTI, hs_sat26DNmG];
    };
    this.hs_czuisatty.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1125vonf.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1225vonw.evaluate = function (hs_ds26DMTR, hs_ds126DMTU, hs_ds226DMTX, hs_eta26DMU4) {
        var hs_ds326DNmK = hs_ds26DMTR;
        if (hs_ds26DMTR.notEvaluated) {
            hs_ds326DNmK = hs_ds26DMTR.hscall();
        }
        var hs_ds426DMU1 = hs_ds326DNmK.data[0];
        var hs_ds526DNmJ = hs_ds126DMTU;
        if (hs_ds126DMTU.notEvaluated) {
            hs_ds526DNmJ = hs_ds126DMTU.hscall();
        }
        var hs_ds626DMU2 = hs_ds526DNmJ.data[0];
        var hs_ds726DNmI = hs_ds226DMTX;
        if (hs_ds226DMTX.notEvaluated) {
            hs_ds726DNmI = hs_ds226DMTX.hscall();
        }
        var hs_ds826DMU3 = hs_ds726DNmI.data[0];
        var hs_wild26DNmH = [hs_eta26DMU4, __hscore_lseek(hs_ds426DMU1, hs_ds626DMU2, hs_ds826DMU3)];
        var hs_ds926DMU9 = hs_wild26DNmH[0];
        var hs_ds1026DMUa = hs_wild26DNmH[1];
        var hs_sat26DNmL = new $hs.Data(1);
        hs_sat26DNmL.data = [hs_ds1026DMUa];
        return [hs_ds926DMU9, hs_sat26DNmL];
    };
    this.hs_czulseek.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1225vonw.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1325vonX.evaluate = function (hs_ds26DMUh, hs_ds126DMUk, hs_eta26DMUq) {
        var hs_ds226DNmO = hs_ds26DMUh;
        if (hs_ds26DMUh.notEvaluated) {
            hs_ds226DNmO = hs_ds26DMUh.hscall();
        }
        var hs_ds326DMUo = hs_ds226DNmO.data[0];
        var hs_ds426DNmN = hs_ds126DMUk;
        if (hs_ds126DMUk.notEvaluated) {
            hs_ds426DNmN = hs_ds126DMUk.hscall();
        }
        var hs_ds526DMUp = hs_ds426DNmN.data[0];
        var hs_wild26DNmM = [hs_eta26DMUq, __hscore_lstat(hs_ds326DMUo, hs_ds526DMUp)];
        var hs_ds626DMUv = hs_wild26DNmM[0];
        var hs_ds726DMUw = hs_wild26DNmM[1];
        var hs_sat26DNmP = new $hs.Data(1);
        hs_sat26DNmP.data = [hs_ds726DMUw];
        return [hs_ds626DMUv, hs_sat26DNmP];
    };
    this.hs_lstat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1325vonX.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425vooj.evaluate = function (hs_ds26DMUE, hs_ds126DMUH, hs_ds226DMUK, hs_eta26DMUR) {
        var hs_ds326DNmT = hs_ds26DMUE;
        if (hs_ds26DMUE.notEvaluated) {
            hs_ds326DNmT = hs_ds26DMUE.hscall();
        }
        var hs_ds426DMUO = hs_ds326DNmT.data[0];
        var hs_ds526DNmS = hs_ds126DMUH;
        if (hs_ds126DMUH.notEvaluated) {
            hs_ds526DNmS = hs_ds126DMUH.hscall();
        }
        var hs_ds626DMUP = hs_ds526DNmS.data[0];
        var hs_ds726DNmR = hs_ds226DMUK;
        if (hs_ds226DMUK.notEvaluated) {
            hs_ds726DNmR = hs_ds226DMUK.hscall();
        }
        var hs_ds826DMUQ = hs_ds726DNmR.data[0];
        var hs_wild26DNmQ = [hs_eta26DMUR, __hscore_open(hs_ds426DMUO, hs_ds626DMUP, hs_ds826DMUQ)];
        var hs_ds926DMUW = hs_wild26DNmQ[0];
        var hs_ds1026DMUX = hs_wild26DNmQ[1];
        var hs_sat26DNmU = new $hs.Data(1);
        hs_sat26DNmU.data = [hs_ds1026DMUX];
        return [hs_ds926DMUW, hs_sat26DNmU];
    };
    this.hs_czuopen.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1425vooj.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1525vooK.evaluate = function (hs_ds26DMV5, hs_ds126DMV8, hs_ds226DMVb, hs_eta26DMVi) {
        var hs_ds326DNmY = hs_ds26DMV5;
        if (hs_ds26DMV5.notEvaluated) {
            hs_ds326DNmY = hs_ds26DMV5.hscall();
        }
        var hs_ds426DMVf = hs_ds326DNmY.data[0];
        var hs_ds526DNmX = hs_ds126DMV8;
        if (hs_ds126DMV8.notEvaluated) {
            hs_ds526DNmX = hs_ds126DMV8.hscall();
        }
        var hs_ds626DMVg = hs_ds526DNmX.data[0];
        var hs_ds726DNmW = hs_ds226DMVb;
        if (hs_ds226DMVb.notEvaluated) {
            hs_ds726DNmW = hs_ds226DMVb.hscall();
        }
        var hs_ds826DMVh = hs_ds726DNmW.data[0];
        var hs_wild26DNmV = [hs_eta26DMVi, read(hs_ds426DMVf, hs_ds626DMVg, hs_ds826DMVh)];
        var hs_ds926DMVn = hs_wild26DNmV[0];
        var hs_ds1026DMVo = hs_wild26DNmV[1];
        var hs_sat26DNmZ = new $hs.Data(1);
        hs_sat26DNmZ.data = [hs_ds1026DMVo];
        return [hs_ds926DMVn, hs_sat26DNmZ];
    };
    this.hs_czuread.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1525vooK.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1625vopb.evaluate = function (hs_ds26DMVw, hs_ds126DMVz, hs_ds226DMVC, hs_eta26DMVJ) {
        var hs_ds326DNn3 = hs_ds26DMVw;
        if (hs_ds26DMVw.notEvaluated) {
            hs_ds326DNn3 = hs_ds26DMVw.hscall();
        }
        var hs_ds426DMVG = hs_ds326DNn3.data[0];
        var hs_ds526DNn2 = hs_ds126DMVz;
        if (hs_ds126DMVz.notEvaluated) {
            hs_ds526DNn2 = hs_ds126DMVz.hscall();
        }
        var hs_ds626DMVH = hs_ds526DNn2.data[0];
        var hs_ds726DNn1 = hs_ds226DMVC;
        if (hs_ds226DMVC.notEvaluated) {
            hs_ds726DNn1 = hs_ds226DMVC.hscall();
        }
        var hs_ds826DMVI = hs_ds726DNn1.data[0];
        var hs_wild26DNn0 = [hs_eta26DMVJ, read(hs_ds426DMVG, hs_ds626DMVH, hs_ds826DMVI)];
        var hs_ds926DMVO = hs_wild26DNn0[0];
        var hs_ds1026DMVP = hs_wild26DNn0[1];
        var hs_sat26DNn4 = new $hs.Data(1);
        hs_sat26DNn4.data = [hs_ds1026DMVP];
        return [hs_ds926DMVO, hs_sat26DNn4];
    };
    this.hs_czusafezuread.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1625vopb.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1725vopC.evaluate = function (hs_ds26DMVW, hs_ds126DMVZ, hs_eta26DMW5) {
        var hs_ds226DNn7 = hs_ds26DMVW;
        if (hs_ds26DMVW.notEvaluated) {
            hs_ds226DNn7 = hs_ds26DMVW.hscall();
        }
        var hs_ds326DMW3 = hs_ds226DNn7.data[0];
        var hs_ds426DNn6 = hs_ds126DMVZ;
        if (hs_ds126DMVZ.notEvaluated) {
            hs_ds426DNn6 = hs_ds126DMVZ.hscall();
        }
        var hs_ds526DMW4 = hs_ds426DNn6.data[0];
        var hs_wild26DNn5 = [hs_eta26DMW5, __hscore_stat(hs_ds326DMW3, hs_ds526DMW4)];
        var hs_ds626DMWa = hs_wild26DNn5[0];
        var hs_ds726DMWb = hs_wild26DNn5[1];
        var hs_sat26DNn8 = new $hs.Data(1);
        hs_sat26DNn8.data = [hs_ds726DMWb];
        return [hs_ds626DMWa, hs_sat26DNn8];
    };
    this.hs_czustat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1725vopC.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1825vopY.evaluate = function (hs_ds26DMWh, hs_eta26DMWm) {
        var hs_ds126DNna = hs_ds26DMWh;
        if (hs_ds26DMWh.notEvaluated) {
            hs_ds126DNna = hs_ds26DMWh.hscall();
        }
        var hs_ds226DMWl = hs_ds126DNna.data[0];
        var hs_wild26DNn9 = [hs_eta26DMWm, umask(hs_ds226DMWl)];
        var hs_ds326DMWr = hs_wild26DNn9[0];
        var hs_ds426DMWs = hs_wild26DNn9[1];
        var hs_sat26DNnb = new $hs.Data(1);
        hs_sat26DNnb.data = [hs_ds426DMWs];
        return [hs_ds326DMWr, hs_sat26DNnb];
    };
    this.hs_czuumask.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1825vopY.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1925voqf.evaluate = function (hs_ds26DMWA, hs_ds126DMWD, hs_ds226DMWG, hs_eta26DMWN) {
        var hs_ds326DNnf = hs_ds26DMWA;
        if (hs_ds26DMWA.notEvaluated) {
            hs_ds326DNnf = hs_ds26DMWA.hscall();
        }
        var hs_ds426DMWK = hs_ds326DNnf.data[0];
        var hs_ds526DNne = hs_ds126DMWD;
        if (hs_ds126DMWD.notEvaluated) {
            hs_ds526DNne = hs_ds126DMWD.hscall();
        }
        var hs_ds626DMWL = hs_ds526DNne.data[0];
        var hs_ds726DNnd = hs_ds226DMWG;
        if (hs_ds226DMWG.notEvaluated) {
            hs_ds726DNnd = hs_ds226DMWG.hscall();
        }
        var hs_ds826DMWM = hs_ds726DNnd.data[0];
        var hs_wild26DNnc = [hs_eta26DMWN, write(hs_ds426DMWK, hs_ds626DMWL, hs_ds826DMWM)];
        var hs_ds926DMWS = hs_wild26DNnc[0];
        var hs_ds1026DMWT = hs_wild26DNnc[1];
        var hs_sat26DNng = new $hs.Data(1);
        hs_sat26DNng.data = [hs_ds1026DMWT];
        return [hs_ds926DMWS, hs_sat26DNng];
    };
    this.hs_czuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1925voqf.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2025voqG.evaluate = function (hs_ds26DMX1, hs_ds126DMX4, hs_ds226DMX7, hs_eta26DMXe) {
        var hs_ds326DNnk = hs_ds26DMX1;
        if (hs_ds26DMX1.notEvaluated) {
            hs_ds326DNnk = hs_ds26DMX1.hscall();
        }
        var hs_ds426DMXb = hs_ds326DNnk.data[0];
        var hs_ds526DNnj = hs_ds126DMX4;
        if (hs_ds126DMX4.notEvaluated) {
            hs_ds526DNnj = hs_ds126DMX4.hscall();
        }
        var hs_ds626DMXc = hs_ds526DNnj.data[0];
        var hs_ds726DNni = hs_ds226DMX7;
        if (hs_ds226DMX7.notEvaluated) {
            hs_ds726DNni = hs_ds226DMX7.hscall();
        }
        var hs_ds826DMXd = hs_ds726DNni.data[0];
        var hs_wild26DNnh = [hs_eta26DMXe, write(hs_ds426DMXb, hs_ds626DMXc, hs_ds826DMXd)];
        var hs_ds926DMXj = hs_wild26DNnh[0];
        var hs_ds1026DMXk = hs_wild26DNnh[1];
        var hs_sat26DNnl = new $hs.Data(1);
        hs_sat26DNnl.data = [hs_ds1026DMXk];
        return [hs_ds926DMXj, hs_sat26DNnl];
    };
    this.hs_czusafezuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2025voqG.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2125vor7.evaluate = function (hs_ds26DMXr, hs_ds126DMXu, hs_eta26DMXA) {
        var hs_ds226DNno = hs_ds26DMXr;
        if (hs_ds26DMXr.notEvaluated) {
            hs_ds226DNno = hs_ds26DMXr.hscall();
        }
        var hs_ds326DMXy = hs_ds226DNno.data[0];
        var hs_ds426DNnn = hs_ds126DMXu;
        if (hs_ds126DMXu.notEvaluated) {
            hs_ds426DNnn = hs_ds126DMXu.hscall();
        }
        var hs_ds526DMXz = hs_ds426DNnn.data[0];
        var hs_wild26DNnm = [hs_eta26DMXA, __hscore_ftruncate(hs_ds326DMXy, hs_ds526DMXz)];
        var hs_ds626DMXF = hs_wild26DNnm[0];
        var hs_ds726DMXG = hs_wild26DNnm[1];
        var hs_sat26DNnp = new $hs.Data(1);
        hs_sat26DNnp.data = [hs_ds726DMXG];
        return [hs_ds626DMXF, hs_sat26DNnp];
    };
    this.hs_czuftruncate.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2125vor7.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2225vort.evaluate = function (hs_ds26DMXM, hs_eta26DMXR) {
        var hs_ds126DNnr = hs_ds26DMXM;
        if (hs_ds26DMXM.notEvaluated) {
            hs_ds126DNnr = hs_ds26DMXM.hscall();
        }
        var hs_ds226DMXQ = hs_ds126DNnr.data[0];
        var hs_wild26DNnq = [hs_eta26DMXR, unlink(hs_ds226DMXQ)];
        var hs_ds326DMXW = hs_wild26DNnq[0];
        var hs_ds426DMXX = hs_wild26DNnq[1];
        var hs_sat26DNns = new $hs.Data(1);
        hs_sat26DNns.data = [hs_ds426DMXX];
        return [hs_ds326DMXW, hs_sat26DNns];
    };
    this.hs_czuunlink.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2225vort.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2325vorK.evaluate = function (hs_ds26DMY3) {
        var hs_wild26DNnt = [hs_ds26DMY3, getpid()];
        var hs_ds126DMY8 = hs_wild26DNnt[0];
        var hs_ds226DMY9 = hs_wild26DNnt[1];
        var hs_sat26DNnu = new $hs.Data(1);
        hs_sat26DNnu.data = [hs_ds226DMY9];
        return [hs_ds126DMY8, hs_sat26DNnu];
    };
    this.hs_czugetpid.evaluate = function (hs_eta1cW6l3) {
        return hs_a2325vorK.hscall(hs_eta1cW6l3);
    };
    hs_a2425vorW.evaluate = function (hs_ds26DMYg, hs_ds126DMYj, hs_eta26DMYp) {
        var hs_ds226DNnx = hs_ds26DMYg;
        if (hs_ds26DMYg.notEvaluated) {
            hs_ds226DNnx = hs_ds26DMYg.hscall();
        }
        var hs_ds326DMYn = hs_ds226DNnx.data[0];
        var hs_ds426DNnw = hs_ds126DMYj;
        if (hs_ds126DMYj.notEvaluated) {
            hs_ds426DNnw = hs_ds126DMYj.hscall();
        }
        var hs_ds526DMYo = hs_ds426DNnw.data[0];
        var hs_wild26DNnv = [hs_eta26DMYp, fcntl_read(hs_ds326DMYn, hs_ds526DMYo)];
        var hs_ds626DMYu = hs_wild26DNnv[0];
        var hs_ds726DMYv = hs_wild26DNnv[1];
        var hs_sat26DNny = new $hs.Data(1);
        hs_sat26DNny.data = [hs_ds726DMYv];
        return [hs_ds626DMYu, hs_sat26DNny];
    };
    this.hs_czufcntlzuread.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2425vorW.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2525vosi.evaluate = function (hs_ds26DMYD, hs_ds126DMYG, hs_ds226DMYJ, hs_eta26DMYQ) {
        var hs_ds326DNnC = hs_ds26DMYD;
        if (hs_ds26DMYD.notEvaluated) {
            hs_ds326DNnC = hs_ds26DMYD.hscall();
        }
        var hs_ds426DMYN = hs_ds326DNnC.data[0];
        var hs_ds526DNnB = hs_ds126DMYG;
        if (hs_ds126DMYG.notEvaluated) {
            hs_ds526DNnB = hs_ds126DMYG.hscall();
        }
        var hs_ds626DMYO = hs_ds526DNnB.data[0];
        var hs_ds726DNnA = hs_ds226DMYJ;
        if (hs_ds226DMYJ.notEvaluated) {
            hs_ds726DNnA = hs_ds226DMYJ.hscall();
        }
        var hs_ds826DMYP = hs_ds726DNnA.data[0];
        var hs_wild26DNnz = [hs_eta26DMYQ, fcntl_write(hs_ds426DMYN, hs_ds626DMYO, hs_ds826DMYP)];
        var hs_ds926DMYV = hs_wild26DNnz[0];
        var hs_ds1026DMYW = hs_wild26DNnz[1];
        var hs_sat26DNnD = new $hs.Data(1);
        hs_sat26DNnD.data = [hs_ds1026DMYW];
        return [hs_ds926DMYV, hs_sat26DNnD];
    };
    this.hs_czufcntlzuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2525vosi.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2625vosJ.evaluate = function (hs_ds26DMZ4, hs_ds126DMZ7, hs_ds226DMZa, hs_eta26DMZh) {
        var hs_ds326DNnH = hs_ds26DMZ4;
        if (hs_ds26DMZ4.notEvaluated) {
            hs_ds326DNnH = hs_ds26DMZ4.hscall();
        }
        var hs_ds426DMZe = hs_ds326DNnH.data[0];
        var hs_ds526DNnG = hs_ds126DMZ7;
        if (hs_ds126DMZ7.notEvaluated) {
            hs_ds526DNnG = hs_ds126DMZ7.hscall();
        }
        var hs_ds626DMZf = hs_ds526DNnG.data[0];
        var hs_ds726DNnF = hs_ds226DMZa;
        if (hs_ds226DMZa.notEvaluated) {
            hs_ds726DNnF = hs_ds226DMZa.hscall();
        }
        var hs_ds826DMZg = hs_ds726DNnF.data[0];
        var hs_wild26DNnE = [hs_eta26DMZh, fcntl_lock(hs_ds426DMZe, hs_ds626DMZf, hs_ds826DMZg)];
        var hs_ds926DMZm = hs_wild26DNnE[0];
        var hs_ds1026DMZn = hs_wild26DNnE[1];
        var hs_sat26DNnI = new $hs.Data(1);
        hs_sat26DNnI.data = [hs_ds1026DMZn];
        return [hs_ds926DMZm, hs_sat26DNnI];
    };
    this.hs_czufcntlzulock.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2625vosJ.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2725vota.evaluate = function (hs_ds26DMZt) {
        var hs_wild26DNnJ = [hs_ds26DMZt, fork()];
        var hs_ds126DMZy = hs_wild26DNnJ[0];
        var hs_ds226DMZz = hs_wild26DNnJ[1];
        var hs_sat26DNnK = new $hs.Data(1);
        hs_sat26DNnK.data = [hs_ds226DMZz];
        return [hs_ds126DMZy, hs_sat26DNnK];
    };
    this.hs_czufork.evaluate = function (hs_eta1cW6l3) {
        return hs_a2725vota.hscall(hs_eta1cW6l3);
    };
    hs_a2825votm.evaluate = function (hs_ds26DMZG, hs_ds126DMZJ, hs_eta26DMZP) {
        var hs_ds226DNnN = hs_ds26DMZG;
        if (hs_ds26DMZG.notEvaluated) {
            hs_ds226DNnN = hs_ds26DMZG.hscall();
        }
        var hs_ds326DMZN = hs_ds226DNnN.data[0];
        var hs_ds426DNnM = hs_ds126DMZJ;
        if (hs_ds126DMZJ.notEvaluated) {
            hs_ds426DNnM = hs_ds126DMZJ.hscall();
        }
        var hs_ds526DMZO = hs_ds426DNnM.data[0];
        var hs_wild26DNnL = [hs_eta26DMZP, link(hs_ds326DMZN, hs_ds526DMZO)];
        var hs_ds626DMZU = hs_wild26DNnL[0];
        var hs_ds726DMZV = hs_wild26DNnL[1];
        var hs_sat26DNnO = new $hs.Data(1);
        hs_sat26DNnO.data = [hs_ds726DMZV];
        return [hs_ds626DMZU, hs_sat26DNnO];
    };
    this.hs_czulink.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2825votm.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2925votI.evaluate = function (hs_ds26DN02, hs_ds126DN05, hs_eta26DN0b) {
        var hs_ds226DNnR = hs_ds26DN02;
        if (hs_ds26DN02.notEvaluated) {
            hs_ds226DNnR = hs_ds26DN02.hscall();
        }
        var hs_ds326DN09 = hs_ds226DNnR.data[0];
        var hs_ds426DNnQ = hs_ds126DN05;
        if (hs_ds126DN05.notEvaluated) {
            hs_ds426DNnQ = hs_ds126DN05.hscall();
        }
        var hs_ds526DN0a = hs_ds426DNnQ.data[0];
        var hs_wild26DNnP = [hs_eta26DN0b, mkfifo(hs_ds326DN09, hs_ds526DN0a)];
        var hs_ds626DN0g = hs_wild26DNnP[0];
        var hs_ds726DN0h = hs_wild26DNnP[1];
        var hs_sat26DNnS = new $hs.Data(1);
        hs_sat26DNnS.data = [hs_ds726DN0h];
        return [hs_ds626DN0g, hs_sat26DNnS];
    };
    this.hs_czumkfifo.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2925votI.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3025vou4.evaluate = function (hs_ds26DN0n, hs_eta26DN0s) {
        var hs_ds126DNnU = hs_ds26DN0n;
        if (hs_ds26DN0n.notEvaluated) {
            hs_ds126DNnU = hs_ds26DN0n.hscall();
        }
        var hs_ds226DN0r = hs_ds126DNnU.data[0];
        var hs_wild26DNnT = [hs_eta26DN0s, pipe(hs_ds226DN0r)];
        var hs_ds326DN0x = hs_wild26DNnT[0];
        var hs_ds426DN0y = hs_wild26DNnT[1];
        var hs_sat26DNnV = new $hs.Data(1);
        hs_sat26DNnV.data = [hs_ds426DN0y];
        return [hs_ds326DN0x, hs_sat26DNnV];
    };
    this.hs_czupipe.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3025vou4.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3125voul.evaluate = function (hs_ds26DN0E, hs_eta26DN0J) {
        var hs_ds126DNnX = hs_ds26DN0E;
        if (hs_ds26DN0E.notEvaluated) {
            hs_ds126DNnX = hs_ds26DN0E.hscall();
        }
        var hs_ds226DN0I = hs_ds126DNnX.data[0];
        var hs_wild26DNnW = [hs_eta26DN0J, __hscore_sigemptyset(hs_ds226DN0I)];
        var hs_ds326DN0O = hs_wild26DNnW[0];
        var hs_ds426DN0P = hs_wild26DNnW[1];
        var hs_sat26DNnY = new $hs.Data(1);
        hs_sat26DNnY.data = [hs_ds426DN0P];
        return [hs_ds326DN0O, hs_sat26DNnY];
    };
    this.hs_czusigemptyset.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3125voul.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3225vouC.evaluate = function (hs_ds26DN0W, hs_ds126DN0Z, hs_eta26DN15) {
        var hs_ds226DNo1 = hs_ds26DN0W;
        if (hs_ds26DN0W.notEvaluated) {
            hs_ds226DNo1 = hs_ds26DN0W.hscall();
        }
        var hs_ds326DN13 = hs_ds226DNo1.data[0];
        var hs_ds426DNo0 = hs_ds126DN0Z;
        if (hs_ds126DN0Z.notEvaluated) {
            hs_ds426DNo0 = hs_ds126DN0Z.hscall();
        }
        var hs_ds526DN14 = hs_ds426DNo0.data[0];
        var hs_wild26DNnZ = [hs_eta26DN15, __hscore_sigaddset(hs_ds326DN13, hs_ds526DN14)];
        var hs_ds626DN1a = hs_wild26DNnZ[0];
        var hs_ds726DN1b = hs_wild26DNnZ[1];
        var hs_sat26DNo2 = new $hs.Data(1);
        hs_sat26DNo2.data = [hs_ds726DN1b];
        return [hs_ds626DN1a, hs_sat26DNo2];
    };
    this.hs_czusigaddset.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3225vouC.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3325vouY.evaluate = function (hs_ds26DN1j, hs_ds126DN1m, hs_ds226DN1p, hs_eta26DN1w) {
        var hs_ds326DNo6 = hs_ds26DN1j;
        if (hs_ds26DN1j.notEvaluated) {
            hs_ds326DNo6 = hs_ds26DN1j.hscall();
        }
        var hs_ds426DN1t = hs_ds326DNo6.data[0];
        var hs_ds526DNo5 = hs_ds126DN1m;
        if (hs_ds126DN1m.notEvaluated) {
            hs_ds526DNo5 = hs_ds126DN1m.hscall();
        }
        var hs_ds626DN1u = hs_ds526DNo5.data[0];
        var hs_ds726DNo4 = hs_ds226DN1p;
        if (hs_ds226DN1p.notEvaluated) {
            hs_ds726DNo4 = hs_ds226DN1p.hscall();
        }
        var hs_ds826DN1v = hs_ds726DNo4.data[0];
        var hs_wild26DNo3 = [hs_eta26DN1w, sigprocmask(hs_ds426DN1t, hs_ds626DN1u, hs_ds826DN1v)];
        var hs_ds926DN1B = hs_wild26DNo3[0];
        var hs_ds1026DN1C = hs_wild26DNo3[1];
        var hs_sat26DNo7 = new $hs.Data(1);
        hs_sat26DNo7.data = [hs_ds1026DN1C];
        return [hs_ds926DN1B, hs_sat26DNo7];
    };
    this.hs_czusigprocmask.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3325vouY.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3425vovp.evaluate = function (hs_ds26DN1J, hs_ds126DN1M, hs_eta26DN1S) {
        var hs_ds226DNoa = hs_ds26DN1J;
        if (hs_ds26DN1J.notEvaluated) {
            hs_ds226DNoa = hs_ds26DN1J.hscall();
        }
        var hs_ds326DN1Q = hs_ds226DNoa.data[0];
        var hs_ds426DNo9 = hs_ds126DN1M;
        if (hs_ds126DN1M.notEvaluated) {
            hs_ds426DNo9 = hs_ds126DN1M.hscall();
        }
        var hs_ds526DN1R = hs_ds426DNo9.data[0];
        var hs_wild26DNo8 = [hs_eta26DN1S, tcgetattr(hs_ds326DN1Q, hs_ds526DN1R)];
        var hs_ds626DN1X = hs_wild26DNo8[0];
        var hs_ds726DN1Y = hs_wild26DNo8[1];
        var hs_sat26DNob = new $hs.Data(1);
        hs_sat26DNob.data = [hs_ds726DN1Y];
        return [hs_ds626DN1X, hs_sat26DNob];
    };
    this.hs_czutcgetattr.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3425vovp.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3525vovL.evaluate = function (hs_ds26DN26, hs_ds126DN29, hs_ds226DN2c, hs_eta26DN2j) {
        var hs_ds326DNof = hs_ds26DN26;
        if (hs_ds26DN26.notEvaluated) {
            hs_ds326DNof = hs_ds26DN26.hscall();
        }
        var hs_ds426DN2g = hs_ds326DNof.data[0];
        var hs_ds526DNoe = hs_ds126DN29;
        if (hs_ds126DN29.notEvaluated) {
            hs_ds526DNoe = hs_ds126DN29.hscall();
        }
        var hs_ds626DN2h = hs_ds526DNoe.data[0];
        var hs_ds726DNod = hs_ds226DN2c;
        if (hs_ds226DN2c.notEvaluated) {
            hs_ds726DNod = hs_ds226DN2c.hscall();
        }
        var hs_ds826DN2i = hs_ds726DNod.data[0];
        var hs_wild26DNoc = [hs_eta26DN2j, tcsetattr(hs_ds426DN2g, hs_ds626DN2h, hs_ds826DN2i)];
        var hs_ds926DN2o = hs_wild26DNoc[0];
        var hs_ds1026DN2p = hs_wild26DNoc[1];
        var hs_sat26DNog = new $hs.Data(1);
        hs_sat26DNog.data = [hs_ds1026DN2p];
        return [hs_ds926DN2o, hs_sat26DNog];
    };
    this.hs_czutcsetattr.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3525vovL.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3625vowc.evaluate = function (hs_ds26DN2w, hs_ds126DN2z, hs_eta26DN2F) {
        var hs_ds226DNoj = hs_ds26DN2w;
        if (hs_ds26DN2w.notEvaluated) {
            hs_ds226DNoj = hs_ds26DN2w.hscall();
        }
        var hs_ds326DN2D = hs_ds226DNoj.data[0];
        var hs_ds426DNoi = hs_ds126DN2z;
        if (hs_ds126DN2z.notEvaluated) {
            hs_ds426DNoi = hs_ds126DN2z.hscall();
        }
        var hs_ds526DN2E = hs_ds426DNoi.data[0];
        var hs_wild26DNoh = [hs_eta26DN2F, __hscore_utime(hs_ds326DN2D, hs_ds526DN2E)];
        var hs_ds626DN2K = hs_wild26DNoh[0];
        var hs_ds726DN2L = hs_wild26DNoh[1];
        var hs_sat26DNok = new $hs.Data(1);
        hs_sat26DNok.data = [hs_ds726DN2L];
        return [hs_ds626DN2K, hs_sat26DNok];
    };
    this.hs_czuutime.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3625vowc.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3725vowy.evaluate = function (hs_ds26DN2T, hs_ds126DN2W, hs_ds226DN2Z, hs_eta26DN36) {
        var hs_ds326DNoo = hs_ds26DN2T;
        if (hs_ds26DN2T.notEvaluated) {
            hs_ds326DNoo = hs_ds26DN2T.hscall();
        }
        var hs_ds426DN33 = hs_ds326DNoo.data[0];
        var hs_ds526DNon = hs_ds126DN2W;
        if (hs_ds126DN2W.notEvaluated) {
            hs_ds526DNon = hs_ds126DN2W.hscall();
        }
        var hs_ds626DN34 = hs_ds526DNon.data[0];
        var hs_ds726DNom = hs_ds226DN2Z;
        if (hs_ds226DN2Z.notEvaluated) {
            hs_ds726DNom = hs_ds226DN2Z.hscall();
        }
        var hs_ds826DN35 = hs_ds726DNom.data[0];
        var hs_wild26DNol = [hs_eta26DN36, waitpid(hs_ds426DN33, hs_ds626DN34, hs_ds826DN35)];
        var hs_ds926DN3b = hs_wild26DNol[0];
        var hs_ds1026DN3c = hs_wild26DNol[1];
        var hs_sat26DNop = new $hs.Data(1);
        hs_sat26DNop.data = [hs_ds1026DN3c];
        return [hs_ds926DN3b, hs_sat26DNop];
    };
    this.hs_czuwaitpid.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3725vowy.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_ozuRDONLY.evaluateOnce = function () {
        var hs_wild26DNor = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_rdonly()];
        var hs_ds126DN3j = hs_wild26DNor[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3j];
        return $res;
    };
    this.hs_ozuWRONLY.evaluateOnce = function () {
        var hs_wild26DNot = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_wronly()];
        var hs_ds126DN3p = hs_wild26DNot[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3p];
        return $res;
    };
    this.hs_ozuRDWR.evaluateOnce = function () {
        var hs_wild26DNov = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_rdwr()];
        var hs_ds126DN3v = hs_wild26DNov[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3v];
        return $res;
    };
    this.hs_ozuAPPEND.evaluateOnce = function () {
        var hs_wild26DNox = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_append()];
        var hs_ds126DN3B = hs_wild26DNox[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3B];
        return $res;
    };
    this.hs_ozuCREAT.evaluateOnce = function () {
        var hs_wild26DNoz = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_creat()];
        var hs_ds126DN3H = hs_wild26DNoz[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3H];
        return $res;
    };
    this.hs_ozuEXCL.evaluateOnce = function () {
        var hs_wild26DNoB = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_excl()];
        var hs_ds126DN3N = hs_wild26DNoB[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3N];
        return $res;
    };
    this.hs_ozuTRUNC.evaluateOnce = function () {
        var hs_wild26DNoD = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_trunc()];
        var hs_ds126DN3T = hs_wild26DNoD[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3T];
        return $res;
    };
    this.hs_ozuNOCTTY.evaluateOnce = function () {
        var hs_wild26DNoF = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_noctty()];
        var hs_ds126DN3Z = hs_wild26DNoF[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN3Z];
        return $res;
    };
    this.hs_ozuNONBLOCK.evaluateOnce = function () {
        var hs_wild26DNoH = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_nonblock()];
        var hs_ds126DN45 = hs_wild26DNoH[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN45];
        return $res;
    };
    this.hs_ozuBINARY.evaluateOnce = function () {
        var hs_wild26DNoJ = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_binary()];
        var hs_ds126DN4b = hs_wild26DNoJ[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN4b];
        return $res;
    };
    this.hs_czuszuisreg.evaluate = function (hs_ds26DN4d) {
        var hs_ds126DNoM = hs_ds26DN4d;
        if (hs_ds26DN4d.notEvaluated) {
            hs_ds126DNoM = hs_ds26DN4d.hscall();
        }
        var hs_ds226DN4h = hs_ds126DNoM.data[0];
        var hs_wild26DNoL = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isreg(hs_ds226DN4h)];
        var hs_ds426DN4m = hs_wild26DNoL[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DN4m];
        return $res;
    };
    this.hs_czuszuischr.evaluate = function (hs_ds26DN4o) {
        var hs_ds126DNoP = hs_ds26DN4o;
        if (hs_ds26DN4o.notEvaluated) {
            hs_ds126DNoP = hs_ds26DN4o.hscall();
        }
        var hs_ds226DN4s = hs_ds126DNoP.data[0];
        var hs_wild26DNoO = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_ischr(hs_ds226DN4s)];
        var hs_ds426DN4x = hs_wild26DNoO[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DN4x];
        return $res;
    };
    this.hs_czuszuisblk.evaluate = function (hs_ds26DN4z) {
        var hs_ds126DNoS = hs_ds26DN4z;
        if (hs_ds26DN4z.notEvaluated) {
            hs_ds126DNoS = hs_ds26DN4z.hscall();
        }
        var hs_ds226DN4D = hs_ds126DNoS.data[0];
        var hs_wild26DNoR = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isblk(hs_ds226DN4D)];
        var hs_ds426DN4I = hs_wild26DNoR[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DN4I];
        return $res;
    };
    this.hs_czuszuisdir.evaluate = function (hs_ds26DN4K) {
        var hs_ds126DNoV = hs_ds26DN4K;
        if (hs_ds26DN4K.notEvaluated) {
            hs_ds126DNoV = hs_ds26DN4K.hscall();
        }
        var hs_ds226DN4O = hs_ds126DNoV.data[0];
        var hs_wild26DNoU = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isdir(hs_ds226DN4O)];
        var hs_ds426DN4T = hs_wild26DNoU[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DN4T];
        return $res;
    };
    this.hs_czuszuisfifo.evaluate = function (hs_ds26DN4V) {
        var hs_ds126DNoY = hs_ds26DN4V;
        if (hs_ds26DN4V.notEvaluated) {
            hs_ds126DNoY = hs_ds26DN4V.hscall();
        }
        var hs_ds226DN4Z = hs_ds126DNoY.data[0];
        var hs_wild26DNoX = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isfifo(hs_ds226DN4Z)];
        var hs_ds426DN54 = hs_wild26DNoX[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DN54];
        return $res;
    };
    this.hs_sizzeofzustat.evaluateOnce = function () {
        var hs_wild26DNp0 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_stat()];
        var hs_ds126DN5a = hs_wild26DNp0[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN5a];
        return $res;
    };
    hs_a3825voyW.evaluate = function (hs_ds26DN5f, hs_eta26DN5k) {
        var hs_ds126DNp2 = hs_ds26DN5f;
        if (hs_ds26DN5f.notEvaluated) {
            hs_ds126DNp2 = hs_ds26DN5f.hscall();
        }
        var hs_ds226DN5j = hs_ds126DNp2.data[0];
        var hs_wild26DNp1 = [hs_eta26DN5k, __hscore_st_mtime(hs_ds226DN5j)];
        var hs_ds326DN5p = hs_wild26DNp1[0];
        var hs_ds426DN5q = hs_wild26DNp1[1];
        var hs_sat26DNp3 = new $hs.Data(1);
        hs_sat26DNp3.data = [hs_ds426DN5q];
        return [hs_ds326DN5p, hs_sat26DNp3];
    };
    this.hs_stzumtime.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3825voyW.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3925vozd.evaluate = function (hs_ds26DN5w, hs_eta26DN5B) {
        var hs_ds126DNp5 = hs_ds26DN5w;
        if (hs_ds26DN5w.notEvaluated) {
            hs_ds126DNp5 = hs_ds26DN5w.hscall();
        }
        var hs_ds226DN5A = hs_ds126DNp5.data[0];
        var hs_wild26DNp4 = [hs_eta26DN5B, __hscore_st_si=(hs_ds226DN5A)];
        var hs_ds326DN5G = hs_wild26DNp4[0];
        var hs_ds426DN5H = hs_wild26DNp4[1];
        var hs_sat26DNp6 = new $hs.Data(1);
        hs_sat26DNp6.data = [hs_ds426DN5H];
        return [hs_ds326DN5G, hs_sat26DNp6];
    };
    this.hs_stzusizze.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3925vozd.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4025vozu.evaluate = function (hs_ds26DN5N, hs_eta26DN5S) {
        var hs_ds126DNp8 = hs_ds26DN5N;
        if (hs_ds26DN5N.notEvaluated) {
            hs_ds126DNp8 = hs_ds26DN5N.hscall();
        }
        var hs_ds226DN5R = hs_ds126DNp8.data[0];
        var hs_wild26DNp7 = [hs_eta26DN5S, __hscore_st_mode(hs_ds226DN5R)];
        var hs_ds326DN5X = hs_wild26DNp7[0];
        var hs_ds426DN5Y = hs_wild26DNp7[1];
        var hs_sat26DNp9 = new $hs.Data(1);
        hs_sat26DNp9.data = [hs_ds426DN5Y];
        return [hs_ds326DN5X, hs_sat26DNp9];
    };
    this.hs_stzumode.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4025vozu.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4125vozL.evaluate = function (hs_ds26DN64, hs_eta26DN69) {
        var hs_ds126DNpb = hs_ds26DN64;
        if (hs_ds26DN64.notEvaluated) {
            hs_ds126DNpb = hs_ds26DN64.hscall();
        }
        var hs_ds226DN68 = hs_ds126DNpb.data[0];
        var hs_wild26DNpa = [hs_eta26DN69, __hscore_st_dev(hs_ds226DN68)];
        var hs_ds326DN6e = hs_wild26DNpa[0];
        var hs_ds426DN6f = hs_wild26DNpa[1];
        var hs_sat26DNpc = new $hs.Data(1);
        hs_sat26DNpc.data = [hs_ds426DN6f];
        return [hs_ds326DN6e, hs_sat26DNpc];
    };
    this.hs_stzudev.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4125vozL.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4225voA2.evaluate = function (hs_ds26DN6l, hs_eta26DN6q) {
        var hs_ds126DNpe = hs_ds26DN6l;
        if (hs_ds26DN6l.notEvaluated) {
            hs_ds126DNpe = hs_ds26DN6l.hscall();
        }
        var hs_ds226DN6p = hs_ds126DNpe.data[0];
        var hs_wild26DNpd = [hs_eta26DN6q, __hscore_st_ino(hs_ds226DN6p)];
        var hs_ds326DN6v = hs_wild26DNpd[0];
        var hs_ds426DN6w = hs_wild26DNpd[1];
        var hs_sat26DNpf = new $hs.Data(1);
        hs_sat26DNpf.data = [hs_ds426DN6w];
        return [hs_ds326DN6v, hs_sat26DNpf];
    };
    this.hs_stzuino.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4225voA2.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_constzuecho.evaluateOnce = function () {
        var hs_wild26DNph = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_echo()];
        var hs_ds126DN6D = hs_wild26DNph[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN6D];
        return $res;
    };
    this.hs_constzutcsanow.evaluateOnce = function () {
        var hs_wild26DNpj = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_tcsanow()];
        var hs_ds126DN6J = hs_wild26DNpj[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN6J];
        return $res;
    };
    this.hs_constzuicanon.evaluateOnce = function () {
        var hs_wild26DNpl = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_icanon()];
        var hs_ds126DN6P = hs_wild26DNpl[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN6P];
        return $res;
    };
    this.hs_constzuvmin.evaluateOnce = function () {
        var hs_wild26DNpn = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_vmin()];
        var hs_ds126DN6V = hs_wild26DNpn[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN6V];
        return $res;
    };
    this.hs_constzuvtime.evaluateOnce = function () {
        var hs_wild26DNpp = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_vtime()];
        var hs_ds126DN71 = hs_wild26DNpp[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN71];
        return $res;
    };
    this.hs_constzusigttou.evaluateOnce = function () {
        var hs_wild26DNpr = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sigttou()];
        var hs_ds126DN77 = hs_wild26DNpr[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN77];
        return $res;
    };
    this.hs_constzusigzublock.evaluateOnce = function () {
        var hs_wild26DNpt = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_block()];
        var hs_ds126DN7d = hs_wild26DNpt[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7d];
        return $res;
    };
    this.hs_constzusigzusetmask.evaluateOnce = function () {
        var hs_wild26DNpv = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_setmask()];
        var hs_ds126DN7j = hs_wild26DNpv[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7j];
        return $res;
    };
    this.hs_constzufzugetfl.evaluateOnce = function () {
        var hs_wild26DNpx = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_getfl()];
        var hs_ds126DN7p = hs_wild26DNpx[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7p];
        return $res;
    };
    this.hs_constzufzusetfl.evaluateOnce = function () {
        var hs_wild26DNpz = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_setfl()];
        var hs_ds126DN7v = hs_wild26DNpz[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7v];
        return $res;
    };
    this.hs_constzufzusetfd.evaluateOnce = function () {
        var hs_wild26DNpB = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_setfd()];
        var hs_ds126DN7B = hs_wild26DNpB[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7B];
        return $res;
    };
    this.hs_constzufdzucloexec.evaluateOnce = function () {
        var hs_wild26DNpD = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_fd_cloexec()];
        var hs_ds126DN7H = hs_wild26DNpD[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7H];
        return $res;
    };
    this.hs_sizzeofzutermios.evaluateOnce = function () {
        var hs_wild26DNpF = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_termios()];
        var hs_ds126DN7N = hs_wild26DNpF[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7N];
        return $res;
    };
    this.hs_sizzeofzusigsetzut.evaluateOnce = function () {
        var hs_wild26DNpH = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_sigset_t()];
        var hs_ds126DN7T = hs_wild26DNpH[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DN7T];
        return $res;
    };
    this.hs_tcSetAttr.evaluate = function (hs_fd26DN7Z, hs_fun26DNai) {
        var hs_sat26DNrf = new $hs.Func(1);
        hs_sat26DNrf.evaluate = function (hs_pzutios26DN82) {
            var hs_sat26DNr9 = new $hs.Thunk();
            hs_sat26DNr9.evaluateOnce = function () {
                var hs_sat26DNqL = new $hs.Thunk();
                hs_sat26DNqL.evaluateOnce = function () {
                    var hs_sat26DNqG = new $hs.Func(1);
                    hs_sat26DNqG.evaluate = function (hs_pzusigset26DN9b) {
                        var hs_sat26DNqE = new $hs.Func(1);
                        hs_sat26DNqE.evaluate = function (hs_pzuoldzusigset26DN9Z) {
                            var hs_sat26DNqx = new $hs.Thunk();
                            hs_sat26DNqx.evaluateOnce = function () {
                                var hs_sat26DNqo = new $hs.Thunk();
                                hs_sat26DNqo.evaluateOnce = function () {
                                    var hs_sat26DNqd = new $hs.Thunk();
                                    hs_sat26DNqd.evaluateOnce = function () {
                                        var hs_sat26DNq6 = new $hs.Func(1);
                                        hs_sat26DNq6.evaluate = function (hs_r26DNbd) {
                                            var hs_sat26DNpZ = new $hs.Thunk();
                                            hs_sat26DNpZ.evaluateOnce = function () {
                                                var hs_sat26DNpN = new $hs.Thunk();
                                                hs_sat26DNpN.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DNbd);
                                                };
                                                var hs_sat26DNpT = new $hs.Thunk();
                                                hs_sat26DNpT.evaluateOnce = function () {
                                                    var hs_sat26DNpQ = new $hs.Thunk();
                                                    hs_sat26DNpQ.evaluateOnce = function () {
                                                        var hs_wild26DNpM = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_setmask()];
                                                        var hs_ds126DNaZ = hs_wild26DNpM[1];
                                                        var hs_ds226DNpK = hs_pzuoldzusigset26DN9Z;
                                                        if (hs_pzuoldzusigset26DN9Z.notEvaluated) {
                                                            hs_ds226DNpK = hs_pzuoldzusigset26DN9Z.hscall();
                                                        }
                                                        var hs_ds326DNb0 = hs_ds226DNpK.data[0];
                                                        var hs_ds426DNpJ = $hs.modules.GHCziPtr.hs_nullPtr;
                                                        if ($hs.modules.GHCziPtr.hs_nullPtr.notEvaluated) {
                                                            hs_ds426DNpJ = $hs.modules.GHCziPtr.hs_nullPtr.hscall();
                                                        }
                                                        var hs_ds526DNb1 = hs_ds426DNpJ.data[0];
                                                        var hs_sat26DNpP = new $hs.Func(1);
                                                        hs_sat26DNpP.evaluate = function (hs_ds626DNb2) {
                                                            var hs_wild126DNpI = [hs_ds626DNb2, sigprocmask(hs_ds126DNaZ, hs_ds326DNb0, hs_ds526DNb1)];
                                                            var hs_ds726DNb7 = hs_wild126DNpI[0];
                                                            var hs_ds826DNb8 = hs_wild126DNpI[1];
                                                            var hs_sat26DNpO = new $hs.Data(1);
                                                            hs_sat26DNpO.data = [hs_ds826DNb8];
                                                            return [hs_ds726DNb7, hs_sat26DNpO];
                                                        };
                                                        if (hs_sat26DNpP.notEvaluated) {
                                                            return hs_sat26DNpP.hscall();
                                                        } else {
                                                            return hs_sat26DNpP;
                                                        }
                                                    };
                                                    var hs_sat26DNpS = new $hs.Thunk();
                                                    hs_sat26DNpS.evaluateOnce = function () {
                                                        var hs_sat26DNpR = new $hs.Thunk();
                                                        hs_sat26DNpR.evaluateOnce = function () {
                                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("sigprocmask\x00");
                                                        };
                                                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNpR);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNpS, hs_sat26DNpQ);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNpT, hs_sat26DNpN);
                                            };
                                            var hs_sat26DNq5 = new $hs.Thunk();
                                            hs_sat26DNq5.evaluateOnce = function () {
                                                var hs_sat26DNq2 = new $hs.Thunk();
                                                hs_sat26DNq2.evaluateOnce = function () {
                                                    var hs_ds26DNpY = hs_fd26DN7Z;
                                                    if (hs_fd26DN7Z.notEvaluated) {
                                                        hs_ds26DNpY = hs_fd26DN7Z.hscall();
                                                    }
                                                    var hs_ds126DNay = hs_ds26DNpY.data[0];
                                                    var hs_wild26DNpX = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_tcsanow()];
                                                    var hs_ds326DNaz = hs_wild26DNpX[1];
                                                    var hs_ds426DNpV = hs_pzutios26DN82;
                                                    if (hs_pzutios26DN82.notEvaluated) {
                                                        hs_ds426DNpV = hs_pzutios26DN82.hscall();
                                                    }
                                                    var hs_ds526DNaA = hs_ds426DNpV.data[0];
                                                    var hs_sat26DNq1 = new $hs.Func(1);
                                                    hs_sat26DNq1.evaluate = function (hs_ds626DNaB) {
                                                        var hs_wild126DNpU = [hs_ds626DNaB, tcsetattr(hs_ds126DNay, hs_ds326DNaz, hs_ds526DNaA)];
                                                        var hs_ds726DNaG = hs_wild126DNpU[0];
                                                        var hs_ds826DNaH = hs_wild126DNpU[1];
                                                        var hs_sat26DNq0 = new $hs.Data(1);
                                                        hs_sat26DNq0.data = [hs_ds826DNaH];
                                                        return [hs_ds726DNaG, hs_sat26DNq0];
                                                    };
                                                    if (hs_sat26DNq1.notEvaluated) {
                                                        return hs_sat26DNq1.hscall();
                                                    } else {
                                                        return hs_sat26DNq1;
                                                    }
                                                };
                                                var hs_sat26DNq4 = new $hs.Thunk();
                                                hs_sat26DNq4.evaluateOnce = function () {
                                                    var hs_sat26DNq3 = new $hs.Thunk();
                                                    hs_sat26DNq3.evaluateOnce = function () {
                                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("tcSetAttr\x00");
                                                    };
                                                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNq3);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNq4, hs_sat26DNq2);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNq5, hs_sat26DNpZ);
                                        };
                                        var hs_sat26DNq7 = new $hs.Thunk();
                                        hs_sat26DNq7.evaluateOnce = function () {
                                            return hs_fun26DNai.hscall(hs_pzutios26DN82);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNq7, hs_sat26DNq6);
                                    };
                                    var hs_sat26DNqj = new $hs.Thunk();
                                    hs_sat26DNqj.evaluateOnce = function () {
                                        var hs_sat26DNqg = new $hs.Thunk();
                                        hs_sat26DNqg.evaluateOnce = function () {
                                            var hs_wild26DNqc = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_block()];
                                            var hs_ds126DNa4 = hs_wild26DNqc[1];
                                            var hs_ds226DNqa = hs_pzusigset26DN9b;
                                            if (hs_pzusigset26DN9b.notEvaluated) {
                                                hs_ds226DNqa = hs_pzusigset26DN9b.hscall();
                                            }
                                            var hs_ds326DNa5 = hs_ds226DNqa.data[0];
                                            var hs_ds426DNq9 = hs_pzuoldzusigset26DN9Z;
                                            if (hs_pzuoldzusigset26DN9Z.notEvaluated) {
                                                hs_ds426DNq9 = hs_pzuoldzusigset26DN9Z.hscall();
                                            }
                                            var hs_ds526DNa6 = hs_ds426DNq9.data[0];
                                            var hs_sat26DNqf = new $hs.Func(1);
                                            hs_sat26DNqf.evaluate = function (hs_ds626DNa7) {
                                                var hs_wild126DNq8 = [hs_ds626DNa7, sigprocmask(hs_ds126DNa4, hs_ds326DNa5, hs_ds526DNa6)];
                                                var hs_ds726DNac = hs_wild126DNq8[0];
                                                var hs_ds826DNad = hs_wild126DNq8[1];
                                                var hs_sat26DNqe = new $hs.Data(1);
                                                hs_sat26DNqe.data = [hs_ds826DNad];
                                                return [hs_ds726DNac, hs_sat26DNqe];
                                            };
                                            if (hs_sat26DNqf.notEvaluated) {
                                                return hs_sat26DNqf.hscall();
                                            } else {
                                                return hs_sat26DNqf;
                                            }
                                        };
                                        var hs_sat26DNqi = new $hs.Thunk();
                                        hs_sat26DNqi.evaluateOnce = function () {
                                            var hs_sat26DNqh = new $hs.Thunk();
                                            hs_sat26DNqh.evaluateOnce = function () {
                                                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("sigprocmask\x00");
                                            };
                                            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNqh);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNqi, hs_sat26DNqg);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNqj, hs_sat26DNqd);
                                };
                                var hs_sat26DNqu = new $hs.Thunk();
                                hs_sat26DNqu.evaluateOnce = function () {
                                    var hs_sat26DNqr = new $hs.Thunk();
                                    hs_sat26DNqr.evaluateOnce = function () {
                                        var hs_ds26DNqn = hs_pzusigset26DN9b;
                                        if (hs_pzusigset26DN9b.notEvaluated) {
                                            hs_ds26DNqn = hs_pzusigset26DN9b.hscall();
                                        }
                                        var hs_ds126DN9D = hs_ds26DNqn.data[0];
                                        var hs_wild26DNqm = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sigttou()];
                                        var hs_ds326DN9E = hs_wild26DNqm[1];
                                        var hs_sat26DNqq = new $hs.Func(1);
                                        hs_sat26DNqq.evaluate = function (hs_ds426DN9F) {
                                            var hs_wild126DNqk = [hs_ds426DN9F, __hscore_sigaddset(hs_ds126DN9D, hs_ds326DN9E)];
                                            var hs_ds526DN9K = hs_wild126DNqk[0];
                                            var hs_ds626DN9L = hs_wild126DNqk[1];
                                            var hs_sat26DNqp = new $hs.Data(1);
                                            hs_sat26DNqp.data = [hs_ds626DN9L];
                                            return [hs_ds526DN9K, hs_sat26DNqp];
                                        };
                                        if (hs_sat26DNqq.notEvaluated) {
                                            return hs_sat26DNqq.hscall();
                                        } else {
                                            return hs_sat26DNqq;
                                        }
                                    };
                                    var hs_sat26DNqt = new $hs.Thunk();
                                    hs_sat26DNqt.evaluateOnce = function () {
                                        var hs_sat26DNqs = new $hs.Thunk();
                                        hs_sat26DNqs.evaluateOnce = function () {
                                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("sigaddset\x00");
                                        };
                                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNqs);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNqt, hs_sat26DNqr);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNqu, hs_sat26DNqo);
                            };
                            var hs_sat26DNqD = new $hs.Thunk();
                            hs_sat26DNqD.evaluateOnce = function () {
                                var hs_sat26DNqA = new $hs.Thunk();
                                hs_sat26DNqA.evaluateOnce = function () {
                                    var hs_ds26DNqw = hs_pzusigset26DN9b;
                                    if (hs_pzusigset26DN9b.notEvaluated) {
                                        hs_ds26DNqw = hs_pzusigset26DN9b.hscall();
                                    }
                                    var hs_ds126DN9g = hs_ds26DNqw.data[0];
                                    var hs_sat26DNqz = new $hs.Func(1);
                                    hs_sat26DNqz.evaluate = function (hs_ds226DN9h) {
                                        var hs_wild26DNqv = [hs_ds226DN9h, __hscore_sigemptyset(hs_ds126DN9g)];
                                        var hs_ds326DN9m = hs_wild26DNqv[0];
                                        var hs_ds426DN9n = hs_wild26DNqv[1];
                                        var hs_sat26DNqy = new $hs.Data(1);
                                        hs_sat26DNqy.data = [hs_ds426DN9n];
                                        return [hs_ds326DN9m, hs_sat26DNqy];
                                    };
                                    if (hs_sat26DNqz.notEvaluated) {
                                        return hs_sat26DNqz.hscall();
                                    } else {
                                        return hs_sat26DNqz;
                                    }
                                };
                                var hs_sat26DNqC = new $hs.Thunk();
                                hs_sat26DNqC.evaluateOnce = function () {
                                    var hs_sat26DNqB = new $hs.Thunk();
                                    hs_sat26DNqB.evaluateOnce = function () {
                                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("sigemptyset\x00");
                                    };
                                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNqB);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNqC, hs_sat26DNqA);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNqD, hs_sat26DNqx);
                        };
                        var hs_sat26DNqF = new $hs.Thunk();
                        hs_sat26DNqF.evaluateOnce = function () {
                            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzusigsetzut);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNqF, hs_sat26DNqE);
                    };
                    var hs_sat26DNqH = new $hs.Thunk();
                    hs_sat26DNqH.evaluateOnce = function () {
                        return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzusigsetzut);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNqH, hs_sat26DNqG);
                };
                var hs_sat26DNr5 = new $hs.Thunk();
                hs_sat26DNr5.evaluateOnce = function () {
                    var hs_sat26DNr0 = new $hs.Thunk();
                    hs_sat26DNr0.evaluateOnce = function () {
                        var hs_sat26DNqW = new $hs.Func(1);
                        hs_sat26DNqW.evaluate = function (hs_p26DN8E) {
                            var hs_sat26DNqR = new $hs.Thunk();
                            hs_sat26DNqR.evaluateOnce = function () {
                                var hs_sat26DNqP = new $hs.Func(1);
                                hs_sat26DNqP.evaluate = function (hs_savedzutios26DN8J) {
                                    var hs_sat26DNqN = new $hs.Thunk();
                                    hs_sat26DNqN.evaluateOnce = function () {
                                        var hs_ds26DNqK = hs_fd26DN7Z;
                                        if (hs_fd26DN7Z.notEvaluated) {
                                            hs_ds26DNqK = hs_fd26DN7Z.hscall();
                                        }
                                        var hs_ds126DN8R = hs_ds26DNqK.data[0];
                                        var hs_ds226DNqJ = hs_savedzutios26DN8J;
                                        if (hs_savedzutios26DN8J.notEvaluated) {
                                            hs_ds226DNqJ = hs_savedzutios26DN8J.hscall();
                                        }
                                        var hs_ds326DN8S = hs_ds226DNqJ.data[0];
                                        var hs_sat26DNqM = new $hs.Func(1);
                                        hs_sat26DNqM.evaluate = function (hs_ds426DN8T) {
                                            var hs_wild26DNqI = [hs_ds426DN8T, __hscore_set_saved_termios(hs_ds126DN8R, hs_ds326DN8S)];
                                            var hs_ds526DN8X = hs_wild26DNqI[0];
                                            return [hs_ds526DN8X, $hs.modules.GHCziUnit.hs_Z0T];
                                        };
                                        if (hs_sat26DNqM.notEvaluated) {
                                            return hs_sat26DNqM.hscall();
                                        } else {
                                            return hs_sat26DNqM;
                                        }
                                    };
                                    var hs_sat26DNqO = new $hs.Thunk();
                                    hs_sat26DNqO.evaluateOnce = function () {
                                        return $hs.modules.ForeignziMarshalziUtils.hs_copyBytes.hscall(hs_savedzutios26DN8J, hs_pzutios26DN82, $hs.modules.SystemziPosixziInternals.hs_sizzeofzutermios);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNqO, hs_sat26DNqN);
                                };
                                var hs_sat26DNqQ = new $hs.Thunk();
                                hs_sat26DNqQ.evaluateOnce = function () {
                                    return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzutermios);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNqQ, hs_sat26DNqP);
                            };
                            var hs_sat26DNqT = new $hs.Thunk();
                            hs_sat26DNqT.evaluateOnce = function () {
                                var hs_sat26DNqS = new $hs.Thunk();
                                hs_sat26DNqS.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_p26DN8E, $hs.modules.GHCziPtr.hs_nullPtr);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNqS);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNqT, hs_sat26DNqR);
                        };
                        var hs_sat26DNqZ = new $hs.Thunk();
                        hs_sat26DNqZ.evaluateOnce = function () {
                            var hs_ds26DNqV = hs_fd26DN7Z;
                            if (hs_fd26DN7Z.notEvaluated) {
                                hs_ds26DNqV = hs_fd26DN7Z.hscall();
                            }
                            var hs_ds126DN8s = hs_ds26DNqV.data[0];
                            var hs_sat26DNqY = new $hs.Func(1);
                            hs_sat26DNqY.evaluate = function (hs_ds226DN8t) {
                                var hs_wild26DNqU = [hs_ds226DN8t, __hscore_get_saved_termios(hs_ds126DN8s)];
                                var hs_ds326DN8y = hs_wild26DNqU[0];
                                var hs_ds426DN8z = hs_wild26DNqU[1];
                                var hs_sat26DNqX = new $hs.Data(1);
                                hs_sat26DNqX.data = [hs_ds426DN8z];
                                return [hs_ds326DN8y, hs_sat26DNqX];
                            };
                            if (hs_sat26DNqY.notEvaluated) {
                                return hs_sat26DNqY.hscall();
                            } else {
                                return hs_sat26DNqY;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNqZ, hs_sat26DNqW);
                    };
                    var hs_sat26DNr4 = new $hs.Thunk();
                    hs_sat26DNr4.evaluateOnce = function () {
                        var hs_sat26DNr3 = new $hs.Thunk();
                        hs_sat26DNr3.evaluateOnce = function () {
                            var hs_sat26DNr2 = new $hs.Thunk();
                            hs_sat26DNr2.evaluateOnce = function () {
                                var hs_sat26DNr1 = new $hs.Thunk();
                                hs_sat26DNr1.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNr1);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt, hs_fd26DN7Z, hs_sat26DNr2);
                        };
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNr3);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNr4, hs_sat26DNr0);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNr5, hs_sat26DNqL);
            };
            var hs_sat26DNre = new $hs.Thunk();
            hs_sat26DNre.evaluateOnce = function () {
                var hs_sat26DNrc = new $hs.Thunk();
                hs_sat26DNrc.evaluateOnce = function () {
                    var hs_ds26DNr8 = hs_fd26DN7Z;
                    if (hs_fd26DN7Z.notEvaluated) {
                        hs_ds26DNr8 = hs_fd26DN7Z.hscall();
                    }
                    var hs_ds126DN87 = hs_ds26DNr8.data[0];
                    var hs_ds226DNr7 = hs_pzutios26DN82;
                    if (hs_pzutios26DN82.notEvaluated) {
                        hs_ds226DNr7 = hs_pzutios26DN82.hscall();
                    }
                    var hs_ds326DN88 = hs_ds226DNr7.data[0];
                    var hs_sat26DNrb = new $hs.Func(1);
                    hs_sat26DNrb.evaluate = function (hs_ds426DN89) {
                        var hs_wild26DNr6 = [hs_ds426DN89, tcgetattr(hs_ds126DN87, hs_ds326DN88)];
                        var hs_ds526DN8e = hs_wild26DNr6[0];
                        var hs_ds626DN8f = hs_wild26DNr6[1];
                        var hs_sat26DNra = new $hs.Data(1);
                        hs_sat26DNra.data = [hs_ds626DN8f];
                        return [hs_ds526DN8e, hs_sat26DNra];
                    };
                    if (hs_sat26DNrb.notEvaluated) {
                        return hs_sat26DNrb.hscall();
                    } else {
                        return hs_sat26DNrb;
                    }
                };
                var hs_sat26DNrd = new $hs.Thunk();
                hs_sat26DNrd.evaluateOnce = function () {
                    return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("tcSetAttr\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNrd, hs_sat26DNrc);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNre, hs_sat26DNr9);
        };
        var hs_sat26DNrg = new $hs.Thunk();
        hs_sat26DNrg.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzutermios);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNrg, hs_sat26DNrf);
    };
    hs_a4325voFa.evaluate = function (hs_ds26DNbt, hs_eta26DNby) {
        var hs_ds126DNri = hs_ds26DNbt;
        if (hs_ds26DNbt.notEvaluated) {
            hs_ds126DNri = hs_ds26DNbt.hscall();
        }
        var hs_ds226DNbx = hs_ds126DNri.data[0];
        var hs_wild26DNrh = [hs_eta26DNby, __hscore_lflag(hs_ds226DNbx)];
        var hs_ds326DNbD = hs_wild26DNrh[0];
        var hs_ds426DNbE = hs_wild26DNrh[1];
        var hs_sat26DNrj = new $hs.Data(1);
        hs_sat26DNrj.data = [hs_ds426DNbE];
        return [hs_ds326DNbD, hs_sat26DNrj];
    };
    this.hs_czulflag.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4325voFa.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4425voFr.evaluate = function (hs_ds26DNbL, hs_ds126DNbO, hs_eta26DNbU) {
        var hs_ds226DNrm = hs_ds26DNbL;
        if (hs_ds26DNbL.notEvaluated) {
            hs_ds226DNrm = hs_ds26DNbL.hscall();
        }
        var hs_ds326DNbS = hs_ds226DNrm.data[0];
        var hs_ds426DNrl = hs_ds126DNbO;
        if (hs_ds126DNbO.notEvaluated) {
            hs_ds426DNrl = hs_ds126DNbO.hscall();
        }
        var hs_ds526DNbT = hs_ds426DNrl.data[0];
        var hs_wild26DNrk = [hs_eta26DNbU, __hscore_poke_lflag(hs_ds326DNbS, hs_ds526DNbT)];
        var hs_ds626DNbY = hs_wild26DNrk[0];
        return [hs_ds626DNbY, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_pokezuczulflag.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4425voFr.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4525voFK.evaluate = function (hs_ds26DNc3, hs_eta26DNc8) {
        var hs_ds126DNro = hs_ds26DNc3;
        if (hs_ds26DNc3.notEvaluated) {
            hs_ds126DNro = hs_ds26DNc3.hscall();
        }
        var hs_ds226DNc7 = hs_ds126DNro.data[0];
        var hs_wild26DNrn = [hs_eta26DNc8, __hscore_ptr_c_cc(hs_ds226DNc7)];
        var hs_ds326DNcd = hs_wild26DNrn[0];
        var hs_ds426DNce = hs_wild26DNrn[1];
        var hs_sat26DNrp = new $hs.Data(1);
        hs_sat26DNrp.data = [hs_ds426DNce];
        return [hs_ds326DNcd, hs_sat26DNrp];
    };
    this.hs_ptrzuczucc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4525voFK.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuszuissock.evaluate = function (hs_ds26DNch) {
        var hs_ds126DNrs = hs_ds26DNch;
        if (hs_ds26DNch.notEvaluated) {
            hs_ds126DNrs = hs_ds26DNch.hscall();
        }
        var hs_ds226DNcl = hs_ds126DNrs.data[0];
        var hs_wild26DNrr = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_issock(hs_ds226DNcl)];
        var hs_ds426DNcq = hs_wild26DNrr[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DNcq];
        return $res;
    };
    this.hs_dEFAULTzuBUFFERzuSIZZE.evaluateOnce = function () {
        var hs_wild26DNru = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_bufsiz()];
        var hs_ds126DNcw = hs_wild26DNru[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DNcw];
        return $res;
    };
    this.hs_sEEKzuCUR.evaluateOnce = function () {
        var hs_wild26DNrw = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_seek_cur()];
        var hs_ds126DNcC = hs_wild26DNrw[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DNcC];
        return $res;
    };
    this.hs_sEEKzuSET.evaluateOnce = function () {
        var hs_wild26DNry = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_seek_set()];
        var hs_ds126DNcI = hs_wild26DNry[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DNcI];
        return $res;
    };
    this.hs_sEEKzuEND.evaluateOnce = function () {
        var hs_wild26DNrA = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_seek_end()];
        var hs_ds126DNcO = hs_wild26DNrA[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DNcO];
        return $res;
    };
    this.hs_fdGetMode.evaluate = function (hs_fd26DNcR) {
        var hs_sat26DNrT = new $hs.Func(1);
        hs_sat26DNrT.evaluate = function (hs_flags26DNdg) {
            var hs_wH26DNdk = new $hs.Thunk();
            hs_wH26DNdk.evaluateOnce = function () {
                var hs_sat26DNrC = new $hs.Thunk();
                hs_sat26DNrC.evaluateOnce = function () {
                    var hs_sat26DNrB = new $hs.Thunk();
                    hs_sat26DNrB.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNrB);
                };
                var hs_sat26DNrD = new $hs.Thunk();
                hs_sat26DNrD.evaluateOnce = function () {
                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26DNdg, $hs.modules.SystemziPosixziInternals.hs_ozuWRONLY);
                };
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNrD, hs_sat26DNrC);
            };
            var hs_sat26DNrO = new $hs.Thunk();
            hs_sat26DNrO.evaluateOnce = function () {
                var hs_sat26DNrJ = new $hs.Thunk();
                hs_sat26DNrJ.evaluateOnce = function () {
                    var hs_sat26DNrF = new $hs.Thunk();
                    hs_sat26DNrF.evaluateOnce = function () {
                        var hs_sat26DNrE = new $hs.Thunk();
                        hs_sat26DNrE.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNrE);
                    };
                    var hs_sat26DNrG = new $hs.Thunk();
                    hs_sat26DNrG.evaluateOnce = function () {
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26DNdg, $hs.modules.SystemziPosixziInternals.hs_ozuAPPEND);
                    };
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNrG, hs_sat26DNrF);
                };
                var hs_wild26DNrI = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_wH26DNdk, hs_sat26DNrJ);
                switch (hs_wild26DNrI.tag) {
                case 1:
                    var hs_wild126DNrH = hs_wH26DNdk;
                    if (hs_wH26DNdk.notEvaluated) {
                        hs_wild126DNrH = hs_wH26DNdk.hscall();
                    }
                    switch (hs_wild126DNrH.tag) {
                    case 1:
                        var hs_sat26DNrL = new $hs.Thunk();
                        hs_sat26DNrL.evaluateOnce = function () {
                            var hs_sat26DNrK = new $hs.Thunk();
                            hs_sat26DNrK.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNrK);
                        };
                        var hs_sat26DNrN = new $hs.Thunk();
                        hs_sat26DNrN.evaluateOnce = function () {
                            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26DNdg, $hs.modules.SystemziPosixziInternals.hs_ozuRDWR);
                        };
                        var hs_wild226DNrM = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNrN, hs_sat26DNrL);
                        switch (hs_wild226DNrM.tag) {
                        case 1:
                            var $res = new $hs.Data(1);
                            $res.data = [];
                            return $res;
                        case 2:
                            var $res = new $hs.Data(4);
                            $res.data = [];
                            return $res;
                        }
                    case 2:
                        var $res = new $hs.Data(2);
                        $res.data = [];
                        return $res;
                    }
                case 2:
                    var $res = new $hs.Data(3);
                    $res.data = [];
                    return $res;
                }
            };
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNrO);
        };
        var hs_sat26DNrY = new $hs.Thunk();
        hs_sat26DNrY.evaluateOnce = function () {
            var hs_sat26DNrW = new $hs.Thunk();
            hs_sat26DNrW.evaluateOnce = function () {
                var hs_ds26DNrS = hs_fd26DNcR;
                if (hs_fd26DNcR.notEvaluated) {
                    hs_ds26DNrS = hs_fd26DNcR.hscall();
                }
                var hs_ds126DNd1 = hs_ds26DNrS.data[0];
                var hs_wild26DNrR = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_getfl()];
                var hs_ds326DNd2 = hs_wild26DNrR[1];
                var hs_sat26DNrV = new $hs.Func(1);
                hs_sat26DNrV.evaluate = function (hs_ds426DNd3) {
                    var hs_wild126DNrP = [hs_ds426DNd3, fcntl_read(hs_ds126DNd1, hs_ds326DNd2)];
                    var hs_ds526DNd8 = hs_wild126DNrP[0];
                    var hs_ds626DNd9 = hs_wild126DNrP[1];
                    var hs_sat26DNrU = new $hs.Data(1);
                    hs_sat26DNrU.data = [hs_ds626DNd9];
                    return [hs_ds526DNd8, hs_sat26DNrU];
                };
                if (hs_sat26DNrV.notEvaluated) {
                    return hs_sat26DNrV.hscall();
                } else {
                    return hs_sat26DNrV;
                }
            };
            var hs_sat26DNrX = new $hs.Thunk();
            hs_sat26DNrX.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fdGetMode\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNrX, hs_sat26DNrW);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNrY, hs_sat26DNrT);
    };
    this.hs_setEcho.evaluate = function (hs_fd26DNdz, hs_on26DNdV) {
        var hs_sat26DNsg = new $hs.Func(1);
        hs_sat26DNsg.evaluate = function (hs_pzutios26DNdC) {
            var hs_sat26DNsc = new $hs.Func(1);
            hs_sat26DNsc.evaluate = function (hs_lflag26DNdX) {
                var hs_ds26DNs0 = hs_pzutios26DNdC;
                if (hs_pzutios26DNdC.notEvaluated) {
                    hs_ds26DNs0 = hs_pzutios26DNdC.hscall();
                }
                var hs_ds126DNe4 = hs_ds26DNs0.data[0];
                var hs_wild26DNrZ = hs_on26DNdV;
                if (hs_on26DNdV.notEvaluated) {
                    hs_wild26DNrZ = hs_on26DNdV.hscall();
                }
                switch (hs_wild26DNrZ.tag) {
                case 1:
                    var hs_sat26DNs4 = new $hs.Thunk();
                    hs_sat26DNs4.evaluateOnce = function () {
                        var hs_sat26DNs1 = new $hs.Thunk();
                        hs_sat26DNs1.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuecho);
                        };
                        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_sat26DNs1);
                    };
                    var hs_ds226DNs3 = $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26DNdX, hs_sat26DNs4);
                    var hs_ds326DNe5 = hs_ds226DNs3.data[0];
                    var hs_sat26DNs5 = new $hs.Func(1);
                    hs_sat26DNs5.evaluate = function (hs_ds426DNe6) {
                        var hs_wild126DNs2 = [hs_ds426DNe6, __hscore_poke_lflag(hs_ds126DNe4, hs_ds326DNe5)];
                        var hs_ds526DNea = hs_wild126DNs2[0];
                        return [hs_ds526DNea, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    if (hs_sat26DNs5.notEvaluated) {
                        return hs_sat26DNs5.hscall();
                    } else {
                        return hs_sat26DNs5;
                    }
                case 2:
                    var hs_sat26DNs8 = new $hs.Thunk();
                    hs_sat26DNs8.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuecho);
                    };
                    var hs_ds226DNs7 = $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26DNdX, hs_sat26DNs8);
                    var hs_ds326DNeh = hs_ds226DNs7.data[0];
                    var hs_sat26DNs9 = new $hs.Func(1);
                    hs_sat26DNs9.evaluate = function (hs_ds426DNei) {
                        var hs_wild126DNs6 = [hs_ds426DNei, __hscore_poke_lflag(hs_ds126DNe4, hs_ds326DNeh)];
                        var hs_ds526DNem = hs_wild126DNs6[0];
                        return [hs_ds526DNem, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    if (hs_sat26DNs9.notEvaluated) {
                        return hs_sat26DNs9.hscall();
                    } else {
                        return hs_sat26DNs9;
                    }
                }
            };
            var hs_sat26DNsf = new $hs.Thunk();
            hs_sat26DNsf.evaluateOnce = function () {
                var hs_ds26DNsb = hs_pzutios26DNdC;
                if (hs_pzutios26DNdC.notEvaluated) {
                    hs_ds26DNsb = hs_pzutios26DNdC.hscall();
                }
                var hs_ds126DNdH = hs_ds26DNsb.data[0];
                var hs_sat26DNse = new $hs.Func(1);
                hs_sat26DNse.evaluate = function (hs_ds226DNdI) {
                    var hs_wild26DNsa = [hs_ds226DNdI, __hscore_lflag(hs_ds126DNdH)];
                    var hs_ds326DNdN = hs_wild26DNsa[0];
                    var hs_ds426DNdO = hs_wild26DNsa[1];
                    var hs_sat26DNsd = new $hs.Data(1);
                    hs_sat26DNsd.data = [hs_ds426DNdO];
                    return [hs_ds326DNdN, hs_sat26DNsd];
                };
                if (hs_sat26DNse.notEvaluated) {
                    return hs_sat26DNse.hscall();
                } else {
                    return hs_sat26DNse;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNsf, hs_sat26DNsc);
        };
        var hs_sat26DNsh = new $hs.Func(1);
        hs_sat26DNsh.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_tcSetAttr.hscall(hs_fd26DNdz, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNsh, hs_sat26DNsg);
    };
    this.hs_getEcho.evaluate = function (hs_fd26DNer) {
        var hs_sat26DNst = new $hs.Func(1);
        hs_sat26DNst.evaluate = function (hs_pzutios26DNeu) {
            var hs_sat26DNsp = new $hs.Func(1);
            hs_sat26DNsp.evaluate = function (hs_lflag26DNeL) {
                var hs_sat26DNsm = new $hs.Thunk();
                hs_sat26DNsm.evaluateOnce = function () {
                    var hs_sat26DNsj = new $hs.Thunk();
                    hs_sat26DNsj.evaluateOnce = function () {
                        var hs_sat26DNsi = new $hs.Thunk();
                        hs_sat26DNsi.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, hs_sat26DNsi);
                    };
                    var hs_sat26DNsl = new $hs.Thunk();
                    hs_sat26DNsl.evaluateOnce = function () {
                        var hs_sat26DNsk = new $hs.Thunk();
                        hs_sat26DNsk.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuecho);
                        };
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26DNeL, hs_sat26DNsk);
                    };
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCTcflag, hs_sat26DNsl, hs_sat26DNsj);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNsm);
            };
            var hs_sat26DNss = new $hs.Thunk();
            hs_sat26DNss.evaluateOnce = function () {
                var hs_ds26DNso = hs_pzutios26DNeu;
                if (hs_pzutios26DNeu.notEvaluated) {
                    hs_ds26DNso = hs_pzutios26DNeu.hscall();
                }
                var hs_ds126DNez = hs_ds26DNso.data[0];
                var hs_sat26DNsr = new $hs.Func(1);
                hs_sat26DNsr.evaluate = function (hs_ds226DNeA) {
                    var hs_wild26DNsn = [hs_ds226DNeA, __hscore_lflag(hs_ds126DNez)];
                    var hs_ds326DNeF = hs_wild26DNsn[0];
                    var hs_ds426DNeG = hs_wild26DNsn[1];
                    var hs_sat26DNsq = new $hs.Data(1);
                    hs_sat26DNsq.data = [hs_ds426DNeG];
                    return [hs_ds326DNeF, hs_sat26DNsq];
                };
                if (hs_sat26DNsr.notEvaluated) {
                    return hs_sat26DNsr.hscall();
                } else {
                    return hs_sat26DNsr;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNss, hs_sat26DNsp);
        };
        var hs_sat26DNsu = new $hs.Func(1);
        hs_sat26DNsu.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_tcSetAttr.hscall(hs_fd26DNer, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNsu, hs_sat26DNst);
    };
    this.hs_setCooked.evaluate = function (hs_fd26DNeV, hs_cooked26DNfh) {
        var hs_sat26DNt7 = new $hs.Func(1);
        hs_sat26DNt7.evaluate = function (hs_pzutios26DNeY) {
            var hs_sat26DNt3 = new $hs.Func(1);
            hs_sat26DNt3.evaluate = function (hs_lflag26DNfj) {
                var hs_sat26DNsQ = new $hs.Thunk();
                hs_sat26DNsQ.evaluateOnce = function () {
                    var hs_sat26DNsL = new $hs.Thunk();
                    hs_sat26DNsL.evaluateOnce = function () {
                        var hs_sat26DNsH = new $hs.Func(1);
                        hs_sat26DNsH.evaluate = function (hs_czucc26DNg3) {
                            var hs_sat26DNsz = new $hs.Thunk();
                            hs_sat26DNsz.evaluateOnce = function () {
                                var hs_sat26DNsw = new $hs.Thunk();
                                hs_sat26DNsw.evaluateOnce = function () {
                                    var hs_sat26DNsv = new $hs.Thunk();
                                    hs_sat26DNsv.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DNsv);
                                };
                                var hs_sat26DNsy = new $hs.Thunk();
                                hs_sat26DNsy.evaluateOnce = function () {
                                    var hs_sat26DNsx = new $hs.Thunk();
                                    hs_sat26DNsx.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.SystemziPosixziInternals.hs_constzuvtime);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_czucc26DNg3, hs_sat26DNsx);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DNsy, hs_sat26DNsw);
                            };
                            var hs_sat26DNsE = new $hs.Thunk();
                            hs_sat26DNsE.evaluateOnce = function () {
                                var hs_sat26DNsB = new $hs.Thunk();
                                hs_sat26DNsB.evaluateOnce = function () {
                                    var hs_sat26DNsA = new $hs.Thunk();
                                    hs_sat26DNsA.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DNsA);
                                };
                                var hs_sat26DNsD = new $hs.Thunk();
                                hs_sat26DNsD.evaluateOnce = function () {
                                    var hs_sat26DNsC = new $hs.Thunk();
                                    hs_sat26DNsC.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.SystemziPosixziInternals.hs_constzuvmin);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_czucc26DNg3, hs_sat26DNsC);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DNsD, hs_sat26DNsB);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNsE, hs_sat26DNsz);
                        };
                        var hs_sat26DNsK = new $hs.Thunk();
                        hs_sat26DNsK.evaluateOnce = function () {
                            var hs_ds26DNsG = hs_pzutios26DNeY;
                            if (hs_pzutios26DNeY.notEvaluated) {
                                hs_ds26DNsG = hs_pzutios26DNeY.hscall();
                            }
                            var hs_ds126DNfR = hs_ds26DNsG.data[0];
                            var hs_sat26DNsJ = new $hs.Func(1);
                            hs_sat26DNsJ.evaluate = function (hs_ds226DNfS) {
                                var hs_wild26DNsF = [hs_ds226DNfS, __hscore_ptr_c_cc(hs_ds126DNfR)];
                                var hs_ds326DNfX = hs_wild26DNsF[0];
                                var hs_ds426DNfY = hs_wild26DNsF[1];
                                var hs_sat26DNsI = new $hs.Data(1);
                                hs_sat26DNsI.data = [hs_ds426DNfY];
                                return [hs_ds326DNfX, hs_sat26DNsI];
                            };
                            if (hs_sat26DNsJ.notEvaluated) {
                                return hs_sat26DNsJ.hscall();
                            } else {
                                return hs_sat26DNsJ;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNsK, hs_sat26DNsH);
                    };
                    var hs_sat26DNsN = new $hs.Thunk();
                    hs_sat26DNsN.evaluateOnce = function () {
                        var hs_sat26DNsM = new $hs.Thunk();
                        hs_sat26DNsM.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_not.hscall(hs_cooked26DNfh);
                        };
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNsM);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNsN, hs_sat26DNsL);
                };
                var hs_sat26DNt0 = new $hs.Thunk();
                hs_sat26DNt0.evaluateOnce = function () {
                    var hs_ds26DNsP = hs_pzutios26DNeY;
                    if (hs_pzutios26DNeY.notEvaluated) {
                        hs_ds26DNsP = hs_pzutios26DNeY.hscall();
                    }
                    var hs_ds126DNfq = hs_ds26DNsP.data[0];
                    var hs_wild26DNsO = hs_cooked26DNfh;
                    if (hs_cooked26DNfh.notEvaluated) {
                        hs_wild26DNsO = hs_cooked26DNfh.hscall();
                    }
                    switch (hs_wild26DNsO.tag) {
                    case 1:
                        var hs_sat26DNsU = new $hs.Thunk();
                        hs_sat26DNsU.evaluateOnce = function () {
                            var hs_sat26DNsR = new $hs.Thunk();
                            hs_sat26DNsR.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuicanon);
                            };
                            return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_sat26DNsR);
                        };
                        var hs_ds226DNsT = $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26DNfj, hs_sat26DNsU);
                        var hs_ds326DNfr = hs_ds226DNsT.data[0];
                        var hs_sat26DNsV = new $hs.Func(1);
                        hs_sat26DNsV.evaluate = function (hs_ds426DNfs) {
                            var hs_wild126DNsS = [hs_ds426DNfs, __hscore_poke_lflag(hs_ds126DNfq, hs_ds326DNfr)];
                            var hs_ds526DNfw = hs_wild126DNsS[0];
                            return [hs_ds526DNfw, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        if (hs_sat26DNsV.notEvaluated) {
                            return hs_sat26DNsV.hscall();
                        } else {
                            return hs_sat26DNsV;
                        }
                    case 2:
                        var hs_sat26DNsY = new $hs.Thunk();
                        hs_sat26DNsY.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuicanon);
                        };
                        var hs_ds226DNsX = $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26DNfj, hs_sat26DNsY);
                        var hs_ds326DNfD = hs_ds226DNsX.data[0];
                        var hs_sat26DNsZ = new $hs.Func(1);
                        hs_sat26DNsZ.evaluate = function (hs_ds426DNfE) {
                            var hs_wild126DNsW = [hs_ds426DNfE, __hscore_poke_lflag(hs_ds126DNfq, hs_ds326DNfD)];
                            var hs_ds526DNfI = hs_wild126DNsW[0];
                            return [hs_ds526DNfI, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        if (hs_sat26DNsZ.notEvaluated) {
                            return hs_sat26DNsZ.hscall();
                        } else {
                            return hs_sat26DNsZ;
                        }
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNt0, hs_sat26DNsQ);
            };
            var hs_sat26DNt6 = new $hs.Thunk();
            hs_sat26DNt6.evaluateOnce = function () {
                var hs_ds26DNt2 = hs_pzutios26DNeY;
                if (hs_pzutios26DNeY.notEvaluated) {
                    hs_ds26DNt2 = hs_pzutios26DNeY.hscall();
                }
                var hs_ds126DNf3 = hs_ds26DNt2.data[0];
                var hs_sat26DNt5 = new $hs.Func(1);
                hs_sat26DNt5.evaluate = function (hs_ds226DNf4) {
                    var hs_wild26DNt1 = [hs_ds226DNf4, __hscore_lflag(hs_ds126DNf3)];
                    var hs_ds326DNf9 = hs_wild26DNt1[0];
                    var hs_ds426DNfa = hs_wild26DNt1[1];
                    var hs_sat26DNt4 = new $hs.Data(1);
                    hs_sat26DNt4.data = [hs_ds426DNfa];
                    return [hs_ds326DNf9, hs_sat26DNt4];
                };
                if (hs_sat26DNt5.notEvaluated) {
                    return hs_sat26DNt5.hscall();
                } else {
                    return hs_sat26DNt5;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNt6, hs_sat26DNt3);
        };
        var hs_sat26DNt8 = new $hs.Func(1);
        hs_sat26DNt8.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_tcSetAttr.hscall(hs_fd26DNeV, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNt8, hs_sat26DNt7);
    };
    this.hs_setNonBlockingFD.evaluate = function (hs_fd26DNgm, hs_set26DNgL) {
        var hs_sat26DNts = new $hs.Func(1);
        hs_sat26DNts.evaluate = function (hs_flags26DNgN) {
            var hs_flagszq26DNgP = new $hs.Thunk();
            hs_flagszq26DNgP.evaluateOnce = function () {
                var hs_wild26DNt9 = hs_set26DNgL;
                if (hs_set26DNgL.notEvaluated) {
                    hs_wild26DNt9 = hs_set26DNgL.hscall();
                }
                switch (hs_wild26DNt9.tag) {
                case 1:
                    var hs_sat26DNta = new $hs.Thunk();
                    hs_sat26DNta.evaluateOnce = function () {
                        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK);
                    };
                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26DNgN, hs_sat26DNta);
                case 2:
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26DNgN, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK);
                }
            };
            var hs_sat26DNtl = new $hs.Thunk();
            hs_sat26DNtl.evaluateOnce = function () {
                var hs_sat26DNth = new $hs.Func(1);
                hs_sat26DNth.evaluate = function (hs_ds26DNtb) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26DNtk = new $hs.Thunk();
                hs_sat26DNtk.evaluateOnce = function () {
                    var hs_ds26DNtg = hs_fd26DNgm;
                    if (hs_fd26DNgm.notEvaluated) {
                        hs_ds26DNtg = hs_fd26DNgm.hscall();
                    }
                    var hs_ds126DNh3 = hs_ds26DNtg.data[0];
                    var hs_wild26DNtf = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_setfl()];
                    var hs_ds326DNh4 = hs_wild26DNtf[1];
                    var hs_ds426DNtd = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_flagszq26DNgP);
                    var hs_ds526DNh5 = hs_ds426DNtd.data[0];
                    var hs_sat26DNtj = new $hs.Func(1);
                    hs_sat26DNtj.evaluate = function (hs_ds626DNh6) {
                        var hs_wild126DNtc = [hs_ds626DNh6, fcntl_write(hs_ds126DNh3, hs_ds326DNh4, hs_ds526DNh5)];
                        var hs_ds726DNhb = hs_wild126DNtc[0];
                        var hs_ds826DNhc = hs_wild126DNtc[1];
                        var hs_sat26DNti = new $hs.Data(1);
                        hs_sat26DNti.data = [hs_ds826DNhc];
                        return [hs_ds726DNhb, hs_sat26DNti];
                    };
                    if (hs_sat26DNtj.notEvaluated) {
                        return hs_sat26DNtj.hscall();
                    } else {
                        return hs_sat26DNtj;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNtk, hs_sat26DNth);
            };
            var hs_sat26DNtn = new $hs.Thunk();
            hs_sat26DNtn.evaluateOnce = function () {
                var hs_sat26DNtm = new $hs.Thunk();
                hs_sat26DNtm.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_flags26DNgN, hs_flagszq26DNgP);
                };
                return $hs.modules.ControlziMonad.hs_unless.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNtm);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNtn, hs_sat26DNtl);
        };
        var hs_sat26DNtx = new $hs.Thunk();
        hs_sat26DNtx.evaluateOnce = function () {
            var hs_sat26DNtv = new $hs.Thunk();
            hs_sat26DNtv.evaluateOnce = function () {
                var hs_ds26DNtr = hs_fd26DNgm;
                if (hs_fd26DNgm.notEvaluated) {
                    hs_ds26DNtr = hs_fd26DNgm.hscall();
                }
                var hs_ds126DNgw = hs_ds26DNtr.data[0];
                var hs_wild26DNtq = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_getfl()];
                var hs_ds326DNgx = hs_wild26DNtq[1];
                var hs_sat26DNtu = new $hs.Func(1);
                hs_sat26DNtu.evaluate = function (hs_ds426DNgy) {
                    var hs_wild126DNto = [hs_ds426DNgy, fcntl_read(hs_ds126DNgw, hs_ds326DNgx)];
                    var hs_ds526DNgD = hs_wild126DNto[0];
                    var hs_ds626DNgE = hs_wild126DNto[1];
                    var hs_sat26DNtt = new $hs.Data(1);
                    hs_sat26DNtt.data = [hs_ds626DNgE];
                    return [hs_ds526DNgD, hs_sat26DNtt];
                };
                if (hs_sat26DNtu.notEvaluated) {
                    return hs_sat26DNtu.hscall();
                } else {
                    return hs_sat26DNtu;
                }
            };
            var hs_sat26DNtw = new $hs.Thunk();
            hs_sat26DNtw.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("setNonBlockingFD\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNtw, hs_sat26DNtv);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNtx, hs_sat26DNts);
    };
    this.hs_setCloseOnExec.evaluate = function (hs_fd26DNhn) {
        var hs_sat26DNty = new $hs.Func(1);
        hs_sat26DNty.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_czufcntlzuwrite.hscall(hs_fd26DNhn, $hs.modules.SystemziPosixziInternals.hs_constzufzusetfd, $hs.modules.SystemziPosixziInternals.hs_constzufdzucloexec, hs_eta1cW6l3);
        };
        var hs_sat26DNtA = new $hs.Thunk();
        hs_sat26DNtA.evaluateOnce = function () {
            var hs_sat26DNtz = new $hs.Thunk();
            hs_sat26DNtz.evaluateOnce = function () {
                return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("setCloseOnExec\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNtz);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNtA, hs_sat26DNty);
    };
    this.hs_szuisreg.evaluate = function (hs_cm26DNhq) {
        var hs_sat26DNtF = new $hs.Thunk();
        hs_sat26DNtF.evaluateOnce = function () {
            var hs_sat26DNtB = new $hs.Thunk();
            hs_sat26DNtB.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNtB);
        };
        var hs_sat26DNtG = new $hs.Thunk();
        hs_sat26DNtG.evaluateOnce = function () {
            var hs_ds26DNtE = hs_cm26DNhq;
            if (hs_cm26DNhq.notEvaluated) {
                hs_ds26DNtE = hs_cm26DNhq.hscall();
            }
            var hs_ds126DNhu = hs_ds26DNtE.data[0];
            var hs_wild26DNtD = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isreg(hs_ds126DNhu)];
            var hs_ds326DNhz = hs_wild26DNtD[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DNhz];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNtG, hs_sat26DNtF);
    };
    this.hs_fdFileSizze.evaluate = function (hs_fd26DNhI) {
        var hs_sat26DNu8 = new $hs.Func(1);
        hs_sat26DNu8.evaluate = function (hs_pzustat26DNhL) {
            var hs_sat26DNu1 = new $hs.Thunk();
            hs_sat26DNu1.evaluateOnce = function () {
                var hs_sat26DNtU = new $hs.Func(1);
                hs_sat26DNtU.evaluate = function (hs_czumode26DNij) {
                    var hs_sat26DNtI = new $hs.Thunk();
                    hs_sat26DNtI.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_szuisreg.hscall(hs_czumode26DNij);
                    };
                    var hs_wild26DNtH = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DNtI);
                    switch (hs_wild26DNtH.tag) {
                    case 1:
                        var hs_sat26DNtM = new $hs.Func(1);
                        hs_sat26DNtM.evaluate = function (hs_czusizze26DNiC) {
                            var hs_sat26DNtJ = new $hs.Thunk();
                            hs_sat26DNtJ.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCOff, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_czusizze26DNiC);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNtJ);
                        };
                        var hs_sat26DNtP = new $hs.Thunk();
                        hs_sat26DNtP.evaluateOnce = function () {
                            var hs_ds26DNtL = hs_pzustat26DNhL;
                            if (hs_pzustat26DNhL.notEvaluated) {
                                hs_ds26DNtL = hs_pzustat26DNhL.hscall();
                            }
                            var hs_ds126DNiq = hs_ds26DNtL.data[0];
                            var hs_sat26DNtO = new $hs.Func(1);
                            hs_sat26DNtO.evaluate = function (hs_ds226DNir) {
                                var hs_wild126DNtK = [hs_ds226DNir, __hscore_st_si=(hs_ds126DNiq)];
                                var hs_ds326DNiw = hs_wild126DNtK[0];
                                var hs_ds426DNix = hs_wild126DNtK[1];
                                var hs_sat26DNtN = new $hs.Data(1);
                                hs_sat26DNtN.data = [hs_ds426DNix];
                                return [hs_ds326DNiw, hs_sat26DNtN];
                            };
                            if (hs_sat26DNtO.notEvaluated) {
                                return hs_sat26DNtO.hscall();
                            } else {
                                return hs_sat26DNtO;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNtP, hs_sat26DNtM);
                    case 2:
                        var hs_sat26DNtR = new $hs.Thunk();
                        hs_sat26DNtR.evaluateOnce = function () {
                            var hs_sat26DNtQ = new $hs.Thunk();
                            hs_sat26DNtQ.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DNtQ);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNtR);
                    }
                };
                var hs_sat26DNtX = new $hs.Thunk();
                hs_sat26DNtX.evaluateOnce = function () {
                    var hs_ds26DNtT = hs_pzustat26DNhL;
                    if (hs_pzustat26DNhL.notEvaluated) {
                        hs_ds26DNtT = hs_pzustat26DNhL.hscall();
                    }
                    var hs_ds126DNi7 = hs_ds26DNtT.data[0];
                    var hs_sat26DNtW = new $hs.Func(1);
                    hs_sat26DNtW.evaluate = function (hs_ds226DNi8) {
                        var hs_wild26DNtS = [hs_ds226DNi8, __hscore_st_mode(hs_ds126DNi7)];
                        var hs_ds326DNid = hs_wild26DNtS[0];
                        var hs_ds426DNie = hs_wild26DNtS[1];
                        var hs_sat26DNtV = new $hs.Data(1);
                        hs_sat26DNtV.data = [hs_ds426DNie];
                        return [hs_ds326DNid, hs_sat26DNtV];
                    };
                    if (hs_sat26DNtW.notEvaluated) {
                        return hs_sat26DNtW.hscall();
                    } else {
                        return hs_sat26DNtW;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNtX, hs_sat26DNtU);
            };
            var hs_sat26DNu7 = new $hs.Thunk();
            hs_sat26DNu7.evaluateOnce = function () {
                var hs_sat26DNu4 = new $hs.Thunk();
                hs_sat26DNu4.evaluateOnce = function () {
                    var hs_ds26DNu0 = hs_fd26DNhI;
                    if (hs_fd26DNhI.notEvaluated) {
                        hs_ds26DNu0 = hs_fd26DNhI.hscall();
                    }
                    var hs_ds126DNhQ = hs_ds26DNu0.data[0];
                    var hs_ds226DNtZ = hs_pzustat26DNhL;
                    if (hs_pzustat26DNhL.notEvaluated) {
                        hs_ds226DNtZ = hs_pzustat26DNhL.hscall();
                    }
                    var hs_ds326DNhR = hs_ds226DNtZ.data[0];
                    var hs_sat26DNu3 = new $hs.Func(1);
                    hs_sat26DNu3.evaluate = function (hs_ds426DNhS) {
                        var hs_wild26DNtY = [hs_ds426DNhS, __hscore_fstat(hs_ds126DNhQ, hs_ds326DNhR)];
                        var hs_ds526DNhX = hs_wild26DNtY[0];
                        var hs_ds626DNhY = hs_wild26DNtY[1];
                        var hs_sat26DNu2 = new $hs.Data(1);
                        hs_sat26DNu2.data = [hs_ds626DNhY];
                        return [hs_ds526DNhX, hs_sat26DNu2];
                    };
                    if (hs_sat26DNu3.notEvaluated) {
                        return hs_sat26DNu3.hscall();
                    } else {
                        return hs_sat26DNu3;
                    }
                };
                var hs_sat26DNu6 = new $hs.Thunk();
                hs_sat26DNu6.evaluateOnce = function () {
                    var hs_sat26DNu5 = new $hs.Thunk();
                    hs_sat26DNu5.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fileSize\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNu5);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNu6, hs_sat26DNu4);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNu7, hs_sat26DNu1);
        };
        var hs_sat26DNu9 = new $hs.Thunk();
        hs_sat26DNu9.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzustat);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNu9, hs_sat26DNu8);
    };
    this.hs_szuischr.evaluate = function (hs_cm26DNiL) {
        var hs_sat26DNue = new $hs.Thunk();
        hs_sat26DNue.evaluateOnce = function () {
            var hs_sat26DNua = new $hs.Thunk();
            hs_sat26DNua.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNua);
        };
        var hs_sat26DNuf = new $hs.Thunk();
        hs_sat26DNuf.evaluateOnce = function () {
            var hs_ds26DNud = hs_cm26DNiL;
            if (hs_cm26DNiL.notEvaluated) {
                hs_ds26DNud = hs_cm26DNiL.hscall();
            }
            var hs_ds126DNiP = hs_ds26DNud.data[0];
            var hs_wild26DNuc = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_ischr(hs_ds126DNiP)];
            var hs_ds326DNiU = hs_wild26DNuc[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DNiU];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNuf, hs_sat26DNue);
    };
    this.hs_szuisblk.evaluate = function (hs_cm26DNiZ) {
        var hs_sat26DNuk = new $hs.Thunk();
        hs_sat26DNuk.evaluateOnce = function () {
            var hs_sat26DNug = new $hs.Thunk();
            hs_sat26DNug.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNug);
        };
        var hs_sat26DNul = new $hs.Thunk();
        hs_sat26DNul.evaluateOnce = function () {
            var hs_ds26DNuj = hs_cm26DNiZ;
            if (hs_cm26DNiZ.notEvaluated) {
                hs_ds26DNuj = hs_cm26DNiZ.hscall();
            }
            var hs_ds126DNj3 = hs_ds26DNuj.data[0];
            var hs_wild26DNui = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isblk(hs_ds126DNj3)];
            var hs_ds326DNj8 = hs_wild26DNui[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DNj8];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNul, hs_sat26DNuk);
    };
    this.hs_szuisdir.evaluate = function (hs_cm26DNjd) {
        var hs_sat26DNuq = new $hs.Thunk();
        hs_sat26DNuq.evaluateOnce = function () {
            var hs_sat26DNum = new $hs.Thunk();
            hs_sat26DNum.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNum);
        };
        var hs_sat26DNur = new $hs.Thunk();
        hs_sat26DNur.evaluateOnce = function () {
            var hs_ds26DNup = hs_cm26DNjd;
            if (hs_cm26DNjd.notEvaluated) {
                hs_ds26DNup = hs_cm26DNjd.hscall();
            }
            var hs_ds126DNjh = hs_ds26DNup.data[0];
            var hs_wild26DNuo = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isdir(hs_ds126DNjh)];
            var hs_ds326DNjm = hs_wild26DNuo[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DNjm];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNur, hs_sat26DNuq);
    };
    this.hs_szuisfifo.evaluate = function (hs_cm26DNjr) {
        var hs_sat26DNuw = new $hs.Thunk();
        hs_sat26DNuw.evaluateOnce = function () {
            var hs_sat26DNus = new $hs.Thunk();
            hs_sat26DNus.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNus);
        };
        var hs_sat26DNux = new $hs.Thunk();
        hs_sat26DNux.evaluateOnce = function () {
            var hs_ds26DNuv = hs_cm26DNjr;
            if (hs_cm26DNjr.notEvaluated) {
                hs_ds26DNuv = hs_cm26DNjr.hscall();
            }
            var hs_ds126DNjv = hs_ds26DNuv.data[0];
            var hs_wild26DNuu = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isfifo(hs_ds126DNjv)];
            var hs_ds326DNjA = hs_wild26DNuu[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DNjA];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNux, hs_sat26DNuw);
    };
    this.hs_szuissock.evaluate = function (hs_cmode26DNjF) {
        var hs_sat26DNuC = new $hs.Thunk();
        hs_sat26DNuC.evaluateOnce = function () {
            var hs_sat26DNuy = new $hs.Thunk();
            hs_sat26DNuy.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNuy);
        };
        var hs_sat26DNuD = new $hs.Thunk();
        hs_sat26DNuD.evaluateOnce = function () {
            var hs_ds26DNuB = hs_cmode26DNjF;
            if (hs_cmode26DNjF.notEvaluated) {
                hs_ds26DNuB = hs_cmode26DNjF.hscall();
            }
            var hs_ds126DNjJ = hs_ds26DNuB.data[0];
            var hs_wild26DNuA = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_issock(hs_ds126DNjJ)];
            var hs_ds326DNjO = hs_wild26DNuA[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DNjO];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DNuD, hs_sat26DNuC);
    };
    this.hs_statGetType.evaluate = function (hs_pzustat26DNjT) {
        var hs_sat26DNuO = new $hs.Func(1);
        hs_sat26DNuO.evaluate = function (hs_czumode26DNka) {
            var hs_wild26DNuE = $hs.modules.SystemziPosixziInternals.hs_szuisdir.hscall(hs_czumode26DNka);
            switch (hs_wild26DNuE.tag) {
            case 1:
                var hs_sat26DNuH = new $hs.Thunk();
                hs_sat26DNuH.evaluateOnce = function () {
                    var hs_sat26DNuF = new $hs.Thunk();
                    hs_sat26DNuF.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_szuischr.hscall(hs_czumode26DNka);
                    };
                    var hs_sat26DNuG = new $hs.Thunk();
                    hs_sat26DNuG.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_szuissock.hscall(hs_czumode26DNka);
                    };
                    return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DNuG, hs_sat26DNuF);
                };
                var hs_sat26DNuL = new $hs.Thunk();
                hs_sat26DNuL.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_szuisfifo.hscall(hs_czumode26DNka);
                };
                var hs_wild126DNuK = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DNuL, hs_sat26DNuH);
                switch (hs_wild126DNuK.tag) {
                case 1:
                    var hs_wild226DNuJ = $hs.modules.SystemziPosixziInternals.hs_szuisreg.hscall(hs_czumode26DNka);
                    switch (hs_wild226DNuJ.tag) {
                    case 1:
                        var hs_wild326DNuI = $hs.modules.SystemziPosixziInternals.hs_szuisblk.hscall(hs_czumode26DNka);
                        switch (hs_wild326DNuI.tag) {
                        case 1:
                            return $hs.modules.GHCziIOziException.hs_ioError.hscall($hs.modules.SystemziPosixziInternals.hs_ioezuunknownfiletype);
                        case 2:
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziDevice.hs_RawDevice);
                        }
                    case 2:
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziDevice.hs_RegularFile);
                    }
                case 2:
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziDevice.hs_Stream);
                }
            case 2:
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziIOziDevice.hs_Directory);
            }
        };
        var hs_sat26DNuR = new $hs.Thunk();
        hs_sat26DNuR.evaluateOnce = function () {
            var hs_ds26DNuN = hs_pzustat26DNjT;
            if (hs_pzustat26DNjT.notEvaluated) {
                hs_ds26DNuN = hs_pzustat26DNjT.hscall();
            }
            var hs_ds126DNjY = hs_ds26DNuN.data[0];
            var hs_sat26DNuQ = new $hs.Func(1);
            hs_sat26DNuQ.evaluate = function (hs_ds226DNjZ) {
                var hs_wild26DNuM = [hs_ds226DNjZ, __hscore_st_mode(hs_ds126DNjY)];
                var hs_ds326DNk4 = hs_wild26DNuM[0];
                var hs_ds426DNk5 = hs_wild26DNuM[1];
                var hs_sat26DNuP = new $hs.Data(1);
                hs_sat26DNuP.data = [hs_ds426DNk5];
                return [hs_ds326DNk4, hs_sat26DNuP];
            };
            if (hs_sat26DNuQ.notEvaluated) {
                return hs_sat26DNuQ.hscall();
            } else {
                return hs_sat26DNuQ;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNuR, hs_sat26DNuO);
    };
    this.hs_fileType.evaluate = function (hs_file26DNkn) {
        var hs_sat26DNv4 = new $hs.Func(1);
        hs_sat26DNv4.evaluate = function (hs_pzustat26DNkv) {
            var hs_sat26DNv2 = new $hs.Func(1);
            hs_sat26DNv2.evaluate = function (hs_pzufile26DNks) {
                var hs_sat26DNuV = new $hs.Thunk();
                hs_sat26DNuV.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_statGetType.hscall(hs_pzustat26DNkv);
                };
                var hs_sat26DNv1 = new $hs.Thunk();
                hs_sat26DNv1.evaluateOnce = function () {
                    var hs_sat26DNuY = new $hs.Thunk();
                    hs_sat26DNuY.evaluateOnce = function () {
                        var hs_ds26DNuU = hs_pzufile26DNks;
                        if (hs_pzufile26DNks.notEvaluated) {
                            hs_ds26DNuU = hs_pzufile26DNks.hscall();
                        }
                        var hs_ds126DNkA = hs_ds26DNuU.data[0];
                        var hs_ds226DNuT = hs_pzustat26DNkv;
                        if (hs_pzustat26DNkv.notEvaluated) {
                            hs_ds226DNuT = hs_pzustat26DNkv.hscall();
                        }
                        var hs_ds326DNkB = hs_ds226DNuT.data[0];
                        var hs_sat26DNuX = new $hs.Func(1);
                        hs_sat26DNuX.evaluate = function (hs_ds426DNkC) {
                            var hs_wild26DNuS = [hs_ds426DNkC, __hscore_stat(hs_ds126DNkA, hs_ds326DNkB)];
                            var hs_ds526DNkH = hs_wild26DNuS[0];
                            var hs_ds626DNkI = hs_wild26DNuS[1];
                            var hs_sat26DNuW = new $hs.Data(1);
                            hs_sat26DNuW.data = [hs_ds626DNkI];
                            return [hs_ds526DNkH, hs_sat26DNuW];
                        };
                        if (hs_sat26DNuX.notEvaluated) {
                            return hs_sat26DNuX.hscall();
                        } else {
                            return hs_sat26DNuX;
                        }
                    };
                    var hs_sat26DNv0 = new $hs.Thunk();
                    hs_sat26DNv0.evaluateOnce = function () {
                        var hs_sat26DNuZ = new $hs.Thunk();
                        hs_sat26DNuZ.evaluateOnce = function () {
                            return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fileType\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNuZ);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNv0, hs_sat26DNuY);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNv1, hs_sat26DNuV);
            };
            var hs_sat26DNv3 = new $hs.Thunk();
            hs_sat26DNv3.evaluateOnce = function () {
                return $hs.modules.ForeignziCziString.hs_withCString.hscall(hs_file26DNkn);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNv3, hs_sat26DNv2);
        };
        var hs_sat26DNv5 = new $hs.Thunk();
        hs_sat26DNv5.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzustat);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNv5, hs_sat26DNv4);
    };
    this.hs_fdStat.evaluate = function (hs_fd26DNkV) {
        var hs_sat26DNvv = new $hs.Func(1);
        hs_sat26DNvv.evaluate = function (hs_pzustat26DNkY) {
            var hs_sat26DNvo = new $hs.Thunk();
            hs_sat26DNvo.evaluateOnce = function () {
                var hs_sat26DNvj = new $hs.Func(1);
                hs_sat26DNvj.evaluate = function (hs_ty26DNlO) {
                    var hs_sat26DNvf = new $hs.Func(1);
                    hs_sat26DNvf.evaluate = function (hs_dev26DNlP) {
                        var hs_sat26DNv9 = new $hs.Func(1);
                        hs_sat26DNv9.evaluate = function (hs_ino26DNlQ) {
                            var hs_sat26DNv6 = new $hs.Data(1);
                            hs_sat26DNv6.data = [hs_ty26DNlO, hs_dev26DNlP, hs_ino26DNlQ];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNv6);
                        };
                        var hs_sat26DNvc = new $hs.Thunk();
                        hs_sat26DNvc.evaluateOnce = function () {
                            var hs_ds26DNv8 = hs_pzustat26DNkY;
                            if (hs_pzustat26DNkY.notEvaluated) {
                                hs_ds26DNv8 = hs_pzustat26DNkY.hscall();
                            }
                            var hs_ds126DNlC = hs_ds26DNv8.data[0];
                            var hs_sat26DNvb = new $hs.Func(1);
                            hs_sat26DNvb.evaluate = function (hs_ds226DNlD) {
                                var hs_wild26DNv7 = [hs_ds226DNlD, __hscore_st_ino(hs_ds126DNlC)];
                                var hs_ds326DNlI = hs_wild26DNv7[0];
                                var hs_ds426DNlJ = hs_wild26DNv7[1];
                                var hs_sat26DNva = new $hs.Data(1);
                                hs_sat26DNva.data = [hs_ds426DNlJ];
                                return [hs_ds326DNlI, hs_sat26DNva];
                            };
                            if (hs_sat26DNvb.notEvaluated) {
                                return hs_sat26DNvb.hscall();
                            } else {
                                return hs_sat26DNvb;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNvc, hs_sat26DNv9);
                    };
                    var hs_sat26DNvi = new $hs.Thunk();
                    hs_sat26DNvi.evaluateOnce = function () {
                        var hs_ds26DNve = hs_pzustat26DNkY;
                        if (hs_pzustat26DNkY.notEvaluated) {
                            hs_ds26DNve = hs_pzustat26DNkY.hscall();
                        }
                        var hs_ds126DNlm = hs_ds26DNve.data[0];
                        var hs_sat26DNvh = new $hs.Func(1);
                        hs_sat26DNvh.evaluate = function (hs_ds226DNln) {
                            var hs_wild26DNvd = [hs_ds226DNln, __hscore_st_dev(hs_ds126DNlm)];
                            var hs_ds326DNls = hs_wild26DNvd[0];
                            var hs_ds426DNlt = hs_wild26DNvd[1];
                            var hs_sat26DNvg = new $hs.Data(1);
                            hs_sat26DNvg.data = [hs_ds426DNlt];
                            return [hs_ds326DNls, hs_sat26DNvg];
                        };
                        if (hs_sat26DNvh.notEvaluated) {
                            return hs_sat26DNvh.hscall();
                        } else {
                            return hs_sat26DNvh;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNvi, hs_sat26DNvf);
                };
                var hs_sat26DNvk = new $hs.Thunk();
                hs_sat26DNvk.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_statGetType.hscall(hs_pzustat26DNkY);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNvk, hs_sat26DNvj);
            };
            var hs_sat26DNvu = new $hs.Thunk();
            hs_sat26DNvu.evaluateOnce = function () {
                var hs_sat26DNvr = new $hs.Thunk();
                hs_sat26DNvr.evaluateOnce = function () {
                    var hs_ds26DNvn = hs_fd26DNkV;
                    if (hs_fd26DNkV.notEvaluated) {
                        hs_ds26DNvn = hs_fd26DNkV.hscall();
                    }
                    var hs_ds126DNl3 = hs_ds26DNvn.data[0];
                    var hs_ds226DNvm = hs_pzustat26DNkY;
                    if (hs_pzustat26DNkY.notEvaluated) {
                        hs_ds226DNvm = hs_pzustat26DNkY.hscall();
                    }
                    var hs_ds326DNl4 = hs_ds226DNvm.data[0];
                    var hs_sat26DNvq = new $hs.Func(1);
                    hs_sat26DNvq.evaluate = function (hs_ds426DNl5) {
                        var hs_wild26DNvl = [hs_ds426DNl5, __hscore_fstat(hs_ds126DNl3, hs_ds326DNl4)];
                        var hs_ds526DNla = hs_wild26DNvl[0];
                        var hs_ds626DNlb = hs_wild26DNvl[1];
                        var hs_sat26DNvp = new $hs.Data(1);
                        hs_sat26DNvp.data = [hs_ds626DNlb];
                        return [hs_ds526DNla, hs_sat26DNvp];
                    };
                    if (hs_sat26DNvq.notEvaluated) {
                        return hs_sat26DNvq.hscall();
                    } else {
                        return hs_sat26DNvq;
                    }
                };
                var hs_sat26DNvt = new $hs.Thunk();
                hs_sat26DNvt.evaluateOnce = function () {
                    var hs_sat26DNvs = new $hs.Thunk();
                    hs_sat26DNvs.evaluateOnce = function () {
                        return $hs.modules.GHCziBase.hs_unpackCStringzh.hscall("fdType\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DNvs);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNvt, hs_sat26DNvr);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNvu, hs_sat26DNvo);
        };
        var hs_sat26DNvw = new $hs.Thunk();
        hs_sat26DNvw.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzustat);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DNvw, hs_sat26DNvv);
    };
    this.hs_fdType.evaluate = function (hs_fd26DNlY) {
        var hs_sat26DNvA = new $hs.Func(1);
        hs_sat26DNvA.evaluate = function (hs_ds26DNm1) {
            var hs_wild26DNvx = hs_ds26DNm1;
            if (hs_ds26DNm1.notEvaluated) {
                hs_wild26DNvx = hs_ds26DNm1.hscall();
            }
            var hs_ty26DNm6 = hs_wild26DNvx.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ty26DNm6);
        };
        var hs_sat26DNvB = new $hs.Thunk();
        hs_sat26DNvB.evaluateOnce = function () {
            return $hs.modules.SystemziPosixziInternals.hs_fdStat.hscall(hs_fd26DNlY);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DNvB, hs_sat26DNvA);
    };
};
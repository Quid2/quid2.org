
$hs.modules.SystemziPosixziInternals = new $hs.Module();
$hs.modules.SystemziPosixziInternals.dependencies = ["GHC.Prim", "GHC.Types", "GHC.CString", "GHC.Unit", "GHC.Integer", "Control.Monad", "Data.Maybe", "GHC.Base", "GHC.Num", "GHC.Real", "GHC.Classes", "GHC.Foreign", "GHC.IO.Device", "GHC.IO.Encoding", "GHC.IO.Exception", "GHC.Ptr", "GHC.Word", "Data.Bits", "Foreign.C.Error", "Foreign.C.String", "Foreign.C.Types", "Foreign.Marshal.Alloc", "Foreign.Marshal.Utils", "Foreign.Storable", "System.Posix.Types"];
$hs.modules.SystemziPosixziInternals.initBeforeDependencies = function () {
    this.hs_peekFilePathLen = new $hs.Thunk();
    this.hs_peekFilePath = new $hs.Thunk();
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
    this.hs_czusafezuopen = new $hs.Func(4);
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
    this.hs_puts = new $hs.Func(1);
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
    this.hs_peekFilePathLen.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
    this.hs_peekFilePath.evaluateOnce = function () {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluateOnce();
    };
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
    this.hs_czusafezuopen.notEvaluated = true;
    this.hs_czusafezuopen.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
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
    this.hs_czuszuisreg.evaluate = function (hs_ds26DomR) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DomR);
    };
    this.hs_czuszuischr.notEvaluated = true;
    this.hs_czuszuischr.evaluate = function (hs_ds26Don2) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26Don2);
    };
    this.hs_czuszuisblk.notEvaluated = true;
    this.hs_czuszuisblk.evaluate = function (hs_ds26Dond) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26Dond);
    };
    this.hs_czuszuisdir.notEvaluated = true;
    this.hs_czuszuisdir.evaluate = function (hs_ds26Dono) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26Dono);
    };
    this.hs_czuszuisfifo.notEvaluated = true;
    this.hs_czuszuisfifo.evaluate = function (hs_ds26Donz) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26Donz);
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
    this.hs_tcSetAttr.evaluate = function (hs_fd26Doqy, hs_fun26DosR) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26Doqy, hs_fun26DosR);
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
    this.hs_czuszuissock.evaluate = function (hs_ds26DouN) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_ds26DouN);
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
    this.hs_puts.notEvaluated = true;
    this.hs_puts.evaluate = function (hs_s26Dovm) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_s26Dovm);
    };
    this.hs_fdGetMode.notEvaluated = true;
    this.hs_fdGetMode.evaluate = function (hs_fd26Dow0) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26Dow0);
    };
    this.hs_setEcho.notEvaluated = true;
    this.hs_setEcho.evaluate = function (hs_fd26DowI, hs_on26Dox4) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DowI, hs_on26Dox4);
    };
    this.hs_getEcho.notEvaluated = true;
    this.hs_getEcho.evaluate = function (hs_fd26DoxA) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DoxA);
    };
    this.hs_setCooked.notEvaluated = true;
    this.hs_setCooked.evaluate = function (hs_fd26Doy4, hs_cooked26Doyq) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26Doy4, hs_cooked26Doyq);
    };
    this.hs_setNonBlockingFD.notEvaluated = true;
    this.hs_setNonBlockingFD.evaluate = function (hs_fd26Dozv, hs_set26DozU) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26Dozv, hs_set26DozU);
    };
    this.hs_setCloseOnExec.notEvaluated = true;
    this.hs_setCloseOnExec.evaluate = function (hs_fd26DoAx) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DoAx);
    };
    this.hs_szuisreg.notEvaluated = true;
    this.hs_szuisreg.evaluate = function (hs_cm26DoAA) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DoAA);
    };
    this.hs_fdFileSizze.notEvaluated = true;
    this.hs_fdFileSizze.evaluate = function (hs_fd26DoAS) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DoAS);
    };
    this.hs_szuischr.notEvaluated = true;
    this.hs_szuischr.evaluate = function (hs_cm26DoBV) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DoBV);
    };
    this.hs_szuisblk.notEvaluated = true;
    this.hs_szuisblk.evaluate = function (hs_cm26DoC9) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DoC9);
    };
    this.hs_szuisdir.notEvaluated = true;
    this.hs_szuisdir.evaluate = function (hs_cm26DoCn) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DoCn);
    };
    this.hs_szuisfifo.notEvaluated = true;
    this.hs_szuisfifo.evaluate = function (hs_cm26DoCB) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cm26DoCB);
    };
    this.hs_szuissock.notEvaluated = true;
    this.hs_szuissock.evaluate = function (hs_cmode26DoCP) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_cmode26DoCP);
    };
    this.hs_statGetType.notEvaluated = true;
    this.hs_statGetType.evaluate = function (hs_pzustat26DoD3) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_pzustat26DoD3);
    };
    this.hs_fileType.notEvaluated = true;
    this.hs_fileType.evaluate = function (hs_file26DoDx) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_file26DoDx);
    };
    this.hs_fdStat.notEvaluated = true;
    this.hs_fdStat.evaluate = function (hs_fd26DoE5) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DoE5);
    };
    this.hs_fdType.notEvaluated = true;
    this.hs_fdType.evaluate = function (hs_fd26DoF8) {
        $hs.modules.SystemziPosixziInternals.loadDependencies();
        return this.evaluate(hs_fd26DoF8);
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
    this.hs_czusafezuopen.notEvaluated = false;
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
    this.hs_puts.notEvaluated = false;
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
    var hs_a25uZD6 = new $hs.Thunk();
    var hs_a125uZD7 = new $hs.Thunk();
    var hs_a225uZD8 = new $hs.Func(2);
    var hs_a325uZDo = new $hs.Func(3);
    var hs_a425uZDG = new $hs.Func(3);
    var hs_a525uZE1 = new $hs.Func(3);
    var hs_a625uZEm = new $hs.Func(2);
    var hs_a725uZEC = new $hs.Func(3);
    var hs_a825uZEX = new $hs.Func(2);
    var hs_a925uZFd = new $hs.Func(3);
    var hs_a1025uZFy = new $hs.Func(3);
    var hs_a1125uZFT = new $hs.Func(2);
    var hs_a1225uZG9 = new $hs.Func(4);
    var hs_a1325uZGz = new $hs.Func(3);
    var hs_a1425uZGU = new $hs.Func(4);
    var hs_a1525uZHk = new $hs.Func(4);
    var hs_a1625uZHK = new $hs.Func(4);
    var hs_a1725uZIa = new $hs.Func(4);
    var hs_a1825uZIA = new $hs.Func(3);
    var hs_a1925uZIV = new $hs.Func(2);
    var hs_a2025uZJb = new $hs.Func(4);
    var hs_a2125uZJB = new $hs.Func(4);
    var hs_a2225uZK1 = new $hs.Func(3);
    var hs_a2325uZKm = new $hs.Func(2);
    var hs_a2425uZKC = new $hs.Func(1);
    var hs_a2525uZKN = new $hs.Func(3);
    var hs_a2625uZL8 = new $hs.Func(4);
    var hs_a2725uZLy = new $hs.Func(4);
    var hs_a2825uZLY = new $hs.Func(1);
    var hs_a2925uZM9 = new $hs.Func(3);
    var hs_a3025uZMu = new $hs.Func(3);
    var hs_a3125uZMP = new $hs.Func(2);
    var hs_a3225uZN5 = new $hs.Func(2);
    var hs_a3325uZNl = new $hs.Func(3);
    var hs_a3425uZNG = new $hs.Func(4);
    var hs_a3525uZO6 = new $hs.Func(3);
    var hs_a3625uZOr = new $hs.Func(4);
    var hs_a3725uZOR = new $hs.Func(3);
    var hs_a3825uZPc = new $hs.Func(4);
    var hs_a3925uZRz = new $hs.Func(2);
    var hs_a4025uZRP = new $hs.Func(2);
    var hs_a4125uZS5 = new $hs.Func(2);
    var hs_a4225uZSl = new $hs.Func(2);
    var hs_a4325uZSB = new $hs.Func(2);
    var hs_a4425uZXI = new $hs.Func(2);
    var hs_a4525uZXY = new $hs.Func(3);
    var hs_a4625uZYg = new $hs.Func(2);
    this.hs_peekFilePathLen.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_peekCStringLen.hscall($hs.modules.GHCziIOziEncoding.hs_fileSystemEncoding);
    };
    this.hs_peekFilePath.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_peekCString.hscall($hs.modules.GHCziIOziEncoding.hs_fileSystemEncoding);
    };
    this.hs_withFilePath.evaluateOnce = function () {
        return $hs.modules.GHCziForeign.hs_withCString.hscall($hs.modules.GHCziIOziEncoding.hs_fileSystemEncoding);
    };
    hs_a25uZD6.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("fdType\x00");
    };
    hs_a125uZD7.evaluateOnce = function () {
        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("unknown file type\x00");
    };
    this.hs_ioezuunknownfiletype.data = [$hs.modules.DataziMaybe.hs_Nothing, $hs.modules.GHCziIOziException.hs_UnsupportedOperation, hs_a25uZD6, hs_a125uZD7, $hs.modules.DataziMaybe.hs_Nothing, $hs.modules.DataziMaybe.hs_Nothing];
    hs_a225uZD8.evaluate = function (hs_ds26Do9r, hs_eta26Do9w) {
        var hs_ds126DoFj = hs_ds26Do9r;
        if (hs_ds26Do9r.notEvaluated) {
            hs_ds126DoFj = hs_ds26Do9r.hscall();
        }
        var hs_ds226Do9v = hs_ds126DoFj.data[0];
        var hs_wild26DoFk = [hs_eta26Do9w, __hscore_get_saved_termios(hs_ds226Do9v)];
        var hs_ds326Do9B = hs_wild26DoFk[0];
        var hs_ds426Do9C = hs_wild26DoFk[1];
        var hs_sat26DoFi = new $hs.Data(1);
        hs_sat26DoFi.data = [hs_ds426Do9C];
        return [hs_ds326Do9B, hs_sat26DoFi];
    };
    this.hs_getzusavedzutermios.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a225uZD8.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a325uZDo.evaluate = function (hs_ds26Do9I, hs_ds126Do9L, hs_eta26Do9R) {
        var hs_ds226DoFm = hs_ds26Do9I;
        if (hs_ds26Do9I.notEvaluated) {
            hs_ds226DoFm = hs_ds26Do9I.hscall();
        }
        var hs_ds326Do9P = hs_ds226DoFm.data[0];
        var hs_ds426DoFl = hs_ds126Do9L;
        if (hs_ds126Do9L.notEvaluated) {
            hs_ds426DoFl = hs_ds126Do9L.hscall();
        }
        var hs_ds526Do9Q = hs_ds426DoFl.data[0];
        var hs_wild26DoFn = [hs_eta26Do9R, __hscore_set_saved_termios(hs_ds326Do9P, hs_ds526Do9Q)];
        var hs_ds626Do9V = hs_wild26DoFn[0];
        return [hs_ds626Do9V, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_setzusavedzutermios.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a325uZDo.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a425uZDG.evaluate = function (hs_ds26Doa0, hs_ds126Doa3, hs_eta26Doa9) {
        var hs_ds226DoFq = hs_ds26Doa0;
        if (hs_ds26Doa0.notEvaluated) {
            hs_ds226DoFq = hs_ds26Doa0.hscall();
        }
        var hs_ds326Doa7 = hs_ds226DoFq.data[0];
        var hs_ds426DoFp = hs_ds126Doa3;
        if (hs_ds126Doa3.notEvaluated) {
            hs_ds426DoFp = hs_ds126Doa3.hscall();
        }
        var hs_ds526Doa8 = hs_ds426DoFp.data[0];
        var hs_wild26DoFr = [hs_eta26Doa9, access(hs_ds326Doa7, hs_ds526Doa8)];
        var hs_ds626Doae = hs_wild26DoFr[0];
        var hs_ds726Doaf = hs_wild26DoFr[1];
        var hs_sat26DoFo = new $hs.Data(1);
        hs_sat26DoFo.data = [hs_ds726Doaf];
        return [hs_ds626Doae, hs_sat26DoFo];
    };
    this.hs_czuaccess.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a425uZDG.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a525uZE1.evaluate = function (hs_ds26Doal, hs_ds126Doao, hs_eta26Doau) {
        var hs_ds226DoFu = hs_ds26Doal;
        if (hs_ds26Doal.notEvaluated) {
            hs_ds226DoFu = hs_ds26Doal.hscall();
        }
        var hs_ds326Doas = hs_ds226DoFu.data[0];
        var hs_ds426DoFt = hs_ds126Doao;
        if (hs_ds126Doao.notEvaluated) {
            hs_ds426DoFt = hs_ds126Doao.hscall();
        }
        var hs_ds526Doat = hs_ds426DoFt.data[0];
        var hs_wild26DoFv = [hs_eta26Doau, chmod(hs_ds326Doas, hs_ds526Doat)];
        var hs_ds626Doaz = hs_wild26DoFv[0];
        var hs_ds726DoaA = hs_wild26DoFv[1];
        var hs_sat26DoFs = new $hs.Data(1);
        hs_sat26DoFs.data = [hs_ds726DoaA];
        return [hs_ds626Doaz, hs_sat26DoFs];
    };
    this.hs_czuchmod.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a525uZE1.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a625uZEm.evaluate = function (hs_ds26DoaF, hs_eta26DoaK) {
        var hs_ds126DoFx = hs_ds26DoaF;
        if (hs_ds26DoaF.notEvaluated) {
            hs_ds126DoFx = hs_ds26DoaF.hscall();
        }
        var hs_ds226DoaJ = hs_ds126DoFx.data[0];
        var hs_wild26DoFy = [hs_eta26DoaK, close(hs_ds226DoaJ)];
        var hs_ds326DoaP = hs_wild26DoFy[0];
        var hs_ds426DoaQ = hs_wild26DoFy[1];
        var hs_sat26DoFw = new $hs.Data(1);
        hs_sat26DoFw.data = [hs_ds426DoaQ];
        return [hs_ds326DoaP, hs_sat26DoFw];
    };
    this.hs_czuclose.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a625uZEm.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a725uZEC.evaluate = function (hs_ds26DoaW, hs_ds126DoaZ, hs_eta26Dob5) {
        var hs_ds226DoFB = hs_ds26DoaW;
        if (hs_ds26DoaW.notEvaluated) {
            hs_ds226DoFB = hs_ds26DoaW.hscall();
        }
        var hs_ds326Dob3 = hs_ds226DoFB.data[0];
        var hs_ds426DoFA = hs_ds126DoaZ;
        if (hs_ds126DoaZ.notEvaluated) {
            hs_ds426DoFA = hs_ds126DoaZ.hscall();
        }
        var hs_ds526Dob4 = hs_ds426DoFA.data[0];
        var hs_wild26DoFC = [hs_eta26Dob5, creat(hs_ds326Dob3, hs_ds526Dob4)];
        var hs_ds626Doba = hs_wild26DoFC[0];
        var hs_ds726Dobb = hs_wild26DoFC[1];
        var hs_sat26DoFz = new $hs.Data(1);
        hs_sat26DoFz.data = [hs_ds726Dobb];
        return [hs_ds626Doba, hs_sat26DoFz];
    };
    this.hs_czucreat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a725uZEC.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a825uZEX.evaluate = function (hs_ds26Dobg, hs_eta26Dobl) {
        var hs_ds126DoFE = hs_ds26Dobg;
        if (hs_ds26Dobg.notEvaluated) {
            hs_ds126DoFE = hs_ds26Dobg.hscall();
        }
        var hs_ds226Dobk = hs_ds126DoFE.data[0];
        var hs_wild26DoFF = [hs_eta26Dobl, dup(hs_ds226Dobk)];
        var hs_ds326Dobq = hs_wild26DoFF[0];
        var hs_ds426Dobr = hs_wild26DoFF[1];
        var hs_sat26DoFD = new $hs.Data(1);
        hs_sat26DoFD.data = [hs_ds426Dobr];
        return [hs_ds326Dobq, hs_sat26DoFD];
    };
    this.hs_czudup.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a825uZEX.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a925uZFd.evaluate = function (hs_ds26Dobx, hs_ds126DobA, hs_eta26DobG) {
        var hs_ds226DoFI = hs_ds26Dobx;
        if (hs_ds26Dobx.notEvaluated) {
            hs_ds226DoFI = hs_ds26Dobx.hscall();
        }
        var hs_ds326DobE = hs_ds226DoFI.data[0];
        var hs_ds426DoFH = hs_ds126DobA;
        if (hs_ds126DobA.notEvaluated) {
            hs_ds426DoFH = hs_ds126DobA.hscall();
        }
        var hs_ds526DobF = hs_ds426DoFH.data[0];
        var hs_wild26DoFJ = [hs_eta26DobG, dup2(hs_ds326DobE, hs_ds526DobF)];
        var hs_ds626DobL = hs_wild26DoFJ[0];
        var hs_ds726DobM = hs_wild26DoFJ[1];
        var hs_sat26DoFG = new $hs.Data(1);
        hs_sat26DoFG.data = [hs_ds726DobM];
        return [hs_ds626DobL, hs_sat26DoFG];
    };
    this.hs_czudup2.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a925uZFd.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1025uZFy.evaluate = function (hs_ds26DobS, hs_ds126DobV, hs_eta26Doc1) {
        var hs_ds226DoFM = hs_ds26DobS;
        if (hs_ds26DobS.notEvaluated) {
            hs_ds226DoFM = hs_ds26DobS.hscall();
        }
        var hs_ds326DobZ = hs_ds226DoFM.data[0];
        var hs_ds426DoFL = hs_ds126DobV;
        if (hs_ds126DobV.notEvaluated) {
            hs_ds426DoFL = hs_ds126DobV.hscall();
        }
        var hs_ds526Doc0 = hs_ds426DoFL.data[0];
        var hs_wild26DoFN = [hs_eta26Doc1, __hscore_fstat(hs_ds326DobZ, hs_ds526Doc0)];
        var hs_ds626Doc6 = hs_wild26DoFN[0];
        var hs_ds726Doc7 = hs_wild26DoFN[1];
        var hs_sat26DoFK = new $hs.Data(1);
        hs_sat26DoFK.data = [hs_ds726Doc7];
        return [hs_ds626Doc6, hs_sat26DoFK];
    };
    this.hs_czufstat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1025uZFy.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1125uZFT.evaluate = function (hs_ds26Docc, hs_eta26Doch) {
        var hs_ds126DoFP = hs_ds26Docc;
        if (hs_ds26Docc.notEvaluated) {
            hs_ds126DoFP = hs_ds26Docc.hscall();
        }
        var hs_ds226Docg = hs_ds126DoFP.data[0];
        var hs_wild26DoFQ = [hs_eta26Doch, isatty(hs_ds226Docg)];
        var hs_ds326Docm = hs_wild26DoFQ[0];
        var hs_ds426Docn = hs_wild26DoFQ[1];
        var hs_sat26DoFO = new $hs.Data(1);
        hs_sat26DoFO.data = [hs_ds426Docn];
        return [hs_ds326Docm, hs_sat26DoFO];
    };
    this.hs_czuisatty.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1125uZFT.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1225uZG9.evaluate = function (hs_ds26Docu, hs_ds126Docx, hs_ds226DocA, hs_eta26DocH) {
        var hs_ds326DoFU = hs_ds26Docu;
        if (hs_ds26Docu.notEvaluated) {
            hs_ds326DoFU = hs_ds26Docu.hscall();
        }
        var hs_ds426DocE = hs_ds326DoFU.data[0];
        var hs_ds526DoFT = hs_ds126Docx;
        if (hs_ds126Docx.notEvaluated) {
            hs_ds526DoFT = hs_ds126Docx.hscall();
        }
        var hs_ds626DocF = hs_ds526DoFT.data[0];
        var hs_ds726DoFS = hs_ds226DocA;
        if (hs_ds226DocA.notEvaluated) {
            hs_ds726DoFS = hs_ds226DocA.hscall();
        }
        var hs_ds826DocG = hs_ds726DoFS.data[0];
        var hs_wild26DoFV = [hs_eta26DocH, __hscore_lseek(hs_ds426DocE, hs_ds626DocF, hs_ds826DocG)];
        var hs_ds926DocM = hs_wild26DoFV[0];
        var hs_ds1026DocN = hs_wild26DoFV[1];
        var hs_sat26DoFR = new $hs.Data(1);
        hs_sat26DoFR.data = [hs_ds1026DocN];
        return [hs_ds926DocM, hs_sat26DoFR];
    };
    this.hs_czulseek.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1225uZG9.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1325uZGz.evaluate = function (hs_ds26DocT, hs_ds126DocW, hs_eta26Dod2) {
        var hs_ds226DoFY = hs_ds26DocT;
        if (hs_ds26DocT.notEvaluated) {
            hs_ds226DoFY = hs_ds26DocT.hscall();
        }
        var hs_ds326Dod0 = hs_ds226DoFY.data[0];
        var hs_ds426DoFX = hs_ds126DocW;
        if (hs_ds126DocW.notEvaluated) {
            hs_ds426DoFX = hs_ds126DocW.hscall();
        }
        var hs_ds526Dod1 = hs_ds426DoFX.data[0];
        var hs_wild26DoFZ = [hs_eta26Dod2, __hscore_lstat(hs_ds326Dod0, hs_ds526Dod1)];
        var hs_ds626Dod7 = hs_wild26DoFZ[0];
        var hs_ds726Dod8 = hs_wild26DoFZ[1];
        var hs_sat26DoFW = new $hs.Data(1);
        hs_sat26DoFW.data = [hs_ds726Dod8];
        return [hs_ds626Dod7, hs_sat26DoFW];
    };
    this.hs_lstat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1325uZGz.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1425uZGU.evaluate = function (hs_ds26Dodf, hs_ds126Dodi, hs_ds226Dodl, hs_eta26Dods) {
        var hs_ds326DoG3 = hs_ds26Dodf;
        if (hs_ds26Dodf.notEvaluated) {
            hs_ds326DoG3 = hs_ds26Dodf.hscall();
        }
        var hs_ds426Dodp = hs_ds326DoG3.data[0];
        var hs_ds526DoG2 = hs_ds126Dodi;
        if (hs_ds126Dodi.notEvaluated) {
            hs_ds526DoG2 = hs_ds126Dodi.hscall();
        }
        var hs_ds626Dodq = hs_ds526DoG2.data[0];
        var hs_ds726DoG1 = hs_ds226Dodl;
        if (hs_ds226Dodl.notEvaluated) {
            hs_ds726DoG1 = hs_ds226Dodl.hscall();
        }
        var hs_ds826Dodr = hs_ds726DoG1.data[0];
        var hs_wild26DoG4 = [hs_eta26Dods, __hscore_open(hs_ds426Dodp, hs_ds626Dodq, hs_ds826Dodr)];
        var hs_ds926Dodx = hs_wild26DoG4[0];
        var hs_ds1026Dody = hs_wild26DoG4[1];
        var hs_sat26DoG0 = new $hs.Data(1);
        hs_sat26DoG0.data = [hs_ds1026Dody];
        return [hs_ds926Dodx, hs_sat26DoG0];
    };
    this.hs_czuopen.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1425uZGU.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1525uZHk.evaluate = function (hs_ds26DodF, hs_ds126DodI, hs_ds226DodL, hs_eta26DodS) {
        var hs_ds326DoG8 = hs_ds26DodF;
        if (hs_ds26DodF.notEvaluated) {
            hs_ds326DoG8 = hs_ds26DodF.hscall();
        }
        var hs_ds426DodP = hs_ds326DoG8.data[0];
        var hs_ds526DoG7 = hs_ds126DodI;
        if (hs_ds126DodI.notEvaluated) {
            hs_ds526DoG7 = hs_ds126DodI.hscall();
        }
        var hs_ds626DodQ = hs_ds526DoG7.data[0];
        var hs_ds726DoG6 = hs_ds226DodL;
        if (hs_ds226DodL.notEvaluated) {
            hs_ds726DoG6 = hs_ds226DodL.hscall();
        }
        var hs_ds826DodR = hs_ds726DoG6.data[0];
        var hs_wild26DoG9 = [hs_eta26DodS, __hscore_open(hs_ds426DodP, hs_ds626DodQ, hs_ds826DodR)];
        var hs_ds926DodX = hs_wild26DoG9[0];
        var hs_ds1026DodY = hs_wild26DoG9[1];
        var hs_sat26DoG5 = new $hs.Data(1);
        hs_sat26DoG5.data = [hs_ds1026DodY];
        return [hs_ds926DodX, hs_sat26DoG5];
    };
    this.hs_czusafezuopen.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1525uZHk.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1625uZHK.evaluate = function (hs_ds26Doe5, hs_ds126Doe8, hs_ds226Doeb, hs_eta26Doei) {
        var hs_ds326DoGd = hs_ds26Doe5;
        if (hs_ds26Doe5.notEvaluated) {
            hs_ds326DoGd = hs_ds26Doe5.hscall();
        }
        var hs_ds426Doef = hs_ds326DoGd.data[0];
        var hs_ds526DoGc = hs_ds126Doe8;
        if (hs_ds126Doe8.notEvaluated) {
            hs_ds526DoGc = hs_ds126Doe8.hscall();
        }
        var hs_ds626Doeg = hs_ds526DoGc.data[0];
        var hs_ds726DoGb = hs_ds226Doeb;
        if (hs_ds226Doeb.notEvaluated) {
            hs_ds726DoGb = hs_ds226Doeb.hscall();
        }
        var hs_ds826Doeh = hs_ds726DoGb.data[0];
        var hs_wild26DoGe = [hs_eta26Doei, read(hs_ds426Doef, hs_ds626Doeg, hs_ds826Doeh)];
        var hs_ds926Doen = hs_wild26DoGe[0];
        var hs_ds1026Doeo = hs_wild26DoGe[1];
        var hs_sat26DoGa = new $hs.Data(1);
        hs_sat26DoGa.data = [hs_ds1026Doeo];
        return [hs_ds926Doen, hs_sat26DoGa];
    };
    this.hs_czuread.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1625uZHK.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1725uZIa.evaluate = function (hs_ds26Doev, hs_ds126Doey, hs_ds226DoeB, hs_eta26DoeI) {
        var hs_ds326DoGi = hs_ds26Doev;
        if (hs_ds26Doev.notEvaluated) {
            hs_ds326DoGi = hs_ds26Doev.hscall();
        }
        var hs_ds426DoeF = hs_ds326DoGi.data[0];
        var hs_ds526DoGh = hs_ds126Doey;
        if (hs_ds126Doey.notEvaluated) {
            hs_ds526DoGh = hs_ds126Doey.hscall();
        }
        var hs_ds626DoeG = hs_ds526DoGh.data[0];
        var hs_ds726DoGg = hs_ds226DoeB;
        if (hs_ds226DoeB.notEvaluated) {
            hs_ds726DoGg = hs_ds226DoeB.hscall();
        }
        var hs_ds826DoeH = hs_ds726DoGg.data[0];
        var hs_wild26DoGj = [hs_eta26DoeI, read(hs_ds426DoeF, hs_ds626DoeG, hs_ds826DoeH)];
        var hs_ds926DoeN = hs_wild26DoGj[0];
        var hs_ds1026DoeO = hs_wild26DoGj[1];
        var hs_sat26DoGf = new $hs.Data(1);
        hs_sat26DoGf.data = [hs_ds1026DoeO];
        return [hs_ds926DoeN, hs_sat26DoGf];
    };
    this.hs_czusafezuread.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1725uZIa.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1825uZIA.evaluate = function (hs_ds26DoeU, hs_ds126DoeX, hs_eta26Dof3) {
        var hs_ds226DoGm = hs_ds26DoeU;
        if (hs_ds26DoeU.notEvaluated) {
            hs_ds226DoGm = hs_ds26DoeU.hscall();
        }
        var hs_ds326Dof1 = hs_ds226DoGm.data[0];
        var hs_ds426DoGl = hs_ds126DoeX;
        if (hs_ds126DoeX.notEvaluated) {
            hs_ds426DoGl = hs_ds126DoeX.hscall();
        }
        var hs_ds526Dof2 = hs_ds426DoGl.data[0];
        var hs_wild26DoGn = [hs_eta26Dof3, __hscore_stat(hs_ds326Dof1, hs_ds526Dof2)];
        var hs_ds626Dof8 = hs_wild26DoGn[0];
        var hs_ds726Dof9 = hs_wild26DoGn[1];
        var hs_sat26DoGk = new $hs.Data(1);
        hs_sat26DoGk.data = [hs_ds726Dof9];
        return [hs_ds626Dof8, hs_sat26DoGk];
    };
    this.hs_czustat.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1825uZIA.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a1925uZIV.evaluate = function (hs_ds26Dofe, hs_eta26Dofj) {
        var hs_ds126DoGp = hs_ds26Dofe;
        if (hs_ds26Dofe.notEvaluated) {
            hs_ds126DoGp = hs_ds26Dofe.hscall();
        }
        var hs_ds226Dofi = hs_ds126DoGp.data[0];
        var hs_wild26DoGq = [hs_eta26Dofj, umask(hs_ds226Dofi)];
        var hs_ds326Dofo = hs_wild26DoGq[0];
        var hs_ds426Dofp = hs_wild26DoGq[1];
        var hs_sat26DoGo = new $hs.Data(1);
        hs_sat26DoGo.data = [hs_ds426Dofp];
        return [hs_ds326Dofo, hs_sat26DoGo];
    };
    this.hs_czuumask.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a1925uZIV.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2025uZJb.evaluate = function (hs_ds26Dofw, hs_ds126Dofz, hs_ds226DofC, hs_eta26DofJ) {
        var hs_ds326DoGu = hs_ds26Dofw;
        if (hs_ds26Dofw.notEvaluated) {
            hs_ds326DoGu = hs_ds26Dofw.hscall();
        }
        var hs_ds426DofG = hs_ds326DoGu.data[0];
        var hs_ds526DoGt = hs_ds126Dofz;
        if (hs_ds126Dofz.notEvaluated) {
            hs_ds526DoGt = hs_ds126Dofz.hscall();
        }
        var hs_ds626DofH = hs_ds526DoGt.data[0];
        var hs_ds726DoGs = hs_ds226DofC;
        if (hs_ds226DofC.notEvaluated) {
            hs_ds726DoGs = hs_ds226DofC.hscall();
        }
        var hs_ds826DofI = hs_ds726DoGs.data[0];
        var hs_wild26DoGv = [hs_eta26DofJ, write(hs_ds426DofG, hs_ds626DofH, hs_ds826DofI)];
        var hs_ds926DofO = hs_wild26DoGv[0];
        var hs_ds1026DofP = hs_wild26DoGv[1];
        var hs_sat26DoGr = new $hs.Data(1);
        hs_sat26DoGr.data = [hs_ds1026DofP];
        return [hs_ds926DofO, hs_sat26DoGr];
    };
    this.hs_czuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2025uZJb.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2125uZJB.evaluate = function (hs_ds26DofW, hs_ds126DofZ, hs_ds226Dog2, hs_eta26Dog9) {
        var hs_ds326DoGz = hs_ds26DofW;
        if (hs_ds26DofW.notEvaluated) {
            hs_ds326DoGz = hs_ds26DofW.hscall();
        }
        var hs_ds426Dog6 = hs_ds326DoGz.data[0];
        var hs_ds526DoGy = hs_ds126DofZ;
        if (hs_ds126DofZ.notEvaluated) {
            hs_ds526DoGy = hs_ds126DofZ.hscall();
        }
        var hs_ds626Dog7 = hs_ds526DoGy.data[0];
        var hs_ds726DoGx = hs_ds226Dog2;
        if (hs_ds226Dog2.notEvaluated) {
            hs_ds726DoGx = hs_ds226Dog2.hscall();
        }
        var hs_ds826Dog8 = hs_ds726DoGx.data[0];
        var hs_wild26DoGA = [hs_eta26Dog9, write(hs_ds426Dog6, hs_ds626Dog7, hs_ds826Dog8)];
        var hs_ds926Doge = hs_wild26DoGA[0];
        var hs_ds1026Dogf = hs_wild26DoGA[1];
        var hs_sat26DoGw = new $hs.Data(1);
        hs_sat26DoGw.data = [hs_ds1026Dogf];
        return [hs_ds926Doge, hs_sat26DoGw];
    };
    this.hs_czusafezuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2125uZJB.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2225uZK1.evaluate = function (hs_ds26Dogl, hs_ds126Dogo, hs_eta26Dogu) {
        var hs_ds226DoGD = hs_ds26Dogl;
        if (hs_ds26Dogl.notEvaluated) {
            hs_ds226DoGD = hs_ds26Dogl.hscall();
        }
        var hs_ds326Dogs = hs_ds226DoGD.data[0];
        var hs_ds426DoGC = hs_ds126Dogo;
        if (hs_ds126Dogo.notEvaluated) {
            hs_ds426DoGC = hs_ds126Dogo.hscall();
        }
        var hs_ds526Dogt = hs_ds426DoGC.data[0];
        var hs_wild26DoGE = [hs_eta26Dogu, __hscore_ftruncate(hs_ds326Dogs, hs_ds526Dogt)];
        var hs_ds626Dogz = hs_wild26DoGE[0];
        var hs_ds726DogA = hs_wild26DoGE[1];
        var hs_sat26DoGB = new $hs.Data(1);
        hs_sat26DoGB.data = [hs_ds726DogA];
        return [hs_ds626Dogz, hs_sat26DoGB];
    };
    this.hs_czuftruncate.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2225uZK1.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2325uZKm.evaluate = function (hs_ds26DogF, hs_eta26DogK) {
        var hs_ds126DoGG = hs_ds26DogF;
        if (hs_ds26DogF.notEvaluated) {
            hs_ds126DoGG = hs_ds26DogF.hscall();
        }
        var hs_ds226DogJ = hs_ds126DoGG.data[0];
        var hs_wild26DoGH = [hs_eta26DogK, unlink(hs_ds226DogJ)];
        var hs_ds326DogP = hs_wild26DoGH[0];
        var hs_ds426DogQ = hs_wild26DoGH[1];
        var hs_sat26DoGF = new $hs.Data(1);
        hs_sat26DoGF.data = [hs_ds426DogQ];
        return [hs_ds326DogP, hs_sat26DoGF];
    };
    this.hs_czuunlink.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2325uZKm.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2425uZKC.evaluate = function (hs_ds26DogV) {
        var hs_wild26DoGJ = [hs_ds26DogV, getpid()];
        var hs_ds126Doh0 = hs_wild26DoGJ[0];
        var hs_ds226Doh1 = hs_wild26DoGJ[1];
        var hs_sat26DoGI = new $hs.Data(1);
        hs_sat26DoGI.data = [hs_ds226Doh1];
        return [hs_ds126Doh0, hs_sat26DoGI];
    };
    this.hs_czugetpid.evaluate = function (hs_eta1cW6l3) {
        return hs_a2425uZKC.hscall(hs_eta1cW6l3);
    };
    hs_a2525uZKN.evaluate = function (hs_ds26Doh7, hs_ds126Doha, hs_eta26Dohg) {
        var hs_ds226DoGM = hs_ds26Doh7;
        if (hs_ds26Doh7.notEvaluated) {
            hs_ds226DoGM = hs_ds26Doh7.hscall();
        }
        var hs_ds326Dohe = hs_ds226DoGM.data[0];
        var hs_ds426DoGL = hs_ds126Doha;
        if (hs_ds126Doha.notEvaluated) {
            hs_ds426DoGL = hs_ds126Doha.hscall();
        }
        var hs_ds526Dohf = hs_ds426DoGL.data[0];
        var hs_wild26DoGN = [hs_eta26Dohg, fcntl_read(hs_ds326Dohe, hs_ds526Dohf)];
        var hs_ds626Dohl = hs_wild26DoGN[0];
        var hs_ds726Dohm = hs_wild26DoGN[1];
        var hs_sat26DoGK = new $hs.Data(1);
        hs_sat26DoGK.data = [hs_ds726Dohm];
        return [hs_ds626Dohl, hs_sat26DoGK];
    };
    this.hs_czufcntlzuread.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2525uZKN.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2625uZL8.evaluate = function (hs_ds26Doht, hs_ds126Dohw, hs_ds226Dohz, hs_eta26DohG) {
        var hs_ds326DoGR = hs_ds26Doht;
        if (hs_ds26Doht.notEvaluated) {
            hs_ds326DoGR = hs_ds26Doht.hscall();
        }
        var hs_ds426DohD = hs_ds326DoGR.data[0];
        var hs_ds526DoGQ = hs_ds126Dohw;
        if (hs_ds126Dohw.notEvaluated) {
            hs_ds526DoGQ = hs_ds126Dohw.hscall();
        }
        var hs_ds626DohE = hs_ds526DoGQ.data[0];
        var hs_ds726DoGP = hs_ds226Dohz;
        if (hs_ds226Dohz.notEvaluated) {
            hs_ds726DoGP = hs_ds226Dohz.hscall();
        }
        var hs_ds826DohF = hs_ds726DoGP.data[0];
        var hs_wild26DoGS = [hs_eta26DohG, fcntl_write(hs_ds426DohD, hs_ds626DohE, hs_ds826DohF)];
        var hs_ds926DohL = hs_wild26DoGS[0];
        var hs_ds1026DohM = hs_wild26DoGS[1];
        var hs_sat26DoGO = new $hs.Data(1);
        hs_sat26DoGO.data = [hs_ds1026DohM];
        return [hs_ds926DohL, hs_sat26DoGO];
    };
    this.hs_czufcntlzuwrite.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2625uZL8.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2725uZLy.evaluate = function (hs_ds26DohT, hs_ds126DohW, hs_ds226DohZ, hs_eta26Doi6) {
        var hs_ds326DoGW = hs_ds26DohT;
        if (hs_ds26DohT.notEvaluated) {
            hs_ds326DoGW = hs_ds26DohT.hscall();
        }
        var hs_ds426Doi3 = hs_ds326DoGW.data[0];
        var hs_ds526DoGV = hs_ds126DohW;
        if (hs_ds126DohW.notEvaluated) {
            hs_ds526DoGV = hs_ds126DohW.hscall();
        }
        var hs_ds626Doi4 = hs_ds526DoGV.data[0];
        var hs_ds726DoGU = hs_ds226DohZ;
        if (hs_ds226DohZ.notEvaluated) {
            hs_ds726DoGU = hs_ds226DohZ.hscall();
        }
        var hs_ds826Doi5 = hs_ds726DoGU.data[0];
        var hs_wild26DoGX = [hs_eta26Doi6, fcntl_lock(hs_ds426Doi3, hs_ds626Doi4, hs_ds826Doi5)];
        var hs_ds926Doib = hs_wild26DoGX[0];
        var hs_ds1026Doic = hs_wild26DoGX[1];
        var hs_sat26DoGT = new $hs.Data(1);
        hs_sat26DoGT.data = [hs_ds1026Doic];
        return [hs_ds926Doib, hs_sat26DoGT];
    };
    this.hs_czufcntlzulock.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2725uZLy.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a2825uZLY.evaluate = function (hs_ds26Doih) {
        var hs_wild26DoGZ = [hs_ds26Doih, fork()];
        var hs_ds126Doim = hs_wild26DoGZ[0];
        var hs_ds226Doin = hs_wild26DoGZ[1];
        var hs_sat26DoGY = new $hs.Data(1);
        hs_sat26DoGY.data = [hs_ds226Doin];
        return [hs_ds126Doim, hs_sat26DoGY];
    };
    this.hs_czufork.evaluate = function (hs_eta1cW6l3) {
        return hs_a2825uZLY.hscall(hs_eta1cW6l3);
    };
    hs_a2925uZM9.evaluate = function (hs_ds26Doit, hs_ds126Doiw, hs_eta26DoiC) {
        var hs_ds226DoH2 = hs_ds26Doit;
        if (hs_ds26Doit.notEvaluated) {
            hs_ds226DoH2 = hs_ds26Doit.hscall();
        }
        var hs_ds326DoiA = hs_ds226DoH2.data[0];
        var hs_ds426DoH1 = hs_ds126Doiw;
        if (hs_ds126Doiw.notEvaluated) {
            hs_ds426DoH1 = hs_ds126Doiw.hscall();
        }
        var hs_ds526DoiB = hs_ds426DoH1.data[0];
        var hs_wild26DoH3 = [hs_eta26DoiC, link(hs_ds326DoiA, hs_ds526DoiB)];
        var hs_ds626DoiH = hs_wild26DoH3[0];
        var hs_ds726DoiI = hs_wild26DoH3[1];
        var hs_sat26DoH0 = new $hs.Data(1);
        hs_sat26DoH0.data = [hs_ds726DoiI];
        return [hs_ds626DoiH, hs_sat26DoH0];
    };
    this.hs_czulink.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a2925uZM9.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3025uZMu.evaluate = function (hs_ds26DoiO, hs_ds126DoiR, hs_eta26DoiX) {
        var hs_ds226DoH6 = hs_ds26DoiO;
        if (hs_ds26DoiO.notEvaluated) {
            hs_ds226DoH6 = hs_ds26DoiO.hscall();
        }
        var hs_ds326DoiV = hs_ds226DoH6.data[0];
        var hs_ds426DoH5 = hs_ds126DoiR;
        if (hs_ds126DoiR.notEvaluated) {
            hs_ds426DoH5 = hs_ds126DoiR.hscall();
        }
        var hs_ds526DoiW = hs_ds426DoH5.data[0];
        var hs_wild26DoH7 = [hs_eta26DoiX, mkfifo(hs_ds326DoiV, hs_ds526DoiW)];
        var hs_ds626Doj2 = hs_wild26DoH7[0];
        var hs_ds726Doj3 = hs_wild26DoH7[1];
        var hs_sat26DoH4 = new $hs.Data(1);
        hs_sat26DoH4.data = [hs_ds726Doj3];
        return [hs_ds626Doj2, hs_sat26DoH4];
    };
    this.hs_czumkfifo.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3025uZMu.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3125uZMP.evaluate = function (hs_ds26Doj8, hs_eta26Dojd) {
        var hs_ds126DoH9 = hs_ds26Doj8;
        if (hs_ds26Doj8.notEvaluated) {
            hs_ds126DoH9 = hs_ds26Doj8.hscall();
        }
        var hs_ds226Dojc = hs_ds126DoH9.data[0];
        var hs_wild26DoHa = [hs_eta26Dojd, pipe(hs_ds226Dojc)];
        var hs_ds326Doji = hs_wild26DoHa[0];
        var hs_ds426Dojj = hs_wild26DoHa[1];
        var hs_sat26DoH8 = new $hs.Data(1);
        hs_sat26DoH8.data = [hs_ds426Dojj];
        return [hs_ds326Doji, hs_sat26DoH8];
    };
    this.hs_czupipe.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3125uZMP.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3225uZN5.evaluate = function (hs_ds26Dojo, hs_eta26Dojt) {
        var hs_ds126DoHc = hs_ds26Dojo;
        if (hs_ds26Dojo.notEvaluated) {
            hs_ds126DoHc = hs_ds26Dojo.hscall();
        }
        var hs_ds226Dojs = hs_ds126DoHc.data[0];
        var hs_wild26DoHd = [hs_eta26Dojt, __hscore_sigemptyset(hs_ds226Dojs)];
        var hs_ds326Dojy = hs_wild26DoHd[0];
        var hs_ds426Dojz = hs_wild26DoHd[1];
        var hs_sat26DoHb = new $hs.Data(1);
        hs_sat26DoHb.data = [hs_ds426Dojz];
        return [hs_ds326Dojy, hs_sat26DoHb];
    };
    this.hs_czusigemptyset.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3225uZN5.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3325uZNl.evaluate = function (hs_ds26DojF, hs_ds126DojI, hs_eta26DojO) {
        var hs_ds226DoHg = hs_ds26DojF;
        if (hs_ds26DojF.notEvaluated) {
            hs_ds226DoHg = hs_ds26DojF.hscall();
        }
        var hs_ds326DojM = hs_ds226DoHg.data[0];
        var hs_ds426DoHf = hs_ds126DojI;
        if (hs_ds126DojI.notEvaluated) {
            hs_ds426DoHf = hs_ds126DojI.hscall();
        }
        var hs_ds526DojN = hs_ds426DoHf.data[0];
        var hs_wild26DoHh = [hs_eta26DojO, __hscore_sigaddset(hs_ds326DojM, hs_ds526DojN)];
        var hs_ds626DojT = hs_wild26DoHh[0];
        var hs_ds726DojU = hs_wild26DoHh[1];
        var hs_sat26DoHe = new $hs.Data(1);
        hs_sat26DoHe.data = [hs_ds726DojU];
        return [hs_ds626DojT, hs_sat26DoHe];
    };
    this.hs_czusigaddset.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3325uZNl.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3425uZNG.evaluate = function (hs_ds26Dok1, hs_ds126Dok4, hs_ds226Dok7, hs_eta26Doke) {
        var hs_ds326DoHl = hs_ds26Dok1;
        if (hs_ds26Dok1.notEvaluated) {
            hs_ds326DoHl = hs_ds26Dok1.hscall();
        }
        var hs_ds426Dokb = hs_ds326DoHl.data[0];
        var hs_ds526DoHk = hs_ds126Dok4;
        if (hs_ds126Dok4.notEvaluated) {
            hs_ds526DoHk = hs_ds126Dok4.hscall();
        }
        var hs_ds626Dokc = hs_ds526DoHk.data[0];
        var hs_ds726DoHj = hs_ds226Dok7;
        if (hs_ds226Dok7.notEvaluated) {
            hs_ds726DoHj = hs_ds226Dok7.hscall();
        }
        var hs_ds826Dokd = hs_ds726DoHj.data[0];
        var hs_wild26DoHm = [hs_eta26Doke, sigprocmask(hs_ds426Dokb, hs_ds626Dokc, hs_ds826Dokd)];
        var hs_ds926Dokj = hs_wild26DoHm[0];
        var hs_ds1026Dokk = hs_wild26DoHm[1];
        var hs_sat26DoHi = new $hs.Data(1);
        hs_sat26DoHi.data = [hs_ds1026Dokk];
        return [hs_ds926Dokj, hs_sat26DoHi];
    };
    this.hs_czusigprocmask.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3425uZNG.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3525uZO6.evaluate = function (hs_ds26Dokq, hs_ds126Dokt, hs_eta26Dokz) {
        var hs_ds226DoHp = hs_ds26Dokq;
        if (hs_ds26Dokq.notEvaluated) {
            hs_ds226DoHp = hs_ds26Dokq.hscall();
        }
        var hs_ds326Dokx = hs_ds226DoHp.data[0];
        var hs_ds426DoHo = hs_ds126Dokt;
        if (hs_ds126Dokt.notEvaluated) {
            hs_ds426DoHo = hs_ds126Dokt.hscall();
        }
        var hs_ds526Doky = hs_ds426DoHo.data[0];
        var hs_wild26DoHq = [hs_eta26Dokz, tcgetattr(hs_ds326Dokx, hs_ds526Doky)];
        var hs_ds626DokE = hs_wild26DoHq[0];
        var hs_ds726DokF = hs_wild26DoHq[1];
        var hs_sat26DoHn = new $hs.Data(1);
        hs_sat26DoHn.data = [hs_ds726DokF];
        return [hs_ds626DokE, hs_sat26DoHn];
    };
    this.hs_czutcgetattr.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3525uZO6.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3625uZOr.evaluate = function (hs_ds26DokM, hs_ds126DokP, hs_ds226DokS, hs_eta26DokZ) {
        var hs_ds326DoHu = hs_ds26DokM;
        if (hs_ds26DokM.notEvaluated) {
            hs_ds326DoHu = hs_ds26DokM.hscall();
        }
        var hs_ds426DokW = hs_ds326DoHu.data[0];
        var hs_ds526DoHt = hs_ds126DokP;
        if (hs_ds126DokP.notEvaluated) {
            hs_ds526DoHt = hs_ds126DokP.hscall();
        }
        var hs_ds626DokX = hs_ds526DoHt.data[0];
        var hs_ds726DoHs = hs_ds226DokS;
        if (hs_ds226DokS.notEvaluated) {
            hs_ds726DoHs = hs_ds226DokS.hscall();
        }
        var hs_ds826DokY = hs_ds726DoHs.data[0];
        var hs_wild26DoHv = [hs_eta26DokZ, tcsetattr(hs_ds426DokW, hs_ds626DokX, hs_ds826DokY)];
        var hs_ds926Dol4 = hs_wild26DoHv[0];
        var hs_ds1026Dol5 = hs_wild26DoHv[1];
        var hs_sat26DoHr = new $hs.Data(1);
        hs_sat26DoHr.data = [hs_ds1026Dol5];
        return [hs_ds926Dol4, hs_sat26DoHr];
    };
    this.hs_czutcsetattr.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3625uZOr.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3725uZOR.evaluate = function (hs_ds26Dolb, hs_ds126Dole, hs_eta26Dolk) {
        var hs_ds226DoHy = hs_ds26Dolb;
        if (hs_ds26Dolb.notEvaluated) {
            hs_ds226DoHy = hs_ds26Dolb.hscall();
        }
        var hs_ds326Doli = hs_ds226DoHy.data[0];
        var hs_ds426DoHx = hs_ds126Dole;
        if (hs_ds126Dole.notEvaluated) {
            hs_ds426DoHx = hs_ds126Dole.hscall();
        }
        var hs_ds526Dolj = hs_ds426DoHx.data[0];
        var hs_wild26DoHz = [hs_eta26Dolk, __hscore_utime(hs_ds326Doli, hs_ds526Dolj)];
        var hs_ds626Dolp = hs_wild26DoHz[0];
        var hs_ds726Dolq = hs_wild26DoHz[1];
        var hs_sat26DoHw = new $hs.Data(1);
        hs_sat26DoHw.data = [hs_ds726Dolq];
        return [hs_ds626Dolp, hs_sat26DoHw];
    };
    this.hs_czuutime.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3725uZOR.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a3825uZPc.evaluate = function (hs_ds26Dolx, hs_ds126DolA, hs_ds226DolD, hs_eta26DolK) {
        var hs_ds326DoHD = hs_ds26Dolx;
        if (hs_ds26Dolx.notEvaluated) {
            hs_ds326DoHD = hs_ds26Dolx.hscall();
        }
        var hs_ds426DolH = hs_ds326DoHD.data[0];
        var hs_ds526DoHC = hs_ds126DolA;
        if (hs_ds126DolA.notEvaluated) {
            hs_ds526DoHC = hs_ds126DolA.hscall();
        }
        var hs_ds626DolI = hs_ds526DoHC.data[0];
        var hs_ds726DoHB = hs_ds226DolD;
        if (hs_ds226DolD.notEvaluated) {
            hs_ds726DoHB = hs_ds226DolD.hscall();
        }
        var hs_ds826DolJ = hs_ds726DoHB.data[0];
        var hs_wild26DoHE = [hs_eta26DolK, waitpid(hs_ds426DolH, hs_ds626DolI, hs_ds826DolJ)];
        var hs_ds926DolP = hs_wild26DoHE[0];
        var hs_ds1026DolQ = hs_wild26DoHE[1];
        var hs_sat26DoHA = new $hs.Data(1);
        hs_sat26DoHA.data = [hs_ds1026DolQ];
        return [hs_ds926DolP, hs_sat26DoHA];
    };
    this.hs_czuwaitpid.evaluate = function (hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3825uZPc.hscall(hs_eta1cW6l6, hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_ozuRDONLY.evaluateOnce = function () {
        var hs_wild26DoHG = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_rdonly()];
        var hs_ds126DolX = hs_wild26DoHG[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DolX];
        return $res;
    };
    this.hs_ozuWRONLY.evaluateOnce = function () {
        var hs_wild26DoHI = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_wronly()];
        var hs_ds126Dom3 = hs_wild26DoHI[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dom3];
        return $res;
    };
    this.hs_ozuRDWR.evaluateOnce = function () {
        var hs_wild26DoHK = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_rdwr()];
        var hs_ds126Dom9 = hs_wild26DoHK[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dom9];
        return $res;
    };
    this.hs_ozuAPPEND.evaluateOnce = function () {
        var hs_wild26DoHM = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_append()];
        var hs_ds126Domf = hs_wild26DoHM[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Domf];
        return $res;
    };
    this.hs_ozuCREAT.evaluateOnce = function () {
        var hs_wild26DoHO = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_creat()];
        var hs_ds126Doml = hs_wild26DoHO[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Doml];
        return $res;
    };
    this.hs_ozuEXCL.evaluateOnce = function () {
        var hs_wild26DoHQ = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_excl()];
        var hs_ds126Domr = hs_wild26DoHQ[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Domr];
        return $res;
    };
    this.hs_ozuTRUNC.evaluateOnce = function () {
        var hs_wild26DoHS = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_trunc()];
        var hs_ds126Domx = hs_wild26DoHS[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Domx];
        return $res;
    };
    this.hs_ozuNOCTTY.evaluateOnce = function () {
        var hs_wild26DoHU = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_noctty()];
        var hs_ds126DomD = hs_wild26DoHU[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DomD];
        return $res;
    };
    this.hs_ozuNONBLOCK.evaluateOnce = function () {
        var hs_wild26DoHW = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_nonblock()];
        var hs_ds126DomJ = hs_wild26DoHW[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DomJ];
        return $res;
    };
    this.hs_ozuBINARY.evaluateOnce = function () {
        var hs_wild26DoHY = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_o_binary()];
        var hs_ds126DomP = hs_wild26DoHY[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DomP];
        return $res;
    };
    this.hs_czuszuisreg.evaluate = function (hs_ds26DomR) {
        var hs_ds126DoI0 = hs_ds26DomR;
        if (hs_ds26DomR.notEvaluated) {
            hs_ds126DoI0 = hs_ds26DomR.hscall();
        }
        var hs_ds226DomV = hs_ds126DoI0.data[0];
        var hs_wild26DoI1 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isreg(hs_ds226DomV)];
        var hs_ds426Don0 = hs_wild26DoI1[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426Don0];
        return $res;
    };
    this.hs_czuszuischr.evaluate = function (hs_ds26Don2) {
        var hs_ds126DoI3 = hs_ds26Don2;
        if (hs_ds26Don2.notEvaluated) {
            hs_ds126DoI3 = hs_ds26Don2.hscall();
        }
        var hs_ds226Don6 = hs_ds126DoI3.data[0];
        var hs_wild26DoI4 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_ischr(hs_ds226Don6)];
        var hs_ds426Donb = hs_wild26DoI4[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426Donb];
        return $res;
    };
    this.hs_czuszuisblk.evaluate = function (hs_ds26Dond) {
        var hs_ds126DoI6 = hs_ds26Dond;
        if (hs_ds26Dond.notEvaluated) {
            hs_ds126DoI6 = hs_ds26Dond.hscall();
        }
        var hs_ds226Donh = hs_ds126DoI6.data[0];
        var hs_wild26DoI7 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isblk(hs_ds226Donh)];
        var hs_ds426Donm = hs_wild26DoI7[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426Donm];
        return $res;
    };
    this.hs_czuszuisdir.evaluate = function (hs_ds26Dono) {
        var hs_ds126DoI9 = hs_ds26Dono;
        if (hs_ds26Dono.notEvaluated) {
            hs_ds126DoI9 = hs_ds26Dono.hscall();
        }
        var hs_ds226Dons = hs_ds126DoI9.data[0];
        var hs_wild26DoIa = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isdir(hs_ds226Dons)];
        var hs_ds426Donx = hs_wild26DoIa[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426Donx];
        return $res;
    };
    this.hs_czuszuisfifo.evaluate = function (hs_ds26Donz) {
        var hs_ds126DoIc = hs_ds26Donz;
        if (hs_ds26Donz.notEvaluated) {
            hs_ds126DoIc = hs_ds26Donz.hscall();
        }
        var hs_ds226DonD = hs_ds126DoIc.data[0];
        var hs_wild26DoId = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isfifo(hs_ds226DonD)];
        var hs_ds426DonI = hs_wild26DoId[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DonI];
        return $res;
    };
    this.hs_sizzeofzustat.evaluateOnce = function () {
        var hs_wild26DoIf = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_stat()];
        var hs_ds126DonO = hs_wild26DoIf[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DonO];
        return $res;
    };
    hs_a3925uZRz.evaluate = function (hs_ds26DonS, hs_eta26DonX) {
        var hs_ds126DoIh = hs_ds26DonS;
        if (hs_ds26DonS.notEvaluated) {
            hs_ds126DoIh = hs_ds26DonS.hscall();
        }
        var hs_ds226DonW = hs_ds126DoIh.data[0];
        var hs_wild26DoIi = [hs_eta26DonX, __hscore_st_mtime(hs_ds226DonW)];
        var hs_ds326Doo2 = hs_wild26DoIi[0];
        var hs_ds426Doo3 = hs_wild26DoIi[1];
        var hs_sat26DoIg = new $hs.Data(1);
        hs_sat26DoIg.data = [hs_ds426Doo3];
        return [hs_ds326Doo2, hs_sat26DoIg];
    };
    this.hs_stzumtime.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a3925uZRz.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4025uZRP.evaluate = function (hs_ds26Doo8, hs_eta26Dood) {
        var hs_ds126DoIk = hs_ds26Doo8;
        if (hs_ds26Doo8.notEvaluated) {
            hs_ds126DoIk = hs_ds26Doo8.hscall();
        }
        var hs_ds226Dooc = hs_ds126DoIk.data[0];
        var hs_wild26DoIl = [hs_eta26Dood, __hscore_st_si=(hs_ds226Dooc)];
        var hs_ds326Dooi = hs_wild26DoIl[0];
        var hs_ds426Dooj = hs_wild26DoIl[1];
        var hs_sat26DoIj = new $hs.Data(1);
        hs_sat26DoIj.data = [hs_ds426Dooj];
        return [hs_ds326Dooi, hs_sat26DoIj];
    };
    this.hs_stzusizze.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4025uZRP.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4125uZS5.evaluate = function (hs_ds26Dooo, hs_eta26Doot) {
        var hs_ds126DoIn = hs_ds26Dooo;
        if (hs_ds26Dooo.notEvaluated) {
            hs_ds126DoIn = hs_ds26Dooo.hscall();
        }
        var hs_ds226Doos = hs_ds126DoIn.data[0];
        var hs_wild26DoIo = [hs_eta26Doot, __hscore_st_mode(hs_ds226Doos)];
        var hs_ds326Dooy = hs_wild26DoIo[0];
        var hs_ds426Dooz = hs_wild26DoIo[1];
        var hs_sat26DoIm = new $hs.Data(1);
        hs_sat26DoIm.data = [hs_ds426Dooz];
        return [hs_ds326Dooy, hs_sat26DoIm];
    };
    this.hs_stzumode.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4125uZS5.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4225uZSl.evaluate = function (hs_ds26DooE, hs_eta26DooJ) {
        var hs_ds126DoIq = hs_ds26DooE;
        if (hs_ds26DooE.notEvaluated) {
            hs_ds126DoIq = hs_ds26DooE.hscall();
        }
        var hs_ds226DooI = hs_ds126DoIq.data[0];
        var hs_wild26DoIr = [hs_eta26DooJ, __hscore_st_dev(hs_ds226DooI)];
        var hs_ds326DooO = hs_wild26DoIr[0];
        var hs_ds426DooP = hs_wild26DoIr[1];
        var hs_sat26DoIp = new $hs.Data(1);
        hs_sat26DoIp.data = [hs_ds426DooP];
        return [hs_ds326DooO, hs_sat26DoIp];
    };
    this.hs_stzudev.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4225uZSl.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4325uZSB.evaluate = function (hs_ds26DooU, hs_eta26DooZ) {
        var hs_ds126DoIt = hs_ds26DooU;
        if (hs_ds26DooU.notEvaluated) {
            hs_ds126DoIt = hs_ds26DooU.hscall();
        }
        var hs_ds226DooY = hs_ds126DoIt.data[0];
        var hs_wild26DoIu = [hs_eta26DooZ, __hscore_st_ino(hs_ds226DooY)];
        var hs_ds326Dop4 = hs_wild26DoIu[0];
        var hs_ds426Dop5 = hs_wild26DoIu[1];
        var hs_sat26DoIs = new $hs.Data(1);
        hs_sat26DoIs.data = [hs_ds426Dop5];
        return [hs_ds326Dop4, hs_sat26DoIs];
    };
    this.hs_stzuino.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4325uZSB.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_constzuecho.evaluateOnce = function () {
        var hs_wild26DoIw = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_echo()];
        var hs_ds126Dopc = hs_wild26DoIw[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dopc];
        return $res;
    };
    this.hs_constzutcsanow.evaluateOnce = function () {
        var hs_wild26DoIy = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_tcsanow()];
        var hs_ds126Dopi = hs_wild26DoIy[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dopi];
        return $res;
    };
    this.hs_constzuicanon.evaluateOnce = function () {
        var hs_wild26DoIA = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_icanon()];
        var hs_ds126Dopo = hs_wild26DoIA[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dopo];
        return $res;
    };
    this.hs_constzuvmin.evaluateOnce = function () {
        var hs_wild26DoIC = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_vmin()];
        var hs_ds126Dopu = hs_wild26DoIC[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dopu];
        return $res;
    };
    this.hs_constzuvtime.evaluateOnce = function () {
        var hs_wild26DoIE = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_vtime()];
        var hs_ds126DopA = hs_wild26DoIE[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DopA];
        return $res;
    };
    this.hs_constzusigttou.evaluateOnce = function () {
        var hs_wild26DoIG = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sigttou()];
        var hs_ds126DopG = hs_wild26DoIG[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DopG];
        return $res;
    };
    this.hs_constzusigzublock.evaluateOnce = function () {
        var hs_wild26DoII = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_block()];
        var hs_ds126DopM = hs_wild26DoII[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DopM];
        return $res;
    };
    this.hs_constzusigzusetmask.evaluateOnce = function () {
        var hs_wild26DoIK = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_setmask()];
        var hs_ds126DopS = hs_wild26DoIK[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DopS];
        return $res;
    };
    this.hs_constzufzugetfl.evaluateOnce = function () {
        var hs_wild26DoIM = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_getfl()];
        var hs_ds126DopY = hs_wild26DoIM[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126DopY];
        return $res;
    };
    this.hs_constzufzusetfl.evaluateOnce = function () {
        var hs_wild26DoIO = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_setfl()];
        var hs_ds126Doq4 = hs_wild26DoIO[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Doq4];
        return $res;
    };
    this.hs_constzufzusetfd.evaluateOnce = function () {
        var hs_wild26DoIQ = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_setfd()];
        var hs_ds126Doqa = hs_wild26DoIQ[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Doqa];
        return $res;
    };
    this.hs_constzufdzucloexec.evaluateOnce = function () {
        var hs_wild26DoIS = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_fd_cloexec()];
        var hs_ds126Doqg = hs_wild26DoIS[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Doqg];
        return $res;
    };
    this.hs_sizzeofzutermios.evaluateOnce = function () {
        var hs_wild26DoIU = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_termios()];
        var hs_ds126Doqm = hs_wild26DoIU[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Doqm];
        return $res;
    };
    this.hs_sizzeofzusigsetzut.evaluateOnce = function () {
        var hs_wild26DoIW = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_si=of_sigset_t()];
        var hs_ds126Doqs = hs_wild26DoIW[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Doqs];
        return $res;
    };
    this.hs_tcSetAttr.evaluate = function (hs_fd26Doqy, hs_fun26DosR) {
        var hs_sat26DoIY = new $hs.Func(1);
        hs_sat26DoIY.evaluate = function (hs_pzutios26DoqB) {
            var hs_sat26DoJ0 = new $hs.Thunk();
            hs_sat26DoJ0.evaluateOnce = function () {
                var hs_sat26DoJ9 = new $hs.Thunk();
                hs_sat26DoJ9.evaluateOnce = function () {
                    var hs_sat26DoJx = new $hs.Func(1);
                    hs_sat26DoJx.evaluate = function (hs_pzusigset26DorK) {
                        var hs_sat26DoJz = new $hs.Func(1);
                        hs_sat26DoJz.evaluate = function (hs_pzuoldzusigset26Dosy) {
                            var hs_sat26DoJB = new $hs.Thunk();
                            hs_sat26DoJB.evaluateOnce = function () {
                                var hs_sat26DoJK = new $hs.Thunk();
                                hs_sat26DoJK.evaluateOnce = function () {
                                    var hs_sat26DoJV = new $hs.Thunk();
                                    hs_sat26DoJV.evaluateOnce = function () {
                                        var hs_sat26DoK7 = new $hs.Func(1);
                                        hs_sat26DoK7.evaluate = function (hs_r26DotM) {
                                            var hs_sat26DoK9 = new $hs.Thunk();
                                            hs_sat26DoK9.evaluateOnce = function () {
                                                var hs_sat26DoKl = new $hs.Thunk();
                                                hs_sat26DoKl.evaluateOnce = function () {
                                                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_r26DotM);
                                                };
                                                var hs_sat26DoKk = new $hs.Thunk();
                                                hs_sat26DoKk.evaluateOnce = function () {
                                                    var hs_sat26DoKn = new $hs.Thunk();
                                                    hs_sat26DoKn.evaluateOnce = function () {
                                                        var hs_wild26DoKr = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_setmask()];
                                                        var hs_ds126Doty = hs_wild26DoKr[1];
                                                        var hs_ds226DoKq = hs_pzuoldzusigset26Dosy;
                                                        if (hs_pzuoldzusigset26Dosy.notEvaluated) {
                                                            hs_ds226DoKq = hs_pzuoldzusigset26Dosy.hscall();
                                                        }
                                                        var hs_ds326Dotz = hs_ds226DoKq.data[0];
                                                        var hs_ds426DoKt = $hs.modules.GHCziPtr.hs_nullPtr;
                                                        if ($hs.modules.GHCziPtr.hs_nullPtr.notEvaluated) {
                                                            hs_ds426DoKt = $hs.modules.GHCziPtr.hs_nullPtr.hscall();
                                                        }
                                                        var hs_ds526DotA = hs_ds426DoKt.data[0];
                                                        var hs_sat26DoKp = new $hs.Func(1);
                                                        hs_sat26DoKp.evaluate = function (hs_ds626DotB) {
                                                            var hs_wild126DoKv = [hs_ds626DotB, sigprocmask(hs_ds126Doty, hs_ds326Dotz, hs_ds526DotA)];
                                                            var hs_ds726DotG = hs_wild126DoKv[0];
                                                            var hs_ds826DotH = hs_wild126DoKv[1];
                                                            var hs_sat26DoKu = new $hs.Data(1);
                                                            hs_sat26DoKu.data = [hs_ds826DotH];
                                                            return [hs_ds726DotG, hs_sat26DoKu];
                                                        };
                                                        if (hs_sat26DoKp.notEvaluated) {
                                                            return hs_sat26DoKp.hscall();
                                                        } else {
                                                            return hs_sat26DoKp;
                                                        }
                                                    };
                                                    var hs_sat26DoKm = new $hs.Thunk();
                                                    hs_sat26DoKm.evaluateOnce = function () {
                                                        var hs_sat26DoKo = new $hs.Thunk();
                                                        hs_sat26DoKo.evaluateOnce = function () {
                                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("sigprocmask\x00");
                                                        };
                                                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoKo);
                                                    };
                                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoKm, hs_sat26DoKn);
                                                };
                                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoKk, hs_sat26DoKl);
                                            };
                                            var hs_sat26DoK8 = new $hs.Thunk();
                                            hs_sat26DoK8.evaluateOnce = function () {
                                                var hs_sat26DoKb = new $hs.Thunk();
                                                hs_sat26DoKb.evaluateOnce = function () {
                                                    var hs_ds26DoKf = hs_fd26Doqy;
                                                    if (hs_fd26Doqy.notEvaluated) {
                                                        hs_ds26DoKf = hs_fd26Doqy.hscall();
                                                    }
                                                    var hs_ds126Dot7 = hs_ds26DoKf.data[0];
                                                    var hs_wild26DoKg = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_tcsanow()];
                                                    var hs_ds326Dot8 = hs_wild26DoKg[1];
                                                    var hs_ds426DoKe = hs_pzutios26DoqB;
                                                    if (hs_pzutios26DoqB.notEvaluated) {
                                                        hs_ds426DoKe = hs_pzutios26DoqB.hscall();
                                                    }
                                                    var hs_ds526Dot9 = hs_ds426DoKe.data[0];
                                                    var hs_sat26DoKd = new $hs.Func(1);
                                                    hs_sat26DoKd.evaluate = function (hs_ds626Dota) {
                                                        var hs_wild126DoKj = [hs_ds626Dota, tcsetattr(hs_ds126Dot7, hs_ds326Dot8, hs_ds526Dot9)];
                                                        var hs_ds726Dotf = hs_wild126DoKj[0];
                                                        var hs_ds826Dotg = hs_wild126DoKj[1];
                                                        var hs_sat26DoKi = new $hs.Data(1);
                                                        hs_sat26DoKi.data = [hs_ds826Dotg];
                                                        return [hs_ds726Dotf, hs_sat26DoKi];
                                                    };
                                                    if (hs_sat26DoKd.notEvaluated) {
                                                        return hs_sat26DoKd.hscall();
                                                    } else {
                                                        return hs_sat26DoKd;
                                                    }
                                                };
                                                var hs_sat26DoKa = new $hs.Thunk();
                                                hs_sat26DoKa.evaluateOnce = function () {
                                                    var hs_sat26DoKc = new $hs.Thunk();
                                                    hs_sat26DoKc.evaluateOnce = function () {
                                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("tcSetAttr\x00");
                                                    };
                                                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoKc);
                                                };
                                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoKa, hs_sat26DoKb);
                                            };
                                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoK8, hs_sat26DoK9);
                                        };
                                        var hs_sat26DoK6 = new $hs.Thunk();
                                        hs_sat26DoK6.evaluateOnce = function () {
                                            return hs_fun26DosR.hscall(hs_pzutios26DoqB);
                                        };
                                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoK6, hs_sat26DoK7);
                                    };
                                    var hs_sat26DoJU = new $hs.Thunk();
                                    hs_sat26DoJU.evaluateOnce = function () {
                                        var hs_sat26DoJX = new $hs.Thunk();
                                        hs_sat26DoJX.evaluateOnce = function () {
                                            var hs_wild26DoK2 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sig_block()];
                                            var hs_ds126DosD = hs_wild26DoK2[1];
                                            var hs_ds226DoK1 = hs_pzusigset26DorK;
                                            if (hs_pzusigset26DorK.notEvaluated) {
                                                hs_ds226DoK1 = hs_pzusigset26DorK.hscall();
                                            }
                                            var hs_ds326DosE = hs_ds226DoK1.data[0];
                                            var hs_ds426DoK0 = hs_pzuoldzusigset26Dosy;
                                            if (hs_pzuoldzusigset26Dosy.notEvaluated) {
                                                hs_ds426DoK0 = hs_pzuoldzusigset26Dosy.hscall();
                                            }
                                            var hs_ds526DosF = hs_ds426DoK0.data[0];
                                            var hs_sat26DoJZ = new $hs.Func(1);
                                            hs_sat26DoJZ.evaluate = function (hs_ds626DosG) {
                                                var hs_wild126DoK5 = [hs_ds626DosG, sigprocmask(hs_ds126DosD, hs_ds326DosE, hs_ds526DosF)];
                                                var hs_ds726DosL = hs_wild126DoK5[0];
                                                var hs_ds826DosM = hs_wild126DoK5[1];
                                                var hs_sat26DoK4 = new $hs.Data(1);
                                                hs_sat26DoK4.data = [hs_ds826DosM];
                                                return [hs_ds726DosL, hs_sat26DoK4];
                                            };
                                            if (hs_sat26DoJZ.notEvaluated) {
                                                return hs_sat26DoJZ.hscall();
                                            } else {
                                                return hs_sat26DoJZ;
                                            }
                                        };
                                        var hs_sat26DoJW = new $hs.Thunk();
                                        hs_sat26DoJW.evaluateOnce = function () {
                                            var hs_sat26DoJY = new $hs.Thunk();
                                            hs_sat26DoJY.evaluateOnce = function () {
                                                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("sigprocmask\x00");
                                            };
                                            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoJY);
                                        };
                                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoJW, hs_sat26DoJX);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJU, hs_sat26DoJV);
                                };
                                var hs_sat26DoJJ = new $hs.Thunk();
                                hs_sat26DoJJ.evaluateOnce = function () {
                                    var hs_sat26DoJM = new $hs.Thunk();
                                    hs_sat26DoJM.evaluateOnce = function () {
                                        var hs_ds26DoJQ = hs_pzusigset26DorK;
                                        if (hs_pzusigset26DorK.notEvaluated) {
                                            hs_ds26DoJQ = hs_pzusigset26DorK.hscall();
                                        }
                                        var hs_ds126Dosc = hs_ds26DoJQ.data[0];
                                        var hs_wild26DoJR = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_sigttou()];
                                        var hs_ds326Dosd = hs_wild26DoJR[1];
                                        var hs_sat26DoJO = new $hs.Func(1);
                                        hs_sat26DoJO.evaluate = function (hs_ds426Dose) {
                                            var hs_wild126DoJT = [hs_ds426Dose, __hscore_sigaddset(hs_ds126Dosc, hs_ds326Dosd)];
                                            var hs_ds526Dosj = hs_wild126DoJT[0];
                                            var hs_ds626Dosk = hs_wild126DoJT[1];
                                            var hs_sat26DoJS = new $hs.Data(1);
                                            hs_sat26DoJS.data = [hs_ds626Dosk];
                                            return [hs_ds526Dosj, hs_sat26DoJS];
                                        };
                                        if (hs_sat26DoJO.notEvaluated) {
                                            return hs_sat26DoJO.hscall();
                                        } else {
                                            return hs_sat26DoJO;
                                        }
                                    };
                                    var hs_sat26DoJL = new $hs.Thunk();
                                    hs_sat26DoJL.evaluateOnce = function () {
                                        var hs_sat26DoJN = new $hs.Thunk();
                                        hs_sat26DoJN.evaluateOnce = function () {
                                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("sigaddset\x00");
                                        };
                                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoJN);
                                    };
                                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoJL, hs_sat26DoJM);
                                };
                                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJJ, hs_sat26DoJK);
                            };
                            var hs_sat26DoJA = new $hs.Thunk();
                            hs_sat26DoJA.evaluateOnce = function () {
                                var hs_sat26DoJD = new $hs.Thunk();
                                hs_sat26DoJD.evaluateOnce = function () {
                                    var hs_ds26DoJG = hs_pzusigset26DorK;
                                    if (hs_pzusigset26DorK.notEvaluated) {
                                        hs_ds26DoJG = hs_pzusigset26DorK.hscall();
                                    }
                                    var hs_ds126DorP = hs_ds26DoJG.data[0];
                                    var hs_sat26DoJF = new $hs.Func(1);
                                    hs_sat26DoJF.evaluate = function (hs_ds226DorQ) {
                                        var hs_wild26DoJI = [hs_ds226DorQ, __hscore_sigemptyset(hs_ds126DorP)];
                                        var hs_ds326DorV = hs_wild26DoJI[0];
                                        var hs_ds426DorW = hs_wild26DoJI[1];
                                        var hs_sat26DoJH = new $hs.Data(1);
                                        hs_sat26DoJH.data = [hs_ds426DorW];
                                        return [hs_ds326DorV, hs_sat26DoJH];
                                    };
                                    if (hs_sat26DoJF.notEvaluated) {
                                        return hs_sat26DoJF.hscall();
                                    } else {
                                        return hs_sat26DoJF;
                                    }
                                };
                                var hs_sat26DoJC = new $hs.Thunk();
                                hs_sat26DoJC.evaluateOnce = function () {
                                    var hs_sat26DoJE = new $hs.Thunk();
                                    hs_sat26DoJE.evaluateOnce = function () {
                                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("sigemptyset\x00");
                                    };
                                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoJE);
                                };
                                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoJC, hs_sat26DoJD);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJA, hs_sat26DoJB);
                        };
                        var hs_sat26DoJy = new $hs.Thunk();
                        hs_sat26DoJy.evaluateOnce = function () {
                            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzusigsetzut);
                        };
                        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoJy, hs_sat26DoJz);
                    };
                    var hs_sat26DoJw = new $hs.Thunk();
                    hs_sat26DoJw.evaluateOnce = function () {
                        return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzusigsetzut);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoJw, hs_sat26DoJx);
                };
                var hs_sat26DoJ8 = new $hs.Thunk();
                hs_sat26DoJ8.evaluateOnce = function () {
                    var hs_sat26DoJb = new $hs.Thunk();
                    hs_sat26DoJb.evaluateOnce = function () {
                        var hs_sat26DoJg = new $hs.Func(1);
                        hs_sat26DoJg.evaluate = function (hs_p26Dord) {
                            var hs_sat26DoJm = new $hs.Thunk();
                            hs_sat26DoJm.evaluateOnce = function () {
                                var hs_sat26DoJp = new $hs.Func(1);
                                hs_sat26DoJp.evaluate = function (hs_savedzutios26Dori) {
                                    var hs_sat26DoJr = new $hs.Thunk();
                                    hs_sat26DoJr.evaluateOnce = function () {
                                        var hs_ds26DoJu = hs_fd26Doqy;
                                        if (hs_fd26Doqy.notEvaluated) {
                                            hs_ds26DoJu = hs_fd26Doqy.hscall();
                                        }
                                        var hs_ds126Dorq = hs_ds26DoJu.data[0];
                                        var hs_ds226DoJt = hs_savedzutios26Dori;
                                        if (hs_savedzutios26Dori.notEvaluated) {
                                            hs_ds226DoJt = hs_savedzutios26Dori.hscall();
                                        }
                                        var hs_ds326Dorr = hs_ds226DoJt.data[0];
                                        var hs_sat26DoJs = new $hs.Func(1);
                                        hs_sat26DoJs.evaluate = function (hs_ds426Dors) {
                                            var hs_wild26DoJv = [hs_ds426Dors, __hscore_set_saved_termios(hs_ds126Dorq, hs_ds326Dorr)];
                                            var hs_ds526Dorw = hs_wild26DoJv[0];
                                            return [hs_ds526Dorw, $hs.modules.GHCziUnit.hs_Z0T];
                                        };
                                        if (hs_sat26DoJs.notEvaluated) {
                                            return hs_sat26DoJs.hscall();
                                        } else {
                                            return hs_sat26DoJs;
                                        }
                                    };
                                    var hs_sat26DoJq = new $hs.Thunk();
                                    hs_sat26DoJq.evaluateOnce = function () {
                                        return $hs.modules.ForeignziMarshalziUtils.hs_copyBytes.hscall(hs_savedzutios26Dori, hs_pzutios26DoqB, $hs.modules.SystemziPosixziInternals.hs_sizzeofzutermios);
                                    };
                                    return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJq, hs_sat26DoJr);
                                };
                                var hs_sat26DoJo = new $hs.Thunk();
                                hs_sat26DoJo.evaluateOnce = function () {
                                    return $hs.modules.ForeignziMarshalziAlloc.hs_mallocBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzutermios);
                                };
                                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJo, hs_sat26DoJp);
                            };
                            var hs_sat26DoJl = new $hs.Thunk();
                            hs_sat26DoJl.evaluateOnce = function () {
                                var hs_sat26DoJn = new $hs.Thunk();
                                hs_sat26DoJn.evaluateOnce = function () {
                                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.GHCziPtr.hs_zdfEqPtr, hs_p26Dord, $hs.modules.GHCziPtr.hs_nullPtr);
                                };
                                return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJn);
                            };
                            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoJl, hs_sat26DoJm);
                        };
                        var hs_sat26DoJf = new $hs.Thunk();
                        hs_sat26DoJf.evaluateOnce = function () {
                            var hs_ds26DoJi = hs_fd26Doqy;
                            if (hs_fd26Doqy.notEvaluated) {
                                hs_ds26DoJi = hs_fd26Doqy.hscall();
                            }
                            var hs_ds126Dor1 = hs_ds26DoJi.data[0];
                            var hs_sat26DoJh = new $hs.Func(1);
                            hs_sat26DoJh.evaluate = function (hs_ds226Dor2) {
                                var hs_wild26DoJk = [hs_ds226Dor2, __hscore_get_saved_termios(hs_ds126Dor1)];
                                var hs_ds326Dor7 = hs_wild26DoJk[0];
                                var hs_ds426Dor8 = hs_wild26DoJk[1];
                                var hs_sat26DoJj = new $hs.Data(1);
                                hs_sat26DoJj.data = [hs_ds426Dor8];
                                return [hs_ds326Dor7, hs_sat26DoJj];
                            };
                            if (hs_sat26DoJh.notEvaluated) {
                                return hs_sat26DoJh.hscall();
                            } else {
                                return hs_sat26DoJh;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJf, hs_sat26DoJg);
                    };
                    var hs_sat26DoJa = new $hs.Thunk();
                    hs_sat26DoJa.evaluateOnce = function () {
                        var hs_sat26DoJc = new $hs.Thunk();
                        hs_sat26DoJc.evaluateOnce = function () {
                            var hs_sat26DoJd = new $hs.Thunk();
                            hs_sat26DoJd.evaluateOnce = function () {
                                var hs_sat26DoJe = new $hs.Thunk();
                                hs_sat26DoJe.evaluateOnce = function () {
                                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(2);
                                };
                                return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoJe);
                            };
                            return $hs.modules.GHCziClasses.hs_zlze.hscall($hs.modules.ForeignziCziTypes.hs_zdfOrdCInt, hs_fd26Doqy, hs_sat26DoJd);
                        };
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJc);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoJa, hs_sat26DoJb);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoJ8, hs_sat26DoJ9);
            };
            var hs_sat26DoIZ = new $hs.Thunk();
            hs_sat26DoIZ.evaluateOnce = function () {
                var hs_sat26DoJ2 = new $hs.Thunk();
                hs_sat26DoJ2.evaluateOnce = function () {
                    var hs_ds26DoJ5 = hs_fd26Doqy;
                    if (hs_fd26Doqy.notEvaluated) {
                        hs_ds26DoJ5 = hs_fd26Doqy.hscall();
                    }
                    var hs_ds126DoqG = hs_ds26DoJ5.data[0];
                    var hs_ds226DoJ4 = hs_pzutios26DoqB;
                    if (hs_pzutios26DoqB.notEvaluated) {
                        hs_ds226DoJ4 = hs_pzutios26DoqB.hscall();
                    }
                    var hs_ds326DoqH = hs_ds226DoJ4.data[0];
                    var hs_sat26DoJ3 = new $hs.Func(1);
                    hs_sat26DoJ3.evaluate = function (hs_ds426DoqI) {
                        var hs_wild26DoJ7 = [hs_ds426DoqI, tcgetattr(hs_ds126DoqG, hs_ds326DoqH)];
                        var hs_ds526DoqN = hs_wild26DoJ7[0];
                        var hs_ds626DoqO = hs_wild26DoJ7[1];
                        var hs_sat26DoJ6 = new $hs.Data(1);
                        hs_sat26DoJ6.data = [hs_ds626DoqO];
                        return [hs_ds526DoqN, hs_sat26DoJ6];
                    };
                    if (hs_sat26DoJ3.notEvaluated) {
                        return hs_sat26DoJ3.hscall();
                    } else {
                        return hs_sat26DoJ3;
                    }
                };
                var hs_sat26DoJ1 = new $hs.Thunk();
                hs_sat26DoJ1.evaluateOnce = function () {
                    return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("tcSetAttr\x00");
                };
                return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoJ1, hs_sat26DoJ2);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoIZ, hs_sat26DoJ0);
        };
        var hs_sat26DoIX = new $hs.Thunk();
        hs_sat26DoIX.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzutermios);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoIX, hs_sat26DoIY);
    };
    hs_a4425uZXI.evaluate = function (hs_ds26Dou1, hs_eta26Dou6) {
        var hs_ds126DoKx = hs_ds26Dou1;
        if (hs_ds26Dou1.notEvaluated) {
            hs_ds126DoKx = hs_ds26Dou1.hscall();
        }
        var hs_ds226Dou5 = hs_ds126DoKx.data[0];
        var hs_wild26DoKy = [hs_eta26Dou6, __hscore_lflag(hs_ds226Dou5)];
        var hs_ds326Doub = hs_wild26DoKy[0];
        var hs_ds426Douc = hs_wild26DoKy[1];
        var hs_sat26DoKw = new $hs.Data(1);
        hs_sat26DoKw.data = [hs_ds426Douc];
        return [hs_ds326Doub, hs_sat26DoKw];
    };
    this.hs_czulflag.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4425uZXI.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4525uZXY.evaluate = function (hs_ds26Doui, hs_ds126Doul, hs_eta26Dour) {
        var hs_ds226DoKA = hs_ds26Doui;
        if (hs_ds26Doui.notEvaluated) {
            hs_ds226DoKA = hs_ds26Doui.hscall();
        }
        var hs_ds326Doup = hs_ds226DoKA.data[0];
        var hs_ds426DoKz = hs_ds126Doul;
        if (hs_ds126Doul.notEvaluated) {
            hs_ds426DoKz = hs_ds126Doul.hscall();
        }
        var hs_ds526Douq = hs_ds426DoKz.data[0];
        var hs_wild26DoKB = [hs_eta26Dour, __hscore_poke_lflag(hs_ds326Doup, hs_ds526Douq)];
        var hs_ds626Douv = hs_wild26DoKB[0];
        return [hs_ds626Douv, $hs.modules.GHCziUnit.hs_Z0T];
    };
    this.hs_pokezuczulflag.evaluate = function (hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4525uZXY.hscall(hs_eta1cW6l5, hs_eta1cW6l4, hs_eta1cW6l3);
    };
    hs_a4625uZYg.evaluate = function (hs_ds26Douz, hs_eta26DouE) {
        var hs_ds126DoKD = hs_ds26Douz;
        if (hs_ds26Douz.notEvaluated) {
            hs_ds126DoKD = hs_ds26Douz.hscall();
        }
        var hs_ds226DouD = hs_ds126DoKD.data[0];
        var hs_wild26DoKE = [hs_eta26DouE, __hscore_ptr_c_cc(hs_ds226DouD)];
        var hs_ds326DouJ = hs_wild26DoKE[0];
        var hs_ds426DouK = hs_wild26DoKE[1];
        var hs_sat26DoKC = new $hs.Data(1);
        hs_sat26DoKC.data = [hs_ds426DouK];
        return [hs_ds326DouJ, hs_sat26DoKC];
    };
    this.hs_ptrzuczucc.evaluate = function (hs_eta1cW6l4, hs_eta1cW6l3) {
        return hs_a4625uZYg.hscall(hs_eta1cW6l4, hs_eta1cW6l3);
    };
    this.hs_czuszuissock.evaluate = function (hs_ds26DouN) {
        var hs_ds126DoKG = hs_ds26DouN;
        if (hs_ds26DouN.notEvaluated) {
            hs_ds126DoKG = hs_ds26DouN.hscall();
        }
        var hs_ds226DouR = hs_ds126DoKG.data[0];
        var hs_wild26DoKH = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_issock(hs_ds226DouR)];
        var hs_ds426DouW = hs_wild26DoKH[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds426DouW];
        return $res;
    };
    this.hs_dEFAULTzuBUFFERzuSIZZE.evaluateOnce = function () {
        var hs_wild26DoKJ = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_bufsiz()];
        var hs_ds126Dov2 = hs_wild26DoKJ[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dov2];
        return $res;
    };
    this.hs_sEEKzuCUR.evaluateOnce = function () {
        var hs_wild26DoKL = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_seek_cur()];
        var hs_ds126Dov8 = hs_wild26DoKL[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dov8];
        return $res;
    };
    this.hs_sEEKzuSET.evaluateOnce = function () {
        var hs_wild26DoKN = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_seek_set()];
        var hs_ds126Dove = hs_wild26DoKN[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dove];
        return $res;
    };
    this.hs_sEEKzuEND.evaluateOnce = function () {
        var hs_wild26DoKP = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_seek_end()];
        var hs_ds126Dovk = hs_wild26DoKP[1];
        var $res = new $hs.Data(1);
        $res.data = [hs_ds126Dovk];
        return $res;
    };
    this.hs_puts.evaluate = function (hs_s26Dovm) {
        var hs_sat26DoKR = new $hs.Func(1);
        hs_sat26DoKR.evaluate = function (hs_ds26Dovs) {
            var hs_wild26DoKW = hs_ds26Dovs;
            if (hs_ds26Dovs.notEvaluated) {
                hs_wild26DoKW = hs_ds26Dovs.hscall();
            }
            var hs_p26Dovz = hs_wild26DoKW.data[0];
            var hs_len26DovC = hs_wild26DoKW.data[1];
            var hs_sat26DoKX = new $hs.Func(1);
            hs_sat26DoKX.evaluate = function (hs_ds126DovV) {
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
            };
            var hs_sat26DoKV = new $hs.Thunk();
            hs_sat26DoKV.evaluateOnce = function () {
                var hs_sat26DoKZ = new $hs.Thunk();
                hs_sat26DoKZ.evaluateOnce = function () {
                    return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                };
                var hs_ds126DoL0 = $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoKZ);
                var hs_ds226DovH = hs_ds126DoL0.data[0];
                var hs_ds326DoL1 = $hs.modules.GHCziPtr.hs_castPtr.hscall(hs_p26Dovz);
                var hs_ds426DovI = hs_ds326DoL1.data[0];
                var hs_ds526DoL2 = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.GHCziReal.hs_zdfIntegralInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCSizze, hs_len26DovC);
                var hs_ds626DovJ = hs_ds526DoL2.data[0];
                var hs_sat26DoKY = new $hs.Func(1);
                hs_sat26DoKY.evaluate = function (hs_ds726DovK) {
                    var hs_wild126DoL4 = [hs_ds726DovK, write(hs_ds226DovH, hs_ds426DovI, hs_ds626DovJ)];
                    var hs_ds826DovP = hs_wild126DoL4[0];
                    var hs_ds926DovQ = hs_wild126DoL4[1];
                    var hs_sat26DoL3 = new $hs.Data(1);
                    hs_sat26DoL3.data = [hs_ds926DovQ];
                    return [hs_ds826DovP, hs_sat26DoL3];
                };
                if (hs_sat26DoKY.notEvaluated) {
                    return hs_sat26DoKY.hscall();
                } else {
                    return hs_sat26DoKY;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoKV, hs_sat26DoKX);
        };
        var hs_sat26DoKQ = new $hs.Thunk();
        hs_sat26DoKQ.evaluateOnce = function () {
            var hs_sat26DoKS = new $hs.Thunk();
            hs_sat26DoKS.evaluateOnce = function () {
                var hs_sat26DoKU = new $hs.Data(1);
                hs_sat26DoKU.data = ["\n"];
                var hs_sat26DoKT = new $hs.Data(2);
                hs_sat26DoKT.data = [hs_sat26DoKU, $hs.modules.GHCziTypes.hs_ZMZN];
                return $hs.modules.GHCziBase.hs_zpzp.hscall(hs_s26Dovm, hs_sat26DoKT);
            };
            return $hs.modules.ForeignziCziString.hs_withCAStringLen.hscall(hs_sat26DoKS);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoKQ, hs_sat26DoKR);
    };
    this.hs_fdGetMode.evaluate = function (hs_fd26Dow0) {
        var hs_sat26DoL6 = new $hs.Func(1);
        hs_sat26DoL6.evaluate = function (hs_flags26Dowp) {
            var hs_wH26Dowt = new $hs.Thunk();
            hs_wH26Dowt.evaluateOnce = function () {
                var hs_sat26DoLr = new $hs.Thunk();
                hs_sat26DoLr.evaluateOnce = function () {
                    var hs_sat26DoLs = new $hs.Thunk();
                    hs_sat26DoLs.evaluateOnce = function () {
                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                    };
                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoLs);
                };
                var hs_sat26DoLq = new $hs.Thunk();
                hs_sat26DoLq.evaluateOnce = function () {
                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26Dowp, $hs.modules.SystemziPosixziInternals.hs_ozuWRONLY);
                };
                return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoLq, hs_sat26DoLr);
            };
            var hs_sat26DoLf = new $hs.Thunk();
            hs_sat26DoLf.evaluateOnce = function () {
                var hs_sat26DoLg = new $hs.Thunk();
                hs_sat26DoLg.evaluateOnce = function () {
                    var hs_sat26DoLo = new $hs.Thunk();
                    hs_sat26DoLo.evaluateOnce = function () {
                        var hs_sat26DoLp = new $hs.Thunk();
                        hs_sat26DoLp.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoLp);
                    };
                    var hs_sat26DoLn = new $hs.Thunk();
                    hs_sat26DoLn.evaluateOnce = function () {
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26Dowp, $hs.modules.SystemziPosixziInternals.hs_ozuAPPEND);
                    };
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoLn, hs_sat26DoLo);
                };
                var hs_wild26DoLh = $hs.modules.GHCziClasses.hs_zaza.hscall(hs_wH26Dowt, hs_sat26DoLg);
                switch (hs_wild26DoLh.tag) {
                case 1:
                    var hs_wild126DoLi = hs_wH26Dowt;
                    if (hs_wH26Dowt.notEvaluated) {
                        hs_wild126DoLi = hs_wH26Dowt.hscall();
                    }
                    switch (hs_wild126DoLi.tag) {
                    case 1:
                        var hs_sat26DoLj = new $hs.Thunk();
                        hs_sat26DoLj.evaluateOnce = function () {
                            var hs_sat26DoLm = new $hs.Thunk();
                            hs_sat26DoLm.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                            };
                            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoLm);
                        };
                        var hs_sat26DoLk = new $hs.Thunk();
                        hs_sat26DoLk.evaluateOnce = function () {
                            return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26Dowp, $hs.modules.SystemziPosixziInternals.hs_ozuRDWR);
                        };
                        var hs_wild226DoLl = $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoLk, hs_sat26DoLj);
                        switch (hs_wild226DoLl.tag) {
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
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoLf);
        };
        var hs_sat26DoL5 = new $hs.Thunk();
        hs_sat26DoL5.evaluateOnce = function () {
            var hs_sat26DoL8 = new $hs.Thunk();
            hs_sat26DoL8.evaluateOnce = function () {
                var hs_ds26DoLb = hs_fd26Dow0;
                if (hs_fd26Dow0.notEvaluated) {
                    hs_ds26DoLb = hs_fd26Dow0.hscall();
                }
                var hs_ds126Dowa = hs_ds26DoLb.data[0];
                var hs_wild26DoLc = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_getfl()];
                var hs_ds326Dowb = hs_wild26DoLc[1];
                var hs_sat26DoL9 = new $hs.Func(1);
                hs_sat26DoL9.evaluate = function (hs_ds426Dowc) {
                    var hs_wild126DoLe = [hs_ds426Dowc, fcntl_read(hs_ds126Dowa, hs_ds326Dowb)];
                    var hs_ds526Dowh = hs_wild126DoLe[0];
                    var hs_ds626Dowi = hs_wild126DoLe[1];
                    var hs_sat26DoLd = new $hs.Data(1);
                    hs_sat26DoLd.data = [hs_ds626Dowi];
                    return [hs_ds526Dowh, hs_sat26DoLd];
                };
                if (hs_sat26DoL9.notEvaluated) {
                    return hs_sat26DoL9.hscall();
                } else {
                    return hs_sat26DoL9;
                }
            };
            var hs_sat26DoL7 = new $hs.Thunk();
            hs_sat26DoL7.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("fdGetMode\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoL7, hs_sat26DoL8);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoL5, hs_sat26DoL6);
    };
    this.hs_setEcho.evaluate = function (hs_fd26DowI, hs_on26Dox4) {
        var hs_sat26DoLu = new $hs.Func(1);
        hs_sat26DoLu.evaluate = function (hs_pzutios26DowL) {
            var hs_sat26DoLw = new $hs.Func(1);
            hs_sat26DoLw.evaluate = function (hs_lflag26Dox6) {
                var hs_ds26DoLD = hs_pzutios26DowL;
                if (hs_pzutios26DowL.notEvaluated) {
                    hs_ds26DoLD = hs_pzutios26DowL.hscall();
                }
                var hs_ds126Doxd = hs_ds26DoLD.data[0];
                var hs_wild26DoLC = hs_on26Dox4;
                if (hs_on26Dox4.notEvaluated) {
                    hs_wild26DoLC = hs_on26Dox4.hscall();
                }
                switch (hs_wild26DoLC.tag) {
                case 1:
                    var hs_sat26DoLI = new $hs.Thunk();
                    hs_sat26DoLI.evaluateOnce = function () {
                        var hs_sat26DoLL = new $hs.Thunk();
                        hs_sat26DoLL.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuecho);
                        };
                        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_sat26DoLL);
                    };
                    var hs_ds226DoLJ = $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26Dox6, hs_sat26DoLI);
                    var hs_ds326Doxe = hs_ds226DoLJ.data[0];
                    var hs_sat26DoLH = new $hs.Func(1);
                    hs_sat26DoLH.evaluate = function (hs_ds426Doxf) {
                        var hs_wild126DoLK = [hs_ds426Doxf, __hscore_poke_lflag(hs_ds126Doxd, hs_ds326Doxe)];
                        var hs_ds526Doxj = hs_wild126DoLK[0];
                        return [hs_ds526Doxj, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    if (hs_sat26DoLH.notEvaluated) {
                        return hs_sat26DoLH.hscall();
                    } else {
                        return hs_sat26DoLH;
                    }
                case 2:
                    var hs_sat26DoLE = new $hs.Thunk();
                    hs_sat26DoLE.evaluateOnce = function () {
                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuecho);
                    };
                    var hs_ds226DoLF = $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26Dox6, hs_sat26DoLE);
                    var hs_ds326Doxq = hs_ds226DoLF.data[0];
                    var hs_sat26DoLB = new $hs.Func(1);
                    hs_sat26DoLB.evaluate = function (hs_ds426Doxr) {
                        var hs_wild126DoLG = [hs_ds426Doxr, __hscore_poke_lflag(hs_ds126Doxd, hs_ds326Doxq)];
                        var hs_ds526Doxv = hs_wild126DoLG[0];
                        return [hs_ds526Doxv, $hs.modules.GHCziUnit.hs_Z0T];
                    };
                    if (hs_sat26DoLB.notEvaluated) {
                        return hs_sat26DoLB.hscall();
                    } else {
                        return hs_sat26DoLB;
                    }
                }
            };
            var hs_sat26DoLv = new $hs.Thunk();
            hs_sat26DoLv.evaluateOnce = function () {
                var hs_ds26DoLy = hs_pzutios26DowL;
                if (hs_pzutios26DowL.notEvaluated) {
                    hs_ds26DoLy = hs_pzutios26DowL.hscall();
                }
                var hs_ds126DowQ = hs_ds26DoLy.data[0];
                var hs_sat26DoLx = new $hs.Func(1);
                hs_sat26DoLx.evaluate = function (hs_ds226DowR) {
                    var hs_wild26DoLA = [hs_ds226DowR, __hscore_lflag(hs_ds126DowQ)];
                    var hs_ds326DowW = hs_wild26DoLA[0];
                    var hs_ds426DowX = hs_wild26DoLA[1];
                    var hs_sat26DoLz = new $hs.Data(1);
                    hs_sat26DoLz.data = [hs_ds426DowX];
                    return [hs_ds326DowW, hs_sat26DoLz];
                };
                if (hs_sat26DoLx.notEvaluated) {
                    return hs_sat26DoLx.hscall();
                } else {
                    return hs_sat26DoLx;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoLv, hs_sat26DoLw);
        };
        var hs_sat26DoLt = new $hs.Func(1);
        hs_sat26DoLt.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_tcSetAttr.hscall(hs_fd26DowI, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoLt, hs_sat26DoLu);
    };
    this.hs_getEcho.evaluate = function (hs_fd26DoxA) {
        var hs_sat26DoLN = new $hs.Func(1);
        hs_sat26DoLN.evaluate = function (hs_pzutios26DoxD) {
            var hs_sat26DoLP = new $hs.Func(1);
            hs_sat26DoLP.evaluate = function (hs_lflag26DoxU) {
                var hs_sat26DoLU = new $hs.Thunk();
                hs_sat26DoLU.evaluateOnce = function () {
                    var hs_sat26DoLW = new $hs.Thunk();
                    hs_sat26DoLW.evaluateOnce = function () {
                        var hs_sat26DoLY = new $hs.Thunk();
                        hs_sat26DoLY.evaluateOnce = function () {
                            return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                        };
                        return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, hs_sat26DoLY);
                    };
                    var hs_sat26DoLV = new $hs.Thunk();
                    hs_sat26DoLV.evaluateOnce = function () {
                        var hs_sat26DoLX = new $hs.Thunk();
                        hs_sat26DoLX.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuecho);
                        };
                        return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26DoxU, hs_sat26DoLX);
                    };
                    return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.SystemziPosixziTypes.hs_zdfEqCTcflag, hs_sat26DoLV, hs_sat26DoLW);
                };
                return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoLU);
            };
            var hs_sat26DoLO = new $hs.Thunk();
            hs_sat26DoLO.evaluateOnce = function () {
                var hs_ds26DoLR = hs_pzutios26DoxD;
                if (hs_pzutios26DoxD.notEvaluated) {
                    hs_ds26DoLR = hs_pzutios26DoxD.hscall();
                }
                var hs_ds126DoxI = hs_ds26DoLR.data[0];
                var hs_sat26DoLQ = new $hs.Func(1);
                hs_sat26DoLQ.evaluate = function (hs_ds226DoxJ) {
                    var hs_wild26DoLT = [hs_ds226DoxJ, __hscore_lflag(hs_ds126DoxI)];
                    var hs_ds326DoxO = hs_wild26DoLT[0];
                    var hs_ds426DoxP = hs_wild26DoLT[1];
                    var hs_sat26DoLS = new $hs.Data(1);
                    hs_sat26DoLS.data = [hs_ds426DoxP];
                    return [hs_ds326DoxO, hs_sat26DoLS];
                };
                if (hs_sat26DoLQ.notEvaluated) {
                    return hs_sat26DoLQ.hscall();
                } else {
                    return hs_sat26DoLQ;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoLO, hs_sat26DoLP);
        };
        var hs_sat26DoLM = new $hs.Func(1);
        hs_sat26DoLM.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_tcSetAttr.hscall(hs_fd26DoxA, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoLM, hs_sat26DoLN);
    };
    this.hs_setCooked.evaluate = function (hs_fd26Doy4, hs_cooked26Doyq) {
        var hs_sat26DoM0 = new $hs.Func(1);
        hs_sat26DoM0.evaluate = function (hs_pzutios26Doy7) {
            var hs_sat26DoM2 = new $hs.Func(1);
            hs_sat26DoM2.evaluate = function (hs_lflag26Doys) {
                var hs_sat26DoM8 = new $hs.Thunk();
                hs_sat26DoM8.evaluateOnce = function () {
                    var hs_sat26DoMl = new $hs.Thunk();
                    hs_sat26DoMl.evaluateOnce = function () {
                        var hs_sat26DoMo = new $hs.Func(1);
                        hs_sat26DoMo.evaluate = function (hs_czucc26Dozc) {
                            var hs_sat26DoMu = new $hs.Thunk();
                            hs_sat26DoMu.evaluateOnce = function () {
                                var hs_sat26DoMA = new $hs.Thunk();
                                hs_sat26DoMA.evaluateOnce = function () {
                                    var hs_sat26DoMC = new $hs.Thunk();
                                    hs_sat26DoMC.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DoMC);
                                };
                                var hs_sat26DoMz = new $hs.Thunk();
                                hs_sat26DoMz.evaluateOnce = function () {
                                    var hs_sat26DoMB = new $hs.Thunk();
                                    hs_sat26DoMB.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.SystemziPosixziInternals.hs_constzuvtime);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_czucc26Dozc, hs_sat26DoMB);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DoMz, hs_sat26DoMA);
                            };
                            var hs_sat26DoMt = new $hs.Thunk();
                            hs_sat26DoMt.evaluateOnce = function () {
                                var hs_sat26DoMw = new $hs.Thunk();
                                hs_sat26DoMw.evaluateOnce = function () {
                                    var hs_sat26DoMy = new $hs.Thunk();
                                    hs_sat26DoMy.evaluateOnce = function () {
                                        return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                                    };
                                    return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.GHCziWord.hs_zdfNumWord8, hs_sat26DoMy);
                                };
                                var hs_sat26DoMv = new $hs.Thunk();
                                hs_sat26DoMv.evaluateOnce = function () {
                                    var hs_sat26DoMx = new $hs.Thunk();
                                    hs_sat26DoMx.evaluateOnce = function () {
                                        return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.GHCziNum.hs_zdfNumInt, $hs.modules.SystemziPosixziInternals.hs_constzuvmin);
                                    };
                                    return $hs.modules.GHCziPtr.hs_plusPtr.hscall(hs_czucc26Dozc, hs_sat26DoMx);
                                };
                                return $hs.modules.ForeignziStorable.hs_poke.hscall($hs.modules.ForeignziStorable.hs_zdfStorableWord8, hs_sat26DoMv, hs_sat26DoMw);
                            };
                            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoMt, hs_sat26DoMu);
                        };
                        var hs_sat26DoMn = new $hs.Thunk();
                        hs_sat26DoMn.evaluateOnce = function () {
                            var hs_ds26DoMq = hs_pzutios26Doy7;
                            if (hs_pzutios26Doy7.notEvaluated) {
                                hs_ds26DoMq = hs_pzutios26Doy7.hscall();
                            }
                            var hs_ds126Doz0 = hs_ds26DoMq.data[0];
                            var hs_sat26DoMp = new $hs.Func(1);
                            hs_sat26DoMp.evaluate = function (hs_ds226Doz1) {
                                var hs_wild26DoMs = [hs_ds226Doz1, __hscore_ptr_c_cc(hs_ds126Doz0)];
                                var hs_ds326Doz6 = hs_wild26DoMs[0];
                                var hs_ds426Doz7 = hs_wild26DoMs[1];
                                var hs_sat26DoMr = new $hs.Data(1);
                                hs_sat26DoMr.data = [hs_ds426Doz7];
                                return [hs_ds326Doz6, hs_sat26DoMr];
                            };
                            if (hs_sat26DoMp.notEvaluated) {
                                return hs_sat26DoMp.hscall();
                            } else {
                                return hs_sat26DoMp;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoMn, hs_sat26DoMo);
                    };
                    var hs_sat26DoMk = new $hs.Thunk();
                    hs_sat26DoMk.evaluateOnce = function () {
                        var hs_sat26DoMm = new $hs.Thunk();
                        hs_sat26DoMm.evaluateOnce = function () {
                            return $hs.modules.GHCziClasses.hs_not.hscall(hs_cooked26Doyq);
                        };
                        return $hs.modules.ControlziMonad.hs_when.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoMm);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoMk, hs_sat26DoMl);
                };
                var hs_sat26DoM7 = new $hs.Thunk();
                hs_sat26DoM7.evaluateOnce = function () {
                    var hs_ds26DoMb = hs_pzutios26Doy7;
                    if (hs_pzutios26Doy7.notEvaluated) {
                        hs_ds26DoMb = hs_pzutios26Doy7.hscall();
                    }
                    var hs_ds126Doyz = hs_ds26DoMb.data[0];
                    var hs_wild26DoMa = hs_cooked26Doyq;
                    if (hs_cooked26Doyq.notEvaluated) {
                        hs_wild26DoMa = hs_cooked26Doyq.hscall();
                    }
                    switch (hs_wild26DoMa.tag) {
                    case 1:
                        var hs_sat26DoMg = new $hs.Thunk();
                        hs_sat26DoMg.evaluateOnce = function () {
                            var hs_sat26DoMj = new $hs.Thunk();
                            hs_sat26DoMj.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuicanon);
                            };
                            return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_sat26DoMj);
                        };
                        var hs_ds226DoMh = $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26Doys, hs_sat26DoMg);
                        var hs_ds326DoyA = hs_ds226DoMh.data[0];
                        var hs_sat26DoMf = new $hs.Func(1);
                        hs_sat26DoMf.evaluate = function (hs_ds426DoyB) {
                            var hs_wild126DoMi = [hs_ds426DoyB, __hscore_poke_lflag(hs_ds126Doyz, hs_ds326DoyA)];
                            var hs_ds526DoyF = hs_wild126DoMi[0];
                            return [hs_ds526DoyF, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        if (hs_sat26DoMf.notEvaluated) {
                            return hs_sat26DoMf.hscall();
                        } else {
                            return hs_sat26DoMf;
                        }
                    case 2:
                        var hs_sat26DoMc = new $hs.Thunk();
                        hs_sat26DoMc.evaluateOnce = function () {
                            return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.SystemziPosixziTypes.hs_zdfNumCTcflag, $hs.modules.SystemziPosixziInternals.hs_constzuicanon);
                        };
                        var hs_ds226DoMd = $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.SystemziPosixziTypes.hs_zdfBitsCTcflag, hs_lflag26Doys, hs_sat26DoMc);
                        var hs_ds326DoyM = hs_ds226DoMd.data[0];
                        var hs_sat26DoM9 = new $hs.Func(1);
                        hs_sat26DoM9.evaluate = function (hs_ds426DoyN) {
                            var hs_wild126DoMe = [hs_ds426DoyN, __hscore_poke_lflag(hs_ds126Doyz, hs_ds326DoyM)];
                            var hs_ds526DoyR = hs_wild126DoMe[0];
                            return [hs_ds526DoyR, $hs.modules.GHCziUnit.hs_Z0T];
                        };
                        if (hs_sat26DoM9.notEvaluated) {
                            return hs_sat26DoM9.hscall();
                        } else {
                            return hs_sat26DoM9;
                        }
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoM7, hs_sat26DoM8);
            };
            var hs_sat26DoM1 = new $hs.Thunk();
            hs_sat26DoM1.evaluateOnce = function () {
                var hs_ds26DoM4 = hs_pzutios26Doy7;
                if (hs_pzutios26Doy7.notEvaluated) {
                    hs_ds26DoM4 = hs_pzutios26Doy7.hscall();
                }
                var hs_ds126Doyc = hs_ds26DoM4.data[0];
                var hs_sat26DoM3 = new $hs.Func(1);
                hs_sat26DoM3.evaluate = function (hs_ds226Doyd) {
                    var hs_wild26DoM6 = [hs_ds226Doyd, __hscore_lflag(hs_ds126Doyc)];
                    var hs_ds326Doyi = hs_wild26DoM6[0];
                    var hs_ds426Doyj = hs_wild26DoM6[1];
                    var hs_sat26DoM5 = new $hs.Data(1);
                    hs_sat26DoM5.data = [hs_ds426Doyj];
                    return [hs_ds326Doyi, hs_sat26DoM5];
                };
                if (hs_sat26DoM3.notEvaluated) {
                    return hs_sat26DoM3.hscall();
                } else {
                    return hs_sat26DoM3;
                }
            };
            return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoM1, hs_sat26DoM2);
        };
        var hs_sat26DoLZ = new $hs.Func(1);
        hs_sat26DoLZ.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_tcSetAttr.hscall(hs_fd26Doy4, hs_eta1cW6l3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoLZ, hs_sat26DoM0);
    };
    this.hs_setNonBlockingFD.evaluate = function (hs_fd26Dozv, hs_set26DozU) {
        var hs_sat26DoME = new $hs.Func(1);
        hs_sat26DoME.evaluate = function (hs_flags26DozW) {
            var hs_flagszq26DozY = new $hs.Thunk();
            hs_flagszq26DozY.evaluateOnce = function () {
                var hs_wild26DoMZ = hs_set26DozU;
                if (hs_set26DozU.notEvaluated) {
                    hs_wild26DoMZ = hs_set26DozU.hscall();
                }
                switch (hs_wild26DoMZ.tag) {
                case 1:
                    var hs_sat26DoN0 = new $hs.Thunk();
                    hs_sat26DoN0.evaluateOnce = function () {
                        return $hs.modules.DataziBits.hs_complement.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK);
                    };
                    return $hs.modules.DataziBits.hs_zizazi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26DozW, hs_sat26DoN0);
                case 2:
                    return $hs.modules.DataziBits.hs_zizbzi.hscall($hs.modules.ForeignziCziTypes.hs_zdfBitsCInt, hs_flags26DozW, $hs.modules.SystemziPosixziInternals.hs_ozuNONBLOCK);
                }
            };
            var hs_sat26DoMO = new $hs.Thunk();
            hs_sat26DoMO.evaluateOnce = function () {
                var hs_sat26DoMR = new $hs.Func(1);
                hs_sat26DoMR.evaluate = function (hs_ds26DoAq) {
                    return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, $hs.modules.GHCziUnit.hs_Z0T);
                };
                var hs_sat26DoMQ = new $hs.Thunk();
                hs_sat26DoMQ.evaluateOnce = function () {
                    var hs_ds26DoMT = hs_fd26Dozv;
                    if (hs_fd26Dozv.notEvaluated) {
                        hs_ds26DoMT = hs_fd26Dozv.hscall();
                    }
                    var hs_ds126DoAc = hs_ds26DoMT.data[0];
                    var hs_wild26DoMU = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_setfl()];
                    var hs_ds326DoAd = hs_wild26DoMU[1];
                    var hs_ds426DoMW = $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.ForeignziCziTypes.hs_zdfIntegralCInt, $hs.modules.ForeignziCziTypes.hs_zdfNumCLong, hs_flagszq26DozY);
                    var hs_ds526DoAe = hs_ds426DoMW.data[0];
                    var hs_sat26DoMS = new $hs.Func(1);
                    hs_sat26DoMS.evaluate = function (hs_ds626DoAf) {
                        var hs_wild126DoMY = [hs_ds626DoAf, fcntl_write(hs_ds126DoAc, hs_ds326DoAd, hs_ds526DoAe)];
                        var hs_ds726DoAk = hs_wild126DoMY[0];
                        var hs_ds826DoAl = hs_wild126DoMY[1];
                        var hs_sat26DoMX = new $hs.Data(1);
                        hs_sat26DoMX.data = [hs_ds826DoAl];
                        return [hs_ds726DoAk, hs_sat26DoMX];
                    };
                    if (hs_sat26DoMS.notEvaluated) {
                        return hs_sat26DoMS.hscall();
                    } else {
                        return hs_sat26DoMS;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoMQ, hs_sat26DoMR);
            };
            var hs_sat26DoMN = new $hs.Thunk();
            hs_sat26DoMN.evaluateOnce = function () {
                var hs_sat26DoMP = new $hs.Thunk();
                hs_sat26DoMP.evaluateOnce = function () {
                    return $hs.modules.GHCziClasses.hs_zeze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_flags26DozW, hs_flagszq26DozY);
                };
                return $hs.modules.ControlziMonad.hs_unless.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoMP);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoMN, hs_sat26DoMO);
        };
        var hs_sat26DoMD = new $hs.Thunk();
        hs_sat26DoMD.evaluateOnce = function () {
            var hs_sat26DoMG = new $hs.Thunk();
            hs_sat26DoMG.evaluateOnce = function () {
                var hs_ds26DoMJ = hs_fd26Dozv;
                if (hs_fd26Dozv.notEvaluated) {
                    hs_ds26DoMJ = hs_fd26Dozv.hscall();
                }
                var hs_ds126DozF = hs_ds26DoMJ.data[0];
                var hs_wild26DoMK = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_f_getfl()];
                var hs_ds326DozG = hs_wild26DoMK[1];
                var hs_sat26DoMH = new $hs.Func(1);
                hs_sat26DoMH.evaluate = function (hs_ds426DozH) {
                    var hs_wild126DoMM = [hs_ds426DozH, fcntl_read(hs_ds126DozF, hs_ds326DozG)];
                    var hs_ds526DozM = hs_wild126DoMM[0];
                    var hs_ds626DozN = hs_wild126DoMM[1];
                    var hs_sat26DoML = new $hs.Data(1);
                    hs_sat26DoML.data = [hs_ds626DozN];
                    return [hs_ds526DozM, hs_sat26DoML];
                };
                if (hs_sat26DoMH.notEvaluated) {
                    return hs_sat26DoMH.hscall();
                } else {
                    return hs_sat26DoMH;
                }
            };
            var hs_sat26DoMF = new $hs.Thunk();
            hs_sat26DoMF.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("setNonBlockingFD\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retry.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoMF, hs_sat26DoMG);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoMD, hs_sat26DoME);
    };
    this.hs_setCloseOnExec.evaluate = function (hs_fd26DoAx) {
        var hs_sat26DoN2 = new $hs.Func(1);
        hs_sat26DoN2.evaluate = function (hs_eta1cW6l3) {
            return $hs.modules.SystemziPosixziInternals.hs_czufcntlzuwrite.hscall(hs_fd26DoAx, $hs.modules.SystemziPosixziInternals.hs_constzufzusetfd, $hs.modules.SystemziPosixziInternals.hs_constzufdzucloexec, hs_eta1cW6l3);
        };
        var hs_sat26DoN1 = new $hs.Thunk();
        hs_sat26DoN1.evaluateOnce = function () {
            var hs_sat26DoN3 = new $hs.Thunk();
            hs_sat26DoN3.evaluateOnce = function () {
                return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("setCloseOnExec\x00");
            };
            return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1zu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoN3);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoN1, hs_sat26DoN2);
    };
    this.hs_szuisreg.evaluate = function (hs_cm26DoAA) {
        var hs_sat26DoN5 = new $hs.Thunk();
        hs_sat26DoN5.evaluateOnce = function () {
            var hs_sat26DoN9 = new $hs.Thunk();
            hs_sat26DoN9.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoN9);
        };
        var hs_sat26DoN4 = new $hs.Thunk();
        hs_sat26DoN4.evaluateOnce = function () {
            var hs_ds26DoN7 = hs_cm26DoAA;
            if (hs_cm26DoAA.notEvaluated) {
                hs_ds26DoN7 = hs_cm26DoAA.hscall();
            }
            var hs_ds126DoAE = hs_ds26DoN7.data[0];
            var hs_wild26DoN8 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isreg(hs_ds126DoAE)];
            var hs_ds326DoAJ = hs_wild26DoN8[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DoAJ];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoN4, hs_sat26DoN5);
    };
    this.hs_fdFileSizze.evaluate = function (hs_fd26DoAS) {
        var hs_sat26DoNb = new $hs.Func(1);
        hs_sat26DoNb.evaluate = function (hs_pzustat26DoAV) {
            var hs_sat26DoNd = new $hs.Thunk();
            hs_sat26DoNd.evaluateOnce = function () {
                var hs_sat26DoNn = new $hs.Func(1);
                hs_sat26DoNn.evaluate = function (hs_czumode26DoBt) {
                    var hs_sat26DoNt = new $hs.Thunk();
                    hs_sat26DoNt.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_szuisreg.hscall(hs_czumode26DoBt);
                    };
                    var hs_wild26DoNu = $hs.modules.GHCziClasses.hs_not.hscall(hs_sat26DoNt);
                    switch (hs_wild26DoNu.tag) {
                    case 1:
                        var hs_sat26DoNx = new $hs.Func(1);
                        hs_sat26DoNx.evaluate = function (hs_czusizze26DoBM) {
                            var hs_sat26DoNC = new $hs.Thunk();
                            hs_sat26DoNC.evaluateOnce = function () {
                                return $hs.modules.GHCziReal.hs_fromIntegral.hscall($hs.modules.SystemziPosixziTypes.hs_zdfIntegralCOff, $hs.modules.GHCziNum.hs_zdfNumInteger, hs_czusizze26DoBM);
                            };
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoNC);
                        };
                        var hs_sat26DoNw = new $hs.Thunk();
                        hs_sat26DoNw.evaluateOnce = function () {
                            var hs_ds26DoNz = hs_pzustat26DoAV;
                            if (hs_pzustat26DoAV.notEvaluated) {
                                hs_ds26DoNz = hs_pzustat26DoAV.hscall();
                            }
                            var hs_ds126DoBA = hs_ds26DoNz.data[0];
                            var hs_sat26DoNy = new $hs.Func(1);
                            hs_sat26DoNy.evaluate = function (hs_ds226DoBB) {
                                var hs_wild126DoNB = [hs_ds226DoBB, __hscore_st_si=(hs_ds126DoBA)];
                                var hs_ds326DoBG = hs_wild126DoNB[0];
                                var hs_ds426DoBH = hs_wild126DoNB[1];
                                var hs_sat26DoNA = new $hs.Data(1);
                                hs_sat26DoNA.data = [hs_ds426DoBH];
                                return [hs_ds326DoBG, hs_sat26DoNA];
                            };
                            if (hs_sat26DoNy.notEvaluated) {
                                return hs_sat26DoNy.hscall();
                            } else {
                                return hs_sat26DoNy;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoNw, hs_sat26DoNx);
                    case 2:
                        var hs_sat26DoNs = new $hs.Thunk();
                        hs_sat26DoNs.evaluateOnce = function () {
                            var hs_sat26DoNv = new $hs.Thunk();
                            hs_sat26DoNv.evaluateOnce = function () {
                                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(1);
                            };
                            return $hs.modules.GHCziNum.hs_negate.hscall($hs.modules.GHCziNum.hs_zdfNumInteger, hs_sat26DoNv);
                        };
                        return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoNs);
                    }
                };
                var hs_sat26DoNm = new $hs.Thunk();
                hs_sat26DoNm.evaluateOnce = function () {
                    var hs_ds26DoNp = hs_pzustat26DoAV;
                    if (hs_pzustat26DoAV.notEvaluated) {
                        hs_ds26DoNp = hs_pzustat26DoAV.hscall();
                    }
                    var hs_ds126DoBh = hs_ds26DoNp.data[0];
                    var hs_sat26DoNo = new $hs.Func(1);
                    hs_sat26DoNo.evaluate = function (hs_ds226DoBi) {
                        var hs_wild26DoNr = [hs_ds226DoBi, __hscore_st_mode(hs_ds126DoBh)];
                        var hs_ds326DoBn = hs_wild26DoNr[0];
                        var hs_ds426DoBo = hs_wild26DoNr[1];
                        var hs_sat26DoNq = new $hs.Data(1);
                        hs_sat26DoNq.data = [hs_ds426DoBo];
                        return [hs_ds326DoBn, hs_sat26DoNq];
                    };
                    if (hs_sat26DoNo.notEvaluated) {
                        return hs_sat26DoNo.hscall();
                    } else {
                        return hs_sat26DoNo;
                    }
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoNm, hs_sat26DoNn);
            };
            var hs_sat26DoNc = new $hs.Thunk();
            hs_sat26DoNc.evaluateOnce = function () {
                var hs_sat26DoNf = new $hs.Thunk();
                hs_sat26DoNf.evaluateOnce = function () {
                    var hs_ds26DoNj = hs_fd26DoAS;
                    if (hs_fd26DoAS.notEvaluated) {
                        hs_ds26DoNj = hs_fd26DoAS.hscall();
                    }
                    var hs_ds126DoB0 = hs_ds26DoNj.data[0];
                    var hs_ds226DoNi = hs_pzustat26DoAV;
                    if (hs_pzustat26DoAV.notEvaluated) {
                        hs_ds226DoNi = hs_pzustat26DoAV.hscall();
                    }
                    var hs_ds326DoB1 = hs_ds226DoNi.data[0];
                    var hs_sat26DoNh = new $hs.Func(1);
                    hs_sat26DoNh.evaluate = function (hs_ds426DoB2) {
                        var hs_wild26DoNl = [hs_ds426DoB2, __hscore_fstat(hs_ds126DoB0, hs_ds326DoB1)];
                        var hs_ds526DoB7 = hs_wild26DoNl[0];
                        var hs_ds626DoB8 = hs_wild26DoNl[1];
                        var hs_sat26DoNk = new $hs.Data(1);
                        hs_sat26DoNk.data = [hs_ds626DoB8];
                        return [hs_ds526DoB7, hs_sat26DoNk];
                    };
                    if (hs_sat26DoNh.notEvaluated) {
                        return hs_sat26DoNh.hscall();
                    } else {
                        return hs_sat26DoNh;
                    }
                };
                var hs_sat26DoNe = new $hs.Thunk();
                hs_sat26DoNe.evaluateOnce = function () {
                    var hs_sat26DoNg = new $hs.Thunk();
                    hs_sat26DoNg.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("fileSize\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoNg);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoNe, hs_sat26DoNf);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoNc, hs_sat26DoNd);
        };
        var hs_sat26DoNa = new $hs.Thunk();
        hs_sat26DoNa.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzustat);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoNa, hs_sat26DoNb);
    };
    this.hs_szuischr.evaluate = function (hs_cm26DoBV) {
        var hs_sat26DoNE = new $hs.Thunk();
        hs_sat26DoNE.evaluateOnce = function () {
            var hs_sat26DoNI = new $hs.Thunk();
            hs_sat26DoNI.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoNI);
        };
        var hs_sat26DoND = new $hs.Thunk();
        hs_sat26DoND.evaluateOnce = function () {
            var hs_ds26DoNG = hs_cm26DoBV;
            if (hs_cm26DoBV.notEvaluated) {
                hs_ds26DoNG = hs_cm26DoBV.hscall();
            }
            var hs_ds126DoBZ = hs_ds26DoNG.data[0];
            var hs_wild26DoNH = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_ischr(hs_ds126DoBZ)];
            var hs_ds326DoC4 = hs_wild26DoNH[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DoC4];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoND, hs_sat26DoNE);
    };
    this.hs_szuisblk.evaluate = function (hs_cm26DoC9) {
        var hs_sat26DoNK = new $hs.Thunk();
        hs_sat26DoNK.evaluateOnce = function () {
            var hs_sat26DoNO = new $hs.Thunk();
            hs_sat26DoNO.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoNO);
        };
        var hs_sat26DoNJ = new $hs.Thunk();
        hs_sat26DoNJ.evaluateOnce = function () {
            var hs_ds26DoNM = hs_cm26DoC9;
            if (hs_cm26DoC9.notEvaluated) {
                hs_ds26DoNM = hs_cm26DoC9.hscall();
            }
            var hs_ds126DoCd = hs_ds26DoNM.data[0];
            var hs_wild26DoNN = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isblk(hs_ds126DoCd)];
            var hs_ds326DoCi = hs_wild26DoNN[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DoCi];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoNJ, hs_sat26DoNK);
    };
    this.hs_szuisdir.evaluate = function (hs_cm26DoCn) {
        var hs_sat26DoNQ = new $hs.Thunk();
        hs_sat26DoNQ.evaluateOnce = function () {
            var hs_sat26DoNU = new $hs.Thunk();
            hs_sat26DoNU.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoNU);
        };
        var hs_sat26DoNP = new $hs.Thunk();
        hs_sat26DoNP.evaluateOnce = function () {
            var hs_ds26DoNS = hs_cm26DoCn;
            if (hs_cm26DoCn.notEvaluated) {
                hs_ds26DoNS = hs_cm26DoCn.hscall();
            }
            var hs_ds126DoCr = hs_ds26DoNS.data[0];
            var hs_wild26DoNT = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isdir(hs_ds126DoCr)];
            var hs_ds326DoCw = hs_wild26DoNT[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DoCw];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoNP, hs_sat26DoNQ);
    };
    this.hs_szuisfifo.evaluate = function (hs_cm26DoCB) {
        var hs_sat26DoNW = new $hs.Thunk();
        hs_sat26DoNW.evaluateOnce = function () {
            var hs_sat26DoO0 = new $hs.Thunk();
            hs_sat26DoO0.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoO0);
        };
        var hs_sat26DoNV = new $hs.Thunk();
        hs_sat26DoNV.evaluateOnce = function () {
            var hs_ds26DoNY = hs_cm26DoCB;
            if (hs_cm26DoCB.notEvaluated) {
                hs_ds26DoNY = hs_cm26DoCB.hscall();
            }
            var hs_ds126DoCF = hs_ds26DoNY.data[0];
            var hs_wild26DoNZ = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_isfifo(hs_ds126DoCF)];
            var hs_ds326DoCK = hs_wild26DoNZ[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DoCK];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoNV, hs_sat26DoNW);
    };
    this.hs_szuissock.evaluate = function (hs_cmode26DoCP) {
        var hs_sat26DoO2 = new $hs.Thunk();
        hs_sat26DoO2.evaluateOnce = function () {
            var hs_sat26DoO6 = new $hs.Thunk();
            hs_sat26DoO6.evaluateOnce = function () {
                return $hs.modules.GHCziInteger.hs_smallInteger.hscall(0);
            };
            return $hs.modules.GHCziNum.hs_fromInteger.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoO6);
        };
        var hs_sat26DoO1 = new $hs.Thunk();
        hs_sat26DoO1.evaluateOnce = function () {
            var hs_ds26DoO4 = hs_cmode26DoCP;
            if (hs_cmode26DoCP.notEvaluated) {
                hs_ds26DoO4 = hs_cmode26DoCP.hscall();
            }
            var hs_ds126DoCT = hs_ds26DoO4.data[0];
            var hs_wild26DoO5 = [$hs.modules.GHCziPrim.hs_realWorldzh, __hscore_s_issock(hs_ds126DoCT)];
            var hs_ds326DoCY = hs_wild26DoO5[1];
            var $res = new $hs.Data(1);
            $res.data = [hs_ds326DoCY];
            return $res;
        };
        return $hs.modules.GHCziClasses.hs_zsze.hscall($hs.modules.ForeignziCziTypes.hs_zdfEqCInt, hs_sat26DoO1, hs_sat26DoO2);
    };
    this.hs_statGetType.evaluate = function (hs_pzustat26DoD3) {
        var hs_sat26DoO8 = new $hs.Func(1);
        hs_sat26DoO8.evaluate = function (hs_czumode26DoDk) {
            var hs_wild26DoOd = $hs.modules.SystemziPosixziInternals.hs_szuisdir.hscall(hs_czumode26DoDk);
            switch (hs_wild26DoOd.tag) {
            case 1:
                var hs_sat26DoOe = new $hs.Thunk();
                hs_sat26DoOe.evaluateOnce = function () {
                    var hs_sat26DoOk = new $hs.Thunk();
                    hs_sat26DoOk.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_szuischr.hscall(hs_czumode26DoDk);
                    };
                    var hs_sat26DoOj = new $hs.Thunk();
                    hs_sat26DoOj.evaluateOnce = function () {
                        return $hs.modules.SystemziPosixziInternals.hs_szuissock.hscall(hs_czumode26DoDk);
                    };
                    return $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DoOj, hs_sat26DoOk);
                };
                var hs_sat26DoOf = new $hs.Thunk();
                hs_sat26DoOf.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_szuisfifo.hscall(hs_czumode26DoDk);
                };
                var hs_wild126DoOg = $hs.modules.GHCziClasses.hs_zbzb.hscall(hs_sat26DoOf, hs_sat26DoOe);
                switch (hs_wild126DoOg.tag) {
                case 1:
                    var hs_wild226DoOh = $hs.modules.SystemziPosixziInternals.hs_szuisreg.hscall(hs_czumode26DoDk);
                    switch (hs_wild226DoOh.tag) {
                    case 1:
                        var hs_wild326DoOi = $hs.modules.SystemziPosixziInternals.hs_szuisblk.hscall(hs_czumode26DoDk);
                        switch (hs_wild326DoOi.tag) {
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
        var hs_sat26DoO7 = new $hs.Thunk();
        hs_sat26DoO7.evaluateOnce = function () {
            var hs_ds26DoOa = hs_pzustat26DoD3;
            if (hs_pzustat26DoD3.notEvaluated) {
                hs_ds26DoOa = hs_pzustat26DoD3.hscall();
            }
            var hs_ds126DoD8 = hs_ds26DoOa.data[0];
            var hs_sat26DoO9 = new $hs.Func(1);
            hs_sat26DoO9.evaluate = function (hs_ds226DoD9) {
                var hs_wild26DoOc = [hs_ds226DoD9, __hscore_st_mode(hs_ds126DoD8)];
                var hs_ds326DoDe = hs_wild26DoOc[0];
                var hs_ds426DoDf = hs_wild26DoOc[1];
                var hs_sat26DoOb = new $hs.Data(1);
                hs_sat26DoOb.data = [hs_ds426DoDf];
                return [hs_ds326DoDe, hs_sat26DoOb];
            };
            if (hs_sat26DoO9.notEvaluated) {
                return hs_sat26DoO9.hscall();
            } else {
                return hs_sat26DoO9;
            }
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoO7, hs_sat26DoO8);
    };
    this.hs_fileType.evaluate = function (hs_file26DoDx) {
        var hs_sat26DoOm = new $hs.Func(1);
        hs_sat26DoOm.evaluate = function (hs_pzustat26DoDF) {
            var hs_sat26DoOo = new $hs.Func(1);
            hs_sat26DoOo.evaluate = function (hs_pzufile26DoDC) {
                var hs_sat26DoOq = new $hs.Thunk();
                hs_sat26DoOq.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_statGetType.hscall(hs_pzustat26DoDF);
                };
                var hs_sat26DoOp = new $hs.Thunk();
                hs_sat26DoOp.evaluateOnce = function () {
                    var hs_sat26DoOs = new $hs.Thunk();
                    hs_sat26DoOs.evaluateOnce = function () {
                        var hs_ds26DoOw = hs_pzufile26DoDC;
                        if (hs_pzufile26DoDC.notEvaluated) {
                            hs_ds26DoOw = hs_pzufile26DoDC.hscall();
                        }
                        var hs_ds126DoDK = hs_ds26DoOw.data[0];
                        var hs_ds226DoOv = hs_pzustat26DoDF;
                        if (hs_pzustat26DoDF.notEvaluated) {
                            hs_ds226DoOv = hs_pzustat26DoDF.hscall();
                        }
                        var hs_ds326DoDL = hs_ds226DoOv.data[0];
                        var hs_sat26DoOu = new $hs.Func(1);
                        hs_sat26DoOu.evaluate = function (hs_ds426DoDM) {
                            var hs_wild26DoOy = [hs_ds426DoDM, __hscore_stat(hs_ds126DoDK, hs_ds326DoDL)];
                            var hs_ds526DoDR = hs_wild26DoOy[0];
                            var hs_ds626DoDS = hs_wild26DoOy[1];
                            var hs_sat26DoOx = new $hs.Data(1);
                            hs_sat26DoOx.data = [hs_ds626DoDS];
                            return [hs_ds526DoDR, hs_sat26DoOx];
                        };
                        if (hs_sat26DoOu.notEvaluated) {
                            return hs_sat26DoOu.hscall();
                        } else {
                            return hs_sat26DoOu;
                        }
                    };
                    var hs_sat26DoOr = new $hs.Thunk();
                    hs_sat26DoOr.evaluateOnce = function () {
                        var hs_sat26DoOt = new $hs.Thunk();
                        hs_sat26DoOt.evaluateOnce = function () {
                            return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("fileType\x00");
                        };
                        return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoOt);
                    };
                    return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoOr, hs_sat26DoOs);
                };
                return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoOp, hs_sat26DoOq);
            };
            var hs_sat26DoOn = new $hs.Thunk();
            hs_sat26DoOn.evaluateOnce = function () {
                return $hs.modules.SystemziPosixziInternals.hs_withFilePath.hscall(hs_file26DoDx);
            };
            return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoOn, hs_sat26DoOo);
        };
        var hs_sat26DoOl = new $hs.Thunk();
        hs_sat26DoOl.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzustat);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoOl, hs_sat26DoOm);
    };
    this.hs_fdStat.evaluate = function (hs_fd26DoE5) {
        var hs_sat26DoOA = new $hs.Func(1);
        hs_sat26DoOA.evaluate = function (hs_pzustat26DoE8) {
            var hs_sat26DoOC = new $hs.Thunk();
            hs_sat26DoOC.evaluateOnce = function () {
                var hs_sat26DoOM = new $hs.Func(1);
                hs_sat26DoOM.evaluate = function (hs_ty26DoEY) {
                    var hs_sat26DoOO = new $hs.Func(1);
                    hs_sat26DoOO.evaluate = function (hs_dev26DoEZ) {
                        var hs_sat26DoOU = new $hs.Func(1);
                        hs_sat26DoOU.evaluate = function (hs_ino26DoF0) {
                            var hs_sat26DoOZ = new $hs.Data(1);
                            hs_sat26DoOZ.data = [hs_ty26DoEY, hs_dev26DoEZ, hs_ino26DoF0];
                            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoOZ);
                        };
                        var hs_sat26DoOT = new $hs.Thunk();
                        hs_sat26DoOT.evaluateOnce = function () {
                            var hs_ds26DoOW = hs_pzustat26DoE8;
                            if (hs_pzustat26DoE8.notEvaluated) {
                                hs_ds26DoOW = hs_pzustat26DoE8.hscall();
                            }
                            var hs_ds126DoEM = hs_ds26DoOW.data[0];
                            var hs_sat26DoOV = new $hs.Func(1);
                            hs_sat26DoOV.evaluate = function (hs_ds226DoEN) {
                                var hs_wild26DoOY = [hs_ds226DoEN, __hscore_st_ino(hs_ds126DoEM)];
                                var hs_ds326DoES = hs_wild26DoOY[0];
                                var hs_ds426DoET = hs_wild26DoOY[1];
                                var hs_sat26DoOX = new $hs.Data(1);
                                hs_sat26DoOX.data = [hs_ds426DoET];
                                return [hs_ds326DoES, hs_sat26DoOX];
                            };
                            if (hs_sat26DoOV.notEvaluated) {
                                return hs_sat26DoOV.hscall();
                            } else {
                                return hs_sat26DoOV;
                            }
                        };
                        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoOT, hs_sat26DoOU);
                    };
                    var hs_sat26DoON = new $hs.Thunk();
                    hs_sat26DoON.evaluateOnce = function () {
                        var hs_ds26DoOQ = hs_pzustat26DoE8;
                        if (hs_pzustat26DoE8.notEvaluated) {
                            hs_ds26DoOQ = hs_pzustat26DoE8.hscall();
                        }
                        var hs_ds126DoEw = hs_ds26DoOQ.data[0];
                        var hs_sat26DoOP = new $hs.Func(1);
                        hs_sat26DoOP.evaluate = function (hs_ds226DoEx) {
                            var hs_wild26DoOS = [hs_ds226DoEx, __hscore_st_dev(hs_ds126DoEw)];
                            var hs_ds326DoEC = hs_wild26DoOS[0];
                            var hs_ds426DoED = hs_wild26DoOS[1];
                            var hs_sat26DoOR = new $hs.Data(1);
                            hs_sat26DoOR.data = [hs_ds426DoED];
                            return [hs_ds326DoEC, hs_sat26DoOR];
                        };
                        if (hs_sat26DoOP.notEvaluated) {
                            return hs_sat26DoOP.hscall();
                        } else {
                            return hs_sat26DoOP;
                        }
                    };
                    return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoON, hs_sat26DoOO);
                };
                var hs_sat26DoOL = new $hs.Thunk();
                hs_sat26DoOL.evaluateOnce = function () {
                    return $hs.modules.SystemziPosixziInternals.hs_statGetType.hscall(hs_pzustat26DoE8);
                };
                return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoOL, hs_sat26DoOM);
            };
            var hs_sat26DoOB = new $hs.Thunk();
            hs_sat26DoOB.evaluateOnce = function () {
                var hs_sat26DoOE = new $hs.Thunk();
                hs_sat26DoOE.evaluateOnce = function () {
                    var hs_ds26DoOI = hs_fd26DoE5;
                    if (hs_fd26DoE5.notEvaluated) {
                        hs_ds26DoOI = hs_fd26DoE5.hscall();
                    }
                    var hs_ds126DoEd = hs_ds26DoOI.data[0];
                    var hs_ds226DoOH = hs_pzustat26DoE8;
                    if (hs_pzustat26DoE8.notEvaluated) {
                        hs_ds226DoOH = hs_pzustat26DoE8.hscall();
                    }
                    var hs_ds326DoEe = hs_ds226DoOH.data[0];
                    var hs_sat26DoOG = new $hs.Func(1);
                    hs_sat26DoOG.evaluate = function (hs_ds426DoEf) {
                        var hs_wild26DoOK = [hs_ds426DoEf, __hscore_fstat(hs_ds126DoEd, hs_ds326DoEe)];
                        var hs_ds526DoEk = hs_wild26DoOK[0];
                        var hs_ds626DoEl = hs_wild26DoOK[1];
                        var hs_sat26DoOJ = new $hs.Data(1);
                        hs_sat26DoOJ.data = [hs_ds626DoEl];
                        return [hs_ds526DoEk, hs_sat26DoOJ];
                    };
                    if (hs_sat26DoOG.notEvaluated) {
                        return hs_sat26DoOG.hscall();
                    } else {
                        return hs_sat26DoOG;
                    }
                };
                var hs_sat26DoOD = new $hs.Thunk();
                hs_sat26DoOD.evaluateOnce = function () {
                    var hs_sat26DoOF = new $hs.Thunk();
                    hs_sat26DoOF.evaluateOnce = function () {
                        return $hs.modules.GHCziCString.hs_unpackCStringzh.hscall("fdType\x00");
                    };
                    return $hs.modules.ForeignziCziError.hs_throwErrnoIfMinus1Retryzu.hscall($hs.modules.ForeignziCziTypes.hs_zdfNumCInt, hs_sat26DoOF);
                };
                return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoOD, hs_sat26DoOE);
            };
            return $hs.modules.GHCziBase.hs_zgzg.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoOB, hs_sat26DoOC);
        };
        var hs_sat26DoOz = new $hs.Thunk();
        hs_sat26DoOz.evaluateOnce = function () {
            return $hs.modules.ForeignziMarshalziAlloc.hs_allocaBytes.hscall($hs.modules.SystemziPosixziInternals.hs_sizzeofzustat);
        };
        return $hs.modules.GHCziBase.hs_zd.hscall(hs_sat26DoOz, hs_sat26DoOA);
    };
    this.hs_fdType.evaluate = function (hs_fd26DoF8) {
        var hs_sat26DoP1 = new $hs.Func(1);
        hs_sat26DoP1.evaluate = function (hs_ds26DoFb) {
            var hs_wild26DoP4 = hs_ds26DoFb;
            if (hs_ds26DoFb.notEvaluated) {
                hs_wild26DoP4 = hs_ds26DoFb.hscall();
            }
            var hs_ty26DoFg = hs_wild26DoP4.data[0];
            return $hs.modules.GHCziBase.hs_return.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_ty26DoFg);
        };
        var hs_sat26DoP0 = new $hs.Thunk();
        hs_sat26DoP0.evaluateOnce = function () {
            return $hs.modules.SystemziPosixziInternals.hs_fdStat.hscall(hs_fd26DoF8);
        };
        return $hs.modules.GHCziBase.hs_zgzgze.hscall($hs.modules.GHCziBase.hs_zdfMonadIO, hs_sat26DoP0, hs_sat26DoP1);
    };
};
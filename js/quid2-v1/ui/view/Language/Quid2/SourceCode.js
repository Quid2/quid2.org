goog.provide('quid2.ui.view.Language.Quid2.SourceCode');
goog.require('quid2');
goog.require('quid2.ui.Editor');
goog.require('quid2.ui.view.Language.Quid2.Code');
goog.require('quid2.ui.view.Language.Quid2.Literate');

// UNUSED??
quid2.ui.view.Language.Quid2.SourceCode = function(ctx) {
  var q = quid2;
  var me = this;
  var app = quid2.module.Service.Org.Quid2.App;

  function process(o) {
    ctx.cop("Reading source code",app.Last.value.getSrc.cachedCall(o.ref)).done(function (source) {

    me.obj = {type:"Code",mimeType:"text/x-haskell",patched:new app.Last.value.Stored(o.ref),source:source};

    show();
    });
  };

  function show() {
    ctx.area.empty();
    if (ctx.conn.loggedIn) ctx.menu.set([["Edit Module",maybeEdit]]);
    display(true);
  };

  // Check before editing.
  function maybeEdit() {
    var name = ctx.top.match(["absName","relName",[["source","ctx"]]]).relName;
    app.Last.value.privateAppModule.call(name).then(function(pri) {
      if (pri.equal(ctx.top)) edit();
      else if (confirm("Do you really want to edit this module? You already have a private version of " + name + " that will be overwritten if you proceed!")) edit();
      }
      ,edit);
  };

  function edit() {
    /*ctx.menu.set([["View",function () {
      // save if required
      me.editor.closeDoc();
      show();
    }]]);*/

    display(false);
  };

  function display(readOnly) {
    me.editor = new quid2.ui.SourceCodeEditor($.extend({},ctx,{obj:$.extend(me.obj,{readOnly:readOnly})}));
  }

  ctx.obj.match(function () {quid2.ui.view.Language.Quid2.Code(ctx);},function () {quid2.ui.view.Language.Quid2.Literate(ctx);});
};

goog.provide('quid2.ui.view.Language.Quid2.Literate');
goog.require('quid2');
goog.require('quid2.storage');
goog.require('quid2.ui.SourceCodeEditor');

quid2.ui.view.Language.Quid2.Literate = function(ctx) {
  var q = quid2;
  var k = quid2.ui.view.Language.Quid2.Literate;
  var me = this;
  var app = quid2.module.Service.Org.Quid2.App;
  q.assert(ctx && ctx.area && ctx.top && ctx.obj && ctx.cop);

  function show() {
    ctx.area.empty().dblclick(maybeEdit).attr("title","Double click to Edit");
    quid2.ui.view.Language.Quid2.Literate.asLiterate($.extend({},ctx,{obj:me.obj.source}));
  };

  function edit() {
     ctx.area.empty().attr("title","ESC to exit editor");
     me.editor = new quid2.ui.SourceCodeEditor($.extend({},ctx,{obj:me.obj}));
  };

  // Check before editing.
  // BUG: duplicated code
  // BAD: Should save previous versions instead
  function maybeEdit() {
    var name = ctx.top.match(["absName","relName",[["source","ctx"]]]).relName;
    app.Last.value.privateAppModule.call(name).then(function(pri) {
      if (pri.equal(ctx.top)) edit();
      else if (confirm("Do you really want to edit this module? You already have a private version of " + name.value + " that will be overwritten if you proceed!")) edit();
      }
      ,edit);
  };

 var ref = ctx.obj.match(undefined,["ref"]).ref;
 ctx.cop("Reading source code",app.Last.value.getLiterateSrc.cachedCall(ref)).done(function (source) {
   me.obj = {type:"Literate",mimeType:"mixed",patched:new app.Last.value.Stored(ref),source:source,readOnly:false};
   show();
  });
};

quid2.ui.view.Language.Quid2.Literate.asLiterate = function (ctx) {
  var h = ctx.area;
  h.html(ctx.obj.value);

  h.find("a").each(function (i,e) {
    var elem = $(e);
    var ref = elem.attr("href");
    if (ref && $.trim(ref).indexOf(":")==-1 && $.trim(ref).indexOf("#")==-1) {
      var id = $.trim(elem.attr("href"));
      elem.removeAttr("href").addClass("quid2link").click(function(event) {
	var e = $(this);
	//ctx.eval({elem:e,title:e.attr("title"),id:id,body:ref.substr(6),target:e.attr("target"),newWindow:event.ctrlKey});
	ctx.eval({elem:e,id:id,title:e.attr("title"),newWindow:event.ctrlKey,rawResult:event.shiftKey});
	event.stopPropagation();
      });
    } else elem.attr("target",elem.attr("target") || "_blank");
  });

  h.find("p").addClass("doc");
  /*
  h.find("expr").click(function(event) {
      var e = $(this);
      ctx.eval({elem:e,title:e.attr("title"),id:e.attr("id"),body:e.contents().first().text(),target:e.attr("target"),newWindow:event.ctrlKey});
      event.stopPropagation();
  });
 */
};

      // Change <expr/> to <a/>
      /*var h = $("<div>"+src+"</div>");
      h.find("expr").each(function (i,e) {
	var elem = $(e);
	var id = elem.attr("id") || "";
	var expr = elem.contents().first().text() || "";
	var title = elem.attr("title") || expr;
	elem.html("<a/>").attr("id",id).attr("href","quid2:"+expr).attr("title",title);
      });
      var source = h.html();*/

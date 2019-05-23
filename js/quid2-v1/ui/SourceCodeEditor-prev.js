/**
 * Editor for Quid2 source files.
 */
goog.provide('quid2.ui.SourceCodeEditor');
goog.require('quid2');
//goog.require("quid2.ui.MenuFrame");
goog.require('quid2.ui.Editor');

quid2.ui.SourceCodeEditor = (function() {
  var q = quid2;
  var g = goog;
  var differ = new diff_match_patch();
  var p = quid2.primitive.value;
  var pt = quid2.primitive.type;
  var app = quid2.module.Service.Org.Quid2.App;

  function SourceCodeEditor(ctx,ed) {
    var me = this;
    q.assert(ctx && ed);

    function status (cls,msg) {
      console.log("status",cls,msg);
      ed.area.trigger(q.ui.QComponent.EventType.STATUS,{cls:cls,msg:msg});
    };

    ed.area.empty();//attr("title","ESC to exit editor");
    if (!ed.readOnly) status("info","Editing");

    function toPatch(diff) {
      var op = diff[0];
      var v = diff[1];
	switch (op) {
	case DIFF_INSERT:
	  return new app.Last.value.Ins(new p.String(v));
	case DIFF_DELETE:
	  return new app.Last.value.Drop(new p.Word32(v.length));
	case DIFF_EQUAL:
	  return new app.Last.value.Keep(new p.Word32(v.length));
	default:
	  throw "Unknown diff kind";
	};
    };

    function getPatch(currentPatch,currentContent,newContent) {
      var diff = differ.diff_main(currentContent,newContent);
      var patch = new p.List($.map(diff, toPatch));
      return new ctx.app.value.Patched(patch,currentPatch);
    };

    function onChange() {status("warning","Unsaved!");};

    var state = $.Deferred();
    var count = 0;
    function onSave(content) {
      var myState = $.Deferred();
      var oldState = state;
      state = myState;
      count++;console.log("[count",count);
      var result = $.Deferred();

      function trans(newState) {
	myState.resolve(newState);
        count--;console.log(count,"count]");
      };

      function modify(newState) {
        trans(newState);
	result.resolve(newState.top);
      };

      oldState.done(function(currentState) {
	if (content == currentState.source.value) modify(currentState);
        else {
	  var patched = getPatch(currentState.patched,currentState.source.value,content);
	  console.log(patched.show());
	  status("working","Saving");
	  ed.save(ed.type== "Code" ? new ctx.app.value.PatchedCode(patched) : new ctx.app.value.PatchedLiterate(patched))
	  .then(function (etop) {
		  //new quid2.module.Data.Either.Last.type.Either([new pt.List(app.Last.type.Note])
                  console.log("etop",etop.show());
                  etop.match(
		    function (notes) {
		    console.log("top err NOTES",notes.show());
		    var topErrMsg ="Compilation Errors";
		    status("error",topErrMsg);
		    var errPos = [];
		    notes.map(function(note) {
		      var errMsg = "";
		      var n = note.match(["rank","action","reason"]);
		      var r = n.rank.match(q.cnst("must"),q.cnst("should"),q.cnst("may"));
		      n.action.match(function(){topErrMsg+=" " + n.reason.value;}
				     ,function(srcLoc){
				       var pos = srcLoc.match(["filename","line","column"]);
				       errPos.push({line:pos.line.value-1,column:pos.column.value,msg:n.reason.value,kind:r});
				     }
				     ,function(){throw "Replace is unsupported";}
				    );
		      });
		    me.editor.errors(errPos);
		    trans(currentState);
		    result.reject();
		  }
		  ,function (top) {
		    console.log("top OK",top.show());
		    status("info","Saved");
		    me.editor.errors([]);
		    modify({top:top,patched:patched,source:new p.String(content)});
		  });
	      },function(errs) {
		  console.log("error",errs);
		  status("error","Error: " +errs);//Obj.show()); // /quid2.ui.View.displayObjAt(ctx,me.statusArea,errObj)
		  trans(currentState);
		  result.reject();
	      });
	};
      });
      return result.promise();
    };

    function onClose() {
      state.done(function () {
	if (me.editor.hasErrors()) me.editor.unfreeze();
	else {
	  me.editor.close();
	  // BAD ed.update();
	}
      });
    };

    state.resolve({top:ed.o,patched:ed.patched,source:ed.source});

    me.editor = new quid2.ui.Editor({mimeType:ed.mimeType,content:ed.source.value,area:ed.area,onSave:onSave,onChange:onChange,onClose:onClose,lineNumbers:true,readOnly:ed.readOnly});
  };

  return SourceCodeEditor;
})();
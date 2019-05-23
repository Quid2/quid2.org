goog.provide('quid2.ui.AppModule');
goog.require('quid2');
goog.require('quid2.Rx');
goog.require('quid2.primitive');
goog.require('quid2.module');
goog.require('quid2.ui.Editor');
goog.require('quid2.Deferred');
goog.require('quid2.ui.Patch');
goog.require('quid2.ui.Help');
goog.require("quid2.ui.Event");
goog.require("quid2.ui.View");

quid2.ui.AppModule = (function () {
  var q = quid2;
  var g = goog;
  var p = quid2.primitive.value;
  var m = quid2.modules;
  var rx = quid2.Rx;
  var d = quid2.Deferred;

  function matchNotes(notes) {

    function matchNote(result,note) {
      var n = note.match(["rank","action","reason"]);
      var r = n.rank.match(q.cnst("must"),q.cnst("should"),q.cnst("may"));
      n.action.match(function() {result.err += " " + n.reason.value;}
		   ,function(srcLoc){
		     var pos = srcLoc.match(["filename","line","column"]);
		     result.errPos.push({line:pos.line.value-1,column:pos.column.value,msg:n.reason.value,kind:r});
		   }
		   ,function(){throw "Replace is unsupported";}
		  );
      return result;
    };

    return notes.reduce(matchNote,{err:"",errPos:[]});
  };

  /* -> Defer.Fail (ErrorString | [Notes]) && Defer.done = AppModule,Exports) */
  function save(ctx,mdl,newSource) {
    q.assert(ctx && mdl && g.isString(newSource),["AppModule.save",ctx,mdl,newSource]);
    var o = matchAppModule(mdl.obj);

    var patched = q.ui.Patch.getPatch(ctx,new ctx.app.value.Stored(o.ref),mdl.source,newSource);
    console.log(patched.show());
    var newPatch = o.kind==0 ? new ctx.app.value.PatchedCode(patched) : new ctx.app.value.PatchedLiterate(patched);

    var dfd = new $.Deferred();

    ctx.cop("Saving new source code",ctx.app.value.updateSource.call(o.relName,newPatch)).then(function (o) {

      // notes :: [Note]
      function compileErrs(notes) {
	console.log("compileErrs",notes.show());
	dfd.resolve({kind:"notes",obj:matchNotes(notes)});
      };

      // ok :: (AppModule,Exports)
      function compileOk(ok) {
	var newMdl = ok.value[0];
	var exps= ok.value[1];
	var n = matchAppModule(newMdl);
	q.modules.addModuleFromExports(n.absName.value,exps,false);
	dfd.resolve({kind:"mdl",obj:{obj:newMdl,source:newSource}});
      };

      return o.match(compileErrs,compileOk);
      },function (serverErr) {
	  try {
	      var err = serverErr.match(["msg"]);
	      //dfd.resolve({kind:"notes",obj:matchNotes([err])});
	      dfd.resolve({kind:"notes",obj:{err:err.msg.value,errPos:[]}});
	  } catch (err) {
	      console.error(serverErr);
	      dfd.resolve({kind:"notes",obj:{err:"Unknown Error",errPos:[]}});
	  }
      });

    return dfd;
  };

    function isAState(s)	{
      return s && s.state && (s.state==STATE_OK || s.state==STATE_CHANGED) && s.mdl && s.mdl.obj && s.mdl.source && g.isString(s.mdl.source);
    }

    var STATE_OK=1,STATE_CHANGED=2;
    /** Ctx -> Observer -> State -> Event -> Defer State **/
    function saver(ctx,obs,ui,state,e) {
      q.assert(ctx && obs && isAState(state) && e,[ctx,obs,ui,state,e]);

      function isState(s) {return state.state==s;};
      function out(kind,obj) {obs.onNext({kind:kind,obj:obj});};
      function status(cls,msg) {out("status",{cls:cls,msg:msg});};
      function to(newState) {return q.ext(state,{state:newState});}

      var trans = {
	change : d.lift(function () {
	  status("warning","Unsaved!");
          return to(STATE_CHANGED);
	})
	,save: function () {
	  if (isState(STATE_OK)) return d.pure(state);

	  status("working","Saving");
	  return save(ctx,state.mdl,e.editor.getValue()).pipe(
	    function(r) {
	      if (r.kind=="notes") {
		status("error","Compilation errors "+ r.obj.err);
		e.editor.setErrors(r.obj.errPos);
		return to(STATE_CHANGED);
	      };

	      if (r.kind=="mdl") {
		var newMdl = r.obj;
		status("info","Saved");
		out("focus",newMdl.obj);
		e.editor.setErrors([]);
		return {state:STATE_OK,mdl:newMdl};
	      }
              throw "unexpected result";
	      //status("error","Saving source code failed: " + r.err.msg);
	      //return to(STATE_CHANGED);
	  });
	}
	,eval: d.lift(function() {
	  obs.onNext(e);
	  return state;
	})
	,view: d.lift(function() {
	  if (isState(STATE_OK)) {
	    status("plain","");
	    ui.view(state.mdl);
	    return state;
	  };
	  status("error","Fix the errors before leaving the editor.");
	  ui.viewFailed();
	  return state;
	})
      };

      return trans[e.kind](state);
   };

   function delayChange (delayInMs,obs) {
     var changeTimeout;

     var newObs = new Rx.Subject();
     var out = function (e) {
       newObs.onNext(e);
     };

     function off() {
       var active = !!changeTimeout;
       if (active) {
	 clearTimeout(changeTimeout);
	 changeTimeout=undefined;
       };
       return !active;
     };

    obs.subscribe(
	  function (e) {
	    var save = function () {out(q.ext(e,{kind:"save"}));};
	    var changed = ! off();
	    if (e.kind == "change") {
	      if (! changed) out(e);
	      changeTimeout = setTimeout(function() {
	 	 off();
		 save();
	      }, delayInMs);
	    } else {
	      if (changed) save();
	      out(e);
	    }
	  },function (e) {
	    newObs.onError(e);
	  },function () {
	    newObs.onCompleted();
	  }
	);

     return newObs;
   };

 // TODO: no need to make a call, use information about private files (received by subscription).
 function maybeEdit(ctx,mdl,edit) {
    var o = matchAppModule(mdl);
    ctx.app.value.privateAppModule.call(o.relName).then(function(pri) {
      //var p = pri.match(["absName","relName",[["source","ctx"]]]);

      if (pri.equal(mdl)) edit();
      else if (confirm("Do you really want to edit this module? You already have a private version of " + o.relName.value + " that will be overwritten if you proceed!")) edit();
      }
      ,edit);
  };

  function isState(s) {
    return s && g.isBoolean(s.isLiterate);
  };

  function display(ctx,area,mdl,readOnly) {
    q.assert(ctx && q.isJElem(area) && mdl);// && out);

    var o = matchAppModule(mdl);

    function EvalArea(area) {
      this.area = area;
      this.observable = new Rx.Subject();
    };

    EvalArea.prototype.render = function (source) {
      console.log("render",source);
      var me = this;
      me.area
	.addClass("quid2-literate")
	.html(source)
        //.find("p").addClass("quid2-text").end()
        .find("a[href]").each(function() {
	  var elem = $(this);
	  elem.attr("target",elem.attr("target") || "_blank");
	  }).end()
        .help("a","Click to open inside Quid2, Shift-Click to open outside.")
	.on("click","a",function (event) {
	  var elem = $(this);
	  var ref = elem.attr("href");
	  if (! ref) return false; //needed?
	ref = $.trim(ref);
	  var obj = {
	    title:elem.attr("title") || ref //elem.text() || ref
	    ,isRef:ref.indexOf(":")==-1 && ref.indexOf("#")==-1
	    ,newWindow:event.ctrlKey || event.shiftKey
            ,ref:ref
	  };

	  if (! obj.isRef && obj.newWindow) return true;

	  me.observable.onNext({kind:"eval",obj:obj});
	  return false;
	});

      return me;
    };

    function editSwitch(mdl,edit) {
      area.attr("title","Double click to Edit").dblclick(g.partial(maybeEdit,ctx,mdl,function() {
	area.removeAttr("title").off("dblclick");
	edit();
      }));
    };

    function editorRx_(editor) {
      return delayChange(8000,editor.toObservable().log("Editor")).log("Delayed");
    };

    function editorRx(editConf) {return editorRx_(new quid2.ui.Editor(editConf));};

    function editSaveRx(editorObs,source,ui) {
      var out = new Rx.Subject();
      q.Rx.sink("Saved",editorObs.foldD(g.partial(saver,ctx,out,ui),{state:STATE_OK,mdl:{obj:mdl,source:source.value}}));
      ui.view({obj:mdl,source:source.value});
      return out.log("editSaveRx.out");
    };

    function roEditor(area,mimeType,source) {return new quid2.ui.Editor({mimeType:mimeType,content:source.value,area:area,lineNumbers:false,readOnly:true});}

    function codeRx(readOnly) {
      return ctx.cop("Reading source code",ctx.app.value.getSrc.cachedCall(o.ref)).pipe(function (source) {
	var editor = roEditor(area,"text/x-haskell",source);
	var readOnlyEditor = editorRx_(editor);
	if (readOnly) return [readOnlyEditor,{}];

	var ui = {
	  view:function (mdl) {
	    editor.setOption("lineNumbers",false);
	    editor.setOption("readOnly",true);
	    editSwitch(mdl.obj,function () {
	      // edit
	      editor.setOption("lineNumbers",true);
	      editor.setOption("readOnly",false);
	    });
	    editor.unfreeze();
	  }
	  ,viewFailed:function (){
	    editor.unfreeze();
	  }
	  ,visible:function () {
	    editor.visible();
	  }
	};

	return [editSaveRx(readOnlyEditor,source,ui),ui];
      });
    };

    function literateRx(readOnly) {
      return ctx.cop("Reading source code",ctx.app.value.getLiterateSrc.cachedCall(o.ref)).pipe(function (source) {
	if (readOnly) {
	  area.addClass("quid2-content");
	  return [new EvalArea(area).render(source.value).observable,{}];
	};

	var viewArea =  $("<div/>");
	var editArea =  $("<div/>");//.hide();
	area.append(viewArea);
	area.append(editArea);
	var editor = roEditor(editArea,"mixed",source);
	var evalArea = new EvalArea(viewArea);
  	var ui = {
	  view:function (mdl) {
	    area.addClass("quid2-content");
	    editArea.hide();
	    evalArea.render(mdl.source);
	    viewArea.show();
	    editSwitch(mdl.obj,function () {
	      // edit
	      area.removeClass("quid2-content");
	      editor.setOption("lineNumbers",true);
	      editor.setOption("readOnly",false);
	      viewArea.hide();
	      editArea.show();
	      editor.refresh();
	    });
	  }
	  ,viewFailed:function (){
	    editor.unfreeze();
	  }
	  ,visible:function (){
	    editor.visible();
	  }
	};

	return [editSaveRx(editorRx_(editor).merge(evalArea.observable),source,ui),ui];
      });
    };

    /*function view(readOnly) {
      return ([codeRx,literateRx][o.kind])(readOnly);//.done(function (rx) {q.assert(rx);out.onNext(rx);});
    };*/

    return ([codeRx,literateRx][o.kind])(readOnly);
  };

 function matchAppModule(obj) {
   var o = obj.match(["absName","relName",[["source","ctx"]]]);
   o.source.match(function (r) {
		    //o.isLiteral=false;
                    o.kind=0;
		    o.ref=r;
		  },function (r) {
		    //o.isLiteral=true;
		    o.kind=1;
		    o.ref=r;
		  });
   return o;
 };

 function displaySource(ctx,area,obj,readOnly) {
   q.assert(ctx && area && obj);

   //var seqs = new rx.Obs();//rx.log("displaySource",seqs.observable.switchLatest()).subscribe(Rx.Observer.create(

   var currObj = obj;
   return display(ctx,area,obj,readOnly).pipe(function (r) {
     var obs = r[0];
     var ui = r[1];
     obs.log("displaySource").subscribe(Rx.Observer.create(
	  function (e) {
	    if (e.kind=="status") {
	      console.log("status",e.obj.cls,e.obj.msg);
	      area.trigger(q.ui.Event.STATUS,e.obj);
	      return;
	    };
	    if (e.kind=="focus") {
	      currObj = e.obj;
	      //area.trigger(q.ui.Event.FOCUS,e.obj);
	      ctx.main.onNext(e.obj);
	      return;
	    };
	    if (e.kind=="eval") {
	      var expr = e.obj;

	      if (expr.isRef) {
		var o = matchAppModule(currObj);
		var ref = o.absName.value+"."+expr.ref;
		//ctx.cop("Evaluating '" + (expr.title || expr.id) + "'",m.functionCall(ref)).then(function (o) {ctx.display(o);},function (err) {console.log("Error while executing "+name);});

		//if (expr.newWindow) ctx.externalRef(expr.title,ref);
		//else ctx.topRef(expr.title,ref);
                var t = quid2.ui.View.Target;
		ctx.displayRef(expr.newWindow ? t.WINDOW : t.TAB,expr.title,ref);

		return;
	      };

	      ctx.top().display(new ctx.app.value.Bookmark(new p.String(expr.ref),new p.String(expr.title)));
	      return;
	    };
	    throw "Unknown event kind";
	  }
    ));
    return ui;
  });

 };

 return {
   displaySource:displaySource
   ,matchAppModule:matchAppModule
 };

})();
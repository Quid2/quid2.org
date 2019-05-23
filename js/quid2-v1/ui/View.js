goog.require('quid2');
goog.provide('quid2.ui.View');

/** @return ctx ->IO () **/
quid2.ui.View.getDisplay = function (to,ctx) {
  return to.display(ctx).done(function (display) {
    console.log("DISPLAY",display.show());
    var d = display.match(["mainView","sideViews"]);

    var view = d.mainView.match(["fun","pars"]);
    function onPrim(primName) {
      //return quid2.modules.getFunction("quid2.ui.view." + primName.value);
    return quid2.ui.viewers[primName.value];
    };

    function onCode(code) {
      //return $.when("function (ctx) {"+code+"}");
      return eval(code.value);
    };
    var f = view.fun.match(onPrim,onCode);
    return quid2.modules.getNTyped(view.pars).pipe(function (pars) {
      // if (pars.length==0) return f;
      return function (ctx) {
	pars.push(ctx);
	f.apply(f,pars);
      };
    });

    //ctx = to.mainView.focus(ctx);
   //to.sideViews.map(function(v) {v.focus(ctx);});
    });
};


/*
quid2.ui.View.display = function (ctx)  {
  quid2.ui.View.getViewer(ctx.obj).done(function (viewer) {
    ctx.area.empty();
    (viewer)(ctx);
  });
};

quid2.ui.View.displayObj = function (ctx,obj) {
  quid2.ui.View.display($.extend({},ctx,{obj:obj}));
};

quid2.ui.View.displayObjAt = function (ctx,area,obj) {
  quid2.ui.View.display($.extend({},ctx,{obj:obj,area:area}));
};

quid2.ui.View.isPageViewer = function (viewer) {return viewer.kind ? (viewer.kind == quid2.ui.View.PAGE) : false;};

function limit(n,max) {
  return n < max ? n+1 : 0;
};

quid2.ui.View.defaultViewer = function (ctx)  {
  var q = quid2;
  //ctx.area.text(q.show(ctx.obj));
  //ctx.area.text(q.isDefined(ctx.obj.show) : ? ctx.obj.show() : ctx.obj);
  if (q.isDefined(ctx.obj.views)) {
    var views = ctx.obj.views();
    var elem = $("<span/>");
    ctx.area.empty().append(elem);
    var n = 0;
    elem.html(views[0](ctx.obj));
    if (views.length>1) elem.attr("title","Click to change the view.");
    elem.click(function(e) {
      n = limit(n,views.length);
      elem.html(views[n](ctx.obj));
      e.stopPropagation();
    });
  } else ctx.area.text(ctx.obj.show());
};

quid2.ui.View.getViewer = function (obj)  {
	var result = new $.Deferred();
	var q = quid2;
	//var fullConName = q.conName(obj);/
	//var conName = q.relName(fullConName);
	if (q.isDefined(obj.name)) {

	  var name = obj.dataTypeName;
	  var sname = name.split(".");
	  var sname2  = sname.slice(0,sname.length-2);
	  sname2.push(sname[sname.length-1]);
	  var vName = sname2.join(".");
	  var viewClsName = "quid2.ui.view." + vName;

	  q.require(viewClsName).then(function() {result.resolve(q.traverse(quid2.ui.view,vName.split(".")));}
				      ,function(err) {
				      console.info("Could not load viewer: " + err);
				      result.resolve(quid2.ui.View.defaultViewer);
				     });
	} else {
	  result.resolve(quid2.ui.View.defaultViewer);
	};

	return result.promise();
};
*/
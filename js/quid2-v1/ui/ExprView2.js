goog.require('quid2');
// goog.require('quid2.ui.view.Quid2Doc');
goog.require('quid2.ui.AutoComplete');
goog.provide('quid2.ui.ExprView2');

// BUG: parallel loading of modules will give "undefined" errors
goog.require('quid2.ui.view.Lang.Quid2.Quid2Pkg');
goog.require('quid2.ui.view.Lang.JavaScript.JavaScriptPkg');
goog.require('quid2.ui.view.Lang.SmartDoc.SmartDocPkg');

// For test only
goog.require('quid2.ui.Tree');
//goog.require('quid2.ui.view.Pkg.Store');
goog.require('quid2.ui.view.Lang.SmartDoc.SmartDoc');
goog.require('quid2.ui.view.Price.Price');

quid2.ui.ExprView2 = (function() {

	var q = quid2;
	var g = goog;

	function problem(hub, ctxMsg, err, ctxId) {
		hub.publish("problem",{
			ctxMsg : ctxMsg,
			err : err,
			ctxId : ctxId
		});
	};

	function ExprView(conn, hub, area, env) {
		var me = this;
		me.conn = conn;
		me.hub = hub;
		me.display = $("<div/>");
		area.append(this.display);
		// this.display.sortable();
		me.env = env;

	        /*
		me.env.evalExpr(q.appN(q.v("Org.Quid2.App.Name.nameState"),[me.conn.proof()])).then(function(state) {
			$.each(state.v.vs, function(i, e) {
				post(me, {
					title : e[0],
					text : e[1]
				});
			});
		}, g.partial(problem,me.hub,"Could not get the application state"));
		*/
	};

	/**
	 * @param val :: a simple value.
	 */
	  ExprView.prototype.show = function(elem,val) {
	  var me = this;
	  var fullConName = q.conName(val);
	  var path = fullConName.split(".");
	  path.splice(path.length-2,1);
	  var conName = path.join(".");
	  var viewClsName = "quid2.ui.view." + conName;

	  function fnd(obj,ns) {
	    if (ns.length==0) return obj;
	    return fnd(obj[ns[0]],ns.splice(1));
	  }

	  function mk() {
	    // var obj = (new
	    // (quid2.ui.view[clsName]))(val,me.conn,me.hub,exprArea,me.env);
	    // console.log("obj=",obj);
	    //((quid2.ui.view[clsName]))(val, me.conn, me.hub, elem, me.env);

	    var ctx = {obj:val,conn:me.conn,hub:me.hub,area:elem,env:me.env
		       ,updated:function(newExpr) {console.log("UPDATE TO ",q.show(newExpr));}
		      };
	    (fnd(quid2.ui.view,conName.split(".")))(ctx);
	  };

	  function sh() {elem.text(q.show(val));}

	  //if (conName == "Prelude.Unknown" || conName == "Prelude.Num" || conName == "Prelude.String" ) sh();
	  //else
	  q.require(viewClsName).then(mk, function(err) {
	      sh();
	      console.info("Could not load viewer: " + err);
	  });

	  this.hub.publish("clearProblem", {
	    ctxId : "ExprView"
	  });
	};

	/**
	 * @param expr ::
	 *            {title::String,text::String}
	 */
	ExprView.prototype.eval = function(expr) {
	  pre(this, expr);
	};

	function pre(me, expr) {
		var entry = newExpr(me, expr);
		me.display.prepend(entry);
		return entry;
	};

	function post(me, expr) {
		var entry = newExpr(me, expr);
		me.display.append(entry);
		return entry;
	};

	function evalEntry(me, elem) {
		var expr = elem.data("expr");
		if (expr.text.length == 0) return;

		var msg = "Evaluating: <b>" + expr.text + "</b>";
		me.hub.publish("noProblem", {
			ctxMsg : msg,
			ctxId : "ExprView"
		});
		elem.empty();

		function problem(ctxMsg, err) {
			me.hub.publish("problem", {
				ctxMsg : "Cannot evaluate",
				ctxId : "ExprView",
				err : err
			});
		};


		// Provide an identity proof.
		var exp = "(\\me -> (" + expr.text + ")) (" + q.show(me.conn.proof()) + ")";

		me.env.evalRelString(exp).then(goog.partial(me.show,elem), function(err) {
		  me.hub.publish("problem", {
				ctxMsg : "Cannot evaluate '" + expr.text + "'",
				ctxId : "ExprView",
				err : err
			});
		});
	};

	function newInput(me, elem) {
		var expr = elem.data("expr");
		var inputElem = $("<input/>").addClass("userInput").val(expr.text);
		elem.empty().append(inputElem);
		inputElem.focus();

		// BUG: no names
		var ac = new quid2.ui.AutoComplete([], inputElem.get(0), true, true);
		goog.events.listen(ac, quid2.ui.AutoComplete.EventType.DONE, function(ev) {
			elem.data("expr", $.extend(expr, {
				text : ev.input
			}));
			evalEntry(me, elem);
		});
	};

	/** expr:: {title::String,text::String} * */
	function newExpr(me, expr) {
		var title = q.dfl(expr.text, expr.title);

		var elem = $("<div class='expr ui-widget ui-widget-content ui-helper-clearfix ui-corner-all' >"
				+ "<div class='expr-header ui-widget-header ui-corner-all' title='Double Click to edit expression. Ctrl-Click to re-evaluate expression.'>"
				+ "<span class='expr-header-text'>" + title + "</span>" + "<span class=expr-header-else />"
				+ "<span title='Delete' class='ui-icon ui-icon-closethick'/>" + "<span>&nbsp;&nbsp;&nbsp;</span>"
				+ "<span title='Minimise' class='ui-icon ui-icon-minusthick'/></div>" + "<div class=expr-content/></div>");

		elem.find(".expr-header-text").editable(function(v) {
			return v;
		}, {
			tooltip : "Double Click to edit label.",
			event : "dblclick",
			onblur : "submit",
			style : "inherit"
		});

		elem.find(".ui-icon-closethick").click(function(e) {
			$(this).parents('.expr').remove();
			e.stopPropagation();
		});

		elem.find(".ui-icon-minusthick").click(function(e) {
			$(this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick").parents(".expr").find(".expr-content").toggle();

			$(this).attr("title", $(this).hasClass("ui-icon-minusthick") ? "Minimise" : "Maximise");

			e.stopPropagation();
		});

		var content = elem.find(".expr-content").data("expr", expr);

		elem.find(".expr-header").dblclick(function(e) {
			newInput(me, content);
			e.stopPropagation();
		}).click(function(e) {
			if (e.ctrlKey) {
				// evalEntry(me,$(this).parents(".expr").find(".expr-content"));
				evalEntry(me, content);
				e.stopPropagation();
			};
		});

		evalEntry(me, content);

		return elem;
	};

	return ExprView;
})();

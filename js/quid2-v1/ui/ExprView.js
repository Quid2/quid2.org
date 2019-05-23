goog.provide('quid2.ui.ExprView');
goog.require('quid2');
// goog.require('quid2.ui.view.Quid2Doc');
goog.require('quid2.ui.AutoComplete');

// BUG: parallel loading of modules will give "undefined" errors
//goog.require('quid2.ui.view.Lang.Quid2.Quid2Pkg');
//goog.require('quid2.ui.view.Lang.JavaScript.JavaScriptPkg');
//goog.require('quid2.ui.view.Lang.SmartDoc.SmartDocPkg');

// For test only
//goog.require('quid2.ui.Tree');
//goog.require('quid2.ui.view.Pkg.Store');
//goog.require('quid2.ui.view.Lang.SmartDoc.SmartDoc');
//goog.require('quid2.ui.view.Price.Price');

quid2.ui.ExprView = (function() {

	var q = quid2;
	var g = goog;

	function problem(hub, ctxMsg, err, ctxId) {
		hub.publish("problem",{
			ctxMsg : ctxMsg,
			err : err,
			ctxId : ctxId
		});
	};

	function ExprView(conn, hub, area, env ) {
		var me = this;
		me.conn = conn;
		me.hub = hub;
		me.display = $("<div/>");
		area.append(this.display);
		// this.display.sortable();
		me.env = env;
		//me.envModule = envModule;
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

		var msg = "Evaluating: " + expr.text + "";
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
		var exp = "(\\me -> (" + expr.text + ")) (" + q.show(me.env.proof()) + ")";

		me.env.call(q.v(expr.module+"."+expr.text)).then(function (val) {
		  quid2.ui.display({obj:val,area:elem,env:me.env,hub:me.hub,conn:me.conn});
		  //me.hub.publish("show", {elem:elem,val:val});
		  }, function(err) {
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

$.quid2.view = {

	fatal : function(msg) {
		console.error("fatal", msg);
		// alert("Sorry, Quid2 might be temporarily unavailable. Try to reload
		// this page.");
	},

	init : function(appEnv,exprs) {

		var qq = $.quid2;
		var cmdBar = $("<div/>");
		var exprArea = $("<div/>");
		// $('#loading').empty();
		$('#displayArea').empty().prepend(exprArea).prepend("<p/>").prepend(cmdBar);
		exprArea.sortable();

		var newExpression = $("<span>New Expression</span>").button().click(function() {
			preNew([ "", "" ]);
		});

		var devEnv = $("<span>Modify Environment</span>").button().click(function() {
			pre([ "Environment", "Quid2.getDevEnv (" + qq.show(qq.org.env) + ")" ]);
		});

		var conn = appEnv.connection;
		var anonUser = conn.username == "";
		var userLogin = anonUser ? $("<span>Login</span>").click(function() {
			conn.login();
		}) : $("<span>Logout " + conn.username + "</span>").click(function() {
			conn.logout();
		});
		userLogin.button();

		cmdBar.append(newExpression).append(devEnv).append(userLogin);

		$.each(exprs, function(i, v) {
			post(v);
		});

		function amsg(elem, msg, cls) {
			var div = $("<div/>").addClass(cls).append(msg);
			// $('#messages-' + cls).append(div);
			// usrMsgClear.start();
			elem.empty().append(div);
			return div;
		};

		function info(elem, msg) {
			return amsg(elem, msg, 'info');
		}
		function warn(elem, msg) {
			return amsg(elem, msg, 'warning');
		}
		function err(elem, msg) {
			console.error(msg);
			return amsg(elem, msg, 'error');
		}

		function checked(elem, expr, f) {
			if (qq.isError(expr)) return err(elem, qq.errorMessage(expr));
			return f(elem, expr);
		};

		// TODO: use types?
		function showErr(displayDiv, expr) {
			var se = qq.errorMessage(expr);
			err(displayDiv, se);
		}
		// qq.getType(exp); expr = [exp,qq.getType(exp)];

		function showWithType(env, displayDiv, expr, mode) {
			console.log("showWithType", expr);
			if (qq.isError(expr)) return showErr(displayDiv, expr);

			var value = expr[0];
			var typ = expr[1];

			var ui = {
				displayDiv : displayDiv,
				info : function(msg) {
					info(displayDiv, msg);
				},
				amsg : amsg,
				err : function(msg) {
					// showErr(displayDiv, msg);
					err(displayDiv, msg);
				},
				checked : function(msg) {
					checked(displayDiv, msg, info);
				},
				pre : pre,
				showExpr : showExpr
			};

			var viewer = $.quid2.viewAs[typ];
			if (qq.isUndefined(viewer)) {
				console.log("No specific viewer for: ", typ);
				ui.info(qq.show(value)); // viewer = $.quid2.viewAs["Show"];
			} else viewer(ui, env, qq, value, mode);
		};

		function showExpr(env, displayDiv, expr, mode) {
			if (qq.isError(expr)) return err(displayDiv, qq.errorMessage(expr));
			console.log("showExpr");
			console.dir(env);
			console.dir(expr);
			// env.evalExpr(qq.app(qq.lam(qq.e(["PVar","o"]),[qq.v("o"),qq.app(qq.v("View.views"),qq.v("o"))]),expr),function
			// (expr) {showViews(elem,expr);});

			env.evalStringWithType(qq.show(expr), function(expr) {
				showWithType(env, displayDiv, expr, mode);
			});
		};

		function evInput(elem) {
			var txt = elem.data("expr");
			if (txt.length == 0) return;

			info(elem, "Evaluating: <b>" + txt + "</b>");

			appEnv.evalStringWithType(txt, function(expr) {
				showWithType(appEnv, elem, expr);
			});
		};

		function newInput(elem) {
			var inputElem = $("<input/>").addClass("userInput").val(elem.data("expr"));
			elem.empty().append(inputElem);
			inputElem.focus();

			// BUG: no names
			var ac = new quid2.ui.AutoComplete.Basic([], inputElem.get(0), true, true);
			goog.events.listen(ac, quid2.ui.AutoComplete.Basic.EventType.DONE, function(ev) {
				elem.data("expr", ev.input);
				evInput(elem);
			});
		};

		/** v[0]=label v[1]=expression * */
		function newExpr(v) {
			var elem = $("<div class='expr ui-widget ui-widget-content ui-helper-clearfix ui-corner-all' title='Click to re-evaluate expression.'>"
					+ "<div class='expr-header ui-widget-header ui-corner-all'>" + "<span class='expr-header-text'>" + v[0] + "</span>"
					+ "<span class=expr-header-else />" + "<span title='Delete' class='ui-icon ui-icon-closethick'/>"
					+ "<span>&nbsp;&nbsp;&nbsp;</span>" + "<span title='Minimise' class='ui-icon ui-icon-minusthick'/></div>"
					+ "<div class=expr-content title='Ctrl-Click to edit expression.'/></div>");

			elem.find(".expr-header-text").editable(function(v) {
				return v;
			}, {
				tooltip : "Click to edit label.",
				event : "click",
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

			elem.find(".expr-header").click(function(e) {
				evInput($(this).parents(".expr").find(".expr-content"));
				e.stopPropagation();
			});

			var cont = elem.find(".expr-content").data("expr", v[1]).click(function(e) {
				if (e.ctrlKey) {
					newInput($(this));
					e.stopPropagation();
				};
			});

			evInput(cont);

			return elem;
		};

		function pre(expr) {
			var ne = newExpr(expr);
			exprArea.prepend(ne);
			//state.prepend(expr);
			return ne;
		}

		function preNew(expr) {
			var ne = pre(expr);
			newInput(ne.find(".expr-content"));
		}

		function post(expr) {
			exprArea.append(newExpr(expr));
		}
	}
};

/*
 * evalExprAt( qq.app(qq.c("Prelude.Dir"),"http://quid2.org")
 * ,qq.app(qq.app(qq.v("User.saveUserInfo"),"ui.quid2.org"),"basicVal")
 * ,function (r) {
 *
 * if (qq.isError(r)) return qq.view.fatal("Cannot save user info.");
 *
 * console.log("saved user info"); });
 */

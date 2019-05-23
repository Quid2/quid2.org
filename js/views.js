$.quid2.viewAs["Value"] = function(ui, env, qq, expr) {
	env.evalExpr(qq.app(qq.c("View.pretty"), expr), function(e) {
		ui.checked(e);
	});
};


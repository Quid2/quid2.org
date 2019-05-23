quid2.LoginView = function (env,elem) {

  env.values("jqueryui-1.5","flapjax-2.1","userName").done(function(ui,fj,userName) {
	  var anonUser = userName == "";
	  var userLogin = anonUser ? $("<span>Login</span>").click(function() {
	    env.fwd("login");
	  }) : $("<span>Logout " + userName + "</span>").click(function() {
	    env.fwd("logout");
	  });
	  userLogin.button();
	});

};
goog.provide('quid2.ui.view.Service.Org.Quid2.App.UserModules');

goog.require('quid2');
goog.require('quid2.ui.GTree');

quid2.ui.view.Service.Org.Quid2.App.UserModules = (function() {
  var q = quid2;
  var g = goog;
  var p = quid2.primitive.value;
  var pt = quid2.primitive.type;
  var app = quid2.module.Service.Org.Quid2.App;

  //function UserModules(ctx,tabCfg,caller) {
  function UserModules(ctx,caller,area) {
    var me = this;
    me.ctx = ctx;

    //me.tab = ctx.tabs.add(tabCfg);

    me.cache = {};

    me.tree = new q.ui.GTree(area,
      function(name) {
	console.log("onSelect " + name);
	var cached = me.cache[name];
	ctx.topExpr("Reading module "+name
		    ,cached ? $.when(cached) : ((caller.readModule)(new p.String(name))).done(function (m){me.cache[name]=m;})
	);
      });

    var updateView  = ctx.conn.callBack(function(pars) {
      //console.warn("Update UserModules",pars);
      new app.Last.type.Change([pt.String,pt.Unit]).ready().done(function (t) {
	      var change = t.decode(new quid2.ByteBuffer(pars.value[0].value));
	      console.log(change.show());
	      change.match(function(n) {
			     var name = n.value;
			     console.log("Del "+name);
			     delete me.cache[name];
			     me.tree.delName(name);
			   }
			   ,function(n,u) {
			     var name = n.value;
			     console.log("Add "+name);
			     delete me.cache[name];
			     me.tree.addName(name);
			   }
			   ,function(nvs) {
			     var names = nvs.map(function (t) {return t.value[0].value;});
			     console.log("AddMany "+names);
			     me.cache = {};
			     me.tree.addNames(names);
			   });
	      });
	      return p.unit;
    });

    (caller.subscribe)(updateView);
  };

  return UserModules;

})();
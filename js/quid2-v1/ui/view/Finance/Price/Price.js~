/**
 *
 */
//goog.require("quid2.connect");
goog.provide('quid2.ui.view.Finance.Price.Price');

quid2.ui.view.Finance.Price.Price = function(ctx) {
    var q = quid2;
    var app = quid2.module.Service.Org.Quid2.App.Last.value;

    app.getPrettyPrice.call(ctx.obj).done(function(r) {
      ctx.area.text(r.value);
    });
};


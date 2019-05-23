goog.provide("quid2.ui.Help");
goog.require("quid2");
goog.require("goog.math.Box");
goog.require("goog.ui.AdvancedTooltip");

quid2.ui.Help = (function() {
  var q = quid2;

  var tps = [];
  function Help(elem,html) {
    var me = this;
    me.tooltip = new goog.ui.AdvancedTooltip(elem);
    me.tooltip.setHtml(html);
    me.tooltip.className = 'quid2-help-tooltip';
    me.tooltip.setHotSpotPadding(new goog.math.Box(5, 5, 5, 5));
    me.tooltip.setCursorTracking(true);
    me.tooltip.setMargin(new goog.math.Box(100, 0, 0, 100));
    me.tooltip.setShowDelayMs(2000);
    me.tooltip.setHideDelayMs(250);
    tps.push(me.tooltip);
  };

  Help.prototype.attach = function(jselector) {
  };

/*
  Help.prototype.attach = function(jselector) {
    var f =
	jelem.on("mouseover",hover(function () {

		    }
  };*/

  jQuery.fn.help = function(selector,html) {
    //this.on("mouseover");

    /*this.find(selector).each(function() {
      this.attr("title",text);
    });*/

    this.find(selector).each(function() {
      new Help(this,html);
      //$(this).attr("title",html); // Bad: cannot change titles of hrefs.
    });

    return this;
  };

  return Help;
})();


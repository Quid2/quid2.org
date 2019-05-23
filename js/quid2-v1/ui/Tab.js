goog.provide("quid2.ui.Tab");
goog.require("quid2");
goog.require("goog.ui.Tab");
goog.require('goog.ui.RoundedTabRenderer');
goog.require("quid2.ui.Mixin");
goog.require("quid2.ui.Event");

quid2.ui.Tab = (function() {
  var q = quid2;
  var g = goog;
  var mix = q.ui.Mixin;
  var sup = goog.ui.Tab;

  function Tab(model) {
    q.assert(model && model.ui,"Tab");
    var me = this;
    me.label = $("<span/>");
    me.status = $("<span/>");
    var cmds = $("<span>&nbsp;</span>");
    if (! model.persistent) {
      var deleteCmd = $("<img src='http://jslib.quicquid.org/icons/fam/delete.gif'/>").attr("title","Click to close this tab (Shift-Click or Ctrl-Click to close all other tabs in this tab bar).");
      cmds.append(deleteCmd);
      goog.events.listenOnce(deleteCmd.get(0)
			     ,goog.events.EventType.CLICK
			    ,function(event) {
			      me.trigger(q.ui.Event.DELETE,[me,event.ctrlKey || event.shiftKey]);
			    }
			   );
    };
    var caption = $("<span/>").append(me.status).append(me.label).append(cmds).get(0);

    sup.call(this,caption,goog.ui.RoundedTabRenderer.getInstance());
    me.setModel(model);
    me.content = this.getModel().ui;
    me.entered=0;
  };

  goog.inherits(Tab,sup);
  mix.mix(Tab,mix.event);

  Tab.prototype.focus = function() {
    var me = this;
    //if (! me.getElement()) return
    if (!me.entered++) return;
    console.log("FOCUS",me.getModel().hObj.show());
    me.getModel().focus && me.getModel().focus();
    //$("body").trigger(q.ui.Event.FOCUS,me.getModel().hObj);
  };

  Tab.prototype.enterDocument = function() {
    var me = this;
    Tab.superClass_.enterDocument.call(me);
    me.content.on(q.ui.Event.STATUS,function(event,chg) {
      //q.assert(chg.cls && g.isString(chg.msg));
      //console.log("STATUS",chg.cls,chg.msg);
      var o = {info:"",warning:"*** ",error:"!!! "};
      me.status.text(chg.cls ? o[chg.cls] : "");
      return false;
    });

    /*var entered=0;
    me.on(q.ui.Event.FOCUS,function(event) {
      if (!entered++) return false;
      console.log("FOCUS",me.getModel().hObj.show());
      return false;
    });*/
  };

  Tab.prototype.exitDocument = function() {
    var me = this;
    Tab.superClass_.exitDocument.call(me);
    me.content.off(q.ui.Event.STATUS);
  };

 Tab.prototype.setLabel = function(l) {this.label.text(l);};
 Tab.prototype.setTitle = function(l) {this.setTooltip(l);};
 Tab.prototype.getLabel = function() {return this.label.text();};
 Tab.prototype.getTitle = function() {return this.getTooltip();};
 Tab.prototype.select = function() {return this.getParent().setSelectedTab(this);};

  return Tab;
})();


goog.provide("quid2.ui.Mixin");
goog.require("quid2");
goog.require("quid2.ui.Event");

quid2.ui.Mixin = (function() {
  var q = quid2;
  var g = goog;
  Mixin = {};

  Mixin.show = {
    show : function() {
      var elem = this.getElement(); //this.getContentElement()
      q.assert(elem);
      $(elem).show();
      this.visible && this.visible();
    }
    ,hide : function() {
      var elem = this.getElement(); //this.getContentElement()
      q.assert(elem);
      $(elem).hide();
      this.hidden && this.hidden();
    }
    ,visible : function() {
      this.forEachChild(function (ch) {ch.visible && ch.visible();});
    }
    ,hidden : function() {
      this.forEachChild(function (ch) {ch.hidden && ch.hidden();});
    }
  };

  Mixin.event = {
    //listenOnce : function() {$(this.getContentElement()).show();}
    trigger : function() {
      var elem = this.getElement();
      q.assert(elem);
      $.fn.trigger.apply($(elem),arguments);
    }
    ,on : function() {
      var elem = this.getElement();
      q.assert(elem);
      $.fn.on.apply($(elem),arguments);
    }
    ,off : function(evnts) {
      var elem = this.getElement();
      q.assert(elem);
      var events = evnts || ".quid2";
      $.fn.off.apply($(elem),arguments);
    }
  };

  Mixin.traverse = {
     traverse: function(f) {
       q.assert(f);
       var me = this;
       var n = me.getChildCount();
       for (var i=0;i<n;i++) {
	 var c = me.getChildAt(i);
	 var r = f(c);
	 if (r) return r;
       };
       return false;
     }
  };

  Mixin.resize = {
     resize: function(size) {
       console.log("Mixin.resize",this,this.isInDocument(),size.toString());
       if (!this.isInDocument()) return;
       console.log("Mixin.resize.proceed");
       //q.assert(size && g.isNumber(size.width) && g.isNumber(size.height) && size.width>=0 && size.height>=0,["Mixin.resize",size]);

       var elem = this.getElement();
       q.assert(elem);

       //goog.style.setBorderBoxSize(elem,{width:0,height:0});
       goog.style.setBorderBoxSize(elem,size);
       //{width:size.width,height:size.height});
       this.resizeChildren && this.resizeChildren();
     }
    ,getSize:function() {
      var elem = this.getElement();
      q.assert(elem);
      return goog.style.getBorderBoxSize(elem);
    }
  };

  Mixin.mix = q.mix;/*function(cls,mix) {
    q.assert(cls && mix);
    $.extend(cls.prototype,mix);
  };*/

  return Mixin;

})();
goog.provide('quid2.ui.RefDisplay');
goog.require('quid2.ui.View');

quid2.ui.RefDisplay = function (ctx,elem) {
  this.ctx = ctx;
  //this.mdlId = mdlId;
  this.elem = elem;
  this.elem.addClass('evalArea');
};

quid2.ui.RefDisplay.prototype.empty = function() {this.elem.empty();};

quid2.ui.RefDisplay.prototype.display = function(ref) {
  var q = quid2;
  var g = goog;
  q.assert(ref && g.isString(ref.id) && g.isBoolean(ref.newWindow));

  var v = q.ui.View;
  var me = this;
  me.empty();

  if (ref.newWindow) {
    me.ctx.newWindow(ref);
    return;
  };

  var title = ref.title || ref.id;
  var msg = "Evaluating '" + title + "'";
  me.elem.text("  ");
  me.elem.data("id",ref.id);

  me.ctx.cop(msg,q.modules.functionCall(ref.id)).done(function (newObj) {
    (ref.rawResult ? $.when(v.View.defaultViewer) : v.getViewer(newObj)).done(function (viewer) {

    //Avoid updating element if there is a more recent display request.
    if (me.elem.data("id") != ref.id) return;

    me.empty();
    if (v.isPageViewer(viewer)) {
      me.elem.html("<span>The value of <b>"+q.nameSplit(ref.id)[1]+"</b> is too big to display here, I am trying to open a new window.<p>If it fails, you can <a  target='_blank' href='"+me.ctx.newURL(ref)+"'>click here</a> instead.</p></span>");
      me.ctx.newWindow(ref);
    } else viewer($.extend({},me.ctx,{obj:newObj,area:me.elem}));
    });
    });
};

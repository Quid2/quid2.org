/*
 */
goog.provide('quid2.dom');

quid2.dom = (function () {

  var dom = new goog.dom.DomHelper();
  var win = dom.getWindow();

  function getTop(elem) {
    //var body = $("body").get(0);
    //var p = dom.getAncestor(elem);
    var p = $(elem).parent().get(0);//dom.getAncestor(elem);
    if (p.nodeName == "BODY") return win;
    return p;
  };

  function getInnerSize(elem) {
    var jelem = $(elem);
    return new goog.math.Size(jelem.width(),jelem.height());
  };

  return {
    //getTop:getTop
    getInnerSize:getInnerSize
  };
})();
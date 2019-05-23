goog.provide("quid2.ui.Layout");

quid2.ui.Layout = (function() {

  function layout(elemId) {
    var lSettings = {applyDefaultStyles:true
		     ,west__spacing_open:8,west__spacing_closed:8
		     ,east__spacing_open:8,east__spacing_closed:8
		     ,togglerTip_open:"Click to close."
		     ,south__togglerTip_open:"Click (or Ctrl ↓) to close."
		     ,south__togglerTip_closed:"Click (or Ctrl ↓) to open."
		     ,north__togglerTip_open:"Click (or type Ctrl ↑) to close."
		     ,north__togglerTip_closed:"Click (or type Ctrl ↑) to open."
		     ,west__togglerTip_open:"Click (or type Ctrl ←) to close."
		     ,west__togglerTip_closed:"Click (or type Ctrl ←) to open."
		     ,east__togglerTip_open:"Click (or type Ctrl →) to close."
		     ,east__togglerTip_closed:"Click (or type Ctrl →) to open."
		     ,togglerLength_closed:  "100%"
		     ,resizerTip:"Drag to resize."
		    };

    var frame =  $('body').layout($.extend(lSettings,{north__size:60
						       ,north__resizable:false
						       ,south__resizable:false
						       ,west__size:400
						       ,east__size:280
						       //,east__initClosed:true
						       //,onresize:resize,onopen:resize,onclose:resize
						      }));
    //var innerLayout = $('#editorArea').layout($.extend(lSettings,{north__size:50})); //,north__showOverflowOnHover:true
    //$(elemId).layout({applyDefaultStyles:true,north__size:50,resizable:true,closable:false});

    //var height,width;
    function resize() {
    //console.log("MAYBE RESIZE");
    //var newHeight = $('#editorArea').outerHeight();
    //if (height == newHeight) return;
    //height = newHeight;
    //console.log("RESIZE");
    //innerLayout.resizeAll();

      frame.resizeAll();

      //resizeEditor();
    };

    // Resize is not always automatically invoked (at least on Firefox) so we do it regularly
    resize();setInterval(resize,2000);
  };

  return layout;
})();


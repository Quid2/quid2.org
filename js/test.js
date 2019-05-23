$(function() {
    var hub = OpenAjax.hub;

    // NOTE: messages are delivered immediately, if nobody listen they are lost.
    hub.subscribe("**",function(topic,data) {console.log("MSG:",topic,data);});

});


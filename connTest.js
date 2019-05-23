goog.require('quid2.primitive');
goog.require('quid2.org');
goog.require('quid2.bichannel');

$(function() {
    var p = quid2.primitive.value;
    var r = quid2.org.module["Network.Msg"];
    var app = quid2.org.module["Service.Org.Quid2.App"];

    function toHex(dec) {
      var hexCharacters = "0123456789ABCDEF";
      var i = Math.floor(dec / 16);
      var j = dec % 16;
      return hexCharacters.charAt(i) + hexCharacters.charAt(j);
    };

    function arrayToHex (a) {
      var s = "";
      for (var i=0;i<a.length;i++) {s+= " " + toHex(a[i]);}
      return s;
    }

    function o(v) {
      //console.log(v);
      $("#out").html(v);
    }

    function arrayEq (a1,a2) {
      if (a1.length != a2.length) return false;
      for (var i=0;i<a1.length;i++)
        if (a1[i] != a2[i]) return false;
      return true;
    }

      var tests = [
        [new p.Char("a"),[0x61]]
        ,[new p.Char("美"),[0xE7,0xBE,0x8E]]
        ,[new p.Int64(-44),[0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xD4]]
        ,[new p.Int64(3436434416),[0x00,0x00,0x00,0x00,0xCC,0xD3,0xD3,0xF0]]
        ,[new p.Double(-3.4456e-2),[0xBF,0xA1,0xA4,0x37,0x82,0x4D,0x4C,0xBA]]

        ,[new p.Double(3.423456e26),[0x45,0x71,0xB2,0xE8,0x02,0x9B,0xD2,0xA3]]

        ,[new p.String("a美國a"),[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x04,0x61,0xE7,0xBE,0x8E,0xE5,0x9C,0x8B,0x61]]

        ,[new p.List([new p.Int64(-1),new p.Int64(0),new p.Int64(1),new p.Int64(2)]),[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x04,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x02]]

	,[new r.value.Ok(  p.encoded(new p.Int64(22))
                        ,new p.Int64(0))
          ,[0x01,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x08,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x16,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]]

        ,[new r.value.Call(new p.String("sub")
                        ,new p.List([p.encoded(new p.Int64(-11)),p.encoded(new p.Int64(1))])
                        ,new p.Int64(0))
          ,[0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x03,0x73,0x75,0x62,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x02,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x08,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xFF,0xF5,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x08,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]]

      ];

      var errs=["Test completed."];
      for (var t=0;t<tests.length;t++) try {
        var tst = tests[t];
	var rv = [];
        tst[0].encode(rv);
        if (! arrayEq(tst[1],rv))
	  errs.push(tst[0].show() + "<br/>expected:<br/>" + arrayToHex(tst[1]) + "<br/>got:<br/>" + arrayToHex(rv));
      } catch (err) {errs.push(err);} ;

     o(""+errs);

    var now = new Date().getTime();
    var numCalls = 1;
    function onConnectedTestPerf(conn) {
      for (var i=0;i<numCalls;i++) {
	var msg = p.encodedAsBytes(new p.Msg.Call(new p.String("sub")
                        ,new p.List([p.encoded(new p.Int64(-11)),p.encoded(new p.Int64(1))])
			,new p.Int64(0)));
	conn.send(msg);
      };
    };

    function onConnected(conn) {
      app.getState().done(function (r) {console.log("getState",r);});
    };

    var numReplies=0;
    function consumeReplies(msg) {
      var ok;
      console.log("Received",msg,ok = p.Msg.decode(msg),msg,p.Int64.decode(ok.parts[0].value));

      if (++numReplies == numCalls) {
	var diff = (new Date()).getTime()-now;
	console.log(numReplies,diff);
      };
    };

    //quid2.bichannel("http://localhost:7070/api/",consumeReplies).done(onConnected);

  });

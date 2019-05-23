/*
 * Base64 encoding/decoding
 * Adapted from:
 * !{id:msgpack.js,ver:1.05,license:"MIT",author:"uupaa.js@gmail.com"}
 */
goog.provide('quid2.base64');

quid2.base64 = (function () {
  var num2b64 = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789+/").split("");

  var num2bin={};;
  var i = 0, v;
  for (; i < 0x100; ++i) {
        v = String.fromCharCode(i);
        //bin2num[v] = i; // "\00" -> 0x00
        num2bin[i] = v; // 0 -> "\00"
  };

  /*
  *  @param ByteArray:
  *  @return Base64String
  */
  function encode(data) {
    var rv = [],
        c = 0, i = -1, iz = data.length,
	pad = [0, 2, 1][data.length % 3];

    if (btoa) {
        while (i < iz) {
            rv.push(num2bin[data[++i]]);
        }
        return btoa(rv.join(""));
    }
    --iz;
    while (i < iz) {
        c = (data[++i] << 16) | (data[++i] << 8) | (data[++i]); // 24bit
        rv.push(num2b64[(c >> 18) & 0x3f],
                num2b64[(c >> 12) & 0x3f],
                num2b64[(c >>  6) & 0x3f],
                num2b64[ c        & 0x3f]);
    }
    pad > 1 && (rv[rv.length - 2] = "=");
    pad > 0 && (rv[rv.length - 1] = "=");
    return rv.join("");
  };

  return {encode:encode};//,decode:decode};
})();
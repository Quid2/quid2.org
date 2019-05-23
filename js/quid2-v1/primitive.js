/* Contains code from:
 * {id:msgpack.js,ver:1.05,license:"MIT",author:"uupaa.js@gmail.com"}
 * */
goog.provide('quid2.primitive');
goog.require('quid2');
goog.require('goog');

quid2.primitive = {value:{},type:{}};

quid2.primitive.type = jQuery.extend(quid2.primitive.type,function () {
  var q = quid2;
  var g = goog;
  var v = quid2.primitive.value;

  function decodeChar(rv) {
    return new v.Char(bytesToString([getChar(rv)]));
  };

  function getChar(b) {
    var c = b.nextByte();
    var ch = c < 0x80 ? c : // ASCII(0x00 ~ 0x7f)
                             c < 0xe0 ? ((c & 0x1f) <<  6 | (b.nextByte() & 0x3f)) :
                                        ((c & 0x0f) << 12 | (b.nextByte() & 0x3f) << 6
                                                          | (b.nextByte() & 0x3f));
    return ch;
  };

  function getWord32(b) {
    var buf = b.next(4);
    var num = buf[0] * 0x1000000 + buf[1] * 0x10000 + buf[2] * 0x100 + buf[3];
    return num;
  };

  function getInt64(b) {
    var buf = b.next(8);
    var num = buf[0];
    num = (num & 0x80) ? // sign -> avoid overflow
                           ((num         ^ 0xff) * 0x100000000000000 +
                            (buf[1] ^ 0xff) *   0x1000000000000 +
                            (buf[2] ^ 0xff) *     0x10000000000 +
                            (buf[3] ^ 0xff) *       0x100000000 +
                            (buf[4] ^ 0xff) *         0x1000000 +
                            (buf[5] ^ 0xff) *           0x10000 +
                            (buf[6] ^ 0xff) *             0x100 +
                            (buf[7] ^ 0xff) + 1) * -1
                    :  num         * 0x100000000000000 +
                       buf[1] *   0x1000000000000 +
                       buf[2] *     0x10000000000 +
                       buf[3] *       0x100000000 +
                       buf[4] *         0x1000000 +
                       buf[5] *           0x10000 +
                       buf[6] *             0x100 +
                       buf[7];
    return num;
  };

  function getFloat(b) {
    var buf = b.next(4);
    var num = buf[0] * 0x1000000 + (buf[1] << 16) + (buf[2] <<  8) + buf[3];
    var sign =  num & 0x80000000;    //  1bit
    var exp  = (num >> 23) & 0xff;   //  8bits
    var frac =  num & 0x7fffff;      // 23bits

    if (!num || num === 0x80000000) { // 0.0 or -0.0
      return 0;
    }
    if (exp === 0xff) { // NaN or Infinity
      return frac ? NaN : Infinity;
    }
    return (sign ? -1 : 1) *
      (frac | 0x800000) * Math.pow(2, exp - 127 - 23); // 127: bias
  };

  function getDouble(b) {
    var buf = b.next(8);
    var num = buf[0] * 0x1000000 + (buf[1] << 16) + (buf[2] <<  8) + buf[3];
    var sign =  num & 0x80000000;    //  1bit
    var exp  = (num >> 20) & 0x7ff;  // 11bits
    var frac =  num & 0xfffff;       // 52bits - 32bits (high word)
    if (!num || num === 0x80000000) { // 0.0 or -0.0
      return 0;
    }
    if (exp === 0x7ff) { // NaN or Infinity
      return frac ? NaN : Infinity;
    }
    num = buf[4] * 0x1000000 + (buf[5] << 16) + (buf[6] <<  8) + buf[7];
    return (sign ? -1 : 1) *
                            ((frac | 0x100000) * Math.pow(2, exp - 1023 - 20) // 1023: bias
                             + num * Math.pow(2, exp - 1023 - 52));
  };

  function bytesToString (bytes) {
    // return s.length < 10240 ? _toString.apply(null, ary) : byteArrayToByteString(ary);
    return window.String.fromCharCode.apply(null,bytes);
  };

  function decodeString(rv) {
    var len = getInt64(rv);
    var s = [];
    for (var i=0;i<len;i++) s.push(getChar(rv));
    return new v.String(bytesToString(s));
 };

  function decodeWord32(rv) {
    return new v.Word32(getWord32(rv));
  };

  function decodeInt64(rv) {
    return new v.Int64(getInt64(rv));
  };

  function decodeFloat(rv) {
    return new v.Float(getFloat(rv));
  };

  function decodeDouble(rv) {
    return new v.Double(getDouble(rv));
  };

  function decodeByteString(rv) {
    var len = getInt64(rv);
    var bs = rv.next(len);
    return new v.ByteString(bs);
  };

  function PrimType(decode) {
    this.decode=decode;
  }
  PrimType.prototype.ready = function () {return $.when(this);};

  PrimType.prototype.equal = function (other) {return this.decode == other.decode;};

  function decodeUnit(rv) {
    return v.unit;
  }

  var Unit = new PrimType(decodeUnit);

  var Char = new PrimType(decodeChar);

  var String = new PrimType(decodeString);

  var Word32 = new PrimType(decodeWord32);

  var Int64 = new PrimType(decodeInt64);

  var Int = Int64;

  var Float = new PrimType(decodeFloat);

  var Double = new PrimType(decodeDouble);

  var ByteString =  new PrimType(decodeByteString);

  function Var(name) {this.name=name;};

  Var.prototype.decode = function(rv) {
    return solve(binds,this.name).decode(rv);
  };

  Var.prototype.ready = function (binds) {
    return solve(binds,this.name).ready(binds);
  };

  function solve(binds,name) {
    var r = binds[name];
    //console.log("Solved variable",name,"to",r);
    if (q.isUndefined(r))
      throw ("Cannot locate variable: "+name+ " in "+binds);
    return r;
  }

  var app = {
    equal: function (other) {
      if (q.isUndefined(other) || this.constructor !== other.constructor) return false;
      return this.type.equal(other.type);
    }
  };

  function IO1(t) {
    q.assert(t);
    this.type = t;
  };
  q.mix(IO1,app);

  IO1.prototype.ready = function (binds) {
    var me = this;
    if (me.decode) return $.when(me);
    return me.type.ready(binds).pipe(function() {
      me.decode = function (rv) {return me.type.decode(rv);};
	return me;
      });
  };

  IO1.prototype.show = function() {return "IO " + typ.json;};

  function IO(types) {
    q.assert(types.length==1,"IO pars");
    return new IO1(types[0]);
  };

  function List(t) {
    q.assert(t);
    this.type=t;
  };
  q.mix(List,app);

  List.prototype.ready = function (binds) {
    var me = this;
    if (me.decode) return $.when(me);

    return me.type.ready(binds).pipe(function() {
      me.decode = function(rv) {
	var vs = [];
	var len = getInt64(rv);
	for (var i=0;i<len;i++) vs.push(this.type.decode(rv));
	return (new v.List(vs)).as(me);
      };
      return me;
    });
  };

  function Tuple(types) {
    //console.log("Tuple(",types,")");
    q.assert(g.isArray(types));
    this.types=types;
  };

  Tuple.prototype.equal = function (other) {
    if (this.constructor !== other.constructor) return false;

    if (this.types.length != other.types.length) return false;

    for (var i=0;i<this.types.length;i++)
      if (! this.types[i].equal(other.types[i])) return false;

    return true;
  };

  Tuple.prototype.ready = function (binds) {
    var me = this;
     //console.log("Tuple.ready",binds,me.decode,me.readyTypes);
    if (me.decode) return $.when(me);

    return q.whenN(me.types.map(function (t) {return t.ready(binds);})).pipe(function (readyTypes) {
      //For testing
      me.readyTypes=readyTypes;
      me.decode = function(rv) {
	var vs = [];
	var len = readyTypes.length;
	for (var i=0;i<len;i++) vs.push(readyTypes[i].decode(rv));
	return new v.Tuple(vs).as(me);
      };
      return me;
    });
  };

  return {
    Unit:Unit,Char:Char,String:String,Word32:Word32,Int:Int,Int64:Int64,Double:Double,Float:Float,ByteString:ByteString,List:List,Tuple:Tuple,IO:IO,Var:Var
  };
}());


quid2.primitive.value = jQuery.extend(quid2.primitive.value,function () {
  var q = quid2;
  var g = goog;

  var prim = {
    sameTypeOf : function (other) {
      return this.constructor == other.constructor;
    }
    ,equal : function (other) {
      if (! this.sameTypeOf(other)) return false;
      return this.value == other.value;
    }
  };

  function primEqual(other) {
    if (this.constructor !== other.constructor) return false;
    return this.value == other.value;
  };

  function Unit() {
    this.value = "";
  };
  q.mix(Unit,prim);

  Unit.prototype.show = function() {return "()";};

  Unit.prototype.encode = function(rv) {
      //console.log("Unit",rv);
  };

  var unit = new Unit();

  function Char(ch) {
    q.assert(typeof ch == "string" && ch.length==1);
    this.value=ch;
  };
  q.mix(Char,prim);

  Char.prototype.show = function() {
    return "'" + this.value +"'";
  };

  Char.prototype.encode = function(rv) {
    putChar(rv,this.value);
  };

  function putChar(rv,ch) {
    // utf8.encode
    var c = ch.charCodeAt(0);
    if (c < 0x80) { // ASCII(0x00 ~ 0x7f)
      rv.push(c & 0x7f);
    } else if (c < 0x0800) {
      rv.push(((c >>>  6) & 0x1f) | 0xc0, (c & 0x3f) | 0x80);
    } else if (c < 0x10000) {
      rv.push(((c >>> 12) & 0x0f) | 0xe0,
      ((c >>>  6) & 0x3f) | 0x80, (c & 0x3f) | 0x80);
    }
  };

  function Word32(i) {
    q.assert(typeof i == "number" && i>=0 && i <65536,"Word32:bad parameter: "+i);
    this.value = i;
  };
  q.mix(Word32,prim);

  Word32.prototype.show = function() {
    return (""+this.value);
  };

  Word32.prototype.encode = function(rv) {
    putWord32(rv,this.value);
  };

  function putWord32(rv,i) {
    rv.push(i >>> 24, (i >> 16) & 0xff, (i >> 8) & 0xff, i & 0xff);
  };

  function Int64(i) {
    q.assert(typeof i == "number");
    this.value = i;
  };
  q.mix(Int64,prim);

  Int64.prototype.show = function() {
    return (""+this.value);
  };

  Int64.prototype.encode = function(rv) {
    putInt64(rv,this.value);
  };

  function putInt64(rv,i) {
    var high = Math.floor(i / 0x100000000);
    var low  = i & 0xffffffff;
    rv.push((high >> 24) & 0xff, (high >> 16) & 0xff,
    (high >>  8) & 0xff,         high & 0xff,
      (low  >> 24) & 0xff, (low  >> 16) & 0xff,
      (low  >>  8) & 0xff,          low & 0xff);
  };

 function Float(i) {
   q.assert(typeof i == "number");
   this.value = i;
 };
  q.mix(Float,prim);

  Float.prototype.show = function() {
    return (""+this.value);
  };

  var warn = console.warn;

  Float.prototype.encode = function(rv) {encodeFloat(this.value,23,8,rv);};

  /** Adapted from: http://jsfromhell.com/classes/binary-parser **/
  function encodeFloat(number, precisionBits, exponentBits,rv){
        var bias = Math.pow(2, exponentBits - 1) - 1, minExp = -bias + 1, maxExp = bias, minUnnormExp = minExp - precisionBits,
        status = isNaN(n = parseFloat(number)) || n == -Infinity || n == +Infinity ? n : 0,
        exp = 0, len = 2 * bias + 1 + precisionBits + 3, bin = new Array(len),
        signal = (n = status !== 0 ? 0 : n) < 0, n = Math.abs(n), intPart = Math.floor(n), floatPart = n - intPart,
        i, lastBit, rounded, j, result;
        for(i = len; i; bin[--i] = 0);
        for(i = bias + 2; intPart && i; bin[--i] = intPart % 2, intPart = Math.floor(intPart / 2));
        for(i = bias + 1; floatPart > 0 && i; (bin[++i] = ((floatPart *= 2) >= 1) - 0) && --floatPart);
        for(i = -1; ++i < len && !bin[i];);
        if(bin[(lastBit = precisionBits - 1 + (i = (exp = bias + 1 - i) >= minExp && exp <= maxExp ? i + 1 : bias + 1 - (exp = minExp - 1))) + 1]){
            if(!(rounded = bin[lastBit]))
                for(j = lastBit + 2; !rounded && j < len; rounded = bin[j++]);
            for(j = lastBit + 1; rounded && --j >= 0; (bin[j] = !bin[j] - 0) && (rounded = 0));
        }
        for(i = i - 2 < 0 ? -1 : i - 3; ++i < len && !bin[i];);

        (exp = bias + 1 - i) >= minExp && exp <= maxExp ? ++i : exp < minExp &&
            (exp != bias + 1 - len && exp < minUnnormExp && warn("encodeFloat::float underflow"), i = bias + 1 - (exp = minExp - 1));
        (intPart || status !== 0) && (warn(intPart ? "encodeFloat::float overflow" : "encodeFloat::" + status),
            exp = maxExp + 1, i = bias + 2, status == -Infinity ? signal = 1 : isNaN(status) && (bin[i] = 1));
        for(n = Math.abs(exp + bias), j = exponentBits + 1, result = ""; --j; result = (n % 2) + result, n = n >>= 1);

	for(n = 0, j = 0, i = (result = (signal ? "1" : "0") + result + bin.slice(i, i + precisionBits).join("")).length, r = [];
            i; n += (1 << j) * result.charAt(--i), j == 7 && (r[r.length] = n, n = 0), j = (j + 1) % 8);
	if (n) r[r.length] = n;
	for (i=r.length-1;i>=0;i--) rv.push(r[i]);
	return r;

	/*for(n = 0, j = 0, i = (result = (signal ? "1" : "0") + result + bin.slice(i, i + precisionBits).join("")).length, r = [];
            i; n += (1 << j) * result.charAt(--i), j == 7 && (r[r.length] = window.String.fromCharCode(n), n = 0), j = (j + 1) % 8);
        r[r.length] = n ? window.String.fromCharCode(n) : "";
	return (bigEndian ? r.reverse() : r.join("");*/
  };


 function Double(i) {
   q.assert(typeof i == "number");
   this.value = i;
 };
 q.mix(Double,prim);

  Double.prototype.show = function() {
    return (""+this.value);
  };

  Double.prototype.encode = function(rv) {
                // THX!! @edvakf
                // http://javascript.g.hatena.ne.jp/edvakf/20101128/1291000731
                var sign = this.value < 0;
                sign && (this.value *= -1);

                // add offset 1023 to ensure positive
                // 0.6931471805599453 = Math.LN2;
                var exp  = ((Math.log(this.value) / 0.6931471805599453) + 1023) | 0;

                // shift 52 - (exp - 1023) bits to make integer part exactly 53 bits,
                // then throw away trash less than decimal point
                var frac = this.value * Math.pow(2, 52 + 1023 - exp);

                var low  = frac & 0xffffffff;
                sign && (exp |= 0x800);
                var high = ((frac / 0x100000000) & 0xfffff) | (exp << 20);

                rv.push(      (high >> 24) & 0xff, (high >> 16) & 0xff,
                              (high >>  8) & 0xff,  high        & 0xff,
                              (low  >> 24) & 0xff, (low  >> 16) & 0xff,
                              (low  >>  8) & 0xff,  low         & 0xff);
  };

 function String(s) {
   quid2.assert(typeof s == "string");
   this.value=s;
 };
 q.mix(String,prim);

 String.prototype.show = function() {
    return $.toJSON(this.value);//'"'+this.value+'"';
 };

 String.prototype.encode = function(rv) {
   putInt64(rv,this.value.length);
   for (var i=0;i<this.value.length;i++) putChar(rv,this.value[i]);
 };

 function ByteString(vs) {
     this.value=vs;
 };
 q.mix(ByteString,prim);

  ByteString.prototype.equal =   function partsEqual(other) {
   if (this.constructor !== other.constructor) return false;

   if (this.value.length !== other.value.length) return false;

   for (var i=0;i<this.value.length;i++)
     if (! this.value[i] == other.value[i]) return false;

   return true;
  };

  // BUG?
  ByteString.prototype.show = function() {
    var s = quid2.module.Data.ByteString.Last.moduleName_+".pack "+ ByteString.show(this.value);
    return s;
  };

 ByteString.show = function(vs) {
    var s = "[";
    for (var i=0;i<vs.length;i++) {
      if (i>0) s += ",";
      s += vs[i];
    }
    return s+"]";
  };

  ByteString.prototype.encode = function(rv) {
    putInt64(rv,this.value.length);
    for (var i=0;i<this.value.length;i++) rv.push(this.value[i]);
  };

  var parts = {
    sameTypeOf : function (other) {
      return other && this.constructor == other.constructor && this.type && this.type.equal(other.type);
    }
    /*sameTypeOf : function (other) {
      return this.type.equal(other.type);
    }*/
    ,as:function(t) {
      //q.assert(this.constructor == other.constructor,["as",this,t]);
      this.type=t;
      return this;
    }
    ,equal: function (other) {
      if (this.constructor !== other.constructor) return false;

      if (! this.sameTypeOf(other)) return false;

      if (this.value.length !== other.value.length) return false;

      for (var i=0;i<this.value.length;i++)
	if (! this.value[i].equal(other.value[i])) return false;

      return true;
    }
  };

  function List(vs) {
    q.assert(g.isArray(vs),"List");
    //this.type = t;
    this.value = vs;
  };
  q.mix(List,parts);

  function getViews(o) {
    var vs = (o.views && o.views()) || [];
    if (o.showShort) vs.push(function (o,elem) {elem.text(o.showShort());});
    vs.push(function (o,elem) {elem.text(o.show());});
    return vs;
  };

  //var SHOW_OPT=0,SHOW_=1,SHOW_READ=2;
  //function view_(o,elem,level) {}

  function limit(n,max) {
    return n <= max ? n : 0;
  };

  function view_(views,o,elem,level) {
    var l = q.isDefined(level) ? limit(level,views.length-1) : 0;
    elem.empty();
    views[l](o,elem,l);
    return l;
  }

  function view(o,elem,level) {
    var views = getViews(o);
    var l = view_(views,o,elem,level);
    if (views.length>1) elem.attr("title","Click to change the view.");
    elem.click(function(event) {
      l = view_(views,o,elem,l+1);
      event.stopPropagation();
    });
  };

  List.prototype.show = function() {return "["+List.show_(this.value)+"]";};

  List.show_ = function(vs) {
    var s = "";
    for (var i=0;i<vs.length;i++) {
      if (i>0) s += ",";
      s += vs[i].show();
    }
    return s;
  };

  List.prototype.views = function() {
    return [
       goog.partial(List.view__ ,"[","]",11)
      ,goog.partial(List.view__,"[","]",11000)
      ];
  };

  List.view_ = function(lst,elem,level) {
    var vs = lst.value;
    for (var i=0;i<vs.length;i++) {
      if (i>0) elem.append(",");
      var span = $("<span/>");
      elem.append(span);
      view(vs[i],span,level);
    }
  };

  List.view__ = function(start,end,max,lst,elem,level) {
    var vs = lst.value;
    elem.append(start);
    var lelem = $("<ol/>");
    elem.append(lelem);
    for (var i=0;i<Math.min(max,vs.length);i++) {
      var li = $("<li/>");
      lelem.append(li);
      view(vs[i],li,level);
    };
    if (vs.length>max) {
      var li = $("<li/>").text(".....");
      lelem.append(li);
    };
    elem.append(end);
  };

  List.prototype.encode = function(rv) {
    var len = this.value.length;
    putInt64(rv,len);
    for (var i=0;i<len;i++) this.value[i].encode(rv);
  };

  List.prototype.map = function(f) {return this.value.map(f);};

  List.prototype.reduce = function(f,s) {return this.value.reduce(f,s);};

  // This creates problems with jquery.trigger
  // jquery seems to think that this is an array
  // List.prototype.length = function(f) {return this.value.length;};

  function Tuple(vs) {
    q.assert(g.isArray(vs),"Tuple");
    //q.assert(t && vs && t.types.length == vs.length,"Tuple");
    //this.type = t;
    this.value = vs;
  };
  q.mix(Tuple,parts);

  Tuple.prototype.show = function(t,elem,level) {return "("+List.show_(this.value)+")";};

  Tuple.prototype.views = function() {
    return [
       goog.partial(List.view__,"(",")",10)
    ];
  };

  Tuple.prototype.encode = function(rv) {
    var len = this.value.length;
    for (var i=0;i<len;i++) this.value[i].encode(rv);
  };

  function encoded(obj) {
    var rv = [];
    obj.encode(rv);
    return new quid2.primitive.value.ByteString(rv);
  };

  function encodedAsBytes(obj) {
    var rv = [];
    obj.encode(rv);
    return rv;
  };

  function encodedAsByteBuffer(obj) {return new quid2.ByteBuffer(encodedAsBytes(obj));};

 return {
   unit:unit,Unit:Unit,Char:Char,Word32:Word32,Int64:Int64,Float:Float,Double:Double
   ,String:String,ByteString:ByteString,List:List,Tuple:Tuple
   ,encoded:encoded
   ,encodedAsBytes:encodedAsBytes
   ,encodedAsByteBuffer:encodedAsByteBuffer
   ,view:view
  };

}());


quid2.primitive.test = (function () {
    var q = quid2;
    var t = quid2.primitive.type;
    var v = quid2.primitive.value;

    function chkFloat(buf,exp) {
      var actualbuf = v.encodedAsByteBuffer(new v.Float(exp));
      q.assert(q.arrayEqual(actualbuf,buf),"Float encoding expected: "+buf+ " was " + actualbuf);
      var actual = t.Float.decode(buf).value;
      q.assert(actual == exp,"Float expected: "+exp+ " was " + actual);
    };

    function chkDouble(buf,exp) {
      var actualbuf = v.encodedAsByteBuffer(new v.Double(exp));
      q.assert(q.arrayEqual(actualbuf,buf),"Double encoding expected: "+buf+ " was " + actualbuf);
      var actual = t.Double.decode(buf).value;
      q.assert(actual == exp,"Double expected: "+exp+ " was " + actual);
    };

    function getTest(f,buf,exp) {
      var r = f(buf);
      q.assert(r==exp,"Got " + r);
      q.assert(buf.length==0);
    };

    var tl1 = new t.List(t.Int);
    var tl2 = new t.List(t.Int64);
    var tl3 = new t.List(t.Float);
    var l0 = new v.List([]).as(tl2);
    var l1 = new v.List([new v.Int64(4321),new v.Int64(1234)]).as(tl1);
    var l2 = new v.List([new v.Int64(4321)]).as(tl1);
    var l3 = new v.List([new v.Float(4321),new v.Float(1234)]).as(tl3);

    var tt1 = new t.Tuple([t.Int,t.String]);
    var t1 = new v.Tuple([new v.Int64(4321),new v.String("a")]).as(tt1);
    var t2 = new v.Tuple([new v.Int64(4321),new v.String("abc")]).as(tt1);

    function testDecode() {

      q.assert(t.Word32.decode(new q.ByteBuffer([0x00,0x00,0x0F,0xD2])).value==4050);
      q.assert(t.Word32.decode(v.encodedAsByteBuffer(new v.Word32(23456))).value==23456);

      // Floats are approximates.
      chkFloat(new q.ByteBuffer([0xBD,0x0D,0x4F,0xDF]),-0.03449999913573265);
      chkFloat(new q.ByteBuffer([0x6B,0x8D,0x97,0x40]),3.423455969923935e+26);

      chkDouble(new q.ByteBuffer([0x45,0x71,0xB2,0xE8,0x02,0x9B,0xD2,0xA3]),3.423456e26);
      chkDouble(new q.ByteBuffer([0xBF,0xA1,0xA4,0x37,0x82,0x4D,0x4C,0xBA]),-3.4456e-2);

      tl1.ready().pipe(function (tl1) {
	var d = tl1.decode(v.encodedAsByteBuffer(l1));
	console.log(d.value);
        q.assert(d.value.length==2 && d.sameTypeOf(l1));
      });

      tt1.ready().pipe(function (tt1) {
	var d = tt1.decode(v.encodedAsByteBuffer(t1));
        q.assert(d.value.length==2);
	q.assert(d.sameTypeOf(t1));
      });
    };

    function testEqual() {
      q.assert(new v.String("abc").equal(new v.String("abc")));
      q.assert(v.unit.equal(v.unit));
      q.assert(new v.Char("a").equal(new v.Char("a")));
      q.assert(new v.ByteString([123]).equal(new v.ByteString([123])));
    };

    function testType() {
      q.assert(v.unit.sameTypeOf(v.unit));
      q.assert(new v.Char("h").sameTypeOf(new v.Char("h")));
      q.assert(new v.String("abc").sameTypeOf(new v.String("zsx")));
      q.assert(new v.Word32(1234).sameTypeOf(new v.Word32(4321)));
      q.assert(new v.Int64(1234).sameTypeOf(new v.Int64(4321)));
      q.assert(! new v.Int64(1234).sameTypeOf(new v.Word32(4321)));
      q.assert(new v.Float(1234).sameTypeOf(new v.Float(4321)));
      q.assert(new v.Double(1234).sameTypeOf(new v.Double(4321)));
      q.assert(new v.ByteString([123]).sameTypeOf(new v.ByteString([87])));
      q.assert(! new v.ByteString([123]).sameTypeOf(new v.String("abc")));

      q.assert(! l1.sameTypeOf(new v.List([new v.Float(1234)])));
      q.assert(l1.sameTypeOf(l2));
      q.assert(! l3.sameTypeOf(l2));

      q.assert(t1.sameTypeOf(t2));

      q.assert(! t1.sameTypeOf(l1));

    };

    function test() {
      testType();
      testDecode();
    };

    return test;

 })();
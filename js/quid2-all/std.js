/* Contains code from:
 * {id:msgpack.js,ver:1.05,license:"MIT",author:"uupaa.js@gmail.com"}
 * */
goog.provide('quid2.std');
goog.require('goog');
goog.require('$');
goog.require('quid2.util');

quid2.std = (function () { 
    
    var g = goog;
    var u = quid2.util;
    var mix = u.mix;
    var mix0 = u.mix0;
    var ext = u.ext;
    var assert = u.assert;
    var log = u.log;

    function id (v) {return v;}
    
    function noop () {}
    
    function range(n,l,h) {
	return (typeof n  == 'number' && n >= l && n <= h);
    };
    
    var load = function(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onreadystatechange = function() {
	    if (xhr.readyState === 4 && xhr.status === 200) {
		callback(xhr.responseText);
	    }
	}
	xhr.send();
    };

    function isWord8(n) {return range(n,0,255);}
    function isWord16 (n) {return range(n,0,65535);}
    function isWord32 (n) {return range(n,0,4294967295);}
    function isWord64 (n) {return range(n,0,18446744073709551615);}
    function isInt8 (n) {return range(n,-128,127);}
    function isInt16 (n) {return range(n,-32768,32787);}
    function isInt32 (n) {return range(n,-2147483684,2147483683);}
    function isInt64 (n) {return range(n ,-9223372036854775808,9223372036854775807);}
    // BUG: no range check
    function isFloat (n) {return typeof n  == 'number';}
    function isDouble (n) {return typeof n  == 'number';}

    function encodedAsByteBuffer(obj) {return new ByteBuffer(encodedAsBytes(obj));};

    function encodedAsBytes(obj) {
	var rv = [];
	obj.encode(rv);
	return rv;
    };

    function nameSplit(qname) {
	  var p = qname.lastIndexOf(".");
	  if (p == -1) return [[],qname];

	  var mdl  = qname.substring(0, p);
	  var name = qname.substring(p + 1);
	  return [mdl.split("."),name];
    };

    function traverse(obj,ns) {
	if (u.isUndefined(obj)) return;
	//assert(g.isArray(ns) && g.isObject(obj),["traverse",quid2.module,obj,ns]);
	if (ns.length==0) return obj;
	return traverse(obj[ns[0]],ns.slice(1));
    };


    function ByteBuffer(bytes) {
      this.value=bytes;
      this.pos=0;
    };

    //ByteBuffer.prototype.nextAll = function() {return this.next(1)[0];};

    // BUG: non atomic op
    /*ByteBuffer.prototype.reset = function() {
	if (this.pos == 0) return;
	this.value=this.value.splice(this.pos);
	this.pos = 0;
    };*/

    ByteBuffer.prototype.nextByte = function() {return this.next(1)[0];};

    ByteBuffer.prototype.next = function(n) {
      if (n>this.length()) throw ("ByteBuffer has only " + this.length() + " chars, cannot return " + n + " bytes.");
      var t = this.value.slice(this.pos,this.pos+n);
      this.pos += n;
      return t;
    };

    ByteBuffer.prototype.length = function() {return this.value.length-this.pos;};
    ByteBuffer.prototype.show = function () {return ""+this.value.slice(this.pos);}

    var prim = {
	sameTypeOf : function (other) {
	    return this.constructor == other.constructor;
	}
	,equal : function (other) {
	    if (! this.sameTypeOf(other)) return false;
	    return this.value == other.value;
	}
    };

    var num = ext(prim,{
	show:function() {return (""+this.value);}
    });

    var parts = ext(prim,{
	equal: function (other) {
	     if (! this.sameTypeOf(other)) return false;

	    if (this.value.length !== other.value.length) return false;

	    for (var i=0;i<this.value.length;i++)  {
		if (this.value[i].equal) {if (! this.value[i].equal(other.value[i])) return false;}
		else if (this.value[i] != other.value[i]) return false;
	    };
	    
	    return true;
	}
    }); 

    var namedParts = ext(parts,{
	show : function (nested) {
	    var s = nested ? "(" : "";
	    s += this.name;
	    var l = this.value.length;
	    for (var i=0;i<l;i++) s += " " +this.value[i].show(true);
	    return nested ? s+")" : s;
	}
    });

    var aCons =  ext(namedParts,{
	encode : function (rv) {
	    assert(u.isDefined(this.tag));
	    //assert(u.isDefined(this.numCons));
	    //if (this.numCons>1)
	    rv.push(this.tag);
	    for (var i=0;i<this.value.length;i++) this.value[i].encode(rv);
	}
	/*,decode : function (rv) { 
	    var os = [];
	    for (var i=0;i<this.types.length;i++) 
		os.push(this.types[i].decode(rv));//,this.vars));
	    return new (Function.prototype.bind.apply(this,os));
	}*/
	,fold_ : function(cases,rf) {
	    u.log("FOLD CONS",this.name);
	    var f = cases[this.name];
	    if (u.isUndefined(f)) 
	        //{throw ("std.aCons.fold_ No '"+this.name + "' in cases");}
		return this;
	    var l = this.value.length;
	    if (l==0) return f;
	    if (g.isFunction(f)) {
		var ps = [];
		for (var i=0;i<l;i++) ps.push(rf(this.value[i]));
		ps.push(rf);
		return f.apply(this,ps);
	    } else return f;
	}
	/*,fold: function(cases) {
	    var f = cases[this.name];
	    if (isUndefined(f)) {throw ("No '"+this.name + "' in "+cases);}
	    var l = this.value.length;
	    if (l==0) return f;
	    var ps = [];
	    for (var i=0;i<l;i++) {
		var p = this.value[i];
		ps.push(g.isObject(p) && g.isFunction(p.fold) ? p.fold(cases)) : p;
	    };
	    //ps.push(rf);
	    return f.apply(this,ps);
	}*/
    });

    function asCons(c,name,tag,decode) {
	mix(c,aCons);
	c.prototype.name=name;
	c.prototype.tag=tag;
	c.decode = decode;
    };

    /** Types as objects, slower as we need to dynamically create types in constructors decode functions ? **/
    var aType =  ext(namedParts,{
	decode : function (bs) {
	    var tag = bs.nextByte();
	    var c = this.cons[tag];
	    if (!c) throw (this.name + " has not constructor with tag " + tag); 
	    return c.decode(bs,this.value);
	}
    });

    function asType(c,name,cons) {
	mix(c,aType);
	c.prototype.name=name;
	c.prototype.cons=cons;
    };

    function asType0(c,name,cons) {
	mix0(c,aType);
	c.name=name;
	c.cons=cons;
    };

/*
    function ADT(vars,cons) {
	this.vars = vars;
	this.cons = cons;
    };
	 
    ADT.prototype.decode = function (p) {
	var me = this;
	//if (this.vars == 0) return (me.cons.length>1 ? me.cons[p.nextByte()] : me.cons[0]).decode(p);
	if (this.vars == 0) return (me.cons[p.nextByte()]).decode(p);
	else return function (bs) {
	    //log("ADT.decode2",me.cons,bs.show(),p);
	    //return (me.cons.length>1 ? me.cons[bs.nextByte()] : me.cons[0]).decode(bs,p);
	    return (me.cons[bs.nextByte()]).decode(bs,p);
	};
    };
*/

    function IO$(t) {this.value = t;}

    function Fun$() {this.value = argumentsAsArray(arguments);}

    Fun$.prototype.returnType = function () {return this.value[this.value.length-1];}; 

    function Value(mdlName,name,btype) {
	this.mdlName = mdlName;
	this.name=name;
	this.btype = btype;
    };

    // "quid2.module." +
    Value.prototype.qualName = function() {return this.mdlName + "." + this.name;};

    Value.prototype.show = function() {return this.qualName;};

    //function value(name,btype) {return new Value(name,btype);}

    function defs(mdlName,vs,cs,exps) {
	var r = {};
	for (var name in vs) {
	    if (vs.hasOwnProperty(name)) r[name] = new Value(mdlName,name,vs[name]);
	};

	$.extend(r,cs);
	if (exps) 
	    for (var e=0;e<exps.length;e++) $.extend(r,exps[e]);
	
	return r;
    };

    function Unit() {
	this.value = "";
    };
    mix(Unit,prim);

    var unit = new Unit();

    Unit.decode = function () {return unit;}

    Unit.prototype.show = function() {return "()";};

    Unit.prototype.encode = function(rv) {};

    function Char(ch) {
	assert(typeof ch == "string" && ch.length==1);
	this.value=ch;
    };
    mix(Char,prim);

    function char(i) {
	if (i instanceof Char) return i;
	return new Char(i);
    };

    Char.get = function (b) {
	var c = b.nextByte();
	var ch = c < 0x80 ? c : // ASCII(0x00 ~ 0x7f)
        c < 0xe0 ? ((c & 0x1f) <<  6 | (b.nextByte() & 0x3f)) :
            ((c & 0x0f) << 12 | (b.nextByte() & 0x3f) << 6
             | (b.nextByte() & 0x3f));
	return ch;
    };

    Char.put = function (rv,ch) {
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

    Char.decode = function (rv) {
	return new Char(bytesToString([Char.get(rv)]));
    };

    function bytesToString (bytes) {
	// return s.length < 10240 ? _toString.apply(null, ary) : byteArrayToByteString(ary);
	return window.String.fromCharCode.apply(null,bytes);
    };

    Char.prototype.show = function() {return "'" + this.value +"'";};

    Char.prototype.encode = function(rv) {Char.put(rv,this.value);};

    function Word8(i) {
	assert(isWord8,"Word8:bad parameter: "+i);
	this.value = i;
    };
    mix(Word8,num);

    function word8(i) {
	if (i instanceof Word8) return i;
	return new Word8(i);
    };
    
    Word8.get = function (b) {return b.nextByte();}
    Word8.put = function (rv,i) {rv.push(i & 0xff);};
    Word8.decode = function (b) {return new Word8(Word8.get(b));};
    Word8.prototype.encode = function(rv) {Word8.put(rv,this.value);};
    
    function Word16(i) {
	assert(isWord16,"Word16:bad parameter: "+i);
	this.value = i;
    };
    mix(Word16,num);

    function word16(i) {
	if (i instanceof Word16) return i;
	return new Word16(i);
    };
    
    Word16.get = function (b) {
	var buf = b.next(2);
	var num = buf[0] * 0x100 + buf[1];
	return num;
    };
    Word16.put = function (rv,i) {
	rv.push(i >> 8, i & 0xff);
    };
    Word16.decode = function (b) {return new Word16(Word16.get(b));};
    Word16.prototype.encode = function(rv) {Word16.put(rv,this.value);};    

    
    function Word32(i) {
	assert(isWord32,"Word32:bad parameter: "+i);
	this.value = i;
    };
    mix(Word32,num);

    function word32(i) {
	if (i instanceof Word32) return i;
	return new Word32(i);
    };
    
    Word32.get = function (b) {
	var buf = b.next(4);
	var num = buf[0] * 0x1000000 + buf[1] * 0x10000 + buf[2] * 0x100 + buf[3];
	return num;
    };
    Word32.put = function (rv,i) {
	rv.push(i >>> 24, (i >> 16) & 0xff, (i >> 8) & 0xff, i & 0xff);
    };
    Word32.decode = function (b) {return new Word32(Word32.get(b));};
    Word32.prototype.encode = function(rv) {Word32.put(rv,this.value);};    

    function Word64(i) {
	assert(isWord64,"Word64:bad parameter: "+i);
	this.value = i;
    };
    mix(Word64,num);
    
    function word64(i) {
	if (i instanceof Word64) return i;
	return new Word64(i);
    };
    
    Word64.get = function (b) {
	var buf = b.next(8);
	var num = 
	      buf[0] * 0x100000000000000 
	    + buf[1] * 0x1000000000000 
	    + buf[2] * 0x10000000000 
	    + buf[3] * 0x100000000 
	    + buf[4] * 0x1000000 
	    + buf[5] * 0x10000 
	    + buf[6] * 0x100 
	    + buf[7];
	return num;
    };
    /*Word64.put = function (rv,i) {
	rv.push(i >>> 56
		, (i >> 48) & 0xff
		, (i >> 40) & 0xff
		, (i >> 32) & 0xff
		, (i >> 24) & 0xff
		, (i >> 16) & 0xff
		, (i >> 8)  & 0xff
		, i & 0xff);
    };*/
    Word64.put = function (rv,i) {
	var high = Math.floor(i / 0x100000000);
	var low  = i & 0xffffffff;
	Word32.put(rv,high);
	Word32.put(rv,low);
    };
	
    Word64.decode = function (b) {return new Word64(Word64.get(b));};
    Word64.prototype.encode = function(rv) {Word64.put(rv,this.value);};    

    function Int8(i) {
	assert(isInt8,"Int8:bad parameter: "+i);
	this.value = i;
    };
    mix(Int8,num);

    function int8(i) {
	if (i instanceof Int8) return i;
	return new Int8(i);
    };

    Int8.get = function (b) {
	var num = b.nextByte();
	num = (num & 0x80) ? ((num ^ 0xff) + 1) * -1 : num;
	return num;
    };

    Int8.put = function (rv,i) {rv.push(i & 0xff);};
    Int8.decode = function (b) {return new Int8(Int8.get(b));};
    Int8.prototype.encode = function(rv) {Int8.put(rv,this.value);};    


    function Int16(i) {
	assert(isInt16,"Int16:bad parameter: "+i);
	this.value = i;
    };
    mix(Int16,num);

    function int16(i) {
	if (i instanceof Int16) return i;
	return new Int16(i);
    };

    Int16.get = function (b) {
	var buf = b.next(2);
	var num = buf[0];
	num = (num & 0x80) ? // sign -> avoid overflow
        ((num    ^ 0xff)      * 0x100 +
         (buf[1] ^ 0xff) + 1) * -1
            :  num * 0x100 +
            buf[1];
	return num;
    };

    Int16.put = function (rv,i) {
	var high = Math.floor(i / 0x100);
	var low  = i & 0xff;
	rv.push(high & 0xff
		,low & 0xff);
    };
    Int16.decode = function (b) {return new Int16(Int16.get(b));};
    Int16.prototype.encode = function(rv) {Int16.put(rv,this.value);};    


    function Int32(i) {
	assert(isInt32,"Int32:bad parameter: "+i);
	this.value = i;
    };
    mix(Int32,num);

    function int32(i) {
	if (i instanceof Int32) return i;
	return new Int32(i);
    };

    Int32.get = function (b) {
	var buf = b.next(4);
	var num = buf[0];
	num = (num & 0x80) ? // sign -> avoid overflow
        ((num    ^ 0xff)      * 0x1000000 +
         (buf[1] ^ 0xff)      * 0x10000 +
         (buf[2] ^ 0xff)      * 0x100 +
         (buf[3] ^ 0xff) + 1) * -1
            :  num * 0x1000000 +
            buf[1] * 0x10000 +
            buf[2] * 0x100 +
            buf[3];
	return num;
    };

    Int32.put = function (rv,i) {
	var high = Math.floor(i / 0x10000);
	var low  = i & 0xffff;
	rv.push((high >>  8) & 0xff
		,high & 0xff
		,(low  >>  8) & 0xff
		,low & 0xff);
    };
    Int32.decode = function (b) {return new Int32(Int32.get(b));};
    Int32.prototype.encode = function(rv) {Int32.put(rv,this.value);};    


    function Int64(i) {
	assert(isInt64,"Int64:bad parameter: "+i);
	this.value = i;
    };
    mix(Int64,num);

    function int64(i) {
	if (i instanceof Int64) return i;
	return new Int64(i);
    };

    Int64.get = function (b) {
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

    Int64.put = function (rv,i) {
	var high = Math.floor(i / 0x100000000);
	var low  = i & 0xffffffff;
	rv.push((high >> 24) & 0xff, (high >> 16) & 0xff,
		(high >>  8) & 0xff,         high & 0xff,
		(low  >> 24) & 0xff, (low  >> 16) & 0xff,
		(low  >>  8) & 0xff,          low & 0xff);
    };
    Int64.decode = function (b) {return new Int64(Int64.get(b));};
    Int64.prototype.encode = function(rv) {Int64.put(rv,this.value);};    

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


    function Float(i) {
	assert(isFloat,"Float:bad parameter: "+i);
	this.value = i;
    };
    mix(Float,num);

    function float(i) {
	if (i instanceof Float) return i;
	return new Float(i);
    };

    Float.get = function (b) {
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
    
    Float.put = function (rv,i) {encodeFloat(i,23,8,rv);};
    Float.decode = function (b) {return new Float(Float.get(b));};
    Float.prototype.encode = function(rv) {Float.put(rv,this.value);};    


    function Double(i) {
	assert(isDouble,"Double:bad parameter: "+i);
	this.value = i;
    };
    mix(Double,num);

    function double(i) {
	if (i instanceof Double) return i;
	return new Double(i);
    };

    Double.get = function (b) {
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

    Double.put = function (rv,i) {
                // THX!! @edvakf
                // http://javascript.g.hatena.ne.jp/edvakf/20101128/1291000731
                var sign = i < 0;
                sign && (i *= -1);

                // add offset 1023 to ensure positive
                // 0.6931471805599453 = Math.LN2;
                var exp  = ((Math.log(i) / 0.6931471805599453) + 1023) | 0;

                // shift 52 - (exp - 1023) bits to make integer part exactly 53 bits,
                // then throw away trash less than decimal point
                var frac = i * Math.pow(2, 52 + 1023 - exp);

                var low  = frac & 0xffffffff;
                sign && (exp |= 0x800);
                var high = ((frac / 0x100000000) & 0xfffff) | (exp << 20);

                rv.push(      (high >> 24) & 0xff, (high >> 16) & 0xff,
                              (high >>  8) & 0xff,  high        & 0xff,
                              (low  >> 24) & 0xff, (low  >> 16) & 0xff,
                              (low  >>  8) & 0xff,  low         & 0xff);
    };
    Double.decode = function (b) {return new Double(Double.get(b));};
    Double.prototype.encode = function(rv) {Double.put(rv,this.value);};    

    
    //BUG?: Represented as a String (does not match haskell code).
    //Support using http://www-cs-students.stanford.edu/~tjw/jsbn/
    function Integer(i) {
	assert(isInteger,"Integer:bad parameter: "+i);
	this.value = i;
    };
    mix(Integer,num);

    function integer(i) {
	if (i instanceof Integer) return i;
	return new Integer(i);
    };

    Integer.get = function (rv) {return parseInt(String.get(rv));}
    Integer.put = function (rv,i) {String.put(rv,""+i)};
    // FIX
    Integer.decode = function (b) {return new Integer(Integer.get(b));};
    Integer.prototype.encode = function(rv) {Integer.put(rv,this.value);};    

    /** Sequences **/
    // TO DO: add support for infinite sequences

    function Verbatim(bytes) {
	this.value=bytes;
    };
    mix(Verbatim,prim);
    
    Verbatim.put = function(rv,bs) {
	var len = bs.length;
	for (var i=0;i<len;i++) rv.push(bs[i]); // INEFFICIENT?
    };

    Verbatim.prototype.encode = function(rv) {Verbatim.put(rv,this.value);};   

    function encodedAsVerbatim(obj) {return new Verbatim(encodedAsBytes(obj));};

    function ByteList(bytes) {
	this.value=bytes;
    };
    mix(ByteList,parts);
    
    function bytes(i) {
	if (i instanceof ByteList) return i;
	return new ByteList(i);
    };

    ByteList.prototype.show = function () {return ""+this.value;}
    
    ByteList.prototype.encode = function(rv) {ByteList.put(rv,this.value,0);};

    ByteList.put = function(rv,bs,written) {
	var len = Math.min(254,bs.length-written);
	Word8.put(rv,len);
	if (len==0) return;
	for (var i=0;i<len;i++) rv.push(bs[written+i]); // INEFFICIENT?
	return ByteList.put(rv,bs,written+len);
    };

    ByteList.decode = function (rv) {return new ByteList(ByteList.get(rv,[]));};
    
    ByteList.get = function(rv,bs) {
	var len = Word8.get(rv);
	if (len==0) return bs; 

	var r = rv.next(len);
	if (bs.length==0) return ByteList.get(rv,r);
	
	for (var i=0;i<len;i++) bs.push(r[i]);
	return ByteList.get(rv,bs);
    };

    function encodedAsByteList(obj) {return new ByteList(encodedAsBytes(obj));};

    function String(s) {
	assert(typeof s == "string");
	this.value=s;
    };
    mix(String,parts);

    String.prototype.show = function() {
	return $.toJSON(this.value);
    };

    String.get = function (rv) {return stringGet(rv,[]);};
    // TO DO: add support for infinite lists
    function stringGet(rv,s) {
	var len = Word8.get(rv);
	if (len==0) return bytesToString(s); 
	else {
	    for (var i=0;i<len;i++) s.push(Char.get(rv));
	    return stringGet(rv,s);
	};
    };

    String.put = function(rv,s,written) {
	var len = Math.min(254,s.length-written);
	Word8.put(rv,len);
	if (len==0) return;
	for (var i=0;i<len;i++) Char.put(rv,s[written+i]);
	return String.put(rv,s,written+len);
    };

    String.decode = function (b) {return new String(String.get(b));}
    String.prototype.encode = function(rv) {String.put(rv,this.value,0);};

    function string(i) {
	if (i instanceof String) return i;
	return new String(i);
    };

    function List$(t) {
	this.value = t;
    };

    List$.prototype.decode = function (rv) {return new List(listGet(this.value,rv,[]));};

    function List(vs) {
	assert(g.isArray(vs),"List");
	//this.type = t;
	this.value = vs;
    };
    mix(List,parts);

    function list(i) {
	if (i instanceof List) return i;
	return new List(i);
    };

    //List.get = function (decodes) {return function (rv) {return listGet(decodes[0],rv,[]);}};

    // TO DO: add support for infinite lists
    function listGet(t,rv,vs) {
	//log("List.get",rv.show());
	var len = Word8.get(rv); 
	//log("List.len",len);

	if (len==255) {
	    var k = String.decode(rv);
	    u.log("Unsupported infinite list ",k);
	    return vs;
	};

	if (len==0) return vs;
	
	for (var i=0;i<len;i++) vs.push(t.decode(rv));
	return listGet(t,rv,vs);
    };

    List.put = function(rv,vs,written) {
	var len = Math.min(254,vs.length-written);
	Word8.put(rv,len);
	if (len==0) return;
	for (var i=0;i<len;i++) vs[written+i].encode(rv);
	return List.put(rv,vs,written+len);
    };

    /*List.decode = function (decodes) {
	assert(g.isArray(decodes) && decodes.length==1,"List.decode");
	return function (rv) {return new List(List.get(decodes)(rv));}
    };*/

    List.prototype.encode = function(rv) {List.put(rv,this.value,0);};

    List.prototype.fold_ = function(cases,rf) {
	return new List(this.value.map(rf));
    };

    List.prototype.fold = function(cases) {
	return new List(this.value.map(function(v) {return v.fold(cases);}));
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

    function argumentsAsArray(args) {
	var is = g.isArray(args[0]) && args.length==1 ? args[0] : args;
	var r = [];
	for (var i = 0; i < is.length; i++) r.push(is[i]);
	return r;
    };

   function Tuple$() {
       this.value = argumentsAsArray(arguments);
   };
		
   Tuple$.prototype.decode = function (rv) {
       var vs = [];
       var len = this.value.length;
       for (var i=0;i<len;i++) vs.push(this.value[i].decode(rv));
       return new Tuple(vs);
   };

   //Tuple$.prototype.show = Tuple.prototype.show;

    function Tuple(vs) {
	assert(g.isArray(vs) && vs.length>1,"Tuple()");
	//this.type = t;
	this.value = vs;
    };
    mix(Tuple,parts);

    function tuple(i) {
	if (i instanceof Tuple) return i;
	return new Tuple(i);
    };
/*
    Tuple.decode = function (ds) {
	return function (rv) {
	    var vs = [];
	    var len = ds.length;
	    for (var i=0;i<len;i++) vs.push(ds[i](rv));
	    return new Tuple(vs);
	};
    };
*/
   Tuple.prototype.show = function(t,elem,level) {return "("+List.show_(this.value)+")";};

    Tuple.prototype.encode = function(rv) {
	var len = this.value.length;
	for (var i=0;i<len;i++) this.value[i].encode(rv);
    };

    Tuple.prototype.fold_ = function(cases,rf) {
	return new Tuple(this.value.map(rf));
    };
  
    /**
     * @param typ :: quid2.module.Service.Org.Quid2.Language.QQ.Hash_89ce6608df8648d95c375e5b452662e5f8eb4024477d370c9624620e8d92e9df.Type
     * @param rv :: [Byte] -- ByteBuffer
     * @return decoded value
     **/
    /*function concreteType(typ) {
	u.log("concreteType");
	u.dir(typ);
	u.log(typ.show());
	return*/  var concreteType = fold({
	    TyDecl:function (name) {
		var nameStr = name.value[0].value+"."+name.value[1].value[0].value+"$";
		var cls = traverse(quid2.module,nameStr.split("."));
		assert(u.isDefined(cls),"TyDecl not found: "+name);
		return cls;
	    }
	    ,AbsName: function (ref) {u.log("AbsName",ref);return ref;}
	    ,AbsNamePart: function (ref,pos) {u.log("AbsNamePart",ref,pos);return ref;}
	    ,Verb: function (s) {u.log("Verb",s);return s;}
	    ,Hash: function (s) {u.log("Hash",s);return s;}
	    ,TyVar: function (v) {throw ("Unexpected variable " + v + " in type");}
	    ,TyApp: function (t,tss) {
		var ts = tss.value;
		log("TyApp",t,ts);
		if (t == List$) {
		    if (ts[0]==Word8) return ByteList;
		    if (ts[0]==Char) return String;
		    return new List$(ts[0]);
		};
		if (t == Tuple$) {
		    var tup = new Tuple$(ts);
		    //tup.value = ts;
		    return tup;
		}
		if (t == Fun$) return new Fun$(ts);

		if (t == IO$) return ts[0]; // BAD

		var o = new t();
		o.value=ts;
		return o;
	    }
	    ,TyFun: Fun$ // function () {throw ("Unexpected TyFun in type");}
	    ,TyIO: IO$  // function () {throw ("Unexpected TyIO in type");}
	    ,TyList:List$
	    ,TyTuple:function (arity) {return Tuple$;}
	    ,TyUnit:Unit
	    ,TyChar: Char
	    ,TyWord8: Word8
	    ,TyWord16: Word16
	    ,TyWord32: Word32
	    ,TyWord64: Word64
	    ,TyInt8: Int8
	    ,TyInt16: Int16
	    ,TyInt32: Int32
	    ,TyInt64: Int64
	    ,TyFloat: Float
	    ,TyDouble: Double
	    ,TyInteger: Integer
	});/*(typ);
	//var t = topDec(typ);
	//log("decodeF",typ,f,bs);
	//return t.decode(new ByteBuffer(bs));
    };*/

    function decode(typ,bs) {
	return concreteType(typ).decode(new ByteBuffer(bs));
    };

/*
    function decode(typ,bs) {
	u.log("DECODE");
	u.dir(typ);
	u.log(typ.show());
	var topDec = fold({
	    TyDecl:function (nameDecode) {
		var cls = traverse(quid2.module,nameSplit(name+"$.")[0]);
		assert(u.isDefined(cls),"decode.TyDecl not found: "+name);
		return g.bind(ADT.prototype.decode,cls);
		return function(bs) {
		    u.log("NAME IN",bs);
		    u.log("NAME",nameDecode(bs).show());
		};
	    }
	    ,AbsName: function (ref) {u.log("AbsName",ref);return ref;}
	    ,AbsNamePart: function (ref,pos) {u.log("AbsNamePart",ref,pos);return ref;}
	    ,Verb: function (s) {u.log("Verb",s);return s;}
	    ,Hash: function (s) {u.log("Hash",s);return s;}
	    ,TyVar: function (v) {throw ("Unexpected variable " + v + " in type");}
	    ,TyApp: function (t,tss) {
		log("TyApp",t,tss);
		var ts = tss.value;
		if (t==List.decode && ts.length==1) {
		    if (ts[0]==Word8.decode) return ByteList.decode;
		    if (ts[0]==Char.decode) return String.decode;
		};
		return t(ts);
	    }
	    ,TyFun: function () {
		//throw ("Unexpected IO in type");
	    }
	    ,TyList:List.decode
	    ,TyTuple: function (arity) {return Tuple.decode;} 
	    ,TyIO: function () {
		//throw ("Unexpected IO in type");
		return id;//function (dt) {return dt;}
	    }
	    ,TyUnit:Unit.decode
	    ,TyChar: Char.decode
	    ,TyWord8: Word8.decode
	    ,TyWord16: Word16.decode
	    ,TyWord32: Word32.decode
	    ,TyWord64: Word64.decode
	    ,TyInt8: Int8.decode
	    ,TyInt16: Int16.decode
	    ,TyInt32: Int32.decode
	    ,TyInt64: Int64.decode
	    ,TyFloat: Float.decode
	    ,TyDouble: Double.decode
	    ,TyInteger: Integer.decode
	});
	var f = topDec(typ);
	//log("decodeF",typ,f,bs);
	return f(new ByteBuffer(bs));
    };
    */
    
    /*
      Given a set of functions corresponding to the constructors of a value of type a and all returing a value of type b, returns a function a -> b.
      Each costructor function takes as inputs the result of applying the function itself to its arguments.
      If for a constructor no function is provided, the value itself is returned.
      Constructor functions can also be provided for types that are nested inside the top value.
      * fold :: {constructorName (C a b c ..) : ((f a) (f b) (f c) .. -> z)} -> f :: (t -> z)
      * Example:
      * for data L a = N | C a (L a)
      * listLength :: L a -> Int
      * var listLength = s.fold({N:0,C:function (h,t) {return 1+t;}});
     */
    function fold(cases) {
	var f = function (c) {
	    if (g.isObject(c) && g.isFunction(c.fold_)) return c.fold_(cases,f);
	    return c;
	}
	return f;
    };

    //function args(as) {return Array.prototype.slice.call(as);}

    return {isWord8:isWord8,isWord16:isWord16,isWord32:isWord32,isWord64:isWord64
	    ,isInt8:isInt8,isInt16:isInt16,isInt32:isInt32,isInt64:isInt64
	    ,List$:List$,list:list,List:List,string:string,String:String
	    ,Tuple$:Tuple$,tuple:tuple,Tuple:Tuple
	    ,Unit:Unit,unit:unit
	    ,Char:Char,char:char
	    ,word8:word8,Word8:Word8,word16:word16,Word16:Word16,word32:word32,Word32:Word32,word64:word64,Word64:Word64
	    ,int8:int8,Int8:Int8,int16:int16,Int16:Int16,int32:int32,Int32:Int32,int64:int64,Int64:Int64
	    ,Float:Float,float:float,Double:Double,double:double,Integer:Integer,integer:integer
	    ,fold:fold
	    ,ByteBuffer:ByteBuffer,encodedAsBytes:encodedAsBytes
	    ,ByteList:ByteList,bytes:bytes,encodedAsByteList:encodedAsByteList
	    ,Verbatim:Verbatim,encodedAsVerbatim:encodedAsVerbatim
	    ,concreteType:concreteType,decode:decode
	    //,args:args
	    ,asCons:asCons,asType:asType,asType0:asType0
	    //,ADT:ADT
	    ,Value:Value,defs:defs
	   };
})();
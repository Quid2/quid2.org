/* global jQuery */
/* jslint browser:true, nomen: true, laxbreak:true */
/*
 * Quid2 basic API and utilities.
 * TODO: fix all references to "Prelude"
 */
goog.provide('quid2');
goog.require('goog');

(function() {

   var g = goog;
	function require(rule) {
		var r = timedDeferred();

		try {
			var toLoad = require_(rule);

			var loaded = 0;
			$.each(toLoad, function(i, src) {
				// Try to avoid problems in case of multiple thread loading
				// scripts.
				if (goog.dependencies_.written[src]) loaded++;
				else {
					goog.dependencies_.written[src] = true;
					$.getScript(src, function(dt, textStatus) {
						console.log("loaded:" + src, dt, textStatus);
						loaded++;
						if (loaded == toLoad.length) r.resolve();
					});
				};
			});
			if (loaded == toLoad.length) r.resolve();
		} catch (err) {
			r.reject(err);
		};

		return r.promise();
	};

	// Copied from Google's Closure library.
	function require_(rule) {

		// if the object already exists we do not need do do anything
		// TODO(user): If we start to support require based on file name this
		// has
		// to change
		// TODO(user): If we allow goog.foo.* this has to change
		// TODO(user): If we implement dynamic load after page load we should
		// probably
		// not remove this code for the compiled output
		if (!COMPILED) {
			if (goog.getObjectByName(rule)) { return []; }
			var path = goog.getPathFromDeps_(rule);
			if (path) {
				goog.included_[path] = true;
				return writeScripts();
			} else {
				var errorMessage = 'goog.require could not find: ' + rule;
				if (goog.global.console) {
					goog.global.console['error'](errorMessage);
				}
				throw Error(errorMessage);
			}
		}
	};

	/**
	 * Resolves dependencies based on the dependencies added using addDependency
	 * and calls importScript_ in the correct order.
	 *
	 * @private
	 */
	function writeScripts() {
		// the scripts we need to write this time
		var scripts = [];
		var seenScript = {};
		var deps = goog.dependencies_;

		function visitNode(path) {
			if (path in deps.written) { return; }

			// we have already visited this one. We can get here if we have
			// cyclic
			// dependencies
			if (path in deps.visited) {
				if (!(path in seenScript)) {
					seenScript[path] = true;
					scripts.push(path);
				}
				return;
			}

			deps.visited[path] = true;

			if (path in deps.requires) {
				for ( var requireName in deps.requires[path]) {
					if (requireName in deps.nameToPath) {
						visitNode(deps.nameToPath[requireName]);
					} else if (!goog.getObjectByName(requireName)) {
						// If the required name is defined, we assume that this
						// dependency was bootstapped by other means. Otherwise,
						// throw an exception.
						throw Error('Undefined nameToPath for ' + requireName);
					}
				}
			}

			if (!(path in seenScript)) {
				seenScript[path] = true;
				scripts.push(path);
			}
		}

		for ( var path in goog.included_) {
			if (!deps.written[path]) {
				visitNode(path);
			}
		}

		var scriptsToLoad = [];
		for ( var i = 0; i < scripts.length; i++) {
			if (scripts[i]) {
				scriptsToLoad.push(goog.basePath + scripts[i]);
			} else {
				throw Error('Undefined script input');
			}
		}

		return scriptsToLoad;
	};

	function dfl(dfl, val) {
		return isDefined(val) ? val : dfl;
	}

	function badPattern(e) {
		throw "Not a valid pattern: " + e;
	}
	function isLower(s) {
		return s.toLowerCase() === s;
	}

	function map(arr, f) {
		var l = arr.length;
		var r = [];
		for ( var i = 0; i < l; i++)
			r.push(f(arr[i]));
		return r;
	};

	function Ch(ch) {
		this.ch = ch;
	};
	Ch.prototype.myShow = function() {
		return "'" + this.ch + "'";
	};
	Ch.prototype.myJSON = function() {
		return esc("C" + this.ch);
	};
	Ch.prototype.eq = function(b) {
		return (b instanceof Ch) && eq(this.ch, b.ch);
	};
	Ch.prototype.conName = function() {
		return "Prelude.Char";
	};

	function nameQuote(kind, qname) {
		var p = qname.lastIndexOf(".");
		var mdl = qname.substring(0, p);
		var name = qname.substring(p + 1);
		// console.log("nameQuote",kind,qname,mdl,name);
		return app(c(kind), app(app(c("Prelude.Qual"), app(c("Prelude.ModuleName"), mdl)), app(c("Prelude.Ident"), name)));
	};

	function Var(name) {
	  if (!name || name.length <1) badPattern(name); //  || ! isLower(this.name.substring(0,1))
	  this.name = name;
	};
	Var.prototype.myShow = function() {
		return this.name;
	};
	Var.prototype.myJSON = function() {
		return esc("V" + this.name);
	};
	Var.prototype.myQuote = function() {
		return nameQuote("Var", this.name);
	};
	Var.prototype.match = function(res, o) {
		//if (isLower(this.name)) {
			var r = {};
			r[this.name] = o;
			return $.extend(r, res);
		//} else badPattern(this.name);
	};
	Var.prototype.eq = function(b) {
	  return (b instanceof Var) && eq(this.name, b.name);
	};

	// TODO: SpecialCon ?
	function Con(name) {
		this.name = name;
	};
	Con.prototype.myShow = function() {
		return this.name;
	};
	Con.prototype.myJSON = function() {
		return esc("D" + this.name);
	};

	Con.prototype.myQuote = function() {
		return nameQuote("Con", this.name);
	};

	Con.prototype.match = function(res, o) {
		if (o instanceof Con && o.name === this.name) return res;
	};
	Con.prototype.eq = function(b) {
		return (b instanceof Con) && eq(this.name, b.name);
	};
	Con.prototype.conName = function() {
		return this.name;
	};

        // Relative name, matched all constructor with same rel name
	function RelCon(name) {
	  this.name = name;
	};

   	RelCon.prototype.match = function(res, o) {
	  if (o instanceof Con && relName(o.name) === this.name) return res;
	};

	function relName (fullName) {
	  var path = fullName.split(".");
	  if (path.length <= 1) return fullName;
	  path.splice(path.length-2,1);
	  return path.join(".");
	}

	function nameSplit(qname) {
	  var p = qname.lastIndexOf(".");
	  if (p == -1) return [[],qname];

	  var mdl  = qname.substring(0, p);
	  var name = qname.substring(p + 1);
	  return [mdl.split("."),name];
	};

   	function traverse(obj,ns) {
	  if (isUndefined(obj)) return;
	  //assert(g.isArray(ns) && g.isObject(obj),["traverse",quid2.module,obj,ns]);
	  if (ns.length==0) return obj;
	  return traverse(obj[ns[0]],ns.slice(1));
	};

	// Check: should a Tuple be mapped to a JS Array and a List to a List obj?
	/*
	 * function Tuple(vs) { this.vs = vs; }; Tuple.prototype.myShow = function()
	 * {return "("+showN(map(this.vs,show))+")";}; Tuple.prototype.myJSON =
	 * function() {return typ(",",this.vs);}; function t(vs) {return new
	 * Tuple(vs);}
	 */
	// Tuples are mapped to JavaScript arrays, lists to a List obj.
	function List(vs) {
		this.vs = vs;
	};
	List.prototype.myShow = function() {
		return "[" + showN(map(this.vs, show)) + "]";
	};
	List.prototype.myJSON = function() {
		return typ("_", this.vs);
	};
	List.prototype.eq = function(b) {
		if (!(b instanceof List)) return false;

		for ( var i = 0; i < this.vs.length; i++)
			if (!eq(this.vs[i], b.vs[i])) return false;
		return true;
	};

	List.prototype.map = function(f) {this.vs.map(f);};

	function lst(vs) {
		return new List(vs);
	};

	function App(f, v) {
		console.assert(isDefined(f) && isDefined(v), "App(" + show(f) + "," + v + ")");
		this.f = f;
		this.v = v;
	};
	App.prototype.myShow = function() {
		// return par(show(this.f)) + " " + par(show(this.v));
		return par(show(this.f) + " " + show(this.v));
	};
	App.prototype.myJSON = function() {
		return typ("$", [ this.f, this.v ]);
	};
	App.prototype.myQuote = function() {
		return app(app(c("Prelude.App"), quote(this.f)), quote(this.v));
	};

	App.prototype.match = function(res, o) {
		if (o instanceof App) {
			var r = match(res, this.f, o.f);
			if (isDefined(r)) return match(r, this.v, o.v);
		}
	};
	App.prototype.eq = function(b) {
		return (b instanceof App) && eq(this.f, b.f) && eq(this.v, b.v);
	};
	App.prototype.conName = function() {
		return this.f.conName();
	};

	function At(c, e) {
		this.c = c;
		this.e = e;
	};
	At.prototype.myShow = function() {
		return par(show(this.e)) + " @ " + par(show(this.c));
	};
	At.prototype.myJSON = function() {
		return typ("@", [ this.c, this.e ]);
	};
	At.prototype.myQuote = function() {
		return app(app(c("Prelude.At"), quote(this.c)), quote(this.e));
	};
	At.prototype.eq = function(b) {
		return (b instanceof At) && eq(this.c, b.c) && eq(this.e, b.e);
	};

	function Lambda(pats, e) {
		this.p = pats;
		this.e = e;
	};
	Lambda.prototype.myShow = function() {
		return par(this.p + " -> " + show(this.e));
	};
	Lambda.prototype.myJSON = function() {
		return typ("/", [ this.e, this.p ]);
	};

	// Generic verbatim Expr, specified as an array, ex: ["PVar","o"]
	function Expr(es) {
		console.log("Expr", es);
		this.es = es;
	};
	Expr.prototype.myShow = function() {
		return verb(this.es);
	};
	Expr.prototype.myJSON = function() {
		return this.myShow();
	};

	function ch(v) {
		return new Ch(v);
	}
	function v(v) {
		return new Var(v);
	}
	function c(v) {
		return new Con(v);
	}
   	function relc(v) {
		return new RelCon(v);
	}
	function app(f, v) {
		return new App(f, v);
	}
	function at(c, e) {
		return new At(c, e);
	}
	function lam(p, e) {
		return new Lambda(p, e);
	}
	function e(es) {
		return new Expr(es);
	}

	function isError(expr) {
	  //return expr.f && (expr.f.name == "Prelude.throw" || expr.f.name == "Error.error");
	  return expr.f && (expr.f.name == "throw");
	};

	function errorObject(expr) {return expr.v;}

	// Get the error message from an error expression
	function errorMessage(expr) {
	  if (isError(expr)) return show(expr.v);
	  try {return show(expr);} catch (err) {return expr+"";}
	};

	// Build a nested application
	function appN(f, pars) {
		var e = f;
		for ( var i = 0; i < pars.length; i++)
			e = app(e, pars[i]);
		return e;
	};

	function verb(o) {
		if ($.isArray(o)) return "[" + showN(map(o, verb)) + "]";

		if (typeof o == "string") return '"' + o + '"';

		return "" + o;
	};

	function conName(o) {
		if (isDefined(o.conName)) return o.conName();

		// if ($.isArray(o)) return "(" + showN(map(o, show)) + ")";

		if (typeof o == "string") return "Prelude.String";

		if (typeof o == "number") return "Prelude.Num";

		return "Prelude.Unknown";
		// throw ("Cannot find conName of " + show(o));
	};

	// function quote (exp) {return
	// app(c("Data.Maybe.fromJust"),app(c("Prelude.read"),show(exp)));}

	function quote(o) {
		if (isDefined(o.myQuote)) return o.myQuote();

		// if ($.isArray(o)) return "(" + showN(map(o, show)) + ")";

		if (typeof o == "string") return app(c("Prelude.Lit"), app(c("Prelude.String"), o));

		if (typeof o == "number") return app(c("Prelude.Lit"), app(c("Prelude.Frac"), o));

		throw ("Cannot quote " + show(o));
	};

	// Expr -> String
	function show(o) {
		if (isDefined(o.myShow)) return o.myShow();

		if ($.isArray(o)) return "(" + showN(map(o, show)) + ")";

		if (typeof o == "string") return '"' + o + '"';

		return "" + o;
	};

	function showN(o) {
		var l = o.length;
		var s = "";
		for ( var i = 0; i < l; i++) {
			s += o[i];
			if (i != l - 1) s += ",";
		}
		return s;
	}

	/*
	 * Expr -> LinearExpr (where apps are transformed into []) function lin(o) {
	 * if (typeof o == "number") return o; if (typeof o == "string") return o;
	 *
	 * if ($.isArray(o)) return typ(",", o);
	 *
	 * throw ("Cannot encode: " + o);
	 *
	 * return "" + o; };
	 */

	function match0(p, o) {
		return match({}, p, o);
	}

	function match(ret, p, o) {
		if (typeof p == "number" || typeof p == "string") if (p === o) return ret;
		else return undefined;
		else if (isDefined(p.match)) return p.match(ret, o);
	};

	function matchN() {
		var o = arguments[0];
		for ( var i = 1; i < arguments.length; i++) {
			var e = arguments[i];
			var r = match0(e[0], o);
			if (r) return e[1](r);
		};
		throw ("No matching case for: " + o);
	}

	function arrayEqual(a,b) {
	  if (a.length != b.length) return false;
	  for ( var i = 0; i < a.length; i++)
	    if (a[i]!=b[i]) return false;
	  return true;
	};

	// Expression equality
	function eq(a, b) {
		if (isDefined(a.eq)) return a.eq(b);

		if ($.isArray(a)) {
			for ( var i = 0; i < a.length; i++)
				if (!eq(a[i], b[i])) return false;
			return true;
		};

		return a == b;
	};

	// Expr -> JSON
	function encode(o) {
		if (isDefined(o.myJSON)) return o.myJSON();

		if (typeof o == "number") return "" + o;

		if (typeof o == "string") return esc("T" + o);

		if ($.isArray(o)) return typ(",", o);

		throw ("Cannot encode: " + o);
	};

	// JSON -> Expr
	function decode(e) {
		if (typeof e == "number") return e;

		if (typeof e == "string") {
			var k = e.charAt(0);
			var v = e.slice(1);
			if (v.length == 0 && k != "T") throw ("Empty identifier or character: " + e);
			switch (k) {
			// case "I":return Number(v);
			// case "F":return Number(v);
			case "C":
				return new Ch(v);
			case "T":
				return v;
			case "V":
				return new Var(v);
			case "D":
				return new Con(v);
			};
		}

		if ($.isArray(e)) {
			var k = e[0];
			var vs = e.slice(1);
			switch (k) {
			case "_":
				return new List(map(vs, decode));
			case ",":
				return map(vs, decode);
			case "$":
				return new App(decode(vs[0]), decode(vs[1]));
			case "@":
				return new At(decode(vs[0]), decode(vs[1]));
			case "/":
				return new Lambda(decode(vs[1]), decode(vs[0]));
			};
			// Default case
			return new Expr(e);
		};

		throw ("Cannot decode: " + e);
	};

   	function decodeString(s) {return decode($.parseJSON(s));}

	function esc(s) {
		return $.toJSON(String(s));
	}
	function par(s) {
		return "(" + s + ")";
	}

	function chk(b) {
		if (b) return;
		throw "condition violated";
	}

	function typ(typ, ss) {
		var l = ss.length;
		var s = "[" + esc(typ);
		for ( var i = 0; i < l; i++) {
			s += "," + encode(ss[i]);
			// if (i != l-1)
		}
		return s + "]";
	};

	function isUndefined(o) {
		return typeof o == "undefined";
	};

	function isDefined(o) {
		return !isUndefined(o);
	};

	function id(v) {
		return v;
	}

	// ? == join
	function intercalate(sep, ss) {
		var s = "";
		$.each(ss, function(i, v) {
			s += ss[i] + (i == ss.length - 1 ? "" : sep);
		});
		return s;
	};

   	function toPath(name) {return name.split(".");}

	function toName(path) {return intercalate(".",path);}

	function timedDeferred(timeoutInMs) {
		var dfd = new $.Deferred();
		setTimeout(function() {
		  dfd.reject(app(v("Error.error"), "Timeout"));
		}, isDefined(timeoutInMs) ? timeoutInMs : 50000);
		return dfd;
	};

	function whenN(defs) {
	  return $.when.apply($,defs).pipe(function (a,b,c,d) {
	    var ts = [];
	    for (var i=0;i<arguments.length;i++) ts[i]=arguments[i];
	    return ts;
	  });
	};

	function deferMap(defer, f) {
		var result = new $.Deferred();

		defer.then(function(v) {
			try {
				result.resolve(f(v));
			} catch (err) {
				result.reject(err);
			}
		}, function(err) {
			result.reject(err);
		});

		return result.promise();
	};

	// From: http://www.talkincode.com/pad-a-string-in-javascript-513.html
	function pad(padMe, totalChars, padWith) {
		padMe = padMe + ""; // force num to be string
		padWith = (padWith) ? padWith : "0"; // set default pad
		if (padMe.length < totalChars) {
			while (padMe.length < totalChars) {
				padMe = padWith + padMe;
			}
		}
		return padMe;
	}

	var objKeys = Object.keys || function (object) {
	    if (! $.isPlainObject(object)) {throw ("base.objKeys: Not a plain object: " + object); }
	    var results = [];
	    for (var property in object) {
	      if (object.hasOwnProperty(property)) results.push(property);
	    }
	    return results;
	  };

   function assert(cond,msg) {
	    if (!cond) {
	      //var msgs = [];
	      //for (var i=1;i<arguments.length;i++) msgs[i-1] = arguments[i];
	      //var m = msgs.length == 0 ? "Failed assertion." : msgs;
              var m = msg || "Failed assertion.";
	      console.error("assert:",m);
	      throw m;
	    };
	  }

   function Buffer(s) {
      this.s=s;
      this.pos=0;
    };
    Buffer.prototype.next = function(n) {
      if (n>this.length()) throw ("Buffer has only " + this.length() + " chars, cannot return " + n + " chars.");
      var t = this.s.slice(this.pos,this.pos+n);
      this.pos += n;
      return t;
    };
    Buffer.prototype.length = function() {return this.s.length-this.pos;};


   function ByteBuffer(bytes) {
      this.bytes=bytes;
      this.pos=0;
    };

    //ByteBuffer.prototype.nextAll = function() {return this.next(1)[0];};

    ByteBuffer.prototype.nextByte = function() {return this.next(1)[0];};

    ByteBuffer.prototype.next = function(n) {
      if (n>this.length()) throw ("ByteBuffer has only " + this.length() + " chars, cannot return " + n + " bytes.");
      var t = this.bytes.slice(this.pos,this.pos+n);
      this.pos += n;
      return t;
    };

    ByteBuffer.prototype.length = function() {return this.bytes.length-this.pos;};

   function recAttr(jelem,name) {
     var v = jelem[name]();
     return v>0 ? v : recAttr(jelem.parent(),name);
   };

   var jelemC = $("body").constructor;
   function isJElem(e) {
     return e.constructor == jelemC;
   };

   function logT() {
     var t = new Date();
     var pars = [t].concat(arguments);
     console.log.apply && console.log.apply(console,pars);
   };

   function errorT() {
     var t = new Date();
     var pars = [t].concat(arguments);
     console.error.apply(console,pars);
   };

   // External API
   $.extend(quid2, {
		isUndefined : isUndefined,
		isDefined : isDefined,
		isJElem:isJElem,
		assert: assert,
		assertDefined : function (obj,msg) {assert(isDefined(obj),msg || "Undefined parameter");},
		id : id,
		cnst : function(v) {return function() {return v;};},
		error : function (msg) {return function() {throw msg;};},
		dfl : dfl,
		intercalate : intercalate
		,toPath: toPath
		,toName: toName
		,later : function (f) {setTimeout(f,0);},
		arrayEqual:arrayEqual,
		pad : pad,
		shortString: function(maxLength,s) {
		  return s.substring(0,maxLength) + (s.length>maxLength? "..." : "");
		},
		esc:esc,
		encode : encode,
		decode : decode,
		decodeString : decodeString,
		eq : eq,
		conName : conName,
		show : show,
		// quote : quote,
		ch : ch,
		v : v,
		c : c,
		relc : relc,
		relName : relName,
		nameSplit:nameSplit,
		traverse:traverse,
		lst : lst,
		app : app,
		at : at,
		lam : lam,
		e : e,
		match : matchN,
		appN : appN,
		isError : isError,
		errorObject : errorObject,
		errorMessage : errorMessage,
		timedDeferred : timedDeferred,
		whenN : whenN,
		//deferMap : deferMap,
		require : require,
		objKeys: objKeys,
		isLower:isLower,
		Buffer:Buffer,
		ByteBuffer:ByteBuffer,
		resize : function(jelem,handler) {
		  var currHeight;
		  var currWidth;

		  function r() {
		    var w = jelem.width();
		    var h = jelem.height();
		    if (w!=currWidth || h!=currHeight) {
		      //console.log("resized to",w,h);
		      currWidth=w;
		      currHeight=h;
		      handler(w,h);
		    }
		  };
		  jQuery.resize.delay=1000;
		  jelem.resize(r);
		  r();
		}
		//,recAttr : recAttr
		,ext:function(b,e) {
		  return $.extend({},b,e);
		}
		,once:function(f) {
		  var done;
		  return function () {
		    if (done) return;
		    f.apply(f,arguments);
		  };
		}
	      ,mix: function(cls,mix) {
		assert(cls && mix);
		$.extend(cls.prototype,mix);
	      }
	      ,log: console.log.apply ? logT : console.log
	      ,error: console.error.apply ? errorT : console.error

	});

})();

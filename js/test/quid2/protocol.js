goog.provide('test.quid2.protocol');
goog.require('goog');
goog.require('quid2.std');
goog.require('quid2.connection');
//goog.require('quid2.protocol');
goog.require('quid2.test.Tracing');
goog.require('quid2.module.Test.Test.API');
goog.require('quid2.module.Network.Base.API');
goog.require('quid2.module.Data.Ref.API');
goog.require('quid2.module.Digest.SHA.API');
goog.require('quid2.module.Data.Maybe.API');
//goog.require('quid2.module.Finance.Price.API');

test.quid2.protocol = (function () {
    var s = quid2.std;
    var u = quid2.util;
    var g = goog;
    var t = quid2.module.Test.Test.API;
    var m_ep = quid2.module.Network.Base.API;
    var m_d = m_ep;
    var m_ref = quid2.module.Data.Ref.API;
    var m_sha = quid2.module.Digest.SHA.API;
    var m_maybe = quid2.module.Data.Maybe.API;

    var store = new m_ep.EndPoint(new m_d.Dir("http://quid2.org/eval"),new m_ep.RPC("quid2.org",7774));

    function test () {
	var t = quid2.module.Test.Test.API;
	var g1 = {url:"quid2.org",port:80};
	var g2 = {url:"192.168.56.101",port:5050};
	quid2.test.Tracing.trace("quid2.connection"
				 //,"quid2.std.ByteBuffer.prototype.next"
				 //,"quid2.std.String.decode"
				 //,"quid2.std.ADT.prototype.decode"
				 //onIdentity
				 //,"quid2.std.Char.get"
				 //,"quid2.std.Char.decode"
				 //,"quid2.std.decode"
				 //,"quid2.std.concreteType"
				);

	//var maybeBytesDecode = g.bind(m_maybe.Maybe$.decode,m_maybe.Maybe$)([s.ByteList.decode]);
	var MaybeBytes = new m_maybe.Maybe$(s.ByteList);

	function testRPC(o) {
	    var s1 = new s.string("abc");
	    var s1e = s.encodedAsByteList(s1);
	    o.rpc(store,"put",[s1e]).then(
		    function (r) {
			var ref = new m_sha.SHA256$().decode(new s.ByteBuffer(r));
			u.log("rpc.put",ref.show());

			o.rpc(store,"get",[ref]).then(
			    function (r) {
				var maybeR = MaybeBytes.decode(new s.ByteBuffer(r));
				u.log("rpc.get",maybeR.show());
				s.fold({Nothing:"NOT FOUND"
					,Just: function (v) {
					    var s2 = s.String.decode(new s.ByteBuffer(v.value));
					    u.log("rpc.get",s1.show(),s2.show());
					}
				       })(maybeR);
			    }
			    ,function(e) {u.error("rpc.get",e);}
			);
		    }
		    ,function(e) {u.error("rpc.put",e);}
		);
	};

	function testValue(v,exp,ps) {
	    v.value(ps).then(
		function (o) {
		    u.assert(o.equal(exp),"Bad result for " + v.qualName() + " got " + o.show() + " expected " +exp.show());
		    u.log("OK",v.qualName(),o.show());
		}
		,function(e) {u.error(v.qualName(),e);}
	    );
	};

	function testValues() {
	    /*testValue(t.aChar,s.char('q'));
	    testValue(t.aUnit,s.unit);
	    testValue(t.aInt,s.int64(1));
	    testValue(t.aWord8,s.word8(123));
	    testValue(t.aWord32,s.word32(1234));
	    testValue(t.aFloat,s.float(-12.34000015258789)); // NOTE: Approx. value
	    testValue(t.aDouble,s.double(-12.34));
	    
	    testValue(t.aByteString,s.bytes([32,45]));
	    testValue(t.aTuple,s.tuple([s.string("abc"),s.tuple([s.float(-17),s.string("def")])]));
	    testValue(t.three,new t.Price(s.double(3.33),new t.GBP()));
	    testValue(t.aEither,new t.Left(s.string("abc")));
	    testValue(t.aEither2,new t.Right(s.int64(34)));*/
	    //testValue(t.f1,s.list([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377].map(function (i) {return s.int64(i);})));
	    testValue(t.initFib,s.list([0,1,1,2,3].map(function (i) {return s.int64(i);})),[s.int64(50)]);
	    //testValue(t.addOne,s.int64(33),[s.int64(32)]);
	    //testValue(t.io1,s.int64(11));
	    //testValue(t.nums,s.list([1,2,3].map(function (i) {return s.int32(i);})));
	    //testValue(t.primes,s.list([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377].map(function (i) {return s.int64(i);})));
	};

	function testEval(o) {
	    t.aChar.value().then(
		function (o) {
		    u.log("aChar",o);
		    u.assert('q'==o,"Bad result");
		}
		,function(e) {u.error("aChar",e);}
	    );
	};

	function testDecodeResult() {
	    u.log("Test.Test.aChar",t.aChar.decode().show());
	    //u.log("Test.Hash_1.ab",decodeValue(quid2.module.Test.Hash_1.ab));
	};

	quid2.connection(g2).then(
	    function (o) {
		u.log("CONNECTED",o);
		//testRPC(o);
		//testEval(o);
		//testDecodeResult();
		testValues();
	    }
	    ,function(e) {u.error("UNCONNECTED",e);});
    };

    return test;
})();
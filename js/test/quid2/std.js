goog.provide('test.quid2.std');
goog.require('quid2.std');
goog.require('quid2.util');
goog.require('quid2.module.Test.Test.API');
goog.require('quid2.module.Service.Org.Quid2.Language.QQ.API');
goog.require('quid2.module.Network.Base.API');

//goog.require('quid2.module.Test.Hash_1');

/*
TODO: write tests:
-- connect to system, evaluate pi constant and display the result.
-- same with infinite pi 

Functionality:
* Represent the quid2 data model in JavaScript.
  ** Return full data-type equivalent source code (as we do for haskell)
    ++ easier to debug
    ++ can be referred to directly, by name in user source code.
    -- more verbose?
    -- many different representations are possible, which one to adopt?
  ** Return a json or binary representation of data type that is then converted into a generic data type (current solution, using json).
  ** Convert to javascript using fay (lazy,modules,haskell-subset)
  ** Convert to js using TypeScript (does not support algebraic types, has modules).

* De(serialise) data

Client/server protocol:
elm: signal based?

Representing algebric types in js:
elm: ["Tuple2",a,b]

fay: a class per constructor

quid2: a compact json representation converted in a DataType object and linked at the appropriate quid2.module.Quid2.HRT.Network.Hash_5bed7ad0c99f48527b668dfeb3ac6ead784a48f94f011f40b8e874879a181e1bplace in a module hierarchy. 

UI libraries:
google closure: current
http://angularjs.org/
http://emberjs.com/
directly in haskell via fay (see yesod).
*/


/**
data Type name
     = 
   0    TyDecl name
   1  | TyVar Variable   -- ^ type variable  
   2  | TyApp (Type name) [Type name] -- ^ named type or type constructor  
   3  | TyFun          -- ^ function type (can this be applied to more than 2 types?)      
   4  | TyTuple Word8  -- ^ tuple type, the parameter specifies the type constructor arity: TyTyuple 3 == (,,) 
   5  | TyList         -- ^ list type constructor 
   6  | TyIO           -- ^ Other primitime types    
   7  | TyUnit         
   8  | TyChar
   9  | TyWord8 
   10 | TyWord16 | TyWord32 | TyWord64 
     | TyInt8 | TyInt16 | TyInt32 | TyInt64
     | TyFloat | TyDouble
     | TyInteger

data InternalAbsName =
  InternalName QualName  -- Reference to a data type in the same recursive group. ??? Are these necessarily in the same module and therefore might be stored as unqualified names?
  | ExternalName AbsName -- A decl in a group of mutually recursive definitions.
  deriving (Eq,Ord,Show,Read,Typeable,Serialize)

data AbsName =
  AbsName (Ref.Ref (DataDecl InternalAbsName)) 
  | AbsNamePart (Ref.Ref [DataDecl InternalAbsName]) Int -- A decl in a group of mutually recursive definitions.
  deriving (Eq,Ord,Show,Read,Typeable,Serialize)

data Ref a = Verb String -- Verbatim.
           | Hash String deriving (Show,Read,Eq,Ord,Class.Serialize.Serialize)

**/
test.quid2.std = (function () {
    var s = quid2.std;
    var u = quid2.util;
    //var p = quid2.primitive.value;
    var l = quid2.module.Test.Test.API;
    var t = quid2.module.Service.Org.Quid2.Language.QQ.API;
    var d = quid2.module.Network.Base.API;
    var ts = quid2.module.Test.Test.API;

    function testFold() {
	// data Tree a = Leaf a | Node (Tree a) (Tree a)
	var tree1 = new ts.Node(new ts.Leaf(s.word8(11))
				,new ts.Node(new ts.Leaf(s.word8(22))
					     ,new ts.Leaf(s.word8(33))));

	var treeDepth = s.fold({Leaf:1,Node:function (l,r) {return Math.max(l,r)+1;}});
	u.assert(treeDepth(tree1)==3,"failed treeDepth");

	var treeSum = s.fold({Leaf:function (v) {return v.value;}
			      ,Node:function (l,r) {return l+r;}
			     });
	u.log(treeSum(tree1));
	u.assert(treeSum(tree1)==66,"failed treeSum");


// Add back these examples
/*
	var listLength = s.fold({N:0,C:function (h,t) {return 1+t;}});
	var listElems = s.fold({N:[],C:function (h,t) {
	    t.push(h);
	    return t;
	}});

	var l1 = new l.C(s.word8(22),new l.C(s.word8(11),new l.N()))
	u.log(listLength(l1),s.list(listElems(l1)).show());
*/
/*
	var serialize = s.fold({
	    Elem: function(name, attrs, children) {return "<" + name + attrs + ">" + children + "</" + name + ">";}
	    ,Text: function(s) {return s;}
	    ,Attr: function(name, value) {return " " + name + "='" + value + "'";}
	    ,C: function(h, t) {return h + t}
	    ,N: ""
	});

	var xml = new n.Elem("test", new l.N(), new l.C(new n.Elem("hoi", new l.C(new a.Attr("href", "w3future.com"), new l.N()), new l.N()), new l.C(new n.Text(" bla "), new l.C(new n.Elem("doei", new l.N(), new l.N()), new l.N()))));
	u.log(serialize(xml));
*/
    };

    function testEncodeDecode() { 	

	// Meta decode, using Type.
	function testED(t,v) {
	    var b = s.encodedAsBytes(v);
	    var d = s.decode(t,b);
	    u.log("V",v.show(),"ENCODED",b,"DECODED",d.show());
	    u.assert(v.equal(d),"failed test");
	};
	
	function testDecode(t,b) {
	    var d = s.decode(t,b);
	    u.log("DECODED",d.show());
	};

	testED(new t.TyChar(),s.char('F'));
	testED(new t.TyWord8(),s.word8(1));
	testED(new t.TyWord16(),s.word16(1));
	testED(new t.TyWord32(),s.word32(1));
	testED(new t.TyWord64(),s.word64(2));
	testED(new t.TyWord64(),s.word64(2222222222));
	testED(new t.TyInt8(),s.int8(1));
	testED(new t.TyInt16(),s.int16(1));
	testED(new t.TyInt32(),s.int32(1));
	testED(new t.TyInt64(),s.int64(2));
	testED(new t.TyInt64(),s.int64(2222222222));
	testED(new t.TyInt8(),s.int8(-1));
	testED(new t.TyInt16(),s.int16(-1));
	testED(new t.TyInt32(),s.int32(-1));
	testED(new t.TyInt64(),s.int64(-2));
	testED(new t.TyInt64(),s.int64(-2222222222));
	testED(new t.TyFloat(),s.float(-22222));
	testED(new t.TyDouble(),s.double(-2222222222));
	testED(new t.TyDecl(d_s),new d.Email("john@somewhere.com"));

	var l1 = new l.C(s.word8(11),new l.C(s.word8(22),new l.N()));
	var li1 = new s.list([s.int16(1),s.int16(-1),s.int16(22),s.int16(-22)]);

	testED(new t.TyApp(new t.TyDecl("Test.Hash_2a6ed5dbbf460a28d5afa4d19a549c9f35e563ac9a21f6fa47ba472f20bed243.L"),[new t.TyWord8()]),l1);
	testED(new t.TyApp(new t.TyList(),[new t.TyInt16()]),li1);
	testED(new t.TyApp(new t.TyList(),[new t.TyChar()]),new s.list([s.char('A'),s.char('B'),s.char('C'),s.char('Z')]));
	testED(new t.TyApp(new t.TyTuple(2),[new t.TyChar(),new t.TyWord32()]),s.tuple([s.char('G'),s.word32(9999)]));

	// Direct decode
	u.log("L2",quid2.module.Test.Hash_2a6ed5dbbf460a28d5afa4d19a549c9f35e563ac9a21f6fa47ba472f20bed243.L$.decode([s.Word8.decode])(new s.ByteBuffer(s.encodedAsBytes(l1))).show());

	// var tt = new t.TyApp(new t.TyDecl("Service.Org.Quid2.Language.QQ.Hash_89ce6608df8648d95c375e5b452662e5f8eb4024477d370c9624620e8d92e9df.Type"),[new t.TyDecl("Service.Org.Quid2.Language.QQ.Hash_05e6a5cc7b59a539d4e65da2434346c8f6a6f9fcf63dae555a7db8d7f87a98b1.AbsName")]);
	var tt = new t.TyApp(new t.TyDecl("Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369.Type"),[new t.TyDecl("Service.Org.Quid2.Language.QQ.Hash_20ee404c498d46c91318301b2829de7be66f73436a916263772975b1c314ab00.QualName")]);

	//testDecode(tt,quid2.module.Test.Hash_1.aChar);
	testDecode(tt,ts.aInt);
	//testDecode(tt,quid2.module.Test.Hash_1.ab0);
	//testDecode(tt,quid2.module.Test.Hash_1.ab);
	//return new r.R(33);
	//return new r.R('a');
    };

    /*function decodeValue(val) {
	return t.Type$.decode([quid2.module.Service.Org.Quid2.Language.QQ.API.AbsName$.decode])(new s.ByteBuffer(val.btype));
    };

    function testDecodeResult() {
	u.log("Test.Test.aChar",l.aChar.decode().show());
	//u.log("Test.Hash_1.ab",decodeValue(quid2.module.Test.Hash_1.ab));
    };*/

    function test() {
	// TypedValue TyChar 'a' == 
	//u.log(quid2.std.test.decodeTypedValue([8,97])); 
	//u.log(quid2.std.test.decodeType([8])); 
	//testType();
	//testDecode();
	
	testFold();
	//testEncodeDecode();
	//testDecodeResult();
    };

    return test;
})();
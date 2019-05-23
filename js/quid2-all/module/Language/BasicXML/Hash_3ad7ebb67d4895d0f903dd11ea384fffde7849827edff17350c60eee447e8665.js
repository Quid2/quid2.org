goog.provide('quid2.module.Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665');
goog.require('quid2.std');

quid2.module.Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665 = (function () {
var s = quid2.std;
/*
data Node  where 
  TextNode :: [Char] -> Node
  Comment :: [Char] -> Node
  Element :: [Char] -> [([Char],[Char])] -> [Node] -> Node
*/

function TextNode() {this.value=[s.string(arguments[0])];};
s.asCons(TextNode,"TextNode",0,function (bs) {return new TextNode(s.String.decode(bs));});

function Comment() {this.value=[s.string(arguments[0])];};
s.asCons(Comment,"Comment",1,function (bs) {return new Comment(s.String.decode(bs));});

function Element() {this.value=[s.string(arguments[0]),s.list(arguments[1]),s.list(arguments[2])];};
s.asCons(Element,"Element",2,function (bs) {return new Element(s.String.decode(bs),new s.List$(new s.Tuple$(s.String,s.String)).decode(bs),new s.List$(Node$).decode(bs));});


var Node$={value:[]};
s.asType0(Node$,"Node$",[TextNode,Comment,Element]);



return s.defs("Language.BasicXML.Hash_3ad7ebb67d4895d0f903dd11ea384fffde7849827edff17350c60eee447e8665",{},{Node$:Node$,TextNode:TextNode,Comment:Comment,Element:Element});
})();

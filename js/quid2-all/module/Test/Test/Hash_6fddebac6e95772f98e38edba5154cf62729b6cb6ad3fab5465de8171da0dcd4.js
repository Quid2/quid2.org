goog.provide('quid2.module.Test.Test.Hash_6fddebac6e95772f98e38edba5154cf62729b6cb6ad3fab5465de8171da0dcd4');
goog.require('quid2.std');

quid2.module.Test.Test.Hash_6fddebac6e95772f98e38edba5154cf62729b6cb6ad3fab5465de8171da0dcd4 = (function () {
var s = quid2.std;
/*
data Tree a where 
  Leaf :: a -> Tree a
  Node :: Tree a -> Tree a -> Tree a
*/

function Leaf() {this.value=[arguments[0]];};
s.asCons(Leaf,"Leaf",0,function (bs,types) {return new Leaf(types[0].decode(bs));});

function Node() {this.value=[arguments[0],arguments[1]];};
s.asCons(Node,"Node",1,function (bs,types) {return new Node(new Tree$(types[0]).decode(bs),new Tree$(types[0]).decode(bs));});


function Tree$() {this.value=[arguments[0]];};
s.asType(Tree$,"Tree$",[Leaf,Node]);



return s.defs("Test.Test.Hash_6fddebac6e95772f98e38edba5154cf62729b6cb6ad3fab5465de8171da0dcd4",{},{Tree$:Tree$,Leaf:Leaf,Node:Node});
})();

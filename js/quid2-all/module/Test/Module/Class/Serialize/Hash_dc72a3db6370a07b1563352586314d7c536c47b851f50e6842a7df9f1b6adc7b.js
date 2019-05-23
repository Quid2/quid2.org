goog.provide('quid2.module.Test.Module.Class.Serialize.Hash_dc72a3db6370a07b1563352586314d7c536c47b851f50e6842a7df9f1b6adc7b');
goog.require('quid2.std');

quid2.module.Test.Module.Class.Serialize.Hash_dc72a3db6370a07b1563352586314d7c536c47b851f50e6842a7df9f1b6adc7b = (function () {
var s = quid2.std;
/*
data Test  where 
  TestCase :: [Char] -> Test
  TestList :: [Test] -> Test
  TestLabel :: [Char] -> Test -> Test
*/

function TestCase() {this.value=[s.string(arguments[0])];};
s.asCons(TestCase,"TestCase",0,function (bs) {return new TestCase(s.String.decode(bs));});

function TestList() {this.value=[s.list(arguments[0])];};
s.asCons(TestList,"TestList",1,function (bs) {return new TestList(new s.List$(Test$).decode(bs));});

function TestLabel() {this.value=[s.string(arguments[0]),arguments[1]];};
s.asCons(TestLabel,"TestLabel",2,function (bs) {return new TestLabel(s.String.decode(bs),Test$.decode(bs));});


var Test$={value:[]};
s.asType0(Test$,"Test$",[TestCase,TestList,TestLabel]);



return s.defs("Test.Module.Class.Serialize.Hash_dc72a3db6370a07b1563352586314d7c536c47b851f50e6842a7df9f1b6adc7b",{},{Test$:Test$,TestCase:TestCase,TestList:TestList,TestLabel:TestLabel});
})();

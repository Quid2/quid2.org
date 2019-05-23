goog.provide('quid2.module.Service.Com.Yahoo.Finance.Quote.Hash_4550d758490c21fc6c037dbbdc31a95569bd292e5d7398eb7aaa19aacfecc4b8');
goog.require('quid2.std');

quid2.module.Service.Com.Yahoo.Finance.Quote.Hash_4550d758490c21fc6c037dbbdc31a95569bd292e5d7398eb7aaa19aacfecc4b8 = (function () {
var s = quid2.std;
/*
data QuoteFrequency  where 
  Daily :: QuoteFrequency
  Weekly :: QuoteFrequency
  Monthly :: QuoteFrequency
  Dividend :: QuoteFrequency
*/

function Daily() {this.value=[];};
s.asCons(Daily,"Daily",0,function (bs) {return new Daily();});

function Weekly() {this.value=[];};
s.asCons(Weekly,"Weekly",1,function (bs) {return new Weekly();});

function Monthly() {this.value=[];};
s.asCons(Monthly,"Monthly",2,function (bs) {return new Monthly();});

function Dividend() {this.value=[];};
s.asCons(Dividend,"Dividend",3,function (bs) {return new Dividend();});


var QuoteFrequency$={value:[]};
s.asType0(QuoteFrequency$,"QuoteFrequency$",[Daily,Weekly,Monthly,Dividend]);



return s.defs("Service.Com.Yahoo.Finance.Quote.Hash_4550d758490c21fc6c037dbbdc31a95569bd292e5d7398eb7aaa19aacfecc4b8",{},{QuoteFrequency$:QuoteFrequency$,Daily:Daily,Weekly:Weekly,Monthly:Monthly,Dividend:Dividend});
})();

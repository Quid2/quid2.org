goog.provide('quid2.module.Finance.Market.Hash_4bc81da2711f85ced2cfd3e8b32c79277a83fa5799aa89e933a4743a2d1a57bd');
goog.require('quid2.std');

quid2.module.Finance.Market.Hash_4bc81da2711f85ced2cfd3e8b32c79277a83fa5799aa89e933a4743a2d1a57bd = (function () {
var s = quid2.std;
/*
data Market  where 
  NSQ :: Market
  NYQ :: Market
  LSE :: Market
  BER :: Market
  MCE :: Market
  PAR :: Market
  AMS :: Market
  LIS :: Market
  OMX :: Market
  BIT :: Market
  VTX :: Market
*/

function NSQ() {this.value=[];};
s.asCons(NSQ,"NSQ",0,function (bs) {return new NSQ();});

function NYQ() {this.value=[];};
s.asCons(NYQ,"NYQ",1,function (bs) {return new NYQ();});

function LSE() {this.value=[];};
s.asCons(LSE,"LSE",2,function (bs) {return new LSE();});

function BER() {this.value=[];};
s.asCons(BER,"BER",3,function (bs) {return new BER();});

function MCE() {this.value=[];};
s.asCons(MCE,"MCE",4,function (bs) {return new MCE();});

function PAR() {this.value=[];};
s.asCons(PAR,"PAR",5,function (bs) {return new PAR();});

function AMS() {this.value=[];};
s.asCons(AMS,"AMS",6,function (bs) {return new AMS();});

function LIS() {this.value=[];};
s.asCons(LIS,"LIS",7,function (bs) {return new LIS();});

function OMX() {this.value=[];};
s.asCons(OMX,"OMX",8,function (bs) {return new OMX();});

function BIT() {this.value=[];};
s.asCons(BIT,"BIT",9,function (bs) {return new BIT();});

function VTX() {this.value=[];};
s.asCons(VTX,"VTX",10,function (bs) {return new VTX();});


var Market$={value:[]};
s.asType0(Market$,"Market$",[NSQ,NYQ,LSE,BER,MCE,PAR,AMS,LIS,OMX,BIT,VTX]);



return s.defs("Finance.Market.Hash_4bc81da2711f85ced2cfd3e8b32c79277a83fa5799aa89e933a4743a2d1a57bd",{},{Market$:Market$,NSQ:NSQ,NYQ:NYQ,LSE:LSE,BER:BER,MCE:MCE,PAR:PAR,AMS:AMS,LIS:LIS,OMX:OMX,BIT:BIT,VTX:VTX});
})();

goog.provide('quid2.Rx');
goog.provide('Rx');
goog.require('quid2');
goog.require('quid2.Deferred');
goog.require('goog.structs.Queue');
goog.require('goog.style');
goog.require('goog.math.Size');
goog.require('goog.functions');

/*
 Copyright (c) Microsoft Corporation.  All rights reserved.
 This code is licensed by Microsoft Corporation under the terms
 of the MICROSOFT REACTIVE EXTENSIONS FOR JAVASCRIPT AND .NET LIBRARIES License.
 See http://go.microsoft.com/fwlink/?LinkID=220762.
*/
// FILE rx.min.js
(function(D,t){var k,M=function(){},H=function(){return(new Date).getTime()},T=function(a,b){return a===b},y=function(a){return a},U=function(a){return a.toString()},V=Object.prototype.hasOwnProperty,m=function(a,b){function c(){this.constructor=a}for(var d in b)"prototype"!==d&&V.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.base=b.prototype;return a},E=function(a,b){for(var c in b)"prototype"!==c&&V.call(b,c)&&(a[c]=b[c])},v=Array.prototype.slice;"undefined"!==typeof exports?
(k=module.exports,k.Internals={}):k=D.Rx={Internals:{}};k.VERSION="2.0.20327";var la=function(a,b){return i(function(c){return new o(b.getDisposable(),a.subscribe(c))})},N=function(a,b,c){return i(function(d){var e=new r,f=new r,d=c(d,e,f);e.disposable(a.materialize().select(function(b){return{switchValue:function(a){return a(b)}}}).subscribe(d));f.disposable(b.materialize().select(function(b){return{switchValue:function(a,c){return c(b)}}}).subscribe(d));return new o(e,f)})},C=function(a,b){for(var c=
Object(this),d=0,e=c.length>>>0;d<e;d++)if(!a.call(b,c[d],d,c))return!1;return!0},W=function(a,b){for(var c=[],d,e=Object(this),f=0,h=e.length>>>0;f<h;f++)d=e[f],a.call(b,d,f,e)&&c.push(d);return c},ma=function(a,b){for(var c=[],d=Object(this),e=0,f=d.length>>>0;e<f;e++)c.push(a.call(b,d[e],e,d));return c},F=function(a,b){return 1===a.length&&a[b]instanceof Array?a[b]:v.call(a)},s=k.Internals.List=function(){function a(b){this.comparer=b||T;this.length=0;this.items=[]}a.fromArray=function(b,c){var d=
new a(c);d.items=b.slice();d.length=b.length;return d};a.prototype.add=function(b){this.items[this.length++]=b};a.prototype.removeAt=function(b){if(0>b||b>=this.length)throw Error("Argument out of range");this.items.splice(b,1);this.length--};a.prototype.indexOf=function(b){for(var a=0,d=this.items.length;a<d;a++)if(this.comparer(b,this.items[a]))return a;return-1};a.prototype.remove=function(b){b=this.indexOf(b);if(-1===b)return!1;this.removeAt(b);return!0};a.prototype.clear=function(){this.items=
[];this.length=0};a.prototype.item=function(b,a){if(0>b||b>=count)throw Error("Argument out of range");if(a===t)return this.items[b];this.items[b]=a};a.prototype.toArray=function(){return this.items.slice(0)};a.prototype.contains=function(b){for(var a=0,d=this.items.length;a<d;a++)if(this.comparer(b,this.items[a]))return!0;return!1};return a}(),na=function(){function a(b,a){this.id=b;this.value=a}a.prototype.compareTo=function(b){var a=this.value.compareTo(b.value);0===a&&(a=this.id-b.id);return a};
return a}(),X=function(){function a(b){this.items=Array(b);this.length=0}a.prototype.isHigherPriority=function(b,a){return 0>this.items[b].compareTo(this.items[a])};a.prototype.percolate=function(b){var a,d;if(!(b>=this.length||0>b))if(a=b-1>>1,!(0>a||a===b)&&this.isHigherPriority(b,a))d=this.items[b],this.items[b]=this.items[a],this.items[a]=d,this.percolate(a)};a.prototype.heapify=function(b){var a,d,e;b===t&&(b=0);b>=this.length||0>b||(d=2*b+1,e=2*b+2,a=b,d<this.length&&this.isHigherPriority(d,
a)&&(a=d),e<this.length&&this.isHigherPriority(e,a)&&(a=e),a!==b&&(d=this.items[b],this.items[b]=this.items[a],this.items[a]=d,this.heapify(a)))};a.prototype.peek=function(){return this.items[0].value};a.prototype.removeAt=function(b){this.items[b]=this.items[--this.length];delete this.items[this.length];this.heapify();if(this.length<this.items.length>>2)for(var b=this.items,a=this.items=Array(this.items.length>>1),d=this.length;0<d;)a[d+0-1]=b[d+0-1],d--};a.prototype.dequeue=function(){var b=this.peek();
this.removeAt(0);return b};a.prototype.enqueue=function(b){var c;if(this.length>=this.items.length){c=this.items;for(var d=this.items=Array(2*this.items.length),e=c.length;0<e;)d[e+0-1]=c[e+0-1],e--}c=this.length++;this.items[c]=new na(a.count++,b);this.percolate(c)};a.prototype.remove=function(b){for(var a=0;a<this.length;a++)if(this.items[a].value===b)return this.removeAt(a),!0;return!1};a.count=0;return a}(),o=k.CompositeDisposable=function(){function a(){var b=F(arguments,0);this.disposables=
s.fromArray(b);this.isDisposed=!1;this.length=this.disposables.length}a.prototype.add=function(b){this.isDisposed?b.dispose():(this.disposables.add(b),this.length++)};a.prototype.remove=function(b){var a=!1;this.isDisposed||(a=this.disposables.remove(b),this.length--);a&&b.dispose();return a};a.prototype.dispose=function(){var b;if(!this.isDisposed)this.isDisposed=!0,b=this.disposables.toArray(),this.disposables.clear(),this.length=0;if(b)for(var a=0,d=b.length;a<d;a++)b[a].dispose()};a.prototype.clear=
function(){var b=this.disposables.toArray();this.disposables.clear();for(var a=this.length=0,d=b.length;a<d;a++)b[a].dispose()};a.prototype.contains=function(b){return this.disposables.contains(b)};a.prototype.toArray=function(){return this.disposables.toArray()};return a}(),I=k.Disposable=function(){function a(b){this.isDisposed=!1;this.action=b}a.prototype.dispose=function(){if(!this.isDisposed)this.action(),this.isDisposed=!0};return a}(),w=I.create=function(a){return new I(a)},p=I.empty=new I(function(){}),
r=k.SingleAssignmentDisposable=function(){function a(){this.isDisposed=!1;this.current=null}a.prototype.disposable=function(b){return!b?this.getDisposable():this.setDisposable(b)};a.prototype.getDisposable=function(){return this.current};a.prototype.setDisposable=function(b){if(null!==this.current)throw Error("Disposable has already been assigned");var a=this.isDisposed;if(!a)this.current=b;a&&null!==b&&b.dispose()};a.prototype.dispose=function(){var b=null;if(!this.isDisposed)this.isDisposed=!0,
b=this.current,this.current=null;null!==b&&b.dispose()};return a}(),z=k.SerialDisposable=function(){function a(){this.isDisposed=!1;this.current=null}a.prototype.getDisposable=function(){return this.current};a.prototype.setDisposable=function(b){var a=this.isDisposed,d=null;if(!a)d=this.current,this.current=b;null!==d&&d.dispose();a&&null!==b&&b.dispose()};a.prototype.disposable=function(b){if(b)this.setDisposable(b);else return this.getDisposable()};a.prototype.dispose=function(){var b=null;if(!this.isDisposed)this.isDisposed=
!0,b=this.current,this.current=null;null!==b&&b.dispose()};return a}(),Y=k.RefCountDisposable=function(){function a(b){this.underlyingDisposable=b;this.isPrimaryDisposed=this.isDisposed=!1;this.count=0}a.prototype.dispose=function(){var b=!1;if(!this.isDisposed&&!this.isPrimaryDisposed&&(this.isPrimaryDisposed=!0,0===this.count))b=this.isDisposed=!0;b&&this.underlyingDisposable.dispose()};a.prototype.getDisposable=function(){return this.isDisposed?p:function(b){b.count++;return{isInnerDisposed:!1,
dispose:function(){var a=!1;if(!b.isDisposed&&!this.isInnerDisposed&&(this.isInnerDisposed=!0,b.count--,0===b.count&&b.isPrimaryDisposed))a=b.isUnderlyingDisposed=!0;a&&b.underlyingDisposable.dispose()}}}(this)};return a}(),oa=function(){function a(b,a){this.scheduler=b;this.disposable=a;this.isDisposed=!1}a.prototype.dispose=function(){var b=this;this.scheduler.schedule(function(){if(!b.isDisposed)b.isDisposed=!0,b.disposable.dispose()})};return a}(),Z=function(){function a(b,a,d,e,f){this.scheduler=
b;this.state=a;this.action=d;this.dueTime=e;this.comparer=f||function(b,a){return b-a};this.disposable=new r}a.prototype.invoke=function(){return this.disposable.disposable(this.invokeCore())};a.prototype.compareTo=function(b){return this.comparer(this.dueTime,b.dueTime)};a.prototype.isCancelled=function(){return this.disposable.isDisposed};a.prototype.invokeCore=function(){return this.action(this.scheduler,this.state)};return a}(),q=k.Scheduler=function(){function a(b,a,c,d){this.now=b;this._schedule=
a;this._scheduleRelative=c;this._scheduleAbsolute=d}var b=function(b,a){var c=a.first,d=a.second,e=new o,l=function(a){d(a,function(a){var c=!1,d=!1,h=b.scheduleWithState(a,function(a,b){c?e.remove(h):d=!0;l(b);return p});d||(e.add(h),c=!0)})};l(c);return e},c=function(a,b){var c=b.first,d=b.second,e=new o,l=function(b){d(b,function(b,c){var d,h,B;B=h=!1;d=a.scheduleWithRelativeAndState(b,c,function(b,a){h?e.remove(d):B=!0;l(a);return p});B||(e.add(d),h=!0)})};l(c);return e},d=function(b,a){var c=
a.first,d=a.second,e=new o,l=function(a){d(a,function(a,c){var d=!1,h=!1,B=b.scheduleWithAbsoluteAndState(a,c,function(a,b){d?e.remove(B):h=!0;l(b);return p});h||(e.add(B),d=!0)})};l(c);return e},e=function(a,b){b();return p};a.prototype.schedule=function(a){return this._schedule(a,e)};a.prototype.scheduleWithState=function(a,b){return this._schedule(a,b)};a.prototype.scheduleWithRelative=function(a,b){return this._scheduleRelative(b,a,e)};a.prototype.scheduleWithRelativeAndState=function(a,b,c){return this._scheduleRelative(a,
b,c)};a.prototype.scheduleWithAbsolute=function(a,b){return this._scheduleAbsolute(b,a,e)};a.prototype.scheduleWithAbsoluteAndState=function(a,b,c){return this._scheduleAbsolute(a,b,c)};a.prototype.scheduleRecursive=function(a){return this.scheduleRecursiveWithState(a,function(a,b){a(function(){b(a)})})};a.prototype.scheduleRecursiveWithState=function(a,c){return this.scheduleWithState({first:a,second:c},function(a,c){return b(a,c)})};a.prototype.scheduleRecursiveWithRelative=function(a,b){return this.scheduleRecursiveWithRelativeAndState(b,
a,function(a,b){a(function(c){b(a,c)})})};a.prototype.scheduleRecursiveWithRelativeAndState=function(a,b,d){return this._scheduleRelative({first:a,second:d},b,function(a,b){return c(a,b)})};a.prototype.scheduleRecursiveWithAbsolute=function(a,b){return this.scheduleRecursiveWithAbsoluteAndState(b,a,function(a,b){a(function(c){b(a,c)})})};a.prototype.scheduleRecursiveWithAbsoluteAndState=function(a,b,c){return this._scheduleAbsolute({first:a,second:c},b,function(a,b){return d(a,b)})};a.now=H;a.normalize=
function(a){0>a&&(a=0);return a};return a}(),g=function(){function a(){var b=this;a.base.constructor.call(this,H,function(a,d){return d(b,a)},function(a,d,e){for(;0<q.normalize(d););return e(b,a)},function(a,d,e){return b.scheduleWithRelativeAndState(a,d-b.now(),e)})}m(a,q);return a}(),x=q.Immediate=new g,pa=function(){function a(){J.queue=new X(4)}a.prototype.dispose=function(){J.queue=null};a.prototype.run=function(){for(var a,c=J.queue;0<c.length;)if(a=c.dequeue(),!a.isCancelled()){for(;0<a.dueTime-
q.now(););a.isCancelled()||a.invoke()}};return a}(),J=function(){function a(){var b=this;a.base.constructor.call(this,H,function(a,d){return b.scheduleWithRelativeAndState(a,0,d)},function(c,d,e){var f=b.now()+q.normalize(d),d=a.queue,c=new Z(b,c,e,f);if(null===d){e=new pa;try{a.queue.enqueue(c),e.run()}finally{e.dispose()}}else d.enqueue(c);return c.disposable},function(a,d,e){return b.scheduleWithRelativeAndState(a,d-b.now(),e)})}m(a,q);a.prototype.scheduleRequired=function(){return null===a.queue};
a.prototype.ensureTrampoline=function(a){return this.scheduleRequired()?this.schedule(a):a()};a.queue=null;return a}(),A=q.CurrentThread=new J;k.VirtualTimeScheduler=function(){function a(b,c){var d=this;this.clock=b;this.comparer=c;this.isEnabled=!1;a.base.constructor.call(this,function(){return d.toDateTimeOffset(d.clock)},function(a,b){return d.scheduleAbsolute(a,d.clock,b)},function(a,b,c){return d.scheduleRelative(a,d.toRelative(b),c)},function(a,b,c){return d.scheduleRelative(a,d.toRelative(b-
d.now()),c)});this.queue=new X(1024)}m(a,q);a.prototype.scheduleRelative=function(a,c,d){c=this.add(this.clock,c);return this.scheduleAbsolute(a,c,d)};a.prototype.start=function(){var a;if(!this.isEnabled){this.isEnabled=!0;do if(a=this.getNext(),null!==a){if(0<this.comparer(a.dueTime,this.clock))this.clock=a.dueTime;a.invoke()}else this.isEnabled=!1;while(this.isEnabled)}};a.prototype.stop=function(){return this.isEnabled=!1};a.prototype.advanceTo=function(a){var c;if(0<=this.comparer(this.clock,
a))throw Error("Argument out of range");if(!this.isEnabled){this.isEnabled=!0;do if(c=this.getNext(),null!==c&&0>=this.comparer(c.dueTime,a)){if(0<this.comparer(c.dueTime,this.clock))this.clock=c.dueTime;c.invoke()}else this.isEnabled=!1;while(this.isEnabled);return this.clock=a}};a.prototype.advanceBy=function(a){a=this.add(this.clock,a);if(0<=this.comparer(this.clock,a))throw Error("Argument out of range");return this.advanceTo(a)};a.prototype.getNext=function(){for(var a;0<this.queue.length;)if(a=
this.queue.peek(),a.isCancelled())this.queue.dequeue();else return a;return null};a.prototype.scheduleAbsolute=function(a,c,d){var e=this,f=new Z(e,a,function(a,b){e.queue.remove(f);return d(a,b)},c,e.comparer);e.queue.enqueue(f);return f.disposable};return a}();var g=function(){function a(){var b=this;a.base.constructor.call(this,H,function(a,d){var e=D.setTimeout(function(){d(b,a)},0);return w(function(){D.clearTimeout(e)})},function(a,d,e){var f,d=q.normalize(d);f=D.setTimeout(function(){e(b,a)},
d);return w(function(){D.clearTimeout(f)})},function(a,d,e){return b.scheduleWithRelativeAndState(a,d-b.now(),e)})}m(a,q);return a}(),qa=q.Timeout=new g,n=k.Notification=function(){function a(){}a.prototype.accept=function(a,c,d){return 1<arguments.length||"function"===typeof a?this._accept(a,c,d):this._acceptObservable(a)};a.prototype.toObservable=function(a){var c=this,a=a||q.Immediate;return i(function(d){return a.schedule(function(){c._acceptObservable(d);if("N"===c.kind)d.onCompleted()})})};
a.prototype.hasValue=!1;a.prototype.equals=function(a){return this.toString()===(a===t||null===a?"":a.toString())};return a}();n.createOnNext=function(a){var b=new n;b.value=a;b.hasValue=!0;b.kind="N";b._accept=function(a){return a(this.value)};b._acceptObservable=function(a){return a.onNext(this.value)};b.toString=function(){return"OnNext("+this.value+")"};return b};n.createOnError=function(a){var b=new n;b.exception=a;b.kind="E";b._accept=function(a,b){return b(this.exception)};b._acceptObservable=
function(a){return a.onError(this.exception)};b.toString=function(){return"OnError("+this.exception+")"};return b};n.createOnCompleted=function(){var a=new n;a.kind="C";a._accept=function(a,c,d){return d()};a._acceptObservable=function(a){return a.onCompleted()};a.toString=function(){return"OnCompleted()"};return a};var aa=k.Internals.Enumerator=function(a,b,c){this.moveNext=a;this.getCurrent=b;this.dispose=c},ba=aa.create=function(a,b,c){var d=!1;c||(c=function(){});return new aa(function(){if(d)return!1;
var b=a();b||(d=!0,c());return b},function(){return b()},function(){d||(c(),d=!0)})},G=k.Internals.Enumerable=function(a){this.getEnumerator=a},g=G.prototype;g.concat=function(){var a=this;return i(function(b){var c,d=a.getEnumerator(),e=!1,f=new z;c=x.scheduleRecursive(function(a){var c,g,$=!1;if(!e){try{($=d.moveNext())?c=d.getCurrent():d.dispose()}catch(l){g=l,d.dispose()}if(void 0!==g)b.onError(g);else if($)g=new r,f.disposable(g),g.disposable(c.subscribe(function(a){b.onNext(a)},function(a){b.onError(a)},
function(){a()}));else b.onCompleted()}});return new o(f,c,w(function(){e=!0;d.dispose()}))})};g.catchException=function(){var a=this;return i(function(b){var c,d=a.getEnumerator(),e=!1,f,h;f=new z;c=x.scheduleRecursive(function(a){var c,g,l;l=!1;if(!e){try{(l=d.moveNext())&&(c=d.getCurrent())}catch(i){g=i}if(void 0!==g)b.onError(g);else if(l)g=new r,f.disposable(g),g.disposable(c.subscribe(function(a){b.onNext(a)},function(b){h=b;a()},function(){b.onCompleted()}));else if(void 0!==h)b.onError(h);
else b.onCompleted()}});return new o(f,c,w(function(){e=!0}))})};var ca=G.repeat=function(a,b){b===t&&(b=-1);return new G(function(){var c,d=b;return ba(function(){if(0===d)return!1;0<d&&d--;c=a;return!0},function(){return c})})},O=G.forEach=function(a,b){b||(b=function(a){return a});return new G(function(){var c,d=-1;return ba(function(){return++d<a.length?(c=b(a[d],d),!0):!1},function(){return c})})},u=k.Observer=function(){},P=k.Internals.AbstractObserver=function(){function a(){this.isStopped=
!1}m(a,u);a.prototype.onNext=function(a){this.isStopped||this.next(a)};a.prototype.onError=function(a){if(!this.isStopped)this.isStopped=!0,this.error(a)};a.prototype.onCompleted=function(){if(!this.isStopped)this.isStopped=!0,this.completed()};a.prototype.dispose=function(){this.isStopped=!0};return a}(),K=function(){function a(b,c,d){a.base.constructor.call(this);this._onNext=b;this._onError=c;this._onCompleted=d}m(a,P);a.prototype.next=function(a){this._onNext(a)};a.prototype.error=function(a){this._onError(a)};
a.prototype.completed=function(){this._onCompleted()};return a}(),Q=k.Internals.BinaryObserver=function(){function a(a,c){"function"===typeof a&&"function"===typeof c?(this.leftObserver=da(a),this.rightObserver=da(c)):(this.leftObserver=a,this.rightObserver=c)}m(a,u);a.prototype.onNext=function(a){var c=this;return a.switchValue(function(a){return a.accept(c.leftObserver)},function(a){return a.accept(c.rightObserver)})};a.prototype.onError=function(){};a.prototype.onCompleted=function(){};return a}(),
ea=function(){function a(a,c){this.scheduler=a;this.observer=c;this.hasFaulted=this.isAcquired=!1;this.queue=[];this.disposable=new z}m(a,P);a.prototype.ensureActive=function(){var a=!1,c=this;if(!this.hasFaulted&&0<this.queue.length)a=!this.isAcquired,this.isAcquired=!0;a&&this.disposable.disposable(this.scheduler.scheduleRecursive(function(a){var b;if(0<c.queue.length){b=c.queue.shift();try{b()}catch(f){throw c.queue=[],c.hasFaulted=!0,f;}a()}else c.isAcquired=!1}))};a.prototype.next=function(a){var c=
this;this.queue.push(function(){c.observer.onNext(a)})};a.prototype.error=function(a){var c=this;this.queue.push(function(){c.observer.onError(a)})};a.prototype.completed=function(){var a=this;this.queue.push(function(){a.observer.onCompleted()})};a.prototype.dispose=function(){a.base.dispose.call(this);this.disposable.dispose()};return a}(),ra=u.create=function(a,b,c){a||(a=M);b||(b=function(a){throw a;});c||(c=M);return new K(a,b,c)};u.fromNotifier=function(a){return new K(function(b){return a(n.createOnNext(b))},
function(b){return a(n.createOnError(b))},function(){return a(n.createOnCompleted())})};var da=function(a){return new K(function(b){a(n.createOnNext(b))},function(b){a(n.createOnError(b))},function(){a(n.createOnCompleted())})};u.prototype.toNotifier=function(){var a=this;return function(b){return b.accept(a)}};u.prototype.asObserver=function(){var a=this;return new K(function(b){return a.onNext(b)},function(b){return a.onError(b)},function(){return a.onCompleted()})};var j=k.Observable=function(){function a(){}
a.prototype.subscribe=function(a,c,d){return this._subscribe(0===arguments.length||1<arguments.length||"function"===typeof a?ra(a,c,d):a)};return a}(),g=j.prototype,ta=function(){function a(b){a.base.constructor.call(this);this._subscribe=function(a){var d=new sa(a);A.scheduleRequired()?A.schedule(function(){d.disposable(b(d))}):d.disposable(b(d));return d}}m(a,j);a.prototype._subscribe=function(a){return this._subscribe(a)};return a}(),sa=function(){function a(b){a.base.constructor.call(this);this.observer=
b;this.m=new r}m(a,P);a.prototype.disposable=function(a){return this.m.disposable(a)};a.prototype.next=function(a){this.observer.onNext(a)};a.prototype.error=function(a){this.observer.onError(a);this.m.dispose()};a.prototype.completed=function(){this.observer.onCompleted();this.m.dispose()};a.prototype.dispose=function(){a.base.dispose.call(this);this.m.dispose()};return a}(),fa=function(){function a(b,c,d){a.base.constructor.call(this);this.key=b;this.underlyingObservable=!d?c:i(function(a){return new o(d.getDisposable(),
c.subscribe(a))})}m(a,j);a.prototype._subscribe=function(a){return this.underlyingObservable.subscribe(a)};return a}(),ua=k.ConnectableObservable=function(){function a(a,c){var d=a.asObservable(),e=!1,f=null;this.connect=function(){e||(e=!0,f=new o(d.subscribe(c),w(function(){e=!1})));return f};this._subscribe=function(a){return c.subscribe(a)}}m(a,j);a.prototype.connect=function(){return this.connect()};a.prototype.refCount=function(){var a=null,c=0,d=this;return i(function(e){var f,h;c++;f=1===
c;h=d.subscribe(e);f&&(a=d.connect());return w(function(){h.dispose();c--;0===c&&a.dispose()})})};a.prototype._subscribe=function(a){return this._subscribe(a)};return a}(),R=function(){function a(a,c){this.subject=a;this.observer=c}a.prototype.dispose=function(){if(!this.subject.isDisposed&&null!==this.observer)this.subject.observers.remove(this.observer),this.observer=null};return a}(),L=k.Subject=function(){function a(){a.base.constructor.call(this);this.isDisposed=!1;this.isStopped=!1;this.observers=
new s}m(a,j);E(a,u);var b=function(){if(this.isDisposed)throw Error("Object has been disposed");};a.prototype.onCompleted=function(){var a;b.call(this);if(!this.isStopped)a=this.observers.toArray(),this.observers=new s,this.isStopped=!0;if(a)for(var d=0,e=a.length;d<e;d++)a[d].onCompleted()};a.prototype.onError=function(a){var d;b.call(this);if(!this.isStopped)d=this.observers.toArray(),this.observers=new s,this.isStopped=!0,this.exception=a;if(d)for(var e=0,f=d.length;e<f;e++)d[e].onError(a)};a.prototype.onNext=
function(a){var d;b.call(this);this.isStopped||(d=this.observers.toArray());if(d)for(var e=0,f=d.length;e<f;e++)d[e].onNext(a)};a.prototype._subscribe=function(a){b.call(this);if(!this.isStopped)return this.observers.add(a),new R(this,a);if(this.exception)return a.onError(this.exception),p;a.onCompleted();return p};a.prototype.dispose=function(){this.isDisposed=!0;this.observers=null};a.create=function(a,b){return new va(a,b)};return a}(),S=k.AsyncSubject=function(){function a(){a.base.constructor.call(this);
this.isDisposed=!1;this.isStopped=!1;this.value=null;this.hasValue=!1;this.observers=new s;this.exception=null}m(a,j);E(a,u);var b=function(){if(this.isDisposed)throw Error("Object has been disposed");};a.prototype.onCompleted=function(){var a=!1,d,e,f,h;b.call(this);if(!this.isStopped)d=this.observers.toArray(),this.observers=new s,this.isStopped=!0,e=this.value,a=this.hasValue;if(d)if(a)for(f=0,h=d.length;f<h;f++)a=d[f],a.onNext(e),a.onCompleted();else for(f=0,h=d.length;f<h;f++)d[f].onCompleted()};
a.prototype.onError=function(a){var d;b.call(this);if(!this.isStopped)d=this.observers.toArray(),this.observers=new s,this.isStopped=!0,this.exception=a;if(d)for(var e=0,f=d.length;e<f;e++)d[e].onError(a)};a.prototype.onNext=function(a){b.call(this);if(!this.isStopped)this.value=a,this.hasValue=!0};a.prototype._subscribe=function(a){var d,e,f;b.call(this);if(!this.isStopped)return this.observers.add(a),new R(this,a);d=this.exception;e=this.hasValue;f=this.value;if(d)a.onError(d);else{if(e)a.onNext(f);
a.onCompleted()}return p};a.prototype.dispose=function(){this.isDisposed=!0;this.value=this.exception=this.observers=null};return a}(),ga=k.BehaviorSubject=function(){function a(b){a.base.constructor.call(this);this.value=b;this.observers=new s;this.isDisposed=!1;this.isStopped=!1;this.exception=null}m(a,j);E(a,u);var b=function(){if(this.isDisposed)throw Error("Object has been disposed");};a.prototype.onCompleted=function(){var a;b.call(this);if(!this.isStopped)a=this.observers.toArray(),this.observers=
new s,this.isStopped=!0;if(a)for(var d=0,e=a.length;d<e;d++)a[d].onCompleted()};a.prototype.onError=function(a){var d;b.call(this);if(!this.isStopped)d=this.observers.toArray(),this.observers=new s,this.isStopped=!0,this.exception=a;if(d)for(var e=0,f=d.length;e<f;e++)d[e].onError(a)};a.prototype.onNext=function(a){var d;b.call(this);if(!this.isStopped)this.value=a,d=this.observers.toArray();if(d)for(var e=0,f=d.length;e<f;e++)d[e].onNext(a)};a.prototype._subscribe=function(a){var d;b.call(this);
if(!this.isStopped)return this.observers.add(a),a.onNext(this.value),new R(this,a);if(d=this.exception)a.onError(d);else a.onCompleted();return p};a.prototype.dispose=function(){this.isDisposed=!0;this.exception=this.value=this.observers=null};return a}(),ha=k.ReplaySubject=function(){function a(a,b,c){this.bufferSize=a===t?Number.MAX_VALUE:a;this.window=b===t?Number.MAX_VALUE:b;this.scheduler=c||A;this.q=[];this.observers=new s;this.isDisposed=this.isStopped=!1}m(a,j);E(a,j);var b=function(){if(this.isDisposed)throw Error("Object has been disposed");
};a.prototype._trim=function(a){var b=this.isStopped?1:0,c=b+this.bufferSize;if(c<this.bufferSize)c=this.bufferSize;for(;this.q.length>c;)this.q.shift();for(;this.q.length>b&&a-this.q[0].timestamp>this.window;)this.q.shift()};a.prototype._enqueue=function(a){var b=this.scheduler.now();this.q.push({value:a,timestamp:b});this._trim(b)};a.prototype.onNext=function(a){var c,f,h,g;b.call(this);if(!this.isStopped){c=this.observers.toArray();this._enqueue(n.createOnNext(a));for(h=0,g=c.length;h<g;h++)f=
c[h],f.onNext(a)}if(c)for(h=0,g=c.length;h<g;h++)f=c[h],f.ensureActive()};a.prototype.onError=function(a){var c,f,h;b.call(this);if(!this.isStopped){this.isStopped=!0;this._enqueue(n.createOnError(a));c=this.observers.toArray();for(f=0,h=c.length;f<h;f++)c[f].onError(a);this.observers=new s}if(c)for(f=0,h=c.length;f<h;f++)c[f].ensureActive()};a.prototype.onCompleted=function(){var a,c,f;b.call(this);if(!this.isStopped){this.isStopped=!0;this._enqueue(n.createOnCompleted());a=this.observers.toArray();
for(c=0,f=a.length;c<f;c++)a[c].onCompleted();this.observers=new s}if(a)for(c=0,f=a.length;c<f;c++)a[c].ensureActive()};a.prototype._subscribe=function(a){var a=new ea(this.scheduler,a),e=new c(this,a);b.call(this);this._trim(this.scheduler.now());this.observers.add(a);for(var f=0,h=this.q.length;f<h;f++)this.q[f].value.accept(a);a.ensureActive();return e};a.prototype.dispose=function(){this.isDisposed=!0;this.observers=null};var c=function(){function a(b,c){this.subject=b;this.observer=c}a.prototype.dispose=
function(){this.observer.dispose();this.subject.isDisposed||this.subject.observers.remove(this.observer)};return a}();return a}(),va=function(){function a(a,c){this.observer=a;this.observable=c}m(a,j);E(a,u);a.prototype.onCompleted=function(){return this.observer.onCompleted()};a.prototype.onError=function(a){return this.observer.onError(a)};a.prototype.onNext=function(a){return this.observer.onNext(a)};a.prototype._subscribe=function(a){return this.observable.subscribe(a)};return a}();j.start=function(a,
b,c,d){c||(c=[]);return wa(a,d).apply(b,c)};var wa=j.toAsync=function(a,b){b||(b=qa);return function(){var c=new S,d=function(){var b;try{b=a.apply(this,arguments)}catch(d){c.onError(d);return}c.onNext(b);c.onCompleted()},e=v.call(arguments),f=this;b.schedule(function(){d.apply(f,e)});return c}};g.multicast=function(a,b){var c=this;return"function"===typeof a?i(function(d){var e=c.multicast(a());return new o(b(e).subscribe(d),e.connect())}):new ua(c,a)};g.publish=function(a){return!a?this.multicast(new L):
this.multicast(function(){return new L},a)};g.publishLast=function(a){return!a?this.multicast(new S):this.multicast(function(){return new S},a)};g.replay=function(a,b,c,d){return!a||null===a?this.multicast(new ha(b,c,d)):this.multicast(function(){return new ha(b,c,d)},a)};g.publishValue=function(a,b){return"function"===typeof a?this.multicast(function(){return new ga(b)},a):this.multicast(new ga(a))};var ia=j.never=function(){return i(function(){return p})},xa=j.empty=function(a){a||(a=x);return i(function(b){return a.schedule(function(){return b.onCompleted()})})},
ya=j.returnValue=function(a,b){b||(b=x);return i(function(c){return b.schedule(function(){c.onNext(a);return c.onCompleted()})})},ja=j.throwException=function(a,b){b||(b=x);return i(function(c){return b.schedule(function(){return c.onError(a)})})};j.generate=function(a,b,c,d,e){e||(e=A);return i(function(f){var h=!0,g=a;return e.scheduleRecursive(function(a){var e,l;try{h?h=!1:g=c(g),(e=b(g))&&(l=d(g))}catch(i){f.onError(i);return}if(e)f.onNext(l),a();else f.onCompleted()})})};var za=j.defer=function(a){return i(function(b){var c;
try{c=a()}catch(d){return ja(d).subscribe(b)}return c.subscribe(b)})};j.using=function(a,b){return i(function(c){var d=p,e,f;try{e=a(),null!==e&&(d=e),f=b(e)}catch(h){return new o(ja(h).subscribe(c),d)}return new o(f.subscribe(c),d)})};var ka=j.fromArray=function(a,b){b||(b=A);return i(function(c){var d=0;return b.scheduleRecursive(function(b){if(d<a.length)c.onNext(a[d++]),b();else c.onCompleted()})})},i=j.createWithDisposable=function(a){return new ta(a)};j.create=function(a){return i(function(b){return w(a(b))})};
j.range=function(a,b,c){c||(c=A);return i(function(d){return c.scheduleRecursiveWithState(0,function(c,f){if(c<b)d.onNext(a+c),f(c+1);else d.onCompleted()})})};g.repeat=function(a){return ca(this,a).concat()};g.retry=function(a){return ca(this,a).catchException()};j.repeat=function(a,b,c){c||(c=A);b===t&&(b=-1);return ya(a,c).repeat(b)};g.select=function(a){var b=this;return i(function(c){var d=0;return b.subscribe(function(b){var f;try{f=a(b,d++)}catch(h){c.onError(h);return}c.onNext(f)},function(a){c.onError(a)},
function(){c.onCompleted()})})};g.where=function(a){var b=this;return i(function(c){var d=0;return b.subscribe(function(b){var f;try{f=a(b,d++)}catch(h){c.onError(h);return}if(f)c.onNext(b)},function(a){c.onError(a)},function(){c.onCompleted()})})};g.groupByUntil=function(a,b,c,d){var e=this;b||(b=y);d||(d=U);return i(function(f){var h={},g=new o,i=new Y(g);g.add(e.subscribe(function(e){var l,j,k,o,m,n,s,q,p;try{j=a(e),n=d(j)}catch(u){for(p in h)h[p].onError(u);f.onError(u);return}m=!1;try{q=h[n],
q||(q=new L,h[n]=q,m=!0)}catch(v){for(p in h)h[p].onError(v);f.onError(v);return}if(m){m=new fa(j,q,i);j=new fa(j,q);try{l=c(j)}catch(w){for(p in h)h[p].onError(w);f.onError(w);return}f.onNext(m);s=new r;g.add(s);o=function(){h[n]!==t&&(delete h[n],q.onCompleted());g.remove(s)};s.disposable(l.take(1).subscribe(function(){},function(a){for(p in h)h[p].onError(a);f.onError(a)},function(){o()}))}try{k=b(e)}catch(x){for(p in h)h[p].onError(x);f.onError(x);return}q.onNext(k)},function(a){for(var b in h)h[b].onError(a);
f.onError(a)},function(){for(var a in h)h[a].onCompleted();f.onCompleted()}));return i})};g.groupBy=function(a,b,c){return this.groupByUntil(a,b,function(){return ia()},c)};g.take=function(a,b){if(0>a)throw Error("Argument out of range");if(0===a)return xa(b);var c=this;return i(function(b){var e=a;return c.subscribe(function(a){if(0<e&&(e--,b.onNext(a),0===e))b.onCompleted()},function(a){return b.onError(a)},function(){return b.onCompleted()})})};g.skip=function(a){if(0>a)throw Error("Argument out of range");
var b=this;return i(function(c){var d=a;return b.subscribe(function(a){if(0>=d)c.onNext(a);else d--},function(a){return c.onError(a)},function(){return c.onCompleted()})})};g.takeWhile=function(a){var b=this;return i(function(c){var d=0,e=!0;return b.subscribe(function(b){if(e){try{e=a(b,d++)}catch(h){c.onError(h);return}if(e)c.onNext(b);else c.onCompleted()}},function(a){return c.onError(a)},function(){return c.onCompleted()})})};g.skipWhile=function(a){var b=this;return i(function(c){var d=0,e=
!1;return b.subscribe(function(b){if(!e)try{e=!a(b,d++)}catch(h){c.onError(h);return}if(e)c.onNext(b)},function(a){c.onError(a)},function(){c.onCompleted()})})};g.selectMany=function(a,b){return b!==t?this.selectMany(function(c){return a(c).select(function(a){return b(c,a)})}):"function"===typeof a?this.select(a).mergeObservable():this.select(function(){return a}).mergeObservable()};g.finalValue=function(){var a=this;return i(function(b){var c=!1,d;return a.subscribe(function(a){c=!0;d=a},function(a){b.onError(a)},
function(){if(c)b.onNext(d),b.onCompleted();else b.onError(Error("Sequence contains no elements."))})})};g.toArray=function(){return this.scan([],function(a,b){a.push(b);return a}).startWith([]).finalValue()};g.materialize=function(){var a=this;return i(function(b){return a.subscribe(function(a){b.onNext(n.createOnNext(a))},function(a){b.onNext(n.createOnError(a));b.onCompleted()},function(){b.onNext(n.createOnCompleted());b.onCompleted()})})};g.dematerialize=function(){var a=this;return i(function(b){return a.subscribe(function(a){return a.accept(b)},
function(a){b.onError(a)},function(){b.onCompleted()})})};g.asObservable=function(){var a=this;return i(function(b){return a.subscribe(b)})};g.windowWithCount=function(a,b){var c=this;if(0>=a)throw Error("Argument out of range");b===t&&(b=a);if(0>=b)throw Error("Argument out of range");return i(function(d){var e=new r,f=new Y(e),h=0,g=[],i=function(){var a=new L;g.push(a);d.onNext(la(a,f))};i();e.disposable(c.subscribe(function(c){var d;for(d=0;d<g.length;d++)g[d].onNext(c);c=h-a+1;0<=c&&0===c%b&&
(c=g.shift(),c.onCompleted());h++;0===h%b&&i()},function(a){for(;0<g.length;)g.shift().onError(a);d.onError(a)},function(){for(;0<g.length;)g.shift().onCompleted();d.onCompleted()}));return f})};g.bufferWithCount=function(a,b){b===t&&(b=a);return this.windowWithCount(a,b).selectMany(function(a){return a.toArray()}).where(function(a){return 0<a.length})};g.startWith=function(){var a,b;a=0;0<arguments.length&&null!==arguments[0]&&void 0!==arguments[0].now?(b=arguments[0],a=1):b=x;a=v.call(arguments,
a);return O([ka(a,b),this]).concat()};g.scan=function(){var a,b=!1,c;2===arguments.length?(a=arguments[0],c=arguments[1],b=!0):c=arguments[0];var d=this;return za(function(){var e=!1,f;return d.select(function(d){e?f=c(f,d):(f=b?c(a,d):d,e=!0);return f})})};g.distinctUntilChanged=function(a,b){var c=this;a||(a=y);b||(b=T);return i(function(d){var e=!1,f;return c.subscribe(function(c){var g=!1,i;try{i=a(c)}catch(j){d.onError(j);return}if(e)try{g=b(f,i)}catch(l){d.onError(l);return}if(!e||!g)e=!0,f=
i,d.onNext(c)},function(a){d.onError(a)},function(){d.onCompleted()})})};g.finallyAction=function(a){var b=this;return i(function(c){var d=b.subscribe(c);return w(function(){try{d.dispose()}finally{a()}})})};g.doAction=function(a,b,c){var d=this,e;"function"===typeof a?e=a:(e=function(b){a.onNext(b)},b=function(b){a.onError(b)},c=function(){a.onCompleted()});return i(function(a){return d.subscribe(function(b){try{e(b)}catch(c){a.onError(c)}a.onNext(b)},function(c){if(b)try{b(c)}catch(d){a.onError(d)}a.onError(c)},
function(){if(c)try{c()}catch(b){a.onError(b)}a.onCompleted()})})};g.skipLast=function(a){var b=this;return i(function(c){var d=[];return b.subscribe(function(b){d.push(b);if(d.length>a)c.onNext(d.shift())},function(a){c.onError(a)},function(){c.onCompleted()})})};g.takeLast=function(a){var b=this;return i(function(c){var d=[];return b.subscribe(function(b){d.push(b);d.length>a&&d.shift()},function(a){c.onError(a)},function(){for(;0<d.length;)c.onNext(d.shift());c.onCompleted()})})};g.ignoreElements=
function(){var a=this;return i(function(b){return a.subscribe(M,function(a){b.onError(a)},function(){b.onCompleted()})})};g.elementAt=function(a){if(0>a)throw Error("Argument out of range");var b=this;return i(function(c){var d=a;return b.subscribe(function(a){0===d&&(c.onNext(a),c.onCompleted());d--},function(a){c.onError(a)},function(){c.onError(Error("Argument out of range"))})})};g.elementAtOrDefault=function(a,b){var c=this;if(0>a)throw Error("Argument out of range");b===t&&(b=null);return i(function(d){var e=
a;return c.subscribe(function(a){0===e&&(d.onNext(a),d.onCompleted());e--},function(a){d.onError(a)},function(){d.onNext(b);d.onCompleted()})})};g.defaultIfEmpty=function(a){var b=this;a===t&&(a=null);return i(function(c){var d=!1;return b.subscribe(function(a){d=!0;c.onNext(a)},function(a){c.onError(a)},function(){if(!d)c.onNext(a);c.onCompleted()})})};g.distinct=function(a,b){var c=this;a||(a=y);b||(b=U);return i(function(d){var e={};return c.subscribe(function(c){var h,g,i,j=!1;try{h=a(c),g=b(h)}catch(l){d.onError(l);
return}for(i in e)if(g===i){j=!0;break}j||(e[g]=null,d.onNext(c))},function(a){d.onError(a)},function(){d.onCompleted()})})};g.mergeObservable=function(){var a=this;return i(function(b){var c=new o,d=!1,e=new r;c.add(e);e.disposable(a.subscribe(function(a){var e=new r;c.add(e);e.disposable(a.subscribe(function(a){b.onNext(a)},function(a){b.onError(a)},function(){c.remove(e);if(d&&1===c.length)b.onCompleted()}))},function(a){b.onError(a)},function(){d=!0;if(1===c.length)b.onCompleted()}));return c})};
g.merge=function(a){if("number"!==typeof a)return j.merge(this,a);var b=this;return i(function(c){var d=0,e=new o,f=!1,h=[],g=function(a){var b=new r;e.add(b);b.disposable(a.subscribe(function(a){c.onNext(a)},function(a){c.onError(a)},function(){var a;e.remove(b);if(0<h.length)a=h.shift(),g(a);else if(d--,f&&0===d)c.onCompleted()}))};e.add(b.subscribe(function(b){d<a?(d++,g(b)):h.push(b)},function(a){c.onError(a)},function(){f=!0;if(0===d)c.onCompleted()}));return e})};g.switchLatest=function(){var a=
this;return i(function(b){var c=!1,d=new z,e=!1,f=0,h=a.subscribe(function(a){var h=new r,g=++f;c=!0;d.disposable(h);return h.disposable(a.subscribe(function(a){if(f===g)b.onNext(a)},function(a){if(f===g)b.onError(a)},function(){if(f===g&&(c=!1,e))b.onCompleted()}))},function(a){b.onError(a)},function(){e=!0;if(!c)b.onCompleted()});return new o(h,d)})};j.merge=function(){var a,b;arguments[0]?arguments[0].now?(a=arguments[0],b=v.call(arguments,1)):(a=x,b=v.call(arguments,0)):(a=x,b=v.call(arguments,
1));b[0]instanceof Array&&(b=b[0]);return ka(b,a).mergeObservable()};g.concat=function(){var a=Aa,b=v.call(arguments,0);b.unshift(this);return a.apply(this,b)};g.concatObservable=function(){return this.merge(1)};var Aa=j.concat=function(){var a=F(arguments,0);return O(a).concat()};g.catchException=function(a){return"function"===typeof a?Ba(this,a):Ca([this,a])};var Ba=function(a,b){return i(function(c){var d=new r,e=new z;d.disposable(a.subscribe(function(a){c.onNext(a)},function(a){var d;try{d=b(a)}catch(g){c.onError(g);
return}a=new r;e.disposable(a);a.disposable(d.subscribe(c))},function(){c.onCompleted()}));return e})},Ca=j.catchException=function(){var a=F(arguments,0);return O(a).catchException()};g.onErrorResumeNext=function(a){return Da([this,a])};var Da=j.onErrorResumeNext=function(){var a=F(arguments,0);return i(function(b){var c=0,d=new z,e=x.scheduleRecursive(function(e){var g,i;if(c<a.length)g=a[c++],i=new r,d.disposable(i),i.disposable(g.subscribe(function(a){b.onNext(a)},function(){e()},function(){e()}));
else b.onCompleted()});return new o(d,e)})};g.combineLatest=function(){var a=this,b=v.call(arguments),c=b.pop();b.unshift(this);return i(function(d){for(var e=b.length,f=Array(e),g=!1,i=Array(e),j=Array(e),k=function(b){var e;f[b]=!0;if(g||(g=C.call(f,y))){try{e=c.apply(a,j)}catch(l){d.onError(l);return}d.onNext(e)}else if(C.call(W.call(i,function(a,c){return c!==b}),y))d.onCompleted()},l=Array(e),m=0;m<e;m++)(function(a){l[a]=new r;l[a].setDisposable(b[a].subscribe(function(b){j[a]=b;k(a)},function(a){d.onError(a)},
function(){i[a]=!0;if(C.call(i,y))d.onCompleted()}))})(m);return new o(l)})};g.zip=function(){var a=this,b=v.call(arguments),c=b.pop();b.unshift(a);return i(function(d){for(var e=b.length,f=Array(e),g=Array(e),i=function(b){var e,i;if(C.call(f,function(a){return a&&0<a.length})){try{i=ma.call(f,function(a){return a.shift()}),e=c.apply(a,i)}catch(j){d.onError(j);return}d.onNext(e)}else if(C.call(W.call(g,function(a,c){return c!==b}),y))d.onCompleted()},j=Array(e),k=0;k<e;k++)(function(a){j[a]=new r;
j[a].setDisposable(b[a].subscribe(function(b){f[a]||(f[a]=[]);f[a].push(b);i(a)},function(a){d.onError(a)},function(){g[a]=!0;if(C.call(g,y))d.onCompleted()}))})(k);k=new o(j);k.add(w(function(){for(var a=0;a<e;a++)f[a]=null}));return k})};g.takeUntil=function(a){return N(a,this,function(a,c){var d=!1,e=!1;return new Q(function(c){!e&&!d&&("C"===c.kind?d=!0:"E"===c.kind?(e=d=!0,a.onError(c.exception)):(e=!0,a.onCompleted()))},function(d){e||(d.accept(a),(e="N"!==d.kind)&&c.dispose())})})};g.skipUntil=
function(a){return N(this,a,function(a,c,d){var e=!1,f=!1;return new Q(function(c){if("E"==c.kind)a.onError(c.exception);else e&&c.accept(a)},function(c){if(!f){if("N"===c.kind)e=!0;else if("E"===c.kind)a.onError(c.exception);f=!0;d.dispose()}})})};j.amb=function(){var a=ia(),b,c,d=F(arguments,0);for(b=0,c=d.length;b<c;b++)a=a.amb(d[b]);return a};g.amb=function(a){return N(this,a,function(a,c,d){var e="N";return new Q(function(c){"N"===e&&(e="L",d.dispose());"L"===e&&c.accept(a)},function(d){"N"===
e&&(e="R",c.dispose());"R"===e&&d.accept(a)})})};var Ea=function(a){function b(){b.base.constructor.apply(this,arguments)}m(b,a);b.prototype.next=function(a){b.base.next.call(this,a);this.ensureActive()};b.prototype.error=function(a){b.base.error.call(this,a);this.ensureActive()};b.prototype.completed=function(){b.base.completed.call(this);this.ensureActive()};return b}(ea);g.observeOn=function(a){var b=this;return i(function(c){return b.subscribe(new Ea(a,c))})};g.subscribeOn=function(a){var b=this;
return i(function(c){var d=new r,e=new z;e.setDisposable(d);d.setDisposable(a.schedule(function(){e.setDisposable(new oa(a,b.subscribe(c)))}));return e})}})(this);

// File rx.time.min.js
(function(G,p){var t;t="undefined"!==typeof exports?require("./rx.min"):G.Rx;var u=t.Observable,o=u.prototype,l=u.createWithDisposable,x=u.defer,H=u.empty,y=u.throwException,n=t.Scheduler.Timeout,q=t.SingleAssignmentDisposable,s=t.SerialDisposable,r=t.CompositeDisposable,z=t.RefCountDisposable,v=t.Subject,I=t.Internals.BinaryObserver,w=function(a,c){return l(function(b){return new r(c.getDisposable(),a.subscribe(b))})},J=function(a,c,b){return l(function(d){var e=new q,f=new q,d=b(d,e,f);e.disposable(a.materialize().select(function(c){return{switchValue:function(a){return a(c)}}}).subscribe(d));
f.disposable(c.materialize().select(function(c){return{switchValue:function(a,b){return b(c)}}}).subscribe(d));return new r(e,f)})},K=function(a,c){return l(function(b){return c.scheduleWithAbsolute(a,function(){b.onNext(0);b.onCompleted()})})},A=function(a,c,b){var d=0>c?0:c;return l(function(c){var f=0,h=a;return b.scheduleRecursiveWithAbsolute(h,function(a){var i;0<d&&(i=b.now(),h+=d,h<=i&&(h=i+d));c.onNext(f++);a(h)})})},L=function(a,c){var b=0>a?0:a;return l(function(a){return c.scheduleWithRelative(b,
function(){a.onNext(0);a.onCompleted()})})},B=function(a,c,b){return x(function(){return A(b.now()+a,c,b)})},M=u.interval=function(a,c){c||(c=n);return B(a,a,c)},N=u.timer=function(a,c,b){var d;b||(b=n);c!==p&&"number"===typeof c?d=c:c!==p&&"object"===typeof c&&(b=c);return a instanceof Date&&d===p?K(a.getTime(),b):a instanceof Date&&d!==p?A(a.getTime(),c,b):d===p?L(a,b):B(a,d,b)},E=function(a,c){var b=this;return l(function(d){var e=!1,f=new s,h=null,g=[],i=!1,j;j=b.materialize().timestamp(c).subscribe(function(b){"E"===
b.value.kind?(g=[],g.push(b),h=b.value.exception,b=!i):(g.push({value:b.value,timestamp:b.timestamp+a}),b=!e,e=!0);if(b)if(null!==h)d.onError(h);else b=new q,f.disposable(b),b.disposable(c.scheduleRecursiveWithRelative(a,function(b){var a,f,j;if(null===h){i=!0;do{a=null;if(0<g.length&&0>=g[0].timestamp-c.now())a=g.shift().value;null!==a&&a.accept(d)}while(null!==a);j=!1;f=0;0<g.length?(j=!0,f=Math.max(0,g[0].timestamp-c.now())):e=!1;a=h;i=!1;if(null!==a)d.onError(a);else j&&b(f)}}))});return new r(j,
f)})},O=function(a,c){var b=this;return x(function(){var d=a-c.now();return E.call(b,d,c)})};o.delay=function(a,c){c||(c=n);return a instanceof Date?O.call(this,a.getTime(),c):E.call(this,a,c)};o.throttle=function(a,c){c||(c=n);var b=this;return l(function(d){var e=new s,f=!1,h=0,g,i=null;g=b.subscribe(function(b){var g;f=!0;i=b;h++;g=h;b=new q;e.disposable(b);b.disposable(c.scheduleWithRelative(a,function(){if(f&&h===g)d.onNext(i);f=!1}))},function(b){e.dispose();d.onError(b);f=!1;h++},function(){e.dispose();
if(f)d.onNext(i);d.onCompleted();f=!1;h++});return new r(g,e)})};o.windowWithTime=function(a,c,b){var d=this,e;c===p&&(e=a);b===p&&(b=n);"number"===typeof c?e=c:"object"===typeof c&&(e=a,b=c);return l(function(c){var h,g,i=e,j=a,k=[],m,C=new s,D=0;g=new r(C);m=new z(g);h=function(){var a,d,g,l,n;g=new q;C.disposable(g);a=d=!1;j===i?a=d=!0:j<i?d=!0:a=!0;l=d?j:i;n=l-D;D=l;d&&(j+=e);a&&(i+=e);g.disposable(b.scheduleWithRelative(n,function(){var b;a&&(b=new v,k.push(b),c.onNext(w(b,m)));d&&(b=k.shift(),
b.onCompleted());h()}))};k.push(new v);c.onNext(w(k[0],m));h();g.add(d.subscribe(function(b){var a,c;for(a=0;a<k.length;a++)c=k[a],c.onNext(b)},function(b){var a,d;for(a=0;a<k.length;a++)d=k[a],d.onError(b);c.onError(b)},function(){var a,b;for(a=0;a<k.length;a++)b=k[a],b.onCompleted();c.onCompleted()}));return m})};o.windowWithTimeOrCount=function(a,c,b){var d=this;b||(b=n);return l(function(e){var f,h,g=0,i,j,k=new s,m=0;h=new r(k);i=new z(h);f=function(c){var d=new q;k.disposable(d);d.disposable(b.scheduleWithRelative(a,
function(){var a;c===m&&(g=0,a=++m,j.onCompleted(),j=new v,e.onNext(w(j,i)),f(a))}))};j=new v;e.onNext(w(j,i));f(0);h.add(d.subscribe(function(a){var b=0,d=!1;j.onNext(a);g++;g===c&&(d=!0,g=0,b=++m,j.onCompleted(),j=new v,e.onNext(w(j,i)));d&&f(b)},function(a){j.onError(a);e.onError(a)},function(){j.onCompleted();e.onCompleted()}));return i})};o.bufferWithTime=function(a,c,b){var d;c===p&&(d=a);b||(b=n);"number"===typeof c?d=c:"object"===typeof c&&(d=a,b=c);return this.windowWithTime(a,d,b).selectMany(function(a){return a.toArray()})};
o.bufferWithTimeOrCount=function(a,c,b){b||(b=n);return this.windowWithTimeOrCount(a,c,b).selectMany(function(a){return a.toArray()})};o.timeInterval=function(a){var c=this;a||(a=n);return x(function(){var b=a.now();return c.select(function(c){var e=a.now(),f=e-b;b=e;return{value:c,interval:f}})})};o.timestamp=function(a){a||(a=n);return this.select(function(c){return{value:c,timestamp:a.now()}})};var F=function(a,c){return J(a,c,function(a){var c=!1,e;return new I(function(f){"N"===f.kind&&(e=f);
"E"===f.kind&&f.accept(a);"C"===f.kind&&(c=!0)},function(){var f=e;e=p;f!==p&&f.accept(a);if(c)a.onCompleted()})})};o.sample=function(a,c){c||(c=n);return"number"===typeof a?F(this,M(a,c)):F(this,a)};o.timeout=function(a,c,b){var d,e=this;c===p&&(c=y(Error("Timeout")));b||(b=n);d=a instanceof Date?function(a,c){b.scheduleWithAbsolute(a,c)}:function(a,c){b.scheduleWithRelative(a,c)};return l(function(b){var h,g=0,i=new q,j=new s,k=!1,m=new s;j.disposable(i);h=function(){var e=g;m.disposable(d(a,function(){(k=
g===e)&&j.disposable(c.subscribe(b))}))};h();i.disposable(e.subscribe(function(a){k||(g++,b.onNext(a),h())},function(a){k||(g++,b.onError(a))},function(){k||(g++,b.onCompleted())}));return new r(j,m)})};u.generateWithAbsoluteTime=function(a,c,b,d,e,f){f||(f=n);return l(function(h){var g=!0,i=!1,j,k=a,m;return f.scheduleRecursiveWithAbsolute(f.now(),function(a){if(i)h.onNext(j);try{if(g?g=!1:k=b(k),i=c(k))j=d(k),m=e(k)}catch(f){h.onError(f);return}if(i)a(m);else h.onCompleted()})})};u.generateWithRelativeTime=
function(a,c,b,d,e,f){f||(f=n);return l(function(h){var g=!0,i=!1,j,k=a,m;return f.scheduleRecursiveWithRelative(0,function(a){if(i)h.onNext(j);try{if(g?g=!1:k=b(k),i=c(k))j=d(k),m=e(k)}catch(f){h.onError(f);return}if(i)a(m);else h.onCompleted()})})};o.delaySubscription=function(a,c){c||(c=n);return this.delayWithSelector(N(a,c),function(){return H()})};o.delayWithSelector=function(a,c){var b=this;return l(function(d){var e=new r,f=!1,h=function(){if(f&&0===e.length)d.onCompleted()},g=new s,i=function(){g.setDisposable(b.subscribe(function(a){var b;
try{b=c(a)}catch(f){d.onError(f);return}var g=new q;e.add(g);g.setDisposable(b.subscribe(function(){d.onNext(a);e.remove(g);h()},function(a){d.onError(a)},function(){d.onNext(a);e.remove(g);h()}))},function(a){d.onError(a)},function(){f=!0;g.dispose();h()}))};a?g.setDisposable(a.subscribe(function(){i()},function(a){d.onError(a)},function(){i()})):i();return new r(g,e)})};o.timeoutWithSelector=function(a,c,b){a||(a=observableNever());b||(b=y(Error("Timeout")));var d=this;return l(function(e){var f=
new s,h=new s,g=new q;f.setDisposable(g);var i=0,j=function(a){var c=i,d=new q;h.setDisposable(d);d.setDisposable(a.subscribe(function(){i===c&&f.setDisposable(b.subscribe(e));d.dispose()},function(a){if(i===c)e.onError(a)},function(){i===c&&f.setDisposable(b.subscribe(e))}))};j(a);var k=function(){i++;return!0};g.setDisposable(d.subscribe(function(a){if(k()){e.onNext(a);var b;try{b=c(a)}catch(d){e.onError(d);return}j(b)}},function(a){if(k())e.onError(a)},function(){if(k())e.onCompleted()}));return new r(f,
h)})};o.throttleWithSelector=function(a){var c=this;return l(function(b){var d,e=!1,f=new s,h=0,g=c.subscribe(function(c){var g;try{g=a(c)}catch(k){b.onError(k);return}e=!0;d=c;h++;var m=h,l=new q;f.setDisposable(l);l.setDisposable(g.subscribe(function(){if(e&&h===m)b.onNext(d);e=!1;l.dispose()},function(a){b.onError(a)},function(){if(e&&h===m)b.onNext(d);e=!1;l.dispose()}))},function(a){f.dispose();b.onError(a);e=!1;h++},function(){f.dispose();if(e)b.onNext(d);b.onCompleted();e=!1;h++});return new r(g,
f)})}})(this);


quid2.Rx = (function() {
  var q = quid2;

    var dom = new goog.dom.DomHelper();
    var win = dom.getWindow();

    /* Element -> Observable goog.math.Size */
    // NOTE: set: body {margin:0;padding:0;overflow:hidden} */
    function sizeOf(elem) {
      console.log("sizeOf",elem);
      var s = new Rx.Subject();

      function getSize() {
	return elem == win ? dom.getViewportSize() : goog.style.getBorderBoxSize(elem); //  new goog.math.Size($(document).width(),$(document).height());
      };

      $(elem).resize(function() {
	s.onNext(getSize());
      });

      return s.startWith(getSize()).throttle(350).distinctUntilChanged(goog.functions.identity,goog.math.Size.equals)
	.doAction(function (s)  {console.log(elem,"resized to",s.toString());});
    };

    Rx.Observable.sizeOf = sizeOf;

    /* Element -> Observable goog.math.Size -> (goog.math.Size -> goog.math.Size) -> () */
    Rx.Observable.prototype.setSize = function (elem,f) {
      this.select(f).subscribe(function (s) {goog.style.setBorderBoxSize(elem,s);});
      return this;
    };

    /* (a | D a) ->  Observable a */
    function lift(v) {
      var s = new Rx.AsyncSubject();
      $.when(v).then(function(a){s.onNext(a);s.onCompleted();},function (e) {s.onError(e);s.onCompleted();});
      return s;distinctUntilChanged
    };

    /* (Observable a).mapD(a -> Defer b) = Observable b **/
    Rx.Observable.prototype.mapD = function(f) {return this.foldD(function (s,a) {return f(a);},0);};

    /** (Observable a).foldD(s -> a -> Defer s,s) = Observable s **/
    Rx.Observable.prototype.foldD = function (f,seed) {
        var b = this;
	var s = seed;
        return Rx.Observable.createWithDisposable(function (c) {
            var i = 0;
	    var q = new goog.structs.Queue();
	    var processing=0;
	    var NEXT=0,ERROR=1,COMPLETED=2;

	    function process() {
	      if (processing++) return;
	      var e = q.dequeue();

	      switch (e[0]) {
		case NEXT:
		  try {
		    f(s,e[1],i++).then(function(b){
					 s = b;
					 c.onNext(b);
					 nxt();
				    },function (e) {
				      c.onError(e);
				      //nxt();
				    });
		  } catch (e) {
		    c.onError(e);
		    //nxt();
		    return;
		  }
		break;

	    case ERROR:
	      c.onError(i[1]);
	      //nxt();
	      break;

	    case COMPLETED:
	      c.onCompleted();
	      //nxt();
	      break;
	    };
	  };

    function nxt() {
      processing=0;
      if (q.isEmpty()) return;
      setTimeout(process,0);
    };

    function save(k,a) {
      q.enqueue([k,a]);
      process();
    };

    return b.subscribe(function (a) {save(NEXT,a);},function (a) {save(ERROR,a);},function () {save(COMPLETED);});

    });
    };

    function log(title,obs) {
      function out(k,e) {
	console.log(title,k,e);
      };
    return obs.doAction(function (e)  {
                  out("onNext",e);
			  }
			  ,function (e) {out("onError",e);}
			  ,function () {out("onCompleted");}
			 );
   };

   Rx.Observable.prototype.log = function (title) {return log(title,this);};

   function sink(title,obs) {
      function out(k,e) {
	console.log(title,k,e);
      };

      obs.subscribe(function (e)  {
		      out("onNext",e);
		    }
		    ,function (e) {out("onError",e);}
		    ,function () {out("onCompleted");}
		    );
    };


      /** Tests **/
      var d = quid2.Deferred;
      var o1 = Rx.Observable.range(11,3);
      var o2 = Rx.Observable.fromArray(["a","bc","def"]);

      var df = function (n){return d.delayed(n*2,1000/n);};
      var dsf = function (s,n) {return d.delayed(s+n,1000/n);};

      function testSize() {
	//sink("testSize",resize($("body").get(0)));
	sink("testResize",sizeOf(window).setSize($(".example").get(0),function (s) {return s;}));
      };

      function testSeqs() {
	var seqs = new Obs();
	// This has to come before.
	sink(log("Rx.testSeqs",seqs.observable.switchLatest()));

	seqs.onNext(Rx.Observable.fromArray([{kind:"eval",obj:"this"},{kind:"eval",obj:"that"}]));
	seqs.onNext(Rx.Observable.range(2,3));
      };

      function testLog() {
	var s = new Rx.Subject();
        //s.log("Subject Log");
	sink("testSubject",s.log("Subject Log"));
	s.onNext(3);
	s.onNext(4);
	s.onCompleted();
      };

      function testRange() {
	var src = Rx.Observable.range(2,3);
	sink("Rx.testRange",src);
	sink("Rx.testRange2",src);
      };

      function testFold() {
	//sink(log("Rx.log Test",Rx.Observable.fromArray([1,3,5,7])));
	//testSeqs();
	sink("Rx.foldD Test",Rx.Observable.range(1,3).foldD(dsf,100));
	sink("Rx.mapD Test",Rx.Observable.range(1,3).mapD(df));
      };

      function testScan() {
	sink("Rx.Scan Test",Rx.Observable.range(1,3).scan(100,function (s,n){return s+n;}));
	sink("Rx.ScanD Test",Rx.Observable.range(1,3).scanD(100,dsf));
      };

      function testSelect() {
	sink("Rx.Select Test",Rx.Observable.range(1,3).select(function (n){return n*2;}));

	var d = quid2.Deferred;
	sink("Rx.SelectD Test",Rx.Observable.range(1,3).selectD(df));
      };

      function testLift() {
	sink("Rx.Lift Test",lift(3));

	sink("Rx.Lift Test2",lift(d.delayed(33)));
      };

      function testToggle() {
	sink("Rx.testToggle",toggle([function () {console.log("create obs 1");return o1;}
				     ,function () {console.log("create obs 2");return o2;}]).take(15));
      };

      function testMerge() {
	sink("testMerge",Rx.Observable.merge(o1,o2));
      };

      function testMaterial() {
	sink("testMaterial",o1.materialize());
      };


      function testSubject() {
	var s = new Rx.Subject();
	sink("testSubject",s);
	s.onNext(3);
	sink("testSubject2",s);
	s.onNext(4);
	s.onCompleted();
	s.dispose();
      };

      function testSubject2() {
	var s = new Rx.Subject.create(Rx.Observer.create(function (n) {console.log("Subject observer.onNext",n);}),Rx.Observable.range(11,3));
	//var s = new Rx.Subject();
	sink("testSubject",s);
	s.onNext(3);
	sink("testSubject2",s);
	s.onNext(4);
	//s.onCompleted();
	//s.dispose();
      };

      function test() {
	testSize();
	//testLog();
	//testMaterial();
	//testRange();
	//testFold();
        //testToggle();
        //testSubject();
	//testMerge();
	//testScan();
	//testSelect();
	//testLift();
      };

  return {
    test:test
    //log:log
    ,sink:sink
    //,mapD:mapD
    //,foldD:foldD
  };
})();


  /* NOTE: it never stops
  function toggle(factories) {
    var obsB = new Rx.Subject();
    var i = 0;
    var dispose;
    function nxt() {
      var oi = i++;
      i = i==factories.length ? 0 : i;
      return oi;
    };

    function nxtF() {
      setTimeout(nextFactory,5000);
    };

    function nextFactory() {
      if (dispose) dispose.dispose();
      dispose = (factories[nxt(i)])().subscribe(function (a) {obsB.onNext(a);},nxtF,nxtF);
    };
    nextFactory();

    return obsB;
  };
*/

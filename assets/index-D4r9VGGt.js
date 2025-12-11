(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const v of b.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function u(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerPolicy&&(b.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?b.credentials="include":f.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function o(f){if(f.ep)return;f.ep=!0;const b=u(f);fetch(f.href,b)}})();function yf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var No={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function xb(){if($u)return js;$u=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function u(o,f,b){var v=null;if(b!==void 0&&(v=""+b),f.key!==void 0&&(v=""+f.key),"key"in f){b={};for(var T in f)T!=="key"&&(b[T]=f[T])}else b=f;return f=b.ref,{$$typeof:i,type:o,key:v,ref:f!==void 0?f:null,props:b}}return js.Fragment=c,js.jsx=u,js.jsxs=u,js}var Pu;function gb(){return Pu||(Pu=1,No.exports=xb()),No.exports}var p=gb(),zo={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function yb(){if(ef)return J;ef=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),v=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),O=Symbol.iterator;function V(g){return g===null||typeof g!="object"?null:(g=O&&g[O]||g["@@iterator"],typeof g=="function"?g:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,Y={};function F(g,j,H){this.props=g,this.context=j,this.refs=Y,this.updater=H||X}F.prototype.isReactComponent={},F.prototype.setState=function(g,j){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,j,"setState")},F.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function te(){}te.prototype=F.prototype;function U(g,j,H){this.props=g,this.context=j,this.refs=Y,this.updater=H||X}var fe=U.prototype=new te;fe.constructor=U,K(fe,F.prototype),fe.isPureReactComponent=!0;var Ae=Array.isArray;function He(){}var P={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function Re(g,j,H){var G=H.ref;return{$$typeof:i,type:g,key:j,ref:G!==void 0?G:null,props:H}}function st(g,j){return Re(g.type,j,g.props)}function rt(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function Je(g){var j={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(H){return j[H]})}var Da=/\/+/g;function _t(g,j){return typeof g=="object"&&g!==null&&g.key!=null?Je(""+g.key):j.toString(36)}function Mt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(He,He):(g.status="pending",g.then(function(j){g.status==="pending"&&(g.status="fulfilled",g.value=j)},function(j){g.status==="pending"&&(g.status="rejected",g.reason=j)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function B(g,j,H,G,W){var ae=typeof g;(ae==="undefined"||ae==="boolean")&&(g=null);var ue=!1;if(g===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(g.$$typeof){case i:case c:ue=!0;break;case z:return ue=g._init,B(ue(g._payload),j,H,G,W)}}if(ue)return W=W(g),ue=G===""?"."+_t(g,0):G,Ae(W)?(H="",ue!=null&&(H=ue.replace(Da,"$&/")+"/"),B(W,j,H,"",function(ql){return ql})):W!=null&&(rt(W)&&(W=st(W,H+(W.key==null||g&&g.key===W.key?"":(""+W.key).replace(Da,"$&/")+"/")+ue)),j.push(W)),1;ue=0;var Ke=G===""?".":G+":";if(Ae(g))for(var Be=0;Be<g.length;Be++)G=g[Be],ae=Ke+_t(G,Be),ue+=B(G,j,H,ae,W);else if(Be=V(g),typeof Be=="function")for(g=Be.call(g),Be=0;!(G=g.next()).done;)G=G.value,ae=Ke+_t(G,Be++),ue+=B(G,j,H,ae,W);else if(ae==="object"){if(typeof g.then=="function")return B(Mt(g),j,H,G,W);throw j=String(g),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ue}function L(g,j,H){if(g==null)return g;var G=[],W=0;return B(g,G,"","",function(ae){return j.call(H,ae,W++)}),G}function I(g){if(g._status===-1){var j=g._result;j=j(),j.then(function(H){(g._status===0||g._status===-1)&&(g._status=1,g._result=H)},function(H){(g._status===0||g._status===-1)&&(g._status=2,g._result=H)}),g._status===-1&&(g._status=0,g._result=j)}if(g._status===1)return g._result.default;throw g._result}var be=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},ye={map:L,forEach:function(g,j,H){L(g,function(){j.apply(this,arguments)},H)},count:function(g){var j=0;return L(g,function(){j++}),j},toArray:function(g){return L(g,function(j){return j})||[]},only:function(g){if(!rt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return J.Activity=E,J.Children=ye,J.Component=F,J.Fragment=u,J.Profiler=f,J.PureComponent=U,J.StrictMode=o,J.Suspense=k,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,J.__COMPILER_RUNTIME={__proto__:null,c:function(g){return P.H.useMemoCache(g)}},J.cache=function(g){return function(){return g.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(g,j,H){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var G=K({},g.props),W=g.key;if(j!=null)for(ae in j.key!==void 0&&(W=""+j.key),j)!Ue.call(j,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&j.ref===void 0||(G[ae]=j[ae]);var ae=arguments.length-2;if(ae===1)G.children=H;else if(1<ae){for(var ue=Array(ae),Ke=0;Ke<ae;Ke++)ue[Ke]=arguments[Ke+2];G.children=ue}return Re(g.type,W,G)},J.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:b,_context:g},g},J.createElement=function(g,j,H){var G,W={},ae=null;if(j!=null)for(G in j.key!==void 0&&(ae=""+j.key),j)Ue.call(j,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(W[G]=j[G]);var ue=arguments.length-2;if(ue===1)W.children=H;else if(1<ue){for(var Ke=Array(ue),Be=0;Be<ue;Be++)Ke[Be]=arguments[Be+2];W.children=Ke}if(g&&g.defaultProps)for(G in ue=g.defaultProps,ue)W[G]===void 0&&(W[G]=ue[G]);return Re(g,ae,W)},J.createRef=function(){return{current:null}},J.forwardRef=function(g){return{$$typeof:T,render:g}},J.isValidElement=rt,J.lazy=function(g){return{$$typeof:z,_payload:{_status:-1,_result:g},_init:I}},J.memo=function(g,j){return{$$typeof:x,type:g,compare:j===void 0?null:j}},J.startTransition=function(g){var j=P.T,H={};P.T=H;try{var G=g(),W=P.S;W!==null&&W(H,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(He,be)}catch(ae){be(ae)}finally{j!==null&&H.types!==null&&(j.types=H.types),P.T=j}},J.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},J.use=function(g){return P.H.use(g)},J.useActionState=function(g,j,H){return P.H.useActionState(g,j,H)},J.useCallback=function(g,j){return P.H.useCallback(g,j)},J.useContext=function(g){return P.H.useContext(g)},J.useDebugValue=function(){},J.useDeferredValue=function(g,j){return P.H.useDeferredValue(g,j)},J.useEffect=function(g,j){return P.H.useEffect(g,j)},J.useEffectEvent=function(g){return P.H.useEffectEvent(g)},J.useId=function(){return P.H.useId()},J.useImperativeHandle=function(g,j,H){return P.H.useImperativeHandle(g,j,H)},J.useInsertionEffect=function(g,j){return P.H.useInsertionEffect(g,j)},J.useLayoutEffect=function(g,j){return P.H.useLayoutEffect(g,j)},J.useMemo=function(g,j){return P.H.useMemo(g,j)},J.useOptimistic=function(g,j){return P.H.useOptimistic(g,j)},J.useReducer=function(g,j,H){return P.H.useReducer(g,j,H)},J.useRef=function(g){return P.H.useRef(g)},J.useState=function(g){return P.H.useState(g)},J.useSyncExternalStore=function(g,j,H){return P.H.useSyncExternalStore(g,j,H)},J.useTransition=function(){return P.H.useTransition()},J.version="19.2.0",J}var tf;function qo(){return tf||(tf=1,zo.exports=yb()),zo.exports}var R=qo();const vb=yf(R);var Do={exports:{}},Os={},jo={exports:{}},Oo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function kb(){return af||(af=1,(function(i){function c(B,L){var I=B.length;B.push(L);e:for(;0<I;){var be=I-1>>>1,ye=B[be];if(0<f(ye,L))B[be]=L,B[I]=ye,I=be;else break e}}function u(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var L=B[0],I=B.pop();if(I!==L){B[0]=I;e:for(var be=0,ye=B.length,g=ye>>>1;be<g;){var j=2*(be+1)-1,H=B[j],G=j+1,W=B[G];if(0>f(H,I))G<ye&&0>f(W,H)?(B[be]=W,B[G]=I,be=G):(B[be]=H,B[j]=I,be=j);else if(G<ye&&0>f(W,I))B[be]=W,B[G]=I,be=G;else break e}}return L}function f(B,L){var I=B.sortIndex-L.sortIndex;return I!==0?I:B.id-L.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;i.unstable_now=function(){return b.now()}}else{var v=Date,T=v.now();i.unstable_now=function(){return v.now()-T}}var k=[],x=[],z=1,E=null,O=3,V=!1,X=!1,K=!1,Y=!1,F=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function fe(B){for(var L=u(x);L!==null;){if(L.callback===null)o(x);else if(L.startTime<=B)o(x),L.sortIndex=L.expirationTime,c(k,L);else break;L=u(x)}}function Ae(B){if(K=!1,fe(B),!X)if(u(k)!==null)X=!0,He||(He=!0,Je());else{var L=u(x);L!==null&&Mt(Ae,L.startTime-B)}}var He=!1,P=-1,Ue=5,Re=-1;function st(){return Y?!0:!(i.unstable_now()-Re<Ue)}function rt(){if(Y=!1,He){var B=i.unstable_now();Re=B;var L=!0;try{e:{X=!1,K&&(K=!1,te(P),P=-1),V=!0;var I=O;try{t:{for(fe(B),E=u(k);E!==null&&!(E.expirationTime>B&&st());){var be=E.callback;if(typeof be=="function"){E.callback=null,O=E.priorityLevel;var ye=be(E.expirationTime<=B);if(B=i.unstable_now(),typeof ye=="function"){E.callback=ye,fe(B),L=!0;break t}E===u(k)&&o(k),fe(B)}else o(k);E=u(k)}if(E!==null)L=!0;else{var g=u(x);g!==null&&Mt(Ae,g.startTime-B),L=!1}}break e}finally{E=null,O=I,V=!1}L=void 0}}finally{L?Je():He=!1}}}var Je;if(typeof U=="function")Je=function(){U(rt)};else if(typeof MessageChannel<"u"){var Da=new MessageChannel,_t=Da.port2;Da.port1.onmessage=rt,Je=function(){_t.postMessage(null)}}else Je=function(){F(rt,0)};function Mt(B,L){P=F(function(){B(i.unstable_now())},L)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return O},i.unstable_next=function(B){switch(O){case 1:case 2:case 3:var L=3;break;default:L=O}var I=O;O=L;try{return B()}finally{O=I}},i.unstable_requestPaint=function(){Y=!0},i.unstable_runWithPriority=function(B,L){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var I=O;O=B;try{return L()}finally{O=I}},i.unstable_scheduleCallback=function(B,L,I){var be=i.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?be+I:be):I=be,B){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=I+ye,B={id:z++,callback:L,priorityLevel:B,startTime:I,expirationTime:ye,sortIndex:-1},I>be?(B.sortIndex=I,c(x,B),u(k)===null&&B===u(x)&&(K?(te(P),P=-1):K=!0,Mt(Ae,I-be))):(B.sortIndex=ye,c(k,B),X||V||(X=!0,He||(He=!0,Je()))),B},i.unstable_shouldYield=st,i.unstable_wrapCallback=function(B){var L=O;return function(){var I=O;O=L;try{return B.apply(this,arguments)}finally{O=I}}}})(Oo)),Oo}var lf;function wb(){return lf||(lf=1,jo.exports=kb()),jo.exports}var Lo={exports:{}},Ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf;function Sb(){if(sf)return Ze;sf=1;var i=qo();function c(k){var x="https://react.dev/errors/"+k;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)x+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+k+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var o={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function b(k,x,z){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:E==null?null:""+E,children:k,containerInfo:x,implementation:z}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(k,x){if(k==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ze.createPortal=function(k,x){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(c(299));return b(k,x,null,z)},Ze.flushSync=function(k){var x=v.T,z=o.p;try{if(v.T=null,o.p=2,k)return k()}finally{v.T=x,o.p=z,o.d.f()}},Ze.preconnect=function(k,x){typeof k=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(k,x))},Ze.prefetchDNS=function(k){typeof k=="string"&&o.d.D(k)},Ze.preinit=function(k,x){if(typeof k=="string"&&x&&typeof x.as=="string"){var z=x.as,E=T(z,x.crossOrigin),O=typeof x.integrity=="string"?x.integrity:void 0,V=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;z==="style"?o.d.S(k,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:E,integrity:O,fetchPriority:V}):z==="script"&&o.d.X(k,{crossOrigin:E,integrity:O,fetchPriority:V,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Ze.preinitModule=function(k,x){if(typeof k=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var z=T(x.as,x.crossOrigin);o.d.M(k,{crossOrigin:z,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(k)},Ze.preload=function(k,x){if(typeof k=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var z=x.as,E=T(z,x.crossOrigin);o.d.L(k,z,{crossOrigin:E,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Ze.preloadModule=function(k,x){if(typeof k=="string")if(x){var z=T(x.as,x.crossOrigin);o.d.m(k,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:z,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(k)},Ze.requestFormReset=function(k){o.d.r(k)},Ze.unstable_batchedUpdates=function(k,x){return k(x)},Ze.useFormState=function(k,x,z){return v.H.useFormState(k,x,z)},Ze.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ze.version="19.2.0",Ze}var rf;function Cb(){if(rf)return Lo.exports;rf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Lo.exports=Sb(),Lo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function Tb(){if(nf)return Os;nf=1;var i=wb(),c=qo(),u=Cb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function k(e){if(b(e)!==e)throw Error(o(188))}function x(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var s=a.return;if(s===null)break;var r=s.alternate;if(r===null){if(l=s.return,l!==null){a=l;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===a)return k(s),e;if(r===l)return k(s),t;r=r.sibling}throw Error(o(188))}if(a.return!==l.return)a=s,l=r;else{for(var n=!1,d=s.child;d;){if(d===a){n=!0,a=s,l=r;break}if(d===l){n=!0,l=s,a=r;break}d=d.sibling}if(!n){for(d=r.child;d;){if(d===a){n=!0,a=r,l=s;break}if(d===l){n=!0,l=r,a=s;break}d=d.sibling}if(!n)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,O=Symbol.for("react.element"),V=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),U=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var Da=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Da?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case F:return"Profiler";case Y:return"StrictMode";case Ae:return"Suspense";case He:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case U:return e.displayName||"Context";case te:return(e._context.displayName||"Context")+".Consumer";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:_t(e.type)||"Memo";case Ue:t=e._payload,e=e._init;try{return _t(e(t))}catch{}}return null}var Mt=Array.isArray,B=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},be=[],ye=-1;function g(e){return{current:e}}function j(e){0>ye||(e.current=be[ye],be[ye]=null,ye--)}function H(e,t){ye++,be[ye]=e.current,e.current=t}var G=g(null),W=g(null),ae=g(null),ue=g(null);function Ke(e,t){switch(H(ae,t),H(W,e),H(G,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ku(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ku(t),e=wu(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(G),H(G,e)}function Be(){j(G),j(W),j(ae)}function ql(e){e.memoizedState!==null&&H(ue,e);var t=G.current,a=wu(t,e.type);t!==a&&(H(W,e),H(G,a))}function Gs(e){W.current===e&&(j(G),j(W)),ue.current===e&&(j(ue),Bs._currentValue=I)}var ui,Wo;function ja(e){if(ui===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||"",Wo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ui+e+Wo}var fi=!1;function mi(e,t){if(!e||fi)return"";fi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(A){var C=A}Reflect.construct(e,[],D)}else{try{D.call()}catch(A){C=A}e.call(D.prototype)}}else{try{throw Error()}catch(A){C=A}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(A){if(A&&C&&typeof A.stack=="string")return[A.stack,C.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),n=r[0],d=r[1];if(n&&d){var m=n.split(`
`),S=d.split(`
`);for(s=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;if(l===m.length||s===S.length)for(l=m.length-1,s=S.length-1;1<=l&&0<=s&&m[l]!==S[s];)s--;for(;1<=l&&0<=s;l--,s--)if(m[l]!==S[s]){if(l!==1||s!==1)do if(l--,s--,0>s||m[l]!==S[s]){var M=`
`+m[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=s);break}}}finally{fi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ja(a):""}function Kf(e,t){switch(e.tag){case 26:case 27:case 5:return ja(e.type);case 16:return ja("Lazy");case 13:return e.child!==t&&t!==null?ja("Suspense Fallback"):ja("Suspense");case 19:return ja("SuspenseList");case 0:case 15:return mi(e.type,!1);case 11:return mi(e.type.render,!1);case 1:return mi(e.type,!0);case 31:return ja("Activity");default:return""}}function $o(e){try{var t="",a=null;do t+=Kf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var pi=Object.prototype.hasOwnProperty,bi=i.unstable_scheduleCallback,hi=i.unstable_cancelCallback,If=i.unstable_shouldYield,Jf=i.unstable_requestPaint,it=i.unstable_now,Wf=i.unstable_getCurrentPriorityLevel,Po=i.unstable_ImmediatePriority,ed=i.unstable_UserBlockingPriority,qs=i.unstable_NormalPriority,$f=i.unstable_LowPriority,td=i.unstable_IdlePriority,Pf=i.log,em=i.unstable_setDisableYieldValue,Yl=null,nt=null;function ia(e){if(typeof Pf=="function"&&em(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Yl,e)}catch{}}var ot=Math.clz32?Math.clz32:lm,tm=Math.log,am=Math.LN2;function lm(e){return e>>>=0,e===0?32:31-(tm(e)/am|0)|0}var Ys=256,Vs=262144,Fs=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qs(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var s=0,r=e.suspendedLanes,n=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~r,l!==0?s=Oa(l):(n&=d,n!==0?s=Oa(n):a||(a=d&~e,a!==0&&(s=Oa(a))))):(d=l&~r,d!==0?s=Oa(d):n!==0?s=Oa(n):a||(a=l&~e,a!==0&&(s=Oa(a)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:s}function Vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function sm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(){var e=Fs;return Fs<<=1,(Fs&62914560)===0&&(Fs=4194304),e}function xi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Fl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rm(e,t,a,l,s,r){var n=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,m=e.expirationTimes,S=e.hiddenUpdates;for(a=n&~a;0<a;){var M=31-ot(a),D=1<<M;d[M]=0,m[M]=-1;var C=S[M];if(C!==null)for(S[M]=null,M=0;M<C.length;M++){var A=C[M];A!==null&&(A.lane&=-536870913)}a&=~D}l!==0&&ld(e,l,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(n&~t))}function ld(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ot(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function sd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ot(a),s=1<<l;s&t|e[l]&t&&(e[l]|=t),a&=~s}}function rd(e,t){var a=t&-t;return a=(a&42)!==0?1:gi(a),(a&(e.suspendedLanes|t))!==0?0:a}function gi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function yi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function id(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Qu(e.type))}function nd(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var na=Math.random().toString(36).slice(2),Ye="__reactFiber$"+na,We="__reactProps$"+na,el="__reactContainer$"+na,vi="__reactEvents$"+na,im="__reactListeners$"+na,nm="__reactHandles$"+na,od="__reactResources$"+na,Ql="__reactMarker$"+na;function ki(e){delete e[Ye],delete e[We],delete e[vi],delete e[im],delete e[nm]}function tl(e){var t=e[Ye];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[Ye]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Mu(e);e!==null;){if(a=e[Ye])return a;e=Mu(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[Ye]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ll(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[Ql]=!0}var dd=new Set,cd={};function La(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(cd[e]=t,e=0;e<t.length;e++)dd.add(t[e])}var om=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ud={},fd={};function dm(e){return pi.call(fd,e)?!0:pi.call(ud,e)?!1:om.test(e)?fd[e]=!0:(ud[e]=!0,!1)}function Xs(e,t,a){if(dm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Zs(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(n){a=""+n,r.call(this,n)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(n){a=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){if(!e._valueTracker){var t=md(e)?"checked":"value";e._valueTracker=cm(e,t,""+e[t])}}function pd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=md(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var um=/[\n"\\]/g;function gt(e){return e.replace(um,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Si(e,t,a,l,s,r,n,d){e.name="",n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"?e.type=n:e.removeAttribute("type"),t!=null?n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):n!=="submit"&&n!=="reset"||e.removeAttribute("value"),t!=null?Ci(e,n,xt(t)):a!=null?Ci(e,n,xt(a)):l!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+xt(d):e.removeAttribute("name")}function bd(e,t,a,l,s,r,n,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){wi(e);return}a=a!=null?""+xt(a):"",t=t!=null?""+xt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.name=n),wi(e)}function Ci(e,t,a){t==="number"&&Ks(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rl(e,t,a,l){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&l&&(e[a].defaultSelected=!0)}else{for(a=""+xt(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hd(e,t,a){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+xt(a):""}function xd(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Mt(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=xt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),wi(e)}function il(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var fm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||fm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yd(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&a[s]!==l&&gd(e,s,l)}else for(var r in t)t.hasOwnProperty(r)&&gd(e,r,t[r])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Is(e){return pm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qt(){}var Ai=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,ol=null;function vd(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(Si(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var s=l[We]||null;if(!s)throw Error(o(90));Si(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&pd(l)}break e;case"textarea":hd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&rl(e,!!a.multiple,t,!1)}}}var Ei=!1;function kd(e,t,a){if(Ei)return e(t,a);Ei=!0;try{var l=e(t);return l}finally{if(Ei=!1,(nl!==null||ol!==null)&&(Lr(),nl&&(t=nl,e=ol,ol=nl=null,vd(t),e)))for(t=0;t<e.length;t++)vd(e[t])}}function Zl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[We]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mi=!1;if(Yt)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{Mi=!1}var oa=null,Bi=null,Js=null;function wd(){if(Js)return Js;var e,t=Bi,a=t.length,l,s="value"in oa?oa.value:oa.textContent,r=s.length;for(e=0;e<a&&t[e]===s[e];e++);var n=a-e;for(l=1;l<=n&&t[a-l]===s[r-l];l++);return Js=s.slice(e,1<l?1-l:void 0)}function Ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $s(){return!0}function Sd(){return!1}function $e(e){function t(a,l,s,r,n){this._reactName=a,this._targetInst=s,this.type=l,this.nativeEvent=r,this.target=n,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?$s:Sd,this.isPropagationStopped=Sd,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=$e(Ha),Il=E({},Ha,{view:0,detail:0}),bm=$e(Il),Ni,zi,Jl,er=E({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jl&&(Jl&&e.type==="mousemove"?(Ni=e.screenX-Jl.screenX,zi=e.screenY-Jl.screenY):zi=Ni=0,Jl=e),Ni)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Cd=$e(er),hm=E({},er,{dataTransfer:0}),xm=$e(hm),gm=E({},Il,{relatedTarget:0}),Di=$e(gm),ym=E({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),vm=$e(ym),km=E({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wm=$e(km),Sm=E({},Ha,{data:0}),Td=$e(Sm),Cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Am[e])?!!t[e]:!1}function ji(){return Rm}var Em=E({},Il,{key:function(e){if(e.key){var t=Cm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?Ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mm=$e(Em),Bm=E({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=$e(Bm),Nm=E({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),zm=$e(Nm),Dm=E({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),jm=$e(Dm),Om=E({},er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lm=$e(Om),Hm=E({},Ha,{newState:0,oldState:0}),Um=$e(Hm),_m=[9,13,27,32],Oi=Yt&&"CompositionEvent"in window,Wl=null;Yt&&"documentMode"in document&&(Wl=document.documentMode);var Gm=Yt&&"TextEvent"in window&&!Wl,Rd=Yt&&(!Oi||Wl&&8<Wl&&11>=Wl),Ed=" ",Md=!1;function Bd(e,t){switch(e){case"keyup":return _m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function qm(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Md=!0,Ed);case"textInput":return e=t.data,e===Ed&&Md?null:e;default:return null}}function Ym(e,t){if(dl)return e==="compositionend"||!Oi&&Bd(e,t)?(e=wd(),Js=Bi=oa=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rd&&t.locale!=="ko"?null:t.data;default:return null}}var Vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vm[e.type]:t==="textarea"}function Dd(e,t,a,l){nl?ol?ol.push(l):ol=[l]:nl=l,t=Vr(t,"onChange"),0<t.length&&(a=new Ps("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var $l=null,Pl=null;function Fm(e){bu(e,0)}function tr(e){var t=Xl(e);if(pd(t))return e}function jd(e,t){if(e==="change")return t}var Od=!1;if(Yt){var Li;if(Yt){var Hi="oninput"in document;if(!Hi){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),Hi=typeof Ld.oninput=="function"}Li=Hi}else Li=!1;Od=Li&&(!document.documentMode||9<document.documentMode)}function Hd(){$l&&($l.detachEvent("onpropertychange",Ud),Pl=$l=null)}function Ud(e){if(e.propertyName==="value"&&tr(Pl)){var t=[];Dd(t,Pl,e,Ri(e)),kd(Fm,t)}}function Qm(e,t,a){e==="focusin"?(Hd(),$l=t,Pl=a,$l.attachEvent("onpropertychange",Ud)):e==="focusout"&&Hd()}function Xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tr(Pl)}function Zm(e,t){if(e==="click")return tr(t)}function Km(e,t){if(e==="input"||e==="change")return tr(t)}function Im(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Im;function es(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var s=a[l];if(!pi.call(t,s)||!dt(e[s],t[s]))return!1}return!0}function _d(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gd(e,t){var a=_d(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_d(a)}}function qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ks(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ks(e.document)}return t}function Ui(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jm=Yt&&"documentMode"in document&&11>=document.documentMode,cl=null,_i=null,ts=null,Gi=!1;function Vd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gi||cl==null||cl!==Ks(l)||(l=cl,"selectionStart"in l&&Ui(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ts&&es(ts,l)||(ts=l,l=Vr(_i,"onSelect"),0<l.length&&(t=new Ps("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=cl)))}function Ua(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},qi={},Fd={};Yt&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function _a(e){if(qi[e])return qi[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Fd)return qi[e]=t[a];return e}var Qd=_a("animationend"),Xd=_a("animationiteration"),Zd=_a("animationstart"),Wm=_a("transitionrun"),$m=_a("transitionstart"),Pm=_a("transitioncancel"),Kd=_a("transitionend"),Id=new Map,Yi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yi.push("scrollEnd");function Bt(e,t){Id.set(e,t),La(t,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yt=[],fl=0,Vi=0;function lr(){for(var e=fl,t=Vi=fl=0;t<e;){var a=yt[t];yt[t++]=null;var l=yt[t];yt[t++]=null;var s=yt[t];yt[t++]=null;var r=yt[t];if(yt[t++]=null,l!==null&&s!==null){var n=l.pending;n===null?s.next=s:(s.next=n.next,n.next=s),l.pending=s}r!==0&&Jd(a,s,r)}}function sr(e,t,a,l){yt[fl++]=e,yt[fl++]=t,yt[fl++]=a,yt[fl++]=l,Vi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Fi(e,t,a,l){return sr(e,t,a,l),rr(e)}function Ga(e,t){return sr(e,null,null,t),rr(e)}function Jd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var s=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-ot(a),e=r.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=a|536870912),r):null}function rr(e){if(50<Ss)throw Ss=0,eo=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ml={};function ep(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new ep(e,t,a,l)}function Qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vt(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Wd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ir(e,t,a,l,s,r){var n=0;if(l=e,typeof e=="function")Qi(e)&&(n=1);else if(typeof e=="string")n=rb(e,a,G.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=ct(31,a,t,s),e.elementType=Re,e.lanes=r,e;case K:return qa(a.children,s,r,t);case Y:n=8,s|=24;break;case F:return e=ct(12,a,t,s|2),e.elementType=F,e.lanes=r,e;case Ae:return e=ct(13,a,t,s),e.elementType=Ae,e.lanes=r,e;case He:return e=ct(19,a,t,s),e.elementType=He,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:n=10;break e;case te:n=9;break e;case fe:n=11;break e;case P:n=14;break e;case Ue:n=16,l=null;break e}n=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ct(n,a,t,s),t.elementType=e,t.type=l,t.lanes=r,t}function qa(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function Xi(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function $d(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Zi(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pd=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var a=Pd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:$o(t)},Pd.set(e,t),t)}return{value:e,source:t,stack:$o(t)}}var pl=[],bl=0,nr=null,as=0,kt=[],wt=0,da=null,jt=1,Ot="";function Ft(e,t){pl[bl++]=as,pl[bl++]=nr,nr=e,as=t}function e0(e,t,a){kt[wt++]=jt,kt[wt++]=Ot,kt[wt++]=da,da=e;var l=jt;e=Ot;var s=32-ot(l)-1;l&=~(1<<s),a+=1;var r=32-ot(t)+s;if(30<r){var n=s-s%5;r=(l&(1<<n)-1).toString(32),l>>=n,s-=n,jt=1<<32-ot(t)+s|a<<s|l,Ot=r+e}else jt=1<<r|a<<s|l,Ot=e}function Ki(e){e.return!==null&&(Ft(e,1),e0(e,1,0))}function Ii(e){for(;e===nr;)nr=pl[--bl],pl[bl]=null,as=pl[--bl],pl[bl]=null;for(;e===da;)da=kt[--wt],kt[wt]=null,Ot=kt[--wt],kt[wt]=null,jt=kt[--wt],kt[wt]=null}function t0(e,t){kt[wt++]=jt,kt[wt++]=Ot,kt[wt++]=da,jt=t.id,Ot=t.overflow,da=e}var Ve=null,we=null,ne=!1,ca=null,St=!1,Ji=Error(o(519));function ua(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ls(vt(t,e)),Ji}function a0(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ye]=e,t[We]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Ts.length;a++)se(Ts[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),bd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),xd(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||yu(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=qt),t=!0):t=!1,t||ua(e,!0)}function l0(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Ve=Ve.return}}function hl(e){if(e!==Ve)return!1;if(!ne)return l0(e),ne=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ho(e.type,e.memoizedProps)),a=!a),a&&we&&ua(e),l0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));we=Eu(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));we=Eu(e)}else t===27?(t=we,Ta(e.type)?(e=ko,ko=null,we=e):we=t):we=Ve?Tt(e.stateNode.nextSibling):null;return!0}function Ya(){we=Ve=null,ne=!1}function Wi(){var e=ca;return e!==null&&(at===null?at=e:at.push.apply(at,e),ca=null),e}function ls(e){ca===null?ca=[e]:ca.push(e)}var $i=g(null),Va=null,Qt=null;function fa(e,t,a){H($i,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=$i.current,j($i)}function Pi(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function en(e,t,a,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var n=s.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=s;for(var m=0;m<t.length;m++)if(d.context===t[m]){r.lanes|=a,d=r.alternate,d!==null&&(d.lanes|=a),Pi(r.return,a,e),l||(n=null);break e}r=d.next}}else if(s.tag===18){if(n=s.return,n===null)throw Error(o(341));n.lanes|=a,r=n.alternate,r!==null&&(r.lanes|=a),Pi(n,a,e),n=null}else n=s.child;if(n!==null)n.return=s;else for(n=s;n!==null;){if(n===e){n=null;break}if(s=n.sibling,s!==null){s.return=n.return,n=s;break}n=n.return}s=n}}function xl(e,t,a,l){e=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var n=s.alternate;if(n===null)throw Error(o(387));if(n=n.memoizedProps,n!==null){var d=s.type;dt(s.pendingProps.value,n.value)||(e!==null?e.push(d):e=[d])}}else if(s===ue.current){if(n=s.alternate,n===null)throw Error(o(387));n.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Bs):e=[Bs])}s=s.return}e!==null&&en(t,e,a,l),t.flags|=262144}function or(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){Va=e,Qt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return s0(Va,e)}function dr(e,t){return Va===null&&Fa(e),s0(e,t)}function s0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Qt===null){if(e===null)throw Error(o(308));Qt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Qt=Qt.next=t;return a}var tp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ap=i.unstable_scheduleCallback,lp=i.unstable_NormalPriority,De={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tn(){return{controller:new tp,data:new Map,refCount:0}}function ss(e){e.refCount--,e.refCount===0&&ap(lp,function(){e.controller.abort()})}var rs=null,an=0,gl=0,yl=null;function sp(e,t){if(rs===null){var a=rs=[];an=0,gl=io(),yl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return an++,t.then(r0,r0),t}function r0(){if(--an===0&&rs!==null){yl!==null&&(yl.status="fulfilled");var e=rs;rs=null,gl=0,yl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function rp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),l}var i0=B.S;B.S=function(e,t){Vc=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sp(e,t),i0!==null&&i0(e,t)};var Qa=g(null);function ln(){var e=Qa.current;return e!==null?e:ve.pooledCache}function cr(e,t){t===null?H(Qa,Qa.current):H(Qa,t.pool)}function n0(){var e=ln();return e===null?null:{parent:De._currentValue,pool:e}}var vl=Error(o(460)),sn=Error(o(474)),ur=Error(o(542)),fr={then:function(){}};function o0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function d0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(qt,qt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,u0(e),e;default:if(typeof t.status=="string")t.then(qt,qt);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,u0(e),e}throw Za=t,vl}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,vl):a}}var Za=null;function c0(){if(Za===null)throw Error(o(459));var e=Za;return Za=null,e}function u0(e){if(e===vl||e===ur)throw Error(o(483))}var kl=null,is=0;function mr(e){var t=is;return is+=1,kl===null&&(kl=[]),d0(kl,e,t)}function ns(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pr(e,t){throw t.$$typeof===O?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function f0(e){function t(y,h){if(e){var w=y.deletions;w===null?(y.deletions=[h],y.flags|=16):w.push(h)}}function a(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function l(y){for(var h=new Map;y!==null;)y.key!==null?h.set(y.key,y):h.set(y.index,y),y=y.sibling;return h}function s(y,h){return y=Vt(y,h),y.index=0,y.sibling=null,y}function r(y,h,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<h?(y.flags|=67108866,h):w):(y.flags|=67108866,h)):(y.flags|=1048576,h)}function n(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function d(y,h,w,N){return h===null||h.tag!==6?(h=Xi(w,y.mode,N),h.return=y,h):(h=s(h,w),h.return=y,h)}function m(y,h,w,N){var Q=w.type;return Q===K?M(y,h,w.props.children,N,w.key):h!==null&&(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ue&&Xa(Q)===h.type)?(h=s(h,w.props),ns(h,w),h.return=y,h):(h=ir(w.type,w.key,w.props,null,y.mode,N),ns(h,w),h.return=y,h)}function S(y,h,w,N){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=Zi(w,y.mode,N),h.return=y,h):(h=s(h,w.children||[]),h.return=y,h)}function M(y,h,w,N,Q){return h===null||h.tag!==7?(h=qa(w,y.mode,N,Q),h.return=y,h):(h=s(h,w),h.return=y,h)}function D(y,h,w){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=Xi(""+h,y.mode,w),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case V:return w=ir(h.type,h.key,h.props,null,y.mode,w),ns(w,h),w.return=y,w;case X:return h=Zi(h,y.mode,w),h.return=y,h;case Ue:return h=Xa(h),D(y,h,w)}if(Mt(h)||Je(h))return h=qa(h,y.mode,w,null),h.return=y,h;if(typeof h.then=="function")return D(y,mr(h),w);if(h.$$typeof===U)return D(y,dr(y,h),w);pr(y,h)}return null}function C(y,h,w,N){var Q=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return Q!==null?null:d(y,h,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case V:return w.key===Q?m(y,h,w,N):null;case X:return w.key===Q?S(y,h,w,N):null;case Ue:return w=Xa(w),C(y,h,w,N)}if(Mt(w)||Je(w))return Q!==null?null:M(y,h,w,N,null);if(typeof w.then=="function")return C(y,h,mr(w),N);if(w.$$typeof===U)return C(y,h,dr(y,w),N);pr(y,w)}return null}function A(y,h,w,N,Q){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return y=y.get(w)||null,d(h,y,""+N,Q);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case V:return y=y.get(N.key===null?w:N.key)||null,m(h,y,N,Q);case X:return y=y.get(N.key===null?w:N.key)||null,S(h,y,N,Q);case Ue:return N=Xa(N),A(y,h,w,N,Q)}if(Mt(N)||Je(N))return y=y.get(w)||null,M(h,y,N,Q,null);if(typeof N.then=="function")return A(y,h,w,mr(N),Q);if(N.$$typeof===U)return A(y,h,w,dr(h,N),Q);pr(h,N)}return null}function _(y,h,w,N){for(var Q=null,oe=null,q=h,ee=h=0,ie=null;q!==null&&ee<w.length;ee++){q.index>ee?(ie=q,q=null):ie=q.sibling;var de=C(y,q,w[ee],N);if(de===null){q===null&&(q=ie);break}e&&q&&de.alternate===null&&t(y,q),h=r(de,h,ee),oe===null?Q=de:oe.sibling=de,oe=de,q=ie}if(ee===w.length)return a(y,q),ne&&Ft(y,ee),Q;if(q===null){for(;ee<w.length;ee++)q=D(y,w[ee],N),q!==null&&(h=r(q,h,ee),oe===null?Q=q:oe.sibling=q,oe=q);return ne&&Ft(y,ee),Q}for(q=l(q);ee<w.length;ee++)ie=A(q,y,ee,w[ee],N),ie!==null&&(e&&ie.alternate!==null&&q.delete(ie.key===null?ee:ie.key),h=r(ie,h,ee),oe===null?Q=ie:oe.sibling=ie,oe=ie);return e&&q.forEach(function(Ba){return t(y,Ba)}),ne&&Ft(y,ee),Q}function Z(y,h,w,N){if(w==null)throw Error(o(151));for(var Q=null,oe=null,q=h,ee=h=0,ie=null,de=w.next();q!==null&&!de.done;ee++,de=w.next()){q.index>ee?(ie=q,q=null):ie=q.sibling;var Ba=C(y,q,de.value,N);if(Ba===null){q===null&&(q=ie);break}e&&q&&Ba.alternate===null&&t(y,q),h=r(Ba,h,ee),oe===null?Q=Ba:oe.sibling=Ba,oe=Ba,q=ie}if(de.done)return a(y,q),ne&&Ft(y,ee),Q;if(q===null){for(;!de.done;ee++,de=w.next())de=D(y,de.value,N),de!==null&&(h=r(de,h,ee),oe===null?Q=de:oe.sibling=de,oe=de);return ne&&Ft(y,ee),Q}for(q=l(q);!de.done;ee++,de=w.next())de=A(q,y,ee,de.value,N),de!==null&&(e&&de.alternate!==null&&q.delete(de.key===null?ee:de.key),h=r(de,h,ee),oe===null?Q=de:oe.sibling=de,oe=de);return e&&q.forEach(function(hb){return t(y,hb)}),ne&&Ft(y,ee),Q}function ge(y,h,w,N){if(typeof w=="object"&&w!==null&&w.type===K&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case V:e:{for(var Q=w.key;h!==null;){if(h.key===Q){if(Q=w.type,Q===K){if(h.tag===7){a(y,h.sibling),N=s(h,w.props.children),N.return=y,y=N;break e}}else if(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ue&&Xa(Q)===h.type){a(y,h.sibling),N=s(h,w.props),ns(N,w),N.return=y,y=N;break e}a(y,h);break}else t(y,h);h=h.sibling}w.type===K?(N=qa(w.props.children,y.mode,N,w.key),N.return=y,y=N):(N=ir(w.type,w.key,w.props,null,y.mode,N),ns(N,w),N.return=y,y=N)}return n(y);case X:e:{for(Q=w.key;h!==null;){if(h.key===Q)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){a(y,h.sibling),N=s(h,w.children||[]),N.return=y,y=N;break e}else{a(y,h);break}else t(y,h);h=h.sibling}N=Zi(w,y.mode,N),N.return=y,y=N}return n(y);case Ue:return w=Xa(w),ge(y,h,w,N)}if(Mt(w))return _(y,h,w,N);if(Je(w)){if(Q=Je(w),typeof Q!="function")throw Error(o(150));return w=Q.call(w),Z(y,h,w,N)}if(typeof w.then=="function")return ge(y,h,mr(w),N);if(w.$$typeof===U)return ge(y,h,dr(y,w),N);pr(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,h!==null&&h.tag===6?(a(y,h.sibling),N=s(h,w),N.return=y,y=N):(a(y,h),N=Xi(w,y.mode,N),N.return=y,y=N),n(y)):a(y,h)}return function(y,h,w,N){try{is=0;var Q=ge(y,h,w,N);return kl=null,Q}catch(q){if(q===vl||q===ur)throw q;var oe=ct(29,q,null,y.mode);return oe.lanes=N,oe.return=y,oe}finally{}}}var Ka=f0(!0),m0=f0(!1),ma=!1;function rn(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nn(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ce&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=rr(e),Jd(e,null,a),t}return sr(e,l,t,a),rr(e)}function os(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,sd(e,a)}}function on(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var s=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var n={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?s=r=n:r=r.next=n,a=a.next}while(a!==null);r===null?s=r=t:r=r.next=t}else s=r=t;a={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var dn=!1;function ds(){if(dn){var e=yl;if(e!==null)throw e}}function cs(e,t,a,l){dn=!1;var s=e.updateQueue;ma=!1;var r=s.firstBaseUpdate,n=s.lastBaseUpdate,d=s.shared.pending;if(d!==null){s.shared.pending=null;var m=d,S=m.next;m.next=null,n===null?r=S:n.next=S,n=m;var M=e.alternate;M!==null&&(M=M.updateQueue,d=M.lastBaseUpdate,d!==n&&(d===null?M.firstBaseUpdate=S:d.next=S,M.lastBaseUpdate=m))}if(r!==null){var D=s.baseState;n=0,M=S=m=null,d=r;do{var C=d.lane&-536870913,A=C!==d.lane;if(A?(re&C)===C:(l&C)===C){C!==0&&C===gl&&(dn=!0),M!==null&&(M=M.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var _=e,Z=d;C=t;var ge=a;switch(Z.tag){case 1:if(_=Z.payload,typeof _=="function"){D=_.call(ge,D,C);break e}D=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=Z.payload,C=typeof _=="function"?_.call(ge,D,C):_,C==null)break e;D=E({},D,C);break e;case 2:ma=!0}}C=d.callback,C!==null&&(e.flags|=64,A&&(e.flags|=8192),A=s.callbacks,A===null?s.callbacks=[C]:A.push(C))}else A={lane:C,tag:d.tag,payload:d.payload,callback:d.callback,next:null},M===null?(S=M=A,m=D):M=M.next=A,n|=C;if(d=d.next,d===null){if(d=s.shared.pending,d===null)break;A=d,d=A.next,A.next=null,s.lastBaseUpdate=A,s.shared.pending=null}}while(!0);M===null&&(m=D),s.baseState=m,s.firstBaseUpdate=S,s.lastBaseUpdate=M,r===null&&(s.shared.lanes=0),va|=n,e.lanes=n,e.memoizedState=D}}function p0(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function b0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)p0(a[e],t)}var wl=g(null),br=g(0);function h0(e,t){e=ta,H(br,e),H(wl,t),ta=e|t.baseLanes}function cn(){H(br,ta),H(wl,wl.current)}function un(){ta=br.current,j(wl),j(br)}var ut=g(null),Ct=null;function ha(e){var t=e.alternate;H(Ne,Ne.current&1),H(ut,e),Ct===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(Ct=e)}function fn(e){H(Ne,Ne.current),H(ut,e),Ct===null&&(Ct=e)}function x0(e){e.tag===22?(H(Ne,Ne.current),H(ut,e),Ct===null&&(Ct=e)):xa()}function xa(){H(Ne,Ne.current),H(ut,ut.current)}function ft(e){j(ut),Ct===e&&(Ct=null),j(Ne)}var Ne=g(0);function hr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yo(a)||vo(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,$=null,he=null,je=null,xr=!1,Sl=!1,Ia=!1,gr=0,us=0,Cl=null,ip=0;function Ee(){throw Error(o(321))}function mn(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function pn(e,t,a,l,s,r){return Zt=r,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?ec:Mn,Ia=!1,r=a(l,s),Ia=!1,Sl&&(r=y0(t,a,l,s)),g0(e),r}function g0(e){B.H=ps;var t=he!==null&&he.next!==null;if(Zt=0,je=he=$=null,xr=!1,us=0,Cl=null,t)throw Error(o(300));e===null||Oe||(e=e.dependencies,e!==null&&or(e)&&(Oe=!0))}function y0(e,t,a,l){$=e;var s=0;do{if(Sl&&(Cl=null),us=0,Sl=!1,25<=s)throw Error(o(301));if(s+=1,je=he=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=tc,r=t(a,l)}while(Sl);return r}function np(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?fs(t):t,e=e.useState()[0],(he!==null?he.memoizedState:null)!==e&&($.flags|=1024),t}function bn(){var e=gr!==0;return gr=0,e}function hn(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function xn(e){if(xr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}xr=!1}Zt=0,je=he=$=null,Sl=!1,us=gr=0,Cl=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?$.memoizedState=je=e:je=je.next=e,je}function ze(){if(he===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=je===null?$.memoizedState:je.next;if(t!==null)je=t,he=e;else{if(e===null)throw $.alternate===null?Error(o(467)):Error(o(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},je===null?$.memoizedState=je=e:je=je.next=e}return je}function yr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(e){var t=us;return us+=1,Cl===null&&(Cl=[]),e=d0(Cl,e,t),t=$,(je===null?t.memoizedState:je.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?ec:Mn),e}function vr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fs(e);if(e.$$typeof===U)return Fe(e)}throw Error(o(438,String(e)))}function gn(e){var t=null,a=$.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=$.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=yr(),$.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=st;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function kr(e){var t=ze();return yn(t,he,e)}function yn(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var s=e.baseQueue,r=l.pending;if(r!==null){if(s!==null){var n=s.next;s.next=r.next,r.next=n}t.baseQueue=s=r,l.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var d=n=null,m=null,S=t,M=!1;do{var D=S.lane&-536870913;if(D!==S.lane?(re&D)===D:(Zt&D)===D){var C=S.revertLane;if(C===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),D===gl&&(M=!0);else if((Zt&C)===C){S=S.next,C===gl&&(M=!0);continue}else D={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},m===null?(d=m=D,n=r):m=m.next=D,$.lanes|=C,va|=C;D=S.action,Ia&&a(r,D),r=S.hasEagerState?S.eagerState:a(r,D)}else C={lane:D,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},m===null?(d=m=C,n=r):m=m.next=C,$.lanes|=D,va|=D;S=S.next}while(S!==null&&S!==t);if(m===null?n=r:m.next=d,!dt(r,e.memoizedState)&&(Oe=!0,M&&(a=yl,a!==null)))throw a;e.memoizedState=r,e.baseState=n,e.baseQueue=m,l.lastRenderedState=r}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function vn(e){var t=ze(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,s=a.pending,r=t.memoizedState;if(s!==null){a.pending=null;var n=s=s.next;do r=e(r,n.action),n=n.next;while(n!==s);dt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function v0(e,t,a){var l=$,s=ze(),r=ne;if(r){if(a===void 0)throw Error(o(407));a=a()}else a=t();var n=!dt((he||s).memoizedState,a);if(n&&(s.memoizedState=a,Oe=!0),s=s.queue,Sn(S0.bind(null,l,s,e),[e]),s.getSnapshot!==t||n||je!==null&&je.memoizedState.tag&1){if(l.flags|=2048,Tl(9,{destroy:void 0},w0.bind(null,l,s,a,t),null),ve===null)throw Error(o(349));r||(Zt&127)!==0||k0(l,t,a)}return a}function k0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=$.updateQueue,t===null?(t=yr(),$.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function w0(e,t,a,l){t.value=a,t.getSnapshot=l,C0(t)&&T0(e)}function S0(e,t,a){return a(function(){C0(t)&&T0(e)})}function C0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function T0(e){var t=Ga(e,2);t!==null&&lt(t,e,2)}function kn(e){var t=Ie();if(typeof e=="function"){var a=e;if(e=a(),Ia){ia(!0);try{a()}finally{ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function A0(e,t,a,l){return e.baseState=a,yn(e,he,typeof l=="function"?l:Kt)}function op(e,t,a,l,s){if(Cr(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(n){r.listeners.push(n)}};B.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,R0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function R0(e,t){var a=t.action,l=t.payload,s=e.state;if(t.isTransition){var r=B.T,n={};B.T=n;try{var d=a(s,l),m=B.S;m!==null&&m(n,d),E0(e,t,d)}catch(S){wn(e,t,S)}finally{r!==null&&n.types!==null&&(r.types=n.types),B.T=r}}else try{r=a(s,l),E0(e,t,r)}catch(S){wn(e,t,S)}}function E0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){M0(e,t,l)},function(l){return wn(e,t,l)}):M0(e,t,a)}function M0(e,t,a){t.status="fulfilled",t.value=a,B0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,R0(e,a)))}function wn(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,B0(t),t=t.next;while(t!==l)}e.action=null}function B0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function N0(e,t){return t}function z0(e,t){if(ne){var a=ve.formState;if(a!==null){e:{var l=$;if(ne){if(we){t:{for(var s=we,r=St;s.nodeType!==8;){if(!r){s=null;break t}if(s=Tt(s.nextSibling),s===null){s=null;break t}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){we=Tt(s.nextSibling),l=s.data==="F!";break e}}ua(l)}l=!1}l&&(t=a[0])}}return a=Ie(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:N0,lastRenderedState:t},a.queue=l,a=W0.bind(null,$,l),l.dispatch=a,l=kn(!1),r=En.bind(null,$,!1,l.queue),l=Ie(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,a=op.bind(null,$,s,r,a),s.dispatch=a,l.memoizedState=e,[t,a,!1]}function D0(e){var t=ze();return j0(t,he,e)}function j0(e,t,a){if(t=yn(e,t,N0)[0],e=kr(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fs(t)}catch(n){throw n===vl?ur:n}else l=t;t=ze();var s=t.queue,r=s.dispatch;return a!==t.memoizedState&&($.flags|=2048,Tl(9,{destroy:void 0},dp.bind(null,s,a),null)),[l,r,e]}function dp(e,t){e.action=t}function O0(e){var t=ze(),a=he;if(a!==null)return j0(t,a,e);ze(),t=t.memoizedState,a=ze();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Tl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=$.updateQueue,t===null&&(t=yr(),$.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function L0(){return ze().memoizedState}function wr(e,t,a,l){var s=Ie();$.flags|=e,s.memoizedState=Tl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Sr(e,t,a,l){var s=ze();l=l===void 0?null:l;var r=s.memoizedState.inst;he!==null&&l!==null&&mn(l,he.memoizedState.deps)?s.memoizedState=Tl(t,r,a,l):($.flags|=e,s.memoizedState=Tl(1|t,r,a,l))}function H0(e,t){wr(8390656,8,e,t)}function Sn(e,t){Sr(2048,8,e,t)}function cp(e){$.flags|=4;var t=$.updateQueue;if(t===null)t=yr(),$.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function U0(e){var t=ze().memoizedState;return cp({ref:t,nextImpl:e}),function(){if((ce&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function _0(e,t){return Sr(4,2,e,t)}function G0(e,t){return Sr(4,4,e,t)}function q0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Y0(e,t,a){a=a!=null?a.concat([e]):null,Sr(4,4,q0.bind(null,t,e),a)}function Cn(){}function V0(e,t){var a=ze();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&mn(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function F0(e,t){var a=ze();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&mn(t,l[1]))return l[0];if(l=e(),Ia){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l}function Tn(e,t,a){return a===void 0||(Zt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Qc(),$.lanes|=e,va|=e,a)}function Q0(e,t,a,l){return dt(a,t)?a:wl.current!==null?(e=Tn(e,a,l),dt(e,t)||(Oe=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(re&261930)===0?(Oe=!0,e.memoizedState=a):(e=Qc(),$.lanes|=e,va|=e,t)}function X0(e,t,a,l,s){var r=L.p;L.p=r!==0&&8>r?r:8;var n=B.T,d={};B.T=d,En(e,!1,t,a);try{var m=s(),S=B.S;if(S!==null&&S(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var M=rp(m,l);ms(e,t,M,bt(e))}else ms(e,t,l,bt(e))}catch(D){ms(e,t,{then:function(){},status:"rejected",reason:D},bt())}finally{L.p=r,n!==null&&d.types!==null&&(n.types=d.types),B.T=n}}function up(){}function An(e,t,a,l){if(e.tag!==5)throw Error(o(476));var s=Z0(e).queue;X0(e,s,t,I,a===null?up:function(){return K0(e),a(l)})}function Z0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:I},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function K0(e){var t=Z0(e);t.next===null&&(t=e.alternate.memoizedState),ms(e,t.next.queue,{},bt())}function Rn(){return Fe(Bs)}function I0(){return ze().memoizedState}function J0(){return ze().memoizedState}function fp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=pa(a);var l=ba(t,e,a);l!==null&&(lt(l,t,a),os(l,t,a)),t={cache:tn()},e.payload=t;return}t=t.return}}function mp(e,t,a){var l=bt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cr(e)?$0(t,a):(a=Fi(e,t,a,l),a!==null&&(lt(a,e,l),P0(a,t,l)))}function W0(e,t,a){var l=bt();ms(e,t,a,l)}function ms(e,t,a,l){var s={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cr(e))$0(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var n=t.lastRenderedState,d=r(n,a);if(s.hasEagerState=!0,s.eagerState=d,dt(d,n))return sr(e,t,s,0),ve===null&&lr(),!1}catch{}finally{}if(a=Fi(e,t,s,l),a!==null)return lt(a,e,l),P0(a,t,l),!0}return!1}function En(e,t,a,l){if(l={lane:2,revertLane:io(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Cr(e)){if(t)throw Error(o(479))}else t=Fi(e,a,l,2),t!==null&&lt(t,e,2)}function Cr(e){var t=e.alternate;return e===$||t!==null&&t===$}function $0(e,t){Sl=xr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function P0(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,sd(e,a)}}var ps={readContext:Fe,use:vr,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};ps.useEffectEvent=Ee;var ec={readContext:Fe,use:vr,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:H0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wr(4194308,4,q0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){wr(4,2,e,t)},useMemo:function(e,t){var a=Ie();t=t===void 0?null:t;var l=e();if(Ia){ia(!0);try{e()}finally{ia(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ie();if(a!==void 0){var s=a(t);if(Ia){ia(!0);try{a(t)}finally{ia(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=mp.bind(null,$,e),[l.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=kn(e);var t=e.queue,a=W0.bind(null,$,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Cn,useDeferredValue:function(e,t){var a=Ie();return Tn(a,e,t)},useTransition:function(){var e=kn(!1);return e=X0.bind(null,$,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=$,s=Ie();if(ne){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ve===null)throw Error(o(349));(re&127)!==0||k0(l,t,a)}s.memoizedState=a;var r={value:a,getSnapshot:t};return s.queue=r,H0(S0.bind(null,l,r,e),[e]),l.flags|=2048,Tl(9,{destroy:void 0},w0.bind(null,l,r,a,t),null),a},useId:function(){var e=Ie(),t=ve.identifierPrefix;if(ne){var a=Ot,l=jt;a=(l&~(1<<32-ot(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=ip++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rn,useFormState:z0,useActionState:z0,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=En.bind(null,$,!0,a),a.dispatch=t,[e,t]},useMemoCache:gn,useCacheRefresh:function(){return Ie().memoizedState=fp.bind(null,$)},useEffectEvent:function(e){var t=Ie(),a={impl:e};return t.memoizedState=a,function(){if((ce&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Mn={readContext:Fe,use:vr,useCallback:V0,useContext:Fe,useEffect:Sn,useImperativeHandle:Y0,useInsertionEffect:_0,useLayoutEffect:G0,useMemo:F0,useReducer:kr,useRef:L0,useState:function(){return kr(Kt)},useDebugValue:Cn,useDeferredValue:function(e,t){var a=ze();return Q0(a,he.memoizedState,e,t)},useTransition:function(){var e=kr(Kt)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:fs(e),t]},useSyncExternalStore:v0,useId:I0,useHostTransitionStatus:Rn,useFormState:D0,useActionState:D0,useOptimistic:function(e,t){var a=ze();return A0(a,he,e,t)},useMemoCache:gn,useCacheRefresh:J0};Mn.useEffectEvent=U0;var tc={readContext:Fe,use:vr,useCallback:V0,useContext:Fe,useEffect:Sn,useImperativeHandle:Y0,useInsertionEffect:_0,useLayoutEffect:G0,useMemo:F0,useReducer:vn,useRef:L0,useState:function(){return vn(Kt)},useDebugValue:Cn,useDeferredValue:function(e,t){var a=ze();return he===null?Tn(a,e,t):Q0(a,he.memoizedState,e,t)},useTransition:function(){var e=vn(Kt)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:fs(e),t]},useSyncExternalStore:v0,useId:I0,useHostTransitionStatus:Rn,useFormState:O0,useActionState:O0,useOptimistic:function(e,t){var a=ze();return he!==null?A0(a,he,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:gn,useCacheRefresh:J0};tc.useEffectEvent=U0;function Bn(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nn={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=bt(),s=pa(l);s.payload=t,a!=null&&(s.callback=a),t=ba(e,s,l),t!==null&&(lt(t,e,l),os(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=bt(),s=pa(l);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=ba(e,s,l),t!==null&&(lt(t,e,l),os(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=ba(e,l,a),t!==null&&(lt(t,e,a),os(t,e,a))}};function ac(e,t,a,l,s,r,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,n):t.prototype&&t.prototype.isPureReactComponent?!es(a,l)||!es(s,r):!0}function lc(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Nn.enqueueReplaceState(t,t.state,null)}function Ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function sc(e){ar(e)}function rc(e){console.error(e)}function ic(e){ar(e)}function Tr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function nc(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function zn(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Tr(e,t)},a}function oc(e){return e=pa(e),e.tag=3,e}function dc(e,t,a,l){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var r=l.value;e.payload=function(){return s(r)},e.callback=function(){nc(t,a,l)}}var n=a.stateNode;n!==null&&typeof n.componentDidCatch=="function"&&(e.callback=function(){nc(t,a,l),typeof s!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function pp(e,t,a,l,s){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&xl(t,a,s,!0),a=ut.current,a!==null){switch(a.tag){case 31:case 13:return Ct===null?Hr():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=s,l===fr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),lo(e,l,s)),!1;case 22:return a.flags|=65536,l===fr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),lo(e,l,s)),!1}throw Error(o(435,a.tag))}return lo(e,l,s),Hr(),!1}if(ne)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==Ji&&(e=Error(o(422),{cause:l}),ls(vt(e,a)))):(l!==Ji&&(t=Error(o(423),{cause:l}),ls(vt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=vt(l,a),s=zn(e.stateNode,l,s),on(e,s),Me!==4&&(Me=2)),!1;var r=Error(o(520),{cause:l});if(r=vt(r,a),ws===null?ws=[r]:ws.push(r),Me!==4&&(Me=2),t===null)return!0;l=vt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=zn(a.stateNode,l,e),on(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ka===null||!ka.has(r))))return a.flags|=65536,s&=-s,a.lanes|=s,s=oc(s),dc(s,e,a,l),on(a,s),!1}a=a.return}while(a!==null);return!1}var Dn=Error(o(461)),Oe=!1;function Qe(e,t,a,l){t.child=e===null?m0(t,null,a,l):Ka(t,e.child,a,l)}function cc(e,t,a,l,s){a=a.render;var r=t.ref;if("ref"in l){var n={};for(var d in l)d!=="ref"&&(n[d]=l[d])}else n=l;return Fa(t),l=pn(e,t,a,n,r,s),d=bn(),e!==null&&!Oe?(hn(e,t,s),It(e,t,s)):(ne&&d&&Ki(t),t.flags|=1,Qe(e,t,l,s),t.child)}function uc(e,t,a,l,s){if(e===null){var r=a.type;return typeof r=="function"&&!Qi(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,fc(e,t,r,l,s)):(e=ir(a.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!qn(e,s)){var n=r.memoizedProps;if(a=a.compare,a=a!==null?a:es,a(n,l)&&e.ref===t.ref)return It(e,t,s)}return t.flags|=1,e=Vt(r,l),e.ref=t.ref,e.return=t,t.child=e}function fc(e,t,a,l,s){if(e!==null){var r=e.memoizedProps;if(es(r,l)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=l=r,qn(e,s))(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,It(e,t,s)}return jn(e,t,a,l,s)}function mc(e,t,a,l){var s=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~r}else l=0,t.child=null;return pc(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cr(t,r!==null?r.cachePool:null),r!==null?h0(t,r):cn(),x0(t);else return l=t.lanes=536870912,pc(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(cr(t,r.cachePool),h0(t,r),xa(),t.memoizedState=null):(e!==null&&cr(t,null),cn(),xa());return Qe(e,t,s,a),t.child}function bs(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,a,l,s){var r=ln();return r=r===null?null:{parent:De._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&cr(t,null),cn(),x0(t),e!==null&&xl(e,t,l,!0),t.childLanes=s,null}function Ar(e,t){return t=Er({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bc(e,t,a){return Ka(t,e.child,null,a),e=Ar(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function bp(e,t,a){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(l.mode==="hidden")return e=Ar(t,l),t.lanes=536870912,bs(null,e);if(fn(t),(e=we)?(e=Ru(e,St),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:jt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=$d(e),a.return=t,t.child=a,Ve=t,we=null)):e=null,e===null)throw ua(t);return t.lanes=536870912,null}return Ar(t,l)}var r=e.memoizedState;if(r!==null){var n=r.dehydrated;if(fn(t),s)if(t.flags&256)t.flags&=-257,t=bc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Oe||xl(e,t,a,!1),s=(a&e.childLanes)!==0,Oe||s){if(l=ve,l!==null&&(n=rd(l,a),n!==0&&n!==r.retryLane))throw r.retryLane=n,Ga(e,n),lt(l,e,n),Dn;Hr(),t=bc(e,t,a)}else e=r.treeContext,we=Tt(n.nextSibling),Ve=t,ne=!0,ca=null,St=!1,e!==null&&t0(t,e),t=Ar(t,l),t.flags|=4096;return t}return e=Vt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function jn(e,t,a,l,s){return Fa(t),a=pn(e,t,a,l,void 0,s),l=bn(),e!==null&&!Oe?(hn(e,t,s),It(e,t,s)):(ne&&l&&Ki(t),t.flags|=1,Qe(e,t,a,s),t.child)}function hc(e,t,a,l,s,r){return Fa(t),t.updateQueue=null,a=y0(t,l,a,s),g0(e),l=bn(),e!==null&&!Oe?(hn(e,t,r),It(e,t,r)):(ne&&l&&Ki(t),t.flags|=1,Qe(e,t,a,r),t.child)}function xc(e,t,a,l,s){if(Fa(t),t.stateNode===null){var r=ml,n=a.contextType;typeof n=="object"&&n!==null&&(r=Fe(n)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Nn,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},rn(t),n=a.contextType,r.context=typeof n=="object"&&n!==null?Fe(n):ml,r.state=t.memoizedState,n=a.getDerivedStateFromProps,typeof n=="function"&&(Bn(t,a,n,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&Nn.enqueueReplaceState(r,r.state,null),cs(t,l,r,s),ds(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var d=t.memoizedProps,m=Ja(a,d);r.props=m;var S=r.context,M=a.contextType;n=ml,typeof M=="object"&&M!==null&&(n=Fe(M));var D=a.getDerivedStateFromProps;M=typeof D=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||S!==n)&&lc(t,r,l,n),ma=!1;var C=t.memoizedState;r.state=C,cs(t,l,r,s),ds(),S=t.memoizedState,d||C!==S||ma?(typeof D=="function"&&(Bn(t,a,D,l),S=t.memoizedState),(m=ma||ac(t,a,m,l,C,S,n))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),r.props=l,r.state=S,r.context=n,l=m):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,nn(e,t),n=t.memoizedProps,M=Ja(a,n),r.props=M,D=t.pendingProps,C=r.context,S=a.contextType,m=ml,typeof S=="object"&&S!==null&&(m=Fe(S)),d=a.getDerivedStateFromProps,(S=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(n!==D||C!==m)&&lc(t,r,l,m),ma=!1,C=t.memoizedState,r.state=C,cs(t,l,r,s),ds();var A=t.memoizedState;n!==D||C!==A||ma||e!==null&&e.dependencies!==null&&or(e.dependencies)?(typeof d=="function"&&(Bn(t,a,d,l),A=t.memoizedState),(M=ma||ac(t,a,M,l,C,A,m)||e!==null&&e.dependencies!==null&&or(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,A,m),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,A,m)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||n===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),r.props=l,r.state=A,r.context=m,l=M):(typeof r.componentDidUpdate!="function"||n===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||n===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Rr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ka(t,e.child,null,s),t.child=Ka(t,null,a,s)):Qe(e,t,a,s),t.memoizedState=r.state,e=t.child):e=It(e,t,s),e}function gc(e,t,a,l){return Ya(),t.flags|=256,Qe(e,t,a,l),t.child}var On={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ln(e){return{baseLanes:e,cachePool:n0()}}function Hn(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function yc(e,t,a){var l=t.pendingProps,s=!1,r=(t.flags&128)!==0,n;if((n=r)||(n=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),n&&(s=!0,t.flags&=-129),n=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(s?ha(t):xa(),(e=we)?(e=Ru(e,St),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:da!==null?{id:jt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=$d(e),a.return=t,t.child=a,Ve=t,we=null)):e=null,e===null)throw ua(t);return vo(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,s?(xa(),s=t.mode,d=Er({mode:"hidden",children:d},s),l=qa(l,s,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Ln(a),l.childLanes=Hn(e,n,a),t.memoizedState=On,bs(null,l)):(ha(t),Un(t,d))}var m=e.memoizedState;if(m!==null&&(d=m.dehydrated,d!==null)){if(r)t.flags&256?(ha(t),t.flags&=-257,t=_n(e,t,a)):t.memoizedState!==null?(xa(),t.child=e.child,t.flags|=128,t=null):(xa(),d=l.fallback,s=t.mode,l=Er({mode:"visible",children:l.children},s),d=qa(d,s,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Ka(t,e.child,null,a),l=t.child,l.memoizedState=Ln(a),l.childLanes=Hn(e,n,a),t.memoizedState=On,t=bs(null,l));else if(ha(t),vo(d)){if(n=d.nextSibling&&d.nextSibling.dataset,n)var S=n.dgst;n=S,l=Error(o(419)),l.stack="",l.digest=n,ls({value:l,source:null,stack:null}),t=_n(e,t,a)}else if(Oe||xl(e,t,a,!1),n=(a&e.childLanes)!==0,Oe||n){if(n=ve,n!==null&&(l=rd(n,a),l!==0&&l!==m.retryLane))throw m.retryLane=l,Ga(e,l),lt(n,e,l),Dn;yo(d)||Hr(),t=_n(e,t,a)}else yo(d)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,we=Tt(d.nextSibling),Ve=t,ne=!0,ca=null,St=!1,e!==null&&t0(t,e),t=Un(t,l.children),t.flags|=4096);return t}return s?(xa(),d=l.fallback,s=t.mode,m=e.child,S=m.sibling,l=Vt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,S!==null?d=Vt(S,d):(d=qa(d,s,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,bs(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Ln(a):(s=d.cachePool,s!==null?(m=De._currentValue,s=s.parent!==m?{parent:m,pool:m}:s):s=n0(),d={baseLanes:d.baseLanes|a,cachePool:s}),l.memoizedState=d,l.childLanes=Hn(e,n,a),t.memoizedState=On,bs(e.child,l)):(ha(t),a=e.child,e=a.sibling,a=Vt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a)}function Un(e,t){return t=Er({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Er(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function _n(e,t,a){return Ka(t,e.child,null,a),e=Un(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vc(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Pi(e.return,t,a)}function Gn(e,t,a,l,s,r){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:s,treeForkCount:r}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=l,n.tail=a,n.tailMode=s,n.treeForkCount=r)}function kc(e,t,a){var l=t.pendingProps,s=l.revealOrder,r=l.tail;l=l.children;var n=Ne.current,d=(n&2)!==0;if(d?(n=n&1|2,t.flags|=128):n&=1,H(Ne,n),Qe(e,t,l,a),l=ne?as:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,a,t);else if(e.tag===19)vc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&hr(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),Gn(t,!1,s,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&hr(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}Gn(t,!0,a,null,r,l);break;case"together":Gn(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function It(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),va|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Vt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Vt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qn(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&or(e)))}function hp(e,t,a){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),fa(t,De,e.memoizedState.cache),Ya();break;case 27:case 5:ql(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fn(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?yc(e,t,a):(ha(t),e=It(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var s=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(xl(e,t,a,!1),l=(a&t.childLanes)!==0),s){if(l)return kc(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),H(Ne,Ne.current),l)break;return null;case 22:return t.lanes=0,mc(e,t,a,t.pendingProps);case 24:fa(t,De,e.memoizedState.cache)}return It(e,t,a)}function wc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Oe=!0;else{if(!qn(e,a)&&(t.flags&128)===0)return Oe=!1,hp(e,t,a);Oe=(e.flags&131072)!==0}else Oe=!1,ne&&(t.flags&1048576)!==0&&e0(t,as,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Qi(e)?(l=Ja(e,l),t.tag=1,t=xc(null,t,e,l,a)):(t.tag=0,t=jn(null,t,e,l,a));else{if(e!=null){var s=e.$$typeof;if(s===fe){t.tag=11,t=cc(null,t,e,l,a);break e}else if(s===P){t.tag=14,t=uc(null,t,e,l,a);break e}}throw t=_t(e)||e,Error(o(306,t,""))}}return t;case 0:return jn(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,s=Ja(l,t.pendingProps),xc(e,t,l,s,a);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var r=t.memoizedState;s=r.element,nn(e,t),cs(t,l,null,a);var n=t.memoizedState;if(l=n.cache,fa(t,De,l),l!==r.cache&&en(t,[De],a,!0),ds(),l=n.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:n.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=gc(e,t,l,a);break e}else if(l!==s){s=vt(Error(o(424)),t),ls(s),t=gc(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Tt(e.firstChild),Ve=t,ne=!0,ca=null,St=!0,a=m0(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ya(),l===s){t=It(e,t,a);break e}Qe(e,t,l,a)}t=t.child}return t;case 26:return Rr(e,t),e===null?(a=Du(t.type,null,t.pendingProps,null))?t.memoizedState=a:ne||(a=t.type,e=t.pendingProps,l=Fr(ae.current).createElement(a),l[Ye]=t,l[We]=e,Xe(l,a,e),Ge(l),t.stateNode=l):t.memoizedState=Du(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ql(t),e===null&&ne&&(l=t.stateNode=Bu(t.type,t.pendingProps,ae.current),Ve=t,St=!0,s=we,Ta(t.type)?(ko=s,we=Tt(l.firstChild)):we=s),Qe(e,t,t.pendingProps.children,a),Rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((s=l=we)&&(l=Xp(l,t.type,t.pendingProps,St),l!==null?(t.stateNode=l,Ve=t,we=Tt(l.firstChild),St=!1,s=!0):s=!1),s||ua(t)),ql(t),s=t.type,r=t.pendingProps,n=e!==null?e.memoizedProps:null,l=r.children,ho(s,r)?l=null:n!==null&&ho(s,n)&&(t.flags|=32),t.memoizedState!==null&&(s=pn(e,t,np,null,null,a),Bs._currentValue=s),Rr(e,t),Qe(e,t,l,a),t.child;case 6:return e===null&&ne&&((e=a=we)&&(a=Zp(a,t.pendingProps,St),a!==null?(t.stateNode=a,Ve=t,we=null,e=!0):e=!1),e||ua(t)),null;case 13:return yc(e,t,a);case 4:return Ke(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ka(t,null,l,a):Qe(e,t,l,a),t.child;case 11:return cc(e,t,t.type,t.pendingProps,a);case 7:return Qe(e,t,t.pendingProps,a),t.child;case 8:return Qe(e,t,t.pendingProps.children,a),t.child;case 12:return Qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,fa(t,t.type,l.value),Qe(e,t,l.children,a),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,Fa(t),s=Fe(s),l=l(s),t.flags|=1,Qe(e,t,l,a),t.child;case 14:return uc(e,t,t.type,t.pendingProps,a);case 15:return fc(e,t,t.type,t.pendingProps,a);case 19:return kc(e,t,a);case 31:return bp(e,t,a);case 22:return mc(e,t,a,t.pendingProps);case 24:return Fa(t),l=Fe(De),e===null?(s=ln(),s===null&&(s=ve,r=tn(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=a),s=r),t.memoizedState={parent:l,cache:s},rn(t),fa(t,De,s)):((e.lanes&a)!==0&&(nn(e,t),cs(t,null,null,a),ds()),s=e.memoizedState,r=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),fa(t,De,l)):(l=r.cache,fa(t,De,l),l!==s.cache&&en(t,[De],a,!0))),Qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Jt(e){e.flags|=4}function Yn(e,t,a,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Ic())e.flags|=8192;else throw Za=fr,sn}else e.flags&=-16777217}function Sc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uu(t))if(Ic())e.flags|=8192;else throw Za=fr,sn}function Mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ad():536870912,e.lanes|=t,Ml|=t)}function hs(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function xp(e,t,a){var l=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Xt(De),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hl(t)?Jt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Wi())),Se(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Jt(t),r!==null?(Se(t),Sc(t,r)):(Se(t),Yn(t,s,null,l,a))):r?r!==e.memoizedState?(Jt(t),Se(t),Sc(t,r)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Jt(t),Se(t),Yn(t,s,e,l,a)),null;case 27:if(Gs(t),a=ae.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}e=G.current,hl(t)?a0(t):(e=Bu(s,l,a),t.stateNode=e,Jt(t))}return Se(t),null;case 5:if(Gs(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Se(t),null}if(r=G.current,hl(t))a0(t);else{var n=Fr(ae.current);switch(r){case 1:r=n.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=n.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=n.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=n.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=n.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?n.createElement(s,{is:l.is}):n.createElement(s)}}r[Ye]=t,r[We]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)r.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=r;e:switch(Xe(r,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Jt(t)}}return Se(t),Yn(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Jt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ae.current,hl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,s=Ve,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[Ye]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||yu(e.nodeValue,a)),e||ua(t,!0)}else e=Fr(e).createTextNode(l),e[Ye]=t,t.stateNode=e}return Se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=hl(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Ye]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else a=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=hl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(o(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Ye]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),s=!1}else s=Wi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==s&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Mr(t,t.updateQueue),Se(t),null);case 4:return Be(),e===null&&uo(t.stateNode.containerInfo),Se(t),null;case 10:return Xt(t.type),Se(t),null;case 19:if(j(Ne),l=t.memoizedState,l===null)return Se(t),null;if(s=(t.flags&128)!==0,r=l.rendering,r===null)if(s)hs(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=hr(e),r!==null){for(t.flags|=128,hs(l,!1),e=r.updateQueue,t.updateQueue=e,Mr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Wd(a,e),a=a.sibling;return H(Ne,Ne.current&1|2),ne&&Ft(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>jr&&(t.flags|=128,s=!0,hs(l,!1),t.lanes=4194304)}else{if(!s)if(e=hr(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Mr(t,e),hs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ne)return Se(t),null}else 2*it()-l.renderingStartTime>jr&&a!==536870912&&(t.flags|=128,s=!0,hs(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Ne.current,H(Ne,s?a&1|2:a&1),ne&&Ft(t,l.treeForkCount),e):(Se(t),null);case 22:case 23:return ft(t),un(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Mr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&j(Qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(De),Se(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function gp(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(De),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gs(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(o(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Ne),null;case 4:return Be(),null;case 10:return Xt(t.type),null;case 22:case 23:return ft(t),un(),e!==null&&j(Qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(De),null;case 25:return null;default:return null}}function Cc(e,t){switch(Ii(t),t.tag){case 3:Xt(De),Be();break;case 26:case 27:case 5:Gs(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:j(Ne);break;case 10:Xt(t.type);break;case 22:case 23:ft(t),un(),e!==null&&j(Qa);break;case 24:Xt(De)}}function xs(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){l=void 0;var r=a.create,n=a.inst;l=r(),n.destroy=l}a=a.next}while(a!==s)}}catch(d){pe(t,t.return,d)}}function ga(e,t,a){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var r=s.next;l=r;do{if((l.tag&e)===e){var n=l.inst,d=n.destroy;if(d!==void 0){n.destroy=void 0,s=t;var m=a,S=d;try{S()}catch(M){pe(s,m,M)}}}l=l.next}while(l!==r)}}catch(M){pe(t,t.return,M)}}function Tc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{b0(t,a)}catch(l){pe(e,e.return,l)}}}function Ac(e,t,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){pe(e,t,l)}}function gs(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(s){pe(e,t,s)}}function Lt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(s){pe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){pe(e,t,s)}else a.current=null}function Rc(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(s){pe(e,e.return,s)}}function Vn(e,t,a){try{var l=e.stateNode;Gp(l,e.type,a,t),l[We]=t}catch(s){pe(e,e.return,s)}}function Ec(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Fn(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qn(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qt));else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Qn(e,t,a),e=e.sibling;e!==null;)Qn(e,t,a),e=e.sibling}function Br(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Br(e,t,a),e=e.sibling;e!==null;)Br(e,t,a),e=e.sibling}function Mc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Xe(t,l,a),t[Ye]=e,t[We]=a}catch(r){pe(e,e.return,r)}}var Wt=!1,Le=!1,Xn=!1,Bc=typeof WeakSet=="function"?WeakSet:Set,qe=null;function yp(e,t){if(e=e.containerInfo,po=Wr,e=Yd(e),Ui(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var s=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var n=0,d=-1,m=-1,S=0,M=0,D=e,C=null;t:for(;;){for(var A;D!==a||s!==0&&D.nodeType!==3||(d=n+s),D!==r||l!==0&&D.nodeType!==3||(m=n+l),D.nodeType===3&&(n+=D.nodeValue.length),(A=D.firstChild)!==null;)C=D,D=A;for(;;){if(D===e)break t;if(C===a&&++S===s&&(d=n),C===r&&++M===l&&(m=n),(A=D.nextSibling)!==null)break;D=C,C=D.parentNode}D=A}a=d===-1||m===-1?null:{start:d,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(bo={focusedElem:e,selectionRange:a},Wr=!1,qe=t;qe!==null;)if(t=qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,qe=e;else for(;qe!==null;){switch(t=qe,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,s=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var _=Ja(a.type,s);e=l.getSnapshotBeforeUpdate(_,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(Z){pe(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)go(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":go(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,qe=e;break}qe=t.return}}function Nc(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pt(e,a),l&4&&xs(5,a);break;case 1:if(Pt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(n){pe(a,a.return,n)}else{var s=Ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(n){pe(a,a.return,n)}}l&64&&Tc(a),l&512&&gs(a,a.return);break;case 3:if(Pt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{b0(e,t)}catch(n){pe(a,a.return,n)}}break;case 27:t===null&&l&4&&Mc(a);case 26:case 5:Pt(e,a),t===null&&l&4&&Rc(a),l&512&&gs(a,a.return);break;case 12:Pt(e,a);break;case 31:Pt(e,a),l&4&&jc(e,a);break;case 13:Pt(e,a),l&4&&Oc(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ep.bind(null,a),Kp(e,a))));break;case 22:if(l=a.memoizedState!==null||Wt,!l){t=t!==null&&t.memoizedState!==null||Le,s=Wt;var r=Le;Wt=l,(Le=t)&&!r?ea(e,a,(a.subtreeFlags&8772)!==0):Pt(e,a),Wt=s,Le=r}break;case 30:break;default:Pt(e,a)}}function zc(e){var t=e.alternate;t!==null&&(e.alternate=null,zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ki(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ce=null,Pe=!1;function $t(e,t,a){for(a=a.child;a!==null;)Dc(e,t,a),a=a.sibling}function Dc(e,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Yl,a)}catch{}switch(a.tag){case 26:Le||Lt(a,t),$t(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Le||Lt(a,t);var l=Ce,s=Pe;Ta(a.type)&&(Ce=a.stateNode,Pe=!1),$t(e,t,a),Rs(a.stateNode),Ce=l,Pe=s;break;case 5:Le||Lt(a,t);case 6:if(l=Ce,s=Pe,Ce=null,$t(e,t,a),Ce=l,Pe=s,Ce!==null)if(Pe)try{(Ce.nodeType===9?Ce.body:Ce.nodeName==="HTML"?Ce.ownerDocument.body:Ce).removeChild(a.stateNode)}catch(r){pe(a,t,r)}else try{Ce.removeChild(a.stateNode)}catch(r){pe(a,t,r)}break;case 18:Ce!==null&&(Pe?(e=Ce,Tu(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hl(e)):Tu(Ce,a.stateNode));break;case 4:l=Ce,s=Pe,Ce=a.stateNode.containerInfo,Pe=!0,$t(e,t,a),Ce=l,Pe=s;break;case 0:case 11:case 14:case 15:ga(2,a,t),Le||ga(4,a,t),$t(e,t,a);break;case 1:Le||(Lt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ac(a,t,l)),$t(e,t,a);break;case 21:$t(e,t,a);break;case 22:Le=(l=Le)||a.memoizedState!==null,$t(e,t,a),Le=l;break;default:$t(e,t,a)}}function jc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hl(e)}catch(a){pe(t,t.return,a)}}}function Oc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(a){pe(t,t.return,a)}}function vp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Bc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Bc),t;default:throw Error(o(435,e.tag))}}function Nr(e,t){var a=vp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var s=Mp.bind(null,e,l);l.then(s,s)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l],r=e,n=t,d=n;e:for(;d!==null;){switch(d.tag){case 27:if(Ta(d.type)){Ce=d.stateNode,Pe=!1;break e}break;case 5:Ce=d.stateNode,Pe=!1;break e;case 3:case 4:Ce=d.stateNode.containerInfo,Pe=!0;break e}d=d.return}if(Ce===null)throw Error(o(160));Dc(r,n,s),Ce=null,Pe=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Lc(t,e),t=t.sibling}var Nt=null;function Lc(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(ga(3,e,e.return),xs(3,e),ga(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(Le||a===null||Lt(a,a.return)),l&64&&Wt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var s=Nt;if(et(t,e),tt(e),l&512&&(Le||a===null||Lt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Ql]||r[Ye]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(l),s.head.insertBefore(r,s.querySelector("head > title"))),Xe(r,l,a),r[Ye]=e,Ge(r),l=r;break e;case"link":var n=Lu("link","href",s).get(l+(a.href||""));if(n){for(var d=0;d<n.length;d++)if(r=n[d],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){n.splice(d,1);break t}}r=s.createElement(l),Xe(r,l,a),s.head.appendChild(r);break;case"meta":if(n=Lu("meta","content",s).get(l+(a.content||""))){for(d=0;d<n.length;d++)if(r=n[d],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){n.splice(d,1);break t}}r=s.createElement(l),Xe(r,l,a),s.head.appendChild(r);break;default:throw Error(o(468,l))}r[Ye]=e,Ge(r),l=r}e.stateNode=l}else Hu(s,e.type,e.stateNode);else e.stateNode=Ou(s,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?Hu(s,e.type,e.stateNode):Ou(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Vn(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(Le||a===null||Lt(a,a.return)),a!==null&&l&4&&Vn(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(Le||a===null||Lt(a,a.return)),e.flags&32){s=e.stateNode;try{il(s,"")}catch(_){pe(e,e.return,_)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,Vn(e,s,a!==null?a.memoizedProps:s)),l&1024&&(Xn=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(_){pe(e,e.return,_)}}break;case 3:if(Zr=null,s=Nt,Nt=Qr(t.containerInfo),et(t,e),Nt=s,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(t.containerInfo)}catch(_){pe(e,e.return,_)}Xn&&(Xn=!1,Hc(e));break;case 4:l=Nt,Nt=Qr(e.stateNode.containerInfo),et(t,e),tt(e),Nt=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nr(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Dr=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nr(e,l)));break;case 22:s=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,S=Wt,M=Le;if(Wt=S||s,Le=M||m,et(t,e),Le=M,Wt=S,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||m||Wt||Le||Wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(r=m.stateNode,s)n=r.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none";else{d=m.stateNode;var D=m.memoizedProps.style,C=D!=null&&D.hasOwnProperty("display")?D.display:null;d.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(_){pe(m,m.return,_)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(_){pe(m,m.return,_)}}}else if(t.tag===18){if(a===null){m=t;try{var A=m.stateNode;s?Au(A,!0):Au(m.stateNode,!1)}catch(_){pe(m,m.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Nr(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nr(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ec(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,r=Fn(e);Br(e,r,s);break;case 5:var n=a.stateNode;a.flags&32&&(il(n,""),a.flags&=-33);var d=Fn(e);Br(e,d,n);break;case 3:case 4:var m=a.stateNode.containerInfo,S=Fn(e);Qn(e,S,m);break;default:throw Error(o(161))}}catch(M){pe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Pt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Nc(e,t.alternate,t),t=t.sibling}function Wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ga(4,t,t.return),Wa(t);break;case 1:Lt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ac(t,t.return,a),Wa(t);break;case 27:Rs(t.stateNode);case 26:case 5:Lt(t,t.return),Wa(t);break;case 22:t.memoizedState===null&&Wa(t);break;case 30:Wa(t);break;default:Wa(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,r=t,n=r.flags;switch(r.tag){case 0:case 11:case 15:ea(s,r,a),xs(4,r);break;case 1:if(ea(s,r,a),l=r,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(S){pe(l,l.return,S)}if(l=r,s=l.updateQueue,s!==null){var d=l.stateNode;try{var m=s.shared.hiddenCallbacks;if(m!==null)for(s.shared.hiddenCallbacks=null,s=0;s<m.length;s++)p0(m[s],d)}catch(S){pe(l,l.return,S)}}a&&n&64&&Tc(r),gs(r,r.return);break;case 27:Mc(r);case 26:case 5:ea(s,r,a),a&&l===null&&n&4&&Rc(r),gs(r,r.return);break;case 12:ea(s,r,a);break;case 31:ea(s,r,a),a&&n&4&&jc(s,r);break;case 13:ea(s,r,a),a&&n&4&&Oc(s,r);break;case 22:r.memoizedState===null&&ea(s,r,a),gs(r,r.return);break;case 30:break;default:ea(s,r,a)}t=t.sibling}}function Zn(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ss(a))}function Kn(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ss(e))}function zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uc(e,t,a,l),t=t.sibling}function Uc(e,t,a,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,l),s&2048&&xs(9,t);break;case 1:zt(e,t,a,l);break;case 3:zt(e,t,a,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ss(e)));break;case 12:if(s&2048){zt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,n=r.id,d=r.onPostCommit;typeof d=="function"&&d(n,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){pe(t,t.return,m)}}else zt(e,t,a,l);break;case 31:zt(e,t,a,l);break;case 13:zt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,n=t.alternate,t.memoizedState!==null?r._visibility&2?zt(e,t,a,l):ys(e,t):r._visibility&2?zt(e,t,a,l):(r._visibility|=2,Al(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Zn(n,t);break;case 24:zt(e,t,a,l),s&2048&&Kn(t.alternate,t);break;default:zt(e,t,a,l)}}function Al(e,t,a,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,n=t,d=a,m=l,S=n.flags;switch(n.tag){case 0:case 11:case 15:Al(r,n,d,m,s),xs(8,n);break;case 23:break;case 22:var M=n.stateNode;n.memoizedState!==null?M._visibility&2?Al(r,n,d,m,s):ys(r,n):(M._visibility|=2,Al(r,n,d,m,s)),s&&S&2048&&Zn(n.alternate,n);break;case 24:Al(r,n,d,m,s),s&&S&2048&&Kn(n.alternate,n);break;default:Al(r,n,d,m,s)}t=t.sibling}}function ys(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,s=l.flags;switch(l.tag){case 22:ys(a,l),s&2048&&Zn(l.alternate,l);break;case 24:ys(a,l),s&2048&&Kn(l.alternate,l);break;default:ys(a,l)}t=t.sibling}}var vs=8192;function Rl(e,t,a){if(e.subtreeFlags&vs)for(e=e.child;e!==null;)_c(e,t,a),e=e.sibling}function _c(e,t,a){switch(e.tag){case 26:Rl(e,t,a),e.flags&vs&&e.memoizedState!==null&&ib(a,Nt,e.memoizedState,e.memoizedProps);break;case 5:Rl(e,t,a);break;case 3:case 4:var l=Nt;Nt=Qr(e.stateNode.containerInfo),Rl(e,t,a),Nt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=vs,vs=16777216,Rl(e,t,a),vs=l):Rl(e,t,a));break;default:Rl(e,t,a)}}function Gc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ks(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yc(l,e)}Gc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qc(e),e=e.sibling}function qc(e){switch(e.tag){case 0:case 11:case 15:ks(e),e.flags&2048&&ga(9,e,e.return);break;case 3:ks(e);break;case 12:ks(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zr(e)):ks(e);break;default:ks(e)}}function zr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];qe=l,Yc(l,e)}Gc(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ga(8,t,t.return),zr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,zr(t));break;default:zr(t)}e=e.sibling}}function Yc(e,t){for(;qe!==null;){var a=qe;switch(a.tag){case 0:case 11:case 15:ga(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ss(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,qe=l;else e:for(a=e;qe!==null;){l=qe;var s=l.sibling,r=l.return;if(zc(l),l===a){qe=null;break e}if(s!==null){s.return=r,qe=s;break e}qe=r}}}var kp={getCacheForType:function(e){var t=Fe(De),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Fe(De).controller.signal}},wp=typeof WeakMap=="function"?WeakMap:Map,ce=0,ve=null,le=null,re=0,me=0,mt=null,ya=!1,El=!1,In=!1,ta=0,Me=0,va=0,$a=0,Jn=0,pt=0,Ml=0,ws=null,at=null,Wn=!1,Dr=0,Vc=0,jr=1/0,Or=null,ka=null,_e=0,wa=null,Bl=null,aa=0,$n=0,Pn=null,Fc=null,Ss=0,eo=null;function bt(){return(ce&2)!==0&&re!==0?re&-re:B.T!==null?io():id()}function Qc(){if(pt===0)if((re&536870912)===0||ne){var e=Vs;Vs<<=1,(Vs&3932160)===0&&(Vs=262144),pt=e}else pt=536870912;return e=ut.current,e!==null&&(e.flags|=32),pt}function lt(e,t,a){(e===ve&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),Sa(e,re,pt,!1)),Fl(e,a),((ce&2)===0||e!==ve)&&(e===ve&&((ce&2)===0&&($a|=a),Me===4&&Sa(e,re,pt,!1)),Ht(e))}function Xc(e,t,a){if((ce&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Vl(e,t),s=l?Tp(e,t):ao(e,t,!0),r=l;do{if(s===0){El&&!l&&Sa(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Sp(a)){s=ao(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var n=0;else n=e.pendingLanes&-536870913,n=n!==0?n:n&536870912?536870912:0;if(n!==0){t=n;e:{var d=e;s=ws;var m=d.current.memoizedState.isDehydrated;if(m&&(Nl(d,n).flags|=256),n=ao(d,n,!1),n!==2){if(In&&!m){d.errorRecoveryDisabledLanes|=r,$a|=r,s=4;break e}r=at,at=s,r!==null&&(at===null?at=r:at.push.apply(at,r))}s=n}if(r=!1,s!==2)continue}}if(s===1){Nl(e,0),Sa(e,t,0,!0);break}e:{switch(l=e,r=s,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Sa(l,t,pt,!ya);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(s=Dr+300-it(),10<s)){if(Sa(l,t,pt,!ya),Qs(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=Su(Zc.bind(null,l,a,at,Or,Wn,t,pt,$a,Ml,ya,r,"Throttled",-0,0),s);break e}Zc(l,a,at,Or,Wn,t,pt,$a,Ml,ya,r,null,-0,0)}}break}while(!0);Ht(e)}function Zc(e,t,a,l,s,r,n,d,m,S,M,D,C,A){if(e.timeoutHandle=-1,D=t.subtreeFlags,D&8192||(D&16785408)===16785408){D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qt},_c(t,r,D);var _=(r&62914560)===r?Dr-it():(r&4194048)===r?Vc-it():0;if(_=nb(D,_),_!==null){aa=r,e.cancelPendingCommit=_(tu.bind(null,e,t,r,a,l,s,n,d,m,M,D,null,C,A)),Sa(e,r,n,!S);return}}tu(e,t,r,a,l,s,n,d,m)}function Sp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var s=a[l],r=s.getSnapshot;s=s.value;try{if(!dt(r(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sa(e,t,a,l){t&=~Jn,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var r=31-ot(s),n=1<<r;l[r]=-1,s&=~n}a!==0&&ld(e,a,t)}function Lr(){return(ce&6)===0?(Cs(0),!1):!0}function to(){if(le!==null){if(me===0)var e=le.return;else e=le,Qt=Va=null,xn(e),kl=null,is=0,e=le;for(;e!==null;)Cc(e.alternate,e),e=e.return;le=null}}function Nl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,to(),ve=e,le=a=Vt(e.current,null),re=t,me=0,mt=null,ya=!1,El=Vl(e,t),In=!1,Ml=pt=Jn=$a=va=Me=0,at=ws=null,Wn=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-ot(l),r=1<<s;t|=e[s],l&=~r}return ta=t,lr(),a}function Kc(e,t){$=null,B.H=ps,t===vl||t===ur?(t=c0(),me=3):t===sn?(t=c0(),me=4):me=t===Dn?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,le===null&&(Me=1,Tr(e,vt(t,e.current)))}function Ic(){var e=ut.current;return e===null?!0:(re&4194048)===re?Ct===null:(re&62914560)===re||(re&536870912)!==0?e===Ct:!1}function Jc(){var e=B.H;return B.H=ps,e===null?ps:e}function Wc(){var e=B.A;return B.A=kp,e}function Hr(){Me=4,ya||(re&4194048)!==re&&ut.current!==null||(El=!0),(va&134217727)===0&&($a&134217727)===0||ve===null||Sa(ve,re,pt,!1)}function ao(e,t,a){var l=ce;ce|=2;var s=Jc(),r=Wc();(ve!==e||re!==t)&&(Or=null,Nl(e,t)),t=!1;var n=Me;e:do try{if(me!==0&&le!==null){var d=le,m=mt;switch(me){case 8:to(),n=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var S=me;if(me=0,mt=null,zl(e,d,m,S),a&&El){n=0;break e}break;default:S=me,me=0,mt=null,zl(e,d,m,S)}}Cp(),n=Me;break}catch(M){Kc(e,M)}while(!0);return t&&e.shellSuspendCounter++,Qt=Va=null,ce=l,B.H=s,B.A=r,le===null&&(ve=null,re=0,lr()),n}function Cp(){for(;le!==null;)$c(le)}function Tp(e,t){var a=ce;ce|=2;var l=Jc(),s=Wc();ve!==e||re!==t?(Or=null,jr=it()+500,Nl(e,t)):El=Vl(e,t);e:do try{if(me!==0&&le!==null){t=le;var r=mt;t:switch(me){case 1:me=0,mt=null,zl(e,t,r,1);break;case 2:case 9:if(o0(r)){me=0,mt=null,Pc(t);break}t=function(){me!==2&&me!==9||ve!==e||(me=7),Ht(e)},r.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:o0(r)?(me=0,mt=null,Pc(t)):(me=0,mt=null,zl(e,t,r,7));break;case 5:var n=null;switch(le.tag){case 26:n=le.memoizedState;case 5:case 27:var d=le;if(n?Uu(n):d.stateNode.complete){me=0,mt=null;var m=d.sibling;if(m!==null)le=m;else{var S=d.return;S!==null?(le=S,Ur(S)):le=null}break t}}me=0,mt=null,zl(e,t,r,5);break;case 6:me=0,mt=null,zl(e,t,r,6);break;case 8:to(),Me=6;break e;default:throw Error(o(462))}}Ap();break}catch(M){Kc(e,M)}while(!0);return Qt=Va=null,B.H=l,B.A=s,ce=a,le!==null?0:(ve=null,re=0,lr(),Me)}function Ap(){for(;le!==null&&!If();)$c(le)}function $c(e){var t=wc(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Ur(e):le=t}function Pc(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=hc(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=hc(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:xn(t);default:Cc(a,t),t=le=Wd(t,ta),t=wc(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Ur(e):le=t}function zl(e,t,a,l){Qt=Va=null,xn(t),kl=null,is=0;var s=t.return;try{if(pp(e,s,t,a,re)){Me=1,Tr(e,vt(a,e.current)),le=null;return}}catch(r){if(s!==null)throw le=s,r;Me=1,Tr(e,vt(a,e.current)),le=null;return}t.flags&32768?(ne||l===1?e=!0:El||(re&536870912)!==0?e=!1:(ya=e=!0,(l===2||l===9||l===3||l===6)&&(l=ut.current,l!==null&&l.tag===13&&(l.flags|=16384))),eu(t,e)):Ur(t)}function Ur(e){var t=e;do{if((t.flags&32768)!==0){eu(t,ya);return}e=t.return;var a=xp(t.alternate,t,ta);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Me===0&&(Me=5)}function eu(e,t){do{var a=gp(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Me=6,le=null}function tu(e,t,a,l,s,r,n,d,m){e.cancelPendingCommit=null;do _r();while(_e!==0);if((ce&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=Vi,rm(e,a,r,n,d,m),e===ve&&(le=ve=null,re=0),Bl=t,wa=e,aa=a,$n=r,Pn=s,Fc=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bp(qs,function(){return iu(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,s=L.p,L.p=2,n=ce,ce|=4;try{yp(e,t,a)}finally{ce=n,L.p=s,B.T=l}}_e=1,au(),lu(),su()}}function au(){if(_e===1){_e=0;var e=wa,t=Bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var l=L.p;L.p=2;var s=ce;ce|=4;try{Lc(t,e);var r=bo,n=Yd(e.containerInfo),d=r.focusedElem,m=r.selectionRange;if(n!==d&&d&&d.ownerDocument&&qd(d.ownerDocument.documentElement,d)){if(m!==null&&Ui(d)){var S=m.start,M=m.end;if(M===void 0&&(M=S),"selectionStart"in d)d.selectionStart=S,d.selectionEnd=Math.min(M,d.value.length);else{var D=d.ownerDocument||document,C=D&&D.defaultView||window;if(C.getSelection){var A=C.getSelection(),_=d.textContent.length,Z=Math.min(m.start,_),ge=m.end===void 0?Z:Math.min(m.end,_);!A.extend&&Z>ge&&(n=ge,ge=Z,Z=n);var y=Gd(d,Z),h=Gd(d,ge);if(y&&h&&(A.rangeCount!==1||A.anchorNode!==y.node||A.anchorOffset!==y.offset||A.focusNode!==h.node||A.focusOffset!==h.offset)){var w=D.createRange();w.setStart(y.node,y.offset),A.removeAllRanges(),Z>ge?(A.addRange(w),A.extend(h.node,h.offset)):(w.setEnd(h.node,h.offset),A.addRange(w))}}}}for(D=[],A=d;A=A.parentNode;)A.nodeType===1&&D.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<D.length;d++){var N=D[d];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Wr=!!po,bo=po=null}finally{ce=s,L.p=l,B.T=a}}e.current=t,_e=2}}function lu(){if(_e===2){_e=0;var e=wa,t=Bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var l=L.p;L.p=2;var s=ce;ce|=4;try{Nc(e,t.alternate,t)}finally{ce=s,L.p=l,B.T=a}}_e=3}}function su(){if(_e===4||_e===3){_e=0,Jf();var e=wa,t=Bl,a=aa,l=Fc;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_e=5:(_e=0,Bl=wa=null,ru(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(ka=null),yi(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Yl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=B.T,s=L.p,L.p=2,B.T=null;try{for(var r=e.onRecoverableError,n=0;n<l.length;n++){var d=l[n];r(d.value,{componentStack:d.stack})}}finally{B.T=t,L.p=s}}(aa&3)!==0&&_r(),Ht(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===eo?Ss++:(Ss=0,eo=e):Ss=0,Cs(0)}}function ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ss(t)))}function _r(){return au(),lu(),su(),iu()}function iu(){if(_e!==5)return!1;var e=wa,t=$n;$n=0;var a=yi(aa),l=B.T,s=L.p;try{L.p=32>a?32:a,B.T=null,a=Pn,Pn=null;var r=wa,n=aa;if(_e=0,Bl=wa=null,aa=0,(ce&6)!==0)throw Error(o(331));var d=ce;if(ce|=4,qc(r.current),Uc(r,r.current,n,a),ce=d,Cs(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Yl,r)}catch{}return!0}finally{L.p=s,B.T=l,ru(e,t)}}function nu(e,t,a){t=vt(a,t),t=zn(e.stateNode,t,2),e=ba(e,t,2),e!==null&&(Fl(e,2),Ht(e))}function pe(e,t,a){if(e.tag===3)nu(e,e,a);else for(;t!==null;){if(t.tag===3){nu(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ka===null||!ka.has(l))){e=vt(a,e),a=oc(2),l=ba(t,a,2),l!==null&&(dc(a,l,t,e),Fl(l,2),Ht(l));break}}t=t.return}}function lo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new wp;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(a)||(In=!0,s.add(a),e=Rp.bind(null,e,t,a),t.then(e,e))}function Rp(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(re&a)===a&&(Me===4||Me===3&&(re&62914560)===re&&300>it()-Dr?(ce&2)===0&&Nl(e,0):Jn|=a,Ml===re&&(Ml=0)),Ht(e)}function ou(e,t){t===0&&(t=ad()),e=Ga(e,t),e!==null&&(Fl(e,t),Ht(e))}function Ep(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ou(e,a)}function Mp(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),ou(e,a)}function Bp(e,t){return bi(e,t)}var Gr=null,Dl=null,so=!1,qr=!1,ro=!1,Ca=0;function Ht(e){e!==Dl&&e.next===null&&(Dl===null?Gr=Dl=e:Dl=Dl.next=e),qr=!0,so||(so=!0,zp())}function Cs(e,t){if(!ro&&qr){ro=!0;do for(var a=!1,l=Gr;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var r=0;else{var n=l.suspendedLanes,d=l.pingedLanes;r=(1<<31-ot(42|e)+1)-1,r&=s&~(n&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,fu(l,r))}else r=re,r=Qs(l,l===ve?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Vl(l,r)||(a=!0,fu(l,r));l=l.next}while(a);ro=!1}}function Np(){du()}function du(){qr=so=!1;var e=0;Ca!==0&&Yp()&&(e=Ca);for(var t=it(),a=null,l=Gr;l!==null;){var s=l.next,r=cu(l,t);r===0?(l.next=null,a===null?Gr=s:a.next=s,s===null&&(Dl=a)):(a=l,(e!==0||(r&3)!==0)&&(qr=!0)),l=s}_e!==0&&_e!==5||Cs(e),Ca!==0&&(Ca=0)}function cu(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var n=31-ot(r),d=1<<n,m=s[n];m===-1?((d&a)===0||(d&l)!==0)&&(s[n]=sm(d,t)):m<=t&&(e.expiredLanes|=d),r&=~d}if(t=ve,a=re,a=Qs(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&hi(l),yi(a)){case 2:case 8:a=ed;break;case 32:a=qs;break;case 268435456:a=td;break;default:a=qs}return l=uu.bind(null,e),a=bi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&hi(l),e.callbackPriority=2,e.callbackNode=null,2}function uu(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_r()&&e.callbackNode!==a)return null;var l=re;return l=Qs(e,e===ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Xc(e,l,t),cu(e,it()),e.callbackNode!=null&&e.callbackNode===a?uu.bind(null,e):null)}function fu(e,t){if(_r())return null;Xc(e,t,!0)}function zp(){Fp(function(){(ce&6)!==0?bi(Po,Np):du()})}function io(){if(Ca===0){var e=gl;e===0&&(e=Ys,Ys<<=1,(Ys&261888)===0&&(Ys=256)),Ca=e}return Ca}function mu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Is(""+e)}function pu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Dp(e,t,a,l,s){if(t==="submit"&&a&&a.stateNode===s){var r=mu((s[We]||null).action),n=l.submitter;n&&(t=(t=n[We]||null)?mu(t.formAction):n.getAttribute("formAction"),t!==null&&(r=t,n=null));var d=new Ps("action","action",null,l,s);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var m=n?pu(s,n):new FormData(s);An(a,{pending:!0,data:m,method:s.method,action:r},null,m)}}else typeof r=="function"&&(d.preventDefault(),m=n?pu(s,n):new FormData(s),An(a,{pending:!0,data:m,method:s.method,action:r},r,m))},currentTarget:s}]})}}for(var no=0;no<Yi.length;no++){var oo=Yi[no],jp=oo.toLowerCase(),Op=oo[0].toUpperCase()+oo.slice(1);Bt(jp,"on"+Op)}Bt(Qd,"onAnimationEnd"),Bt(Xd,"onAnimationIteration"),Bt(Zd,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Wm,"onTransitionRun"),Bt($m,"onTransitionStart"),Bt(Pm,"onTransitionCancel"),Bt(Kd,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),La("onBeforeInput",["compositionend","keypress","textInput","paste"]),La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ts));function bu(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],s=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var n=l.length-1;0<=n;n--){var d=l[n],m=d.instance,S=d.currentTarget;if(d=d.listener,m!==r&&s.isPropagationStopped())break e;r=d,s.currentTarget=S;try{r(s)}catch(M){ar(M)}s.currentTarget=null,r=m}else for(n=0;n<l.length;n++){if(d=l[n],m=d.instance,S=d.currentTarget,d=d.listener,m!==r&&s.isPropagationStopped())break e;r=d,s.currentTarget=S;try{r(s)}catch(M){ar(M)}s.currentTarget=null,r=m}}}}function se(e,t){var a=t[vi];a===void 0&&(a=t[vi]=new Set);var l=e+"__bubble";a.has(l)||(hu(t,e,2,!1),a.add(l))}function co(e,t,a){var l=0;t&&(l|=4),hu(a,e,l,t)}var Yr="_reactListening"+Math.random().toString(36).slice(2);function uo(e){if(!e[Yr]){e[Yr]=!0,dd.forEach(function(a){a!=="selectionchange"&&(Lp.has(a)||co(a,!1,e),co(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yr]||(t[Yr]=!0,co("selectionchange",!1,t))}}function hu(e,t,a,l){switch(Qu(t)){case 2:var s=cb;break;case 8:s=ub;break;default:s=Ao}a=s.bind(null,t,a,e),s=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function fo(e,t,a,l,s){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var n=l.tag;if(n===3||n===4){var d=l.stateNode.containerInfo;if(d===s)break;if(n===4)for(n=l.return;n!==null;){var m=n.tag;if((m===3||m===4)&&n.stateNode.containerInfo===s)return;n=n.return}for(;d!==null;){if(n=tl(d),n===null)return;if(m=n.tag,m===5||m===6||m===26||m===27){l=r=n;continue e}d=d.parentNode}}l=l.return}kd(function(){var S=r,M=Ri(a),D=[];e:{var C=Id.get(e);if(C!==void 0){var A=Ps,_=e;switch(e){case"keypress":if(Ws(a)===0)break e;case"keydown":case"keyup":A=Mm;break;case"focusin":_="focus",A=Di;break;case"focusout":_="blur",A=Di;break;case"beforeblur":case"afterblur":A=Di;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=zm;break;case Qd:case Xd:case Zd:A=vm;break;case Kd:A=jm;break;case"scroll":case"scrollend":A=bm;break;case"wheel":A=Lm;break;case"copy":case"cut":case"paste":A=wm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Ad;break;case"toggle":case"beforetoggle":A=Um}var Z=(t&4)!==0,ge=!Z&&(e==="scroll"||e==="scrollend"),y=Z?C!==null?C+"Capture":null:C;Z=[];for(var h=S,w;h!==null;){var N=h;if(w=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||w===null||y===null||(N=Zl(h,y),N!=null&&Z.push(As(h,N,w))),ge)break;h=h.return}0<Z.length&&(C=new A(C,_,null,a,M),D.push({event:C,listeners:Z}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",C&&a!==Ai&&(_=a.relatedTarget||a.fromElement)&&(tl(_)||_[el]))break e;if((A||C)&&(C=M.window===M?M:(C=M.ownerDocument)?C.defaultView||C.parentWindow:window,A?(_=a.relatedTarget||a.toElement,A=S,_=_?tl(_):null,_!==null&&(ge=b(_),Z=_.tag,_!==ge||Z!==5&&Z!==27&&Z!==6)&&(_=null)):(A=null,_=S),A!==_)){if(Z=Cd,N="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Ad,N="onPointerLeave",y="onPointerEnter",h="pointer"),ge=A==null?C:Xl(A),w=_==null?C:Xl(_),C=new Z(N,h+"leave",A,a,M),C.target=ge,C.relatedTarget=w,N=null,tl(M)===S&&(Z=new Z(y,h+"enter",_,a,M),Z.target=w,Z.relatedTarget=ge,N=Z),ge=N,A&&_)t:{for(Z=Hp,y=A,h=_,w=0,N=y;N;N=Z(N))w++;N=0;for(var Q=h;Q;Q=Z(Q))N++;for(;0<w-N;)y=Z(y),w--;for(;0<N-w;)h=Z(h),N--;for(;w--;){if(y===h||h!==null&&y===h.alternate){Z=y;break t}y=Z(y),h=Z(h)}Z=null}else Z=null;A!==null&&xu(D,C,A,Z,!1),_!==null&&ge!==null&&xu(D,ge,_,Z,!0)}}e:{if(C=S?Xl(S):window,A=C.nodeName&&C.nodeName.toLowerCase(),A==="select"||A==="input"&&C.type==="file")var oe=jd;else if(zd(C))if(Od)oe=Km;else{oe=Xm;var q=Qm}else A=C.nodeName,!A||A.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?S&&Ti(S.elementType)&&(oe=jd):oe=Zm;if(oe&&(oe=oe(e,S))){Dd(D,oe,a,M);break e}q&&q(e,C,S),e==="focusout"&&S&&C.type==="number"&&S.memoizedProps.value!=null&&Ci(C,"number",C.value)}switch(q=S?Xl(S):window,e){case"focusin":(zd(q)||q.contentEditable==="true")&&(cl=q,_i=S,ts=null);break;case"focusout":ts=_i=cl=null;break;case"mousedown":Gi=!0;break;case"contextmenu":case"mouseup":case"dragend":Gi=!1,Vd(D,a,M);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":Vd(D,a,M)}var ee;if(Oi)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else dl?Bd(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(Rd&&a.locale!=="ko"&&(dl||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&dl&&(ee=wd()):(oa=M,Bi="value"in oa?oa.value:oa.textContent,dl=!0)),q=Vr(S,ie),0<q.length&&(ie=new Td(ie,e,null,a,M),D.push({event:ie,listeners:q}),ee?ie.data=ee:(ee=Nd(a),ee!==null&&(ie.data=ee)))),(ee=Gm?qm(e,a):Ym(e,a))&&(ie=Vr(S,"onBeforeInput"),0<ie.length&&(q=new Td("onBeforeInput","beforeinput",null,a,M),D.push({event:q,listeners:ie}),q.data=ee)),Dp(D,e,S,a,M)}bu(D,t)})}function As(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vr(e,t){for(var a=t+"Capture",l=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Zl(e,a),s!=null&&l.unshift(As(e,s,r)),s=Zl(e,t),s!=null&&l.push(As(e,s,r))),e.tag===3)return l;e=e.return}return[]}function Hp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xu(e,t,a,l,s){for(var r=t._reactName,n=[];a!==null&&a!==l;){var d=a,m=d.alternate,S=d.stateNode;if(d=d.tag,m!==null&&m===l)break;d!==5&&d!==26&&d!==27||S===null||(m=S,s?(S=Zl(a,r),S!=null&&n.unshift(As(a,S,m))):s||(S=Zl(a,r),S!=null&&n.push(As(a,S,m)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var Up=/\r\n?/g,_p=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(Up,`
`).replace(_p,"")}function yu(e,t){return t=gu(t),gu(e)===t}function xe(e,t,a,l,s,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||il(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&il(e,""+l);break;case"className":Zs(e,"class",l);break;case"tabIndex":Zs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zs(e,a,l);break;case"style":yd(e,l,r);break;case"data":if(t!=="object"){Zs(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Is(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&xe(e,t,"name",s.name,s,null),xe(e,t,"formEncType",s.formEncType,s,null),xe(e,t,"formMethod",s.formMethod,s,null),xe(e,t,"formTarget",s.formTarget,s,null)):(xe(e,t,"encType",s.encType,s,null),xe(e,t,"method",s.method,s,null),xe(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Is(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Is(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Xs(e,"popover",l);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=mm.get(a)||a,Xs(e,a,l))}}function mo(e,t,a,l,s,r){switch(a){case"style":yd(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?il(e,l):(typeof l=="number"||typeof l=="bigint")&&il(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),r=e[We]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,s);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xs(e,a,l)}}}function Xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,s=!1,r;for(r in a)if(a.hasOwnProperty(r)){var n=a[r];if(n!=null)switch(r){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,r,n,a,null)}}s&&xe(e,t,"srcSet",a.srcSet,a,null),l&&xe(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var d=r=n=s=null,m=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":s=M;break;case"type":n=M;break;case"checked":m=M;break;case"defaultChecked":S=M;break;case"value":r=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:xe(e,t,l,M,a,null)}}bd(e,r,d,m,S,n,s,!1);return;case"select":se("invalid",e),l=n=r=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":r=d;break;case"defaultValue":n=d;break;case"multiple":l=d;default:xe(e,t,s,d,a,null)}t=r,a=n,e.multiple=!!l,t!=null?rl(e,!!l,t,!1):a!=null&&rl(e,!!l,a,!0);return;case"textarea":se("invalid",e),r=s=l=null;for(n in a)if(a.hasOwnProperty(n)&&(d=a[n],d!=null))switch(n){case"value":l=d;break;case"defaultValue":s=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:xe(e,t,n,d,a,null)}xd(e,l,s,r);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:xe(e,t,m,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Ts.length;l++)se(Ts[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:xe(e,t,S,l,a,null)}return;default:if(Ti(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&mo(e,t,M,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&xe(e,t,d,l,a,null))}function Gp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,n=null,d=null,m=null,S=null,M=null;for(A in a){var D=a[A];if(a.hasOwnProperty(A)&&D!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=D;default:l.hasOwnProperty(A)||xe(e,t,A,null,l,D)}}for(var C in l){var A=l[C];if(D=a[C],l.hasOwnProperty(C)&&(A!=null||D!=null))switch(C){case"type":r=A;break;case"name":s=A;break;case"checked":S=A;break;case"defaultChecked":M=A;break;case"value":n=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:A!==D&&xe(e,t,C,A,l,D)}}Si(e,n,d,m,S,M,r,s);return;case"select":A=n=d=C=null;for(r in a)if(m=a[r],a.hasOwnProperty(r)&&m!=null)switch(r){case"value":break;case"multiple":A=m;default:l.hasOwnProperty(r)||xe(e,t,r,null,l,m)}for(s in l)if(r=l[s],m=a[s],l.hasOwnProperty(s)&&(r!=null||m!=null))switch(s){case"value":C=r;break;case"defaultValue":d=r;break;case"multiple":n=r;default:r!==m&&xe(e,t,s,r,l,m)}t=d,a=n,l=A,C!=null?rl(e,!!a,C,!1):!!l!=!!a&&(t!=null?rl(e,!!a,t,!0):rl(e,!!a,a?[]:"",!1));return;case"textarea":A=C=null;for(d in a)if(s=a[d],a.hasOwnProperty(d)&&s!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:xe(e,t,d,null,l,s)}for(n in l)if(s=l[n],r=a[n],l.hasOwnProperty(n)&&(s!=null||r!=null))switch(n){case"value":C=s;break;case"defaultValue":A=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==r&&xe(e,t,n,s,l,r)}hd(e,C,A);return;case"option":for(var _ in a)if(C=a[_],a.hasOwnProperty(_)&&C!=null&&!l.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:xe(e,t,_,null,l,C)}for(m in l)if(C=l[m],A=a[m],l.hasOwnProperty(m)&&C!==A&&(C!=null||A!=null))switch(m){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:xe(e,t,m,C,l,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)C=a[Z],a.hasOwnProperty(Z)&&C!=null&&!l.hasOwnProperty(Z)&&xe(e,t,Z,null,l,C);for(S in l)if(C=l[S],A=a[S],l.hasOwnProperty(S)&&C!==A&&(C!=null||A!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(137,t));break;default:xe(e,t,S,C,l,A)}return;default:if(Ti(t)){for(var ge in a)C=a[ge],a.hasOwnProperty(ge)&&C!==void 0&&!l.hasOwnProperty(ge)&&mo(e,t,ge,void 0,l,C);for(M in l)C=l[M],A=a[M],!l.hasOwnProperty(M)||C===A||C===void 0&&A===void 0||mo(e,t,M,C,l,A);return}}for(var y in a)C=a[y],a.hasOwnProperty(y)&&C!=null&&!l.hasOwnProperty(y)&&xe(e,t,y,null,l,C);for(D in l)C=l[D],A=a[D],!l.hasOwnProperty(D)||C===A||C==null&&A==null||xe(e,t,D,C,l,A)}function vu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var s=a[l],r=s.transferSize,n=s.initiatorType,d=s.duration;if(r&&d&&vu(n)){for(n=0,d=s.responseEnd,l+=1;l<a.length;l++){var m=a[l],S=m.startTime;if(S>d)break;var M=m.transferSize,D=m.initiatorType;M&&vu(D)&&(m=m.responseEnd,n+=M*(m<d?1:(d-S)/(m-S)))}if(--l,t+=8*(r+n)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var po=null,bo=null;function Fr(e){return e.nodeType===9?e:e.ownerDocument}function ku(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wu(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ho(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=null;function Yp(){var e=window.event;return e&&e.type==="popstate"?e===xo?!1:(xo=e,!0):(xo=null,!1)}var Su=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(Qp)}:Su;function Qp(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Tu(e,t){var a=t,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(s),Hl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Rs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rs(a);for(var r=a.firstChild;r;){var n=r.nextSibling,d=r.nodeName;r[Ql]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=n}}else a==="body"&&Rs(e.ownerDocument.body);a=s}while(a);Hl(t)}function Au(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function go(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":go(a),ki(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xp(e,t,a,l){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ql])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function Zp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Tt(e.nextSibling),e===null))return null;return e}function Ru(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function yo(e){return e.data==="$?"||e.data==="$~"}function vo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ko=null;function Eu(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Tt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Bu(e,t,a){switch(t=Fr(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Rs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ki(e)}var At=new Map,Nu=new Set;function Qr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=L.d;L.d={f:Ip,r:Jp,D:Wp,C:$p,L:Pp,m:eb,X:ab,S:tb,M:lb};function Ip(){var e=la.f(),t=Lr();return e||t}function Jp(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?K0(t):la.r(e)}var jl=typeof document>"u"?null:document;function zu(e,t,a){var l=jl;if(l&&typeof t=="string"&&t){var s=gt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),Nu.has(s)||(Nu.add(s),e={rel:e,crossOrigin:a,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),Xe(t,"link",e),Ge(t),l.head.appendChild(t)))}}function Wp(e){la.D(e),zu("dns-prefetch",e,null)}function $p(e,t){la.C(e,t),zu("preconnect",e,t)}function Pp(e,t,a){la.L(e,t,a);var l=jl;if(l&&e&&t){var s='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+gt(a.imageSizes)+'"]')):s+='[href="'+gt(e)+'"]';var r=s;switch(t){case"style":r=Ol(e);break;case"script":r=Ll(e)}At.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),At.set(r,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Es(r))||t==="script"&&l.querySelector(Ms(r))||(t=l.createElement("link"),Xe(t,"link",e),Ge(t),l.head.appendChild(t)))}}function eb(e,t){la.m(e,t);var a=jl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+gt(l)+'"][href="'+gt(e)+'"]',r=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ll(e)}if(!At.has(r)&&(e=E({rel:"modulepreload",href:e},t),At.set(r,e),a.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ms(r)))return}l=a.createElement("link"),Xe(l,"link",e),Ge(l),a.head.appendChild(l)}}}function tb(e,t,a){la.S(e,t,a);var l=jl;if(l&&e){var s=ll(l).hoistableStyles,r=Ol(e);t=t||"default";var n=s.get(r);if(!n){var d={loading:0,preload:null};if(n=l.querySelector(Es(r)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=At.get(r))&&wo(e,a);var m=n=l.createElement("link");Ge(m),Xe(m,"link",e),m._p=new Promise(function(S,M){m.onload=S,m.onerror=M}),m.addEventListener("load",function(){d.loading|=1}),m.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Xr(n,t,l)}n={type:"stylesheet",instance:n,count:1,state:d},s.set(r,n)}}}function ab(e,t){la.X(e,t);var a=jl;if(a&&e){var l=ll(a).hoistableScripts,s=Ll(e),r=l.get(s);r||(r=a.querySelector(Ms(s)),r||(e=E({src:e,async:!0},t),(t=At.get(s))&&So(e,t),r=a.createElement("script"),Ge(r),Xe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(s,r))}}function lb(e,t){la.M(e,t);var a=jl;if(a&&e){var l=ll(a).hoistableScripts,s=Ll(e),r=l.get(s);r||(r=a.querySelector(Ms(s)),r||(e=E({src:e,async:!0,type:"module"},t),(t=At.get(s))&&So(e,t),r=a.createElement("script"),Ge(r),Xe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(s,r))}}function Du(e,t,a,l){var s=(s=ae.current)?Qr(s):null;if(!s)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ol(a.href),a=ll(s).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ol(a.href);var r=ll(s).hoistableStyles,n=r.get(e);if(n||(s=s.ownerDocument||s,n={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,n),(r=s.querySelector(Es(e)))&&!r._p&&(n.instance=r,n.state.loading=5),At.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(e,a),r||sb(s,e,a,n.state))),t&&l===null)throw Error(o(528,""));return n}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ll(a),a=ll(s).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ol(e){return'href="'+gt(e)+'"'}function Es(e){return'link[rel="stylesheet"]['+e+"]"}function ju(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function sb(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Xe(t,"link",a),Ge(t),e.head.appendChild(t))}function Ll(e){return'[src="'+gt(e)+'"]'}function Ms(e){return"script[async]"+e}function Ou(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+gt(a.href)+'"]');if(l)return t.instance=l,Ge(l),l;var s=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ge(l),Xe(l,"style",s),Xr(l,a.precedence,e),t.instance=l;case"stylesheet":s=Ol(a.href);var r=e.querySelector(Es(s));if(r)return t.state.loading|=4,t.instance=r,Ge(r),r;l=ju(a),(s=At.get(s))&&wo(l,s),r=(e.ownerDocument||e).createElement("link"),Ge(r);var n=r;return n._p=new Promise(function(d,m){n.onload=d,n.onerror=m}),Xe(r,"link",l),t.state.loading|=4,Xr(r,a.precedence,e),t.instance=r;case"script":return r=Ll(a.src),(s=e.querySelector(Ms(r)))?(t.instance=s,Ge(s),s):(l=a,(s=At.get(r))&&(l=E({},a),So(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),Ge(s),Xe(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Xr(l,a.precedence,e));return t.instance}function Xr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,r=s,n=0;n<l.length;n++){var d=l[n];if(d.dataset.precedence===t)r=d;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function wo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function So(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zr=null;function Lu(e,t,a){if(Zr===null){var l=new Map,s=Zr=new Map;s.set(a,l)}else s=Zr,l=s.get(a),l||(l=new Map,s.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var r=a[s];if(!(r[Ql]||r[Ye]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var n=r.getAttribute(t)||"";n=e+n;var d=l.get(n);d?d.push(r):l.set(n,[r])}}return l}function Hu(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function rb(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ib(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=Ol(l.href),r=t.querySelector(Es(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Kr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,Ge(r);return}r=t.ownerDocument||t,l=ju(l),(s=At.get(s))&&wo(l,s),r=r.createElement("link"),Ge(r);var n=r;n._p=new Promise(function(d,m){n.onload=d,n.onerror=m}),Xe(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Co=0;function nb(e,t){return e.stylesheets&&e.count===0&&Jr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Jr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Co===0&&(Co=62500*qp());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Co?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Kr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ir=null;function Jr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ir=new Map,t.forEach(ob,e),Ir=null,Kr.call(e))}function ob(e,t){if(!(t.state.loading&4)){var a=Ir.get(e);if(a)var l=a.get(null);else{a=new Map,Ir.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var n=s[r];(n.nodeName==="LINK"||n.getAttribute("media")!=="not all")&&(a.set(n.dataset.precedence,n),l=n)}l&&a.set(null,l)}s=t.instance,n=s.getAttribute("data-precedence"),r=a.get(n)||l,r===l&&a.set(null,s),a.set(n,s),this.count++,l=Kr.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Bs={$$typeof:U,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function db(e,t,a,l,s,r,n,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.hiddenUpdates=xi(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=n,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function _u(e,t,a,l,s,r,n,d,m,S,M,D){return e=new db(e,t,a,n,m,S,M,D,d),t=1,r===!0&&(t|=24),r=ct(3,null,null,t),e.current=r,r.stateNode=e,t=tn(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},rn(r),e}function Gu(e){return e?(e=ml,e):ml}function qu(e,t,a,l,s,r){s=Gu(s),l.context===null?l.context=s:l.pendingContext=s,l=pa(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=ba(e,l,t),a!==null&&(lt(a,e,t),os(a,e,t))}function Yu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function To(e,t){Yu(e,t),(e=e.alternate)&&Yu(e,t)}function Vu(e){if(e.tag===13||e.tag===31){var t=Ga(e,67108864);t!==null&&lt(t,e,67108864),To(e,67108864)}}function Fu(e){if(e.tag===13||e.tag===31){var t=bt();t=gi(t);var a=Ga(e,t);a!==null&&lt(a,e,t),To(e,t)}}var Wr=!0;function cb(e,t,a,l){var s=B.T;B.T=null;var r=L.p;try{L.p=2,Ao(e,t,a,l)}finally{L.p=r,B.T=s}}function ub(e,t,a,l){var s=B.T;B.T=null;var r=L.p;try{L.p=8,Ao(e,t,a,l)}finally{L.p=r,B.T=s}}function Ao(e,t,a,l){if(Wr){var s=Ro(l);if(s===null)fo(e,t,l,$r,a),Xu(e,l);else if(mb(s,e,t,a,l))l.stopPropagation();else if(Xu(e,l),t&4&&-1<fb.indexOf(e)){for(;s!==null;){var r=al(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var n=Oa(r.pendingLanes);if(n!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;n;){var m=1<<31-ot(n);d.entanglements[1]|=m,n&=~m}Ht(r),(ce&6)===0&&(jr=it()+500,Cs(0))}}break;case 31:case 13:d=Ga(r,2),d!==null&&lt(d,r,2),Lr(),To(r,2)}if(r=Ro(l),r===null&&fo(e,t,l,$r,a),r===s)break;s=r}s!==null&&l.stopPropagation()}else fo(e,t,l,null,a)}}function Ro(e){return e=Ri(e),Eo(e)}var $r=null;function Eo(e){if($r=null,e=tl(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $r=e,null}function Qu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wf()){case Po:return 2;case ed:return 8;case qs:case $f:return 32;case td:return 268435456;default:return 32}default:return 32}}var Mo=!1,Aa=null,Ra=null,Ea=null,Ns=new Map,zs=new Map,Ma=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xu(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":Ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zs.delete(t.pointerId)}}function Ds(e,t,a,l,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[s]},t!==null&&(t=al(t),t!==null&&Vu(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function mb(e,t,a,l,s){switch(t){case"focusin":return Aa=Ds(Aa,e,t,a,l,s),!0;case"dragenter":return Ra=Ds(Ra,e,t,a,l,s),!0;case"mouseover":return Ea=Ds(Ea,e,t,a,l,s),!0;case"pointerover":var r=s.pointerId;return Ns.set(r,Ds(Ns.get(r)||null,e,t,a,l,s)),!0;case"gotpointercapture":return r=s.pointerId,zs.set(r,Ds(zs.get(r)||null,e,t,a,l,s)),!0}return!1}function Zu(e){var t=tl(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,nd(e.priority,function(){Fu(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,nd(e.priority,function(){Fu(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ro(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ai=l,a.target.dispatchEvent(l),Ai=null}else return t=al(a),t!==null&&Vu(t),e.blockedOn=a,!1;t.shift()}return!0}function Ku(e,t,a){Pr(e)&&a.delete(t)}function pb(){Mo=!1,Aa!==null&&Pr(Aa)&&(Aa=null),Ra!==null&&Pr(Ra)&&(Ra=null),Ea!==null&&Pr(Ea)&&(Ea=null),Ns.forEach(Ku),zs.forEach(Ku)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Mo||(Mo=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,pb)))}var ti=null;function Iu(e){ti!==e&&(ti=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ti===e&&(ti=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Eo(l||a)===null)continue;break}var r=al(a);r!==null&&(e.splice(t,3),t-=3,An(r,{pending:!0,data:s,method:a.method,action:l},l,s))}}))}function Hl(e){function t(m){return ei(m,e)}Aa!==null&&ei(Aa,e),Ra!==null&&ei(Ra,e),Ea!==null&&ei(Ea,e),Ns.forEach(t),zs.forEach(t);for(var a=0;a<Ma.length;a++){var l=Ma[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ma.length&&(a=Ma[0],a.blockedOn===null);)Zu(a),a.blockedOn===null&&Ma.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var s=a[l],r=a[l+1],n=s[We]||null;if(typeof r=="function")n||Iu(a);else if(n){var d=null;if(r&&r.hasAttribute("formAction")){if(s=r,n=r[We]||null)d=n.formAction;else if(Eo(s)!==null)continue}else d=n.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),Iu(a)}}}function Ju(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(n){return s=n})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Bo(e){this._internalRoot=e}ai.prototype.render=Bo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=bt();qu(a,l,e,t,null,null)},ai.prototype.unmount=Bo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qu(e.current,2,null,e,null,null),Lr(),t[el]=null}};function ai(e){this._internalRoot=e}ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=id();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ma.length&&t!==0&&t<Ma[a].priority;a++);Ma.splice(a,0,e),a===0&&Zu(e)}};var Wu=c.version;if(Wu!=="19.2.0")throw Error(o(527,Wu,"19.2.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=x(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var bb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Yl=li.inject(bb),nt=li}catch{}}return Os.createRoot=function(e,t){if(!f(e))throw Error(o(299));var a=!1,l="",s=sc,r=rc,n=ic;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=_u(e,1,!1,null,null,a,l,null,s,r,n,Ju),e[el]=t.current,uo(e),new Bo(t)},Os.hydrateRoot=function(e,t,a){if(!f(e))throw Error(o(299));var l=!1,s="",r=sc,n=rc,d=ic,m=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=_u(e,1,!0,t,a??null,l,s,m,r,n,d,Ju),t.context=Gu(null),a=t.current,l=bt(),l=gi(l),s=pa(l),s.callback=null,ba(a,s,l),a=l,t.current.lanes=a,Fl(t,a),Ht(t),e[el]=t.current,uo(e),new ai(t)},Os.version="19.2.0",Os}var of;function Ab(){if(of)return Do.exports;of=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Do.exports=Tb(),Do.exports}var Rb=Ab();const Eb=yf(Rb);/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var df="popstate";function Mb(i={}){function c(f,b){let{pathname:v="/",search:T="",hash:k=""}=Pa(f.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),_o("",{pathname:v,search:T,hash:k},b.state&&b.state.usr||null,b.state&&b.state.key||"default")}function u(f,b){let v=f.document.querySelector("base"),T="";if(v&&v.getAttribute("href")){let k=f.location.href,x=k.indexOf("#");T=x===-1?k:k.slice(0,x)}return T+"#"+(typeof b=="string"?b:Hs(b))}function o(f,b){ht(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(b)})`)}return Nb(c,u,o,i)}function Te(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function ht(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Bb(){return Math.random().toString(36).substring(2,10)}function cf(i,c){return{usr:i.state,key:i.key,idx:c}}function _o(i,c,u=null,o){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?Pa(c):c,state:u,key:c&&c.key||o||Bb()}}function Hs({pathname:i="/",search:c="",hash:u=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function Pa(i){let c={};if(i){let u=i.indexOf("#");u>=0&&(c.hash=i.substring(u),i=i.substring(0,u));let o=i.indexOf("?");o>=0&&(c.search=i.substring(o),i=i.substring(0,o)),i&&(c.pathname=i)}return c}function Nb(i,c,u,o={}){let{window:f=document.defaultView,v5Compat:b=!1}=o,v=f.history,T="POP",k=null,x=z();x==null&&(x=0,v.replaceState({...v.state,idx:x},""));function z(){return(v.state||{idx:null}).idx}function E(){T="POP";let Y=z(),F=Y==null?null:Y-x;x=Y,k&&k({action:T,location:K.location,delta:F})}function O(Y,F){T="PUSH";let te=_o(K.location,Y,F);u&&u(te,Y),x=z()+1;let U=cf(te,x),fe=K.createHref(te);try{v.pushState(U,"",fe)}catch(Ae){if(Ae instanceof DOMException&&Ae.name==="DataCloneError")throw Ae;f.location.assign(fe)}b&&k&&k({action:T,location:K.location,delta:1})}function V(Y,F){T="REPLACE";let te=_o(K.location,Y,F);u&&u(te,Y),x=z();let U=cf(te,x),fe=K.createHref(te);v.replaceState(U,"",fe),b&&k&&k({action:T,location:K.location,delta:0})}function X(Y){return zb(Y)}let K={get action(){return T},get location(){return i(f,v)},listen(Y){if(k)throw new Error("A history only accepts one active listener");return f.addEventListener(df,E),k=Y,()=>{f.removeEventListener(df,E),k=null}},createHref(Y){return c(f,Y)},createURL:X,encodeLocation(Y){let F=X(Y);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:O,replace:V,go(Y){return v.go(Y)}};return K}function zb(i,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Te(u,"No window.location.(origin|href) available to create URL");let o=typeof i=="string"?i:Hs(i);return o=o.replace(/ $/,"%20"),!c&&o.startsWith("//")&&(o=u+o),new URL(o,u)}function vf(i,c,u="/"){return Db(i,c,u,!1)}function Db(i,c,u,o){let f=typeof c=="string"?Pa(c):c,b=ra(f.pathname||"/",u);if(b==null)return null;let v=kf(i);jb(v);let T=null;for(let k=0;T==null&&k<v.length;++k){let x=Qb(b);T=Vb(v[k],x,o)}return T}function kf(i,c=[],u=[],o="",f=!1){let b=(v,T,k=f,x)=>{let z={relativePath:x===void 0?v.path||"":x,caseSensitive:v.caseSensitive===!0,childrenIndex:T,route:v};if(z.relativePath.startsWith("/")){if(!z.relativePath.startsWith(o)&&k)return;Te(z.relativePath.startsWith(o),`Absolute route path "${z.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),z.relativePath=z.relativePath.slice(o.length)}let E=sa([o,z.relativePath]),O=u.concat(z);v.children&&v.children.length>0&&(Te(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),kf(v.children,c,O,E,k)),!(v.path==null&&!v.index)&&c.push({path:E,score:qb(E,v.index),routesMeta:O})};return i.forEach((v,T)=>{var k;if(v.path===""||!((k=v.path)!=null&&k.includes("?")))b(v,T);else for(let x of wf(v.path))b(v,T,!0,x)}),c}function wf(i){let c=i.split("/");if(c.length===0)return[];let[u,...o]=c,f=u.endsWith("?"),b=u.replace(/\?$/,"");if(o.length===0)return f?[b,""]:[b];let v=wf(o.join("/")),T=[];return T.push(...v.map(k=>k===""?b:[b,k].join("/"))),f&&T.push(...v),T.map(k=>i.startsWith("/")&&k===""?"/":k)}function jb(i){i.sort((c,u)=>c.score!==u.score?u.score-c.score:Yb(c.routesMeta.map(o=>o.childrenIndex),u.routesMeta.map(o=>o.childrenIndex)))}var Ob=/^:[\w-]+$/,Lb=3,Hb=2,Ub=1,_b=10,Gb=-2,uf=i=>i==="*";function qb(i,c){let u=i.split("/"),o=u.length;return u.some(uf)&&(o+=Gb),c&&(o+=Hb),u.filter(f=>!uf(f)).reduce((f,b)=>f+(Ob.test(b)?Lb:b===""?Ub:_b),o)}function Yb(i,c){return i.length===c.length&&i.slice(0,-1).every((o,f)=>o===c[f])?i[i.length-1]-c[c.length-1]:0}function Vb(i,c,u=!1){let{routesMeta:o}=i,f={},b="/",v=[];for(let T=0;T<o.length;++T){let k=o[T],x=T===o.length-1,z=b==="/"?c:c.slice(b.length)||"/",E=ni({path:k.relativePath,caseSensitive:k.caseSensitive,end:x},z),O=k.route;if(!E&&x&&u&&!o[o.length-1].route.index&&(E=ni({path:k.relativePath,caseSensitive:k.caseSensitive,end:!1},z)),!E)return null;Object.assign(f,E.params),v.push({params:f,pathname:sa([b,E.pathname]),pathnameBase:Jb(sa([b,E.pathnameBase])),route:O}),E.pathnameBase!=="/"&&(b=sa([b,E.pathnameBase]))}return v}function ni(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,o]=Fb(i.path,i.caseSensitive,i.end),f=c.match(u);if(!f)return null;let b=f[0],v=b.replace(/(.)\/+$/,"$1"),T=f.slice(1);return{params:o.reduce((x,{paramName:z,isOptional:E},O)=>{if(z==="*"){let X=T[O]||"";v=b.slice(0,b.length-X.length).replace(/(.)\/+$/,"$1")}const V=T[O];return E&&!V?x[z]=void 0:x[z]=(V||"").replace(/%2F/g,"/"),x},{}),pathname:b,pathnameBase:v,pattern:i}}function Fb(i,c=!1,u=!0){ht(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let o=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,T,k)=>(o.push({paramName:T,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(o.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),o]}function Qb(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return ht(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function ra(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,o=i.charAt(u);return o&&o!=="/"?null:i.slice(u)||"/"}var Xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zb=i=>Xb.test(i);function Kb(i,c="/"){let{pathname:u,search:o="",hash:f=""}=typeof i=="string"?Pa(i):i,b;if(u)if(Zb(u))b=u;else{if(u.includes("//")){let v=u;u=u.replace(/\/\/+/g,"/"),ht(!1,`Pathnames cannot have embedded double slashes - normalizing ${v} -> ${u}`)}u.startsWith("/")?b=ff(u.substring(1),"/"):b=ff(u,c)}else b=c;return{pathname:b,search:Wb(o),hash:$b(f)}}function ff(i,c){let u=c.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Ho(i,c,u,o){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ib(i){return i.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function Yo(i){let c=Ib(i);return c.map((u,o)=>o===c.length-1?u.pathname:u.pathnameBase)}function Vo(i,c,u,o=!1){let f;typeof i=="string"?f=Pa(i):(f={...i},Te(!f.pathname||!f.pathname.includes("?"),Ho("?","pathname","search",f)),Te(!f.pathname||!f.pathname.includes("#"),Ho("#","pathname","hash",f)),Te(!f.search||!f.search.includes("#"),Ho("#","search","hash",f)));let b=i===""||f.pathname==="",v=b?"/":f.pathname,T;if(v==null)T=u;else{let E=c.length-1;if(!o&&v.startsWith("..")){let O=v.split("/");for(;O[0]==="..";)O.shift(),E-=1;f.pathname=O.join("/")}T=E>=0?c[E]:"/"}let k=Kb(f,T),x=v&&v!=="/"&&v.endsWith("/"),z=(b||v===".")&&u.endsWith("/");return!k.pathname.endsWith("/")&&(x||z)&&(k.pathname+="/"),k}var sa=i=>i.join("/").replace(/\/\/+/g,"/"),Jb=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Wb=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,$b=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Pb(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sf=["POST","PUT","PATCH","DELETE"];new Set(Sf);var eh=["GET",...Sf];new Set(eh);var _l=R.createContext(null);_l.displayName="DataRouter";var oi=R.createContext(null);oi.displayName="DataRouterState";R.createContext(!1);var Cf=R.createContext({isTransitioning:!1});Cf.displayName="ViewTransition";var th=R.createContext(new Map);th.displayName="Fetchers";var ah=R.createContext(null);ah.displayName="Await";var Dt=R.createContext(null);Dt.displayName="Navigation";var Us=R.createContext(null);Us.displayName="Location";var Et=R.createContext({outlet:null,matches:[],isDataRoute:!1});Et.displayName="Route";var Fo=R.createContext(null);Fo.displayName="RouteError";function lh(i,{relative:c}={}){Te(Gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:o}=R.useContext(Dt),{hash:f,pathname:b,search:v}=_s(i,{relative:c}),T=b;return u!=="/"&&(T=b==="/"?u:sa([u,b])),o.createHref({pathname:T,search:v,hash:f})}function Gl(){return R.useContext(Us)!=null}function za(){return Te(Gl(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Us).location}var Tf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Af(i){R.useContext(Dt).static||R.useLayoutEffect(i)}function Rf(){let{isDataRoute:i}=R.useContext(Et);return i?gh():sh()}function sh(){Te(Gl(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(_l),{basename:c,navigator:u}=R.useContext(Dt),{matches:o}=R.useContext(Et),{pathname:f}=za(),b=JSON.stringify(Yo(o)),v=R.useRef(!1);return Af(()=>{v.current=!0}),R.useCallback((k,x={})=>{if(ht(v.current,Tf),!v.current)return;if(typeof k=="number"){u.go(k);return}let z=Vo(k,JSON.parse(b),f,x.relative==="path");i==null&&c!=="/"&&(z.pathname=z.pathname==="/"?c:sa([c,z.pathname])),(x.replace?u.replace:u.push)(z,x.state,x)},[c,u,b,f,i])}var rh=R.createContext(null);function ih(i){let c=R.useContext(Et).outlet;return R.useMemo(()=>c&&R.createElement(rh.Provider,{value:i},c),[c,i])}function Ef(){let{matches:i}=R.useContext(Et),c=i[i.length-1];return c?c.params:{}}function _s(i,{relative:c}={}){let{matches:u}=R.useContext(Et),{pathname:o}=za(),f=JSON.stringify(Yo(u));return R.useMemo(()=>Vo(i,JSON.parse(f),o,c==="path"),[i,f,o,c])}function nh(i,c){return Mf(i,c)}function Mf(i,c,u,o,f){var te;Te(Gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=R.useContext(Dt),{matches:v}=R.useContext(Et),T=v[v.length-1],k=T?T.params:{},x=T?T.pathname:"/",z=T?T.pathnameBase:"/",E=T&&T.route;{let U=E&&E.path||"";Bf(x,!E||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let O=za(),V;if(c){let U=typeof c=="string"?Pa(c):c;Te(z==="/"||((te=U.pathname)==null?void 0:te.startsWith(z)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${U.pathname}" was given in the \`location\` prop.`),V=U}else V=O;let X=V.pathname||"/",K=X;if(z!=="/"){let U=z.replace(/^\//,"").split("/");K="/"+X.replace(/^\//,"").split("/").slice(U.length).join("/")}let Y=vf(i,{pathname:K});ht(E||Y!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),ht(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let F=fh(Y&&Y.map(U=>Object.assign({},U,{params:Object.assign({},k,U.params),pathname:sa([z,b.encodeLocation?b.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?z:sa([z,b.encodeLocation?b.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),v,u,o,f);return c&&F?R.createElement(Us.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...V},navigationType:"POP"}},F):F}function oh(){let i=xh(),c=Pb(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},b={padding:"2px 4px",backgroundColor:o},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:b},"ErrorBoundary")," or"," ",R.createElement("code",{style:b},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},c),u?R.createElement("pre",{style:f},u):null,v)}var dh=R.createElement(oh,null),ch=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?R.createElement(Et.Provider,{value:this.props.routeContext},R.createElement(Fo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function uh({routeContext:i,match:c,children:u}){let o=R.useContext(_l);return o&&o.static&&o.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=c.route.id),R.createElement(Et.Provider,{value:i},u)}function fh(i,c=[],u=null,o=null,f=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let b=i,v=u==null?void 0:u.errors;if(v!=null){let z=b.findIndex(E=>E.route.id&&(v==null?void 0:v[E.route.id])!==void 0);Te(z>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),b=b.slice(0,Math.min(b.length,z+1))}let T=!1,k=-1;if(u)for(let z=0;z<b.length;z++){let E=b[z];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(k=z),E.route.id){let{loaderData:O,errors:V}=u,X=E.route.loader&&!O.hasOwnProperty(E.route.id)&&(!V||V[E.route.id]===void 0);if(E.route.lazy||X){T=!0,k>=0?b=b.slice(0,k+1):b=[b[0]];break}}}let x=u&&o?(z,E)=>{var O,V;o(z,{location:u.location,params:((V=(O=u.matches)==null?void 0:O[0])==null?void 0:V.params)??{},errorInfo:E})}:void 0;return b.reduceRight((z,E,O)=>{let V,X=!1,K=null,Y=null;u&&(V=v&&E.route.id?v[E.route.id]:void 0,K=E.route.errorElement||dh,T&&(k<0&&O===0?(Bf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,Y=null):k===O&&(X=!0,Y=E.route.hydrateFallbackElement||null)));let F=c.concat(b.slice(0,O+1)),te=()=>{let U;return V?U=K:X?U=Y:E.route.Component?U=R.createElement(E.route.Component,null):E.route.element?U=E.route.element:U=z,R.createElement(uh,{match:E,routeContext:{outlet:z,matches:F,isDataRoute:u!=null},children:U})};return u&&(E.route.ErrorBoundary||E.route.errorElement||O===0)?R.createElement(ch,{location:u.location,revalidation:u.revalidation,component:K,error:V,children:te(),routeContext:{outlet:null,matches:F,isDataRoute:!0},onError:x}):te()},null)}function Qo(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mh(i){let c=R.useContext(_l);return Te(c,Qo(i)),c}function ph(i){let c=R.useContext(oi);return Te(c,Qo(i)),c}function bh(i){let c=R.useContext(Et);return Te(c,Qo(i)),c}function Xo(i){let c=bh(i),u=c.matches[c.matches.length-1];return Te(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function hh(){return Xo("useRouteId")}function xh(){var o;let i=R.useContext(Fo),c=ph("useRouteError"),u=Xo("useRouteError");return i!==void 0?i:(o=c.errors)==null?void 0:o[u]}function gh(){let{router:i}=mh("useNavigate"),c=Xo("useNavigate"),u=R.useRef(!1);return Af(()=>{u.current=!0}),R.useCallback(async(f,b={})=>{ht(u.current,Tf),u.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:c,...b}))},[i,c])}var mf={};function Bf(i,c,u){!c&&!mf[i]&&(mf[i]=!0,ht(!1,u))}R.memo(yh);function yh({routes:i,future:c,state:u,unstable_onError:o}){return Mf(i,void 0,u,o,c)}function vh({to:i,replace:c,state:u,relative:o}){Te(Gl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=R.useContext(Dt);ht(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:b}=R.useContext(Et),{pathname:v}=za(),T=Rf(),k=Vo(i,Yo(b),v,o==="path"),x=JSON.stringify(k);return R.useEffect(()=>{T(JSON.parse(x),{replace:c,state:u,relative:o})},[T,x,o,c,u]),null}function kh(i){return ih(i.context)}function Ul(i){Te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wh({basename:i="/",children:c=null,location:u,navigationType:o="POP",navigator:f,static:b=!1}){Te(!Gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=i.replace(/^\/*/,"/"),T=R.useMemo(()=>({basename:v,navigator:f,static:b,future:{}}),[v,f,b]);typeof u=="string"&&(u=Pa(u));let{pathname:k="/",search:x="",hash:z="",state:E=null,key:O="default"}=u,V=R.useMemo(()=>{let X=ra(k,v);return X==null?null:{location:{pathname:X,search:x,hash:z,state:E,key:O},navigationType:o}},[v,k,x,z,E,O,o]);return ht(V!=null,`<Router basename="${v}"> is not able to match the URL "${k}${x}${z}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:R.createElement(Dt.Provider,{value:T},R.createElement(Us.Provider,{children:c,value:V}))}function Sh({children:i,location:c}){return nh(Go(i),c)}function Go(i,c=[]){let u=[];return R.Children.forEach(i,(o,f)=>{if(!R.isValidElement(o))return;let b=[...c,f];if(o.type===R.Fragment){u.push.apply(u,Go(o.props.children,b));return}Te(o.type===Ul,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Te(!o.props.index||!o.props.children,"An index route cannot have child routes.");let v={id:o.props.id||b.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(v.children=Go(o.props.children,b)),u.push(v)}),u}var ri="get",ii="application/x-www-form-urlencoded";function di(i){return i!=null&&typeof i.tagName=="string"}function Ch(i){return di(i)&&i.tagName.toLowerCase()==="button"}function Th(i){return di(i)&&i.tagName.toLowerCase()==="form"}function Ah(i){return di(i)&&i.tagName.toLowerCase()==="input"}function Rh(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Eh(i,c){return i.button===0&&(!c||c==="_self")&&!Rh(i)}var si=null;function Mh(){if(si===null)try{new FormData(document.createElement("form"),0),si=!1}catch{si=!0}return si}var Bh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Uo(i){return i!=null&&!Bh.has(i)?(ht(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`),null):i}function Nh(i,c){let u,o,f,b,v;if(Th(i)){let T=i.getAttribute("action");o=T?ra(T,c):null,u=i.getAttribute("method")||ri,f=Uo(i.getAttribute("enctype"))||ii,b=new FormData(i)}else if(Ch(i)||Ah(i)&&(i.type==="submit"||i.type==="image")){let T=i.form;if(T==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let k=i.getAttribute("formaction")||T.getAttribute("action");if(o=k?ra(k,c):null,u=i.getAttribute("formmethod")||T.getAttribute("method")||ri,f=Uo(i.getAttribute("formenctype"))||Uo(T.getAttribute("enctype"))||ii,b=new FormData(T,i),!Mh()){let{name:x,type:z,value:E}=i;if(z==="image"){let O=x?`${x}.`:"";b.append(`${O}x`,"0"),b.append(`${O}y`,"0")}else x&&b.append(x,E)}}else{if(di(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ri,o=null,f=ii,v=i}return b&&f==="text/plain"&&(v=b,b=void 0),{action:o,method:u.toLowerCase(),encType:f,formData:b,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zo(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function zh(i,c,u){let o=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return o.pathname==="/"?o.pathname=`_root.${u}`:c&&ra(o.pathname,c)==="/"?o.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${u}`,o}async function Dh(i,c){if(i.id in c)return c[i.id];try{let u=await import(i.module);return c[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jh(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Oh(i,c,u){let o=await Promise.all(i.map(async f=>{let b=c.routes[f.route.id];if(b){let v=await Dh(b,u);return v.links?v.links():[]}return[]}));return _h(o.flat(1).filter(jh).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function pf(i,c,u,o,f,b){let v=(k,x)=>u[x]?k.route.id!==u[x].route.id:!0,T=(k,x)=>{var z;return u[x].pathname!==k.pathname||((z=u[x].route.path)==null?void 0:z.endsWith("*"))&&u[x].params["*"]!==k.params["*"]};return b==="assets"?c.filter((k,x)=>v(k,x)||T(k,x)):b==="data"?c.filter((k,x)=>{var E;let z=o.routes[k.route.id];if(!z||!z.hasLoader)return!1;if(v(k,x)||T(k,x))return!0;if(k.route.shouldRevalidate){let O=k.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((E=u[0])==null?void 0:E.params)||{},nextUrl:new URL(i,window.origin),nextParams:k.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function Lh(i,c,{includeHydrateFallback:u}={}){return Hh(i.map(o=>{let f=c.routes[o.route.id];if(!f)return[];let b=[f.module];return f.clientActionModule&&(b=b.concat(f.clientActionModule)),f.clientLoaderModule&&(b=b.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(b=b.concat(f.hydrateFallbackModule)),f.imports&&(b=b.concat(f.imports)),b}).flat(1))}function Hh(i){return[...new Set(i)]}function Uh(i){let c={},u=Object.keys(i).sort();for(let o of u)c[o]=i[o];return c}function _h(i,c){let u=new Set;return new Set(c),i.reduce((o,f)=>{let b=JSON.stringify(Uh(f));return u.has(b)||(u.add(b),o.push({key:b,link:f})),o},[])}function Nf(){let i=R.useContext(_l);return Zo(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Gh(){let i=R.useContext(oi);return Zo(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ko=R.createContext(void 0);Ko.displayName="FrameworkContext";function zf(){let i=R.useContext(Ko);return Zo(i,"You must render this element inside a <HydratedRouter> element"),i}function qh(i,c){let u=R.useContext(Ko),[o,f]=R.useState(!1),[b,v]=R.useState(!1),{onFocus:T,onBlur:k,onMouseEnter:x,onMouseLeave:z,onTouchStart:E}=c,O=R.useRef(null);R.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let K=F=>{F.forEach(te=>{v(te.isIntersecting)})},Y=new IntersectionObserver(K,{threshold:.5});return O.current&&Y.observe(O.current),()=>{Y.disconnect()}}},[i]),R.useEffect(()=>{if(o){let K=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(K)}}},[o]);let V=()=>{f(!0)},X=()=>{f(!1),v(!1)};return u?i!=="intent"?[b,O,{}]:[b,O,{onFocus:Ls(T,V),onBlur:Ls(k,X),onMouseEnter:Ls(x,V),onMouseLeave:Ls(z,X),onTouchStart:Ls(E,V)}]:[!1,O,{}]}function Ls(i,c){return u=>{i&&i(u),u.defaultPrevented||c(u)}}function Yh({page:i,...c}){let{router:u}=Nf(),o=R.useMemo(()=>vf(u.routes,i,u.basename),[u.routes,i,u.basename]);return o?R.createElement(Fh,{page:i,matches:o,...c}):null}function Vh(i){let{manifest:c,routeModules:u}=zf(),[o,f]=R.useState([]);return R.useEffect(()=>{let b=!1;return Oh(i,c,u).then(v=>{b||f(v)}),()=>{b=!0}},[i,c,u]),o}function Fh({page:i,matches:c,...u}){let o=za(),{manifest:f,routeModules:b}=zf(),{basename:v}=Nf(),{loaderData:T,matches:k}=Gh(),x=R.useMemo(()=>pf(i,c,k,f,o,"data"),[i,c,k,f,o]),z=R.useMemo(()=>pf(i,c,k,f,o,"assets"),[i,c,k,f,o]),E=R.useMemo(()=>{if(i===o.pathname+o.search+o.hash)return[];let X=new Set,K=!1;if(c.forEach(F=>{var U;let te=f.routes[F.route.id];!te||!te.hasLoader||(!x.some(fe=>fe.route.id===F.route.id)&&F.route.id in T&&((U=b[F.route.id])!=null&&U.shouldRevalidate)||te.hasClientLoader?K=!0:X.add(F.route.id))}),X.size===0)return[];let Y=zh(i,v,"data");return K&&X.size>0&&Y.searchParams.set("_routes",c.filter(F=>X.has(F.route.id)).map(F=>F.route.id).join(",")),[Y.pathname+Y.search]},[v,T,o,f,x,c,i,b]),O=R.useMemo(()=>Lh(z,f),[z,f]),V=Vh(z);return R.createElement(R.Fragment,null,E.map(X=>R.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...u})),O.map(X=>R.createElement("link",{key:X,rel:"modulepreload",href:X,...u})),V.map(({key:X,link:K})=>R.createElement("link",{key:X,nonce:u.nonce,...K})))}function Qh(...i){return c=>{i.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var Df=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Df&&(window.__reactRouterVersion="7.9.6")}catch{}function Xh({basename:i,children:c,window:u}){let o=R.useRef();o.current==null&&(o.current=Mb({window:u,v5Compat:!0}));let f=o.current,[b,v]=R.useState({action:f.action,location:f.location}),T=R.useCallback(k=>{R.startTransition(()=>v(k))},[v]);return R.useLayoutEffect(()=>f.listen(T),[f,T]),R.createElement(wh,{basename:i,children:c,location:b.location,navigationType:b.action,navigator:f})}var jf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Na=R.forwardRef(function({onClick:c,discover:u="render",prefetch:o="none",relative:f,reloadDocument:b,replace:v,state:T,target:k,to:x,preventScrollReset:z,viewTransition:E,...O},V){let{basename:X}=R.useContext(Dt),K=typeof x=="string"&&jf.test(x),Y,F=!1;if(typeof x=="string"&&K&&(Y=x,Df))try{let Re=new URL(window.location.href),st=x.startsWith("//")?new URL(Re.protocol+x):new URL(x),rt=ra(st.pathname,X);st.origin===Re.origin&&rt!=null?x=rt+st.search+st.hash:F=!0}catch{ht(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=lh(x,{relative:f}),[U,fe,Ae]=qh(o,O),He=Ih(x,{replace:v,state:T,target:k,preventScrollReset:z,relative:f,viewTransition:E});function P(Re){c&&c(Re),Re.defaultPrevented||He(Re)}let Ue=R.createElement("a",{...O,...Ae,href:Y||te,onClick:F||b?c:P,ref:Qh(V,fe),target:k,"data-discover":!K&&u==="render"?"true":void 0});return U&&!K?R.createElement(R.Fragment,null,Ue,R.createElement(Yh,{page:te})):Ue});Na.displayName="Link";var Of=R.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:o="",end:f=!1,style:b,to:v,viewTransition:T,children:k,...x},z){let E=_s(v,{relative:x.relative}),O=za(),V=R.useContext(oi),{navigator:X,basename:K}=R.useContext(Dt),Y=V!=null&&ex(E)&&T===!0,F=X.encodeLocation?X.encodeLocation(E).pathname:E.pathname,te=O.pathname,U=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;u||(te=te.toLowerCase(),U=U?U.toLowerCase():null,F=F.toLowerCase()),U&&K&&(U=ra(U,K)||U);const fe=F!=="/"&&F.endsWith("/")?F.length-1:F.length;let Ae=te===F||!f&&te.startsWith(F)&&te.charAt(fe)==="/",He=U!=null&&(U===F||!f&&U.startsWith(F)&&U.charAt(F.length)==="/"),P={isActive:Ae,isPending:He,isTransitioning:Y},Ue=Ae?c:void 0,Re;typeof o=="function"?Re=o(P):Re=[o,Ae?"active":null,He?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let st=typeof b=="function"?b(P):b;return R.createElement(Na,{...x,"aria-current":Ue,className:Re,ref:z,style:st,to:v,viewTransition:T},typeof k=="function"?k(P):k)});Of.displayName="NavLink";var Zh=R.forwardRef(({discover:i="render",fetcherKey:c,navigate:u,reloadDocument:o,replace:f,state:b,method:v=ri,action:T,onSubmit:k,relative:x,preventScrollReset:z,viewTransition:E,...O},V)=>{let X=$h(),K=Ph(T,{relative:x}),Y=v.toLowerCase()==="get"?"get":"post",F=typeof T=="string"&&jf.test(T),te=U=>{if(k&&k(U),U.defaultPrevented)return;U.preventDefault();let fe=U.nativeEvent.submitter,Ae=(fe==null?void 0:fe.getAttribute("formmethod"))||v;X(fe||U.currentTarget,{fetcherKey:c,method:Ae,navigate:u,replace:f,state:b,relative:x,preventScrollReset:z,viewTransition:E})};return R.createElement("form",{ref:V,method:Y,action:K,onSubmit:o?k:te,...O,"data-discover":!F&&i==="render"?"true":void 0})});Zh.displayName="Form";function Kh(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lf(i){let c=R.useContext(_l);return Te(c,Kh(i)),c}function Ih(i,{target:c,replace:u,state:o,preventScrollReset:f,relative:b,viewTransition:v}={}){let T=Rf(),k=za(),x=_s(i,{relative:b});return R.useCallback(z=>{if(Eh(z,c)){z.preventDefault();let E=u!==void 0?u:Hs(k)===Hs(x);T(i,{replace:E,state:o,preventScrollReset:f,relative:b,viewTransition:v})}},[k,T,x,u,o,c,i,f,b,v])}var Jh=0,Wh=()=>`__${String(++Jh)}__`;function $h(){let{router:i}=Lf("useSubmit"),{basename:c}=R.useContext(Dt),u=hh();return R.useCallback(async(o,f={})=>{let{action:b,method:v,encType:T,formData:k,body:x}=Nh(o,c);if(f.navigate===!1){let z=f.fetcherKey||Wh();await i.fetch(z,u,f.action||b,{preventScrollReset:f.preventScrollReset,formData:k,body:x,formMethod:f.method||v,formEncType:f.encType||T,flushSync:f.flushSync})}else await i.navigate(f.action||b,{preventScrollReset:f.preventScrollReset,formData:k,body:x,formMethod:f.method||v,formEncType:f.encType||T,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,c,u])}function Ph(i,{relative:c}={}){let{basename:u}=R.useContext(Dt),o=R.useContext(Et);Te(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),b={..._s(i||".",{relative:c})},v=za();if(i==null){b.search=v.search;let T=new URLSearchParams(b.search),k=T.getAll("index");if(k.some(z=>z==="")){T.delete("index"),k.filter(E=>E).forEach(E=>T.append("index",E));let z=T.toString();b.search=z?`?${z}`:""}}return(!i||i===".")&&f.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(b.pathname=b.pathname==="/"?u:sa([u,b.pathname])),Hs(b)}function ex(i,{relative:c}={}){let u=R.useContext(Cf);Te(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Lf("useViewTransitionState"),f=_s(i,{relative:c});if(!u.isTransitioning)return!1;let b=ra(u.currentLocation.pathname,o)||u.currentLocation.pathname,v=ra(u.nextLocation.pathname,o)||u.nextLocation.pathname;return ni(f.pathname,v)!=null||ni(f.pathname,b)!=null}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ax=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,u,o)=>o?o.toUpperCase():u.toLowerCase()),bf=i=>{const c=ax(i);return c.charAt(0).toUpperCase()+c.slice(1)},Hf=(...i)=>i.filter((c,u,o)=>!!c&&c.trim()!==""&&o.indexOf(c)===u).join(" ").trim(),lx=i=>{for(const c in i)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=R.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:u=2,absoluteStrokeWidth:o,className:f="",children:b,iconNode:v,...T},k)=>R.createElement("svg",{ref:k,...sx,width:c,height:c,stroke:i,strokeWidth:o?Number(u)*24/Number(c):u,className:Hf("lucide",f),...!b&&!lx(T)&&{"aria-hidden":"true"},...T},[...v.map(([x,z])=>R.createElement(x,z)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(i,c)=>{const u=R.forwardRef(({className:o,...f},b)=>R.createElement(rx,{ref:b,iconNode:c,className:Hf(`lucide-${tx(bf(i))}`,`lucide-${i}`,o),...f}));return u.displayName=bf(i),u};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],nx=ke("arrow-left",ix);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Uf=ke("arrow-up-right",ox);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],cx=ke("award",dx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],fx=ke("briefcase",ux);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],_f=ke("chart-pie",mx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bx=ke("chevron-right",px);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],xx=ke("chevron-left",hx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],yx=ke("compass",gx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Gf=ke("credit-card",vx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],qf=ke("gem",kx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ci=ke("globe",wx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Yf=ke("hotel",Sx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Tx=ke("house",Cx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],Vf=ke("laptop",Ax);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ex=ke("menu",Rx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Bx=ke("moon",Mx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Ff=ke("plane",Nx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hf=ke("search",zx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],jx=ke("share-2",Dx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Io=ke("shield-check",Ox);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Hx=ke("sparkles",Lx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],_x=ke("sun",Ux);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Jo=ke("trending-up",Gx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],Qf=ke("umbrella",qx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Vx=ke("users",Yx);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qx=ke("x",Fx),Xx={id:"cc-axis-magnus-burgundy",title:"Axis Bank Magnus Burgundy Credit Card Review",excerpt:"The most rewarding credit card for HNI spenders. Up to 25% returns on spends over 1.5L per month.",content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <h3 class="text-lg font-serif font-bold mb-4 text-slate-900 dark:text-white">Card Overview</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Type:</span> HNI Credit Card</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Reward Rate:</span> 4.8% to 25%</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Annual Fee:</span> ₹30,000 + GST</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Rating:</span> ⭐ 4.8/5</div>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">About the Card</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The Axis Bank Magnus Burgundy Credit Card was launched for the bank's true Burgundy customers following a significant devaluation of the regular Magnus card. This is exclusively designed for high-value spenders who are willing to explore its airline and hotel transfer partners to maximize point value.
    </p>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Fees & Benefits</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700/60 dark:to-slate-700/40">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Fee Type</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Joining Fee</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">₹30,000 + GST</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Welcome Benefit</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">₹5,000 Yatra Voucher</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Renewal Fee</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">₹30,000 + GST</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Fee Waiver (Renewal)</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">On spending >30 Lakhs</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Reward Structure</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border-l-4 border-blue-500 dark:border-cyan-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-3 text-slate-900 dark:text-white text-lg">Regular Spend Returns</p>
      <p class="mb-2 text-slate-700 dark:text-slate-300">• 12 RP per ₹200 = 1.2% = 4.8% as airmiles</p>
      <p class="mb-2 text-slate-700 dark:text-slate-300">• On Axis Travel Edge Portal (5X): 60 RP per ₹200 = 6% = 24% as airmiles</p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Reward Calculation Examples</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Monthly Spend (₹)</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center font-serif font-semibold text-slate-900 dark:text-slate-100" colspan="2">Edge Rewards</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center font-serif font-semibold text-slate-900 dark:text-slate-100">Total</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center font-serif font-semibold text-slate-900 dark:text-slate-100">Reward Rate %</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center font-serif font-semibold text-slate-900 dark:text-slate-100">@ 1-INR</th>
          </tr>
          <tr class="bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-amber-900/30 dark:to-yellow-900/30">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left"></th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center text-xs font-semibold text-slate-700 dark:text-slate-300">Regular (1.5L)</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center text-xs font-semibold text-slate-700 dark:text-slate-300">Accelerated (>1.5L)</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center"></th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center"></th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-center">Transfer 5:4</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-green-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 font-semibold text-slate-900 dark:text-slate-100">150000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">7200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">0</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center font-semibold text-slate-900 dark:text-slate-100">7200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">4.80</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">5760</td>
          </tr>
          <tr class="hover:bg-green-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 font-semibold text-slate-900 dark:text-slate-100">300000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">7200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">21000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center font-semibold text-slate-900 dark:text-slate-100">28200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">9.40</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">22560</td>
          </tr>
          <tr class="hover:bg-green-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 font-semibold text-slate-900 dark:text-slate-100">500000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">7200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">49000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center font-semibold text-slate-900 dark:text-slate-100">56200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">11.24</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">44960</td>
          </tr>
          <tr class="hover:bg-green-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 font-semibold text-slate-900 dark:text-slate-100">700000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">7200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">77000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center font-semibold text-slate-900 dark:text-slate-100">84200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">12.03</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">67360</td>
          </tr>
          <tr class="hover:bg-green-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 font-semibold text-slate-900 dark:text-slate-100">1000000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">7200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">119000</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center font-semibold text-slate-900 dark:text-slate-100">126200</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">12.62</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-center text-slate-700 dark:text-slate-300">100960</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Accelerated Rewards</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-emerald-900/20 dark:via-green-900/15 dark:to-emerald-900/20 rounded-xl border-l-4 border-emerald-500 dark:border-emerald-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-3 text-slate-900 dark:text-white text-lg">Exceptional Returns for High Spenders</p>
      <p class="mb-2 text-slate-700 dark:text-slate-300">For spends exceeding ₹1.5L in a calendar month, you earn 35 points per ₹200 (~14% return on spends).</p>
      <p class="text-slate-700 dark:text-slate-300 italic mt-3">At ~₹3L monthly spend, you achieve a sweet 10% reward rate on average.</p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Lounge & Travel Benefits</h3>
    <ul class="list-disc pl-6 mb-6 space-y-3 text-slate-700 dark:text-slate-300">
      <li><span class="font-semibold text-slate-900 dark:text-white">Domestic Lounge Access:</span> Unlimited via Visa/Mastercard (4 guest passes per calendar year)</li>
      <li><span class="font-semibold text-slate-900 dark:text-white">International Lounge:</span> Unlimited via Priority Pass (4 guest passes per calendar year)</li>
      <li><span class="font-semibold text-slate-900 dark:text-white">Airport Meet & Greet:</span> Complimentary access 4 times per calendar year</li>
      <li><span class="font-semibold text-slate-900 dark:text-white">Forex Markup Fee:</span> 2% + GST = 2.4% (net return: ~2.4%)</li>
      <li><span class="font-semibold text-slate-900 dark:text-white">Fuel Surcharge Waiver:</span> 1% waiver (₹400 to ₹4,000)</li>
    </ul>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Transfer Partners</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700/60 dark:to-slate-700/40">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">GROUP A</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">GROUP B</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Accor (Hotels)</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">ITC (Hotels)</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Marriott (Hotels)</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">IHG (Hotels)</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Wyndham (Hotels)</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Qantas Airways</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air Canada</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air India</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Qatar Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air France</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">United Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Spice Jet</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Singapore Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air Asia</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Turkish Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300"></td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Thai Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300"></td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Japan Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300"></td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Ethiopian Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300"></td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Etihad Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Who Should Get It?</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 rounded-xl border-l-4 border-amber-500 dark:border-amber-400/50 shadow-md dark:shadow-lg">
      <p class="mb-3 font-serif font-semibold text-slate-900 dark:text-white text-lg">Best For High-Value Spenders</p>
      <p class="mb-2 text-slate-700 dark:text-slate-300">Recommended as a primary card when annual spends are ₹40L or more. At ₹1.5L+ monthly spending, this card becomes exceptionally valuable with rewards exceeding 10%.</p>
      <p class="text-slate-700 dark:text-slate-300 italic text-sm">The card demands 30L NRV or 10L AMB eligibility to apply.</p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Bottom Line</h3>
    <div class="mb-4 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border-l-4 border-indigo-500 dark:border-indigo-400/50 shadow-md dark:shadow-lg">
      <p class="mb-3 text-slate-700 dark:text-slate-300">The Axis Magnus Burgundy is a wonderfully rewarding credit card for elite spenders. It's an absolute must-have for those spending over ₹1.5L monthly.</p>
      <p class="text-slate-700 dark:text-slate-300 text-sm">⚠️ <span class="font-semibold text-slate-900 dark:text-white">Key Consideration:</span> Be aware of the long list of exclusions including utilities, insurance, and gold purchases. The card caps Group A redemptions at 2L points per year.</p>
    </div>
  `,imageUrl:"/trezzoapp/images/credit-cards/m4b-mk.png",date:"Dec 1, 2025",readTime:"6 min",tags:["HNI","Premium","Rewards","Travel"]},Zx={id:"cc-hsbc-travelone",title:"HSBC TravelOne Credit Card Review (India)",excerpt:"A travel-focused card with uncapped transfers and decent travel rewards — best for frequent OTA/hotel bookers who use Accor and similar partners.",content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <h3 class="text-lg font-serif font-bold mb-4 text-slate-900 dark:text-white">Card Overview</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Type:</span> Travel credit card</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Reward Range:</span> ~2% to 7.2%</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Annual Fee:</span> ₹4,999 + GST</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Best for:</span> OTA / hotel bookings, Accor fans</div>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick take</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">HSBC TravelOne is designed for travellers who value flexible point transfers to hotels and airlines. It offers uncapped transfers to many partners and slightly better rates on OTA and forex-related spends, but the foreign-exchange markup and modest milestone structure limit net returns for some users.</p>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Fees & welcome offers</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700/60 dark:to-slate-700/40">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Item</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Joining / Renewal Fee</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">₹4,999 + GST</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Welcome benefit</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">3,000 points (subject to spend condition)</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Renewal waiver</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Waiver on very high annual spend (bank T&Cs)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Rewards</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">Base earn is modest on regular transactions but the card pays higher points for travel, airline and travel-aggregator spends (booking sites, OTA). Points transfer to multiple hotel and airline partners, with Accor highlighted as particularly valuable.</p>

    <div class="mb-6 p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border-l-4 border-blue-500 dark:border-cyan-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-2 text-slate-900 dark:text-white">Typical rates (illustrative)</p>
      <ul class="list-disc pl-6 text-slate-700 dark:text-slate-300">
        <li>Regular spends: ~2 points per ₹100 (≈2%)</li>
        <li>Travel / Airline / OTA / Forex: ~4 points per ₹100 (higher effective value when transferred)</li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Milestone & extras</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300">There is a single milestone benefit (example: 12L spend → 10,000 points) which mildly boosts the overall return. The bank also runs occasional introductory bundles with app-download/cashback perks — details vary by offer period.</p>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Hotel Transfer Partners</h3>
    
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700/60 dark:to-slate-700/40">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Hotel Group</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Programme Name</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Transfer Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Accor</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">ALL – Accor Live Limitless</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">IHG® Hotels & Resorts</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">IHG One Rewards</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Marriott International</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Marriott Bonvoy</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Shangri-La</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Shangri-La Circle</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">5:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Wyndham Hotels & Resorts</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Wyndham Rewards</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Airline Transfer Partners</h3>
    
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700/60 dark:to-slate-700/40">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Airline</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Programme Name</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Transfer Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air India</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air India Maharaja Club</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Jet Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">InterMiles</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air Asia</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">airasia rewards</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1 point = 3 miles</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air Canada</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Aeroplan</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Air France-KLM</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Flying Blue</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">British Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">British Airways Executive Club</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Etihad Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Etihad Guest</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">EVA Air</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Infinity MileageLands</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Hainan Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Hainan Airlines Fortune Wings Club</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Japan Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">JAL Mileage Bank</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Singapore Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Singapore Airlines KrisFlyer</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Qantas Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Qantas Frequent Flyer</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Qatar Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Qatar Airways Privilege Club</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Thai Airways</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Royal Orchid Plus</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Turkish Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Turkish Airlines Miles&Smiles</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">United Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">United MileagePlus</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Vietnam Airlines</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Vietnam Airlines Lotussmiles</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">1:1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Lounge access & travel perks</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-emerald-900/20 dark:via-green-900/15 dark:to-emerald-900/20 rounded-xl border-l-4 border-emerald-500 dark:border-emerald-400/50 shadow-md dark:shadow-lg">
      <ul class="list-disc pl-6 text-slate-700 dark:text-slate-300">
        <li>Domestic lounge access: several visits per year (network depends on card network)</li>
        <li>International lounge access: limited visits via LoungeKey</li>
        <li>Other offers: discounts on major OTAs, dining and duty-free shopping</li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Forex charges & net return</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300">Foreign currency markup is relatively high (~3.5% + GST, ≈4.13% total). That means that despite higher reward rates on forex spends, the net return can be slightly negative once markup is taken into account — an important point for travellers spending a lot overseas.</p>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Who should consider this card?</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 rounded-xl border-l-4 border-amber-500 dark:border-amber-400/50 shadow-md dark:shadow-lg">
      <p class="mb-3 font-serif font-semibold text-slate-900 dark:text-white text-lg">Best fit</p>
      <p class="text-slate-700 dark:text-slate-300">Frequent bookers on OTAs or hotel portals who value uncapped transfer flexibility (especially Accor) and can extract outsized value via partner redemptions. If you compare alternatives (eg Axis Atlas, Amex Platinum Travel), those cards may offer higher returns for some spend patterns.</p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Bottom line</h3>
    <div class="mb-4 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border-l-4 border-indigo-500 dark:border-indigo-400/50 shadow-md dark:shadow-lg">
      <p class="mb-3 text-slate-700 dark:text-slate-300">HSBC TravelOne is a solid travel-oriented card with wide transfer options and targeted bonuses for OTA/hotel spends. Its strengths are partner flexibility and targeted rewards; its weaknesses are a relatively high forex markup, a limited milestone structure, and a welcome benefit that requires minimum spend to materialise fully.</p>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Recommendation: Consider this card if you frequently book hotels or OTAs and can take advantage of transfers (Accor in particular). If your spends are concentrated in other categories, compare with Axis Atlas and Amex Platinum Travel before deciding.</p>
    </div>
  `,imageUrl:"/trezzoapp/images/credit-cards/travelone.png",date:"Dec 1, 2025",readTime:"5 min",tags:["Travel","HSBC","Rewards"]},Kx={id:"cc-entry-level-guide",title:"Entry Level Credit Cards Guide 2025",excerpt:"Complete guide to beginner-friendly credit cards: SBI Cashback, HDFC Swiggy, Federal Scapia, Axis Cashback, and Amex MRCC. Perfect for first-time users with 5%+ cashback.",content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <h3 class="text-lg font-serif font-bold mb-4 text-slate-900 dark:text-white">What Are Entry Level Cards?</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Target Audience:</span> First-time credit card users</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Suggested Income:</span> ₹5 Lakhs+</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Suggested Spend:</span> ₹1 Lakh+ annually</div>
        <div class="text-slate-700 dark:text-slate-200"><span class="font-semibold text-slate-900 dark:text-white">Key Focus:</span> Cashback & rewards</div>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">1. SBI Cashback Credit Card</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border-l-4 border-blue-500 dark:border-cyan-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-3 text-slate-900 dark:text-white text-lg">Best for: 5% Cashback on Online Spends</p>
      <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        The SBI Cashback Credit Card is one of the simplest yet most generously rewarding cashback cards for beginners. It offers a lucrative 5% cashback on all online spends (up to ₹1L spend per month), making it an excellent starting point even after recent devaluations.
      </p>
      <p class="text-slate-700 dark:text-slate-300 text-sm">
        <span class="font-semibold text-slate-900 dark:text-white">Why beginners love it:</span> Straightforward rewards structure, no spending caps in most categories, and easy redemption against statement balance.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">2. Federal Bank Scapia Credit Card</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-50 dark:from-emerald-900/20 dark:via-green-900/15 dark:to-emerald-900/20 rounded-xl border-l-4 border-emerald-500 dark:border-emerald-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-3 text-slate-900 dark:text-white text-lg">Best for: Domestic Lounge Access & Lifetime Free Status</p>
      <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        While the Scapia card offers a modest 2% reward rate on regular spends, its true strength lies in complimentary domestic airport lounge access and shopping benefits—a rare feature in a lifetime-free card. Ideal if you travel domestically frequently.
      </p>
      <p class="text-slate-700 dark:text-slate-300 text-sm">
        <span class="font-semibold text-slate-900 dark:text-white">Key advantage:</span> Zero annual fee for life, making it a smart add-on to your primary cashback card.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">3. HDFC Swiggy Credit Card</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 rounded-xl border-l-4 border-amber-500 dark:border-amber-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-3 text-slate-900 dark:text-white text-lg">Best for: 10% Cashback on Swiggy Food & Grocery</p>
      <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        If you have significant spends on Swiggy, this card delivers exceptional value. You'll earn 10% cashback on all Swiggy spends (food delivery and Instamart) plus 5% cashback on a wide range of online shopping portals—covering most everyday needs in one card.
      </p>
      <p class="text-slate-700 dark:text-slate-300 text-sm">
        <span class="font-semibold text-slate-900 dark:text-white">Best paired with:</span> SBI Cashback for other online categories not covered by Swiggy.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">4. Axis Bank Cashback Card</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border-l-4 border-indigo-500 dark:border-indigo-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-3 text-slate-900 dark:text-white text-lg">Best for: Up to 5.6% Cashback on Online Spends</p>
      <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        While SBI Cashback and HDFC Swiggy are superior cashback cards with fewer restrictions, the Axis Cashback card serves as an excellent secondary option when your spends grow. It allows you to stack it with other cashback cards to maximize total returns across multiple spending avenues.
      </p>
      <p class="text-slate-700 dark:text-slate-300 text-sm">
        <span class="font-semibold text-slate-900 dark:text-white">Pro tip:</span> Use this as your second card once you've optimized your primary card rewards.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">5. American Express Membership Rewards Card (MRCC)</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-900/20 dark:via-pink-900/15 dark:to-red-900/20 rounded-xl border-l-4 border-rose-500 dark:border-rose-400/50 shadow-md dark:shadow-lg">
      <p class="font-serif font-semibold mb-3 text-slate-900 dark:text-white text-lg">Best for: Gold Collection & Points Transfers</p>
      <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
        The Amex MRCC is the perfect gateway into the American Express ecosystem. You earn 2,000 MR (Membership Rewards) bonus points monthly when you spend ₹20,000, translating to a sweet annual return of 6% on spends—one of the highest for entry-level cards.
      </p>
      <p class="text-slate-700 dark:text-slate-300 text-sm mb-3">
        <span class="font-semibold text-slate-900 dark:text-white">Transfer flexibility:</span> Points can be transferred to airline and hotel partners at favorable ratios, adding significant redemption value.
      </p>
      <p class="text-slate-700 dark:text-slate-300 text-sm italic">
        <strong>Note:</strong> Amex is expected to resume onboarding new cards on or before October 2025.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Entry Level Cards: Quick Comparison</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full border-collapse text-sm">
        <thead>
          <tr class="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700/60 dark:to-slate-700/40">
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Card</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Best Feature</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Top Reward Rate</th>
            <th class="border border-slate-300 dark:border-slate-600/50 p-3 text-left font-serif font-semibold text-slate-900 dark:text-slate-100">Annual Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">SBI Cashback</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">5% cashback online</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">5%</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Varies</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Federal Scapia</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Domestic lounge access</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">2%</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Lifetime Free</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">HDFC Swiggy</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">10% Swiggy cashback</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">10%</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">₹500</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Axis Cashback</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Stackable rewards</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">5.6%</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">₹400</td>
          </tr>
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Amex MRCC</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Points transfers & travel</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">6% (with bonus)</td>
            <td class="border border-slate-200 dark:border-slate-700/50 p-3 text-slate-700 dark:text-slate-300">Varies</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Recommended Combinations for Beginners</h3>
    <div class="mb-6 space-y-4">
      <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p className="font-serif font-semibold text-slate-900 dark:text-white mb-2">Strategy 1: Primary Cashback + Lounge Access</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">Combine SBI Cashback (5% online) with Federal Scapia (domestic lounge + lifetime free) to cover your everyday spends and travel benefits with minimal annual cost.</p>
      </div>

      <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p className="font-serif font-semibold text-slate-900 dark:text-white mb-2">Strategy 2: Category-Specific Optimization</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">Use HDFC Swiggy for food/grocery (10%) and SBI Cashback for other online shopping (5%), allowing you to maximize cashback across your most common spending categories.</p>
      </div>

      <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p className="font-serif font-semibold text-slate-900 dark:text-white mb-2">Strategy 3: Points-Based Approach (Travel Focused)</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">Go with Amex MRCC if you aspire to build transferable points for premium travel redemptions. The 6% effective return with monthly bonuses is competitive, and points can be transferred to premium partners.</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways for Entry-Level Cardholders</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-xl border-l-4 border-yellow-500 dark:border-yellow-400/50 shadow-md dark:shadow-lg">
      <ul class="list-disc pl-6 space-y-2 text-slate-700 dark:text-slate-300">
        <li><span class="font-semibold text-slate-900 dark:text-white">Start simple:</span> Begin with one primary card (SBI Cashback or HDFC Swiggy) and add complementary cards based on your spending patterns.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Stack wisely:</span> Entry-level cards can be combined to cover different categories without overlapping, maximizing total rewards.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Zero or low fees:</span> Prioritize cards with no annual fees or those that pay for themselves through welcome bonuses and year-round benefits (like Scapia's lounge access).</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Avoid overspending:</span> The goal is to use rewards to offset spending, not to spend more for rewards.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Pay on time:</span> Maintain a clean payment history and never carry a balance; interest charges will negate any rewards earned.</li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Bottom Line</h3>
    <div class="mb-4 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border-l-4 border-indigo-500 dark:border-indigo-400/50 shadow-md dark:shadow-lg">
      <p class="mb-3 text-slate-700 dark:text-slate-300">2025 is truly the golden age of entry-level credit cards in India. For the first time, beginners can enjoy 5%+ cashback through multiple card combinations, and lifetime-free cards with premium benefits (like lounge access) are readily available.</p>
      <p class="text-slate-700 dark:text-slate-300">Start with SBI Cashback or HDFC Swiggy as your primary card, add Federal Scapia for lounge benefits, and expand from there based on your needs. Within a year, you'll have a well-optimized portfolio that maximizes rewards across all spending categories.</p>
      <p class="text-slate-700 dark:text-slate-300 text-sm italic mt-3">Remember: The best card is the one you'll use regularly and pay off fully each month.</p>
    </div>
  `,imageUrl:"https://picsum.photos/800/400?random=31",date:"Dec 11, 2025",readTime:"7 min",tags:["Beginner","Cashback","Rewards"]},Ix={id:"cc-master-guide-2025",title:"25+ Best Credit Cards in India 2025: Complete Buyer's Guide",excerpt:"The ultimate guide to 25+ best credit cards covering entry-level cashback cards, premium travel cards, super premium cards, and HNI cards. Find your perfect card today.",content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <h3 class="text-lg font-serif font-bold mb-4 text-slate-900 dark:text-white">2025: The Golden Age of Credit Cards</h3>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        India has never seen such wonderfully rewarding cards available to the public across all spending categories. Whether you're a first-time cardholder or a seasoned traveler, 2025 offers unprecedented cashback rates, lounge access, and travel benefits.
      </p>
      <p class="text-slate-700 dark:text-slate-200">
        This comprehensive guide covers 25+ credit cards analyzed across 250+ options in the Indian market, organized by your spending level and lifestyle needs.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Entry Level Credit Cards (Beginners)</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-900 dark:text-white">Suggested income: ₹5L+ | Suggested spend: ₹1L+ annually</span>
    </p>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Entry-level cards are targeted at first-time credit card users, offering simple, rewarding structures with minimal annual fees.
    </p>

      <div class="space-y-6">
      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=SBI" alt="SBI Cashback" class="inline-block h-8 w-auto mr-3 rounded-sm"/>SBI Cashback Card</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 5% Cashback on Online Spends</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">One of the simplest yet most generously rewarding cashback cards for beginners. Offers 5% cashback on all online spends (up to ₹1L per month), lucrative even after recent devaluations.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Straightforward rewards • ✓ No spending caps • ✓ Easy redemption</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Federal" alt="Federal Scapia" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Federal Bank Scapia</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Domestic Lounge Access & Lifetime Free</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">While rewards are modest at 2%, this card shines with complimentary domestic airport lounge access and shopping benefits. Truly lifetime free with zero annual charges.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Lifetime free • ✓ Domestic lounge access • ✓ Great add-on card</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=HDFC" alt="HDFC Swiggy" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HDFC Swiggy Card</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 10% Cashback on Swiggy Food & Grocery</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">If you have significant spends on Swiggy, enjoy 10% cashback on all food delivery and Instamart purchases, plus 5% on a wide range of online shopping portals.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ 10% Swiggy cashback • ✓ 5% online shopping • ✓ Covers daily needs</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Axis" alt="Axis Cashback" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Axis Cashback Card</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Up to 5.6% Cashback on Online Spends</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">While SBI and HDFC Swiggy offer stronger primary benefits, Axis Cashback excels as a secondary card when spends grow, allowing you to stack rewards across multiple categories.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Stackable rewards • ✓ Secondary card option • ✓ Higher limits</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Amex" alt="Amex MRCC" class="inline-block h-8 w-auto mr-3 rounded-sm"/>American Express MRCC</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 6% Effective Returns with Points Transfers</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">The perfect gateway into American Express. Earn 2,000 MR bonus points monthly on ₹20,000 spends = 6% annual return. Transfer points to premium airline and hotel partners for enhanced value.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ High earning rate • ✓ Flexible transfers • ✓ Premium partnership access</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Premium Credit Cards</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-900 dark:text-white">Suggested income: ₹12L+ | Suggested spend: ₹6L+ annually</span>
    </p>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Premium cards offer lifestyle benefits including lounge access, points transfers, and specialized features for specific spending categories.
    </p>

      <div class="space-y-6">
      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Regalia" alt="HDFC Regalia" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HDFC Regalia Gold</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Airport Lounge Access & Points Transfers</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">Beyond solid rewards and 2:1 points transfers (including Accor), the Regalia Gold allows add-on cards with Priority Pass that share domestic and international lounge benefits with the primary card.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Family lounge access • ✓ Accor transfers • ✓ Premium benefits</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=IDFC" alt="IDFC Mayura" class="inline-block h-8 w-auto mr-3 rounded-sm"/>IDFC Mayura</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 0% Forex Markup & International Travel</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">A hidden gem for frequent international travelers. The combination of 0% forex markup fee plus solid rewards creates returns competitive with super premium cards, making it exceptional for overseas spends.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Zero forex markup • ✓ Travel-focused • ✓ International benefits</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Tata+Neu" alt="Tata Neu Infinity" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HDFC Tata Neu Infinity</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: UPI Spends & Utility Bill Rewards</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">If you need a single UPI credit card, this Rupay card delivers. Beyond solid UPI rewards, it offers lucrative 5% returns on utility bill payments and gift card purchases—rare benefits in this category.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ UPI rewards • ✓ 5% utilities • ✓ Bill payment benefits</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Travel Credit Cards</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Designed to earn travel vouchers, points, and miles instead of cashback. Perfect for frequent travelers who maximize hotel and airline redemptions.
    </p>

      <div class="space-y-6">
      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Axis+Atlas" alt="Axis Atlas" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Axis Atlas</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Accor, ITC & Airline Partner Transfers</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">Amazing reward rate on regular spends with even higher earnings on direct hotels and airlines. A hot pick for 2024-2025 that remains strong even after recent devaluations. <span class="text-sm italic">Note: Issuance restricted as of September 2025.</span></p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ High base rewards • ✓ Hotel/airline bonus • ✓ Strong partnerships</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=HSBC" alt="HSBC TravelOne" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HSBC TravelOne</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Accor & Airline Partner Transfers</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">A newer addition with accelerated rewards program that stands out. Particularly useful for those without HSBC Premier, offering uncapped point transfers to a wide array of hotel and airline partners.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ New accelerated rewards • ✓ Uncapped transfers • ✓ Accor specialization</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Amex+Plt" alt="Amex Platinum Travel" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Amex Platinum Travel Card</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Taj Vouchers & Marriott Redemptions</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">The best travel credit card in India, hands down. Retains its prestige for nearly a decade. Complimentary Taj vouchers enable one unique Taj property stay annually, with strong Marriott redemption options.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Taj vouchers • ✓ Premium redemption • ✓ Legendary status</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Marriott" alt="HDFC Marriott Bonvoy" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HDFC Marriott Bonvoy</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Welcome & Renewal Benefits</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">While ongoing reward rates are modest, the incredible welcome and renewal benefits can easily fetch 2-3x the joining fee value. Provides excellent domestic and international lounge access for add-ons too.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Exceptional welcome bonus • ✓ Lounge family access • ✓ Renewal benefits</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=RBL" alt="RBL World Safari" class="inline-block h-8 w-auto mr-3 rounded-sm"/>RBL World Safari</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 1-Year Travel Insurance & 0% Forex Markup</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">A hidden gem for frequent international travelers. Offers complete 1-year worldwide travel insurance plus 0% markup fee on international spends—a rare and valuable combination.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Travel insurance included • ✓ Zero forex • ✓ Hidden value</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Super Premium Credit Cards</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-900 dark:text-white">Suggested income: ₹25L+ | Suggested spend: ₹10L+ annually</span>
    </p>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Cards offering higher reward rates (3%+), unlimited lounge access, superior card-linked benefits, and the lifestyle perks needed for true luxury living.
    </p>

      <div class="space-y-6">
      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Diners" alt="Diners BizBlack" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HDFC Diners BizBlack</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Business Spends & 5X Tax/GST Rewards</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">Ideal for business owners. Earns lucrative rewards not only on income tax but also on bill payments. Note: Diners card acceptance is lower in India compared to Visa/Mastercard, so keep a backup handy.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Business-focused • ✓ Tax rewards • ✓ Bill payment benefits</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Yes+Marquee" alt="Yes Bank Marquee" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Yes Bank Marquee</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 4.5% Return on Online Spends</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">Yes Bank's recently launched super premium card excels for online-heavy spenders. Delivers amazing rewards (redeemable for travel) on online categories, making it a strong choice for digital shoppers.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Online rewards • ✓ Travel redemption • ✓ New generation benefits</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=SC+Ultimate" alt="Standard Chartered Ultimate" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Standard Chartered Ultimate</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Rewards on ANY Spend (3.3% Rate)</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">Like HDFC Infinia and Diners Black, offers 3.3% reward rate with the unique advantage of earning points on virtually ANY spend, even excluded categories have reduced rewards. Redemption options include ITC, Titan, Starbucks, Fabindia and more.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Universal earning • ✓ 3.3% rate • ✓ Shopping vouchers</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">HNI Cards (High Net-Worth Individuals)</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-900 dark:text-white">Suggested spend range: ₹30L+ annually</span>
    </p>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Elite cards requiring high banking relationships or significant lifestyle-based eligibility. Offer premium features, concierge services, and the highest reward rates available.
    </p>

      <div class="space-y-6">
      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Magnus" alt="Axis Magnus Burgundy" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Axis Magnus Burgundy</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 10%+ Return on High Monthly Spends</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">If monthly spends exceed ₹3L, this is perhaps the ONLY card you'll ever need. Delivers everything imaginable with accelerated rewards reaching 10%+ when optimized. Axis Olympus is an alternate for existing cardholders.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ 10%+ returns • ✓ All-in-one card • ✓ Premium access</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=HSBC+Premier" alt="HSBC Premier" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HSBC Premier</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Rewards on All Kinds of Spends</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">With recent feature upgrades and the launch of accelerated rewards, HSBC Premier is wonderfully rewarding for 2025. Perfect for those who prefer rewards across all spending categories without specific restrictions.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Universal earning • ✓ Accelerated rewards • ✓ Premium features</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Infinia" alt="HDFC Infinia" class="inline-block h-8 w-auto mr-3 rounded-sm"/>HDFC Infinia</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Everyone's Dream Card with 5X Rewards</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">Infinia is the dream card for ages without exception. Looking for a single premium card with great support and rewards? Infinia is the answer. If unavailable, Diners Black Metal offers similar ongoing reward rates.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Dream card status • ✓ 5X rewards • ✓ Legendary support</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=ICICI" alt="ICICI Emeralde" class="inline-block h-8 w-auto mr-3 rounded-sm"/>ICICI Emeralde Private</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: 3% Base Rewards & Welcome Benefits</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">The first ICICI card to offer a solid 3% reward rate on regular spends. Excellent welcome benefits and recent iShop launch add significant value. A compelling option for ICICI loyalists.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ 3% base rate • ✓ iShop integration • ✓ Welcome bonus</p>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <h4 class="font-serif font-bold text-lg text-slate-900 dark:text-white mb-2"><img src="https://via.placeholder.com/64x40?text=Amex+Charge" alt="Amex Platinum Charge" class="inline-block h-8 w-auto mr-3 rounded-sm"/>Amex Platinum Charge Card</h4>
        <p class="font-semibold text-gold-600 dark:text-gold-400 text-sm mb-3">Best for: Hotel Tier Benefits & Marriott Redemptions</p>
        <p class="text-slate-700 dark:text-slate-300 mb-2">Though it's degraded over time, it still holds value, especially in year one. Signup bonuses often exceed the card cost, and hotel tier benefits remain attractive for frequent luxury travelers.</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">✓ Signup value • ✓ Hotel tiers • ✓ Premium positioning</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">How to Choose Your Perfect Card</h3>
    <div class="space-y-4 mb-6">
      <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 rounded-lg">
        <p className="font-serif font-semibold text-slate-900 dark:text-white mb-2">#1 Beginner with Low Annual Spend (<₹5L)</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          Get <span className="font-semibold">SBI Cashback or HDFC Swiggy</span> for primary rewards + <span className="font-semibold">Scapia</span> for lounge access. This combination covers best-in-class cashback (5-10%) plus domestic travel benefits at minimal cost.
        </p>
      </div>

      <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 rounded-lg">
        <p className="font-serif font-semibold text-slate-900 dark:text-white mb-2">#2 Mid-Tier Spender (₹5-15L Annually)</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          Add <span className="font-semibold">HDFC Regalia Gold or IDFC Mayura</span> for lifestyle benefits and better rewards. If you travel frequently, consider <span className="font-semibold">Amex Platinum Travel</span> for Taj vouchers and premium redemptions.
        </p>
      </div>

      <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 rounded-lg">
        <p className="font-serif font-semibold text-slate-900 dark:text-white mb-2">#3 Premium Spender (₹10L+ Annually)</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          <span className="font-semibold">HDFC Infinia</span> covers your entire family for lounge access, domestic and international, plus solid rewards. This single card often handles all needs for this spending level.
        </p>
      </div>

      <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 rounded-lg">
        <p className="font-serif font-semibold text-slate-900 dark:text-white mb-2">#4 HNI Spender (₹30L+ Annually)</p>
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          Explore <span className="font-semibold">Axis Magnus Burgundy or HSBC Premier</span> based on your profile. Higher spends require personalized strategy; consider 1-on-1 credit card consultation for optimization.
        </p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
    <div class="space-y-4 mb-6">
      <div class="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Q: What's the best credit card in India 2025?</p>
        <p class="text-slate-700 dark:text-slate-300 text-sm">Calculate your annual spend and choose from the list above. The best card varies from person to person based on lifestyle and spending patterns.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Q: How many credit cards should I have?</p>
        <p class="text-slate-700 dark:text-slate-300 text-sm">Start with 2 cards if new, then add gradually based on spend categories. 5 cards is typically sufficient for most cardholders, covering all major spending categories.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Q: Which bank has the best customer service?</p>
        <p class="text-slate-700 dark:text-slate-300 text-sm">Amex is legendary for premium customer support. You'll enjoy similar premium treatment with any bank if you hold their super-premium cards (Infinia, Diners, etc.).</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Q: Which bank dominates in India?</p>
        <p class="text-slate-700 dark:text-slate-300 text-sm">HDFC Bank is the market leader with excellent merchant offers. Start with HDFC for your first card and add others as your spends grow and diversify.</p>
      </div>

      <div class="p-4 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Q: What about fuel credit cards?</p>
        <p class="text-slate-700 dark:text-slate-300 text-sm">This is complex and deserves a dedicated article. Modern methods exist to save 10%+ on fuel spends through strategic card stacking and partner programs.</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Insights for 2025</h3>
    <div class="mb-6 p-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-xl border-l-4 border-yellow-500 dark:border-yellow-400/50 shadow-md dark:shadow-lg">
      <ul class="list-disc pl-6 space-y-3 text-slate-700 dark:text-slate-300">
        <li><span class="font-semibold text-slate-900 dark:text-white">Golden Age for Beginners:</span> First time ever that 5%+ cashback through multiple cards is standard, opening incredible value for entry-level cardholders.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Stack for Maximum Value:</span> Strategic combination of complementary cards often beats a single premium card. Example: SBI (5%) + Swiggy (10%) + Scapia (lounge) covers most needs.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Spend Intentionally:</span> The goal is to use rewards to offset spending, never to spend more just for rewards.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Always Pay Full:</span> Carrying balances negates all rewards. Interest charges multiply far beyond any points earned.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Monitor Devaluations:</span> Card benefits evolve. Regularly review your card strategy and adjust as banks make changes.</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Lounge Access Now:</span> Even mid-tier cards now include lounge access. Prioritize cards that provide this benefit for both you and family members.</li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Bottom Line</h3>
    <div class="mb-4 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border-l-4 border-indigo-500 dark:border-indigo-400/50 shadow-md dark:shadow-lg">
      <p class="mb-3 text-slate-700 dark:text-slate-300">
        <span class="font-semibold text-slate-900 dark:text-white">2025 represents the golden age of credit cards in India.</span> Never before has such a diverse range of wonderfully rewarding cards been available across all spending categories—from ₹1L annual spends to ₹30L+.
      </p>
      <p class="mb-3 text-slate-700 dark:text-slate-300">
        Whether you're a first-time cardholder optimizing 5% cashback across multiple categories or a high-net-worth individual seeking 10%+ returns, this guide provides everything needed to build your perfect card portfolio.
      </p>
      <p class="text-slate-700 dark:text-slate-300">
        Start with the cards matching your current spend level, build good habits (always pay full, track benefits), and expand strategically as your financial life evolves. Your future self will thank you for the travel upgrades, hotel stays, and rewards value you'll unlock.
      </p>
    </div>
  `,imageUrl:"https://picsum.photos/800/400?random=99",date:"Dec 11, 2025",readTime:"15 min",tags:["Master Guide","All Cards","Comprehensive"]},Jx={id:"cc-hdfc-infinia-complete",title:"HDFC Bank Infinia Credit Card: Complete Review & Guide",excerpt:"The legendary dream card for credit card enthusiasts. Complete guide to Infinia's rewards, lounge access, benefits, eligibility, and how it compares to competitors.",content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <h3 class="text-lg font-serif font-bold mb-4 text-slate-900 dark:text-white">The Legendary Dream Card</h3>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        HDFC Bank's Infinia Credit Card is an evergreen super-premium credit card that has stood the test of time for nearly a decade. It's the one credit card that remains relevant even as competitors launch flashy new variants.
      </p>
      <p class="text-slate-700 dark:text-slate-200">
        Available in both plastic and metal editions, Infinia combines solid rewards, unlimited lounge access for the entire family, low forex charges, and golf benefits—all making it a must-have for eligible wealthy Indians.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Overview</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-b-2 border-purple-300 dark:border-purple-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Feature</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Card Type</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Super Premium Credit Card (Plastic & Metal)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Annual Fee</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹12,500 + GST (waived on ₹10L annual spend)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Welcome Benefit</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">12,500 Points (₹12,500 value)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Renewal Benefit</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">12,500 Points (₹12,500 value)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Reward Rate</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3.3% – 33% (base to accelerated)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Points Validity</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3 Years</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Lounge Access</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Unlimited domestic & international (family)</td>
          </tr>
          <tr class="hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Best For</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Frequent travelers, hotel/flight bookings, premium spends</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Benefits Breakdown</h3>
    
    <h4 class="text-xl font-serif font-bold mb-3 mt-6 text-slate-900 dark:text-white">Annual & Joining Fees</h4>
    <div class="space-y-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Plastic Edition</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <li><span class="font-semibold">Annual Fee:</span> ₹12,500 + GST</li>
          <li><span class="font-semibold">Welcome Benefit:</span> 12,500 reward points</li>
          <li><span class="font-semibold">Renewal Benefit:</span> 12,500 reward points</li>
          <li><span class="font-semibold">Fee Waiver:</span> ₹10L annual spend</li>
        </ul>
      </div>

      <div class="p-5 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-900/20 dark:via-gray-900/15 dark:to-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Metal Edition</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <li><span class="font-semibold">Additional Fee:</span> ₹2,500 more than plastic</li>
          <li><span class="font-semibold">Same Benefits:</span> All features identical to plastic</li>
          <li><span class="font-semibold">Premium Feel:</span> Metal form factor & prestige</li>
          <li><span class="font-semibold">Upgrade Path:</span> Request through RM for upgrade</li>
        </ul>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Points System</h3>
    
    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Earning Rewards</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/40 dark:to-green-900/40 border-b-2 border-emerald-300 dark:border-emerald-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Transaction Type</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Multiplier</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Rate</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Monthly Cap</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Regular Spends</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1X</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3.3% (5 RP per ₹150)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">2L RP/statement cycle</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Hotels (SmartBuy)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">10X</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">33% (50 RP per ₹150)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">15,000 RP (Max ₹50K spend)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Flights (SmartBuy)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">5X</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">16.5% (25 RP per ₹150)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">15,000 RP (Max ₹1.14L spend)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">SmartBuy Accelerated Categories</p>
      <p class="text-sm text-slate-700 dark:text-slate-300 mb-3">Beyond hotels and flights, you can earn 3X/5X/10X rewards on various other categories including:</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
        <li>Apple Products, e-Vouchers, Instant Vouchers</li>
        <li>Insurance, Tanishq, Gyftr, Amazon Pay, Flipkart</li>
        <li>Travel bookings and more categories</li>
      </ul>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-3 italic">Note: Capping on SmartBuy is on 4X/9X bonus points (excluding base 1X)</p>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Important Restrictions</h4>
    <div class="space-y-3 mb-6">
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg">
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-white">Excluded Categories:</span> EMI, Tax, Fuel, Rent, Wallet transactions don't earn points
        </p>
      </div>
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg">
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-white">Grocery Cap:</span> Maximum 2,000 RP per calendar month
        </p>
      </div>
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg">
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-white">Insurance Cap:</span> Maximum 5,000 RP per day
        </p>
      </div>
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg">
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-white">Rent Payments:</span> 1% processing fee applies
        </p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Redeeming Your Reward Points</h3>
    
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border-b-2 border-indigo-300 dark:border-indigo-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Redemption Option</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Conversion Rate</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Max Redemption</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Flights/Hotels</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1:1</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1,50,000 RP (Shared)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Apple Products</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1:1</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1,50,000 RP (Shared)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Tanishq Vouchers</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1:1</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">50,000 RP (part of 1.5L)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Airmiles</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1:1 / 2:1</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1,50,000 RP (Shared)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Shopping Vouchers</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1:0.5</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Varies</td>
          </tr>
          <tr class="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Cashback</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1:0.3</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Unlimited</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-3">Redemption Rule: 70/30 Split</p>
      <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
        When redeeming for flights, hotels, or travel, you pay 70% using reward points and 30% using your card. Here's the bonus:
      </p>
      <p class="text-sm text-slate-700 dark:text-slate-300 font-semibold">
        You earn 5X-10X points on the 30% paid through card!
      </p>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-2 italic">
        Best redemption options are typically flights and hotels, which provide excellent value at 1:1 conversion ratio.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">International Travel Benefits</h3>
    
    <h4 class="text-lg font-serif font-bold mb-3 text-slate-900 dark:text-white">Forex Markup Fee</h4>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400/50 mb-6">
      <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li><span class="font-semibold text-slate-900 dark:text-white">Forex Markup:</span> 2% + GST = 2.36%</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Base Rewards:</span> 3.3% + 1% (Global Value Program)</li>
        <li><span class="font-semibold text-slate-900 dark:text-white">Net Gain:</span> ~2% profit on international spends</li>
      </ul>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-3 italic">
        The Global Value Program costs ₹199 + tax with renewal, providing 1% additional cashback (capped at ₹1,000/month)
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Lounge Access & Travel Benefits</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-3">Airport Lounge Access</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
          <li>✓ <span class="font-semibold">Domestic Lounges:</span> Unlimited via Visa/Mastercard</li>
          <li>✓ <span class="font-semibold">International Lounges:</span> Unlimited via Priority Pass</li>
          <li>✓ <span class="font-semibold">Family Access:</span> Extends to all add-on cardholders</li>
          <li>✓ <span class="font-semibold">Priority Pass Benefit:</span> One of few cards offering domestic lounge access via PP</li>
        </ul>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-3">Golf Benefits</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
          <li>✓ <span class="font-semibold">Complimentary Games:</span> Unlimited lessons & play</li>
          <li>✓ <span class="font-semibold">Coverage:</span> 20 domestic + 140 international courses</li>
          <li>✓ <span class="font-semibold">Booking:</span> 4-14 days advance period</li>
          <li>✓ <span class="font-semibold">Hold:</span> Only 1 booking at a time</li>
        </ul>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Lifestyle & Dining Benefits</h3>
    
    <div class="space-y-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-50 dark:from-rose-900/20 dark:via-pink-900/15 dark:to-rose-900/20 rounded-lg border-l-4 border-rose-500 dark:border-rose-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">ITC Hotels Benefits</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <li>✓ Stay 3-nights, pay for 2 at participating ITC hotels</li>
          <li>✓ Complimentary 1+1 buffet at participating ITC restaurants</li>
        </ul>
      </div>

      <div class="p-5 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 dark:from-cyan-900/20 dark:via-blue-900/15 dark:to-cyan-900/20 rounded-lg border-l-4 border-cyan-500 dark:border-cyan-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Marriott & Club Membership</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <li>✓ Complimentary Club Marriott membership (first year)</li>
          <li>✓ Up to 20% discounts on dining and stays (Asia-Pacific region)</li>
        </ul>
      </div>

      <div class="p-5 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-orange-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">Fuel Surcharge Waiver</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <li>✓ Waived on fuel transactions between ₹400 and ₹1,00,000</li>
        </ul>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Plastic vs Metal Edition</h3>
    
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-gray-100 to-slate-100 dark:from-gray-900/40 dark:to-slate-900/40 border-b-2 border-gray-300 dark:border-gray-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Aspect</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Plastic (Old Design)</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Plastic (New Design)</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Metal Edition</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Design</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Golden embossed (beautiful)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Dark & dull (subjective)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Metallic prestige</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Cost</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Base (₹12,500)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Base (₹12,500)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">+₹2,500 additional</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">All Features</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">✓ Identical</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">✓ Identical</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">✓ Identical</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-gray-50 dark:hover:bg-gray-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">How to Get Metal</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Not available</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Not available</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Request RM for upgrade</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Eligibility Requirements</h3>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-3">Fresh Card Application</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
          <li>✓ <span class="font-semibold">ITR:</span> ₹45L+ per annum</li>
          <li>✓ <span class="font-semibold">OR Banking Relationship:</span> Imperia/Infiniti with equivalent ITR</li>
          <li>✓ <span class="font-semibold">Alternative Routes:</span> FD lien, investment products (varies)</li>
        </ul>
      </div>

      <div class="p-5 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-lg">
        <p class="font-semibold text-slate-900 dark:text-white mb-3">Upgrade from Existing Card</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
          <li>✓ <span class="font-semibold">Credit Limit:</span> ₹8L+</li>
          <li>✓ <span class="font-semibold">Recent Spend:</span> ₹7.5L+ in last 6 months</li>
          <li>✓ <span class="font-semibold">Best Path:</span> From Regalia/Diners Black cards</li>
        </ul>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">How to Apply</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        <span class="font-semibold">Online:</span> Eligible applicants can apply directly online via HDFC website using ITR route.
      </p>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
        <span class="font-semibold">Through RM:</span> Most approvals happen through relationship manager (RM) at branch with proper documentation.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Is Infinia Good in 2024-2025?</h3>
    
    <div class="space-y-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-l-4 border-green-500 dark:border-green-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">✓ Why Infinia Still Wins</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
          <li><span class="font-semibold">Reliability:</span> Doesn't devalue like Axis Magnus or Yes Marquee</li>
          <li><span class="font-semibold">Consistency:</span> Flagship status maintained for 10+ years</li>
          <li><span class="font-semibold">SmartBuy 10X:</span> Industry-leading hotel/flight rewards</li>
          <li><span class="font-semibold">Lounge Access:</span> Unlimited family access (unmatched value)</li>
          <li><span class="font-semibold">All-in-One:</span> Single card covers most high spender needs</li>
        </ul>
      </div>

      <div class="p-5 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠ Recent Concerns (2024-2025)</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
          <li><span class="font-semibold">Airmiles Devalued:</span> No more 1:1 transfers to premium partners</li>
          <li><span class="font-semibold">Processing Fees:</span> 2.5-3% GST on voucher purchases via Gyftr</li>
          <li><span class="font-semibold">Category Caps:</span> Monthly limits on SmartBuy categories reduced value</li>
          <li><span class="font-semibold">Point Limitations:</span> Grocery & insurance spending have caps</li>
          <li><span class="font-semibold">Eligibility Tightened:</span> Recent requirements increased (₹60L ITR minimum)</li>
        </ul>
      </div>

      <div class="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-2">🎯 Bottom Line Verdict</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold">For Simple Redemptions:</span> YES. Infinia remains superior if you're happy redeeming flight/hotel 1:1 conversions.
        </p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
          <span class="font-semibold">For Airmiles Hunters:</span> NO. The partnership degradation and capping makes it less attractive than previously.
        </p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
          The competition (Axis Magnus, Yes Marquee) offers higher returns on specific spends, but lack the consistency and stability that Infinia provides.
        </p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Infinia vs Competitors</h3>
    
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border-b-2 border-indigo-300 dark:border-indigo-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Card</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Base Rate</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Key Advantage</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Infinia</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3.3%</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Stability, 10X SmartBuy, lounge access</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Recent caps & processing fees</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Axis Magnus</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">5-10%+</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Highest returns on high spends</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Known for frequent devaluations</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Yes Marquee</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">4.5%+</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Strong online rewards</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Untested, newer card</td>
          </tr>
          <tr class="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Diners Black</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3.3%</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Similar features, lower fee eligibility</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Lower merchant acceptance</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">CardExpert Review Rating</h3>
    
    <div class="mb-6 p-6 bg-gradient-to-br from-gold-50 via-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:via-amber-900/15 dark:to-yellow-900/20 rounded-xl border-l-4 border-yellow-500 dark:border-yellow-400/50 shadow-md dark:shadow-lg">
      <div class="flex items-center justify-between mb-4">
        <p class="text-lg font-serif font-bold text-slate-900 dark:text-white">CardExpert Rating</p>
        <p class="text-4xl font-serif font-bold text-yellow-600 dark:text-yellow-400">4.8/5</p>
      </div>
      <p class="text-slate-700 dark:text-slate-300 mb-4">
        "The HDFC Bank Infinia Credit Card is undoubtedly one of the best credit cards available in India for wealthy Indians."
      </p>
      <p class="text-sm text-slate-600 dark:text-slate-400 italic">
        From unlimited lounge access to attractive rewards and golf benefits, it's a must-have credit card as long as you're eligible for it.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways & Recommendations</h3>
    
    <div class="mb-6 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border-l-4 border-indigo-500 dark:border-indigo-400/50 shadow-md dark:shadow-lg">
      <ul class="space-y-3 text-slate-700 dark:text-slate-300">
        <li class="flex items-start">
          <span class="font-bold text-indigo-600 dark:text-indigo-400 mr-3">→</span>
          <span><span class="font-semibold">Unmatched Stability:</span> In a market of constant devaluations, Infinia remains the most reliable super-premium card.</span>
        </li>
        <li class="flex items-start">
          <span class="font-bold text-indigo-600 dark:text-indigo-400 mr-3">→</span>
          <span><span class="font-semibold">SmartBuy 10X Works:</span> For hotel/flight spends, the 33% return on hotels is genuinely excellent.</span>
        </li>
        <li class="flex items-start">
          <span class="font-bold text-indigo-600 dark:text-indigo-400 mr-3">→</span>
          <span><span class="font-semibold">Lounge Access for Family:</span> The unlimited access extending to add-on cardholders is unparalleled value.</span>
        </li>
        <li class="flex items-start">
          <span class="font-bold text-indigo-600 dark:text-indigo-400 mr-3">→</span>
          <span><span class="font-semibold">Consider Devaluations:</span> Recent caps on SmartBuy and processing fees have reduced value compared to 2019-2022.</span>
        </li>
        <li class="flex items-start">
          <span class="font-bold text-indigo-600 dark:text-indigo-400 mr-3">→</span>
          <span><span class="font-semibold">Compare with Magnus:</span> If you spend ₹3L+ monthly, Axis Magnus might offer 10%+ vs Infinia's 3.3% (but accept higher devaluation risk).</span>
        </li>
        <li class="flex items-start">
          <span class="font-bold text-indigo-600 dark:text-indigo-400 mr-3">→</span>
          <span><span class="font-semibold">Get It if Eligible:</span> The renewal benefit offsets the fee, making it effectively "free" even without ₹10L annual spend.</span>
        </li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Final Verdict</h3>
    
    <div class="mb-4 p-6 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800/60 dark:via-slate-900/40 dark:to-slate-800/60 rounded-xl border border-slate-300 dark:border-slate-700/50 shadow-lg dark:shadow-xl">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        <span class="font-semibold text-lg text-slate-900 dark:text-white">The HDFC Infinia remains the dream card for good reason.</span> If you have the eligibility and spend capacity, it should be in your wallet. The combination of reliable rewards, unlimited family lounge access, and premium service is hard to replicate elsewhere in India.
      </p>
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
        While recent devaluations have reduced its "wow factor" compared to 2019-2022, the stability and breadth of benefits make it the safer choice versus aggressive competitors like Axis Magnus. For travelers who value simplicity and premium treatment, Infinia is worth every rupee.
      </p>
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
        <span class="font-semibold">If eligible:</span> Apply through your RM or online. The welcome & renewal benefits essentially offset the annual fee, making this a no-brainer for high spenders and frequent travelers.
      </p>
    </div>
  `,imageUrl:"/trezzoapp/images/credit-cards/infinia-mk.png",date:"Dec 11, 2025",readTime:"18 min",tags:["Super Premium","Dream Card","Detailed Review"]},Wx={id:"standard-chartered-ultimate",title:"Standard Chartered Ultimate Credit Card Review - Super Premium Rewards Card",excerpt:"Comprehensive review of the Standard Chartered Ultimate Credit Card featuring 3.3% reward rate, unlimited redemption options, and premium lifestyle benefits.",date:"2024-01-15",readTime:"12 min",tags:["credit cards","super premium","rewards","standard chartered"],imageUrl:"/trezzoapp/images/credit-cards/sc-mk.png",content:`
    <div class="article-container">
      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
        <div class="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Card Type</td>
                <td class="text-slate-600 dark:text-slate-400">Super Premium Credit Card</td>
              </tr>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Reward Rate</td>
                <td class="text-slate-600 dark:text-slate-400">3.3% (select categories 2%)</td>
              </tr>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Annual Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹5,000 + GST</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Best For</td>
                <td class="text-slate-600 dark:text-slate-400">Rewards on all spend types without restrictions</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          With a reward rate that matches the legendary HDFC Infinia and without any redemption limitations on most categories, the Standard Chartered Ultimate Credit Card has been one of the best options for high spenders seeking a no-nonsense rewards card. However, recent devaluations have impacted its appeal.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Fees & Welcome Benefits</h2>
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Joining Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹5,000 + GST</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Welcome Benefit</td>
                <td class="text-slate-600 dark:text-slate-400">6,000 reward points</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Renewal Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹5,000 + GST</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Renewal Benefit</td>
                <td class="text-slate-600 dark:text-slate-400">5,000 reward points</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-700 dark:text-slate-300 mb-3">
          The welcome rewards cover the joining fee value but fall short on the GST component for the first year. On renewal, you'll need additional spend to offset the fee increase. No fee waiver conditions are available, making it a flat annual commitment.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Card Design</h2>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          The card presents a premium aesthetic with golden elements on a black background. The Mastercard logo adds a distinguished touch, creating an elegant overall appearance that feels befitting of a super premium card offering.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Reward Points System</h2>
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Primary Reward Rate</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-1">
            <li>Standard Spending: 3.3% reward rate on most categories</li>
            <li>Point Expiry: 3 years from earning date</li>
            <li>No earning cap on transactions</li>
            <li>No minimum transaction threshold</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Reduced Reward Categories (from April 2023)</h3>
          <p class="text-sm text-slate-700 dark:text-slate-300 mb-3">Standard Chartered introduced reduced rewards on select categories:</p>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-amber-200 dark:border-amber-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Category</td>
                <td class="text-slate-600 dark:text-slate-400">Reward Rate</td>
              </tr>
              <tr class="border-b border-amber-200 dark:border-amber-800">
                <td class="py-2">Utilities, Supermarkets, Insurance, Property Management, Schools, Govt Payments</td>
                <td class="text-slate-600 dark:text-slate-400">2% (was 3.3%)</td>
              </tr>
              <tr class="border-b border-amber-200 dark:border-amber-800">
                <td class="py-2">Fuel Transactions</td>
                <td class="text-slate-600 dark:text-slate-400">0% + 1% surcharge waiver (capped ₹1,000/month)</td>
              </tr>
              <tr>
                <td class="py-2">Rent Payments</td>
                <td class="text-slate-600 dark:text-slate-400">1% processing fee + GST</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6 border-l-4 border-red-500">
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Devaluation Impact:</strong> These changes significantly reduced the card's appeal for high spenders across utilities, education, and insurance categories. The removal of fuel rewards and addition of rent processing fees represent substantial devaluations that took effect in April 2023.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Redemption Options</h2>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          Standard Chartered Ultimate rewards you with vouchers at 1:1 redemption ratio (₹1 per point), with a ₹99 + GST redemption fee applied per transaction.
        </p>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Available Voucher Categories</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li><strong>Shopping:</strong> Titan, FabIndia, Levis, Planet Fashion</li>
            <li><strong>Dining:</strong> Starbucks, select fine dining brands</li>
            <li><strong>Hotels:</strong> ITC Hotels</li>
            <li><strong>Luxury Brands:</strong> Ray Ban, Coach, Tumi, Hugo Boss</li>
            <li><strong>Beauty:</strong> Lakme, The Body Shop</li>
            <li><strong>Electronics:</strong> Samsonite, Marshall products</li>
          </ul>
          <p class="text-sm text-slate-700 dark:text-slate-300 mt-4">
            <em>Note: Voucher availability changes frequently. Popular options like Croma, Amazon, and Myntra have been discontinued in recent years.</em>
          </p>
        </div>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border-l-4 border-yellow-500">
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Limitation:</strong> No airline or hotel transfer partners exist. All redemptions are limited to vouchers, which means you won't get premium value through transfer partnerships like Infinia cardholders enjoy.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Forex & International Spending</h2>
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-green-200 dark:border-green-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Forex Markup Fee</td>
                <td class="text-slate-600 dark:text-slate-400">2% + GST = 2.36%</td>
              </tr>
              <tr class="border-b border-green-200 dark:border-green-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Reward Rate on International Spends</td>
                <td class="text-slate-600 dark:text-slate-400">3.3% (same as domestic)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Net Gain</td>
                <td class="text-slate-600 dark:text-slate-400">0.94% gain on forex transactions</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-700 dark:text-slate-300">
          While the forex markup fee of 2.36% is reasonable compared to other cards, it's not outstanding. You don't lose money on foreign currency spends, but you also won't gain significantly. If you're a frequent international traveler, HDFC Infinia or other cards with lower forex fees would be more beneficial.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Airport Lounge Access</h2>
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-rose-200 dark:border-rose-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Domestic Lounge Access</td>
                <td class="text-slate-600 dark:text-slate-400">Visa/Mastercard - 4 times per quarter</td>
              </tr>
              <tr class="border-b border-rose-200 dark:border-rose-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">International Lounge Access</td>
                <td class="text-slate-600 dark:text-slate-400">Priority Pass - 1 access per month (with spend condition)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Spend Requirement for International</td>
                <td class="text-slate-600 dark:text-slate-400">₹20,000 in previous calendar month</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-700 dark:text-slate-300 mb-3">
          For a super premium card, lounge access is quite limited. Domestic access at 4 per quarter is not unlimited, and international access is restricted to 1 per month with a mandatory ₹20,000 monthly spend condition. This falls short of what you'd expect from cards at this tier.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Golf & Lifestyle Benefits</h2>
        <div class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Golf Benefits</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-1">
            <li>Complimentary Golf Games: 1 per month at select courses</li>
            <li>Complimentary Golf Lessons: 1 per month at select coaching locations</li>
            <li>Mastercard Variant: Additional 4 golf games per year + 1 lesson/month</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Other Benefits</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li><strong>Duty-Free Shopping:</strong> 5% cashback (max ₹1,000/month) at 1000+ airports</li>
            <li><strong>Movie Benefit:</strong> Buy 1 Get 1 offer on Visa variant</li>
            <li><strong>Fuel Surcharge Waiver:</strong> 1% waiver with no rewards (cap ₹1,000/month)</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Eligibility Requirements</h2>
        <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">ITR Requirement</td>
                <td class="text-slate-600 dark:text-slate-400">₹24 lakhs per annum</td>
              </tr>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Existing Bank Credit Card</td>
                <td class="text-slate-600 dark:text-slate-400">~₹5 lakh credit limit required</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">SC Existing Customer</td>
                <td class="text-slate-600 dark:text-slate-400">~₹4 lakh credit limit required</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-700 dark:text-slate-300">
          Eligibility criteria can vary. The easiest path to approval is obtaining the SC Smart card first, then upgrading to Ultimate through the existing relationship.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">How to Apply?</h2>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <ol class="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>Online Direct Application:</strong> Success rate is low on the bank's website</li>
            <li><strong>Card-to-Card Upgrade (Recommended):</strong> First get SC Smart card, then apply for upgrade through existing credit card relationship. Just authenticate and approve within a few clicks</li>
            <li><strong>Priority Account Route:</strong> Open a Standard Chartered Priority Savings Account with ₹30 lakh balance, then apply based on banking relationship</li>
            <li><strong>Branch Application:</strong> Visit a branch directly if online/C2C attempts fail</li>
          </ol>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Verdict: Is It Worth ₹5,000 Annual Fee?</h2>
        <div class="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Strengths</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>3.3% reward rate on most categories (matches Infinia)</li>
            <li>No earning cap or transaction threshold restrictions</li>
            <li>3-year reward point validity</li>
            <li>Decent forex markup at 2.36%</li>
            <li>Reasonable annual fee of ₹5,000</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Weaknesses</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Significant reward reductions on utilities, supermarkets, insurance, schools (2% instead of 3.3%)</li>
            <li>No rewards on fuel transactions; surcharge waiver instead</li>
            <li>1% processing fee on rent payments</li>
            <li>Limited lounge access (only 4/quarter domestic, 1/month international with spend condition)</li>
            <li>No airline or hotel transfer partners</li>
            <li>Shrinking voucher redemption catalog (Croma, Amazon, Myntra removed)</li>
            <li>Redemption fee of ₹99 + GST per transaction</li>
            <li>Limited golf benefits (only 1 game/1 lesson per month)</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Bottom Line</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            <strong>CardExpert Rating: 4.0/5</strong>
          </p>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            The Standard Chartered Ultimate was previously among India's best credit cards for reward seekers. However, multiple devaluations since 2023 have significantly diminished its value proposition. The card now makes sense only for those with specific redemption preferences (vouchers over points transfer) and spending patterns that avoid the devalued categories.
          </p>
          <p class="text-slate-700 dark:text-slate-300">
            If you're considering this card in 2024-2025, evaluate your spending across utilities, fuel, rent, and insurance carefully. For most high spenders, HDFC Infinia (metal) or other premium alternatives with airline transfer partners offer better long-term value. That said, if you value simple rewards without complex transfer mechanics and don't spend heavily on devalued categories, the Ultimate card remains a viable option at ₹5,000 annual fee.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">FAQs</h2>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">Can I get fee waiver on renewal?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">No, Standard Chartered does not offer renewal fee waivers on this card. You must pay the ₹5,000 + GST annual fee every year.</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">Are supplementary cards complimentary?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">Yes, you can get add-on cards at no additional charge. They share the same reward rate and benefits.</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">Is wallet loading rewarded?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">Yes, you still earn 3.3% rewards on wallet loads as there's no specific MCC exclusion for wallets.</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">When will SCB add more voucher options?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">Bank officials have indicated new voucher additions in 2025, but past promises haven't materialized. Current options remain limited.</p>
          </div>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Key Takeaways</h2>
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-6">
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>Best for: High spenders who prefer voucher redemptions over airline transfers</li>
            <li>Annual fee is manageable at ₹5,000, covered partially by welcome rewards</li>
            <li>Recent devaluations have reduced the card's competitiveness significantly</li>
            <li>Lounge access is limited for a super premium card at this price point</li>
            <li>Compare carefully with HDFC Infinia and other premium cards before applying</li>
            <li>Monitor card benefits and redemption catalog before making a decision</li>
          </ul>
        </div>
      </section>
    </div>
  `},$x={id:"amex-platinum-charge",title:"American Express Platinum Charge Card Review - Ultra Premium Metal Card",excerpt:"In-depth review of the Amex Platinum Charge Card with Marriott Gold Elite tier, hotel memberships, lifestyle benefits, and comprehensive travel concierge services.",date:"2024-02-01",readTime:"15 min",tags:["credit cards","ultra premium","charge card","american express","lifestyle"],imageUrl:"/trezzoapp/images/credit-cards/amex-mk.png",content:`
    <div class="article-container">
      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
        <div class="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Card Type</td>
                <td class="text-slate-600 dark:text-slate-400">Ultra Premium Charge Card (Metal)</td>
              </tr>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Reward Rate</td>
                <td class="text-slate-600 dark:text-slate-400">1.25% - 2.5% (1 point per ₹40 spent)</td>
              </tr>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Annual Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹77,880 (includes GST)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Best For</td>
                <td class="text-slate-600 dark:text-slate-400">Travel experiences & hotel elite tier benefits</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          American Express Platinum Charge Card is unique in that it's valued not just by its reward rate, but primarily by the exclusive lifestyle benefits it offers—especially the complimentary Marriott Bonvoy Gold Elite tier membership worth ₹20,000+. It's a charge card, meaning no preset credit limit.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Annual Fees & Welcome Benefits</h2>
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Annual Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹77,880 (includes GST)</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Welcome Benefit</td>
                <td class="text-slate-600 dark:text-slate-400">100,000 MR points (or ₹60,000 Taj voucher)</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Spend Requirement</td>
                <td class="text-slate-600 dark:text-slate-400">₹5,000 within 90 days</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Referral Bonus</td>
                <td class="text-slate-600 dark:text-slate-400">10,000 additional MR points (via referral link)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Pro Tip:</strong> You can request 100,000 MR points instead of the public ₹60,000 Taj voucher offer by calling customer support before card activation. This provides significantly better value for flexible redemption.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Reward Points & Earning</h2>
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Point Earning</h3>
          <table class="w-full text-sm mb-4">
            <tbody>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Earn Rate</td>
                <td class="text-slate-600 dark:text-slate-400">1 MR point per ₹40 spent</td>
              </tr>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Effective Rate</td>
                <td class="text-slate-600 dark:text-slate-400">2.5% (if 1 point = ₹1 value)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Point Value</td>
                <td class="text-slate-600 dark:text-slate-400">₹0.50-₹1 depending on redemption</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Point Value Explanation</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            The 1.25%-2.5% reward rate mentioned is based on minimum value extraction from Marriott Bonvoy point redemptions. However:
          </p>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Budget hotel bookings: ~₹0.50 per point</li>
            <li>Premium hotel bookings: Up to ₹1 per point or higher</li>
            <li>If you're a Marriott Platinum+ member: Gold status perks boost value significantly</li>
            <li>Best value extraction requires strategic booking timing and property selection</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Hotel Elite Tier Benefits</h2>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          The primary value proposition of the Platinum Charge Card lies in the complimentary elite tier memberships from major hotel groups. You get to enroll in these programs through your Amex account:
        </p>
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-rose-200 dark:border-rose-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Marriott Bonvoy</td>
                <td class="text-slate-600 dark:text-slate-400">Gold Status (~₹20,000 value)</td>
              </tr>
              <tr class="border-b border-rose-200 dark:border-rose-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Hilton Honors</td>
                <td class="text-slate-600 dark:text-slate-400">Gold Status (~₹20,000 value)</td>
              </tr>
              <tr class="border-b border-rose-200 dark:border-rose-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Radisson Rewards</td>
                <td class="text-slate-600 dark:text-slate-400">Premium Status</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Taj Epicure</td>
                <td class="text-slate-600 dark:text-slate-400">Membership (limited value)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Marriott Bonvoy Gold Benefits</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Room upgrades (subject to availability)</li>
            <li>Complimentary breakfast for 2</li>
            <li>Free WiFi throughout stay</li>
            <li>Lounge access at select properties</li>
            <li>Late checkout (2 PM or 4 PM)</li>
            <li>Estimated annual value: ₹20,000+ for regular travelers</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">International Travel Benefits</h2>
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Forex Spends</h3>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-green-200 dark:border-green-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Forex Markup Fee</td>
                <td class="text-slate-600 dark:text-slate-400">3.5% + GST = 4.13%</td>
              </tr>
              <tr class="border-b border-green-200 dark:border-green-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">International Reward Rate</td>
                <td class="text-slate-600 dark:text-slate-400">3.75% - 7.5% (3X rewards on spends)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Net Gain</td>
                <td class="text-slate-600 dark:text-slate-400">~3.3% (if 1 point = ₹1 value)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Kaizen Offer</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            <strong>Annual Travel Benefit:</strong> Spend ₹1 lakh on travel and receive ₹15,000 Yatra e-Voucher (value varies, previously ₹30,000).
          </p>
          <p class="text-slate-700 dark:text-slate-300">
            This is a lucrative benefit for revenue travelers and business travelers who consistently make international trips.
          </p>
        </div>
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Zero Foreign Transaction Fee</h3>
          <p class="text-slate-700 dark:text-slate-300">
            Amex provides zero lost card liability while traveling, which offers significant peace of mind for international travelers—often more valuable than the rewards themselves.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Golf & Dining Benefits</h2>
        <div class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Golf Benefits</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Complimentary Golf Games: 4 per month</li>
            <li>Complimentary Golf Lessons: 2 per month</li>
            <li>Coverage: 30+ domestic golf courses</li>
            <li><strong>Limitation:</strong> 2 lesson cap is restrictive for a premium card at this fee level</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Dining Benefits</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li><strong>EazyDiner Prime:</strong> Up to 25%+ discount on bills</li>
            <li><strong>Taj Epicure:</strong> Gold membership with special dining benefits</li>
            <li><strong>Amex Network Dining:</strong> Access to Amex's proprietary dining program</li>
            <li>Estimated annual value: ₹10,000+ for regular diners</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Platinum Concierge Services</h2>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Services Available</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>Travel Concierge:</strong> Flight bookings, hotel reservations, car rentals</li>
            <li><strong>Lifestyle Concierge:</strong> Event tickets, restaurant reservations, personal shopping</li>
            <li><strong>Complimentary Services:</strong> Travel insurance, emergency assistance</li>
            <li><strong>Home Assist:</strong> Home repair and maintenance coordination</li>
            <li><strong>Emergency Medical Services:</strong> Can arrange family member travel or medical personnel</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Lounge Access</h2>
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Domestic Lounge Access</td>
                <td class="text-slate-600 dark:text-slate-400">Unlimited Centurion Lounge (primary + 2 guests)</td>
              </tr>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">International Lounge</td>
                <td class="text-slate-600 dark:text-slate-400">Priority Pass (Premium version) - Unlimited</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Supplementary Cards</td>
                <td class="text-slate-600 dark:text-slate-400">Up to 1 lounge access per quarter per supplementary cardholder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Renewal Benefits</h2>
        <div class="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Renewal Conditions</h3>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-yellow-200 dark:border-yellow-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Spend Requirement</td>
                <td class="text-slate-600 dark:text-slate-400">₹20 lakhs in the anniversary year</td>
              </tr>
              <tr class="border-b border-yellow-200 dark:border-yellow-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Renewal Voucher</td>
                <td class="text-slate-600 dark:text-slate-400">₹35,000 from Taj, Postcard hotels, Luxe brands</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Retention Offers</td>
                <td class="text-slate-600 dark:text-slate-400">Variable (20K-125K Taj vouchers reported)</td>
              </tr>
            </tbody>
          </table>
          <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mt-4 border-l-4 border-red-500">
            <p class="text-sm text-slate-700 dark:text-slate-300">
              <strong>Important:</strong> Amex removed retention benefits for most Amex cards since late 2024. You'll need to negotiate specifically for renewal offers.
            </p>
          </div>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Is It Worth ₹77,880 Annual Fee?</h2>
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Value Breakdown (First Year)</h3>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Welcome Benefit</td>
                <td class="text-slate-600 dark:text-slate-400">₹60,000+ (Taj voucher minimum)</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Marriott Gold Status</td>
                <td class="text-slate-600 dark:text-slate-400">₹20,000+</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Subtotal</td>
                <td class="text-slate-600 dark:text-slate-400">₹80,000+</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹77,880</td>
              </tr>
            </tbody>
          </table>
          <p class="text-slate-700 dark:text-slate-300 mt-4">
            First year appears positive by ₹2,000+, but this assumes you fully maximize Marriott Gold benefits.
          </p>
        </div>
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Best Case Scenario</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            If you travel 4+ times annually and stay at hotels:
          </p>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Marriott Gold brings ₹20,000+ annually through room upgrades & breakfast</li>
            <li>Hilton Gold easily fetches ₹20,000+ in breakfast value alone (€50 per night in Europe)</li>
            <li>Golf games (4/month) = ₹1,500-3,000 per game = ₹18,000-36,000 annually</li>
            <li>Concierge services, dining discounts, EazyDiner Prime = ₹10,000+</li>
            <li>Total potential value: ₹70,000-100,000+</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Worst Case Scenario</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            If you don't travel much and can't extract value from hotel benefits:
          </p>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Welcome voucher: ₹60,000</li>
            <li>Golf games with low usage: ₹2,000-5,000</li>
            <li>Concierge/dining: ₹5,000</li>
            <li>Total benefit: ₹67,000-70,000</li>
            <li>Net loss: ₹7,000-10,000+</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Verdict</h2>
        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">CardExpert Rating: 4.2/5</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            The American Express Platinum Charge Card is fundamentally a lifestyle and experience card, not a rewards maximization card. It's valued by those who prioritize memorable travel experiences over pure economics.
          </p>
          <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">Recommended For:</h4>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Frequent international travelers who stay in premium hotels</li>
            <li>Golf enthusiasts with regular tee time requirements</li>
            <li>High-net-worth individuals seeking status symbol & concierge access</li>
            <li>Business travelers on corporate expense accounts</li>
            <li>Those with 4+ family members (to share supplementary card benefits)</li>
          </ul>
          <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2 mt-4">Not Recommended For:</h4>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Pure rewards chaser seeking maximum cashback/points</li>
            <li>Occasional travelers who value flexibility over experiences</li>
            <li>Those unable to justify 20L annual spend for renewal</li>
            <li>Budget-conscious cardholders</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Key Takeaways</h2>
        <div class="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6">
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>Unique value proposition tied to hotel elite tier memberships, not just rewards</li>
            <li>Marriott Gold Status alone worth ₹20,000+ annually for regular hotel stayers</li>
            <li>First year fee covers cost through welcome benefits if maximized properly</li>
            <li>Renewal requires ₹20 lakh annual spend—only feasible for high spenders</li>
            <li>Best value for those who can fully leverage travel and lifestyle benefits</li>
            <li>Request 100K MR points instead of Taj voucher for better flexibility</li>
            <li>Consider holding multiple supplementary cards to share lounge access</li>
            <li>Secondary card option available if you want backup at lower benefit tier</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Comparison with Alternatives</h2>
        <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Vs HDFC Infinia</td>
                <td class="text-slate-600 dark:text-slate-400">Infinia offers better rewards (3.3%); Platinum better for hotel elite tiers</td>
              </tr>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Vs Citi Prestige</td>
                <td class="text-slate-600 dark:text-slate-400">Prestige superior for rewards; Platinum better for experiences</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Vs Axis Magnus</td>
                <td class="text-slate-600 dark:text-slate-400">Magnus better value for rewards; Platinum unique for lifestyle benefits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `},Px={id:"icici-emeralde-private",title:"ICICI Emeralde Private Metal Credit Card Review - Super Premium Metal Card",excerpt:"Detailed review of ICICI Emeralde Private Metal with 3% base rewards, Taj Epicure membership, unlimited lounge access, and 3.75% milestone rewards.",date:"2024-03-15",readTime:"13 min",tags:["credit cards","super premium","metal card","icici bank","rewards"],imageUrl:"/trezzoapp/images/credit-cards/epm-mk.png",content:`
    <div class="article-container">
      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
        <div class="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Card Type</td>
                <td class="text-slate-600 dark:text-slate-400">Super Premium Metal Credit Card</td>
              </tr>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Reward Rate</td>
                <td class="text-slate-600 dark:text-slate-400">3% base + milestone rewards up to 3.75%</td>
              </tr>
              <tr class="border-b border-emerald-200 dark:border-emerald-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Annual Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹12,499 + GST</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Best For</td>
                <td class="text-slate-600 dark:text-slate-400">Welcome benefits & consistent high spenders</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          ICICI Emeralde Private Metal is a wonderfully rewarding super premium credit card that combines excellent welcome benefits with strong rewards potential. It's the first truly rewarding super premium card from ICICI after exiting the Payback rewards ecosystem.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Joining & Annual Fees</h2>
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 mb-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Annual Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹12,499 + GST (₹14,748 with tax)</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Welcome Benefit (Joining)</td>
                <td class="text-slate-600 dark:text-slate-400">12,500 points (₹12,500 value) + Taj Epicure + 1 Night Stay</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Renewal Fee</td>
                <td class="text-slate-600 dark:text-slate-400">₹12,499 + GST</td>
              </tr>
              <tr class="border-b border-purple-200 dark:border-purple-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Renewal Benefit</td>
                <td class="text-slate-600 dark:text-slate-400">12,500 points (₹12,500 value)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Annual Fee Waiver</td>
                <td class="text-slate-600 dark:text-slate-400">₹10 lakh annual spend in card anniversary year</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
          <p class="text-sm text-slate-700 dark:text-slate-300">
            <strong>Strong Value:</strong> Welcome + Taj Epicure + 1 night stay easily justifies the joining fee, delivering 2X value on first year itself.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Card Design & Specifications</h2>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          Issued exclusively on the Mastercard network, the card features an elegant design with a metal construction. Card replacement fee: ₹3,500 in case of loss.
        </p>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Reward Points System</h2>
        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Base Rewards</h3>
          <table class="w-full text-sm mb-4">
            <tbody>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Category</td>
                <td class="text-slate-600 dark:text-slate-400">Points per Spend</td>
              </tr>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="py-2">Regular Spending</td>
                <td class="text-slate-600 dark:text-slate-400">6 RP per ₹200 (3%)</td>
              </tr>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="py-2">Grocery</td>
                <td class="text-slate-600 dark:text-slate-400">6 RP per ₹200 (3%) + capped 1,000 RP/statement cycle</td>
              </tr>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="py-2">Utilities</td>
                <td class="text-slate-600 dark:text-slate-400">6 RP per ₹200 (3%) + capped 1,000 RP/statement cycle</td>
              </tr>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="py-2">Education</td>
                <td class="text-slate-600 dark:text-slate-400">6 RP per ₹200 (3%) + capped 1,000 RP/statement cycle</td>
              </tr>
              <tr>
                <td class="py-2">Insurance</td>
                <td class="text-slate-600 dark:text-slate-400">6 RP per ₹200 (3%) + capped 5,000 RP/statement cycle</td>
              </tr>
            </tbody>
          </table>
          <div class="text-sm text-slate-700 dark:text-slate-300">
            <p><strong>Exclusions:</strong> Fuel spends, tax payments, and rent payments excluded from rewards.</p>
            <p class="mt-2"><strong>Rent Fee:</strong> 1% convenience fee + GST on rent transactions.</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Milestone Rewards</h3>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-amber-200 dark:border-amber-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">₹4 Lakh Spend</td>
                <td class="text-slate-600 dark:text-slate-400">₹3,000 EaseMyTrip voucher (additional 0.75%)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">₹8 Lakh Spend</td>
                <td class="text-slate-600 dark:text-slate-400">₹3,000 EaseMyTrip voucher (additional 0.75%)</td>
              </tr>
            </tbody>
          </table>
          <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mt-4">
            <p class="text-sm text-slate-700 dark:text-slate-300">
              <strong>Combined Effect:</strong> 3% base + milestone rewards = up to 3.75% effective rate, which is impressive for ICICI's proprietary card portfolio.
            </p>
          </div>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Redemption Options</h2>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Travel & Hotel Redemptions</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            Best value extraction comes from travel and hotel redemptions at 1 RP = ₹1:
          </p>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Flights: 1:1 redemption value at partner portals</li>
            <li>Hotels: ITC Hotels, Taj Hotels (minimum 5,000 points), Marriott Bonvoy transfers</li>
            <li>EaseMyTrip: Flight-only vouchers (milestone benefit)</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Points Transfer Partners</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li><strong>Air India:</strong> 1:1 transfer (newly added)</li>
            <li>Estimated value: ₹0.50 per point (conservative) to ₹1+ per point (premium transfers)</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Voucher Redemptions</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            Branded vouchers available (US Polo, Allen Solly, etc.) at 1:1 ratio for higher denominations (₹10,000+).
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            <em>Note: If travel redemption isn't your preference, rewards value drops significantly for general vouchers.</em>
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Taj Epicure Membership</h2>
        <div class="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg p-6">
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            Complimentary Taj Epicure Gold membership includes:
          </p>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Exclusive member benefits at Taj Hotels & Resorts</li>
            <li>Priority reservations and upgrades</li>
            <li>Special dining experiences</li>
            <li>1 complimentary night stay at select Taj properties (as welcome benefit)</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Airport & Lounge Access</h2>
        <div class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Lounge Benefits</h3>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-teal-200 dark:border-teal-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Domestic Lounges</td>
                <td class="text-slate-600 dark:text-slate-400">Mastercard: Unlimited access (primary + add-on)</td>
              </tr>
              <tr class="border-b border-teal-200 dark:border-teal-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">International Lounges</td>
                <td class="text-slate-600 dark:text-slate-400">Priority Pass Premium: Unlimited access</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">VIP Lounge Access</td>
                <td class="text-slate-600 dark:text-slate-400">VIP section of 080 Arrival Lounge at Bangalore T2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Add-On Cards</h3>
          <p class="text-slate-700 dark:text-slate-300">
            Up to 3 complimentary add-on cards, with all sharing the same lounge access benefits. This is excellent for families—all cardholders get unlimited domestic + international lounge access.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Golf & Additional Benefits</h2>
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Golf Benefits</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>Complimentary Games: Unlimited (1 booking at a time)</li>
            <li>Complimentary Lessons: Unlimited</li>
            <li>Domestic Coverage: 20 golf courses</li>
            <li>International Coverage: 90+ golf courses worldwide</li>
          </ul>
        </div>
        <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Other Benefits</h3>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li><strong>Cash Advance Fee:</strong> Nil</li>
            <li><strong>Late Payment Fee:</strong> Nil</li>
            <li><strong>Over-Limit Fee:</strong> Nil</li>
            <li><strong>BookMyShow:</strong> Buy 1 ticket, get up to ₹750 off second ticket (max 2/month)</li>
            <li><strong>EazyDiner Prime:</strong> Complimentary membership</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Forex & International Spending</h2>
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Forex Markup Fee</td>
                <td class="text-slate-600 dark:text-slate-400">2% + GST = 2.36%</td>
              </tr>
              <tr class="border-b border-blue-200 dark:border-blue-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">International Spending Rewards</td>
                <td class="text-slate-600 dark:text-slate-400">3% (same as domestic)</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Net Gain on Forex</td>
                <td class="text-slate-600 dark:text-slate-400">0.4% - 0.64% gain on foreign currency spends</td>
              </tr>
            </tbody>
          </table>
          <p class="text-slate-700 dark:text-slate-300 mt-4">
            The 2.36% forex markup is reasonable but not outstanding. You gain modestly but won't optimize forex transactions with this card.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Eligibility & Application Process</h2>
        <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-lg p-6 mb-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Eligibility Requirements</h3>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Fresh Applications</td>
                <td class="text-slate-600 dark:text-slate-400">Invite only (bank discretion)</td>
              </tr>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Existing ICICI Cardholders</td>
                <td class="text-slate-600 dark:text-slate-400">~₹10 lakh existing credit limit required</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">Other Bank Cardholders</td>
                <td class="text-slate-600 dark:text-slate-400">~₹10 lakh credit limit at other banks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">How to Apply</h3>
          <ol class="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li><strong>Upgrade Route (Easiest):</strong> Check iMobile app for upgrade offer from existing ICICI cards (Sapphiro, Emeralde plastic)</li>
            <li><strong>Relationship Route:</strong> Approach your RM (Relationship Manager) to submit request through channel</li>
            <li><strong>Branch Application:</strong> Visit branch with existing ICICI account documentation</li>
            <li><strong>Phone Banking:</strong> Call ICICI customer care and request application through phone banking team</li>
          </ol>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Devaluation Risk Assessment</h2>
        <div class="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">Devaluation Meter: LOW</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-3">
            Why low devaluation risk:
          </p>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 mb-4 space-y-1">
            <li>All significant benefits are capped sensibly (not unlimited)</li>
            <li>Card is offered on invite-only basis (limited distribution)</li>
            <li>ICICI recently exited Payback, suggesting commitment to new rewards program</li>
            <li>Welcome benefits are locked in at card approval time</li>
          </ul>
          <p class="text-slate-700 dark:text-slate-300">
            Expect 2-3 years minimum before any major devaluation, but redemption options (especially travel portal) might face optimization over time.
          </p>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Final Verdict</h2>
        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-6">
          <h3 class="font-semibold text-slate-700 dark:text-slate-300 mb-3">CardExpert Rating: 4.8/5</h3>
          <p class="text-slate-700 dark:text-slate-300 mb-4">
            ICICI Emeralde Private Metal is a fantastic super premium credit card for those who can obtain it. It successfully addresses the shortcomings of the regular Emeralde card with better rewards, exclusive access, and phenomenal welcome benefits.
          </p>
          <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">Best For:</h4>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>High spenders who value both rewards and lifestyle benefits</li>
            <li>Travel-focused spenders who can extract value from 3% base + milestone rewards</li>
            <li>Golf enthusiasts with access to international courses</li>
            <li>Families (to share add-on card lounge benefits)</li>
          </ul>
          <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2 mt-4">Why It Stands Out:</h4>
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
            <li>₹10 lakh spend waiver condition is achievable</li>
            <li>3.75% effective reward rate unmatched in ICICI portfolio</li>
            <li>Taj Epicure + 1 night stay immediate value</li>
            <li>Unlimited lounge access for all add-on cardholders</li>
            <li>International golf course access (unique benefit)</li>
            <li>No annual fee for ₹10L+ annual spenders (de facto LTF)</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Key Takeaways</h2>
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-6">
          <ul class="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
            <li>Welcome benefits alone (₹12,500 points + Taj Epicure + 1 night) justify the annual fee</li>
            <li>3% base rewards matches many premium cards but milestone boost takes it to 3.75%</li>
            <li>₹10 lakh spend waiver makes effective cost zero for high spenders</li>
            <li>Lounge access benefits shared across 3 add-on cards (great for families)</li>
            <li>Travel redemptions (flights/hotels) provide best ROI at 1:1 ratio</li>
            <li>Golf benefits valuable only if you actually play; otherwise consider it icing on cake</li>
            <li>No airline transfer partners yet, but Air India 1:1 recently added</li>
            <li>Expect more transfer partners in future as bank builds rewards program</li>
            <li>Easier to obtain than HDFC Infinia; invitation-based approach smart for exclusivity</li>
          </ul>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">FAQs</h2>
        <div class="space-y-4">
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">Can I get this card without invitation?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">Very unlikely. Approach through RM or upgrade from existing ICICI premium card for best chances.</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">Are supplementary cards free?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">Yes, up to 3 add-on cards are complimentary and share all primary cardholder benefits.</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">When do I get Taj Epicure benefits?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">Taj Epicure card and 1 night stay voucher arrive within 7-10 days of card activation.</p>
          </div>
          <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-4">
            <h4 class="font-semibold text-slate-700 dark:text-slate-300 mb-2">How long do milestone rewards take to credit?</h4>
            <p class="text-slate-700 dark:text-slate-300 text-sm">Milestone EaseMyTrip vouchers typically credit within 7-15 days of spend completion in statement.</p>
          </div>
        </div>
      </section>

      <section class="article-section">
        <h2 class="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4">Comparison with Alternatives</h2>
        <div class="bg-slate-50 dark:bg-slate-900/20 rounded-lg p-6">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">vs HDFC Infinia</td>
                <td class="text-slate-600 dark:text-slate-400">Infinia: 3.3% base; Emeralde: 3% base + milestone. Infinia has more transfer partners. Emeralde has better welcome benefits.</td>
              </tr>
              <tr class="border-b border-slate-200 dark:border-slate-800">
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">vs ICICI Emeralde (Plastic)</td>
                <td class="text-slate-600 dark:text-slate-400">Metal: ₹12,499 fee; Plastic: Lower fee. Metal offers metal card prestige & better benefits. Plastic gives more BMS offers.</td>
              </tr>
              <tr>
                <td class="font-semibold text-slate-700 dark:text-slate-300 py-2">vs Axis Magnus</td>
                <td class="text-slate-600 dark:text-slate-400">Magnus: 5X accelerated rewards at ₹1L+ spend; Emeralde: Consistent 3-3.75%. Magnus better for hyper-spenders.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `},eg={id:"yes-bank-marquee",title:"Yes Bank Marquee Credit Card Review",excerpt:"Super Premium Credit Card with 4.5% online rewards - Best for online shoppers",readTime:"15 min read",imageUrl:"https://www.cardexpert.in/wp-content/uploads/2024/02/yes-bank-marquee-credit-card.jpg",date:"2025-12-11",tags:["credit-card","yes-bank","super-premium","rewards"],content:`
# Yes Bank Marquee Credit Card: Complete Review

Yes Bank has made a strong comeback in the premium credit card space with the Marquee Credit Card, designed for those who make substantial online purchases. This super premium card offers impressive rewards and benefits that can easily justify its annual fee.

## Overview

| Attribute | Details |
|-----------|---------|
| Card Type | Super Premium Credit Card |
| Reward Rate | 2.25% – 4.5% |
| Best For | Online Spends |
| Network | Visa Infinite |
| Joining Fee | ₹9,999 + GST |
| Annual Fee | ₹4,999 + GST |

The Yes Bank Marquee Credit Card stands out as one of the highest rewarding cards in India, particularly for online transactions. With a reward rate of up to 4.5%, it's designed for customers who spend heavily online.

## Fees & Benefits Structure

<div class="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-6 mb-6 dark:from-emerald-700 dark:to-blue-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Joining Benefits</h3>
    <ul class="space-y-2">
      <li><strong>Joining Fee:</strong> ₹9,999 + GST</li>
      <li><strong>Welcome Bonus:</strong> 40,000 Reward Points (~₹10,000 value)</li>
      <li><strong>Joining Fee Offset:</strong> No direct waiver, but welcome bonus covers the cost</li>
    </ul>
  </div>
</div>

<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 dark:from-purple-700 dark:to-pink-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Annual Renewal</h3>
    <ul class="space-y-2">
      <li><strong>Renewal Fee:</strong> ₹4,999 + GST</li>
      <li><strong>Renewal Benefit:</strong> 20,000 Reward Points (if fee is paid)</li>
      <li><strong>Fee Waiver:</strong> On annual spending exceeding ₹10 Lakhs</li>
    </ul>
  </div>
</div>

## Card Design

The Marquee card features premium aesthetics with a sophisticated design that feels genuinely luxurious. The Visa Infinite logo is subtly placed, maintaining the card's elegant appearance. The card is issued on the Visa Infinite platform, ensuring worldwide acceptance at premium merchants.

## Rewards Breakdown

### Base Rewards Table

| Category | Reward Rate | Points Per ₹100 | Annual Cap |
|----------|-------------|-----------------|------------|
| Online Spends | ~4.5% | 36 RP per ₹200 | 1,00,000 RP |
| Offline Spends | ~2.25% | 18 RP per ₹200 | No Cap |
| Select Categories | ~1.25% | 10 RP per ₹200 | Varies |

<div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 mb-6 dark:from-blue-700 dark:to-cyan-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Rewards Key Points</h3>
    <ul class="space-y-2 text-sm">
      <li>✓ 4.5% on online purchases is among the highest in India</li>
      <li>✓ No category exceptions for base online rewards</li>
      <li>✓ 1% convenience fee on utility/education payments (deducted from rewards)</li>
      <li>✓ Excluded: Rental, Wallet loads, Fuel, Government payments, Marketing/Ads</li>
    </ul>
  </div>
</div>

### Key Rewards Features

**Maximum Cap on Online Spends:** The card has a monthly cap of 1,00,000 reward points (approximately ₹5.5L spend equivalent). Once you hit this cap, the reward rate drops to offline rate (2.25%).

**Select Categories:** These include recharge, utility bills, and insurance - earning 1.25% rewards. However, there's a 1% convenience fee charged on utility and education payments.

**Redemption Options:**
- Flights/Hotels: 0.25 INR per point
- Vouchers: 0.15 INR per point (recently devalued)
- Monthly Redemption Limit: 3L points per calendar month

## Forex Markup Fee

<div class="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 mb-6 dark:from-indigo-700 dark:to-purple-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">International Transaction Benefits</h3>
    <p class="mb-3"><strong>Forex Markup:</strong> 1% + GST = 1.2%</p>
    <p class="mb-3"><strong>Effective Return on International Online Spends:</strong> 4.5% - 1.2% = <strong>3.3%</strong></p>
    <p class="text-sm">This makes Yes Bank Marquee one of the highest rewarding cards for international online transactions in India.</p>
  </div>
</div>

Even with the forex markup, the net gain on international online spends is an impressive 3.3%, which is competitive with premium cards like HDFC Infinia.

## Lounge Access Benefits

<div class="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-6 mb-6 dark:from-green-700 dark:to-emerald-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Airport Lounge Access</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Domestic (Primary)</strong></td>
          <td class="py-2">6 per quarter</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Domestic (Add-on)</strong></td>
          <td class="py-2">2 per quarter (shared)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>International (Primary)</strong></td>
          <td class="py-2">Unlimited</td>
        </tr>
        <tr>
          <td class="py-2"><strong>International (Add-on)</strong></td>
          <td class="py-2">2 per quarter (shared)</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-3 text-sm"><strong>Spend Requirement:</strong> ₹1,00,000 in previous calendar quarter for domestic lounge access</p>
  </div>
</div>

**Important:** International lounge access can be used directly with the Visa card without needing an additional Priority Pass card, making it convenient for international travelers.

## Additional Lifestyle Benefits

### Golf Benefit
- 4 complimentary golf games per year (maximum 1 per month)
- 1 complimentary golf lesson per month
- Available through Visa platform

### Other Lifestyle Features
- **Purchase Protection:** Insurance cover up to ₹50,000 against accidental damage for mobile and electronics purchased online (valid for 6 months)
- **BookMyShow Benefit:** Buy 1 Get 1 offer on movies, up to 3 tickets per month (up to ₹800 discount per ticket)
- **Visa Concierge:** 24/7 travel and lifestyle concierge services
- **Roadside Assistance:** Emergency roadside services

## Redemption Value Analysis

The redemption value can vary significantly based on your strategy:

### Favorable Scenarios
- **Flight/Hotel Redemptions:** 0.25 INR per point = 4.5% cash equivalent on online spends
- **Combining with bonuses:** Welcome 40K + Annual 20K = 60K points annually

### Less Favorable Scenarios
- **Voucher Redemptions:** 0.15 INR per point = 2.7% cash equivalent (devalued from 0.25)
- **Direct cash redemption:** Not available

## Comparing Marquee vs Other Premium Cards

<div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-6 dark:from-orange-700 dark:to-red-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Marquee vs Reserv</h3>
    <ul class="space-y-2 text-sm">
      <li><strong>Marquee:</strong> Better for high-volume online spenders, no subscription needed</li>
      <li><strong>Reserv:</strong> Requires paid subscription plan for accelerated rewards</li>
      <li><strong>Winner:</strong> Marquee for simplicity and automated benefits</li>
    </ul>
  </div>
</div>

## Eligibility Requirements

| Criteria | Details |
|----------|---------|
| Employment | Salaried or Self-employed |
| Net Salary | ₹3+ Lakhs per month |
| ITR | ₹24+ Lakhs per annum |
| CIBIL Score | Good credit score (750+) |
| Existing Credit Cards | ₹5L+ limit helps with approval |

## How to Apply

### Online Application
- Visit Yes Bank's official website
- Share OTP and PAN to initiate process
- Address confirmation from credit report
- Takes approximately 5 minutes

### Branch Digital Application
- Visit any Yes Bank branch
- Share OTP along with other details
- Digital approval process
- Faster alternative to online

### Video KYC
- Arranged at the same branch
- Takes about 5 minutes
- Smooth process similar to Amex/IDFC

**Approval Timeline:** 3 days for approval + 4 days for delivery

## Devaluation Meter

⚠️ **Risk: MEDIUM-HIGH**

Recent concerns:
- Reward point redemption capped at 70% of transaction value
- Voucher redemption devalued from 0.25 to 0.15 INR
- MonthlyRedemption limit of 3L points per month

**Note:** Given Yes Bank's history of frequent benefit changes, expect feature modifications over time.

## User Experience Insights

### Positive Aspects
- Exceptionally fast onboarding process
- Premium card design and build
- High reward rates for online spends
- Good lounge access for frequent travelers

### Areas of Concern
- Yes Bank customer support can be inconsistent
- Add-on card issuance requires branch visit (despite online primary card application)
- Frequent benefit changes and devaluations
- Limited point transfer partners (no airline transfers)

## Who Should Get This Card?

✅ **Ideal For:**
- E-commerce and online shopping enthusiasts
- International online shoppers
- Those spending ₹5L+ annually
- Professionals with regular business travel
- High earners focused on vanilla rewards

❌ **Not Ideal For:**
- Airmiles enthusiasts (no airline transfers)
- Heavy offline spenders
- Those with inconsistent annual spending
- Customers needing excellent customer support

## Rating & Verdict

<div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
  <div class="text-white">
    <h3 class="text-2xl font-bold mb-2">CardExpert Rating: 4.5/5</h3>
    <p class="text-sm">Yes Bank Marquee Credit Card is an excellent choice for high-volume online spenders, offering among the best reward rates in India.</p>
  </div>
</div>

**The Verdict:** The Yes Bank Marquee Credit Card is a fantastic offering for online shopping enthusiasts and international travelers. With rewards of up to 4.5% on online spends and unlimited international lounge access, it delivers excellent value. However, the card's strength in online rewards is balanced by concern about Yes Bank's history of frequent benefit modifications. For those willing to adapt to potential changes and have primarily online spending patterns, this card is highly recommended.

## Key Takeaways

1. **Highest Online Rewards:** Up to 4.5% on online spends is best-in-class
2. **International Friendly:** 0% forex markup concern with 3.3% net gain
3. **Premium Lounge Access:** Unlimited international lounge visits
4. **Lower Renewal Fee:** ₹4,999 is competitive for this category
5. **Fast Onboarding:** Excellent digital application process
6. **Devaluation Risk:** History suggests benefits may change
7. **Customer Service:** May not match premium card standards

## Frequently Asked Questions

**Q: Is the joining fee worth it?**
A: Yes, the 40,000 bonus points (₹10,000 value) more than offset the ₹9,999 joining fee.

**Q: Can I get fee waiver on renewal?**
A: Yes, on spending exceeding ₹10 Lakhs in a calendar year. Alternatively, call for retention offers.

**Q: Are points locked to Yes Bank redemption?**
A: Points can be redeemed for flights/hotels directly, but there's no airline transfer option like Amex or HDFC cards.

**Q: Does this card have good acceptance?**
A: Visa Infinite ensures good acceptance at premium merchants globally, though less accepted offline than Visa/Mastercard standard.

**Q: Should I keep both Marquee and Reserv?**
A: No, Yes Bank allows only one card per customer. Choose based on your redemption preference.

**Q: What if I spend less than ₹5L annually?**
A: The annual fee becomes harder to justify unless you value lounge access significantly.

---

*Last Updated: December 2025*
*Information accurate as of review date. Card features and benefits subject to change.*
`},tg={id:"hdfc-bizblack",title:"HDFC Bank BizBlack Credit Card Review",excerpt:"Business Credit Card with 5X rewards on tax payments - Best for entrepreneurs",readTime:"16 min read",imageUrl:"/trezzoapp/images/credit-cards/hdfc-bizblack.jpg",date:"2025-12-11",tags:["credit-card","hdfc","business","tax-rewards"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 dark:from-slate-800/60 dark:via-indigo-900/30 dark:to-slate-800/60 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-lg dark:shadow-xl">
      <h3 class="text-lg font-serif font-bold mb-4 text-slate-900 dark:text-white">The Industry-First Business Rewards Card</h3>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        HDFC Bank's BizBlack Credit Card is a game-changing business credit card that targets small business owners and self-employed professionals. It comes with 5X rewards on tax payments—an industry-first benefit that's unheard of in the Indian credit card market.
      </p>
      <p class="text-slate-700 dark:text-slate-200">
        Unlike corporate credit cards, the BizBlack is issued on personal liability, making it ideal for sole proprietors, partnerships, and business owners who want to earn exceptional rewards on their business and tax payments.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Overview</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 border-b-2 border-indigo-300 dark:border-indigo-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Feature</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Card Type</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Super Premium Business Credit Card (Diners Club)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Annual Fee</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹10,000 + GST</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Reward Rate</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3.3% to 33% (base to accelerated)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Welcome Benefit</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Club Marriott + ₹5,000 Taj Voucher</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Points Validity</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3 Years</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Issued On</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Personal Liability (not corporate)</td>
          </tr>
          <tr class="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Best For</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Business owners with regular tax & GST payments</td>
          </tr>
          <tr class="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Best For</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Business owners with regular tax & GST payments</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Benefits</h3>
    
    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Joining & Renewal Fees</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 border-b-2 border-amber-300 dark:border-amber-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Fee Type</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Joining Fee</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹10,000 + GST</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Joining Fee Waiver</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹1.5L spend in first 90 days (fresh issuance only)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Welcome Benefit</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Club Marriott Membership + ₹5,000 Taj Voucher</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Renewal Fee</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹10,000 + GST</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Renewal Benefit</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Nil</td>
          </tr>
          <tr class="hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Renewal Fee Waiver</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">On spending > ₹7.5 Lakhs per annum</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Smart Card Strategy</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        Ideally, you can consider this as a FREE card. The joining fee can be waived with ₹1.5L spend in 90 days, which is easily achievable with regular tax and GST payments. This unlock also gives you the ₹5K Taj Voucher and Club Marriott membership. In most cases, you can get it as First Year Free (FYF) on upgrade from another HDFC card.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Points System</h3>
    
    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Regular Rewards</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 border-b-2 border-purple-300 dark:border-purple-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Spend Type</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Points Per ₹150</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Effective Return</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">After Tax Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Regular Spend</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">5 RP</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">3.3%</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">2.3%</td>
          </tr>
          <tr class="hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Accelerated (5X Rewards)</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">25 RP</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">16.5%</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">11.55%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-900/20 dark:via-gray-900/15 dark:to-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50 mb-6">
      <p class="text-sm text-slate-700 dark:text-slate-300">
        <span class="font-semibold text-slate-900 dark:text-white">Key Notes:</span> Amazon Pay Voucher redemption is available at ₹1 = 0.70 INR but this may change. Points are valid for 3 years.
      </p>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">5X Accelerated Rewards on Business Spends</h4>
    <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">
      The <strong>5X bonus points on tax and business spends</strong> is the flagship benefit of this card and is the first-of-its-kind in India (perhaps even globally!). These rewards apply to:
    </p>
    
    <div class="space-y-3 mb-6">
      <div class="p-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">1. Income Tax Payments</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Pay Advance Tax & TDS on the Income Tax Portal</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">2. GST Payments</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">GST payments on the official GST Portal (~1% convenience fee)</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">3. PayZapp Bill Payments</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Utility & other bill payments via HDFC PayZapp (except: Clubs, Housing, Rent, Hospital, Education, Donation, Mutual Funds, Loans, Credit Card payments & Wallet Load)</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">4. SmartPay Bill Payments</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Utility bills set up on auto-debit (SmartPay)</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">5. Business Payments via Nuclei</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Other business spends through Nuclei payment gateway</p>
      </div>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">5X Rewards Caps & Restrictions</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/40 dark:to-red-900/40 border-b-2 border-orange-300 dark:border-orange-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Restriction</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Minimum Spend</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹50,000 per statement cycle (all spends combined)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">5X Cap Per Month</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">7,500 RP per statement cycle (~₹56,250 equivalent)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Beyond Cap</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1X rate applies on remaining spend (uncapped)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Total Earning Cap</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1.5L RP per statement cycle maximum</td>
          </tr>
          <tr class="hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Monthly Redemption</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">75,000 points per calendar month</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Milestone Rewards</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/40 dark:to-teal-900/40 border-b-2 border-green-300 dark:border-green-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Annual Spend Milestone</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Reward</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">₹5 Lakhs</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹5,000 Voucher</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1%</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">₹10 Lakhs</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹5,000 Voucher</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1%</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">₹15 Lakhs</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹5,000 Voucher</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1%</td>
          </tr>
          <tr class="hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">₹20 Lakhs</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">₹5,000 Voucher</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">1%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="text-sm text-slate-700 dark:text-slate-300">
        <span class="font-semibold text-slate-900 dark:text-white">Voucher Options:</span> SmartBuy Flight Vouchers, Taj Stay Vouchers, MMT Vouchers, or ITC Vouchers. Get up to ₹20,000 in vouchers per calendar year. Combined reward rate: up to 4.3% (3.3% base + 1% milestone).
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Travel & Lifestyle Benefits</h3>
    
    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Airport Lounge Access</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border-b-2 border-indigo-300 dark:border-indigo-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Lounge Type</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Network</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Access</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Card Requirement</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Domestic Lounge</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Diners Club</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Unlimited</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Must be active (monthly usage)</td>
          </tr>
          <tr class="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">International Lounge</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Diners Club</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Unlimited</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">All add-on card members get access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Golf Benefits</h4>
    <div class="p-5 bg-gradient-to-br from-lime-50 via-green-50 to-lime-50 dark:from-lime-900/20 dark:via-green-900/15 dark:to-lime-900/20 rounded-lg border-l-4 border-lime-500 dark:border-lime-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
        <li>✓ <span class="font-semibold">Complimentary Games:</span> 6 per Quarter (24 per year)</li>
        <li>✓ <span class="font-semibold">Domestic Golf Courses:</span> 20 courses in the network</li>
        <li>✓ <span class="font-semibold">International Golf Courses:</span> 140 courses globally</li>
        <li>⚠️ <span class="font-semibold">Note:</span> Golf lessons are NOT included (unlike some other premium cards)</li>
      </ul>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">55-Day Extended Credit Period</h4>
    <div class="p-5 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 dark:from-cyan-900/20 dark:via-blue-900/15 dark:to-cyan-900/20 rounded-lg border-l-4 border-cyan-500 dark:border-cyan-400/50 mb-6">
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The card comes with a <strong>55-day interest-free credit period</strong>, which is approximately 2+ weeks longer than standard personal credit cards. This is highly advantageous for cash flow management for business owners.
      </p>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Restrictions on Rewards</h3>
    
    <div class="space-y-3 mb-6">
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg">
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-white">Redemption Cap:</span> 70% from points, 30% must be paid by card
        </p>
      </div>
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg">
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-white">Category Caps:</span> Insurance 5,000 RP/day, Grocery 2,000 RP per month
        </p>
      </div>
      <div class="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-lg">
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <span class="font-semibold text-slate-900 dark:text-white">Total Earning Cap:</span> Maximum 1.5L RP per statement cycle can be earned
        </p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">International Spends & Forex</h3>
    
    <div class="p-5 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-red-900/20 dark:via-orange-900/15 dark:to-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
        <li><span class="font-semibold">Forex Markup Fee:</span> 2% + GST (2.2% total)</li>
        <li><span class="font-semibold">Base Rewards:</span> 3.3% + 1% (milestone) = 4.3%</li>
        <li><span class="font-semibold">Net Gain:</span> 4.3% - 2.2% = 2% gain on international spends</li>
        <li><span class="font-semibold">Platform:</span> Diners Club (generally good international acceptance, but smaller merchants may be an issue)</li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Devaluation Risk Assessment</h3>
    
    <div class="p-5 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 dark:from-yellow-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 rounded-lg border-l-4 border-yellow-600 dark:border-yellow-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ Devaluation Meter: HIGH (1 year)</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
        <li>• <strong>5X bonus points on PayZapp</strong> may face a "correction" (increase in minimum spend threshold)</li>
        <li>• Recent limit increases suggest possible future modifications</li>
        <li>• Base 3.3% rewards structure appears stable with capping in place</li>
        <li>• Tax payment benefits are fundamental to the card's value proposition</li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Eligibility & Application</h3>
    
    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Who Can Get This Card?</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <thead class="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 border-b-2 border-blue-300 dark:border-blue-700/50">
          <tr>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Eligibility Path</th>
            <th class="px-4 py-3 text-left font-serif font-bold text-slate-900 dark:text-white">Requirements</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Fresh Applications</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">ITR > ₹21 Lakhs p.a. (recent rule: > ₹30 Lakhs business income)</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Existing HDFC CC</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Credit limit > ₹6 Lakhs</td>
          </tr>
          <tr class="border-b border-slate-200 dark:border-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Documents Required</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">GST Returns, Bank statements, etc.</td>
          </tr>
          <tr class="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            <td class="px-4 py-3 font-semibold text-slate-900 dark:text-white">Business Types</td>
            <td class="px-4 py-3 text-slate-700 dark:text-slate-300">Sole proprietors, Partnerships, Pvt Ltd (all accepted)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">How to Apply?</h4>
    <div class="space-y-3 mb-6">
      <div class="p-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-lg border-l-4 border-teal-500 dark:border-teal-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Online Application</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Apply directly through HDFC website with ITR & business documents</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-lg border-l-4 border-teal-500 dark:border-teal-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Branch Application</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Apply offline at HDFC branch if online shows ineligibility</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-lg border-l-4 border-teal-500 dark:border-teal-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Upgrade/Floater</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Most often issued as FYF (First Year Free) on upgrade from another HDFC card</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Real User Experience</h3>
    
    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Advantages</h4>
    <div class="space-y-2 mb-6">
      <div class="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>5X rewards on tax/GST</strong> is the first-of-its-kind in the country</p>
      </div>
      <div class="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Outstanding value</strong> for business owners paying ₹50K+ monthly in taxes</p>
      </div>
      <div class="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>55-day credit period</strong> is superior for cash flow management</p>
      </div>
      <div class="p-3 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Unlimited lounge access</strong> for all card members</p>
      </div>
    </div>

    <h4 class="text-xl font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Disadvantages</h4>
    <div class="space-y-2 mb-6">
      <div class="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Diners Club acceptance issues</strong> at smaller merchants in some regions</p>
      </div>
      <div class="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>GST credit card payment</strong> not enabled in all states yet</p>
      </div>
      <div class="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>High devaluation risk</strong> for 5X rewards on PayZapp</p>
      </div>
      <div class="p-3 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400/50 rounded">
        <p class="text-sm text-slate-700 dark:text-slate-300"><strong>Tax payment convenience fee</strong> (~0.70-1%) reduces effective returns</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-2xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐⭐ Rating: 5/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        HDFC BizBlack Credit Card is a heavily loaded card with sufficient options under 5X rewards to help you save significant money on business spends. In a nutshell, if your business spends are about ₹50,000 per month, you would end up saving ₹1 Lakh per year!
      </p>
    </div>

    <div class="p-5 bg-gradient-to-br from-violet-50 via-indigo-50 to-violet-50 dark:from-violet-900/20 dark:via-indigo-900/15 dark:to-violet-900/20 rounded-lg border-l-4 border-violet-500 dark:border-violet-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-3">💡 Should You Get This Card?</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
        <li><strong>MUST-HAVE:</strong> If you're in business and making ₹50K+ monthly tax/GST payments</li>
        <li><strong>HIGHLY RECOMMENDED:</strong> For any business owner with regular government payments</li>
        <li><strong>PASS:</strong> If you rarely use credit cards or have minimal tax payments</li>
        <li><strong>NOTE:</strong> Diners Club acceptance might be an issue, so use as an additional card</li>
      </ul>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    
    <div class="space-y-3 mb-6">
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="text-sm text-slate-700 dark:text-slate-300"><span class="font-semibold text-slate-900 dark:text-white">1. Industry-First Benefit:</span> 5X on tax/GST is unique to this card globally</p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="text-sm text-slate-700 dark:text-slate-300"><span class="font-semibold text-slate-900 dark:text-white">2. Fee Waiver:</span> Get it free with ₹1.5L spend in 90 days</p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="text-sm text-slate-700 dark:text-slate-300"><span class="font-semibold text-slate-900 dark:text-white">3. Massive Savings:</span> ₹1L+ annually possible with ₹50K monthly tax payments</p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="text-sm text-slate-700 dark:text-slate-300"><span class="font-semibold text-slate-900 dark:text-white">4. Lounge Access:</span> Unlimited for all family members</p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="text-sm text-slate-700 dark:text-slate-300"><span class="font-semibold text-slate-900 dark:text-white">5. Milestone Rewards:</span> Up to ₹20K in annual vouchers</p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="text-sm text-slate-700 dark:text-slate-300"><span class="font-semibold text-slate-900 dark:text-white">6. Extended Credit:</span> 55-day interest-free period</p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50">
        <p class="text-sm text-slate-700 dark:text-slate-300"><span class="font-semibold text-slate-900 dark:text-white">7. Devaluation Risk:</span> PayZapp 5X may face corrections soon</p>
      </div>
    </div>

    <h3 class="text-2xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
    
    <div class="space-y-4 mb-6">
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">What's the convenience fee for tax payments?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Income tax: ~0.70-0.72%, GST: ~1%, but rewards still outpace these fees significantly.</p>
      </div>
      
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Can I hold both BizBlack and Diners Black?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, you can have both as separate cards or BizBlack as a floater card.</p>
      </div>
      
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">When are 5X rewards credited?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">4X bonus points are credited 3-4 days after statement generation.</p>
      </div>
      
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Is GST payment credit card option available in my state?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Currently enabled in: Assam, Delhi, Goa, Gujarat, Haryana, Himachal Pradesh, Kerala, Madhya Pradesh, Maharashtra, Odisha, Jharkhand, Karnataka, Rajasthan, Tripura. More states coming soon.</p>
      </div>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information based on CardExpert Review | Benefits subject to change by HDFC Bank
    </p>
  \`,
};


## Base Rewards Structure

| Category | Rate | Points Per ₹150 | Effective Return |
|----------|------|-----------------|-----------------|
| Regular Spends | 1X | 5 RP | 3.3% |
| Accelerated (5X) | 5X | 25 RP | 16.5% |

<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 dark:from-purple-700 dark:to-pink-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Regular Rewards</h3>
    <ul class="space-y-2 text-sm">
      <li>✓ <strong>3.3% on regular spends</strong> - Flight/Hotel redemptions</li>
      <li>✓ Reward points valid for 3 years</li>
      <li>✓ Amazon Pay Voucher available at 0.70 INR per point</li>
      <li>⚠️ Excluded: Insurance, Utilities, Fuel</li>
    </ul>
  </div>
</div>

## 5X Rewards - The Game Changer

This is the USP of the BizBlack card. You get **5X bonus points** on specific business spends:

<div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 mb-6 dark:from-blue-700 dark:to-cyan-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">5X Reward Points Categories</h3>
    <div class="space-y-3">
      <div>
        <h4 class="font-semibold">1. Income Tax Payments</h4>
        <p class="text-sm">On Income Tax portal - Advance Tax & TDS</p>
      </div>
      <div>
        <h4 class="font-semibold">2. GST Payments</h4>
        <p class="text-sm">Direct on GST portal (1% convenience fee applies)</p>
      </div>
      <div>
        <h4 class="font-semibold">3. PayZapp Bill Payments</h4>
        <p class="text-sm">Utility & other bill payments via HDFC PayZapp app</p>
      </div>
      <div>
        <h4 class="font-semibold">4. SmartPay Auto-Debit</h4>
        <p class="text-sm">Utility bills set up on auto-debit</p>
      </div>
      <div>
        <h4 class="font-semibold">5. Business Payments</h4>
        <p class="text-sm">Other business spends via Nuclei payment gateway</p>
      </div>
    </div>
  </div>
</div>

**Effective Reward Rate with 5X:** 16.5% (or 3.3% after deducting 1% convenience fee on certain payments)

### 5X Rewards Caps

| Aspect | Limit |
|--------|-------|
| Minimum Spend | ₹50,000 per statement cycle |
| Monthly Cap | 7,500 RP per statement cycle (~₹56,250 equivalent) |
| Earnings Beyond Cap | 1X rate applies (uncapped) |

### Income Tax Calculation Example

**Monthly Tax Payment: ₹50,000**
- 5X Rewards: 7,500 RP (capped)
- 1X on remaining spend: Regular points
- Convenience Fee: ~0.72% + GST
- **Net Effective Return: ~2.3% after fees (still excellent)**

## Milestone Rewards - Additional Benefits

<div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 mb-6 dark:from-green-700 dark:to-teal-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Annual Milestone Benefits</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹5 Lakhs</strong></td>
          <td class="py-2">₹5,000 voucher (1%)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹10 Lakhs</strong></td>
          <td class="py-2">₹5,000 voucher (1%)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹15 Lakhs</strong></td>
          <td class="py-2">₹5,000 voucher (1%)</td>
        </tr>
        <tr>
          <td class="py-2"><strong>₹20 Lakhs</strong></td>
          <td class="py-2">₹5,000 voucher (1%)</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-3 text-xs">Options: SmartBuy Flight/Taj Stay vouchers</p>
  </div>
</div>

**Combined Reward Rate:** Up to 4.3% (3.3% base + 1% milestone) when you hit ₹20L annual spend.

## Lounge & Lifestyle Benefits

### Airport Lounge Access

| Access Type | Details |
|-------------|---------|
| Domestic Lounge | Diners Club - Unlimited |
| International Lounge | Diners Club - Unlimited |
| Card Requirement | Must be active (monthly usage) |
| Add-on Cards | Full access for all card members |

### Golf Privileges

- **6 Complimentary Games per Quarter** (24 per year)
- **20 Domestic Golf Courses**
- **140 International Golf Courses**
- Note: Lessons not included (unlike premium cards)

### 55-Day Credit Period

The card comes with an extended 55-day credit period, which is 2+ weeks longer than standard personal credit cards.

## Restrictions on Rewards

<div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-6 dark:from-orange-700 dark:to-red-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Important Caps & Restrictions</h3>
    <ul class="space-y-2 text-sm">
      <li>📊 <strong>Redemption Cap:</strong> 70% from points, 30% must pay by card</li>
      <li>📋 <strong>Category Caps:</strong> Insurance 5,000 RP/day, Grocery 2,000 RP/month</li>
      <li>📈 <strong>Total Earning Cap:</strong> 1.5L RP per statement cycle</li>
      <li>💳 <strong>Monthly Redemption:</strong> Max 75,000 points per calendar month</li>
    </ul>
  </div>
</div>

## Forex Markup & International Benefits

- **Forex Markup Fee:** 2%+GST
- **Diners Club Platform:** Generally has good international acceptance
- **Concern:** Diners acceptance can be an issue at smaller merchants in some countries

## Devaluation Meter

⚠️ **Risk: MEDIUM**

**Observations:**
- 5X bonus points on PayZapp may face "correction" (increase in minimum spend threshold)
- Recent limit increases on 5X rewards cap suggest possible future modifications
- Base rewards structure appears more stable with capping in place

Despite the risk, the card's value proposition remains strong due to the tax payment benefits.

## Is the BizBlack Card Really Free?

<div class="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 mb-6 dark:from-indigo-700 dark:to-purple-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Cost Analysis for New Applicants</h3>
    <p class="mb-3"><strong>Scenario: ₹50K/month Tax Payment + Other Spends</strong></p>
    <ul class="space-y-2 text-sm">
      <li>✓ Joining Fee Waiver: ₹1.5L in 90 days (easily achievable with tax payments)</li>
      <li>✓ Welcome Gift: ₹5,000 Taj Voucher + Club Marriott</li>
      <li>✓ Year 1 Tax Benefits: 5X on ₹50K/month = ₹36,000+ in rewards value</li>
      <li>✓ <strong>Effectively FREE for first year, with profit of ₹20K+</strong></li>
    </ul>
  </div>
</div>

## Eligibility & Application

### Eligibility Criteria

| Requirement | Details |
|-------------|---------|
| ITR (Fresh) | ₹21+ Lakhs p.a. |
| Existing HDFC CC | Credit limit >₹6 Lakhs |
| Documents | GST Returns, Bank statements, etc. |
| Business Type | Sole proprietors, Partnerships, Pvt Ltd (all accepted) |

### How to Apply

1. **Online/Branch:** Apply directly with ITR & business documents
2. **Existing HDFC Customer:** Upgrade request to RM
3. **Card-on-Card Basis:** If you have ₹6L+ limit on another HDFC card

## Real User Experience

### Positive Aspects
- Outstanding value for business owners making regular tax payments
- The 5X rewards on GST/IT is a genuine game-changer
- 55-day credit period is advantageous for cash flow
- Unlimited lounge access for all card members
- Marriott membership included

### Areas of Concern
- Diners Club platform has acceptance issues in some regions
- Payza transactions require specific setup (not all states enabled yet)
- Customer service inconsistency (as with most HDFC cards)
- Fee payable upfront (though waivable with spend)

## The Verdict

<div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
  <div class="text-white">
    <h3 class="text-2xl font-bold mb-2">CardExpert Rating: 5/5</h3>
    <p class="text-sm">HDFC Bank BizBlack Credit Card is a heavily loaded business card with sufficient options to deliver exceptional value for business owners making regular tax and bill payments.</p>
  </div>
</div>

**The Verdict:** 
If your business spends are ₹50,000+ per month on taxes, GST, and payables, the HDFC BizBlack is a MUST-HAVE card. The 5X rewards on tax payments is industry-first and can save you significantly. Even for smaller business owners, the card justifies its cost through milestone benefits and lounge access. The only deterrent is Diners Club acceptance in certain categories, but for business-focused spending, it's minimal concern.

## Key Takeaways

1. **Tax Payment Rewards:** 5X on IT/GST is industry-first benefit (16.5% effective)
2. **Joining Fee Waiver:** Easy to achieve with ₹1.5L spend in 90 days
3. **Annual Savings:** Up to ₹1L saved annually with proper spend management
4. **Renewal Value:** Fee waiver at ₹7.5L spend makes it LTF for high spenders
5. **Lounge Access:** Unlimited for all card members and add-ons
6. **Milestone Benefits:** Up to ₹20K in annual vouchers based on spend
7. **Credit Period:** 55-day interest-free period benefits cash flow

## Frequently Asked Questions

**Q: Can self-employed professionals get this card?**
A: Yes, with ITR showing income >₹21L p.a. or existing HDFC CC limit >₹6L.

**Q: Are GST payments included in the 5X rewards?**
A: Yes, directly on GST portal. A 1% convenience fee applies but rewards still outpace it.

**Q: Does this card have a corporate variant?**
A: No, this is on personal liability. Corporate variant isn't available yet.

**Q: What if I can't hit ₹7.5L for renewal fee waiver?**
A: You can request retention benefit from customer care, though results vary.

**Q: Can I hold both BizBlack and Diners Black?**
A: Yes, you can have both as separate cards from HDFC.

**Q: Is Diners Club acceptance an issue for business payments?**
A: For tax portal & PayZapp payments, not at all. For merchant payments, acceptance is good in metro cities.

---

*Last Updated: December 2025*
*Information accurate as of review date. Benefits subject to change by HDFC Bank.*
`},ag={id:"rbl-world-safari",title:"RBL Bank World Safari Credit Card Review",excerpt:"Travel Credit Card with 0% forex markup - Best for international travelers",readTime:"13 min read",imageUrl:"/trezzoapp/images/credit-cards/world-safari-mk.png",date:"2025-12-11",tags:["credit-card","rbl","travel","forex"],content:`
# RBL World Safari Credit Card: International Traveler's Guide

RBL Bank's World Safari Credit Card is India's first mainstream retail travel card offering 0% forex markup fees on international transactions. For international travelers making multiple trips annually, this card delivers exceptional value combined with comprehensive travel insurance coverage accepted by embassies worldwide.

## Overview

| Attribute | Details |
|-----------|---------|
| Card Type | Travel Credit Card |
| Reward Rate | 0.5% – 2.5% |
| Best For | International & travel spends |
| Annual Fee | ₹3,000 + GST |
| USP | 0% Forex Markup & Travel Insurance |
| Network | Mastercard |

The RBL World Safari stands out as one of the first mainstream travel cards in India to offer 0% markup on foreign transactions, making it ideal for frequent international travelers.

## Fee Structure & Welcome Benefits

<div class="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-6 mb-6 dark:from-emerald-700 dark:to-blue-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Joining & Annual Fees</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Joining Fee</strong></td>
          <td class="py-2">₹3,000 + GST</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Welcome Benefit</strong></td>
          <td class="py-2">₹3,000 MMT Voucher</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Annual Fee</strong></td>
          <td class="py-2">₹3,000 + GST</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Renewal Benefit</strong></td>
          <td class="py-2">None (unless requested)</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Fee Waiver</strong></td>
          <td class="py-2">On request, based on profile/spends</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

**Key Insight:** The ₹3,000 joining fee is offset by the ₹3,000 MMT (MakeMyTrip) voucher, making the card effectively free for the first year.

## The Game-Changer: 0% Forex Markup

<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 dark:from-purple-700 dark:to-pink-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Zero Markup Advantage</h3>
    <div class="space-y-3 text-sm">
      <p><strong>Standard Travel Cards:</strong> 1.99% - 2% forex markup + GST</p>
      <p><strong>RBL World Safari:</strong> <strong>0% markup fees</strong> (no hidden charges)</p>
      <p class="text-xs pt-2">💡 Note: NO rewards on international transactions (trade-off for zero markup)</p>
    </div>
  </div>
</div>

This is the card's primary USP. While you don't earn reward points on international spends, you save significantly on forex markup costs.

## Rewards Structure for Domestic Spends

| Category | Rate | Effective Return |
|----------|------|-----------------|
| Travel Spends (Domestic) | 5 RP per ₹100 | ~1.25% |
| Non-Travel Spends | 2 RP per ₹100 | ~0.50% |
| 1 RP Value | ~₹0.25 | Varies with redemption |
| Points Validity | 2 years | Standard |

<div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 mb-6 dark:from-blue-700 dark:to-cyan-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Travel Spend Definition</h3>
    <p class="text-sm mb-3">Travel spends include:</p>
    <ul class="space-y-1 text-sm">
      <li>✓ Flights & Airfare (domestic & international)</li>
      <li>✓ Hotel bookings & stays</li>
      <li>✓ Travel packages & tours</li>
      <li>✓ Railway bookings</li>
      <li>✓ Bus & vehicle rentals</li>
    </ul>
  </div>
</div>

## Milestone Rewards - The Real Value Driver

<div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 mb-6 dark:from-green-700 dark:to-teal-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Annual Milestone Benefits</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹2.5 Lakhs</strong></td>
          <td class="py-2">10,000 Points (~₹2,500)</td>
          <td class="py-2">1% return</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹5 Lakhs</strong></td>
          <td class="py-2">15,000 Points (~₹3,750)</td>
          <td class="py-2">1.2% return</td>
        </tr>
        <tr>
          <td class="py-2"><strong>₹7.5 Lakhs</strong></td>
          <td class="py-2">10,000 eVoucher (~₹2,500)</td>
          <td class="py-2">2% return</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

**Voucher Options:** Taj experiences, Amazon, Croma, Myntra & MakeMyTrip

On ₹7.5L annual spend, you achieve a 2% overall return rate, which combined with 0% forex markup makes this an excellent card for travelers.

## Comprehensive Travel Insurance

<div class="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 mb-6 dark:from-indigo-700 dark:to-purple-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">International Travel Medical Insurance</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Policy Provider</strong></td>
          <td class="py-2">Care Insurance (Group Policy)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Coverage Period</strong></td>
          <td class="py-2">1 year (multi-trip)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Geographic Coverage</strong></td>
          <td class="py-2">Worldwide (except country of residence)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Max Trip Duration</strong></td>
          <td class="py-2">30 days per trip</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Emergency Medical</strong></td>
          <td class="py-2">$50,000 USD coverage</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Visa Acceptance</strong></td>
          <td class="py-2">Accepted by most embassies worldwide</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

### Travel Insurance Coverage Includes

- Personal Liability coverage
- Trip Delay/Cancellation
- Baggage Loss & Delay
- Loss of Passport
- Dental Treatment (emergency)
- Hospitalization & Medical expenses
- Flight Accident coverage

**Policy Issuance Timeline:** Within 1 week of card issuance after verification

**Estimated Value:** ₹7,000+ (mandatory for many visa applications)

## Lounge & Lifestyle Benefits

### Airport Lounge Access

| Access Type | Details | Frequency |
|-------------|---------|-----------|
| Domestic Lounge | Visa/Mastercard | 2 per quarter |
| International Lounge | Priority Pass | 2 per year |
| Spend Bonus | +1 Int'l visit per ₹50K/quarter spend | Variable |

<div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-6 dark:from-orange-700 dark:to-red-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Lounge Access Insight</h3>
    <p class="text-sm">The lounge access is modest (2 per quarter domestic) but still valuable. The spend-linked bonus can increase international visits if you meet spending targets.</p>
  </div>
</div>

### Golf Privileges

- **4 Complimentary Golf Games per Year** (max 1 per month)
- **12 Complimentary Golf Lessons per Year** (1 per month)
- Mastercard World benefit coverage

## Complete Rewards Analysis

### Best Case Scenario: ₹7.5L Annual Spend

**Composition:** 60% travel + 40% non-travel

- Base Travel Rewards: ₹2,500 (~1.25%)
- Base Non-Travel: ₹1,000 (~0.50%)
- Milestone Bonus: ₹2,500 (at ₹7.5L)
- **Total Annual Return: ₹6,000 (approximately 2% effective)**

### With 0% Forex Markup

- Domestic Savings: ~₹3,000
- International Forex Savings: ~₹2,000-5,000 (depending on international spend)
- **Total Value (Domestic + International): ₹9,000-11,000**

## Card Design & Specifications

<div class="bg-gradient-to-r from-teal-500 to-green-500 rounded-lg p-6 mb-6 dark:from-teal-700 dark:to-green-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Card Features</h3>
    <ul class="space-y-2 text-sm">
      <li>✓ Mastercard Network (excellent global acceptance)</li>
      <li>✓ Chip & PIN technology for online/offline security</li>
      <li>✓ Contactless payment enabled</li>
      <li>✓ International acceptance without issues</li>
    </ul>
  </div>
</div>

## Eligibility & Application

### Who Can Apply

| Criteria | Details |
|----------|---------|
| Salaried/Self-employed | Both eligible |
| Income Requirement | Generally ₹25L+ p.a. |
| Existing RBL Cards | Can apply for upgrade/replacement |
| CIBIL Score | 750+ preferred |
| Credit Card History | Helps with approval |

### Application Process

1. **Online Application:** Via RBL website
2. **Branch:** In-person application
3. **Card-on-Card:** If you have another RBL card with good credit limit

## Who Should Get This Card?

<div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Ideal Profile</h3>
    <ul class="space-y-2 text-sm">
      <li>✅ International travelers (2-3+ trips/year)</li>
      <li>✅ Business travelers with forex spends</li>
      <li>✅ Digital nomads & expat workers</li>
      <li>✅ Those planning Schengen/Euro visa soon</li>
      <li>✅ Annual spends ₹7.5L+ for fee waiver</li>
    </ul>
  </div>
</div>

## Potential Concerns

⚠️ **Areas to Watch:**

1. **Customer Support:** RBL's customer service can be inconsistent
2. **Limited Lounge Access:** 2 per quarter domestic is lower than competitors
3. **Travel Insurance Renewal:** Auto-renewal can sometimes be unclear
4. **Fee Waiver Conditions:** Less flexible than some competitors
5. **Rewards Redemption:** Points value varies (₹0.25/point is moderate)

## Comparison with Competitors

**vs. HDFC Infinia:** Infinia wins on base rewards but World Safari wins on 0% forex

**vs. Axis Burgundy Private:** Similar forex benefit, but Burgundy is invite-only

**vs. SBI Elite Travel:** World Safari offers better forex markup (0% vs 1.99%)

## The Verdict

<div class="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-6 mb-6 dark:from-pink-700 dark:to-red-700">
  <div class="text-white">
    <h3 class="text-2xl font-bold mb-2">CardExpert Rating: 4.3/5</h3>
    <p class="text-sm">RBL World Safari Credit Card is an excellent option for international travelers with a compelling value proposition combining 0% forex markup with comprehensive travel insurance.</p>
  </div>
</div>

**Verdict:** If you travel internationally 2-3 times annually and value forex savings, the World Safari is worth serious consideration. The 0% markup combined with travel insurance (valued at ₹7K+) and milestone benefits make it a strong investment. However, the modest lounge access and RBL's customer service reputation are the main drawbacks. For international travelers who don't have access to super premium cards like Infinia, this is one of the best options available.

## Key Takeaways

1. **0% Forex Markup:** No hidden markup charges on international transactions
2. **Travel Insurance:** Accepted by embassies, valued at ₹7,000+
3. **Affordable Fee:** ₹3,000 offset by welcome voucher (effectively free year 1)
4. **Milestone Benefits:** Up to 2% return at ₹7.5L annual spend
5. **Mastercard Network:** Better acceptance than some competitors
6. **Fee Waiver:** On retention request based on profile (not guaranteed)
7. **Insurance Value:** Crucial for visa applications to EU countries

## Frequently Asked Questions

**Q: Does the 0% markup apply to all international transactions?**
A: Yes, except ATM withdrawals which incur standard charges. Also, no rewards on international spends.

**Q: Is the travel insurance automatically activated?**
A: Yes, it's activated upon card issuance. You'll receive policy documents within a week.

**Q: Can I use this for Schengen visa applications?**
A: Yes, the travel insurance is accepted by most embassies worldwide for visa applications.

**Q: What's the Priority Pass validity?**
A: 1 year from card issuance. Renewal requires paying additional fees (check with bank).

**Q: Is there a better alternative for high spenders?**
A: If you spend ₹20L+, HDFC Infinia or Axis Magnus offer better total value despite higher fees.

**Q: Can I get fee waived on renewal?**
A: Possible through retention offers if you request, but not automatic. Depends on relationship status.

**Q: Are salary account customers prioritized?**
A: Yes, RBL salary account holders get easier approvals and sometimes better offers.

---

*Last Updated: December 2025*
*Information accurate as of review date. Benefits subject to RBL's Terms & Conditions.*
`},lg={id:"hdfc-marriott-bonvoy",title:"HDFC Bank Marriott Bonvoy Credit Card Review",excerpt:"Co-brand Travel Card with Free Night Awards - Best for Marriott loyalists",readTime:"14 min read",imageUrl:"/trezzoapp/images/credit-cards/mb-mk.png",date:"2025-12-11",tags:["credit-card","hdfc","marriott","travel"],content:`
# HDFC Bank Marriott Bonvoy Credit Card: Premium Hotel Card Review

The HDFC Bank Marriott Bonvoy Credit Card is a premium co-branded travel card launched as a collaboration between HDFC Bank, Marriott International, and Diners Club. It's designed for hotel aficionados who want to accumulate Marriott Bonvoy points and enjoy premium hotel experiences with generous welcome/renewal benefits.

## Overview

| Attribute | Details |
|-----------|---------|
| Card Type | Co-brand Travel Credit Card |
| Reward Rate | ~2% effective |
| Annual Fee | ₹3,000 + GST |
| Best For | Marriott hotel stays & Bonvoy points |
| USP | Free Night Awards + Elite Status |
| Network | Diners Club |

The card is positioned as a semi-premium offering that bridges entry-level and super-premium hotel loyalty cards, making Marriott Bonvoy accessible to a broader audience.

## Fee Structure & Welcome Benefits

<div class="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-6 mb-6 dark:from-emerald-700 dark:to-blue-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Joining & Annual Fees</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Joining Fee</strong></td>
          <td class="py-2">₹3,000 + GST (₹3,540 total)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Welcome Benefit</strong></td>
          <td class="py-2">1 Free Night Award (up to 15,000 pts)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Annual Fee</strong></td>
          <td class="py-2">₹3,000 + GST</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Renewal Benefit</strong></td>
          <td class="py-2">1 Free Night Award (up to 15,000 pts)</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Fee Waiver</strong></td>
          <td class="py-2">Not automatic; request retention</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

**Key Insight:** The Free Night Award (FNA) is valued at ₹7,500+ minimum, easily offsetting the annual fee.

## Rewards Structure

| Category | Rate | Effective Return |
|----------|------|-----------------|
| Regular Spends | 2 points per ₹150 | 0.66% |
| Travel/Dining/Entertainment | 4 points per ₹150 | 1.33% |
| Marriott Hotels | 8 points per ₹150 | 2.66% |

<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 dark:from-purple-700 dark:to-pink-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Reward Points Calculation</h3>
    <p class="text-sm mb-3">Point Value: <strong>1 Marriott Bonvoy Point = ₹0.50</strong> (approximately)</p>
    <ul class="space-y-1 text-sm">
      <li>• Can vary from ₹0.30 to ₹1.00 based on property & booking</li>
      <li>• Excluded: Fuel, Wallet loads, Government spends, EMI, Rent</li>
      <li>• 12-week transfer delay to Marriott account</li>
    </ul>
  </div>
</div>

### Important Notes on Rewards

**Points Transfer Delay:** The 12-week (3-month) wait for points to transfer to Marriott Bonvoy is a significant drawback compared to instant transfers on other hotel cards.

**Reward Rate Concern:** Even at Marriott hotels, the 2.66% effective rate is lower than what you'd get on travel cards like Axis Magnus or Amex MRCC.

## The Real Value: Free Night Awards (FNA)

<div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 mb-6 dark:from-blue-700 dark:to-cyan-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Free Night Award Benefits</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>FNA Value</strong></td>
          <td class="py-2">Up to 15,000 Bonvoy Points</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Frequency</strong></td>
          <td class="py-2">On welcome + renewal</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Flexibility</strong></td>
          <td class="py-2">Use remaining points to upgrade</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Fulfillment</strong></td>
          <td class="py-2">12 weeks after fee clearance</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Validity</strong></td>
          <td class="py-2">1 year from issuance</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

**FNA Usage Strategy:** You can combine FNA with your own points. For a 20,000-point property, use 1 FNA (15,000 pts) + 5,000 points from your account.

## Milestone Benefits - Additional Value

<div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 mb-6 dark:from-green-700 dark:to-teal-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Annual Milestone Rewards</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹6 Lakhs</strong></td>
          <td class="py-2">1 Free Night (1.2% return)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹9 Lakhs</strong></td>
          <td class="py-2">1 Free Night (1.7% cumulative)</td>
        </tr>
        <tr>
          <td class="py-2"><strong>₹15 Lakhs</strong></td>
          <td class="py-2">1 Free Night (1.5% total return)</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-2 text-xs">Even with milestones, max combined reward rate is ~2%, which is lower than comparable travel cards</p>
  </div>
</div>

## Elite Status Benefits

### Silver Elite Status (Complimentary)

- **10 Elite Night Credits:** Count toward Marriott Bonvoy tier (like staying 10 nights)
- **Priority Late Checkout**
- **10% Bonus Points** on all Marriott stays

This is valuable as it helps you reach Gold Elite status faster, unlocking better benefits.

## Lounge Access Benefits

<div class="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 mb-6 dark:from-indigo-700 dark:to-purple-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Airport Lounge Access</h3>
    <ul class="space-y-2 text-sm">
      <li>✓ <strong>12 Domestic Lounge Visits per Year</strong> (no quarterly cap)</li>
      <li>✓ <strong>12 International Lounge Visits per Year</strong> (via Priority Pass)</li>
      <li>✓ Direct card access for lounge entry (Diners Club network)</li>
      <li>✓ Add-on cardholders also eligible for same benefits</li>
    </ul>
  </div>
</div>

The 12 visits annually with no quarterly cap is a significant advantage compared to cards that limit access per quarter.

## Golf Privilege

- **2 Complimentary Golf Games per Quarter** (8 per year)
- **2 Complimentary Golf Lessons per Quarter** (8 per year)
- Booked through HDFC Bank's golf program

## Card Design & Presentation

<div class="bg-gradient-to-r from-pink-500 to-red-500 rounded-lg p-6 mb-6 dark:from-pink-700 dark:to-red-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Design Excellence</h3>
    <p class="text-sm">The Marriott Bonvoy card features premium aesthetics with sophisticated co-branding. The design quality is among the best from HDFC, with excellent font and logo placement. Not metallic but feels genuinely premium.</p>
  </div>
</div>

## The Main Concerns

<div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-6 dark:from-orange-700 dark:to-red-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Key Drawbacks</h3>
    <ul class="space-y-2 text-sm">
      <li>⚠️ <strong>Poor Ongoing Rewards:</strong> 2% effective even at Marriott hotels</li>
      <li>⚠️ <strong>3-Month Point Delay:</strong> 12 weeks for Bonvoy account transfer</li>
      <li>⚠️ <strong>Diners Club Issues:</strong> Acceptance problems at some merchants</li>
      <li>⚠️ <strong>Processing Delays:</strong> Welcome benefits take 60+ days to credit</li>
      <li>⚠️ <strong>No Fee Waiver:</strong> Annual fee is mandatory; no automatic waiver</li>
    </ul>
  </div>
</div>

## Eligibility & Application

### Application Methods

1. **Marriott Website:** Direct application
2. **HDFC Bank Website:** Apply alongside authentication
3. **Branch/RM Request:** If you're an existing HDFC customer

### Who Gets Approved

- Existing HDFC credit card holders with good standing
- Salaried professionals with stable income
- Self-employed with good ITR
- Membership in Marriott Bonvoy program helps

## Onboarding Experience

**Timeline:**
- Application to approval: 2-3 days
- Approval to card delivery: 5-7 days
- Fee charging: Usually in 3rd month statement
- FNA credit: 60+ days post-fee payment
- Elite nights credit: Another 30+ days after FNA

The slow processing can be frustrating for those expecting quick benefit fulfillment.

## Who Should Get This Card?

<div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Ideal Candidates</h3>
    <ul class="space-y-2 text-sm">
      <li>✅ Marriott Bonvoy members seeking elite status</li>
      <li>✅ Those 5-10 elite nights away from next tier</li>
      <li>✅ Frequent Marriott hotel users</li>
      <li>✅ Looking for premium hotel lounge access</li>
      <li>✅ Value the welcome/renewal FNA benefits</li>
    </ul>
  </div>
</div>

## The Verdict

<div class="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-6 mb-6 dark:from-pink-700 dark:to-rose-700">
  <div class="text-white">
    <h3 class="text-2xl font-bold mb-2">CardExpert Rating: 4.5/5</h3>
    <p class="text-sm">The HDFC Marriott Bonvoy Credit Card offers excellent value for its welcome/renewal benefits, making it ideal for Marriott loyalists despite the mediocre ongoing rewards.</p>
  </div>
</div>

**The Verdict:** The card's primary value comes from the Free Night Awards and Elite Night Credits, which can be worth ₹10,000-15,000 annually. However, the ongoing rewards are disappointing, and the 3-month point transfer delay is frustrating. This card is best treated as a "benefits card" that you keep active for the FNA rather than using for everyday spend. For serious Marriott loyalists willing to handle the processing delays, it's a solid acquisition. For casual users, skip it.

## Comparison with Competitors

**vs. Amex MRCC:** MRCC offers better ongoing rewards and instant point transfer

**vs. Axis Magnus:** Magnus has higher rewards (4.5-7.5%) but no hotel co-benefits

**vs. ICICI Emeralde:** Emeralde offers better value with instant benefits delivery

## Key Takeaways

1. **Welcome Value:** FNA (15K pts) = ₹7,500+ value, covers fee
2. **Annual Renewal:** Consistent FNA means perpetual value
3. **Elite Nights:** 10 free nights help tier progression
4. **Lounge Access:** 12 domestic + 12 international annually (no quarterly cap)
5. **Processing Delays:** 12 weeks for everything is slow for 2025
6. **Rewards Weakness:** 2% effective rate is too low
7. **Diners Acceptance:** Can be an issue in some categories

## Frequently Asked Questions

**Q: Is the ₹3,000 annual fee worth it?**
A: Yes, due to the FNA value (₹7,500+), but only if you use the free night.

**Q: How long does it take to get benefits?**
A: 60+ days for FNA, 90+ for elite nights - frustratingly slow.

**Q: Can I combine FNA with my Bonvoy points?**
A: Yes, you can top-up remaining points to use a higher-category hotel.

**Q: Does this card help toward lifetime Platinum?**
A: The 10 elite nights and stay nights count, yes.

**Q: Is there a metal version?**
A: Not currently, but if launched, it would likely be worth considering.

**Q: Can I cancel and reapply for another FNA?**
A: Technically yes, but banks track this and may not re-issue quickly.

**Q: What if I don't use the FNA?**
A: It expires after 1 year. Not using it is a waste of ₹7,500+ value.

---

*Last Updated: December 2025*
*Information accurate as of review date. Benefits subject to HDFC Bank's policy changes.*
`},sg={id:"amex-platinum-travel",title:"American Express Platinum Travel Credit Card Review",excerpt:"Travel Credit Card with 8.5% rewards on milestones - Best travel card in India",readTime:"15 min read",imageUrl:"https://www.cardexpert.in/wp-content/uploads/2019/01/amex_platinum_travel_card.jpg",date:"2025-12-11",tags:["credit-card","amex","travel","rewards"],content:`
# American Express Platinum Travel Credit Card: The Ultimate Travel Card Review

The American Express Platinum Travel Credit Card stands as one of India's finest travel credit cards, delivering exceptional value through milestone benefits that can yield up to 8.5% rewards. For travel enthusiasts and those who spend heavily on hotels and flights, this card is an absolute must-have.

## Overview

| Attribute | Details |
|-----------|---------|
| Card Type | Travel Credit Card |
| Reward Rate | 1% – 8.5% (with milestones) |
| Best For | Taj Vouchers & Marriott transfers |
| Annual Fee | ₹5,000 + GST |
| Renewal Fee | ₹5,000 + GST |
| USP | Milestone benefits (highest in India) |
| Network | American Express |

The card has held the "best travel credit card" title for nearly a decade, making it the gold standard for Indian travelers.

## Fee Structure & Welcome Benefits

<div class="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-6 mb-6 dark:from-emerald-700 dark:to-blue-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Fees & Benefits</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Joining Fee</strong></td>
          <td class="py-2">₹5,000 + GST (₹5,900 total)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Welcome Benefit</strong></td>
          <td class="py-2">10,000 MR Points (~₹2,500-5,000 value)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Renewal Fee</strong></td>
          <td class="py-2">₹5,000 + GST</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Renewal Benefit</strong></td>
          <td class="py-2">Nil (but retention benefits available)</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Fee Waiver</strong></td>
          <td class="py-2">On ₹7L+ annual spending</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

**Important Note:** This is the Platinum Travel card, NOT the Platinum Charge card (which costs ₹77,880 annually).

## Base Rewards Structure

| Category | Rate | Effective Return |
|----------|------|-----------------|
| Regular Spends | 1 MR per ₹50 | 0.50% (~1%)* |
| Taj Vouchers | 1 MR per ₹50 | 1% (direct redemption) |
| Marriott Transfers | 1 MR per ₹50 | 1.5-2% (variable) |

*Assuming 2% value per point

<div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 dark:from-purple-700 dark:to-pink-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Rewards Key Points</h3>
    <ul class="space-y-2 text-sm">
      <li>✓ <strong>1 MR point per ₹50</strong> on regular spends</li>
      <li>✓ <strong>Points don't expire</strong> - lifetime validity</li>
      <li>⚠️ <strong>Excluded Spends:</strong> Insurance, Utilities, Fuel</li>
      <li>⚠️ <strong>Can't pool with other Amex cards</strong> - separate account</li>
      <li>✓ <strong>Need to call for bonus points</strong> after milestones (quirk of Amex)</li>
    </ul>
  </div>
</div>

## The Game-Changer: Milestone Benefits

The real value of this card comes from its milestone benefits. These are the highest in the Indian credit card market:

<div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 mb-6 dark:from-blue-700 dark:to-cyan-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Annual Milestone Rewards</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹1.9L Spend</strong></td>
          <td class="py-2">7,500 bonus points</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>₹4L Spend</strong></td>
          <td class="py-2">10,000 bonus points</td>
        </tr>
      </tbody>
    </table>
    <p class="mt-3 text-xs">• Total potential: 17,500 bonus points on ₹4L spend</p>
    <p class="text-xs">• Plus 8,000 base points = 25,500 points total (~₹12,750+ value)</p>
  </div>
</div>

### Crucial Detail: Bonus Points Require Phone Call

**Important:** Amex doesn't automatically credit bonus points. You must **call Amex customer service** and request these bonus points after hitting milestones. Many cardholders miss this, leaving thousands of points unclaimed!

**Tip:** Some users have successfully retrieved bonus points from prior years by calling and requesting them.

## Redemption Options & Value

### Taj Voucher Redemptions

- **Value:** 1 MR point = ₹1 Taj Voucher (1% return)
- **Options:** Taj properties across India
- **Booking:** Direct on Taj website with voucher code
- **Note:** Some properties are overpriced on Taj website

### Marriott Bonvoy Transfers

- **Transfer Ratio:** 1 MR point = 0.30-0.33 Marriott points
- **Transfer Bonus:** Limited-time bonuses (10K points bonus on 60K transfer)
- **Value:** Can reach 1.5-2% depending on transfer ratio
- **Note:** Only available on Amex and MRCC card points, not pooled

### Direct Cash Redemptions

- **Cashback:** 1 MR point = ₹0.50 (0.5% return) - not recommended
- **Amazon Vouchers:** Available at poor value (0.25ps/point)

## Actual User Experience & Benefits

<div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 mb-6 dark:from-green-700 dark:to-teal-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-4">Real-World Usage Summary</h3>
    <p class="text-sm mb-3">Based on 6+ years of cardholder experience:</p>
    <ul class="space-y-2 text-sm">
      <li>✓ Taj properties covered across major Indian cities</li>
      <li>✓ Marriott transfers provide good value for international hotel redemptions</li>
      <li>✓ Cumulative reward rate of 8.5% on ₹4L spend is exceptional</li>
      <li>✓ Points never expire, allowing strategic accumulation</li>
    </ul>
  </div>
</div>

## Airport Lounge Access

<div class="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 mb-6 dark:from-indigo-700 dark:to-purple-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Lounge Benefits</h3>
    <table class="w-full text-sm">
      <tbody>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>Domestic Lounge</strong></td>
          <td class="py-2">4 per quarter (Visa/Mastercard accepted)</td>
        </tr>
        <tr class="border-b border-white/30">
          <td class="py-2"><strong>International Lounge</strong></td>
          <td class="py-2">1 per month via Priority Pass</td>
        </tr>
        <tr>
          <td class="py-2"><strong>Spend Requirement</strong></td>
          <td class="py-2">₹20K spend in previous quarter</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Other Benefits

### Health Insurance
- Complimentary health insurance through ICICI Lombard
- Covers medical emergencies while traveling

### Amex Festive Offers
- Periodic bonus point offers
- Holiday season promotions
- Taj properties special discounts

### Foreign Exchange Markup
- **Markup Fee:** 3.5% + Service Tax
- Not the best on international spends, but offset by higher rewards on travel bookings

## Complete Financial Analysis

### Year 1 Breakdown (₹4L Annual Spend)

| Component | Value |
|-----------|-------|
| Annual Fee | -₹5,900 |
| Welcome Points (10K @ ₹2.50) | +₹2,500 |
| Base Rewards (8,000 pts @ ₹2.50) | +₹2,000 |
| Milestone Bonus (17,500 pts @ ₹2.50) | +₹4,375 |
| **Net Year 1 Benefit** | **+₹3,000** |

### Year 2+ Breakdown (₹4L+ Spend)

| Component | Value |
|-----------|-------|
| Annual Fee | -₹5,900 |
| Base Rewards (8,000 pts) | +₹2,000 |
| Milestone Bonus (17,500 pts) | +₹4,375 |
| **Net Recurring Benefit** | **+₹475** |

**Key Insight:** The card pays for itself in Year 1 and becomes free from Year 2 onwards if you maintain ₹4L+ spend.

## Eligibility & How to Apply

### Application Methods

<div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-6 dark:from-orange-700 dark:to-red-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Application Routes</h3>
    <ul class="space-y-2 text-sm">
      <li>✓ <strong>Online Application:</strong> Via Amex website</li>
      <li>✓ <strong>Referral Link:</strong> Get bonus points through referral</li>
      <li>✓ <strong>Card-on-Card:</strong> If you have another Amex card</li>
      <li>✓ <strong>Limited Offer:</strong> Additional 2,000 bonus points via referral</li>
    </ul>
  </div>
</div>

### Approval Timeline
- Approval Status: ~2 days
- Card Delivery: ~3 additional days
- First Amex Card: +1 week additional for some

## Who Should Get This Card?

<div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
  <div class="text-white">
    <h3 class="text-lg font-bold mb-3">Ideal Candidates</h3>
    <ul class="space-y-2 text-sm">
      <li>✅ Annual travel spends ₹4L+</li>
      <li>✅ Frequent hotel & flight bookings</li>
      <li>✅ Marriott Bonvoy members</li>
      <li>✅ Taj property enthusiasts</li>
      <li>✅ Those seeking consistent reward rate</li>
      <li>✅ Premium merchant acceptance sufficient</li>
    </ul>
  </div>
</div>

**Not Ideal For:**
- Those with annual travel spend <₹2L
- Cash-focused spenders (no good cashback)
- Airmiles seekers (no airline transfers)
- Acceptance-sensitive users (Amex not universal)

## The Verdict

<div class="bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-6 mb-6 dark:from-pink-700 dark:to-rose-700">
  <div class="text-white">
    <h3 class="text-2xl font-bold mb-2">CardExpert Rating: 5/5</h3>
    <p class="text-sm">The Amex Platinum Travel Credit Card with ~8.5% reward rate is one of the highest rewarding travel cards in India and is an absolute must-have for anyone who loves travel benefits.</p>
  </div>
</div>

**The Verdict:** This card is a no-brainer if you spend ₹4L+ annually on travel. The milestone benefits are unmatched in India, and the card essentially becomes free after Year 1. The only drawback is Amex's limited acceptance, but for booking flights and hotels (where the real rewards are), acceptance is generally good. For serious travelers, this is non-negotiable.

## Key Takeaways

1. **Highest Travel Rewards:** Up to 8.5% is best-in-class in India
2. **Milestone Benefits:** Only card with ₹17,500 bonus points at ₹4L spend
3. **Taj Vouchers:** Excellent for exploring Taj properties nationwide
4. **Marriott Transfers:** Enables international hotel redemptions
5. **Fee Justification:** Essentially free from Year 2 onwards
6. **Call for Bonuses:** Don't forget to claim milestone bonus points
7. **No Expiry:** Points valid for lifetime

## Frequently Asked Questions

**Q: Is this card or Platinum Charge card better?**
A: For travel rewards, Platinum Travel is superior. Charge card is for lifestyle/experiences.

**Q: Do I need to call every time for bonus points?**
A: Yes, Amex doesn't auto-credit milestone bonuses. Proactive calling is required.

**Q: Can I get fee waived?**
A: Yes, on ₹7L+ annual spend. Below that, call for retention offers.

**Q: What's the acceptance like?**
A: Good at premium hotels, airlines, premium merchants. Limited at small shops/restaurants.

**Q: Can I hold multiple Amex cards?**
A: Yes, you can have Platinum Travel + Platinum Charge + other Amex cards.

**Q: Are points lost if I close the card?**
A: Points remain for 5 years after closure, but it's better to keep card active.

**Q: How do I transfer to Marriott?**
A: Via Amex's online portal. Transfers typically process within 2-4 weeks.

---

*Last Updated: December 2025*
*Information accurate as of review date. Amex benefits subject to change.*
`},xf=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,rg=[Ix,Xx,Jx,Wx,$x,Px,eg,tg,ag,lg,sg,Zx,Kx,{id:"cc-sapphire-reserve",title:"The Ultimate Guide to Premium Travel Cards",excerpt:"Is the annual fee worth it? We break down the benefits of the top contenders in the market.",content:xf("Premium Travel Cards"),imageUrl:"https://picsum.photos/800/400?random=1",date:"Oct 12, 2023",readTime:"8 min",tags:["Travel","Finance"]},{id:"cc-points-strategy",title:"Points vs. Cashback: What Should You Choose?",excerpt:"Deciding between flexible points and liquid cash can be tricky. Here is our mathematical breakdown.",content:xf("Points Strategy"),imageUrl:"https://picsum.photos/800/400?random=2",date:"Oct 15, 2023",readTime:"5 min",tags:["Strategy","Beginner"]}],ig=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,ng=[{id:"miles-sweet-spots",title:"Hidden Sweet Spots in Award Charts",excerpt:"Fly business class to Europe for under 40k miles. Yes, it is possible if you know where to look.",content:ig("Airline Award Charts"),imageUrl:"https://picsum.photos/800/400?random=3",date:"Nov 01, 2023",readTime:"12 min",tags:["Travel","Hacking"]}],og=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,dg=[{id:"hotel-lifetime-status",title:"Is Lifetime Status Worth Chasing?",excerpt:"We analyze the loyalty programs of Marriott, Hyatt, and Hilton to see which one rewards loyalty best.",content:og("Lifetime Hotel Status"),imageUrl:"https://picsum.photos/800/400?random=4",date:"Sep 20, 2023",readTime:"6 min",tags:["Hotels","Loyalty"]}],cg=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,ug=[{id:"etf-vs-mutual-funds",title:"ETFs vs Mutual Funds: The Showdown",excerpt:"Low fees and tax efficiency make ETFs a favorite, but mutual funds still have their place.",content:cg("ETFs and Mutual Funds"),imageUrl:"https://picsum.photos/800/400?random=5",date:"Aug 15, 2023",readTime:"7 min",tags:["Investing","Stocks"]}],fg=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,mg=[{id:"fire-movement",title:"Understanding the FIRE Movement",excerpt:"Financial Independence, Retire Early. Is it a pipe dream or a rigorous mathematical certainty?",content:fg("FIRE Movement"),imageUrl:"https://picsum.photos/800/400?random=6",date:"Oct 05, 2023",readTime:"10 min",tags:["Retirement","Lifestyle"]}],pg=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,bg=[{id:"best-nomad-visas",title:"Top 5 Digital Nomad Visas for 2024",excerpt:"From Portugal to Costa Rica, countries are opening their doors to remote workers.",content:pg("Nomad Visas"),imageUrl:"https://picsum.photos/800/400?random=7",date:"Nov 10, 2023",readTime:"9 min",tags:["Travel","Work"]}],hg=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,xg=[{id:"50-30-20-rule",title:"The 50/30/20 Rule Explained",excerpt:"A simple framework to manage your needs, wants, and savings effortlessly.",content:hg("Budgeting Rules"),imageUrl:"https://picsum.photos/800/400?random=8",date:"Jul 22, 2023",readTime:"4 min",tags:["Budgeting","Basics"]}],gg=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,yg=[{id:"travel-insurance-myth",title:"Do You Really Need Travel Insurance?",excerpt:"Credit cards offer some protection, but is it enough for a medical emergency abroad?",content:gg("Travel Insurance"),imageUrl:"https://picsum.photos/800/400?random=9",date:"Jun 30, 2023",readTime:"6 min",tags:["Insurance","Safety"]}],vg=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,kg=[{id:"private-jet-empty-legs",title:"How to Book Empty Leg Private Jets",excerpt:"The secret way to fly private for the price of a commercial business class ticket.",content:vg("Private Aviation"),imageUrl:"https://picsum.photos/800/400?random=10",date:"May 12, 2023",readTime:"8 min",tags:["Luxury","Aviation"]}],wg=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for financial freedom and a fulfilling lifestyle.
    Whether you are a seasoned expert or just starting out, mastering the nuances of this subject can open doors to new opportunities.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Comprehensive analysis of current market trends.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategic planning for long-term success.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Risk management and mitigation strategies.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these strategies, you can optimize your approach to ${i}. Remember, consistency is key.
    Stay informed, stay agile, and keep exploring new horizons.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The journey of a thousand miles begins with a single step." - Lao Tzu</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into specific aspects of ${i}. We update our content regularly to ensure you have the latest information at your fingertips.
  </p>
`,Sg=[{id:"strong-dollar-impact",title:"What a Strong Dollar Means for Your Vacation",excerpt:"Why Europe and Japan are cheaper than ever for American tourists right now.",content:wg("Currency Exchange"),imageUrl:"https://picsum.photos/800/400?random=11",date:"Dec 01, 2023",readTime:"5 min",tags:["Economics","Travel"]}],Ut={"credit-cards":rg,"airline-miles":ng,"hotel-status":dg,"investing-basics":ug,retirement:mg,"digital-nomad":bg,budgeting:xg,insurance:yg,"luxury-travel":kg,"global-economy":Sg},Rt=[{id:"credit-cards",name:"Premium Credit Cards",iconName:"CreditCard",description:"Maximize your rewards with top-tier travel and cashback cards.",articles:Ut["credit-cards"]},{id:"airline-miles",name:"Airline Miles",iconName:"Plane",description:"Fly for free. Learn the secrets of airline alliances and award charts.",articles:Ut["airline-miles"]},{id:"hotel-status",name:"Hotel Elite Status",iconName:"Hotel",description:"Room upgrades, free breakfast, and late checkout. Live the suite life.",articles:Ut["hotel-status"]},{id:"investing-basics",name:"Investing Basics",iconName:"TrendingUp",description:"Building wealth for the long term. Stocks, bonds, and ETFs explained.",articles:Ut["investing-basics"]},{id:"retirement",name:"Retirement Planning",iconName:"Umbrella",description:"Secure your future. 401ks, IRAs, and the FIRE movement.",articles:Ut.retirement},{id:"digital-nomad",name:"Digital Nomad",iconName:"Laptop",description:"Work from anywhere. Visas, connectivity, and tax implications.",articles:Ut["digital-nomad"]},{id:"budgeting",name:"Smart Budgeting",iconName:"PieChart",description:"Take control of your cash flow without sacrificing your lifestyle.",articles:Ut.budgeting},{id:"insurance",name:"Insurance & Risk",iconName:"ShieldCheck",description:"Protecting your assets. Travel, health, and life insurance guides.",articles:Ut.insurance},{id:"luxury-travel",name:"Luxury Travel",iconName:"Gem",description:"First class flights and 5-star resorts. Experience the best for less.",articles:Ut["luxury-travel"]},{id:"global-economy",name:"Global Economy",iconName:"Globe",description:"Macro trends that affect your wallet. Currencies and geopolitics.",articles:Ut["global-economy"]}],Cg=({collapsed:i=!1})=>{const[c,u]=R.useState("dark");R.useEffect(()=>{const f=localStorage.getItem("theme");f?(u(f),document.documentElement.classList.toggle("dark",f==="dark")):document.documentElement.classList.add("dark")},[]);const o=()=>{const f=c==="dark"?"light":"dark";u(f),localStorage.setItem("theme",f),document.documentElement.classList.toggle("dark",f==="dark")};return p.jsxs("button",{onClick:o,className:`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group w-full hover:bg-slate-50 dark:hover:bg-white/5 focus:outline-none ${i?"justify-center":""}`,"aria-label":"Toggle Theme",title:i?"Toggle Theme":"",children:[p.jsx("div",{className:`transition-colors duration-300 ${c==="dark"?"text-gold-500":"text-slate-400 group-hover:text-gold-500"}`,children:c==="dark"?p.jsx(_x,{size:20,strokeWidth:1.5}):p.jsx(Bx,{size:20,strokeWidth:1.5})}),!i&&p.jsx("span",{className:"text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 tracking-wide",children:c==="dark"?"Light Mode":"Dark Mode"})]})},Tg={CreditCard:Gf,Plane:Ff,Hotel:Yf,TrendingUp:Jo,Umbrella:Qf,Laptop:Vf,PieChart:_f,ShieldCheck:Io,Gem:qf,Globe:ci},gf=({category:i,collapsed:c,setMobileOpen:u})=>{const o=Tg[i.iconName]||ci;return p.jsx(Of,{to:`/category/${i.id}`,onClick:()=>u(!1),className:({isActive:f})=>`
        flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group relative
        ${c?"justify-center px-2":""}
        ${f?"bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white":"text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"}
      `,children:({isActive:f})=>p.jsxs(p.Fragment,{children:[f&&!c&&p.jsx("span",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gold-500 rounded-r-sm shadow-[0_0_8px_rgba(197,157,46,0.4)]"}),p.jsx(o,{size:c?20:18,strokeWidth:f?2:1.5,className:`shrink-0 transition-colors duration-200 ${f?"text-gold-500":"group-hover:text-gold-500"}`}),!c&&p.jsx("span",{className:"text-[13px] font-medium tracking-wide truncate transition-all",children:i.name}),c&&p.jsx("div",{className:"absolute left-14 z-50 bg-[#0f0f0f] text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap",children:i.name})]})})},Ag=({mobileOpen:i,setMobileOpen:c})=>{const[u,o]=R.useState(!1),f=Rt.filter(v=>["credit-cards","investing-basics","retirement","budgeting","insurance","global-economy"].includes(v.id)),b=Rt.filter(v=>["airline-miles","hotel-status","luxury-travel","digital-nomad"].includes(v.id));return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${i?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>c(!1)}),p.jsxs("aside",{className:`fixed top-0 left-0 z-50 h-screen bg-white dark:bg-[#050505] border-r border-slate-200 dark:border-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col
          ${i?"translate-x-0":"-translate-x-full md:translate-x-0"}
          ${u?"w-20":"w-72"}
        `,children:[p.jsxs("div",{className:`h-20 flex items-center ${u?"justify-center":"justify-between px-6"} border-b border-slate-100 dark:border-white/5 shrink-0`,children:[p.jsx(Na,{to:"/",onClick:()=>c(!1),className:"group",children:u?p.jsx("span",{className:"font-serif font-bold text-2xl text-gold-500",children:"T"}):p.jsxs("span",{className:"font-serif font-medium text-2xl tracking-widest text-slate-900 dark:text-white group-hover:text-gold-500 transition-colors",children:["TRE",p.jsx("span",{className:"text-gold-500 italic",children:"ZZO"})]})}),p.jsx("button",{onClick:()=>c(!1),className:"md:hidden p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white",children:p.jsx(Qx,{size:20})}),!u&&p.jsx("button",{onClick:()=>o(!0),className:"hidden md:flex p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors",children:p.jsx(xx,{size:16})})]}),u&&p.jsx("button",{onClick:()=>o(!1),className:"hidden md:flex absolute top-7 -right-3 z-50 p-1 bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/10 text-gold-500 rounded-full shadow-md hover:scale-110 transition-transform",children:p.jsx(bx,{size:12,strokeWidth:2.5})}),p.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-hide py-6 px-3 space-y-8",children:[p.jsx("div",{className:`transition-all duration-300 ${u?"px-0 flex justify-center":""}`,children:u?p.jsx("button",{className:"p-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/5 text-slate-400 hover:text-gold-500 transition-colors",title:"Search",children:p.jsx(hf,{size:18,strokeWidth:2})}):p.jsxs("div",{className:"relative group",children:[p.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-slate-50 dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/10 rounded-md py-2.5 pl-9 pr-4 text-xs font-medium text-slate-900 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"}),p.jsx(hf,{className:"absolute left-3 top-2.5 text-slate-400 group-focus-within:text-gold-500 transition-colors",size:14})]})}),p.jsxs("div",{children:[!u&&p.jsxs("h3",{className:"px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400/80 dark:text-slate-600 mb-3 flex items-center gap-2",children:[p.jsx(fx,{size:10,className:"text-gold-600/70"})," Wealth"]}),p.jsx("div",{className:"space-y-1",children:f.map(v=>p.jsx(gf,{category:v,collapsed:u,setMobileOpen:c},v.id))})]}),p.jsxs("div",{children:[!u&&p.jsxs("h3",{className:"px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400/80 dark:text-slate-600 mb-3 flex items-center gap-2",children:[p.jsx(yx,{size:10,className:"text-gold-600/70"})," Wander"]}),p.jsx("div",{className:"space-y-1",children:b.map(v=>p.jsx(gf,{category:v,collapsed:u,setMobileOpen:c},v.id))})]})]}),p.jsx("div",{className:"p-4 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-[#080808]",children:p.jsx(Cg,{collapsed:u})})]})]})},Rg=()=>{const[i,c]=R.useState(!1);return p.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden",children:[p.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[p.jsx("div",{className:"absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/5 dark:bg-gold-500/5 blur-[120px]"}),p.jsx("div",{className:"absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-200/20 dark:bg-blue-900/5 blur-[100px]"})]}),p.jsx(Ag,{mobileOpen:i,setMobileOpen:c}),p.jsxs("div",{className:"relative z-10 md:pl-24 lg:pl-80 transition-all duration-500 min-h-screen flex flex-col",children:[p.jsx("div",{className:"md:hidden sticky top-0 z-30 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 px-6 h-16 flex items-center justify-between",children:p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("button",{onClick:()=>c(!0),className:"text-slate-600 dark:text-slate-400 hover:text-gold-500 transition-colors",children:p.jsx(Ex,{size:24})}),p.jsxs("span",{className:"font-serif font-medium text-xl tracking-widest text-slate-900 dark:text-white",children:["TRE",p.jsx("span",{className:"text-gold-500 italic",children:"ZZO"})]})]})}),p.jsx("main",{className:"flex-1 p-6 md:p-12 lg:p-16 max-w-screen-2xl mx-auto w-full",children:p.jsx(kh,{})}),p.jsxs("footer",{className:"py-10 px-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-400 dark:text-slate-600 text-xs tracking-widest font-medium uppercase",children:["© ",new Date().getFullYear()," Trezzo Financial. All rights reserved."]})]})]})},Xf=({article:i,categoryId:c})=>p.jsx(Na,{to:`/category/${c}/article/${i.id}`,className:"group block h-full",children:p.jsxs("div",{className:"h-full bg-white dark:bg-[#0A0A0A] rounded-sm overflow-hidden transition-all duration-500 border border-slate-200 dark:border-white/5 group-hover:border-gold-500/30 flex flex-col relative",children:[p.jsxs("div",{className:"relative h-32 overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"}),p.jsx("img",{src:i.imageUrl,alt:i.title,className:"w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"}),p.jsx("div",{className:"absolute top-0 right-0 z-20 p-1.5",children:i.tags.slice(0,1).map(u=>p.jsx("span",{className:"px-1.5 py-0.5 bg-black/50 backdrop-blur-md text-gold-400 text-[9px] font-bold uppercase tracking-widest border border-gold-500/20",children:u},u))})]}),p.jsxs("div",{className:"p-3.5 flex flex-col flex-grow relative",children:[p.jsxs("div",{className:"flex items-center gap-2 text-[9px] font-medium text-slate-400 mb-2.5 uppercase tracking-widest",children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-0.5 h-0.5 rounded-full bg-gold-500"})," ",i.date]}),p.jsx("span",{className:"text-slate-600 dark:text-slate-600",children:"|"}),p.jsxs("span",{children:[i.readTime," Read"]})]}),p.jsx("h3",{className:"text-lg font-serif font-medium mb-2 text-slate-900 dark:text-slate-100 leading-snug group-hover:text-gold-400 transition-colors duration-300",children:i.title}),p.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-xs mb-4 line-clamp-2 flex-grow leading-tight font-normal",children:i.excerpt}),p.jsxs("div",{className:"mt-auto pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between",children:[p.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors duration-300",children:"Read Analysis"}),p.jsx(Uf,{size:16,className:"text-slate-500 group-hover:text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"})]})]})]})}),Eg=({isLoading:i})=>p.jsxs("div",{className:`fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${i?"opacity-100":"opacity-0 pointer-events-none"}`,children:[p.jsxs("div",{className:"relative",children:[p.jsxs("h1",{className:"text-6xl md:text-8xl font-serif font-medium tracking-tighter text-white mb-2 animate-fade-in-up",children:["TRE",p.jsx("span",{className:"italic text-gold-500",children:"ZZO"})]}),p.jsx("div",{className:"w-full h-[2px] bg-white/10 mt-4 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gold-500 animate-loader-width shadow-[0_0_15px_rgba(197,157,46,0.8)]"})})]}),p.jsxs("div",{className:"mt-8 flex items-center gap-3 animate-fade-in",style:{animationDelay:"0.5s"},children:[p.jsx("span",{className:"h-px w-8 bg-slate-800"}),p.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 animate-pulse",children:"Establishing Secure Connection"}),p.jsx("span",{className:"h-px w-8 bg-slate-800"})]})]}),Mg={CreditCard:Gf,Plane:Ff,Hotel:Yf,TrendingUp:Jo,Umbrella:Qf,Laptop:Vf,PieChart:_f,ShieldCheck:Io,Gem:qf,Globe:ci},Bg=()=>{const{categoryId:i}=Ef(),c=Rt.find(o=>o.id===i);if(!c)return p.jsx("div",{className:"text-center py-20 text-xl text-slate-500 font-serif italic",children:"Category not available"});const u=Mg[c.iconName]||ci;return p.jsxs("div",{className:"animate-fade-in w-full",children:[p.jsxs("nav",{className:"flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12",children:[p.jsxs(Na,{to:"/",className:"hover:text-gold-500 transition-colors flex items-center gap-2 group",children:[p.jsx(Tx,{size:14,className:"mb-0.5 group-hover:text-gold-500 transition-colors"}),p.jsx("span",{className:"hidden sm:inline",children:"Home"})]}),p.jsx("span",{className:"text-slate-300 dark:text-slate-700",children:"/"}),p.jsx("span",{className:"text-gold-500",children:c.name})]}),p.jsxs("div",{className:"mb-16 md:mb-24 relative",children:[p.jsx("div",{className:"absolute top-0 left-0 w-20 h-1 bg-gold-500 mb-6"}),p.jsxs("div",{className:"pt-8 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between",children:[p.jsxs("div",{className:"max-w-3xl relative z-10",children:[p.jsx("span",{className:"text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block",children:"Editorial Collection"}),p.jsx("h1",{className:"text-5xl md:text-7xl font-serif font-medium mb-6 text-slate-900 dark:text-white tracking-tight leading-none",children:c.name}),p.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light border-l border-slate-200 dark:border-white/10 pl-6 ml-1",children:c.description})]}),p.jsx("div",{className:"hidden md:block text-slate-200 dark:text-white/5 transform translate-y-4",children:p.jsx(u,{size:140,strokeWidth:.5})})]})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4",children:c.articles.map(o=>p.jsx(Xf,{article:o,categoryId:c.id},o.id))})]})},Ng=()=>{const{categoryId:i,articleId:c}=Ef(),u=Rt.find(f=>f.id===i),o=u==null?void 0:u.articles.find(f=>f.id===c);return!o||!u?p.jsx("div",{className:"text-center py-20 text-xl text-slate-500",children:"Article not found"}):p.jsxs("div",{className:"max-w-4xl mx-auto animate-fade-in-up",children:[p.jsx("nav",{className:"mb-12 flex items-center justify-between",children:p.jsxs("button",{onClick:()=>window.history.back(),className:"group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors",children:[p.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all",children:p.jsx(nx,{size:14})}),"Back to ",u.name]})}),p.jsxs("header",{className:"mb-12",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 mb-8 font-medium uppercase tracking-widest",children:[p.jsx("span",{className:"text-gold-600 dark:text-gold-500",children:u.name}),p.jsx("span",{className:"text-slate-300 dark:text-slate-700",children:"/"}),p.jsx("span",{className:"flex items-center gap-2",children:o.date}),p.jsx("span",{className:"text-slate-300 dark:text-slate-700",children:"/"}),p.jsxs("span",{className:"flex items-center gap-2",children:[o.readTime," read"]})]}),p.jsx("h1",{className:"text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white mb-10 leading-[1.1]",children:o.title}),p.jsxs("div",{className:"w-full h-[500px] overflow-hidden mb-12 relative",children:[p.jsx("div",{className:"absolute inset-0 border border-white/10 z-10"}),p.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover"})]})]}),p.jsxs("article",{className:`prose prose-lg dark:prose-invert prose-slate max-w-none 
        prose-headings:font-serif prose-headings:font-medium prose-headings:text-slate-900 dark:prose-headings:text-white 
        prose-p:font-light prose-p:leading-8 prose-p:text-slate-600 dark:prose-p:text-slate-300
        prose-a:text-gold-600 dark:prose-a:text-gold-500 hover:prose-a:text-gold-400 
        prose-blockquote:border-l-gold-500 prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:italic
        prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-medium
        prose-li:marker:text-gold-500`,children:[p.jsx("div",{className:"text-2xl md:text-3xl font-serif text-slate-800 dark:text-slate-200 mb-12 leading-relaxed font-normal",children:o.excerpt}),p.jsx("div",{dangerouslySetInnerHTML:{__html:o.content}})]}),p.jsx("div",{className:"my-16 h-px bg-slate-200 dark:bg-white/10"}),p.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6",children:[p.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(f=>p.jsxs("span",{className:"px-4 py-1.5 bg-transparent border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-colors cursor-default",children:["#",f]},f))}),p.jsxs("button",{className:"flex items-center gap-3 text-slate-500 hover:text-gold-500 transition-colors text-xs font-bold uppercase tracking-widest",children:[p.jsx(jx,{size:16})," Share Article"]})]})]})},zg=()=>{var o,f,b,v;const i=(o=Rt.find(T=>T.id==="luxury-travel"))==null?void 0:o.articles[0],c=Rt.find(T=>T.id==="luxury-travel"),u=[{cat:Rt.find(T=>T.id==="credit-cards"),art:(f=Rt.find(T=>T.id==="credit-cards"))==null?void 0:f.articles[0]},{cat:Rt.find(T=>T.id==="investing-basics"),art:(b=Rt.find(T=>T.id==="investing-basics"))==null?void 0:b.articles[0]},{cat:Rt.find(T=>T.id==="global-economy"),art:(v=Rt.find(T=>T.id==="global-economy"))==null?void 0:v.articles[0]}].filter(T=>T.cat&&T.art);return p.jsxs("div",{className:"flex flex-col w-full animate-fade-in",children:[p.jsxs("div",{className:"flex flex-col items-center justify-center pt-12 pb-20 md:pb-28 text-center border-b border-slate-200 dark:border-white/5 mb-16",children:[p.jsx("div",{className:"mb-6",children:p.jsx("span",{className:"inline-block py-1.5 px-4 border border-gold-500/30 rounded-full bg-gold-500/5 text-gold-500 text-[10px] font-bold uppercase tracking-[0.25em]",children:"Premier Financial & Travel Insight"})}),p.jsxs("h1",{className:"text-7xl md:text-9xl lg:text-[10rem] font-serif font-medium text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.8]",children:["TRE",p.jsx("span",{className:"italic text-gold-500",children:"ZZO"})]}),p.jsx("p",{className:"text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-light font-serif italic",children:'"The definitive guide to maximizing wealth and experiencing the world in style."'})]}),i&&c&&p.jsxs("section",{className:"mb-24",children:[p.jsxs("div",{className:"flex items-center justify-between mb-8",children:[p.jsxs("h2",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gold-500 flex items-center gap-2",children:[p.jsx(Hx,{size:14})," Editor's Choice"]}),p.jsx(Na,{to:`/category/${c.id}`,className:"text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors",children:"View Category"})]}),p.jsxs(Na,{to:`/category/${c.id}/article/${i.id}`,className:"group relative block w-full h-[60vh] min-h-[500px] overflow-hidden rounded-[2px]",children:[p.jsx("div",{className:"absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-90"}),p.jsx("img",{src:i.imageUrl,alt:i.title,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"}),p.jsxs("div",{className:"absolute bottom-0 left-0 z-20 p-8 md:p-16 max-w-4xl",children:[p.jsx("span",{className:"inline-block px-3 py-1 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-widest mb-6",children:"Featured Analysis"}),p.jsx("h3",{className:"text-4xl md:text-6xl font-serif font-medium text-white mb-6 leading-tight group-hover:text-gold-200 transition-colors",children:i.title}),p.jsx("p",{className:"text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl line-clamp-2",children:i.excerpt}),p.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white",children:["Read Full Story ",p.jsx(Uf,{size:16,className:"text-gold-500"})]})]})]})]}),p.jsxs("section",{className:"mb-24",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-12 border-b border-slate-200 dark:border-white/5 pb-4",children:[p.jsx("h2",{className:"text-2xl font-serif font-medium text-slate-900 dark:text-white",children:"Latest Intelligence"}),p.jsx("div",{className:"h-px flex-1 bg-slate-200 dark:bg-white/5"}),p.jsx(Na,{to:"/category/credit-cards",className:"text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-gold-500 transition-colors",children:"View All"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:u.map((T,k)=>T.art&&T.cat?p.jsx(Xf,{article:T.art,categoryId:T.cat.id},k):null)})]}),p.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 bg-white dark:bg-[#0A0A0A] p-10 md:p-16 border border-slate-200 dark:border-white/5 relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -mr-32 -mt-32"}),p.jsxs("div",{children:[p.jsxs("h2",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-6 flex items-center gap-2",children:[p.jsx(Io,{size:16})," Why Trust Trezzo?"]}),p.jsxs("h3",{className:"text-3xl md:text-4xl font-serif font-medium text-slate-900 dark:text-white mb-6 leading-tight",children:["Independent. Analytical. ",p.jsx("br",{}),p.jsx("span",{className:"italic text-gold-500",children:"Uncompromising."})]}),p.jsx("p",{className:"text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8",children:"In an era of sponsored content and fleeting trends, Trezzo stands apart. Our team of financial analysts and travel strategists dissect the fine print so you don't have to. We don't just report the news; we calculate the ROI of your lifestyle."}),p.jsxs("div",{className:"flex flex-col gap-4",children:[p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gold-500",children:p.jsx(Jo,{size:18})}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-serif font-medium text-slate-900 dark:text-white",children:"Data-Driven Strategy"}),p.jsx("p",{className:"text-xs text-slate-500 uppercase tracking-wide",children:"Mathematical approach to points & miles"})]})]}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gold-500",children:p.jsx(cx,{size:18})}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-serif font-medium text-slate-900 dark:text-white",children:"Unbiased Reviews"}),p.jsx("p",{className:"text-xs text-slate-500 uppercase tracking-wide",children:"No paid placements, ever."})]})]})]})]}),p.jsxs("div",{className:"relative h-full min-h-[300px] border border-slate-200 dark:border-white/10 p-2",children:[p.jsx("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"}),p.jsxs("div",{className:"absolute bottom-8 left-8 right-8",children:[p.jsx("p",{className:"font-serif italic text-xl text-white mb-4",children:`"Trezzo has completely changed how I view my assets and my travel. It's not just a blog; it's a blueprint for a better life."`}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-gold-500"}),p.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-300",children:"Jonathan S., Wealth Manager"})]})]})]})]}),p.jsxs("section",{className:"text-center py-20 border-t border-slate-200 dark:border-white/5",children:[p.jsx(Vx,{size:32,className:"mx-auto text-gold-500 mb-6"}),p.jsxs("h2",{className:"text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white mb-6",children:["Join the ",p.jsx("span",{className:"italic",children:"Inner Circle"})]}),p.jsx("p",{className:"text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 font-light",children:"Get weekly briefings on credit card strategies, award chart devaluations, and investment opportunities before the masses."}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 max-w-md mx-auto",children:[p.jsx("input",{type:"email",placeholder:"Enter your email address",className:"flex-1 px-6 py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:border-gold-500 focus:outline-none transition-colors rounded-sm"}),p.jsx("button",{className:"px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors rounded-sm",children:"Subscribe"})]}),p.jsx("p",{className:"text-[10px] text-slate-500 mt-4 uppercase tracking-widest",children:"We respect your privacy. Unsubscribe at any time."})]})]})};function Dg(){const[i,c]=R.useState(!0);return R.useEffect(()=>{const o=Date.now(),f=()=>{const b=Date.now()-o,v=Math.max(0,2e3-b);setTimeout(()=>{c(!1)},v)};if(document.readyState==="complete")f();else return window.addEventListener("load",f),()=>window.removeEventListener("load",f)},[]),p.jsxs(p.Fragment,{children:[p.jsx(Eg,{isLoading:i}),p.jsx("div",{className:`transition-opacity duration-1000 delay-300 ${i?"opacity-0":"opacity-100"}`,children:p.jsx(Xh,{children:p.jsx(Sh,{children:p.jsxs(Ul,{path:"/",element:p.jsx(Rg,{}),children:[p.jsx(Ul,{index:!0,element:p.jsx(zg,{})}),p.jsx(Ul,{path:"category/:categoryId",element:p.jsx(Bg,{})}),p.jsx(Ul,{path:"category/:categoryId/article/:articleId",element:p.jsx(Ng,{})}),p.jsx(Ul,{path:"*",element:p.jsx(vh,{to:"/",replace:!0})})]})})})})]})}const Zf=document.getElementById("root");if(!Zf)throw new Error("Could not find root element to mount to");const jg=Eb.createRoot(Zf);jg.render(p.jsx(vb.StrictMode,{children:p.jsx(Dg,{})}));

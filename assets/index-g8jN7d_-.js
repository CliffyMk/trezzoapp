(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))n(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const k of p.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&n(k)}).observe(document,{childList:!0,subtree:!0});function u(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function n(f){if(f.ep)return;f.ep=!0;const p=u(f);fetch(f.href,p)}})();function kf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nn={exports:{}},Ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function vp(){if(Pu)return Ls;Pu=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function u(n,f,p){var k=null;if(p!==void 0&&(k=""+p),f.key!==void 0&&(k=""+f.key),"key"in f){p={};for(var C in f)C!=="key"&&(p[C]=f[C])}else p=f;return f=p.ref,{$$typeof:i,type:n,key:k,ref:f!==void 0?f:null,props:p}}return Ls.Fragment=c,Ls.jsx=u,Ls.jsxs=u,Ls}var Ju;function kp(){return Ju||(Ju=1,Nn.exports=vp()),Nn.exports}var b=kp(),Dn={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function yp(){if($u)return W;$u=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),k=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),j=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=j&&g[j]||g["@@iterator"],typeof g=="function"?g:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,F={};function I(g,L,H){this.props=g,this.context=L,this.refs=F,this.updater=H||X}I.prototype.isReactComponent={},I.prototype.setState=function(g,L){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,L,"setState")},I.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function te(){}te.prototype=I.prototype;function O(g,L,H){this.props=g,this.context=L,this.refs=F,this.updater=H||X}var fe=O.prototype=new te;fe.constructor=O,K(fe,I.prototype),fe.isPureReactComponent=!0;var Ae=Array.isArray;function He(){}var $={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function Re(g,L,H){var q=H.ref;return{$$typeof:i,type:g,key:L,ref:q!==void 0?q:null,props:H}}function st(g,L){return Re(g.type,L,g.props)}function rt(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function We(g){var L={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(H){return L[H]})}var za=/\/+/g;function _t(g,L){return typeof g=="object"&&g!==null&&g.key!=null?We(""+g.key):L.toString(36)}function Mt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(He,He):(g.status="pending",g.then(function(L){g.status==="pending"&&(g.status="fulfilled",g.value=L)},function(L){g.status==="pending"&&(g.status="rejected",g.reason=L)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function B(g,L,H,q,P){var ae=typeof g;(ae==="undefined"||ae==="boolean")&&(g=null);var ue=!1;if(g===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(g.$$typeof){case i:case c:ue=!0;break;case D:return ue=g._init,B(ue(g._payload),L,H,q,P)}}if(ue)return P=P(g),ue=q===""?"."+_t(g,0):q,Ae(P)?(H="",ue!=null&&(H=ue.replace(za,"$&/")+"/"),B(P,L,H,"",function(Gl){return Gl})):P!=null&&(rt(P)&&(P=st(P,H+(P.key==null||g&&g.key===P.key?"":(""+P.key).replace(za,"$&/")+"/")+ue)),L.push(P)),1;ue=0;var Ke=q===""?".":q+":";if(Ae(g))for(var Be=0;Be<g.length;Be++)q=g[Be],ae=Ke+_t(q,Be),ue+=B(q,L,H,ae,P);else if(Be=Y(g),typeof Be=="function")for(g=Be.call(g),Be=0;!(q=g.next()).done;)q=q.value,ae=Ke+_t(q,Be++),ue+=B(q,L,H,ae,P);else if(ae==="object"){if(typeof g.then=="function")return B(Mt(g),L,H,q,P);throw L=String(g),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ue}function U(g,L,H){if(g==null)return g;var q=[],P=0;return B(g,q,"","",function(ae){return L.call(H,ae,P++)}),q}function Z(g){if(g._status===-1){var L=g._result;L=L(),L.then(function(H){(g._status===0||g._status===-1)&&(g._status=1,g._result=H)},function(H){(g._status===0||g._status===-1)&&(g._status=2,g._result=H)}),g._status===-1&&(g._status=0,g._result=L)}if(g._status===1)return g._result.default;throw g._result}var pe=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},ke={map:U,forEach:function(g,L,H){U(g,function(){L.apply(this,arguments)},H)},count:function(g){var L=0;return U(g,function(){L++}),L},toArray:function(g){return U(g,function(L){return L})||[]},only:function(g){if(!rt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return W.Activity=E,W.Children=ke,W.Component=I,W.Fragment=u,W.Profiler=f,W.PureComponent=O,W.StrictMode=n,W.Suspense=y,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,W.__COMPILER_RUNTIME={__proto__:null,c:function(g){return $.H.useMemoCache(g)}},W.cache=function(g){return function(){return g.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(g,L,H){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var q=K({},g.props),P=g.key;if(L!=null)for(ae in L.key!==void 0&&(P=""+L.key),L)!Oe.call(L,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&L.ref===void 0||(q[ae]=L[ae]);var ae=arguments.length-2;if(ae===1)q.children=H;else if(1<ae){for(var ue=Array(ae),Ke=0;Ke<ae;Ke++)ue[Ke]=arguments[Ke+2];q.children=ue}return Re(g.type,P,q)},W.createContext=function(g){return g={$$typeof:k,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:p,_context:g},g},W.createElement=function(g,L,H){var q,P={},ae=null;if(L!=null)for(q in L.key!==void 0&&(ae=""+L.key),L)Oe.call(L,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(P[q]=L[q]);var ue=arguments.length-2;if(ue===1)P.children=H;else if(1<ue){for(var Ke=Array(ue),Be=0;Be<ue;Be++)Ke[Be]=arguments[Be+2];P.children=Ke}if(g&&g.defaultProps)for(q in ue=g.defaultProps,ue)P[q]===void 0&&(P[q]=ue[q]);return Re(g,ae,P)},W.createRef=function(){return{current:null}},W.forwardRef=function(g){return{$$typeof:C,render:g}},W.isValidElement=rt,W.lazy=function(g){return{$$typeof:D,_payload:{_status:-1,_result:g},_init:Z}},W.memo=function(g,L){return{$$typeof:h,type:g,compare:L===void 0?null:L}},W.startTransition=function(g){var L=$.T,H={};$.T=H;try{var q=g(),P=$.S;P!==null&&P(H,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(He,pe)}catch(ae){pe(ae)}finally{L!==null&&H.types!==null&&(L.types=H.types),$.T=L}},W.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},W.use=function(g){return $.H.use(g)},W.useActionState=function(g,L,H){return $.H.useActionState(g,L,H)},W.useCallback=function(g,L){return $.H.useCallback(g,L)},W.useContext=function(g){return $.H.useContext(g)},W.useDebugValue=function(){},W.useDeferredValue=function(g,L){return $.H.useDeferredValue(g,L)},W.useEffect=function(g,L){return $.H.useEffect(g,L)},W.useEffectEvent=function(g){return $.H.useEffectEvent(g)},W.useId=function(){return $.H.useId()},W.useImperativeHandle=function(g,L,H){return $.H.useImperativeHandle(g,L,H)},W.useInsertionEffect=function(g,L){return $.H.useInsertionEffect(g,L)},W.useLayoutEffect=function(g,L){return $.H.useLayoutEffect(g,L)},W.useMemo=function(g,L){return $.H.useMemo(g,L)},W.useOptimistic=function(g,L){return $.H.useOptimistic(g,L)},W.useReducer=function(g,L,H){return $.H.useReducer(g,L,H)},W.useRef=function(g){return $.H.useRef(g)},W.useState=function(g){return $.H.useState(g)},W.useSyncExternalStore=function(g,L,H){return $.H.useSyncExternalStore(g,L,H)},W.useTransition=function(){return $.H.useTransition()},W.version="19.2.0",W}var ef;function Gn(){return ef||(ef=1,Dn.exports=yp()),Dn.exports}var R=Gn();const wp=kf(R);var zn={exports:{}},js={},Ln={exports:{}},jn={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function Sp(){return tf||(tf=1,(function(i){function c(B,U){var Z=B.length;B.push(U);e:for(;0<Z;){var pe=Z-1>>>1,ke=B[pe];if(0<f(ke,U))B[pe]=U,B[Z]=ke,Z=pe;else break e}}function u(B){return B.length===0?null:B[0]}function n(B){if(B.length===0)return null;var U=B[0],Z=B.pop();if(Z!==U){B[0]=Z;e:for(var pe=0,ke=B.length,g=ke>>>1;pe<g;){var L=2*(pe+1)-1,H=B[L],q=L+1,P=B[q];if(0>f(H,Z))q<ke&&0>f(P,H)?(B[pe]=P,B[q]=Z,pe=q):(B[pe]=H,B[L]=Z,pe=L);else if(q<ke&&0>f(P,Z))B[pe]=P,B[q]=Z,pe=q;else break e}}return U}function f(B,U){var Z=B.sortIndex-U.sortIndex;return Z!==0?Z:B.id-U.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var k=Date,C=k.now();i.unstable_now=function(){return k.now()-C}}var y=[],h=[],D=1,E=null,j=3,Y=!1,X=!1,K=!1,F=!1,I=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function fe(B){for(var U=u(h);U!==null;){if(U.callback===null)n(h);else if(U.startTime<=B)n(h),U.sortIndex=U.expirationTime,c(y,U);else break;U=u(h)}}function Ae(B){if(K=!1,fe(B),!X)if(u(y)!==null)X=!0,He||(He=!0,We());else{var U=u(h);U!==null&&Mt(Ae,U.startTime-B)}}var He=!1,$=-1,Oe=5,Re=-1;function st(){return F?!0:!(i.unstable_now()-Re<Oe)}function rt(){if(F=!1,He){var B=i.unstable_now();Re=B;var U=!0;try{e:{X=!1,K&&(K=!1,te($),$=-1),Y=!0;var Z=j;try{t:{for(fe(B),E=u(y);E!==null&&!(E.expirationTime>B&&st());){var pe=E.callback;if(typeof pe=="function"){E.callback=null,j=E.priorityLevel;var ke=pe(E.expirationTime<=B);if(B=i.unstable_now(),typeof ke=="function"){E.callback=ke,fe(B),U=!0;break t}E===u(y)&&n(y),fe(B)}else n(y);E=u(y)}if(E!==null)U=!0;else{var g=u(h);g!==null&&Mt(Ae,g.startTime-B),U=!1}}break e}finally{E=null,j=Z,Y=!1}U=void 0}}finally{U?We():He=!1}}}var We;if(typeof O=="function")We=function(){O(rt)};else if(typeof MessageChannel<"u"){var za=new MessageChannel,_t=za.port2;za.port1.onmessage=rt,We=function(){_t.postMessage(null)}}else We=function(){I(rt,0)};function Mt(B,U){$=I(function(){B(i.unstable_now())},U)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_next=function(B){switch(j){case 1:case 2:case 3:var U=3;break;default:U=j}var Z=j;j=U;try{return B()}finally{j=Z}},i.unstable_requestPaint=function(){F=!0},i.unstable_runWithPriority=function(B,U){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=j;j=B;try{return U()}finally{j=Z}},i.unstable_scheduleCallback=function(B,U,Z){var pe=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?pe+Z:pe):Z=pe,B){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=Z+ke,B={id:D++,callback:U,priorityLevel:B,startTime:Z,expirationTime:ke,sortIndex:-1},Z>pe?(B.sortIndex=Z,c(h,B),u(y)===null&&B===u(h)&&(K?(te($),$=-1):K=!0,Mt(Ae,Z-pe))):(B.sortIndex=ke,c(y,B),X||Y||(X=!0,He||(He=!0,We()))),B},i.unstable_shouldYield=st,i.unstable_wrapCallback=function(B){var U=j;return function(){var Z=j;j=U;try{return B.apply(this,arguments)}finally{j=Z}}}})(jn)),jn}var af;function Tp(){return af||(af=1,Ln.exports=Sp()),Ln.exports}var Un={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function Cp(){if(lf)return Qe;lf=1;var i=Gn();function c(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)h+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var n={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(y,h,D){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:E==null?null:""+E,children:y,containerInfo:h,implementation:D}}var k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,Qe.createPortal=function(y,h){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(c(299));return p(y,h,null,D)},Qe.flushSync=function(y){var h=k.T,D=n.p;try{if(k.T=null,n.p=2,y)return y()}finally{k.T=h,n.p=D,n.d.f()}},Qe.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,n.d.C(y,h))},Qe.prefetchDNS=function(y){typeof y=="string"&&n.d.D(y)},Qe.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var D=h.as,E=C(D,h.crossOrigin),j=typeof h.integrity=="string"?h.integrity:void 0,Y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;D==="style"?n.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:E,integrity:j,fetchPriority:Y}):D==="script"&&n.d.X(y,{crossOrigin:E,integrity:j,fetchPriority:Y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Qe.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var D=C(h.as,h.crossOrigin);n.d.M(y,{crossOrigin:D,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&n.d.M(y)},Qe.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var D=h.as,E=C(D,h.crossOrigin);n.d.L(y,D,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Qe.preloadModule=function(y,h){if(typeof y=="string")if(h){var D=C(h.as,h.crossOrigin);n.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:D,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else n.d.m(y)},Qe.requestFormReset=function(y){n.d.r(y)},Qe.unstable_batchedUpdates=function(y,h){return y(h)},Qe.useFormState=function(y,h,D){return k.H.useFormState(y,h,D)},Qe.useFormStatus=function(){return k.H.useHostTransitionStatus()},Qe.version="19.2.0",Qe}var sf;function Ap(){if(sf)return Un.exports;sf=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Un.exports=Cp(),Un.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function Rp(){if(rf)return js;rf=1;var i=Tp(),c=Gn(),u=Ap();function n(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function k(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(n(188))}function h(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(n(188));return t!==e?null:e}for(var a=e,l=t;;){var s=a.return;if(s===null)break;var r=s.alternate;if(r===null){if(l=s.return,l!==null){a=l;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===a)return y(s),e;if(r===l)return y(s),t;r=r.sibling}throw Error(n(188))}if(a.return!==l.return)a=s,l=r;else{for(var o=!1,d=s.child;d;){if(d===a){o=!0,a=s,l=r;break}if(d===l){o=!0,l=s,a=r;break}d=d.sibling}if(!o){for(d=r.child;d;){if(d===a){o=!0,a=r,l=s;break}if(d===l){o=!0,l=r,a=s;break}d=d.sibling}if(!o)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var E=Object.assign,j=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),O=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),st=Symbol.for("react.memo_cache_sentinel"),rt=Symbol.iterator;function We(e){return e===null||typeof e!="object"?null:(e=rt&&e[rt]||e["@@iterator"],typeof e=="function"?e:null)}var za=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===za?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case I:return"Profiler";case F:return"StrictMode";case Ae:return"Suspense";case He:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case O:return e.displayName||"Context";case te:return(e._context.displayName||"Context")+".Consumer";case fe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:_t(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return _t(e(t))}catch{}}return null}var Mt=Array.isArray,B=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},pe=[],ke=-1;function g(e){return{current:e}}function L(e){0>ke||(e.current=pe[ke],pe[ke]=null,ke--)}function H(e,t){ke++,pe[ke]=e.current,e.current=t}var q=g(null),P=g(null),ae=g(null),ue=g(null);function Ke(e,t){switch(H(ae,t),H(P,e),H(q,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ku(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ku(t),e=yu(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(q),H(q,e)}function Be(){L(q),L(P),L(ae)}function Gl(e){e.memoizedState!==null&&H(ue,e);var t=q.current,a=yu(t,e.type);t!==a&&(H(P,e),H(q,a))}function qs(e){P.current===e&&(L(q),L(P)),ue.current===e&&(L(ue),Bs._currentValue=Z)}var ui,Wn;function La(e){if(ui===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||"",Wn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ui+e+Wn}var fi=!1;function mi(e,t){if(!e||fi)return"";fi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(A){var T=A}Reflect.construct(e,[],z)}else{try{z.call()}catch(A){T=A}e.call(z.prototype)}}else{try{throw Error()}catch(A){T=A}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(A){if(A&&T&&typeof A.stack=="string")return[A.stack,T.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],d=r[1];if(o&&d){var m=o.split(`
`),S=d.split(`
`);for(s=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;for(;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;if(l===m.length||s===S.length)for(l=m.length-1,s=S.length-1;1<=l&&0<=s&&m[l]!==S[s];)s--;for(;1<=l&&0<=s;l--,s--)if(m[l]!==S[s]){if(l!==1||s!==1)do if(l--,s--,0>s||m[l]!==S[s]){var M=`
`+m[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=s);break}}}finally{fi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?La(a):""}function Wf(e,t){switch(e.tag){case 26:case 27:case 5:return La(e.type);case 16:return La("Lazy");case 13:return e.child!==t&&t!==null?La("Suspense Fallback"):La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return mi(e.type,!1);case 11:return mi(e.type.render,!1);case 1:return mi(e.type,!0);case 31:return La("Activity");default:return""}}function Pn(e){try{var t="",a=null;do t+=Wf(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var bi=Object.prototype.hasOwnProperty,pi=i.unstable_scheduleCallback,xi=i.unstable_cancelCallback,Pf=i.unstable_shouldYield,Jf=i.unstable_requestPaint,it=i.unstable_now,$f=i.unstable_getCurrentPriorityLevel,Jn=i.unstable_ImmediatePriority,$n=i.unstable_UserBlockingPriority,Gs=i.unstable_NormalPriority,em=i.unstable_LowPriority,ed=i.unstable_IdlePriority,tm=i.log,am=i.unstable_setDisableYieldValue,Fl=null,ot=null;function oa(e){if(typeof tm=="function"&&am(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(Fl,e)}catch{}}var nt=Math.clz32?Math.clz32:rm,lm=Math.log,sm=Math.LN2;function rm(e){return e>>>=0,e===0?32:31-(lm(e)/sm|0)|0}var Fs=256,Ys=262144,Is=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vs(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var s=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=l&134217727;return d!==0?(l=d&~r,l!==0?s=ja(l):(o&=d,o!==0?s=ja(o):a||(a=d&~e,a!==0&&(s=ja(a))))):(d=l&~r,d!==0?s=ja(d):o!==0?s=ja(o):a||(a=l&~e,a!==0&&(s=ja(a)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:s}function Yl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function im(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(){var e=Is;return Is<<=1,(Is&62914560)===0&&(Is=4194304),e}function hi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Il(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function om(e,t,a,l,s,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,m=e.expirationTimes,S=e.hiddenUpdates;for(a=o&~a;0<a;){var M=31-nt(a),z=1<<M;d[M]=0,m[M]=-1;var T=S[M];if(T!==null)for(S[M]=null,M=0;M<T.length;M++){var A=T[M];A!==null&&(A.lane&=-536870913)}a&=~z}l!==0&&ad(e,l,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function ad(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-nt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ld(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-nt(a),s=1<<l;s&t|e[l]&t&&(e[l]|=t),a&=~s}}function sd(e,t){var a=t&-t;return a=(a&42)!==0?1:gi(a),(a&(e.suspendedLanes|t))!==0?0:a}function gi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rd(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Iu(e.type))}function id(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var na=Math.random().toString(36).slice(2),Fe="__reactFiber$"+na,Pe="__reactProps$"+na,el="__reactContainer$"+na,ki="__reactEvents$"+na,nm="__reactListeners$"+na,dm="__reactHandles$"+na,od="__reactResources$"+na,Vl="__reactMarker$"+na;function yi(e){delete e[Fe],delete e[Pe],delete e[ki],delete e[nm],delete e[dm]}function tl(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[el]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Eu(e);e!==null;){if(a=e[Fe])return a;e=Eu(e)}return t}e=a,a=e.parentNode}return null}function al(e){if(e=e[Fe]||e[el]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(n(33))}function ll(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Vl]=!0}var nd=new Set,dd={};function Ua(e,t){sl(e,t),sl(e+"Capture",t)}function sl(e,t){for(dd[e]=t,e=0;e<t.length;e++)nd.add(t[e])}var cm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cd={},ud={};function um(e){return bi.call(ud,e)?!0:bi.call(cd,e)?!1:cm.test(e)?ud[e]=!0:(cd[e]=!0,!1)}function Xs(e,t,a){if(um(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qs(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function qt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){if(!e._valueTracker){var t=fd(e)?"checked":"value";e._valueTracker=fm(e,t,""+e[t])}}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=fd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mm=/[\n"\\]/g;function gt(e){return e.replace(mm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Si(e,t,a,l,s,r,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ht(t)):e.value!==""+ht(t)&&(e.value=""+ht(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Ti(e,o,ht(t)):a!=null?Ti(e,o,ht(a)):l!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+ht(d):e.removeAttribute("name")}function bd(e,t,a,l,s,r,o,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){wi(e);return}a=a!=null?""+ht(a):"",t=t!=null?""+ht(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),wi(e)}function Ti(e,t,a){t==="number"&&Ks(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function rl(e,t,a,l){if(e=e.options,t){t={};for(var s=0;s<a.length;s++)t["$"+a[s]]=!0;for(a=0;a<e.length;a++)s=t.hasOwnProperty("$"+e[a].value),e[a].selected!==s&&(e[a].selected=s),s&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ht(a),t=null,s=0;s<e.length;s++){if(e[s].value===a){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function pd(e,t,a){if(t!=null&&(t=""+ht(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ht(a):""}function xd(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(n(92));if(Mt(l)){if(1<l.length)throw Error(n(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ht(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),wi(e)}function il(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var bm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hd(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||bm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function gd(e,t,a){if(t!=null&&typeof t!="object")throw Error(n(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&a[s]!==l&&hd(e,s,l)}else for(var r in t)t.hasOwnProperty(r)&&hd(e,r,t[r])}function Ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zs(e){return xm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Ai=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,nl=null;function vd(e){var t=al(e);if(t&&(e=t.stateNode)){var a=e[Pe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Si(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var s=l[Pe]||null;if(!s)throw Error(n(90));Si(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&md(l)}break e;case"textarea":pd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&rl(e,!!a.multiple,t,!1)}}}var Ei=!1;function kd(e,t,a){if(Ei)return e(t,a);Ei=!0;try{var l=e(t);return l}finally{if(Ei=!1,(ol!==null||nl!==null)&&(Ur(),ol&&(t=ol,e=nl,nl=ol=null,vd(t),e)))for(t=0;t<e.length;t++)vd(e[t])}}function Ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Pe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(n(231,t,typeof a));return a}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mi=!1;if(Ft)try{var Kl={};Object.defineProperty(Kl,"passive",{get:function(){Mi=!0}}),window.addEventListener("test",Kl,Kl),window.removeEventListener("test",Kl,Kl)}catch{Mi=!1}var da=null,Bi=null,Ws=null;function yd(){if(Ws)return Ws;var e,t=Bi,a=t.length,l,s="value"in da?da.value:da.textContent,r=s.length;for(e=0;e<a&&t[e]===s[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===s[r-l];l++);return Ws=s.slice(e,1<l?1-l:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Js(){return!0}function wd(){return!1}function Je(e){function t(a,l,s,r,o){this._reactName=a,this._targetInst=s,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Js:wd,this.isPropagationStopped=wd,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=Je(Ha),Zl=E({},Ha,{view:0,detail:0}),hm=Je(Zl),Ni,Di,Wl,er=E({},Zl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wl&&(Wl&&e.type==="mousemove"?(Ni=e.screenX-Wl.screenX,Di=e.screenY-Wl.screenY):Di=Ni=0,Wl=e),Ni)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),Sd=Je(er),gm=E({},er,{dataTransfer:0}),vm=Je(gm),km=E({},Zl,{relatedTarget:0}),zi=Je(km),ym=E({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),wm=Je(ym),Sm=E({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tm=Je(Sm),Cm=E({},Ha,{data:0}),Td=Je(Cm),Am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Em[e])?!!t[e]:!1}function Li(){return Mm}var Bm=E({},Zl,{key:function(e){if(e.key){var t=Am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Li,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=Je(Bm),Dm=E({},er,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Je(Dm),zm=E({},Zl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Li}),Lm=Je(zm),jm=E({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Um=Je(jm),Hm=E({},er,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Je(Hm),_m=E({},Ha,{newState:0,oldState:0}),qm=Je(_m),Gm=[9,13,27,32],ji=Ft&&"CompositionEvent"in window,Pl=null;Ft&&"documentMode"in document&&(Pl=document.documentMode);var Fm=Ft&&"TextEvent"in window&&!Pl,Ad=Ft&&(!ji||Pl&&8<Pl&&11>=Pl),Rd=" ",Ed=!1;function Md(e,t){switch(e){case"keyup":return Gm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dl=!1;function Ym(e,t){switch(e){case"compositionend":return Bd(t);case"keypress":return t.which!==32?null:(Ed=!0,Rd);case"textInput":return e=t.data,e===Rd&&Ed?null:e;default:return null}}function Im(e,t){if(dl)return e==="compositionend"||!ji&&Md(e,t)?(e=yd(),Ws=Bi=da=null,dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ad&&t.locale!=="ko"?null:t.data;default:return null}}var Vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vm[e.type]:t==="textarea"}function Dd(e,t,a,l){ol?nl?nl.push(l):nl=[l]:ol=l,t=Yr(t,"onChange"),0<t.length&&(a=new $s("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Jl=null,$l=null;function Xm(e){bu(e,0)}function tr(e){var t=Xl(e);if(md(t))return e}function zd(e,t){if(e==="change")return t}var Ld=!1;if(Ft){var Ui;if(Ft){var Hi="oninput"in document;if(!Hi){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Hi=typeof jd.oninput=="function"}Ui=Hi}else Ui=!1;Ld=Ui&&(!document.documentMode||9<document.documentMode)}function Ud(){Jl&&(Jl.detachEvent("onpropertychange",Hd),$l=Jl=null)}function Hd(e){if(e.propertyName==="value"&&tr($l)){var t=[];Dd(t,$l,e,Ri(e)),kd(Xm,t)}}function Qm(e,t,a){e==="focusin"?(Ud(),Jl=t,$l=a,Jl.attachEvent("onpropertychange",Hd)):e==="focusout"&&Ud()}function Km(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tr($l)}function Zm(e,t){if(e==="click")return tr(t)}function Wm(e,t){if(e==="input"||e==="change")return tr(t)}function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Pm;function es(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var s=a[l];if(!bi.call(t,s)||!dt(e[s],t[s]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var a=Od(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Od(a)}}function qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ks(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ks(e.document)}return t}function Oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jm=Ft&&"documentMode"in document&&11>=document.documentMode,cl=null,_i=null,ts=null,qi=!1;function Fd(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qi||cl==null||cl!==Ks(l)||(l=cl,"selectionStart"in l&&Oi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ts&&es(ts,l)||(ts=l,l=Yr(_i,"onSelect"),0<l.length&&(t=new $s("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=cl)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var ul={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},Gi={},Yd={};Ft&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function _a(e){if(Gi[e])return Gi[e];if(!ul[e])return e;var t=ul[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Yd)return Gi[e]=t[a];return e}var Id=_a("animationend"),Vd=_a("animationiteration"),Xd=_a("animationstart"),$m=_a("transitionrun"),eb=_a("transitionstart"),tb=_a("transitioncancel"),Qd=_a("transitionend"),Kd=new Map,Fi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fi.push("scrollEnd");function Bt(e,t){Kd.set(e,t),Ua(t,[e])}var ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},vt=[],fl=0,Yi=0;function lr(){for(var e=fl,t=Yi=fl=0;t<e;){var a=vt[t];vt[t++]=null;var l=vt[t];vt[t++]=null;var s=vt[t];vt[t++]=null;var r=vt[t];if(vt[t++]=null,l!==null&&s!==null){var o=l.pending;o===null?s.next=s:(s.next=o.next,o.next=s),l.pending=s}r!==0&&Zd(a,s,r)}}function sr(e,t,a,l){vt[fl++]=e,vt[fl++]=t,vt[fl++]=a,vt[fl++]=l,Yi|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ii(e,t,a,l){return sr(e,t,a,l),rr(e)}function qa(e,t){return sr(e,null,null,t),rr(e)}function Zd(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var s=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-nt(a),e=r.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=a|536870912),r):null}function rr(e){if(50<Ss)throw Ss=0,en=null,Error(n(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ml={};function ab(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new ab(e,t,a,l)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yt(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Wd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ir(e,t,a,l,s,r){var o=0;if(l=e,typeof e=="function")Vi(e)&&(o=1);else if(typeof e=="string")o=op(e,a,q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=ct(31,a,t,s),e.elementType=Re,e.lanes=r,e;case K:return Ga(a.children,s,r,t);case F:o=8,s|=24;break;case I:return e=ct(12,a,t,s|2),e.elementType=I,e.lanes=r,e;case Ae:return e=ct(13,a,t,s),e.elementType=Ae,e.lanes=r,e;case He:return e=ct(19,a,t,s),e.elementType=He,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:o=10;break e;case te:o=9;break e;case fe:o=11;break e;case $:o=14;break e;case Oe:o=16,l=null;break e}o=29,a=Error(n(130,e===null?"null":typeof e,"")),l=null}return t=ct(o,a,t,s),t.elementType=e,t.type=l,t.lanes=r,t}function Ga(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function Xi(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function Pd(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Qi(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jd=new WeakMap;function kt(e,t){if(typeof e=="object"&&e!==null){var a=Jd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Pn(t)},Jd.set(e,t),t)}return{value:e,source:t,stack:Pn(t)}}var bl=[],pl=0,or=null,as=0,yt=[],wt=0,ca=null,jt=1,Ut="";function It(e,t){bl[pl++]=as,bl[pl++]=or,or=e,as=t}function $d(e,t,a){yt[wt++]=jt,yt[wt++]=Ut,yt[wt++]=ca,ca=e;var l=jt;e=Ut;var s=32-nt(l)-1;l&=~(1<<s),a+=1;var r=32-nt(t)+s;if(30<r){var o=s-s%5;r=(l&(1<<o)-1).toString(32),l>>=o,s-=o,jt=1<<32-nt(t)+s|a<<s|l,Ut=r+e}else jt=1<<r|a<<s|l,Ut=e}function Ki(e){e.return!==null&&(It(e,1),$d(e,1,0))}function Zi(e){for(;e===or;)or=bl[--pl],bl[pl]=null,as=bl[--pl],bl[pl]=null;for(;e===ca;)ca=yt[--wt],yt[wt]=null,Ut=yt[--wt],yt[wt]=null,jt=yt[--wt],yt[wt]=null}function e0(e,t){yt[wt++]=jt,yt[wt++]=Ut,yt[wt++]=ca,jt=t.id,Ut=t.overflow,ca=e}var Ye=null,we=null,oe=!1,ua=null,St=!1,Wi=Error(n(519));function fa(e){var t=Error(n(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ls(kt(t,e)),Wi}function t0(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Fe]=e,t[Pe]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<Cs.length;a++)se(Cs[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),bd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),xd(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||gu(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||fa(e,!0)}function a0(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Ye=Ye.return}}function xl(e){if(e!==Ye)return!1;if(!oe)return a0(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xn(e.type,e.memoizedProps)),a=!a),a&&we&&fa(e),a0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));we=Ru(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));we=Ru(e)}else t===27?(t=we,Aa(e.type)?(e=yn,yn=null,we=e):we=t):we=Ye?Ct(e.stateNode.nextSibling):null;return!0}function Fa(){we=Ye=null,oe=!1}function Pi(){var e=ua;return e!==null&&(at===null?at=e:at.push.apply(at,e),ua=null),e}function ls(e){ua===null?ua=[e]:ua.push(e)}var Ji=g(null),Ya=null,Vt=null;function ma(e,t,a){H(Ji,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=Ji.current,L(Ji)}function $i(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function eo(e,t,a,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var o=s.child;r=r.firstContext;e:for(;r!==null;){var d=r;r=s;for(var m=0;m<t.length;m++)if(d.context===t[m]){r.lanes|=a,d=r.alternate,d!==null&&(d.lanes|=a),$i(r.return,a,e),l||(o=null);break e}r=d.next}}else if(s.tag===18){if(o=s.return,o===null)throw Error(n(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),$i(o,a,e),o=null}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}}function hl(e,t,a,l){e=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var o=s.alternate;if(o===null)throw Error(n(387));if(o=o.memoizedProps,o!==null){var d=s.type;dt(s.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(s===ue.current){if(o=s.alternate,o===null)throw Error(n(387));o.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Bs):e=[Bs])}s=s.return}e!==null&&eo(t,e,a,l),t.flags|=262144}function nr(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){Ya=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return l0(Ya,e)}function dr(e,t){return Ya===null&&Ia(e),l0(e,t)}function l0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(n(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var lb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},sb=i.unstable_scheduleCallback,rb=i.unstable_NormalPriority,ze={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new lb,data:new Map,refCount:0}}function ss(e){e.refCount--,e.refCount===0&&sb(rb,function(){e.controller.abort()})}var rs=null,ao=0,gl=0,vl=null;function ib(e,t){if(rs===null){var a=rs=[];ao=0,gl=on(),vl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ao++,t.then(s0,s0),t}function s0(){if(--ao===0&&rs!==null){vl!==null&&(vl.status="fulfilled");var e=rs;rs=null,gl=0,vl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ob(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<a.length;s++)(0,a[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),l}var r0=B.S;B.S=function(e,t){Fc=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ib(e,t),r0!==null&&r0(e,t)};var Va=g(null);function lo(){var e=Va.current;return e!==null?e:ye.pooledCache}function cr(e,t){t===null?H(Va,Va.current):H(Va,t.pool)}function i0(){var e=lo();return e===null?null:{parent:ze._currentValue,pool:e}}var kl=Error(n(460)),so=Error(n(474)),ur=Error(n(542)),fr={then:function(){}};function o0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function n0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,c0(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(n(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,c0(e),e}throw Qa=t,kl}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,kl):a}}var Qa=null;function d0(){if(Qa===null)throw Error(n(459));var e=Qa;return Qa=null,e}function c0(e){if(e===kl||e===ur)throw Error(n(483))}var yl=null,is=0;function mr(e){var t=is;return is+=1,yl===null&&(yl=[]),n0(yl,e,t)}function os(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function br(e,t){throw t.$$typeof===j?Error(n(525)):(e=Object.prototype.toString.call(t),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function u0(e){function t(v,x){if(e){var w=v.deletions;w===null?(v.deletions=[x],v.flags|=16):w.push(x)}}function a(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function l(v){for(var x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function s(v,x){return v=Yt(v,x),v.index=0,v.sibling=null,v}function r(v,x,w){return v.index=w,e?(w=v.alternate,w!==null?(w=w.index,w<x?(v.flags|=67108866,x):w):(v.flags|=67108866,x)):(v.flags|=1048576,x)}function o(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function d(v,x,w,N){return x===null||x.tag!==6?(x=Xi(w,v.mode,N),x.return=v,x):(x=s(x,w),x.return=v,x)}function m(v,x,w,N){var V=w.type;return V===K?M(v,x,w.props.children,N,w.key):x!==null&&(x.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Oe&&Xa(V)===x.type)?(x=s(x,w.props),os(x,w),x.return=v,x):(x=ir(w.type,w.key,w.props,null,v.mode,N),os(x,w),x.return=v,x)}function S(v,x,w,N){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=Qi(w,v.mode,N),x.return=v,x):(x=s(x,w.children||[]),x.return=v,x)}function M(v,x,w,N,V){return x===null||x.tag!==7?(x=Ga(w,v.mode,N,V),x.return=v,x):(x=s(x,w),x.return=v,x)}function z(v,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Xi(""+x,v.mode,w),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Y:return w=ir(x.type,x.key,x.props,null,v.mode,w),os(w,x),w.return=v,w;case X:return x=Qi(x,v.mode,w),x.return=v,x;case Oe:return x=Xa(x),z(v,x,w)}if(Mt(x)||We(x))return x=Ga(x,v.mode,w,null),x.return=v,x;if(typeof x.then=="function")return z(v,mr(x),w);if(x.$$typeof===O)return z(v,dr(v,x),w);br(v,x)}return null}function T(v,x,w,N){var V=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return V!==null?null:d(v,x,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Y:return w.key===V?m(v,x,w,N):null;case X:return w.key===V?S(v,x,w,N):null;case Oe:return w=Xa(w),T(v,x,w,N)}if(Mt(w)||We(w))return V!==null?null:M(v,x,w,N,null);if(typeof w.then=="function")return T(v,x,mr(w),N);if(w.$$typeof===O)return T(v,x,dr(v,w),N);br(v,w)}return null}function A(v,x,w,N,V){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return v=v.get(w)||null,d(x,v,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Y:return v=v.get(N.key===null?w:N.key)||null,m(x,v,N,V);case X:return v=v.get(N.key===null?w:N.key)||null,S(x,v,N,V);case Oe:return N=Xa(N),A(v,x,w,N,V)}if(Mt(N)||We(N))return v=v.get(w)||null,M(x,v,N,V,null);if(typeof N.then=="function")return A(v,x,w,mr(N),V);if(N.$$typeof===O)return A(v,x,w,dr(x,N),V);br(x,N)}return null}function _(v,x,w,N){for(var V=null,ne=null,G=x,ee=x=0,ie=null;G!==null&&ee<w.length;ee++){G.index>ee?(ie=G,G=null):ie=G.sibling;var de=T(v,G,w[ee],N);if(de===null){G===null&&(G=ie);break}e&&G&&de.alternate===null&&t(v,G),x=r(de,x,ee),ne===null?V=de:ne.sibling=de,ne=de,G=ie}if(ee===w.length)return a(v,G),oe&&It(v,ee),V;if(G===null){for(;ee<w.length;ee++)G=z(v,w[ee],N),G!==null&&(x=r(G,x,ee),ne===null?V=G:ne.sibling=G,ne=G);return oe&&It(v,ee),V}for(G=l(G);ee<w.length;ee++)ie=A(G,v,ee,w[ee],N),ie!==null&&(e&&ie.alternate!==null&&G.delete(ie.key===null?ee:ie.key),x=r(ie,x,ee),ne===null?V=ie:ne.sibling=ie,ne=ie);return e&&G.forEach(function(Na){return t(v,Na)}),oe&&It(v,ee),V}function Q(v,x,w,N){if(w==null)throw Error(n(151));for(var V=null,ne=null,G=x,ee=x=0,ie=null,de=w.next();G!==null&&!de.done;ee++,de=w.next()){G.index>ee?(ie=G,G=null):ie=G.sibling;var Na=T(v,G,de.value,N);if(Na===null){G===null&&(G=ie);break}e&&G&&Na.alternate===null&&t(v,G),x=r(Na,x,ee),ne===null?V=Na:ne.sibling=Na,ne=Na,G=ie}if(de.done)return a(v,G),oe&&It(v,ee),V;if(G===null){for(;!de.done;ee++,de=w.next())de=z(v,de.value,N),de!==null&&(x=r(de,x,ee),ne===null?V=de:ne.sibling=de,ne=de);return oe&&It(v,ee),V}for(G=l(G);!de.done;ee++,de=w.next())de=A(G,v,ee,de.value,N),de!==null&&(e&&de.alternate!==null&&G.delete(de.key===null?ee:de.key),x=r(de,x,ee),ne===null?V=de:ne.sibling=de,ne=de);return e&&G.forEach(function(gp){return t(v,gp)}),oe&&It(v,ee),V}function ge(v,x,w,N){if(typeof w=="object"&&w!==null&&w.type===K&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Y:e:{for(var V=w.key;x!==null;){if(x.key===V){if(V=w.type,V===K){if(x.tag===7){a(v,x.sibling),N=s(x,w.props.children),N.return=v,v=N;break e}}else if(x.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Oe&&Xa(V)===x.type){a(v,x.sibling),N=s(x,w.props),os(N,w),N.return=v,v=N;break e}a(v,x);break}else t(v,x);x=x.sibling}w.type===K?(N=Ga(w.props.children,v.mode,N,w.key),N.return=v,v=N):(N=ir(w.type,w.key,w.props,null,v.mode,N),os(N,w),N.return=v,v=N)}return o(v);case X:e:{for(V=w.key;x!==null;){if(x.key===V)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){a(v,x.sibling),N=s(x,w.children||[]),N.return=v,v=N;break e}else{a(v,x);break}else t(v,x);x=x.sibling}N=Qi(w,v.mode,N),N.return=v,v=N}return o(v);case Oe:return w=Xa(w),ge(v,x,w,N)}if(Mt(w))return _(v,x,w,N);if(We(w)){if(V=We(w),typeof V!="function")throw Error(n(150));return w=V.call(w),Q(v,x,w,N)}if(typeof w.then=="function")return ge(v,x,mr(w),N);if(w.$$typeof===O)return ge(v,x,dr(v,w),N);br(v,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(a(v,x.sibling),N=s(x,w),N.return=v,v=N):(a(v,x),N=Xi(w,v.mode,N),N.return=v,v=N),o(v)):a(v,x)}return function(v,x,w,N){try{is=0;var V=ge(v,x,w,N);return yl=null,V}catch(G){if(G===kl||G===ur)throw G;var ne=ct(29,G,null,v.mode);return ne.lanes=N,ne.return=v,ne}finally{}}}var Ka=u0(!0),f0=u0(!1),ba=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ce&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=rr(e),Zd(e,null,a),t}return sr(e,l,t,a),rr(e)}function ns(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ld(e,a)}}function oo(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var s=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?s=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?s=r=t:r=r.next=t}else s=r=t;a={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var no=!1;function ds(){if(no){var e=vl;if(e!==null)throw e}}function cs(e,t,a,l){no=!1;var s=e.updateQueue;ba=!1;var r=s.firstBaseUpdate,o=s.lastBaseUpdate,d=s.shared.pending;if(d!==null){s.shared.pending=null;var m=d,S=m.next;m.next=null,o===null?r=S:o.next=S,o=m;var M=e.alternate;M!==null&&(M=M.updateQueue,d=M.lastBaseUpdate,d!==o&&(d===null?M.firstBaseUpdate=S:d.next=S,M.lastBaseUpdate=m))}if(r!==null){var z=s.baseState;o=0,M=S=m=null,d=r;do{var T=d.lane&-536870913,A=T!==d.lane;if(A?(re&T)===T:(l&T)===T){T!==0&&T===gl&&(no=!0),M!==null&&(M=M.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var _=e,Q=d;T=t;var ge=a;switch(Q.tag){case 1:if(_=Q.payload,typeof _=="function"){z=_.call(ge,z,T);break e}z=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=Q.payload,T=typeof _=="function"?_.call(ge,z,T):_,T==null)break e;z=E({},z,T);break e;case 2:ba=!0}}T=d.callback,T!==null&&(e.flags|=64,A&&(e.flags|=8192),A=s.callbacks,A===null?s.callbacks=[T]:A.push(T))}else A={lane:T,tag:d.tag,payload:d.payload,callback:d.callback,next:null},M===null?(S=M=A,m=z):M=M.next=A,o|=T;if(d=d.next,d===null){if(d=s.shared.pending,d===null)break;A=d,d=A.next,A.next=null,s.lastBaseUpdate=A,s.shared.pending=null}}while(!0);M===null&&(m=z),s.baseState=m,s.firstBaseUpdate=S,s.lastBaseUpdate=M,r===null&&(s.shared.lanes=0),ya|=o,e.lanes=o,e.memoizedState=z}}function m0(e,t){if(typeof e!="function")throw Error(n(191,e));e.call(t)}function b0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)m0(a[e],t)}var wl=g(null),pr=g(0);function p0(e,t){e=ta,H(pr,e),H(wl,t),ta=e|t.baseLanes}function co(){H(pr,ta),H(wl,wl.current)}function uo(){ta=pr.current,L(wl),L(pr)}var ut=g(null),Tt=null;function ha(e){var t=e.alternate;H(Ne,Ne.current&1),H(ut,e),Tt===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(Tt=e)}function fo(e){H(Ne,Ne.current),H(ut,e),Tt===null&&(Tt=e)}function x0(e){e.tag===22?(H(Ne,Ne.current),H(ut,e),Tt===null&&(Tt=e)):ga()}function ga(){H(Ne,Ne.current),H(ut,ut.current)}function ft(e){L(ut),Tt===e&&(Tt=null),L(Ne)}var Ne=g(0);function xr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vn(a)||kn(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,J=null,xe=null,Le=null,hr=!1,Sl=!1,Za=!1,gr=0,us=0,Tl=null,nb=0;function Ee(){throw Error(n(321))}function mo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function bo(e,t,a,l,s,r){return Qt=r,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?$0:Mo,Za=!1,r=a(l,s),Za=!1,Sl&&(r=g0(t,a,l,s)),h0(e),r}function h0(e){B.H=bs;var t=xe!==null&&xe.next!==null;if(Qt=0,Le=xe=J=null,hr=!1,us=0,Tl=null,t)throw Error(n(300));e===null||je||(e=e.dependencies,e!==null&&nr(e)&&(je=!0))}function g0(e,t,a,l){J=e;var s=0;do{if(Sl&&(Tl=null),us=0,Sl=!1,25<=s)throw Error(n(301));if(s+=1,Le=xe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=ec,r=t(a,l)}while(Sl);return r}function db(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?fs(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(J.flags|=1024),t}function po(){var e=gr!==0;return gr=0,e}function xo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ho(e){if(hr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hr=!1}Qt=0,Le=xe=J=null,Sl=!1,us=gr=0,Tl=null}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?J.memoizedState=Le=e:Le=Le.next=e,Le}function De(){if(xe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Le===null?J.memoizedState:Le.next;if(t!==null)Le=t,xe=e;else{if(e===null)throw J.alternate===null?Error(n(467)):Error(n(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?J.memoizedState=Le=e:Le=Le.next=e}return Le}function vr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fs(e){var t=us;return us+=1,Tl===null&&(Tl=[]),e=n0(Tl,e,t),t=J,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?$0:Mo),e}function kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fs(e);if(e.$$typeof===O)return Ie(e)}throw Error(n(438,String(e)))}function go(e){var t=null,a=J.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=J.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vr(),J.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=st;return t.index++,a}function Kt(e,t){return typeof t=="function"?t(e):t}function yr(e){var t=De();return vo(t,xe,e)}function vo(e,t,a){var l=e.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=a;var s=e.baseQueue,r=l.pending;if(r!==null){if(s!==null){var o=s.next;s.next=r.next,r.next=o}t.baseQueue=s=r,l.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var d=o=null,m=null,S=t,M=!1;do{var z=S.lane&-536870913;if(z!==S.lane?(re&z)===z:(Qt&z)===z){var T=S.revertLane;if(T===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),z===gl&&(M=!0);else if((Qt&T)===T){S=S.next,T===gl&&(M=!0);continue}else z={lane:0,revertLane:S.revertLane,gesture:null,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},m===null?(d=m=z,o=r):m=m.next=z,J.lanes|=T,ya|=T;z=S.action,Za&&a(r,z),r=S.hasEagerState?S.eagerState:a(r,z)}else T={lane:z,revertLane:S.revertLane,gesture:S.gesture,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null},m===null?(d=m=T,o=r):m=m.next=T,J.lanes|=z,ya|=z;S=S.next}while(S!==null&&S!==t);if(m===null?o=r:m.next=d,!dt(r,e.memoizedState)&&(je=!0,M&&(a=vl,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=m,l.lastRenderedState=r}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ko(e){var t=De(),a=t.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=e;var l=a.dispatch,s=a.pending,r=t.memoizedState;if(s!==null){a.pending=null;var o=s=s.next;do r=e(r,o.action),o=o.next;while(o!==s);dt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function v0(e,t,a){var l=J,s=De(),r=oe;if(r){if(a===void 0)throw Error(n(407));a=a()}else a=t();var o=!dt((xe||s).memoizedState,a);if(o&&(s.memoizedState=a,je=!0),s=s.queue,So(w0.bind(null,l,s,e),[e]),s.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(l.flags|=2048,Cl(9,{destroy:void 0},y0.bind(null,l,s,a,t),null),ye===null)throw Error(n(349));r||(Qt&127)!==0||k0(l,t,a)}return a}function k0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=J.updateQueue,t===null?(t=vr(),J.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function y0(e,t,a,l){t.value=a,t.getSnapshot=l,S0(t)&&T0(e)}function w0(e,t,a){return a(function(){S0(t)&&T0(e)})}function S0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function T0(e){var t=qa(e,2);t!==null&&lt(t,e,2)}function yo(e){var t=Ze();if(typeof e=="function"){var a=e;if(e=a(),Za){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function C0(e,t,a,l){return e.baseState=a,vo(e,xe,typeof l=="function"?l:Kt)}function cb(e,t,a,l,s){if(Tr(e))throw Error(n(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};B.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,A0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function A0(e,t){var a=t.action,l=t.payload,s=e.state;if(t.isTransition){var r=B.T,o={};B.T=o;try{var d=a(s,l),m=B.S;m!==null&&m(o,d),R0(e,t,d)}catch(S){wo(e,t,S)}finally{r!==null&&o.types!==null&&(r.types=o.types),B.T=r}}else try{r=a(s,l),R0(e,t,r)}catch(S){wo(e,t,S)}}function R0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){E0(e,t,l)},function(l){return wo(e,t,l)}):E0(e,t,a)}function E0(e,t,a){t.status="fulfilled",t.value=a,M0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,A0(e,a)))}function wo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,M0(t),t=t.next;while(t!==l)}e.action=null}function M0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function B0(e,t){return t}function N0(e,t){if(oe){var a=ye.formState;if(a!==null){e:{var l=J;if(oe){if(we){t:{for(var s=we,r=St;s.nodeType!==8;){if(!r){s=null;break t}if(s=Ct(s.nextSibling),s===null){s=null;break t}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){we=Ct(s.nextSibling),l=s.data==="F!";break e}}fa(l)}l=!1}l&&(t=a[0])}}return a=Ze(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B0,lastRenderedState:t},a.queue=l,a=W0.bind(null,J,l),l.dispatch=a,l=yo(!1),r=Eo.bind(null,J,!1,l.queue),l=Ze(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,a=cb.bind(null,J,s,r,a),s.dispatch=a,l.memoizedState=e,[t,a,!1]}function D0(e){var t=De();return z0(t,xe,e)}function z0(e,t,a){if(t=vo(e,t,B0)[0],e=yr(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=fs(t)}catch(o){throw o===kl?ur:o}else l=t;t=De();var s=t.queue,r=s.dispatch;return a!==t.memoizedState&&(J.flags|=2048,Cl(9,{destroy:void 0},ub.bind(null,s,a),null)),[l,r,e]}function ub(e,t){e.action=t}function L0(e){var t=De(),a=xe;if(a!==null)return z0(t,a,e);De(),t=t.memoizedState,a=De();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function Cl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=J.updateQueue,t===null&&(t=vr(),J.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function j0(){return De().memoizedState}function wr(e,t,a,l){var s=Ze();J.flags|=e,s.memoizedState=Cl(1|t,{destroy:void 0},a,l===void 0?null:l)}function Sr(e,t,a,l){var s=De();l=l===void 0?null:l;var r=s.memoizedState.inst;xe!==null&&l!==null&&mo(l,xe.memoizedState.deps)?s.memoizedState=Cl(t,r,a,l):(J.flags|=e,s.memoizedState=Cl(1|t,r,a,l))}function U0(e,t){wr(8390656,8,e,t)}function So(e,t){Sr(2048,8,e,t)}function fb(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=vr(),J.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function H0(e){var t=De().memoizedState;return fb({ref:t,nextImpl:e}),function(){if((ce&2)!==0)throw Error(n(440));return t.impl.apply(void 0,arguments)}}function O0(e,t){return Sr(4,2,e,t)}function _0(e,t){return Sr(4,4,e,t)}function q0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function G0(e,t,a){a=a!=null?a.concat([e]):null,Sr(4,4,q0.bind(null,t,e),a)}function To(){}function F0(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&mo(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Y0(e,t){var a=De();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&mo(t,l[1]))return l[0];if(l=e(),Za){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l}function Co(e,t,a){return a===void 0||(Qt&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Ic(),J.lanes|=e,ya|=e,a)}function I0(e,t,a,l){return dt(a,t)?a:wl.current!==null?(e=Co(e,a,l),dt(e,t)||(je=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(re&261930)===0?(je=!0,e.memoizedState=a):(e=Ic(),J.lanes|=e,ya|=e,t)}function V0(e,t,a,l,s){var r=U.p;U.p=r!==0&&8>r?r:8;var o=B.T,d={};B.T=d,Eo(e,!1,t,a);try{var m=s(),S=B.S;if(S!==null&&S(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var M=ob(m,l);ms(e,t,M,pt(e))}else ms(e,t,l,pt(e))}catch(z){ms(e,t,{then:function(){},status:"rejected",reason:z},pt())}finally{U.p=r,o!==null&&d.types!==null&&(o.types=d.types),B.T=o}}function mb(){}function Ao(e,t,a,l){if(e.tag!==5)throw Error(n(476));var s=X0(e).queue;V0(e,s,t,Z,a===null?mb:function(){return Q0(e),a(l)})}function X0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:Z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Q0(e){var t=X0(e);t.next===null&&(t=e.alternate.memoizedState),ms(e,t.next.queue,{},pt())}function Ro(){return Ie(Bs)}function K0(){return De().memoizedState}function Z0(){return De().memoizedState}function bb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pt();e=pa(a);var l=xa(t,e,a);l!==null&&(lt(l,t,a),ns(l,t,a)),t={cache:to()},e.payload=t;return}t=t.return}}function pb(e,t,a){var l=pt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tr(e)?P0(t,a):(a=Ii(e,t,a,l),a!==null&&(lt(a,e,l),J0(a,t,l)))}function W0(e,t,a){var l=pt();ms(e,t,a,l)}function ms(e,t,a,l){var s={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tr(e))P0(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,d=r(o,a);if(s.hasEagerState=!0,s.eagerState=d,dt(d,o))return sr(e,t,s,0),ye===null&&lr(),!1}catch{}finally{}if(a=Ii(e,t,s,l),a!==null)return lt(a,e,l),J0(a,t,l),!0}return!1}function Eo(e,t,a,l){if(l={lane:2,revertLane:on(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Tr(e)){if(t)throw Error(n(479))}else t=Ii(e,a,l,2),t!==null&&lt(t,e,2)}function Tr(e){var t=e.alternate;return e===J||t!==null&&t===J}function P0(e,t){Sl=hr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function J0(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ld(e,a)}}var bs={readContext:Ie,use:kr,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};bs.useEffectEvent=Ee;var $0={readContext:Ie,use:kr,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:U0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wr(4194308,4,q0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wr(4194308,4,e,t)},useInsertionEffect:function(e,t){wr(4,2,e,t)},useMemo:function(e,t){var a=Ze();t=t===void 0?null:t;var l=e();if(Za){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ze();if(a!==void 0){var s=a(t);if(Za){oa(!0);try{a(t)}finally{oa(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=pb.bind(null,J,e),[l.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,a=W0.bind(null,J,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:To,useDeferredValue:function(e,t){var a=Ze();return Co(a,e,t)},useTransition:function(){var e=yo(!1);return e=V0.bind(null,J,e.queue,!0,!1),Ze().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=J,s=Ze();if(oe){if(a===void 0)throw Error(n(407));a=a()}else{if(a=t(),ye===null)throw Error(n(349));(re&127)!==0||k0(l,t,a)}s.memoizedState=a;var r={value:a,getSnapshot:t};return s.queue=r,U0(w0.bind(null,l,r,e),[e]),l.flags|=2048,Cl(9,{destroy:void 0},y0.bind(null,l,r,a,t),null),a},useId:function(){var e=Ze(),t=ye.identifierPrefix;if(oe){var a=Ut,l=jt;a=(l&~(1<<32-nt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=gr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=nb++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ro,useFormState:N0,useActionState:N0,useOptimistic:function(e){var t=Ze();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Eo.bind(null,J,!0,a),a.dispatch=t,[e,t]},useMemoCache:go,useCacheRefresh:function(){return Ze().memoizedState=bb.bind(null,J)},useEffectEvent:function(e){var t=Ze(),a={impl:e};return t.memoizedState=a,function(){if((ce&2)!==0)throw Error(n(440));return a.impl.apply(void 0,arguments)}}},Mo={readContext:Ie,use:kr,useCallback:F0,useContext:Ie,useEffect:So,useImperativeHandle:G0,useInsertionEffect:O0,useLayoutEffect:_0,useMemo:Y0,useReducer:yr,useRef:j0,useState:function(){return yr(Kt)},useDebugValue:To,useDeferredValue:function(e,t){var a=De();return I0(a,xe.memoizedState,e,t)},useTransition:function(){var e=yr(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fs(e),t]},useSyncExternalStore:v0,useId:K0,useHostTransitionStatus:Ro,useFormState:D0,useActionState:D0,useOptimistic:function(e,t){var a=De();return C0(a,xe,e,t)},useMemoCache:go,useCacheRefresh:Z0};Mo.useEffectEvent=H0;var ec={readContext:Ie,use:kr,useCallback:F0,useContext:Ie,useEffect:So,useImperativeHandle:G0,useInsertionEffect:O0,useLayoutEffect:_0,useMemo:Y0,useReducer:ko,useRef:j0,useState:function(){return ko(Kt)},useDebugValue:To,useDeferredValue:function(e,t){var a=De();return xe===null?Co(a,e,t):I0(a,xe.memoizedState,e,t)},useTransition:function(){var e=ko(Kt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:fs(e),t]},useSyncExternalStore:v0,useId:K0,useHostTransitionStatus:Ro,useFormState:L0,useActionState:L0,useOptimistic:function(e,t){var a=De();return xe!==null?C0(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:go,useCacheRefresh:Z0};ec.useEffectEvent=H0;function Bo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:E({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var No={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pt(),s=pa(l);s.payload=t,a!=null&&(s.callback=a),t=xa(e,s,l),t!==null&&(lt(t,e,l),ns(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pt(),s=pa(l);s.tag=1,s.payload=t,a!=null&&(s.callback=a),t=xa(e,s,l),t!==null&&(lt(t,e,l),ns(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pt(),l=pa(a);l.tag=2,t!=null&&(l.callback=t),t=xa(e,l,a),t!==null&&(lt(t,e,a),ns(t,e,a))}};function tc(e,t,a,l,s,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!es(a,l)||!es(s,r):!0}function ac(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function Wa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=E({},a));for(var s in e)a[s]===void 0&&(a[s]=e[s])}return a}function lc(e){ar(e)}function sc(e){console.error(e)}function rc(e){ar(e)}function Cr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function ic(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Do(e,t,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Cr(e,t)},a}function oc(e){return e=pa(e),e.tag=3,e}function nc(e,t,a,l){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var r=l.value;e.payload=function(){return s(r)},e.callback=function(){ic(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ic(t,a,l),typeof s!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function xb(e,t,a,l,s){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&hl(t,a,s,!0),a=ut.current,a!==null){switch(a.tag){case 31:case 13:return Tt===null?Hr():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=s,l===fr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ln(e,l,s)),!1;case 22:return a.flags|=65536,l===fr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ln(e,l,s)),!1}throw Error(n(435,a.tag))}return ln(e,l,s),Hr(),!1}if(oe)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==Wi&&(e=Error(n(422),{cause:l}),ls(kt(e,a)))):(l!==Wi&&(t=Error(n(423),{cause:l}),ls(kt(t,a))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=kt(l,a),s=Do(e.stateNode,l,s),oo(e,s),Me!==4&&(Me=2)),!1;var r=Error(n(520),{cause:l});if(r=kt(r,a),ws===null?ws=[r]:ws.push(r),Me!==4&&(Me=2),t===null)return!0;l=kt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=s&-s,a.lanes|=e,e=Do(a.stateNode,l,e),oo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(wa===null||!wa.has(r))))return a.flags|=65536,s&=-s,a.lanes|=s,s=oc(s),nc(s,e,a,l),oo(a,s),!1}a=a.return}while(a!==null);return!1}var zo=Error(n(461)),je=!1;function Ve(e,t,a,l){t.child=e===null?f0(t,null,a,l):Ka(t,e.child,a,l)}function dc(e,t,a,l,s){a=a.render;var r=t.ref;if("ref"in l){var o={};for(var d in l)d!=="ref"&&(o[d]=l[d])}else o=l;return Ia(t),l=bo(e,t,a,o,r,s),d=po(),e!==null&&!je?(xo(e,t,s),Zt(e,t,s)):(oe&&d&&Ki(t),t.flags|=1,Ve(e,t,l,s),t.child)}function cc(e,t,a,l,s){if(e===null){var r=a.type;return typeof r=="function"&&!Vi(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,uc(e,t,r,l,s)):(e=ir(a.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Go(e,s)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:es,a(o,l)&&e.ref===t.ref)return Zt(e,t,s)}return t.flags|=1,e=Yt(r,l),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,a,l,s){if(e!==null){var r=e.memoizedProps;if(es(r,l)&&e.ref===t.ref)if(je=!1,t.pendingProps=l=r,Go(e,s))(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Zt(e,t,s)}return Lo(e,t,a,l,s)}function fc(e,t,a,l){var s=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~r}else l=0,t.child=null;return mc(e,t,r,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cr(t,r!==null?r.cachePool:null),r!==null?p0(t,r):co(),x0(t);else return l=t.lanes=536870912,mc(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(cr(t,r.cachePool),p0(t,r),ga(),t.memoizedState=null):(e!==null&&cr(t,null),co(),ga());return Ve(e,t,s,a),t.child}function ps(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,a,l,s){var r=lo();return r=r===null?null:{parent:ze._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&cr(t,null),co(),x0(t),e!==null&&hl(e,t,l,!0),t.childLanes=s,null}function Ar(e,t){return t=Er({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bc(e,t,a){return Ka(t,e.child,null,a),e=Ar(t,t.pendingProps),e.flags|=2,ft(t),t.memoizedState=null,e}function hb(e,t,a){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(l.mode==="hidden")return e=Ar(t,l),t.lanes=536870912,ps(null,e);if(fo(t),(e=we)?(e=Au(e,St),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:jt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Pd(e),a.return=t,t.child=a,Ye=t,we=null)):e=null,e===null)throw fa(t);return t.lanes=536870912,null}return Ar(t,l)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(fo(t),s)if(t.flags&256)t.flags&=-257,t=bc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(n(558));else if(je||hl(e,t,a,!1),s=(a&e.childLanes)!==0,je||s){if(l=ye,l!==null&&(o=sd(l,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,qa(e,o),lt(l,e,o),zo;Hr(),t=bc(e,t,a)}else e=r.treeContext,we=Ct(o.nextSibling),Ye=t,oe=!0,ua=null,St=!1,e!==null&&e0(t,e),t=Ar(t,l),t.flags|=4096;return t}return e=Yt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rr(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(n(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Lo(e,t,a,l,s){return Ia(t),a=bo(e,t,a,l,void 0,s),l=po(),e!==null&&!je?(xo(e,t,s),Zt(e,t,s)):(oe&&l&&Ki(t),t.flags|=1,Ve(e,t,a,s),t.child)}function pc(e,t,a,l,s,r){return Ia(t),t.updateQueue=null,a=g0(t,l,a,s),h0(e),l=po(),e!==null&&!je?(xo(e,t,r),Zt(e,t,r)):(oe&&l&&Ki(t),t.flags|=1,Ve(e,t,a,r),t.child)}function xc(e,t,a,l,s){if(Ia(t),t.stateNode===null){var r=ml,o=a.contextType;typeof o=="object"&&o!==null&&(r=Ie(o)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=No,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},ro(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Ie(o):ml,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Bo(t,a,o,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&No.enqueueReplaceState(r,r.state,null),cs(t,l,r,s),ds(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var d=t.memoizedProps,m=Wa(a,d);r.props=m;var S=r.context,M=a.contextType;o=ml,typeof M=="object"&&M!==null&&(o=Ie(M));var z=a.getDerivedStateFromProps;M=typeof z=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||S!==o)&&ac(t,r,l,o),ba=!1;var T=t.memoizedState;r.state=T,cs(t,l,r,s),ds(),S=t.memoizedState,d||T!==S||ba?(typeof z=="function"&&(Bo(t,a,z,l),S=t.memoizedState),(m=ba||tc(t,a,m,l,T,S,o))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=S),r.props=l,r.state=S,r.context=o,l=m):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,io(e,t),o=t.memoizedProps,M=Wa(a,o),r.props=M,z=t.pendingProps,T=r.context,S=a.contextType,m=ml,typeof S=="object"&&S!==null&&(m=Ie(S)),d=a.getDerivedStateFromProps,(S=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==z||T!==m)&&ac(t,r,l,m),ba=!1,T=t.memoizedState,r.state=T,cs(t,l,r,s),ds();var A=t.memoizedState;o!==z||T!==A||ba||e!==null&&e.dependencies!==null&&nr(e.dependencies)?(typeof d=="function"&&(Bo(t,a,d,l),A=t.memoizedState),(M=ba||tc(t,a,M,l,T,A,m)||e!==null&&e.dependencies!==null&&nr(e.dependencies))?(S||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,A,m),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,A,m)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),r.props=l,r.state=A,r.context=m,l=M):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,Rr(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ka(t,e.child,null,s),t.child=Ka(t,null,a,s)):Ve(e,t,a,s),t.memoizedState=r.state,e=t.child):e=Zt(e,t,s),e}function hc(e,t,a,l){return Fa(),t.flags|=256,Ve(e,t,a,l),t.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uo(e){return{baseLanes:e,cachePool:i0()}}function Ho(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=bt),e}function gc(e,t,a){var l=t.pendingProps,s=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),o&&(s=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(s?ha(t):ga(),(e=we)?(e=Au(e,St),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:jt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Pd(e),a.return=t,t.child=a,Ye=t,we=null)):e=null,e===null)throw fa(t);return kn(e)?t.lanes=32:t.lanes=536870912,null}var d=l.children;return l=l.fallback,s?(ga(),s=t.mode,d=Er({mode:"hidden",children:d},s),l=Ga(l,s,a,null),d.return=t,l.return=t,d.sibling=l,t.child=d,l=t.child,l.memoizedState=Uo(a),l.childLanes=Ho(e,o,a),t.memoizedState=jo,ps(null,l)):(ha(t),Oo(t,d))}var m=e.memoizedState;if(m!==null&&(d=m.dehydrated,d!==null)){if(r)t.flags&256?(ha(t),t.flags&=-257,t=_o(e,t,a)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,t=null):(ga(),d=l.fallback,s=t.mode,l=Er({mode:"visible",children:l.children},s),d=Ga(d,s,a,null),d.flags|=2,l.return=t,d.return=t,l.sibling=d,t.child=l,Ka(t,e.child,null,a),l=t.child,l.memoizedState=Uo(a),l.childLanes=Ho(e,o,a),t.memoizedState=jo,t=ps(null,l));else if(ha(t),kn(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var S=o.dgst;o=S,l=Error(n(419)),l.stack="",l.digest=o,ls({value:l,source:null,stack:null}),t=_o(e,t,a)}else if(je||hl(e,t,a,!1),o=(a&e.childLanes)!==0,je||o){if(o=ye,o!==null&&(l=sd(o,a),l!==0&&l!==m.retryLane))throw m.retryLane=l,qa(e,l),lt(o,e,l),zo;vn(d)||Hr(),t=_o(e,t,a)}else vn(d)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,we=Ct(d.nextSibling),Ye=t,oe=!0,ua=null,St=!1,e!==null&&e0(t,e),t=Oo(t,l.children),t.flags|=4096);return t}return s?(ga(),d=l.fallback,s=t.mode,m=e.child,S=m.sibling,l=Yt(m,{mode:"hidden",children:l.children}),l.subtreeFlags=m.subtreeFlags&65011712,S!==null?d=Yt(S,d):(d=Ga(d,s,a,null),d.flags|=2),d.return=t,l.return=t,l.sibling=d,t.child=l,ps(null,l),l=t.child,d=e.child.memoizedState,d===null?d=Uo(a):(s=d.cachePool,s!==null?(m=ze._currentValue,s=s.parent!==m?{parent:m,pool:m}:s):s=i0(),d={baseLanes:d.baseLanes|a,cachePool:s}),l.memoizedState=d,l.childLanes=Ho(e,o,a),t.memoizedState=jo,ps(e.child,l)):(ha(t),a=e.child,e=a.sibling,a=Yt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Oo(e,t){return t=Er({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Er(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function _o(e,t,a){return Ka(t,e.child,null,a),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vc(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),$i(e.return,t,a)}function qo(e,t,a,l,s,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:s,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=s,o.treeForkCount=r)}function kc(e,t,a){var l=t.pendingProps,s=l.revealOrder,r=l.tail;l=l.children;var o=Ne.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,H(Ne,o),Ve(e,t,l,a),l=oe?as:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,a,t);else if(e.tag===19)vc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(a=t.child,s=null;a!==null;)e=a.alternate,e!==null&&xr(e)===null&&(s=a),a=a.sibling;a=s,a===null?(s=t.child,t.child=null):(s=a.sibling,a.sibling=null),qo(t,!1,s,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&xr(e)===null){t.child=s;break}e=s.sibling,s.sibling=a,a=s,s=e}qo(t,!0,a,null,r,l);break;case"together":qo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Zt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(hl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(n(153));if(t.child!==null){for(e=t.child,a=Yt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Yt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Go(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nr(e)))}function gb(e,t,a){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),ma(t,ze,e.memoizedState.cache),Fa();break;case 27:case 5:Gl(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:ma(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?gc(e,t,a):(ha(t),e=Zt(e,t,a),e!==null?e.sibling:null);ha(t);break;case 19:var s=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(hl(e,t,a,!1),l=(a&t.childLanes)!==0),s){if(l)return kc(e,t,a);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),H(Ne,Ne.current),l)break;return null;case 22:return t.lanes=0,fc(e,t,a,t.pendingProps);case 24:ma(t,ze,e.memoizedState.cache)}return Zt(e,t,a)}function yc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)je=!0;else{if(!Go(e,a)&&(t.flags&128)===0)return je=!1,gb(e,t,a);je=(e.flags&131072)!==0}else je=!1,oe&&(t.flags&1048576)!==0&&$d(t,as,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Vi(e)?(l=Wa(e,l),t.tag=1,t=xc(null,t,e,l,a)):(t.tag=0,t=Lo(null,t,e,l,a));else{if(e!=null){var s=e.$$typeof;if(s===fe){t.tag=11,t=dc(null,t,e,l,a);break e}else if(s===$){t.tag=14,t=cc(null,t,e,l,a);break e}}throw t=_t(e)||e,Error(n(306,t,""))}}return t;case 0:return Lo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,s=Wa(l,t.pendingProps),xc(e,t,l,s,a);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(n(387));l=t.pendingProps;var r=t.memoizedState;s=r.element,io(e,t),cs(t,l,null,a);var o=t.memoizedState;if(l=o.cache,ma(t,ze,l),l!==r.cache&&eo(t,[ze],a,!0),ds(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=hc(e,t,l,a);break e}else if(l!==s){s=kt(Error(n(424)),t),ls(s),t=hc(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Ct(e.firstChild),Ye=t,oe=!0,ua=null,St=!0,a=f0(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Fa(),l===s){t=Zt(e,t,a);break e}Ve(e,t,l,a)}t=t.child}return t;case 26:return Rr(e,t),e===null?(a=Du(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Ir(ae.current).createElement(a),l[Fe]=t,l[Pe]=e,Xe(l,a,e),qe(l),t.stateNode=l):t.memoizedState=Du(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gl(t),e===null&&oe&&(l=t.stateNode=Mu(t.type,t.pendingProps,ae.current),Ye=t,St=!0,s=we,Aa(t.type)?(yn=s,we=Ct(l.firstChild)):we=s),Ve(e,t,t.pendingProps.children,a),Rr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((s=l=we)&&(l=Kb(l,t.type,t.pendingProps,St),l!==null?(t.stateNode=l,Ye=t,we=Ct(l.firstChild),St=!1,s=!0):s=!1),s||fa(t)),Gl(t),s=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,xn(s,r)?l=null:o!==null&&xn(s,o)&&(t.flags|=32),t.memoizedState!==null&&(s=bo(e,t,db,null,null,a),Bs._currentValue=s),Rr(e,t),Ve(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=we)&&(a=Zb(a,t.pendingProps,St),a!==null?(t.stateNode=a,Ye=t,we=null,e=!0):e=!1),e||fa(t)),null;case 13:return gc(e,t,a);case 4:return Ke(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ka(t,null,l,a):Ve(e,t,l,a),t.child;case 11:return dc(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ma(t,t.type,l.value),Ve(e,t,l.children,a),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,Ia(t),s=Ie(s),l=l(s),t.flags|=1,Ve(e,t,l,a),t.child;case 14:return cc(e,t,t.type,t.pendingProps,a);case 15:return uc(e,t,t.type,t.pendingProps,a);case 19:return kc(e,t,a);case 31:return hb(e,t,a);case 22:return fc(e,t,a,t.pendingProps);case 24:return Ia(t),l=Ie(ze),e===null?(s=lo(),s===null&&(s=ye,r=to(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=a),s=r),t.memoizedState={parent:l,cache:s},ro(t),ma(t,ze,s)):((e.lanes&a)!==0&&(io(e,t),cs(t,null,null,a),ds()),s=e.memoizedState,r=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),ma(t,ze,l)):(l=r.cache,ma(t,ze,l),l!==s.cache&&eo(t,[ze],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(n(156,t.tag))}function Wt(e){e.flags|=4}function Fo(e,t,a,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Kc())e.flags|=8192;else throw Qa=fr,so}else e.flags&=-16777217}function wc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hu(t))if(Kc())e.flags|=8192;else throw Qa=fr,so}function Mr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?td():536870912,e.lanes|=t,Ml|=t)}function xs(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)a|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function vb(e,t,a){var l=t.pendingProps;switch(Zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Xt(ze),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xl(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pi())),Se(t),null;case 26:var s=t.type,r=t.memoizedState;return e===null?(Wt(t),r!==null?(Se(t),wc(t,r)):(Se(t),Fo(t,s,null,l,a))):r?r!==e.memoizedState?(Wt(t),Se(t),wc(t,r)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Wt(t),Se(t),Fo(t,s,e,l,a)),null;case 27:if(qs(t),a=ae.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(n(166));return Se(t),null}e=q.current,xl(t)?t0(t):(e=Mu(s,l,a),t.stateNode=e,Wt(t))}return Se(t),null;case 5:if(qs(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(!l){if(t.stateNode===null)throw Error(n(166));return Se(t),null}if(r=q.current,xl(t))t0(t);else{var o=Ir(ae.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?o.createElement(s,{is:l.is}):o.createElement(s)}}r[Fe]=t,r[Pe]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(Xe(r,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wt(t)}}return Se(t),Fo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Wt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(n(166));if(e=ae.current,xl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,s=Ye,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||gu(e.nodeValue,a)),e||fa(t,!0)}else e=Ir(e).createTextNode(l),e[Fe]=t,t.stateNode=e}return Se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=xl(t),a!==null){if(e===null){if(!l)throw Error(n(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(557));e[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else a=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(n(558))}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=xl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(n(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));s[Fe]=t}else Fa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),s=!1}else s=Pi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==s&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Mr(t,t.updateQueue),Se(t),null);case 4:return Be(),e===null&&un(t.stateNode.containerInfo),Se(t),null;case 10:return Xt(t.type),Se(t),null;case 19:if(L(Ne),l=t.memoizedState,l===null)return Se(t),null;if(s=(t.flags&128)!==0,r=l.rendering,r===null)if(s)xs(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=xr(e),r!==null){for(t.flags|=128,xs(l,!1),e=r.updateQueue,t.updateQueue=e,Mr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Wd(a,e),a=a.sibling;return H(Ne,Ne.current&1|2),oe&&It(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&it()>Lr&&(t.flags|=128,s=!0,xs(l,!1),t.lanes=4194304)}else{if(!s)if(e=xr(r),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Mr(t,e),xs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!oe)return Se(t),null}else 2*it()-l.renderingStartTime>Lr&&a!==536870912&&(t.flags|=128,s=!0,xs(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=it(),e.sibling=null,a=Ne.current,H(Ne,s?a&1|2:a&1),oe&&It(t,l.treeForkCount),e):(Se(t),null);case 22:case 23:return ft(t),uo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&Mr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&L(Va),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(ze),Se(t),null;case 25:return null;case 30:return null}throw Error(n(156,t.tag))}function kb(e,t){switch(Zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(ze),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qs(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(n(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(n(340));Fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ne),null;case 4:return Be(),null;case 10:return Xt(t.type),null;case 22:case 23:return ft(t),uo(),e!==null&&L(Va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(ze),null;case 25:return null;default:return null}}function Sc(e,t){switch(Zi(t),t.tag){case 3:Xt(ze),Be();break;case 26:case 27:case 5:qs(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:L(Ne);break;case 10:Xt(t.type);break;case 22:case 23:ft(t),uo(),e!==null&&L(Va);break;case 24:Xt(ze)}}function hs(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){l=void 0;var r=a.create,o=a.inst;l=r(),o.destroy=l}a=a.next}while(a!==s)}}catch(d){be(t,t.return,d)}}function va(e,t,a){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var r=s.next;l=r;do{if((l.tag&e)===e){var o=l.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,s=t;var m=a,S=d;try{S()}catch(M){be(s,m,M)}}}l=l.next}while(l!==r)}}catch(M){be(t,t.return,M)}}function Tc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{b0(t,a)}catch(l){be(e,e.return,l)}}}function Cc(e,t,a){a.props=Wa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){be(e,t,l)}}function gs(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(s){be(e,t,s)}}function Ht(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(s){be(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){be(e,t,s)}else a.current=null}function Ac(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(s){be(e,e.return,s)}}function Yo(e,t,a){try{var l=e.stateNode;Fb(l,e.type,a,t),l[Pe]=t}catch(s){be(e,e.return,s)}}function Rc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Io(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vo(e,t,a),e=e.sibling;e!==null;)Vo(e,t,a),e=e.sibling}function Br(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Br(e,t,a),e=e.sibling;e!==null;)Br(e,t,a),e=e.sibling}function Ec(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Xe(t,l,a),t[Fe]=e,t[Pe]=a}catch(r){be(e,e.return,r)}}var Pt=!1,Ue=!1,Xo=!1,Mc=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function yb(e,t){if(e=e.containerInfo,bn=Pr,e=Gd(e),Oi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var s=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,d=-1,m=-1,S=0,M=0,z=e,T=null;t:for(;;){for(var A;z!==a||s!==0&&z.nodeType!==3||(d=o+s),z!==r||l!==0&&z.nodeType!==3||(m=o+l),z.nodeType===3&&(o+=z.nodeValue.length),(A=z.firstChild)!==null;)T=z,z=A;for(;;){if(z===e)break t;if(T===a&&++S===s&&(d=o),T===r&&++M===l&&(m=o),(A=z.nextSibling)!==null)break;z=T,T=z.parentNode}z=A}a=d===-1||m===-1?null:{start:d,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(pn={focusedElem:e,selectionRange:a},Pr=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)s=e[a],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,s=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var _=Wa(a.type,s);e=l.getSnapshotBeforeUpdate(_,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(Q){be(a,a.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)gn(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gn(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(n(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Bc(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$t(e,a),l&4&&hs(5,a);break;case 1:if($t(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){be(a,a.return,o)}else{var s=Wa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){be(a,a.return,o)}}l&64&&Tc(a),l&512&&gs(a,a.return);break;case 3:if($t(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{b0(e,t)}catch(o){be(a,a.return,o)}}break;case 27:t===null&&l&4&&Ec(a);case 26:case 5:$t(e,a),t===null&&l&4&&Ac(a),l&512&&gs(a,a.return);break;case 12:$t(e,a);break;case 31:$t(e,a),l&4&&zc(e,a);break;case 13:$t(e,a),l&4&&Lc(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bb.bind(null,a),Wb(e,a))));break;case 22:if(l=a.memoizedState!==null||Pt,!l){t=t!==null&&t.memoizedState!==null||Ue,s=Pt;var r=Ue;Pt=l,(Ue=t)&&!r?ea(e,a,(a.subtreeFlags&8772)!==0):$t(e,a),Pt=s,Ue=r}break;case 30:break;default:$t(e,a)}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,$e=!1;function Jt(e,t,a){for(a=a.child;a!==null;)Dc(e,t,a),a=a.sibling}function Dc(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Fl,a)}catch{}switch(a.tag){case 26:Ue||Ht(a,t),Jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ue||Ht(a,t);var l=Te,s=$e;Aa(a.type)&&(Te=a.stateNode,$e=!1),Jt(e,t,a),Rs(a.stateNode),Te=l,$e=s;break;case 5:Ue||Ht(a,t);case 6:if(l=Te,s=$e,Te=null,Jt(e,t,a),Te=l,$e=s,Te!==null)if($e)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(a.stateNode)}catch(r){be(a,t,r)}else try{Te.removeChild(a.stateNode)}catch(r){be(a,t,r)}break;case 18:Te!==null&&($e?(e=Te,Tu(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hl(e)):Tu(Te,a.stateNode));break;case 4:l=Te,s=$e,Te=a.stateNode.containerInfo,$e=!0,Jt(e,t,a),Te=l,$e=s;break;case 0:case 11:case 14:case 15:va(2,a,t),Ue||va(4,a,t),Jt(e,t,a);break;case 1:Ue||(Ht(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Cc(a,t,l)),Jt(e,t,a);break;case 21:Jt(e,t,a);break;case 22:Ue=(l=Ue)||a.memoizedState!==null,Jt(e,t,a),Ue=l;break;default:Jt(e,t,a)}}function zc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hl(e)}catch(a){be(t,t.return,a)}}}function Lc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hl(e)}catch(a){be(t,t.return,a)}}function wb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Mc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Mc),t;default:throw Error(n(435,e.tag))}}function Nr(e,t){var a=wb(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var s=Nb.bind(null,e,l);l.then(s,s)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var s=a[l],r=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Aa(d.type)){Te=d.stateNode,$e=!1;break e}break;case 5:Te=d.stateNode,$e=!1;break e;case 3:case 4:Te=d.stateNode.containerInfo,$e=!0;break e}d=d.return}if(Te===null)throw Error(n(160));Dc(r,o,s),Te=null,$e=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jc(t,e),t=t.sibling}var Nt=null;function jc(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),l&4&&(va(3,e,e.return),hs(3,e),va(5,e,e.return));break;case 1:et(t,e),tt(e),l&512&&(Ue||a===null||Ht(a,a.return)),l&64&&Pt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var s=Nt;if(et(t,e),tt(e),l&512&&(Ue||a===null||Ht(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":r=s.getElementsByTagName("title")[0],(!r||r[Vl]||r[Fe]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(l),s.head.insertBefore(r,s.querySelector("head > title"))),Xe(r,l,a),r[Fe]=e,qe(r),l=r;break e;case"link":var o=ju("link","href",s).get(l+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(r=o[d],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}r=s.createElement(l),Xe(r,l,a),s.head.appendChild(r);break;case"meta":if(o=ju("meta","content",s).get(l+(a.content||""))){for(d=0;d<o.length;d++)if(r=o[d],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}r=s.createElement(l),Xe(r,l,a),s.head.appendChild(r);break;default:throw Error(n(468,l))}r[Fe]=e,qe(r),l=r}e.stateNode=l}else Uu(s,e.type,e.stateNode);else e.stateNode=Lu(s,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?Uu(s,e.type,e.stateNode):Lu(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),l&512&&(Ue||a===null||Ht(a,a.return)),a!==null&&l&4&&Yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),l&512&&(Ue||a===null||Ht(a,a.return)),e.flags&32){s=e.stateNode;try{il(s,"")}catch(_){be(e,e.return,_)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,Yo(e,s,a!==null?a.memoizedProps:s)),l&1024&&(Xo=!0);break;case 6:if(et(t,e),tt(e),l&4){if(e.stateNode===null)throw Error(n(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(_){be(e,e.return,_)}}break;case 3:if(Qr=null,s=Nt,Nt=Vr(t.containerInfo),et(t,e),Nt=s,tt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Hl(t.containerInfo)}catch(_){be(e,e.return,_)}Xo&&(Xo=!1,Uc(e));break;case 4:l=Nt,Nt=Vr(e.stateNode.containerInfo),et(t,e),tt(e),Nt=l;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nr(e,l)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zr=it()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nr(e,l)));break;case 22:s=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,S=Pt,M=Ue;if(Pt=S||s,Ue=M||m,et(t,e),Ue=M,Pt=S,tt(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(a===null||m||Pt||Ue||Pa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(r=m.stateNode,s)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=m.stateNode;var z=m.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null;d.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(_){be(m,m.return,_)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=s?"":m.memoizedProps}catch(_){be(m,m.return,_)}}}else if(t.tag===18){if(a===null){m=t;try{var A=m.stateNode;s?Cu(A,!0):Cu(m.stateNode,!1)}catch(_){be(m,m.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Nr(e,a))));break;case 19:et(t,e),tt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Nr(e,l)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Rc(l)){a=l;break}l=l.return}if(a==null)throw Error(n(160));switch(a.tag){case 27:var s=a.stateNode,r=Io(e);Br(e,r,s);break;case 5:var o=a.stateNode;a.flags&32&&(il(o,""),a.flags&=-33);var d=Io(e);Br(e,d,o);break;case 3:case 4:var m=a.stateNode.containerInfo,S=Io(e);Vo(e,S,m);break;default:throw Error(n(161))}}catch(M){be(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bc(e,t.alternate,t),t=t.sibling}function Pa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:va(4,t,t.return),Pa(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Cc(t,t.return,a),Pa(t);break;case 27:Rs(t.stateNode);case 26:case 5:Ht(t,t.return),Pa(t);break;case 22:t.memoizedState===null&&Pa(t);break;case 30:Pa(t);break;default:Pa(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:ea(s,r,a),hs(4,r);break;case 1:if(ea(s,r,a),l=r,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(S){be(l,l.return,S)}if(l=r,s=l.updateQueue,s!==null){var d=l.stateNode;try{var m=s.shared.hiddenCallbacks;if(m!==null)for(s.shared.hiddenCallbacks=null,s=0;s<m.length;s++)m0(m[s],d)}catch(S){be(l,l.return,S)}}a&&o&64&&Tc(r),gs(r,r.return);break;case 27:Ec(r);case 26:case 5:ea(s,r,a),a&&l===null&&o&4&&Ac(r),gs(r,r.return);break;case 12:ea(s,r,a);break;case 31:ea(s,r,a),a&&o&4&&zc(s,r);break;case 13:ea(s,r,a),a&&o&4&&Lc(s,r);break;case 22:r.memoizedState===null&&ea(s,r,a),gs(r,r.return);break;case 30:break;default:ea(s,r,a)}t=t.sibling}}function Qo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ss(a))}function Ko(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ss(e))}function Dt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hc(e,t,a,l),t=t.sibling}function Hc(e,t,a,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,l),s&2048&&hs(9,t);break;case 1:Dt(e,t,a,l);break;case 3:Dt(e,t,a,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ss(e)));break;case 12:if(s&2048){Dt(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,d=r.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){be(t,t.return,m)}}else Dt(e,t,a,l);break;case 31:Dt(e,t,a,l);break;case 13:Dt(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?Dt(e,t,a,l):vs(e,t):r._visibility&2?Dt(e,t,a,l):(r._visibility|=2,Al(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Qo(o,t);break;case 24:Dt(e,t,a,l),s&2048&&Ko(t.alternate,t);break;default:Dt(e,t,a,l)}}function Al(e,t,a,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,d=a,m=l,S=o.flags;switch(o.tag){case 0:case 11:case 15:Al(r,o,d,m,s),hs(8,o);break;case 23:break;case 22:var M=o.stateNode;o.memoizedState!==null?M._visibility&2?Al(r,o,d,m,s):vs(r,o):(M._visibility|=2,Al(r,o,d,m,s)),s&&S&2048&&Qo(o.alternate,o);break;case 24:Al(r,o,d,m,s),s&&S&2048&&Ko(o.alternate,o);break;default:Al(r,o,d,m,s)}t=t.sibling}}function vs(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,s=l.flags;switch(l.tag){case 22:vs(a,l),s&2048&&Qo(l.alternate,l);break;case 24:vs(a,l),s&2048&&Ko(l.alternate,l);break;default:vs(a,l)}t=t.sibling}}var ks=8192;function Rl(e,t,a){if(e.subtreeFlags&ks)for(e=e.child;e!==null;)Oc(e,t,a),e=e.sibling}function Oc(e,t,a){switch(e.tag){case 26:Rl(e,t,a),e.flags&ks&&e.memoizedState!==null&&np(a,Nt,e.memoizedState,e.memoizedProps);break;case 5:Rl(e,t,a);break;case 3:case 4:var l=Nt;Nt=Vr(e.stateNode.containerInfo),Rl(e,t,a),Nt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ks,ks=16777216,Rl(e,t,a),ks=l):Rl(e,t,a));break;default:Rl(e,t,a)}}function _c(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ys(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Gc(l,e)}_c(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qc(e),e=e.sibling}function qc(e){switch(e.tag){case 0:case 11:case 15:ys(e),e.flags&2048&&va(9,e,e.return);break;case 3:ys(e);break;case 12:ys(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dr(e)):ys(e);break;default:ys(e)}}function Dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ge=l,Gc(l,e)}_c(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:va(8,t,t.return),Dr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Dr(t));break;default:Dr(t)}e=e.sibling}}function Gc(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:va(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ss(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ge=l;else e:for(a=e;Ge!==null;){l=Ge;var s=l.sibling,r=l.return;if(Nc(l),l===a){Ge=null;break e}if(s!==null){s.return=r,Ge=s;break e}Ge=r}}}var Sb={getCacheForType:function(e){var t=Ie(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ie(ze).controller.signal}},Tb=typeof WeakMap=="function"?WeakMap:Map,ce=0,ye=null,le=null,re=0,me=0,mt=null,ka=!1,El=!1,Zo=!1,ta=0,Me=0,ya=0,Ja=0,Wo=0,bt=0,Ml=0,ws=null,at=null,Po=!1,zr=0,Fc=0,Lr=1/0,jr=null,wa=null,_e=0,Sa=null,Bl=null,aa=0,Jo=0,$o=null,Yc=null,Ss=0,en=null;function pt(){return(ce&2)!==0&&re!==0?re&-re:B.T!==null?on():rd()}function Ic(){if(bt===0)if((re&536870912)===0||oe){var e=Ys;Ys<<=1,(Ys&3932160)===0&&(Ys=262144),bt=e}else bt=536870912;return e=ut.current,e!==null&&(e.flags|=32),bt}function lt(e,t,a){(e===ye&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),Ta(e,re,bt,!1)),Il(e,a),((ce&2)===0||e!==ye)&&(e===ye&&((ce&2)===0&&(Ja|=a),Me===4&&Ta(e,re,bt,!1)),Ot(e))}function Vc(e,t,a){if((ce&6)!==0)throw Error(n(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Yl(e,t),s=l?Rb(e,t):an(e,t,!0),r=l;do{if(s===0){El&&!l&&Ta(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Cb(a)){s=an(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;s=ws;var m=d.current.memoizedState.isDehydrated;if(m&&(Nl(d,o).flags|=256),o=an(d,o,!1),o!==2){if(Zo&&!m){d.errorRecoveryDisabledLanes|=r,Ja|=r,s=4;break e}r=at,at=s,r!==null&&(at===null?at=r:at.push.apply(at,r))}s=o}if(r=!1,s!==2)continue}}if(s===1){Nl(e,0),Ta(e,t,0,!0);break}e:{switch(l=e,r=s,r){case 0:case 1:throw Error(n(345));case 4:if((t&4194048)!==t)break;case 6:Ta(l,t,bt,!ka);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(n(329))}if((t&62914560)===t&&(s=zr+300-it(),10<s)){if(Ta(l,t,bt,!ka),Vs(l,0,!0)!==0)break e;aa=t,l.timeoutHandle=wu(Xc.bind(null,l,a,at,jr,Po,t,bt,Ja,Ml,ka,r,"Throttled",-0,0),s);break e}Xc(l,a,at,jr,Po,t,bt,Ja,Ml,ka,r,null,-0,0)}}break}while(!0);Ot(e)}function Xc(e,t,a,l,s,r,o,d,m,S,M,z,T,A){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Oc(t,r,z);var _=(r&62914560)===r?zr-it():(r&4194048)===r?Fc-it():0;if(_=dp(z,_),_!==null){aa=r,e.cancelPendingCommit=_(eu.bind(null,e,t,r,a,l,s,o,d,m,M,z,null,T,A)),Ta(e,r,o,!S);return}}eu(e,t,r,a,l,s,o,d,m)}function Cb(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var s=a[l],r=s.getSnapshot;s=s.value;try{if(!dt(r(),s))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ta(e,t,a,l){t&=~Wo,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var r=31-nt(s),o=1<<r;l[r]=-1,s&=~o}a!==0&&ad(e,a,t)}function Ur(){return(ce&6)===0?(Ts(0),!1):!0}function tn(){if(le!==null){if(me===0)var e=le.return;else e=le,Vt=Ya=null,ho(e),yl=null,is=0,e=le;for(;e!==null;)Sc(e.alternate,e),e=e.return;le=null}}function Nl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,tn(),ye=e,le=a=Yt(e.current,null),re=t,me=0,mt=null,ka=!1,El=Yl(e,t),Zo=!1,Ml=bt=Wo=Ja=ya=Me=0,at=ws=null,Po=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-nt(l),r=1<<s;t|=e[s],l&=~r}return ta=t,lr(),a}function Qc(e,t){J=null,B.H=bs,t===kl||t===ur?(t=d0(),me=3):t===so?(t=d0(),me=4):me=t===zo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,mt=t,le===null&&(Me=1,Cr(e,kt(t,e.current)))}function Kc(){var e=ut.current;return e===null?!0:(re&4194048)===re?Tt===null:(re&62914560)===re||(re&536870912)!==0?e===Tt:!1}function Zc(){var e=B.H;return B.H=bs,e===null?bs:e}function Wc(){var e=B.A;return B.A=Sb,e}function Hr(){Me=4,ka||(re&4194048)!==re&&ut.current!==null||(El=!0),(ya&134217727)===0&&(Ja&134217727)===0||ye===null||Ta(ye,re,bt,!1)}function an(e,t,a){var l=ce;ce|=2;var s=Zc(),r=Wc();(ye!==e||re!==t)&&(jr=null,Nl(e,t)),t=!1;var o=Me;e:do try{if(me!==0&&le!==null){var d=le,m=mt;switch(me){case 8:tn(),o=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var S=me;if(me=0,mt=null,Dl(e,d,m,S),a&&El){o=0;break e}break;default:S=me,me=0,mt=null,Dl(e,d,m,S)}}Ab(),o=Me;break}catch(M){Qc(e,M)}while(!0);return t&&e.shellSuspendCounter++,Vt=Ya=null,ce=l,B.H=s,B.A=r,le===null&&(ye=null,re=0,lr()),o}function Ab(){for(;le!==null;)Pc(le)}function Rb(e,t){var a=ce;ce|=2;var l=Zc(),s=Wc();ye!==e||re!==t?(jr=null,Lr=it()+500,Nl(e,t)):El=Yl(e,t);e:do try{if(me!==0&&le!==null){t=le;var r=mt;t:switch(me){case 1:me=0,mt=null,Dl(e,t,r,1);break;case 2:case 9:if(o0(r)){me=0,mt=null,Jc(t);break}t=function(){me!==2&&me!==9||ye!==e||(me=7),Ot(e)},r.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:o0(r)?(me=0,mt=null,Jc(t)):(me=0,mt=null,Dl(e,t,r,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var d=le;if(o?Hu(o):d.stateNode.complete){me=0,mt=null;var m=d.sibling;if(m!==null)le=m;else{var S=d.return;S!==null?(le=S,Or(S)):le=null}break t}}me=0,mt=null,Dl(e,t,r,5);break;case 6:me=0,mt=null,Dl(e,t,r,6);break;case 8:tn(),Me=6;break e;default:throw Error(n(462))}}Eb();break}catch(M){Qc(e,M)}while(!0);return Vt=Ya=null,B.H=l,B.A=s,ce=a,le!==null?0:(ye=null,re=0,lr(),Me)}function Eb(){for(;le!==null&&!Pf();)Pc(le)}function Pc(e){var t=yc(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Or(e):le=t}function Jc(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=pc(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=pc(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:ho(t);default:Sc(a,t),t=le=Wd(t,ta),t=yc(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Or(e):le=t}function Dl(e,t,a,l){Vt=Ya=null,ho(t),yl=null,is=0;var s=t.return;try{if(xb(e,s,t,a,re)){Me=1,Cr(e,kt(a,e.current)),le=null;return}}catch(r){if(s!==null)throw le=s,r;Me=1,Cr(e,kt(a,e.current)),le=null;return}t.flags&32768?(oe||l===1?e=!0:El||(re&536870912)!==0?e=!1:(ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=ut.current,l!==null&&l.tag===13&&(l.flags|=16384))),$c(t,e)):Or(t)}function Or(e){var t=e;do{if((t.flags&32768)!==0){$c(t,ka);return}e=t.return;var a=vb(t.alternate,t,ta);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Me===0&&(Me=5)}function $c(e,t){do{var a=kb(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Me=6,le=null}function eu(e,t,a,l,s,r,o,d,m){e.cancelPendingCommit=null;do _r();while(_e!==0);if((ce&6)!==0)throw Error(n(327));if(t!==null){if(t===e.current)throw Error(n(177));if(r=t.lanes|t.childLanes,r|=Yi,om(e,a,r,o,d,m),e===ye&&(le=ye=null,re=0),Bl=t,Sa=e,aa=a,Jo=r,$o=s,Yc=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Db(Gs,function(){return ru(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,s=U.p,U.p=2,o=ce,ce|=4;try{yb(e,t,a)}finally{ce=o,U.p=s,B.T=l}}_e=1,tu(),au(),lu()}}function tu(){if(_e===1){_e=0;var e=Sa,t=Bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var l=U.p;U.p=2;var s=ce;ce|=4;try{jc(t,e);var r=pn,o=Gd(e.containerInfo),d=r.focusedElem,m=r.selectionRange;if(o!==d&&d&&d.ownerDocument&&qd(d.ownerDocument.documentElement,d)){if(m!==null&&Oi(d)){var S=m.start,M=m.end;if(M===void 0&&(M=S),"selectionStart"in d)d.selectionStart=S,d.selectionEnd=Math.min(M,d.value.length);else{var z=d.ownerDocument||document,T=z&&z.defaultView||window;if(T.getSelection){var A=T.getSelection(),_=d.textContent.length,Q=Math.min(m.start,_),ge=m.end===void 0?Q:Math.min(m.end,_);!A.extend&&Q>ge&&(o=ge,ge=Q,Q=o);var v=_d(d,Q),x=_d(d,ge);if(v&&x&&(A.rangeCount!==1||A.anchorNode!==v.node||A.anchorOffset!==v.offset||A.focusNode!==x.node||A.focusOffset!==x.offset)){var w=z.createRange();w.setStart(v.node,v.offset),A.removeAllRanges(),Q>ge?(A.addRange(w),A.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),A.addRange(w))}}}}for(z=[],A=d;A=A.parentNode;)A.nodeType===1&&z.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<z.length;d++){var N=z[d];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Pr=!!bn,pn=bn=null}finally{ce=s,U.p=l,B.T=a}}e.current=t,_e=2}}function au(){if(_e===2){_e=0;var e=Sa,t=Bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var l=U.p;U.p=2;var s=ce;ce|=4;try{Bc(e,t.alternate,t)}finally{ce=s,U.p=l,B.T=a}}_e=3}}function lu(){if(_e===4||_e===3){_e=0,Jf();var e=Sa,t=Bl,a=aa,l=Yc;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_e=5:(_e=0,Bl=Sa=null,su(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(wa=null),vi(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=B.T,s=U.p,U.p=2,B.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var d=l[o];r(d.value,{componentStack:d.stack})}}finally{B.T=t,U.p=s}}(aa&3)!==0&&_r(),Ot(e),s=e.pendingLanes,(a&261930)!==0&&(s&42)!==0?e===en?Ss++:(Ss=0,en=e):Ss=0,Ts(0)}}function su(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ss(t)))}function _r(){return tu(),au(),lu(),ru()}function ru(){if(_e!==5)return!1;var e=Sa,t=Jo;Jo=0;var a=vi(aa),l=B.T,s=U.p;try{U.p=32>a?32:a,B.T=null,a=$o,$o=null;var r=Sa,o=aa;if(_e=0,Bl=Sa=null,aa=0,(ce&6)!==0)throw Error(n(331));var d=ce;if(ce|=4,qc(r.current),Hc(r,r.current,o,a),ce=d,Ts(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Fl,r)}catch{}return!0}finally{U.p=s,B.T=l,su(e,t)}}function iu(e,t,a){t=kt(a,t),t=Do(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(Il(e,2),Ot(e))}function be(e,t,a){if(e.tag===3)iu(e,e,a);else for(;t!==null;){if(t.tag===3){iu(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))){e=kt(a,e),a=oc(2),l=xa(t,a,2),l!==null&&(nc(a,l,t,e),Il(l,2),Ot(l));break}}t=t.return}}function ln(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Tb;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(a)||(Zo=!0,s.add(a),e=Mb.bind(null,e,t,a),t.then(e,e))}function Mb(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(re&a)===a&&(Me===4||Me===3&&(re&62914560)===re&&300>it()-zr?(ce&2)===0&&Nl(e,0):Wo|=a,Ml===re&&(Ml=0)),Ot(e)}function ou(e,t){t===0&&(t=td()),e=qa(e,t),e!==null&&(Il(e,t),Ot(e))}function Bb(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ou(e,a)}function Nb(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(a=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(n(314))}l!==null&&l.delete(t),ou(e,a)}function Db(e,t){return pi(e,t)}var qr=null,zl=null,sn=!1,Gr=!1,rn=!1,Ca=0;function Ot(e){e!==zl&&e.next===null&&(zl===null?qr=zl=e:zl=zl.next=e),Gr=!0,sn||(sn=!0,Lb())}function Ts(e,t){if(!rn&&Gr){rn=!0;do for(var a=!1,l=qr;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var r=0;else{var o=l.suspendedLanes,d=l.pingedLanes;r=(1<<31-nt(42|e)+1)-1,r&=s&~(o&~d),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,uu(l,r))}else r=re,r=Vs(l,l===ye?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(r&3)===0||Yl(l,r)||(a=!0,uu(l,r));l=l.next}while(a);rn=!1}}function zb(){nu()}function nu(){Gr=sn=!1;var e=0;Ca!==0&&Ib()&&(e=Ca);for(var t=it(),a=null,l=qr;l!==null;){var s=l.next,r=du(l,t);r===0?(l.next=null,a===null?qr=s:a.next=s,s===null&&(zl=a)):(a=l,(e!==0||(r&3)!==0)&&(Gr=!0)),l=s}_e!==0&&_e!==5||Ts(e),Ca!==0&&(Ca=0)}function du(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-nt(r),d=1<<o,m=s[o];m===-1?((d&a)===0||(d&l)!==0)&&(s[o]=im(d,t)):m<=t&&(e.expiredLanes|=d),r&=~d}if(t=ye,a=re,a=Vs(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&xi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&xi(l),vi(a)){case 2:case 8:a=$n;break;case 32:a=Gs;break;case 268435456:a=ed;break;default:a=Gs}return l=cu.bind(null,e),a=pi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&xi(l),e.callbackPriority=2,e.callbackNode=null,2}function cu(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(_r()&&e.callbackNode!==a)return null;var l=re;return l=Vs(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Vc(e,l,t),du(e,it()),e.callbackNode!=null&&e.callbackNode===a?cu.bind(null,e):null)}function uu(e,t){if(_r())return null;Vc(e,t,!0)}function Lb(){Xb(function(){(ce&6)!==0?pi(Jn,zb):nu()})}function on(){if(Ca===0){var e=gl;e===0&&(e=Fs,Fs<<=1,(Fs&261888)===0&&(Fs=256)),Ca=e}return Ca}function fu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zs(""+e)}function mu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function jb(e,t,a,l,s){if(t==="submit"&&a&&a.stateNode===s){var r=fu((s[Pe]||null).action),o=l.submitter;o&&(t=(t=o[Pe]||null)?fu(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var d=new $s("action","action",null,l,s);e.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ca!==0){var m=o?mu(s,o):new FormData(s);Ao(a,{pending:!0,data:m,method:s.method,action:r},null,m)}}else typeof r=="function"&&(d.preventDefault(),m=o?mu(s,o):new FormData(s),Ao(a,{pending:!0,data:m,method:s.method,action:r},r,m))},currentTarget:s}]})}}for(var nn=0;nn<Fi.length;nn++){var dn=Fi[nn],Ub=dn.toLowerCase(),Hb=dn[0].toUpperCase()+dn.slice(1);Bt(Ub,"on"+Hb)}Bt(Id,"onAnimationEnd"),Bt(Vd,"onAnimationIteration"),Bt(Xd,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt($m,"onTransitionRun"),Bt(eb,"onTransitionStart"),Bt(tb,"onTransitionCancel"),Bt(Qd,"onTransitionEnd"),sl("onMouseEnter",["mouseout","mouseover"]),sl("onMouseLeave",["mouseout","mouseover"]),sl("onPointerEnter",["pointerout","pointerover"]),sl("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ob=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cs));function bu(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],s=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var d=l[o],m=d.instance,S=d.currentTarget;if(d=d.listener,m!==r&&s.isPropagationStopped())break e;r=d,s.currentTarget=S;try{r(s)}catch(M){ar(M)}s.currentTarget=null,r=m}else for(o=0;o<l.length;o++){if(d=l[o],m=d.instance,S=d.currentTarget,d=d.listener,m!==r&&s.isPropagationStopped())break e;r=d,s.currentTarget=S;try{r(s)}catch(M){ar(M)}s.currentTarget=null,r=m}}}}function se(e,t){var a=t[ki];a===void 0&&(a=t[ki]=new Set);var l=e+"__bubble";a.has(l)||(pu(t,e,2,!1),a.add(l))}function cn(e,t,a){var l=0;t&&(l|=4),pu(a,e,l,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function un(e){if(!e[Fr]){e[Fr]=!0,nd.forEach(function(a){a!=="selectionchange"&&(Ob.has(a)||cn(a,!1,e),cn(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,cn("selectionchange",!1,t))}}function pu(e,t,a,l){switch(Iu(t)){case 2:var s=fp;break;case 8:s=mp;break;default:s=An}a=s.bind(null,t,a,e),s=void 0,!Mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,a,{capture:!0,passive:s}):e.addEventListener(t,a,!0):s!==void 0?e.addEventListener(t,a,{passive:s}):e.addEventListener(t,a,!1)}function fn(e,t,a,l,s){var r=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var d=l.stateNode.containerInfo;if(d===s)break;if(o===4)for(o=l.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===s)return;o=o.return}for(;d!==null;){if(o=tl(d),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){l=r=o;continue e}d=d.parentNode}}l=l.return}kd(function(){var S=r,M=Ri(a),z=[];e:{var T=Kd.get(e);if(T!==void 0){var A=$s,_=e;switch(e){case"keypress":if(Ps(a)===0)break e;case"keydown":case"keyup":A=Nm;break;case"focusin":_="focus",A=zi;break;case"focusout":_="blur",A=zi;break;case"beforeblur":case"afterblur":A=zi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Lm;break;case Id:case Vd:case Xd:A=wm;break;case Qd:A=Um;break;case"scroll":case"scrollend":A=hm;break;case"wheel":A=Om;break;case"copy":case"cut":case"paste":A=Tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Cd;break;case"toggle":case"beforetoggle":A=qm}var Q=(t&4)!==0,ge=!Q&&(e==="scroll"||e==="scrollend"),v=Q?T!==null?T+"Capture":null:T;Q=[];for(var x=S,w;x!==null;){var N=x;if(w=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||w===null||v===null||(N=Ql(x,v),N!=null&&Q.push(As(x,N,w))),ge)break;x=x.return}0<Q.length&&(T=new A(T,_,null,a,M),z.push({event:T,listeners:Q}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",T&&a!==Ai&&(_=a.relatedTarget||a.fromElement)&&(tl(_)||_[el]))break e;if((A||T)&&(T=M.window===M?M:(T=M.ownerDocument)?T.defaultView||T.parentWindow:window,A?(_=a.relatedTarget||a.toElement,A=S,_=_?tl(_):null,_!==null&&(ge=p(_),Q=_.tag,_!==ge||Q!==5&&Q!==27&&Q!==6)&&(_=null)):(A=null,_=S),A!==_)){if(Q=Sd,N="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Cd,N="onPointerLeave",v="onPointerEnter",x="pointer"),ge=A==null?T:Xl(A),w=_==null?T:Xl(_),T=new Q(N,x+"leave",A,a,M),T.target=ge,T.relatedTarget=w,N=null,tl(M)===S&&(Q=new Q(v,x+"enter",_,a,M),Q.target=w,Q.relatedTarget=ge,N=Q),ge=N,A&&_)t:{for(Q=_b,v=A,x=_,w=0,N=v;N;N=Q(N))w++;N=0;for(var V=x;V;V=Q(V))N++;for(;0<w-N;)v=Q(v),w--;for(;0<N-w;)x=Q(x),N--;for(;w--;){if(v===x||x!==null&&v===x.alternate){Q=v;break t}v=Q(v),x=Q(x)}Q=null}else Q=null;A!==null&&xu(z,T,A,Q,!1),_!==null&&ge!==null&&xu(z,ge,_,Q,!0)}}e:{if(T=S?Xl(S):window,A=T.nodeName&&T.nodeName.toLowerCase(),A==="select"||A==="input"&&T.type==="file")var ne=zd;else if(Nd(T))if(Ld)ne=Wm;else{ne=Km;var G=Qm}else A=T.nodeName,!A||A.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?S&&Ci(S.elementType)&&(ne=zd):ne=Zm;if(ne&&(ne=ne(e,S))){Dd(z,ne,a,M);break e}G&&G(e,T,S),e==="focusout"&&S&&T.type==="number"&&S.memoizedProps.value!=null&&Ti(T,"number",T.value)}switch(G=S?Xl(S):window,e){case"focusin":(Nd(G)||G.contentEditable==="true")&&(cl=G,_i=S,ts=null);break;case"focusout":ts=_i=cl=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,Fd(z,a,M);break;case"selectionchange":if(Jm)break;case"keydown":case"keyup":Fd(z,a,M)}var ee;if(ji)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else dl?Md(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(Ad&&a.locale!=="ko"&&(dl||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&dl&&(ee=yd()):(da=M,Bi="value"in da?da.value:da.textContent,dl=!0)),G=Yr(S,ie),0<G.length&&(ie=new Td(ie,e,null,a,M),z.push({event:ie,listeners:G}),ee?ie.data=ee:(ee=Bd(a),ee!==null&&(ie.data=ee)))),(ee=Fm?Ym(e,a):Im(e,a))&&(ie=Yr(S,"onBeforeInput"),0<ie.length&&(G=new Td("onBeforeInput","beforeinput",null,a,M),z.push({event:G,listeners:ie}),G.data=ee)),jb(z,e,S,a,M)}bu(z,t)})}function As(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Yr(e,t){for(var a=t+"Capture",l=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Ql(e,a),s!=null&&l.unshift(As(e,s,r)),s=Ql(e,t),s!=null&&l.push(As(e,s,r))),e.tag===3)return l;e=e.return}return[]}function _b(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xu(e,t,a,l,s){for(var r=t._reactName,o=[];a!==null&&a!==l;){var d=a,m=d.alternate,S=d.stateNode;if(d=d.tag,m!==null&&m===l)break;d!==5&&d!==26&&d!==27||S===null||(m=S,s?(S=Ql(a,r),S!=null&&o.unshift(As(a,S,m))):s||(S=Ql(a,r),S!=null&&o.push(As(a,S,m)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var qb=/\r\n?/g,Gb=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(qb,`
`).replace(Gb,"")}function gu(e,t){return t=hu(t),hu(e)===t}function he(e,t,a,l,s,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||il(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&il(e,""+l);break;case"className":Qs(e,"class",l);break;case"tabIndex":Qs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Qs(e,a,l);break;case"style":gd(e,l,r);break;case"data":if(t!=="object"){Qs(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zs(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",s.name,s,null),he(e,t,"formEncType",s.formEncType,s,null),he(e,t,"formMethod",s.formMethod,s,null),he(e,t,"formTarget",s.formTarget,s,null)):(he(e,t,"encType",s.encType,s,null),he(e,t,"method",s.method,s,null),he(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Zs(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(n(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(n(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Zs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Xs(e,"popover",l);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Xs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pm.get(a)||a,Xs(e,a,l))}}function mn(e,t,a,l,s,r){switch(a){case"style":gd(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(n(61));if(a=l.__html,a!=null){if(s.children!=null)throw Error(n(60));e.innerHTML=a}}break;case"children":typeof l=="string"?il(e,l):(typeof l=="number"||typeof l=="bigint")&&il(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),t=a.slice(2,s?a.length-7:void 0),r=e[Pe]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,s);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Xs(e,a,l)}}}function Xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,s=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:he(e,t,r,o,a,null)}}s&&he(e,t,"srcSet",a.srcSet,a,null),l&&he(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var d=r=o=s=null,m=null,S=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":s=M;break;case"type":o=M;break;case"checked":m=M;break;case"defaultChecked":S=M;break;case"value":r=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(n(137,t));break;default:he(e,t,l,M,a,null)}}bd(e,r,d,m,S,o,s,!1);return;case"select":se("invalid",e),l=o=r=null;for(s in a)if(a.hasOwnProperty(s)&&(d=a[s],d!=null))switch(s){case"value":r=d;break;case"defaultValue":o=d;break;case"multiple":l=d;default:he(e,t,s,d,a,null)}t=r,a=o,e.multiple=!!l,t!=null?rl(e,!!l,t,!1):a!=null&&rl(e,!!l,a,!0);return;case"textarea":se("invalid",e),r=s=l=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":l=d;break;case"defaultValue":s=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(n(91));break;default:he(e,t,o,d,a,null)}xd(e,l,s,r);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,m,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<Cs.length;l++)se(Cs[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(S in a)if(a.hasOwnProperty(S)&&(l=a[S],l!=null))switch(S){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:he(e,t,S,l,a,null)}return;default:if(Ci(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&mn(e,t,M,l,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(l=a[d],l!=null&&he(e,t,d,l,a,null))}function Fb(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,o=null,d=null,m=null,S=null,M=null;for(A in a){var z=a[A];if(a.hasOwnProperty(A)&&z!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=z;default:l.hasOwnProperty(A)||he(e,t,A,null,l,z)}}for(var T in l){var A=l[T];if(z=a[T],l.hasOwnProperty(T)&&(A!=null||z!=null))switch(T){case"type":r=A;break;case"name":s=A;break;case"checked":S=A;break;case"defaultChecked":M=A;break;case"value":o=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(n(137,t));break;default:A!==z&&he(e,t,T,A,l,z)}}Si(e,o,d,m,S,M,r,s);return;case"select":A=o=d=T=null;for(r in a)if(m=a[r],a.hasOwnProperty(r)&&m!=null)switch(r){case"value":break;case"multiple":A=m;default:l.hasOwnProperty(r)||he(e,t,r,null,l,m)}for(s in l)if(r=l[s],m=a[s],l.hasOwnProperty(s)&&(r!=null||m!=null))switch(s){case"value":T=r;break;case"defaultValue":d=r;break;case"multiple":o=r;default:r!==m&&he(e,t,s,r,l,m)}t=d,a=o,l=A,T!=null?rl(e,!!a,T,!1):!!l!=!!a&&(t!=null?rl(e,!!a,t,!0):rl(e,!!a,a?[]:"",!1));return;case"textarea":A=T=null;for(d in a)if(s=a[d],a.hasOwnProperty(d)&&s!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:he(e,t,d,null,l,s)}for(o in l)if(s=l[o],r=a[o],l.hasOwnProperty(o)&&(s!=null||r!=null))switch(o){case"value":T=s;break;case"defaultValue":A=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(n(91));break;default:s!==r&&he(e,t,o,s,l,r)}pd(e,T,A);return;case"option":for(var _ in a)if(T=a[_],a.hasOwnProperty(_)&&T!=null&&!l.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:he(e,t,_,null,l,T)}for(m in l)if(T=l[m],A=a[m],l.hasOwnProperty(m)&&T!==A&&(T!=null||A!=null))switch(m){case"selected":e.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:he(e,t,m,T,l,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in a)T=a[Q],a.hasOwnProperty(Q)&&T!=null&&!l.hasOwnProperty(Q)&&he(e,t,Q,null,l,T);for(S in l)if(T=l[S],A=a[S],l.hasOwnProperty(S)&&T!==A&&(T!=null||A!=null))switch(S){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(n(137,t));break;default:he(e,t,S,T,l,A)}return;default:if(Ci(t)){for(var ge in a)T=a[ge],a.hasOwnProperty(ge)&&T!==void 0&&!l.hasOwnProperty(ge)&&mn(e,t,ge,void 0,l,T);for(M in l)T=l[M],A=a[M],!l.hasOwnProperty(M)||T===A||T===void 0&&A===void 0||mn(e,t,M,T,l,A);return}}for(var v in a)T=a[v],a.hasOwnProperty(v)&&T!=null&&!l.hasOwnProperty(v)&&he(e,t,v,null,l,T);for(z in l)T=l[z],A=a[z],!l.hasOwnProperty(z)||T===A||T==null&&A==null||he(e,t,z,T,l,A)}function vu(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var s=a[l],r=s.transferSize,o=s.initiatorType,d=s.duration;if(r&&d&&vu(o)){for(o=0,d=s.responseEnd,l+=1;l<a.length;l++){var m=a[l],S=m.startTime;if(S>d)break;var M=m.transferSize,z=m.initiatorType;M&&vu(z)&&(m=m.responseEnd,o+=M*(m<d?1:(d-S)/(m-S)))}if(--l,t+=8*(r+o)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bn=null,pn=null;function Ir(e){return e.nodeType===9?e:e.ownerDocument}function ku(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yu(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xn(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hn=null;function Ib(){var e=window.event;return e&&e.type==="popstate"?e===hn?!1:(hn=e,!0):(hn=null,!1)}var wu=typeof setTimeout=="function"?setTimeout:void 0,Vb=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,Xb=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(e){return Su.resolve(null).then(e).catch(Qb)}:wu;function Qb(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Tu(e,t){var a=t,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(s),Hl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Rs(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rs(a);for(var r=a.firstChild;r;){var o=r.nextSibling,d=r.nodeName;r[Vl]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&Rs(e.ownerDocument.body);a=s}while(a);Hl(t)}function Cu(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function gn(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gn(a),yi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Kb(e,t,a,l){for(;e.nodeType===1;){var s=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Ct(e.nextSibling),e===null)break}return null}function Zb(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ct(e.nextSibling),e===null))return null;return e}function Au(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ct(e.nextSibling),e===null))return null;return e}function vn(e){return e.data==="$?"||e.data==="$~"}function kn(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wb(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var yn=null;function Ru(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ct(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Mu(e,t,a){switch(t=Ir(a),e){case"html":if(e=t.documentElement,!e)throw Error(n(452));return e;case"head":if(e=t.head,!e)throw Error(n(453));return e;case"body":if(e=t.body,!e)throw Error(n(454));return e;default:throw Error(n(451))}}function Rs(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yi(e)}var At=new Map,Bu=new Set;function Vr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=U.d;U.d={f:Pb,r:Jb,D:$b,C:ep,L:tp,m:ap,X:sp,S:lp,M:rp};function Pb(){var e=la.f(),t=Ur();return e||t}function Jb(e){var t=al(e);t!==null&&t.tag===5&&t.type==="form"?Q0(t):la.r(e)}var Ll=typeof document>"u"?null:document;function Nu(e,t,a){var l=Ll;if(l&&typeof t=="string"&&t){var s=gt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),Bu.has(s)||(Bu.add(s),e={rel:e,crossOrigin:a,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),Xe(t,"link",e),qe(t),l.head.appendChild(t)))}}function $b(e){la.D(e),Nu("dns-prefetch",e,null)}function ep(e,t){la.C(e,t),Nu("preconnect",e,t)}function tp(e,t,a){la.L(e,t,a);var l=Ll;if(l&&e&&t){var s='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+gt(a.imageSizes)+'"]')):s+='[href="'+gt(e)+'"]';var r=s;switch(t){case"style":r=jl(e);break;case"script":r=Ul(e)}At.has(r)||(e=E({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),At.set(r,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(Es(r))||t==="script"&&l.querySelector(Ms(r))||(t=l.createElement("link"),Xe(t,"link",e),qe(t),l.head.appendChild(t)))}}function ap(e,t){la.m(e,t);var a=Ll;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+gt(l)+'"][href="'+gt(e)+'"]',r=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ul(e)}if(!At.has(r)&&(e=E({rel:"modulepreload",href:e},t),At.set(r,e),a.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ms(r)))return}l=a.createElement("link"),Xe(l,"link",e),qe(l),a.head.appendChild(l)}}}function lp(e,t,a){la.S(e,t,a);var l=Ll;if(l&&e){var s=ll(l).hoistableStyles,r=jl(e);t=t||"default";var o=s.get(r);if(!o){var d={loading:0,preload:null};if(o=l.querySelector(Es(r)))d.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":t},a),(a=At.get(r))&&wn(e,a);var m=o=l.createElement("link");qe(m),Xe(m,"link",e),m._p=new Promise(function(S,M){m.onload=S,m.onerror=M}),m.addEventListener("load",function(){d.loading|=1}),m.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Xr(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:d},s.set(r,o)}}}function sp(e,t){la.X(e,t);var a=Ll;if(a&&e){var l=ll(a).hoistableScripts,s=Ul(e),r=l.get(s);r||(r=a.querySelector(Ms(s)),r||(e=E({src:e,async:!0},t),(t=At.get(s))&&Sn(e,t),r=a.createElement("script"),qe(r),Xe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(s,r))}}function rp(e,t){la.M(e,t);var a=Ll;if(a&&e){var l=ll(a).hoistableScripts,s=Ul(e),r=l.get(s);r||(r=a.querySelector(Ms(s)),r||(e=E({src:e,async:!0,type:"module"},t),(t=At.get(s))&&Sn(e,t),r=a.createElement("script"),qe(r),Xe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(s,r))}}function Du(e,t,a,l){var s=(s=ae.current)?Vr(s):null;if(!s)throw Error(n(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=jl(a.href),a=ll(s).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=jl(a.href);var r=ll(s).hoistableStyles,o=r.get(e);if(o||(s=s.ownerDocument||s,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=s.querySelector(Es(e)))&&!r._p&&(o.instance=r,o.state.loading=5),At.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(e,a),r||ip(s,e,a,o.state))),t&&l===null)throw Error(n(528,""));return o}if(t&&l!==null)throw Error(n(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ul(a),a=ll(s).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,e))}}function jl(e){return'href="'+gt(e)+'"'}function Es(e){return'link[rel="stylesheet"]['+e+"]"}function zu(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function ip(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Xe(t,"link",a),qe(t),e.head.appendChild(t))}function Ul(e){return'[src="'+gt(e)+'"]'}function Ms(e){return"script[async]"+e}function Lu(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+gt(a.href)+'"]');if(l)return t.instance=l,qe(l),l;var s=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Xe(l,"style",s),Xr(l,a.precedence,e),t.instance=l;case"stylesheet":s=jl(a.href);var r=e.querySelector(Es(s));if(r)return t.state.loading|=4,t.instance=r,qe(r),r;l=zu(a),(s=At.get(s))&&wn(l,s),r=(e.ownerDocument||e).createElement("link"),qe(r);var o=r;return o._p=new Promise(function(d,m){o.onload=d,o.onerror=m}),Xe(r,"link",l),t.state.loading|=4,Xr(r,a.precedence,e),t.instance=r;case"script":return r=Ul(a.src),(s=e.querySelector(Ms(r)))?(t.instance=s,qe(s),s):(l=a,(s=At.get(r))&&(l=E({},a),Sn(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),qe(s),Xe(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(n(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Xr(l,a.precedence,e));return t.instance}function Xr(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,r=s,o=0;o<l.length;o++){var d=l[o];if(d.dataset.precedence===t)r=d;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function wn(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Sn(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Qr=null;function ju(e,t,a){if(Qr===null){var l=new Map,s=Qr=new Map;s.set(a,l)}else s=Qr,l=s.get(a),l||(l=new Map,s.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),s=0;s<a.length;s++){var r=a[s];if(!(r[Vl]||r[Fe]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var d=l.get(o);d?d.push(r):l.set(o,[r])}}return l}function Uu(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function op(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function np(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var s=jl(l.href),r=t.querySelector(Es(s));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Kr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,qe(r);return}r=t.ownerDocument||t,l=zu(l),(s=At.get(s))&&wn(l,s),r=r.createElement("link"),qe(r);var o=r;o._p=new Promise(function(d,m){o.onload=d,o.onerror=m}),Xe(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Tn=0;function dp(e,t){return e.stylesheets&&e.count===0&&Wr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Tn===0&&(Tn=62500*Yb());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Tn?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Kr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zr=null;function Wr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zr=new Map,t.forEach(cp,e),Zr=null,Kr.call(e))}function cp(e,t){if(!(t.state.loading&4)){var a=Zr.get(e);if(a)var l=a.get(null);else{a=new Map,Zr.set(e,a);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var o=s[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}s=t.instance,o=s.getAttribute("data-precedence"),r=a.get(o)||l,r===l&&a.set(null,s),a.set(o,s),this.count++,l=Kr.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Bs={$$typeof:O,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function up(e,t,a,l,s,r,o,d,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.hiddenUpdates=hi(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Ou(e,t,a,l,s,r,o,d,m,S,M,z){return e=new up(e,t,a,o,m,S,M,z,d),t=1,r===!0&&(t|=24),r=ct(3,null,null,t),e.current=r,r.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},ro(r),e}function _u(e){return e?(e=ml,e):ml}function qu(e,t,a,l,s,r){s=_u(s),l.context===null?l.context=s:l.pendingContext=s,l=pa(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=xa(e,l,t),a!==null&&(lt(a,e,t),ns(a,e,t))}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Cn(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function Fu(e){if(e.tag===13||e.tag===31){var t=qa(e,67108864);t!==null&&lt(t,e,67108864),Cn(e,67108864)}}function Yu(e){if(e.tag===13||e.tag===31){var t=pt();t=gi(t);var a=qa(e,t);a!==null&&lt(a,e,t),Cn(e,t)}}var Pr=!0;function fp(e,t,a,l){var s=B.T;B.T=null;var r=U.p;try{U.p=2,An(e,t,a,l)}finally{U.p=r,B.T=s}}function mp(e,t,a,l){var s=B.T;B.T=null;var r=U.p;try{U.p=8,An(e,t,a,l)}finally{U.p=r,B.T=s}}function An(e,t,a,l){if(Pr){var s=Rn(l);if(s===null)fn(e,t,l,Jr,a),Vu(e,l);else if(pp(s,e,t,a,l))l.stopPropagation();else if(Vu(e,l),t&4&&-1<bp.indexOf(e)){for(;s!==null;){var r=al(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=ja(r.pendingLanes);if(o!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var m=1<<31-nt(o);d.entanglements[1]|=m,o&=~m}Ot(r),(ce&6)===0&&(Lr=it()+500,Ts(0))}}break;case 31:case 13:d=qa(r,2),d!==null&&lt(d,r,2),Ur(),Cn(r,2)}if(r=Rn(l),r===null&&fn(e,t,l,Jr,a),r===s)break;s=r}s!==null&&l.stopPropagation()}else fn(e,t,l,null,a)}}function Rn(e){return e=Ri(e),En(e)}var Jr=null;function En(e){if(Jr=null,e=tl(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=k(t),e!==null)return e;e=null}else if(a===31){if(e=C(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jr=e,null}function Iu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($f()){case Jn:return 2;case $n:return 8;case Gs:case em:return 32;case ed:return 268435456;default:return 32}default:return 32}}var Mn=!1,Ra=null,Ea=null,Ma=null,Ns=new Map,Ds=new Map,Ba=[],bp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vu(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ea=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ds.delete(t.pointerId)}}function zs(e,t,a,l,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[s]},t!==null&&(t=al(t),t!==null&&Fu(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function pp(e,t,a,l,s){switch(t){case"focusin":return Ra=zs(Ra,e,t,a,l,s),!0;case"dragenter":return Ea=zs(Ea,e,t,a,l,s),!0;case"mouseover":return Ma=zs(Ma,e,t,a,l,s),!0;case"pointerover":var r=s.pointerId;return Ns.set(r,zs(Ns.get(r)||null,e,t,a,l,s)),!0;case"gotpointercapture":return r=s.pointerId,Ds.set(r,zs(Ds.get(r)||null,e,t,a,l,s)),!0}return!1}function Xu(e){var t=tl(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=k(a),t!==null){e.blockedOn=t,id(e.priority,function(){Yu(a)});return}}else if(t===31){if(t=C(a),t!==null){e.blockedOn=t,id(e.priority,function(){Yu(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Rn(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Ai=l,a.target.dispatchEvent(l),Ai=null}else return t=al(a),t!==null&&Fu(t),e.blockedOn=a,!1;t.shift()}return!0}function Qu(e,t,a){$r(e)&&a.delete(t)}function xp(){Mn=!1,Ra!==null&&$r(Ra)&&(Ra=null),Ea!==null&&$r(Ea)&&(Ea=null),Ma!==null&&$r(Ma)&&(Ma=null),Ns.forEach(Qu),Ds.forEach(Qu)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Mn||(Mn=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,xp)))}var ti=null;function Ku(e){ti!==e&&(ti=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ti===e&&(ti=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(En(l||a)===null)continue;break}var r=al(a);r!==null&&(e.splice(t,3),t-=3,Ao(r,{pending:!0,data:s,method:a.method,action:l},l,s))}}))}function Hl(e){function t(m){return ei(m,e)}Ra!==null&&ei(Ra,e),Ea!==null&&ei(Ea,e),Ma!==null&&ei(Ma,e),Ns.forEach(t),Ds.forEach(t);for(var a=0;a<Ba.length;a++){var l=Ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Xu(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var s=a[l],r=a[l+1],o=s[Pe]||null;if(typeof r=="function")o||Ku(a);else if(o){var d=null;if(r&&r.hasAttribute("formAction")){if(s=r,o=r[Pe]||null)d=o.formAction;else if(En(s)!==null)continue}else d=o.action;typeof d=="function"?a[l+1]=d:(a.splice(l,3),l-=3),Ku(a)}}}function Zu(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return s=o})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Bn(e){this._internalRoot=e}ai.prototype.render=Bn.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(n(409));var a=t.current,l=pt();qu(a,l,e,t,null,null)},ai.prototype.unmount=Bn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qu(e.current,2,null,e,null,null),Ur(),t[el]=null}};function ai(e){this._internalRoot=e}ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=rd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ba.length&&t!==0&&t<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Xu(e)}};var Wu=c.version;if(Wu!=="19.2.0")throw Error(n(527,Wu,"19.2.0"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=h(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var hp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!li.isDisabled&&li.supportsFiber)try{Fl=li.inject(hp),ot=li}catch{}}return js.createRoot=function(e,t){if(!f(e))throw Error(n(299));var a=!1,l="",s=lc,r=sc,o=rc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ou(e,1,!1,null,null,a,l,null,s,r,o,Zu),e[el]=t.current,un(e),new Bn(t)},js.hydrateRoot=function(e,t,a){if(!f(e))throw Error(n(299));var l=!1,s="",r=lc,o=sc,d=rc,m=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=Ou(e,1,!0,t,a??null,l,s,m,r,o,d,Zu),t.context=_u(null),a=t.current,l=pt(),l=gi(l),s=pa(l),s.callback=null,xa(a,s,l),a=l,t.current.lanes=a,Il(t,a),Ot(t),e[el]=t.current,un(e),new ai(t)},js.version="19.2.0",js}var of;function Ep(){if(of)return zn.exports;of=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),zn.exports=Rp(),zn.exports}var Mp=Ep();const Bp=kf(Mp);/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var nf="popstate";function Np(i={}){function c(f,p){let{pathname:k="/",search:C="",hash:y=""}=$a(f.location.hash.substring(1));return!k.startsWith("/")&&!k.startsWith(".")&&(k="/"+k),_n("",{pathname:k,search:C,hash:y},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function u(f,p){let k=f.document.querySelector("base"),C="";if(k&&k.getAttribute("href")){let y=f.location.href,h=y.indexOf("#");C=h===-1?y:y.slice(0,h)}return C+"#"+(typeof p=="string"?p:Hs(p))}function n(f,p){xt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return zp(c,u,n,i)}function Ce(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function xt(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Dp(){return Math.random().toString(36).substring(2,10)}function df(i,c){return{usr:i.state,key:i.key,idx:c}}function _n(i,c,u=null,n){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?$a(c):c,state:u,key:c&&c.key||n||Dp()}}function Hs({pathname:i="/",search:c="",hash:u=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function $a(i){let c={};if(i){let u=i.indexOf("#");u>=0&&(c.hash=i.substring(u),i=i.substring(0,u));let n=i.indexOf("?");n>=0&&(c.search=i.substring(n),i=i.substring(0,n)),i&&(c.pathname=i)}return c}function zp(i,c,u,n={}){let{window:f=document.defaultView,v5Compat:p=!1}=n,k=f.history,C="POP",y=null,h=D();h==null&&(h=0,k.replaceState({...k.state,idx:h},""));function D(){return(k.state||{idx:null}).idx}function E(){C="POP";let F=D(),I=F==null?null:F-h;h=F,y&&y({action:C,location:K.location,delta:I})}function j(F,I){C="PUSH";let te=_n(K.location,F,I);u&&u(te,F),h=D()+1;let O=df(te,h),fe=K.createHref(te);try{k.pushState(O,"",fe)}catch(Ae){if(Ae instanceof DOMException&&Ae.name==="DataCloneError")throw Ae;f.location.assign(fe)}p&&y&&y({action:C,location:K.location,delta:1})}function Y(F,I){C="REPLACE";let te=_n(K.location,F,I);u&&u(te,F),h=D();let O=df(te,h),fe=K.createHref(te);k.replaceState(O,"",fe),p&&y&&y({action:C,location:K.location,delta:0})}function X(F){return Lp(F)}let K={get action(){return C},get location(){return i(f,k)},listen(F){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(nf,E),y=F,()=>{f.removeEventListener(nf,E),y=null}},createHref(F){return c(f,F)},createURL:X,encodeLocation(F){let I=X(F);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:j,replace:Y,go(F){return k.go(F)}};return K}function Lp(i,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(u,"No window.location.(origin|href) available to create URL");let n=typeof i=="string"?i:Hs(i);return n=n.replace(/ $/,"%20"),!c&&n.startsWith("//")&&(n=u+n),new URL(n,u)}function yf(i,c,u="/"){return jp(i,c,u,!1)}function jp(i,c,u,n){let f=typeof c=="string"?$a(c):c,p=ra(f.pathname||"/",u);if(p==null)return null;let k=wf(i);Up(k);let C=null;for(let y=0;C==null&&y<k.length;++y){let h=Qp(p);C=Vp(k[y],h,n)}return C}function wf(i,c=[],u=[],n="",f=!1){let p=(k,C,y=f,h)=>{let D={relativePath:h===void 0?k.path||"":h,caseSensitive:k.caseSensitive===!0,childrenIndex:C,route:k};if(D.relativePath.startsWith("/")){if(!D.relativePath.startsWith(n)&&y)return;Ce(D.relativePath.startsWith(n),`Absolute route path "${D.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(n.length)}let E=sa([n,D.relativePath]),j=u.concat(D);k.children&&k.children.length>0&&(Ce(k.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),wf(k.children,c,j,E,y)),!(k.path==null&&!k.index)&&c.push({path:E,score:Yp(E,k.index),routesMeta:j})};return i.forEach((k,C)=>{var y;if(k.path===""||!((y=k.path)!=null&&y.includes("?")))p(k,C);else for(let h of Sf(k.path))p(k,C,!0,h)}),c}function Sf(i){let c=i.split("/");if(c.length===0)return[];let[u,...n]=c,f=u.endsWith("?"),p=u.replace(/\?$/,"");if(n.length===0)return f?[p,""]:[p];let k=Sf(n.join("/")),C=[];return C.push(...k.map(y=>y===""?p:[p,y].join("/"))),f&&C.push(...k),C.map(y=>i.startsWith("/")&&y===""?"/":y)}function Up(i){i.sort((c,u)=>c.score!==u.score?u.score-c.score:Ip(c.routesMeta.map(n=>n.childrenIndex),u.routesMeta.map(n=>n.childrenIndex)))}var Hp=/^:[\w-]+$/,Op=3,_p=2,qp=1,Gp=10,Fp=-2,cf=i=>i==="*";function Yp(i,c){let u=i.split("/"),n=u.length;return u.some(cf)&&(n+=Fp),c&&(n+=_p),u.filter(f=>!cf(f)).reduce((f,p)=>f+(Hp.test(p)?Op:p===""?qp:Gp),n)}function Ip(i,c){return i.length===c.length&&i.slice(0,-1).every((n,f)=>n===c[f])?i[i.length-1]-c[c.length-1]:0}function Vp(i,c,u=!1){let{routesMeta:n}=i,f={},p="/",k=[];for(let C=0;C<n.length;++C){let y=n[C],h=C===n.length-1,D=p==="/"?c:c.slice(p.length)||"/",E=oi({path:y.relativePath,caseSensitive:y.caseSensitive,end:h},D),j=y.route;if(!E&&h&&u&&!n[n.length-1].route.index&&(E=oi({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},D)),!E)return null;Object.assign(f,E.params),k.push({params:f,pathname:sa([p,E.pathname]),pathnameBase:Jp(sa([p,E.pathnameBase])),route:j}),E.pathnameBase!=="/"&&(p=sa([p,E.pathnameBase]))}return k}function oi(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,n]=Xp(i.path,i.caseSensitive,i.end),f=c.match(u);if(!f)return null;let p=f[0],k=p.replace(/(.)\/+$/,"$1"),C=f.slice(1);return{params:n.reduce((h,{paramName:D,isOptional:E},j)=>{if(D==="*"){let X=C[j]||"";k=p.slice(0,p.length-X.length).replace(/(.)\/+$/,"$1")}const Y=C[j];return E&&!Y?h[D]=void 0:h[D]=(Y||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:k,pattern:i}}function Xp(i,c=!1,u=!0){xt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let n=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(k,C,y)=>(n.push({paramName:C,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(n.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,c?void 0:"i"),n]}function Qp(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return xt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function ra(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,n=i.charAt(u);return n&&n!=="/"?null:i.slice(u)||"/"}var Kp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zp=i=>Kp.test(i);function Wp(i,c="/"){let{pathname:u,search:n="",hash:f=""}=typeof i=="string"?$a(i):i,p;if(u)if(Zp(u))p=u;else{if(u.includes("//")){let k=u;u=u.replace(/\/\/+/g,"/"),xt(!1,`Pathnames cannot have embedded double slashes - normalizing ${k} -> ${u}`)}u.startsWith("/")?p=uf(u.substring(1),"/"):p=uf(u,c)}else p=c;return{pathname:p,search:$p(n),hash:ex(f)}}function uf(i,c){let u=c.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?u.length>1&&u.pop():f!=="."&&u.push(f)}),u.length>1?u.join("/"):"/"}function Hn(i,c,u,n){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pp(i){return i.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function Fn(i){let c=Pp(i);return c.map((u,n)=>n===c.length-1?u.pathname:u.pathnameBase)}function Yn(i,c,u,n=!1){let f;typeof i=="string"?f=$a(i):(f={...i},Ce(!f.pathname||!f.pathname.includes("?"),Hn("?","pathname","search",f)),Ce(!f.pathname||!f.pathname.includes("#"),Hn("#","pathname","hash",f)),Ce(!f.search||!f.search.includes("#"),Hn("#","search","hash",f)));let p=i===""||f.pathname==="",k=p?"/":f.pathname,C;if(k==null)C=u;else{let E=c.length-1;if(!n&&k.startsWith("..")){let j=k.split("/");for(;j[0]==="..";)j.shift(),E-=1;f.pathname=j.join("/")}C=E>=0?c[E]:"/"}let y=Wp(f,C),h=k&&k!=="/"&&k.endsWith("/"),D=(p||k===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(h||D)&&(y.pathname+="/"),y}var sa=i=>i.join("/").replace(/\/\/+/g,"/"),Jp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),$p=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ex=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function tx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tf=["POST","PUT","PATCH","DELETE"];new Set(Tf);var ax=["GET",...Tf];new Set(ax);var _l=R.createContext(null);_l.displayName="DataRouter";var ni=R.createContext(null);ni.displayName="DataRouterState";R.createContext(!1);var Cf=R.createContext({isTransitioning:!1});Cf.displayName="ViewTransition";var lx=R.createContext(new Map);lx.displayName="Fetchers";var sx=R.createContext(null);sx.displayName="Await";var Lt=R.createContext(null);Lt.displayName="Navigation";var Os=R.createContext(null);Os.displayName="Location";var Et=R.createContext({outlet:null,matches:[],isDataRoute:!1});Et.displayName="Route";var In=R.createContext(null);In.displayName="RouteError";function rx(i,{relative:c}={}){Ce(ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:n}=R.useContext(Lt),{hash:f,pathname:p,search:k}=_s(i,{relative:c}),C=p;return u!=="/"&&(C=p==="/"?u:sa([u,p])),n.createHref({pathname:C,search:k,hash:f})}function ql(){return R.useContext(Os)!=null}function ia(){return Ce(ql(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Os).location}var Af="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rf(i){R.useContext(Lt).static||R.useLayoutEffect(i)}function Ef(){let{isDataRoute:i}=R.useContext(Et);return i?kx():ix()}function ix(){Ce(ql(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(_l),{basename:c,navigator:u}=R.useContext(Lt),{matches:n}=R.useContext(Et),{pathname:f}=ia(),p=JSON.stringify(Fn(n)),k=R.useRef(!1);return Rf(()=>{k.current=!0}),R.useCallback((y,h={})=>{if(xt(k.current,Af),!k.current)return;if(typeof y=="number"){u.go(y);return}let D=Yn(y,JSON.parse(p),f,h.relative==="path");i==null&&c!=="/"&&(D.pathname=D.pathname==="/"?c:sa([c,D.pathname])),(h.replace?u.replace:u.push)(D,h.state,h)},[c,u,p,f,i])}var ox=R.createContext(null);function nx(i){let c=R.useContext(Et).outlet;return R.useMemo(()=>c&&R.createElement(ox.Provider,{value:i},c),[c,i])}function Mf(){let{matches:i}=R.useContext(Et),c=i[i.length-1];return c?c.params:{}}function _s(i,{relative:c}={}){let{matches:u}=R.useContext(Et),{pathname:n}=ia(),f=JSON.stringify(Fn(u));return R.useMemo(()=>Yn(i,JSON.parse(f),n,c==="path"),[i,f,n,c])}function dx(i,c){return Bf(i,c)}function Bf(i,c,u,n,f){var te;Ce(ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=R.useContext(Lt),{matches:k}=R.useContext(Et),C=k[k.length-1],y=C?C.params:{},h=C?C.pathname:"/",D=C?C.pathnameBase:"/",E=C&&C.route;{let O=E&&E.path||"";Nf(h,!E||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let j=ia(),Y;if(c){let O=typeof c=="string"?$a(c):c;Ce(D==="/"||((te=O.pathname)==null?void 0:te.startsWith(D)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${O.pathname}" was given in the \`location\` prop.`),Y=O}else Y=j;let X=Y.pathname||"/",K=X;if(D!=="/"){let O=D.replace(/^\//,"").split("/");K="/"+X.replace(/^\//,"").split("/").slice(O.length).join("/")}let F=yf(i,{pathname:K});xt(E||F!=null,`No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `),xt(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let I=bx(F&&F.map(O=>Object.assign({},O,{params:Object.assign({},y,O.params),pathname:sa([D,p.encodeLocation?p.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?D:sa([D,p.encodeLocation?p.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),k,u,n,f);return c&&I?R.createElement(Os.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Y},navigationType:"POP"}},I):I}function cx(){let i=vx(),c=tx(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,n="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:n},p={padding:"2px 4px",backgroundColor:n},k=null;return console.error("Error handled by React Router default ErrorBoundary:",i),k=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:p},"ErrorBoundary")," or"," ",R.createElement("code",{style:p},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},c),u?R.createElement("pre",{style:f},u):null,k)}var ux=R.createElement(cx,null),fx=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?R.createElement(Et.Provider,{value:this.props.routeContext},R.createElement(In.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mx({routeContext:i,match:c,children:u}){let n=R.useContext(_l);return n&&n.static&&n.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=c.route.id),R.createElement(Et.Provider,{value:i},u)}function bx(i,c=[],u=null,n=null,f=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let p=i,k=u==null?void 0:u.errors;if(k!=null){let D=p.findIndex(E=>E.route.id&&(k==null?void 0:k[E.route.id])!==void 0);Ce(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(k).join(",")}`),p=p.slice(0,Math.min(p.length,D+1))}let C=!1,y=-1;if(u)for(let D=0;D<p.length;D++){let E=p[D];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=D),E.route.id){let{loaderData:j,errors:Y}=u,X=E.route.loader&&!j.hasOwnProperty(E.route.id)&&(!Y||Y[E.route.id]===void 0);if(E.route.lazy||X){C=!0,y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}let h=u&&n?(D,E)=>{var j,Y;n(D,{location:u.location,params:((Y=(j=u.matches)==null?void 0:j[0])==null?void 0:Y.params)??{},errorInfo:E})}:void 0;return p.reduceRight((D,E,j)=>{let Y,X=!1,K=null,F=null;u&&(Y=k&&E.route.id?k[E.route.id]:void 0,K=E.route.errorElement||ux,C&&(y<0&&j===0?(Nf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,F=null):y===j&&(X=!0,F=E.route.hydrateFallbackElement||null)));let I=c.concat(p.slice(0,j+1)),te=()=>{let O;return Y?O=K:X?O=F:E.route.Component?O=R.createElement(E.route.Component,null):E.route.element?O=E.route.element:O=D,R.createElement(mx,{match:E,routeContext:{outlet:D,matches:I,isDataRoute:u!=null},children:O})};return u&&(E.route.ErrorBoundary||E.route.errorElement||j===0)?R.createElement(fx,{location:u.location,revalidation:u.revalidation,component:K,error:Y,children:te(),routeContext:{outlet:null,matches:I,isDataRoute:!0},onError:h}):te()},null)}function Vn(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function px(i){let c=R.useContext(_l);return Ce(c,Vn(i)),c}function xx(i){let c=R.useContext(ni);return Ce(c,Vn(i)),c}function hx(i){let c=R.useContext(Et);return Ce(c,Vn(i)),c}function Xn(i){let c=hx(i),u=c.matches[c.matches.length-1];return Ce(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function gx(){return Xn("useRouteId")}function vx(){var n;let i=R.useContext(In),c=xx("useRouteError"),u=Xn("useRouteError");return i!==void 0?i:(n=c.errors)==null?void 0:n[u]}function kx(){let{router:i}=px("useNavigate"),c=Xn("useNavigate"),u=R.useRef(!1);return Rf(()=>{u.current=!0}),R.useCallback(async(f,p={})=>{xt(u.current,Af),u.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:c,...p}))},[i,c])}var ff={};function Nf(i,c,u){!c&&!ff[i]&&(ff[i]=!0,xt(!1,u))}R.memo(yx);function yx({routes:i,future:c,state:u,unstable_onError:n}){return Bf(i,void 0,u,n,c)}function wx({to:i,replace:c,state:u,relative:n}){Ce(ql(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=R.useContext(Lt);xt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=R.useContext(Et),{pathname:k}=ia(),C=Ef(),y=Yn(i,Fn(p),k,n==="path"),h=JSON.stringify(y);return R.useEffect(()=>{C(JSON.parse(h),{replace:c,state:u,relative:n})},[C,h,n,c,u]),null}function Sx(i){return nx(i.context)}function Ol(i){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Tx({basename:i="/",children:c=null,location:u,navigationType:n="POP",navigator:f,static:p=!1}){Ce(!ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let k=i.replace(/^\/*/,"/"),C=R.useMemo(()=>({basename:k,navigator:f,static:p,future:{}}),[k,f,p]);typeof u=="string"&&(u=$a(u));let{pathname:y="/",search:h="",hash:D="",state:E=null,key:j="default"}=u,Y=R.useMemo(()=>{let X=ra(y,k);return X==null?null:{location:{pathname:X,search:h,hash:D,state:E,key:j},navigationType:n}},[k,y,h,D,E,j,n]);return xt(Y!=null,`<Router basename="${k}"> is not able to match the URL "${y}${h}${D}" because it does not start with the basename, so the <Router> won't render anything.`),Y==null?null:R.createElement(Lt.Provider,{value:C},R.createElement(Os.Provider,{children:c,value:Y}))}function Cx({children:i,location:c}){return dx(qn(i),c)}function qn(i,c=[]){let u=[];return R.Children.forEach(i,(n,f)=>{if(!R.isValidElement(n))return;let p=[...c,f];if(n.type===R.Fragment){u.push.apply(u,qn(n.props.children,p));return}Ce(n.type===Ol,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!n.props.index||!n.props.children,"An index route cannot have child routes.");let k={id:n.props.id||p.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(k.children=qn(n.props.children,p)),u.push(k)}),u}var ri="get",ii="application/x-www-form-urlencoded";function di(i){return i!=null&&typeof i.tagName=="string"}function Ax(i){return di(i)&&i.tagName.toLowerCase()==="button"}function Rx(i){return di(i)&&i.tagName.toLowerCase()==="form"}function Ex(i){return di(i)&&i.tagName.toLowerCase()==="input"}function Mx(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Bx(i,c){return i.button===0&&(!c||c==="_self")&&!Mx(i)}var si=null;function Nx(){if(si===null)try{new FormData(document.createElement("form"),0),si=!1}catch{si=!0}return si}var Dx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function On(i){return i!=null&&!Dx.has(i)?(xt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`),null):i}function zx(i,c){let u,n,f,p,k;if(Rx(i)){let C=i.getAttribute("action");n=C?ra(C,c):null,u=i.getAttribute("method")||ri,f=On(i.getAttribute("enctype"))||ii,p=new FormData(i)}else if(Ax(i)||Ex(i)&&(i.type==="submit"||i.type==="image")){let C=i.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||C.getAttribute("action");if(n=y?ra(y,c):null,u=i.getAttribute("formmethod")||C.getAttribute("method")||ri,f=On(i.getAttribute("formenctype"))||On(C.getAttribute("enctype"))||ii,p=new FormData(C,i),!Nx()){let{name:h,type:D,value:E}=i;if(D==="image"){let j=h?`${h}.`:"";p.append(`${j}x`,"0"),p.append(`${j}y`,"0")}else h&&p.append(h,E)}}else{if(di(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=ri,n=null,f=ii,k=i}return p&&f==="text/plain"&&(k=p,p=void 0),{action:n,method:u.toLowerCase(),encType:f,formData:p,body:k}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qn(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function Lx(i,c,u){let n=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return n.pathname==="/"?n.pathname=`_root.${u}`:c&&ra(n.pathname,c)==="/"?n.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${u}`,n}async function jx(i,c){if(i.id in c)return c[i.id];try{let u=await import(i.module);return c[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ux(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Hx(i,c,u){let n=await Promise.all(i.map(async f=>{let p=c.routes[f.route.id];if(p){let k=await jx(p,u);return k.links?k.links():[]}return[]}));return Gx(n.flat(1).filter(Ux).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function mf(i,c,u,n,f,p){let k=(y,h)=>u[h]?y.route.id!==u[h].route.id:!0,C=(y,h)=>{var D;return u[h].pathname!==y.pathname||((D=u[h].route.path)==null?void 0:D.endsWith("*"))&&u[h].params["*"]!==y.params["*"]};return p==="assets"?c.filter((y,h)=>k(y,h)||C(y,h)):p==="data"?c.filter((y,h)=>{var E;let D=n.routes[y.route.id];if(!D||!D.hasLoader)return!1;if(k(y,h)||C(y,h))return!0;if(y.route.shouldRevalidate){let j=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((E=u[0])==null?void 0:E.params)||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Ox(i,c,{includeHydrateFallback:u}={}){return _x(i.map(n=>{let f=c.routes[n.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),u&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function _x(i){return[...new Set(i)]}function qx(i){let c={},u=Object.keys(i).sort();for(let n of u)c[n]=i[n];return c}function Gx(i,c){let u=new Set;return new Set(c),i.reduce((n,f)=>{let p=JSON.stringify(qx(f));return u.has(p)||(u.add(p),n.push({key:p,link:f})),n},[])}function Df(){let i=R.useContext(_l);return Qn(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Fx(){let i=R.useContext(ni);return Qn(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Kn=R.createContext(void 0);Kn.displayName="FrameworkContext";function zf(){let i=R.useContext(Kn);return Qn(i,"You must render this element inside a <HydratedRouter> element"),i}function Yx(i,c){let u=R.useContext(Kn),[n,f]=R.useState(!1),[p,k]=R.useState(!1),{onFocus:C,onBlur:y,onMouseEnter:h,onMouseLeave:D,onTouchStart:E}=c,j=R.useRef(null);R.useEffect(()=>{if(i==="render"&&k(!0),i==="viewport"){let K=I=>{I.forEach(te=>{k(te.isIntersecting)})},F=new IntersectionObserver(K,{threshold:.5});return j.current&&F.observe(j.current),()=>{F.disconnect()}}},[i]),R.useEffect(()=>{if(n){let K=setTimeout(()=>{k(!0)},100);return()=>{clearTimeout(K)}}},[n]);let Y=()=>{f(!0)},X=()=>{f(!1),k(!1)};return u?i!=="intent"?[p,j,{}]:[p,j,{onFocus:Us(C,Y),onBlur:Us(y,X),onMouseEnter:Us(h,Y),onMouseLeave:Us(D,X),onTouchStart:Us(E,Y)}]:[!1,j,{}]}function Us(i,c){return u=>{i&&i(u),u.defaultPrevented||c(u)}}function Ix({page:i,...c}){let{router:u}=Df(),n=R.useMemo(()=>yf(u.routes,i,u.basename),[u.routes,i,u.basename]);return n?R.createElement(Xx,{page:i,matches:n,...c}):null}function Vx(i){let{manifest:c,routeModules:u}=zf(),[n,f]=R.useState([]);return R.useEffect(()=>{let p=!1;return Hx(i,c,u).then(k=>{p||f(k)}),()=>{p=!0}},[i,c,u]),n}function Xx({page:i,matches:c,...u}){let n=ia(),{manifest:f,routeModules:p}=zf(),{basename:k}=Df(),{loaderData:C,matches:y}=Fx(),h=R.useMemo(()=>mf(i,c,y,f,n,"data"),[i,c,y,f,n]),D=R.useMemo(()=>mf(i,c,y,f,n,"assets"),[i,c,y,f,n]),E=R.useMemo(()=>{if(i===n.pathname+n.search+n.hash)return[];let X=new Set,K=!1;if(c.forEach(I=>{var O;let te=f.routes[I.route.id];!te||!te.hasLoader||(!h.some(fe=>fe.route.id===I.route.id)&&I.route.id in C&&((O=p[I.route.id])!=null&&O.shouldRevalidate)||te.hasClientLoader?K=!0:X.add(I.route.id))}),X.size===0)return[];let F=Lx(i,k,"data");return K&&X.size>0&&F.searchParams.set("_routes",c.filter(I=>X.has(I.route.id)).map(I=>I.route.id).join(",")),[F.pathname+F.search]},[k,C,n,f,h,c,i,p]),j=R.useMemo(()=>Ox(D,f),[D,f]),Y=Vx(D);return R.createElement(R.Fragment,null,E.map(X=>R.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...u})),j.map(X=>R.createElement("link",{key:X,rel:"modulepreload",href:X,...u})),Y.map(({key:X,link:K})=>R.createElement("link",{key:X,nonce:u.nonce,...K})))}function Qx(...i){return c=>{i.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var Lf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lf&&(window.__reactRouterVersion="7.9.6")}catch{}function Kx({basename:i,children:c,window:u}){let n=R.useRef();n.current==null&&(n.current=Np({window:u,v5Compat:!0}));let f=n.current,[p,k]=R.useState({action:f.action,location:f.location}),C=R.useCallback(y=>{R.startTransition(()=>k(y))},[k]);return R.useLayoutEffect(()=>f.listen(C),[f,C]),R.createElement(Tx,{basename:i,children:c,location:p.location,navigationType:p.action,navigator:f})}var jf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Da=R.forwardRef(function({onClick:c,discover:u="render",prefetch:n="none",relative:f,reloadDocument:p,replace:k,state:C,target:y,to:h,preventScrollReset:D,viewTransition:E,...j},Y){let{basename:X}=R.useContext(Lt),K=typeof h=="string"&&jf.test(h),F,I=!1;if(typeof h=="string"&&K&&(F=h,Lf))try{let Re=new URL(window.location.href),st=h.startsWith("//")?new URL(Re.protocol+h):new URL(h),rt=ra(st.pathname,X);st.origin===Re.origin&&rt!=null?h=rt+st.search+st.hash:I=!0}catch{xt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=rx(h,{relative:f}),[O,fe,Ae]=Yx(n,j),He=Px(h,{replace:k,state:C,target:y,preventScrollReset:D,relative:f,viewTransition:E});function $(Re){c&&c(Re),Re.defaultPrevented||He(Re)}let Oe=R.createElement("a",{...j,...Ae,href:F||te,onClick:I||p?c:$,ref:Qx(Y,fe),target:y,"data-discover":!K&&u==="render"?"true":void 0});return O&&!K?R.createElement(R.Fragment,null,Oe,R.createElement(Ix,{page:te})):Oe});Da.displayName="Link";var Uf=R.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:n="",end:f=!1,style:p,to:k,viewTransition:C,children:y,...h},D){let E=_s(k,{relative:h.relative}),j=ia(),Y=R.useContext(ni),{navigator:X,basename:K}=R.useContext(Lt),F=Y!=null&&ah(E)&&C===!0,I=X.encodeLocation?X.encodeLocation(E).pathname:E.pathname,te=j.pathname,O=Y&&Y.navigation&&Y.navigation.location?Y.navigation.location.pathname:null;u||(te=te.toLowerCase(),O=O?O.toLowerCase():null,I=I.toLowerCase()),O&&K&&(O=ra(O,K)||O);const fe=I!=="/"&&I.endsWith("/")?I.length-1:I.length;let Ae=te===I||!f&&te.startsWith(I)&&te.charAt(fe)==="/",He=O!=null&&(O===I||!f&&O.startsWith(I)&&O.charAt(I.length)==="/"),$={isActive:Ae,isPending:He,isTransitioning:F},Oe=Ae?c:void 0,Re;typeof n=="function"?Re=n($):Re=[n,Ae?"active":null,He?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let st=typeof p=="function"?p($):p;return R.createElement(Da,{...h,"aria-current":Oe,className:Re,ref:D,style:st,to:k,viewTransition:C},typeof y=="function"?y($):y)});Uf.displayName="NavLink";var Zx=R.forwardRef(({discover:i="render",fetcherKey:c,navigate:u,reloadDocument:n,replace:f,state:p,method:k=ri,action:C,onSubmit:y,relative:h,preventScrollReset:D,viewTransition:E,...j},Y)=>{let X=eh(),K=th(C,{relative:h}),F=k.toLowerCase()==="get"?"get":"post",I=typeof C=="string"&&jf.test(C),te=O=>{if(y&&y(O),O.defaultPrevented)return;O.preventDefault();let fe=O.nativeEvent.submitter,Ae=(fe==null?void 0:fe.getAttribute("formmethod"))||k;X(fe||O.currentTarget,{fetcherKey:c,method:Ae,navigate:u,replace:f,state:p,relative:h,preventScrollReset:D,viewTransition:E})};return R.createElement("form",{ref:Y,method:F,action:K,onSubmit:n?y:te,...j,"data-discover":!I&&i==="render"?"true":void 0})});Zx.displayName="Form";function Wx(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hf(i){let c=R.useContext(_l);return Ce(c,Wx(i)),c}function Px(i,{target:c,replace:u,state:n,preventScrollReset:f,relative:p,viewTransition:k}={}){let C=Ef(),y=ia(),h=_s(i,{relative:p});return R.useCallback(D=>{if(Bx(D,c)){D.preventDefault();let E=u!==void 0?u:Hs(y)===Hs(h);C(i,{replace:E,state:n,preventScrollReset:f,relative:p,viewTransition:k})}},[y,C,h,u,n,c,i,f,p,k])}var Jx=0,$x=()=>`__${String(++Jx)}__`;function eh(){let{router:i}=Hf("useSubmit"),{basename:c}=R.useContext(Lt),u=gx();return R.useCallback(async(n,f={})=>{let{action:p,method:k,encType:C,formData:y,body:h}=zx(n,c);if(f.navigate===!1){let D=f.fetcherKey||$x();await i.fetch(D,u,f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:h,formMethod:f.method||k,formEncType:f.encType||C,flushSync:f.flushSync})}else await i.navigate(f.action||p,{preventScrollReset:f.preventScrollReset,formData:y,body:h,formMethod:f.method||k,formEncType:f.encType||C,replace:f.replace,state:f.state,fromRouteId:u,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,c,u])}function th(i,{relative:c}={}){let{basename:u}=R.useContext(Lt),n=R.useContext(Et);Ce(n,"useFormAction must be used inside a RouteContext");let[f]=n.matches.slice(-1),p={..._s(i||".",{relative:c})},k=ia();if(i==null){p.search=k.search;let C=new URLSearchParams(p.search),y=C.getAll("index");if(y.some(D=>D==="")){C.delete("index"),y.filter(E=>E).forEach(E=>C.append("index",E));let D=C.toString();p.search=D?`?${D}`:""}}return(!i||i===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(p.pathname=p.pathname==="/"?u:sa([u,p.pathname])),Hs(p)}function ah(i,{relative:c}={}){let u=R.useContext(Cf);Ce(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Hf("useViewTransitionState"),f=_s(i,{relative:c});if(!u.isTransitioning)return!1;let p=ra(u.currentLocation.pathname,n)||u.currentLocation.pathname,k=ra(u.nextLocation.pathname,n)||u.nextLocation.pathname;return oi(f.pathname,k)!=null||oi(f.pathname,p)!=null}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sh=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,u,n)=>n?n.toUpperCase():u.toLowerCase()),bf=i=>{const c=sh(i);return c.charAt(0).toUpperCase()+c.slice(1)},Of=(...i)=>i.filter((c,u,n)=>!!c&&c.trim()!==""&&n.indexOf(c)===u).join(" ").trim(),rh=i=>{for(const c in i)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ih={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=R.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:u=2,absoluteStrokeWidth:n,className:f="",children:p,iconNode:k,...C},y)=>R.createElement("svg",{ref:y,...ih,width:c,height:c,stroke:i,strokeWidth:n?Number(u)*24/Number(c):u,className:Of("lucide",f),...!p&&!rh(C)&&{"aria-hidden":"true"},...C},[...k.map(([h,D])=>R.createElement(h,D)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(i,c)=>{const u=R.forwardRef(({className:n,...f},p)=>R.createElement(oh,{ref:p,iconNode:c,className:Of(`lucide-${lh(bf(i))}`,`lucide-${i}`,n),...f}));return u.displayName=bf(i),u};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],dh=ve("arrow-left",nh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],_f=ve("arrow-up-right",ch);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],fh=ve("award",uh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],bh=ve("book-open",mh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],xh=ve("briefcase",ph);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],qf=ve("chart-pie",hh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vh=ve("chevron-right",gh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yh=ve("chevron-left",kh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Sh=ve("compass",wh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Gf=ve("credit-card",Th);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Ff=ve("gem",Ch);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ci=ve("globe",Ah);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Eh=ve("heart",Rh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],Yf=ve("hotel",Mh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Nh=ve("house",Bh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],If=ve("laptop",Dh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Lh=ve("menu",zh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Uh=ve("moon",jh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Vf=ve("plane",Hh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pf=ve("search",Oh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],qh=ve("share-2",_h);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xf=ve("shield-check",Gh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Yh=ve("sparkles",Fh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Vh=ve("sun",Ih);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Zn=ve("trending-up",Xh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],Qf=ve("umbrella",Qh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Zh=ve("users",Kh);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ph=ve("x",Wh),Jh={id:"cc-axis-magnus-burgundy",title:"Axis Bank Magnus Burgundy Credit Card Review",excerpt:"The most rewarding credit card for HNI spenders. Up to 25% returns on spends over 1.5L per month.",content:`
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
  `,imageUrl:"/images/credit-cards/m4b-mk.png",date:"Dec 1, 2025",readTime:"6 min",tags:["HNI","Premium","Rewards","Travel"]},$h={id:"cc-hsbc-travelone",title:"HSBC TravelOne Credit Card Review (India)",excerpt:"A travel-focused card with uncapped transfers and decent travel rewards — best for frequent OTA/hotel bookers who use Accor and similar partners.",content:`
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
  `,imageUrl:"/images/credit-cards/travelone.png",date:"Dec 1, 2025",readTime:"5 min",tags:["Travel","HSBC","Rewards"]},eg={id:"cc-entry-level-guide",title:"Entry Level Credit Cards Guide 2025",excerpt:"Complete guide to beginner-friendly credit cards: SBI Cashback, HDFC Swiggy, Federal Scapia, Axis Cashback, and Amex MRCC. Perfect for first-time users with 5%+ cashback.",content:`
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
  `,imageUrl:"https://picsum.photos/800/400?random=31",date:"Dec 11, 2025",readTime:"7 min",tags:["Beginner","Cashback","Rewards"]},tg={id:"cc-master-guide-2025",title:"25+ Best Credit Cards in India 2025: Complete Buyer's Guide",excerpt:"The ultimate guide to 25+ best credit cards covering entry-level cashback cards, premium travel cards, super premium cards, and HNI cards. Find your perfect card today.",content:`
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
  `,imageUrl:"https://picsum.photos/800/400?random=99",date:"Dec 11, 2025",readTime:"15 min",tags:["Master Guide","All Cards","Comprehensive"]},ag={id:"cc-hdfc-infinia-complete",title:"HDFC Bank Infinia Credit Card: Complete Review & Guide",excerpt:"The legendary dream card for credit card enthusiasts. Complete guide to Infinia's rewards, lounge access, benefits, eligibility, and how it compares to competitors.",content:`
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
  `,imageUrl:"/images/credit-cards/infinia-mk.png",date:"Dec 11, 2025",readTime:"18 min",tags:["Super Premium","Dream Card","Detailed Review"]},lg={id:"standard-chartered-ultimate",title:"Standard Chartered Ultimate Credit Card Review - Super Premium Rewards Card",excerpt:"Comprehensive review of the Standard Chartered Ultimate Credit Card featuring 3.3% reward rate, unlimited redemption options, and premium lifestyle benefits.",date:"2024-01-15",readTime:"12 min",tags:["credit cards","super premium","rewards","standard chartered"],imageUrl:"/images/credit-cards/sc-mk.png",content:`
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
  `},sg={id:"amex-platinum-charge",title:"American Express Platinum Charge Card Review - Ultra Premium Metal Card",excerpt:"In-depth review of the Amex Platinum Charge Card with Marriott Gold Elite tier, hotel memberships, lifestyle benefits, and comprehensive travel concierge services.",date:"2024-02-01",readTime:"15 min",tags:["credit cards","ultra premium","charge card","american express","lifestyle"],imageUrl:"/images/credit-cards/amex-mk.png",content:`
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
  `},rg={id:"icici-emeralde-private",title:"ICICI Emeralde Private Metal Credit Card Review - Super Premium Metal Card",excerpt:"Detailed review of ICICI Emeralde Private Metal with 3% base rewards, Taj Epicure membership, unlimited lounge access, and 3.75% milestone rewards.",date:"2024-03-15",readTime:"13 min",tags:["credit cards","super premium","metal card","icici bank","rewards"],imageUrl:"/images/credit-cards/epm-mk.png",content:`
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
  `},ig={id:"yes-bank-marquee",title:"Yes Bank Marquee Credit Card Review",excerpt:"Super Premium Credit Card with 4.5% online rewards - Best for online shoppers",readTime:"15 min read",imageUrl:"https://www.cardexpert.in/wp-content/uploads/2024/02/yes-bank-marquee-credit-card.jpg",date:"2025-12-11",tags:["credit-card","yes-bank","super-premium","rewards"],content:`<div class="space-y-8">
  <div class="bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 rounded-lg p-8 mb-12 dark:from-blue-800 dark:via-blue-900 dark:to-slate-950">
    <h2 class="text-4xl md:text-5xl font-serif font-medium text-white mb-4">Yes Bank Marquee Credit Card</h2>
    <p class="text-lg text-blue-100 leading-relaxed">The premier choice for high-volume online spenders, delivering best-in-class rewards of up to 4.5% with unlimited international lounge access and unmatched convenience. Perfect for digital-first lifestyles demanding premium benefits without complexity.</p>
  </div>

  <table class="w-full border-collapse border border-slate-300 dark:border-slate-700 mb-8">
    <thead>
      <tr class="bg-slate-100 dark:bg-slate-800">
        <th class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Feature</th>
        <th class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/50">
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-slate-900 dark:text-white">Card Type</td>
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-700 dark:text-slate-300">Super Premium Visa Infinite</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/50">
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-slate-900 dark:text-white">Online Rewards</td>
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-700 dark:text-slate-300">Up to 4.5% (36 RP per ₹200)</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/50">
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-slate-900 dark:text-white">Offline Rewards</td>
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-700 dark:text-slate-300">2.25% (18 RP per ₹200)</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/50">
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-slate-900 dark:text-white">Joining Fee</td>
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-700 dark:text-slate-300">₹9,999 + GST (Offset by welcome bonus)</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/50">
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-slate-900 dark:text-white">Annual Fee</td>
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-700 dark:text-slate-300">₹4,999 + GST (Waived on ₹10L+ spend)</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/50">
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-slate-900 dark:text-white">Best For</td>
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-700 dark:text-slate-300">Online shoppers, international travelers</td>
      </tr>
      <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/50">
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 font-semibold text-slate-900 dark:text-white">International Lounge</td>
        <td class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-slate-700 dark:text-slate-300">Unlimited (Visa Infinite)</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Fees & Welcome Benefits</h3>
  
  <div class="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-6 mb-6 dark:from-emerald-700 dark:to-blue-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">Welcome Bonuses</h4>
      <ul class="space-y-3">
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span><strong>Joining Fee:</strong> ₹9,999 + GST</span></li>
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span><strong>Welcome Bonus:</strong> 40,000 Reward Points (~₹10,000 value)</span></li>
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span><strong>Fee Recovery:</strong> Welcome bonus entirely offsets joining cost</span></li>
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span><strong>Annual Renewal:</strong> 20,000 RP (~₹5,000) if fee paid</span></li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Reward Structure & Earning</h3>
  
  <p class="text-slate-700 dark:text-slate-300 mb-4">The Yes Bank Marquee stands out with some of India's highest reward rates for online purchases, coupled with meaningful offline benefits and premium lounge access. The card's power lies in its straightforward rewards structure without category limitations on base online earning.</p>

  <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 mb-6 dark:from-blue-700 dark:to-cyan-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">Online Rewards Excellence</h4>
      <ul class="space-y-2 text-sm">
        <li><strong>✓ 4.5% on all online spends:</strong> No category restrictions—every purchase counts</li>
        <li><strong>✓ Monthly earning cap:</strong> 1,00,000 RP (~₹5.5L equivalent spend)</li>
        <li><strong>✓ After cap:</strong> Reverts to 2.25% offline rate</li>
        <li><strong>✓ Redemption limit:</strong> 3L points per calendar month</li>
        <li><strong>✓ Excluded categories:</strong> Rental, wallet loads, fuel, government payments</li>
      </ul>
    </div>
  </div>

  <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 dark:from-purple-700 dark:to-pink-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">International Transactions</h4>
      <div class="space-y-3">
        <p><strong>Forex Markup:</strong> 1% + GST = 1.2%</p>
        <p><strong>Effective Return:</strong> 4.5% rewards - 1.2% markup = <strong>3.3% net gain</strong></p>
        <p class="text-sm">Among the best net international returns for online spenders in India</p>
      </div>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Lounge Access & Travel Benefits</h3>

  <div class="bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-6 mb-6 dark:from-green-700 dark:to-emerald-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">Domestic Lounge Access</h4>
      <table class="w-full text-sm">
        <tbody>
          <tr class="border-b border-white/30">
            <td class="py-2"><strong>Primary Cardholder</strong></td>
            <td class="py-2 text-right">6 visits per quarter</td>
          </tr>
          <tr class="border-b border-white/30">
            <td class="py-2"><strong>Add-on Cardholder</strong></td>
            <td class="py-2 text-right">2 visits per quarter (shared)</td>
          </tr>
          <tr>
            <td class="py-2 text-sm"><em>Requirement: ₹1L spend in previous quarter</em></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 mb-6 dark:from-indigo-700 dark:to-purple-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">International Lounge Access</h4>
      <table class="w-full text-sm">
        <tbody>
          <tr class="border-b border-white/30">
            <td class="py-2"><strong>Primary Cardholder</strong></td>
            <td class="py-2 text-right">Unlimited visits</td>
          </tr>
          <tr class="border-b border-white/30">
            <td class="py-2"><strong>Add-on Cardholder</strong></td>
            <td class="py-2 text-right">2 visits per quarter (shared)</td>
          </tr>
          <tr>
            <td class="py-2 text-sm"><em>Direct card access—no Priority Pass needed</em></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Lifestyle & Concierge Benefits</h3>

  <div class="space-y-4 mb-6">
    <div class="border-l-4 border-gold-500 bg-slate-50 dark:bg-slate-900/50 p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Golf Privileges</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">4 complimentary rounds annually (max 1/month) + 1 free lesson per month through Visa network</p>
    </div>

    <div class="border-l-4 border-gold-500 bg-slate-50 dark:bg-slate-900/50 p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Digital Lifestyle</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">BookMyShow: Buy 1 Get 1 offers on movies (up to 3 tickets/month, ₹800/ticket discount)</p>
    </div>

    <div class="border-l-4 border-gold-500 bg-slate-50 dark:bg-slate-900/50 p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Purchase Protection</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">₹50,000 insurance for online electronics/mobile purchases (6 months coverage)</p>
    </div>

    <div class="border-l-4 border-gold-500 bg-slate-50 dark:bg-slate-900/50 p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">24/7 Concierge</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Visa Infinity concierge for travel, dining, and lifestyle services</p>
    </div>

    <div class="border-l-4 border-gold-500 bg-slate-50 dark:bg-slate-900/50 p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Roadside Assistance</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Emergency roadside support through Visa platform</p>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Redemption Flexibility</h3>

  <div class="space-y-4 mb-6">
    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Favorable Redemption</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-1">
        <li>• <strong>Flights/Hotels:</strong> 0.25 INR per point = 4.5% cash equivalent</li>
        <li>• <strong>Combined bonuses:</strong> 40K welcome + 20K annual = 60K RP yearly</li>
        <li>• <strong>Earning + bonuses:</strong> Strong monthly accumulation with caps</li>
      </ul>
    </div>

    <div class="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Note on Redemption</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-1">
        <li>• <strong>Vouchers:</strong> 0.15 INR per point (devalued from 0.25)</li>
        <li>• <strong>No transfers:</strong> Cannot transfer points to airlines or hotel programs</li>
        <li>• <strong>Direct redemption:</strong> Flights, hotels, and vouchers only</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Eligibility Criteria</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">Salaried Applicants</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• Net monthly salary: ₹3L+</li>
        <li>• CIBIL score: 750+</li>
        <li>• Existing credit cards with ₹5L+ limit helpful</li>
      </ul>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">Self-Employed Applicants</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• Annual ITR: ₹24L+</li>
        <li>• CIBIL score: 750+</li>
        <li>• Business vintage: 3+ years recommended</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Application Process</h3>

  <div class="space-y-4 mb-6">
    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Online Application</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Visit Yes Bank website, share OTP and PAN, address auto-confirmed from credit report. Processing: ~5 minutes for initial submission.</p>
    </div>

    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Branch Digital Route</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Visit Yes Bank branch, digital KYC process similar to IDFC/Amex. Faster than pure online with instant clarifications.</p>
    </div>

    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Timeline</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Approval decision within 3 days, card delivery in ~4 days. Total: 7-10 days from application to card in hand.</p>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Strengths & Considerations</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div>
      <h4 class="font-semibold text-slate-900 dark:text-white mb-4 text-green-600 dark:text-green-400">Key Strengths</h4>
      <ul class="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
        <li class="flex items-start gap-2"><span class="text-green-500 mt-1">✓</span> <span>Best-in-class 4.5% online rewards with no category caps</span></li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-1">✓</span> <span>Unlimited international lounge access—true premium perk</span></li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-1">✓</span> <span>3.3% net return on international online purchases</span></li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-1">✓</span> <span>Fast, digital-first onboarding (5 minutes online)</span></li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-1">✓</span> <span>Premium card aesthetics with Visa Infinite acceptance</span></li>
      </ul>
    </div>

    <div>
      <h4 class="font-semibold text-slate-900 dark:text-white mb-4 text-red-600 dark:text-red-400">Areas to Consider</h4>
      <ul class="space-y-3 text-slate-700 dark:text-slate-300 text-sm">
        <li class="flex items-start gap-2"><span class="text-red-500 mt-1">•</span> <span>Yes Bank support inconsistency—can be slow during issues</span></li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-1">•</span> <span>History of frequent devaluations (voucher redemption halved)</span></li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-1">•</span> <span>Add-on cards require branch visit despite online primary approval</span></li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-1">•</span> <span>No airline/hotel transfer partners—limited flexibility</span></li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-1">•</span> <span>₹4,999 annual fee harder to justify below ₹5L annual spend</span></li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Who Should Apply?</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-800">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">✓ Perfect Fit</h4>
      <ul class="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
        <li>• High-volume online shoppers (₹5L+ annually)</li>
        <li>• International online spenders</li>
        <li>• Frequent business/leisure travelers (lounge value)</li>
        <li>• E-commerce enthusiasts</li>
        <li>• Those seeking straightforward vanilla rewards</li>
      </ul>
    </div>

    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-800">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">✗ Not Ideal</h4>
      <ul class="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
        <li>• Airmiles enthusiasts (no airline transfers)</li>
        <li>• Primarily offline/retail spenders</li>
        <li>• Annual spenders below ₹3L</li>
        <li>• Those requiring excellent customer support</li>
        <li>• Customers needing portfolio diversity</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Verdict</h3>

  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
    <div class="text-white">
      <h4 class="text-2xl font-serif font-medium mb-2">Rating: 4.5/5</h4>
      <p class="leading-relaxed">The Yes Bank Marquee is an exceptional card for online-focused spenders. Its 4.5% online rewards rate is best-in-class without category restrictions, making it simple yet powerful. The unlimited international lounge access, 3.3% net international return, and lightning-fast onboarding create genuine premium value. The primary concern remains Yes Bank's history of benefit modifications—recent voucher redemption devaluation signals this trend continues. For those primarily shopping online, traveling internationally, or spending ₹5L+ annually who can tolerate potential future changes, this card delivers outstanding returns and convenience.</p>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Key Takeaways</h3>

  <ol class="space-y-3 text-slate-700 dark:text-slate-300 mb-6">
    <li><strong>1. Online Dominance:</strong> 4.5% on all online spends is India's best rate without category exceptions</li>
    <li><strong>2. International Value:</strong> 3.3% net return (after forex) beats most premium cards</li>
    <li><strong>3. Lounge Excellence:</strong> Unlimited international + 6 quarterly domestic visits provide genuine premium travel value</li>
    <li><strong>4. Fee Justification:</strong> ₹4,999 annual fee waived above ₹10L spend; even at regular rate, strong value for ₹5L+ spenders</li>
    <li><strong>5. Welcome Bonus:</strong> 40K points (₹10K) immediately offset joining ₹9,999 fee</li>
    <li><strong>6. Fast Approval:</strong> Digital-first process enables approval in 3 days, delivery in 7-10 days</li>
    <li><strong>7. Devaluation Risk:</strong> Yes Bank's track record suggests monitoring for future benefit changes</li>
    <li><strong>8. One Card Limit:</strong> Yes Bank allows only one Marquee per customer—choose this or Reserv, not both</li>
  </ol>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>

  <div class="space-y-4">
    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Is the ₹9,999 joining fee worth paying?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Absolutely. The 40,000 welcome points (₹10,000 redemption value) immediately offset the joining fee and provide net positive value on day one. If you plan to use the card actively, this is a clear yes.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Can I get the annual renewal fee waived?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Yes—automatic waiver if your annual calendar spending exceeds ₹10 lakhs. Otherwise, call Yes Bank for retention offers around renewal, or pay the ₹4,999 for the 20,000 bonus points and renewal benefits.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Why can't I transfer points to airlines or hotels?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Yes Bank's redemption portal is limited to direct flights, hotels, and vouchers. Unlike Amex or HDFC, there are no transfer partnerships. You must redeem directly or use vouchers—this limits flexibility for those with specific airline/hotel loyalty preferences.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Is the card accepted everywhere?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Visa Infinite ensures acceptance at premium merchants globally, but offline acceptance in India is lower than standard Visa/Mastercard due to the premium positioning. For everyday retail, carry a standard card as backup.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Can I hold both Yes Bank Marquee and Reserv?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">No. Yes Bank restricts one super-premium card per customer. Choose based on your primary spending pattern: Marquee for no-subscription high rewards, or Reserv if you prefer structured reward tiers and want airline transfers.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">What if I spend less than ₹5 lakhs annually?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">The ₹4,999 annual fee becomes harder to justify unless you heavily value lounge access. If annual spend is ₹2-5L, consider negotiating fee waiver on renewal; below ₹2L, this card may not deliver ROI.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">How stable are the rewards rates?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Historical context: Yes Bank recently devalued voucher redemption from 0.25 to 0.15 INR per point. While core rewards rates (4.5%/2.25%) have held, monitor your account for notifications. Lock in high-value redemptions when possible.</p>
    </div>
  </div>

  <div class="border-t border-slate-300 dark:border-slate-700 mt-8 pt-6 text-center text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">
    <p>Last Updated: December 2025</p>
    <p>Information accurate as of review date. Card features and benefits subject to change.</p>
  </div>
</div>`},og={id:"hdfc-bizblack",title:"HDFC Bank BizBlack Credit Card Review",excerpt:"Business Credit Card with 5X rewards on tax payments - Best for entrepreneurs",readTime:"16 min read",imageUrl:"/images/credit-cards/hdfc-bizblack.jpg",date:"2025-12-11",tags:["credit-card","hdfc","business","tax-rewards"],content:`
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


  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Reward Structure & Earning Potential</h3>

  <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 dark:from-purple-700 dark:to-pink-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">Regular Rewards</h4>
      <ul class="space-y-3">
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span><strong>3.3% on regular spends</strong> - Flight/Hotel redemptions</span></li>
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span>Reward points valid for 3 years</span></li>
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span>Amazon Pay Voucher available at 0.70 INR per point</span></li>
        <li class="flex items-start gap-3"><span class="text-xl mt-1">✓</span> <span>Points per ₹150: 5 RP on regular spends</span></li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">5X Accelerated Rewards - The Game Changer</h3>

  <p class="text-slate-700 dark:text-slate-300 mb-4">This is the USP of the BizBlack card—you get <strong>5X bonus points</strong> on specific business spends, delivering up to <strong>16.5% effective return</strong>:</p>

  <div class="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 mb-6 dark:from-blue-700 dark:to-cyan-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">5X Reward Points Categories</h4>
      <div class="space-y-3">
        <div class="bg-white/10 p-3 rounded">
          <p class="font-semibold mb-1">1. Income Tax Payments</p>
          <p class="text-sm">On Income Tax portal - Advance Tax & TDS (~0.72% convenience fee)</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="font-semibold mb-1">2. GST Payments</p>
          <p class="text-sm">Direct on GST portal (~1% convenience fee, state-dependent)</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="font-semibold mb-1">3. PayZapp Bill Payments</p>
          <p class="text-sm">Utility & business bill payments via HDFC PayZapp app</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="font-semibold mb-1">4. SmartPay Auto-Debit</p>
          <p class="text-sm">Utility bills set up on auto-debit with bank account</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="font-semibold mb-1">5. Business Payments</p>
          <p class="text-sm">Other business spends via Nuclei payment gateway</p>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">5X Rewards Caps</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• <strong>Minimum spend:</strong> ₹50,000 per statement</li>
        <li>• <strong>Monthly cap:</strong> 7,500 RP (~₹56,250)</li>
        <li>• <strong>Beyond cap:</strong> 1X rate applies</li>
        <li>• <strong>Total earning:</strong> 1.5L RP per cycle max</li>
      </ul>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">Effective Returns</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• <strong>5X bonus rate:</strong> 16.5% gross</li>
        <li>• <strong>After 0.72% tax fee:</strong> ~15.78%</li>
        <li>• <strong>Regular spends:</strong> 3.3% base</li>
        <li>• <strong>Net gain:</strong> Among highest in India</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Milestone Rewards & Annual Benefits</h3>

  <div class="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 mb-6 dark:from-green-700 dark:to-teal-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">Annual Milestone Rewards</h4>
      <table class="w-full text-sm">
        <tbody>
          <tr class="border-b border-white/30">
            <td class="py-2"><strong>₹5 Lakhs Spend</strong></td>
            <td class="py-2 text-right">₹5,000 voucher (1%)</td>
          </tr>
          <tr class="border-b border-white/30">
            <td class="py-2"><strong>₹10 Lakhs Spend</strong></td>
            <td class="py-2 text-right">₹5,000 voucher (1%)</td>
          </tr>
          <tr class="border-b border-white/30">
            <td class="py-2"><strong>₹15 Lakhs Spend</strong></td>
            <td class="py-2 text-right">₹5,000 voucher (1%)</td>
          </tr>
          <tr>
            <td class="py-2"><strong>₹20 Lakhs Spend</strong></td>
            <td class="py-2 text-right">₹5,000 voucher (1%)</td>
          </tr>
        </tbody>
      </table>
      <p class="mt-3 text-sm">Options: SmartBuy Flight Vouchers, Taj Stay, MakeMyTrip, or ITC Vouchers. Up to ₹20,000 per year. <strong>Combined rate: 4.3% (3.3% base + 1% milestone)</strong></p>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Travel & Lifestyle Benefits</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">Airport Lounge Access</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• <strong>Domestic:</strong> Unlimited (Diners Club network)</li>
        <li>• <strong>International:</strong> Unlimited (Diners Club network)</li>
        <li>• <strong>Add-on cards:</strong> Full access for all members</li>
        <li>• <strong>Requirement:</strong> Active card usage (monthly)</li>
      </ul>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">Golf & Lifestyle</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• <strong>Golf rounds:</strong> 6 per quarter (24/year)</li>
        <li>• <strong>Domestic courses:</strong> 20 in network</li>
        <li>• <strong>International:</strong> 140 courses globally</li>
        <li>• <strong>Credit period:</strong> 55 days interest-free</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Important Restrictions</h3>

  <div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mb-6 dark:from-orange-700 dark:to-red-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">Earning & Redemption Caps</h4>
      <ul class="space-y-2 text-sm">
        <li><strong>📊 Redemption Cap:</strong> 70% from points, 30% must pay by card</li>
        <li><strong>📋 Category Caps:</strong> Insurance 5,000 RP/day, Grocery 2,000 RP/month</li>
        <li><strong>📈 Total Earning:</strong> Max 1.5L RP per statement cycle</li>
        <li><strong>💳 Monthly Redemption:</strong> 75,000 points per calendar month limit</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">International Transactions & Forex</h3>

  <div class="space-y-4 mb-6">
    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700/50">
      <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Forex Markup Fee:</strong> 2% + GST (2.2% total)</p>
    </div>
    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700/50">
      <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Base Rewards:</strong> 3.3% + 1% milestone = 4.3%</p>
    </div>
    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700/50">
      <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Net Gain on International:</strong> 4.3% - 2.2% = 2% net return</p>
    </div>
    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700/50">
      <p class="text-slate-700 dark:text-slate-300 text-sm"><strong>Platform:</strong> Diners Club (good acceptance at premium merchants, limited at smaller outlets)</p>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Devaluation Risk Assessment</h3>

  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-3">⚠️ Devaluation Risk: MEDIUM</h4>
      <ul class="space-y-2 text-sm">
        <li>• 5X bonus on PayZapp may face corrections soon (spending threshold increase likely)</li>
        <li>• Recent caps on earnings suggest ongoing benefit modifications</li>
        <li>• Base 3.3% rewards structure appears more stable with capping</li>
        <li>• Tax payment core benefit unlikely to change</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Fee Analysis: Is It Really Free?</h3>

  <div class="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-6 mb-6 dark:from-indigo-700 dark:to-purple-700">
    <div class="text-white">
      <h4 class="text-lg font-semibold mb-4">Cost Breakdown for New Applicants</h4>
      <div class="space-y-3">
        <div class="bg-white/10 p-3 rounded">
          <p class="font-semibold">Scenario: ₹50,000/month Tax Payment</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="text-sm">✓ <strong>Joining Fee Waiver:</strong> ₹1.5L in 90 days (easily achievable)</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="text-sm">✓ <strong>Welcome Benefit:</strong> ₹5,000 Taj Voucher + Club Marriott</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="text-sm">✓ <strong>Year 1 Tax Rewards:</strong> 5X on ₹50K/month = ₹36,000+ in value</p>
        </div>
        <div class="bg-white/10 p-3 rounded">
          <p class="font-semibold text-lg">✓ <strong>Effectively FREE for first year, with ₹20K+ profit</strong></p>
        </div>
      </div>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Eligibility & Application</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">Fresh Applications</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• ITR: ₹21L+ per annum</li>
        <li>• Or: ₹30L+ business income (recent rules)</li>
        <li>• Documents: GST returns, bank statements</li>
        <li>• Types: Sole prop, partnerships, Pvt Ltd</li>
      </ul>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3">Existing HDFC Customers</h4>
      <ul class="text-slate-700 dark:text-slate-300 text-sm space-y-2">
        <li>• Credit limit: > ₹6 Lakhs required</li>
        <li>• Upgrade route: Direct from RM</li>
        <li>• Often: Issued as FYF (First Year Free)</li>
        <li>• Process: Faster than fresh application</li>
      </ul>
    </div>
  </div>

  <div class="space-y-4 mb-6">
    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Online Application</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Apply directly through HDFC website with ITR and business documents. Approval typically within 5-7 days.</p>
    </div>

    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Branch Application</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Apply offline at HDFC branch for faster processing and personal guidance through approval.</p>
    </div>

    <div class="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border-l-4 border-blue-500">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-2">Upgrade/Floater</h4>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Most commonly issued as First Year Free on upgrade from another HDFC credit card. No additional documents needed.</p>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">User Experience & Real Feedback</h3>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-300 dark:border-green-700/50">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3 text-green-600 dark:text-green-400">✓ Strengths</h4>
      <ul class="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
        <li>• 5X on taxes is industry-first and game-changing</li>
        <li>• Outstanding value for ₹50K+ monthly payments</li>
        <li>• 55-day credit period aids cash flow management</li>
        <li>• Unlimited lounge access for all members</li>
        <li>• Marriott membership adds lifestyle value</li>
      </ul>
    </div>

    <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-300 dark:border-red-700/50">
      <h4 class="font-semibold text-slate-900 dark:text-white mb-3 text-red-600 dark:text-red-400">✗ Concerns</h4>
      <ul class="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
        <li>• Diners Club acceptance issues in some regions</li>
        <li>• GST credit payment not enabled in all states</li>
        <li>• Devaluation risk on PayZapp 5X benefit</li>
        <li>• Convenience fees reduce effective returns</li>
        <li>• HDFC customer service inconsistency</li>
      </ul>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Verdict</h3>

  <div class="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 mb-6 dark:from-yellow-700 dark:to-orange-700">
    <div class="text-white">
      <h4 class="text-2xl font-serif font-medium mb-2">Rating: 5/5</h4>
      <p class="leading-relaxed">HDFC BizBlack is a heavily loaded business card delivering exceptional value for entrepreneurs with regular tax and GST obligations. The 5X rewards on tax payments are industry-first and can save ₹1L+ annually with proper spend management. Even for smaller spenders, milestone benefits and lounge access justify the card. The only concern is Diners Club acceptance in smaller merchant categories, but for business-focused spending, it's minimal.</p>
    </div>
  </div>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Key Takeaways</h3>

  <ol class="space-y-3 text-slate-700 dark:text-slate-300 mb-6">
    <li><strong>1. Industry-First:</strong> 5X rewards on IT/GST is unique globally, delivering 16.5% effective rate</li>
    <li><strong>2. Fee Strategy:</strong> Get ₹1.5L spend waiver easily with regular tax payments in 90 days</li>
    <li><strong>3. Annual Savings:</strong> Up to ₹1L saved annually with ₹50K monthly tax/GST payments</li>
    <li><strong>4. Renewal Value:</strong> Fee waiver at ₹7.5L spend makes it LTF for high spenders</li>
    <li><strong>5. Lounge Access:</strong> Unlimited for primary + all add-on card members</li>
    <li><strong>6. Milestone Rewards:</strong> Up to ₹20K annually in vouchers based on spending milestones</li>
    <li><strong>7. Extended Credit:</strong> 55-day payment window provides superior cash flow management</li>
    <li><strong>8. Devaluation Watch:</strong> Monitor PayZapp 5X benefit as HDFC may increase minimum spend threshold</li>
  </ol>

  <h3 class="text-3xl font-serif font-medium text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>

  <div class="space-y-4">
    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Can self-employed professionals get this card?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Yes—with ITR showing income >₹21L p.a., or existing HDFC credit card with >₹6L limit. Sole proprietors, partnerships, and private limited companies are all accepted.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Are GST payments eligible for 5X rewards?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Yes—directly on the GST portal. A ~1% convenience fee applies (varies by state), but rewards still significantly outpace the fee. Currently enabled in 13+ states with more coming.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">What's the convenience fee on tax payments?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Income tax: ~0.72% + GST, GST: ~1% + GST. Despite these fees, net returns after 5X rewards remain among India's best (2.3%+ after fees).</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Can I hold both BizBlack and Diners Black?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Yes—you can hold both as separate cards or BizBlack as a floater card on your Diners Black account. No restrictions on multiple Diners variants.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">Is Diners Club acceptance an issue for business payments?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">For government portals (tax/GST) and PayZapp, no issues at all. For merchant payments, acceptance is strong in metro cities but can be limited in tier-2 cities. Use alongside a Visa/Mastercard for complete coverage.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">When are 5X rewards credited to my account?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">4X bonus points are credited 3-4 days after statement generation. Base 1X points appear immediately with transactions. All points are pooled and can be redeemed after 48 hours.</p>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-lg p-4">
      <h5 class="font-semibold text-slate-900 dark:text-white mb-2">What if I can't hit ₹7.5L for annual renewal fee waiver?</h5>
      <p class="text-slate-700 dark:text-slate-300 text-sm">Call HDFC 30 days before renewal to request retention offers—usually granted for customers with good payment history. Alternatively, seek upgrade from your RM to another HDFC card or request a floater arrangement.</p>
    </div>
  </div>

  <div class="border-t border-slate-300 dark:border-slate-700 mt-8 pt-6 text-center text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">
    <p>Last Updated: December 2025</p>
    <p>Information accurate as of review date. Benefits subject to change by HDFC Bank.</p>
  </div>
</div>`},ng={id:"rbl-world-safari",title:"RBL Bank World Safari Credit Card Review",excerpt:"Travel Credit Card with 0% forex markup - Best for international travelers",readTime:"13 min read",imageUrl:"/images/credit-cards/world-safari-mk.png",date:"2025-12-11",tags:["credit-card","rbl","travel","forex"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-50 dark:from-slate-800/60 dark:via-emerald-900/30 dark:to-slate-800/60 rounded-xl border border-teal-200/50 dark:border-teal-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">RBL Bank World Safari Credit Card: The Ultimate International Travel Companion</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        The RBL Bank World Safari Credit Card is India's premier travel card for globetrotters. Boasting an industry-leading <strong>0% forex markup</strong>, comprehensive multi-trip travel insurance accepted by embassies worldwide, and a rewarding milestone program, this card is built for seamless international adventures. Say goodbye to hidden currency conversion fees and travel with peace of mind.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Premium Travel Credit Card (Mastercard)</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹3,000 + GST (offset by welcome voucher)</td></tr>
          <tr><td class="font-semibold">Forex Markup</td><td>0% (Industry-leading)</td></tr>
          <tr><td class="font-semibold">Travel Insurance</td><td>Care Insurance, multi-trip, $50,000 USD coverage</td></tr>
          <tr><td class="font-semibold">Reward Rate</td><td>0.5% - 2.5% (domestic spends)</td></tr>
          <tr><td class="font-semibold">Lounge Access</td><td>2 domestic / 2 international (Priority Pass) + bonus</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Frequent international travelers, visa applicants</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Welcome Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Joining Fee:</strong> ₹3,000 + GST</li>
      <li><strong>Welcome Benefit:</strong> ₹3,000 MakeMyTrip (MMT) Voucher (effectively making the first year free)</li>
      <li><strong>Annual Fee:</strong> ₹3,000 + GST (waivable on request, based on usage)</li>
      <li><strong>Renewal Benefit:</strong> None automatically, can be requested based on profile</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The 0% Forex Markup Advantage</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">✅ Zero Forex Markup Fees</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The RBL World Safari is one of the few cards in India to offer a <strong>0% forex markup</strong> on international transactions. This means you save 1.99% - 3.5% (plus GST) on every foreign currency spend compared to standard cards.
        While you won't earn rewards on international transactions, the significant savings on markup charges make this a game-changer for frequent global travelers.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Points System (Domestic Spends)</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Travel Spends:</strong> 5 Travel Points per ₹100 (1.25% effective return)</li>
      <li><strong>Other Domestic Spends:</strong> 2 Travel Points per ₹100 (0.50% effective return)</li>
      <li><strong>1 Travel Point Value:</strong> ~₹0.25 (varies by redemption category)</li>
      <li><strong>Points Validity:</strong> 2 years</li>
    </ul>

    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">✈️ Travel Spends include:</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>Flights & Airfare (domestic & international)</li>
        <li>Hotel bookings & stays</li>
        <li>Travel packages & tours</li>
        <li>Railway & Bus bookings, vehicle rentals</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Milestone Rewards: Boost Your Savings</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">₹2.5 Lakhs Spend</td><td>10,000 Travel Points (~₹2,500 value)</td><td>1% effective return</td></tr>
          <tr><td class="font-semibold">₹5 Lakhs Spend</td><td>15,000 Travel Points (~₹3,750 value)</td><td>1.2% effective return</td></tr>
          <tr><td class="font-semibold">₹7.5 Lakhs Spend</td><td>₹10,000 e-Voucher</td><td>2% effective return</td></tr>
        </tbody>
      </table>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-3">Voucher options include Taj experiences, Amazon, Croma, Myntra, and MakeMyTrip.</p>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">Achieving ₹7.5 Lakhs annual spend provides an impressive 2% overall return rate, further enhancing the card's value for travelers.</p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Comprehensive Travel Insurance</h3>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🛡️ Care Insurance Group Policy Details:</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li><strong>Coverage Period:</strong> 1 year (multi-trip)</li>
        <li><strong>Geographic Scope:</strong> Worldwide (excluding country of residence)</li>
        <li><strong>Max Trip Duration:</strong> 30 days per trip</li>
        <li><strong>Emergency Medical:</strong> $50,000 USD coverage</li>
        <li><strong>Visa Acceptance:</strong> Accepted by most embassies for visa applications (e.g., Schengen)</li>
        <li><strong>Includes:</strong> Personal Liability, Trip Delay/Cancellation, Baggage Loss, Loss of Passport, Dental Treatment, Hospitalization, Flight Accident.</li>
        <li><strong>Estimated Value:</strong> ₹7,000+ (a significant saving for visa applicants)</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Lounge & Golf Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Domestic Lounge Access:</strong> 2 per quarter (Mastercard/Visa network)</li>
      <li><strong>International Lounge Access:</strong> 2 per year (Priority Pass)</li>
      <li><strong>Bonus International Visit:</strong> +1 additional visit for every ₹50,000 spent per quarter</li>
      <li><strong>Golf Games:</strong> 4 complimentary games per year (max 1 per month)</li>
      <li><strong>Golf Lessons:</strong> 12 complimentary lessons per year (max 1 per month)</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Eligibility & Application</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Income Requirement:</strong> Generally ₹25 Lakhs+ p.a. (salaried/self-employed)</li>
      <li><strong>CIBIL Score:</strong> 750+ preferred, good credit history helps</li>
      <li><strong>Application:</strong> Online via RBL website, in-branch, or card-on-card basis</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Who Should Get This Card?</h3>
    <div class="p-5 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 dark:from-yellow-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 rounded-lg border-l-4 border-yellow-600 dark:border-yellow-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>✅ Frequent International Travelers (2-3+ trips/year)</li>
        <li>✅ Business Travelers with regular forex spends</li>
        <li>✅ Digital Nomads & Expats seeking forex savings</li>
        <li>✅ Individuals applying for Schengen/Euro visas (due to included insurance)</li>
        <li>✅ Those with annual spends of ₹7.5 Lakhs+ to maximize milestone benefits</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Potential Concerns & Drawbacks</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Customer Support:</strong> RBL Bank's customer service can be inconsistent.</li>
      <li><strong>Modest Lounge Access:</strong> Domestic lounge access (2 per quarter) is lower than some competitors.</li>
      <li><strong>Rewards Redemption Value:</strong> Point value of ~₹0.25 is moderate.</li>
      <li><strong>No Rewards on International Spends:</strong> A trade-off for 0% forex markup.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-indigo-900/30 rounded-xl border-2 border-indigo-300 dark:border-indigo-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐ 4/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        The RBL World Safari Credit Card is an excellent choice for dedicated international travelers who prioritize forex savings and comprehensive insurance. Its 0% markup and included travel insurance (worth ₹7,000+) provide significant value, especially for those making multiple trips or applying for visas. While domestic rewards and lounge access are modest, the core international travel benefits make this card a strong contender.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>0% Forex Markup:</strong> Save substantially on all international transactions.</li>
      <li><strong>Comprehensive Travel Insurance:</strong> Accepted by embassies for visa applications.</li>
      <li><strong>Effective First Year Free:</strong> ₹3,000 MMT voucher offsets joining fee.</li>
      <li><strong>Strong Milestone Benefits:</strong> Up to 2% effective return at ₹7.5L annual spend.</li>
      <li><strong>Mastercard Network:</strong> Excellent global acceptance.</li>
      <li><strong>Ideal for Visa Applicants:</strong> Included insurance simplifies the process.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
    <div class="space-y-4 mb-6">
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Does the 0% markup apply to all international transactions?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, on spends. ATM withdrawals incur standard charges. Note: No rewards on international spends.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Is the travel insurance automatically activated?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, it's activated upon card issuance. Policy documents are usually sent within a week.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Can I use this for Schengen visa applications?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, the comprehensive travel insurance is accepted by most embassies worldwide.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">What's the Priority Pass validity?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">It's typically valid for 1 year from card issuance. Check with RBL for renewal details and associated fees.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Is there a better alternative for high spenders?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">For ₹20L+ annual spend, cards like HDFC Infinia or Axis Magnus might offer higher overall value, but they come with higher fees.</p>
      </div>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information based on CardExpert Review & RBL Bank official sources | Benefits subject to change by RBL Bank
    </p>
  `},dg={id:"hdfc-marriott-bonvoy",title:"HDFC Bank Marriott Bonvoy Credit Card Review",excerpt:"Co-brand Travel Card with Free Night Awards - Best for Marriott loyalists",readTime:"14 min read",imageUrl:"/images/credit-cards/mb-mk.png",date:"2025-12-11",tags:["credit-card","hdfc","marriott","travel"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 dark:from-slate-800/60 dark:via-indigo-900/30 dark:to-slate-800/60 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">HDFC Bank Marriott Bonvoy Credit Card: Elite Hotel Stays & Free Nights</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        The HDFC Bank Marriott Bonvoy Credit Card is a premium co-branded offering for Marriott loyalists, providing exclusive access to Marriott Bonvoy points, complimentary elite status, and valuable Free Night Awards. This card is designed to elevate your hotel experiences, making luxury stays more accessible and rewarding. With its generous welcome and renewal benefits, it's a compelling choice for frequent travelers and hotel enthusiasts.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Co-brand Travel Credit Card (Diners Club)</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹3,000 + GST</td></tr>
          <tr><td class="font-semibold">Reward Rate</td><td>0.66% - 2.66% (effective)</td></tr>
          <tr><td class="font-semibold">Welcome/Renewal Benefit</td><td>1 Free Night Award (up to 15,000 pts)</td></tr>
          <tr><td class="font-semibold">Elite Status</td><td>Complimentary Silver Elite + 10 Elite Night Credits</td></tr>
          <tr><td class="font-semibold">Lounge Access</td><td>12 Domestic / 12 International (Priority Pass)</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Marriott loyalists seeking Free Night Awards & status</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Welcome Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Joining Fee:</strong> ₹3,000 + GST (₹3,540 total)</li>
      <li><strong>Welcome Benefit:</strong> 1 Free Night Award (FNA) worth up to 15,000 Marriott Bonvoy Points.</li>
      <li><strong>Annual Fee:</strong> ₹3,000 + GST</li>
      <li><strong>Renewal Benefit:</strong> 1 Free Night Award (FNA) worth up to 15,000 Marriott Bonvoy Points.</li>
      <li><strong>Fee Waiver:</strong> Not automatic, may be granted upon request based on spend profile.</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Key Insight: Free Night Award Value</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        Each Free Night Award is valued at ₹7,500+ minimum, easily offsetting the annual fee if utilized. This makes the card effectively free for Marriott loyalists.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Points Structure</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Regular Spends</td><td>2 points per ₹150</td><td>0.66% effective return</td></tr>
          <tr><td class="font-semibold">Travel, Dining, Entertainment</td><td>4 points per ₹150</td><td>1.33% effective return</td></tr>
          <tr><td class="font-semibold">Marriott Hotels</td><td>8 points per ₹150</td><td>2.66% effective return</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📊 Reward Points Calculation & Limitations:</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li><strong>Point Value:</strong> 1 Marriott Bonvoy Point ≈ ₹0.50 (can vary from ₹0.30 to ₹1.00 based on property).</li>
        <li><strong>Transfer Delay:</strong> Points take up to <strong>12 weeks (3 months)</strong> to reflect in your Marriott Bonvoy account, a significant drawback.</li>
        <li><strong>Exclusions:</strong> No points on Fuel, Wallet loads, Government spends, EMI, Rent, or utilities.</li>
        <li><strong>Ongoing Rewards Concern:</strong> Even at Marriott hotels, the 2.66% effective rate is generally lower than what you could achieve with other premium travel cards like Axis Magnus.</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Free Night Awards (FNA) - Maximize Your Stays</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Value:</strong> Each FNA is worth up to 15,000 Marriott Bonvoy Points.</li>
      <li><strong>Frequency:</strong> One FNA on welcome and one on annual renewal.</li>
      <li><strong>Flexibility:</strong> FNAs can be combined with your existing Bonvoy points to book higher-category hotels (e.g., a 20,000-point property can be booked with 1 FNA + 5,000 points from your account).</li>
      <li><strong>Fulfillment:</strong> Credited approximately 60+ days after fee clearance.</li>
      <li><strong>Validity:</strong> Each FNA is valid for 1 year from issuance.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Milestone Benefits</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">₹6 Lakhs Annual Spend</td><td>1 Free Night Award</td><td>~1.2% effective return</td></tr>
          <tr><td class="font-semibold">₹9 Lakhs Annual Spend</td><td>1 Free Night Award</td><td>~1.7% cumulative return</td></tr>
          <tr><td class="font-semibold">₹15 Lakhs Annual Spend</td><td>1 Free Night Award</td><td>~1.5% total return</td></tr>
        </tbody>
      </table>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-3">
        Even with milestone FNAs, the maximum combined reward rate (including base points) is around 2%, which is generally lower than other comparable premium travel cards for overall spend.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Elite Status Benefits</h3>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🏆 Complimentary Marriott Bonvoy Silver Elite Status:</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li><strong>10 Elite Night Credits:</strong> These credits count towards achieving higher Marriott Bonvoy tiers faster (equivalent to staying 10 nights).</li>
        <li><strong>Priority Late Checkout:</strong> Subject to availability.</li>
        <li><strong>10% Bonus Points:</strong> Earn additional points on all eligible Marriott stays.</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
        This benefit is particularly valuable for accelerating your path to Gold Elite status, which unlocks more significant perks like room upgrades and complimentary breakfast.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Travel & Lifestyle Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Domestic Lounge Access:</strong> 12 complimentary visits per year (no quarterly cap, via Diners Club network).</li>
      <li><strong>International Lounge Access:</strong> 12 complimentary visits per year (via Priority Pass). Add-on cardholders also receive these benefits.</li>
      <li><strong>Golf Privileges:</strong> 2 complimentary golf games per quarter (8 per year) and 2 complimentary golf lessons per quarter (8 per year), booked through HDFC Bank's golf program.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Card Design & Aesthetics</h3>
    <div class="p-5 bg-gradient-to-br from-pink-50 via-red-50 to-pink-50 dark:from-pink-900/20 dark:via-red-900/15 dark:to-pink-900/20 rounded-lg border-l-4 border-pink-500 dark:border-pink-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💎 Premium Design & Feel:</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The HDFC Marriott Bonvoy card features a premium aesthetic with sophisticated co-branding. While not a metal card, its design quality, including font and logo placement, makes it feel genuinely premium and is among the best from HDFC Bank.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Main Concerns & Drawbacks</h3>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>⚠️ <strong>Poor Ongoing Rewards:</strong> The effective reward rate of ~2% even at Marriott hotels is disappointing for a premium co-branded card.</li>
        <li>⚠️ <strong>Significant Point Transfer Delay:</strong> The 12-week wait for Bonvoy points to transfer is a major inconvenience, especially for time-sensitive bookings.</li>
        <li>⚠️ <strong>Diners Club Acceptance:</strong> While improving, Diners Club cards can still face acceptance issues at some merchants, particularly outside major cities.</li>
        <li>⚠️ <strong>Slow Benefit Processing:</strong> Welcome benefits and FNAs can take 60+ days to credit, and Elite Night Credits even longer, leading to a frustrating onboarding experience.</li>
        <li>⚠️ <strong>No Automatic Fee Waiver:</strong> The annual fee is generally mandatory and not automatically waived based on spend.</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Eligibility & Application</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Eligibility:</strong> Existing HDFC credit card holders with good standing, salaried professionals with stable income, or self-employed individuals with a strong ITR. Marriott Bonvoy membership can also be a factor.</li>
      <li><strong>Application Methods:</strong> Direct application via the Marriott website, HDFC Bank website, or through an existing HDFC relationship manager.</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 dark:from-yellow-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 rounded-lg border-l-4 border-yellow-600 dark:border-yellow-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⏳ Onboarding Experience - Be Prepared for Delays:</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li><strong>Application to Approval:</strong> Typically 2-3 days.</li>
        <li><strong>Approval to Card Delivery:</strong> 5-7 days.</li>
        <li><strong>Fee Charging:</strong> Usually in the 3rd month statement.</li>
        <li><strong>FNA Credit:</strong> 60+ days post-fee payment.</li>
        <li><strong>Elite Night Credits:</strong> Another 30+ days after FNA credit.</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
        The slow processing timeline for benefits can be frustrating for those expecting immediate fulfillment.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Who Should Get This Card?</h3>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>✅ <strong>Marriott Bonvoy Members:</strong> Essential for those actively building or maintaining Marriott Bonvoy elite status.</li>
        <li>✅ <strong>Elite Status Chasers:</strong> Ideal if you are 5-10 elite nights away from reaching a higher Bonvoy tier.</li>
        <li>✅ <strong>Frequent Marriott Guests:</strong> If you regularly stay at Marriott properties and can effectively use the Free Night Awards.</li>
        <li>✅ <strong>Seeking Premium Lounge Access:</strong> The generous domestic and international lounge visits are a significant perk.</li>
        <li>✅ <strong>Value Free Night Awards:</strong> Those who prioritize the substantial value derived from the welcome and renewal FNAs over ongoing reward rates.</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐ 4/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        The HDFC Bank Marriott Bonvoy Credit Card is a niche but valuable offering. Its strength lies almost entirely in its welcome and renewal Free Night Awards and the complimentary Elite Night Credits, which can be highly profitable for dedicated Marriott loyalists. While the ongoing reward rate and benefit processing times are underwhelming, if you leverage the FNAs and elite status benefits, this card provides exceptional value for its annual fee. It's best seen as a 'benefits card' to hold for the free nights rather than a primary card for all your spending.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>High Welcome & Renewal Value:</strong> Each FNA is worth ₹7,500+, easily offsetting the annual fee.</li>
      <li><strong>Accelerated Elite Status:</strong> 10 Elite Night Credits significantly help in reaching higher Marriott Bonvoy tiers.</li>
      <li><strong>Generous Lounge Access:</strong> 12 domestic and 12 international lounge visits annually with no quarterly caps.</li>
      <li><strong>Substantial Processing Delays:</strong> Be prepared for delays of 60-90+ days for benefits to be credited.</li>
      <li><strong>Weak Ongoing Rewards:</strong> The effective reward rate is low compared to other premium cards.</li>
      <li><strong>Diners Club Network:</strong> While improving, occasional acceptance issues may arise.</li>
      <li><strong>Golf Privileges:</strong> Complimentary games and lessons add to the lifestyle benefits.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
    <div class="space-y-4 mb-6">
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Is the ₹3,000 annual fee worth it?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, absolutely, if you utilize the Free Night Award, which alone can be worth ₹7,500 or more.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">How long does it take for benefits to be credited?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Welcome FNAs can take 60+ days, and Elite Night Credits typically 90+ days after fee payment. Patience is key.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-slate-300 mb-1">Can I combine a Free Night Award with my existing Bonvoy points?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, you can top-up an FNA with your own points to book a higher-category hotel (e.g., use a 15k FNA for a 20k point stay by adding 5k points).</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Does this card help towards achieving Marriott Bonvoy lifetime Platinum status?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, the 10 Elite Night Credits, along with actual stay nights, contribute to your Bonvoy lifetime status progression.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">What if I don't use the Free Night Award?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">FNAs expire after 1 year if unused. It's crucial to plan your stay to maximize this benefit, as it represents a significant value.</p>
      </div>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information based on HDFC Bank & Marriott Bonvoy official sources | Benefits subject to change by HDFC Bank
    </p>
  `},cg={id:"amex-platinum-travel",title:"American Express Platinum Travel Credit Card Review",excerpt:"Travel Credit Card with 8.5% rewards on milestones - Best travel card in India",readTime:"15 min read",imageUrl:"/images/credit-cards/plat-travel-mk.png",date:"2025-12-11",tags:["credit-card","amex","travel","rewards"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">American Express Platinum Travel Credit Card: Your Gateway to Premium Travel</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        The American Express Platinum Travel Credit Card is consistently ranked as one of India's best travel cards, offering an astounding <strong>8.5% effective reward rate</strong> on milestone spends. Designed for avid travelers and luxury hotel enthusiasts, this card unlocks unparalleled value through Taj Vouchers and Marriott Bonvoy transfers, making it an essential companion for those who prioritize travel rewards.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Premium Travel Credit Card (American Express)</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹5,000 + GST</td></tr>
          <tr><td class="font-semibold">Effective Reward Rate</td><td>1% - 8.5% (with milestones)</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Taj Vouchers, Marriott Bonvoy transfers & milestone benefits</td></tr>
          <tr><td class="font-semibold">Milestone Benefit</td><td>Up to 17,500 bonus MR points (on ₹4L spend)</td></tr>
          <tr><td class="font-semibold">Lounge Access</td><td>4 Domestic / 1 International per quarter (with spend)</td></tr>
          <tr><td class="font-semibold">Point Expiry</td><td>Never</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Welcome Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Joining Fee:</strong> ₹5,000 + GST (₹5,900 total)</li>
      <li><strong>Welcome Benefit:</strong> 10,000 Membership Rewards (MR) Points (valued at ₹2,500 - ₹5,000).</li>
      <li><strong>Annual Fee:</strong> ₹5,000 + GST</li>
      <li><strong>Renewal Benefit:</strong> No automatic benefit, but retention offers are often available upon request.</li>
      <li><strong>Fee Waiver:</strong> Achieved on spending ₹7 Lakhs or more in the previous year.</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Important Distinction:</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        This review is for the <strong>American Express Platinum Travel Credit Card</strong>, not to be confused with the ultra-premium Platinum Charge Card, which has a significantly higher annual fee (₹77,880).
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Membership Rewards (MR) Points Structure</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Base Earn Rate:</strong> 1 MR point for every ₹50 spent on most purchases.</li>
      <li><strong>Point Expiry:</strong> Membership Rewards points never expire, offering long-term flexibility.</li>
      <li><strong>Exclusions:</strong> No points are earned on Insurance, Utilities, Fuel, Wallet loads, Government spends, EMI transactions, and Rent payments.</li>
      <li><strong>Pooling:</strong> MR points earned on this card cannot be pooled with points from other American Express cards.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Game-Changer: Milestone Benefits</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">₹1.9 Lakhs Annual Spend</td><td>7,500 Bonus MR Points</td></tr>
          <tr><td class="font-semibold">₹4 Lakhs Annual Spend</td><td>10,000 Bonus MR Points</td></tr>
        </tbody>
      </table>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-3">
        Achieving both milestones on ₹4 Lakhs annual spend yields a total of 17,500 bonus MR points. Combined with 8,000 base points (on ₹4L spend), this totals <strong>25,500 MR points</strong>, valued at approximately ₹12,750+ (assuming ₹0.50/point). This translates to an outstanding <strong>8.5% effective reward rate</strong>.
      </p>
    </div>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📞 Crucial Tip: Call for Bonus Points!</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        American Express does not automatically credit milestone bonus points. You **MUST call Amex customer service** and request these bonus points once you hit the spend milestones. Many cardholders miss out on thousands of points by not doing this. Historically, some users have even successfully claimed bonus points from previous years with a proactive call.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Redemption Options & Value</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Taj Vouchers:</strong> 1 MR point = ₹1 Taj Voucher (1% return). Redeemable across Taj properties in India. Note: some properties may be overpriced when booking with vouchers.</li>
      <li><strong>Marriott Bonvoy Transfers:</strong> Transfer MR points to Marriott Bonvoy at varying ratios (typically 1 MR = 0.30-0.33 Marriott points). Value can reach 1.5% - 2% (or higher during limited-time transfer bonuses). This is ideal for international hotel redemptions.</li>
      <li><strong>Direct Cash/Vouchers:</strong> Direct cash redemption offers poor value (1 MR point = ₹0.50, or 0.5% return). Amazon vouchers are also available at a significantly lower value (₹0.25/point), making these options generally not recommended.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Travel & Lifestyle Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Domestic Lounge Access:</strong> 4 complimentary visits per quarter at participating lounges (Visa/Mastercard accepted). Requires ₹20,000 spend in the previous quarter.</li>
      <li><strong>International Lounge Access:</strong> 1 complimentary visit per month via Priority Pass (with ₹20,000 spend in the previous quarter).</li>
      <li><strong>Health Insurance:</strong> Complimentary health insurance through ICICI Lombard, covering medical emergencies while traveling.</li>
      <li><strong>Amex Festive Offers:</strong> Access to periodic bonus point offers and special discounts during holiday seasons, often including Taj properties.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Forex Markup & International Spends</h3>
    <div class="p-5 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-red-900/20 dark:via-orange-900/15 dark:to-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ High Forex Markup:</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The card carries a <strong>3.5% + Service Tax forex markup fee</strong> on international transactions. While this is higher than some competitors, the significant milestone rewards on travel bookings can often offset this cost for frequent international travelers, especially when transferring points to Marriott Bonvoy.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Financial Analysis & Value Proposition</h3>
    <h4 class="text-lg font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Year 1 Value (assuming ₹4 Lakhs annual spend):</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Annual Fee</td><td>-₹5,900</td></tr>
          <tr><td class="font-semibold">Welcome Points (10K @ ₹2.50)</td><td>+₹2,500</td></tr>
          <tr><td class="font-semibold">Base Rewards (8,000 pts @ ₹2.50)</td><td>+₹2,000</td></tr>
          <tr><td class="font-semibold">Milestone Bonus (17,500 pts @ ₹2.50)</td><td>+₹4,375</td></tr>
          <tr class="font-bold text-slate-900 dark:text-white"><td class="py-2">Net Year 1 Benefit</td><td class="py-2">+₹3,000</td></tr>
        </tbody>
      </table>
    </div>

    <h4 class="text-lg font-serif font-bold mb-4 mt-6 text-slate-900 dark:text-white">Year 2+ Value (assuming ₹4 Lakhs annual spend):</h4>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Annual Fee</td><td>-₹5,900</td></tr>
          <tr><td class="font-semibold">Base Rewards (8,000 pts)</td><td>+₹2,000</td></tr>
          <tr><td class="font-semibold">Milestone Bonus (17,500 pts)</td><td>+₹4,375</td></tr>
          <tr class="font-bold text-slate-900 dark:text-white"><td class="py-2">Net Recurring Benefit</td><td class="py-2">+₹475</td></tr>
        </tbody>
      </table>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-3">
        The card effectively pays for itself in the first year and continues to provide a positive net benefit from Year 2 onwards, assuming you consistently achieve the ₹4 Lakhs annual spend milestone.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Eligibility & Application</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Eligibility:</strong> Generally requires a strong credit history, stable income (salaried or self-employed), and a good CIBIL score. Existing Amex cardholders may have an easier application process.</li>
      <li><strong>Application Methods:</strong> Apply directly via the American Express website, use a referral link for additional bonus points, or apply on a card-on-card basis if you already hold another Amex card.</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⏳ Application & Onboarding Timeline:</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li><strong>Approval Status:</strong> Typically within 2 days.</li>
        <li><strong>Card Delivery:</strong> Approximately 3 additional days.</li>
        <li><strong>First-time Amex Applicants:</strong> May experience an additional week for processing due to enhanced verification.</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Who Should Get This Card?</h3>
    <div class="p-5 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-50 dark:from-yellow-900/20 dark:via-orange-900/15 dark:to-yellow-900/20 rounded-lg border-l-4 border-yellow-600 dark:border-yellow-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>✅ <strong>Annual Travel Spends of ₹4 Lakhs+:</strong> Crucial to maximize the milestone benefits.</li>
        <li>✅ <strong>Frequent Hotel & Flight Bookings:</strong> Ideal for those who spend heavily on travel categories.</li>
        <li>✅ <strong>Marriott Bonvoy Members:</strong> Excellent for transferring points for luxury hotel redemptions.</li>
        <li>✅ <strong>Taj Property Enthusiasts:</strong> High-value Taj Vouchers are a significant draw.</li>
        <li>✅ <strong>Seeking Consistent High Reward Rate:</strong> The 8.5% effective return is unmatched for a travel card in its segment.</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-3">
        <strong>This card is NOT ideal for:</strong> those with <₹2 Lakhs annual travel spend, cash-focused spenders, individuals primarily seeking airmile transfers (as this card focuses on hotel/voucher redemptions), or users highly sensitive to card acceptance at all merchant types.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐⭐ 5/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        The American Express Platinum Travel Credit Card is an absolute **must-have** for serious travelers in India. Its unparalleled milestone benefits, offering up to 8.5% effective rewards, make it the highest-rewarding travel card in its segment. While American Express acceptance can be a minor concern at smaller merchants, for booking flights and hotels—where the true value lies—acceptance is excellent. This card is a non-negotiable addition to any travel enthusiast's wallet if you meet the annual spending threshold.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Highest Travel Rewards:</strong> Achieve up to 8.5% effective reward rate, best-in-class in India.</li>
      <li><strong>Unmatched Milestone Benefits:</strong> Secure 17,500 bonus MR points on ₹4 Lakhs annual spend.</li>
      <li><strong>High-Value Redemptions:</strong> Excellent for Taj Vouchers (1:1 value) and Marriott Bonvoy transfers.</li>
      <li><strong>Fee Justification:</strong> The card effectively pays for itself from the first year with milestone achievements.</li>
      <li><strong>Proactive Claiming:</strong> Remember to call Amex customer service to claim your milestone bonus points.</li>
      <li><strong>Points Never Expire:</strong> Enjoy lifetime validity on your Membership Rewards points.</li>
      <li><strong>Premium Lounge Access:</strong> Benefit from domestic and international lounge visits, enhancing your travel experience.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
    <div class="space-y-4 mb-6">
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Is the Amex Platinum Travel card better than the Platinum Charge card?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">For pure travel rewards and benefits, the Platinum Travel card is generally superior due to its high effective reward rate. The Platinum Charge card is more focused on ultra-premium lifestyle experiences and concierge services.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">Do I need to call Amex every time to get my bonus points?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Yes, American Express does not automatically credit milestone bonus points. You must proactively call customer service to ensure these points are added to your account.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-slate-300 mb-1">Can the annual fee be waived?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">The annual fee is waived if your annual spending exceeds ₹7 Lakhs. If below this threshold, you can call Amex for potential retention offers, but it's not guaranteed.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">What is American Express card acceptance like in India?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Acceptance is excellent at major hotels, airlines, e-commerce platforms, and premium merchants. However, you might encounter limited acceptance at smaller shops or local restaurants compared to Visa/Mastercard.</p>
      </div>
      <div class="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border-l-4 border-slate-500 dark:border-slate-400/50">
        <p class="font-semibold text-slate-900 dark:text-white mb-1">How do I transfer points to Marriott Bonvoy?</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Points can be transferred via the American Express online portal. Transfers typically process within 2-4 weeks. Be aware of any minimum transfer amounts or active bonus offers.</p>
      </div>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information based on American Express official sources & CardExpert Review | Benefits subject to change by American Express
    </p>
  `},ug={id:"idfc-mayura-credit-card",title:"IDFC FIRST Bank Mayura Credit Card Review",excerpt:"Premium metal card with 0% forex markup, 3.3% reward rate on travel, and up to 6.6% on accelerated spends.",readTime:"12 min read",imageUrl:"/images/credit-cards/mayura-mk.png",date:"2025-12-13",tags:["credit-card","idfc","travel","forex","premium"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 dark:from-slate-800/60 dark:via-amber-900/30 dark:to-slate-800/60 rounded-xl border border-amber-200/50 dark:border-amber-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">IDFC FIRST Bank Mayura Credit Card: Premium Metal Card with Exceptional Rewards</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        IDFC FIRST Bank launched the Mayura Credit Card under the premium segment as a paid variant. Recent upgrades like accelerated rewards and 2X point value on travel redemptions have made this card one of the most rewarding in India, offering reward rates as good as HDFC Infinia's 3.3% on regular spends.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Premium Metal Credit Card</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹6,999 + GST</td></tr>
          <tr><td class="font-semibold">Reward Rate</td><td>0.16% - 6.6% (varies by category & spend tier)</td></tr>
          <tr><td class="font-semibold">Point Value</td><td>₹0.25 (Regular) / ₹0.50 (Travel Redemption)</td></tr>
          <tr><td class="font-semibold">Forex Markup</td><td>0% (Zero)</td></tr>
          <tr><td class="font-semibold">Lounge Access</td><td>Unlimited Domestic + 6 International/Year</td></tr>
          <tr><td class="font-semibold">Best For</td><td>International travelers & high spenders seeking premium rewards</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Joining & Renewal Fees</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Joining Fee:</strong> ₹6,999 + GST (~₹7,000 total)</li>
      <li><strong>Welcome Benefit:</strong> Make 4 transactions of ₹1,000+ each within 60 days to qualify</li>
      <li><strong>Renewal Benefit:</strong> Cleverly designed to offer value for high spenders</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💎 Design & Build Quality</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The IDFC Mayura Credit Card comes in a metal form factor and feels just as heavy as most other metal cards. The overall design stands out with multiple elements thoughtfully stitched together - it's one of those cards that feels more like a collector's piece than just another plastic in the wallet.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Points Structure</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Regular Spends</td><td>1 RP per ₹150</td><td>0.16% base rate</td></tr>
          <tr><td class="font-semibold">Point Value (Regular)</td><td>1 RP = ₹0.25</td><td>Standard redemption</td></tr>
          <tr><td class="font-semibold">Point Value (Travel)</td><td>1 RP = ₹0.50</td><td>2X value on travel</td></tr>
          <tr><td class="font-semibold">Accelerated Rewards</td><td>Up to 10X on select categories</td><td>Flight & hotel bookings via app</td></tr>
          <tr><td class="font-semibold">Redemption Cap</td><td>3L points/year, 1.5L points/month</td><td>Fair limit for premium card</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📊 Important Reward Terms</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• Points don't expire - major advantage over competitors</li>
        <li>• Redemption charges: ₹99 + GST</li>
        <li>• Insurance & Utilities: 1 RP per ₹150 (0.20%)</li>
        <li>• Rent, Govt, Wallet, Education: 3 RP per ₹150 (0.50%)</li>
        <li>• Utility spends >₹20K/month: 1% fee applies</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Airport Lounge Access</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Domestic Lounges:</strong> Unlimited access (with 1 guest access per quarter)</li>
      <li><strong>International Lounges:</strong> 6 visits per year</li>
      <li><strong>Spend Requirement:</strong> Minimum ₹20,000 monthly spend required to qualify for lounge access in the following month</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ Lounge Access Caveat</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        It's quite unfair to expect monthly spends on a card that costs almost ₹7K. Even if you splurge ₹10L in a festive month, you'll still be holding a card without lounge access after a month if you don't meet the ₹20K spend requirement!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Golf Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Complimentary Rounds:</strong> Up to 2/month (games & lessons)</li>
      <li><strong>Spend Requirements:</strong> ₹20,000 unlocks 1 round, ₹40,000 unlocks 2 rounds per billing cycle</li>
      <li><strong>Validity:</strong> Earned rounds available for redemption from 1st of next month, valid for 60 days</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Zero Forex Markup - Best for International Travel</h3>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🌍 Forex Benefits Breakdown</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>Forex Markup Fee:</strong> 0%</li>
        <li>• <strong>Reward Rate on Forex:</strong> 3.3% (with travel redemption)</li>
        <li>• <strong>Net Gain:</strong> 3.3% on international spends</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-3">
        With a net gain of 3.33% on foreign currency transactions, the IDFC FIRST Bank Mayura Credit Card is indeed one of the best Credit Cards in India for Forex transactions.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Other Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Movie Offers:</strong> Buy 1 Get 1 on movie tickets up to ₹500, twice a month</li>
      <li><strong>Road Side Assistance:</strong> Complimentary RSA worth ₹1,399</li>
      <li><strong>Trip Cancellation Cover:</strong> Up to ₹50,000 for up to 2 claims on hotel & flight bookings annually</li>
      <li><strong>Fuel Surcharge Waiver:</strong> 1% waiver up to ₹300/statement on transactions ₹200-₹5,000</li>
      <li><strong>ATM Withdrawals:</strong> Interest-free cash withdrawal up to 45 days (W/d fee: ₹199+GST, up to ₹10K/txn)</li>
      <li><strong>Interest Rate:</strong> Relatively lower revolving interest at 20%-24% p.a.</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">How to Apply</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      You can apply for the IDFC FIRST Bank Mayura Credit Card online, and the approval usually happens instantly after KYC verification. The card typically gets delivered within just 3 days.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐½ 4.5/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        The IDFC FIRST Bank Mayura Credit Card is now one of the most rewarding cards in India, offering a reward rate on par with most super premium credit cards, thanks to recent upgrades. With 0% forex markup, it's a solid choice for international travellers. If IDFC brings in airline/hotel transfer partners, this could easily become one of the most powerful all-rounder cards in the market.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Zero Forex Markup:</strong> Best-in-class for international transactions with 3.3% net gain</li>
      <li><strong>Metal Card Design:</strong> Premium collector's piece feel with thoughtful design elements</li>
      <li><strong>2X Travel Redemption:</strong> Points worth ₹0.50 each when redeemed for travel</li>
      <li><strong>Spend-linked Benefits:</strong> Lounge access and golf benefits tied to monthly spending</li>
      <li><strong>Non-expiring Points:</strong> Major advantage - no pressure to redeem quickly</li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information sourced from CardExpert.in | Benefits subject to change by IDFC FIRST Bank
    </p>
  `},fg={id:"hdfc-regalia-gold-credit-card",title:"HDFC Bank Regalia Gold Credit Card Review",excerpt:"Premium lifestyle card with Priority Pass for add-on members, quarterly milestones, and airport transfers.",readTime:"14 min read",imageUrl:"/images/credit-cards/regalia.png",date:"2025-12-13",tags:["credit-card","hdfc","travel","lounge","premium"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-50 dark:from-slate-800/60 dark:via-yellow-900/30 dark:to-slate-800/60 rounded-xl border border-yellow-200/50 dark:border-yellow-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">HDFC Bank Regalia Gold Credit Card: The Premium Family Travel Card</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        HDFC Bank's Regalia Gold Credit Card is positioned above both Regalia and Regalia First variants. It's currently one of the best premium credit cards in the segment, offering Priority Pass for add-on card holders - a unique feature at this price point. The card is fully loaded with travel benefits, quarterly milestone rewards, and complimentary memberships.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Premium Lifestyle Credit Card</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹5,000 + GST</td></tr>
          <tr><td class="font-semibold">Base Reward Rate</td><td>1.3% on regular spends</td></tr>
          <tr><td class="font-semibold">Milestone Reward Rate</td><td>Up to 3.4% combined</td></tr>
          <tr><td class="font-semibold">Lounge Access</td><td>12 Domestic + 12 International (with Priority Pass)</td></tr>
          <tr><td class="font-semibold">Special Feature</td><td>Priority Pass for Add-on Card Holders</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Family travelers needing multiple lounge access cards</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Welcome Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Joining Fee:</strong> ₹5,000 + GST</li>
      <li><strong>Renewal Fee Waiver:</strong> Easy to achieve for most cardholders based on spend</li>
      <li><strong>Welcome Benefit Requirement:</strong> Spend ₹1 Lakh in first 90 days to unlock memberships</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Membership Benefits</h3>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎁 Complimentary Memberships (First Year)</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>Swiggy One:</strong> Free food delivery subscription</li>
        <li>• <strong>MMT Black Elite:</strong> Premium MakeMyTrip membership</li>
        <li>• <strong>Activation:</strong> Benefits unlock within 48 hours of achieving ₹1L spend</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2 italic">
        Note: These memberships are provided as welcome benefits for the first year and may not renew automatically annually.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Points Structure</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Regular Spends</td><td>4 RP per ₹150</td><td>1.3% effective return</td></tr>
          <tr><td class="font-semibold">Accelerated Brands</td><td>Myntra, Nykaa, M&S, Reliance Digital</td><td>Capped at 5,000 RP/month</td></tr>
          <tr><td class="font-semibold">Smartbuy Limit</td><td>4,000 RP/month</td><td>2,000 RP/day cap</td></tr>
          <tr><td class="font-semibold">Grocery Cap</td><td>2,000 RP/month</td><td>Limited grocery rewards</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📊 Reward Exclusions</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        No rewards on fuel, wallet loads, rent payments, and tax payments. The regular reward rate is moderate for the segment, but milestone benefits significantly boost overall returns.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Quarterly Milestone Benefits</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">₹1.5L Quarterly Spend</td><td>₹3,500 Flight Voucher</td><td>Meant for one flight booking</td></tr>
          <tr><td class="font-semibold">₹2.5L Quarterly Spend</td><td>₹7,500 Flight Voucher</td><td>OR Brand Voucher</td></tr>
          <tr><td class="font-semibold">Voucher Brands</td><td colspan="2">Marriott, Myntra, Marks & Spencer, Reliance Digital</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Milestone Reward Calculation</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        Assuming ₹7.5L annual spend with required quarterly targets, the milestone reward rate is 2.1% on top of 1.3% base rate = <strong>3.4% net reward rate</strong>. However, these are flight/brand vouchers with expiry dates, not regular points.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Redemption Options</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Flights/Hotels via Smartbuy:</strong> 1 RP = ₹0.50</li>
      <li><strong>Airline/Hotel Partners:</strong> 1 RP = up to 0.5 partner points</li>
      <li><strong>Exclusive Gold Catalogue:</strong> 1 RP = ₹0.65 on premium brands (Apple, Samsung, Bose)</li>
      <li><strong>Accor Hotels Transfer:</strong> Best value at almost ₹1 per point</li>
      <li><strong>Statement Credit:</strong> 1 RP = ₹0.20 (avoid this option)</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Lounge Access - The Standout Feature</h3>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-900/20 dark:via-blue-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">✈️ Superior Lounge Access Benefits</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>Domestic Access:</strong> 12 visits/year (no quarterly caps)</li>
        <li>• <strong>International Access:</strong> 12 visits/year via Priority Pass</li>
        <li>• <strong>Add-on Cards:</strong> Each add-on gets their own Priority Pass - unique at this price point!</li>
        <li>• <strong>Lounge List:</strong> Matches HDFC Infinia's superior lounge network</li>
        <li>• <strong>Priority Pass Activation:</strong> Complete 4 retail transactions to apply</li>
      </ul>
    </div>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      The HDFC Bank Regalia Gold is an amazing card for family travellers as you can get add-on cards for your family members which allows access not only to domestic airport lounges but also international lounges - a feature rarely seen at this fee level.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Airport Transfers</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Benefit:</strong> 2 complimentary airport transfers per quarter</li>
      <li><strong>Requirement:</strong> Book flight tickets via Regalia Gold Smartbuy portal</li>
      <li><strong>Voucher Type:</strong> ₹300 Uber gift card for airport pick/drop</li>
      <li><strong>Limit:</strong> 1 voucher per flight booking, up to 2 per quarter</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Forex Analysis</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Forex Markup</td><td>2% + GST = 2.36%</td></tr>
          <tr><td class="font-semibold">Reward Rate on Intl. Spends</td><td>1.3% (same as domestic)</td></tr>
          <tr><td class="font-semibold">Net Return (without milestone)</td><td>~1% loss</td></tr>
          <tr><td class="font-semibold">Net Return (with milestone)</td><td>~1% gain</td></tr>
          <tr><td class="font-semibold">Tip</td><td>Activate HDFC Global Value Program for extra 1% cashback</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Eligibility & How to Apply</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Income:</strong> >₹1 Lakh/month (or ₹12 LPA for self-employed)</li>
      <li><strong>Upgrade Path:</strong> ~₹3 Lakh credit limit on existing HDFC card</li>
      <li><strong>Application:</strong> Apply online for faster processing than branch applications</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Upgrade Guidance</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        If you're holding other Regalia variants, it's the right time to upgrade to Regalia Gold for superior lounge access, better reward rate, and airport transfers. Remember: lifetime free credit cards are designed to be devalued over time.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐ 4.2/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        HDFC Bank's Regalia Gold Credit Card is a decently rewarding card in the segment and can be used as a family travel card. This is the only card that gives Priority Pass for add-on card holders officially at this price point. While loaded with benefits, you'll need to keep track of voucher redemptions and expiry dates to maximize value.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Unique Family Feature:</strong> Priority Pass for add-on cardholders - unmatched at this price</li>
      <li><strong>Quarterly Milestones:</strong> Better than monthly tracking, rewards up to 3.4%</li>
      <li><strong>Superior Lounge Network:</strong> Matches HDFC Infinia's lounge list</li>
      <li><strong>Airport Transfers:</strong> ₹300 Uber vouchers for Smartbuy flight bookings</li>
      <li><strong>Voucher Management:</strong> Track expiry dates to fully utilize milestone benefits</li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information sourced from CardExpert.in | Benefits subject to change by HDFC Bank
    </p>
  `},mg={id:"axis-atlas-credit-card",title:"Axis Bank Atlas Credit Card Review",excerpt:"Travel card with Edge Miles system offering up to 7% return via ITC/Accor hotel transfers. Best Magnus alternative.",readTime:"13 min read",imageUrl:"/images/credit-cards/atlas-mk.png",date:"2025-12-13",tags:["credit-card","axis","travel","miles","premium"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-slate-800/60 dark:via-blue-900/30 dark:to-slate-800/60 rounded-xl border border-blue-200/50 dark:border-blue-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Axis Bank Atlas Credit Card: Premium Miles Card with ITC & Airline Transfers</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        The Axis Bank Atlas Credit Card is ideally best suited for premium credit card users with a focus on travel. It serves as a good replacement for Axis Magnus post its devaluation in 2024. With its unique Edge Miles system and excellent transfer partners, it can deliver returns as good as 7% when optimized properly.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Premium Travel Credit Card</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹5,000 + GST</td></tr>
          <tr><td class="font-semibold">Welcome Benefit</td><td>2,500 Edge Miles (worth up to ₹9,000 via Accor)</td></tr>
          <tr><td class="font-semibold">Reward System</td><td>Edge Miles (not Edge Rewards)</td></tr>
          <tr><td class="font-semibold">Best Redemption Value</td><td>Up to 7% via Accor/ITC Hotels</td></tr>
          <tr><td class="font-semibold">Transfer Partners</td><td>ITC, Accor, United, Singapore Airlines, Qatar & more</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Travelers seeking airline/hotel miles & Magnus alternative</td></tr>
          <tr><td class="font-semibold">Rating</td><td>⭐⭐⭐⭐⭐ 5/5</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Welcome Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Joining Fee:</strong> ₹5,000 + GST</li>
      <li><strong>Welcome Benefit:</strong> 2,500 Edge Miles</li>
      <li><strong>ITC Redemption:</strong> 2,500 miles = ₹5,000 worth of stay/food at ITC Hotels</li>
      <li><strong>Accor Redemption:</strong> 2,500 miles = ~₹9,000 worth at Accor Hotels (Ibis, Novotel, Sofitel)</li>
      <li><strong>Renewal Benefit:</strong> Attractive benefit for high spenders during anniversary year</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Welcome Benefit Value</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        You're effectively paying ₹5K and getting value up to ₹9K via Accor - that's like an overnight gain of 50% in value! The design looks neat, simple, and beautiful with a relevant Atlas theme.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Edge Miles System</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📊 Understanding Edge Miles</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• Unlike other Axis Cards, Atlas earns "Edge Miles" (not Edge Rewards)</li>
        <li>• Separate miles balance on Axis Edge Rewards account</li>
        <li>• Not linked with any other product currently</li>
        <li>• Different from Travel Edge portal pre-pay option</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Excluded Categories for Rewards</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Wallet</td><td>MCC 6540</td></tr>
          <tr><td class="font-semibold">Rent</td><td>MCC 6513</td></tr>
          <tr><td class="font-semibold">Gold/Jewellery</td><td>MCC 5094, 5944</td></tr>
          <tr><td class="font-semibold">Insurance</td><td>MCC 6300, 6381, 5960, 6012, 6051</td></tr>
          <tr><td class="font-semibold">Government</td><td>MCC 9222, 9311, 9399, 9402</td></tr>
          <tr><td class="font-semibold">Utilities</td><td>MCC 4814, 4816, 4899, 4900</td></tr>
          <tr><td class="font-semibold">Fuel</td><td>MCC 5541, 5542, 5983</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="text-sm text-slate-700 dark:text-slate-300">
        ⚠️ While exclusions are expected, excluding gold/insurance/utilities is unfair. These exclusions apply to milestone benefits as well.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Redemption Options & Transfer Partners</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Travel Edge Portal:</strong> 1:1 redemption for flights/hotels (simple but lower value)</li>
      <li><strong>Transfer to Partners:</strong> Better value through airline/hotel transfers</li>
    </ul>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">ITC Hotels</td><td>1:2 ratio</td><td>Best for domestic stays</td></tr>
          <tr><td class="font-semibold">Accor Hotels</td><td>1:2 ratio</td><td>Ibis, Novotel, Sofitel, Fairmont</td></tr>
          <tr><td class="font-semibold">United Airlines</td><td>1:2 ratio</td><td>MileagePlus program</td></tr>
          <tr><td class="font-semibold">Singapore Airlines</td><td>1:2 ratio</td><td>KrisFlyer program</td></tr>
          <tr><td class="font-semibold">Turkish Airlines</td><td>1:2 ratio</td><td>Miles&Smiles</td></tr>
          <tr><td class="font-semibold">Qatar Airways</td><td>1:2 ratio</td><td>Privilege Club</td></tr>
          <tr><td class="font-semibold">Air France</td><td>1:2 ratio</td><td>Flying Blue</td></tr>
          <tr><td class="font-semibold">Etihad Airways</td><td>1:2 ratio</td><td>Guest program</td></tr>
          <tr><td class="font-semibold">Marriott Bonvoy</td><td>2:1 ratio</td><td>Avoid - poor value</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Pro Tip: ITC to Marriott Transfer</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        If you're into Marriott, transfer points to ITC first, then to Marriott (2 ITC points = 3 Marriott Bonvoy points). Limited to 10K points per quarter. ITC is the go-to option for most cardholders for better value and simplicity.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Redemption Capping</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Group A:</strong> 30,000 Edge Miles (60K partner miles)</li>
      <li><strong>Group B:</strong> 1,20,000 Edge Miles (2.4L partner miles)</li>
    </ul>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      While the card was devalued (as expected), these limits are fair enough for a ₹5K card with easy eligibility requirements.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Milestone Benefits</h3>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-900/20 dark:via-blue-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎯 High Spender Rewards</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        With "regular" spends of ₹15 Lakhs annually, you'll earn 40,000 Edge Miles (30K + 10K). This can be valued at:
      </p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 mt-2 space-y-1">
        <li>• <strong>ITC Hotels:</strong> ₹80,000 value</li>
        <li>• <strong>Accor/Airlines:</strong> ~₹1,44,000 value at sweet spots</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
        This delivers an amazing reward rate for high spenders!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Membership Tiers & Lounge Access</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300">
      The Atlas comes with a unique membership tier system (Explorer, Adventurer, Voyager) that determines lounge access limits. Benefits cover both primary cardholder and guests.
    </p>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Lounge Access:</strong> Varies by tier - covers primary + guests</li>
      <li><strong>Guest Charges:</strong> Sometimes charged (glitch) - request reversal via email</li>
      <li><strong>Similar to:</strong> Axis Reserve Credit Card guest access system</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Who Should Get Atlas?</h3>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>✅ Former Magnus holders who enjoyed 5:4 points transfer in 2023</li>
        <li>✅ Those unable to get "Magnus for Burgundy" post devaluation</li>
        <li>✅ Travelers looking for airline/hotel loyalty program integration</li>
        <li>✅ Combined with Amex Platinum Travel Card for maximum travel rewards</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Eligibility & Application</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Annual Income:</strong> ₹9 Lakhs and above</li>
      <li><strong>Existing Card Limit:</strong> ~₹3 Lakhs on other bank cards</li>
      <li><strong>Approval:</strong> Historically easy - fast processing by Axis Bank</li>
      <li><strong>Timeline:</strong> Card delivery in ~5 days, approval within a week</li>
      <li><strong>Note:</strong> No need to open Axis Savings Account for credit card</li>
      <li><strong>Limit:</strong> Hold up to 3 Axis Bank Credit Cards simultaneously</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐⭐ 5/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        Axis Bank's Atlas Credit Card is a wonderful card at this fee range with the ability to earn miles that can give returns as good as ~7% (like Accor) - on par with India's long-standing best travel card: Amex Platinum Travel. If you want 3 best premium Axis cards, Atlas can be one among Axis Magnus for Burgundy & Axis Vistara Infinite.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Exceptional Value:</strong> Up to 7% return via Accor/airline sweet spots</li>
      <li><strong>Edge Miles Unique:</strong> Separate system from regular Edge Rewards</li>
      <li><strong>ITC Best Option:</strong> Go-to transfer partner for simplicity and value</li>
      <li><strong>Magnus Replacement:</strong> Perfect for 2024 post-Magnus devaluation</li>
      <li><strong>Easy Approval:</strong> Fast processing with accessible eligibility criteria</li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information sourced from CardExpert.in | Benefits subject to change by Axis Bank
    </p>
  `},bg={id:"scapia-federal-credit-card",title:"Scapia Federal Bank Credit Card Review",excerpt:"Best free travel card of 2025 with 0% forex markup, 2% base rewards, and unique airport privileges.",readTime:"11 min read",imageUrl:"/images/credit-cards/scapia-mk.png",date:"2025-12-13",tags:["credit-card","scapia","federal","travel","free","forex"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-slate-800/60 dark:via-teal-900/30 dark:to-slate-800/60 rounded-xl border border-teal-200/50 dark:border-teal-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Scapia Federal Bank Credit Card: Best Free Travel Card of 2025</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        The Scapia Credit Card is a co-branded card issued by Federal Bank in partnership with Scapia. It's designed for new-age travelers who prefer travel experiences as rewards over typical cashback. Despite being an entry-level card, it offers benefits like a premium travel card with reward rates matching super-premium variants and a user experience matching the best in class.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Lifetime Free Travel Credit Card</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹0 (Lifetime Free)</td></tr>
          <tr><td class="font-semibold">Base Reward Rate</td><td>2% on all spends</td></tr>
          <tr><td class="font-semibold">Forex Markup</td><td>0% (Zero)</td></tr>
          <tr><td class="font-semibold">Lounge Access</td><td>Unlimited (with ₹10K monthly spend)</td></tr>
          <tr><td class="font-semibold">Card Network</td><td>Visa / RuPay</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Travelers wanting premium benefits at zero cost</td></tr>
          <tr><td class="font-semibold">Rating</td><td>⭐⭐⭐⭐⭐ 4.8/5</td></tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🏆 Best Lifetime Free Credit Card of 2025</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        Irrespective of which spending segment you belong to, the Scapia card offers exceptional value. It's a must-have for any traveler's wallet.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Earn Scapia Coins</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">All Spends</td><td>10 Coins per ₹100</td><td>2% effective rate</td></tr>
          <tr><td class="font-semibold">Coin Value</td><td>₹0.20 per coin</td><td>Industry standard</td></tr>
          <tr><td class="font-semibold">Travel Spends (via app)</td><td>Up to 20 Coins per ₹100</td><td>Limited to in-app bookings</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📊 Reward Terms & Exclusions</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>Excluded:</strong> Rent, Education, Gift Cards, Fuel, Govt Spends, Wallet Top-Ups</li>
        <li>• <strong>Utilities:</strong> 2% on spends up to ₹20,000/billing cycle</li>
        <li>• <strong>Fuel Surcharge:</strong> 1% waiver up to ₹5,000/txn</li>
        <li>• <strong>High Spends Fee:</strong> Utility/Fuel over ₹50K attracts 1% fee (max ₹3K)</li>
        <li>• <strong>Rent/Wallet Fee:</strong> 1% fee applies (max ₹3K)</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2 italic">
        Note: The 10% or 20% shown on the app refers to coins, not actual reward percentage.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Redeem Scapia Coins</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Flights:</strong> Book directly in Scapia app</li>
      <li><strong>Hotels:</strong> Wide range of properties available</li>
      <li><strong>Buses & Trains:</strong> Unique redemption option</li>
      <li><strong>Visa Services:</strong> Available but pricier than other options</li>
      <li><strong>100% Redemption:</strong> Use all your coins for travel bookings</li>
    </ul>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🚂 Unique Train & Bus Redemption</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        Having an option to redeem points for train and bus tickets is a wonderful USP of the card - a feature rarely seen on other travel cards in India.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Zero Forex Markup - International Travel Benefit</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Forex Markup Fee</td><td>0%</td></tr>
          <tr><td class="font-semibold">Rewards on Intl. Spends</td><td>0% (No coins on forex)</td></tr>
          <tr><td class="font-semibold">Net Gain</td><td>0% (pure savings)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      0% forex markup is usually seen only on select premium cards, but Scapia brings it to everyone. This helps especially beginners save significantly on international spends.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Unique Airport Privileges</h3>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-900/20 dark:via-blue-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">✈️ Choose Your Airport Benefit</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>Options:</strong> Shop, Dine, Spa, OR Lounge Access</li>
        <li>• <strong>Benefit:</strong> 100% back as coins on airport shop/dine spends</li>
        <li>• <strong>Cap:</strong> Up to ₹1,000/visit at metro airports, ₹500 at other airports</li>
        <li>• <strong>Limit:</strong> 1 access per departure (unlimited trips)</li>
        <li>• <strong>Spend Requirement:</strong> ₹10K/month (Visa) or ₹15K/month (RuPay)</li>
      </ul>
    </div>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      This is a unique benefit that most other cards don't offer! Instead of paying lounges for access, they pay you in points for shopping/dining. If you already have lounge access on other cards, use this for free airport shopping.
    </p>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Step 1</td><td>Meet spend requirement (₹10K Visa / ₹15K RuPay)</td></tr>
          <tr><td class="font-semibold">Step 2</td><td>Open app and select option: Shop, Dine, Lounge, Spa</td></tr>
          <tr><td class="font-semibold">Step 3</td><td>Activate the outlet where you want to spend</td></tr>
          <tr><td class="font-semibold">Step 4</td><td>Pay using Scapia card and receive coins</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Unlimited Lounge Access</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Spend Requirement:</strong> ₹10,000/month (Visa) or ₹15,000/month (RuPay)</li>
      <li><strong>Access:</strong> Unlimited domestic lounge visits</li>
      <li><strong>Network:</strong> Both Visa and RuPay variants eligible</li>
    </ul>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      Unlimited lounge access on a free card with just ₹10K monthly spend is a surprising benefit - fair enough for most regular spenders.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">App Experience - Buttery Smooth</h3>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📱 Premium App Experience</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>Application:</strong> Less than 10 minutes to apply</li>
        <li>• <strong>KYC:</strong> Scheduled immediately, takes ~10 minutes</li>
        <li>• <strong>Approval:</strong> Within 1 day with instant virtual card</li>
        <li>• <strong>Physical Card:</strong> Delivered in about 3 days</li>
        <li>• <strong>UI Quality:</strong> Beautifully designed, highly functional</li>
        <li>• <strong>Experience:</strong> Buttery-smooth, usually seen only in prototypes</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Should You Get It?</h3>
    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">✅ Yes, Absolutely!</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>0% Forex Markup:</strong> Save on international transactions</li>
        <li>• <strong>2% Base Rewards:</strong> Competitive for a free card</li>
        <li>• <strong>Lounge Access:</strong> OR Airport Shopping worth ₹1,000/trip</li>
        <li>• <strong>Lifetime Free:</strong> No annual fee ever</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
        If you're into travel, this is a must-have credit card in your wallet.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐⭐ 4.8/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        The Scapia Federal Bank Credit Card is a wonderfully rewarding lifetime free card for modern travelers seeking travel experiences as rewards. The app is well integrated with the bank, allowing seamless actions within the app. It's a must-have for any traveler, and we hope they launch a premium or super-premium variant in the future.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Zero Cost Premium:</strong> Lifetime free with premium-level benefits</li>
      <li><strong>0% Forex:</strong> Usually only seen on paid premium cards</li>
      <li><strong>Airport Flexibility:</strong> Choose lounge OR shop/dine/spa benefits</li>
      <li><strong>Train/Bus Redemption:</strong> Unique feature not available elsewhere</li>
      <li><strong>Best-in-Class App:</strong> Smooth, beautiful, and functional UX</li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information sourced from CardExpert.in | Benefits subject to change by Scapia/Federal Bank
    </p>
  `},pg={id:"sbi-cashback-credit-card",title:"SBI Cashback Credit Card Review - Save 5% Online",excerpt:"Best cashback credit card in India (and the world!) with industry-leading 5% cashback on online spends.",readTime:"10 min read",imageUrl:"/images/credit-cards/sbicc-mk.png",date:"2025-12-13",tags:["credit-card","sbi","cashback","online","best"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-violet-50 via-purple-50 to-violet-50 dark:from-slate-800/60 dark:via-violet-900/30 dark:to-slate-800/60 rounded-xl border border-violet-200/50 dark:border-violet-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">SBI Cashback Credit Card: The Undisputed Cashback King</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        SBI Card introduced the SBI Cashback Credit Card - a true cashback card that delivers an industry-leading 5% cashback on online spends. This outperforms all other cashback cards in India and even globally! Its simple yet powerful cashback benefit focused on online spends makes it the ultimate choice for digital shoppers.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Cashback Credit Card</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹999 + GST</td></tr>
          <tr><td class="font-semibold">Online Cashback</td><td>5% (uncapped at ₹5,000/month)</td></tr>
          <tr><td class="font-semibold">Offline Cashback</td><td>1%</td></tr>
          <tr><td class="font-semibold">Renewal Fee Waiver</td><td>₹2 Lakh annual spend</td></tr>
          <tr><td class="font-semibold">Max Monthly Cashback</td><td>₹5,000 (equiv. ₹1L online spend)</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Heavy online shoppers seeking pure cashback</td></tr>
          <tr><td class="font-semibold">Rating</td><td>⭐⭐⭐⭐⭐ 4.8/5</td></tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🏆 Best Cashback Card of 2025</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        If you're into entry-level cards and looking to optimize online spends, this is the only card you ever need. Its 5% earn rate on online spends even surpasses super-premium credit cards!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Fees & Waiver</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Joining Fee:</strong> ₹999 + GST</li>
      <li><strong>Renewal Fee:</strong> ₹999 + GST</li>
      <li><strong>Fee Waiver:</strong> Spend ₹2 Lakh in a year for automatic renewal waiver</li>
      <li><strong>Welcome Benefit:</strong> None - but easily matched by just ₹20K online spend</li>
    </ul>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      The renewal fee waiver is easy to achieve for most online shoppers, making this effectively a free card for regular users.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Design</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      The design looks simple and appealing with a violet/purple theme. Note that there are slightly different variants - some cards appear brighter while others look darker.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Cashback Structure</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Online Spends</td><td>5% Cashback</td><td>Industry-leading rate</td></tr>
          <tr><td class="font-semibold">Offline Spends</td><td>1% Cashback</td><td>Standard rate</td></tr>
          <tr><td class="font-semibold">Monthly Cap</td><td>₹5,000</td><td>Equivalent to ₹1L online spend</td></tr>
          <tr><td class="font-semibold">Cashback Credit</td><td>Within 2 days</td><td>Post statement generation</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ Cashback Exclusions (Effective May 2023)</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• Rent Payments</li>
        <li>• Fuel Spends</li>
        <li>• Wallet Loads</li>
        <li>• Insurance Payments</li>
        <li>• Jewellery</li>
        <li>• Utilities</li>
        <li>• Gift Shops</li>
        <li>• Some travel spends (reported lately)</li>
      </ul>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2 italic">
        Pro Tip: For utility/insurance, buy Amazon Pay vouchers and pay via Amazon bill payment system to still earn rewards!
      </p>
    </div>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      A 5% reward rate on most regular online spends is exceptional - competition barely offers 2%. This is not only the best cashback credit card in India but in the entire world, even after the devaluation!
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Cashback Fulfillment</h3>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💰 How Cashback Works</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• Cashback credits to card within 2 days of statement generation</li>
        <li>• SMS notification received when cashback is credited</li>
        <li>• Check eligible cashback in SBICard Netbanking before statement</li>
        <li>• Verify transaction type via Spend Analyzer on desktop (mobile app shows wrong types)</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Features & Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Fuel Surcharge Waiver:</strong> 1% waiver at all petrol pumps (₹500 - ₹3,000 transactions)</li>
      <li><strong>Lounge Access:</strong> Benefit recently revoked - no longer included</li>
    </ul>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      While the card doesn't offer many additional benefits, the core 5% cashback on online spends alone is sufficient reason to hold this card.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Credit Limit Consideration</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📊 Low Credit Limit Issue</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        SBI Cashback card often gives ultra-low limits (as low as ₹10,000), especially if you already have multiple SBI Cards. SBICard isn't generous when you get closer to ₹5L total limit across all cards.
      </p>
      <p class="text-sm text-slate-700 dark:text-slate-300 mt-2">
        <strong>Solution:</strong> Call SBICard support and request limit transfer from existing SBI cards to the Cashback card. Updates reflect instantly!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Personal Experience</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Application:</strong> Online application approved in ~10 days</li>
      <li><strong>Virtual Card:</strong> Ready to use immediately post-approval</li>
      <li><strong>Physical Card:</strong> Delivered in another 7 days</li>
      <li><strong>Cashback System:</strong> Simple and works flawlessly as expected</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Should You Apply?</h3>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>✅ <strong>Heavy Online Shoppers:</strong> No reason NOT to apply if you have significant online spends</li>
        <li>✅ <strong>E-commerce Users:</strong> Amazon, Flipkart, Myntra shoppers benefit hugely</li>
        <li>✅ <strong>Simple Cashback Seekers:</strong> No complicated redemption - just pure cashback</li>
        <li>❌ <strong>Mostly Offline Spenders:</strong> Consider SBI SimplyClick for ~4% return on ₹2L annual spends</li>
      </ul>
    </div>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      Application is seamless through SBI's newly developed Sprint onboarding system.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐⭐ 4.8/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        With 5% Cashback literally on almost all online spends, SBI Cashback Credit Card is indeed the best cashback credit card in India. SBI Card's aggressive approach with entry-level cards is commendable. However, remember the lucrative 5% cashback may not last forever - we've already seen one round of devaluation in mid-2023.
      </p>
      <p class="text-center text-slate-700 dark:text-slate-300 mt-2 font-semibold italic">
        "Make hay while the sun shines!"
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Unmatched 5% Cashback:</strong> Best cashback card globally for online spends</li>
      <li><strong>Simple System:</strong> Pure cashback, no points or complicated redemption</li>
      <li><strong>Easy Fee Waiver:</strong> ₹2L annual spend waives renewal fee</li>
      <li><strong>Quick Fulfillment:</strong> Cashback credited within 2 days of statement</li>
      <li><strong>Potential Devaluation:</strong> Enjoy while benefits last - more restrictions may come</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Comparison Tip</h3>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-900/20 dark:via-blue-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="text-sm text-slate-700 dark:text-slate-300">
        Looking for even higher cashback specifically on online spends? Compare with the <strong>Axis Bank Cashback Credit Card</strong> which offers 7% cashback on online spends (though with more restrictions). For lifestyle-focused users, the <strong>Scapia Federal Credit Card</strong> offers competitive 2% with travel redemption options.
      </p>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information sourced from CardExpert.in | Benefits subject to change by SBI Card
    </p>
  `},xg={id:"hdfc-tata-neu-infinity-credit-card",title:"HDFC Bank Tata Neu Infinity Credit Card Review",excerpt:"Best UPI credit card in 2025 with up to 10% NeuCoins on Tata brands, 5% on bill payments, and low 2% forex markup.",readTime:"11 min read",imageUrl:"/images/credit-cards/infinity-mk.png",date:"2025-12-13",tags:["credit-card","hdfc","tata-neu","upi","rupay","cashback"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-50 dark:from-slate-800/60 dark:via-purple-900/30 dark:to-slate-800/60 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">HDFC Bank Tata Neu Infinity Credit Card: Best UPI Credit Card 2025</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        The HDFC Bank Tata Neu Infinity Credit Card is a semi-premium, co-branded credit card designed to maximize rewards through NeuCoins - a cashback-equivalent currency that works seamlessly across the Tata ecosystem. The RuPay version unlocks UPI transactions with rewards, making it arguably the best UPI credit card in India.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Quick Facts</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Card Type</td><td>Co-branded Semi-Premium Credit Card</td></tr>
          <tr><td class="font-semibold">Card Network</td><td>Visa / RuPay (UPI-enabled)</td></tr>
          <tr><td class="font-semibold">Annual Fee</td><td>₹1,499 + GST</td></tr>
          <tr><td class="font-semibold">Fee Waiver</td><td>FYF available; LTF harder in 2025</td></tr>
          <tr><td class="font-semibold">Tata Brand Rewards</td><td>5% NeuCoins (up to 10% with NeuPass)</td></tr>
          <tr><td class="font-semibold">Bill Payments</td><td>5% NeuCoins</td></tr>
          <tr><td class="font-semibold">Forex Markup</td><td>2% (Low for segment)</td></tr>
          <tr><td class="font-semibold">NeuCoin Value</td><td>1 NeuCoin = ₹1</td></tr>
          <tr><td class="font-semibold">Best For</td><td>Tata ecosystem users & UPI spenders</td></tr>
          <tr><td class="font-semibold">CardExpert Rating</td><td>⭐⭐⭐⭐½ 4.5/5</td></tr>
        </tbody>
      </table>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🏆 Best UPI Credit Card in India!</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        HDFC Bank issues two variants: Tata Neu Plus & Tata Neu Infinity. The Infinity variant is clearly better with superior rewards and lounge access. Opt for the RuPay version to unlock UPI rewards!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Joining Fees & Waiver</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Annual Fee:</strong> ₹1,499 + GST</li>
      <li><strong>First Year Free (FYF):</strong> Easy to grab in 2025</li>
      <li><strong>Lifetime Free (LTF):</strong> Becoming harder to get compared to previous years</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Structure</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Tata Brands</td><td>5% NeuCoins</td><td>BigBasket, Taj, Croma, Westside, etc.</td></tr>
          <tr><td class="font-semibold">Bill Payments (Tata Pay)</td><td>5% NeuCoins</td><td>Utilities, recharges</td></tr>
          <tr><td class="font-semibold">With NeuPass</td><td>+5% Additional</td><td>Stack to get up to 10%!</td></tr>
          <tr><td class="font-semibold">NeuCoin Validity</td><td>1 Year</td><td>From date of earning</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Up to 10% Effective Return!</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The 5% NeuCoins on Tata Brands and bill payments is rare in this segment. With NeuPass membership, this stacks to give you up to 10% effective return - exceptional value!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Reward Limitations & Caps</h3>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 dark:from-orange-900/20 dark:via-red-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ Important Exclusions & Caps</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>No rewards on:</strong> Fuel, wallet, rent, gaming, government spends</li>
        <li>• <strong>Monthly caps (2,000 NeuCoins each):</strong> Insurance, Groceries, Utilities, Telecom, Cable</li>
        <li>• <strong>Education via third-party apps:</strong> No rewards (CRED, MobiKwik, etc.)</li>
        <li>• <strong>5% NeuPass bonus not applicable on:</strong> Bill Payment (Tata Pay), Tanishq, Cult.fit, Air India, Tata Play</li>
        <li>• <strong>Primary account only:</strong> 5% rewards only for transactions via primary cardholder's mobile number</li>
        <li>• Capping is as per "calendar" month</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">NeuPass Membership Benefits</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-purple-900/20 dark:via-pink-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎁 NeuPass Perks</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
        <li>• <strong>Additional 5% NeuCoins</strong> on eligible Tata Neu spends (stacks with card rewards)</li>
        <li>• <strong>BigBasket:</strong> Exclusive discounts on groceries</li>
        <li>• <strong>Taj Hotels:</strong> Special booking offers and discounts</li>
        <li>• <strong>Total Potential:</strong> Up to 10% effective return when stacked!</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">NeuCoin Redemption</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Value:</strong> 1 NeuCoin = ₹1 (cash-equivalent)</li>
      <li><strong>Redemption Options:</strong> All Tata partner brands</li>
      <li><strong>Best Redemptions:</strong> Tanishq gold coins (popular choice)</li>
      <li><strong>Travel Option:</strong> Taj Hotels (perfect for settling remaining balance after vouchers)</li>
    </ul>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      NeuCoins are truly cash-equivalent and easy to redeem across the extensive Tata ecosystem, making them highly valuable.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Lounge Access</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Domestic Lounge</td><td>Via vouchers (issued based on spends)</td></tr>
          <tr><td class="font-semibold">Voucher Claim</td><td>120 days to claim via SMS/email</td></tr>
          <tr><td class="font-semibold">Voucher Validity</td><td>180 days from claim date</td></tr>
          <tr><td class="font-semibold">International Lounge</td><td>Priority Pass (Visa variant, on request)</td></tr>
        </tbody>
      </table>
    </div>
    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="text-sm text-slate-700 dark:text-slate-300">
        <strong>Note:</strong> The voucher model with spend requirements adds friction compared to the earlier direct swipe-based access. For frequent travelers, consider pairing with HDFC Regalia Gold for easier lounge access.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Other Benefits</h3>
    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Forex Markup:</strong> Only 2% on foreign currency spends (excellent for this segment)</li>
      <li><strong>Fuel Surcharge Waiver:</strong> 1% waiver on transactions ₹400-₹5,000 (max ₹500/billing cycle)</li>
    </ul>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Tata Brands Covered</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300">The 5% NeuCoins reward applies across the extensive Tata ecosystem including:</p>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">BigBasket</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">Taj Hotels</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">Croma</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">Westside</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">Tata CLiQ</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">1mg</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">Tata Play</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">AirAsia India</span>
      <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded text-sm text-center">And more...</span>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Why Choose RuPay Variant?</h3>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-50 dark:from-indigo-900/20 dark:via-blue-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💳 RuPay = UPI Rewards!</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The RuPay version enables credit card payments via UPI (RuPay Credit on UPI). This is the core value proposition - earn NeuCoins even on UPI transactions, something Visa cards cannot do!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">HDFC vs SBI Tata Neu Cards</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300">
      Tata Neu has similar co-branded cards with SBI Card, but the HDFC variant is generally considered better due to superior rewards structure and lounge access benefits.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">The Verdict</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold mb-3 text-slate-900 dark:text-white">⭐⭐⭐⭐½ 4.5/5</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed">
        The HDFC Tata Neu Infinity Credit Card is one of the most rewarding UPI credit cards in India. With up to 10% NeuCoins on Tata brands, 5% on bill payments, low 2% forex markup, and cash-equivalent redemption, it's particularly beneficial for those in the Tata ecosystem. The RuPay variant's UPI capability makes it a must-have for modern digital payments!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300">
      <li><strong>Up to 10% NeuCoins</strong> on Tata brands with NeuPass stacking</li>
      <li><strong>5% on bill payments</strong> - rare in this segment</li>
      <li><strong>RuPay variant</strong> enables UPI rewards (best UPI CC in India)</li>
      <li><strong>1 NeuCoin = ₹1</strong> - true cash-equivalent value</li>
      <li><strong>2% forex markup</strong> - excellent for semi-premium segment</li>
      <li><strong>Redeem at Tanishq</strong> for gold coins or Taj Hotels for stays</li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Last Updated:</strong> December 2025 | Information sourced from CardExpert.in | Benefits subject to change by HDFC Bank
    </p>
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
`,hg=[tg,ug,fg,mg,bg,pg,xg,Jh,ag,lg,sg,rg,ig,og,ng,dg,cg,$h,eg,{id:"cc-sapphire-reserve",title:"The Ultimate Guide to Premium Travel Cards",excerpt:"Is the annual fee worth it? We break down the benefits of the top contenders in the market.",content:xf("Premium Travel Cards"),imageUrl:"https://picsum.photos/800/400?random=1",date:"Oct 12, 2023",readTime:"8 min",tags:["Travel","Finance"]},{id:"cc-points-strategy",title:"Points vs. Cashback: What Should You Choose?",excerpt:"Deciding between flexible points and liquid cash can be tricky. Here is our mathematical breakdown.",content:xf("Points Strategy"),imageUrl:"https://picsum.photos/800/400?random=2",date:"Oct 15, 2023",readTime:"5 min",tags:["Strategy","Beginner"]}],gg=i=>`
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
`,vg=[{id:"miles-sweet-spots",title:"Hidden Sweet Spots in Award Charts",excerpt:"Fly business class to Europe for under 40k miles. Yes, it is possible if you know where to look.",content:gg("Airline Award Charts"),imageUrl:"https://picsum.photos/800/400?random=3",date:"Nov 01, 2023",readTime:"12 min",tags:["Travel","Hacking"]}],kg=i=>`
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
`,yg=[{id:"hotel-lifetime-status",title:"Is Lifetime Status Worth Chasing?",excerpt:"We analyze the loyalty programs of Marriott, Hyatt, and Hilton to see which one rewards loyalty best.",content:kg("Lifetime Hotel Status"),imageUrl:"https://picsum.photos/800/400?random=4",date:"Sep 20, 2023",readTime:"6 min",tags:["Hotels","Loyalty"]}],wg={id:"premium-rs-strategy",title:"Premium RS Strategy - Highly Profitable",excerpt:"Master the Relative Strength momentum strategy to buy stocks outperforming the market. Learn setup, entry rules, timeframes, and exit strategy.",readTime:"15 min read",imageUrl:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",date:"2025-12-13",tags:["trading","strategy","momentum","relative-strength","stocks"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 dark:from-slate-800/60 dark:via-emerald-900/30 dark:to-slate-800/60 rounded-xl border border-emerald-200/50 dark:border-emerald-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Premium RS Strategy: Buy Stocks That Beat the Market</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        This is a powerful momentum-based trading strategy that focuses on buying stocks that are <strong>outperforming the benchmark index (Nifty 50)</strong>. The core idea is simple but profound: why buy average stocks when you can buy winners?
      </p>
    </div>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ Important Clarification</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        This strategy uses <strong>Comparative Relative Strength (RS)</strong>, which compares a stock's performance to the Nifty. <strong>Do NOT confuse</strong> this with the standard "RSI" (Relative Strength Index) indicator found on most charts. They are completely different!
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">📌 The Core Philosophy</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The strategy is based on a simple yet powerful premise: <strong>you should only buy stocks that are stronger than the market.</strong> These stocks demonstrate relative outperformance across market conditions:
    </p>
    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
        <p class="font-semibold text-green-800 dark:text-green-300 mb-2">📈 Bull Market Behavior</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          If Nifty moves up, these stocks move up <strong>even more</strong>. They lead the rally and generate alpha.
        </p>
      </div>
      <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">📉 Bear Market Behavior</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          If Nifty falls, these stocks fall <strong>less or stay flat</strong>. They show resilience and relative strength.
        </p>
      </div>
    </div>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Think of it this way: In a race, would you bet on a runner who's consistently ahead, or one who's struggling to keep up? This strategy helps you identify the market's "leaders" and ride their momentum.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🖥️ Charting & Indicator Setup</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      You'll need a charting platform that supports comparative analysis. Popular options include <strong>TradingView</strong> or <strong>StockEdge</strong>. Here are the three indicators you need:
    </p>

    <div class="mb-6 p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
      <h4 class="font-bold text-slate-900 dark:text-white mb-3">1️⃣ Primary Indicator: Comparative Relative Strength (RS)</h4>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <tbody>
            <tr><td class="font-semibold py-2">Formula</td><td>Stock Price ÷ Nifty Price (ratio)</td></tr>
            <tr><td class="font-semibold py-2">Lookback Period</td><td>55 periods (checking performance over last 55 days)</td></tr>
            <tr><td class="font-semibold py-2">Visual</td><td>Plotted as a line below the price chart</td></tr>
            <tr><td class="font-semibold py-2">Zero Line</td><td>Above zero = Outperforming Nifty ✅<br/>Below zero = Underperforming Nifty ❌</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-6 p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
      <h4 class="font-bold text-slate-900 dark:text-white mb-3">2️⃣ Confirmation Indicator: SuperTrend</h4>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <tbody>
            <tr><td class="font-semibold py-2">Purpose</td><td>Generate clear Buy/Sell signals and trailing stop-losses</td></tr>
            <tr><td class="font-semibold py-2">Settings</td><td>Standard settings: (7, 3) or (10, 3)</td></tr>
            <tr><td class="font-semibold py-2">Green</td><td>Bullish trend - price is above SuperTrend line</td></tr>
            <tr><td class="font-semibold py-2">Red</td><td>Bearish trend - price is below SuperTrend line</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-6 p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
      <h4 class="font-bold text-slate-900 dark:text-white mb-3">3️⃣ Momentum Indicator: RSI (Standard)</h4>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <tbody>
            <tr><td class="font-semibold py-2">Purpose</td><td>Ensure the stock has active momentum</td></tr>
            <tr><td class="font-semibold py-2">Settings</td><td>Standard 14-period RSI</td></tr>
            <tr><td class="font-semibold py-2">Rule</td><td>RSI must be above 50 for entry</td></tr>
            <tr><td class="font-semibold py-2">Why</td><td>Avoids buying "dead" stocks that are strong but not moving</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">✅ The Entry Rules (Buy Setup)</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      You should look for a buy entry when <strong>ALL THREE</strong> of the following conditions are met <strong>simultaneously</strong>:
    </p>

    <div class="space-y-4 mb-6">
      <div class="p-5 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-emerald-500">
        <p class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Condition 1: RS (Relative Strength) ✓</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          The RS line must be <strong>above the Zero Line</strong> (or clearly rising). This confirms the stock is currently <strong>stronger than the Nifty benchmark</strong>.
        </p>
      </div>

      <div class="p-5 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-green-500">
        <p class="font-bold text-green-700 dark:text-green-400 mb-2">Condition 2: SuperTrend (Trend) ✓</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          The SuperTrend indicator on the price chart must be <strong>Green (Positive)</strong>. This confirms the price is in an uptrend.
        </p>
      </div>

      <div class="p-5 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-blue-500">
        <p class="font-bold text-blue-700 dark:text-blue-400 mb-2">Condition 3: RSI (Momentum) ✓</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          The standard RSI value must be <strong>above 50</strong>. This ensures you aren't buying a "dead" stock that appears strong but has no momentum.
        </p>
      </div>

      <div class="p-5 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-amber-500">
        <p class="font-bold text-amber-700 dark:text-amber-400 mb-2">Condition 4: Price Action (Trigger) ✓</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <strong>Don't just buy blindly!</strong> Wait for a <strong>breakout above a recent swing high</strong> or look for a consolidation breakout while the above conditions are true.
        </p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-red-900/20 dark:via-orange-900/15 dark:to-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🚨 Critical Rule</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        <strong>All four conditions must align before entry.</strong> If even one condition is missing, skip the trade. Patience is key - there will always be another opportunity.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">⏱️ Timeframes: Multi-Timeframe Approach</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This strategy uses a multi-timeframe approach to refine entries and improve timing:
    </p>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
        <p class="font-bold text-indigo-800 dark:text-indigo-300 mb-2">📊 Analysis (The "View")</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          <strong>Timeframe:</strong> Daily Chart
        </p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <li>• Identify the overall trend direction</li>
          <li>• Ensure RS is above zero and strong</li>
          <li>• Confirm SuperTrend is green</li>
          <li>• Check RSI is above 50</li>
        </ul>
      </div>
      <div class="p-5 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-700">
        <p class="font-bold text-teal-800 dark:text-teal-300 mb-2">🎯 Entry (The "Trigger")</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          <strong>Timeframe:</strong> Hourly (1H) or 2-Hour Chart
        </p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1">
          <li>• Drop down to fine-tune entry</li>
          <li>• Enter earlier than waiting for daily close</li>
          <li>• Better risk-reward ratio</li>
          <li>• Tighter stop-loss placement</li>
        </ul>
      </div>
    </div>

    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Pro Tip:</strong> Use the daily chart to ensure you're trading in the right direction, then use the hourly chart to get a better entry price. This approach significantly improves your risk-reward ratio.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🚪 The Exit Strategy</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Knowing when to exit is just as important as knowing when to enter. There are <strong>two primary exit signals</strong>:
    </p>

    <div class="space-y-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
        <p class="font-bold text-red-800 dark:text-red-300 mb-2">Exit Signal 1: Trend Reversal (Primary Stop-Loss)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <strong>Exit immediately</strong> if the SuperTrend turns <strong>Red (Negative)</strong>. This is your primary stop-loss mechanism and protects you from larger losses. Don't wait, don't hope - just exit.
        </p>
      </div>

      <div class="p-5 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-orange-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
        <p class="font-bold text-orange-800 dark:text-orange-300 mb-2">Exit Signal 2: Strength Loss</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">
          <strong>Exit</strong> if the RS line starts <strong>falling significantly</strong> or <strong>crosses below zero</strong>. This indicates the stock has lost its leadership against the market - it's no longer a "strong" stock.
        </p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Pro Tip: Trail Your Stop-Loss</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The SuperTrend line automatically acts as a trailing stop-loss. As the stock moves higher, the SuperTrend line moves up with it, protecting your profits. This allows you to ride big winners while limiting downside risk.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">📋 Quick Reference Checklist</h3>
    <div class="mb-6 p-5 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
      <p class="font-bold text-slate-900 dark:text-white mb-3">Before Every Trade, Confirm:</p>
      <ul class="space-y-2">
        <li class="flex items-center text-slate-700 dark:text-slate-300">
          <span class="mr-2">☐</span> RS Line is above Zero Line (stock outperforming Nifty)
        </li>
        <li class="flex items-center text-slate-700 dark:text-slate-300">
          <span class="mr-2">☐</span> SuperTrend is Green (uptrend confirmed)
        </li>
        <li class="flex items-center text-slate-700 dark:text-slate-300">
          <span class="mr-2">☐</span> RSI is above 50 (momentum present)
        </li>
        <li class="flex items-center text-slate-700 dark:text-slate-300">
          <span class="mr-2">☐</span> Price breakout above swing high (entry trigger)
        </li>
        <li class="flex items-center text-slate-700 dark:text-slate-300">
          <span class="mr-2">☐</span> Daily chart confirms the setup
        </li>
        <li class="flex items-center text-slate-700 dark:text-slate-300">
          <span class="mr-2">☐</span> Stop-loss placed below SuperTrend line
        </li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">📊 Strategy Summary Table</h3>
    <div class="mb-6 overflow-x-auto">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold">Strategy Type</td><td>Momentum / Relative Strength</td></tr>
          <tr><td class="font-semibold">Best Market</td><td>Trending markets (bull or bear)</td></tr>
          <tr><td class="font-semibold">Timeframe Analysis</td><td>Daily (trend) + Hourly (entry)</td></tr>
          <tr><td class="font-semibold">Primary Indicator</td><td>Comparative RS (55-period)</td></tr>
          <tr><td class="font-semibold">Trend Indicator</td><td>SuperTrend (7,3 or 10,3)</td></tr>
          <tr><td class="font-semibold">Momentum Filter</td><td>RSI > 50</td></tr>
          <tr><td class="font-semibold">Entry</td><td>Breakout above swing high</td></tr>
          <tr><td class="font-semibold">Stop-Loss</td><td>SuperTrend line</td></tr>
          <tr><td class="font-semibold">Exit Signals</td><td>SuperTrend turns Red OR RS crosses below zero</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways</h3>
    <ul class="mb-6 list-decimal ml-6 text-slate-700 dark:text-slate-300 space-y-2">
      <li><strong>Buy leaders, not laggards</strong> - Only trade stocks outperforming the Nifty</li>
      <li><strong>Triple confirmation</strong> - RS above zero, SuperTrend green, RSI above 50</li>
      <li><strong>Multi-timeframe analysis</strong> - Daily for direction, hourly for entry</li>
      <li><strong>Wait for price action</strong> - Don't buy blindly, wait for breakouts</li>
      <li><strong>Discipline on exits</strong> - SuperTrend red or RS falling = immediate exit</li>
      <li><strong>Let winners run</strong> - SuperTrend acts as a trailing stop-loss</li>
    </ul>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-lg font-serif font-bold mb-3 text-slate-900 dark:text-white">💡 Remember This</p>
      <p class="text-sm text-center text-slate-700 dark:text-slate-300 leading-relaxed italic">
        "In a bull market, buy the strongest stocks. In a bear market, avoid the weakest. The RS strategy helps you identify both, giving you an edge over traders who buy randomly."
      </p>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Disclaimer:</strong> This article is for educational purposes only. Trading involves risk. Past performance is not indicative of future results. Always do your own research and consult a financial advisor before trading.
    </p>
  `},Sg=i=>`
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
`,Tg=[wg,{id:"etf-vs-mutual-funds",title:"ETFs vs Mutual Funds: The Showdown",excerpt:"Low fees and tax efficiency make ETFs a favorite, but mutual funds still have their place.",content:Sg("ETFs and Mutual Funds"),imageUrl:"https://picsum.photos/800/400?random=5",date:"Aug 15, 2023",readTime:"7 min",tags:["Investing","Stocks"]}],Cg=i=>`
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
`,Ag=[{id:"fire-movement",title:"Understanding the FIRE Movement",excerpt:"Financial Independence, Retire Early. Is it a pipe dream or a rigorous mathematical certainty?",content:Cg("FIRE Movement"),imageUrl:"https://picsum.photos/800/400?random=6",date:"Oct 05, 2023",readTime:"10 min",tags:["Retirement","Lifestyle"]}],Rg=i=>`
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
`,Eg=[{id:"best-nomad-visas",title:"Top 5 Digital Nomad Visas for 2024",excerpt:"From Portugal to Costa Rica, countries are opening their doors to remote workers.",content:Rg("Nomad Visas"),imageUrl:"https://picsum.photos/800/400?random=7",date:"Nov 10, 2023",readTime:"9 min",tags:["Travel","Work"]}],Mg=i=>`
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
`,Bg=[{id:"50-30-20-rule",title:"The 50/30/20 Rule Explained",excerpt:"A simple framework to manage your needs, wants, and savings effortlessly.",content:Mg("Budgeting Rules"),imageUrl:"https://picsum.photos/800/400?random=8",date:"Jul 22, 2023",readTime:"4 min",tags:["Budgeting","Basics"]}],hf=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is crucial for personal growth and a fulfilling lifestyle.
    Whether you are a seasoned thinker or just starting out, mastering the nuances of this subject can open doors to new perspectives.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Deep reflection on life's fundamental questions.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Practical wisdom for everyday decisions.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Finding meaning and purpose in modern life.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By exploring these ideas, you can develop a richer understanding of ${i}. Remember, wisdom is a journey, not a destination.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"The unexamined life is not worth living." - Socrates</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into philosophical concepts. We update our content regularly to ensure you have fresh perspectives at your fingertips.
  </p>
`,Ng=[{id:"stoicism-modern-life",title:"Stoicism for Modern Life",excerpt:"Ancient wisdom meets modern challenges. How Marcus Aurelius can help you navigate today's world.",content:hf("Stoicism"),imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",date:"Dec 10, 2025",readTime:"8 min",tags:["Philosophy","Stoicism","Mindset"]},{id:"mindfulness-philosophy",title:"The Philosophy of Mindfulness",excerpt:"Beyond meditation apps. Understanding the deep roots of present-moment awareness.",content:hf("Mindfulness"),imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80",date:"Dec 8, 2025",readTime:"6 min",tags:["Philosophy","Mindfulness","Wellness"]}],Dg=i=>`
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
`,zg=[{id:"private-jet-empty-legs",title:"How to Book Empty Leg Private Jets",excerpt:"The secret way to fly private for the price of a commercial business class ticket.",content:Dg("Private Aviation"),imageUrl:"https://picsum.photos/800/400?random=10",date:"May 12, 2023",readTime:"8 min",tags:["Luxury","Aviation"]}],Lg={id:"avoiding-action-trap-first-90-days",title:'Avoiding the "Action Trap": Expert Advice for Your First 3 Months on the Job',excerpt:"Dr. Michael Watkins reveals why rushing to prove yourself can backfire. Learn the proven framework to accelerate your impact as a new leader.",readTime:"12 min read",imageUrl:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",date:"2025-12-13",tags:["leadership","career","first-90-days","strategy","work-life"],content:`
    <div class="mb-6 p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 dark:from-slate-800/60 dark:via-indigo-900/30 dark:to-slate-800/60 rounded-xl border border-blue-200/50 dark:border-indigo-500/30 shadow-lg dark:shadow-xl">
      <h2 class="text-2xl font-serif font-bold mb-4 text-slate-900 dark:text-white">Your First 90 Days Will Define Your Success</h2>
      <p class="mb-3 text-slate-700 dark:text-slate-200 leading-relaxed">
        Starting a new leadership role is exciting, but it's also a period of <strong>intense vulnerability</strong>. The eyes of the organization are on you, and the clock is ticking.
      </p>
      <p class="text-slate-700 dark:text-slate-200 leading-relaxed">
        According to <strong>Dr. Michael Watkins</strong>, a world-renowned expert on leadership transitions, the actions you take during your first few months will largely determine your ultimate success or failure.
      </p>
    </div>

    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
      Based on his seminal book, <em class="text-gold-600 dark:text-gold-400">The First 90 Days</em>, Watkins outlines a framework not just for surviving a new job, but for <strong>accelerating your impact</strong>. Here's a breakdown of the core strategies new leaders need to master.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 The Goal: Reaching the "Breakeven Point"</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Watkins explains that "90 days" is a metaphor for a <strong>critical window of time</strong>. The ultimate goal of any transition is to reach the <em>"breakeven point"</em> as quickly as possible.
    </p>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 What is the Breakeven Point?</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        When you start a new job, you are a <strong>net consumer of value</strong> — you're learning the ropes, taking up people's time, and absorbing resources. The breakeven point is the moment you pivot to becoming a <strong>net contributor of value</strong>, where your output exceeds the investment the company has made in you.
      </p>
    </div>

    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Typically, it takes an executive about <strong>six to nine months</strong> to reach this point. Watkins' methodology is designed to <strong>cut that time in half</strong>.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🚨 Mistake #1: The "Action Imperative"</h3>
    <div class="p-5 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ The Biggest Trap</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        The biggest trap new leaders fall into is what Watkins calls the <strong>"action imperative"</strong>.
      </p>
    </div>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Feeling the pressure to prove themselves, many new leaders immediately jump into <em>execution mode</em>. They try to fix things <strong>before they fully understand them</strong>. This often leads to:
    </p>

    <ul class="mb-6 list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-2">
      <li>Misguided initiatives that alienate the team</li>
      <li>Wasted resources on the wrong priorities</li>
      <li>Damaged credibility before it's even established</li>
      <li>Political missteps that haunt you later</li>
    </ul>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">✅ The Fix</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        <strong>Resist the urge to act immediately.</strong> Instead, prioritize structured learning. You need to deeply understand the organization's culture, politics, and true challenges <em>before</em> you can effectively lead.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🔍 Diagnosis Before Strategy: The STARS Model</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      A common failure mode is trying to apply an old playbook to a new situation. <strong>What worked in your last company might be disastrous in your new one.</strong>
    </p>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Watkins stresses that you must <strong>diagnose the business situation correctly</strong>. He uses the <em>STARS framework</em> to categorize different scenarios, each requiring a different approach:
    </p>

    <div class="space-y-3 mb-6">
      <div class="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-blue-500">
        <p class="font-bold text-blue-700 dark:text-blue-400 mb-1">S — Start-up</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Building something from scratch. You have freedom but no existing infrastructure.</p>
      </div>

      <div class="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-red-500">
        <p class="font-bold text-red-700 dark:text-red-400 mb-1">T — Turnaround</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Saving a failing business unit. Requires rapid, decisive surgery and tough decisions.</p>
      </div>

      <div class="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-green-500">
        <p class="font-bold text-green-700 dark:text-green-400 mb-1">A — Accelerated Growth</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Managing rapidly expanding business. Focus on scaling systems and maintaining quality.</p>
      </div>

      <div class="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-amber-500">
        <p class="font-bold text-amber-700 dark:text-amber-400 mb-1">R — Realignment</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Re-energizing a previously successful organization that has drifted off course.</p>
      </div>

      <div class="p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-lg border-l-4 border-purple-500">
        <p class="font-bold text-purple-700 dark:text-purple-400 mb-1">S — Sustaining Success</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">Keeping a high-performing machine running smoothly. Requires a delicate touch.</p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🔑 Key Insight</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        A "Turnaround" requires <strong>rapid, decisive surgery</strong>. "Sustaining Success" requires a <strong>delicate touch</strong> to avoid breaking what's already working. <em>Know which situation you're in before you act.</em>
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🤝 Build 360-Degree Relationships</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      New leaders often obsess over their direct reports. While your team is crucial, Watkins argues that <strong>you will fail if you neglect other key relationships</strong>.
    </p>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      You must proactively manage relationships in all directions:
    </p>

    <div class="grid md:grid-cols-3 gap-4 mb-6">
      <div class="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg text-center border border-blue-200 dark:border-blue-700">
        <p class="text-3xl mb-2">⬆️</p>
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-1">UP</p>
        <p class="text-xs text-slate-600 dark:text-slate-400">Aligning expectations swiftly with your new boss</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-lg text-center border border-teal-200 dark:border-teal-700">
        <p class="text-3xl mb-2">↔️</p>
        <p class="font-bold text-teal-800 dark:text-teal-300 mb-1">ACROSS</p>
        <p class="text-xs text-slate-600 dark:text-slate-400">Building alliances with peers whose support you need</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg text-center border border-purple-200 dark:border-purple-700">
        <p class="text-3xl mb-2">⬇️</p>
        <p class="font-bold text-purple-800 dark:text-purple-300 mb-1">DOWN</p>
        <p class="text-xs text-slate-600 dark:text-slate-400">Assessing and motivating your team</p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-orange-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⚠️ Warning</p>
      <p class="text-sm text-slate-700 dark:text-slate-300">
        If you don't build lateral alliances with your peers early on, you will find yourself <strong>isolated</strong> when you eventually need their help to execute your strategy.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🏆 Secure Early Wins</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      While you shouldn't rush into major strategic changes, you <em>do</em> need to show progress. Watkins advises securing <strong>"early wins"</strong>.
    </p>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border border-green-200 dark:border-green-700 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-3">What Makes a Good Early Win?</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
        <li>✓ Tangible improvements in areas that matter to your boss and the organization</li>
        <li>✓ Doesn't have to be a massive strategic shift</li>
        <li>✓ Can be operational fixes that resolve long-standing frustrations</li>
        <li>✓ Visible enough to build your reputation</li>
      </ul>
    </div>

    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Early wins serve multiple purposes: they <strong>build momentum</strong>, <strong>establish your credibility</strong>, and <strong>buy you the political capital</strong> you need to tackle longer-term goals.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">📋 Summary: Your First 90 Days Checklist</h3>
    <div class="mb-6 p-5 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600">
      <ul class="space-y-3">
        <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
          <span class="text-lg">1️⃣</span>
          <span><strong>Resist the "Action Imperative"</strong> — Don't try to fix things before understanding them</span>
        </li>
        <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
          <span class="text-lg">2️⃣</span>
          <span><strong>Diagnose with STARS</strong> — Identify which situation you're in before choosing your approach</span>
        </li>
        <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
          <span class="text-lg">3️⃣</span>
          <span><strong>Build 360° Relationships</strong> — Manage up, across, and down simultaneously</span>
        </li>
        <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
          <span class="text-lg">4️⃣</span>
          <span><strong>Secure Early Wins</strong> — Build credibility with visible, tangible improvements</span>
        </li>
        <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
          <span class="text-lg">5️⃣</span>
          <span><strong>Reach Breakeven Faster</strong> — Become a net contributor, not just a consumer</span>
        </li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 The Takeaway</h3>
    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        The transition into a new leadership role is a <strong>high-stakes endeavor</strong>. By avoiding the "action trap," diagnosing the business context accurately, and focusing on relationship-building across the board, you can significantly <strong>reduce your risk of failure</strong> and <strong>accelerate your path to success</strong>.
      </p>
    </div>

    <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
      <p class="italic text-slate-700 dark:text-slate-300 text-center">
        "The first 90 days are a golden opportunity to build momentum — or dig yourself into a hole."
        <br/><span class="text-sm font-semibold">— Dr. Michael Watkins</span>
      </p>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> Based on "The First 90 Days" by Dr. Michael Watkins | This article is for educational purposes only.
    </p>
  `},gf=i=>`
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Introduction to ${i}</h3>
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    In today's fast-paced world, understanding ${i} is essential for maintaining balance and achieving fulfillment.
    Whether you're climbing the corporate ladder or building your own venture, mastering this subject can transform your life.
  </p>
  
  <h3 class="text-2xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Key Takeaways</h3>
  <div class="mb-6 p-5 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-xl border border-teal-200/50 dark:border-teal-500/30 shadow-md dark:shadow-lg">
    <ul class="list-disc pl-5 space-y-3">
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Strategies for sustainable productivity.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Building boundaries that protect your energy.</li>
      <li class="text-slate-700 dark:text-slate-300 leading-relaxed">Finding harmony between ambition and well-being.</li>
    </ul>
  </div>
  
  <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
    By implementing these practices, you can optimize your approach to ${i}. Remember, balance is not static—it's a continuous practice.
  </p>
  
  <div class="my-6 p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-pink-900/20 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-md dark:shadow-lg">
    <p class="italic text-slate-700 dark:text-slate-300">"Almost everything will work again if you unplug it for a few minutes, including you." - Anne Lamott</p>
  </div>
  
  <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
    Continue reading our detailed guides to dive deeper into work-life integration. We update our content regularly to help you thrive in all areas of life.
  </p>
`,jg=[Lg,{id:"remote-work-productivity",title:"Remote Work Productivity Secrets",excerpt:"Master the art of working from anywhere. Build routines that maximize output without burnout.",content:gf("Remote Work Productivity"),imageUrl:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",date:"Dec 12, 2025",readTime:"10 min",tags:["Work-Life","Productivity","Remote Work"]},{id:"burnout-prevention",title:"Preventing Burnout: A Complete Guide",excerpt:"Recognize the signs early and build sustainable habits. Your career is a marathon, not a sprint.",content:gf("Burnout Prevention"),imageUrl:"https://images.unsplash.com/photo-1494599948593-3dafe8338d71?w=800&auto=format&fit=crop&q=80",date:"Dec 5, 2025",readTime:"12 min",tags:["Work-Life","Wellness","Mental Health"]}],Ug={id:"ai-models-are-commodities-benedict-evans",title:"Beyond the Hype: Benedict Evans on Why AI Models Are Commodities",excerpt:"The real value won't be in the model itself. It will be in the software and networks built on top of it. Here's why the current AI boom follows a familiar pattern.",readTime:"14 min read",imageUrl:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",date:"2025-12-14",tags:["AI","technology","economics","investing","future"],content:`
    <div class="mb-8 p-6 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-800/80 dark:via-blue-900/30 dark:to-slate-800/80 rounded-xl border border-slate-200/50 dark:border-blue-500/30 shadow-lg dark:shadow-xl">
      <p class="text-xl text-slate-700 dark:text-slate-200 leading-relaxed italic font-serif">
        "AI is whatever machines can't do yet... once you've automated it, you forget that anything was ever any different."
      </p>
      <p class="text-sm text-slate-500 dark:text-slate-400 mt-3">— Benedict Evans</p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white">1. The Hook: The Rhythm of History</h2>
    
    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Context</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      The current AI boom isn't a unique anomaly. It's the <strong>latest chapter in a predictable cycle</strong> of platform shifts that have reshaped technology every decade:
    </p>
    
    <div class="flex flex-wrap items-center justify-center gap-3 mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Mainframe</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">PC</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Web</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Mobile</span>
      <span class="text-gold-500 text-xl">→</span>
      <span class="px-4 py-2 bg-gold-500 text-white rounded-full text-sm font-bold">AI</span>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Pattern</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Every shift creates new gatekeepers and <strong>destroys old ones</strong>. Microsoft missed mobile. Nokia missed the smartphone. We are in the chaos phase where old gatekeepers fall away and new empires emerge.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Uncertainty</h3>
    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        Unlike 5G or mobile (where we knew the physical limits), <strong>we don't know the ceiling of AI</strong>. We are currently operating on "vibes-based forecasting."
      </p>
      <p class="text-sm text-slate-600 dark:text-slate-400 mt-3 italic">
        "People draw straight lines on log scale charts and say... you just don't understand how exponential growth works. The problem is they're always right. It always is different."
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">2. Follow the Money: The "Circular Revenue" Problem</h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Spending Spree</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The industry is driven by one fear:
    </p>
    <div class="p-5 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400/50 mb-6">
      <p class="text-lg font-semibold text-slate-900 dark:text-white">
        "The risk of underinvesting is bigger than the risk of overinvesting."
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700 text-center">
        <p class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">~$400B</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Infrastructure spend by Big Four this year</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700 text-center">
        <p class="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$40-50B</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Nvidia revenue per quarter</p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The New Bottleneck</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      It used to be chips. Now it's <strong>electricity</strong>. Power availability is the new constraint.
    </p>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-orange-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 italic">
        "Getting access to electricity is actually a bigger problem than getting chips from Nvidia."
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The "Circular" Economy</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This is the crucial insight. Much of the AI revenue is <strong>artificial—a closed loop</strong> fueled by cash reserves, not end-user profit:
    </p>
    
    <div class="p-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-xl border border-purple-200 dark:border-purple-700 mb-8">
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-purple-700 dark:text-purple-300">Hyperscalers</p>
          <p class="text-xs text-slate-500">(Google/Microsoft)</p>
        </div>
        <span class="text-2xl text-purple-500">💰→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-green-700 dark:text-green-300">Nvidia</p>
          <p class="text-xs text-slate-500">(Chips)</p>
        </div>
        <span class="text-2xl text-green-500">💰→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-blue-700 dark:text-blue-300">AI Startups</p>
          <p class="text-xs text-slate-500">(OpenAI, etc.)</p>
        </div>
        <span class="text-2xl text-blue-500">💰→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-purple-700 dark:text-purple-300">Back to Hyperscalers</p>
          <p class="text-xs text-slate-500">(Cloud Credits)</p>
        </div>
      </div>
      <p class="text-center text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
        "This is what I mean by 'circular revenue'... hyperscalers give lots of money to Nvidia, Nvidia gives it to OpenAI, and OpenAI uses it to buy chips."
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">3. The Product Gap: Models Are Commodities</h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">No Moats</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      There is no "best" model anymore. The top models are all within <strong>5-10% performance of each other</strong>. They are converging, not diverging.
    </p>
    <div class="p-5 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 mb-8">
      <p class="text-center text-lg font-semibold text-slate-900 dark:text-white mb-2">
        🎯 Intelligence is becoming a commodity.
      </p>
      <p class="text-center text-sm text-slate-600 dark:text-slate-400">
        Model benchmarks show convergence, not differentiation.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Usage Reality Check</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Despite huge user numbers (e.g., 800M users), <strong>engagement is shallow</strong>. Most people use AI "once a week or once a month." We haven't figured out the "product-market fit" for daily life yet.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Real Value Proposition</h3>
    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 The Investment Thesis</p>
      <p class="text-slate-700 dark:text-slate-300">
        The value won't be in the model itself (which is expensive and undifferentiated), but in the <strong>software and networks built on top of it</strong>.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">4. The Future: Absorption vs. Disruption</h2>

    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-3 text-lg">Phase 1: Absorption (Now)</p>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          We are currently just <strong>making existing things faster</strong>. This is efficiency, not revolution.
        </p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2">
          <li>✓ Coding assistance</li>
          <li>✓ Email drafting</li>
          <li>✓ Customer support automation</li>
          <li>✓ Document summarization</li>
        </ul>
      </div>
      <div class="p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-700">
        <p class="font-bold text-purple-800 dark:text-purple-300 mb-3 text-lg">Phase 2: Disruption (Next)</p>
        <p class="text-slate-700 dark:text-slate-300 mb-4">
          The real change comes when we do things that were <strong>previously impossible</strong>.
        </p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-2">
          <li>🚀 New business models</li>
          <li>🚀 Agentic commerce</li>
          <li>🚀 Autonomous decision-making</li>
          <li>🚀 Creative breakthroughs</li>
        </ul>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The "Infinite Interns" Question</h3>
    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="text-lg font-semibold text-slate-900 dark:text-white mb-3">
        🤔 If AI gives you 1,000 free interns...
      </p>
      <p class="text-slate-700 dark:text-slate-300">
        Do you just do the <strong>same work cheaper</strong>? Or do you <strong>fundamentally change</strong> what your company does?
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Agentic Commerce: The Death of "Search and Scroll"</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This is where it gets interesting. Instead of <em>browsing Amazon for a shirt</em>, you ask an AI:
    </p>
    <div class="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700 mb-6">
      <p class="text-center text-lg font-medium text-indigo-800 dark:text-indigo-300">
        "What should I buy?"
      </p>
    </div>
    <p class="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      This threatens the entire <strong>$1 trillion ad industry</strong> and the concept of a "storefront." The implications are staggering.
    </p>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">5. Conclusion: The Invisible Elevator</h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Analogy</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Elevators used to have <strong>human operators</strong>. Then we automated them. Now, we don't look at an elevator and say, "Wow, a robot!" We just get in.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Prediction</h3>
    <div class="p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-slate-700 mb-8">
      <p class="text-lg text-slate-200 leading-relaxed text-center">
        AI is currently defined as <em>"whatever machines can't do yet."</em>
        <br/><br/>
        As soon as it works perfectly, we will <strong>stop calling it AI</strong> and just call it <span class="text-gold-400">software</span>.
      </p>
    </div>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-8">
      <p class="text-center text-lg font-serif text-slate-800 dark:text-slate-200 leading-relaxed">
        <strong>The goal is for AI to become as boring and invisible as an elevator button.</strong>
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">📊 Key Data Points to Remember</h3>
    <div class="overflow-x-auto mb-8">
      <table class="w-full text-sm border-collapse">
        <tbody>
          <tr><td class="font-semibold py-3">Infrastructure Spend</td><td>~$400 Billion by the big four platform companies this year</td></tr>
          <tr><td class="font-semibold py-3">Nvidia Revenue</td><td>Running at ~$40–50 Billion per quarter</td></tr>
          <tr><td class="font-semibold py-3">Model Convergence</td><td>Top models are within 5–10% of each other on benchmarks</td></tr>
          <tr><td class="font-semibold py-3">Historical Context</td><td>Online dating is now 60% of new relationships (showing how "weird" tech becomes normal)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways for Investors</h3>
    <ul class="mb-8 space-y-3">
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">1️⃣</span>
        <span><strong>Models are commoditizing</strong> — The moat isn't in the model, it's in the application layer</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">2️⃣</span>
        <span><strong>Watch the circular economy</strong> — Much of current AI revenue is hyperscalers paying each other</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">3️⃣</span>
        <span><strong>Power is the new chip</strong> — Electricity availability is the emerging bottleneck</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">4️⃣</span>
        <span><strong>Phase 2 hasn't started</strong> — We're still in absorption mode, not true disruption</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">5️⃣</span>
        <span><strong>The ad industry is vulnerable</strong> — Agentic commerce could rewrite the rules</span>
      </li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> Analysis based on Benedict Evans' insights | For educational and analytical purposes only | Views expressed are for discussion and do not constitute investment advice.
    </p>
  `},Hg=[Ug],zt={"credit-cards":hg,"airline-miles":vg,"hotel-status":yg,"investing-basics":Tg,retirement:Ag,"digital-nomad":Eg,budgeting:Bg,philosophy:Ng,"luxury-travel":zg,"work-life":jg,"global-economy":Hg},Rt=[{id:"credit-cards",name:"Premium Credit Cards",iconName:"CreditCard",description:"Maximize your rewards with top-tier travel and cashback cards.",articles:zt["credit-cards"]},{id:"airline-miles",name:"Airline Miles",iconName:"Plane",description:"Fly for free. Learn the secrets of airline alliances and award charts.",articles:zt["airline-miles"]},{id:"hotel-status",name:"Hotel Elite Status",iconName:"Hotel",description:"Room upgrades, free breakfast, and late checkout. Live the suite life.",articles:zt["hotel-status"]},{id:"investing-basics",name:"Investing Basics",iconName:"TrendingUp",description:"Building wealth for the long term. Stocks, bonds, and ETFs explained.",articles:zt["investing-basics"]},{id:"retirement",name:"Retirement Planning",iconName:"Umbrella",description:"Secure your future. 401ks, IRAs, and the FIRE movement.",articles:zt.retirement},{id:"digital-nomad",name:"Digital Nomad",iconName:"Laptop",description:"Work from anywhere. Visas, connectivity, and tax implications.",articles:zt["digital-nomad"]},{id:"budgeting",name:"Smart Budgeting",iconName:"PieChart",description:"Take control of your cash flow without sacrificing your lifestyle.",articles:zt.budgeting},{id:"philosophy",name:"Philosophy",iconName:"BookOpen",description:"Ancient wisdom for modern life. Stoicism, mindfulness, and meaning.",articles:zt.philosophy},{id:"luxury-travel",name:"Luxury Travel",iconName:"Gem",description:"First class flights and 5-star resorts. Experience the best for less.",articles:zt["luxury-travel"]},{id:"work-life",name:"Work-Life Balance",iconName:"Heart",description:"Productivity, wellness, and building a sustainable career.",articles:zt["work-life"]},{id:"global-economy",name:"Global Economy",iconName:"Globe",description:"Macro trends, AI economics, and forces shaping markets.",articles:zt["global-economy"]}],Og=({collapsed:i=!1})=>{const[c,u]=R.useState("dark");R.useEffect(()=>{const f=localStorage.getItem("theme");f?(u(f),document.documentElement.classList.toggle("dark",f==="dark")):document.documentElement.classList.add("dark")},[]);const n=()=>{const f=c==="dark"?"light":"dark";u(f),localStorage.setItem("theme",f),document.documentElement.classList.toggle("dark",f==="dark")};return b.jsxs("button",{onClick:n,className:`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group w-full hover:bg-slate-50 dark:hover:bg-white/5 focus:outline-none ${i?"justify-center":""}`,"aria-label":"Toggle Theme",title:i?"Toggle Theme":"",children:[b.jsx("div",{className:`transition-colors duration-300 ${c==="dark"?"text-gold-500":"text-slate-400 group-hover:text-gold-500"}`,children:c==="dark"?b.jsx(Vh,{size:20,strokeWidth:1.5}):b.jsx(Uh,{size:20,strokeWidth:1.5})}),!i&&b.jsx("span",{className:"text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 tracking-wide",children:c==="dark"?"Light Mode":"Dark Mode"})]})},_g={CreditCard:Gf,Plane:Vf,Hotel:Yf,TrendingUp:Zn,Umbrella:Qf,Laptop:If,PieChart:qf,BookOpen:bh,Gem:Ff,Heart:Eh,Globe:ci},vf=({category:i,collapsed:c,setMobileOpen:u})=>{const n=_g[i.iconName]||ci;return b.jsx(Uf,{to:`/category/${i.id}`,onClick:()=>u(!1),className:({isActive:f})=>`
        flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group relative
        ${c?"justify-center px-2":""}
        ${f?"bg-slate-100 dark:bg-white/[0.08] text-slate-900 dark:text-white":"text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-slate-200"}
      `,children:({isActive:f})=>b.jsxs(b.Fragment,{children:[f&&!c&&b.jsx("span",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gold-500 rounded-r-sm shadow-[0_0_8px_rgba(201,162,39,0.4)]"}),b.jsx(n,{size:c?20:18,strokeWidth:f?2:1.5,className:`shrink-0 transition-colors duration-200 ${f?"text-gold-500":"group-hover:text-gold-500"}`}),!c&&b.jsx("span",{className:"text-[13px] font-medium tracking-wide truncate transition-all",children:i.name}),c&&b.jsx("div",{className:"absolute left-14 z-50 bg-dark-800 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded shadow-xl border border-white/[0.08] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap",children:i.name})]})})},qg=({mobileOpen:i,setMobileOpen:c})=>{const[u,n]=R.useState(!1),f=Rt.filter(k=>["credit-cards","investing-basics","retirement","budgeting","philosophy","work-life","global-economy"].includes(k.id)),p=Rt.filter(k=>["airline-miles","hotel-status","luxury-travel","digital-nomad"].includes(k.id));return b.jsxs(b.Fragment,{children:[b.jsx("div",{className:`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${i?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>c(!1)}),b.jsxs("aside",{className:`fixed top-0 left-0 z-50 h-screen bg-white dark:bg-dark-900 border-r border-slate-200 dark:border-white/[0.06] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col
          ${i?"translate-x-0":"-translate-x-full md:translate-x-0"}
          ${u?"w-20":"w-72"}
        `,children:[b.jsxs("div",{className:`h-20 flex items-center ${u?"justify-center":"justify-between px-6"} border-b border-slate-100 dark:border-white/[0.06] shrink-0`,children:[b.jsx(Da,{to:"/",onClick:()=>c(!1),className:"group",children:u?b.jsx("span",{className:"font-serif font-bold text-2xl text-gold-500",children:"T"}):b.jsxs("span",{className:"font-serif font-medium text-2xl tracking-widest text-slate-900 dark:text-white group-hover:text-gold-500 transition-colors",children:["TRE",b.jsx("span",{className:"text-gold-500 italic",children:"ZZO"})]})}),b.jsx("button",{onClick:()=>c(!1),className:"md:hidden p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white",children:b.jsx(Ph,{size:20})}),!u&&b.jsx("button",{onClick:()=>n(!0),className:"hidden md:flex p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white transition-colors",children:b.jsx(yh,{size:16})})]}),u&&b.jsx("button",{onClick:()=>n(!1),className:"hidden md:flex absolute top-7 -right-3 z-50 p-1 bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] text-gold-500 rounded-full shadow-md hover:scale-110 transition-transform",children:b.jsx(vh,{size:12,strokeWidth:2.5})}),b.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-hide py-6 px-3 space-y-8",children:[b.jsx("div",{className:`transition-all duration-300 ${u?"px-0 flex justify-center":""}`,children:u?b.jsx("button",{className:"p-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-400 hover:text-gold-500 transition-colors",title:"Search",children:b.jsx(pf,{size:18,strokeWidth:2})}):b.jsxs("div",{className:"relative group",children:[b.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] rounded-md py-2.5 pl-9 pr-4 text-xs font-medium text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"}),b.jsx(pf,{className:"absolute left-3 top-2.5 text-slate-400 group-focus-within:text-gold-500 transition-colors",size:14})]})}),b.jsxs("div",{children:[!u&&b.jsxs("h3",{className:"px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 mb-3 flex items-center gap-2",children:[b.jsx(xh,{size:10,className:"text-gold-600/80"})," Wealth"]}),b.jsx("div",{className:"space-y-1",children:f.map(k=>b.jsx(vf,{category:k,collapsed:u,setMobileOpen:c},k.id))})]}),b.jsxs("div",{children:[!u&&b.jsxs("h3",{className:"px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 mb-3 flex items-center gap-2",children:[b.jsx(Sh,{size:10,className:"text-gold-600/80"})," Wander"]}),b.jsx("div",{className:"space-y-1",children:p.map(k=>b.jsx(vf,{category:k,collapsed:u,setMobileOpen:c},k.id))})]})]}),b.jsx("div",{className:"p-4 border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-dark-950/50",children:b.jsx(Og,{collapsed:u})})]})]})},Gg=()=>{const[i,c]=R.useState(!1);return b.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-dark-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden",children:[b.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[b.jsx("div",{className:"absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/5 dark:bg-gold-500/[0.03] blur-[120px]"}),b.jsx("div",{className:"absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-200/20 dark:bg-indigo-900/[0.03] blur-[100px]"})]}),b.jsx(qg,{mobileOpen:i,setMobileOpen:c}),b.jsxs("div",{className:"relative z-10 md:pl-24 lg:pl-80 transition-all duration-500 min-h-screen flex flex-col",children:[b.jsx("div",{className:"md:hidden sticky top-0 z-30 bg-white/80 dark:bg-dark-900/90 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.06] px-6 h-16 flex items-center justify-between",children:b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("button",{onClick:()=>c(!0),className:"text-slate-600 dark:text-slate-400 hover:text-gold-500 transition-colors",children:b.jsx(Lh,{size:24})}),b.jsxs("span",{className:"font-serif font-medium text-xl tracking-widest text-slate-900 dark:text-white",children:["TRE",b.jsx("span",{className:"text-gold-500 italic",children:"ZZO"})]})]})}),b.jsx("main",{className:"flex-1 p-6 md:p-12 lg:p-16 max-w-screen-2xl mx-auto w-full",children:b.jsx(Sx,{})}),b.jsxs("footer",{className:"py-10 px-8 border-t border-slate-200 dark:border-white/[0.06] text-center text-slate-500 dark:text-slate-500 text-xs tracking-widest font-medium uppercase",children:["© ",new Date().getFullYear()," Trezzo Financial. All rights reserved."]})]})]})},Kf=({article:i,categoryId:c})=>b.jsx(Da,{to:`/category/${c}/article/${i.id}`,className:"group block h-full",children:b.jsxs("div",{className:"h-full bg-white dark:bg-dark-800 rounded-sm overflow-hidden transition-all duration-500 border border-slate-200 dark:border-white/[0.06] group-hover:border-gold-500/30 flex flex-col relative",children:[b.jsxs("div",{className:"relative h-32 overflow-hidden",children:[b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"}),b.jsx("img",{src:i.imageUrl,alt:i.title,className:"w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"}),b.jsx("div",{className:"absolute top-0 right-0 z-20 p-1.5",children:i.tags.slice(0,1).map(u=>b.jsx("span",{className:"px-1.5 py-0.5 bg-black/50 backdrop-blur-md text-gold-400 text-[9px] font-bold uppercase tracking-widest border border-gold-500/20",children:u},u))})]}),b.jsxs("div",{className:"p-3.5 flex flex-col flex-grow relative",children:[b.jsxs("div",{className:"flex items-center gap-2 text-[9px] font-medium text-slate-500 dark:text-slate-400 mb-2.5 uppercase tracking-widest",children:[b.jsxs("span",{className:"flex items-center gap-1.5",children:[b.jsx("span",{className:"w-0.5 h-0.5 rounded-full bg-gold-500"})," ",i.date]}),b.jsx("span",{className:"text-slate-300 dark:text-slate-600",children:"|"}),b.jsxs("span",{children:[i.readTime," Read"]})]}),b.jsx("h3",{className:"text-lg font-serif font-medium mb-2 text-slate-900 dark:text-slate-100 leading-snug group-hover:text-gold-400 transition-colors duration-300",children:i.title}),b.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-xs mb-4 line-clamp-2 flex-grow leading-relaxed font-normal",children:i.excerpt}),b.jsxs("div",{className:"mt-auto pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between",children:[b.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300",children:"Read Analysis"}),b.jsx(_f,{size:16,className:"text-slate-400 dark:text-slate-500 group-hover:text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"})]})]})]})}),Fg=({isLoading:i})=>b.jsxs("div",{className:`fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${i?"opacity-100":"opacity-0 pointer-events-none"}`,children:[b.jsxs("div",{className:"relative",children:[b.jsxs("h1",{className:"text-6xl md:text-8xl font-serif font-medium tracking-tighter text-white mb-2 animate-fade-in-up",children:["TRE",b.jsx("span",{className:"italic text-gold-500",children:"ZZO"})]}),b.jsx("div",{className:"w-full h-[2px] bg-white/[0.08] mt-4 rounded-full overflow-hidden",children:b.jsx("div",{className:"h-full bg-gold-500 animate-loader-width shadow-[0_0_15px_rgba(201,162,39,0.8)]"})})]}),b.jsxs("div",{className:"mt-8 flex items-center gap-3 animate-fade-in",style:{animationDelay:"0.5s"},children:[b.jsx("span",{className:"h-px w-8 bg-slate-700"}),b.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 animate-pulse",children:"Establishing Secure Connection"}),b.jsx("span",{className:"h-px w-8 bg-slate-700"})]})]}),Yg=()=>{const{pathname:i}=ia();return R.useEffect(()=>{window.scrollTo(0,0)},[i]),null},Ig={CreditCard:Gf,Plane:Vf,Hotel:Yf,TrendingUp:Zn,Umbrella:Qf,Laptop:If,PieChart:qf,ShieldCheck:Xf,Gem:Ff,Globe:ci},Vg=()=>{const{categoryId:i}=Mf(),c=Rt.find(n=>n.id===i);if(!c)return b.jsx("div",{className:"text-center py-20 text-xl text-slate-500 font-serif italic",children:"Category not available"});const u=Ig[c.iconName]||ci;return b.jsxs("div",{className:"animate-fade-in w-full",children:[b.jsxs("nav",{className:"flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12",children:[b.jsxs(Da,{to:"/",className:"hover:text-gold-500 transition-colors flex items-center gap-2 group",children:[b.jsx(Nh,{size:14,className:"mb-0.5 group-hover:text-gold-500 transition-colors"}),b.jsx("span",{className:"hidden sm:inline",children:"Home"})]}),b.jsx("span",{className:"text-slate-300 dark:text-slate-600",children:"/"}),b.jsx("span",{className:"text-gold-500",children:c.name})]}),b.jsxs("div",{className:"mb-16 md:mb-24 relative",children:[b.jsx("div",{className:"absolute top-0 left-0 w-20 h-1 bg-gold-500 mb-6"}),b.jsxs("div",{className:"pt-8 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between",children:[b.jsxs("div",{className:"max-w-3xl relative z-10",children:[b.jsx("span",{className:"text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block",children:"Editorial Collection"}),b.jsx("h1",{className:"text-5xl md:text-7xl font-serif font-medium mb-6 text-slate-900 dark:text-white tracking-tight leading-none",children:c.name}),b.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light border-l border-slate-200 dark:border-white/[0.08] pl-6 ml-1",children:c.description})]}),b.jsx("div",{className:"hidden md:block text-slate-200 dark:text-white/[0.04] transform translate-y-4",children:b.jsx(u,{size:140,strokeWidth:.5})})]})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4",children:c.articles.map(n=>b.jsx(Kf,{article:n,categoryId:c.id},n.id))})]})},Xg=()=>{const{categoryId:i,articleId:c}=Mf(),u=Rt.find(f=>f.id===i),n=u==null?void 0:u.articles.find(f=>f.id===c);return!n||!u?b.jsx("div",{className:"text-center py-20 text-xl text-slate-500",children:"Article not found"}):b.jsxs("div",{className:"max-w-4xl mx-auto animate-fade-in-up",children:[b.jsx("nav",{className:"mb-12 flex items-center justify-between",children:b.jsxs("button",{onClick:()=>window.history.back(),className:"group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors",children:[b.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all",children:b.jsx(dh,{size:14})}),"Back to ",u.name]})}),b.jsxs("header",{className:"mb-12",children:[b.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 mb-8 font-medium uppercase tracking-widest",children:[b.jsx("span",{className:"text-gold-600 dark:text-gold-500",children:u.name}),b.jsx("span",{className:"text-slate-300 dark:text-slate-600",children:"/"}),b.jsx("span",{className:"flex items-center gap-2",children:n.date}),b.jsx("span",{className:"text-slate-300 dark:text-slate-700",children:"/"}),b.jsxs("span",{className:"flex items-center gap-2",children:[n.readTime," read"]})]}),b.jsx("h1",{className:"text-4xl md:text-6xl font-serif font-medium text-slate-900 dark:text-white mb-10 leading-[1.1]",children:n.title}),b.jsxs("div",{className:"w-full h-[500px] overflow-hidden mb-12 relative",children:[b.jsx("div",{className:"absolute inset-0 border border-white/10 z-10"}),b.jsx("img",{src:n.imageUrl,alt:n.title,className:"w-full h-full object-cover"})]})]}),b.jsxs("article",{className:`prose prose-lg dark:prose-invert prose-slate max-w-none article-content
        prose-headings:font-serif prose-headings:font-medium prose-headings:text-slate-900 dark:prose-headings:text-white 
        prose-p:leading-loose prose-p:text-slate-700 dark:prose-p:text-slate-300
        prose-a:text-gold-600 dark:prose-a:text-gold-500 hover:prose-a:text-gold-400 
        prose-blockquote:border-l-gold-500 prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:italic
        prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
        prose-li:marker:text-gold-500`,children:[b.jsx("div",{className:"text-2xl md:text-3xl font-serif text-slate-800 dark:text-slate-200 mb-12 leading-relaxed font-normal tracking-wide",children:n.excerpt}),b.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})]}),b.jsx("div",{className:"my-16 h-px bg-slate-200 dark:bg-white/[0.08]"}),b.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6",children:[b.jsx("div",{className:"flex flex-wrap gap-2",children:n.tags.map(f=>b.jsxs("span",{className:"px-4 py-1.5 bg-transparent border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-colors cursor-default",children:["#",f]},f))}),b.jsxs("button",{className:"flex items-center gap-3 text-slate-500 hover:text-gold-500 transition-colors text-xs font-bold uppercase tracking-widest",children:[b.jsx(qh,{size:16})," Share Article"]})]})]})},Qg=()=>{var n,f,p,k;const i=(n=Rt.find(C=>C.id==="luxury-travel"))==null?void 0:n.articles[0],c=Rt.find(C=>C.id==="luxury-travel"),u=[{cat:Rt.find(C=>C.id==="credit-cards"),art:(f=Rt.find(C=>C.id==="credit-cards"))==null?void 0:f.articles[0]},{cat:Rt.find(C=>C.id==="investing-basics"),art:(p=Rt.find(C=>C.id==="investing-basics"))==null?void 0:p.articles[0]},{cat:Rt.find(C=>C.id==="global-economy"),art:(k=Rt.find(C=>C.id==="global-economy"))==null?void 0:k.articles[0]}].filter(C=>C.cat&&C.art);return b.jsxs("div",{className:"flex flex-col w-full animate-fade-in",children:[b.jsxs("div",{className:"flex flex-col items-center justify-center pt-12 pb-20 md:pb-28 text-center border-b border-slate-200 dark:border-white/[0.06] mb-16",children:[b.jsx("div",{className:"mb-6",children:b.jsx("span",{className:"inline-block py-1.5 px-4 border border-gold-500/30 rounded-full bg-gold-500/5 text-gold-500 text-[10px] font-bold uppercase tracking-[0.25em]",children:"Premier Financial & Travel Insight"})}),b.jsxs("h1",{className:"text-7xl md:text-9xl lg:text-[10rem] font-serif font-medium text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.8]",children:["TRE",b.jsx("span",{className:"italic text-gold-500",children:"ZZO"})]}),b.jsx("p",{className:"text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light font-serif italic",children:'"The definitive guide to maximizing wealth and experiencing the world in style."'})]}),i&&c&&b.jsxs("section",{className:"mb-24",children:[b.jsxs("div",{className:"flex items-center justify-between mb-8",children:[b.jsxs("h2",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gold-500 flex items-center gap-2",children:[b.jsx(Yh,{size:14})," Editor's Choice"]}),b.jsx(Da,{to:`/category/${c.id}`,className:"text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors",children:"View Category"})]}),b.jsxs(Da,{to:`/category/${c.id}/article/${i.id}`,className:"group relative block w-full h-[60vh] min-h-[500px] overflow-hidden rounded-[2px]",children:[b.jsx("div",{className:"absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-90"}),b.jsx("img",{src:i.imageUrl,alt:i.title,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"}),b.jsxs("div",{className:"absolute bottom-0 left-0 z-20 p-8 md:p-16 max-w-4xl",children:[b.jsx("span",{className:"inline-block px-3 py-1 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-widest mb-6",children:"Featured Analysis"}),b.jsx("h3",{className:"text-4xl md:text-6xl font-serif font-medium text-white mb-6 leading-tight group-hover:text-gold-200 transition-colors",children:i.title}),b.jsx("p",{className:"text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl line-clamp-2",children:i.excerpt}),b.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white",children:["Read Full Story ",b.jsx(_f,{size:16,className:"text-gold-500"})]})]})]})]}),b.jsxs("section",{className:"mb-24",children:[b.jsxs("div",{className:"flex items-center gap-4 mb-12 border-b border-slate-200 dark:border-white/[0.06] pb-4",children:[b.jsx("h2",{className:"text-2xl font-serif font-medium text-slate-900 dark:text-white",children:"Latest Intelligence"}),b.jsx("div",{className:"h-px flex-1 bg-slate-200 dark:bg-white/[0.06]"}),b.jsx(Da,{to:"/category/credit-cards",className:"text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-gold-500 transition-colors",children:"View All"})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:u.map((C,y)=>C.art&&C.cat?b.jsx(Kf,{article:C.art,categoryId:C.cat.id},y):null)})]}),b.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 bg-white dark:bg-dark-800 p-10 md:p-16 border border-slate-200 dark:border-white/[0.06] relative overflow-hidden",children:[b.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -mr-32 -mt-32"}),b.jsxs("div",{children:[b.jsxs("h2",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-6 flex items-center gap-2",children:[b.jsx(Xf,{size:16})," Why Trust Trezzo?"]}),b.jsxs("h3",{className:"text-3xl md:text-4xl font-serif font-medium text-slate-900 dark:text-white mb-6 leading-tight",children:["Independent. Analytical. ",b.jsx("br",{}),b.jsx("span",{className:"italic text-gold-500",children:"Uncompromising."})]}),b.jsx("p",{className:"text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8",children:"In an era of sponsored content and fleeting trends, Trezzo stands apart. Our team of financial analysts and travel strategists dissect the fine print so you don't have to. We don't just report the news; we calculate the ROI of your lifestyle."}),b.jsxs("div",{className:"flex flex-col gap-4",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-100 dark:bg-white/[0.06] flex items-center justify-center text-gold-500",children:b.jsx(Zn,{size:18})}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-serif font-medium text-slate-900 dark:text-white",children:"Data-Driven Strategy"}),b.jsx("p",{className:"text-xs text-slate-500 uppercase tracking-wide",children:"Mathematical approach to points & miles"})]})]}),b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gold-500",children:b.jsx(fh,{size:18})}),b.jsxs("div",{children:[b.jsx("h4",{className:"font-serif font-medium text-slate-900 dark:text-white",children:"Unbiased Reviews"}),b.jsx("p",{className:"text-xs text-slate-500 uppercase tracking-wide",children:"No paid placements, ever."})]})]})]})]}),b.jsxs("div",{className:"relative h-full min-h-[300px] border border-slate-200 dark:border-white/[0.08] p-2",children:[b.jsx("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent"}),b.jsxs("div",{className:"absolute bottom-8 left-8 right-8",children:[b.jsx("p",{className:"font-serif italic text-xl text-white mb-4",children:`"Trezzo has completely changed how I view my assets and my travel. It's not just a blog; it's a blueprint for a better life."`}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"w-8 h-8 rounded-full bg-gold-500"}),b.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-300",children:"Jonathan S., Wealth Manager"})]})]})]})]}),b.jsxs("section",{className:"text-center py-20 border-t border-slate-200 dark:border-white/[0.06]",children:[b.jsx(Zh,{size:32,className:"mx-auto text-gold-500 mb-6"}),b.jsxs("h2",{className:"text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white mb-6",children:["Join the ",b.jsx("span",{className:"italic",children:"Inner Circle"})]}),b.jsx("p",{className:"text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-10 font-light",children:"Get weekly briefings on credit card strategies, award chart devaluations, and investment opportunities before the masses."}),b.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 max-w-md mx-auto",children:[b.jsx("input",{type:"email",placeholder:"Enter your email address",className:"flex-1 px-6 py-4 bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-gold-500 focus:outline-none transition-colors rounded-sm"}),b.jsx("button",{className:"px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors rounded-sm",children:"Subscribe"})]}),b.jsx("p",{className:"text-[10px] text-slate-500 mt-4 uppercase tracking-widest",children:"We respect your privacy. Unsubscribe at any time."})]})]})};function Kg(){const[i,c]=R.useState(!0);return R.useEffect(()=>{const n=Date.now(),f=()=>{const p=Date.now()-n,k=Math.max(0,2e3-p);setTimeout(()=>{c(!1)},k)};if(document.readyState==="complete")f();else return window.addEventListener("load",f),()=>window.removeEventListener("load",f)},[]),b.jsxs(b.Fragment,{children:[b.jsx(Fg,{isLoading:i}),b.jsx("div",{className:`transition-opacity duration-1000 delay-300 ${i?"opacity-0":"opacity-100"}`,children:b.jsxs(Kx,{children:[b.jsx(Yg,{}),b.jsx(Cx,{children:b.jsxs(Ol,{path:"/",element:b.jsx(Gg,{}),children:[b.jsx(Ol,{index:!0,element:b.jsx(Qg,{})}),b.jsx(Ol,{path:"category/:categoryId",element:b.jsx(Vg,{})}),b.jsx(Ol,{path:"category/:categoryId/article/:articleId",element:b.jsx(Xg,{})}),b.jsx(Ol,{path:"*",element:b.jsx(wx,{to:"/",replace:!0})})]})})]})})]})}const Zf=document.getElementById("root");if(!Zf)throw new Error("Could not find root element to mount to");const Zg=Bp.createRoot(Zf);Zg.render(b.jsx(wp.StrictMode,{children:b.jsx(Kg,{})}));

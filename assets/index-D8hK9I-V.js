(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))n(m);new MutationObserver(m=>{for(const b of m)if(b.type==="childList")for(const v of b.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&n(v)}).observe(document,{childList:!0,subtree:!0});function u(m){const b={};return m.integrity&&(b.integrity=m.integrity),m.referrerPolicy&&(b.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?b.credentials="include":m.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function n(m){if(m.ep)return;m.ep=!0;const b=u(m);fetch(m.href,b)}})();function km(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Nn={exports:{}},Lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu;function kb(){if(Zu)return Lr;Zu=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function u(n,m,b){var v=null;if(b!==void 0&&(v=""+b),m.key!==void 0&&(v=""+m.key),"key"in m){b={};for(var C in m)C!=="key"&&(b[C]=m[C])}else b=m;return m=b.ref,{$$typeof:i,type:n,key:v,ref:m!==void 0?m:null,props:b}}return Lr.Fragment=c,Lr.jsx=u,Lr.jsxs=u,Lr}var Ju;function vb(){return Ju||(Ju=1,Nn.exports=kb()),Nn.exports}var p=vb(),Dn={exports:{}},K={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $u;function yb(){if($u)return K;$u=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),v=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),j=Symbol.iterator;function I(h){return h===null||typeof h!="object"?null:(h=j&&h[j]||h["@@iterator"],typeof h=="function"?h:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,q={};function Y(h,L,H){this.props=h,this.context=L,this.refs=q,this.updater=H||X}Y.prototype.isReactComponent={},Y.prototype.setState=function(h,L){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,L,"setState")},Y.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function te(){}te.prototype=Y.prototype;function O(h,L,H){this.props=h,this.context=L,this.refs=q,this.updater=H||X}var me=O.prototype=new te;me.constructor=O,W(me,Y.prototype),me.isPureReactComponent=!0;var Ae=Array.isArray;function He(){}var $={H:null,A:null,T:null,S:null},Oe=Object.prototype.hasOwnProperty;function Re(h,L,H){var _=H.ref;return{$$typeof:i,type:h,key:L,ref:_!==void 0?_:null,props:H}}function rt(h,L){return Re(h.type,L,h.props)}function lt(h){return typeof h=="object"&&h!==null&&h.$$typeof===i}function Ke(h){var L={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(H){return L[H]})}var za=/\/+/g;function Ft(h,L){return typeof h=="object"&&h!==null&&h.key!=null?Ke(""+h.key):L.toString(36)}function Et(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(He,He):(h.status="pending",h.then(function(L){h.status==="pending"&&(h.status="fulfilled",h.value=L)},function(L){h.status==="pending"&&(h.status="rejected",h.reason=L)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function B(h,L,H,_,Z){var ae=typeof h;(ae==="undefined"||ae==="boolean")&&(h=null);var ue=!1;if(h===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(h.$$typeof){case i:case c:ue=!0;break;case D:return ue=h._init,B(ue(h._payload),L,H,_,Z)}}if(ue)return Z=Z(h),ue=_===""?"."+Ft(h,0):_,Ae(Z)?(H="",ue!=null&&(H=ue.replace(za,"$&/")+"/"),B(Z,L,H,"",function(Gs){return Gs})):Z!=null&&(lt(Z)&&(Z=rt(Z,H+(Z.key==null||h&&h.key===Z.key?"":(""+Z.key).replace(za,"$&/")+"/")+ue)),L.push(Z)),1;ue=0;var We=_===""?".":_+":";if(Ae(h))for(var Be=0;Be<h.length;Be++)_=h[Be],ae=We+Ft(_,Be),ue+=B(_,L,H,ae,Z);else if(Be=I(h),typeof Be=="function")for(h=Be.call(h),Be=0;!(_=h.next()).done;)_=_.value,ae=We+Ft(_,Be++),ue+=B(_,L,H,ae,Z);else if(ae==="object"){if(typeof h.then=="function")return B(Et(h),L,H,_,Z);throw L=String(h),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ue}function U(h,L,H){if(h==null)return h;var _=[],Z=0;return B(h,_,"","",function(ae){return L.call(H,ae,Z++)}),_}function P(h){if(h._status===-1){var L=h._result;L=L(),L.then(function(H){(h._status===0||h._status===-1)&&(h._status=1,h._result=H)},function(H){(h._status===0||h._status===-1)&&(h._status=2,h._result=H)}),h._status===-1&&(h._status=0,h._result=L)}if(h._status===1)return h._result.default;throw h._result}var be=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)},ve={map:U,forEach:function(h,L,H){U(h,function(){L.apply(this,arguments)},H)},count:function(h){var L=0;return U(h,function(){L++}),L},toArray:function(h){return U(h,function(L){return L})||[]},only:function(h){if(!lt(h))throw Error("React.Children.only expected to receive a single React element child.");return h}};return K.Activity=M,K.Children=ve,K.Component=Y,K.Fragment=u,K.Profiler=m,K.PureComponent=O,K.StrictMode=n,K.Suspense=y,K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,K.__COMPILER_RUNTIME={__proto__:null,c:function(h){return $.H.useMemoCache(h)}},K.cache=function(h){return function(){return h.apply(null,arguments)}},K.cacheSignal=function(){return null},K.cloneElement=function(h,L,H){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var _=W({},h.props),Z=h.key;if(L!=null)for(ae in L.key!==void 0&&(Z=""+L.key),L)!Oe.call(L,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&L.ref===void 0||(_[ae]=L[ae]);var ae=arguments.length-2;if(ae===1)_.children=H;else if(1<ae){for(var ue=Array(ae),We=0;We<ae;We++)ue[We]=arguments[We+2];_.children=ue}return Re(h.type,Z,_)},K.createContext=function(h){return h={$$typeof:v,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:b,_context:h},h},K.createElement=function(h,L,H){var _,Z={},ae=null;if(L!=null)for(_ in L.key!==void 0&&(ae=""+L.key),L)Oe.call(L,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(Z[_]=L[_]);var ue=arguments.length-2;if(ue===1)Z.children=H;else if(1<ue){for(var We=Array(ue),Be=0;Be<ue;Be++)We[Be]=arguments[Be+2];Z.children=We}if(h&&h.defaultProps)for(_ in ue=h.defaultProps,ue)Z[_]===void 0&&(Z[_]=ue[_]);return Re(h,ae,Z)},K.createRef=function(){return{current:null}},K.forwardRef=function(h){return{$$typeof:C,render:h}},K.isValidElement=lt,K.lazy=function(h){return{$$typeof:D,_payload:{_status:-1,_result:h},_init:P}},K.memo=function(h,L){return{$$typeof:g,type:h,compare:L===void 0?null:L}},K.startTransition=function(h){var L=$.T,H={};$.T=H;try{var _=h(),Z=$.S;Z!==null&&Z(H,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(He,be)}catch(ae){be(ae)}finally{L!==null&&H.types!==null&&(L.types=H.types),$.T=L}},K.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},K.use=function(h){return $.H.use(h)},K.useActionState=function(h,L,H){return $.H.useActionState(h,L,H)},K.useCallback=function(h,L){return $.H.useCallback(h,L)},K.useContext=function(h){return $.H.useContext(h)},K.useDebugValue=function(){},K.useDeferredValue=function(h,L){return $.H.useDeferredValue(h,L)},K.useEffect=function(h,L){return $.H.useEffect(h,L)},K.useEffectEvent=function(h){return $.H.useEffectEvent(h)},K.useId=function(){return $.H.useId()},K.useImperativeHandle=function(h,L,H){return $.H.useImperativeHandle(h,L,H)},K.useInsertionEffect=function(h,L){return $.H.useInsertionEffect(h,L)},K.useLayoutEffect=function(h,L){return $.H.useLayoutEffect(h,L)},K.useMemo=function(h,L){return $.H.useMemo(h,L)},K.useOptimistic=function(h,L){return $.H.useOptimistic(h,L)},K.useReducer=function(h,L,H){return $.H.useReducer(h,L,H)},K.useRef=function(h){return $.H.useRef(h)},K.useState=function(h){return $.H.useState(h)},K.useSyncExternalStore=function(h,L,H){return $.H.useSyncExternalStore(h,L,H)},K.useTransition=function(){return $.H.useTransition()},K.version="19.2.0",K}var em;function Gn(){return em||(em=1,Dn.exports=yb()),Dn.exports}var R=Gn();const wb=km(R);var zn={exports:{}},jr={},Ln={exports:{}},jn={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Tb(){return tm||(tm=1,(function(i){function c(B,U){var P=B.length;B.push(U);e:for(;0<P;){var be=P-1>>>1,ve=B[be];if(0<m(ve,U))B[be]=U,B[P]=ve,P=be;else break e}}function u(B){return B.length===0?null:B[0]}function n(B){if(B.length===0)return null;var U=B[0],P=B.pop();if(P!==U){B[0]=P;e:for(var be=0,ve=B.length,h=ve>>>1;be<h;){var L=2*(be+1)-1,H=B[L],_=L+1,Z=B[_];if(0>m(H,P))_<ve&&0>m(Z,H)?(B[be]=Z,B[_]=P,be=_):(B[be]=H,B[L]=P,be=L);else if(_<ve&&0>m(Z,P))B[be]=Z,B[_]=P,be=_;else break e}}return U}function m(B,U){var P=B.sortIndex-U.sortIndex;return P!==0?P:B.id-U.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;i.unstable_now=function(){return b.now()}}else{var v=Date,C=v.now();i.unstable_now=function(){return v.now()-C}}var y=[],g=[],D=1,M=null,j=3,I=!1,X=!1,W=!1,q=!1,Y=typeof setTimeout=="function"?setTimeout:null,te=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function me(B){for(var U=u(g);U!==null;){if(U.callback===null)n(g);else if(U.startTime<=B)n(g),U.sortIndex=U.expirationTime,c(y,U);else break;U=u(g)}}function Ae(B){if(W=!1,me(B),!X)if(u(y)!==null)X=!0,He||(He=!0,Ke());else{var U=u(g);U!==null&&Et(Ae,U.startTime-B)}}var He=!1,$=-1,Oe=5,Re=-1;function rt(){return q?!0:!(i.unstable_now()-Re<Oe)}function lt(){if(q=!1,He){var B=i.unstable_now();Re=B;var U=!0;try{e:{X=!1,W&&(W=!1,te($),$=-1),I=!0;var P=j;try{t:{for(me(B),M=u(y);M!==null&&!(M.expirationTime>B&&rt());){var be=M.callback;if(typeof be=="function"){M.callback=null,j=M.priorityLevel;var ve=be(M.expirationTime<=B);if(B=i.unstable_now(),typeof ve=="function"){M.callback=ve,me(B),U=!0;break t}M===u(y)&&n(y),me(B)}else n(y);M=u(y)}if(M!==null)U=!0;else{var h=u(g);h!==null&&Et(Ae,h.startTime-B),U=!1}}break e}finally{M=null,j=P,I=!1}U=void 0}}finally{U?Ke():He=!1}}}var Ke;if(typeof O=="function")Ke=function(){O(lt)};else if(typeof MessageChannel<"u"){var za=new MessageChannel,Ft=za.port2;za.port1.onmessage=lt,Ke=function(){Ft.postMessage(null)}}else Ke=function(){Y(lt,0)};function Et(B,U){$=Y(function(){B(i.unstable_now())},U)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(B){B.callback=null},i.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oe=0<B?Math.floor(1e3/B):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_next=function(B){switch(j){case 1:case 2:case 3:var U=3;break;default:U=j}var P=j;j=U;try{return B()}finally{j=P}},i.unstable_requestPaint=function(){q=!0},i.unstable_runWithPriority=function(B,U){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var P=j;j=B;try{return U()}finally{j=P}},i.unstable_scheduleCallback=function(B,U,P){var be=i.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?be+P:be):P=be,B){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=P+ve,B={id:D++,callback:U,priorityLevel:B,startTime:P,expirationTime:ve,sortIndex:-1},P>be?(B.sortIndex=P,c(g,B),u(y)===null&&B===u(g)&&(W?(te($),$=-1):W=!0,Et(Ae,P-be))):(B.sortIndex=ve,c(y,B),X||I||(X=!0,He||(He=!0,Ke()))),B},i.unstable_shouldYield=rt,i.unstable_wrapCallback=function(B){var U=j;return function(){var P=j;j=U;try{return B.apply(this,arguments)}finally{j=P}}}})(jn)),jn}var am;function Sb(){return am||(am=1,Ln.exports=Tb()),Ln.exports}var Un={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Cb(){if(sm)return Qe;sm=1;var i=Gn();function c(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)g+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var n={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},m=Symbol.for("react.portal");function b(y,g,D){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:M==null?null:""+M,children:y,containerInfo:g,implementation:D}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,Qe.createPortal=function(y,g){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(c(299));return b(y,g,null,D)},Qe.flushSync=function(y){var g=v.T,D=n.p;try{if(v.T=null,n.p=2,y)return y()}finally{v.T=g,n.p=D,n.d.f()}},Qe.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,n.d.C(y,g))},Qe.prefetchDNS=function(y){typeof y=="string"&&n.d.D(y)},Qe.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var D=g.as,M=C(D,g.crossOrigin),j=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;D==="style"?n.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:M,integrity:j,fetchPriority:I}):D==="script"&&n.d.X(y,{crossOrigin:M,integrity:j,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Qe.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var D=C(g.as,g.crossOrigin);n.d.M(y,{crossOrigin:D,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&n.d.M(y)},Qe.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var D=g.as,M=C(D,g.crossOrigin);n.d.L(y,D,{crossOrigin:M,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Qe.preloadModule=function(y,g){if(typeof y=="string")if(g){var D=C(g.as,g.crossOrigin);n.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:D,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else n.d.m(y)},Qe.requestFormReset=function(y){n.d.r(y)},Qe.unstable_batchedUpdates=function(y,g){return y(g)},Qe.useFormState=function(y,g,D){return v.H.useFormState(y,g,D)},Qe.useFormStatus=function(){return v.H.useHostTransitionStatus()},Qe.version="19.2.0",Qe}var rm;function Ab(){if(rm)return Un.exports;rm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Un.exports=Cb(),Un.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Rb(){if(lm)return jr;lm=1;var i=Sb(),c=Gn(),u=Ab();function n(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function v(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(b(e)!==e)throw Error(n(188))}function g(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(n(188));return t!==e?null:e}for(var a=e,s=t;;){var r=a.return;if(r===null)break;var l=r.alternate;if(l===null){if(s=r.return,s!==null){a=s;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===a)return y(r),e;if(l===s)return y(r),t;l=l.sibling}throw Error(n(188))}if(a.return!==s.return)a=r,s=l;else{for(var o=!1,d=r.child;d;){if(d===a){o=!0,a=r,s=l;break}if(d===s){o=!0,s=r,a=l;break}d=d.sibling}if(!o){for(d=l.child;d;){if(d===a){o=!0,a=l,s=r;break}if(d===s){o=!0,s=l,a=r;break}d=d.sibling}if(!o)throw Error(n(189))}}if(a.alternate!==s)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,j=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),te=Symbol.for("react.consumer"),O=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),Re=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var za=Symbol.for("react.client.reference");function Ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===za?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case Y:return"Profiler";case q:return"StrictMode";case Ae:return"Suspense";case He:return"SuspenseList";case Re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case O:return e.displayName||"Context";case te:return(e._context.displayName||"Context")+".Consumer";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:Ft(e.type)||"Memo";case Oe:t=e._payload,e=e._init;try{return Ft(e(t))}catch{}}return null}var Et=Array.isArray,B=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},be=[],ve=-1;function h(e){return{current:e}}function L(e){0>ve||(e.current=be[ve],be[ve]=null,ve--)}function H(e,t){ve++,be[ve]=e.current,e.current=t}var _=h(null),Z=h(null),ae=h(null),ue=h(null);function We(e,t){switch(H(ae,t),H(Z,e),H(_,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?vu(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=vu(t),e=yu(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(_),H(_,e)}function Be(){L(_),L(Z),L(ae)}function Gs(e){e.memoizedState!==null&&H(ue,e);var t=_.current,a=yu(t,e.type);t!==a&&(H(Z,e),H(_,a))}function _r(e){Z.current===e&&(L(_),L(Z)),ue.current===e&&(L(ue),Br._currentValue=P)}var ui,Kn;function La(e){if(ui===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||"",Kn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ui+e+Kn}var mi=!1;function fi(e,t){if(!e||mi)return"";mi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(A){var S=A}Reflect.construct(e,[],z)}else{try{z.call()}catch(A){S=A}e.call(z.prototype)}}else{try{throw Error()}catch(A){S=A}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(A){if(A&&S&&typeof A.stack=="string")return[A.stack,S.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=s.DetermineComponentFrameRoot(),o=l[0],d=l[1];if(o&&d){var f=o.split(`
`),T=d.split(`
`);for(r=s=0;s<f.length&&!f[s].includes("DetermineComponentFrameRoot");)s++;for(;r<T.length&&!T[r].includes("DetermineComponentFrameRoot");)r++;if(s===f.length||r===T.length)for(s=f.length-1,r=T.length-1;1<=s&&0<=r&&f[s]!==T[r];)r--;for(;1<=s&&0<=r;s--,r--)if(f[s]!==T[r]){if(s!==1||r!==1)do if(s--,r--,0>r||f[s]!==T[r]){var E=`
`+f[s].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=s&&0<=r);break}}}finally{mi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?La(a):""}function Pm(e,t){switch(e.tag){case 26:case 27:case 5:return La(e.type);case 16:return La("Lazy");case 13:return e.child!==t&&t!==null?La("Suspense Fallback"):La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return fi(e.type,!1);case 11:return fi(e.type.render,!1);case 1:return fi(e.type,!0);case 31:return La("Activity");default:return""}}function Zn(e){try{var t="",a=null;do t+=Pm(e,a),a=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var pi=Object.prototype.hasOwnProperty,bi=i.unstable_scheduleCallback,xi=i.unstable_cancelCallback,Km=i.unstable_shouldYield,Zm=i.unstable_requestPaint,it=i.unstable_now,Jm=i.unstable_getCurrentPriorityLevel,Jn=i.unstable_ImmediatePriority,$n=i.unstable_UserBlockingPriority,Gr=i.unstable_NormalPriority,$m=i.unstable_LowPriority,ed=i.unstable_IdlePriority,ef=i.log,tf=i.unstable_setDisableYieldValue,qs=null,ot=null;function oa(e){if(typeof ef=="function"&&tf(e),ot&&typeof ot.setStrictMode=="function")try{ot.setStrictMode(qs,e)}catch{}}var nt=Math.clz32?Math.clz32:rf,af=Math.log,sf=Math.LN2;function rf(e){return e>>>=0,e===0?32:31-(af(e)/sf|0)|0}var qr=256,Ir=262144,Yr=4194304;function ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vr(e,t,a){var s=e.pendingLanes;if(s===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var d=s&134217727;return d!==0?(s=d&~l,s!==0?r=ja(s):(o&=d,o!==0?r=ja(o):a||(a=d&~e,a!==0&&(r=ja(a))))):(d=s&~l,d!==0?r=ja(d):o!==0?r=ja(o):a||(a=s&~e,a!==0&&(r=ja(a)))),r===0?0:t!==0&&t!==r&&(t&l)===0&&(l=r&-r,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:r}function Is(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(){var e=Yr;return Yr<<=1,(Yr&62914560)===0&&(Yr=4194304),e}function gi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ys(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function of(e,t,a,s,r,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var d=e.entanglements,f=e.expirationTimes,T=e.hiddenUpdates;for(a=o&~a;0<a;){var E=31-nt(a),z=1<<E;d[E]=0,f[E]=-1;var S=T[E];if(S!==null)for(T[E]=null,E=0;E<S.length;E++){var A=S[E];A!==null&&(A.lane&=-536870913)}a&=~z}s!==0&&ad(e,s,0),l!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function ad(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-nt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function sd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var s=31-nt(a),r=1<<s;r&t|e[s]&t&&(e[s]|=t),a&=~r}}function rd(e,t){var a=t&-t;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|t))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ki(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ld(){var e=U.p;return e!==0?e:(e=window.event,e===void 0?32:Yu(e.type))}function id(e,t){var a=U.p;try{return U.p=e,t()}finally{U.p=a}}var na=Math.random().toString(36).slice(2),qe="__reactFiber$"+na,Ze="__reactProps$"+na,es="__reactContainer$"+na,vi="__reactEvents$"+na,nf="__reactListeners$"+na,df="__reactHandles$"+na,od="__reactResources$"+na,Vs="__reactMarker$"+na;function yi(e){delete e[qe],delete e[Ze],delete e[vi],delete e[nf],delete e[df]}function ts(e){var t=e[qe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[es]||a[qe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Mu(e);e!==null;){if(a=e[qe])return a;e=Mu(e)}return t}e=a,a=e.parentNode}return null}function as(e){if(e=e[qe]||e[es]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xs(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(n(33))}function ss(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function _e(e){e[Vs]=!0}var nd=new Set,dd={};function Ua(e,t){rs(e,t),rs(e+"Capture",t)}function rs(e,t){for(dd[e]=t,e=0;e<t.length;e++)nd.add(t[e])}var cf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cd={},ud={};function uf(e){return pi.call(ud,e)?!0:pi.call(cd,e)?!1:cf.test(e)?ud[e]=!0:(cd[e]=!0,!1)}function Xr(e,t,a){if(uf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Qr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+s)}}function gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mf(e,t,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,l=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){if(!e._valueTracker){var t=md(e)?"checked":"value";e._valueTracker=mf(e,t,""+e[t])}}function fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),s="";return e&&(s=md(e)?e.checked?"true":"false":e.value),e=s,e!==a?(t.setValue(e),!0):!1}function Wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ff=/[\n"\\]/g;function ht(e){return e.replace(ff,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ti(e,t,a,s,r,l,o,d){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+gt(t)):e.value!==""+gt(t)&&(e.value=""+gt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Si(e,o,gt(t)):a!=null?Si(e,o,gt(a)):s!=null&&e.removeAttribute("value"),r==null&&l!=null&&(e.defaultChecked=!!l),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+gt(d):e.removeAttribute("name")}function pd(e,t,a,s,r,l,o,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){wi(e);return}a=a!=null?""+gt(a):"",t=t!=null?""+gt(t):a,d||t===e.value||(e.value=t),e.defaultValue=t}s=s??r,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=d?e.checked:!!s,e.defaultChecked=!!s,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),wi(e)}function Si(e,t,a){t==="number"&&Wr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ls(e,t,a,s){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&s&&(e[a].defaultSelected=!0)}else{for(a=""+gt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function bd(e,t,a){if(t!=null&&(t=""+gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+gt(a):""}function xd(e,t,a,s){if(t==null){if(s!=null){if(a!=null)throw Error(n(92));if(Et(s)){if(1<s.length)throw Error(n(93));s=s[0]}a=s}a==null&&(a=""),t=a}a=gt(t),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),wi(e)}function is(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var pf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(e,t,a){var s=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,a):typeof a!="number"||a===0||pf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function hd(e,t,a){if(t!=null&&typeof t!="object")throw Error(n(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var r in t)s=t[r],t.hasOwnProperty(r)&&a[r]!==s&&gd(e,r,s)}else for(var l in t)t.hasOwnProperty(l)&&gd(e,l,t[l])}function Ci(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pr(e){return xf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gt(){}var Ai=null;function Ri(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var os=null,ns=null;function kd(e){var t=as(e);if(t&&(e=t.stateNode)){var a=e[Ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ti(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var s=a[t];if(s!==e&&s.form===e.form){var r=s[Ze]||null;if(!r)throw Error(n(90));Ti(s,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)s=a[t],s.form===e.form&&fd(s)}break e;case"textarea":bd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ls(e,!!a.multiple,t,!1)}}}var Mi=!1;function vd(e,t,a){if(Mi)return e(t,a);Mi=!0;try{var s=e(t);return s}finally{if(Mi=!1,(os!==null||ns!==null)&&(Ul(),os&&(t=os,e=ns,ns=os=null,kd(t),e)))for(t=0;t<e.length;t++)kd(e[t])}}function Qs(e,t){var a=e.stateNode;if(a===null)return null;var s=a[Ze]||null;if(s===null)return null;a=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(n(231,t,typeof a));return a}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ei=!1;if(qt)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){Ei=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{Ei=!1}var da=null,Bi=null,Kr=null;function yd(){if(Kr)return Kr;var e,t=Bi,a=t.length,s,r="value"in da?da.value:da.textContent,l=r.length;for(e=0;e<a&&t[e]===r[e];e++);var o=a-e;for(s=1;s<=o&&t[a-s]===r[l-s];s++);return Kr=r.slice(e,1<s?1-s:void 0)}function Zr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function wd(){return!1}function Je(e){function t(a,s,r,l,o){this._reactName=a,this._targetInst=r,this.type=s,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Jr:wd,this.isPropagationStopped=wd,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$r=Je(Ha),Ps=M({},Ha,{view:0,detail:0}),gf=Je(Ps),Ni,Di,Ks,el=M({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ks&&(Ks&&e.type==="mousemove"?(Ni=e.screenX-Ks.screenX,Di=e.screenY-Ks.screenY):Di=Ni=0,Ks=e),Ni)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),Td=Je(el),hf=M({},el,{dataTransfer:0}),kf=Je(hf),vf=M({},Ps,{relatedTarget:0}),zi=Je(vf),yf=M({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),wf=Je(yf),Tf=M({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=Je(Tf),Cf=M({},Ha,{data:0}),Sd=Je(Cf),Af={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Mf[e])?!!t[e]:!1}function Li(){return Ef}var Bf=M({},Ps,{key:function(e){if(e.key){var t=Af[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Li,charCode:function(e){return e.type==="keypress"?Zr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nf=Je(Bf),Df=M({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Je(Df),zf=M({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Li}),Lf=Je(zf),jf=M({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uf=Je(jf),Hf=M({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Of=Je(Hf),Ff=M({},Ha,{newState:0,oldState:0}),_f=Je(Ff),Gf=[9,13,27,32],ji=qt&&"CompositionEvent"in window,Zs=null;qt&&"documentMode"in document&&(Zs=document.documentMode);var qf=qt&&"TextEvent"in window&&!Zs,Ad=qt&&(!ji||Zs&&8<Zs&&11>=Zs),Rd=" ",Md=!1;function Ed(e,t){switch(e){case"keyup":return Gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function If(e,t){switch(e){case"compositionend":return Bd(t);case"keypress":return t.which!==32?null:(Md=!0,Rd);case"textInput":return e=t.data,e===Rd&&Md?null:e;default:return null}}function Yf(e,t){if(ds)return e==="compositionend"||!ji&&Ed(e,t)?(e=yd(),Kr=Bi=da=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ad&&t.locale!=="ko"?null:t.data;default:return null}}var Vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vf[e.type]:t==="textarea"}function Dd(e,t,a,s){os?ns?ns.push(s):ns=[s]:os=s,t=Il(t,"onChange"),0<t.length&&(a=new $r("onChange","change",null,a,s),e.push({event:a,listeners:t}))}var Js=null,$s=null;function Xf(e){pu(e,0)}function tl(e){var t=Xs(e);if(fd(t))return e}function zd(e,t){if(e==="change")return t}var Ld=!1;if(qt){var Ui;if(qt){var Hi="oninput"in document;if(!Hi){var jd=document.createElement("div");jd.setAttribute("oninput","return;"),Hi=typeof jd.oninput=="function"}Ui=Hi}else Ui=!1;Ld=Ui&&(!document.documentMode||9<document.documentMode)}function Ud(){Js&&(Js.detachEvent("onpropertychange",Hd),$s=Js=null)}function Hd(e){if(e.propertyName==="value"&&tl($s)){var t=[];Dd(t,$s,e,Ri(e)),vd(Xf,t)}}function Qf(e,t,a){e==="focusin"?(Ud(),Js=t,$s=a,Js.attachEvent("onpropertychange",Hd)):e==="focusout"&&Ud()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl($s)}function Pf(e,t){if(e==="click")return tl(t)}function Kf(e,t){if(e==="input"||e==="change")return tl(t)}function Zf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Zf;function er(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),s=Object.keys(t);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var r=a[s];if(!pi.call(t,r)||!dt(e[r],t[r]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fd(e,t){var a=Od(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=t&&s>=t)return{node:a,offset:t-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Od(a)}}function _d(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_d(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Wr(e.document)}return t}function Oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Jf=qt&&"documentMode"in document&&11>=document.documentMode,cs=null,Fi=null,tr=null,_i=!1;function qd(e,t,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_i||cs==null||cs!==Wr(s)||(s=cs,"selectionStart"in s&&Oi(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),tr&&er(tr,s)||(tr=s,s=Il(Fi,"onSelect"),0<s.length&&(t=new $r("onSelect","select",null,t,a),e.push({event:t,listeners:s}),t.target=cs)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var us={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},Gi={},Id={};qt&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Fa(e){if(Gi[e])return Gi[e];if(!us[e])return e;var t=us[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Id)return Gi[e]=t[a];return e}var Yd=Fa("animationend"),Vd=Fa("animationiteration"),Xd=Fa("animationstart"),$f=Fa("transitionrun"),ep=Fa("transitionstart"),tp=Fa("transitioncancel"),Qd=Fa("transitionend"),Wd=new Map,qi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qi.push("scrollEnd");function Bt(e,t){Wd.set(e,t),Ua(t,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],ms=0,Ii=0;function sl(){for(var e=ms,t=Ii=ms=0;t<e;){var a=kt[t];kt[t++]=null;var s=kt[t];kt[t++]=null;var r=kt[t];kt[t++]=null;var l=kt[t];if(kt[t++]=null,s!==null&&r!==null){var o=s.pending;o===null?r.next=r:(r.next=o.next,o.next=r),s.pending=r}l!==0&&Pd(a,r,l)}}function rl(e,t,a,s){kt[ms++]=e,kt[ms++]=t,kt[ms++]=a,kt[ms++]=s,Ii|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Yi(e,t,a,s){return rl(e,t,a,s),ll(e)}function _a(e,t){return rl(e,null,null,t),ll(e)}function Pd(e,t,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var r=!1,l=e.return;l!==null;)l.childLanes|=a,s=l.alternate,s!==null&&(s.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(r=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,r&&t!==null&&(r=31-nt(a),e=l.hiddenUpdates,s=e[r],s===null?e[r]=[t]:s.push(t),t.lane=a|536870912),l):null}function ll(e){if(50<Tr)throw Tr=0,en=null,Error(n(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fs={};function ap(e,t,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,s){return new ap(e,t,a,s)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function It(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function il(e,t,a,s,r,l){var o=0;if(s=e,typeof e=="function")Vi(e)&&(o=1);else if(typeof e=="string")o=ob(e,a,_.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Re:return e=ct(31,a,t,r),e.elementType=Re,e.lanes=l,e;case W:return Ga(a.children,r,l,t);case q:o=8,r|=24;break;case Y:return e=ct(12,a,t,r|2),e.elementType=Y,e.lanes=l,e;case Ae:return e=ct(13,a,t,r),e.elementType=Ae,e.lanes=l,e;case He:return e=ct(19,a,t,r),e.elementType=He,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:o=10;break e;case te:o=9;break e;case me:o=11;break e;case $:o=14;break e;case Oe:o=16,s=null;break e}o=29,a=Error(n(130,e===null?"null":typeof e,"")),s=null}return t=ct(o,a,t,r),t.elementType=e,t.type=s,t.lanes=l,t}function Ga(e,t,a,s){return e=ct(7,e,s,t),e.lanes=a,e}function Xi(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function Zd(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function Qi(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jd=new WeakMap;function vt(e,t){if(typeof e=="object"&&e!==null){var a=Jd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Zn(t)},Jd.set(e,t),t)}return{value:e,source:t,stack:Zn(t)}}var ps=[],bs=0,ol=null,ar=0,yt=[],wt=0,ca=null,jt=1,Ut="";function Yt(e,t){ps[bs++]=ar,ps[bs++]=ol,ol=e,ar=t}function $d(e,t,a){yt[wt++]=jt,yt[wt++]=Ut,yt[wt++]=ca,ca=e;var s=jt;e=Ut;var r=32-nt(s)-1;s&=~(1<<r),a+=1;var l=32-nt(t)+r;if(30<l){var o=r-r%5;l=(s&(1<<o)-1).toString(32),s>>=o,r-=o,jt=1<<32-nt(t)+r|a<<r|s,Ut=l+e}else jt=1<<l|a<<r|s,Ut=e}function Wi(e){e.return!==null&&(Yt(e,1),$d(e,1,0))}function Pi(e){for(;e===ol;)ol=ps[--bs],ps[bs]=null,ar=ps[--bs],ps[bs]=null;for(;e===ca;)ca=yt[--wt],yt[wt]=null,Ut=yt[--wt],yt[wt]=null,jt=yt[--wt],yt[wt]=null}function e0(e,t){yt[wt++]=jt,yt[wt++]=Ut,yt[wt++]=ca,jt=t.id,Ut=t.overflow,ca=e}var Ie=null,we=null,oe=!1,ua=null,Tt=!1,Ki=Error(n(519));function ma(e){var t=Error(n(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw sr(vt(t,e)),Ki}function t0(e){var t=e.stateNode,a=e.type,s=e.memoizedProps;switch(t[qe]=e,t[Ze]=s,a){case"dialog":re("cancel",t),re("close",t);break;case"iframe":case"object":case"embed":re("load",t);break;case"video":case"audio":for(a=0;a<Cr.length;a++)re(Cr[a],t);break;case"source":re("error",t);break;case"img":case"image":case"link":re("error",t),re("load",t);break;case"details":re("toggle",t);break;case"input":re("invalid",t),pd(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":re("invalid",t);break;case"textarea":re("invalid",t),xd(t,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||s.suppressHydrationWarning===!0||hu(t.textContent,a)?(s.popover!=null&&(re("beforetoggle",t),re("toggle",t)),s.onScroll!=null&&re("scroll",t),s.onScrollEnd!=null&&re("scrollend",t),s.onClick!=null&&(t.onclick=Gt),t=!0):t=!1,t||ma(e,!0)}function a0(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ie=Ie.return}}function xs(e){if(e!==Ie)return!1;if(!oe)return a0(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xn(e.type,e.memoizedProps)),a=!a),a&&we&&ma(e),a0(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));we=Ru(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));we=Ru(e)}else t===27?(t=we,Aa(e.type)?(e=yn,yn=null,we=e):we=t):we=Ie?Ct(e.stateNode.nextSibling):null;return!0}function qa(){we=Ie=null,oe=!1}function Zi(){var e=ua;return e!==null&&(at===null?at=e:at.push.apply(at,e),ua=null),e}function sr(e){ua===null?ua=[e]:ua.push(e)}var Ji=h(null),Ia=null,Vt=null;function fa(e,t,a){H(Ji,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=Ji.current,L(Ji)}function $i(e,t,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===a)break;e=e.return}}function eo(e,t,a,s){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var l=r.dependencies;if(l!==null){var o=r.child;l=l.firstContext;e:for(;l!==null;){var d=l;l=r;for(var f=0;f<t.length;f++)if(d.context===t[f]){l.lanes|=a,d=l.alternate,d!==null&&(d.lanes|=a),$i(l.return,a,e),s||(o=null);break e}l=d.next}}else if(r.tag===18){if(o=r.return,o===null)throw Error(n(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),$i(o,a,e),o=null}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}}function gs(e,t,a,s){e=null;for(var r=t,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var o=r.alternate;if(o===null)throw Error(n(387));if(o=o.memoizedProps,o!==null){var d=r.type;dt(r.pendingProps.value,o.value)||(e!==null?e.push(d):e=[d])}}else if(r===ue.current){if(o=r.alternate,o===null)throw Error(n(387));o.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Br):e=[Br])}r=r.return}e!==null&&eo(t,e,a,s),t.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ya(e){Ia=e,Vt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ye(e){return s0(Ia,e)}function dl(e,t){return Ia===null&&Ya(e),s0(e,t)}function s0(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Vt===null){if(e===null)throw Error(n(308));Vt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Vt=Vt.next=t;return a}var sp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},rp=i.unstable_scheduleCallback,lp=i.unstable_NormalPriority,ze={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new sp,data:new Map,refCount:0}}function rr(e){e.refCount--,e.refCount===0&&rp(lp,function(){e.controller.abort()})}var lr=null,ao=0,hs=0,ks=null;function ip(e,t){if(lr===null){var a=lr=[];ao=0,hs=on(),ks={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ao++,t.then(r0,r0),t}function r0(){if(--ao===0&&lr!==null){ks!==null&&(ks.status="fulfilled");var e=lr;lr=null,hs=0,ks=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function op(e,t){var a=[],s={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(s.status="rejected",s.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),s}var l0=B.S;B.S=function(e,t){qc=it(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&ip(e,t),l0!==null&&l0(e,t)};var Va=h(null);function so(){var e=Va.current;return e!==null?e:ye.pooledCache}function cl(e,t){t===null?H(Va,Va.current):H(Va,t.pool)}function i0(){var e=so();return e===null?null:{parent:ze._currentValue,pool:e}}var vs=Error(n(460)),ro=Error(n(474)),ul=Error(n(542)),ml={then:function(){}};function o0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function n0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Gt,Gt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,c0(e),e;default:if(typeof t.status=="string")t.then(Gt,Gt);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(n(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=s}},function(s){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,c0(e),e}throw Qa=t,vs}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,vs):a}}var Qa=null;function d0(){if(Qa===null)throw Error(n(459));var e=Qa;return Qa=null,e}function c0(e){if(e===vs||e===ul)throw Error(n(483))}var ys=null,ir=0;function fl(e){var t=ir;return ir+=1,ys===null&&(ys=[]),n0(ys,e,t)}function or(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pl(e,t){throw t.$$typeof===j?Error(n(525)):(e=Object.prototype.toString.call(t),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function u0(e){function t(k,x){if(e){var w=k.deletions;w===null?(k.deletions=[x],k.flags|=16):w.push(x)}}function a(k,x){if(!e)return null;for(;x!==null;)t(k,x),x=x.sibling;return null}function s(k){for(var x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function r(k,x){return k=It(k,x),k.index=0,k.sibling=null,k}function l(k,x,w){return k.index=w,e?(w=k.alternate,w!==null?(w=w.index,w<x?(k.flags|=67108866,x):w):(k.flags|=67108866,x)):(k.flags|=1048576,x)}function o(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function d(k,x,w,N){return x===null||x.tag!==6?(x=Xi(w,k.mode,N),x.return=k,x):(x=r(x,w),x.return=k,x)}function f(k,x,w,N){var V=w.type;return V===W?E(k,x,w.props.children,N,w.key):x!==null&&(x.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Oe&&Xa(V)===x.type)?(x=r(x,w.props),or(x,w),x.return=k,x):(x=il(w.type,w.key,w.props,null,k.mode,N),or(x,w),x.return=k,x)}function T(k,x,w,N){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=Qi(w,k.mode,N),x.return=k,x):(x=r(x,w.children||[]),x.return=k,x)}function E(k,x,w,N,V){return x===null||x.tag!==7?(x=Ga(w,k.mode,N,V),x.return=k,x):(x=r(x,w),x.return=k,x)}function z(k,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Xi(""+x,k.mode,w),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case I:return w=il(x.type,x.key,x.props,null,k.mode,w),or(w,x),w.return=k,w;case X:return x=Qi(x,k.mode,w),x.return=k,x;case Oe:return x=Xa(x),z(k,x,w)}if(Et(x)||Ke(x))return x=Ga(x,k.mode,w,null),x.return=k,x;if(typeof x.then=="function")return z(k,fl(x),w);if(x.$$typeof===O)return z(k,dl(k,x),w);pl(k,x)}return null}function S(k,x,w,N){var V=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return V!==null?null:d(k,x,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case I:return w.key===V?f(k,x,w,N):null;case X:return w.key===V?T(k,x,w,N):null;case Oe:return w=Xa(w),S(k,x,w,N)}if(Et(w)||Ke(w))return V!==null?null:E(k,x,w,N,null);if(typeof w.then=="function")return S(k,x,fl(w),N);if(w.$$typeof===O)return S(k,x,dl(k,w),N);pl(k,w)}return null}function A(k,x,w,N,V){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return k=k.get(w)||null,d(x,k,""+N,V);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case I:return k=k.get(N.key===null?w:N.key)||null,f(x,k,N,V);case X:return k=k.get(N.key===null?w:N.key)||null,T(x,k,N,V);case Oe:return N=Xa(N),A(k,x,w,N,V)}if(Et(N)||Ke(N))return k=k.get(w)||null,E(x,k,N,V,null);if(typeof N.then=="function")return A(k,x,w,fl(N),V);if(N.$$typeof===O)return A(k,x,w,dl(x,N),V);pl(x,N)}return null}function F(k,x,w,N){for(var V=null,ne=null,G=x,ee=x=0,ie=null;G!==null&&ee<w.length;ee++){G.index>ee?(ie=G,G=null):ie=G.sibling;var de=S(k,G,w[ee],N);if(de===null){G===null&&(G=ie);break}e&&G&&de.alternate===null&&t(k,G),x=l(de,x,ee),ne===null?V=de:ne.sibling=de,ne=de,G=ie}if(ee===w.length)return a(k,G),oe&&Yt(k,ee),V;if(G===null){for(;ee<w.length;ee++)G=z(k,w[ee],N),G!==null&&(x=l(G,x,ee),ne===null?V=G:ne.sibling=G,ne=G);return oe&&Yt(k,ee),V}for(G=s(G);ee<w.length;ee++)ie=A(G,k,ee,w[ee],N),ie!==null&&(e&&ie.alternate!==null&&G.delete(ie.key===null?ee:ie.key),x=l(ie,x,ee),ne===null?V=ie:ne.sibling=ie,ne=ie);return e&&G.forEach(function(Na){return t(k,Na)}),oe&&Yt(k,ee),V}function Q(k,x,w,N){if(w==null)throw Error(n(151));for(var V=null,ne=null,G=x,ee=x=0,ie=null,de=w.next();G!==null&&!de.done;ee++,de=w.next()){G.index>ee?(ie=G,G=null):ie=G.sibling;var Na=S(k,G,de.value,N);if(Na===null){G===null&&(G=ie);break}e&&G&&Na.alternate===null&&t(k,G),x=l(Na,x,ee),ne===null?V=Na:ne.sibling=Na,ne=Na,G=ie}if(de.done)return a(k,G),oe&&Yt(k,ee),V;if(G===null){for(;!de.done;ee++,de=w.next())de=z(k,de.value,N),de!==null&&(x=l(de,x,ee),ne===null?V=de:ne.sibling=de,ne=de);return oe&&Yt(k,ee),V}for(G=s(G);!de.done;ee++,de=w.next())de=A(G,k,ee,de.value,N),de!==null&&(e&&de.alternate!==null&&G.delete(de.key===null?ee:de.key),x=l(de,x,ee),ne===null?V=de:ne.sibling=de,ne=de);return e&&G.forEach(function(hb){return t(k,hb)}),oe&&Yt(k,ee),V}function he(k,x,w,N){if(typeof w=="object"&&w!==null&&w.type===W&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case I:e:{for(var V=w.key;x!==null;){if(x.key===V){if(V=w.type,V===W){if(x.tag===7){a(k,x.sibling),N=r(x,w.props.children),N.return=k,k=N;break e}}else if(x.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Oe&&Xa(V)===x.type){a(k,x.sibling),N=r(x,w.props),or(N,w),N.return=k,k=N;break e}a(k,x);break}else t(k,x);x=x.sibling}w.type===W?(N=Ga(w.props.children,k.mode,N,w.key),N.return=k,k=N):(N=il(w.type,w.key,w.props,null,k.mode,N),or(N,w),N.return=k,k=N)}return o(k);case X:e:{for(V=w.key;x!==null;){if(x.key===V)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){a(k,x.sibling),N=r(x,w.children||[]),N.return=k,k=N;break e}else{a(k,x);break}else t(k,x);x=x.sibling}N=Qi(w,k.mode,N),N.return=k,k=N}return o(k);case Oe:return w=Xa(w),he(k,x,w,N)}if(Et(w))return F(k,x,w,N);if(Ke(w)){if(V=Ke(w),typeof V!="function")throw Error(n(150));return w=V.call(w),Q(k,x,w,N)}if(typeof w.then=="function")return he(k,x,fl(w),N);if(w.$$typeof===O)return he(k,x,dl(k,w),N);pl(k,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(a(k,x.sibling),N=r(x,w),N.return=k,k=N):(a(k,x),N=Xi(w,k.mode,N),N.return=k,k=N),o(k)):a(k,x)}return function(k,x,w,N){try{ir=0;var V=he(k,x,w,N);return ys=null,V}catch(G){if(G===vs||G===ul)throw G;var ne=ct(29,G,null,k.mode);return ne.lanes=N,ne.return=k,ne}finally{}}}var Wa=u0(!0),m0=u0(!1),pa=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ce&2)!==0){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,t=ll(e),Pd(e,null,a),t}return rl(e,s,t,a),ll(e)}function nr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,sd(e,a)}}function oo(e,t){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var r=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?r=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?r=l=t:l=l.next=t}else r=l=t;a={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var no=!1;function dr(){if(no){var e=ks;if(e!==null)throw e}}function cr(e,t,a,s){no=!1;var r=e.updateQueue;pa=!1;var l=r.firstBaseUpdate,o=r.lastBaseUpdate,d=r.shared.pending;if(d!==null){r.shared.pending=null;var f=d,T=f.next;f.next=null,o===null?l=T:o.next=T,o=f;var E=e.alternate;E!==null&&(E=E.updateQueue,d=E.lastBaseUpdate,d!==o&&(d===null?E.firstBaseUpdate=T:d.next=T,E.lastBaseUpdate=f))}if(l!==null){var z=r.baseState;o=0,E=T=f=null,d=l;do{var S=d.lane&-536870913,A=S!==d.lane;if(A?(le&S)===S:(s&S)===S){S!==0&&S===hs&&(no=!0),E!==null&&(E=E.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var F=e,Q=d;S=t;var he=a;switch(Q.tag){case 1:if(F=Q.payload,typeof F=="function"){z=F.call(he,z,S);break e}z=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=Q.payload,S=typeof F=="function"?F.call(he,z,S):F,S==null)break e;z=M({},z,S);break e;case 2:pa=!0}}S=d.callback,S!==null&&(e.flags|=64,A&&(e.flags|=8192),A=r.callbacks,A===null?r.callbacks=[S]:A.push(S))}else A={lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},E===null?(T=E=A,f=z):E=E.next=A,o|=S;if(d=d.next,d===null){if(d=r.shared.pending,d===null)break;A=d,d=A.next,A.next=null,r.lastBaseUpdate=A,r.shared.pending=null}}while(!0);E===null&&(f=z),r.baseState=f,r.firstBaseUpdate=T,r.lastBaseUpdate=E,l===null&&(r.shared.lanes=0),ya|=o,e.lanes=o,e.memoizedState=z}}function f0(e,t){if(typeof e!="function")throw Error(n(191,e));e.call(t)}function p0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)f0(a[e],t)}var ws=h(null),bl=h(0);function b0(e,t){e=ta,H(bl,e),H(ws,t),ta=e|t.baseLanes}function co(){H(bl,ta),H(ws,ws.current)}function uo(){ta=bl.current,L(ws),L(bl)}var ut=h(null),St=null;function ga(e){var t=e.alternate;H(Ne,Ne.current&1),H(ut,e),St===null&&(t===null||ws.current!==null||t.memoizedState!==null)&&(St=e)}function mo(e){H(Ne,Ne.current),H(ut,e),St===null&&(St=e)}function x0(e){e.tag===22?(H(Ne,Ne.current),H(ut,e),St===null&&(St=e)):ha()}function ha(){H(Ne,Ne.current),H(ut,ut.current)}function mt(e){L(ut),St===e&&(St=null),L(Ne)}var Ne=h(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kn(a)||vn(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qt=0,J=null,xe=null,Le=null,gl=!1,Ts=!1,Pa=!1,hl=0,ur=0,Ss=null,np=0;function Me(){throw Error(n(321))}function fo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!dt(e[a],t[a]))return!1;return!0}function po(e,t,a,s,r,l){return Qt=l,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?$0:Eo,Pa=!1,l=a(s,r),Pa=!1,Ts&&(l=h0(t,a,s,r)),g0(e),l}function g0(e){B.H=pr;var t=xe!==null&&xe.next!==null;if(Qt=0,Le=xe=J=null,gl=!1,ur=0,Ss=null,t)throw Error(n(300));e===null||je||(e=e.dependencies,e!==null&&nl(e)&&(je=!0))}function h0(e,t,a,s){J=e;var r=0;do{if(Ts&&(Ss=null),ur=0,Ts=!1,25<=r)throw Error(n(301));if(r+=1,Le=xe=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}B.H=ec,l=t(a,s)}while(Ts);return l}function dp(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?mr(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(J.flags|=1024),t}function bo(){var e=hl!==0;return hl=0,e}function xo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function go(e){if(gl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}gl=!1}Qt=0,Le=xe=J=null,Ts=!1,ur=hl=0,Ss=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?J.memoizedState=Le=e:Le=Le.next=e,Le}function De(){if(xe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Le===null?J.memoizedState:Le.next;if(t!==null)Le=t,xe=e;else{if(e===null)throw J.alternate===null?Error(n(467)):Error(n(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?J.memoizedState=Le=e:Le=Le.next=e}return Le}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mr(e){var t=ur;return ur+=1,Ss===null&&(Ss=[]),e=n0(Ss,e,t),t=J,(Le===null?t.memoizedState:Le.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?$0:Eo),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mr(e);if(e.$$typeof===O)return Ye(e)}throw Error(n(438,String(e)))}function ho(e){var t=null,a=J.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var s=J.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=kl(),J.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),s=0;s<e;s++)a[s]=rt;return t.index++,a}function Wt(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=De();return ko(t,xe,e)}function ko(e,t,a){var s=e.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=a;var r=e.baseQueue,l=s.pending;if(l!==null){if(r!==null){var o=r.next;r.next=l.next,l.next=o}t.baseQueue=r=l,s.pending=null}if(l=e.baseState,r===null)e.memoizedState=l;else{t=r.next;var d=o=null,f=null,T=t,E=!1;do{var z=T.lane&-536870913;if(z!==T.lane?(le&z)===z:(Qt&z)===z){var S=T.revertLane;if(S===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),z===hs&&(E=!0);else if((Qt&S)===S){T=T.next,S===hs&&(E=!0);continue}else z={lane:0,revertLane:T.revertLane,gesture:null,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(d=f=z,o=l):f=f.next=z,J.lanes|=S,ya|=S;z=T.action,Pa&&a(l,z),l=T.hasEagerState?T.eagerState:a(l,z)}else S={lane:z,revertLane:T.revertLane,gesture:T.gesture,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null},f===null?(d=f=S,o=l):f=f.next=S,J.lanes|=z,ya|=z;T=T.next}while(T!==null&&T!==t);if(f===null?o=l:f.next=d,!dt(l,e.memoizedState)&&(je=!0,E&&(a=ks,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=f,s.lastRenderedState=l}return r===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function vo(e){var t=De(),a=t.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=e;var s=a.dispatch,r=a.pending,l=t.memoizedState;if(r!==null){a.pending=null;var o=r=r.next;do l=e(l,o.action),o=o.next;while(o!==r);dt(l,t.memoizedState)||(je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,s]}function k0(e,t,a){var s=J,r=De(),l=oe;if(l){if(a===void 0)throw Error(n(407));a=a()}else a=t();var o=!dt((xe||r).memoizedState,a);if(o&&(r.memoizedState=a,je=!0),r=r.queue,To(w0.bind(null,s,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(s.flags|=2048,Cs(9,{destroy:void 0},y0.bind(null,s,r,a,t),null),ye===null)throw Error(n(349));l||(Qt&127)!==0||v0(s,t,a)}return a}function v0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=J.updateQueue,t===null?(t=kl(),J.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function y0(e,t,a,s){t.value=a,t.getSnapshot=s,T0(t)&&S0(e)}function w0(e,t,a){return a(function(){T0(t)&&S0(e)})}function T0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!dt(e,a)}catch{return!0}}function S0(e){var t=_a(e,2);t!==null&&st(t,e,2)}function yo(e){var t=Pe();if(typeof e=="function"){var a=e;if(e=a(),Pa){oa(!0);try{a()}finally{oa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},t}function C0(e,t,a,s){return e.baseState=a,ko(e,xe,typeof s=="function"?s:Wt)}function cp(e,t,a,s,r){if(Sl(e))throw Error(n(485));if(e=t.action,e!==null){var l={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};B.T!==null?a(!0):l.isTransition=!1,s(l),a=t.pending,a===null?(l.next=t.pending=l,A0(t,l)):(l.next=a.next,t.pending=a.next=l)}}function A0(e,t){var a=t.action,s=t.payload,r=e.state;if(t.isTransition){var l=B.T,o={};B.T=o;try{var d=a(r,s),f=B.S;f!==null&&f(o,d),R0(e,t,d)}catch(T){wo(e,t,T)}finally{l!==null&&o.types!==null&&(l.types=o.types),B.T=l}}else try{l=a(r,s),R0(e,t,l)}catch(T){wo(e,t,T)}}function R0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){M0(e,t,s)},function(s){return wo(e,t,s)}):M0(e,t,a)}function M0(e,t,a){t.status="fulfilled",t.value=a,E0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,A0(e,a)))}function wo(e,t,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=a,E0(t),t=t.next;while(t!==s)}e.action=null}function E0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function B0(e,t){return t}function N0(e,t){if(oe){var a=ye.formState;if(a!==null){e:{var s=J;if(oe){if(we){t:{for(var r=we,l=Tt;r.nodeType!==8;){if(!l){r=null;break t}if(r=Ct(r.nextSibling),r===null){r=null;break t}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){we=Ct(r.nextSibling),s=r.data==="F!";break e}}ma(s)}s=!1}s&&(t=a[0])}}return a=Pe(),a.memoizedState=a.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B0,lastRenderedState:t},a.queue=s,a=K0.bind(null,J,s),s.dispatch=a,s=yo(!1),l=Mo.bind(null,J,!1,s.queue),s=Pe(),r={state:t,dispatch:null,action:e,pending:null},s.queue=r,a=cp.bind(null,J,r,l,a),r.dispatch=a,s.memoizedState=e,[t,a,!1]}function D0(e){var t=De();return z0(t,xe,e)}function z0(e,t,a){if(t=ko(e,t,B0)[0],e=yl(Wt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=mr(t)}catch(o){throw o===vs?ul:o}else s=t;t=De();var r=t.queue,l=r.dispatch;return a!==t.memoizedState&&(J.flags|=2048,Cs(9,{destroy:void 0},up.bind(null,r,a),null)),[s,l,e]}function up(e,t){e.action=t}function L0(e){var t=De(),a=xe;if(a!==null)return z0(t,a,e);De(),t=t.memoizedState,a=De();var s=a.queue.dispatch;return a.memoizedState=e,[t,s,!1]}function Cs(e,t,a,s){return e={tag:e,create:a,deps:s,inst:t,next:null},t=J.updateQueue,t===null&&(t=kl(),J.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,t.lastEffect=e),e}function j0(){return De().memoizedState}function wl(e,t,a,s){var r=Pe();J.flags|=e,r.memoizedState=Cs(1|t,{destroy:void 0},a,s===void 0?null:s)}function Tl(e,t,a,s){var r=De();s=s===void 0?null:s;var l=r.memoizedState.inst;xe!==null&&s!==null&&fo(s,xe.memoizedState.deps)?r.memoizedState=Cs(t,l,a,s):(J.flags|=e,r.memoizedState=Cs(1|t,l,a,s))}function U0(e,t){wl(8390656,8,e,t)}function To(e,t){Tl(2048,8,e,t)}function mp(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=kl(),J.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function H0(e){var t=De().memoizedState;return mp({ref:t,nextImpl:e}),function(){if((ce&2)!==0)throw Error(n(440));return t.impl.apply(void 0,arguments)}}function O0(e,t){return Tl(4,2,e,t)}function F0(e,t){return Tl(4,4,e,t)}function _0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function G0(e,t,a){a=a!=null?a.concat([e]):null,Tl(4,4,_0.bind(null,t,e),a)}function So(){}function q0(e,t){var a=De();t=t===void 0?null:t;var s=a.memoizedState;return t!==null&&fo(t,s[1])?s[0]:(a.memoizedState=[e,t],e)}function I0(e,t){var a=De();t=t===void 0?null:t;var s=a.memoizedState;if(t!==null&&fo(t,s[1]))return s[0];if(s=e(),Pa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[s,t],s}function Co(e,t,a){return a===void 0||(Qt&1073741824)!==0&&(le&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Yc(),J.lanes|=e,ya|=e,a)}function Y0(e,t,a,s){return dt(a,t)?a:ws.current!==null?(e=Co(e,a,s),dt(e,t)||(je=!0),e):(Qt&42)===0||(Qt&1073741824)!==0&&(le&261930)===0?(je=!0,e.memoizedState=a):(e=Yc(),J.lanes|=e,ya|=e,t)}function V0(e,t,a,s,r){var l=U.p;U.p=l!==0&&8>l?l:8;var o=B.T,d={};B.T=d,Mo(e,!1,t,a);try{var f=r(),T=B.S;if(T!==null&&T(d,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var E=op(f,s);fr(e,t,E,bt(e))}else fr(e,t,s,bt(e))}catch(z){fr(e,t,{then:function(){},status:"rejected",reason:z},bt())}finally{U.p=l,o!==null&&d.types!==null&&(o.types=d.types),B.T=o}}function fp(){}function Ao(e,t,a,s){if(e.tag!==5)throw Error(n(476));var r=X0(e).queue;V0(e,r,t,P,a===null?fp:function(){return Q0(e),a(s)})}function X0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Q0(e){var t=X0(e);t.next===null&&(t=e.alternate.memoizedState),fr(e,t.next.queue,{},bt())}function Ro(){return Ye(Br)}function W0(){return De().memoizedState}function P0(){return De().memoizedState}function pp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=bt();e=ba(a);var s=xa(t,e,a);s!==null&&(st(s,t,a),nr(s,t,a)),t={cache:to()},e.payload=t;return}t=t.return}}function bp(e,t,a){var s=bt();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(e)?Z0(t,a):(a=Yi(e,t,a,s),a!==null&&(st(a,e,s),J0(a,t,s)))}function K0(e,t,a){var s=bt();fr(e,t,a,s)}function fr(e,t,a,s){var r={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))Z0(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,d=l(o,a);if(r.hasEagerState=!0,r.eagerState=d,dt(d,o))return rl(e,t,r,0),ye===null&&sl(),!1}catch{}finally{}if(a=Yi(e,t,r,s),a!==null)return st(a,e,s),J0(a,t,s),!0}return!1}function Mo(e,t,a,s){if(s={lane:2,revertLane:on(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(t)throw Error(n(479))}else t=Yi(e,a,s,2),t!==null&&st(t,e,2)}function Sl(e){var t=e.alternate;return e===J||t!==null&&t===J}function Z0(e,t){Ts=gl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function J0(e,t,a){if((a&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,a|=s,t.lanes=a,sd(e,a)}}var pr={readContext:Ye,use:vl,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};pr.useEffectEvent=Me;var $0={readContext:Ye,use:vl,useCallback:function(e,t){return Pe().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:U0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,wl(4194308,4,_0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){wl(4,2,e,t)},useMemo:function(e,t){var a=Pe();t=t===void 0?null:t;var s=e();if(Pa){oa(!0);try{e()}finally{oa(!1)}}return a.memoizedState=[s,t],s},useReducer:function(e,t,a){var s=Pe();if(a!==void 0){var r=a(t);if(Pa){oa(!0);try{a(t)}finally{oa(!1)}}}else r=t;return s.memoizedState=s.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},s.queue=e,e=e.dispatch=bp.bind(null,J,e),[s.memoizedState,e]},useRef:function(e){var t=Pe();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,a=K0.bind(null,J,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:So,useDeferredValue:function(e,t){var a=Pe();return Co(a,e,t)},useTransition:function(){var e=yo(!1);return e=V0.bind(null,J,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var s=J,r=Pe();if(oe){if(a===void 0)throw Error(n(407));a=a()}else{if(a=t(),ye===null)throw Error(n(349));(le&127)!==0||v0(s,t,a)}r.memoizedState=a;var l={value:a,getSnapshot:t};return r.queue=l,U0(w0.bind(null,s,l,e),[e]),s.flags|=2048,Cs(9,{destroy:void 0},y0.bind(null,s,l,a,t),null),a},useId:function(){var e=Pe(),t=ye.identifierPrefix;if(oe){var a=Ut,s=jt;a=(s&~(1<<32-nt(s)-1)).toString(32)+a,t="_"+t+"R_"+a,a=hl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=np++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ro,useFormState:N0,useActionState:N0,useOptimistic:function(e){var t=Pe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Mo.bind(null,J,!0,a),a.dispatch=t,[e,t]},useMemoCache:ho,useCacheRefresh:function(){return Pe().memoizedState=pp.bind(null,J)},useEffectEvent:function(e){var t=Pe(),a={impl:e};return t.memoizedState=a,function(){if((ce&2)!==0)throw Error(n(440));return a.impl.apply(void 0,arguments)}}},Eo={readContext:Ye,use:vl,useCallback:q0,useContext:Ye,useEffect:To,useImperativeHandle:G0,useInsertionEffect:O0,useLayoutEffect:F0,useMemo:I0,useReducer:yl,useRef:j0,useState:function(){return yl(Wt)},useDebugValue:So,useDeferredValue:function(e,t){var a=De();return Y0(a,xe.memoizedState,e,t)},useTransition:function(){var e=yl(Wt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:mr(e),t]},useSyncExternalStore:k0,useId:W0,useHostTransitionStatus:Ro,useFormState:D0,useActionState:D0,useOptimistic:function(e,t){var a=De();return C0(a,xe,e,t)},useMemoCache:ho,useCacheRefresh:P0};Eo.useEffectEvent=H0;var ec={readContext:Ye,use:vl,useCallback:q0,useContext:Ye,useEffect:To,useImperativeHandle:G0,useInsertionEffect:O0,useLayoutEffect:F0,useMemo:I0,useReducer:vo,useRef:j0,useState:function(){return vo(Wt)},useDebugValue:So,useDeferredValue:function(e,t){var a=De();return xe===null?Co(a,e,t):Y0(a,xe.memoizedState,e,t)},useTransition:function(){var e=vo(Wt)[0],t=De().memoizedState;return[typeof e=="boolean"?e:mr(e),t]},useSyncExternalStore:k0,useId:W0,useHostTransitionStatus:Ro,useFormState:L0,useActionState:L0,useOptimistic:function(e,t){var a=De();return xe!==null?C0(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ho,useCacheRefresh:P0};ec.useEffectEvent=H0;function Bo(e,t,a,s){t=e.memoizedState,a=a(s,t),a=a==null?t:M({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var No={enqueueSetState:function(e,t,a){e=e._reactInternals;var s=bt(),r=ba(s);r.payload=t,a!=null&&(r.callback=a),t=xa(e,r,s),t!==null&&(st(t,e,s),nr(t,e,s))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var s=bt(),r=ba(s);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=xa(e,r,s),t!==null&&(st(t,e,s),nr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=bt(),s=ba(a);s.tag=2,t!=null&&(s.callback=t),t=xa(e,s,a),t!==null&&(st(t,e,a),nr(t,e,a))}};function tc(e,t,a,s,r,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,l,o):t.prototype&&t.prototype.isPureReactComponent?!er(a,s)||!er(r,l):!0}function ac(e,t,a,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,s),t.state!==e&&No.enqueueReplaceState(t,t.state,null)}function Ka(e,t){var a=t;if("ref"in t){a={};for(var s in t)s!=="ref"&&(a[s]=t[s])}if(e=e.defaultProps){a===t&&(a=M({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function sc(e){al(e)}function rc(e){console.error(e)}function lc(e){al(e)}function Cl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function ic(e,t,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Do(e,t,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,t)},a}function oc(e){return e=ba(e),e.tag=3,e}function nc(e,t,a,s){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var l=s.value;e.payload=function(){return r(l)},e.callback=function(){ic(t,a,s)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){ic(t,a,s),typeof r!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})})}function xp(e,t,a,s,r){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=a.alternate,t!==null&&gs(t,a,r,!0),a=ut.current,a!==null){switch(a.tag){case 31:case 13:return St===null?Hl():a.alternate===null&&Ee===0&&(Ee=3),a.flags&=-257,a.flags|=65536,a.lanes=r,s===ml?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([s]):t.add(s),sn(e,s,r)),!1;case 22:return a.flags|=65536,s===ml?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([s]):a.add(s)),sn(e,s,r)),!1}throw Error(n(435,a.tag))}return sn(e,s,r),Hl(),!1}if(oe)return t=ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,s!==Ki&&(e=Error(n(422),{cause:s}),sr(vt(e,a)))):(s!==Ki&&(t=Error(n(423),{cause:s}),sr(vt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,s=vt(s,a),r=Do(e.stateNode,s,r),oo(e,r),Ee!==4&&(Ee=2)),!1;var l=Error(n(520),{cause:s});if(l=vt(l,a),wr===null?wr=[l]:wr.push(l),Ee!==4&&(Ee=2),t===null)return!0;s=vt(s,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=Do(a.stateNode,s,e),oo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(wa===null||!wa.has(l))))return a.flags|=65536,r&=-r,a.lanes|=r,r=oc(r),nc(r,e,a,s),oo(a,r),!1}a=a.return}while(a!==null);return!1}var zo=Error(n(461)),je=!1;function Ve(e,t,a,s){t.child=e===null?m0(t,null,a,s):Wa(t,e.child,a,s)}function dc(e,t,a,s,r){a=a.render;var l=t.ref;if("ref"in s){var o={};for(var d in s)d!=="ref"&&(o[d]=s[d])}else o=s;return Ya(t),s=po(e,t,a,o,l,r),d=bo(),e!==null&&!je?(xo(e,t,r),Pt(e,t,r)):(oe&&d&&Wi(t),t.flags|=1,Ve(e,t,s,r),t.child)}function cc(e,t,a,s,r){if(e===null){var l=a.type;return typeof l=="function"&&!Vi(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,uc(e,t,l,s,r)):(e=il(a.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Go(e,r)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:er,a(o,s)&&e.ref===t.ref)return Pt(e,t,r)}return t.flags|=1,e=It(l,s),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,a,s,r){if(e!==null){var l=e.memoizedProps;if(er(l,s)&&e.ref===t.ref)if(je=!1,t.pendingProps=s=l,Go(e,r))(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Pt(e,t,r)}return Lo(e,t,a,s,r)}function mc(e,t,a,s){var r=s.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(s=t.child=e.child,r=0;s!==null;)r=r|s.lanes|s.childLanes,s=s.sibling;s=r&~l}else s=0,t.child=null;return fc(e,t,l,a,s)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(t,l!==null?l.cachePool:null),l!==null?b0(t,l):co(),x0(t);else return s=t.lanes=536870912,fc(e,t,l!==null?l.baseLanes|a:a,a,s)}else l!==null?(cl(t,l.cachePool),b0(t,l),ha(),t.memoizedState=null):(e!==null&&cl(t,null),co(),ha());return Ve(e,t,r,a),t.child}function br(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,a,s,r){var l=so();return l=l===null?null:{parent:ze._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&cl(t,null),co(),x0(t),e!==null&&gs(e,t,s,!0),t.childLanes=r,null}function Al(e,t){return t=Ml({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,a){return Wa(t,e.child,null,a),e=Al(t,t.pendingProps),e.flags|=2,mt(t),t.memoizedState=null,e}function gp(e,t,a){var s=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(s.mode==="hidden")return e=Al(t,s),t.lanes=536870912,br(null,e);if(mo(t),(e=we)?(e=Au(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:jt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Zd(e),a.return=t,t.child=a,Ie=t,we=null)):e=null,e===null)throw ma(t);return t.lanes=536870912,null}return Al(t,s)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(mo(t),r)if(t.flags&256)t.flags&=-257,t=pc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(n(558));else if(je||gs(e,t,a,!1),r=(a&e.childLanes)!==0,je||r){if(s=ye,s!==null&&(o=rd(s,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,_a(e,o),st(s,e,o),zo;Hl(),t=pc(e,t,a)}else e=l.treeContext,we=Ct(o.nextSibling),Ie=t,oe=!0,ua=null,Tt=!1,e!==null&&e0(t,e),t=Al(t,s),t.flags|=4096;return t}return e=It(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Rl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(n(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Lo(e,t,a,s,r){return Ya(t),a=po(e,t,a,s,void 0,r),s=bo(),e!==null&&!je?(xo(e,t,r),Pt(e,t,r)):(oe&&s&&Wi(t),t.flags|=1,Ve(e,t,a,r),t.child)}function bc(e,t,a,s,r,l){return Ya(t),t.updateQueue=null,a=h0(t,s,a,r),g0(e),s=bo(),e!==null&&!je?(xo(e,t,l),Pt(e,t,l)):(oe&&s&&Wi(t),t.flags|=1,Ve(e,t,a,l),t.child)}function xc(e,t,a,s,r){if(Ya(t),t.stateNode===null){var l=fs,o=a.contextType;typeof o=="object"&&o!==null&&(l=Ye(o)),l=new a(s,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=No,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=s,l.state=t.memoizedState,l.refs={},lo(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?Ye(o):fs,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Bo(t,a,o,s),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&No.enqueueReplaceState(l,l.state,null),cr(t,s,l,r),dr(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){l=t.stateNode;var d=t.memoizedProps,f=Ka(a,d);l.props=f;var T=l.context,E=a.contextType;o=fs,typeof E=="object"&&E!==null&&(o=Ye(E));var z=a.getDerivedStateFromProps;E=typeof z=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,E||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||T!==o)&&ac(t,l,s,o),pa=!1;var S=t.memoizedState;l.state=S,cr(t,s,l,r),dr(),T=t.memoizedState,d||S!==T||pa?(typeof z=="function"&&(Bo(t,a,z,s),T=t.memoizedState),(f=pa||tc(t,a,f,s,S,T,o))?(E||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=T),l.props=s,l.state=T,l.context=o,s=f):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,io(e,t),o=t.memoizedProps,E=Ka(a,o),l.props=E,z=t.pendingProps,S=l.context,T=a.contextType,f=fs,typeof T=="object"&&T!==null&&(f=Ye(T)),d=a.getDerivedStateFromProps,(T=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==z||S!==f)&&ac(t,l,s,f),pa=!1,S=t.memoizedState,l.state=S,cr(t,s,l,r),dr();var A=t.memoizedState;o!==z||S!==A||pa||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof d=="function"&&(Bo(t,a,d,s),A=t.memoizedState),(E=pa||tc(t,a,E,s,S,A,f)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(T||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,A,f),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,A,f)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=A),l.props=s,l.state=A,l.context=f,s=E):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),s=!1)}return l=s,Rl(e,t),s=(t.flags&128)!==0,l||s?(l=t.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&s?(t.child=Wa(t,e.child,null,r),t.child=Wa(t,null,a,r)):Ve(e,t,a,r),t.memoizedState=l.state,e=t.child):e=Pt(e,t,r),e}function gc(e,t,a,s){return qa(),t.flags|=256,Ve(e,t,a,s),t.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uo(e){return{baseLanes:e,cachePool:i0()}}function Ho(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=pt),e}function hc(e,t,a){var s=t.pendingProps,r=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(Ne.current&2)!==0),o&&(r=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(r?ga(t):ha(),(e=we)?(e=Au(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ca!==null?{id:jt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},a=Zd(e),a.return=t,t.child=a,Ie=t,we=null)):e=null,e===null)throw ma(t);return vn(e)?t.lanes=32:t.lanes=536870912,null}var d=s.children;return s=s.fallback,r?(ha(),r=t.mode,d=Ml({mode:"hidden",children:d},r),s=Ga(s,r,a,null),d.return=t,s.return=t,d.sibling=s,t.child=d,s=t.child,s.memoizedState=Uo(a),s.childLanes=Ho(e,o,a),t.memoizedState=jo,br(null,s)):(ga(t),Oo(t,d))}var f=e.memoizedState;if(f!==null&&(d=f.dehydrated,d!==null)){if(l)t.flags&256?(ga(t),t.flags&=-257,t=Fo(e,t,a)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,t=null):(ha(),d=s.fallback,r=t.mode,s=Ml({mode:"visible",children:s.children},r),d=Ga(d,r,a,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,Wa(t,e.child,null,a),s=t.child,s.memoizedState=Uo(a),s.childLanes=Ho(e,o,a),t.memoizedState=jo,t=br(null,s));else if(ga(t),vn(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var T=o.dgst;o=T,s=Error(n(419)),s.stack="",s.digest=o,sr({value:s,source:null,stack:null}),t=Fo(e,t,a)}else if(je||gs(e,t,a,!1),o=(a&e.childLanes)!==0,je||o){if(o=ye,o!==null&&(s=rd(o,a),s!==0&&s!==f.retryLane))throw f.retryLane=s,_a(e,s),st(o,e,s),zo;kn(d)||Hl(),t=Fo(e,t,a)}else kn(d)?(t.flags|=192,t.child=e.child,t=null):(e=f.treeContext,we=Ct(d.nextSibling),Ie=t,oe=!0,ua=null,Tt=!1,e!==null&&e0(t,e),t=Oo(t,s.children),t.flags|=4096);return t}return r?(ha(),d=s.fallback,r=t.mode,f=e.child,T=f.sibling,s=It(f,{mode:"hidden",children:s.children}),s.subtreeFlags=f.subtreeFlags&65011712,T!==null?d=It(T,d):(d=Ga(d,r,a,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,br(null,s),s=t.child,d=e.child.memoizedState,d===null?d=Uo(a):(r=d.cachePool,r!==null?(f=ze._currentValue,r=r.parent!==f?{parent:f,pool:f}:r):r=i0(),d={baseLanes:d.baseLanes|a,cachePool:r}),s.memoizedState=d,s.childLanes=Ho(e,o,a),t.memoizedState=jo,br(e.child,s)):(ga(t),a=e.child,e=a.sibling,a=It(a,{mode:"visible",children:s.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Oo(e,t){return t=Ml({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ml(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function Fo(e,t,a){return Wa(t,e.child,null,a),e=Oo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,a){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),$i(e.return,t,a)}function _o(e,t,a,s,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:r,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=a,o.tailMode=r,o.treeForkCount=l)}function vc(e,t,a){var s=t.pendingProps,r=s.revealOrder,l=s.tail;s=s.children;var o=Ne.current,d=(o&2)!==0;if(d?(o=o&1|2,t.flags|=128):o&=1,H(Ne,o),Ve(e,t,s,a),s=oe?ar:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,a,t);else if(e.tag===19)kc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),_o(t,!1,r,a,l,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&xl(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}_o(t,!0,a,null,l,s);break;case"together":_o(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function Pt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(gs(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(n(153));if(t.child!==null){for(e=t.child,a=It(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=It(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Go(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function hp(e,t,a){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),fa(t,ze,e.memoizedState.cache),qa();break;case 27:case 5:Gs(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?hc(e,t,a):(ga(t),e=Pt(e,t,a),e!==null?e.sibling:null);ga(t);break;case 19:var r=(e.flags&128)!==0;if(s=(a&t.childLanes)!==0,s||(gs(e,t,a,!1),s=(a&t.childLanes)!==0),r){if(s)return vc(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),H(Ne,Ne.current),s)break;return null;case 22:return t.lanes=0,mc(e,t,a,t.pendingProps);case 24:fa(t,ze,e.memoizedState.cache)}return Pt(e,t,a)}function yc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)je=!0;else{if(!Go(e,a)&&(t.flags&128)===0)return je=!1,hp(e,t,a);je=(e.flags&131072)!==0}else je=!1,oe&&(t.flags&1048576)!==0&&$d(t,ar,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e=="function")Vi(e)?(s=Ka(e,s),t.tag=1,t=xc(null,t,e,s,a)):(t.tag=0,t=Lo(null,t,e,s,a));else{if(e!=null){var r=e.$$typeof;if(r===me){t.tag=11,t=dc(null,t,e,s,a);break e}else if(r===$){t.tag=14,t=cc(null,t,e,s,a);break e}}throw t=Ft(e)||e,Error(n(306,t,""))}}return t;case 0:return Lo(e,t,t.type,t.pendingProps,a);case 1:return s=t.type,r=Ka(s,t.pendingProps),xc(e,t,s,r,a);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(n(387));s=t.pendingProps;var l=t.memoizedState;r=l.element,io(e,t),cr(t,s,null,a);var o=t.memoizedState;if(s=o.cache,fa(t,ze,s),s!==l.cache&&eo(t,[ze],a,!0),dr(),s=o.element,l.isDehydrated)if(l={element:s,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=gc(e,t,s,a);break e}else if(s!==r){r=vt(Error(n(424)),t),sr(r),t=gc(e,t,s,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=Ct(e.firstChild),Ie=t,oe=!0,ua=null,Tt=!0,a=m0(t,null,s,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qa(),s===r){t=Pt(e,t,a);break e}Ve(e,t,s,a)}t=t.child}return t;case 26:return Rl(e,t),e===null?(a=Du(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,s=Yl(ae.current).createElement(a),s[qe]=t,s[Ze]=e,Xe(s,a,e),_e(s),t.stateNode=s):t.memoizedState=Du(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gs(t),e===null&&oe&&(s=t.stateNode=Eu(t.type,t.pendingProps,ae.current),Ie=t,Tt=!0,r=we,Aa(t.type)?(yn=r,we=Ct(s.firstChild)):we=r),Ve(e,t,t.pendingProps.children,a),Rl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((r=s=we)&&(s=Wp(s,t.type,t.pendingProps,Tt),s!==null?(t.stateNode=s,Ie=t,we=Ct(s.firstChild),Tt=!1,r=!0):r=!1),r||ma(t)),Gs(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,xn(r,l)?s=null:o!==null&&xn(r,o)&&(t.flags|=32),t.memoizedState!==null&&(r=po(e,t,dp,null,null,a),Br._currentValue=r),Rl(e,t),Ve(e,t,s,a),t.child;case 6:return e===null&&oe&&((e=a=we)&&(a=Pp(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ie=t,we=null,e=!0):e=!1),e||ma(t)),null;case 13:return hc(e,t,a);case 4:return We(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Wa(t,null,s,a):Ve(e,t,s,a),t.child;case 11:return dc(e,t,t.type,t.pendingProps,a);case 7:return Ve(e,t,t.pendingProps,a),t.child;case 8:return Ve(e,t,t.pendingProps.children,a),t.child;case 12:return Ve(e,t,t.pendingProps.children,a),t.child;case 10:return s=t.pendingProps,fa(t,t.type,s.value),Ve(e,t,s.children,a),t.child;case 9:return r=t.type._context,s=t.pendingProps.children,Ya(t),r=Ye(r),s=s(r),t.flags|=1,Ve(e,t,s,a),t.child;case 14:return cc(e,t,t.type,t.pendingProps,a);case 15:return uc(e,t,t.type,t.pendingProps,a);case 19:return vc(e,t,a);case 31:return gp(e,t,a);case 22:return mc(e,t,a,t.pendingProps);case 24:return Ya(t),s=Ye(ze),e===null?(r=so(),r===null&&(r=ye,l=to(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=a),r=l),t.memoizedState={parent:s,cache:r},lo(t),fa(t,ze,r)):((e.lanes&a)!==0&&(io(e,t),cr(t,null,null,a),dr()),r=e.memoizedState,l=t.memoizedState,r.parent!==s?(r={parent:s,cache:s},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),fa(t,ze,s)):(s=l.cache,fa(t,ze,s),s!==r.cache&&eo(t,[ze],a,!0))),Ve(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(n(156,t.tag))}function Kt(e){e.flags|=4}function qo(e,t,a,s,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Wc())e.flags|=8192;else throw Qa=ml,ro}else e.flags&=-16777217}function wc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hu(t))if(Wc())e.flags|=8192;else throw Qa=ml,ro}function El(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?td():536870912,e.lanes|=t,Es|=t)}function xr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags&65011712,s|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=a,t}function kp(e,t,a){var s=t.pendingProps;switch(Pi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return a=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Xt(ze),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(xs(t)?Kt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zi())),Te(t),null;case 26:var r=t.type,l=t.memoizedState;return e===null?(Kt(t),l!==null?(Te(t),wc(t,l)):(Te(t),qo(t,r,null,s,a))):l?l!==e.memoizedState?(Kt(t),Te(t),wc(t,l)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&Kt(t),Te(t),qo(t,r,e,s,a)),null;case 27:if(_r(t),a=ae.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Kt(t);else{if(!s){if(t.stateNode===null)throw Error(n(166));return Te(t),null}e=_.current,xs(t)?t0(t):(e=Eu(r,s,a),t.stateNode=e,Kt(t))}return Te(t),null;case 5:if(_r(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&Kt(t);else{if(!s){if(t.stateNode===null)throw Error(n(166));return Te(t),null}if(l=_.current,xs(t))t0(t);else{var o=Yl(ae.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof s.is=="string"?o.createElement("select",{is:s.is}):o.createElement("select"),s.multiple?l.multiple=!0:s.size&&(l.size=s.size);break;default:l=typeof s.is=="string"?o.createElement(r,{is:s.is}):o.createElement(r)}}l[qe]=t,l[Ze]=s;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(Xe(l,r,s),r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Kt(t)}}return Te(t),qo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&Kt(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(n(166));if(e=ae.current,xs(t)){if(e=t.stateNode,a=t.memoizedProps,s=null,r=Ie,r!==null)switch(r.tag){case 27:case 5:s=r.memoizedProps}e[qe]=t,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||hu(e.nodeValue,a)),e||ma(t,!0)}else e=Yl(e).createTextNode(s),e[qe]=t,t.stateNode=e}return Te(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(s=xs(t),a!==null){if(e===null){if(!s)throw Error(n(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(557));e[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(mt(t),t):(mt(t),null);if((t.flags&128)!==0)throw Error(n(558))}return Te(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=xs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!r)throw Error(n(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));r[qe]=t}else qa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),r=!1}else r=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(mt(t),t):(mt(t),null)}return mt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=t.child,r=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(r=s.alternate.memoizedState.cachePool.pool),l=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(l=s.memoizedState.cachePool.pool),l!==r&&(s.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),El(t,t.updateQueue),Te(t),null);case 4:return Be(),e===null&&un(t.stateNode.containerInfo),Te(t),null;case 10:return Xt(t.type),Te(t),null;case 19:if(L(Ne),s=t.memoizedState,s===null)return Te(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)xr(s,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=xl(e),l!==null){for(t.flags|=128,xr(s,!1),e=l.updateQueue,t.updateQueue=e,El(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Kd(a,e),a=a.sibling;return H(Ne,Ne.current&1|2),oe&&Yt(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&it()>Ll&&(t.flags|=128,r=!0,xr(s,!1),t.lanes=4194304)}else{if(!r)if(e=xl(l),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,El(t,e),xr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!oe)return Te(t),null}else 2*it()-s.renderingStartTime>Ll&&a!==536870912&&(t.flags|=128,r=!0,xr(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(e=s.last,e!==null?e.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=it(),e.sibling=null,a=Ne.current,H(Ne,r?a&1|2:a&1),oe&&Yt(t,s.treeForkCount),e):(Te(t),null);case 22:case 23:return mt(t),uo(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(a&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),a=t.updateQueue,a!==null&&El(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==a&&(t.flags|=2048),e!==null&&L(Va),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(ze),Te(t),null;case 25:return null;case 30:return null}throw Error(n(156,t.tag))}function vp(e,t){switch(Pi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(ze),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _r(t),null;case 31:if(t.memoizedState!==null){if(mt(t),t.alternate===null)throw Error(n(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(n(340));qa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ne),null;case 4:return Be(),null;case 10:return Xt(t.type),null;case 22:case 23:return mt(t),uo(),e!==null&&L(Va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(ze),null;case 25:return null;default:return null}}function Tc(e,t){switch(Pi(t),t.tag){case 3:Xt(ze),Be();break;case 26:case 27:case 5:_r(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&mt(t);break;case 13:mt(t);break;case 19:L(Ne);break;case 10:Xt(t.type);break;case 22:case 23:mt(t),uo(),e!==null&&L(Va);break;case 24:Xt(ze)}}function gr(e,t){try{var a=t.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var r=s.next;a=r;do{if((a.tag&e)===e){s=void 0;var l=a.create,o=a.inst;s=l(),o.destroy=s}a=a.next}while(a!==r)}}catch(d){pe(t,t.return,d)}}function ka(e,t,a){try{var s=t.updateQueue,r=s!==null?s.lastEffect:null;if(r!==null){var l=r.next;s=l;do{if((s.tag&e)===e){var o=s.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,r=t;var f=a,T=d;try{T()}catch(E){pe(r,f,E)}}}s=s.next}while(s!==l)}}catch(E){pe(t,t.return,E)}}function Sc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{p0(t,a)}catch(s){pe(e,e.return,s)}}}function Cc(e,t,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){pe(e,t,s)}}function hr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(r){pe(e,t,r)}}function Ht(e,t){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(r){pe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){pe(e,t,r)}else a.current=null}function Ac(e){var t=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(r){pe(e,e.return,r)}}function Io(e,t,a){try{var s=e.stateNode;qp(s,e.type,a,t),s[Ze]=t}catch(r){pe(e,e.return,r)}}function Rc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Aa(e.type)||e.tag===4}function Yo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vo(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Gt));else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Vo(e,t,a),e=e.sibling;e!==null;)Vo(e,t,a),e=e.sibling}function Bl(e,t,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(s!==4&&(s===27&&Aa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Bl(e,t,a),e=e.sibling;e!==null;)Bl(e,t,a),e=e.sibling}function Mc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Xe(t,s,a),t[qe]=e,t[Ze]=a}catch(l){pe(e,e.return,l)}}var Zt=!1,Ue=!1,Xo=!1,Ec=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function yp(e,t){if(e=e.containerInfo,pn=Zl,e=Gd(e),Oi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var r=s.anchorOffset,l=s.focusNode;s=s.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,d=-1,f=-1,T=0,E=0,z=e,S=null;t:for(;;){for(var A;z!==a||r!==0&&z.nodeType!==3||(d=o+r),z!==l||s!==0&&z.nodeType!==3||(f=o+s),z.nodeType===3&&(o+=z.nodeValue.length),(A=z.firstChild)!==null;)S=z,z=A;for(;;){if(z===e)break t;if(S===a&&++T===r&&(d=o),S===l&&++E===s&&(f=o),(A=z.nextSibling)!==null)break;z=S,S=z.parentNode}z=A}a=d===-1||f===-1?null:{start:d,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(bn={focusedElem:e,selectionRange:a},Zl=!1,Ge=t;Ge!==null;)if(t=Ge,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ge=e;else for(;Ge!==null;){switch(t=Ge,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,r=l.memoizedProps,l=l.memoizedState,s=a.stateNode;try{var F=Ka(a.type,r);e=s.getSnapshotBeforeUpdate(F,l),s.__reactInternalSnapshotBeforeUpdate=e}catch(Q){pe(a,a.return,Q)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)hn(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":hn(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(n(163))}if(e=t.sibling,e!==null){e.return=t.return,Ge=e;break}Ge=t.return}}function Bc(e,t,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$t(e,a),s&4&&gr(5,a);break;case 1:if($t(e,a),s&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){pe(a,a.return,o)}else{var r=Ka(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){pe(a,a.return,o)}}s&64&&Sc(a),s&512&&hr(a,a.return);break;case 3:if($t(e,a),s&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{p0(e,t)}catch(o){pe(a,a.return,o)}}break;case 27:t===null&&s&4&&Mc(a);case 26:case 5:$t(e,a),t===null&&s&4&&Ac(a),s&512&&hr(a,a.return);break;case 12:$t(e,a);break;case 31:$t(e,a),s&4&&zc(e,a);break;case 13:$t(e,a),s&4&&Lc(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bp.bind(null,a),Kp(e,a))));break;case 22:if(s=a.memoizedState!==null||Zt,!s){t=t!==null&&t.memoizedState!==null||Ue,r=Zt;var l=Ue;Zt=s,(Ue=t)&&!l?ea(e,a,(a.subtreeFlags&8772)!==0):$t(e,a),Zt=r,Ue=l}break;case 30:break;default:$t(e,a)}}function Nc(e){var t=e.alternate;t!==null&&(e.alternate=null,Nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yi(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,$e=!1;function Jt(e,t,a){for(a=a.child;a!==null;)Dc(e,t,a),a=a.sibling}function Dc(e,t,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(qs,a)}catch{}switch(a.tag){case 26:Ue||Ht(a,t),Jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ue||Ht(a,t);var s=Se,r=$e;Aa(a.type)&&(Se=a.stateNode,$e=!1),Jt(e,t,a),Rr(a.stateNode),Se=s,$e=r;break;case 5:Ue||Ht(a,t);case 6:if(s=Se,r=$e,Se=null,Jt(e,t,a),Se=s,$e=r,Se!==null)if($e)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(l){pe(a,t,l)}else try{Se.removeChild(a.stateNode)}catch(l){pe(a,t,l)}break;case 18:Se!==null&&($e?(e=Se,Su(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hs(e)):Su(Se,a.stateNode));break;case 4:s=Se,r=$e,Se=a.stateNode.containerInfo,$e=!0,Jt(e,t,a),Se=s,$e=r;break;case 0:case 11:case 14:case 15:ka(2,a,t),Ue||ka(4,a,t),Jt(e,t,a);break;case 1:Ue||(Ht(a,t),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Cc(a,t,s)),Jt(e,t,a);break;case 21:Jt(e,t,a);break;case 22:Ue=(s=Ue)||a.memoizedState!==null,Jt(e,t,a),Ue=s;break;default:Jt(e,t,a)}}function zc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hs(e)}catch(a){pe(t,t.return,a)}}}function Lc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hs(e)}catch(a){pe(t,t.return,a)}}function wp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ec),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ec),t;default:throw Error(n(435,e.tag))}}function Nl(e,t){var a=wp(e);t.forEach(function(s){if(!a.has(s)){a.add(s);var r=Np.bind(null,e,s);s.then(r,r)}})}function et(e,t){var a=t.deletions;if(a!==null)for(var s=0;s<a.length;s++){var r=a[s],l=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 27:if(Aa(d.type)){Se=d.stateNode,$e=!1;break e}break;case 5:Se=d.stateNode,$e=!1;break e;case 3:case 4:Se=d.stateNode.containerInfo,$e=!0;break e}d=d.return}if(Se===null)throw Error(n(160));Dc(l,o,r),Se=null,$e=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jc(t,e),t=t.sibling}var Nt=null;function jc(e,t){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:et(t,e),tt(e),s&4&&(ka(3,e,e.return),gr(3,e),ka(5,e,e.return));break;case 1:et(t,e),tt(e),s&512&&(Ue||a===null||Ht(a,a.return)),s&64&&Zt&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var r=Nt;if(et(t,e),tt(e),s&512&&(Ue||a===null||Ht(a,a.return)),s&4){var l=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(s){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Vs]||l[qe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(s),r.head.insertBefore(l,r.querySelector("head > title"))),Xe(l,s,a),l[qe]=e,_e(l),s=l;break e;case"link":var o=ju("link","href",r).get(s+(a.href||""));if(o){for(var d=0;d<o.length;d++)if(l=o[d],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(d,1);break t}}l=r.createElement(s),Xe(l,s,a),r.head.appendChild(l);break;case"meta":if(o=ju("meta","content",r).get(s+(a.content||""))){for(d=0;d<o.length;d++)if(l=o[d],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(d,1);break t}}l=r.createElement(s),Xe(l,s,a),r.head.appendChild(l);break;default:throw Error(n(468,s))}l[qe]=e,_e(l),s=l}e.stateNode=s}else Uu(r,e.type,e.stateNode);else e.stateNode=Lu(r,s,e.memoizedProps);else l!==s?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,s===null?Uu(r,e.type,e.stateNode):Lu(r,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Io(e,e.memoizedProps,a.memoizedProps)}break;case 27:et(t,e),tt(e),s&512&&(Ue||a===null||Ht(a,a.return)),a!==null&&s&4&&Io(e,e.memoizedProps,a.memoizedProps);break;case 5:if(et(t,e),tt(e),s&512&&(Ue||a===null||Ht(a,a.return)),e.flags&32){r=e.stateNode;try{is(r,"")}catch(F){pe(e,e.return,F)}}s&4&&e.stateNode!=null&&(r=e.memoizedProps,Io(e,r,a!==null?a.memoizedProps:r)),s&1024&&(Xo=!0);break;case 6:if(et(t,e),tt(e),s&4){if(e.stateNode===null)throw Error(n(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(F){pe(e,e.return,F)}}break;case 3:if(Ql=null,r=Nt,Nt=Vl(t.containerInfo),et(t,e),Nt=r,tt(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Hs(t.containerInfo)}catch(F){pe(e,e.return,F)}Xo&&(Xo=!1,Uc(e));break;case 4:s=Nt,Nt=Vl(e.stateNode.containerInfo),et(t,e),tt(e),Nt=s;break;case 12:et(t,e),tt(e);break;case 31:et(t,e),tt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Nl(e,s)));break;case 13:et(t,e),tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(zl=it()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Nl(e,s)));break;case 22:r=e.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,T=Zt,E=Ue;if(Zt=T||r,Ue=E||f,et(t,e),Ue=E,Zt=T,tt(e),s&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||f||Zt||Ue||Za(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){f=a=t;try{if(l=f.stateNode,r)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=f.stateNode;var z=f.memoizedProps.style,S=z!=null&&z.hasOwnProperty("display")?z.display:null;d.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(F){pe(f,f.return,F)}}}else if(t.tag===6){if(a===null){f=t;try{f.stateNode.nodeValue=r?"":f.memoizedProps}catch(F){pe(f,f.return,F)}}}else if(t.tag===18){if(a===null){f=t;try{var A=f.stateNode;r?Cu(A,!0):Cu(f.stateNode,!1)}catch(F){pe(f,f.return,F)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Nl(e,a))));break;case 19:et(t,e),tt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Nl(e,s)));break;case 30:break;case 21:break;default:et(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{for(var a,s=e.return;s!==null;){if(Rc(s)){a=s;break}s=s.return}if(a==null)throw Error(n(160));switch(a.tag){case 27:var r=a.stateNode,l=Yo(e);Bl(e,l,r);break;case 5:var o=a.stateNode;a.flags&32&&(is(o,""),a.flags&=-33);var d=Yo(e);Bl(e,d,o);break;case 3:case 4:var f=a.stateNode.containerInfo,T=Yo(e);Vo(e,T,f);break;default:throw Error(n(161))}}catch(E){pe(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $t(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Bc(e,t.alternate,t),t=t.sibling}function Za(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ka(4,t,t.return),Za(t);break;case 1:Ht(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Cc(t,t.return,a),Za(t);break;case 27:Rr(t.stateNode);case 26:case 5:Ht(t,t.return),Za(t);break;case 22:t.memoizedState===null&&Za(t);break;case 30:Za(t);break;default:Za(t)}e=e.sibling}}function ea(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,r=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:ea(r,l,a),gr(4,l);break;case 1:if(ea(r,l,a),s=l,r=s.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(T){pe(s,s.return,T)}if(s=l,r=s.updateQueue,r!==null){var d=s.stateNode;try{var f=r.shared.hiddenCallbacks;if(f!==null)for(r.shared.hiddenCallbacks=null,r=0;r<f.length;r++)f0(f[r],d)}catch(T){pe(s,s.return,T)}}a&&o&64&&Sc(l),hr(l,l.return);break;case 27:Mc(l);case 26:case 5:ea(r,l,a),a&&s===null&&o&4&&Ac(l),hr(l,l.return);break;case 12:ea(r,l,a);break;case 31:ea(r,l,a),a&&o&4&&zc(r,l);break;case 13:ea(r,l,a),a&&o&4&&Lc(r,l);break;case 22:l.memoizedState===null&&ea(r,l,a),hr(l,l.return);break;case 30:break;default:ea(r,l,a)}t=t.sibling}}function Qo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&rr(a))}function Wo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rr(e))}function Dt(e,t,a,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hc(e,t,a,s),t=t.sibling}function Hc(e,t,a,s){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(e,t,a,s),r&2048&&gr(9,t);break;case 1:Dt(e,t,a,s);break;case 3:Dt(e,t,a,s),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rr(e)));break;case 12:if(r&2048){Dt(e,t,a,s),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,d=l.onPostCommit;typeof d=="function"&&d(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){pe(t,t.return,f)}}else Dt(e,t,a,s);break;case 31:Dt(e,t,a,s);break;case 13:Dt(e,t,a,s);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?Dt(e,t,a,s):kr(e,t):l._visibility&2?Dt(e,t,a,s):(l._visibility|=2,As(e,t,a,s,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Qo(o,t);break;case 24:Dt(e,t,a,s),r&2048&&Wo(t.alternate,t);break;default:Dt(e,t,a,s)}}function As(e,t,a,s,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,d=a,f=s,T=o.flags;switch(o.tag){case 0:case 11:case 15:As(l,o,d,f,r),gr(8,o);break;case 23:break;case 22:var E=o.stateNode;o.memoizedState!==null?E._visibility&2?As(l,o,d,f,r):kr(l,o):(E._visibility|=2,As(l,o,d,f,r)),r&&T&2048&&Qo(o.alternate,o);break;case 24:As(l,o,d,f,r),r&&T&2048&&Wo(o.alternate,o);break;default:As(l,o,d,f,r)}t=t.sibling}}function kr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,s=t,r=s.flags;switch(s.tag){case 22:kr(a,s),r&2048&&Qo(s.alternate,s);break;case 24:kr(a,s),r&2048&&Wo(s.alternate,s);break;default:kr(a,s)}t=t.sibling}}var vr=8192;function Rs(e,t,a){if(e.subtreeFlags&vr)for(e=e.child;e!==null;)Oc(e,t,a),e=e.sibling}function Oc(e,t,a){switch(e.tag){case 26:Rs(e,t,a),e.flags&vr&&e.memoizedState!==null&&nb(a,Nt,e.memoizedState,e.memoizedProps);break;case 5:Rs(e,t,a);break;case 3:case 4:var s=Nt;Nt=Vl(e.stateNode.containerInfo),Rs(e,t,a),Nt=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=vr,vr=16777216,Rs(e,t,a),vr=s):Rs(e,t,a));break;default:Rs(e,t,a)}}function Fc(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Ge=s,Gc(s,e)}Fc(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_c(e),e=e.sibling}function _c(e){switch(e.tag){case 0:case 11:case 15:yr(e),e.flags&2048&&ka(9,e,e.return);break;case 3:yr(e);break;case 12:yr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dl(e)):yr(e);break;default:yr(e)}}function Dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var s=t[a];Ge=s,Gc(s,e)}Fc(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ka(8,t,t.return),Dl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(t));break;default:Dl(t)}e=e.sibling}}function Gc(e,t){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:ka(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:rr(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Ge=s;else e:for(a=e;Ge!==null;){s=Ge;var r=s.sibling,l=s.return;if(Nc(s),s===a){Ge=null;break e}if(r!==null){r.return=l,Ge=r;break e}Ge=l}}}var Tp={getCacheForType:function(e){var t=Ye(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ye(ze).controller.signal}},Sp=typeof WeakMap=="function"?WeakMap:Map,ce=0,ye=null,se=null,le=0,fe=0,ft=null,va=!1,Ms=!1,Po=!1,ta=0,Ee=0,ya=0,Ja=0,Ko=0,pt=0,Es=0,wr=null,at=null,Zo=!1,zl=0,qc=0,Ll=1/0,jl=null,wa=null,Fe=0,Ta=null,Bs=null,aa=0,Jo=0,$o=null,Ic=null,Tr=0,en=null;function bt(){return(ce&2)!==0&&le!==0?le&-le:B.T!==null?on():ld()}function Yc(){if(pt===0)if((le&536870912)===0||oe){var e=Ir;Ir<<=1,(Ir&3932160)===0&&(Ir=262144),pt=e}else pt=536870912;return e=ut.current,e!==null&&(e.flags|=32),pt}function st(e,t,a){(e===ye&&(fe===2||fe===9)||e.cancelPendingCommit!==null)&&(Ns(e,0),Sa(e,le,pt,!1)),Ys(e,a),((ce&2)===0||e!==ye)&&(e===ye&&((ce&2)===0&&(Ja|=a),Ee===4&&Sa(e,le,pt,!1)),Ot(e))}function Vc(e,t,a){if((ce&6)!==0)throw Error(n(327));var s=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Is(e,t),r=s?Rp(e,t):an(e,t,!0),l=s;do{if(r===0){Ms&&!s&&Sa(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!Cp(a)){r=an(e,t,!1),l=!1;continue}if(r===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var d=e;r=wr;var f=d.current.memoizedState.isDehydrated;if(f&&(Ns(d,o).flags|=256),o=an(d,o,!1),o!==2){if(Po&&!f){d.errorRecoveryDisabledLanes|=l,Ja|=l,r=4;break e}l=at,at=r,l!==null&&(at===null?at=l:at.push.apply(at,l))}r=o}if(l=!1,r!==2)continue}}if(r===1){Ns(e,0),Sa(e,t,0,!0);break}e:{switch(s=e,l=r,l){case 0:case 1:throw Error(n(345));case 4:if((t&4194048)!==t)break;case 6:Sa(s,t,pt,!va);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(n(329))}if((t&62914560)===t&&(r=zl+300-it(),10<r)){if(Sa(s,t,pt,!va),Vr(s,0,!0)!==0)break e;aa=t,s.timeoutHandle=wu(Xc.bind(null,s,a,at,jl,Zo,t,pt,Ja,Es,va,l,"Throttled",-0,0),r);break e}Xc(s,a,at,jl,Zo,t,pt,Ja,Es,va,l,null,-0,0)}}break}while(!0);Ot(e)}function Xc(e,t,a,s,r,l,o,d,f,T,E,z,S,A){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gt},Oc(t,l,z);var F=(l&62914560)===l?zl-it():(l&4194048)===l?qc-it():0;if(F=db(z,F),F!==null){aa=l,e.cancelPendingCommit=F(eu.bind(null,e,t,l,a,s,r,o,d,f,E,z,null,S,A)),Sa(e,l,o,!T);return}}eu(e,t,l,a,s,r,o,d,f)}function Cp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var r=a[s],l=r.getSnapshot;r=r.value;try{if(!dt(l(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sa(e,t,a,s){t&=~Ko,t&=~Ja,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var r=t;0<r;){var l=31-nt(r),o=1<<l;s[l]=-1,r&=~o}a!==0&&ad(e,a,t)}function Ul(){return(ce&6)===0?(Sr(0),!1):!0}function tn(){if(se!==null){if(fe===0)var e=se.return;else e=se,Vt=Ia=null,go(e),ys=null,ir=0,e=se;for(;e!==null;)Tc(e.alternate,e),e=e.return;se=null}}function Ns(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Vp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,tn(),ye=e,se=a=It(e.current,null),le=t,fe=0,ft=null,va=!1,Ms=Is(e,t),Po=!1,Es=pt=Ko=Ja=ya=Ee=0,at=wr=null,Zo=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var r=31-nt(s),l=1<<r;t|=e[r],s&=~l}return ta=t,sl(),a}function Qc(e,t){J=null,B.H=pr,t===vs||t===ul?(t=d0(),fe=3):t===ro?(t=d0(),fe=4):fe=t===zo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,se===null&&(Ee=1,Cl(e,vt(t,e.current)))}function Wc(){var e=ut.current;return e===null?!0:(le&4194048)===le?St===null:(le&62914560)===le||(le&536870912)!==0?e===St:!1}function Pc(){var e=B.H;return B.H=pr,e===null?pr:e}function Kc(){var e=B.A;return B.A=Tp,e}function Hl(){Ee=4,va||(le&4194048)!==le&&ut.current!==null||(Ms=!0),(ya&134217727)===0&&(Ja&134217727)===0||ye===null||Sa(ye,le,pt,!1)}function an(e,t,a){var s=ce;ce|=2;var r=Pc(),l=Kc();(ye!==e||le!==t)&&(jl=null,Ns(e,t)),t=!1;var o=Ee;e:do try{if(fe!==0&&se!==null){var d=se,f=ft;switch(fe){case 8:tn(),o=6;break e;case 3:case 2:case 9:case 6:ut.current===null&&(t=!0);var T=fe;if(fe=0,ft=null,Ds(e,d,f,T),a&&Ms){o=0;break e}break;default:T=fe,fe=0,ft=null,Ds(e,d,f,T)}}Ap(),o=Ee;break}catch(E){Qc(e,E)}while(!0);return t&&e.shellSuspendCounter++,Vt=Ia=null,ce=s,B.H=r,B.A=l,se===null&&(ye=null,le=0,sl()),o}function Ap(){for(;se!==null;)Zc(se)}function Rp(e,t){var a=ce;ce|=2;var s=Pc(),r=Kc();ye!==e||le!==t?(jl=null,Ll=it()+500,Ns(e,t)):Ms=Is(e,t);e:do try{if(fe!==0&&se!==null){t=se;var l=ft;t:switch(fe){case 1:fe=0,ft=null,Ds(e,t,l,1);break;case 2:case 9:if(o0(l)){fe=0,ft=null,Jc(t);break}t=function(){fe!==2&&fe!==9||ye!==e||(fe=7),Ot(e)},l.then(t,t);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:o0(l)?(fe=0,ft=null,Jc(t)):(fe=0,ft=null,Ds(e,t,l,7));break;case 5:var o=null;switch(se.tag){case 26:o=se.memoizedState;case 5:case 27:var d=se;if(o?Hu(o):d.stateNode.complete){fe=0,ft=null;var f=d.sibling;if(f!==null)se=f;else{var T=d.return;T!==null?(se=T,Ol(T)):se=null}break t}}fe=0,ft=null,Ds(e,t,l,5);break;case 6:fe=0,ft=null,Ds(e,t,l,6);break;case 8:tn(),Ee=6;break e;default:throw Error(n(462))}}Mp();break}catch(E){Qc(e,E)}while(!0);return Vt=Ia=null,B.H=s,B.A=r,ce=a,se!==null?0:(ye=null,le=0,sl(),Ee)}function Mp(){for(;se!==null&&!Km();)Zc(se)}function Zc(e){var t=yc(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Ol(e):se=t}function Jc(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=bc(a,t,t.pendingProps,t.type,void 0,le);break;case 11:t=bc(a,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:go(t);default:Tc(a,t),t=se=Kd(t,ta),t=yc(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Ol(e):se=t}function Ds(e,t,a,s){Vt=Ia=null,go(t),ys=null,ir=0;var r=t.return;try{if(xp(e,r,t,a,le)){Ee=1,Cl(e,vt(a,e.current)),se=null;return}}catch(l){if(r!==null)throw se=r,l;Ee=1,Cl(e,vt(a,e.current)),se=null;return}t.flags&32768?(oe||s===1?e=!0:Ms||(le&536870912)!==0?e=!1:(va=e=!0,(s===2||s===9||s===3||s===6)&&(s=ut.current,s!==null&&s.tag===13&&(s.flags|=16384))),$c(t,e)):Ol(t)}function Ol(e){var t=e;do{if((t.flags&32768)!==0){$c(t,va);return}e=t.return;var a=kp(t.alternate,t,ta);if(a!==null){se=a;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);Ee===0&&(Ee=5)}function $c(e,t){do{var a=vp(e.alternate,e);if(a!==null){a.flags&=32767,se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){se=e;return}se=e=a}while(e!==null);Ee=6,se=null}function eu(e,t,a,s,r,l,o,d,f){e.cancelPendingCommit=null;do Fl();while(Fe!==0);if((ce&6)!==0)throw Error(n(327));if(t!==null){if(t===e.current)throw Error(n(177));if(l=t.lanes|t.childLanes,l|=Ii,of(e,a,l,o,d,f),e===ye&&(se=ye=null,le=0),Bs=t,Ta=e,aa=a,Jo=l,$o=r,Ic=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Dp(Gr,function(){return lu(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,r=U.p,U.p=2,o=ce,ce|=4;try{yp(e,t,a)}finally{ce=o,U.p=r,B.T=s}}Fe=1,tu(),au(),su()}}function tu(){if(Fe===1){Fe=0;var e=Ta,t=Bs,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=U.p;U.p=2;var r=ce;ce|=4;try{jc(t,e);var l=bn,o=Gd(e.containerInfo),d=l.focusedElem,f=l.selectionRange;if(o!==d&&d&&d.ownerDocument&&_d(d.ownerDocument.documentElement,d)){if(f!==null&&Oi(d)){var T=f.start,E=f.end;if(E===void 0&&(E=T),"selectionStart"in d)d.selectionStart=T,d.selectionEnd=Math.min(E,d.value.length);else{var z=d.ownerDocument||document,S=z&&z.defaultView||window;if(S.getSelection){var A=S.getSelection(),F=d.textContent.length,Q=Math.min(f.start,F),he=f.end===void 0?Q:Math.min(f.end,F);!A.extend&&Q>he&&(o=he,he=Q,Q=o);var k=Fd(d,Q),x=Fd(d,he);if(k&&x&&(A.rangeCount!==1||A.anchorNode!==k.node||A.anchorOffset!==k.offset||A.focusNode!==x.node||A.focusOffset!==x.offset)){var w=z.createRange();w.setStart(k.node,k.offset),A.removeAllRanges(),Q>he?(A.addRange(w),A.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),A.addRange(w))}}}}for(z=[],A=d;A=A.parentNode;)A.nodeType===1&&z.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<z.length;d++){var N=z[d];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Zl=!!pn,bn=pn=null}finally{ce=r,U.p=s,B.T=a}}e.current=t,Fe=2}}function au(){if(Fe===2){Fe=0;var e=Ta,t=Bs,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=U.p;U.p=2;var r=ce;ce|=4;try{Bc(e,t.alternate,t)}finally{ce=r,U.p=s,B.T=a}}Fe=3}}function su(){if(Fe===4||Fe===3){Fe=0,Zm();var e=Ta,t=Bs,a=aa,s=Ic;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Fe=5:(Fe=0,Bs=Ta=null,ru(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(wa=null),ki(a),t=t.stateNode,ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(qs,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=B.T,r=U.p,U.p=2,B.T=null;try{for(var l=e.onRecoverableError,o=0;o<s.length;o++){var d=s[o];l(d.value,{componentStack:d.stack})}}finally{B.T=t,U.p=r}}(aa&3)!==0&&Fl(),Ot(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===en?Tr++:(Tr=0,en=e):Tr=0,Sr(0)}}function ru(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rr(t)))}function Fl(){return tu(),au(),su(),lu()}function lu(){if(Fe!==5)return!1;var e=Ta,t=Jo;Jo=0;var a=ki(aa),s=B.T,r=U.p;try{U.p=32>a?32:a,B.T=null,a=$o,$o=null;var l=Ta,o=aa;if(Fe=0,Bs=Ta=null,aa=0,(ce&6)!==0)throw Error(n(331));var d=ce;if(ce|=4,_c(l.current),Hc(l,l.current,o,a),ce=d,Sr(0,!1),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(qs,l)}catch{}return!0}finally{U.p=r,B.T=s,ru(e,t)}}function iu(e,t,a){t=vt(a,t),t=Do(e.stateNode,t,2),e=xa(e,t,2),e!==null&&(Ys(e,2),Ot(e))}function pe(e,t,a){if(e.tag===3)iu(e,e,a);else for(;t!==null;){if(t.tag===3){iu(t,e,a);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))){e=vt(a,e),a=oc(2),s=xa(t,a,2),s!==null&&(nc(a,s,t,e),Ys(s,2),Ot(s));break}}t=t.return}}function sn(e,t,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Sp;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(a)||(Po=!0,r.add(a),e=Ep.bind(null,e,t,a),t.then(e,e))}function Ep(e,t,a){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(le&a)===a&&(Ee===4||Ee===3&&(le&62914560)===le&&300>it()-zl?(ce&2)===0&&Ns(e,0):Ko|=a,Es===le&&(Es=0)),Ot(e)}function ou(e,t){t===0&&(t=td()),e=_a(e,t),e!==null&&(Ys(e,t),Ot(e))}function Bp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ou(e,a)}function Np(e,t){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(n(314))}s!==null&&s.delete(t),ou(e,a)}function Dp(e,t){return bi(e,t)}var _l=null,zs=null,rn=!1,Gl=!1,ln=!1,Ca=0;function Ot(e){e!==zs&&e.next===null&&(zs===null?_l=zs=e:zs=zs.next=e),Gl=!0,rn||(rn=!0,Lp())}function Sr(e,t){if(!ln&&Gl){ln=!0;do for(var a=!1,s=_l;s!==null;){if(e!==0){var r=s.pendingLanes;if(r===0)var l=0;else{var o=s.suspendedLanes,d=s.pingedLanes;l=(1<<31-nt(42|e)+1)-1,l&=r&~(o&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,uu(s,l))}else l=le,l=Vr(s,s===ye?l:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(l&3)===0||Is(s,l)||(a=!0,uu(s,l));s=s.next}while(a);ln=!1}}function zp(){nu()}function nu(){Gl=rn=!1;var e=0;Ca!==0&&Yp()&&(e=Ca);for(var t=it(),a=null,s=_l;s!==null;){var r=s.next,l=du(s,t);l===0?(s.next=null,a===null?_l=r:a.next=r,r===null&&(zs=a)):(a=s,(e!==0||(l&3)!==0)&&(Gl=!0)),s=r}Fe!==0&&Fe!==5||Sr(e),Ca!==0&&(Ca=0)}function du(e,t){for(var a=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-nt(l),d=1<<o,f=r[o];f===-1?((d&a)===0||(d&s)!==0)&&(r[o]=lf(d,t)):f<=t&&(e.expiredLanes|=d),l&=~d}if(t=ye,a=le,a=Vr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===t&&(fe===2||fe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&xi(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Is(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(s!==null&&xi(s),ki(a)){case 2:case 8:a=$n;break;case 32:a=Gr;break;case 268435456:a=ed;break;default:a=Gr}return s=cu.bind(null,e),a=bi(a,s),e.callbackPriority=t,e.callbackNode=a,t}return s!==null&&s!==null&&xi(s),e.callbackPriority=2,e.callbackNode=null,2}function cu(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var s=le;return s=Vr(e,e===ye?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Vc(e,s,t),du(e,it()),e.callbackNode!=null&&e.callbackNode===a?cu.bind(null,e):null)}function uu(e,t){if(Fl())return null;Vc(e,t,!0)}function Lp(){Xp(function(){(ce&6)!==0?bi(Jn,zp):nu()})}function on(){if(Ca===0){var e=hs;e===0&&(e=qr,qr<<=1,(qr&261888)===0&&(qr=256)),Ca=e}return Ca}function mu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pr(""+e)}function fu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function jp(e,t,a,s,r){if(t==="submit"&&a&&a.stateNode===r){var l=mu((r[Ze]||null).action),o=s.submitter;o&&(t=(t=o[Ze]||null)?mu(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var d=new $r("action","action",null,s,r);e.push({event:d,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ca!==0){var f=o?fu(r,o):new FormData(r);Ao(a,{pending:!0,data:f,method:r.method,action:l},null,f)}}else typeof l=="function"&&(d.preventDefault(),f=o?fu(r,o):new FormData(r),Ao(a,{pending:!0,data:f,method:r.method,action:l},l,f))},currentTarget:r}]})}}for(var nn=0;nn<qi.length;nn++){var dn=qi[nn],Up=dn.toLowerCase(),Hp=dn[0].toUpperCase()+dn.slice(1);Bt(Up,"on"+Hp)}Bt(Yd,"onAnimationEnd"),Bt(Vd,"onAnimationIteration"),Bt(Xd,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt($f,"onTransitionRun"),Bt(ep,"onTransitionStart"),Bt(tp,"onTransitionCancel"),Bt(Qd,"onTransitionEnd"),rs("onMouseEnter",["mouseout","mouseover"]),rs("onMouseLeave",["mouseout","mouseover"]),rs("onPointerEnter",["pointerout","pointerover"]),rs("onPointerLeave",["pointerout","pointerover"]),Ua("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ua("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ua("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ua("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ua("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Op=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cr));function pu(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],r=s.event;s=s.listeners;e:{var l=void 0;if(t)for(var o=s.length-1;0<=o;o--){var d=s[o],f=d.instance,T=d.currentTarget;if(d=d.listener,f!==l&&r.isPropagationStopped())break e;l=d,r.currentTarget=T;try{l(r)}catch(E){al(E)}r.currentTarget=null,l=f}else for(o=0;o<s.length;o++){if(d=s[o],f=d.instance,T=d.currentTarget,d=d.listener,f!==l&&r.isPropagationStopped())break e;l=d,r.currentTarget=T;try{l(r)}catch(E){al(E)}r.currentTarget=null,l=f}}}}function re(e,t){var a=t[vi];a===void 0&&(a=t[vi]=new Set);var s=e+"__bubble";a.has(s)||(bu(t,e,2,!1),a.add(s))}function cn(e,t,a){var s=0;t&&(s|=4),bu(a,e,s,t)}var ql="_reactListening"+Math.random().toString(36).slice(2);function un(e){if(!e[ql]){e[ql]=!0,nd.forEach(function(a){a!=="selectionchange"&&(Op.has(a)||cn(a,!1,e),cn(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ql]||(t[ql]=!0,cn("selectionchange",!1,t))}}function bu(e,t,a,s){switch(Yu(t)){case 2:var r=mb;break;case 8:r=fb;break;default:r=An}a=r.bind(null,t,a,e),r=void 0,!Ei||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function mn(e,t,a,s,r){var l=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var d=s.stateNode.containerInfo;if(d===r)break;if(o===4)for(o=s.return;o!==null;){var f=o.tag;if((f===3||f===4)&&o.stateNode.containerInfo===r)return;o=o.return}for(;d!==null;){if(o=ts(d),o===null)return;if(f=o.tag,f===5||f===6||f===26||f===27){s=l=o;continue e}d=d.parentNode}}s=s.return}vd(function(){var T=l,E=Ri(a),z=[];e:{var S=Wd.get(e);if(S!==void 0){var A=$r,F=e;switch(e){case"keypress":if(Zr(a)===0)break e;case"keydown":case"keyup":A=Nf;break;case"focusin":F="focus",A=zi;break;case"focusout":F="blur",A=zi;break;case"beforeblur":case"afterblur":A=zi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Lf;break;case Yd:case Vd:case Xd:A=wf;break;case Qd:A=Uf;break;case"scroll":case"scrollend":A=gf;break;case"wheel":A=Of;break;case"copy":case"cut":case"paste":A=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Cd;break;case"toggle":case"beforetoggle":A=_f}var Q=(t&4)!==0,he=!Q&&(e==="scroll"||e==="scrollend"),k=Q?S!==null?S+"Capture":null:S;Q=[];for(var x=T,w;x!==null;){var N=x;if(w=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||w===null||k===null||(N=Qs(x,k),N!=null&&Q.push(Ar(x,N,w))),he)break;x=x.return}0<Q.length&&(S=new A(S,F,null,a,E),z.push({event:S,listeners:Q}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",S&&a!==Ai&&(F=a.relatedTarget||a.fromElement)&&(ts(F)||F[es]))break e;if((A||S)&&(S=E.window===E?E:(S=E.ownerDocument)?S.defaultView||S.parentWindow:window,A?(F=a.relatedTarget||a.toElement,A=T,F=F?ts(F):null,F!==null&&(he=b(F),Q=F.tag,F!==he||Q!==5&&Q!==27&&Q!==6)&&(F=null)):(A=null,F=T),A!==F)){if(Q=Td,N="onMouseLeave",k="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(Q=Cd,N="onPointerLeave",k="onPointerEnter",x="pointer"),he=A==null?S:Xs(A),w=F==null?S:Xs(F),S=new Q(N,x+"leave",A,a,E),S.target=he,S.relatedTarget=w,N=null,ts(E)===T&&(Q=new Q(k,x+"enter",F,a,E),Q.target=w,Q.relatedTarget=he,N=Q),he=N,A&&F)t:{for(Q=Fp,k=A,x=F,w=0,N=k;N;N=Q(N))w++;N=0;for(var V=x;V;V=Q(V))N++;for(;0<w-N;)k=Q(k),w--;for(;0<N-w;)x=Q(x),N--;for(;w--;){if(k===x||x!==null&&k===x.alternate){Q=k;break t}k=Q(k),x=Q(x)}Q=null}else Q=null;A!==null&&xu(z,S,A,Q,!1),F!==null&&he!==null&&xu(z,he,F,Q,!0)}}e:{if(S=T?Xs(T):window,A=S.nodeName&&S.nodeName.toLowerCase(),A==="select"||A==="input"&&S.type==="file")var ne=zd;else if(Nd(S))if(Ld)ne=Kf;else{ne=Wf;var G=Qf}else A=S.nodeName,!A||A.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?T&&Ci(T.elementType)&&(ne=zd):ne=Pf;if(ne&&(ne=ne(e,T))){Dd(z,ne,a,E);break e}G&&G(e,S,T),e==="focusout"&&T&&S.type==="number"&&T.memoizedProps.value!=null&&Si(S,"number",S.value)}switch(G=T?Xs(T):window,e){case"focusin":(Nd(G)||G.contentEditable==="true")&&(cs=G,Fi=T,tr=null);break;case"focusout":tr=Fi=cs=null;break;case"mousedown":_i=!0;break;case"contextmenu":case"mouseup":case"dragend":_i=!1,qd(z,a,E);break;case"selectionchange":if(Jf)break;case"keydown":case"keyup":qd(z,a,E)}var ee;if(ji)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else ds?Ed(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(Ad&&a.locale!=="ko"&&(ds||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&ds&&(ee=yd()):(da=E,Bi="value"in da?da.value:da.textContent,ds=!0)),G=Il(T,ie),0<G.length&&(ie=new Sd(ie,e,null,a,E),z.push({event:ie,listeners:G}),ee?ie.data=ee:(ee=Bd(a),ee!==null&&(ie.data=ee)))),(ee=qf?If(e,a):Yf(e,a))&&(ie=Il(T,"onBeforeInput"),0<ie.length&&(G=new Sd("onBeforeInput","beforeinput",null,a,E),z.push({event:G,listeners:ie}),G.data=ee)),jp(z,e,T,a,E)}pu(z,t)})}function Ar(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Il(e,t){for(var a=t+"Capture",s=[];e!==null;){var r=e,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=Qs(e,a),r!=null&&s.unshift(Ar(e,r,l)),r=Qs(e,t),r!=null&&s.push(Ar(e,r,l))),e.tag===3)return s;e=e.return}return[]}function Fp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xu(e,t,a,s,r){for(var l=t._reactName,o=[];a!==null&&a!==s;){var d=a,f=d.alternate,T=d.stateNode;if(d=d.tag,f!==null&&f===s)break;d!==5&&d!==26&&d!==27||T===null||(f=T,r?(T=Qs(a,l),T!=null&&o.unshift(Ar(a,T,f))):r||(T=Qs(a,l),T!=null&&o.push(Ar(a,T,f)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var _p=/\r\n?/g,Gp=/\u0000|\uFFFD/g;function gu(e){return(typeof e=="string"?e:""+e).replace(_p,`
`).replace(Gp,"")}function hu(e,t){return t=gu(t),gu(e)===t}function ge(e,t,a,s,r,l){switch(a){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||is(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&is(e,""+s);break;case"className":Qr(e,"class",s);break;case"tabIndex":Qr(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Qr(e,a,s);break;case"style":hd(e,s,l);break;case"data":if(t!=="object"){Qr(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Pr(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",r.name,r,null),ge(e,t,"formEncType",r.formEncType,r,null),ge(e,t,"formMethod",r.formMethod,r,null),ge(e,t,"formTarget",r.formTarget,r,null)):(ge(e,t,"encType",r.encType,r,null),ge(e,t,"method",r.method,r,null),ge(e,t,"target",r.target,r,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Pr(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Gt);break;case"onScroll":s!=null&&re("scroll",e);break;case"onScrollEnd":s!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(n(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(n(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Pr(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":re("beforetoggle",e),re("toggle",e),Xr(e,"popover",s);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Xr(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=bf.get(a)||a,Xr(e,a,s))}}function fn(e,t,a,s,r,l){switch(a){case"style":hd(e,s,l);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(n(61));if(a=s.__html,a!=null){if(r.children!=null)throw Error(n(60));e.innerHTML=a}}break;case"children":typeof s=="string"?is(e,s):(typeof s=="number"||typeof s=="bigint")&&is(e,""+s);break;case"onScroll":s!=null&&re("scroll",e);break;case"onScrollEnd":s!=null&&re("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Gt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),l=e[Ze]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,r),typeof s=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,s,r);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Xr(e,a,s)}}}function Xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var s=!1,r=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":s=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:ge(e,t,l,o,a,null)}}r&&ge(e,t,"srcSet",a.srcSet,a,null),s&&ge(e,t,"src",a.src,a,null);return;case"input":re("invalid",e);var d=l=o=r=null,f=null,T=null;for(s in a)if(a.hasOwnProperty(s)){var E=a[s];if(E!=null)switch(s){case"name":r=E;break;case"type":o=E;break;case"checked":f=E;break;case"defaultChecked":T=E;break;case"value":l=E;break;case"defaultValue":d=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(n(137,t));break;default:ge(e,t,s,E,a,null)}}pd(e,l,d,f,T,o,r,!1);return;case"select":re("invalid",e),s=o=l=null;for(r in a)if(a.hasOwnProperty(r)&&(d=a[r],d!=null))switch(r){case"value":l=d;break;case"defaultValue":o=d;break;case"multiple":s=d;default:ge(e,t,r,d,a,null)}t=l,a=o,e.multiple=!!s,t!=null?ls(e,!!s,t,!1):a!=null&&ls(e,!!s,a,!0);return;case"textarea":re("invalid",e),l=r=s=null;for(o in a)if(a.hasOwnProperty(o)&&(d=a[o],d!=null))switch(o){case"value":s=d;break;case"defaultValue":r=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(n(91));break;default:ge(e,t,o,d,a,null)}xd(e,s,r,l);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(s=a[f],s!=null))switch(f){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ge(e,t,f,s,a,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(s=0;s<Cr.length;s++)re(Cr[s],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(T in a)if(a.hasOwnProperty(T)&&(s=a[T],s!=null))switch(T){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:ge(e,t,T,s,a,null)}return;default:if(Ci(t)){for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!==void 0&&fn(e,t,E,s,a,void 0));return}}for(d in a)a.hasOwnProperty(d)&&(s=a[d],s!=null&&ge(e,t,d,s,a,null))}function qp(e,t,a,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,o=null,d=null,f=null,T=null,E=null;for(A in a){var z=a[A];if(a.hasOwnProperty(A)&&z!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":f=z;default:s.hasOwnProperty(A)||ge(e,t,A,null,s,z)}}for(var S in s){var A=s[S];if(z=a[S],s.hasOwnProperty(S)&&(A!=null||z!=null))switch(S){case"type":l=A;break;case"name":r=A;break;case"checked":T=A;break;case"defaultChecked":E=A;break;case"value":o=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(n(137,t));break;default:A!==z&&ge(e,t,S,A,s,z)}}Ti(e,o,d,f,T,E,l,r);return;case"select":A=o=d=S=null;for(l in a)if(f=a[l],a.hasOwnProperty(l)&&f!=null)switch(l){case"value":break;case"multiple":A=f;default:s.hasOwnProperty(l)||ge(e,t,l,null,s,f)}for(r in s)if(l=s[r],f=a[r],s.hasOwnProperty(r)&&(l!=null||f!=null))switch(r){case"value":S=l;break;case"defaultValue":d=l;break;case"multiple":o=l;default:l!==f&&ge(e,t,r,l,s,f)}t=d,a=o,s=A,S!=null?ls(e,!!a,S,!1):!!s!=!!a&&(t!=null?ls(e,!!a,t,!0):ls(e,!!a,a?[]:"",!1));return;case"textarea":A=S=null;for(d in a)if(r=a[d],a.hasOwnProperty(d)&&r!=null&&!s.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:ge(e,t,d,null,s,r)}for(o in s)if(r=s[o],l=a[o],s.hasOwnProperty(o)&&(r!=null||l!=null))switch(o){case"value":S=r;break;case"defaultValue":A=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(n(91));break;default:r!==l&&ge(e,t,o,r,s,l)}bd(e,S,A);return;case"option":for(var F in a)if(S=a[F],a.hasOwnProperty(F)&&S!=null&&!s.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:ge(e,t,F,null,s,S)}for(f in s)if(S=s[f],A=a[f],s.hasOwnProperty(f)&&S!==A&&(S!=null||A!=null))switch(f){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:ge(e,t,f,S,s,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in a)S=a[Q],a.hasOwnProperty(Q)&&S!=null&&!s.hasOwnProperty(Q)&&ge(e,t,Q,null,s,S);for(T in s)if(S=s[T],A=a[T],s.hasOwnProperty(T)&&S!==A&&(S!=null||A!=null))switch(T){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(n(137,t));break;default:ge(e,t,T,S,s,A)}return;default:if(Ci(t)){for(var he in a)S=a[he],a.hasOwnProperty(he)&&S!==void 0&&!s.hasOwnProperty(he)&&fn(e,t,he,void 0,s,S);for(E in s)S=s[E],A=a[E],!s.hasOwnProperty(E)||S===A||S===void 0&&A===void 0||fn(e,t,E,S,s,A);return}}for(var k in a)S=a[k],a.hasOwnProperty(k)&&S!=null&&!s.hasOwnProperty(k)&&ge(e,t,k,null,s,S);for(z in s)S=s[z],A=a[z],!s.hasOwnProperty(z)||S===A||S==null&&A==null||ge(e,t,z,S,s,A)}function ku(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ip(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var r=a[s],l=r.transferSize,o=r.initiatorType,d=r.duration;if(l&&d&&ku(o)){for(o=0,d=r.responseEnd,s+=1;s<a.length;s++){var f=a[s],T=f.startTime;if(T>d)break;var E=f.transferSize,z=f.initiatorType;E&&ku(z)&&(f=f.responseEnd,o+=E*(f<d?1:(d-T)/(f-T)))}if(--s,t+=8*(l+o)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var pn=null,bn=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function vu(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yu(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function xn(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gn=null;function Yp(){var e=window.event;return e&&e.type==="popstate"?e===gn?!1:(gn=e,!0):(gn=null,!1)}var wu=typeof setTimeout=="function"?setTimeout:void 0,Vp=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(e){return Tu.resolve(null).then(e).catch(Qp)}:wu;function Qp(e){setTimeout(function(){throw e})}function Aa(e){return e==="head"}function Su(e,t){var a=t,s=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(r),Hs(t);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Rr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rr(a);for(var l=a.firstChild;l;){var o=l.nextSibling,d=l.nodeName;l[Vs]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&Rr(e.ownerDocument.body);a=r}while(a);Hs(t)}function Cu(e,t){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function hn(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hn(a),yi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Wp(e,t,a,s){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Vs])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Ct(e.nextSibling),e===null)break}return null}function Pp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ct(e.nextSibling),e===null))return null;return e}function Au(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ct(e.nextSibling),e===null))return null;return e}function kn(e){return e.data==="$?"||e.data==="$~"}function vn(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var s=function(){t(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var yn=null;function Ru(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Ct(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Mu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Eu(e,t,a){switch(t=Yl(a),e){case"html":if(e=t.documentElement,!e)throw Error(n(452));return e;case"head":if(e=t.head,!e)throw Error(n(453));return e;case"body":if(e=t.body,!e)throw Error(n(454));return e;default:throw Error(n(451))}}function Rr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yi(e)}var At=new Map,Bu=new Set;function Vl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sa=U.d;U.d={f:Zp,r:Jp,D:$p,C:eb,L:tb,m:ab,X:rb,S:sb,M:lb};function Zp(){var e=sa.f(),t=Ul();return e||t}function Jp(e){var t=as(e);t!==null&&t.tag===5&&t.type==="form"?Q0(t):sa.r(e)}var Ls=typeof document>"u"?null:document;function Nu(e,t,a){var s=Ls;if(s&&typeof t=="string"&&t){var r=ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Bu.has(r)||(Bu.add(r),e={rel:e,crossOrigin:a,href:t},s.querySelector(r)===null&&(t=s.createElement("link"),Xe(t,"link",e),_e(t),s.head.appendChild(t)))}}function $p(e){sa.D(e),Nu("dns-prefetch",e,null)}function eb(e,t){sa.C(e,t),Nu("preconnect",e,t)}function tb(e,t,a){sa.L(e,t,a);var s=Ls;if(s&&e&&t){var r='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+ht(a.imageSizes)+'"]')):r+='[href="'+ht(e)+'"]';var l=r;switch(t){case"style":l=js(e);break;case"script":l=Us(e)}At.has(l)||(e=M({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),At.set(l,e),s.querySelector(r)!==null||t==="style"&&s.querySelector(Mr(l))||t==="script"&&s.querySelector(Er(l))||(t=s.createElement("link"),Xe(t,"link",e),_e(t),s.head.appendChild(t)))}}function ab(e,t){sa.m(e,t);var a=Ls;if(a&&e){var s=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+ht(s)+'"][href="'+ht(e)+'"]',l=r;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Us(e)}if(!At.has(l)&&(e=M({rel:"modulepreload",href:e},t),At.set(l,e),a.querySelector(r)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Er(l)))return}s=a.createElement("link"),Xe(s,"link",e),_e(s),a.head.appendChild(s)}}}function sb(e,t,a){sa.S(e,t,a);var s=Ls;if(s&&e){var r=ss(s).hoistableStyles,l=js(e);t=t||"default";var o=r.get(l);if(!o){var d={loading:0,preload:null};if(o=s.querySelector(Mr(l)))d.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},a),(a=At.get(l))&&wn(e,a);var f=o=s.createElement("link");_e(f),Xe(f,"link",e),f._p=new Promise(function(T,E){f.onload=T,f.onerror=E}),f.addEventListener("load",function(){d.loading|=1}),f.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Xl(o,t,s)}o={type:"stylesheet",instance:o,count:1,state:d},r.set(l,o)}}}function rb(e,t){sa.X(e,t);var a=Ls;if(a&&e){var s=ss(a).hoistableScripts,r=Us(e),l=s.get(r);l||(l=a.querySelector(Er(r)),l||(e=M({src:e,async:!0},t),(t=At.get(r))&&Tn(e,t),l=a.createElement("script"),_e(l),Xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},s.set(r,l))}}function lb(e,t){sa.M(e,t);var a=Ls;if(a&&e){var s=ss(a).hoistableScripts,r=Us(e),l=s.get(r);l||(l=a.querySelector(Er(r)),l||(e=M({src:e,async:!0,type:"module"},t),(t=At.get(r))&&Tn(e,t),l=a.createElement("script"),_e(l),Xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},s.set(r,l))}}function Du(e,t,a,s){var r=(r=ae.current)?Vl(r):null;if(!r)throw Error(n(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=js(a.href),a=ss(r).hoistableStyles,s=a.get(t),s||(s={type:"style",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=js(a.href);var l=ss(r).hoistableStyles,o=l.get(e);if(o||(r=r.ownerDocument||r,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=r.querySelector(Mr(e)))&&!l._p&&(o.instance=l,o.state.loading=5),At.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(e,a),l||ib(r,e,a,o.state))),t&&s===null)throw Error(n(528,""));return o}if(t&&s!==null)throw Error(n(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Us(a),a=ss(r).hoistableScripts,s=a.get(t),s||(s={type:"script",instance:null,count:0,state:null},a.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,e))}}function js(e){return'href="'+ht(e)+'"'}function Mr(e){return'link[rel="stylesheet"]['+e+"]"}function zu(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function ib(e,t,a,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),Xe(t,"link",a),_e(t),e.head.appendChild(t))}function Us(e){return'[src="'+ht(e)+'"]'}function Er(e){return"script[async]"+e}function Lu(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(s)return t.instance=s,_e(s),s;var r=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),_e(s),Xe(s,"style",r),Xl(s,a.precedence,e),t.instance=s;case"stylesheet":r=js(a.href);var l=e.querySelector(Mr(r));if(l)return t.state.loading|=4,t.instance=l,_e(l),l;s=zu(a),(r=At.get(r))&&wn(s,r),l=(e.ownerDocument||e).createElement("link"),_e(l);var o=l;return o._p=new Promise(function(d,f){o.onload=d,o.onerror=f}),Xe(l,"link",s),t.state.loading|=4,Xl(l,a.precedence,e),t.instance=l;case"script":return l=Us(a.src),(r=e.querySelector(Er(l)))?(t.instance=r,_e(r),r):(s=a,(r=At.get(l))&&(s=M({},a),Tn(s,r)),e=e.ownerDocument||e,r=e.createElement("script"),_e(r),Xe(r,"link",s),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(n(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,Xl(s,a.precedence,e));return t.instance}function Xl(e,t,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=s.length?s[s.length-1]:null,l=r,o=0;o<s.length;o++){var d=s[o];if(d.dataset.precedence===t)l=d;else if(l!==r)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function wn(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Tn(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ql=null;function ju(e,t,a){if(Ql===null){var s=new Map,r=Ql=new Map;r.set(a,s)}else r=Ql,s=r.get(a),s||(s=new Map,r.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var l=a[r];if(!(l[Vs]||l[qe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var d=s.get(o);d?d.push(l):s.set(o,[l])}}return s}function Uu(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function ob(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nb(e,t,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=js(s.href),l=t.querySelector(Mr(r));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,_e(l);return}l=t.ownerDocument||t,s=zu(s),(r=At.get(r))&&wn(s,r),l=l.createElement("link"),_e(l);var o=l;o._p=new Promise(function(d,f){o.onload=d,o.onerror=f}),Xe(l,"link",s),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Sn=0;function db(e,t){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Sn===0&&(Sn=62500*Ip());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Sn?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(r)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pl=null;function Kl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pl=new Map,t.forEach(cb,e),Pl=null,Wl.call(e))}function cb(e,t){if(!(t.state.loading&4)){var a=Pl.get(e);if(a)var s=a.get(null);else{a=new Map,Pl.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var o=r[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),s=o)}s&&a.set(null,s)}r=t.instance,o=r.getAttribute("data-precedence"),l=a.get(o)||s,l===s&&a.set(null,r),a.set(o,r),this.count++,s=Wl.bind(this),r.addEventListener("load",s),r.addEventListener("error",s),l?l.parentNode.insertBefore(r,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Br={$$typeof:O,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function ub(e,t,a,s,r,l,o,d,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=gi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gi(0),this.hiddenUpdates=gi(null),this.identifierPrefix=s,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Ou(e,t,a,s,r,l,o,d,f,T,E,z){return e=new ub(e,t,a,o,f,T,E,z,d),t=1,l===!0&&(t|=24),l=ct(3,null,null,t),e.current=l,l.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:s,isDehydrated:a,cache:t},lo(l),e}function Fu(e){return e?(e=fs,e):fs}function _u(e,t,a,s,r,l){r=Fu(r),s.context===null?s.context=r:s.pendingContext=r,s=ba(t),s.payload={element:a},l=l===void 0?null:l,l!==null&&(s.callback=l),a=xa(e,s,t),a!==null&&(st(a,e,t),nr(a,e,t))}function Gu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Cn(e,t){Gu(e,t),(e=e.alternate)&&Gu(e,t)}function qu(e){if(e.tag===13||e.tag===31){var t=_a(e,67108864);t!==null&&st(t,e,67108864),Cn(e,67108864)}}function Iu(e){if(e.tag===13||e.tag===31){var t=bt();t=hi(t);var a=_a(e,t);a!==null&&st(a,e,t),Cn(e,t)}}var Zl=!0;function mb(e,t,a,s){var r=B.T;B.T=null;var l=U.p;try{U.p=2,An(e,t,a,s)}finally{U.p=l,B.T=r}}function fb(e,t,a,s){var r=B.T;B.T=null;var l=U.p;try{U.p=8,An(e,t,a,s)}finally{U.p=l,B.T=r}}function An(e,t,a,s){if(Zl){var r=Rn(s);if(r===null)mn(e,t,s,Jl,a),Vu(e,s);else if(bb(r,e,t,a,s))s.stopPropagation();else if(Vu(e,s),t&4&&-1<pb.indexOf(e)){for(;r!==null;){var l=as(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=ja(l.pendingLanes);if(o!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var f=1<<31-nt(o);d.entanglements[1]|=f,o&=~f}Ot(l),(ce&6)===0&&(Ll=it()+500,Sr(0))}}break;case 31:case 13:d=_a(l,2),d!==null&&st(d,l,2),Ul(),Cn(l,2)}if(l=Rn(s),l===null&&mn(e,t,s,Jl,a),l===r)break;r=l}r!==null&&s.stopPropagation()}else mn(e,t,s,null,a)}}function Rn(e){return e=Ri(e),Mn(e)}var Jl=null;function Mn(e){if(Jl=null,e=ts(e),e!==null){var t=b(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=v(t),e!==null)return e;e=null}else if(a===31){if(e=C(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Jl=e,null}function Yu(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Jm()){case Jn:return 2;case $n:return 8;case Gr:case $m:return 32;case ed:return 268435456;default:return 32}default:return 32}}var En=!1,Ra=null,Ma=null,Ea=null,Nr=new Map,Dr=new Map,Ba=[],pb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vu(e,t){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(t.pointerId)}}function zr(e,t,a,s,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:s,nativeEvent:l,targetContainers:[r]},t!==null&&(t=as(t),t!==null&&qu(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function bb(e,t,a,s,r){switch(t){case"focusin":return Ra=zr(Ra,e,t,a,s,r),!0;case"dragenter":return Ma=zr(Ma,e,t,a,s,r),!0;case"mouseover":return Ea=zr(Ea,e,t,a,s,r),!0;case"pointerover":var l=r.pointerId;return Nr.set(l,zr(Nr.get(l)||null,e,t,a,s,r)),!0;case"gotpointercapture":return l=r.pointerId,Dr.set(l,zr(Dr.get(l)||null,e,t,a,s,r)),!0}return!1}function Xu(e){var t=ts(e.target);if(t!==null){var a=b(t);if(a!==null){if(t=a.tag,t===13){if(t=v(a),t!==null){e.blockedOn=t,id(e.priority,function(){Iu(a)});return}}else if(t===31){if(t=C(a),t!==null){e.blockedOn=t,id(e.priority,function(){Iu(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Rn(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Ai=s,a.target.dispatchEvent(s),Ai=null}else return t=as(a),t!==null&&qu(t),e.blockedOn=a,!1;t.shift()}return!0}function Qu(e,t,a){$l(e)&&a.delete(t)}function xb(){En=!1,Ra!==null&&$l(Ra)&&(Ra=null),Ma!==null&&$l(Ma)&&(Ma=null),Ea!==null&&$l(Ea)&&(Ea=null),Nr.forEach(Qu),Dr.forEach(Qu)}function ei(e,t){e.blockedOn===t&&(e.blockedOn=null,En||(En=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,xb)))}var ti=null;function Wu(e){ti!==e&&(ti=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ti===e&&(ti=null);for(var t=0;t<e.length;t+=3){var a=e[t],s=e[t+1],r=e[t+2];if(typeof s!="function"){if(Mn(s||a)===null)continue;break}var l=as(a);l!==null&&(e.splice(t,3),t-=3,Ao(l,{pending:!0,data:r,method:a.method,action:s},s,r))}}))}function Hs(e){function t(f){return ei(f,e)}Ra!==null&&ei(Ra,e),Ma!==null&&ei(Ma,e),Ea!==null&&ei(Ea,e),Nr.forEach(t),Dr.forEach(t);for(var a=0;a<Ba.length;a++){var s=Ba[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Xu(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var r=a[s],l=a[s+1],o=r[Ze]||null;if(typeof l=="function")o||Wu(a);else if(o){var d=null;if(l&&l.hasAttribute("formAction")){if(r=l,o=l[Ze]||null)d=o.formAction;else if(Mn(r)!==null)continue}else d=o.action;typeof d=="function"?a[s+1]=d:(a.splice(s,3),s-=3),Wu(a)}}}function Pu(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return r=o})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Bn(e){this._internalRoot=e}ai.prototype.render=Bn.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(n(409));var a=t.current,s=bt();_u(a,s,e,t,null,null)},ai.prototype.unmount=Bn.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_u(e.current,2,null,e,null,null),Ul(),t[es]=null}};function ai(e){this._internalRoot=e}ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=ld();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ba.length&&t!==0&&t<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Xu(e)}};var Ku=c.version;if(Ku!=="19.2.0")throw Error(n(527,Ku,"19.2.0"));U.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=g(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var gb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{qs=si.inject(gb),ot=si}catch{}}return jr.createRoot=function(e,t){if(!m(e))throw Error(n(299));var a=!1,s="",r=sc,l=rc,o=lc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ou(e,1,!1,null,null,a,s,null,r,l,o,Pu),e[es]=t.current,un(e),new Bn(t)},jr.hydrateRoot=function(e,t,a){if(!m(e))throw Error(n(299));var s=!1,r="",l=sc,o=rc,d=lc,f=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),t=Ou(e,1,!0,t,a??null,s,r,f,l,o,d,Pu),t.context=Fu(null),a=t.current,s=bt(),s=hi(s),r=ba(s),r.callback=null,xa(a,r,s),a=s,t.current.lanes=a,Ys(t,a),Ot(t),e[es]=t.current,un(e),new ai(t)},jr.version="19.2.0",jr}var im;function Mb(){if(im)return zn.exports;im=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),zn.exports=Rb(),zn.exports}var Eb=Mb();const Bb=km(Eb);/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var om="popstate";function Nb(i={}){function c(m,b){let{pathname:v="/",search:C="",hash:y=""}=$a(m.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),Fn("",{pathname:v,search:C,hash:y},b.state&&b.state.usr||null,b.state&&b.state.key||"default")}function u(m,b){let v=m.document.querySelector("base"),C="";if(v&&v.getAttribute("href")){let y=m.location.href,g=y.indexOf("#");C=g===-1?y:y.slice(0,g)}return C+"#"+(typeof b=="string"?b:Hr(b))}function n(m,b){xt(m.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(b)})`)}return zb(c,u,n,i)}function Ce(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function xt(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Db(){return Math.random().toString(36).substring(2,10)}function nm(i,c){return{usr:i.state,key:i.key,idx:c}}function Fn(i,c,u=null,n){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?$a(c):c,state:u,key:c&&c.key||n||Db()}}function Hr({pathname:i="/",search:c="",hash:u=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function $a(i){let c={};if(i){let u=i.indexOf("#");u>=0&&(c.hash=i.substring(u),i=i.substring(0,u));let n=i.indexOf("?");n>=0&&(c.search=i.substring(n),i=i.substring(0,n)),i&&(c.pathname=i)}return c}function zb(i,c,u,n={}){let{window:m=document.defaultView,v5Compat:b=!1}=n,v=m.history,C="POP",y=null,g=D();g==null&&(g=0,v.replaceState({...v.state,idx:g},""));function D(){return(v.state||{idx:null}).idx}function M(){C="POP";let q=D(),Y=q==null?null:q-g;g=q,y&&y({action:C,location:W.location,delta:Y})}function j(q,Y){C="PUSH";let te=Fn(W.location,q,Y);u&&u(te,q),g=D()+1;let O=nm(te,g),me=W.createHref(te);try{v.pushState(O,"",me)}catch(Ae){if(Ae instanceof DOMException&&Ae.name==="DataCloneError")throw Ae;m.location.assign(me)}b&&y&&y({action:C,location:W.location,delta:1})}function I(q,Y){C="REPLACE";let te=Fn(W.location,q,Y);u&&u(te,q),g=D();let O=nm(te,g),me=W.createHref(te);v.replaceState(O,"",me),b&&y&&y({action:C,location:W.location,delta:0})}function X(q){return Lb(q)}let W={get action(){return C},get location(){return i(m,v)},listen(q){if(y)throw new Error("A history only accepts one active listener");return m.addEventListener(om,M),y=q,()=>{m.removeEventListener(om,M),y=null}},createHref(q){return c(m,q)},createURL:X,encodeLocation(q){let Y=X(q);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:j,replace:I,go(q){return v.go(q)}};return W}function Lb(i,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(u,"No window.location.(origin|href) available to create URL");let n=typeof i=="string"?i:Hr(i);return n=n.replace(/ $/,"%20"),!c&&n.startsWith("//")&&(n=u+n),new URL(n,u)}function vm(i,c,u="/"){return jb(i,c,u,!1)}function jb(i,c,u,n){let m=typeof c=="string"?$a(c):c,b=la(m.pathname||"/",u);if(b==null)return null;let v=ym(i);Ub(v);let C=null;for(let y=0;C==null&&y<v.length;++y){let g=Qb(b);C=Vb(v[y],g,n)}return C}function ym(i,c=[],u=[],n="",m=!1){let b=(v,C,y=m,g)=>{let D={relativePath:g===void 0?v.path||"":g,caseSensitive:v.caseSensitive===!0,childrenIndex:C,route:v};if(D.relativePath.startsWith("/")){if(!D.relativePath.startsWith(n)&&y)return;Ce(D.relativePath.startsWith(n),`Absolute route path "${D.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),D.relativePath=D.relativePath.slice(n.length)}let M=ra([n,D.relativePath]),j=u.concat(D);v.children&&v.children.length>0&&(Ce(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${M}".`),ym(v.children,c,j,M,y)),!(v.path==null&&!v.index)&&c.push({path:M,score:Ib(M,v.index),routesMeta:j})};return i.forEach((v,C)=>{var y;if(v.path===""||!((y=v.path)!=null&&y.includes("?")))b(v,C);else for(let g of wm(v.path))b(v,C,!0,g)}),c}function wm(i){let c=i.split("/");if(c.length===0)return[];let[u,...n]=c,m=u.endsWith("?"),b=u.replace(/\?$/,"");if(n.length===0)return m?[b,""]:[b];let v=wm(n.join("/")),C=[];return C.push(...v.map(y=>y===""?b:[b,y].join("/"))),m&&C.push(...v),C.map(y=>i.startsWith("/")&&y===""?"/":y)}function Ub(i){i.sort((c,u)=>c.score!==u.score?u.score-c.score:Yb(c.routesMeta.map(n=>n.childrenIndex),u.routesMeta.map(n=>n.childrenIndex)))}var Hb=/^:[\w-]+$/,Ob=3,Fb=2,_b=1,Gb=10,qb=-2,dm=i=>i==="*";function Ib(i,c){let u=i.split("/"),n=u.length;return u.some(dm)&&(n+=qb),c&&(n+=Fb),u.filter(m=>!dm(m)).reduce((m,b)=>m+(Hb.test(b)?Ob:b===""?_b:Gb),n)}function Yb(i,c){return i.length===c.length&&i.slice(0,-1).every((n,m)=>n===c[m])?i[i.length-1]-c[c.length-1]:0}function Vb(i,c,u=!1){let{routesMeta:n}=i,m={},b="/",v=[];for(let C=0;C<n.length;++C){let y=n[C],g=C===n.length-1,D=b==="/"?c:c.slice(b.length)||"/",M=oi({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},D),j=y.route;if(!M&&g&&u&&!n[n.length-1].route.index&&(M=oi({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},D)),!M)return null;Object.assign(m,M.params),v.push({params:m,pathname:ra([b,M.pathname]),pathnameBase:Jb(ra([b,M.pathnameBase])),route:j}),M.pathnameBase!=="/"&&(b=ra([b,M.pathnameBase]))}return v}function oi(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[u,n]=Xb(i.path,i.caseSensitive,i.end),m=c.match(u);if(!m)return null;let b=m[0],v=b.replace(/(.)\/+$/,"$1"),C=m.slice(1);return{params:n.reduce((g,{paramName:D,isOptional:M},j)=>{if(D==="*"){let X=C[j]||"";v=b.slice(0,b.length-X.length).replace(/(.)\/+$/,"$1")}const I=C[j];return M&&!I?g[D]=void 0:g[D]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:b,pathnameBase:v,pattern:i}}function Xb(i,c=!1,u=!0){xt(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let n=[],m="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,C,y)=>(n.push({paramName:C,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(n.push({paramName:"*"}),m+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?m+="\\/*$":i!==""&&i!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,c?void 0:"i"),n]}function Qb(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return xt(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function la(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,n=i.charAt(u);return n&&n!=="/"?null:i.slice(u)||"/"}var Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pb=i=>Wb.test(i);function Kb(i,c="/"){let{pathname:u,search:n="",hash:m=""}=typeof i=="string"?$a(i):i,b;if(u)if(Pb(u))b=u;else{if(u.includes("//")){let v=u;u=u.replace(/\/\/+/g,"/"),xt(!1,`Pathnames cannot have embedded double slashes - normalizing ${v} -> ${u}`)}u.startsWith("/")?b=cm(u.substring(1),"/"):b=cm(u,c)}else b=c;return{pathname:b,search:$b(n),hash:ex(m)}}function cm(i,c){let u=c.replace(/\/+$/,"").split("/");return i.split("/").forEach(m=>{m===".."?u.length>1&&u.pop():m!=="."&&u.push(m)}),u.length>1?u.join("/"):"/"}function Hn(i,c,u,n){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Zb(i){return i.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function qn(i){let c=Zb(i);return c.map((u,n)=>n===c.length-1?u.pathname:u.pathnameBase)}function In(i,c,u,n=!1){let m;typeof i=="string"?m=$a(i):(m={...i},Ce(!m.pathname||!m.pathname.includes("?"),Hn("?","pathname","search",m)),Ce(!m.pathname||!m.pathname.includes("#"),Hn("#","pathname","hash",m)),Ce(!m.search||!m.search.includes("#"),Hn("#","search","hash",m)));let b=i===""||m.pathname==="",v=b?"/":m.pathname,C;if(v==null)C=u;else{let M=c.length-1;if(!n&&v.startsWith("..")){let j=v.split("/");for(;j[0]==="..";)j.shift(),M-=1;m.pathname=j.join("/")}C=M>=0?c[M]:"/"}let y=Kb(m,C),g=v&&v!=="/"&&v.endsWith("/"),D=(b||v===".")&&u.endsWith("/");return!y.pathname.endsWith("/")&&(g||D)&&(y.pathname+="/"),y}var ra=i=>i.join("/").replace(/\/\/+/g,"/"),Jb=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),$b=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ex=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function tx(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Tm=["POST","PUT","PATCH","DELETE"];new Set(Tm);var ax=["GET",...Tm];new Set(ax);var Fs=R.createContext(null);Fs.displayName="DataRouter";var ni=R.createContext(null);ni.displayName="DataRouterState";R.createContext(!1);var Sm=R.createContext({isTransitioning:!1});Sm.displayName="ViewTransition";var sx=R.createContext(new Map);sx.displayName="Fetchers";var rx=R.createContext(null);rx.displayName="Await";var Lt=R.createContext(null);Lt.displayName="Navigation";var Or=R.createContext(null);Or.displayName="Location";var Mt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Mt.displayName="Route";var Yn=R.createContext(null);Yn.displayName="RouteError";function lx(i,{relative:c}={}){Ce(_s(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:n}=R.useContext(Lt),{hash:m,pathname:b,search:v}=Fr(i,{relative:c}),C=b;return u!=="/"&&(C=b==="/"?u:ra([u,b])),n.createHref({pathname:C,search:v,hash:m})}function _s(){return R.useContext(Or)!=null}function ia(){return Ce(_s(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Or).location}var Cm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(i){R.useContext(Lt).static||R.useLayoutEffect(i)}function Rm(){let{isDataRoute:i}=R.useContext(Mt);return i?vx():ix()}function ix(){Ce(_s(),"useNavigate() may be used only in the context of a <Router> component.");let i=R.useContext(Fs),{basename:c,navigator:u}=R.useContext(Lt),{matches:n}=R.useContext(Mt),{pathname:m}=ia(),b=JSON.stringify(qn(n)),v=R.useRef(!1);return Am(()=>{v.current=!0}),R.useCallback((y,g={})=>{if(xt(v.current,Cm),!v.current)return;if(typeof y=="number"){u.go(y);return}let D=In(y,JSON.parse(b),m,g.relative==="path");i==null&&c!=="/"&&(D.pathname=D.pathname==="/"?c:ra([c,D.pathname])),(g.replace?u.replace:u.push)(D,g.state,g)},[c,u,b,m,i])}var ox=R.createContext(null);function nx(i){let c=R.useContext(Mt).outlet;return R.useMemo(()=>c&&R.createElement(ox.Provider,{value:i},c),[c,i])}function Mm(){let{matches:i}=R.useContext(Mt),c=i[i.length-1];return c?c.params:{}}function Fr(i,{relative:c}={}){let{matches:u}=R.useContext(Mt),{pathname:n}=ia(),m=JSON.stringify(qn(u));return R.useMemo(()=>In(i,JSON.parse(m),n,c==="path"),[i,m,n,c])}function dx(i,c){return Em(i,c)}function Em(i,c,u,n,m){var te;Ce(_s(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:b}=R.useContext(Lt),{matches:v}=R.useContext(Mt),C=v[v.length-1],y=C?C.params:{},g=C?C.pathname:"/",D=C?C.pathnameBase:"/",M=C&&C.route;{let O=M&&M.path||"";Bm(g,!M||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let j=ia(),I;if(c){let O=typeof c=="string"?$a(c):c;Ce(D==="/"||((te=O.pathname)==null?void 0:te.startsWith(D)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${O.pathname}" was given in the \`location\` prop.`),I=O}else I=j;let X=I.pathname||"/",W=X;if(D!=="/"){let O=D.replace(/^\//,"").split("/");W="/"+X.replace(/^\//,"").split("/").slice(O.length).join("/")}let q=vm(i,{pathname:W});xt(M||q!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),xt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=px(q&&q.map(O=>Object.assign({},O,{params:Object.assign({},y,O.params),pathname:ra([D,b.encodeLocation?b.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?D:ra([D,b.encodeLocation?b.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),v,u,n,m);return c&&Y?R.createElement(Or.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},Y):Y}function cx(){let i=kx(),c=tx(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),u=i instanceof Error?i.stack:null,n="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:n},b={padding:"2px 4px",backgroundColor:n},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:b},"ErrorBoundary")," or"," ",R.createElement("code",{style:b},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},c),u?R.createElement("pre",{style:m},u):null,v)}var ux=R.createElement(cx,null),mx=class extends R.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){return this.state.error!==void 0?R.createElement(Mt.Provider,{value:this.props.routeContext},R.createElement(Yn.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fx({routeContext:i,match:c,children:u}){let n=R.useContext(Fs);return n&&n.static&&n.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=c.route.id),R.createElement(Mt.Provider,{value:i},u)}function px(i,c=[],u=null,n=null,m=null){if(i==null){if(!u)return null;if(u.errors)i=u.matches;else if(c.length===0&&!u.initialized&&u.matches.length>0)i=u.matches;else return null}let b=i,v=u==null?void 0:u.errors;if(v!=null){let D=b.findIndex(M=>M.route.id&&(v==null?void 0:v[M.route.id])!==void 0);Ce(D>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),b=b.slice(0,Math.min(b.length,D+1))}let C=!1,y=-1;if(u)for(let D=0;D<b.length;D++){let M=b[D];if((M.route.HydrateFallback||M.route.hydrateFallbackElement)&&(y=D),M.route.id){let{loaderData:j,errors:I}=u,X=M.route.loader&&!j.hasOwnProperty(M.route.id)&&(!I||I[M.route.id]===void 0);if(M.route.lazy||X){C=!0,y>=0?b=b.slice(0,y+1):b=[b[0]];break}}}let g=u&&n?(D,M)=>{var j,I;n(D,{location:u.location,params:((I=(j=u.matches)==null?void 0:j[0])==null?void 0:I.params)??{},errorInfo:M})}:void 0;return b.reduceRight((D,M,j)=>{let I,X=!1,W=null,q=null;u&&(I=v&&M.route.id?v[M.route.id]:void 0,W=M.route.errorElement||ux,C&&(y<0&&j===0?(Bm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),X=!0,q=null):y===j&&(X=!0,q=M.route.hydrateFallbackElement||null)));let Y=c.concat(b.slice(0,j+1)),te=()=>{let O;return I?O=W:X?O=q:M.route.Component?O=R.createElement(M.route.Component,null):M.route.element?O=M.route.element:O=D,R.createElement(fx,{match:M,routeContext:{outlet:D,matches:Y,isDataRoute:u!=null},children:O})};return u&&(M.route.ErrorBoundary||M.route.errorElement||j===0)?R.createElement(mx,{location:u.location,revalidation:u.revalidation,component:W,error:I,children:te(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:g}):te()},null)}function Vn(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bx(i){let c=R.useContext(Fs);return Ce(c,Vn(i)),c}function xx(i){let c=R.useContext(ni);return Ce(c,Vn(i)),c}function gx(i){let c=R.useContext(Mt);return Ce(c,Vn(i)),c}function Xn(i){let c=gx(i),u=c.matches[c.matches.length-1];return Ce(u.route.id,`${i} can only be used on routes that contain a unique "id"`),u.route.id}function hx(){return Xn("useRouteId")}function kx(){var n;let i=R.useContext(Yn),c=xx("useRouteError"),u=Xn("useRouteError");return i!==void 0?i:(n=c.errors)==null?void 0:n[u]}function vx(){let{router:i}=bx("useNavigate"),c=Xn("useNavigate"),u=R.useRef(!1);return Am(()=>{u.current=!0}),R.useCallback(async(m,b={})=>{xt(u.current,Cm),u.current&&(typeof m=="number"?i.navigate(m):await i.navigate(m,{fromRouteId:c,...b}))},[i,c])}var um={};function Bm(i,c,u){!c&&!um[i]&&(um[i]=!0,xt(!1,u))}R.memo(yx);function yx({routes:i,future:c,state:u,unstable_onError:n}){return Em(i,void 0,u,n,c)}function wx({to:i,replace:c,state:u,relative:n}){Ce(_s(),"<Navigate> may be used only in the context of a <Router> component.");let{static:m}=R.useContext(Lt);xt(!m,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:b}=R.useContext(Mt),{pathname:v}=ia(),C=Rm(),y=In(i,qn(b),v,n==="path"),g=JSON.stringify(y);return R.useEffect(()=>{C(JSON.parse(g),{replace:c,state:u,relative:n})},[C,g,n,c,u]),null}function Tx(i){return nx(i.context)}function Os(i){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Sx({basename:i="/",children:c=null,location:u,navigationType:n="POP",navigator:m,static:b=!1}){Ce(!_s(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=i.replace(/^\/*/,"/"),C=R.useMemo(()=>({basename:v,navigator:m,static:b,future:{}}),[v,m,b]);typeof u=="string"&&(u=$a(u));let{pathname:y="/",search:g="",hash:D="",state:M=null,key:j="default"}=u,I=R.useMemo(()=>{let X=la(y,v);return X==null?null:{location:{pathname:X,search:g,hash:D,state:M,key:j},navigationType:n}},[v,y,g,D,M,j,n]);return xt(I!=null,`<Router basename="${v}"> is not able to match the URL "${y}${g}${D}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:R.createElement(Lt.Provider,{value:C},R.createElement(Or.Provider,{children:c,value:I}))}function Cx({children:i,location:c}){return dx(_n(i),c)}function _n(i,c=[]){let u=[];return R.Children.forEach(i,(n,m)=>{if(!R.isValidElement(n))return;let b=[...c,m];if(n.type===R.Fragment){u.push.apply(u,_n(n.props.children,b));return}Ce(n.type===Os,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!n.props.index||!n.props.children,"An index route cannot have child routes.");let v={id:n.props.id||b.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(v.children=_n(n.props.children,b)),u.push(v)}),u}var li="get",ii="application/x-www-form-urlencoded";function di(i){return i!=null&&typeof i.tagName=="string"}function Ax(i){return di(i)&&i.tagName.toLowerCase()==="button"}function Rx(i){return di(i)&&i.tagName.toLowerCase()==="form"}function Mx(i){return di(i)&&i.tagName.toLowerCase()==="input"}function Ex(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Bx(i,c){return i.button===0&&(!c||c==="_self")&&!Ex(i)}var ri=null;function Nx(){if(ri===null)try{new FormData(document.createElement("form"),0),ri=!1}catch{ri=!0}return ri}var Dx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function On(i){return i!=null&&!Dx.has(i)?(xt(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`),null):i}function zx(i,c){let u,n,m,b,v;if(Rx(i)){let C=i.getAttribute("action");n=C?la(C,c):null,u=i.getAttribute("method")||li,m=On(i.getAttribute("enctype"))||ii,b=new FormData(i)}else if(Ax(i)||Mx(i)&&(i.type==="submit"||i.type==="image")){let C=i.form;if(C==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=i.getAttribute("formaction")||C.getAttribute("action");if(n=y?la(y,c):null,u=i.getAttribute("formmethod")||C.getAttribute("method")||li,m=On(i.getAttribute("formenctype"))||On(C.getAttribute("enctype"))||ii,b=new FormData(C,i),!Nx()){let{name:g,type:D,value:M}=i;if(D==="image"){let j=g?`${g}.`:"";b.append(`${j}x`,"0"),b.append(`${j}y`,"0")}else g&&b.append(g,M)}}else{if(di(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=li,n=null,m=ii,v=i}return b&&m==="text/plain"&&(v=b,b=void 0),{action:n,method:u.toLowerCase(),encType:m,formData:b,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Qn(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function Lx(i,c,u){let n=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return n.pathname==="/"?n.pathname=`_root.${u}`:c&&la(n.pathname,c)==="/"?n.pathname=`${c.replace(/\/$/,"")}/_root.${u}`:n.pathname=`${n.pathname.replace(/\/$/,"")}.${u}`,n}async function jx(i,c){if(i.id in c)return c[i.id];try{let u=await import(i.module);return c[i.id]=u,u}catch(u){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ux(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Hx(i,c,u){let n=await Promise.all(i.map(async m=>{let b=c.routes[m.route.id];if(b){let v=await jx(b,u);return v.links?v.links():[]}return[]}));return Gx(n.flat(1).filter(Ux).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function mm(i,c,u,n,m,b){let v=(y,g)=>u[g]?y.route.id!==u[g].route.id:!0,C=(y,g)=>{var D;return u[g].pathname!==y.pathname||((D=u[g].route.path)==null?void 0:D.endsWith("*"))&&u[g].params["*"]!==y.params["*"]};return b==="assets"?c.filter((y,g)=>v(y,g)||C(y,g)):b==="data"?c.filter((y,g)=>{var M;let D=n.routes[y.route.id];if(!D||!D.hasLoader)return!1;if(v(y,g)||C(y,g))return!0;if(y.route.shouldRevalidate){let j=y.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((M=u[0])==null?void 0:M.params)||{},nextUrl:new URL(i,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function Ox(i,c,{includeHydrateFallback:u}={}){return Fx(i.map(n=>{let m=c.routes[n.route.id];if(!m)return[];let b=[m.module];return m.clientActionModule&&(b=b.concat(m.clientActionModule)),m.clientLoaderModule&&(b=b.concat(m.clientLoaderModule)),u&&m.hydrateFallbackModule&&(b=b.concat(m.hydrateFallbackModule)),m.imports&&(b=b.concat(m.imports)),b}).flat(1))}function Fx(i){return[...new Set(i)]}function _x(i){let c={},u=Object.keys(i).sort();for(let n of u)c[n]=i[n];return c}function Gx(i,c){let u=new Set;return new Set(c),i.reduce((n,m)=>{let b=JSON.stringify(_x(m));return u.has(b)||(u.add(b),n.push({key:b,link:m})),n},[])}function Nm(){let i=R.useContext(Fs);return Qn(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function qx(){let i=R.useContext(ni);return Qn(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Wn=R.createContext(void 0);Wn.displayName="FrameworkContext";function Dm(){let i=R.useContext(Wn);return Qn(i,"You must render this element inside a <HydratedRouter> element"),i}function Ix(i,c){let u=R.useContext(Wn),[n,m]=R.useState(!1),[b,v]=R.useState(!1),{onFocus:C,onBlur:y,onMouseEnter:g,onMouseLeave:D,onTouchStart:M}=c,j=R.useRef(null);R.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let W=Y=>{Y.forEach(te=>{v(te.isIntersecting)})},q=new IntersectionObserver(W,{threshold:.5});return j.current&&q.observe(j.current),()=>{q.disconnect()}}},[i]),R.useEffect(()=>{if(n){let W=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(W)}}},[n]);let I=()=>{m(!0)},X=()=>{m(!1),v(!1)};return u?i!=="intent"?[b,j,{}]:[b,j,{onFocus:Ur(C,I),onBlur:Ur(y,X),onMouseEnter:Ur(g,I),onMouseLeave:Ur(D,X),onTouchStart:Ur(M,I)}]:[!1,j,{}]}function Ur(i,c){return u=>{i&&i(u),u.defaultPrevented||c(u)}}function Yx({page:i,...c}){let{router:u}=Nm(),n=R.useMemo(()=>vm(u.routes,i,u.basename),[u.routes,i,u.basename]);return n?R.createElement(Xx,{page:i,matches:n,...c}):null}function Vx(i){let{manifest:c,routeModules:u}=Dm(),[n,m]=R.useState([]);return R.useEffect(()=>{let b=!1;return Hx(i,c,u).then(v=>{b||m(v)}),()=>{b=!0}},[i,c,u]),n}function Xx({page:i,matches:c,...u}){let n=ia(),{manifest:m,routeModules:b}=Dm(),{basename:v}=Nm(),{loaderData:C,matches:y}=qx(),g=R.useMemo(()=>mm(i,c,y,m,n,"data"),[i,c,y,m,n]),D=R.useMemo(()=>mm(i,c,y,m,n,"assets"),[i,c,y,m,n]),M=R.useMemo(()=>{if(i===n.pathname+n.search+n.hash)return[];let X=new Set,W=!1;if(c.forEach(Y=>{var O;let te=m.routes[Y.route.id];!te||!te.hasLoader||(!g.some(me=>me.route.id===Y.route.id)&&Y.route.id in C&&((O=b[Y.route.id])!=null&&O.shouldRevalidate)||te.hasClientLoader?W=!0:X.add(Y.route.id))}),X.size===0)return[];let q=Lx(i,v,"data");return W&&X.size>0&&q.searchParams.set("_routes",c.filter(Y=>X.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[q.pathname+q.search]},[v,C,n,m,g,c,i,b]),j=R.useMemo(()=>Ox(D,m),[D,m]),I=Vx(D);return R.createElement(R.Fragment,null,M.map(X=>R.createElement("link",{key:X,rel:"prefetch",as:"fetch",href:X,...u})),j.map(X=>R.createElement("link",{key:X,rel:"modulepreload",href:X,...u})),I.map(({key:X,link:W})=>R.createElement("link",{key:X,nonce:u.nonce,...W})))}function Qx(...i){return c=>{i.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zm&&(window.__reactRouterVersion="7.9.6")}catch{}function Wx({basename:i,children:c,window:u}){let n=R.useRef();n.current==null&&(n.current=Nb({window:u,v5Compat:!0}));let m=n.current,[b,v]=R.useState({action:m.action,location:m.location}),C=R.useCallback(y=>{R.startTransition(()=>v(y))},[v]);return R.useLayoutEffect(()=>m.listen(C),[m,C]),R.createElement(Sx,{basename:i,children:c,location:b.location,navigationType:b.action,navigator:m})}var Lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Da=R.forwardRef(function({onClick:c,discover:u="render",prefetch:n="none",relative:m,reloadDocument:b,replace:v,state:C,target:y,to:g,preventScrollReset:D,viewTransition:M,...j},I){let{basename:X}=R.useContext(Lt),W=typeof g=="string"&&Lm.test(g),q,Y=!1;if(typeof g=="string"&&W&&(q=g,zm))try{let Re=new URL(window.location.href),rt=g.startsWith("//")?new URL(Re.protocol+g):new URL(g),lt=la(rt.pathname,X);rt.origin===Re.origin&&lt!=null?g=lt+rt.search+rt.hash:Y=!0}catch{xt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let te=lx(g,{relative:m}),[O,me,Ae]=Ix(n,j),He=Zx(g,{replace:v,state:C,target:y,preventScrollReset:D,relative:m,viewTransition:M});function $(Re){c&&c(Re),Re.defaultPrevented||He(Re)}let Oe=R.createElement("a",{...j,...Ae,href:q||te,onClick:Y||b?c:$,ref:Qx(I,me),target:y,"data-discover":!W&&u==="render"?"true":void 0});return O&&!W?R.createElement(R.Fragment,null,Oe,R.createElement(Yx,{page:te})):Oe});Da.displayName="Link";var jm=R.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:n="",end:m=!1,style:b,to:v,viewTransition:C,children:y,...g},D){let M=Fr(v,{relative:g.relative}),j=ia(),I=R.useContext(ni),{navigator:X,basename:W}=R.useContext(Lt),q=I!=null&&ag(M)&&C===!0,Y=X.encodeLocation?X.encodeLocation(M).pathname:M.pathname,te=j.pathname,O=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;u||(te=te.toLowerCase(),O=O?O.toLowerCase():null,Y=Y.toLowerCase()),O&&W&&(O=la(O,W)||O);const me=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let Ae=te===Y||!m&&te.startsWith(Y)&&te.charAt(me)==="/",He=O!=null&&(O===Y||!m&&O.startsWith(Y)&&O.charAt(Y.length)==="/"),$={isActive:Ae,isPending:He,isTransitioning:q},Oe=Ae?c:void 0,Re;typeof n=="function"?Re=n($):Re=[n,Ae?"active":null,He?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let rt=typeof b=="function"?b($):b;return R.createElement(Da,{...g,"aria-current":Oe,className:Re,ref:D,style:rt,to:v,viewTransition:C},typeof y=="function"?y($):y)});jm.displayName="NavLink";var Px=R.forwardRef(({discover:i="render",fetcherKey:c,navigate:u,reloadDocument:n,replace:m,state:b,method:v=li,action:C,onSubmit:y,relative:g,preventScrollReset:D,viewTransition:M,...j},I)=>{let X=eg(),W=tg(C,{relative:g}),q=v.toLowerCase()==="get"?"get":"post",Y=typeof C=="string"&&Lm.test(C),te=O=>{if(y&&y(O),O.defaultPrevented)return;O.preventDefault();let me=O.nativeEvent.submitter,Ae=(me==null?void 0:me.getAttribute("formmethod"))||v;X(me||O.currentTarget,{fetcherKey:c,method:Ae,navigate:u,replace:m,state:b,relative:g,preventScrollReset:D,viewTransition:M})};return R.createElement("form",{ref:I,method:q,action:W,onSubmit:n?y:te,...j,"data-discover":!Y&&i==="render"?"true":void 0})});Px.displayName="Form";function Kx(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Um(i){let c=R.useContext(Fs);return Ce(c,Kx(i)),c}function Zx(i,{target:c,replace:u,state:n,preventScrollReset:m,relative:b,viewTransition:v}={}){let C=Rm(),y=ia(),g=Fr(i,{relative:b});return R.useCallback(D=>{if(Bx(D,c)){D.preventDefault();let M=u!==void 0?u:Hr(y)===Hr(g);C(i,{replace:M,state:n,preventScrollReset:m,relative:b,viewTransition:v})}},[y,C,g,u,n,c,i,m,b,v])}var Jx=0,$x=()=>`__${String(++Jx)}__`;function eg(){let{router:i}=Um("useSubmit"),{basename:c}=R.useContext(Lt),u=hx();return R.useCallback(async(n,m={})=>{let{action:b,method:v,encType:C,formData:y,body:g}=zx(n,c);if(m.navigate===!1){let D=m.fetcherKey||$x();await i.fetch(D,u,m.action||b,{preventScrollReset:m.preventScrollReset,formData:y,body:g,formMethod:m.method||v,formEncType:m.encType||C,flushSync:m.flushSync})}else await i.navigate(m.action||b,{preventScrollReset:m.preventScrollReset,formData:y,body:g,formMethod:m.method||v,formEncType:m.encType||C,replace:m.replace,state:m.state,fromRouteId:u,flushSync:m.flushSync,viewTransition:m.viewTransition})},[i,c,u])}function tg(i,{relative:c}={}){let{basename:u}=R.useContext(Lt),n=R.useContext(Mt);Ce(n,"useFormAction must be used inside a RouteContext");let[m]=n.matches.slice(-1),b={...Fr(i||".",{relative:c})},v=ia();if(i==null){b.search=v.search;let C=new URLSearchParams(b.search),y=C.getAll("index");if(y.some(D=>D==="")){C.delete("index"),y.filter(M=>M).forEach(M=>C.append("index",M));let D=C.toString();b.search=D?`?${D}`:""}}return(!i||i===".")&&m.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(b.pathname=b.pathname==="/"?u:ra([u,b.pathname])),Hr(b)}function ag(i,{relative:c}={}){let u=R.useContext(Sm);Ce(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Um("useViewTransitionState"),m=Fr(i,{relative:c});if(!u.isTransitioning)return!1;let b=la(u.currentLocation.pathname,n)||u.currentLocation.pathname,v=la(u.nextLocation.pathname,n)||u.nextLocation.pathname;return oi(m.pathname,v)!=null||oi(m.pathname,b)!=null}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rg=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,u,n)=>n?n.toUpperCase():u.toLowerCase()),fm=i=>{const c=rg(i);return c.charAt(0).toUpperCase()+c.slice(1)},Hm=(...i)=>i.filter((c,u,n)=>!!c&&c.trim()!==""&&n.indexOf(c)===u).join(" ").trim(),lg=i=>{for(const c in i)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ig={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=R.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:u=2,absoluteStrokeWidth:n,className:m="",children:b,iconNode:v,...C},y)=>R.createElement("svg",{ref:y,...ig,width:c,height:c,stroke:i,strokeWidth:n?Number(u)*24/Number(c):u,className:Hm("lucide",m),...!b&&!lg(C)&&{"aria-hidden":"true"},...C},[...v.map(([g,D])=>R.createElement(g,D)),...Array.isArray(b)?b:[b]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(i,c)=>{const u=R.forwardRef(({className:n,...m},b)=>R.createElement(og,{ref:b,iconNode:c,className:Hm(`lucide-${sg(fm(i))}`,`lucide-${i}`,n),...m}));return u.displayName=fm(i),u};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],dg=ke("arrow-left",ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Om=ke("arrow-up-right",cg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],mg=ke("award",ug);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],pg=ke("book-open",fg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],xg=ke("briefcase",bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],Fm=ke("chart-pie",gg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kg=ke("chevron-right",hg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yg=ke("chevron-left",vg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tg=ke("compass",wg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],_m=ke("credit-card",Sg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Gm=ke("gem",Cg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ci=ke("globe",Ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Mg=ke("heart",Rg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],qm=ke("hotel",Eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Ng=ke("house",Bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],Im=ke("laptop",Dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Lg=ke("menu",zg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Ug=ke("moon",jg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Ym=ke("plane",Hg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pm=ke("search",Og);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],_g=ke("share-2",Fg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Vm=ke("shield-check",Gg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ig=ke("sparkles",qg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Vg=ke("sun",Yg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Pn=ke("trending-up",Xg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],Xm=ke("umbrella",Qg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Pg=ke("users",Wg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zg=ke("x",Kg),Jg={id:"cc-axis-magnus-burgundy",title:"Axis Bank Magnus Burgundy Credit Card Review",excerpt:"The most rewarding credit card for HNI spenders. Up to 25% returns on spends over 1.5L per month.",content:`
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
  `,imageUrl:"/images/credit-cards/m4b-mk.png",date:"Dec 1, 2025",readTime:"6 min",tags:["HNI","Premium","Rewards","Travel"]},$g={id:"cc-hsbc-travelone",title:"HSBC TravelOne Credit Card Review (India)",excerpt:"A travel-focused card with uncapped transfers and decent travel rewards — best for frequent OTA/hotel bookers who use Accor and similar partners.",content:`
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
  `,imageUrl:"/images/credit-cards/travelone.png",date:"Dec 1, 2025",readTime:"5 min",tags:["Travel","HSBC","Rewards"]},eh={id:"cc-entry-level-guide",title:"Entry Level Credit Cards Guide 2025",excerpt:"Complete guide to beginner-friendly credit cards: SBI Cashback, HDFC Swiggy, Federal Scapia, Axis Cashback, and Amex MRCC. Perfect for first-time users with 5%+ cashback.",content:`
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
  `,imageUrl:"https://picsum.photos/800/400?random=31",date:"Dec 11, 2025",readTime:"7 min",tags:["Beginner","Cashback","Rewards"]},th={id:"cc-master-guide-2025",title:"25+ Best Credit Cards in India 2025: Complete Buyer's Guide",excerpt:"The ultimate guide to 25+ best credit cards covering entry-level cashback cards, premium travel cards, super premium cards, and HNI cards. Find your perfect card today.",content:`
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
  `,imageUrl:"https://picsum.photos/800/400?random=99",date:"Dec 11, 2025",readTime:"15 min",tags:["Master Guide","All Cards","Comprehensive"]},ah={id:"cc-hdfc-infinia-complete",title:"HDFC Bank Infinia Credit Card: Complete Review & Guide",excerpt:"The legendary dream card for credit card enthusiasts. Complete guide to Infinia's rewards, lounge access, benefits, eligibility, and how it compares to competitors.",content:`
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
  `,imageUrl:"/images/credit-cards/infinia-mk.png",date:"Dec 11, 2025",readTime:"18 min",tags:["Super Premium","Dream Card","Detailed Review"]},sh={id:"standard-chartered-ultimate",title:"Standard Chartered Ultimate Credit Card Review - Super Premium Rewards Card",excerpt:"Comprehensive review of the Standard Chartered Ultimate Credit Card featuring 3.3% reward rate, unlimited redemption options, and premium lifestyle benefits.",date:"2024-01-15",readTime:"12 min",tags:["credit cards","super premium","rewards","standard chartered"],imageUrl:"/images/credit-cards/sc-mk.png",content:`
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
  `},rh={id:"amex-platinum-charge",title:"American Express Platinum Charge Card Review - Ultra Premium Metal Card",excerpt:"In-depth review of the Amex Platinum Charge Card with Marriott Gold Elite tier, hotel memberships, lifestyle benefits, and comprehensive travel concierge services.",date:"2024-02-01",readTime:"15 min",tags:["credit cards","ultra premium","charge card","american express","lifestyle"],imageUrl:"/images/credit-cards/amex-mk.png",content:`
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
  `},lh={id:"icici-emeralde-private",title:"ICICI Emeralde Private Metal Credit Card Review - Super Premium Metal Card",excerpt:"Detailed review of ICICI Emeralde Private Metal with 3% base rewards, Taj Epicure membership, unlimited lounge access, and 3.75% milestone rewards.",date:"2024-03-15",readTime:"13 min",tags:["credit cards","super premium","metal card","icici bank","rewards"],imageUrl:"/images/credit-cards/epm-mk.png",content:`
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
  `},ih={id:"yes-bank-marquee",title:"Yes Bank Marquee Credit Card Review",excerpt:"Super Premium Credit Card with 4.5% online rewards - Best for online shoppers",readTime:"15 min read",imageUrl:"https://www.cardexpert.in/wp-content/uploads/2024/02/yes-bank-marquee-credit-card.jpg",date:"2025-12-11",tags:["credit-card","yes-bank","super-premium","rewards"],content:`<div class="space-y-8">
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
</div>`},oh={id:"hdfc-bizblack",title:"HDFC Bank BizBlack Credit Card Review",excerpt:"Business Credit Card with 5X rewards on tax payments - Best for entrepreneurs",readTime:"16 min read",imageUrl:"/images/credit-cards/hdfc-bizblack.jpg",date:"2025-12-11",tags:["credit-card","hdfc","business","tax-rewards"],content:`
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
</div>`},nh={id:"rbl-world-safari",title:"RBL Bank World Safari Credit Card Review",excerpt:"Travel Credit Card with 0% forex markup - Best for international travelers",readTime:"13 min read",imageUrl:"/images/credit-cards/world-safari-mk.png",date:"2025-12-11",tags:["credit-card","rbl","travel","forex"],content:`
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
  `},dh={id:"hdfc-marriott-bonvoy",title:"HDFC Bank Marriott Bonvoy Credit Card Review",excerpt:"Co-brand Travel Card with Free Night Awards - Best for Marriott loyalists",readTime:"14 min read",imageUrl:"/images/credit-cards/mb-mk.png",date:"2025-12-11",tags:["credit-card","hdfc","marriott","travel"],content:`
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
  `},ch={id:"amex-platinum-travel",title:"American Express Platinum Travel Credit Card Review",excerpt:"Travel Credit Card with 8.5% rewards on milestones - Best travel card in India",readTime:"15 min read",imageUrl:"/images/credit-cards/plat-travel-mk.png",date:"2025-12-11",tags:["credit-card","amex","travel","rewards"],content:`
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
  `},uh={id:"idfc-mayura-credit-card",title:"IDFC FIRST Bank Mayura Credit Card Review",excerpt:"Premium metal card with 0% forex markup, 3.3% reward rate on travel, and up to 6.6% on accelerated spends.",readTime:"12 min read",imageUrl:"/images/credit-cards/mayura-mk.png",date:"2025-12-13",tags:["credit-card","idfc","travel","forex","premium"],content:`
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
  `},mh={id:"hdfc-regalia-gold-credit-card",title:"HDFC Bank Regalia Gold Credit Card Review",excerpt:"Premium lifestyle card with Priority Pass for add-on members, quarterly milestones, and airport transfers.",readTime:"14 min read",imageUrl:"/images/credit-cards/regalia.png",date:"2025-12-13",tags:["credit-card","hdfc","travel","lounge","premium"],content:`
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
  `},fh={id:"axis-atlas-credit-card",title:"Axis Bank Atlas Credit Card Review",excerpt:"Travel card with Edge Miles system offering up to 7% return via ITC/Accor hotel transfers. Best Magnus alternative.",readTime:"13 min read",imageUrl:"/images/credit-cards/atlas-mk.png",date:"2025-12-13",tags:["credit-card","axis","travel","miles","premium"],content:`
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
  `},ph={id:"scapia-federal-credit-card",title:"Scapia Federal Bank Credit Card Review",excerpt:"Best free travel card of 2025 with 0% forex markup, 2% base rewards, and unique airport privileges.",readTime:"11 min read",imageUrl:"/images/credit-cards/scapia-mk.png",date:"2025-12-13",tags:["credit-card","scapia","federal","travel","free","forex"],content:`
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
  `},bh={id:"sbi-cashback-credit-card",title:"SBI Cashback Credit Card Review - Save 5% Online",excerpt:"Best cashback credit card in India (and the world!) with industry-leading 5% cashback on online spends.",readTime:"10 min read",imageUrl:"/images/credit-cards/sbicc-mk.png",date:"2025-12-13",tags:["credit-card","sbi","cashback","online","best"],content:`
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
  `},xh={id:"hdfc-tata-neu-infinity-credit-card",title:"HDFC Bank Tata Neu Infinity Credit Card Review",excerpt:"Best UPI credit card in 2025 with up to 10% NeuCoins on Tata brands, 5% on bill payments, and low 2% forex markup.",readTime:"11 min read",imageUrl:"/images/credit-cards/infinity-mk.png",date:"2025-12-13",tags:["credit-card","hdfc","tata-neu","upi","rupay","cashback"],content:`
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
  `},bm=i=>`
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
`,gh=[th,uh,mh,fh,ph,bh,xh,Jg,ah,sh,rh,lh,ih,oh,nh,dh,ch,$g,eh,{id:"cc-sapphire-reserve",title:"The Ultimate Guide to Premium Travel Cards",excerpt:"Is the annual fee worth it? We break down the benefits of the top contenders in the market.",content:bm("Premium Travel Cards"),imageUrl:"https://picsum.photos/800/400?random=1",date:"Oct 12, 2023",readTime:"8 min",tags:["Travel","Finance"]},{id:"cc-points-strategy",title:"Points vs. Cashback: What Should You Choose?",excerpt:"Deciding between flexible points and liquid cash can be tricky. Here is our mathematical breakdown.",content:bm("Points Strategy"),imageUrl:"https://picsum.photos/800/400?random=2",date:"Oct 15, 2023",readTime:"5 min",tags:["Strategy","Beginner"]}],hh=i=>`
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
`,kh=[{id:"miles-sweet-spots",title:"Hidden Sweet Spots in Award Charts",excerpt:"Fly business class to Europe for under 40k miles. Yes, it is possible if you know where to look.",content:hh("Airline Award Charts"),imageUrl:"https://picsum.photos/800/400?random=3",date:"Nov 01, 2023",readTime:"12 min",tags:["Travel","Hacking"]}],vh=i=>`
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
`,yh=[{id:"hotel-lifetime-status",title:"Is Lifetime Status Worth Chasing?",excerpt:"We analyze the loyalty programs of Marriott, Hyatt, and Hilton to see which one rewards loyalty best.",content:vh("Lifetime Hotel Status"),imageUrl:"https://picsum.photos/800/400?random=4",date:"Sep 20, 2023",readTime:"6 min",tags:["Hotels","Loyalty"]}],wh={id:"premium-rs-strategy",title:"Premium RS Strategy - Highly Profitable",excerpt:"Master the Relative Strength momentum strategy to buy stocks outperforming the market. Learn setup, entry rules, timeframes, and exit strategy.",readTime:"15 min read",imageUrl:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",date:"2025-12-13",tags:["trading","strategy","momentum","relative-strength","stocks"],content:`
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
  `},Th={id:"complete-5-ema-trading-system",title:"The Complete 5 EMA Trading System: From Core Mechanics to Advanced Intraday Execution",excerpt:"Master the probability-based Mean Reversion strategy. Learn the exact setup, the morning gap-fade routine, and the basket approach for consistent profits.",readTime:"18 min read",imageUrl:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",date:"2025-12-14",tags:["trading","strategy","5-ema","intraday","mean-reversion"],content:`
    <div class="mb-8 p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-slate-800/80 dark:via-indigo-900/30 dark:to-slate-800/80 rounded-xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-lg dark:shadow-xl">
      <p class="text-sm uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Abstract</p>
      <p class="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
        In the realm of algorithmic and discretionary trading, the search for a "perfect" system often leads to complexity. However, <strong>Subhashish (Power of Stocks)</strong> advocates for a probability-based approach rooted in <em>Mean Reversion</em>. This article consolidates his entire 5 EMA framework, combining the standard "Modified" setup with his advanced "Morning Routine" for trading FNO (Futures & Options) stocks.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">1</span>
      The Core Philosophy & Configuration
    </h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Theory: Mean Reversion</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      The 5 EMA strategy operates on the <strong>law of averages</strong>. Price cannot indefinitely stay away from its average. When the price stretches too far from the 5 Exponential Moving Average (EMA), it is considered <em>"overextended"</em>, making a snap-back (reversion) to the mean highly probable.
    </p>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Key Insight</p>
      <p class="text-slate-700 dark:text-slate-300">
        Unlike crossover strategies (e.g., Golden Cross), this system <strong>hunts for separation</strong>. We're looking for candles that have completely detached from the EMA—this signals exhaustion.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">TradingView Setup</h3>
    <div class="overflow-x-auto mb-8">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-800">
            <th class="text-left py-3 px-4 font-semibold">Parameter</th>
            <th class="text-left py-3 px-4 font-semibold">Setting</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="py-3 px-4 font-medium">Indicator</td><td class="py-3 px-4">Moving Average Exponential (EMA)</td></tr>
          <tr><td class="py-3 px-4 font-medium">Length</td><td class="py-3 px-4 text-lg font-bold text-indigo-600 dark:text-indigo-400">5</td></tr>
          <tr><td class="py-3 px-4 font-medium">Source</td><td class="py-3 px-4">Close</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <div class="p-5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700 text-center">
        <p class="text-3xl mb-2">📉</p>
        <p class="font-bold text-red-800 dark:text-red-300 text-lg mb-1">5-Minute Chart</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Strictly for <strong>SELLING</strong> (Short)</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700 text-center">
        <p class="text-3xl mb-2">📈</p>
        <p class="font-bold text-green-800 dark:text-green-300 text-lg mb-1">15-Minute Chart</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Strictly for <strong>BUYING</strong> (Long)</p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">2</span>
      The Execution Protocols
    </h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🔴 A. The Short Setup (Standard)</h3>
    
    <div class="p-6 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-xl border border-red-200 dark:border-red-700 mb-6">
      <p class="text-sm text-red-600 dark:text-red-400 font-semibold mb-3">CONTEXT: Catching a top in an uptrend or a gap-up</p>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">⏱️ Timeframe: <strong>5-Minute Chart</strong></p>
      
      <div class="space-y-4">
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">1️⃣ The "Alert Candle"</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            A candle whose <strong>High, Low, and Body do NOT touch</strong> the 5 EMA line. It must be floating <em>entirely above</em> the line.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">2️⃣ Trigger</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Mark the <strong>Low of the Alert Candle</strong>. Enter Short when the next candle <strong>breaks this Low</strong>.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">3️⃣ Stop Loss (SL)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            The <strong>High of the Alert Candle</strong>.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">4️⃣ Target</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Minimum <strong>1:3 Risk-to-Reward (RR)</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Visual Chart: Short Setup (5-minute) -->
    <div class="my-8 rounded-xl overflow-hidden border border-red-200 dark:border-red-700 shadow-lg">
      <div class="bg-red-100 dark:bg-red-900/30 px-4 py-2">
        <p class="text-center text-sm font-bold text-red-700 dark:text-red-300">📉 5-MINUTE SHORT SETUP — Live Chart Example</p>
      </div>
      <img src="/images/investing-basics/5min-5ema.png" alt="5 EMA Short Setup on 5-minute chart showing Alert Candle floating above the EMA line" class="w-full" />
      <div class="bg-slate-100 dark:bg-slate-800 px-4 py-3">
        <p class="text-xs text-slate-600 dark:text-slate-400 text-center">
          Notice how the Alert Candle is <strong>completely detached</strong> from the 5 EMA (blue line). Entry triggered on break of Alert Candle's Low.
        </p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🟢 B. The Long Setup (Standard)</h3>
    
    <div class="p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-xl border border-green-200 dark:border-green-700 mb-6">
      <p class="text-sm text-green-600 dark:text-green-400 font-semibold mb-3">CONTEXT: Catching a bottom in a downtrend</p>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">⏱️ Timeframe: <strong>15-Minute Chart</strong></p>
      
      <div class="space-y-4">
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">1️⃣ The "Alert Candle"</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            A candle floating <strong>completely below</strong> the 5 EMA line.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">2️⃣ Trigger</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Mark the <strong>High of the Alert Candle</strong>. Buy when the next candle <strong>breaks this High</strong>.
          </p>
        </div>
        
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
          <p class="font-bold text-slate-900 dark:text-white mb-2">3️⃣ Stop Loss (SL)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            The <strong>Low of the Alert Candle</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Visual Chart: Long Setup (15-minute) -->
    <div class="my-8 rounded-xl overflow-hidden border border-green-200 dark:border-green-700 shadow-lg">
      <div class="bg-green-100 dark:bg-green-900/30 px-4 py-2">
        <p class="text-center text-sm font-bold text-green-700 dark:text-green-300">📈 15-MINUTE LONG SETUP — Live Chart Example</p>
      </div>
      <img src="/images/investing-basics/15min-5ema.jpg" alt="5 EMA Long Setup on 15-minute chart showing Alert Candle floating below the EMA line" class="w-full" />
      <div class="bg-slate-100 dark:bg-slate-800 px-4 py-3">
        <p class="text-xs text-slate-600 dark:text-slate-400 text-center">
          The Alert Candle floats <strong>completely below</strong> the 5 EMA. Buy triggered when the next candle breaks the Alert Candle's High.
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">3</span>
      The Advanced Intraday Routine (The "Gap" Workflow)
    </h2>

    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      While the standard setup applies to any market condition, the <strong>"Best Use"</strong> case for this strategy is <em>fading morning gaps</em> in FNO stocks. This specific workflow is designed to capitalize on market overreactions.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Logic: Fading the News</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        In the Indian market, massive <strong>Gap Ups</strong> (often driven by overnight news) <em>frequently fail</em>. Retail traders panic-buy at the open, while institutions often book profits, causing the stock to <strong>"fade"</strong> (reverse) and fill the gap.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">⏰ The Morning Routine (9:07 AM – 9:15 AM)</h3>
    
    <div class="relative pl-8 border-l-2 border-indigo-300 dark:border-indigo-600 space-y-6 mb-8">
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Scanner Setup (9:07 - 9:15 AM)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Scan for <strong>FNO Stocks</strong> opening with a significant Gap Up <strong>(>1%)</strong>.
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">
            💡 <strong>Why FNO?</strong> They provide liquidity and allow for short-selling.
          </p>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Focus Sectors</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Watch <strong>IT and Pharma</strong> closely—they are heavily news-driven and prone to sharp reversals.
          </p>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Build the Watchlist</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Select the <strong>top 5 stocks</strong> showing the biggest gaps.
          </p>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
        <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
          <p class="font-bold text-slate-900 dark:text-white mb-1">Execution (9:15 AM onwards)</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            Apply the <strong>5 EMA Short Setup</strong> (5-min timeframe) to these stocks immediately at the open.
          </p>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🧺 The "Basket" Probability Approach</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Instead of betting everything on one index (like Bank Nifty), this method uses a <strong>"Basket"</strong> of stocks to distribute risk.
    </p>

    <div class="p-6 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 mb-8">
      <p class="font-bold text-center text-slate-900 dark:text-white mb-4">Example Scenario: 5 Gap-Up Stocks</p>
      
      <div class="grid md:grid-cols-2 gap-4 mb-4">
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
          <p class="text-3xl font-bold text-red-600 dark:text-red-400">3</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">Stocks hit Stop Loss ❌</p>
          <p class="text-xs text-slate-500">(Small, defined losses)</p>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <p class="text-3xl font-bold text-green-600 dark:text-green-400">2</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">Stocks crash/fade ✅</p>
          <p class="text-xs text-slate-500">(1:3 or 1:4 RR profits)</p>
        </div>
      </div>
      
      <div class="p-4 bg-gold-100 dark:bg-gold-900/20 rounded-lg text-center">
        <p class="font-bold text-gold-700 dark:text-gold-400">📊 RESULT</p>
        <p class="text-slate-700 dark:text-slate-300">
          The <strong>1:3 or 1:4 RR</strong> on winning trades mathematically covers the small losses → <strong>Net Profit</strong>
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">4</span>
      Position Sizing & Risk Management
    </h2>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">📐 The "Fixed Risk" Formula</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      To trade the Basket Approach effectively, you must <strong>standardize your risk</strong>.
    </p>

    <div class="p-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">1</span>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Define Daily Risk</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">e.g., ₹5,000 Total Risk for the day</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">2</span>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Split the Risk</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">₹5,000 ÷ 5 trades = <strong>₹1,000 Risk per trade</strong></p>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">3</span>
          <div>
            <p class="font-semibold text-slate-900 dark:text-white">Calculate Quantity</p>
            <p class="text-sm text-slate-600 dark:text-slate-400">Quantity = Risk per Trade ÷ Stop Loss Size</p>
          </div>
        </div>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-slate-700 mb-8">
      <p class="text-center text-sm text-slate-400 mb-2">FORMULA</p>
      <p class="text-center text-2xl font-mono text-white mb-3">
        Quantity = ₹1,000 ÷ ₹10 (SL) = <span class="text-gold-400 font-bold">100 shares</span>
      </p>
      <p class="text-center text-xs text-slate-500">
        (If Alert Candle High - Low = ₹10)
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">⚖️ Aggressive vs. Defensive Sizing</h3>
    
    <div class="grid md:grid-cols-2 gap-4 mb-8">
      <div class="p-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-700">
        <p class="font-bold text-orange-800 dark:text-orange-300 mb-3">🔥 Aggressive (2X Quantity)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">When to use:</p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc ml-4">
          <li>5 EMA signal at Daily Chart Gap Resistance</li>
          <li>During a Range Shift (Trend change)</li>
          <li>Multiple confluences align</li>
        </ul>
      </div>
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-3">🛡️ Defensive (0.5X Quantity)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">When to use:</p>
        <ul class="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc ml-4">
          <li>Trading against the trend</li>
          <li>Buying in a strong bear market</li>
          <li>Setup looks weak/unclear</li>
        </ul>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">5</span>
      Conclusion & Psychological Edge
    </h2>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-8">
      <p class="text-center text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">
        The 5 EMA system is NOT designed to be right every time.
        <br/>It is designed to be <span class="text-gold-600 dark:text-gold-400">profitable over time</span>.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">M2M Focus</h3>
    <p class="mb-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      Don't obsess over individual stocks (e.g., "Why is Reliance hitting SL?"). Focus on the <strong>Mark-to-Market (M2M)</strong> of the entire basket.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Business of Losses</h3>
    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-8">
      <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
        You are in the <strong>business of managing losses</strong>. Small, frequent losses are the <em>"cost of goods sold" (COGS)</em> for the massive winning trades that occur when a Gap Up fails or a trend reverses.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways</h3>
    <ul class="mb-8 space-y-3">
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">1️⃣</span>
        <span><strong>5 EMA = Mean Reversion</strong> — Hunt for separation, not crossovers</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">2️⃣</span>
        <span><strong>5-Min = Short</strong>, <strong>15-Min = Long</strong> — Never mix timeframes</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">3️⃣</span>
        <span><strong>Alert Candle floats</strong> — No touch to EMA means exhaustion</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">4️⃣</span>
        <span><strong>Gap Fading is the sweet spot</strong> — IT & Pharma FNO stocks at 9:15 AM</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">5️⃣</span>
        <span><strong>Basket of 5 stocks</strong> — Distribute risk, not all-in on one</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">6️⃣</span>
        <span><strong>Fixed risk per trade</strong> — Quantity = Risk ÷ SL Size</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">7️⃣</span>
        <span><strong>M2M mindset</strong> — Focus on basket P&L, not individual trades</span>
      </li>
    </ul>

    <div class="p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-gold-500/30 mb-8">
      <p class="text-center text-lg text-slate-200 leading-relaxed">
        🏆 <strong>The "Holy Grail" is not the indicator</strong> —
        <br/>it is the <span class="text-gold-400 font-bold">discipline</span> to execute the setup on high-probability candidates with <span class="text-gold-400 font-bold">strict position sizing</span>.
      </p>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> Based on Subhashish's (Power of Stocks) 5 EMA methodology | This article is for educational purposes only. Trading involves significant risk of loss. Past performance is not indicative of future results.
    </p>
  `},Sh=i=>`
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
`,Ch=[Th,wh,{id:"etf-vs-mutual-funds",title:"ETFs vs Mutual Funds: The Showdown",excerpt:"Low fees and tax efficiency make ETFs a favorite, but mutual funds still have their place.",content:Sh("ETFs and Mutual Funds"),imageUrl:"https://picsum.photos/800/400?random=5",date:"Aug 15, 2023",readTime:"7 min",tags:["Investing","Stocks"]}],Ah=i=>`
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
`,Rh=[{id:"fire-movement",title:"Understanding the FIRE Movement",excerpt:"Financial Independence, Retire Early. Is it a pipe dream or a rigorous mathematical certainty?",content:Ah("FIRE Movement"),imageUrl:"https://picsum.photos/800/400?random=6",date:"Oct 05, 2023",readTime:"10 min",tags:["Retirement","Lifestyle"]}],Mh=i=>`
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
`,Eh=[{id:"best-nomad-visas",title:"Top 5 Digital Nomad Visas for 2024",excerpt:"From Portugal to Costa Rica, countries are opening their doors to remote workers.",content:Mh("Nomad Visas"),imageUrl:"https://picsum.photos/800/400?random=7",date:"Nov 10, 2023",readTime:"9 min",tags:["Travel","Work"]}],Bh={id:"psychology-of-money",title:"The Psychology of Money, Honey",excerpt:"Doing well with money has little to do with how smart you are and a lot to do with how you behave. Financial success is a soft skill.",readTime:"16 min read",imageUrl:"/images/budgeting/iceberg-mk.jpg",date:"2025-12-14",tags:["psychology","money","behavior","investing","mindset"],content:`
    <div class="mb-8 p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 dark:from-slate-800/80 dark:via-emerald-900/30 dark:to-slate-800/80 rounded-xl border border-emerald-200/50 dark:border-emerald-500/30 shadow-lg dark:shadow-xl">
      <p class="text-xl font-serif font-bold text-slate-900 dark:text-white mb-4 text-center">Core Premise</p>
      <p class="text-lg text-slate-700 dark:text-slate-200 leading-relaxed text-center">
        Doing well with money has <strong>a little to do with how smart you are</strong> and <strong>a lot to do with how you behave</strong>. Financial success is a <em>soft skill</em>, where how you behave is more important than what you know.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">1</span>
      Luck & Risk: The Double-Edged Sword
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700 text-center">
        <p class="text-4xl mb-2">🍀</p>
        <p class="font-bold text-green-800 dark:text-green-300 text-lg">LUCK</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Forces you didn't earn that helped you succeed</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700 text-center">
        <p class="text-4xl mb-2">⚡</p>
        <p class="font-bold text-red-800 dark:text-red-300 text-lg">RISK</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Forces you didn't deserve that caused you to fail</p>
      </div>
    </div>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>They are siblings:</strong> Luck and risk are two sides of the same coin. Both are forces out of your control that influence outcomes.
    </p>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Key Insight</p>
      <p class="text-slate-700 dark:text-slate-300">
        <strong>Don't judge too harshly.</strong> When judging your own success or others' failure, realize that not everything is due to hard work or laziness. Sometimes it's just luck (or lack thereof).
      </p>
    </div>

    <p class="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Focus on patterns, not people:</strong> Study broad patterns of success rather than extreme individuals (like Bill Gates or Elon Musk), as extreme results are often influenced heavily by luck and are hard to replicate.
    </p>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">2</span>
      The Power of Compounding
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>It isn't intuitive:</strong> The human brain struggles to comprehend exponential growth. We think linearly, but wealth grows exponentially.
    </p>

    <div class="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <p class="font-bold text-center text-indigo-800 dark:text-indigo-300 mb-4 text-lg">Warren Buffett's Secret</p>
      <div class="flex flex-col md:flex-row items-center justify-center gap-6">
        <div class="text-center">
          <p class="text-4xl font-bold text-indigo-600 dark:text-indigo-400">$84.5B</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">Net Worth</p>
        </div>
        <div class="text-center">
          <p class="text-4xl font-bold text-green-600 dark:text-green-400">$81.5B</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">Came after age 65</p>
        </div>
        <div class="text-center">
          <p class="text-4xl font-bold text-amber-600 dark:text-amber-400">96%</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">From compounding</p>
        </div>
      </div>
      <p class="text-center text-sm text-slate-600 dark:text-slate-400 mt-4 italic">
        His skill is investing, but his <strong>secret is time</strong>.
      </p>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🔑 The Formula</p>
      <p class="text-lg text-slate-700 dark:text-slate-300 text-center font-medium">
        <strong>Consistency > High Returns</strong>
      </p>
      <p class="text-slate-700 dark:text-slate-300 text-center">
        You don't need the highest returns to get rich; you need <em>decent returns</em> repeated for the <em>longest period of time</em>.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">3</span>
      Getting Wealthy vs. Staying Wealthy
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Two different skills:</strong> Getting money and keeping money require opposite mindsets.
    </p>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-700">
        <p class="font-bold text-orange-800 dark:text-orange-300 mb-3 text-center text-lg">💰 Getting Money</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
          <li>✓ Taking risks</li>
          <li>✓ Being optimistic</li>
          <li>✓ Putting yourself out there</li>
          <li>✓ Boldness & action</li>
        </ul>
      </div>
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-3 text-center text-lg">🛡️ Keeping Money</p>
        <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-2">
          <li>✓ Fear (healthy paranoia)</li>
          <li>✓ Humility</li>
          <li>✓ Frugality</li>
          <li>✓ Margin of safety</li>
        </ul>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎯 Survival Mindset</p>
      <p class="text-slate-700 dark:text-slate-300">
        The most important ability in finance is <strong>survival</strong>. If you survive the bad times without being forced to sell, you can stick around long enough for compounding to work. <em>Plan for things to not go according to plan.</em>
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">4</span>
      Tails, You Win (The Power of Outliers)
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>The Long Tail:</strong> In finance, a huge percentage of results come from a tiny percentage of events.
    </p>

    <div class="p-6 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 mb-6">
      <p class="font-bold text-center text-slate-900 dark:text-white mb-4">🎬 The Disney Example</p>
      <div class="flex flex-col items-center gap-2">
        <p class="text-slate-700 dark:text-slate-300 text-center">
          Disney produced <strong>hundreds of cartoons</strong> that lost money...
        </p>
        <p class="text-3xl">↓</p>
        <p class="text-slate-700 dark:text-slate-300 text-center">
          But <strong>Snow White and the Seven Dwarfs</strong> made so much profit it covered ALL previous losses and built the entire studio.
        </p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📊 The Index Fund Logic</p>
      <p class="text-slate-700 dark:text-slate-300">
        <strong>It's okay to be wrong half the time.</strong> When you buy an index fund, you are betting that the few "winners" in the index will make up for the hundreds of "losers." You can be wrong 50% of the time and still make a fortune.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">5</span>
      Freedom: The Highest Dividend
    </h2>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">
        The highest form of wealth is the ability to wake up every morning and say:
      </p>
      <p class="text-center text-2xl font-bold text-gold-600 dark:text-gold-400 italic">
        "I can do whatever I want today."
      </p>
    </div>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Money buys autonomy:</strong> Having savings gives you options—the option to take a job with lower pay but more purpose, or the option to wait for a better opportunity during a recession.
    </p>

    <div class="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">📈 Happiness Correlation</p>
      <p class="text-slate-700 dark:text-slate-300">
        <strong>Control over your time</strong> is a stronger predictor of happiness than your salary or house size.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">6</span>
      The "Man in the Car" Paradox
    </h2>

    <!-- Iceberg Image -->
    <div class="my-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg">
      <img src="/images/budgeting/iceberg-mk.jpg" alt="Wealth vs Rich - The Iceberg Analogy showing visible wealth above water and true wealth below" class="w-full" />
      <div class="bg-slate-100 dark:bg-slate-800 px-4 py-3">
        <p class="text-xs text-slate-600 dark:text-slate-400 text-center">
          <strong>The Iceberg:</strong> What you see (cars, clothes, houses) is just the tip. True wealth is hidden beneath—savings, investments, freedom.
        </p>
      </div>
    </div>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Wealth is what you don't see:</strong> When you see someone driving a Ferrari, you don't think "that guy is cool." You think, <em>"If I had that car, people would think I'm cool."</em>
    </p>

    <div class="p-5 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-lg border-l-4 border-red-500 dark:border-red-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🔄 The Paradox</p>
      <p class="text-slate-700 dark:text-slate-300">
        People use wealth to signal status to others, but others are too busy <strong>imagining themselves with that wealth</strong> to admire the owner.
      </p>
    </div>

    <div class="overflow-x-auto mb-8">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-800">
            <th class="text-left py-3 px-4 font-semibold">Concept</th>
            <th class="text-left py-3 px-4 font-semibold">Definition</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="py-3 px-4 font-bold text-orange-600 dark:text-orange-400">Rich</td><td class="py-3 px-4">Current income (the car, the clothes, the visible stuff)</td></tr>
          <tr><td class="py-3 px-4 font-bold text-green-600 dark:text-green-400">Wealth</td><td class="py-3 px-4">Income NOT spent (savings, investments, freedom)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">7</span>
      Reasonable > Rational
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Don't be a spreadsheet:</strong> You are not a computer. You are a human with emotions.
    </p>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-2 text-center">🤖 Rational</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 text-center">
          Mathematically optimal but impossible to stick to during a market crash
        </p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
        <p class="font-bold text-green-800 dark:text-green-300 mb-2 text-center">😌 Reasonable</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 text-center">
          Slightly sub-optimal but <strong>sustainable</strong> for decades
        </p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">😴 Sleep Well at Night</p>
      <p class="text-slate-700 dark:text-slate-300">
        The best financial strategy is the one that <strong>lets you sleep at night</strong>, because that is the strategy you are most likely to stick with long-term.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">8</span>
      Save Money
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Save without a goal:</strong> You don't need a specific reason (like a house or car) to save. You should save <em>just to save</em>.
    </p>

    <div class="p-5 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-lg border-l-4 border-teal-500 dark:border-teal-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🛡️ Savings = Hedge Against the Unknown</p>
      <p class="text-slate-700 dark:text-slate-300">
        Life is unpredictable. Savings are a hedge against life's inevitable surprises.
      </p>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 Efficiency Hack</p>
      <p class="text-slate-700 dark:text-slate-300">
        Learning to be <strong>happy with less money</strong> creates a gap between what you have and what you want—similar to getting a raise, but <em>easier to control</em>.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">9</span>
      The Seduction of Pessimism
    </h2>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
        <p class="font-bold text-green-800 dark:text-green-300 mb-2 text-center">😊 Optimism</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 text-center">
          Sounds like a sales pitch
        </p>
      </div>
      <div class="p-5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700">
        <p class="font-bold text-red-800 dark:text-red-300 mb-2 text-center">😟 Pessimism</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 text-center">
          Sounds like someone trying to help you
        </p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">⏱️ Asymmetry of Time</p>
      <p class="text-slate-700 dark:text-slate-300">
        <strong>Progress is slow, ruin is fast.</strong> Growth happens gradually (compounding), while destruction happens quickly (crashes). This makes crashes more noticeable and scary, but <em>optimism is usually the correct long-term bet</em>.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-full text-amber-600 dark:text-amber-400 text-lg font-bold">10</span>
      Nothing is Free
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>The price of returns:</strong> Successful investing demands a price. But that price is not measured in dollars—it is measured in <em>volatility, fear, doubt, uncertainty, and regret</em>.
    </p>

    <div class="p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-slate-700 mb-8">
      <p class="text-center text-lg text-slate-200 leading-relaxed">
        If you lose <span class="text-red-400 font-bold">20%</span> of your portfolio value in a crash:
        <br/><br/>
        View it as the <span class="text-green-400 font-bold">"admission fee"</span> for long-term growth,
        <br/>not a <span class="text-red-400">fine</span> for doing something wrong.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">📋 Summary</h2>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-8">
      <p class="text-lg text-slate-800 dark:text-slate-200 leading-relaxed text-center italic">
        "Money is everywhere, it affects all of us, and confuses most of us. Everyone thinks about it a little differently. It offers a lesson on humility, fear, and how to make sense of the world. <strong>To master money, you don't need to be a math wizard; you just need to control your behavior.</strong>"
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways</h3>
    <ul class="mb-8 space-y-3">
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">1️⃣</span>
        <span><strong>Luck & Risk</strong> — Don't judge success or failure too harshly</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">2️⃣</span>
        <span><strong>Compounding</strong> — Time in the market beats timing the market</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">3️⃣</span>
        <span><strong>Survival</strong> — The #1 financial skill is not getting wiped out</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">4️⃣</span>
        <span><strong>Tails Win</strong> — A few big wins cover many small losses</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">5️⃣</span>
        <span><strong>Freedom</strong> — Control over time is the ultimate wealth</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">6️⃣</span>
        <span><strong>Wealth ≠ Rich</strong> — True wealth is what you don't see</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">7️⃣</span>
        <span><strong>Reasonable > Rational</strong> — Pick strategies you can stick to</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">8️⃣</span>
        <span><strong>Save</strong> — Without a specific goal, just save</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">9️⃣</span>
        <span><strong>Be Optimistic</strong> — Progress is slow, but real</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">🔟</span>
        <span><strong>Pay the Price</strong> — Volatility is a fee, not a fine</span>
      </li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> Based on "The Psychology of Money" by Morgan Housel | This article is for educational purposes only.
    </p>
  `},Nh=i=>`
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
`,Dh=[Bh,{id:"50-30-20-rule",title:"The 50/30/20 Rule Explained",excerpt:"A simple framework to manage your needs, wants, and savings effortlessly.",content:Nh("Budgeting Rules"),imageUrl:"https://picsum.photos/800/400?random=8",date:"Jul 22, 2023",readTime:"4 min",tags:["Budgeting","Basics"]}],zh={id:"courage-to-be-disliked-book-summary",title:"Why You Should Want to Be Disliked: The Secret to True Freedom",excerpt:"A comprehensive review of 'The Courage to Be Disliked' by Ichiro Kishimi and Fumitake Koga. Discover why being disliked is the price of freedom.",readTime:"20 min read",imageUrl:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",date:"2025-12-14",tags:["philosophy","psychology","adler","freedom","self-help"],content:`
    <div class="mb-8 p-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-slate-800/80 dark:via-purple-900/30 dark:to-slate-800/80 rounded-xl border border-purple-200/50 dark:border-purple-500/30 shadow-lg dark:shadow-xl">
      <p class="text-sm uppercase tracking-widest text-purple-600 dark:text-purple-400 font-semibold mb-2">Book Review</p>
      <p class="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
        This is a comprehensive summary of <strong>"The Courage to Be Disliked"</strong> by <em>Ichiro Kishimi</em> and <em>Fumitake Koga</em>. The book is structured as a Socratic dialogue between a cynical <strong>Youth</strong> (who struggles with self-loathing and social pressure) and a <strong>Philosopher</strong> (who teaches the psychology of Alfred Adler).
      </p>
      <p class="text-slate-600 dark:text-slate-400 mt-3 text-sm italic">
        Warning: This book challenges almost every conventional belief about happiness, trauma, and relationships.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600 dark:text-purple-400 text-lg font-bold">1</span>
      The Denial of Trauma
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The most <strong>controversial teaching</strong> of the book is that <em>trauma does not exist</em>—at least not in the way we think.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Etiology vs. Teleology</h3>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
        <p class="font-bold text-blue-800 dark:text-blue-300 mb-2">🔵 Freudian View (Etiology)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          <em>"Our present is determined by our past."</em>
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          If you were abused as a child, you are anxious today <strong>because</strong> of that abuse.
        </p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
        <p class="font-bold text-green-800 dark:text-green-300 mb-2">🟢 Adlerian View (Teleology)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          <em>"We are not determined by our past, but by the meaning we give it."</em>
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          We don't suffer from the shock of past events; we <strong>use</strong> them to serve a present goal.
        </p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💡 The "Goal" of Emotions</p>
      <p class="text-slate-700 dark:text-slate-300">
        The Philosopher argues that people <strong>fabricate emotions</strong> to achieve a goal.
      </p>
    </div>

    <div class="p-6 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 mb-6">
      <p class="font-bold text-center text-slate-900 dark:text-white mb-4">📖 Example: The Shut-In</p>
      <div class="flex flex-col items-center gap-3">
        <p class="text-center text-slate-700 dark:text-slate-300">A person doesn't stay inside <strong>because</strong> he has anxiety.</p>
        <p class="text-3xl">↓</p>
        <p class="text-center text-slate-700 dark:text-slate-300">He <strong>creates anxiety</strong> so that he can stay inside.</p>
        <p class="text-3xl">↓</p>
        <p class="text-center text-slate-700 dark:text-slate-300">His <strong>goal</strong> is to avoid rejection—so he manufactures fear as a tool to justify staying home.</p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎯 The Teaching</p>
      <p class="text-slate-700 dark:text-slate-300">
        <strong>You are not a victim of your past.</strong> You can change at any moment, but you are currently choosing not to because your current unhappiness is familiar and "comfortable," while change is scary and unknown.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600 dark:text-purple-400 text-lg font-bold">2</span>
      All Problems Are Interpersonal Relationship Problems
    </h2>

    <div class="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <p class="text-center text-lg font-serif font-bold text-slate-900 dark:text-white mb-3">
        Adler's Bold Claim
      </p>
      <p class="text-center text-slate-700 dark:text-slate-300 italic">
        "If you were the <strong>only person in the universe</strong>, all your problems would disappear."
      </p>
      <p class="text-center text-sm text-slate-500 dark:text-slate-400 mt-3">
        Loneliness, jealousy, inferiority, and anger only exist <em>in relation to others</em>.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Feeling of Inferiority</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <strong>Inferiority is not a fact; it is a subjective interpretation.</strong> Being short is only a "problem" if you compare yourself to tall people and value height.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">The Pursuit of Superiority</h3>
    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
        <p class="font-bold text-green-800 dark:text-green-300 mb-2 text-center">✅ Healthy Pursuit</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 text-center">
          Trying to <strong>improve yourself</strong>—walking further ahead on <em>your own path</em>.
        </p>
      </div>
      <div class="p-5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700">
        <p class="font-bold text-red-800 dark:text-red-300 mb-2 text-center">❌ Unhealthy Pursuit</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 text-center">
          Trying to be <strong>above others</strong>—stepping on others to feel "better."
        </p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎭 Life Lies</p>
      <p class="text-slate-700 dark:text-slate-300">
        We often come up with excuses (<em>"I'm too busy," "I'm not talented enough"</em>) to avoid the interpersonal tasks of life: friendship, work, and love. We dislike ourselves as a <strong>tactic</strong> to avoid getting close to others and risking hurt.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600 dark:text-purple-400 text-lg font-bold">3</span>
      Separation of Tasks (The Key to Freedom)
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This is the book's <strong>most practical tool</strong> for mental peace. Most relationship troubles arise because we intrude on other people's tasks, or allow them to intrude on ours.
    </p>

    <div class="p-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50 dark:from-teal-900/20 dark:via-cyan-900/15 dark:to-teal-900/20 rounded-xl border-2 border-teal-300 dark:border-teal-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-lg font-serif font-bold text-slate-900 dark:text-white mb-4">
        🔑 The Rule
      </p>
      <p class="text-center text-xl text-slate-700 dark:text-slate-300">
        Ask yourself: <em>"<strong>Whose task is this?</strong>"</em>
      </p>
      <p class="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
        (Who ultimately bears the consequence of this decision?)
      </p>
    </div>

    <div class="p-6 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 mb-6">
      <p class="font-bold text-center text-slate-900 dark:text-white mb-4">📖 Example: The Child Who Won't Study</p>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="bg-slate-200 dark:bg-slate-700">
              <th class="text-left py-2 px-4 font-semibold">Situation</th>
              <th class="text-left py-2 px-4 font-semibold">Whose Task?</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="py-2 px-4">Whether the child studies or not</td><td class="py-2 px-4 font-bold text-blue-600 dark:text-blue-400">Child's Task</td></tr>
            <tr><td class="py-2 px-4">Encouraging the child to study</td><td class="py-2 px-4 font-bold text-green-600 dark:text-green-400">Parent's Task</td></tr>
            <tr><td class="py-2 px-4">Forcing the child to study</td><td class="py-2 px-4 font-bold text-red-600 dark:text-red-400">Intruding ❌</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎯 The Application to "Dislike"</p>
      <p class="text-slate-700 dark:text-slate-300">
        <strong>What other people think of you is their task, not yours.</strong> You cannot control whether they like you. Trying to manage their opinion is <em>meddling in their task</em>.
      </p>
    </div>

    <div class="p-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-xl border-2 border-amber-300 dark:border-amber-600/50 shadow-lg dark:shadow-xl mb-8">
      <p class="text-center text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">
        The Core Teaching
      </p>
      <p class="text-center text-lg text-slate-700 dark:text-slate-300">
        To be <strong>free</strong>, you must have the <span class="text-gold-600 dark:text-gold-400 font-bold">courage to be disliked</span>.
      </p>
      <p class="text-center text-sm text-slate-600 dark:text-slate-400 mt-3 italic">
        Being disliked by someone is proof that you are living freely and according to your own principles, rather than living to satisfy their expectations.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600 dark:text-purple-400 text-lg font-bold">4</span>
      Horizontal vs. Vertical Relationships
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The book argues <strong>against all hierarchical relationships</strong>.
    </p>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700">
        <p class="font-bold text-red-800 dark:text-red-300 mb-3 text-center text-lg">📊 Vertical Relationships</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          Relationships based on hierarchy (parent/child, boss/employee) where one person is "higher" and the other "lower."
        </p>
        <p class="text-sm text-red-600 dark:text-red-400 font-medium">
          → Leads to competition and manipulation
        </p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
        <p class="font-bold text-green-800 dark:text-green-300 mb-3 text-center text-lg">↔️ Horizontal Relationships</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          Relationships based on consciousness of <strong>equality</strong>, even if roles differ.
        </p>
        <p class="text-sm text-green-600 dark:text-green-400 font-medium">
          → Leads to genuine connection
        </p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">⚠️ The Danger of Praise</h3>
    <div class="p-5 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-orange-900/20 dark:via-amber-900/15 dark:to-orange-900/20 rounded-lg border-l-4 border-orange-500 dark:border-orange-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">You should never praise and never rebuke.</p>
      <p class="text-slate-700 dark:text-slate-300 mb-3">
        When you praise someone (<em>"Good job!"</em>), you are subconsciously acting from a <strong>higher position judging a lower one</strong>. Praise creates dependency; the person begins acting only to receive praise.
      </p>
    </div>

    <div class="overflow-x-auto mb-8">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-slate-100 dark:bg-slate-800">
            <th class="text-left py-3 px-4 font-semibold">Instead of...</th>
            <th class="text-left py-3 px-4 font-semibold">Say...</th>
            <th class="text-left py-3 px-4 font-semibold">Why?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="py-3 px-4 text-red-600 dark:text-red-400">"Good job!"</td><td class="py-3 px-4 text-green-600 dark:text-green-400 font-medium">"Thank you!"</td><td class="py-3 px-4">Acknowledges as equal</td></tr>
          <tr><td class="py-3 px-4 text-red-600 dark:text-red-400">"You're so smart!"</td><td class="py-3 px-4 text-green-600 dark:text-green-400 font-medium">"I'm happy you did that."</td><td class="py-3 px-4">Validates without judging</td></tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600 dark:text-purple-400 text-lg font-bold">5</span>
      Community Feeling (The Goal of Life)
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The ultimate goal of Adlerian psychology is <strong>"Community Feeling"</strong>—a sense that you have a place in the world and that <em>"I am okay as I am."</em>
    </p>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      To achieve this, you must switch from <strong>Self-Attachment</strong> (obsession with how you look/feel) to <strong>Concern for Others</strong>.
    </p>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
      This transition requires three steps:
    </p>

    <div class="relative pl-8 border-l-2 border-purple-300 dark:border-purple-600 space-y-6 mb-8">
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
        <div class="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
          <p class="font-bold text-blue-800 dark:text-blue-300 mb-2">Self-Acceptance (Not Self-Affirmation)</p>
          <div class="grid md:grid-cols-2 gap-3 mt-3">
            <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded">
              <p class="text-xs font-bold text-red-600 dark:text-red-400">❌ Self-Affirmation</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">Lying to yourself ("I can do it" when you can't)</p>
            </div>
            <div class="p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <p class="text-xs font-bold text-green-600 dark:text-green-400">✅ Self-Acceptance</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">Seeing yourself truthfully ("I cannot do this right now") and moving forward without shame</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">B</div>
        <div class="p-5 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-lg border border-teal-200 dark:border-teal-700">
          <p class="font-bold text-teal-800 dark:text-teal-300 mb-2">Confidence in Others</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            You must place <strong>unconditional confidence</strong> in other people. If you doubt others or suspect them, you cannot build deep relationships.
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-2 italic">
            If someone betrays you, that is <em>their task</em>. Your task is to decide whether to trust.
          </p>
        </div>
      </div>
      
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
        <div class="p-5 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg border border-amber-200 dark:border-amber-700">
          <p class="font-bold text-amber-800 dark:text-amber-300 mb-2">Contribution to Others</p>
          <p class="text-sm text-slate-700 dark:text-slate-300">
            This is the <strong>only way</strong> to feel true worth. You feel valuable only when you subjectively feel "I am of use to someone."
          </p>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-2 italic">
            Even by just existing and being alive, you contribute to your loved ones. Recognize your worth on the level of <strong>"being,"</strong> not just "doing."
          </p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-600 dark:text-purple-400 text-lg font-bold">6</span>
      Living in the "Here and Now"
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The book concludes by dismantling the idea of <strong>life as a journey with a destination</strong>.
    </p>

    <div class="p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-lg border-l-4 border-indigo-500 dark:border-indigo-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">Life is not a line.</p>
      <p class="text-slate-700 dark:text-slate-300">
        Life is a <strong>series of dots (moments)</strong>. You cannot plan the future because it hasn't happened, and the past is gone.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">Ergon vs. Energeia</h3>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-300 dark:border-slate-600">
        <p class="font-bold text-slate-800 dark:text-slate-200 mb-2 text-center">⚙️ Kinetic (Ergon)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2 text-center">
          Movement <strong>with a destination</strong>
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-400 text-center italic">
          Like taking a train to a station. The process is incomplete until you arrive.
        </p>
      </div>
      <div class="p-5 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-lg border border-pink-200 dark:border-pink-700">
        <p class="font-bold text-pink-800 dark:text-pink-300 mb-2 text-center">💃 Energetic (Energeia)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2 text-center">
          Movement that is <strong>complete at every moment</strong>
        </p>
        <p class="text-sm text-slate-600 dark:text-slate-400 text-center italic">
          Like dancing. You aren't trying to get somewhere; the joy is in the dancing itself.
        </p>
      </div>
    </div>

    <div class="p-6 bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-100 dark:from-purple-900/30 dark:via-indigo-900/20 dark:to-purple-900/30 rounded-xl border-2 border-purple-300 dark:border-purple-600/50 shadow-lg dark:shadow-xl mb-8">
      <p class="text-center text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">
        🎯 The Teaching
      </p>
      <p class="text-center text-lg text-slate-700 dark:text-slate-300 mb-3">
        <strong>Live your life like a dance.</strong>
      </p>
      <p class="text-center text-slate-600 dark:text-slate-400">
        Don't look at the summit of the mountain; look at the ground beneath your feet. If you live earnestly in the "here and now," the resulting path will reveal itself.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">📋 Summary: The "Courage"</h2>

    <div class="p-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-gold-500/30 mb-6">
      <p class="text-lg text-slate-200 leading-relaxed text-center mb-4">
        The "<strong>Courage to be Disliked</strong>" is <span class="text-red-400">not</span> about being a jerk or trying to make people hate you.
      </p>
      <p class="text-xl text-slate-100 leading-relaxed text-center font-bold">
        It is the <span class="text-gold-400">courage to be happy</span>.
      </p>
    </div>

    <!-- The Freedom Chain -->
    <div class="p-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-900/20 dark:via-teal-900/15 dark:to-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700 mb-8">
      <p class="font-bold text-center text-emerald-800 dark:text-emerald-300 mb-4 text-lg">The Freedom Chain</p>
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-slate-900 dark:text-white">To be Happy</p>
        </div>
        <span class="text-2xl text-emerald-500">→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-slate-900 dark:text-white">You must be Free</p>
        </div>
        <span class="text-2xl text-emerald-500">→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-slate-900 dark:text-white">Stop living for others' expectations</p>
        </div>
        <span class="text-2xl text-emerald-500">→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="font-bold text-slate-900 dark:text-white">Some will dislike you</p>
        </div>
      </div>
      <p class="text-center text-emerald-700 dark:text-emerald-300 mt-4 font-medium">
        ∴ <strong>Being disliked is the price of freedom.</strong>
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways</h3>
    <ul class="mb-8 space-y-3">
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">1️⃣</span>
        <span><strong>Trauma doesn't determine you</strong> — You choose the meaning of your past</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">2️⃣</span>
        <span><strong>All problems are interpersonal</strong> — Inferiority is subjective interpretation</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">3️⃣</span>
        <span><strong>Separate tasks</strong> — What others think of you is not your task</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">4️⃣</span>
        <span><strong>Choose horizontal relationships</strong> — Use gratitude, not praise</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">5️⃣</span>
        <span><strong>Community feeling</strong> — Self-acceptance + Trust + Contribution</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">6️⃣</span>
        <span><strong>Live in the here and now</strong> — Life is a dance, not a journey</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">7️⃣</span>
        <span><strong>Being disliked = Freedom</strong> — The price of living by your principles</span>
      </li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> "The Courage to Be Disliked" by Ichiro Kishimi and Fumitake Koga | Based on Alfred Adler's Individual Psychology | This article is for educational purposes only.
    </p>
  `},Lh={id:"mans-search-for-meaning-viktor-frankl",title:"Escaping the Void: Finding Meaning in a Modern World",excerpt:"A raw, unfiltered analysis of Viktor Frankl's 'Man's Search for Meaning'. Discover the Red Pill truths about suffering, happiness, and why survival isn't pretty.",readTime:"22 min read",imageUrl:"/images/philosophy/mans-search-for-meaning.png",date:"2025-12-16",tags:["philosophy","psychology","frankl","logotherapy","resilience","existentialism"],content:`
    <div class="mb-8 p-6 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800/80 dark:via-gray-900/30 dark:to-slate-800/80 rounded-xl border border-slate-200/50 dark:border-slate-500/30 shadow-lg dark:shadow-xl">
      <p class="text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 font-semibold mb-2">Book Analysis</p>
      <p class="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
        <strong>"Man's Search for Meaning"</strong> is not just a memoir; it is a psychological treatise that argues the primary human drive is not <em>pleasure</em> (Freud) or <em>power</em> (Adler), but the <strong>pursuit of meaning</strong>.
      </p>
      <div class="mt-4 p-4 bg-white dark:bg-slate-700/50 rounded-lg border-l-4 border-slate-500">
        <p class="text-sm text-slate-600 dark:text-slate-300 italic">
          "Life is not about asking what the world can give you, but recognizing that <span class="font-bold text-slate-900 dark:text-white">life is asking you questions every day</span>, and you answer through your actions."
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-300 text-lg font-bold">1</span>
      The Experiences: A Descent into Hell
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Frankl chronicles his survival in Auschwitz and Dachau not as a hero, but as an observer. He identifies <strong>three distinct psychological phases</strong> prisoners endured:
    </p>

    <div class="grid md:grid-cols-3 gap-4 mb-8">
      <div class="p-5 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg border border-red-200 dark:border-red-700 text-center">
        <p class="text-2xl mb-2">😨</p>
        <p class="font-bold text-red-800 dark:text-red-300 mb-1">1. Shock</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">The "delusion of reprieve" — believing you'll be saved at the last second.</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
        <p class="text-2xl mb-2">😐</p>
        <p class="font-bold text-slate-800 dark:text-slate-300 mb-1">2. Apathy</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Emotional death. A necessary shell to blunt the horror of daily beatings.</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700 text-center">
        <p class="text-2xl mb-2">😶</p>
        <p class="font-bold text-green-800 dark:text-green-300 mb-1">3. Liberation</p>
        <p class="text-sm text-slate-600 dark:text-slate-400">Depersonalization. Reality feels like a dream; joy does not return instantly.</p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-red-100 dark:bg-red-900/40 rounded-full text-red-600 dark:text-red-400 text-lg font-bold">2</span>
      "Red Pill" Insights (The Harsh Truths)
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Frankl dismantles the "blue pill" illusions of fairness, happiness, and safety. These are the <strong>uncomfortable realities</strong> you must accept to find true meaning.
    </p>

    <div class="space-y-6 mb-8">
      <!-- Insight 1 -->
      <div class="p-6 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-red-500 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">💊 Truth #1: The Pursuit of Happiness is a Trap</h3>
        <p class="text-slate-700 dark:text-slate-300 mb-3">
          Frankl argues that <strong>happiness cannot be pursued; it must ensue</strong>. The modern obsession with "being happy" makes you neurotic. Happiness is a <em>side effect</em> of a meaningful life, not the goal.
        </p>
        <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p class="text-sm font-bold text-red-700 dark:text-red-300 text-center">
            STOP trying to "be happy." It makes you weak.
          </p>
        </div>
      </div>

      <!-- Insight 2 -->
      <div class="p-6 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-red-500 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">💊 Truth #2: The "Best" Did Not Survive</h3>
        <p class="text-slate-700 dark:text-slate-300 mb-3">
          Frankl candidly admits that the prisoners who survived were often those willing to betray others, steal, or brutalize. The "good" ones—who refused to compromise ethics—often died first.
        </p>
        <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p class="text-sm font-bold text-red-700 dark:text-red-300 text-center">
            Survival of the fittest is ugly. Moral superiority is no shield.
          </p>
        </div>
      </div>

      <!-- Insight 3 -->
      <div class="p-6 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-red-500 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">💊 Truth #3: Suffering is Necessary</h3>
        <p class="text-slate-700 dark:text-slate-300 mb-3">
          Modern society tries to sterilize life of pain, but suffering is an <strong>ineradicable part of life</strong>, like death. A life without suffering suggests a life without courage.
        </p>
        <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p class="text-sm font-bold text-red-700 dark:text-red-300 text-center">
            You are not entitled to a pain-free existence. It's a feature, not a bug.
          </p>
        </div>
      </div>

      <!-- Insight 4 -->
      <div class="p-6 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-red-500 shadow-sm">
        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">💊 Truth #4: You Control Nothing (Except One Thing)</h3>
        <p class="text-slate-700 dark:text-slate-300 mb-3">
          You can lose your status, family, health, and clothes in an hour. The <strong>only</strong> thing that cannot be taken is "the last of the human freedoms"—to choose your <em>attitude</em>.
        </p>
        <div class="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p class="text-sm font-bold text-red-700 dark:text-red-300 text-center">
            You are a victim of circumstance, but a MASTER of response.
          </p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full text-indigo-600 dark:text-indigo-400 text-lg font-bold">3</span>
      Logotherapy & Finding Meaning
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Frankl's therapy is <strong>future-oriented</strong>. It cures the "Existential Vacuum" (the modern feeling of emptiness) by helping patients find a "why."
    </p>

    <div class="p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 dark:from-indigo-900/20 dark:via-purple-900/15 dark:to-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700 mb-6">
      <p class="font-bold text-center text-indigo-900 dark:text-indigo-300 mb-4 text-lg">The Meaning Triad</p>
      <div class="grid md:grid-cols-3 gap-4 text-center">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="text-2xl mb-2">🛠️</p>
          <p class="font-bold text-slate-900 dark:text-white mb-1">A Deed</p>
          <p class="text-xs text-slate-600 dark:text-slate-400">Creating a work, doing a job, building a legacy.</p>
        </div>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="text-2xl mb-2">❤️</p>
          <p class="font-bold text-slate-900 dark:text-white mb-1">A Connection</p>
          <p class="text-xs text-slate-600 dark:text-slate-400">Loving someone, experiencing nature or art.</p>
        </div>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="text-2xl mb-2">🛡️</p>
          <p class="font-bold text-slate-900 dark:text-white mb-1">Attitude</p>
          <p class="text-xs text-slate-600 dark:text-slate-400">Finding courage in unavoidable suffering.</p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-10 h-10 bg-green-100 dark:bg-green-900/40 rounded-full text-green-600 dark:text-green-400 text-lg font-bold">4</span>
      Actionable Applications (Modern Guide)
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      How do you apply survivor psychology to a modern life of comfort?
    </p>

    <div class="space-y-8 mb-8">
      <!-- Action A -->
      <div class="relative pl-6 border-l-2 border-green-400 dark:border-green-600">
        <p class="font-bold text-lg text-slate-900 dark:text-white mb-2">A. The "Deathbed" Visualization</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          <strong>Shift Perspective:</strong> Imagine you are 80 years old looking back at this moment.
        </p>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p class="text-sm text-green-800 dark:text-green-300 font-medium">
            💡 ACTION: Will this problem matter? If yes, ask: "What choice will I wish I had made?" This enforces <em>Tragic Optimism</em>.
          </p>
        </div>
      </div>

      <!-- Action B -->
      <div class="relative pl-6 border-l-2 border-green-400 dark:border-green-600">
        <p class="font-bold text-lg text-slate-900 dark:text-white mb-2">B. Stop Asking, Start Answering</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          Stop asking "What is the meaning of my life?" like it's a riddle.
        </p>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p class="text-sm text-green-800 dark:text-green-300 font-medium">
            💡 ACTION: Treat life like a job interview. YOU are the one being questioned. Answer by doing your daily duties (dishes, work, family) with excellence.
          </p>
        </div>
      </div>

      <!-- Action C -->
      <div class="relative pl-6 border-l-2 border-green-400 dark:border-green-600">
        <p class="font-bold text-lg text-slate-900 dark:text-white mb-2">C. Paradoxical Intention (For Anxiety)</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          Fear brings about what you fear. Break the loop by <em>intending</em> to do the thing you fear.
        </p>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p class="text-sm text-green-800 dark:text-green-300 font-medium">
            💡 ACTION: Can't sleep? Try as hard as you can to <strong>stay awake</strong>. Afraid of stuttering? Try to <strong>stutter as much as possible</strong>.
          </p>
        </div>
      </div>

      <!-- Action D -->
      <div class="relative pl-6 border-l-2 border-green-400 dark:border-green-600">
        <p class="font-bold text-lg text-slate-900 dark:text-white mb-2">D. Suffering Management</p>
        <p class="text-sm text-slate-700 dark:text-slate-300 mb-2">
          When in pain, don't distract yourself with cheap dopamine (phone, alcohol).
        </p>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p class="text-sm text-green-800 dark:text-green-300 font-medium">
            💡 ACTION: Lean into it. Ask: "How can I bear this so my ancestors would be proud?" Suffering ceases to be suffering the moment it finds a meaning.
          </p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">The Final Takeaway</h2>

    <div class="p-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 rounded-xl border border-gold-500/30 text-center shadow-2xl">
      <p class="text-2xl font-serif italic text-slate-200 mb-6 leading-relaxed">
        "Everything can be taken from a man but one thing: the <span class="text-gold-400 font-bold">last of the human freedoms</span>—to choose one's attitude in any given set of circumstances, to choose one's own way."
      </p>
      <div class="inline-block px-4 py-2 border border-slate-600 rounded-full">
        <p class="text-sm text-slate-400 uppercase tracking-widest">Viktor Frankl</p>
      </div>
    </div>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> Analysis based on "Man's Search for Meaning" by Viktor Frankl | This article is for educational purposes only.
    </p>
  `},xm=i=>`
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
`,jh=[Lh,zh,{id:"stoicism-modern-life",title:"Stoicism for Modern Life",excerpt:"Ancient wisdom meets modern challenges. How Marcus Aurelius can help you navigate today's world.",content:xm("Stoicism"),imageUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",date:"Dec 10, 2025",readTime:"8 min",tags:["Philosophy","Stoicism","Mindset"]},{id:"mindfulness-philosophy",title:"The Philosophy of Mindfulness",excerpt:"Beyond meditation apps. Understanding the deep roots of present-moment awareness.",content:xm("Mindfulness"),imageUrl:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80",date:"Dec 8, 2025",readTime:"6 min",tags:["Philosophy","Mindfulness","Wellness"]}],Uh=i=>`
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
`,Hh=[{id:"private-jet-empty-legs",title:"How to Book Empty Leg Private Jets",excerpt:"The secret way to fly private for the price of a commercial business class ticket.",content:Uh("Private Aviation"),imageUrl:"https://picsum.photos/800/400?random=10",date:"May 12, 2023",readTime:"8 min",tags:["Luxury","Aviation"]}],Oh={id:"avoiding-action-trap-first-90-days",title:'Avoiding the "Action Trap": Expert Advice for Your First 3 Months on the Job',excerpt:"Dr. Michael Watkins reveals why rushing to prove yourself can backfire. Learn the proven framework to accelerate your impact as a new leader.",readTime:"12 min read",imageUrl:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",date:"2025-12-13",tags:["leadership","career","first-90-days","strategy","work-life"],content:`
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
  `},Fh={id:"four-hour-work-week-blueprint",title:"The 4-Hour Blueprint: How to Escape the 9-to-5 and Join the New Rich",excerpt:"Tim Ferriss's legendary framework for designing a lifestyle that values time and mobility. Learn the D.E.A.L. system to work less and live more.",readTime:"15 min read",imageUrl:"https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&auto=format&fit=crop&q=80",date:"2025-12-15",tags:["lifestyle-design","productivity","freedom","entrepreneurship","remote-work"],content:`
    <div class="mb-8 p-6 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 dark:from-slate-800/80 dark:via-orange-900/30 dark:to-slate-800/80 rounded-xl border border-orange-200/50 dark:border-orange-500/30 shadow-lg dark:shadow-xl">
      <p class="text-sm uppercase tracking-widest text-orange-600 dark:text-orange-400 font-semibold mb-2">Book Summary</p>
      <p class="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
        <strong>"The 4-Hour Work Week"</strong> by Tim Ferriss is a blueprint for escaping the traditional 9-to-5 grind and designing a lifestyle that values <em>time and mobility</em> just as much as money.
      </p>
      <p class="text-slate-600 dark:text-slate-400 mt-3 text-sm">
        Ferriss argues that you don't need to wait until retirement to enjoy life; you can live like a millionaire <strong>now</strong> by changing how you view work and wealth.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-10 text-slate-900 dark:text-white">🎯 The Core Philosophy: The "New Rich"</h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The core philosophy is built around a group of people Ferriss calls the <strong>"New Rich" (NR)</strong>. Unlike the "Old Rich" (who have millions of dollars but work 80 hours a week to keep it), the New Rich focus on <strong>Relative Income</strong>.
    </p>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-5 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-lg border border-slate-300 dark:border-slate-600">
        <p class="font-bold text-slate-700 dark:text-slate-300 mb-2 text-center">👔 Old Rich</p>
        <p class="text-3xl font-bold text-center text-slate-600 dark:text-slate-400 mb-2">$100,000/yr</p>
        <p class="text-sm text-center text-slate-500 dark:text-slate-400">Working 80 hours/week</p>
        <p class="text-xs text-center text-slate-400 dark:text-slate-500 mt-2">= $24/hour</p>
      </div>
      <div class="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
        <p class="font-bold text-green-700 dark:text-green-300 mb-2 text-center">🏝️ New Rich</p>
        <p class="text-3xl font-bold text-center text-green-600 dark:text-green-400 mb-2">$50,000/yr</p>
        <p class="text-sm text-center text-slate-600 dark:text-slate-400">Working 4 hours/week</p>
        <p class="text-xs text-center text-green-600 dark:text-green-400 mt-2 font-bold">= $240/hour ⭐</p>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">💰 Relative Income</p>
      <p class="text-slate-700 dark:text-slate-300">
        The New Rich value money based on <strong>how much time it takes to earn it</strong>. Earning less but working 20x fewer hours makes you "richer" in what matters most: <em>time and freedom</em>.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">📋 The D.E.A.L. Framework</h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The book is structured around the acronym <strong>D.E.A.L.</strong>—four steps to escape the rat race:
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      <div class="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-center text-white">
        <p class="text-3xl font-bold">D</p>
        <p class="text-xs font-medium">Definition</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-lg text-center text-white">
        <p class="text-3xl font-bold">E</p>
        <p class="text-xs font-medium">Elimination</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-center text-white">
        <p class="text-3xl font-bold">A</p>
        <p class="text-xs font-medium">Automation</p>
      </div>
      <div class="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg text-center text-white">
        <p class="text-3xl font-bold">L</p>
        <p class="text-xs font-medium">Liberation</p>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white text-xl font-bold">D</span>
      Definition — Change Your Mindset
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This step is about <strong>redefining what you want</strong> out of life and replacing "long-term planning" (retirement) with short-term lifestyle design.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">❌ The "Deferred Life Plan" is Broken</h3>
    
    <div class="p-6 bg-gradient-to-br from-red-50 via-rose-50 to-red-50 dark:from-red-900/20 dark:via-rose-900/15 dark:to-red-900/20 rounded-xl border border-red-200 dark:border-red-700 mb-6">
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="text-sm text-slate-600 dark:text-slate-400">Age 25-65</p>
          <p class="font-bold text-slate-900 dark:text-white">Work Hard</p>
          <p class="text-2xl">😓</p>
        </div>
        <span class="text-2xl text-red-500">→</span>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg shadow">
          <p class="text-sm text-slate-600 dark:text-slate-400">Age 65+</p>
          <p class="font-bold text-slate-900 dark:text-white">Relax (maybe)</p>
          <p class="text-2xl">😴</p>
        </div>
      </div>
      <p class="text-center text-sm text-red-600 dark:text-red-400 mt-4 font-medium">
        Trading your most energetic years for a retirement you might be too tired to enjoy.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">✨ Dreamlining</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Instead of vague goals like "I want to be rich," Ferriss suggests <strong>Dreamlining</strong>—calculating the <em>exact monthly cost</em> of your dream lifestyle.
    </p>

    <div class="overflow-x-auto mb-6">
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="bg-blue-100 dark:bg-blue-900/30">
            <th class="text-left py-3 px-4 font-semibold">Dream</th>
            <th class="text-left py-3 px-4 font-semibold">Perceived Cost</th>
            <th class="text-left py-3 px-4 font-semibold">Actual Monthly Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="py-2 px-4">Drive an Aston Martin</td><td class="py-2 px-4 text-red-500">$200,000</td><td class="py-2 px-4 text-green-600 font-bold">$2,500/month lease</td></tr>
          <tr><td class="py-2 px-4">Live in Bali for a month</td><td class="py-2 px-4 text-red-500">$10,000</td><td class="py-2 px-4 text-green-600 font-bold">$1,500 total</td></tr>
          <tr><td class="py-2 px-4">Personal trainer</td><td class="py-2 px-4 text-red-500">Luxury</td><td class="py-2 px-4 text-green-600 font-bold">$200/month</td></tr>
        </tbody>
      </table>
    </div>
    <p class="mb-6 text-sm text-slate-600 dark:text-slate-400 italic text-center">
      Often, the cost of your dream life is much lower than you think!
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🎯 Fear-Setting</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Most people don't chase their dreams because they are <strong>afraid</strong>. Ferriss suggests writing down the absolute worst things that could happen if you tried and failed:
    </p>

    <div class="p-5 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-lg border border-slate-200 dark:border-slate-600 mb-8">
      <p class="font-bold text-center text-slate-900 dark:text-white mb-3">Fear-Setting Exercise</p>
      <div class="space-y-2">
        <p class="text-sm text-slate-700 dark:text-slate-300">❓ What's the worst that could happen?</p>
        <p class="text-sm text-slate-600 dark:text-slate-400 ml-4">→ I lose some money, have to get a normal job again</p>
        <p class="text-sm text-slate-700 dark:text-slate-300">❓ Is it permanent?</p>
        <p class="text-sm text-green-600 dark:text-green-400 ml-4 font-medium">→ No, it's temporary and fixable!</p>
      </div>
      <p class="text-center text-sm text-amber-600 dark:text-amber-400 mt-4 font-medium">
        Once you realize the risk is manageable, you are free to act.
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full text-white text-xl font-bold">E</span>
      Elimination — Do Only What Matters
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This isn't about time management (doing more things in less time); it's about doing <strong>only the important things</strong>.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">📊 The Pareto Principle (80/20 Rule)</h3>
    
    <div class="p-6 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 dark:from-red-900/20 dark:via-orange-900/15 dark:to-red-900/20 rounded-xl border-2 border-red-300 dark:border-red-600/50 shadow-lg dark:shadow-xl mb-6">
      <p class="text-center text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">
        80% of your results come from 20% of your efforts
      </p>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg text-center">
          <p class="text-4xl font-bold text-red-500">20%</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">of tasks → 80% of income</p>
        </div>
        <div class="p-3 bg-white dark:bg-slate-800 rounded-lg text-center">
          <p class="text-4xl font-bold text-red-500">20%</p>
          <p class="text-sm text-slate-600 dark:text-slate-400">of customers → 80% of headaches</p>
        </div>
      </div>
    </div>

    <div class="p-5 bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-green-900/20 rounded-lg border-l-4 border-green-600 dark:border-green-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">✅ Application</p>
      <ul class="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc ml-4">
        <li>Focus <strong>only</strong> on the 20% of tasks that bring most income</li>
        <li><strong>Fire</strong> the 20% of customers who cause 80% of problems</li>
      </ul>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">⏱️ Parkinson's Law</h3>
    
    <div class="p-5 bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50 dark:from-purple-900/20 dark:via-indigo-900/15 dark:to-purple-900/20 rounded-lg border-l-4 border-purple-500 dark:border-purple-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2 text-center italic">
        "Work expands to fill the time available for its completion."
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center">
        <p class="text-sm text-slate-500">Given deadline: 8 hours</p>
        <p class="text-lg font-bold text-slate-700 dark:text-slate-300">Takes: 8 hours 😴</p>
      </div>
      <div class="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center">
        <p class="text-sm text-slate-500">Given deadline: 2 hours</p>
        <p class="text-lg font-bold text-green-700 dark:text-green-300">Takes: 2 hours 🔥</p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">📵 The Low-Information Diet</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Stop consuming information that doesn't impact your immediate life:
    </p>
    <div class="flex flex-wrap gap-2 mb-8">
      <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">❌ News</span>
      <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">❌ Social media scrolling</span>
      <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm">❌ Random articles</span>
      <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">✅ Action-relevant info only</span>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white text-xl font-bold">A</span>
      Automation — Let Something Else Do It
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Now that you are only doing the important tasks, the goal is to have <strong>something else do them for you</strong>.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🌍 Geo-Arbitrage</h3>
    <div class="p-5 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-900/20 dark:via-cyan-900/15 dark:to-blue-900/20 rounded-lg border-l-4 border-blue-500 dark:border-blue-400/50 mb-6">
      <p class="text-slate-700 dark:text-slate-300">
        Earn money in a <strong>strong currency</strong> (USD, EUR) and spend it in a country with a <strong>lower cost of living</strong> (Thailand, Argentina, Portugal). Your money goes <span class="text-green-600 dark:text-green-400 font-bold">3-4x further</span>.
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🤖 Virtual Assistants (VAs)</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Hire people (often from countries with lower labor costs) to handle mundane tasks. Even if you <em>can</em> do a task better yourself, you <strong>shouldn't</strong>—your time is too valuable.
    </p>

    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-6">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">🎓 The Lesson</p>
      <p class="text-slate-700 dark:text-slate-300">
        This teaches you to be a <strong>"manager"</strong> rather than a "doer."
      </p>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">💰 The Muse (Automated Business)</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      This is Ferriss's term for an <strong>automated business</strong>. The goal is not to run a company that requires your attention, but to create a product that <em>sells itself</em>.
    </p>

    <div class="p-6 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-100 dark:from-slate-800 dark:via-gray-800 dark:to-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 mb-8">
      <p class="font-bold text-center text-slate-900 dark:text-white mb-4">The Muse Strategy</p>
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
        <div class="p-3 bg-white dark:bg-slate-700 rounded-lg shadow">
          <p class="text-2xl">🎯</p>
          <p class="text-sm font-bold">Pick a niche</p>
        </div>
        <span class="text-xl text-green-500">→</span>
        <div class="p-3 bg-white dark:bg-slate-700 rounded-lg shadow">
          <p class="text-2xl">🧪</p>
          <p class="text-sm font-bold">Test cheaply</p>
        </div>
        <span class="text-xl text-green-500">→</span>
        <div class="p-3 bg-white dark:bg-slate-700 rounded-lg shadow">
          <p class="text-2xl">⚙️</p>
          <p class="text-sm font-bold">Automate</p>
        </div>
        <span class="text-xl text-green-500">→</span>
        <div class="p-3 bg-white dark:bg-slate-700 rounded-lg shadow">
          <p class="text-2xl">😴💰</p>
          <p class="text-sm font-bold">Sleep & Earn</p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white flex items-center gap-3">
      <span class="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full text-white text-xl font-bold">L</span>
      Liberation — Break Free from Location
    </h2>

    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      The final step: breaking the bonds that tie you to a <strong>single physical location</strong>.
    </p>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🏢 Escaping the Office</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      If you have a traditional job, Ferriss provides a script for gradually transitioning to remote work:
    </p>

    <div class="relative pl-8 border-l-2 border-purple-300 dark:border-purple-600 space-y-4 mb-6">
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
        <p class="text-sm text-slate-700 dark:text-slate-300">Prove you're more productive at home for <strong>1 day/week</strong></p>
      </div>
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
        <p class="text-sm text-slate-700 dark:text-slate-300">Expand to <strong>2 days/week</strong></p>
      </div>
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
        <p class="text-sm text-slate-700 dark:text-slate-300">Negotiate <strong>fully remote</strong></p>
      </div>
      <div class="relative">
        <div class="absolute -left-10 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
        <p class="text-sm text-green-700 dark:text-green-300 font-bold">Freedom! 🌴</p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">🏝️ Mini-Retirements</h3>
    <p class="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      Instead of one big retirement at 65, take <strong>"mini-retirements"</strong> throughout your life—trips lasting 1 to 6 months where you relocate to a new place to learn new skills, decompress, and live like a local.
    </p>

    <div class="grid md:grid-cols-2 gap-4 mb-6">
      <div class="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-center">
        <p class="text-sm text-red-500 font-bold mb-1">❌ Old Model</p>
        <p class="text-slate-600 dark:text-slate-400 text-sm">1 retirement at 65</p>
      </div>
      <div class="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center">
        <p class="text-sm text-green-600 font-bold mb-1">✅ New Rich Model</p>
        <p class="text-slate-600 dark:text-slate-400 text-sm">Mini-retirements throughout life</p>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-8 text-slate-900 dark:text-white">⚠️ The Void</h3>
    <div class="p-5 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 dark:from-amber-900/20 dark:via-yellow-900/15 dark:to-amber-900/20 rounded-lg border-l-4 border-amber-500 dark:border-amber-400/50 mb-8">
      <p class="font-semibold text-slate-900 dark:text-white mb-2">Warning</p>
      <p class="text-slate-700 dark:text-slate-300">
        Once you finally have all this free time, you might feel <strong>empty or bored</strong>. This is normal! The solution is to fill that time with things that <em>fulfill you</em>—learning languages, practicing martial arts, volunteering—rather than just "relaxing."
      </p>
    </div>

    <h2 class="text-2xl font-serif font-bold mb-6 mt-12 text-slate-900 dark:text-white">📋 Summary: The New Rich Formula</h2>

    <div class="p-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/30 dark:via-amber-900/20 dark:to-yellow-900/30 rounded-xl border-2 border-orange-300 dark:border-orange-600/50 shadow-lg dark:shadow-xl mb-8">
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white font-bold">D</span>
          <p class="text-slate-700 dark:text-slate-300"><strong>Define</strong> exactly what lifestyle you want and how much it costs</p>
        </div>
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-10 h-10 bg-red-500 rounded-full text-white font-bold">E</span>
          <p class="text-slate-700 dark:text-slate-300"><strong>Eliminate</strong> the 80% of busy work that produces no results</p>
        </div>
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full text-white font-bold">A</span>
          <p class="text-slate-700 dark:text-slate-300"><strong>Automate</strong> your income and chores so you don't have to be present</p>
        </div>
        <div class="flex items-center gap-4">
          <span class="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-full text-white font-bold">L</span>
          <p class="text-slate-700 dark:text-slate-300"><strong>Liberate</strong> yourself from the office and take mini-retirements to enjoy life <em>now</em></p>
        </div>
      </div>
    </div>

    <h3 class="text-xl font-serif font-bold mb-4 mt-10 text-slate-900 dark:text-white">🎯 Key Takeaways</h3>
    <ul class="mb-8 space-y-3">
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">1️⃣</span>
        <span><strong>Relative income > Absolute income</strong> — $/hour matters more than $/year</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">2️⃣</span>
        <span><strong>Dreamline your goals</strong> — Calculate the actual cost; it's usually lower</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">3️⃣</span>
        <span><strong>Fear-set before you goal-set</strong> — The worst case is rarely that bad</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">4️⃣</span>
        <span><strong>Apply 80/20 ruthlessly</strong> — Focus only on what moves the needle</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">5️⃣</span>
        <span><strong>Set aggressive deadlines</strong> — Work expands to fill time given</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">6️⃣</span>
        <span><strong>Outsource everything possible</strong> — Your time is too valuable</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">7️⃣</span>
        <span><strong>Build a "muse"</strong> — An automated income stream</span>
      </li>
      <li class="flex items-start gap-3 text-slate-700 dark:text-slate-300">
        <span class="text-lg">8️⃣</span>
        <span><strong>Take mini-retirements now</strong> — Don't wait until 65</span>
      </li>
    </ul>

    <p class="text-xs text-slate-500 dark:text-slate-400 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700">
      <strong>Source:</strong> "The 4-Hour Work Week" by Tim Ferriss | This article is for educational purposes only.
    </p>
  `},gm=i=>`
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
`,_h=[Fh,Oh,{id:"remote-work-productivity",title:"Remote Work Productivity Secrets",excerpt:"Master the art of working from anywhere. Build routines that maximize output without burnout.",content:gm("Remote Work Productivity"),imageUrl:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",date:"Dec 12, 2025",readTime:"10 min",tags:["Work-Life","Productivity","Remote Work"]},{id:"burnout-prevention",title:"Preventing Burnout: A Complete Guide",excerpt:"Recognize the signs early and build sustainable habits. Your career is a marathon, not a sprint.",content:gm("Burnout Prevention"),imageUrl:"https://images.unsplash.com/photo-1494599948593-3dafe8338d71?w=800&auto=format&fit=crop&q=80",date:"Dec 5, 2025",readTime:"12 min",tags:["Work-Life","Wellness","Mental Health"]}],Gh={id:"ai-models-are-commodities-benedict-evans",title:"Beyond the Hype: Benedict Evans on Why AI Models Are Commodities",excerpt:"The real value won't be in the model itself. It will be in the software and networks built on top of it. Here's why the current AI boom follows a familiar pattern.",readTime:"14 min read",imageUrl:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",date:"2025-12-14",tags:["AI","technology","economics","investing","future"],content:`
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
  `},qh=[Gh],zt={"credit-cards":gh,"airline-miles":kh,"hotel-status":yh,"investing-basics":Ch,retirement:Rh,"digital-nomad":Eh,budgeting:Dh,philosophy:jh,"luxury-travel":Hh,"work-life":_h,"global-economy":qh},Rt=[{id:"credit-cards",name:"Premium Credit Cards",iconName:"CreditCard",description:"Maximize your rewards with top-tier travel and cashback cards.",articles:zt["credit-cards"]},{id:"airline-miles",name:"Airline Miles",iconName:"Plane",description:"Fly for free. Learn the secrets of airline alliances and award charts.",articles:zt["airline-miles"]},{id:"hotel-status",name:"Hotel Elite Status",iconName:"Hotel",description:"Room upgrades, free breakfast, and late checkout. Live the suite life.",articles:zt["hotel-status"]},{id:"investing-basics",name:"Investing Basics",iconName:"TrendingUp",description:"Building wealth for the long term. Stocks, bonds, and ETFs explained.",articles:zt["investing-basics"]},{id:"retirement",name:"Retirement Planning",iconName:"Umbrella",description:"Secure your future. 401ks, IRAs, and the FIRE movement.",articles:zt.retirement},{id:"digital-nomad",name:"Digital Nomad",iconName:"Laptop",description:"Work from anywhere. Visas, connectivity, and tax implications.",articles:zt["digital-nomad"]},{id:"budgeting",name:"Smart Budgeting",iconName:"PieChart",description:"Take control of your cash flow without sacrificing your lifestyle.",articles:zt.budgeting},{id:"philosophy",name:"Philosophy",iconName:"BookOpen",description:"Ancient wisdom for modern life. Stoicism, mindfulness, and meaning.",articles:zt.philosophy},{id:"luxury-travel",name:"Luxury Travel",iconName:"Gem",description:"First class flights and 5-star resorts. Experience the best for less.",articles:zt["luxury-travel"]},{id:"work-life",name:"Work-Life Balance",iconName:"Heart",description:"Productivity, wellness, and building a sustainable career.",articles:zt["work-life"]},{id:"global-economy",name:"Global Economy",iconName:"Globe",description:"Macro trends, AI economics, and forces shaping markets.",articles:zt["global-economy"]}],Ih=({collapsed:i=!1})=>{const[c,u]=R.useState("dark");R.useEffect(()=>{const m=localStorage.getItem("theme");m?(u(m),document.documentElement.classList.toggle("dark",m==="dark")):document.documentElement.classList.add("dark")},[]);const n=()=>{const m=c==="dark"?"light":"dark";u(m),localStorage.setItem("theme",m),document.documentElement.classList.toggle("dark",m==="dark")};return p.jsxs("button",{onClick:n,className:`flex items-center gap-4 p-3 rounded-lg transition-all duration-300 group w-full hover:bg-slate-50 dark:hover:bg-white/5 focus:outline-none ${i?"justify-center":""}`,"aria-label":"Toggle Theme",title:i?"Toggle Theme":"",children:[p.jsx("div",{className:`transition-colors duration-300 ${c==="dark"?"text-gold-500":"text-slate-400 group-hover:text-gold-500"}`,children:c==="dark"?p.jsx(Vg,{size:20,strokeWidth:1.5}):p.jsx(Ug,{size:20,strokeWidth:1.5})}),!i&&p.jsx("span",{className:"text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 tracking-wide",children:c==="dark"?"Light Mode":"Dark Mode"})]})},Yh={CreditCard:_m,Plane:Ym,Hotel:qm,TrendingUp:Pn,Umbrella:Xm,Laptop:Im,PieChart:Fm,BookOpen:pg,Gem:Gm,Heart:Mg,Globe:ci},hm=({category:i,collapsed:c,setMobileOpen:u})=>{const n=Yh[i.iconName]||ci;return p.jsx(jm,{to:`/category/${i.id}`,onClick:()=>u(!1),className:({isActive:m})=>`
        flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group relative
        ${c?"justify-center px-2":""}
        ${m?"bg-slate-100 dark:bg-white/[0.08] text-slate-900 dark:text-white":"text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:text-slate-900 dark:hover:text-slate-200"}
      `,children:({isActive:m})=>p.jsxs(p.Fragment,{children:[m&&!c&&p.jsx("span",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gold-500 rounded-r-sm shadow-[0_0_8px_rgba(201,162,39,0.4)]"}),p.jsx(n,{size:c?20:18,strokeWidth:m?2:1.5,className:`shrink-0 transition-colors duration-200 ${m?"text-gold-500":"group-hover:text-gold-500"}`}),!c&&p.jsx("span",{className:"text-[13px] font-medium tracking-wide truncate transition-all",children:i.name}),c&&p.jsx("div",{className:"absolute left-14 z-50 bg-dark-800 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-2 rounded shadow-xl border border-white/[0.08] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap",children:i.name})]})})},Vh=({mobileOpen:i,setMobileOpen:c})=>{const[u,n]=R.useState(!1),m=Rt.filter(v=>["credit-cards","investing-basics","retirement","budgeting","philosophy","work-life","global-economy"].includes(v.id)),b=Rt.filter(v=>["airline-miles","hotel-status","luxury-travel","digital-nomad"].includes(v.id));return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-500 ${i?"opacity-100":"opacity-0 pointer-events-none"}`,onClick:()=>c(!1)}),p.jsxs("aside",{className:`fixed top-0 left-0 z-50 h-screen bg-white dark:bg-dark-900 border-r border-slate-200 dark:border-white/[0.06] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col
          ${i?"translate-x-0":"-translate-x-full md:translate-x-0"}
          ${u?"w-20":"w-72"}
        `,children:[p.jsxs("div",{className:`h-20 flex items-center ${u?"justify-center":"justify-between px-6"} border-b border-slate-100 dark:border-white/[0.06] shrink-0`,children:[p.jsx(Da,{to:"/",onClick:()=>c(!1),className:"group",children:u?p.jsx("span",{className:"font-serif font-bold text-2xl text-gold-500",children:"T"}):p.jsxs("span",{className:"font-serif font-medium text-2xl tracking-widest text-slate-900 dark:text-white group-hover:text-gold-500 transition-colors",children:["TRE",p.jsx("span",{className:"text-gold-500 italic",children:"ZZO"})]})}),p.jsx("button",{onClick:()=>c(!1),className:"md:hidden p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white",children:p.jsx(Zg,{size:20})}),!u&&p.jsx("button",{onClick:()=>n(!0),className:"hidden md:flex p-1.5 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white transition-colors",children:p.jsx(yg,{size:16})})]}),u&&p.jsx("button",{onClick:()=>n(!1),className:"hidden md:flex absolute top-7 -right-3 z-50 p-1 bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] text-gold-500 rounded-full shadow-md hover:scale-110 transition-transform",children:p.jsx(kg,{size:12,strokeWidth:2.5})}),p.jsxs("div",{className:"flex-1 overflow-y-auto scrollbar-hide py-6 px-3 space-y-8",children:[p.jsx("div",{className:`transition-all duration-300 ${u?"px-0 flex justify-center":""}`,children:u?p.jsx("button",{className:"p-2.5 rounded-md hover:bg-slate-100 dark:hover:bg-white/[0.06] text-slate-400 hover:text-gold-500 transition-colors",title:"Search",children:p.jsx(pm,{size:18,strokeWidth:2})}):p.jsxs("div",{className:"relative group",children:[p.jsx("input",{type:"text",placeholder:"Search...",className:"w-full bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] rounded-md py-2.5 pl-9 pr-4 text-xs font-medium text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-gold-500/50 focus:border-gold-500/50 transition-all"}),p.jsx(pm,{className:"absolute left-3 top-2.5 text-slate-400 group-focus-within:text-gold-500 transition-colors",size:14})]})}),p.jsxs("div",{children:[!u&&p.jsxs("h3",{className:"px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 mb-3 flex items-center gap-2",children:[p.jsx(xg,{size:10,className:"text-gold-600/80"})," Wealth"]}),p.jsx("div",{className:"space-y-1",children:m.map(v=>p.jsx(hm,{category:v,collapsed:u,setMobileOpen:c},v.id))})]}),p.jsxs("div",{children:[!u&&p.jsxs("h3",{className:"px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 mb-3 flex items-center gap-2",children:[p.jsx(Tg,{size:10,className:"text-gold-600/80"})," Wander"]}),p.jsx("div",{className:"space-y-1",children:b.map(v=>p.jsx(hm,{category:v,collapsed:u,setMobileOpen:c},v.id))})]})]}),p.jsx("div",{className:"p-4 border-t border-slate-100 dark:border-white/[0.06] bg-slate-50/50 dark:bg-dark-950/50",children:p.jsx(Ih,{collapsed:u})})]})]})},Xh=()=>{const[i,c]=R.useState(!1);return p.jsxs("div",{className:"min-h-screen bg-slate-50 dark:bg-dark-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden",children:[p.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0",children:[p.jsx("div",{className:"absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/5 dark:bg-gold-500/[0.03] blur-[120px]"}),p.jsx("div",{className:"absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-200/20 dark:bg-indigo-900/[0.03] blur-[100px]"})]}),p.jsx(Vh,{mobileOpen:i,setMobileOpen:c}),p.jsxs("div",{className:"relative z-10 md:pl-24 lg:pl-80 transition-all duration-500 min-h-screen flex flex-col",children:[p.jsx("div",{className:"md:hidden sticky top-0 z-30 bg-white/80 dark:bg-dark-900/90 backdrop-blur-md border-b border-slate-200 dark:border-white/[0.06] px-6 h-16 flex items-center justify-between",children:p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("button",{onClick:()=>c(!0),className:"text-slate-600 dark:text-slate-400 hover:text-gold-500 transition-colors",children:p.jsx(Lg,{size:24})}),p.jsxs("span",{className:"font-serif font-medium text-xl tracking-widest text-slate-900 dark:text-white",children:["TRE",p.jsx("span",{className:"text-gold-500 italic",children:"ZZO"})]})]})}),p.jsx("main",{className:"flex-1 p-6 md:p-12 lg:p-16 max-w-screen-2xl mx-auto w-full",children:p.jsx(Tx,{})}),p.jsxs("footer",{className:"py-10 px-8 border-t border-slate-200 dark:border-white/[0.06] text-center text-slate-500 dark:text-slate-500 text-xs tracking-widest font-medium uppercase",children:["© ",new Date().getFullYear()," Trezzo Financial. All rights reserved."]})]})]})},Qm=({article:i,categoryId:c})=>p.jsx(Da,{to:`/category/${c}/article/${i.id}`,className:"group block h-full",children:p.jsxs("div",{className:"h-full bg-white dark:bg-dark-800 rounded-sm overflow-hidden transition-all duration-500 border border-slate-200 dark:border-white/[0.06] group-hover:border-gold-500/30 flex flex-col relative",children:[p.jsxs("div",{className:"relative h-32 overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40"}),p.jsx("img",{src:i.imageUrl,alt:i.title,className:"w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"}),p.jsx("div",{className:"absolute top-0 right-0 z-20 p-1.5",children:i.tags.slice(0,1).map(u=>p.jsx("span",{className:"px-1.5 py-0.5 bg-black/50 backdrop-blur-md text-gold-400 text-[9px] font-bold uppercase tracking-widest border border-gold-500/20",children:u},u))})]}),p.jsxs("div",{className:"p-3.5 flex flex-col flex-grow relative",children:[p.jsxs("div",{className:"flex items-center gap-2 text-[9px] font-medium text-slate-500 dark:text-slate-400 mb-2.5 uppercase tracking-widest",children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-0.5 h-0.5 rounded-full bg-gold-500"})," ",i.date]}),p.jsx("span",{className:"text-slate-300 dark:text-slate-600",children:"|"}),p.jsxs("span",{children:[i.readTime," Read"]})]}),p.jsx("h3",{className:"text-lg font-serif font-medium mb-2 text-slate-900 dark:text-slate-100 leading-snug group-hover:text-gold-400 transition-colors duration-300",children:i.title}),p.jsx("p",{className:"text-slate-600 dark:text-slate-400 text-xs mb-4 line-clamp-2 flex-grow leading-relaxed font-normal",children:i.excerpt}),p.jsxs("div",{className:"mt-auto pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between",children:[p.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300",children:"Read Analysis"}),p.jsx(Om,{size:16,className:"text-slate-400 dark:text-slate-500 group-hover:text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"})]})]})]})}),Qh=({isLoading:i})=>p.jsxs("div",{className:`fixed inset-0 z-[100] bg-dark-900 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${i?"opacity-100":"opacity-0 pointer-events-none"}`,children:[p.jsxs("div",{className:"relative",children:[p.jsxs("h1",{className:"text-6xl md:text-8xl font-serif font-medium tracking-tighter text-white mb-2 animate-fade-in-up",children:["TRE",p.jsx("span",{className:"italic text-gold-500",children:"ZZO"})]}),p.jsx("div",{className:"w-full h-[2px] bg-white/[0.08] mt-4 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-gold-500 animate-loader-width shadow-[0_0_15px_rgba(201,162,39,0.8)]"})})]}),p.jsxs("div",{className:"mt-8 flex items-center gap-3 animate-fade-in",style:{animationDelay:"0.5s"},children:[p.jsx("span",{className:"h-px w-8 bg-slate-700"}),p.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 animate-pulse",children:"Establishing Secure Connection"}),p.jsx("span",{className:"h-px w-8 bg-slate-700"})]})]}),Wh=()=>{const{pathname:i}=ia();return R.useEffect(()=>{window.scrollTo(0,0)},[i]),null},Ph={CreditCard:_m,Plane:Ym,Hotel:qm,TrendingUp:Pn,Umbrella:Xm,Laptop:Im,PieChart:Fm,ShieldCheck:Vm,Gem:Gm,Globe:ci},Kh=()=>{const{categoryId:i}=Mm(),c=Rt.find(n=>n.id===i);if(!c)return p.jsx("div",{className:"text-center py-20 text-xl text-slate-500 font-serif italic",children:"Category not available"});const u=Ph[c.iconName]||ci;return p.jsxs("div",{className:"animate-fade-in w-full",children:[p.jsxs("nav",{className:"flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-12",children:[p.jsxs(Da,{to:"/",className:"hover:text-gold-500 transition-colors flex items-center gap-2 group",children:[p.jsx(Ng,{size:14,className:"mb-0.5 group-hover:text-gold-500 transition-colors"}),p.jsx("span",{className:"hidden sm:inline",children:"Home"})]}),p.jsx("span",{className:"text-slate-300 dark:text-slate-600",children:"/"}),p.jsx("span",{className:"text-gold-500",children:c.name})]}),p.jsxs("div",{className:"mb-16 md:mb-24 relative",children:[p.jsx("div",{className:"absolute top-0 left-0 w-20 h-1 bg-gold-500 mb-6"}),p.jsxs("div",{className:"pt-8 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between",children:[p.jsxs("div",{className:"max-w-3xl relative z-10",children:[p.jsx("span",{className:"text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block",children:"Editorial Collection"}),p.jsx("h1",{className:"text-5xl md:text-7xl font-sans font-bold mb-6 text-slate-900 dark:text-white tracking-tight leading-none",children:c.name}),p.jsx("p",{className:"text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light border-l border-slate-200 dark:border-white/[0.08] pl-6 ml-1",children:c.description})]}),p.jsx("div",{className:"hidden md:block text-slate-200 dark:text-white/[0.04] transform translate-y-4",children:p.jsx(u,{size:140,strokeWidth:.5})})]})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4",children:c.articles.map(n=>p.jsx(Qm,{article:n,categoryId:c.id},n.id))})]})},Zh=()=>{const{categoryId:i,articleId:c}=Mm(),u=Rt.find(m=>m.id===i),n=u==null?void 0:u.articles.find(m=>m.id===c);return!n||!u?p.jsx("div",{className:"text-center py-20 text-xl text-slate-500",children:"Article not found"}):p.jsxs("div",{className:"max-w-4xl mx-auto animate-fade-in-up",children:[p.jsx("nav",{className:"mb-12 flex items-center justify-between",children:p.jsxs("button",{onClick:()=>window.history.back(),className:"group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors",children:[p.jsx("span",{className:"flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-black transition-all",children:p.jsx(dg,{size:14})}),"Back to ",u.name]})}),p.jsxs("header",{className:"mb-12",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 mb-8 font-medium uppercase tracking-widest",children:[p.jsx("span",{className:"text-gold-600 dark:text-gold-500",children:u.name}),p.jsx("span",{className:"text-slate-300 dark:text-slate-600",children:"/"}),p.jsx("span",{className:"flex items-center gap-2",children:n.date}),p.jsx("span",{className:"text-slate-300 dark:text-slate-700",children:"/"}),p.jsxs("span",{className:"flex items-center gap-2",children:[n.readTime," read"]})]}),p.jsx("h1",{className:"text-4xl md:text-6xl font-sans font-bold text-slate-900 dark:text-white mb-10 leading-[1.1]",children:n.title}),p.jsxs("div",{className:"w-full h-[500px] overflow-hidden mb-12 relative",children:[p.jsx("div",{className:"absolute inset-0 border border-white/10 z-10"}),p.jsx("img",{src:n.imageUrl,alt:n.title,className:"w-full h-full object-cover"})]})]}),p.jsxs("article",{className:`prose prose-lg dark:prose-invert prose-slate mx-auto article-content
        prose-a:text-gold-600 dark:prose-a:text-gold-500 hover:prose-a:text-gold-400 
        prose-blockquote:border-l-gold-500 prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:italic
        prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
        prose-li:marker:text-gold-500`,children:[p.jsx("div",{className:"text-2xl md:text-3xl font-serif text-slate-800 dark:text-slate-200 mb-12 leading-relaxed font-normal tracking-wide",children:n.excerpt}),p.jsx("div",{dangerouslySetInnerHTML:{__html:n.content}})]}),p.jsx("div",{className:"my-16 h-px bg-slate-200 dark:bg-white/[0.08]"}),p.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6",children:[p.jsx("div",{className:"flex flex-wrap gap-2",children:n.tags.map(m=>p.jsxs("span",{className:"px-4 py-1.5 bg-transparent border border-slate-200 dark:border-white/[0.08] text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-widest hover:border-gold-500 hover:text-gold-500 transition-colors cursor-default",children:["#",m]},m))}),p.jsxs("button",{className:"flex items-center gap-3 text-slate-500 hover:text-gold-500 transition-colors text-xs font-bold uppercase tracking-widest",children:[p.jsx(_g,{size:16})," Share Article"]})]})]})},Jh=()=>{var n,m,b,v;const i=(n=Rt.find(C=>C.id==="luxury-travel"))==null?void 0:n.articles[0],c=Rt.find(C=>C.id==="luxury-travel"),u=[{cat:Rt.find(C=>C.id==="credit-cards"),art:(m=Rt.find(C=>C.id==="credit-cards"))==null?void 0:m.articles[0]},{cat:Rt.find(C=>C.id==="investing-basics"),art:(b=Rt.find(C=>C.id==="investing-basics"))==null?void 0:b.articles[0]},{cat:Rt.find(C=>C.id==="global-economy"),art:(v=Rt.find(C=>C.id==="global-economy"))==null?void 0:v.articles[0]}].filter(C=>C.cat&&C.art);return p.jsxs("div",{className:"flex flex-col w-full animate-fade-in",children:[p.jsxs("div",{className:"flex flex-col items-center justify-center pt-12 pb-20 md:pb-28 text-center border-b border-slate-200 dark:border-white/[0.06] mb-16",children:[p.jsx("div",{className:"mb-6",children:p.jsx("span",{className:"inline-block py-1.5 px-4 border border-gold-500/30 rounded-full bg-gold-500/5 text-gold-500 text-[10px] font-bold uppercase tracking-[0.25em]",children:"Premier Financial & Travel Insight"})}),p.jsxs("h1",{className:"text-7xl md:text-9xl lg:text-[10rem] font-serif font-medium text-slate-900 dark:text-white mb-6 tracking-tighter leading-[0.8]",children:["TRE",p.jsx("span",{className:"italic text-gold-500",children:"ZZO"})]}),p.jsx("p",{className:"text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light font-serif italic",children:'"The definitive guide to maximizing wealth and experiencing the world in style."'})]}),i&&c&&p.jsxs("section",{className:"mb-24",children:[p.jsxs("div",{className:"flex items-center justify-between mb-8",children:[p.jsxs("h2",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gold-500 flex items-center gap-2",children:[p.jsx(Ig,{size:14})," Editor's Choice"]}),p.jsx(Da,{to:`/category/${c.id}`,className:"text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors",children:"View Category"})]}),p.jsxs(Da,{to:`/category/${c.id}/article/${i.id}`,className:"group relative block w-full h-[60vh] min-h-[500px] overflow-hidden rounded-[2px]",children:[p.jsx("div",{className:"absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-90"}),p.jsx("img",{src:i.imageUrl,alt:i.title,className:"absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"}),p.jsxs("div",{className:"absolute bottom-0 left-0 z-20 p-8 md:p-16 max-w-4xl",children:[p.jsx("span",{className:"inline-block px-3 py-1 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-widest mb-6",children:"Featured Analysis"}),p.jsx("h3",{className:"text-4xl md:text-6xl font-serif font-medium text-white mb-6 leading-tight group-hover:text-gold-200 transition-colors",children:i.title}),p.jsx("p",{className:"text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 max-w-2xl line-clamp-2",children:i.excerpt}),p.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white",children:["Read Full Story ",p.jsx(Om,{size:16,className:"text-gold-500"})]})]})]})]}),p.jsxs("section",{className:"mb-24",children:[p.jsxs("div",{className:"flex items-center gap-4 mb-12 border-b border-slate-200 dark:border-white/[0.06] pb-4",children:[p.jsx("h2",{className:"text-2xl font-sans font-medium text-slate-900 dark:text-white",children:"Latest Intelligence"}),p.jsx("div",{className:"h-px flex-1 bg-slate-200 dark:bg-white/[0.06]"}),p.jsx(Da,{to:"/category/credit-cards",className:"text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-gold-500 transition-colors",children:"View All"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:u.map((C,y)=>C.art&&C.cat?p.jsx(Qm,{article:C.art,categoryId:C.cat.id},y):null)})]}),p.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 bg-white dark:bg-dark-800 p-10 md:p-16 border border-slate-200 dark:border-white/[0.06] relative overflow-hidden",children:[p.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] -mr-32 -mt-32"}),p.jsxs("div",{children:[p.jsxs("h2",{className:"text-xs font-bold uppercase tracking-[0.2em] text-gold-500 mb-6 flex items-center gap-2",children:[p.jsx(Vm,{size:16})," Why Trust Trezzo?"]}),p.jsxs("h3",{className:"text-3xl md:text-4xl font-serif font-medium text-slate-900 dark:text-white mb-6 leading-tight",children:["Independent. Analytical. ",p.jsx("br",{}),p.jsx("span",{className:"italic text-gold-500",children:"Uncompromising."})]}),p.jsx("p",{className:"text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8",children:"In an era of sponsored content and fleeting trends, Trezzo stands apart. Our team of financial analysts and travel strategists dissect the fine print so you don't have to. We don't just report the news; we calculate the ROI of your lifestyle."}),p.jsxs("div",{className:"flex flex-col gap-4",children:[p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-100 dark:bg-white/[0.06] flex items-center justify-center text-gold-500",children:p.jsx(Pn,{size:18})}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-serif font-medium text-slate-900 dark:text-white",children:"Data-Driven Strategy"}),p.jsx("p",{className:"text-xs text-slate-500 uppercase tracking-wide",children:"Mathematical approach to points & miles"})]})]}),p.jsxs("div",{className:"flex items-center gap-4",children:[p.jsx("div",{className:"w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-gold-500",children:p.jsx(mg,{size:18})}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-serif font-medium text-slate-900 dark:text-white",children:"Unbiased Reviews"}),p.jsx("p",{className:"text-xs text-slate-500 uppercase tracking-wide",children:"No paid placements, ever."})]})]})]})]}),p.jsxs("div",{className:"relative h-full min-h-[300px] border border-slate-200 dark:border-white/[0.08] p-2",children:[p.jsx("div",{className:"absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent"}),p.jsxs("div",{className:"absolute bottom-8 left-8 right-8",children:[p.jsx("p",{className:"font-serif italic text-xl text-white mb-4",children:`"Trezzo has completely changed how I view my assets and my travel. It's not just a blog; it's a blueprint for a better life."`}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-gold-500"}),p.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-slate-300",children:"Jonathan S., Wealth Manager"})]})]})]})]}),p.jsxs("section",{className:"text-center py-20 border-t border-slate-200 dark:border-white/[0.06]",children:[p.jsx(Pg,{size:32,className:"mx-auto text-gold-500 mb-6"}),p.jsxs("h2",{className:"text-3xl md:text-5xl font-serif font-medium text-slate-900 dark:text-white mb-6",children:["Join the ",p.jsx("span",{className:"italic",children:"Inner Circle"})]}),p.jsx("p",{className:"text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-10 font-light",children:"Get weekly briefings on credit card strategies, award chart devaluations, and investment opportunities before the masses."}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 max-w-md mx-auto",children:[p.jsx("input",{type:"email",placeholder:"Enter your email address",className:"flex-1 px-6 py-4 bg-slate-50 dark:bg-dark-800 border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-gold-500 focus:outline-none transition-colors rounded-sm"}),p.jsx("button",{className:"px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest hover:bg-gold-400 transition-colors rounded-sm",children:"Subscribe"})]}),p.jsx("p",{className:"text-[10px] text-slate-500 mt-4 uppercase tracking-widest",children:"We respect your privacy. Unsubscribe at any time."})]})]})};function $h(){const[i,c]=R.useState(!0);return R.useEffect(()=>{const n=Date.now(),m=()=>{const b=Date.now()-n,v=Math.max(0,2e3-b);setTimeout(()=>{c(!1)},v)};if(document.readyState==="complete")m();else return window.addEventListener("load",m),()=>window.removeEventListener("load",m)},[]),p.jsxs(p.Fragment,{children:[p.jsx(Qh,{isLoading:i}),p.jsx("div",{className:`transition-opacity duration-1000 delay-300 ${i?"opacity-0":"opacity-100"}`,children:p.jsxs(Wx,{children:[p.jsx(Wh,{}),p.jsx(Cx,{children:p.jsxs(Os,{path:"/",element:p.jsx(Xh,{}),children:[p.jsx(Os,{index:!0,element:p.jsx(Jh,{})}),p.jsx(Os,{path:"category/:categoryId",element:p.jsx(Kh,{})}),p.jsx(Os,{path:"category/:categoryId/article/:articleId",element:p.jsx(Zh,{})}),p.jsx(Os,{path:"*",element:p.jsx(wx,{to:"/",replace:!0})})]})})]})})]})}const Wm=document.getElementById("root");if(!Wm)throw new Error("Could not find root element to mount to");const ek=Bb.createRoot(Wm);ek.render(p.jsx(wb.StrictMode,{children:p.jsx($h,{})}));

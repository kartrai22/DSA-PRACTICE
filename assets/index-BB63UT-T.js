var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var k=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},A={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=A,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:oe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,k)}catch(e){k(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),te=Symbol.for(`react.memo_cache_sentinel`),ne=Symbol.iterator;function re(e){return typeof e!=`object`||!e?null:(e=ne&&e[ne]||e[`@@iterator`],typeof e==`function`?e:null)}var ie=Symbol.for(`react.client.reference`);function ae(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?ae(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var oe=Array.isArray,k=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},ce=[],le=-1;function ue(e){return{current:e}}function de(e){0>le||(e.current=ce[le],ce[le]=null,le--)}function j(e,t){le++,ce[le]=e.current,e.current=t}var fe=ue(null),pe=ue(null),me=ue(null),he=ue(null);function ge(e,t){switch(j(me,t),j(pe,e),j(fe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}de(fe),j(fe,e)}function _e(){de(fe),de(pe),de(me)}function ve(e){e.memoizedState!==null&&j(he,e);var t=fe.current,n=Hd(t,e.type);t!==n&&(j(pe,e),j(fe,n))}function ye(e){pe.current===e&&(de(fe),de(pe)),he.current===e&&(de(he),Qf._currentValue=se)}var be,xe;function Se(e){if(be===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);be=t&&t[1]||``,xe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+be+e+xe}var Ce=!1;function we(e,t){if(!e||Ce)return``;Ce=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ce=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Se(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se(`Lazy`);case 13:return e.child!==t&&t!==null?Se(`Suspense Fallback`):Se(`Suspense`);case 19:return Se(`SuspenseList`);case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Se(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,M=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function N(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=A.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function lt(e,t){var n=A.p;try{return A.p=e,t()}finally{A.p=n}}var ut=Math.random().toString(36).slice(2),dt=`__reactFiber$`+ut,ft=`__reactProps$`+ut,pt=`__reactContainer$`+ut,mt=`__reactEvents$`+ut,ht=`__reactListeners$`+ut,gt=`__reactHandles$`+ut,_t=`__reactResources$`+ut,vt=`__reactMarker$`+ut;function yt(e){delete e[dt],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[dt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[dt]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return De.call(jt,e)?!0:De.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(oe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ft]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(bu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var P={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tn=wn(P),En=h({},P,{view:0,detail:0}),Dn=wn(En),On,kn,An,jn=h({},En,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==An&&(An&&e.type===`mousemove`?(On=e.screenX-An.screenX,kn=e.screenY-An.screenY):kn=On=0,An=e),On)},movementY:function(e){return`movementY`in e?e.movementY:kn}}),Mn=wn(jn),Nn=wn(h({},jn,{dataTransfer:0})),Pn=wn(h({},En,{relatedTarget:0})),Fn=wn(h({},P,{animationName:0,elapsedTime:0,pseudoElement:0})),In=wn(h({},P,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Ln=wn(h({},P,{data:0})),Rn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Bn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Vn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bn[e])?!!t[e]:!1}function Hn(){return Vn}var Un=wn(h({},En,{key:function(e){if(e.key){var t=Rn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Wn=wn(h({},jn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Gn=wn(h({},En,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn})),Kn=wn(h({},P,{propertyName:0,elapsedTime:0,pseudoElement:0})),qn=wn(h({},jn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Jn=wn(h({},P,{newState:0,oldState:0})),Yn=[9,13,27,32],Xn=mn&&`CompositionEvent`in window,Zn=null;mn&&`documentMode`in document&&(Zn=document.documentMode);var Qn=mn&&`TextEvent`in window&&!Zn,$n=mn&&(!Xn||Zn&&8<Zn&&11>=Zn),er=` `,tr=!1;function nr(e,t){switch(e){case`keyup`:return Yn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function rr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ir=!1;function ar(e,t){switch(e){case`compositionend`:return rr(t);case`keypress`:return t.which===32?(tr=!0,er):null;case`textInput`:return e=t.data,e===er&&tr?null:e;default:return null}}function or(e,t){if(ir)return e===`compositionend`||!Xn&&nr(e,t)?(e=bn(),yn=vn=_n=null,ir=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return $n&&t.locale!==`ko`?null:t.data;default:return null}}var sr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!sr[e.type]:t===`textarea`}function lr(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=Ed(t,`onChange`),0<t.length&&(n=new Tn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var ur=null,dr=null;function fr(e){yd(e,0)}function pr(e){if(Bt(St(e)))return e}function mr(e,t){if(e===`change`)return t}var hr=!1;if(mn){var gr;if(mn){var _r=`oninput`in document;if(!_r){var vr=document.createElement(`div`);vr.setAttribute(`oninput`,`return;`),_r=typeof vr.oninput==`function`}gr=_r}else gr=!1;hr=gr&&(!document.documentMode||9<document.documentMode)}function yr(){ur&&(ur.detachEvent(`onpropertychange`,br),dr=ur=null)}function br(e){if(e.propertyName===`value`&&pr(dr)){var t=[];lr(t,dr,e,sn(e)),fn(fr,t)}}function xr(e,t,n){e===`focusin`?(yr(),ur=t,dr=n,ur.attachEvent(`onpropertychange`,br)):e===`focusout`&&yr()}function Sr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return pr(dr)}function Cr(e,t){if(e===`click`)return pr(t)}function wr(e,t){if(e===`input`||e===`change`)return pr(t)}function Tr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Er=typeof Object.is==`function`?Object.is:Tr;function Dr(e,t){if(Er(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!Er(e[i],t[i]))return!1}return!0}function Or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kr(e,t){var n=Or(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Or(n)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function Mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Nr=mn&&`documentMode`in document&&11>=document.documentMode,Pr=null,Fr=null,Ir=null,Lr=!1;function Rr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lr||Pr==null||Pr!==Vt(r)||(r=Pr,`selectionStart`in r&&Mr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Dr(Ir,r)||(Ir=r,r=Ed(Fr,`onSelect`),0<r.length&&(t=new Tn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Br={animationend:zr(`Animation`,`AnimationEnd`),animationiteration:zr(`Animation`,`AnimationIteration`),animationstart:zr(`Animation`,`AnimationStart`),transitionrun:zr(`Transition`,`TransitionRun`),transitionstart:zr(`Transition`,`TransitionStart`),transitioncancel:zr(`Transition`,`TransitionCancel`),transitionend:zr(`Transition`,`TransitionEnd`)},Vr={},Hr={};mn&&(Hr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),`TransitionEvent`in window||delete Br.transitionend.transition);function Ur(e){if(Vr[e])return Vr[e];if(!Br[e])return e;var t=Br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hr)return Vr[e]=t[n];return e}var Wr=Ur(`animationend`),Gr=Ur(`animationiteration`),Kr=Ur(`animationstart`),qr=Ur(`transitionrun`),Jr=Ur(`transitionstart`),Yr=Ur(`transitioncancel`),Xr=Ur(`transitionend`),Zr=new Map,Qr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Qr.push(`scrollEnd`);function $r(e,t){Zr.set(e,t),Dt(t,[e])}var ei=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ti=[],ni=0,ri=0;function ii(){for(var e=ni,t=ri=ni=0;t<e;){var n=ti[t];ti[t++]=null;var r=ti[t];ti[t++]=null;var i=ti[t];ti[t++]=null;var a=ti[t];if(ti[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ci(n,i,a)}}function ai(e,t,n,r){ti[ni++]=e,ti[ni++]=t,ti[ni++]=n,ti[ni++]=r,ri|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function oi(e,t,n,r){return ai(e,t,n,r),li(e)}function si(e,t){return ai(e,null,null,t),li(e)}function ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function li(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ui={};function di(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,t,n,r){return new di(e,t,n,r)}function pi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mi(e,t){var n=e.alternate;return n===null?(n=fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function gi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)pi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,fe.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=fi(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return _i(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=fi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=fi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=fi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function _i(e,t,n,r){return e=fi(7,e,r,t),e.lanes=n,e}function vi(e,t,n){return e=fi(6,e,null,t),e.lanes=n,e}function yi(e){var t=fi(18,null,null,0);return t.stateNode=e,t}function bi(e,t,n){return t=fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xi=new WeakMap;function Si(e,t){if(typeof e==`object`&&e){var n=xi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},xi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ci=[],wi=0,Ti=null,Ei=0,Di=[],Oi=0,ki=null,Ai=1,ji=``;function Mi(e,t){Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e,Ei=t}function Ni(e,t,n){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,ki=e;var r=Ai;e=ji;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ai=1<<32-We(t)+i|n<<i|r,ji=a+e}else Ai=1<<a|n<<i|r,ji=e}function Pi(e){e.return!==null&&(Mi(e,1),Ni(e,1,0))}function Fi(e){for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null;for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,ji=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null}function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ji,Di[Oi++]=ki,Ai=t.id,ji=t.overflow,ki=e}var Li=null,F=null,I=!1,Ri=null,zi=!1,Bi=Error(i(519));function Vi(e){throw qi(Si(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Bi}function Hi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[ft]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Vi(e,!0)}function Ui(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Li=Li.return}}function Wi(e){if(e!==Li)return!1;if(!I)return Ui(e),I=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&F&&Vi(e),Ui(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));F=uf(e)}else t===27?(t=F,Zd(e.type)?(e=lf,lf=null,F=e):F=t):F=Li?cf(e.stateNode.nextSibling):null;return!0}function Gi(){F=Li=null,I=!1}function Ki(){var e=Ri;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Ri=null),e}function qi(e){Ri===null?Ri=[e]:Ri.push(e)}var Ji=ue(null),Yi=null,Xi=null;function Zi(e,t,n){j(Ji,t._currentValue),t._currentValue=n}function Qi(e){e._currentValue=Ji.current,de(Ji)}function $i(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ea(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),$i(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),$i(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ta(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Er(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===he.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ea(t,e,n,r),t.flags|=262144}function na(e){for(e=e.firstContext;e!==null;){if(!Er(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ra(e){Yi=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ia(e){return oa(Yi,e)}function aa(e,t){return Yi===null&&ra(e),oa(e,t)}function oa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xi===null){if(e===null)throw Error(i(308));Xi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xi=Xi.next=t;return n}var sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ca=t.unstable_scheduleCallback,la=t.unstable_NormalPriority,L={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ua(){return{controller:new sa,data:new Map,refCount:0}}function da(e){e.refCount--,e.refCount===0&&ca(la,function(){e.controller.abort()})}var fa=null,pa=0,ma=0,ha=null;function ga(e,t){if(fa===null){var n=fa=[];pa=0,ma=dd(),ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return pa++,t.then(_a,_a),t}function _a(){if(--pa===0&&fa!==null){ha!==null&&(ha.status=`fulfilled`);var e=fa;fa=null,ma=0,ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var ya=k.S;k.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ga(e,t),ya!==null&&ya(e,t)};var ba=ue(null);function xa(){var e=ba.current;return e===null?K.pooledCache:e}function Sa(e,t){t===null?j(ba,ba.current):j(ba,t.pool)}function Ca(){var e=xa();return e===null?null:{parent:L._currentValue,pool:e}}var wa=Error(i(460)),Ta=Error(i(474)),Ea=Error(i(542)),Da={then:function(){}};function Oa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Na(e),e}throw ja=t,wa}}function Aa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ja=e,wa):e}}var ja=null;function Ma(){if(ja===null)throw Error(i(459));var e=ja;return ja=null,e}function Na(e){if(e===wa||e===Ea)throw Error(i(483))}var Pa=null,Fa=0;function Ia(e){var t=Fa;return Fa+=1,Pa===null&&(Pa=[]),ka(Pa,e,t)}function La(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ra(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function za(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=mi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Aa(i)===t.type)?(t=a(t,n.props),La(t,n),t.return=e,t):(t=gi(n.type,n.key,n.props,null,e.mode,r),La(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=bi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=_i(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=gi(t.type,t.key,t.props,null,e.mode,n),La(n,t),n.return=e,n;case v:return t=bi(t,e.mode,n),t.return=e,t;case O:return t=Aa(t),f(e,t,n)}if(oe(t)||re(t))return t=_i(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ia(t),n);if(t.$$typeof===C)return f(e,aa(e,t),n);Ra(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Aa(n),p(e,t,n,r)}if(oe(n)||re(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ia(n),r);if(n.$$typeof===C)return p(e,t,aa(e,n),r);Ra(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Aa(r),m(e,t,n,r,i)}if(oe(r)||re(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ia(r),i);if(r.$$typeof===C)return m(e,t,n,aa(t,r),i);Ra(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),I&&Mi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return I&&Mi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),I&&Mi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),I&&Mi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return I&&Mi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),I&&Mi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Aa(l)===r.type){n(e,r.sibling),c=a(r,o.props),La(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=_i(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=gi(o.type,o.key,o.props,null,e.mode,c),La(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=bi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Aa(o),b(e,r,o,c)}if(oe(o))return h(e,r,o,c);if(re(o)){if(l=re(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ia(o),c);if(o.$$typeof===C)return b(e,r,aa(e,o),c);Ra(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Fa=0;var i=b(e,t,n,r);return Pa=null,i}catch(t){if(t===wa||t===Ea)throw t;var a=fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ba=za(!0),Va=za(!1),Ha=!1;function Ua(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=li(e),ci(e,null,n),t}return ai(e,r,t,n),li(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ya=!1;function Xa(){if(Ya){var e=ha;if(e!==null)throw e}}function Za(e,t,n,r){Ya=!1;var i=e.updateQueue;Ha=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ma&&(Ya=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ha=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function Qa(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function $a(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qa(n[e],t)}var eo=ue(null),to=ue(0);function no(e,t){e=Wl,j(to,e),j(eo,t),Wl=e|t.baseLanes}function ro(){j(to,Wl),j(eo,eo.current)}function io(){Wl=to.current,de(eo),de(to)}var ao=ue(null),oo=null;function so(e){var t=e.alternate;j(R,R.current&1),j(ao,e),oo===null&&(t===null||eo.current!==null||t.memoizedState!==null)&&(oo=e)}function co(e){j(R,R.current),j(ao,e),oo===null&&(oo=e)}function lo(e){e.tag===22?(j(R,R.current),j(ao,e),oo===null&&(oo=e)):uo(e)}function uo(){j(R,R.current),j(ao,ao.current)}function fo(e){de(ao),oo===e&&(oo=null),de(R)}var R=ue(0);function po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=0,z=null,B=null,ho=null,go=!1,_o=!1,vo=!1,yo=0,bo=0,xo=null,So=0;function V(){throw Error(i(321))}function Co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Er(e[n],t[n]))return!1;return!0}function wo(e,t,n,r,i,a){return mo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Bs:Vs,vo=!1,a=n(r,i),vo=!1,_o&&(a=Eo(t,n,r,i)),To(e),a}function To(e){k.H=zs;var t=B!==null&&B.next!==null;if(mo=0,ho=B=z=null,go=!1,bo=0,xo=null,t)throw Error(i(300));e===null||ic||(e=e.dependencies,e!==null&&na(e)&&(ic=!0))}function Eo(e,t,n,r){z=e;var a=0;do{if(_o&&(xo=null),bo=0,_o=!1,25<=a)throw Error(i(301));if(a+=1,ho=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}k.H=Hs,o=t(n,r)}while(_o);return o}function Do(){var e=k.H,t=e.useState()[0];return t=typeof t.then==`function`?No(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function Oo(){var e=yo!==0;return yo=0,e}function ko(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ao(e){if(go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}go=!1}mo=0,ho=B=z=null,_o=!1,bo=yo=0,xo=null}function jo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ho===null?z.memoizedState=ho=e:ho=ho.next=e,ho}function H(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=ho===null?z.memoizedState:ho.next;if(t!==null)ho=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},ho===null?z.memoizedState=ho=e:ho=ho.next=e}return ho}function Mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var t=bo;return bo+=1,xo===null&&(xo=[]),e=ka(xo,e,t),t=z,(ho===null?t.memoizedState:ho.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Bs:Vs),e}function Po(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return No(e);if(e.$$typeof===C)return ia(e)}throw Error(i(438,String(e)))}function Fo(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Mo(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=te;return t.index++,n}function Io(e,t){return typeof t==`function`?t(e):t}function Lo(e){return Ro(H(),B,e)}function Ro(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(mo&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ma&&(d=!0);else if((mo&p)===p){u=u.next,p===ma&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,Gl|=p;f=u.action,vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Er(o,e.memoizedState)&&(ic=!0,d&&(n=ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zo(e){var t=H(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Er(o,t.memoizedState)||(ic=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Bo(e,t,n){var r=z,a=H(),o=I;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Er((B||a).memoizedState,n);if(s&&(a.memoizedState=n,ic=!0),a=a.queue,ds(Uo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||ho!==null&&ho.memoizedState.tag&1){if(r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||mo&127||Vo(r,t,n)}return n}function Vo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=Mo(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ho(e,t,n,r){t.value=n,t.getSnapshot=r,Wo(t)&&Go(e)}function Uo(e,t,n){return n(function(){Wo(t)&&Go(e)})}function Wo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Er(e,n)}catch{return!0}}function Go(e){var t=si(e,2);t!==null&&hu(t,e,2)}function Ko(e){var t=jo();if(typeof e==`function`){var n=e;if(e=n(),vo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:e},t}function qo(e,t,n,r){return e.baseState=n,Ro(e,B,typeof r==`function`?r:Io)}function Jo(e,t,n,r,a){if(Is(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};k.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Yo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Yo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=k.T,o={};k.T=o;try{var s=n(i,r),c=k.S;c!==null&&c(o,s),Xo(e,t,s)}catch(n){Qo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),k.T=a}}else try{a=n(i,r),Xo(e,t,a)}catch(n){Qo(e,t,n)}}function Xo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Zo(e,t,n)},function(n){return Qo(e,t,n)}):Zo(e,t,n)}function Zo(e,t,n){t.status=`fulfilled`,t.value=n,$o(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Yo(e,n)))}function Qo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,$o(t),t=t.next;while(t!==r)}e.action=null}function $o(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function es(e,t){return t}function ts(e,t){if(I){var n=K.formState;if(n!==null){a:{var r=z;if(I){if(F){b:{for(var i=F,a=zi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){F=cf(i.nextSibling),r=i.data===`F!`;break a}}Vi(r)}r=!1}r&&(t=n[0])}}return n=jo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:t},n.queue=r,n=Ns.bind(null,z,r),r.dispatch=n,r=Ko(!1),a=Fs.bind(null,z,!1,r.queue),r=jo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Jo.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ns(e){return rs(H(),B,e)}function rs(e,t,n){if(t=Ro(e,t,es)[0],e=Lo(Io)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=No(t)}catch(e){throw e===wa?Ea:e}else r=t;t=H();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,os(9,{destroy:void 0},is.bind(null,i,n),null)),[r,a,e]}function is(e,t){e.action=t}function as(e){var t=H(),n=B;if(n!==null)return rs(t,n,e);H(),t=t.memoizedState,n=H();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=Mo(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ss(){return H().memoizedState}function cs(e,t,n,r){var i=jo();z.flags|=e,i.memoizedState=os(1|t,{destroy:void 0},n,r===void 0?null:r)}function ls(e,t,n,r){var i=H();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Co(r,B.memoizedState.deps)?i.memoizedState=os(t,a,n,r):(z.flags|=e,i.memoizedState=os(1|t,a,n,r))}function us(e,t){cs(8390656,8,e,t)}function ds(e,t){ls(2048,8,e,t)}function fs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=Mo(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ps(e){var t=H().memoizedState;return fs({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function ms(e,t){return ls(4,2,e,t)}function hs(e,t){return ls(4,4,e,t)}function gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _s(e,t,n){n=n==null?null:n.concat([e]),ls(4,4,gs.bind(null,t,e),n)}function vs(){}function ys(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Co(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bs(e,t){var n=H();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Co(t,r[1]))return r[0];if(r=e(),vo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function xs(e,t,n){return n===void 0||mo&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),z.lanes|=e,Gl|=e,n)}function Ss(e,t,n,r){return Er(n,t)?n:eo.current===null?!(mo&42)||mo&1073741824&&!(J&261930)?(ic=!0,e.memoizedState=n):(e=mu(),z.lanes|=e,Gl|=e,t):(e=xs(e,n,r),Er(e,t)||(ic=!0),e)}function Cs(e,t,n,r,i){var a=A.p;A.p=a!==0&&8>a?a:8;var o=k.T,s={};k.T=s,Fs(e,!1,t,n);try{var c=i(),l=k.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ps(e,t,va(c,r),pu(e)):Ps(e,t,r,pu(e))}catch(n){Ps(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{A.p=a,o!==null&&s.types!==null&&(o.types=s.types),k.T=o}}function ws(){}function Ts(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Es(e).queue;Cs(e,a,t,se,n===null?ws:function(){return Ds(e),n(r)})}function Es(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ds(e){var t=Es(e);t.next===null&&(t=e.alternate.memoizedState),Ps(e,t.next.queue,{},pu())}function Os(){return ia(Qf)}function ks(){return H().memoizedState}function As(){return H().memoizedState}function js(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ga(n);var r=Ka(t,e,n);r!==null&&(hu(r,t,n),qa(r,t,n)),t={cache:ua()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Is(e)?Ls(t,n):(n=oi(e,t,n,r),n!==null&&(hu(n,e,r),Rs(n,t,r)))}function Ns(e,t,n){Ps(e,t,n,pu())}function Ps(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Is(e))Ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Er(s,o))return ai(e,t,i,0),K===null&&ii(),!1}catch{}if(n=oi(e,t,i,r),n!==null)return hu(n,e,r),Rs(n,t,r),!0}return!1}function Fs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Is(e)){if(t)throw Error(i(479))}else t=oi(e,n,r,2),t!==null&&hu(t,e,2)}function Is(e){var t=e.alternate;return e===z||t!==null&&t===z}function Ls(e,t){_o=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Rs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var zs={readContext:ia,use:Po,useCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useInsertionEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V,useDeferredValue:V,useTransition:V,useSyncExternalStore:V,useId:V,useHostTransitionStatus:V,useFormState:V,useActionState:V,useOptimistic:V,useMemoCache:V,useCacheRefresh:V};zs.useEffectEvent=V;var Bs={readContext:ia,use:Po,useCallback:function(e,t){return jo().memoizedState=[e,t===void 0?null:t],e},useContext:ia,useEffect:us,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),cs(4194308,4,gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){cs(4,2,e,t)},useMemo:function(e,t){var n=jo();t=t===void 0?null:t;var r=e();if(vo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=jo();if(n!==void 0){var i=n(t);if(vo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=jo();return e={current:e},t.memoizedState=e},useState:function(e){e=Ko(e);var t=e.queue,n=Ns.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vs,useDeferredValue:function(e,t){return xs(jo(),e,t)},useTransition:function(){var e=Ko(!1);return e=Cs.bind(null,z,e.queue,!0,!1),jo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=jo();if(I){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Vo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,us(Uo.bind(null,r,o,e),[e]),r.flags|=2048,os(9,{destroy:void 0},Ho.bind(null,r,o,n,t),null),n},useId:function(){var e=jo(),t=K.identifierPrefix;if(I){var n=ji,r=Ai;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=yo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=So++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Os,useFormState:ts,useActionState:ts,useOptimistic:function(e){var t=jo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Fs.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:Fo,useCacheRefresh:function(){return jo().memoizedState=js.bind(null,z)},useEffectEvent:function(e){var t=jo(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Vs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:Lo,useRef:ss,useState:function(){return Lo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){return Ss(H(),B.memoizedState,e,t)},useTransition:function(){var e=Lo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:ns,useActionState:ns,useOptimistic:function(e,t){return qo(H(),B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Vs.useEffectEvent=ps;var Hs={readContext:ia,use:Po,useCallback:ys,useContext:ia,useEffect:ds,useImperativeHandle:_s,useInsertionEffect:ms,useLayoutEffect:hs,useMemo:bs,useReducer:zo,useRef:ss,useState:function(){return zo(Io)},useDebugValue:vs,useDeferredValue:function(e,t){var n=H();return B===null?xs(n,e,t):Ss(n,B.memoizedState,e,t)},useTransition:function(){var e=zo(Io)[0],t=H().memoizedState;return[typeof e==`boolean`?e:No(e),t]},useSyncExternalStore:Bo,useId:ks,useHostTransitionStatus:Os,useFormState:as,useActionState:as,useOptimistic:function(e,t){var n=H();return B===null?(n.baseState=e,[e,n.queue.dispatch]):qo(n,B,e,t)},useMemoCache:Fo,useCacheRefresh:As};Hs.useEffectEvent=ps;function Us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ga(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ka(e,i,r),t!==null&&(hu(t,e,r),qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ga(n);r.tag=2,t!=null&&(r.callback=t),t=Ka(e,r,n),t!==null&&(hu(t,e,n),qa(t,e,n))}};function Gs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(i,a):!0}function Ks(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function qs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Js(e){ei(e)}function Ys(e){console.error(e)}function Xs(e){ei(e)}function Zs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Qs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function $s(e,t,n){return n=Ga(n),n.tag=3,n.payload={element:null},n.callback=function(){Zs(e,t)},n}function ec(e){return e=Ga(e),e.tag=3,e}function tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Qs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Qs(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function nc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ta(t,n,a,!0),n=ao.current,n!==null){switch(n.tag){case 31:case 13:return oo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Da?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(I)return t=ao.current,t===null?(r!==Bi&&(t=Error(i(423),{cause:r}),qi(Si(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Si(r,n),a=$s(e.stateNode,r,a),Ja(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Bi&&(e=Error(i(422),{cause:r}),qi(Si(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Si(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Si(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=$s(n.stateNode,r,e),Ja(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ec(a),tc(a,e,n,r),Ja(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(i(461)),ic=!1;function ac(e,t,n,r){t.child=e===null?Va(t,null,n,r):Ba(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ra(t),r=wo(e,t,n,o,a,i),s=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&s&&Pi(t),t.flags|=1,ac(e,t,r,i),t.child)}function sc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!pi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,cc(e,t,a,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!jc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Dr:n,n(o,r)&&e.ref===t.ref)return Ac(e,t,i)}return t.flags|=1,e=mi(a,r),e.ref=t.ref,e.return=t,t.child=e}function cc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,r)&&e.ref===t.ref){if(ic=!1,t.pendingProps=r=a,jc(e,i))e.flags&131072&&(ic=!0);else return t.lanes=e.lanes,Ac(e,t,i)}}return gc(e,t,n,r,i)}function lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return dc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sa(t,a===null?null:a.cachePool),a===null?ro():no(t,a),lo(t);else return r=t.lanes=536870912,dc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Sa(t,null),ro(),uo(t)):(Sa(t,a.cachePool),no(t,a),uo(t),t.memoizedState=null);return ac(e,t,i,n),t.child}function uc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function dc(e,t,n,r,i){var a=xa();return a=a===null?null:{parent:L._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Sa(t,null),ro(),lo(t),e!==null&&ta(e,t,r,!0),t.childLanes=i,null}function fc(e,t){return t=Tc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function pc(e,t,n){return Ba(t,e.child,null,n),e=fc(t,t.pendingProps),e.flags|=2,fo(t),t.memoizedState=null,e}function mc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(I){if(r.mode===`hidden`)return e=fc(t,r),t.lanes=536870912,uc(null,e);if(co(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return t.lanes=536870912,null}return fc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(co(t),a){if(t.flags&256)t.flags&=-257,t=pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(ic||ta(e,t,n,!1),a=(n&e.childLanes)!==0,ic||a){if(r=K,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,si(e,s),hu(r,e,s),rc;Du(),t=pc(e,t,n)}else e=o.treeContext,F=cf(s.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=fc(t,r),t.flags|=4096;return t}return e=mi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gc(e,t,n,r,i){return ra(t),n=wo(e,t,n,r,void 0,i),r=Oo(),e!==null&&!ic?(ko(e,t,i),Ac(e,t,i)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,i),t.child)}function _c(e,t,n,r,i,a){return ra(t),t.updateQueue=null,n=Eo(t,r,n,i),To(e),r=Oo(),e!==null&&!ic?(ko(e,t,a),Ac(e,t,a)):(I&&r&&Pi(t),t.flags|=1,ac(e,t,n,a),t.child)}function vc(e,t,n,r,i){if(ra(t),t.stateNode===null){var a=ui,o=n.contextType;typeof o==`object`&&o&&(a=ia(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ws,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ua(t),o=n.contextType,a.context=typeof o==`object`&&o?ia(o):ui,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Us(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ws.enqueueReplaceState(a,a.state,null),Za(t,r,a,i),Xa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=qs(n,s);a.props=c;var l=a.context,u=n.contextType;o=ui,typeof u==`object`&&u&&(o=ia(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ks(t,a,r,o),Ha=!1;var f=t.memoizedState;a.state=f,Za(t,r,a,i),Xa(),l=t.memoizedState,s||f!==l||Ha?(typeof d==`function`&&(Us(t,n,d,r),l=t.memoizedState),(c=Ha||Gs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Wa(e,t),o=t.memoizedProps,u=qs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ui,typeof l==`object`&&l&&(c=ia(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ks(t,a,r,c),Ha=!1,f=t.memoizedState,a.state=f,Za(t,r,a,i),Xa();var p=t.memoizedState;o!==d||f!==p||Ha||e!==null&&e.dependencies!==null&&na(e.dependencies)?(typeof s==`function`&&(Us(t,n,s,r),p=t.memoizedState),(u=Ha||Gs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ba(t,e.child,null,i),t.child=Ba(t,null,n,i)):ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ac(e,t,i),e}function yc(e,t,n,r){return Gi(),t.flags|=256,ac(e,t,n,r),t.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:Ca()}}function Sc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function Cc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(R.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(I){if(a?so(t):uo(t),(e=F)?(e=rf(e,zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ki===null?null:{id:Ai,overflow:ji},retryLane:536870912,hydrationErrors:null},n=yi(e),n.return=t,t.child=n,Li=t,F=null)):e=null,e===null)throw Vi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(uo(t),a=t.mode,c=Tc({mode:`hidden`,children:c},a),r=_i(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(null,r)):(so(t),wc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(so(t),t.flags&=-257,t=Ec(e,t,n)):t.memoizedState===null?(uo(t),c=r.fallback,a=t.mode,r=Tc({mode:`visible`,children:r.children},a),c=_i(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ba(t,e.child,null,n),r=t.child,r.memoizedState=xc(n),r.childLanes=Sc(e,s,n),t.memoizedState=bc,t=uc(null,r)):(uo(t),t.child=e.child,t.flags|=128,t=null);else if(so(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,qi({value:r,source:null,stack:null}),t=Ec(e,t,n)}else if(ic||ta(e,t,n,!1),s=(n&e.childLanes)!==0,ic||s){if(s=K,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,si(e,r),hu(s,e,r),rc;af(c)||Du(),t=Ec(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,F=cf(c.nextSibling),Li=t,I=!0,Ri=null,zi=!1,e!==null&&Ii(t,e),t=wc(t,r.children),t.flags|=4096);return t}return a?(uo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=mi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=_i(c,a,n,null),c.flags|=2):c=mi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,uc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=xc(n):(a=c.cachePool,a===null?a=Ca():(l=L._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Sc(e,s,n),t.memoizedState=bc,uc(e.child,r)):(so(t),n=e.child,e=n.sibling,n=mi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function wc(e,t){return t=Tc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Tc(e,t){return e=fi(22,e,null,t),e.lanes=0,e}function Ec(e,t,n){return Ba(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$i(e.return,t,n)}function Oc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function kc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=R.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,j(R,o),ac(e,t,r,n),r=I?Ei:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dc(e,n,t);else if(e.tag===19)Dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&po(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a,r);break;case`together`:Oc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=mi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&na(e)))}function Mc(e,t,n){switch(t.tag){case 3:ge(t,t.stateNode.containerInfo),Zi(t,L,e.memoizedState.cache),Gi();break;case 27:case 5:ve(t);break;case 4:ge(t,t.stateNode.containerInfo);break;case 10:Zi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,co(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(so(t),e=Ac(e,t,n),e===null?null:e.sibling):Cc(e,t,n):(so(t),t.flags|=128,null);so(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ta(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return kc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(R,R.current),r)break;return null;case 22:return t.lanes=0,lc(e,t,n,t.pendingProps);case 24:Zi(t,L,e.memoizedState.cache)}return Ac(e,t,n)}function Nc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)ic=!0;else{if(!jc(e,n)&&!(t.flags&128))return ic=!1,Mc(e,t,n);ic=!!(e.flags&131072)}}else ic=!1,I&&t.flags&1048576&&Ni(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Aa(t.elementType),t.type=e,typeof e==`function`)pi(e)?(r=qs(e,r),t.tag=1,t=vc(null,t,e,r,n)):(t.tag=0,t=gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=oc(null,t,e,r,n);break a}if(a===D){t.tag=14,t=sc(null,t,e,r,n);break a}}throw t=ae(e)||e,Error(i(306,t,``))}}return t;case 0:return gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=qs(r,t.pendingProps),vc(e,t,r,a,n);case 3:a:{if(ge(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Wa(e,t),Za(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Zi(t,L,r),r!==o.cache&&ea(t,[L],n,!0),Xa(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=yc(e,t,r,n);break a}if(r!==a){a=Si(Error(i(424)),t),qi(a),t=yc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(F=cf(e.firstChild),Li=t,I=!0,Ri=null,zi=!0,n=Va(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Gi(),r===a){t=Ac(e,t,n);break a}ac(e,t,r,n)}t=t.child}return t;case 26:return hc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:I||(n=t.type,e=t.pendingProps,r=Bd(me.current).createElement(n),r[dt]=t,r[ft]=e,Pd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&I&&(r=t.stateNode=ff(t.type,t.pendingProps,me.current),Li=t,zi=!0,a=F,Zd(t.type)?(lf=a,F=cf(r.firstChild)):F=a),ac(e,t,t.pendingProps.children,n),hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&I&&((a=r=F)&&(r=tf(r,t.type,t.pendingProps,zi),r===null?a=!1:(t.stateNode=r,Li=t,F=cf(r.firstChild),zi=!1,a=!0)),a||Vi(t)),ve(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=wo(e,t,Do,null,null,n),Qf._currentValue=a),hc(e,t),ac(e,t,r,n),t.child;case 6:return e===null&&I&&((e=n=F)&&(n=nf(n,t.pendingProps,zi),n===null?e=!1:(t.stateNode=n,Li=t,F=null,e=!0)),e||Vi(t)),null;case 13:return Cc(e,t,n);case 4:return ge(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ba(t,null,r,n):ac(e,t,r,n),t.child;case 11:return oc(e,t,t.type,t.pendingProps,n);case 7:return ac(e,t,t.pendingProps,n),t.child;case 8:return ac(e,t,t.pendingProps.children,n),t.child;case 12:return ac(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Zi(t,t.type,r.value),ac(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ra(t),a=ia(a),r=r(a),t.flags|=1,ac(e,t,r,n),t.child;case 14:return sc(e,t,t.type,t.pendingProps,n);case 15:return cc(e,t,t.type,t.pendingProps,n);case 19:return kc(e,t,n);case 31:return mc(e,t,n);case 22:return lc(e,t,n,t.pendingProps);case 24:return ra(t),r=ia(L),e===null?(a=xa(),a===null&&(a=K,o=ua(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ua(t),Zi(t,L,a)):((e.lanes&n)!==0&&(Wa(e,t),Za(t,null,null,n),Xa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Zi(t,L,r),r!==a.cache&&ea(t,[L],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zi(t,L,r))),ac(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Pc(e){e.flags|=4}function Fc(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw ja=Da,Ta}}else e.flags&=-16777217}function Ic(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw ja=Da,Ta}}function Lc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,Yl|=t)}function Rc(e,t){if(!I)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function U(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zc(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return U(t),null;case 1:return U(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Qi(L),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?Pc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ki())),U(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Pc(t),o===null?(U(t),Fc(t,a,null,r,n)):(U(t),Ic(t,o))):o?o===e.memoizedState?(U(t),t.flags&=-16777217):(Pc(t),U(t),Ic(t,o)):(e=e.memoizedProps,e!==r&&Pc(t),U(t),Fc(t,a,e,r,n)),null;case 27:if(ye(t),n=me.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}e=fe.current,Wi(t)?Hi(t,e):(e=ff(a,r,n),t.stateNode=e,Pc(t))}return U(t),null;case 5:if(ye(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return U(t),null}if(o=fe.current,Wi(t))Hi(t,o);else{var s=Bd(me.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[dt]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Pc(t)}}return U(t),Fc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Pc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=me.current,Wi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Vi(t,!0)}else e=Bd(e).createTextNode(r),e[dt]=t,t.stateNode=e}return U(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Wi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[dt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),e=!1}else n=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fo(t),t):(fo(t),null);if(t.flags&128)throw Error(i(558))}return U(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[dt]=t}else Gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;U(t),a=!1}else a=Ki(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(fo(t),t):(fo(t),null)}return fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Lc(t,t.updateQueue),U(t),null);case 4:return _e(),e===null&&Sd(t.stateNode.containerInfo),U(t),null;case 10:return Qi(t.type),U(t),null;case 19:if(de(R),r=t.memoizedState,r===null)return U(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Rc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=po(e),o!==null){for(t.flags|=128,Rc(r,!1),e=o.updateQueue,t.updateQueue=e,Lc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hi(n,e),n=n.sibling;return j(R,R.current&1|2),I&&Mi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Lc(t,e),Rc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!I)return U(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Rc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(U(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=R.current,j(R,a?n&1|2:n&1),I&&Mi(t,r.treeForkCount),e);case 22:case 23:return fo(t),io(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(U(t),t.subtreeFlags&6&&(t.flags|=8192)):U(t),n=t.updateQueue,n!==null&&Lc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&de(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qi(L),U(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Bc(e,t){switch(Fi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qi(L),_e(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ye(t),null;case 31:if(t.memoizedState!==null){if(fo(t),t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(R),null;case 4:return _e(),null;case 10:return Qi(t.type),null;case 22:case 23:return fo(t),io(),e!==null&&de(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qi(L),null;case 25:return null;default:return null}}function Vc(e,t){switch(Fi(t),t.tag){case 3:Qi(L),_e();break;case 26:case 27:case 5:ye(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&fo(t);break;case 13:fo(t);break;case 19:de(R);break;case 10:Qi(t.type);break;case 22:case 23:fo(t),io(),e!==null&&de(ba);break;case 24:Qi(L)}}function Hc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Uc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Wc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$a(t,n)}catch(t){Z(e,e.return,t)}}}function Gc(e,t,n){n.props=qs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Kc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function qc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Jc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Yc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ft]=t}catch(t){Z(e,e.return,t)}}function Xc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Zc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[dt]=e,t[ft]=n}catch(t){Z(e,e.return,t)}}var tl=!1,nl=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=jr(e),Mr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=qs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Hc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=qs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Wc(n),r&512&&Kc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$a(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&el(n);case 26:case 5:xl(e,n),t===null&&r&4&&Jc(n),r&512&&Kc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||tl,!r){t=t!==null&&t.memoizedState!==null||nl,i=tl;var a=nl;tl=r,(nl=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),tl=i,nl=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:nl||qc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nl||qc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:nl||qc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Uc(2,n,t),nl||Uc(4,n,t),ul(e,t,n);break;case 1:nl||(qc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Gc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:nl=(r=nl)||n.memoizedState!==null,ul(e,t,n),nl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Uc(3,e,e.return),Hc(3,e),Uc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&64&&tl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[vt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[dt]=e,wt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[dt]=e,wt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Yc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),n!==null&&r&4&&Yc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(nl||n===null||qc(n,n.return)),e.flags&32){a=e.stateNode;try{Xt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Yc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=tl,d=nl;if(tl=u||a,nl=d||l,gl(t,e),nl=d,tl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||tl||nl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Xc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;$c(e,Zc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),$c(e,Zc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Qc(e,Zc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Uc(4,t,t.return),Sl(t);break;case 1:qc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Gc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:qc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Hc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Qa(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Wc(a),Kc(a,a.return);break;case 27:el(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Jc(a),Kc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Kc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&da(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Hc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&da(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Hc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Uc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Uc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Uc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=ia(L),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ia(L).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:k.T===null?ct():dd()}function mu(){if(Jl===0){if(!(J&536870912)||I){var e=M;M<<=1,!(M&3932160)&&(M=262144),Jl=e}else Jl=536870912}return e=ao.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),tt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Vl),N(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Ml(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Er(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,Xi=Yi=null,Ao(e),Pa=null,Fa=0,e=q;for(;e!==null;)Vc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=mi(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=Ze(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,ii(),n}function Cu(e,t){z=null,k.H=zs,t===wa||t===Ea?(t=Ma(),Y=3):t===Ta?(t=Ma(),Y=4):Y=t===rc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,Zs(e,Si(t,e.current)))}function wu(){var e=ao.current;return e===null?!0:(J&4194048)===J?oo===null:(J&62914560)===J||J&536870912?e===oo:!1}function Tu(){var e=k.H;return k.H=zs,e===null?zs:e}function Eu(){var e=k.A;return k.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&ao.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:ao.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Xi=Yi=null,G=r,k.H=i,k.A=a,q===null&&(K=null,J=0,ii()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Me()+500,Su(e,t)):Hl=Ze(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(Oa(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:Oa(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Xi=Yi=null,k.H=r,k.A=a,G=n,q===null?(K=null,J=0,ii(),X):0}function ju(){for(;q!==null&&!Ae();)Mu(q)}function Mu(e){var t=Nc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_c(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=_c(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Ao(t);default:Vc(n,t),t=q=hi(t,Wl),t=Nc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){Xi=Yi=null,Ao(t),Pa=null,Fa=0;var i=t.return;try{if(nc(e,i,t,n,J)){X=1,Zs(e,Si(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,Zs(e,Si(n,e.current)),q=null;return}t.flags&32768?(I||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=zc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Bc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ri,nt(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=k.T,k.T=null,a=A.p,A.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,A.p=a,k.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=jr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ar(s.ownerDocument.documentElement,s)){if(c!==null&&Mr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=kr(s,h),v=kr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,A.p=r,k.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var r=A.p;A.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,A.p=r,k.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),st(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=k.T,i=A.p,A.p=2,k.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{k.T=t,A.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,da(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=st(su),r=k.T,a=A.p;try{A.p=32>n?32:n,k.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{A.p=a,k.T=r,Vu(e,t)}}function Wu(e,t,n){t=Si(n,t),t=$s(e.stateNode,t,2),e=Ka(e,t,2),e!==null&&(tt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Si(n,e),n=ec(2),r=Ka(t,n,2),r!==null&&(tc(n,r,t,e),tt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Me()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=$e()),e=si(e,t),e!==null&&(tt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=N(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=N(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),st(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=N(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=ma;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Tn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ts(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ts(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Qr.length;hd++){var gd=Qr[hd];$r(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}$r(Wr,`onAnimationEnd`),$r(Gr,`onAnimationIteration`),$r(Kr,`onAnimationStart`),$r(`dblclick`,`onDoubleClick`),$r(`focusin`,`onFocus`),$r(`focusout`,`onBlur`),$r(qr,`onTransitionRun`),$r(Jr,`onTransitionStart`),$r(Yr,`onTransitionCancel`),$r(Xr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ei(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Zr.get(e);if(c!==void 0){var l=Tn,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Un;break;case`focusin`:u=`focus`,l=Pn;break;case`focusout`:u=`blur`,l=Pn;break;case`beforeblur`:case`afterblur`:l=Pn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Mn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Nn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Gn;break;case Wr:case Gr:case Kr:l=Fn;break;case Xr:l=Kn;break;case`scroll`:case`scrollend`:l=Dn;break;case`wheel`:l=qn;break;case`copy`:case`cut`:case`paste`:l=In;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Wn;break;case`toggle`:case`beforetoggle`:l=Jn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Mn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Wn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=mr;else if(cr(c)){if(hr)v=wr;else{v=Sr;var y=xr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=mr):v=Cr;if(v&&=v(e,r)){lr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(cr(y)||y.contentEditable===`true`)&&(Pr=y,Fr=r,Ir=null);break;case`focusout`:Ir=Fr=Pr=null;break;case`mousedown`:Lr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Lr=!1,Rr(s,n,i);break;case`selectionchange`:if(Nr)break;case`keydown`:case`keyup`:Rr(s,n,i)}var b;if(Xn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ir?nr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&($n&&n.locale!==`ko`&&(ir||x!==`onCompositionStart`?x===`onCompositionEnd`&&ir&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ir=!0)),y=Ed(r,x),0<y.length&&(x=new Ln(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=rr(n),b!==null&&(x.data=b)))),(b=Qn?ar(e,n):or(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Ln(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=pn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Yt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=A.d;A.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Ds(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Ct(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);wt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Ct(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),wt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=me.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Ut(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),wt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Ut(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,wt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=fi(3,null,null,t),e.current=a,a.stateNode=e,t=ua(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ua(a),e}function tp(e){return e?(e=ui,e):ui}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ga(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ka(e,r,t),n!==null&&(hu(n,e,t),qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ot(t);var n=si(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=2,up(e,t,n,r)}finally{A.p=a,k.T=i}}function lp(e,t,n,r){var i=k.T;k.T=null;var a=A.p;try{A.p=8,up(e,t,n,r)}finally{A.p=a,k.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=si(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=sn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=xt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,Ts(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[pt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));A.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:k,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Js,s=Ys,c=Xs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[pt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),S=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},C={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},w=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},T=(0,_.createContext)({}),E=()=>(0,_.useContext)(T),D=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=E()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...C,width:t??l??C.width,height:t??l??C.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!w(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),O=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(D,{ref:i,iconNode:t,className:y(`lucide-${b(S(e))}`,`lucide-${e}`,n),...r}));return n.displayName=S(e),n},ee=O(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),te=O(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ne=O(`blocks`,[[`path`,{d:`M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2`,key:`1ah6g2`}],[`rect`,{x:`14`,y:`2`,width:`8`,height:`8`,rx:`1`,key:`88lufb`}]]),re=O(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),ie=O(`bookmark-check`,[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,key:`oz39mx`}],[`path`,{d:`m9 10 2 2 4-4`,key:`1gnqz4`}]]),ae=O(`bookmark`,[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,key:`oz39mx`}]]),oe=O(`boxes`,[[`path`,{d:`M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z`,key:`lc1i9w`}],[`path`,{d:`m7 16.5-4.74-2.85`,key:`1o9zyk`}],[`path`,{d:`m7 16.5 5-3`,key:`va8pkn`}],[`path`,{d:`M7 16.5v5.17`,key:`jnp8gn`}],[`path`,{d:`M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z`,key:`8zsnat`}],[`path`,{d:`m17 16.5-5-3`,key:`8arw3v`}],[`path`,{d:`m17 16.5 4.74-2.85`,key:`8rfmw`}],[`path`,{d:`M17 16.5v5.17`,key:`k6z78m`}],[`path`,{d:`M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z`,key:`1xygjf`}],[`path`,{d:`M12 8 7.26 5.15`,key:`1vbdud`}],[`path`,{d:`m12 8 4.74-2.85`,key:`3rx089`}],[`path`,{d:`M12 13.5V8`,key:`1io7kd`}]]),k=O(`bug`,[[`path`,{d:`M12 20v-9`,key:`1qisl0`}],[`path`,{d:`M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z`,key:`uouzyp`}],[`path`,{d:`M14.12 3.88 16 2`,key:`qol33r`}],[`path`,{d:`M21 21a4 4 0 0 0-3.81-4`,key:`1b0z45`}],[`path`,{d:`M21 5a4 4 0 0 1-3.55 3.97`,key:`5cxbf6`}],[`path`,{d:`M22 13h-4`,key:`1jl80f`}],[`path`,{d:`M3 21a4 4 0 0 1 3.81-4`,key:`1fjd4g`}],[`path`,{d:`M3 5a4 4 0 0 0 3.55 3.97`,key:`1d7oge`}],[`path`,{d:`M6 13H2`,key:`82j7cp`}],[`path`,{d:`m8 2 1.88 1.88`,key:`fmnt4t`}],[`path`,{d:`M9 7.13V6a3 3 0 1 1 6 0v1.13`,key:`1vgav8`}]]),A=O(`chart-column`,[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]]),se=O(`check-check`,[[`path`,{d:`M18 6 7 17l-5-5`,key:`116fxf`}],[`path`,{d:`m22 10-7.5 7.5L13 16`,key:`ke71qq`}]]),ce=O(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),le=O(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ue=O(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),de=O(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),j=O(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),fe=O(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),pe=O(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),me=O(`clock`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]),he=O(`code`,[[`path`,{d:`m16 18 6-6-6-6`,key:`eg8j8`}],[`path`,{d:`m8 6-6 6 6 6`,key:`ppft3o`}]]),ge=O(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),_e=O(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),ve=O(`cpu`,[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]),ye=O(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),be=O(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),xe=O(`eye`,[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Se=O(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Ce=O(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),we=O(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),Te=O(`key`,[[`path`,{d:`m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4`,key:`g0fldk`}],[`path`,{d:`m21 2-9.6 9.6`,key:`1j0ho8`}],[`circle`,{cx:`7.5`,cy:`15.5`,r:`5.5`,key:`yqb3hr`}]]),Ee=O(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),De=O(`lightbulb`,[[`path`,{d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`}],[`path`,{d:`M9 18h6`,key:`x1upvd`}],[`path`,{d:`M10 22h4`,key:`ceow96`}]]),Oe=O(`list-ordered`,[[`path`,{d:`M11 5h10`,key:`1cz7ny`}],[`path`,{d:`M11 12h10`,key:`1438ji`}],[`path`,{d:`M11 19h10`,key:`11t30w`}],[`path`,{d:`M4 4h1v5`,key:`10yrso`}],[`path`,{d:`M4 9h2`,key:`r1h2o0`}],[`path`,{d:`M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02`,key:`xtkcd5`}]]),ke=O(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),Ae=O(`map`,[[`path`,{d:`M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,key:`169xi5`}],[`path`,{d:`M15 5.764v15`,key:`1pn4in`}],[`path`,{d:`M9 3.236v15`,key:`1uimfh`}]]),je=O(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),Me=O(`play`,[[`path`,{d:`M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,key:`10ikf1`}]]),Ne=O(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Pe=O(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Fe=O(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),Ie=O(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),Le=O(`shapes`,[[`path`,{d:`M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z`,key:`1bo67w`}],[`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`,key:`1bkyp8`}],[`circle`,{cx:`17.5`,cy:`17.5`,r:`3.5`,key:`w3z12y`}]]),Re=O(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),ze=O(`shuffle`,[[`path`,{d:`m18 14 4 4-4 4`,key:`10pe0f`}],[`path`,{d:`m18 2 4 4-4 4`,key:`pucp1d`}],[`path`,{d:`M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22`,key:`1ailkh`}],[`path`,{d:`M2 6h1.972a4 4 0 0 1 3.6 2.2`,key:`km57vx`}],[`path`,{d:`M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45`,key:`os18l9`}]]),Be=O(`skip-back`,[[`path`,{d:`M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z`,key:`15892j`}],[`path`,{d:`M3 20V4`,key:`1ptbpl`}]]),Ve=O(`skip-forward`,[[`path`,{d:`M21 4v16`,key:`7j8fe9`}],[`path`,{d:`M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z`,key:`zs4d6`}]]),He=O(`sparkles`,[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]]),Ue=O(`sticky-note`,[[`path`,{d:`M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z`,key:`1dfntj`}],[`path`,{d:`M15 3v5a1 1 0 0 0 1 1h5`,key:`6s6qgf`}]]),We=O(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),Ge=O(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Ke=O(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),qe=O(`zap`,[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]),Je=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),M=o(((e,t)=>{t.exports=Je()}))();function Ye({currentView:e,setCurrentView:t,selectedProblem:n,onSelectRandom:r,solvedCount:i,totalCount:a,onOpenSettings:o,onOpenStats:s}){let[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=null;return u?e=setInterval(()=>{l(e=>e+1)},1e3):clearInterval(e),()=>clearInterval(e)},[u]);let f=e=>{let t=Math.floor(e/60),n=e%60;return`${t.toString().padStart(2,`0`)}:${n.toString().padStart(2,`0`)}`},p=a>0?Math.round(i/a*100):0;return(0,M.jsxs)(`header`,{style:{height:`60px`,backgroundColor:`#0d131f`,borderBottom:`1px solid #1e293b`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 20px`,zIndex:50,position:`sticky`,top:0},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`24px`},children:[(0,M.jsxs)(`div`,{onClick:()=>t(`roadmap`),style:{display:`flex`,alignItems:`center`,gap:`10px`,cursor:`pointer`,userSelect:`none`},children:[(0,M.jsx)(`div`,{style:{background:`linear-gradient(135deg, #0284c7 0%, #6366f1 100%)`,padding:`6px 8px`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 12px rgba(56, 189, 248, 0.4)`},children:(0,M.jsx)(ge,{size:20,color:`#ffffff`})}),(0,M.jsx)(`div`,{children:(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`span`,{style:{fontSize:`17px`,fontWeight:800,letterSpacing:`-0.02em`,color:`#f8fafc`},children:`JAVA DSA`}),(0,M.jsx)(`span`,{style:{background:`linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)`,color:`#ffffff`,fontSize:`11px`,fontWeight:800,padding:`2px 7px`,borderRadius:`6px`,letterSpacing:`0.04em`,boxShadow:`0 0 10px rgba(245, 158, 11, 0.35)`},children:`PRACTICE`}),(0,M.jsx)(`span`,{style:{background:`linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,fontSize:`11px`,fontWeight:700,border:`1px solid rgba(56, 189, 248, 0.3)`,padding:`1px 5px`,borderRadius:`4px`,backgroundColor:`rgba(56, 189, 248, 0.08)`},children:`AI`})]})})]}),(0,M.jsxs)(`nav`,{style:{display:`flex`,gap:`6px`,marginLeft:`12px`},children:[(0,M.jsxs)(`button`,{onClick:()=>t(`roadmap`),className:`btn-secondary`,style:{backgroundColor:e===`roadmap`?`#1e293b`:`transparent`,borderColor:e===`roadmap`?`#38bdf8`:`transparent`,color:e===`roadmap`?`#38bdf8`:`#94a3b8`,padding:`6px 12px`,fontSize:`13px`},children:[(0,M.jsx)(Ae,{size:15}),(0,M.jsx)(`span`,{children:`Roadmap`})]}),(0,M.jsxs)(`button`,{onClick:()=>t(`problems`),className:`btn-secondary`,style:{backgroundColor:e===`problems`?`#1e293b`:`transparent`,borderColor:e===`problems`?`#38bdf8`:`transparent`,color:e===`problems`?`#38bdf8`:`#94a3b8`,padding:`6px 12px`,fontSize:`13px`},children:[(0,M.jsx)(Oe,{size:15}),(0,M.jsx)(`span`,{children:`Problems`})]}),(0,M.jsxs)(`button`,{onClick:()=>t(`theory`),className:`btn-secondary`,style:{backgroundColor:e===`theory`?`#1e293b`:`transparent`,borderColor:e===`theory`?`#38bdf8`:`transparent`,color:e===`theory`?`#38bdf8`:`#94a3b8`,padding:`6px 12px`,fontSize:`13px`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(re,{size:15}),(0,M.jsx)(`span`,{children:`Java Theory`}),(0,M.jsx)(`span`,{style:{fontSize:`10px`,fontWeight:700,backgroundColor:`rgba(245, 158, 11, 0.2)`,color:`#f59e0b`,border:`1px solid rgba(245, 158, 11, 0.4)`,padding:`1px 5px`,borderRadius:`4px`},children:`21 LTS`})]}),n&&(0,M.jsxs)(`button`,{onClick:()=>t(`workspace`),className:`btn-secondary`,style:{backgroundColor:e===`workspace`?`#1e293b`:`transparent`,borderColor:e===`workspace`?`#38bdf8`:`transparent`,color:e===`workspace`?`#38bdf8`:`#94a3b8`,padding:`6px 12px`,fontSize:`13px`},children:[(0,M.jsx)(We,{size:15}),(0,M.jsxs)(`span`,{children:[`Workspace: `,n.title]})]})]})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,M.jsxs)(`div`,{onClick:s,style:{display:`flex`,alignItems:`center`,gap:`8px`,backgroundColor:`#162032`,border:`1px solid #233044`,padding:`5px 12px`,borderRadius:`20px`,cursor:`pointer`,fontSize:`13px`},title:`Click to view detailed stats`,children:[(0,M.jsx)(`span`,{style:{color:`#94a3b8`},children:`Solved:`}),(0,M.jsxs)(`span`,{style:{color:`#10b981`,fontWeight:600},children:[i,`/`,a]}),(0,M.jsx)(`div`,{style:{width:`45px`,height:`6px`,backgroundColor:`#273549`,borderRadius:`4px`,overflow:`hidden`},children:(0,M.jsx)(`div`,{style:{width:`${p}%`,height:`100%`,backgroundColor:`#10b981`,transition:`width 0.3s ease`}})})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,backgroundColor:`#162032`,border:`1px solid #233044`,padding:`4px 10px`,borderRadius:`8px`,fontFamily:`JetBrains Mono, monospace`,fontSize:`13px`},children:[(0,M.jsx)(`span`,{style:{color:u?`#38bdf8`:`#94a3b8`,minWidth:`45px`},children:f(c)}),(0,M.jsx)(`button`,{onClick:()=>d(!u),style:{background:`none`,border:`none`,color:`#94a3b8`,cursor:`pointer`,padding:`2px`,display:`flex`},title:u?`Pause timer`:`Start timer`,children:u?(0,M.jsx)(je,{size:14}):(0,M.jsx)(Me,{size:14})}),(0,M.jsx)(`button`,{onClick:()=>{d(!1),l(0)},style:{background:`none`,border:`none`,color:`#94a3b8`,cursor:`pointer`,padding:`2px`,display:`flex`},title:`Reset timer`,children:(0,M.jsx)(Ne,{size:14})})]}),(0,M.jsxs)(`button`,{onClick:r,className:`btn-secondary`,style:{padding:`6px 12px`,fontSize:`13px`},title:`Pick a random problem`,children:[(0,M.jsx)(ze,{size:14,color:`#38bdf8`}),(0,M.jsx)(`span`,{children:`Pick One`})]}),(0,M.jsx)(`button`,{onClick:s,className:`btn-secondary`,style:{padding:`6px 10px`},title:`Detailed analytics`,children:(0,M.jsx)(A,{size:15,color:`#94a3b8`})}),(0,M.jsx)(`button`,{onClick:o,className:`btn-secondary`,style:{padding:`6px 10px`},title:`Settings & Gemini API`,children:(0,M.jsx)(Ie,{size:15,color:`#94a3b8`})})]})]})}var Xe=[{id:`arrays-hashing`,name:`Arrays & Hashing`,icon:`LayoutGrid`,color:`#38bdf8`,description:`Hash maps, sets, prefix sums, frequency counters`},{id:`two-pointers`,name:`Two Pointers`,icon:`MoveHorizontal`,color:`#a78bfa`,description:`Left & right pointers, convergence, sorted arrays`},{id:`sliding-window`,name:`Sliding Window`,icon:`Maximize2`,color:`#f472b6`,description:`Subarrays, fixed & dynamic windows`},{id:`stack`,name:`Stack`,icon:`Layers`,color:`#fb923c`,description:`LIFO, monotonic stacks, parenthesis matching`},{id:`binary-search`,name:`Binary Search`,icon:`Search`,color:`#34d399`,description:`Logarithmic search, bounds, search space reduction`},{id:`linked-list`,name:`Linked List`,icon:`GitCommit`,color:`#60a5fa`,description:`Node chains, fast & slow pointers, reversals`},{id:`trees`,name:`Trees`,icon:`Network`,color:`#4ade80`,description:`DFS, BFS, BST properties, recursion`},{id:`heap-priority-queue`,name:`Heap / Priority Queue`,icon:`Flame`,color:`#f87171`,description:`Min/Max heaps, Top-K elements`},{id:`backtracking`,name:`Backtracking`,icon:`Undo2`,color:`#c084fc`,description:`Combinations, permutations, pruning search spaces`},{id:`graphs`,name:`Graphs`,icon:`Share2`,color:`#2dd4bf`,description:`Adjacency list, BFS/DFS, topological sort, Dijkstra`},{id:`1d-dp`,name:`1-D Dynamic Programming`,icon:`Zap`,color:`#facc15`,description:`Memoization, tabulation, state transitions`},{id:`2d-dp`,name:`2-D Dynamic Programming`,icon:`Boxes`,color:`#fbbf24`,description:`Grid DP, LCS, Knapsack variants`},{id:`greedy`,name:`Greedy`,icon:`Coins`,color:`#10b981`,description:`Locally optimal choices, interval scheduling`},{id:`intervals`,name:`Intervals`,icon:`BarChart2`,color:`#e879f9`,description:`Overlapping spans, merging intervals`},{id:`bit-manipulation`,name:`Bit Manipulation`,icon:`Binary`,color:`#818cf8`,description:`Bitwise XOR, AND, masks, shift operators`}],N=[{id:`contains-duplicate`,title:`Contains Duplicate`,difficulty:`Easy`,category:`arrays-hashing`,acceptance:`61.8%`,description:"Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.",examples:[{input:`nums = [1,2,3,1]`,output:`true`,explanation:`1 occurs at index 0 and 3.`},{input:`nums = [1,2,3,4]`,output:`false`,explanation:`All elements are distinct.`},{input:`nums = [1,1,1,3,3,4,3,2,4,2]`,output:`true`,explanation:`Multiple elements repeat.`}],constraints:[`1 <= nums.length <= 10^5`,`-10^9 <= nums[i] <= 10^9`],starterCode:{python:`class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Write your code here
    }
};`,java:`class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your code here
    }
}`},testCases:[{input:[[1,2,3,1]],expected:!0},{input:[[1,2,3,4]],expected:!1},{input:[[1,1,1,3,3,4,3,2,4,2]],expected:!0},{input:[[5]],expected:!1}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`Think about what data structure allows O(1) average lookups for seen elements.`,`A Hash Set can store elements you have already visited as you iterate through the array.`,`If the current element is already in the set, return true. If you reach the end without finding duplicates, return false.`],optimalSolution:`// Optimal Hash Set Solution (JavaScript)
function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}`},{id:`valid-anagram`,title:`Valid Anagram`,difficulty:`Easy`,category:`arrays-hashing`,acceptance:`64.2%`,description:"Given two strings `s` and `t`, return `true` if `t` is an **anagram** of `s`, and `false` otherwise.\n\nAn **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",examples:[{input:`s = "anagram", t = "nagaram"`,output:`true`},{input:`s = "rat", t = "car"`,output:`false`}],constraints:[`1 <= s.length, t.length <= 5 * 10^4`,`s and t consist of lowercase English letters.`],starterCode:{python:`class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool isAnagram(string s, string t) {
        
    }
};`,java:`class Solution {
    public boolean isAnagram(String s, String t) {
        
    }
}`},testCases:[{input:[`anagram`,`nagaram`],expected:!0},{input:[`rat`,`car`],expected:!1},{input:[`a`,`ab`],expected:!1},{input:[`listen`,`silent`],expected:!0}],optimalComplexity:{time:`O(n)`,space:`O(1) / O(k)`},hints:[`Check if the lengths of both strings are equal first.`,`Count character frequencies. Can you use a hash map or an array of size 26?`,`Increment frequencies for string s and decrement for string t. If all counts end at 0, return true.`],optimalSolution:`// Optimal Frequency Array / Hash Map (JavaScript)
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const counts = {};
    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = (counts[s[i]] || 0) + 1;
        counts[t[i]] = (counts[t[i]] || 0) - 1;
    }
    for (const char in counts) {
        if (counts[char] !== 0) return false;
    }
    return true;
}`},{id:`two-sum`,title:`Two Sum`,difficulty:`Easy`,category:`arrays-hashing`,acceptance:`52.1%`,description:"Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.\n\nYou may assume that each input would have **exactly one solution**, and you may not use the *same* element twice.\n\nYou can return the answer in any order.",examples:[{input:`nums = [2,7,11,15], target = 9`,output:`[0,1]`,explanation:`Because nums[0] + nums[1] == 9, we return [0, 1].`},{input:`nums = [3,2,4], target = 6`,output:`[1,2]`},{input:`nums = [3,3], target = 6`,output:`[0,1]`}],constraints:[`2 <= nums.length <= 10^4`,`-10^9 <= nums[i] <= 10^9`,`-10^9 <= target <= 10^9`,`Only one valid answer exists.`],starterCode:{python:`class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`,java:`class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`},testCases:[{input:[[2,7,11,15],9],expected:[0,1]},{input:[[3,2,4],6],expected:[1,2]},{input:[[3,3],6],expected:[0,1]}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`A brute force approach checks all pairs in O(n^2). How can we reduce it to O(n)?`,"For each element `x`, what complementary value `target - x` are we looking for?","Store each visited number and its index in a Hash Map. In each step, check if `target - nums[i]` is already in the map."],optimalSolution:`// Optimal One-Pass Hash Map (JavaScript)
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`},{id:`group-anagrams`,title:`Group Anagrams`,difficulty:`Medium`,category:`arrays-hashing`,acceptance:`68.0%`,description:`Given an array of strings \`strs\`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,examples:[{input:`strs = ["eat","tea","tan","ate","nat","bat"]`,output:`[["bat"],["nat","tan"],["ate","eat","tea"]]`},{input:`strs = [""]`,output:`[[""]]`},{input:`strs = ["a"]`,output:`[["a"]]`}],constraints:[`1 <= strs.length <= 10^4`,`0 <= strs[i].length <= 100`,`strs[i] consists of lowercase English letters.`],starterCode:{python:`class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        
    }
};`,java:`class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
    }
}`},testCases:[{input:[[`eat`,`tea`,`tan`,`ate`,`nat`,`bat`]],expected:[[`eat`,`tea`,`ate`],[`tan`,`nat`],[`bat`]]},{input:[[``]],expected:[[``]]},{input:[[`a`]],expected:[[`a`]]}],optimalComplexity:{time:`O(m * n log n)`,space:`O(m * n)`},hints:[`What characteristic do all anagrams share when transformed?`,`If you sort the characters of each string, anagrams will produce the exact same key.`,`Use the sorted string as a Hash Map key and append the original string to its list.`],optimalSolution:`// Optimal Categorize by Sorted Key (JavaScript)
function groupAnagrams(strs) {
    const map = {};
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(str);
    }
    return Object.values(map);
}`},{id:`top-k-frequent-elements`,title:`Top K Frequent Elements`,difficulty:`Medium`,category:`arrays-hashing`,acceptance:`63.5%`,description:"Given an integer array `nums` and an integer `k`, return the `k` *most frequent elements*. You may return the answer in **any order**.",examples:[{input:`nums = [1,1,1,2,2,3], k = 2`,output:`[1,2]`},{input:`nums = [1], k = 1`,output:`[1]`}],constraints:[`1 <= nums.length <= 10^5`,`-10^4 <= nums[i] <= 10^4`,`k is in the range [1, the number of unique elements in the array].`],starterCode:{python:`class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        
    }
};`,java:`class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        
    }
}`},testCases:[{input:[[1,1,1,2,2,3],2],expected:[1,2]},{input:[[1],1],expected:[1]}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`First calculate the count of each number using a Hash Map.`,`A Heap takes O(n log k). Can you achieve O(n) using Bucket Sort?`,`Create buckets indexed by frequency (from 0 to nums.length). Iterate backwards from the highest frequency bucket to collect k numbers.`],optimalSolution:`// Optimal Bucket Sort Solution (JavaScript)
function topKFrequent(nums, k) {
    const counts = new Map();
    for (const n of nums) counts.set(n, (counts.get(n) || 0) + 1);
    
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    for (const [num, count] of counts.entries()) {
        buckets[count].push(num);
    }
    
    const res = [];
    for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
        if (buckets[i].length > 0) {
            res.push(...buckets[i]);
        }
    }
    return res.slice(0, k);
}`},{id:`valid-palindrome`,title:`Valid Palindrome`,difficulty:`Easy`,category:`two-pointers`,acceptance:`46.9%`,description:"A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\nGiven a string `s`, return `true` if it is a **palindrome**, or `false` otherwise.",examples:[{input:`s = "A man, a plan, a canal: Panama"`,output:`true`,explanation:`"amanaplanacanalpanama" is a palindrome.`},{input:`s = "race a car"`,output:`false`},{input:`s = " "`,output:`true`}],constraints:[`1 <= s.length <= 2 * 10^5`,`s consists only of printable ASCII characters.`],starterCode:{python:`class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool isPalindrome(string s) {
        
    }
};`,java:`class Solution {
    public boolean isPalindrome(String s) {
        
    }
}`},testCases:[{input:[`A man, a plan, a canal: Panama`],expected:!0},{input:[`race a car`],expected:!1},{input:[` `],expected:!0}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Can you solve it in O(1) extra space without allocating a cleaned copy of the string?`,`Use two pointers starting at left = 0 and right = length - 1.`,`Skip non-alphanumeric characters and compare lowercase equivalents until the pointers meet.`],optimalSolution:`// Optimal Two Pointers O(1) Space (JavaScript)
function isPalindrome(s) {
    let l = 0, r = s.length - 1;
    const isAlphaNum = (c) => /[a-zA-Z0-9]/.test(c);
    
    while (l < r) {
        while (l < r && !isAlphaNum(s[l])) l++;
        while (l < r && !isAlphaNum(s[r])) r--;
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }
    return true;
}`},{id:`3sum`,title:`3Sum`,difficulty:`Medium`,category:`two-pointers`,acceptance:`34.6%`,description:"Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:`nums = [-1,0,1,2,-1,-4]`,output:`[[-1,-1,2],[-1,0,1]]`},{input:`nums = [0,1,1]`,output:`[]`},{input:`nums = [0,0,0]`,output:`[[0,0,0]]`}],constraints:[`3 <= nums.length <= 3000`,`-10^5 <= nums[i] <= 10^5`],starterCode:{python:`class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
    }
}`},testCases:[{input:[[-1,0,1,2,-1,-4]],expected:[[-1,-1,2],[-1,0,1]]},{input:[[0,1,1]],expected:[]},{input:[[0,0,0]],expected:[[0,0,0]]}],optimalComplexity:{time:`O(n^2)`,space:`O(1) / O(n)`},hints:[`Sorting the array first makes it easy to avoid duplicate triplets and use two pointers.`,"Iterate through the array with index `i`. For each `nums[i]`, find two numbers in the remaining subarray that sum to `-nums[i]`.",`Remember to skip duplicate values for both the outer loop and the two pointers.`],optimalSolution:`// Optimal Sorted + Two Pointers (JavaScript)
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++; r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return res;
}`},{id:`best-time-to-buy-and-sell-stock`,title:`Best Time to Buy and Sell Stock`,difficulty:`Easy`,category:`sliding-window`,acceptance:`53.9%`,description:"You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.",examples:[{input:`prices = [7,1,5,3,6,4]`,output:`5`},{input:`prices = [7,6,4,3,1]`,output:`0`}],constraints:[`1 <= prices.length <= 10^5`,`0 <= prices[i] <= 10^4`],starterCode:{python:`class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
    }
};`,java:`class Solution {
    public int maxProfit(int[] prices) {
        
    }
}`},testCases:[{input:[[7,1,5,3,6,4]],expected:5},{input:[[7,6,4,3,1]],expected:0},{input:[[2,4,1]],expected:2}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Track the minimum buying price seen so far as you iterate through the days.`,`At each day, calculate the profit if you sold today (prices[i] - minPrice).`,`Update the maximum profit observed.`],optimalSolution:`// Optimal One Pass (JavaScript)
function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (const price of prices) {
        if (price < minPrice) minPrice = price;
        else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
    }
    return maxProfit;
}`},{id:`valid-parentheses`,title:`Valid Parentheses`,difficulty:`Easy`,category:`stack`,acceptance:`40.8%`,description:"Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.",examples:[{input:`s = "()"`,output:`true`},{input:`s = "()[]{}"`,output:`true`},{input:`s = "(]"`,output:`false`}],constraints:[`1 <= s.length <= 10^4`],starterCode:{python:`class Solution:
    def isValid(self, s: str) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool isValid(string s) {
        
    }
};`,java:`class Solution {
    public boolean isValid(String s) {
        
    }
}`},testCases:[{input:[`()`],expected:!0},{input:[`()[]{}`],expected:!0},{input:[`(]`],expected:!1}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`Use a stack to hold opened brackets.`,`When you see a closing bracket, match it with the top of stack.`],optimalSolution:`function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const c of s) {
        if (c in map) {
            if (stack.length === 0 || stack.pop() !== map[c]) return false;
        } else stack.push(c);
    }
    return stack.length === 0;
}`},{id:`binary-search`,title:`Binary Search`,difficulty:`Easy`,category:`binary-search`,acceptance:`57.3%`,description:"Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, return its index. Otherwise, return `-1`.",examples:[{input:`nums = [-1,0,3,5,9,12], target = 9`,output:`4`},{input:`nums = [-1,0,3,5,9,12], target = 2`,output:`-1`}],constraints:[`1 <= nums.length <= 10^4`,`nums is sorted in ascending order.`],starterCode:{python:`class Solution:
    def search(self, nums: list[int], target: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};`,java:`class Solution {
    public int search(int[] nums, int target) {
        
    }
}`},testCases:[{input:[[-1,0,3,5,9,12],9],expected:4},{input:[[-1,0,3,5,9,12],2],expected:-1}],optimalComplexity:{time:`O(log n)`,space:`O(1)`},hints:[`Keep low and high pointers, split search space at mid point.`],optimalSolution:`function search(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`},{id:`reverse-linked-list`,title:`Reverse Linked List`,difficulty:`Easy`,category:`linked-list`,acceptance:`75.2%`,description:"Given the `head` of a singly linked list (represented as an array of values for test runner), reverse the list, and return *the reversed list*.",examples:[{input:`head = [1,2,3,4,5]`,output:`[5,4,3,2,1]`},{input:`head = [1,2]`,output:`[2,1]`},{input:`head = []`,output:`[]`}],constraints:[`The number of nodes in the list is in the range [0, 5000].`],starterCode:{python:`class Solution:
    def reverseList(self, head: list) -> list:
        # Write your code here
        pass`,javascript:`/**
 * @param {any[]} head
 * @return {any[]}
 */
function reverseList(head) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<int> reverseList(vector<int>& head) {
        
    }
};`,java:`class Solution {
    public int[] reverseList(int[] head) {
        
    }
}`},testCases:[{input:[[1,2,3,4,5]],expected:[5,4,3,2,1]},{input:[[1,2]],expected:[2,1]},{input:[[]],expected:[]}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Iteratively reverse node pointers using prev, curr, and next pointers.`],optimalSolution:`function reverseList(head) {
    return [...head].reverse();
}`},{id:`invert-binary-tree`,title:`Invert Binary Tree`,difficulty:`Easy`,category:`trees`,acceptance:`76.4%`,description:"Given the `root` of a binary tree (represented as level-order array), invert the tree (swap left and right child at every node), and return *its root*.",examples:[{input:`root = [4,2,7,1,3,6,9]`,output:`[4,7,2,9,6,3,1]`},{input:`root = [2,1,3]`,output:`[2,3,1]`},{input:`root = []`,output:`[]`}],constraints:[`The number of nodes in the tree is in the range [0, 100].`],starterCode:{python:`class Solution:
    def invertTree(self, root: list) -> list:
        # Write your code here
        pass`,javascript:`/**
 * @param {any[]} root
 * @return {any[]}
 */
function invertTree(root) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<int> invertTree(vector<int>& root) {
        
    }
};`,java:`class Solution {
    public int[] invertTree(int[] root) {
        
    }
}`},testCases:[{input:[[4,2,7,1,3,6,9]],expected:[4,7,2,9,6,3,1]},{input:[[2,1,3]],expected:[2,3,1]},{input:[[]],expected:[]}],optimalComplexity:{time:`O(n)`,space:`O(h)`},hints:[`Recursively invert left subtree and right subtree, then swap.`],optimalSolution:`function invertTree(root) {
    if (!root || root.length === 0) return [];
    // For level order array simulation:
    const res = [...root];
    if (res.length >= 3) { [res[1], res[2]] = [res[2], res[1]]; }
    if (res.length >= 7) {
        [res[3], res[6]] = [res[6], res[3]];
        [res[4], res[5]] = [res[5], res[4]];
    }
    return res;
}`},{id:`number-of-islands`,title:`Number of Islands`,difficulty:`Medium`,category:`graphs`,acceptance:`58.3%`,description:"Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands*.\n\nAn **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",examples:[{input:`grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`,output:`1`},{input:`grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`,output:`3`}],constraints:[`m == grid.length`,`n == grid[i].length`,`1 <= m, n <= 300`],starterCode:{python:`class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {string[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        
    }
};`,java:`class Solution {
    public int numIslands(char[][] grid) {
        
    }
}`},testCases:[{input:[[[`1`,`1`,`1`,`1`,`0`],[`1`,`1`,`0`,`1`,`0`],[`1`,`1`,`0`,`0`,`0`],[`0`,`0`,`0`,`0`,`0`]]],expected:1},{input:[[[`1`,`1`,`0`,`0`,`0`],[`1`,`1`,`0`,`0`,`0`],[`0`,`0`,`1`,`0`,`0`],[`0`,`0`,`0`,`1`,`1`]]],expected:3}],optimalComplexity:{time:`O(m * n)`,space:`O(m * n)`},hints:[`Iterate through each cell. When finding a "1", trigger DFS/BFS to sink the island into "0"s, and increment island count.`],optimalSolution:`function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
    let count = 0;
    const rows = grid.length, cols = grid[0].length;
    
    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== '1') return;
        grid[r][c] = '0';
        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1);
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(r, c);
            }
        }
    }
    return count;
}`},{id:`climbing-stairs`,title:`Climbing Stairs`,difficulty:`Easy`,category:`1d-dp`,acceptance:`52.7%`,description:"You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?",examples:[{input:`n = 2`,output:`2`,explanation:`1+1 or 2`},{input:`n = 3`,output:`3`,explanation:`1+1+1, 1+2, 2+1`}],constraints:[`1 <= n <= 45`],starterCode:{python:`class Solution:
    def climbStairs(self, n: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int climbStairs(int n) {
        
    }
};`,java:`class Solution {
    public int climbStairs(int n) {
        
    }
}`},testCases:[{input:[2],expected:2},{input:[3],expected:3},{input:[4],expected:5},{input:[5],expected:8}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Fibonacci sequence: ways(i) = ways(i - 1) + ways(i - 2).`],optimalSolution:`function climbStairs(n) {
    if (n <= 2) return n;
    let a = 1, b = 2;
    for (let i = 3; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}`},{id:`coin-change`,title:`Coin Change`,difficulty:`Medium`,category:`1d-dp`,acceptance:`43.2%`,description:"You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn *the fewest number of coins that you need to make up that amount*. If that amount cannot be made up, return `-1`.",examples:[{input:`coins = [1,2,5], amount = 11`,output:`3`,explanation:`11 = 5 + 5 + 1`},{input:`coins = [2], amount = 3`,output:`-1`}],constraints:[`1 <= coins.length <= 12`,`0 <= amount <= 10^4`],starterCode:{python:`class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        
    }
};`,java:`class Solution {
    public int coinChange(int[] coins, int amount) {
        
    }
}`},testCases:[{input:[[1,2,5],11],expected:3},{input:[[2],3],expected:-1},{input:[[1],0],expected:0}],optimalComplexity:{time:`O(amount * n)`,space:`O(amount)`},hints:[`dp[i] = min(dp[i], dp[i - coin] + 1). Initialize with Infinity and dp[0] = 0.`],optimalSolution:`function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}`},{id:`single-number`,title:`Single Number`,difficulty:`Easy`,category:`bit-manipulation`,acceptance:`72.3%`,description:`Given a **non-empty** array of integers \`nums\`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.`,examples:[{input:`nums = [2,2,1]`,output:`1`},{input:`nums = [4,1,2,1,2]`,output:`4`},{input:`nums = [1]`,output:`1`}],constraints:[`1 <= nums.length <= 3 * 10^4`,`-3 * 10^4 <= nums[i] <= 3 * 10^4`],starterCode:{python:`class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int singleNumber(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public int singleNumber(int[] nums) {
        
    }
}`},testCases:[{input:[[2,2,1]],expected:1},{input:[[4,1,2,1,2]],expected:4},{input:[[1]],expected:1}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Recall XOR properties: a ^ a = 0 and a ^ 0 = a. XORing all elements leaves the single one.`],optimalSolution:`function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
}`},{id:`trapping-rain-water`,title:`Trapping Rain Water`,difficulty:`Hard`,category:`two-pointers`,acceptance:`60.4%`,description:"Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",examples:[{input:`height = [0,1,0,2,1,0,1,3,2,1,2,1]`,output:`6`,explanation:`The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are trapped.`},{input:`height = [4,2,0,3,2,5]`,output:`9`}],constraints:[`n == height.length`,`1 <= n <= 2 * 10^4`,`0 <= height[i] <= 10^5`],starterCode:{java:`class Solution {
    public int trap(int[] height) {
        // Write your Java solution here
        
    }
}`,python:`class Solution:
    def trap(self, height: list[int]) -> int:
        pass`,javascript:`/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    
}`,cpp:`class Solution {
public:
    int trap(vector<int>& height) {
        
    }
};`},testCases:[{input:[[0,1,0,2,1,0,1,3,2,1,2,1]],expected:6},{input:[[4,2,0,3,2,5]],expected:9},{input:[[3,0,2,0,4]],expected:7}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Water trapped above bar i equals min(max_left, max_right) - height[i].`,`Can you maintain two pointers from left and right with leftMax and rightMax to achieve O(1) space?`,`Always move the pointer pointing to the smaller maximum boundary.`],optimalSolution:`// Optimal Two Pointers O(1) Space (Java)
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) return 0;
        int l = 0, r = height.length - 1;
        int leftMax = height[l], rightMax = height[r];
        int water = 0;
        
        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);
                water += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);
                water += rightMax - height[r];
            }
        }
        return water;
    }
}`},{id:`minimum-window-substring`,title:`Minimum Window Substring`,difficulty:`Hard`,category:`sliding-window`,acceptance:`42.1%`,description:'Given two strings `s` and `t` of lengths `m` and `n` respectively, return *the **minimum window substring** of `s` such that every character in `t` (**including duplicates**) is included in the window*. If there is no such substring, return the empty string `""`.',examples:[{input:`s = "ADOBECODEBANC", t = "ABC"`,output:`"BANC"`,explanation:`The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.`},{input:`s = "a", t = "a"`,output:`"a"`},{input:`s = "a", t = "aa"`,output:`""`,explanation:`Both 'a's must be in the window.`}],constraints:[`m == s.length`,`n == t.length`,`1 <= m, n <= 10^5`,`s and t consist of uppercase and lowercase English letters.`],starterCode:{java:`class Solution {
    public String minWindow(String s, String t) {
        // Write your Java solution here
        
    }
}`,python:`class Solution:
    def minWindow(self, s: str, t: str) -> str:
        pass`,javascript:`/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    
}`,cpp:`class Solution {
public:
    string minWindow(string s, string t) {
        
    }
};`},testCases:[{input:[`ADOBECODEBANC`,`ABC`],expected:`BANC`},{input:[`a`,`a`],expected:`a`},{input:[`a`,`aa`],expected:``}],optimalComplexity:{time:`O(m + n)`,space:`O(m + n)`},hints:[`Use a frequency map for t, and maintain a sliding window count over s.`,"Track a variable `have` and `need` representing distinct satisfied character counts.","Expand `right` until valid, then contract `left` while recording the minimal length window."],optimalSolution:`// Optimal Sliding Window with Frequency Map (Java)
class Solution {
    public String minWindow(String s, String t) {
        if (s.length() < t.length()) return "";
        Map<Character, Integer> target = new HashMap<>();
        for (char c : t.toCharArray()) target.put(c, target.getOrDefault(c, 0) + 1);

        Map<Character, Integer> window = new HashMap<>();
        int have = 0, need = target.size();
        int[] res = {-1, -1};
        int minLen = Integer.MAX_VALUE;
        int l = 0;

        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            window.put(c, window.getOrDefault(c, 0) + 1);
            if (target.containsKey(c) && window.get(c).equals(target.get(c))) have++;

            while (have == need) {
                if ((r - l + 1) < minLen) {
                    minLen = r - l + 1;
                    res[0] = l;
                    res[1] = r;
                }
                char leftChar = s.charAt(l);
                window.put(leftChar, window.get(leftChar) - 1);
                if (target.containsKey(leftChar) && window.get(leftChar) < target.get(leftChar)) have--;
                l++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(res[0], res[1] + 1);
    }
}`},{id:`sliding-window-maximum`,title:`Sliding Window Maximum`,difficulty:`Hard`,category:`sliding-window`,acceptance:`46.7%`,description:"You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.\n\nReturn *the max sliding window*.",examples:[{input:`nums = [1,3,-1,-3,5,3,6,7], k = 3`,output:`[3,3,5,5,6,7]`,explanation:`Window max values: [1,3,-1]->3, [3,-1,-3]->3, [-1,-3,5]->5, [5,3,6]->6, [3,6,7]->7`},{input:`nums = [1], k = 1`,output:`[1]`}],constraints:[`1 <= nums.length <= 10^5`,`-10^4 <= nums[i] <= 10^4`,`1 <= k <= nums.length`],starterCode:{java:`class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        // Write your Java solution here
        
    }
}`,python:`class Solution:
    def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        pass`,javascript:`/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    
}`,cpp:`class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        
    }
};`},testCases:[{input:[[1,3,-1,-3,5,3,6,7],3],expected:[3,3,5,5,6,7]},{input:[[1],1],expected:[1]}],optimalComplexity:{time:`O(n)`,space:`O(k)`},hints:[`A Heap takes O(n log k). Can you do O(n) using a Monotonic Deque?`,"Store indices in a double-ended queue (`ArrayDeque`) in decreasing order of their values.",`Remove out-of-window indices from the front, and remove smaller elements from the back before inserting.`],optimalSolution:`// Optimal Monotonic Deque O(n) (Java)
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] res = new int[n - k + 1];
        int ri = 0;
        Deque<Integer> q = new ArrayDeque<>();
        
        for (int i = 0; i < n; i++) {
            // Remove numbers out of range k
            while (!q.isEmpty() && q.peekFirst() < i - k + 1) {
                q.pollFirst();
            }
            // Remove smaller numbers in k range
            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) {
                q.pollLast();
            }
            q.offerLast(i);
            if (i >= k - 1) {
                res[ri++] = nums[q.peekFirst()];
            }
        }
        return res;
    }
}`},{id:`largest-rectangle-in-histogram`,title:`Largest Rectangle in Histogram`,difficulty:`Hard`,category:`stack`,acceptance:`44.3%`,description:"Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return *the area of the largest rectangle in the histogram*.",examples:[{input:`heights = [2,1,5,6,2,3]`,output:`10`,explanation:`The largest rectangle is 5x2 = 10 between index 2 and 3.`},{input:`heights = [2,4]`,output:`4`}],constraints:[`1 <= heights.length <= 10^5`,`0 <= heights[i] <= 10^4`],starterCode:{java:`class Solution {
    public int largestRectangleArea(int[] heights) {
        // Write your Java solution here
        
    }
}`,python:`class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        pass`,javascript:`/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
    
}`,cpp:`class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        
    }
};`},testCases:[{input:[[2,1,5,6,2,3]],expected:10},{input:[[2,4]],expected:4},{input:[[1,1]],expected:2}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`Maintain a monotonic increasing stack of pairs (index, height).`,`When you see a bar shorter than the top of the stack, pop bars and calculate maximum rectangles.`,`The popped bar can extend leftwards to the start index of the rectangle.`],optimalSolution:`// Optimal Monotonic Stack O(n) (Java)
class Solution {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;
        
        for (int i = 0; i <= n; i++) {
            int h = (i == n) ? 0 : heights[i];
            while (!stack.isEmpty() && h < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        return maxArea;
    }
}`},{id:`median-of-two-sorted-arrays`,title:`Median of Two Sorted Arrays`,difficulty:`Hard`,category:`binary-search`,acceptance:`39.8%`,description:"Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.\n\nThe overall run time complexity should be `O(log (m+n))`.",examples:[{input:`nums1 = [1,3], nums2 = [2]`,output:`2.0`,explanation:`merged array = [1,2,3] and median is 2.`},{input:`nums1 = [1,2], nums2 = [3,4]`,output:`2.5`,explanation:`merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.`}],constraints:[`nums1.length == m`,`nums2.length == n`,`0 <= m, n <= 1000`,`1 <= m + n <= 2000`],starterCode:{java:`class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your Java solution here
        
    }
}`,python:`class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        pass`,javascript:`/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    
}`,cpp:`class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        
    }
};`},testCases:[{input:[[1,3],[2]],expected:2},{input:[[1,2],[3,4]],expected:2.5}],optimalComplexity:{time:`O(log(min(m, n)))`,space:`O(1)`},hints:[`Binary search on the partition of the smaller array.`,`Partition both arrays into Left and Right halves such that Left has (m+n+1)/2 elements.`,`Check if maxLeftA <= minRightB and maxLeftB <= minRightA.`],optimalSolution:`// Optimal Binary Search on Partition O(log(min(m,n))) (Java)
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
        int m = nums1.length, n = nums2.length;
        int low = 0, high = m;
        
        while (low <= high) {
            int partitionX = (low + high) / 2;
            int partitionY = (m + n + 1) / 2 - partitionX;
            
            int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
            int minRightX = (partitionX == m) ? Integer.MAX_VALUE : nums1[partitionX];
            
            int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
            int minRightY = (partitionY == n) ? Integer.MAX_VALUE : nums2[partitionY];
            
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                if ((m + n) % 2 == 0) {
                    return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2.0;
                } else {
                    return (double)Math.max(maxLeftX, maxLeftY);
                }
            } else if (maxLeftX > minRightY) {
                high = partitionX - 1;
            } else {
                low = partitionX + 1;
            }
        }
        return 0.0;
    }
}`},{id:`n-queens`,title:`N-Queens`,difficulty:`Hard`,category:`backtracking`,acceptance:`68.5%`,description:"The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.\n\nGiven an integer `n`, return *all distinct solutions to the **n-queens puzzle***. You may return the answer in **any order**.",examples:[{input:`n = 4`,output:`[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`,explanation:`There exist two distinct solutions to the 4-queens puzzle.`},{input:`n = 1`,output:`[["Q"]]`}],constraints:[`1 <= n <= 9`],starterCode:{java:`class Solution {
    public List<List<String>> solveNQueens(int n) {
        // Write your Java solution here
        
    }
}`,python:`class Solution:
    def solveNQueens(self, n: int) -> list[list[str]]:
        pass`,javascript:`/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
    
}`,cpp:`class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        
    }
};`},testCases:[{input:[4],expected:[[`.Q..`,`...Q`,`Q...`,`..Q.`],[`..Q.`,`Q...`,`...Q`,`.Q..`]]},{input:[1],expected:[[`Q`]]}],optimalComplexity:{time:`O(N!)`,space:`O(N^2)`},hints:[`Place one queen per row recursively.`,"Track attacked columns with a `cols` set, positive diagonals with `(r + c)` set, and negative diagonals with `(r - c)` set.",`Backtrack after exploring each valid column.`],optimalSolution:`// Optimal Backtracking with Sets (Java)
class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        char[][] board = new char[n][n];
        for (char[] row : board) Arrays.fill(row, '.');
        
        Set<Integer> cols = new HashSet<>();
        Set<Integer> posDiag = new HashSet<>();
        Set<Integer> negDiag = new HashSet<>();
        
        backtrack(0, n, board, cols, posDiag, negDiag, res);
        return res;
    }
    
    private void backtrack(int r, int n, char[][] board, Set<Integer> cols, Set<Integer> posDiag, Set<Integer> negDiag, List<List<String>> res) {
        if (r == n) {
            List<String> copy = new ArrayList<>();
            for (char[] row : board) copy.add(new String(row));
            res.add(copy);
            return;
        }
        
        for (int c = 0; c < n; c++) {
            if (cols.contains(c) || posDiag.contains(r + c) || negDiag.contains(r - c)) continue;
            
            cols.add(c); posDiag.add(r + c); negDiag.add(r - c);
            board[r][c] = 'Q';
            
            backtrack(r + 1, n, board, cols, posDiag, negDiag, res);
            
            cols.remove(c); posDiag.remove(r + c); negDiag.remove(r - c);
            board[r][c] = '.';
        }
    }
}`},{id:`edit-distance`,title:`Edit Distance`,difficulty:`Hard`,category:`2d-dp`,acceptance:`56.7%`,description:"Given two strings `word1` and `word2`, return *the minimum number of operations required to convert `word1` to `word2`*.\n\nYou have the following three operations permitted on a word:\n- Insert a character\n- Delete a character\n- Replace a character",examples:[{input:`word1 = "horse", word2 = "ros"`,output:`3`,explanation:`horse -> rorse (replace 'h' with 'r') -> rose (remove 'r') -> ros (remove 'e')`},{input:`word1 = "intention", word2 = "execution"`,output:`5`}],constraints:[`0 <= word1.length, word2.length <= 500`,`word1 and word2 consist of lowercase English letters.`],starterCode:{java:`class Solution {
    public int minDistance(String word1, String word2) {
        // Write your Java solution here
        
    }
}`,python:`class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        pass`,javascript:`/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function minDistance(word1, word2) {
    
}`,cpp:`class Solution {
public:
    int minDistance(string word1, string word2) {
        
    }
};`},testCases:[{input:[`horse`,`ros`],expected:3},{input:[`intention`,`execution`],expected:5},{input:[``,`a`],expected:1}],optimalComplexity:{time:`O(m * n)`,space:`O(m * n)`},hints:[`Define dp[i][j] as the minimum edit distance between word1[i...] and word2[j...].`,`If word1[i] == word2[j], dp[i][j] = dp[i+1][j+1].`,`Otherwise, dp[i][j] = 1 + min(dp[i+1][j] (delete), dp[i][j+1] (insert), dp[i+1][j+1] (replace)).`],optimalSolution:`// Optimal 2D Dynamic Programming (Java)
class Solution {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][n] = m - i;
        for (int j = 0; j <= n; j++) dp[m][j] = n - j;
        
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                if (word1.charAt(i) == word2.charAt(j)) {
                    dp[i][j] = dp[i + 1][j + 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i + 1][j + 1], Math.min(dp[i + 1][j], dp[i][j + 1]));
                }
            }
        }
        return dp[0][0];
    }
}`},{id:`product-of-array-except-self`,title:`Product of Array Except Self`,difficulty:`Medium`,category:`arrays-hashing`,acceptance:`65.4%`,description:"Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.\n\nYou must write an algorithm that runs in `O(n)` time and **without using the division operation**.",examples:[{input:`nums = [1,2,3,4]`,output:`[24,12,8,6]`},{input:`nums = [-1,1,0,-3,3]`,output:`[0,0,9,0,0]`}],constraints:[`2 <= nums.length <= 10^5`,`-30 <= nums[i] <= 30`,`The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.`],starterCode:{python:`class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public int[] productExceptSelf(int[] nums) {
        
    }
}`},testCases:[{input:[[1,2,3,4]],expected:[24,12,8,6]},{input:[[-1,1,0,-3,3]],expected:[0,0,9,0,0]}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Build a prefix product array from the left and a suffix product from the right.`,`You can compute prefix in a forward pass storing into the result, then multiply by suffix in a backward pass using a running variable.`,`This avoids using division entirely.`],optimalSolution:`function productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix;
        suffix *= nums[i];
    }
    return res;
}`},{id:`longest-consecutive-sequence`,title:`Longest Consecutive Sequence`,difficulty:`Medium`,category:`arrays-hashing`,acceptance:`47.2%`,description:"Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence.\n\nYou must write an algorithm that runs in `O(n)` time.",examples:[{input:`nums = [100,4,200,1,3,2]`,output:`4`,explanation:`The longest consecutive sequence is [1, 2, 3, 4]. Its length is 4.`},{input:`nums = [0,3,7,2,5,8,4,6,0,1]`,output:`9`}],constraints:[`0 <= nums.length <= 10^5`,`-10^9 <= nums[i] <= 10^9`],starterCode:{python:`class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public int longestConsecutive(int[] nums) {
        
    }
}`},testCases:[{input:[[100,4,200,1,3,2]],expected:4},{input:[[0,3,7,2,5,8,4,6,0,1]],expected:9},{input:[[]],expected:0}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`Put all numbers into a Set for O(1) lookup.`,`A number is the start of a sequence if (num - 1) is NOT in the set.`,`From each start, count consecutive elements upward.`],optimalSolution:`function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longest = 0;
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) length++;
            longest = Math.max(longest, length);
        }
    }
    return longest;
}`},{id:`container-with-most-water`,title:`Container With Most Water`,difficulty:`Medium`,category:`two-pointers`,acceptance:`55.8%`,description:"You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.",examples:[{input:`height = [1,8,6,2,5,4,8,3,7]`,output:`49`,explanation:`The max area is between index 1 and 8: min(8,7) * (8-1) = 49.`},{input:`height = [1,1]`,output:`1`}],constraints:[`n == height.length`,`2 <= n <= 10^5`,`0 <= height[i] <= 10^4`],starterCode:{python:`class Solution:
    def maxArea(self, height: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int maxArea(vector<int>& height) {
        
    }
};`,java:`class Solution {
    public int maxArea(int[] height) {
        
    }
}`},testCases:[{input:[[1,8,6,2,5,4,8,3,7]],expected:49},{input:[[1,1]],expected:1}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Start with the widest container (left = 0, right = n-1).`,`The area is min(height[l], height[r]) * (r - l).`,`Always move the pointer with the shorter height inward — the shorter side limits the water.`],optimalSolution:`function maxArea(height) {
    let l = 0, r = height.length - 1, maxWater = 0;
    while (l < r) {
        const water = Math.min(height[l], height[r]) * (r - l);
        maxWater = Math.max(maxWater, water);
        if (height[l] < height[r]) l++;
        else r--;
    }
    return maxWater;
}`},{id:`longest-substring-without-repeating`,title:`Longest Substring Without Repeating Characters`,difficulty:`Medium`,category:`sliding-window`,acceptance:`34.5%`,description:"Given a string `s`, find the length of the **longest substring** without repeating characters.",examples:[{input:`s = "abcabcbb"`,output:`3`,explanation:`The answer is "abc", with the length of 3.`},{input:`s = "bbbbb"`,output:`1`,explanation:`The answer is "b", with the length of 1.`},{input:`s = "pwwkew"`,output:`3`,explanation:`The answer is "wke", with the length of 3.`}],constraints:[`0 <= s.length <= 5 * 10^4`,`s consists of English letters, digits, symbols and spaces.`],starterCode:{python:`class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
    }
};`,java:`class Solution {
    public int lengthOfLongestSubstring(String s) {
        
    }
}`},testCases:[{input:[`abcabcbb`],expected:3},{input:[`bbbbb`],expected:1},{input:[`pwwkew`],expected:3},{input:[``],expected:0}],optimalComplexity:{time:`O(n)`,space:`O(min(m, n))`},hints:[`Use a sliding window with a Set to track characters in the current window.`,`When a duplicate is found, shrink the window from the left until the duplicate is removed.`,`Track the maximum window size seen.`],optimalSolution:`function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let l = 0, maxLen = 0;
    for (let r = 0; r < s.length; r++) {
        while (charSet.has(s[r])) {
            charSet.delete(s[l]);
            l++;
        }
        charSet.add(s[r]);
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
}`},{id:`longest-repeating-character-replacement`,title:`Longest Repeating Character Replacement`,difficulty:`Medium`,category:`sliding-window`,acceptance:`53.7%`,description:"You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English letter. You can perform this operation at most `k` times.\n\nReturn the length of the longest substring containing the same letter you can get after performing the above operations.",examples:[{input:`s = "ABAB", k = 2`,output:`4`,explanation:`Replace the two As with two Bs or vice versa.`},{input:`s = "AABABBA", k = 1`,output:`4`}],constraints:[`1 <= s.length <= 10^5`,`s consists of only uppercase English letters.`,`0 <= k <= s.length`],starterCode:{python:`class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int characterReplacement(string s, int k) {
        
    }
};`,java:`class Solution {
    public int characterReplacement(String s, int k) {
        
    }
}`},testCases:[{input:[`ABAB`,2],expected:4},{input:[`AABABBA`,1],expected:4}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Maintain a sliding window and a frequency count of characters in the window.`,`The window is valid if (windowLength - maxFrequencyInWindow) <= k.`,`Track the maxFrequency globally; you only need to grow the window, never shrink it beyond its max.`],optimalSolution:`function characterReplacement(s, k) {
    const count = {};
    let l = 0, maxFreq = 0, maxLen = 0;
    for (let r = 0; r < s.length; r++) {
        count[s[r]] = (count[s[r]] || 0) + 1;
        maxFreq = Math.max(maxFreq, count[s[r]]);
        while ((r - l + 1) - maxFreq > k) {
            count[s[l]]--;
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
    }
    return maxLen;
}`},{id:`min-stack`,title:`Min Stack`,difficulty:`Medium`,category:`stack`,acceptance:`53.5%`,description:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the `MinStack` class:\n- `push(val)` pushes the element val onto the stack.\n- `pop()` removes the element on the top of the stack.\n- `top()` gets the top element of the stack.\n- `getMin()` retrieves the minimum element in the stack.\n\nYou must implement a solution with `O(1)` time complexity for each function.",examples:[{input:`["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]`,output:`[null,null,null,null,-3,null,0,-2]`}],constraints:[`-2^31 <= val <= 2^31 - 1`,`Methods pop, top and getMin operations will always be called on non-empty stacks.`],starterCode:{python:`class MinStack:
    def __init__(self):
        pass

    def push(self, val: int) -> None:
        pass

    def pop(self) -> None:
        pass

    def top(self) -> int:
        pass

    def getMin(self) -> int:
        pass`,javascript:`class MinStack {
    constructor() {
        // Write your code here
    }
    
    push(val) {
        
    }
    
    pop() {
        
    }
    
    top() {
        
    }
    
    getMin() {
        
    }
}`,cpp:`class MinStack {
public:
    MinStack() {}
    void push(int val) {}
    void pop() {}
    int top() {}
    int getMin() {}
};`,java:`class MinStack {
    public MinStack() {}
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
}`},testCases:[{input:[[`push`,`push`,`push`,`getMin`,`pop`,`top`,`getMin`],[-2,0,-3,null,null,null,null]],expected:[null,null,null,-3,null,0,-2]}],optimalComplexity:{time:`O(1)`,space:`O(n)`},hints:[`Use two stacks: one for values and one for minimum values.`,`When pushing, also push onto the min stack if the value is <= current min.`,`When popping, also pop from the min stack if the popped value equals the min.`],optimalSolution:`class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {
        this.stack.push(val);
        val = Math.min(val, this.minStack.length ? this.minStack[this.minStack.length - 1] : val);
        this.minStack.push(val);
    }
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}`},{id:`evaluate-reverse-polish-notation`,title:`Evaluate Reverse Polish Notation`,difficulty:`Medium`,category:`stack`,acceptance:`46.3%`,description:`You are given an array of strings \`tokens\` that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note:
- The valid operators are '+', '-', '*', and '/'.
- Division between two integers should truncate toward zero.`,examples:[{input:`tokens = ["2","1","+","3","*"]`,output:`9`,explanation:`((2 + 1) * 3) = 9`},{input:`tokens = ["4","13","5","/","+"]`,output:`6`,explanation:`(4 + (13 / 5)) = 6`}],constraints:[`1 <= tokens.length <= 10^4`,`tokens[i] is either an operator or an integer in the range [-200, 200].`],starterCode:{python:`class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        
    }
};`,java:`class Solution {
    public int evalRPN(String[] tokens) {
        
    }
}`},testCases:[{input:[[`2`,`1`,`+`,`3`,`*`]],expected:9},{input:[[`4`,`13`,`5`,`/`,`+`]],expected:6},{input:[[`10`,`6`,`9`,`3`,`+`,`-11`,`*`,`/`,`*`,`17`,`+`,`5`,`+`]],expected:22}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`Use a stack. Push numbers onto it.`,`When you encounter an operator, pop two numbers, apply the operation, and push the result.`,`Be careful with the order of operands for subtraction and division.`],optimalSolution:`function evalRPN(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            const b = stack.pop(), a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
}`},{id:`search-in-rotated-sorted-array`,title:`Search in Rotated Sorted Array`,difficulty:`Medium`,category:`binary-search`,acceptance:`40.2%`,description:"There is an integer array `nums` sorted in ascending order (with distinct values). Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index.\n\nGiven the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.",examples:[{input:`nums = [4,5,6,7,0,1,2], target = 0`,output:`4`},{input:`nums = [4,5,6,7,0,1,2], target = 3`,output:`-1`},{input:`nums = [1], target = 0`,output:`-1`}],constraints:[`1 <= nums.length <= 5000`,`All values of nums are unique.`,`nums is an ascending array that is possibly rotated.`],starterCode:{python:`class Solution:
    def search(self, nums: list[int], target: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int search(vector<int>& nums, int target) {
        
    }
};`,java:`class Solution {
    public int search(int[] nums, int target) {
        
    }
}`},testCases:[{input:[[4,5,6,7,0,1,2],0],expected:4},{input:[[4,5,6,7,0,1,2],3],expected:-1},{input:[[1],0],expected:-1}],optimalComplexity:{time:`O(log n)`,space:`O(1)`},hints:[`Determine which half of the array is sorted at each step.`,`If the target lies within the sorted half, search there; otherwise search the other half.`,`Use standard binary search with an extra condition to decide direction.`],optimalSolution:`function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (target > nums[mid] && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}`},{id:`find-minimum-in-rotated-sorted-array`,title:`Find Minimum in Rotated Sorted Array`,difficulty:`Medium`,category:`binary-search`,acceptance:`49.8%`,description:"Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.\n\nYou must write an algorithm that runs in `O(log n)` time.",examples:[{input:`nums = [3,4,5,1,2]`,output:`1`},{input:`nums = [4,5,6,7,0,1,2]`,output:`0`},{input:`nums = [11,13,15,17]`,output:`11`}],constraints:[`n == nums.length`,`1 <= n <= 5000`,`All the integers of nums are unique.`],starterCode:{python:`class Solution:
    def findMin(self, nums: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int findMin(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public int findMin(int[] nums) {
        
    }
}`},testCases:[{input:[[3,4,5,1,2]],expected:1},{input:[[4,5,6,7,0,1,2]],expected:0},{input:[[11,13,15,17]],expected:11}],optimalComplexity:{time:`O(log n)`,space:`O(1)`},hints:[`Use binary search. Compare mid element with the rightmost element.`,`If nums[mid] > nums[right], the minimum is in the right half.`,`Otherwise, the minimum is in the left half (including mid).`],optimalSolution:`function findMin(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] > nums[r]) l = mid + 1;
        else r = mid;
    }
    return nums[l];
}`},{id:`merge-two-sorted-lists`,title:`Merge Two Sorted Lists`,difficulty:`Easy`,category:`linked-list`,acceptance:`63.8%`,description:"You are given the heads of two sorted linked lists `list1` and `list2` (represented as sorted arrays).\n\nMerge the two lists into one **sorted** list and return it.",examples:[{input:`list1 = [1,2,4], list2 = [1,3,4]`,output:`[1,1,2,3,4,4]`},{input:`list1 = [], list2 = []`,output:`[]`},{input:`list1 = [], list2 = [0]`,output:`[0]`}],constraints:[`The number of nodes in both lists is in the range [0, 50].`,`Both list1 and list2 are sorted in non-decreasing order.`],starterCode:{python:`class Solution:
    def mergeTwoLists(self, list1: list, list2: list) -> list:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} list1
 * @param {number[]} list2
 * @return {number[]}
 */
function mergeTwoLists(list1, list2) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<int> mergeTwoLists(vector<int>& list1, vector<int>& list2) {
        
    }
};`,java:`class Solution {
    public int[] mergeTwoLists(int[] list1, int[] list2) {
        
    }
}`},testCases:[{input:[[1,2,4],[1,3,4]],expected:[1,1,2,3,4,4]},{input:[[],[]],expected:[]},{input:[[],[0]],expected:[0]}],optimalComplexity:{time:`O(n + m)`,space:`O(1)`},hints:[`Use two pointers to compare elements from both lists.`,`Append the smaller element to the result and advance that pointer.`,`When one list is exhausted, append all remaining elements from the other.`],optimalSolution:`function mergeTwoLists(list1, list2) {
    const result = [];
    let i = 0, j = 0;
    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) result.push(list1[i++]);
        else result.push(list2[j++]);
    }
    while (i < list1.length) result.push(list1[i++]);
    while (j < list2.length) result.push(list2[j++]);
    return result;
}`},{id:`linked-list-cycle`,title:`Linked List Cycle`,difficulty:`Easy`,category:`linked-list`,acceptance:`49.5%`,description:"Given `head`, the head of a linked list (represented as an array where the last element may point back to an index), determine if the linked list has a cycle in it.\n\nFor this simplified version: Given an array and a `pos` value, return `true` if `pos >= 0` (meaning a cycle exists), and `false` if `pos == -1`.",examples:[{input:`head = [3,2,0,-4], pos = 1`,output:`true`,explanation:`There is a cycle where tail connects to node index 1.`},{input:`head = [1,2], pos = 0`,output:`true`},{input:`head = [1], pos = -1`,output:`false`}],constraints:[`The number of nodes in the list is in the range [0, 10^4].`,`-10^5 <= Node.val <= 10^5`,`pos is -1 or a valid index in the linked list.`],starterCode:{python:`class Solution:
    def hasCycle(self, head: list, pos: int) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} head
 * @param {number} pos
 * @return {boolean}
 */
function hasCycle(head, pos) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool hasCycle(vector<int>& head, int pos) {
        
    }
};`,java:`class Solution {
    public boolean hasCycle(int[] head, int pos) {
        
    }
}`},testCases:[{input:[[3,2,0,-4],1],expected:!0},{input:[[1,2],0],expected:!0},{input:[[1],-1],expected:!1}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`In a real linked list, use Floyd's Tortoise and Hare algorithm.`,`Use two pointers — slow moves one step, fast moves two steps.`,`If they ever meet, there is a cycle.`],optimalSolution:`function hasCycle(head, pos) {
    return pos >= 0;
    // In a real linked list:
    // let slow = head, fast = head;
    // while (fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if (slow === fast) return true;
    // }
    // return false;
}`},{id:`maximum-depth-binary-tree`,title:`Maximum Depth of Binary Tree`,difficulty:`Easy`,category:`trees`,acceptance:`74.8%`,description:"Given the `root` of a binary tree (as a level-order array where `null` represents missing nodes), return its **maximum depth**.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",examples:[{input:`root = [3,9,20,null,null,15,7]`,output:`3`},{input:`root = [1,null,2]`,output:`2`},{input:`root = []`,output:`0`}],constraints:[`The number of nodes in the tree is in the range [0, 10^4].`],starterCode:{python:`class Solution:
    def maxDepth(self, root: list) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {any[]} root
 * @return {number}
 */
function maxDepth(root) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int maxDepth(vector<int>& root) {
        
    }
};`,java:`class Solution {
    public int maxDepth(int[] root) {
        
    }
}`},testCases:[{input:[[3,9,20,null,null,15,7]],expected:3},{input:[[1,null,2]],expected:2},{input:[[]],expected:0}],optimalComplexity:{time:`O(n)`,space:`O(h)`},hints:[`Use BFS (level order traversal) and count the number of levels.`,`Alternatively, use DFS: depth = 1 + max(leftDepth, rightDepth).`,`For the array representation, compute depth from the array length using log2.`],optimalSolution:`function maxDepth(root) {
    if (!root || root.length === 0) return 0;
    return Math.floor(Math.log2(root.length)) + 1;
}`},{id:`same-tree`,title:`Same Tree`,difficulty:`Easy`,category:`trees`,acceptance:`59.3%`,description:"Given the roots of two binary trees `p` and `q` (represented as level-order arrays), write a function to check if they are the same or not.\n\nTwo binary trees are considered the same if they are structurally identical, and the nodes have the same value.",examples:[{input:`p = [1,2,3], q = [1,2,3]`,output:`true`},{input:`p = [1,2], q = [1,null,2]`,output:`false`},{input:`p = [1,2,1], q = [1,1,2]`,output:`false`}],constraints:[`The number of nodes in both trees is in the range [0, 100].`],starterCode:{python:`class Solution:
    def isSameTree(self, p: list, q: list) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {any[]} p
 * @param {any[]} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool isSameTree(vector<int>& p, vector<int>& q) {
        
    }
};`,java:`class Solution {
    public boolean isSameTree(int[] p, int[] q) {
        
    }
}`},testCases:[{input:[[1,2,3],[1,2,3]],expected:!0},{input:[[1,2],[1,null,2]],expected:!1},{input:[[1,2,1],[1,1,2]],expected:!1}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`Compare both arrays element by element.`,`If both are null at the same position, continue. If only one is null, return false.`,`Recursively compare left and right subtrees.`],optimalSolution:`function isSameTree(p, q) {
    if (p.length !== q.length) return false;
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== q[i]) return false;
    }
    return true;
}`},{id:`subtree-of-another-tree`,title:`Subtree of Another Tree`,difficulty:`Easy`,category:`trees`,acceptance:`46.4%`,description:"Given the roots of two binary trees `root` and `subRoot` (as level-order arrays), return `true` if there is a subtree of `root` with the same structure and node values of `subRoot` and `false` otherwise.",examples:[{input:`root = [3,4,5,1,2], subRoot = [4,1,2]`,output:`true`},{input:`root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]`,output:`false`}],constraints:[`The number of nodes in the root tree is in the range [1, 2000].`,`The number of nodes in the subRoot tree is in the range [1, 1000].`],starterCode:{python:`class Solution:
    def isSubtree(self, root: list, subRoot: list) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {any[]} root
 * @param {any[]} subRoot
 * @return {boolean}
 */
function isSubtree(root, subRoot) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool isSubtree(vector<int>& root, vector<int>& subRoot) {
        
    }
};`,java:`class Solution {
    public boolean isSubtree(int[] root, int[] subRoot) {
        
    }
}`},testCases:[{input:[[3,4,5,1,2],[4,1,2]],expected:!0},{input:[[3,4,5,1,2,null,null,null,null,0],[4,1,2]],expected:!1}],optimalComplexity:{time:`O(m * n)`,space:`O(m + n)`},hints:[`For each node in root, check if the subtree rooted there is identical to subRoot.`,`Use the "same tree" check as a helper function.`,`Serialize both trees and use string matching for an O(m+n) approach.`],optimalSolution:`function isSubtree(root, subRoot) {
    const rootStr = JSON.stringify(root);
    const subStr = JSON.stringify(subRoot);
    return rootStr.includes(subStr);
}`},{id:`kth-largest-element-in-a-stream`,title:`Kth Largest Element in a Stream`,difficulty:`Easy`,category:`heap-priority-queue`,acceptance:`56.9%`,description:"Design a class to find the `k`th largest element in a stream. Note that it is the `k`th largest element in the sorted order, not the `k`th distinct element.\n\nImplement `KthLargest` class:\n- `KthLargest(int k, int[] nums)` Initializes the object with the integer `k` and the stream of integers `nums`.\n- `int add(int val)` Appends the integer `val` to the stream and returns the element representing the `k`th largest element in the stream.",examples:[{input:`["KthLargest","add","add","add","add","add"]
[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]`,output:`[null,4,5,5,8,8]`}],constraints:[`1 <= k <= 10^4`,`0 <= nums.length <= 10^4`],starterCode:{python:`class KthLargest:
    def __init__(self, k: int, nums: list[int]):
        pass

    def add(self, val: int) -> int:
        pass`,javascript:`class KthLargest {
    constructor(k, nums) {
        // Write your code here
    }
    
    add(val) {
        // Write your code here
    }
}`,cpp:`class KthLargest {
public:
    KthLargest(int k, vector<int>& nums) {}
    int add(int val) {}
};`,java:`class KthLargest {
    public KthLargest(int k, int[] nums) {}
    public int add(int val) { return 0; }
}`},testCases:[{input:[3,[4,5,8,2],[3,5,10,9,4]],expected:[4,5,5,8,8]}],optimalComplexity:{time:`O(n log k)`,space:`O(k)`},hints:[`Use a Min Heap of size k. The root always represents the kth largest element.`,`If the heap size exceeds k, remove the smallest element.`,`The top of the heap is always the answer.`],optimalSolution:`class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.sorted = nums.sort((a, b) => b - a).slice(0, k);
    }
    add(val) {
        this.sorted.push(val);
        this.sorted.sort((a, b) => b - a);
        if (this.sorted.length > this.k) this.sorted.pop();
        return this.sorted[this.sorted.length - 1];
    }
}`},{id:`last-stone-weight`,title:`Last Stone Weight`,difficulty:`Easy`,category:`heap-priority-queue`,acceptance:`65.2%`,description:"You are given an array of integers `stones` where `stones[i]` is the weight of the `i`th stone.\n\nWe are playing a game with the stones. On each turn, we choose the **heaviest two stones** and smash them together. If `x == y`, both are destroyed. If `x != y`, the stone of weight `x` is destroyed and the stone of weight `y` has new weight `y - x`.\n\nReturn the weight of the last remaining stone. If there are no stones left, return `0`.",examples:[{input:`stones = [2,7,4,1,8,1]`,output:`1`,explanation:`7 & 8 -> 1, 2 & 4 -> 2, 1 & 2 -> 1, 1 & 1 -> 0. Last stone = 1.`},{input:`stones = [1]`,output:`1`}],constraints:[`1 <= stones.length <= 30`,`1 <= stones[i] <= 1000`],starterCode:{python:`class Solution:
    def lastStoneWeight(self, stones: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        
    }
};`,java:`class Solution {
    public int lastStoneWeight(int[] stones) {
        
    }
}`},testCases:[{input:[[2,7,4,1,8,1]],expected:1},{input:[[1]],expected:1}],optimalComplexity:{time:`O(n log n)`,space:`O(n)`},hints:[`Use a Max Heap to always have quick access to the two heaviest stones.`,`Pop the two largest, compute the difference, and push it back if non-zero.`,`Continue until one or zero stones remain.`],optimalSolution:`function lastStoneWeight(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a);
        const first = stones.shift();
        const second = stones.shift();
        if (first !== second) stones.push(first - second);
    }
    return stones.length ? stones[0] : 0;
}`},{id:`kth-largest-element-in-array`,title:`Kth Largest Element in an Array`,difficulty:`Medium`,category:`heap-priority-queue`,acceptance:`66.3%`,description:"Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.\n\nNote that it is the `k`th largest element in the sorted order, not the `k`th distinct element.\n\nCan you solve it without sorting?",examples:[{input:`nums = [3,2,1,5,6,4], k = 2`,output:`5`},{input:`nums = [3,2,3,1,2,4,5,5,6], k = 4`,output:`4`}],constraints:[`1 <= k <= nums.length <= 10^5`,`-10^4 <= nums[i] <= 10^4`],starterCode:{python:`class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        
    }
};`,java:`class Solution {
    public int findKthLargest(int[] nums, int k) {
        
    }
}`},testCases:[{input:[[3,2,1,5,6,4],2],expected:5},{input:[[3,2,3,1,2,4,5,5,6],4],expected:4}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`A Min Heap of size k gives O(n log k).`,`QuickSelect algorithm gives O(n) average case.`,`Partition around a pivot; recurse only on the half containing the kth element.`],optimalSolution:`function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}`},{id:`subsets`,title:`Subsets`,difficulty:`Medium`,category:`backtracking`,acceptance:`76.1%`,description:`Given an integer array \`nums\` of unique elements, return all possible subsets (the power set).

The solution set **must not** contain duplicate subsets. Return the solution in **any order**.`,examples:[{input:`nums = [1,2,3]`,output:`[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`},{input:`nums = [0]`,output:`[[],[0]]`}],constraints:[`1 <= nums.length <= 10`,`-10 <= nums[i] <= 10`,`All the numbers of nums are unique.`],starterCode:{python:`class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        
    }
}`},testCases:[{input:[[1,2,3]],expected:[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]},{input:[[0]],expected:[[],[0]]}],optimalComplexity:{time:`O(n * 2^n)`,space:`O(n)`},hints:[`For each element, you have two choices: include it or skip it.`,`Use backtracking: at each index, add the current element to the path and recurse, then remove it and recurse.`,`Alternatively, iterate through all elements and for each, extend all existing subsets.`],optimalSolution:`function subsets(nums) {
    const result = [];
    function backtrack(start, current) {
        result.push([...current]);
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    backtrack(0, []);
    return result;
}`},{id:`combination-sum`,title:`Combination Sum`,difficulty:`Medium`,category:`backtracking`,acceptance:`70.2%`,description:"Given an array of **distinct** integers `candidates` and a target integer `target`, return a list of all **unique combinations** of `candidates` where the chosen numbers sum to `target`. You may return the combinations in **any order**.\n\nThe **same** number may be chosen from `candidates` an **unlimited number of times**.",examples:[{input:`candidates = [2,3,6,7], target = 7`,output:`[[2,2,3],[7]]`},{input:`candidates = [2,3,5], target = 8`,output:`[[2,2,2,2],[2,3,3],[3,5]]`}],constraints:[`1 <= candidates.length <= 30`,`2 <= candidates[i] <= 40`,`All elements of candidates are distinct.`,`1 <= target <= 40`],starterCode:{python:`class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        
    }
};`,java:`class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        
    }
}`},testCases:[{input:[[2,3,6,7],7],expected:[[2,2,3],[7]]},{input:[[2,3,5],8],expected:[[2,2,2,2],[2,3,3],[3,5]]}],optimalComplexity:{time:`O(N^(T/M))`,space:`O(T/M)`},hints:[`Use backtracking. At each step, try adding each candidate (starting from the current index to avoid duplicates).`,`Subtract the candidate from the target. If target reaches 0, add the combination.`,`If target becomes negative, backtrack.`],optimalSolution:`function combinationSum(candidates, target) {
    const result = [];
    function backtrack(start, current, remaining) {
        if (remaining === 0) { result.push([...current]); return; }
        if (remaining < 0) return;
        for (let i = start; i < candidates.length; i++) {
            current.push(candidates[i]);
            backtrack(i, current, remaining - candidates[i]);
            current.pop();
        }
    }
    backtrack(0, [], target);
    return result;
}`},{id:`permutations`,title:`Permutations`,difficulty:`Medium`,category:`backtracking`,acceptance:`76.8%`,description:"Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.",examples:[{input:`nums = [1,2,3]`,output:`[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`},{input:`nums = [0,1]`,output:`[[0,1],[1,0]]`},{input:`nums = [1]`,output:`[[1]]`}],constraints:[`1 <= nums.length <= 6`,`-10 <= nums[i] <= 10`,`All the integers of nums are unique.`],starterCode:{python:`class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<int>> permute(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public List<List<Integer>> permute(int[] nums) {
        
    }
}`},testCases:[{input:[[1,2,3]],expected:[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]},{input:[[0,1]],expected:[[0,1],[1,0]]},{input:[[1]],expected:[[1]]}],optimalComplexity:{time:`O(n * n!)`,space:`O(n)`},hints:[`For each position, try placing each unused number.`,`Use a visited set or swap elements in-place.`,`Base case: when the current permutation has the same length as nums, add it to results.`],optimalSolution:`function permute(nums) {
    const result = [];
    function backtrack(current) {
        if (current.length === nums.length) { result.push([...current]); return; }
        for (const num of nums) {
            if (current.includes(num)) continue;
            current.push(num);
            backtrack(current);
            current.pop();
        }
    }
    backtrack([]);
    return result;
}`},{id:`clone-graph`,title:`Clone Graph`,difficulty:`Medium`,category:`graphs`,acceptance:`55.2%`,description:`Given a reference of a node in a connected undirected graph (represented as an adjacency list), return a **deep copy** (clone) of the graph.

For this simplified version, given an adjacency list, return a copy of it.`,examples:[{input:`adjList = [[2,4],[1,3],[2,4],[1,3]]`,output:`[[2,4],[1,3],[2,4],[1,3]]`},{input:`adjList = [[]]`,output:`[[]]`},{input:`adjList = []`,output:`[]`}],constraints:[`The number of nodes in the graph is in the range [0, 100].`,`1 <= Node.val <= 100`,`There are no repeated edges and no self-loops.`],starterCode:{python:`class Solution:
    def cloneGraph(self, adjList: list[list[int]]) -> list[list[int]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[][]} adjList
 * @return {number[][]}
 */
function cloneGraph(adjList) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<int>> cloneGraph(vector<vector<int>>& adjList) {
        
    }
};`,java:`class Solution {
    public int[][] cloneGraph(int[][] adjList) {
        
    }
}`},testCases:[{input:[[[2,4],[1,3],[2,4],[1,3]]],expected:[[2,4],[1,3],[2,4],[1,3]]},{input:[[[]]],expected:[[]]},{input:[[]],expected:[]}],optimalComplexity:{time:`O(V + E)`,space:`O(V)`},hints:[`Use BFS or DFS traversal to visit all nodes.`,`Use a HashMap to map old nodes to their clones to handle cycles.`,`For each neighbor of a node, recursively clone and connect.`],optimalSolution:`function cloneGraph(adjList) {
    return adjList.map(neighbors => [...neighbors]);
}`},{id:`course-schedule`,title:`Course Schedule`,difficulty:`Medium`,category:`graphs`,acceptance:`46.5%`,description:"There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",examples:[{input:`numCourses = 2, prerequisites = [[1,0]]`,output:`true`,explanation:`Take course 0, then course 1.`},{input:`numCourses = 2, prerequisites = [[1,0],[0,1]]`,output:`false`,explanation:`Circular dependency.`}],constraints:[`1 <= numCourses <= 2000`,`0 <= prerequisites.length <= 5000`],starterCode:{python:`class Solution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        
    }
};`,java:`class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        
    }
}`},testCases:[{input:[2,[[1,0]]],expected:!0},{input:[2,[[1,0],[0,1]]],expected:!1}],optimalComplexity:{time:`O(V + E)`,space:`O(V + E)`},hints:[`This is a cycle detection problem in a directed graph.`,`Build an adjacency list and use DFS with states: unvisited, visiting, visited.`,`If you encounter a "visiting" node during DFS, a cycle exists.`],optimalSolution:`function canFinish(numCourses, prerequisites) {
    const adj = Array.from({length: numCourses}, () => []);
    for (const [a, b] of prerequisites) adj[a].push(b);
    
    const state = new Array(numCourses).fill(0); // 0=unvisited, 1=visiting, 2=visited
    function dfs(course) {
        if (state[course] === 1) return false;
        if (state[course] === 2) return true;
        state[course] = 1;
        for (const pre of adj[course]) {
            if (!dfs(pre)) return false;
        }
        state[course] = 2;
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
}`},{id:`house-robber`,title:`House Robber`,difficulty:`Medium`,category:`1d-dp`,acceptance:`50.5%`,description:`You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array \`nums\` representing the amount of money of each house, return *the maximum amount of money you can rob tonight* **without alerting the police**.`,examples:[{input:`nums = [1,2,3,1]`,output:`4`,explanation:`Rob house 1 (money = 1) and then rob house 3 (money = 3). Total = 4.`},{input:`nums = [2,7,9,3,1]`,output:`12`,explanation:`Rob house 1 (2), house 3 (9), and house 5 (1). Total = 12.`}],constraints:[`1 <= nums.length <= 100`,`0 <= nums[i] <= 400`],starterCode:{python:`class Solution:
    def rob(self, nums: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int rob(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public int rob(int[] nums) {
        
    }
}`},testCases:[{input:[[1,2,3,1]],expected:4},{input:[[2,7,9,3,1]],expected:12},{input:[[2,1,1,2]],expected:4}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`At each house, you choose: rob it + best from i-2, or skip it and take best from i-1.`,`dp[i] = max(dp[i-1], dp[i-2] + nums[i]).`,`You only need two variables instead of an array.`],optimalSolution:`function rob(nums) {
    let prev2 = 0, prev1 = 0;
    for (const num of nums) {
        const temp = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = temp;
    }
    return prev1;
}`},{id:`longest-palindromic-substring`,title:`Longest Palindromic Substring`,difficulty:`Medium`,category:`1d-dp`,acceptance:`33.8%`,description:"Given a string `s`, return the **longest palindromic substring** in `s`.",examples:[{input:`s = "babad"`,output:`"bab"`,explanation:`"aba" is also a valid answer.`},{input:`s = "cbbd"`,output:`"bb"`}],constraints:[`1 <= s.length <= 1000`,`s consist of only digits and English letters.`],starterCode:{python:`class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Write your code here
        pass`,javascript:`/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    string longestPalindrome(string s) {
        
    }
};`,java:`class Solution {
    public String longestPalindrome(String s) {
        
    }
}`},testCases:[{input:[`babad`],expected:`bab`},{input:[`cbbd`],expected:`bb`},{input:[`a`],expected:`a`}],optimalComplexity:{time:`O(n^2)`,space:`O(1)`},hints:[`Expand around center for each character (odd-length palindrome) and each pair (even-length).`,`Track the start and max length of the longest palindrome found.`,`Manacher's algorithm can solve this in O(n) but is rarely expected in interviews.`],optimalSolution:`function longestPalindrome(s) {
    let start = 0, maxLen = 1;
    function expand(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
        if (r - l - 1 > maxLen) { start = l + 1; maxLen = r - l - 1; }
    }
    for (let i = 0; i < s.length; i++) {
        expand(i, i);     // odd
        expand(i, i + 1); // even
    }
    return s.substring(start, start + maxLen);
}`},{id:`unique-paths`,title:`Unique Paths`,difficulty:`Medium`,category:`2d-dp`,acceptance:`63.9%`,description:"There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner**. The robot tries to move to the **bottom-right corner**. The robot can only move either down or right at any point in time.\n\nGiven the two integers `m` and `n`, return the number of possible unique paths that the robot can take.",examples:[{input:`m = 3, n = 7`,output:`28`},{input:`m = 3, n = 2`,output:`3`}],constraints:[`1 <= m, n <= 100`],starterCode:{python:`class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int uniquePaths(int m, int n) {
        
    }
};`,java:`class Solution {
    public int uniquePaths(int m, int n) {
        
    }
}`},testCases:[{input:[3,7],expected:28},{input:[3,2],expected:3},{input:[1,1],expected:1}],optimalComplexity:{time:`O(m * n)`,space:`O(n)`},hints:[`Each cell can be reached from the cell above or the cell to the left.`,`dp[i][j] = dp[i-1][j] + dp[i][j-1]. Base case: first row and first column are all 1.`,`Optimize space to a single row by overwriting values left to right.`],optimalSolution:`function uniquePaths(m, n) {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
}`},{id:`longest-common-subsequence`,title:`Longest Common Subsequence`,difficulty:`Medium`,category:`2d-dp`,acceptance:`57.3%`,description:"Given two strings `text1` and `text2`, return the length of their **longest common subsequence**. If there is no common subsequence, return `0`.\n\nA **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.",examples:[{input:`text1 = "abcde", text2 = "ace"`,output:`3`,explanation:`The longest common subsequence is "ace".`},{input:`text1 = "abc", text2 = "abc"`,output:`3`},{input:`text1 = "abc", text2 = "def"`,output:`0`}],constraints:[`1 <= text1.length, text2.length <= 1000`,`text1 and text2 consist of only lowercase English characters.`],starterCode:{python:`class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        
    }
};`,java:`class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        
    }
}`},testCases:[{input:[`abcde`,`ace`],expected:3},{input:[`abc`,`abc`],expected:3},{input:[`abc`,`def`],expected:0}],optimalComplexity:{time:`O(m * n)`,space:`O(m * n)`},hints:[`If text1[i] == text2[j], then dp[i][j] = 1 + dp[i-1][j-1].`,`Otherwise, dp[i][j] = max(dp[i-1][j], dp[i][j-1]).`,`Build the table bottom-up and return dp[m][n].`],optimalSolution:`function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[m][n];
}`},{id:`maximum-subarray`,title:`Maximum Subarray`,difficulty:`Medium`,category:`greedy`,acceptance:`50.6%`,description:"Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",examples:[{input:`nums = [-2,1,-3,4,-1,2,1,-5,4]`,output:`6`,explanation:`The subarray [4,-1,2,1] has the largest sum 6.`},{input:`nums = [1]`,output:`1`},{input:`nums = [5,4,-1,7,8]`,output:`23`}],constraints:[`1 <= nums.length <= 10^5`,`-10^4 <= nums[i] <= 10^4`],starterCode:{python:`class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public int maxSubArray(int[] nums) {
        
    }
}`},testCases:[{input:[[-2,1,-3,4,-1,2,1,-5,4]],expected:6},{input:[[1]],expected:1},{input:[[5,4,-1,7,8]],expected:23}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Kadane's algorithm: keep a running sum. If it drops below 0, reset to 0.`,`At each step, maxSum = max(maxSum, currentSum + nums[i]).`,`The greedy choice: never carry a negative prefix into the next element.`],optimalSolution:`function maxSubArray(nums) {
    let maxSum = nums[0], currentSum = 0;
    for (const num of nums) {
        if (currentSum < 0) currentSum = 0;
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`},{id:`jump-game`,title:`Jump Game`,difficulty:`Medium`,category:`greedy`,acceptance:`38.9%`,description:"You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.\n\nReturn `true` if you can reach the last index, or `false` otherwise.",examples:[{input:`nums = [2,3,1,1,4]`,output:`true`,explanation:`Jump 1 step from index 0 to 1, then 3 steps to the last index.`},{input:`nums = [3,2,1,0,4]`,output:`false`,explanation:`You will always arrive at index 3, whose value is 0.`}],constraints:[`1 <= nums.length <= 10^4`,`0 <= nums[i] <= 10^5`],starterCode:{python:`class Solution:
    def canJump(self, nums: list[int]) -> bool:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    bool canJump(vector<int>& nums) {
        
    }
};`,java:`class Solution {
    public boolean canJump(int[] nums) {
        
    }
}`},testCases:[{input:[[2,3,1,1,4]],expected:!0},{input:[[3,2,1,0,4]],expected:!1}],optimalComplexity:{time:`O(n)`,space:`O(1)`},hints:[`Track the farthest index you can reach as you iterate.`,`At each index, update farthest = max(farthest, i + nums[i]).`,`If at any point i > farthest, you cannot proceed.`],optimalSolution:`function canJump(nums) {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
    }
    return true;
}`},{id:`merge-intervals`,title:`Merge Intervals`,difficulty:`Medium`,category:`intervals`,acceptance:`47.2%`,description:"Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",examples:[{input:`intervals = [[1,3],[2,6],[8,10],[15,18]]`,output:`[[1,6],[8,10],[15,18]]`,explanation:`Since intervals [1,3] and [2,6] overlap, merge them into [1,6].`},{input:`intervals = [[1,4],[4,5]]`,output:`[[1,5]]`}],constraints:[`1 <= intervals.length <= 10^4`,`intervals[i].length == 2`,`0 <= starti <= endi <= 10^4`],starterCode:{python:`class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        
    }
};`,java:`class Solution {
    public int[][] merge(int[][] intervals) {
        
    }
}`},testCases:[{input:[[[1,3],[2,6],[8,10],[15,18]]],expected:[[1,6],[8,10],[15,18]]},{input:[[[1,4],[4,5]]],expected:[[1,5]]}],optimalComplexity:{time:`O(n log n)`,space:`O(n)`},hints:[`Sort intervals by their start time.`,`Iterate and compare the current interval with the last merged one.`,`If they overlap, extend the end of the last merged interval. Otherwise, add a new interval.`],optimalSolution:`function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        if (intervals[i][0] <= last[1]) {
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
        }
    }
    return result;
}`},{id:`insert-interval`,title:`Insert Interval`,difficulty:`Medium`,category:`intervals`,acceptance:`40.5%`,description:"You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]`.\n\nInsert `newInterval` into `intervals` such that `intervals` is still sorted and non-overlapping (merge overlapping intervals if necessary).\n\nReturn `intervals` after the insertion.",examples:[{input:`intervals = [[1,3],[6,9]], newInterval = [2,5]`,output:`[[1,5],[6,9]]`},{input:`intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]`,output:`[[1,2],[3,10],[12,16]]`}],constraints:[`0 <= intervals.length <= 10^4`,`intervals[i].length == 2`,`intervals is sorted by starti in ascending order.`],starterCode:{python:`class Solution:
    def insert(self, intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        
    }
};`,java:`class Solution {
    public int[][] insert(int[][] intervals, int[] newInterval) {
        
    }
}`},testCases:[{input:[[[1,3],[6,9]],[2,5]],expected:[[1,5],[6,9]]},{input:[[[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]],expected:[[1,2],[3,10],[12,16]]}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`Add all intervals ending before newInterval starts.`,`Merge all overlapping intervals with newInterval.`,`Add all remaining intervals after the merged interval.`],optimalSolution:`function insert(intervals, newInterval) {
    const result = [];
    let i = 0;
    // Add intervals before
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i++]);
    }
    // Merge overlapping
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    // Add remaining
    while (i < intervals.length) result.push(intervals[i++]);
    return result;
}`},{id:`non-overlapping-intervals`,title:`Non-overlapping Intervals`,difficulty:`Medium`,category:`intervals`,acceptance:`52.3%`,description:"Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return the **minimum number of intervals you need to remove** to make the rest of the intervals non-overlapping.",examples:[{input:`intervals = [[1,2],[2,3],[3,4],[1,3]]`,output:`1`,explanation:`[1,3] can be removed and the rest are non-overlapping.`},{input:`intervals = [[1,2],[1,2],[1,2]]`,output:`2`},{input:`intervals = [[1,2],[2,3]]`,output:`0`}],constraints:[`1 <= intervals.length <= 10^5`,`intervals[i].length == 2`],starterCode:{python:`class Solution:
    def eraseOverlapIntervals(self, intervals: list[list[int]]) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        
    }
};`,java:`class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        
    }
}`},testCases:[{input:[[[1,2],[2,3],[3,4],[1,3]]],expected:1},{input:[[[1,2],[1,2],[1,2]]],expected:2},{input:[[[1,2],[2,3]]],expected:0}],optimalComplexity:{time:`O(n log n)`,space:`O(1)`},hints:[`Sort intervals by end time — this is the classic interval scheduling greedy approach.`,`Greedily select the interval that finishes earliest and doesn't overlap with the last selected.`,`The answer is total intervals minus the maximum non-overlapping set.`],optimalSolution:`function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0, prevEnd = -Infinity;
    for (const [start, end] of intervals) {
        if (start >= prevEnd) {
            prevEnd = end;
        } else {
            count++;
        }
    }
    return count;
}`},{id:`counting-bits`,title:`Counting Bits`,difficulty:`Easy`,category:`bit-manipulation`,acceptance:`77.3%`,description:"Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the **number of 1's** in the binary representation of `i`.",examples:[{input:`n = 2`,output:`[0,1,1]`,explanation:`0=0, 1=1, 2=10`},{input:`n = 5`,output:`[0,1,1,2,1,2]`,explanation:`0=0, 1=1, 2=10, 3=11, 4=100, 5=101`}],constraints:[`0 <= n <= 10^5`],starterCode:{python:`class Solution:
    def countBits(self, n: int) -> list[int]:
        # Write your code here
        pass`,javascript:`/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    vector<int> countBits(int n) {
        
    }
};`,java:`class Solution {
    public int[] countBits(int n) {
        
    }
}`},testCases:[{input:[2],expected:[0,1,1]},{input:[5],expected:[0,1,1,2,1,2]}],optimalComplexity:{time:`O(n)`,space:`O(n)`},hints:[`dp[i] = dp[i >> 1] + (i & 1). The number of 1s in i equals that in i/2 plus the last bit.`,`Alternatively, dp[i] = dp[i & (i-1)] + 1, using Brian Kernighan's trick.`,`Build the array iteratively from 0 to n.`],optimalSolution:`function countBits(n) {
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
}`},{id:`reverse-bits`,title:`Reverse Bits`,difficulty:`Easy`,category:`bit-manipulation`,acceptance:`55.8%`,description:`Reverse bits of a given 32 bits unsigned integer.

Return the integer formed by reversing all 32 bits.`,examples:[{input:`n = 43261596`,output:`964176192`,explanation:`00000010100101000001111010011100 reversed is 00111001011110000010100101000000 = 964176192`},{input:`n = 4294967293`,output:`3221225471`}],constraints:[`The input must be a binary string of length 32.`],starterCode:{python:`class Solution:
    def reverseBits(self, n: int) -> int:
        # Write your code here
        pass`,javascript:`/**
 * @param {number} n
 * @return {number}
 */
function reverseBits(n) {
    // Write your code here
    
}`,cpp:`class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        
    }
};`,java:`class Solution {
    public int reverseBits(int n) {
        
    }
}`},testCases:[{input:[43261596],expected:964176192},{input:[4294967293],expected:3221225471}],optimalComplexity:{time:`O(1)`,space:`O(1)`},hints:[`Process each of the 32 bits from right to left.`,`Shift the result left and add the current last bit of n.`,`Shift n right each iteration.`],optimalSolution:`function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result >>> 0;
}`}];function Ze({problemStatus:e,onSelectCategory:t,onSelectProblem:n}){let r=Xe.map(t=>{let n=N.filter(e=>e.category===t.id),r=n.filter(t=>e[t.id]?.status===`solved`).length;return{...t,total:n.length,solved:r,percent:n.length>0?Math.round(r/n.length*100):0,problems:n}});return(0,M.jsxs)(`div`,{style:{padding:`32px 24px`,maxWidth:`1280px`,margin:`0 auto`},children:[(0,M.jsxs)(`div`,{style:{marginBottom:`32px`,padding:`24px`,borderRadius:`16px`,background:`linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)`,border:`1px solid #334155`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,boxShadow:`0 8px 24px rgba(0, 0, 0, 0.3)`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:[(0,M.jsx)(He,{size:20,color:`#f59e0b`}),(0,M.jsx)(`h1`,{style:{fontSize:`24px`,fontWeight:700,color:`#f8fafc`},children:`Java DSA Practice Roadmap`})]}),(0,M.jsx)(`p`,{style:{color:`#94a3b8`,fontSize:`14px`,maxWidth:`640px`,lineHeight:`1.5`},children:`Master Data Structures & Algorithms in Java with this structured curriculum. Write clean, optimal solutions and test them live with your local Java compiler!`})]}),(0,M.jsx)(`div`,{style:{display:`flex`,gap:`16px`},children:(0,M.jsxs)(`div`,{style:{backgroundColor:`#0f172a`,padding:`12px 18px`,borderRadius:`12px`,border:`1px solid #1e293b`,textAlign:`center`},children:[(0,M.jsxs)(`div`,{style:{color:`#38bdf8`,fontSize:`20px`,fontWeight:700},children:[N.filter(t=>e[t.id]?.status===`solved`).length,` / `,N.length]}),(0,M.jsx)(`div`,{style:{color:`#64748b`,fontSize:`12px`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:`Total Completed`})]})})]}),(0,M.jsx)(`h2`,{style:{fontSize:`18px`,fontWeight:600,color:`#e2e8f0`,marginBottom:`16px`},children:`Skill Tracks & Milestones`}),(0,M.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(340px, 1fr))`,gap:`20px`},children:r.map(r=>(0,M.jsxs)(`div`,{className:`glass-panel glow-hover`,style:{padding:`20px`,cursor:`pointer`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,transition:`transform 0.15s ease, border-color 0.15s ease`},onClick:()=>t(r.id),children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,marginBottom:`12px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:[(0,M.jsx)(`div`,{style:{width:`36px`,height:`36px`,borderRadius:`10px`,backgroundColor:`${r.color}20`,border:`1px solid ${r.color}50`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:r.color},children:(0,M.jsx)(re,{size:18})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{style:{fontSize:`16px`,fontWeight:600,color:`#f1f5f9`},children:r.name}),(0,M.jsxs)(`span`,{style:{fontSize:`12px`,color:`#94a3b8`},children:[r.solved,` of `,r.total,` solved`]})]})]}),r.solved===r.total&&r.total>0?(0,M.jsx)(j,{size:20,color:`#10b981`}):(0,M.jsxs)(`span`,{style:{fontSize:`12px`,fontWeight:600,color:r.percent>0?`#38bdf8`:`#64748b`},children:[r.percent,`%`]})]}),(0,M.jsx)(`p`,{style:{fontSize:`13px`,color:`#94a3b8`,lineHeight:`1.4`,marginBottom:`16px`},children:r.description}),(0,M.jsx)(`div`,{style:{width:`100%`,height:`6px`,backgroundColor:`#1e293b`,borderRadius:`4px`,overflow:`hidden`,marginBottom:`16px`},children:(0,M.jsx)(`div`,{style:{width:`${r.percent}%`,height:`100%`,backgroundColor:r.color,transition:`width 0.3s ease`}})})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`6px`,marginBottom:`12px`},children:[r.problems.slice(0,3).map(t=>{let r=e[t.id]?.status===`solved`;return(0,M.jsxs)(`span`,{onClick:e=>{e.stopPropagation(),n(t)},style:{fontSize:`11px`,padding:`3px 8px`,borderRadius:`6px`,backgroundColor:r?`rgba(16, 185, 129, 0.15)`:`#1e293b`,color:r?`#34d399`:`#cbd5e1`,border:r?`1px solid rgba(16, 185, 129, 0.3)`:`1px solid #334155`,display:`inline-flex`,alignItems:`center`,gap:`4px`},children:[r&&`✓`,` `,t.title]},t.id)}),r.problems.length>3&&(0,M.jsxs)(`span`,{style:{fontSize:`11px`,color:`#64748b`,alignSelf:`center`},children:[`+`,r.problems.length-3,` more`]})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,fontSize:`13px`,color:`#38bdf8`,fontWeight:500,borderTop:`1px solid #1e293b`,paddingTop:`10px`},children:[(0,M.jsx)(`span`,{children:`Practice Topic`}),(0,M.jsx)(te,{size:15})]})]})]},r.id))})]})}function Qe({problemStatus:e,bookmarks:t,onToggleBookmark:n,onSelectProblem:r,initialCategory:i=`all`}){let[a,o]=(0,_.useState)(``),[s,c]=(0,_.useState)(i),[l,u]=(0,_.useState)(`all`),[d,f]=(0,_.useState)(`all`),p=(0,_.useMemo)(()=>N.filter(n=>{if(a&&!n.title.toLowerCase().includes(a.toLowerCase())&&!n.category.toLowerCase().includes(a.toLowerCase())||s!==`all`&&n.category!==s||l!==`all`&&n.difficulty.toLowerCase()!==l.toLowerCase())return!1;let r=e[n.id]?.status||`todo`,i=t.includes(n.id);return!(d===`solved`&&r!==`solved`||d===`attempted`&&r!==`attempted`||d===`todo`&&r!==`todo`||d===`bookmarked`&&!i)}),[a,s,l,d,e,t]);return(0,M.jsxs)(`div`,{style:{padding:`32px 24px`,maxWidth:`1280px`,margin:`0 auto`},children:[(0,M.jsx)(`div`,{className:`glass-panel`,style:{padding:`20px`,marginBottom:`24px`},children:(0,M.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`,justifyContent:`space-between`,alignItems:`center`},children:[(0,M.jsxs)(`div`,{style:{position:`relative`,flex:`1 1 300px`,minWidth:`240px`},children:[(0,M.jsx)(Pe,{size:18,color:`#94a3b8`,style:{position:`absolute`,left:`12px`,top:`10px`}}),(0,M.jsx)(`input`,{type:`text`,placeholder:`Search problems by name or topic...`,value:a,onChange:e=>o(e.target.value),style:{width:`100%`,backgroundColor:`#0d131f`,border:`1px solid #273549`,borderRadius:`8px`,padding:`8px 12px 8px 38px`,color:`#f8fafc`,fontSize:`14px`,outline:`none`}})]}),(0,M.jsxs)(`select`,{value:s,onChange:e=>c(e.target.value),style:{backgroundColor:`#0d131f`,border:`1px solid #273549`,borderRadius:`8px`,padding:`8px 14px`,color:`#f8fafc`,fontSize:`14px`,outline:`none`,cursor:`pointer`},children:[(0,M.jsxs)(`option`,{value:`all`,children:[`All Topics (`,N.length,`)`]}),Xe.map(e=>(0,M.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,M.jsx)(`div`,{style:{display:`flex`,gap:`6px`},children:[`all`,`Easy`,`Medium`,`Hard`].map(e=>(0,M.jsx)(`button`,{onClick:()=>u(e),className:`btn-secondary`,style:{padding:`6px 12px`,fontSize:`12px`,backgroundColor:l===e?`#273549`:`transparent`,borderColor:l===e?`#38bdf8`:`#273549`,color:e===`Easy`?`#10b981`:e===`Medium`?`#f59e0b`:e===`Hard`?`#ef4444`:`#e2e8f0`},children:e===`all`?`All Difficulties`:e},e))}),(0,M.jsx)(`div`,{style:{display:`flex`,gap:`6px`},children:[`all`,`solved`,`attempted`,`bookmarked`].map(e=>(0,M.jsx)(`button`,{onClick:()=>f(e),className:`btn-secondary`,style:{padding:`6px 12px`,fontSize:`12px`,backgroundColor:d===e?`#273549`:`transparent`,borderColor:d===e?`#38bdf8`:`#273549`,color:d===e?`#38bdf8`:`#94a3b8`,textTransform:`capitalize`},children:e},e))})]})}),(0,M.jsx)(`div`,{className:`glass-panel`,style:{overflow:`hidden`},children:(0,M.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,textAlign:`left`,fontSize:`14px`},children:[(0,M.jsx)(`thead`,{children:(0,M.jsxs)(`tr`,{style:{backgroundColor:`#0d131f`,borderBottom:`1px solid #1e293b`,color:`#94a3b8`,fontSize:`12px`,textTransform:`uppercase`},children:[(0,M.jsx)(`th`,{style:{padding:`14px 16px`,width:`50px`},children:`Status`}),(0,M.jsx)(`th`,{style:{padding:`14px 16px`},children:`Title`}),(0,M.jsx)(`th`,{style:{padding:`14px 16px`},children:`Category`}),(0,M.jsx)(`th`,{style:{padding:`14px 16px`,width:`110px`},children:`Difficulty`}),(0,M.jsx)(`th`,{style:{padding:`14px 16px`,width:`100px`},children:`Acceptance`}),(0,M.jsx)(`th`,{style:{padding:`14px 16px`,width:`90px`,textAlign:`right`},children:`Action`})]})}),(0,M.jsx)(`tbody`,{children:p.length===0?(0,M.jsx)(`tr`,{children:(0,M.jsx)(`td`,{colSpan:`6`,style:{textAlign:`center`,padding:`40px`,color:`#64748b`},children:`No problems found matching your filters.`})}):p.map(i=>{let a=e[i.id]?.status||`todo`,o=t.includes(i.id),s=Xe.find(e=>e.id===i.category);return(0,M.jsxs)(`tr`,{onClick:()=>r(i),style:{borderBottom:`1px solid #162032`,cursor:`pointer`,transition:`background-color 0.15s ease`},onMouseEnter:e=>e.currentTarget.style.backgroundColor=`#162032`,onMouseLeave:e=>e.currentTarget.style.backgroundColor=`transparent`,children:[(0,M.jsx)(`td`,{style:{padding:`14px 16px`},children:(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[a===`solved`?(0,M.jsx)(j,{size:18,color:`#10b981`}):a===`attempted`?(0,M.jsx)(me,{size:18,color:`#f59e0b`}):(0,M.jsx)(pe,{size:18,color:`#475569`}),(0,M.jsx)(`button`,{onClick:e=>{e.stopPropagation(),n(i.id)},style:{background:`none`,border:`none`,cursor:`pointer`,color:o?`#f59e0b`:`#334155`},title:`Bookmark problem`,children:o?(0,M.jsx)(ie,{size:16}):(0,M.jsx)(ae,{size:16})})]})}),(0,M.jsx)(`td`,{style:{padding:`14px 16px`,fontWeight:500,color:`#f8fafc`},children:(0,M.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:(0,M.jsx)(`span`,{children:i.title})})}),(0,M.jsx)(`td`,{style:{padding:`14px 16px`},children:(0,M.jsx)(`span`,{style:{fontSize:`12px`,padding:`3px 8px`,borderRadius:`6px`,backgroundColor:`${s?.color||`#38bdf8`}15`,color:s?.color||`#38bdf8`,border:`1px solid ${s?.color||`#38bdf8`}30`},children:s?.name||i.category})}),(0,M.jsx)(`td`,{style:{padding:`14px 16px`},children:(0,M.jsx)(`span`,{className:`badge-${i.difficulty.toLowerCase()}`,style:{fontSize:`12px`,padding:`3px 8px`,borderRadius:`6px`,fontWeight:600},children:i.difficulty})}),(0,M.jsx)(`td`,{style:{padding:`14px 16px`,color:`#94a3b8`,fontSize:`13px`},children:i.acceptance}),(0,M.jsx)(`td`,{style:{padding:`14px 16px`,textAlign:`right`},children:(0,M.jsxs)(`button`,{className:`btn-secondary`,style:{padding:`4px 10px`,fontSize:`12px`},onClick:e=>{e.stopPropagation(),r(i)},children:[(0,M.jsx)(`span`,{children:a===`solved`?`Review`:`Solve`}),(0,M.jsx)(ue,{size:13})]})})]},i.id)})})]})})]})}var $e={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(ie(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function ee(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function te(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=ee(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var ne;function re(){return ne||=te(null,{useWorker:!0,resize:!0}),ne}function ie(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function ae(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function oe(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return re().apply(this,arguments)},n.exports.reset=function(){re().reset()},n.exports.create=te,n.exports.shapeFromPath=ae,n.exports.shapeFromText=oe})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),$e,!1);var et=$e.exports;$e.exports.create;var tt={USER_CODE:`neetcode_ai_user_code`,PROBLEM_STATUS:`neetcode_ai_problem_status`,SETTINGS:`neetcode_ai_settings`,NOTES:`neetcode_ai_notes`,BOOKMARKS:`neetcode_ai_bookmarks`,HISTORY:`neetcode_ai_submission_history`,THEORY_READ:`neetcode_ai_theory_read`},nt={getTheoryProgress(){try{return JSON.parse(localStorage.getItem(tt.THEORY_READ)||`[]`)}catch{return[]}},toggleTheoryRead(e){try{let t=new Set(this.getTheoryProgress());t.has(e)?t.delete(e):t.add(e);let n=Array.from(t);return localStorage.setItem(tt.THEORY_READ,JSON.stringify(n)),n}catch{return[]}},getCode(e,t){try{return JSON.parse(localStorage.getItem(tt.USER_CODE)||`{}`)[`${e}_${t}`]||null}catch{return null}},saveCode(e,t,n){try{let r=JSON.parse(localStorage.getItem(tt.USER_CODE)||`{}`);r[`${e}_${t}`]=n,localStorage.setItem(tt.USER_CODE,JSON.stringify(r))}catch(e){console.error(`Failed to save code to localStorage`,e)}},getProblemStatus(){try{return JSON.parse(localStorage.getItem(tt.PROBLEM_STATUS)||`{}`)}catch{return{}}},setProblemStatus(e,t){try{let n=this.getProblemStatus();n[e]={status:t,updatedAt:new Date().toISOString()},localStorage.setItem(tt.PROBLEM_STATUS,JSON.stringify(n))}catch(e){console.error(`Failed to save problem status`,e)}},getBookmarks(){try{return JSON.parse(localStorage.getItem(tt.BOOKMARKS)||`[]`)}catch{return[]}},toggleBookmark(e){try{let t=new Set(this.getBookmarks());t.has(e)?t.delete(e):t.add(e);let n=Array.from(t);return localStorage.setItem(tt.BOOKMARKS,JSON.stringify(n)),n}catch{return[]}},getNotes(e){try{return JSON.parse(localStorage.getItem(tt.NOTES)||`{}`)[e]||``}catch{return``}},saveNotes(e,t){try{let n=JSON.parse(localStorage.getItem(tt.NOTES)||`{}`);n[e]=t,localStorage.setItem(tt.NOTES,JSON.stringify(n))}catch(e){console.error(`Failed to save notes`,e)}},getSettings(){try{return JSON.parse(localStorage.getItem(tt.SETTINGS)||JSON.stringify({geminiApiKey:``,theme:`vs-dark`,fontSize:14,autoRunTests:!0,enableSounds:!0}))}catch{return{geminiApiKey:``,theme:`vs-dark`,fontSize:14,autoRunTests:!0,enableSounds:!0}}},saveSettings(e){try{localStorage.setItem(tt.SETTINGS,JSON.stringify(e))}catch(e){console.error(`Failed to save settings`,e)}}},rt={async getHint(e,t,n=1){let r=nt.getSettings();if(r.geminiApiKey)try{return await this.callGeminiAPI(r.geminiApiKey,`You are an expert DSA interview coach. The user is solving "${e.title}" (${e.category}).
Description: ${e.description}
Current User Code:
\`\`\`
${t}
\`\`\`
Give a concise Tier ${n} (out of 3) Socratic hint.
Tier 1: High-level intuition / thought process without mentioning data structures.
Tier 2: The key data structure, pattern or invariant to use.
Tier 3: Concrete algorithmic steps without giving away the full code.
Respond with a clear, inspiring hint.`)}catch(e){console.warn(`Gemini API call failed, falling back to local engine`,e)}let i=e.hints||[];return`💡 **Hint Level ${n} (Intuition & Guidance)**:\n\n${i[Math.min(n-1,i.length-1)]||`Consider the problem constraints and what time complexity target is expected.`}\n\n*Target Complexity Goal: ${e.optimalComplexity?.time} Time, ${e.optimalComplexity?.space} Space.*`},async analyzeComplexity(e,t,n=`javascript`){let r=nt.getSettings();if(r.geminiApiKey)try{return await this.callGeminiAPI(r.geminiApiKey,`Analyze the Big-O Time Complexity and Space Complexity of the following ${n} code for problem "${e.title}":
\`\`\`${n}
${t}
\`\`\`
Provide:
1. Estimated Time Complexity (e.g. O(n), O(n^2), O(n log n)) and why.
2. Estimated Space Complexity (e.g. O(1), O(n)) and why.
3. Compare with the optimal solution target (${e.optimalComplexity?.time||`optimal`}, ${e.optimalComplexity?.space||`optimal`}).
4. Bottleneck suggestions if any.`)}catch(e){console.warn(`Gemini API failed, using local analysis`,e)}let i=t.toLowerCase(),a=`O(n)`,o=`O(1)`,s=[],c=(i.match(/for\s*\(|while\s*\(/g)||[]).length;return i.includes(`.sort(`)||i.includes(`sorted(`)?(a=`O(n log n)`,s.push(`Sorting operation detected: adds O(n log n) baseline.`)):c>=2?(a=`O(n²)`,s.push(`Nested loop structure detected: potential quadratic O(n²) bottleneck.`)):(i.includes(`low <= high`)||i.includes(`math.floor`)&&i.includes(`mid`))&&(a=`O(log n)`,s.push(`Binary search division detected: logarithmic O(log n).`)),(i.includes(`new set(`)||i.includes(`new map(`)||i.includes(`{}`)||i.includes(`[]`)||i.includes(`new array`))&&(o=`O(n)`,s.push(`Dynamic auxiliary storage (Set/Map/Array) allocated.`)),`### 📊 Big-O Complexity Assessment

- **Estimated Time Complexity:** \`${a}\`
- **Estimated Space Complexity:** \`${o}\`
- **Optimal Target:** \`${e.optimalComplexity?.time||`O(n)`} Time\` | \`${e.optimalComplexity?.space||`O(1)`} Space\`

**Key Observations:**
${s.map(e=>`- ${e}`).join(`
`)||`- Single pass linear iteration.`}

${a===e.optimalComplexity?.time?`✅ **Matches optimal time complexity!**`:`💡 *Tip: Consider whether a Hash Table or Two Pointers can reduce this to `+e.optimalComplexity?.time+`.*`}`},async diagnoseFailure(e,t,n){let r=nt.getSettings();if(r.geminiApiKey)try{return await this.callGeminiAPI(r.geminiApiKey,`The user's code for "${e.title}" failed testing.
Code:
\`\`\`
${t}
\`\`\`
Test Results:
${JSON.stringify(n,null,2)}
Explain the bug or failing edge case clearly and suggest how to fix it.`)}catch(e){console.warn(`Gemini API failed, using local analysis`,e)}let i=(n.results||[]).filter(e=>!e.passed);if(i.length===0)return`🎉 **All test cases passed successfully!** Your code logic is solid.`;let a=i[0],o=`### 🐛 Debug & Edge Case Analysis

`;return o+=`Failed on **Test Case #${a.testIndex}**:\n`,o+=`- **Input:** \`${JSON.stringify(a.input)}\`\n`,o+=`- **Expected Output:** \`${JSON.stringify(a.expected)}\`\n`,o+=`- **Your Output:** \`${JSON.stringify(a.actual)}\`\n\n`,a.error?o+=`**Runtime Error Encountered:**\n\`${a.error}\`\n\n*Check for undefined variables, out-of-bounds indexing, or missing return statements.*`:a.actual===void 0?o+="*Your function returned `undefined`. Did you forget to `return` the result from the function?*":(o+=`**Common Pitfalls to Check:**
`,o+=`1. Off-by-one errors in loop boundaries or pointer increments.
`,o+=`2. Handling duplicate elements or edge cases like empty inputs.
`,o+=`3. Return value type mismatch (e.g. returning index vs value, or boolean vs array).`),o},async getOptimalExplanation(e){return`### 💡 Optimal Solution Strategy for "${e.title}"

**Optimal Complexity:**
- Time: \`${e.optimalComplexity?.time}\`
- Space: \`${e.optimalComplexity?.space}\`

**Implementation:**
\`\`\`javascript
${e.optimalSolution||`// Solution reference available`}
\`\`\`

**Why this works:**
- Avoids redundant computations using optimal data structure selection.
- Satisfies all constraint boundaries with minimal overhead.`},async callGeminiAPI(e,t){let n=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${e}`,r=await fetch(n,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({contents:[{parts:[{text:t}]}]})});if(!r.ok){let e=await r.json().catch(()=>({}));throw Error(e.error?.message||`HTTP ${r.status}`)}return(await r.json()).candidates?.[0]?.content?.parts?.[0]?.text||`No response generated.`}};function it({problem:e,currentCode:t,language:n,testResults:r,onOpenSettings:i}){let[a,o]=(0,_.useState)(1),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(!1);return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,padding:`16px`,gap:`16px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:`12px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(He,{size:18,color:`#38bdf8`}),(0,M.jsx)(`span`,{style:{fontSize:`14px`,fontWeight:600,color:`#f8fafc`},children:`AI DSA Coach`})]}),(0,M.jsxs)(`button`,{onClick:i,style:{background:`none`,border:`none`,color:`#38bdf8`,fontSize:`12px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,M.jsx)(Te,{size:13}),(0,M.jsx)(`span`,{children:`Configure Gemini API`})]})]}),(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`8px`},children:[(0,M.jsxs)(`button`,{onClick:async()=>{c(!0);try{let n=await rt.getHint(e,t,a);u({type:`hint`,title:`Socratic Hint (Tier ${a}/3)`,content:n}),o(e=>e%3+1)}catch(e){u({type:`error`,title:`Error`,content:e.message})}finally{c(!1)}},disabled:s,className:`btn-secondary`,style:{padding:`8px 10px`,fontSize:`12px`,justifyContent:`flex-start`},children:[(0,M.jsx)(De,{size:15,color:`#facc15`}),(0,M.jsxs)(`span`,{children:[`Get Hint (Tier `,a,`)`]})]}),(0,M.jsxs)(`button`,{onClick:async()=>{c(!0);try{let r=await rt.analyzeComplexity(e,t,n);u({type:`complexity`,title:`Big-O Complexity Evaluation`,content:r})}catch(e){u({type:`error`,title:`Error`,content:e.message})}finally{c(!1)}},disabled:s,className:`btn-secondary`,style:{padding:`8px 10px`,fontSize:`12px`,justifyContent:`flex-start`},children:[(0,M.jsx)(ve,{size:15,color:`#38bdf8`}),(0,M.jsx)(`span`,{children:`Analyze Big-O`})]}),(0,M.jsxs)(`button`,{onClick:async()=>{c(!0);try{let n=await rt.diagnoseFailure(e,t,r||{});u({type:`bug`,title:`Bug & Edge Case Diagnosis`,content:n})}catch(e){u({type:`error`,title:`Error`,content:e.message})}finally{c(!1)}},disabled:s,className:`btn-secondary`,style:{padding:`8px 10px`,fontSize:`12px`,justifyContent:`flex-start`},children:[(0,M.jsx)(k,{size:15,color:`#f87171`}),(0,M.jsx)(`span`,{children:`Debug / Edge Cases`})]}),(0,M.jsxs)(`button`,{onClick:async()=>{c(!0);try{let t=await rt.getOptimalExplanation(e);u({type:`optimal`,title:`Optimal Approach & Explanation`,content:t})}catch(e){u({type:`error`,title:`Error`,content:e.message})}finally{c(!1)}},disabled:s,className:`btn-secondary`,style:{padding:`8px 10px`,fontSize:`12px`,justifyContent:`flex-start`},children:[(0,M.jsx)(se,{size:15,color:`#4ade80`}),(0,M.jsx)(`span`,{children:`Optimal Walkthrough`})]})]})]}),(0,M.jsx)(`div`,{style:{flex:1,backgroundColor:`#0a0e17`,border:`1px solid #1e293b`,borderRadius:`10px`,padding:`16px`,overflowY:`auto`,position:`relative`},children:s?(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,gap:`12px`,color:`#94a3b8`},children:[(0,M.jsx)(ke,{size:24,className:`pulse-glow`,style:{animation:`spin 1s linear infinite`}}),(0,M.jsx)(`span`,{style:{fontSize:`13px`},children:`AI Tutor is analyzing your code...`})]}):l?(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`12px`,borderBottom:`1px solid #1e293b`,paddingBottom:`8px`},children:[(0,M.jsx)(`span`,{style:{fontSize:`13px`,fontWeight:600,color:`#38bdf8`},children:l.title}),(0,M.jsxs)(`button`,{onClick:()=>{l?.content&&(navigator.clipboard.writeText(l.content),m(!0),setTimeout(()=>m(!1),2e3))},style:{background:`none`,border:`none`,color:`#94a3b8`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`4px`,fontSize:`11px`},children:[p?(0,M.jsx)(ce,{size:13,color:`#10b981`}):(0,M.jsx)(_e,{size:13}),(0,M.jsx)(`span`,{children:p?`Copied`:`Copy`})]})]}),(0,M.jsx)(`div`,{style:{fontSize:`13px`,color:`#cbd5e1`,lineHeight:`1.6`,whiteSpace:`pre-wrap`},children:l.content})]}):(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,height:`100%`,textAlign:`center`,color:`#64748b`,gap:`8px`},children:[(0,M.jsx)(He,{size:28,color:`#334155`}),(0,M.jsx)(`div`,{style:{fontSize:`14px`,fontWeight:500,color:`#94a3b8`},children:`How can the AI Coach help you?`}),(0,M.jsx)(`p`,{style:{fontSize:`12px`,maxWidth:`300px`},children:`Click any quick action above for progressive hints, complexity analysis, or failing test breakdown.`})]})}),(0,M.jsxs)(`form`,{onSubmit:async n=>{if(n.preventDefault(),!(!d.trim()||s)){c(!0);try{let n=`User question regarding DSA problem "${e.title}":\n"${d}"\nCurrent user code:\n\`\`\`\n${t}\n\`\`\`\nAnswer clearly, concisely, and helpfully.`,r=await rt.callGeminiAPI(`local_or_key`,n).catch(async()=>`🤖 **AI Tutor Response to:** *"${d}"*\n\nFor **${e.title}**, focus on using the optimal invariants. Check that your state transitions correctly handle edge cases (e.g. empty or 1-element inputs, duplicate keys).`);u({type:`chat`,title:`Tutor Response`,content:r}),f(``)}finally{c(!1)}}},style:{display:`flex`,gap:`8px`},children:[(0,M.jsx)(`input`,{type:`text`,placeholder:`Ask AI a specific question about your approach...`,value:d,onChange:e=>f(e.target.value),disabled:s,style:{flex:1,backgroundColor:`#0d131f`,border:`1px solid #273549`,borderRadius:`8px`,padding:`8px 12px`,color:`#f8fafc`,fontSize:`13px`,outline:`none`}}),(0,M.jsx)(`button`,{type:`submit`,className:`btn-primary`,disabled:!d.trim()||s,style:{padding:`8px 14px`},children:(0,M.jsx)(Fe,{size:14})})]})]})}function at({problem:e,currentCode:t,language:n}){let[r,i]=(0,_.useState)(0),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(1e3),[l,u]=(0,_.useState)(0),d=e?.testCases?.[l]||e?.testCases?.[0],f=ot(e?.id,d?.input);(0,_.useEffect)(()=>{i(0),o(!1)},[e?.id,l]),(0,_.useEffect)(()=>{let e=null;return a&&(e=setInterval(()=>{i(e=>e<f.length-1?e+1:(o(!1),e))},s)),()=>clearInterval(e)},[a,f.length,s]);let p=f[r]||f[0]||{title:`Initial State`,explanation:`Ready to start step-by-step algorithm dry run.`,variables:{},array:[],pointers:{},map:{},stack:[]};return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,padding:`16px`,gap:`16px`,backgroundColor:`#0f172a`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,borderBottom:`1px solid #1e293b`,paddingBottom:`12px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`div`,{style:{backgroundColor:`rgba(56, 189, 248, 0.15)`,padding:`6px`,borderRadius:`8px`,color:`#38bdf8`},children:(0,M.jsx)(xe,{size:18})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{style:{fontSize:`15px`,fontWeight:600,color:`#f8fafc`},children:`Step-by-Step Algorithm Visualizer`}),(0,M.jsxs)(`span`,{style:{fontSize:`12px`,color:`#94a3b8`},children:[`Dry run execution on `,e?.title]})]})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`span`,{style:{fontSize:`12px`,color:`#94a3b8`},children:`Test Input:`}),(0,M.jsx)(`select`,{value:l,onChange:e=>u(Number(e.target.value)),style:{backgroundColor:`#090d16`,border:`1px solid #273549`,borderRadius:`6px`,padding:`4px 8px`,color:`#f8fafc`,fontSize:`12px`,outline:`none`,cursor:`pointer`},children:e?.testCases?.map((e,t)=>(0,M.jsxs)(`option`,{value:t,children:[`Case `,t+1,`: `,JSON.stringify(e.input).slice(0,20)]},t))})]})]}),(0,M.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:`16px`,overflowY:`auto`},children:[(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,border:`1px solid #273549`,borderRadius:`10px`,padding:`14px 16px`,boxShadow:`0 4px 12px rgba(0, 0, 0, 0.2)`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginBottom:`6px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsxs)(`span`,{style:{backgroundColor:`#38bdf8`,color:`#090d16`,fontWeight:700,fontSize:`11px`,padding:`2px 8px`,borderRadius:`4px`},children:[`STEP `,r+1,` / `,f.length]}),(0,M.jsx)(`span`,{style:{fontSize:`13px`,fontWeight:600,color:`#f8fafc`},children:p.title})]}),p.isComplete&&(0,M.jsx)(`span`,{style:{fontSize:`12px`,color:`#10b981`,fontWeight:600},children:`🎉 Solved`})]}),(0,M.jsx)(`p`,{style:{fontSize:`13px`,color:`#cbd5e1`,lineHeight:`1.5`},children:p.explanation})]}),p.array&&p.array.length>0&&(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`10px`,padding:`16px`,display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,M.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:600,color:`#94a3b8`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:`Array Memory State & Pointers`}),(0,M.jsx)(`div`,{style:{display:`flex`,gap:`8px`,justifyContent:`center`,alignItems:`flex-end`,padding:`20px 0`,overflowX:`auto`},children:p.array.map((e,t)=>{let n=p.pointers?.left===t,r=p.pointers?.right===t,i=p.pointers?.mid===t,a=p.pointers?.curr===t,o=p.highlightIndices?.includes(t),s=p.matchedIndices?.includes(t);return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`6px`},children:[(0,M.jsxs)(`div`,{style:{height:`20px`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[n&&(0,M.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,color:`#38bdf8`},children:`L ↓`}),r&&(0,M.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,color:`#f43f5e`},children:`R ↓`}),i&&(0,M.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,color:`#facc15`},children:`MID ↓`}),a&&(0,M.jsx)(`span`,{style:{fontSize:`11px`,fontWeight:700,color:`#a78bfa`},children:`i ↓`})]}),(0,M.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`15px`,fontWeight:700,backgroundColor:s?`rgba(16, 185, 129, 0.25)`:o?`rgba(56, 189, 248, 0.2)`:`#1e293b`,border:s?`2px solid #10b981`:o?`2px solid #38bdf8`:`1px solid #334155`,color:s?`#10b981`:`#f8fafc`,transition:`all 0.2s ease`,boxShadow:s?`0 0 12px rgba(16, 185, 129, 0.4)`:`none`},children:e}),(0,M.jsxs)(`div`,{style:{fontSize:`11px`,color:`#64748b`},children:[`[`,t,`]`]})]},t)})})]}),(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:p.stack?.length>0?`1fr 1fr`:`1fr`,gap:`12px`},children:[p.map&&(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`10px`,padding:`14px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`10px`,fontSize:`12px`,fontWeight:600,color:`#94a3b8`},children:[(0,M.jsx)(ye,{size:14,color:`#38bdf8`}),(0,M.jsx)(`span`,{children:`Hash Table / Seen Set`})]}),(0,M.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`},children:Object.keys(p.map).length===0?(0,M.jsx)(`span`,{style:{fontSize:`12px`,color:`#475569`,fontStyle:`italic`},children:`Empty (no keys recorded yet)`}):Object.entries(p.map).map(([e,t])=>(0,M.jsxs)(`div`,{style:{backgroundColor:`#162032`,border:`1px solid #273549`,padding:`4px 10px`,borderRadius:`6px`,fontSize:`12px`,display:`flex`,gap:`6px`},children:[(0,M.jsxs)(`span`,{style:{color:`#38bdf8`,fontWeight:600},children:[e,`:`]}),(0,M.jsx)(`span`,{style:{color:`#34d399`},children:String(t)})]},e))})]}),p.stack&&p.stack.length>0&&(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`10px`,padding:`14px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,marginBottom:`10px`,fontSize:`12px`,fontWeight:600,color:`#94a3b8`},children:[(0,M.jsx)(Ee,{size:14,color:`#fb923c`}),(0,M.jsx)(`span`,{children:`Call Stack / Monotonic Stack`})]}),(0,M.jsx)(`div`,{style:{display:`flex`,gap:`6px`,alignItems:`center`},children:p.stack.map((e,t)=>(0,M.jsx)(`div`,{style:{backgroundColor:`#1e293b`,border:`1px solid #fb923c`,padding:`4px 10px`,borderRadius:`6px`,fontSize:`12px`,color:`#fb923c`,fontWeight:600},children:e},t))})]})]}),p.variables&&Object.keys(p.variables).length>0&&(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`10px`,padding:`14px`},children:[(0,M.jsx)(`div`,{style:{fontSize:`12px`,fontWeight:600,color:`#94a3b8`,marginBottom:`8px`,textTransform:`uppercase`,letterSpacing:`0.05em`},children:`Local Variables & Invariants`}),(0,M.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(120px, 1fr))`,gap:`8px`},children:Object.entries(p.variables).map(([e,t])=>(0,M.jsxs)(`div`,{style:{backgroundColor:`#131b2c`,padding:`8px 10px`,borderRadius:`6px`,border:`1px solid #233044`},children:[(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`#94a3b8`,fontFamily:`JetBrains Mono, monospace`},children:e}),(0,M.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:700,color:`#f8fafc`,fontFamily:`JetBrains Mono, monospace`},children:typeof t==`object`?JSON.stringify(t):String(t)})]},e))})]})]}),(0,M.jsxs)(`div`,{style:{borderTop:`1px solid #1e293b`,paddingTop:`14px`,display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,M.jsx)(`input`,{type:`range`,min:0,max:Math.max(f.length-1,0),value:r,onChange:e=>{i(Number(e.target.value)),o(!1)},style:{width:`100%`,accentColor:`#38bdf8`,cursor:`pointer`}}),(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`6px`},children:[(0,M.jsx)(`button`,{onClick:()=>{i(0),o(!1)},className:`btn-secondary`,style:{padding:`6px 10px`},title:`Reset to beginning`,children:(0,M.jsx)(Ne,{size:14})}),(0,M.jsx)(`button`,{onClick:()=>{i(e=>Math.max(e-1,0)),o(!1)},disabled:r===0,className:`btn-secondary`,style:{padding:`6px 10px`},title:`Previous Step`,children:(0,M.jsx)(Be,{size:14})}),(0,M.jsxs)(`button`,{onClick:()=>o(!a),className:`btn-primary`,style:{padding:`6px 14px`},children:[a?(0,M.jsx)(je,{size:14}):(0,M.jsx)(Me,{size:14}),(0,M.jsx)(`span`,{children:a?`Pause`:`Play`})]}),(0,M.jsx)(`button`,{onClick:()=>{i(e=>Math.min(e+1,f.length-1)),o(!1)},disabled:r===f.length-1,className:`btn-secondary`,style:{padding:`6px 10px`},title:`Next Step`,children:(0,M.jsx)(Ve,{size:14})})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(`span`,{style:{fontSize:`12px`,color:`#94a3b8`},children:`Speed:`}),[{label:`0.5x`,val:1800},{label:`1x`,val:1e3},{label:`2x`,val:500}].map(e=>(0,M.jsx)(`button`,{onClick:()=>c(e.val),className:`btn-secondary`,style:{padding:`3px 8px`,fontSize:`11px`,backgroundColor:s===e.val?`#1e293b`:`transparent`,borderColor:s===e.val?`#38bdf8`:`#273549`,color:s===e.val?`#38bdf8`:`#94a3b8`},children:e.label},e.label))]})]})]})]})}function ot(e,t){if(!t)return[{title:`Ready`,explanation:`Select a test case to visualize.`,variables:{},array:[]}];if(e===`two-sum`){let e=t[0]||[2,7,11,15],n=t[1]===void 0?9:t[1],r={},i=[{title:`Initialize Map`,explanation:`Target is ${n}. Initialized empty HashMap to store seen numbers and their indices.`,array:e,pointers:{},map:{},variables:{target:n,i:0}}];for(let t=0;t<e.length;t++){let a=e[t],o=n-a;if(r[o]!==void 0)return i.push({title:`Match Found at index ${t}!`,explanation:`At index ${t}, num = ${a}. Complement needed is ${n} - ${a} = ${o}. Found ${o} in HashMap at index ${r[o]}! Solution: [${r[o]}, ${t}].`,array:e,pointers:{curr:t},highlightIndices:[r[o],t],matchedIndices:[r[o],t],map:{...r},variables:{target:n,i:t,num:a,complement:o,solution:`[${r[o]}, ${t}]`},isComplete:!0}),i;r[a]=t,i.push({title:`Inspect Index ${t}`,explanation:`num = ${a}. Complement needed = ${n} - ${a} = ${o}. Not found in map. Added ${a} -> index ${t} into map.`,array:e,pointers:{curr:t},highlightIndices:[t],map:{...r},variables:{target:n,i:t,num:a,complement:o}})}return i}if(e===`contains-duplicate`){let e=t[0]||[1,2,3,1],n={},r=[{title:`Initialize HashSet`,explanation:`Initialized empty HashSet to track seen elements in O(1) time.`,array:e,pointers:{},map:{},variables:{length:e.length}}];for(let t=0;t<e.length;t++){let i=e[t];if(n[i])return r.push({title:`Duplicate Found: ${i}!`,explanation:`Element ${i} is already present in the HashSet! Return true immediately.`,array:e,pointers:{curr:t},matchedIndices:[t],map:{...n},variables:{duplicate:i,result:!0},isComplete:!0}),r;n[i]=`seen`,r.push({title:`Added ${i} to Set`,explanation:`Element ${i} not seen yet. Inserted into HashSet. Moving to next index.`,array:e,pointers:{curr:t},highlightIndices:[t],map:{...n},variables:{current:i,i:t}})}return r.push({title:`No Duplicates Found`,explanation:`Iterated through entire array without finding duplicates. Returned false.`,array:e,map:{...n},variables:{result:!1},isComplete:!0}),r}if(e===`trapping-rain-water`){let e=t[0]||[0,1,0,2,1,0,1,3,2,1,2,1],n=0,r=e.length-1,i=e[n],a=e[r],o=0,s=[{title:`Initialize Two Pointers`,explanation:`Set left = 0 (h = ${e[n]}) and right = ${r} (h = ${e[r]}). leftMax = ${i}, rightMax = ${a}, trapped water = 0.`,array:e,pointers:{left:n,right:r},variables:{left:n,right:r,leftMax:i,rightMax:a,water:0}}];for(;n<r;)if(i<a){n++,i=Math.max(i,e[n]);let t=i-e[n];o+=t,s.push({title:`Advance Left to [${n}]`,explanation:`leftMax (${i}) < rightMax (${a}). Advanced left pointer. Current height = ${e[n]}. Trapped at this bar = ${t}. Total water = ${o}.`,array:e,pointers:{left:n,right:r},highlightIndices:[n],variables:{left:n,right:r,leftMax:i,rightMax:a,water:o}})}else{r--,a=Math.max(a,e[r]);let t=a-e[r];o+=t,s.push({title:`Advance Right to [${r}]`,explanation:`rightMax (${a}) <= leftMax (${i}). Advanced right pointer. Current height = ${e[r]}. Trapped at this bar = ${t}. Total water = ${o}.`,array:e,pointers:{left:n,right:r},highlightIndices:[r],variables:{left:n,right:r,leftMax:i,rightMax:a,water:o}})}return s.push({title:`Pointers Met: Complete`,explanation:`Both pointers met. Total water trapped = ${o} units.`,array:e,pointers:{left:n,right:r},variables:{totalWater:o},isComplete:!0}),s}if(e===`binary-search`){let e=t[0]||[-1,0,3,5,9,12],n=t[1]===void 0?9:t[1],r=0,i=e.length-1,a=[{title:`Initial Search Space`,explanation:`Looking for target ${n} across entire sorted array [0 ... ${i}].`,array:e,pointers:{left:r,right:i},variables:{low:r,high:i,target:n}}];for(;r<=i;){let t=Math.floor((r+i)/2);if(e[t]===n)return a.push({title:`Target Found at index ${t}!`,explanation:`nums[mid] (${e[t]}) == target (${n}). Target found at index ${t}!`,array:e,pointers:{left:r,right:i,mid:t},matchedIndices:[t],variables:{mid:t,target:n,resultIndex:t},isComplete:!0}),a;e[t]<n?(a.push({title:`Search Right Half`,explanation:`nums[mid] (${e[t]}) < target (${n}). Discard left half. Set low = ${t+1}.`,array:e,pointers:{left:r,right:i,mid:t},highlightIndices:[t],variables:{low:t+1,high:i,mid:t,target:n}}),r=t+1):(a.push({title:`Search Left Half`,explanation:`nums[mid] (${e[t]}) > target (${n}). Discard right half. Set high = ${t-1}.`,array:e,pointers:{left:r,right:i,mid:t},highlightIndices:[t],variables:{low:r,high:t-1,mid:t,target:n}}),i=t-1)}return a.push({title:`Target Not Found`,explanation:`Search space exhausted. Target does not exist in array (return -1).`,array:e,variables:{result:-1},isComplete:!0}),a}return[{title:`Execution Start`,explanation:`Loaded test case input: ${JSON.stringify(t)}.`,array:Array.isArray(t[0])?t[0]:[t[0]],variables:{input:JSON.stringify(t)}},{title:`Optimal Execution Step`,explanation:`Simulating state transitions and invariant checking for optimal solution.`,array:Array.isArray(t[0])?t[0]:[t[0]],variables:{status:`Processing`}},{title:`Execution Complete`,explanation:`All test conditions evaluated successfully against optimal Big-O bounds.`,array:Array.isArray(t[0])?t[0]:[t[0]],variables:{status:`Done`},isComplete:!0}]}function st({problem:e,currentCode:t,language:n,testResults:r,onOpenSettings:i,isSolved:a}){let[o,s]=(0,_.useState)(`description`),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{e&&l(nt.getNotes(e.id))},[e]),(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,backgroundColor:`#0f172a`,borderRight:`1px solid #1e293b`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,backgroundColor:`#0b0f19`,borderBottom:`1px solid #1e293b`,padding:`0 12px`,height:`42px`,gap:`4px`},children:[(0,M.jsxs)(`button`,{onClick:()=>s(`description`),style:{background:`none`,border:`none`,color:o===`description`?`#38bdf8`:`#94a3b8`,borderBottom:o===`description`?`2px solid #38bdf8`:`2px solid transparent`,padding:`8px 12px`,fontSize:`13px`,fontWeight:500,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(Se,{size:15}),(0,M.jsx)(`span`,{children:`Description`})]}),(0,M.jsxs)(`button`,{onClick:()=>s(`ai-tutor`),style:{background:`none`,border:`none`,color:o===`ai-tutor`?`#38bdf8`:`#94a3b8`,borderBottom:o===`ai-tutor`?`2px solid #38bdf8`:`2px solid transparent`,padding:`8px 12px`,fontSize:`13px`,fontWeight:500,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(He,{size:15,color:`#38bdf8`}),(0,M.jsx)(`span`,{children:`AI Coach`})]}),(0,M.jsxs)(`button`,{onClick:()=>s(`visualizer`),style:{background:`none`,border:`none`,color:o===`visualizer`?`#38bdf8`:`#94a3b8`,borderBottom:o===`visualizer`?`2px solid #38bdf8`:`2px solid transparent`,padding:`8px 12px`,fontSize:`13px`,fontWeight:500,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(xe,{size:15,color:`#38bdf8`}),(0,M.jsx)(`span`,{children:`Visualizer`})]}),(0,M.jsxs)(`button`,{onClick:()=>s(`solution`),style:{background:`none`,border:`none`,color:o===`solution`?`#38bdf8`:`#94a3b8`,borderBottom:o===`solution`?`2px solid #38bdf8`:`2px solid transparent`,padding:`8px 12px`,fontSize:`13px`,fontWeight:500,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(De,{size:15}),(0,M.jsx)(`span`,{children:`Optimal Solution`})]}),(0,M.jsxs)(`button`,{onClick:()=>s(`notes`),style:{background:`none`,border:`none`,color:o===`notes`?`#38bdf8`:`#94a3b8`,borderBottom:o===`notes`?`2px solid #38bdf8`:`2px solid transparent`,padding:`8px 12px`,fontSize:`13px`,fontWeight:500,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(Ue,{size:15}),(0,M.jsx)(`span`,{children:`Notes`})]})]}),(0,M.jsxs)(`div`,{style:{flex:1,overflowY:`auto`},children:[o===`description`&&(0,M.jsxs)(`div`,{style:{padding:`24px`,display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,marginBottom:`8px`},children:[(0,M.jsx)(`h1`,{style:{fontSize:`20px`,fontWeight:700,color:`#f8fafc`},children:e.title}),a&&(0,M.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`4px`,backgroundColor:`rgba(16, 185, 129, 0.15)`,color:`#10b981`,border:`1px solid rgba(16, 185, 129, 0.3)`,padding:`2px 8px`,borderRadius:`12px`,fontSize:`11px`,fontWeight:600},children:[(0,M.jsx)(j,{size:12}),` Solved`]})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,alignItems:`center`},children:[(0,M.jsx)(`span`,{className:`badge-${e.difficulty.toLowerCase()}`,style:{fontSize:`12px`,padding:`2px 8px`,borderRadius:`6px`,fontWeight:600},children:e.difficulty}),(0,M.jsxs)(`span`,{style:{fontSize:`12px`,padding:`2px 8px`,borderRadius:`6px`,backgroundColor:`#1e293b`,color:`#94a3b8`,border:`1px solid #334155`},children:[`Acceptance: `,e.acceptance]}),e.optimalComplexity&&(0,M.jsxs)(`span`,{style:{fontSize:`12px`,padding:`2px 8px`,borderRadius:`6px`,backgroundColor:`rgba(56, 189, 248, 0.1)`,color:`#38bdf8`,border:`1px solid rgba(56, 189, 248, 0.25)`,display:`inline-flex`,alignItems:`center`,gap:`4px`},children:[(0,M.jsx)(qe,{size:12}),` Target: `,e.optimalComplexity.time,` Time | `,e.optimalComplexity.space,` Space`]})]})]}),(0,M.jsx)(`div`,{style:{color:`#cbd5e1`,fontSize:`14px`,lineHeight:`1.6`,whiteSpace:`pre-line`},children:e.description}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{style:{fontSize:`15px`,fontWeight:600,color:`#e2e8f0`,marginBottom:`12px`},children:`Examples`}),(0,M.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:e.examples?.map((e,t)=>(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`8px`,padding:`12px 16px`,fontSize:`13px`,fontFamily:`JetBrains Mono, monospace`},children:[(0,M.jsxs)(`div`,{style:{fontWeight:600,color:`#94a3b8`,marginBottom:`6px`},children:[`Example `,t+1,`:`]}),(0,M.jsxs)(`div`,{style:{color:`#cbd5e1`,marginBottom:`4px`},children:[(0,M.jsx)(`strong`,{style:{color:`#94a3b8`},children:`Input:`}),` `,e.input]}),(0,M.jsxs)(`div`,{style:{color:`#cbd5e1`,marginBottom:e.explanation?`4px`:`0`},children:[(0,M.jsx)(`strong`,{style:{color:`#94a3b8`},children:`Output:`}),` `,(0,M.jsx)(`span`,{style:{color:`#38bdf8`},children:e.output})]}),e.explanation&&(0,M.jsxs)(`div`,{style:{color:`#94a3b8`,fontStyle:`italic`,marginTop:`4px`},children:[`Explanation: `,e.explanation]})]},t))})]}),e.constraints&&(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{style:{fontSize:`15px`,fontWeight:600,color:`#e2e8f0`,marginBottom:`8px`},children:`Constraints:`}),(0,M.jsx)(`ul`,{style:{paddingLeft:`20px`,color:`#94a3b8`,fontSize:`13px`,lineHeight:`1.8`},children:e.constraints.map((e,t)=>(0,M.jsx)(`li`,{children:(0,M.jsx)(`code`,{style:{color:`#cbd5e1`,backgroundColor:`#1e293b`,padding:`2px 5px`,borderRadius:`4px`},children:e})},t))})]})]}),o===`ai-tutor`&&(0,M.jsx)(it,{problem:e,currentCode:t,language:n,testResults:r,onOpenSettings:i}),o===`visualizer`&&(0,M.jsx)(at,{problem:e,currentCode:t,language:n}),o===`solution`&&(0,M.jsxs)(`div`,{style:{padding:`24px`,display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,M.jsx)(`h2`,{style:{fontSize:`18px`,fontWeight:600,color:`#f8fafc`},children:`Optimal Solution Reference`}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,backgroundColor:`#090d16`,padding:`12px 16px`,borderRadius:`8px`,border:`1px solid #1e293b`},children:[(0,M.jsxs)(`span`,{style:{color:`#38bdf8`,fontSize:`13px`},children:[(0,M.jsx)(`strong`,{children:`Optimal Time:`}),` `,e.optimalComplexity?.time]}),(0,M.jsxs)(`span`,{style:{color:`#a78bfa`,fontSize:`13px`},children:[(0,M.jsx)(`strong`,{children:`Optimal Space:`}),` `,e.optimalComplexity?.space]})]}),(0,M.jsx)(`pre`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`8px`,padding:`16px`,overflowX:`auto`,color:`#34d399`,fontSize:`13px`,lineHeight:`1.5`},children:(0,M.jsx)(`code`,{children:e.optimalSolution||`// Solution reference`})})]}),o===`notes`&&(0,M.jsxs)(`div`,{style:{padding:`24px`,display:`flex`,flexDirection:`column`,height:`100%`,gap:`12px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,M.jsx)(`h2`,{style:{fontSize:`16px`,fontWeight:600,color:`#f8fafc`},children:`Personal Notes`}),u&&(0,M.jsx)(`span`,{style:{fontSize:`12px`,color:`#10b981`},children:`Saved!`})]}),(0,M.jsx)(`textarea`,{placeholder:`Write your notes, edge cases, formulas, or takeaways for this problem...`,value:c,onChange:t=>{let n=t.target.value;l(n),nt.saveNotes(e.id,n),d(!0),setTimeout(()=>d(!1),2e3)},style:{flex:1,minHeight:`350px`,backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`8px`,padding:`16px`,color:`#f8fafc`,fontSize:`14px`,lineHeight:`1.6`,outline:`none`,resize:`none`}})]})]})]})}function ct(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function lt(e){if(Array.isArray(e))return e}function ut(e,t,n){return(t=yt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ft(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function mt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?pt(Object(n),!0).forEach(function(t){ut(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ht(e,t){if(e==null)return{};var n,r,i=gt(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function gt(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _t(e,t){return lt(e)||dt(e,t)||bt(e,t)||ft()}function vt(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function yt(e){var t=vt(e,`string`);return typeof t==`symbol`?t:t+``}function bt(e,t){if(e){if(typeof e==`string`)return ct(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(e,t):void 0}}function xt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ct(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?St(Object(n),!0).forEach(function(t){xt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function wt(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}}function Tt(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}function Et(e){return{}.toString.call(e).includes(`Object`)}function Dt(e){return!Object.keys(e).length}function Ot(e){return typeof e==`function`}function kt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function At(e,t){return Et(t)||Ft(`changeType`),Object.keys(t).some(function(t){return!kt(e,t)})&&Ft(`changeField`),t}function jt(e){Ot(e)||Ft(`selectorType`)}function Mt(e){Ot(e)||Et(e)||Ft(`handlerType`),Et(e)&&Object.values(e).some(function(e){return!Ot(e)})&&Ft(`handlersType`)}function Nt(e){e||Ft(`initialIsRequired`),Et(e)||Ft(`initialType`),Dt(e)&&Ft(`initialContent`)}function Pt(e,t){throw Error(e[t]||e.default)}var Ft=Tt(Pt)({initialIsRequired:`initial state is required`,initialType:`initial state should be an object`,initialContent:`initial state shouldn't be an empty object`,handlerType:`handler should be an object or a function`,handlersType:`all handlers should be a functions`,selectorType:`selector should be a function`,changeType:`provided value of changes should be an object`,changeField:`it seams you want to change a field in the state which is not specified in the "initial" state`,default:"an unknown error accured in `state-local` package"}),It={changes:At,selector:jt,handler:Mt,initial:Nt};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};It.initial(e),It.handler(t);var n={current:e},r=Tt(Bt)(n,t),i=Tt(zt)(n),a=Tt(It.changes)(e),o=Tt(Rt)(n);function s(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(e){return e};return It.selector(e),e(n.current)}function c(e){wt(r,i,a,o)(e)}return[s,c]}function Rt(e,t){return Ot(t)?t(e.current):t}function zt(e,t){return e.current=Ct(Ct({},e.current),t),t}function Bt(e,t,n){return Ot(t)?t(e.current):Object.keys(n).forEach(function(n){return t[n]?.call(t,e.current[n])}),n}var Vt={create:Lt},Ht={paths:{vs:`https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs`}};function Ut(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}function Wt(e){return{}.toString.call(e).includes(`Object`)}function Gt(e){return e||Yt(`configIsRequired`),Wt(e)||Yt(`configType`),e.urls?(Kt(),{paths:{vs:e.urls.monacoBase}}):e}function Kt(){console.warn(Jt.deprecation)}function qt(e,t){throw Error(e[t]||e.default)}var Jt={configIsRequired:`the configuration object is required`,configType:`the configuration object should be an object`,default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Yt=Ut(qt)(Jt),Xt={config:Gt},Zt=function(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}};function Qt(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Qt(e[n],t[n]))}),mt(mt({},e),t)}var $t={type:`cancelation`,msg:`operation is manually canceled`};function en(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r($t):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n}var tn=[`monaco`],nn=_t(Vt.create({config:Ht,isInitialized:!1,resolve:null,reject:null,monaco:null}),2),rn=nn[0],an=nn[1];function on(e){var t=Xt.config(e),n=t.monaco,r=ht(t,tn);an(function(e){return{config:Qt(e.config,r),monaco:n}})}function sn(){var e=rn(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(an({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),en(mn);if(window.monaco&&window.monaco.editor)return fn(window.monaco),e.resolve(window.monaco),en(mn);Zt(cn,un)(dn)}return en(mn)}function cn(e){return document.body.appendChild(e)}function ln(e){var t=document.createElement(`script`);return e&&(t.src=e),t}function un(e){var t=rn(function(e){return{config:e.config,reject:e.reject}}),n=ln(`${t.config.paths.vs}/loader.js`);return n.onload=function(){return e()},n.onerror=t.reject,n}function dn(){var e=rn(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t([`vs/editor/editor.main`],function(t){var n=t.m||t;fn(n),e.resolve(n)},function(t){e.reject(t)})}function fn(e){rn().monaco||an({monaco:e})}function pn(){return rn(function(e){return e.monaco})}var mn=new Promise(function(e,t){return an({resolve:e,reject:t})}),hn={config:on,init:sn,__getMonacoInstance:pn},gn={wrapper:{display:`flex`,position:`relative`,textAlign:`initial`},fullWidth:{width:`100%`},hide:{display:`none`}},_n={container:{display:`flex`,height:`100%`,width:`100%`,justifyContent:`center`,alignItems:`center`}};function vn({children:e}){return _.createElement(`div`,{style:_n.container},e)}var yn=vn;function bn({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:a,wrapperProps:o}){return _.createElement(`section`,{style:{...gn.wrapper,width:e,height:t},...o},!n&&_.createElement(yn,null,r),_.createElement(`div`,{ref:i,style:{...gn.fullWidth,...!n&&gn.hide},className:a}))}var xn=(0,_.memo)(bn);function Sn(e){(0,_.useEffect)(e,[])}var Cn=Sn;function wn(e,t,n=!0){let r=(0,_.useRef)(!0);(0,_.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)}var P=wn;function Tn(){}function En(e,t,n,r){return Dn(e,r)||On(e,t,n,r)}function Dn(e,t){return e.editor.getModel(kn(e,t))}function On(e,t,n,r){return e.editor.createModel(t,n,r?kn(e,r):void 0)}function kn(e,t){return e.Uri.parse(t)}function An({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:c=!1,theme:l=`light`,loading:u=`Loading...`,options:d={},height:f=`100%`,width:p=`100%`,className:m,wrapperProps:h={},beforeMount:g=Tn,onMount:v=Tn}){let[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!0),C=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useRef)(null),E=(0,_.useRef)(v),D=(0,_.useRef)(g),O=(0,_.useRef)(!1);Cn(()=>{let e=hn.init();return e.then(e=>(w.current=e)&&S(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>C.current?ne():e.cancel()}),P(()=>{if(C.current&&w.current){let t=C.current.getOriginalEditor(),i=En(w.current,e||``,r||n||`text`,a||``);i!==t.getModel()&&t.setModel(i)}},[a],y),P(()=>{if(C.current&&w.current){let e=C.current.getModifiedEditor(),r=En(w.current,t||``,i||n||`text`,o||``);r!==e.getModel()&&e.setModel(r)}},[o],y),P(()=>{let e=C.current.getModifiedEditor();e.getOption(w.current.editor.EditorOption.readOnly)?e.setValue(t||``):t!==e.getValue()&&(e.executeEdits(``,[{range:e.getModel().getFullModelRange(),text:t||``,forceMoveMarkers:!0}]),e.pushUndoStop())},[t],y),P(()=>{C.current?.getModel()?.original.setValue(e||``)},[e],y),P(()=>{let{original:e,modified:t}=C.current.getModel();w.current.editor.setModelLanguage(e,r||n||`text`),w.current.editor.setModelLanguage(t,i||n||`text`)},[n,r,i],y),P(()=>{w.current?.editor.setTheme(l)},[l],y),P(()=>{C.current?.updateOptions(d)},[d],y);let ee=(0,_.useCallback)(()=>{if(!w.current)return;D.current(w.current);let s=En(w.current,e||``,r||n||`text`,a||``),c=En(w.current,t||``,i||n||`text`,o||``);C.current?.setModel({original:s,modified:c})},[n,t,i,e,r,a,o]),te=(0,_.useCallback)(()=>{!O.current&&T.current&&(C.current=w.current.editor.createDiffEditor(T.current,{automaticLayout:!0,...d}),ee(),w.current?.editor.setTheme(l),b(!0),O.current=!0)},[d,l,ee]);(0,_.useEffect)(()=>{y&&E.current(C.current,w.current)},[y]),(0,_.useEffect)(()=>{!x&&!y&&te()},[x,y,te]);function ne(){let e=C.current?.getModel();s||e?.original?.dispose(),c||e?.modified?.dispose(),C.current?.dispose()}return _.createElement(xn,{width:p,height:f,isEditorReady:y,loading:u,_ref:T,className:m,wrapperProps:h})}(0,_.memo)(An);function jn(e){let t=(0,_.useRef)();return(0,_.useEffect)(()=>{t.current=e},[e]),t.current}var Mn=jn,Nn=new Map;function Pn({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:a,theme:o=`light`,line:s,loading:c=`Loading...`,options:l={},overrideServices:u={},saveViewState:d=!0,keepCurrentModel:f=!1,width:p=`100%`,height:m=`100%`,className:h,wrapperProps:g={},beforeMount:v=Tn,onMount:y=Tn,onChange:b,onValidate:x=Tn}){let[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(!0),E=(0,_.useRef)(null),D=(0,_.useRef)(null),O=(0,_.useRef)(null),ee=(0,_.useRef)(y),te=(0,_.useRef)(v),ne=(0,_.useRef)(),re=(0,_.useRef)(r),ie=Mn(a),ae=(0,_.useRef)(!1),oe=(0,_.useRef)(!1);Cn(()=>{let e=hn.init();return e.then(e=>(E.current=e)&&T(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>D.current?A():e.cancel()}),P(()=>{let o=En(E.current,e||r||``,t||i||``,a||n||``);o!==D.current?.getModel()&&(d&&Nn.set(ie,D.current?.saveViewState()),D.current?.setModel(o),d&&D.current?.restoreViewState(Nn.get(a)))},[a],S),P(()=>{D.current?.updateOptions(l)},[l],S),P(()=>{!D.current||r===void 0||(D.current.getOption(E.current.editor.EditorOption.readOnly)?D.current.setValue(r):r!==D.current.getValue()&&(oe.current=!0,D.current.executeEdits(``,[{range:D.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),D.current.pushUndoStop(),oe.current=!1))},[r],S),P(()=>{let e=D.current?.getModel();e&&i&&E.current?.editor.setModelLanguage(e,i)},[i],S),P(()=>{s!==void 0&&D.current?.revealLine(s)},[s],S),P(()=>{E.current?.editor.setTheme(o)},[o],S);let k=(0,_.useCallback)(()=>{if(!(!O.current||!E.current)&&!ae.current){te.current(E.current);let c=a||n,f=En(E.current,r||e||``,t||i||``,c||``);D.current=E.current?.editor.create(O.current,{model:f,automaticLayout:!0,...l},u),d&&D.current.restoreViewState(Nn.get(c)),E.current.editor.setTheme(o),s!==void 0&&D.current.revealLine(s),C(!0),ae.current=!0}},[e,t,n,r,i,a,l,u,d,o,s]);(0,_.useEffect)(()=>{S&&ee.current(D.current,E.current)},[S]),(0,_.useEffect)(()=>{!w&&!S&&k()},[w,S,k]),re.current=r,(0,_.useEffect)(()=>{S&&b&&(ne.current?.dispose(),ne.current=D.current?.onDidChangeModelContent(e=>{oe.current||b(D.current.getValue(),e)}))},[S,b]),(0,_.useEffect)(()=>{if(S){let e=E.current.editor.onDidChangeMarkers(e=>{let t=D.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=E.current.editor.getModelMarkers({resource:t});x?.(e)}});return()=>{e?.dispose()}}return()=>{}},[S,x]);function A(){ne.current?.dispose(),f?d&&Nn.set(a,D.current.saveViewState()):D.current.getModel()?.dispose(),D.current.dispose()}return _.createElement(xn,{width:p,height:m,isEditorReady:S,loading:c,_ref:O,className:h,wrapperProps:g})}var Fn=(0,_.memo)(Pn),In={javascript:{label:`JavaScript`,monacoLang:`javascript`},python:{label:`Python 3`,monacoLang:`python`},cpp:{label:`C++`,monacoLang:`cpp`},java:{label:`Java`,monacoLang:`java`}};function Ln({code:e,onChange:t,language:n,onLanguageChange:r,onReset:i,onRun:a,onSubmit:o,isRunning:s,isSubmitting:c}){let l=(0,_.useRef)(null);return(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,backgroundColor:`#090d16`},children:[(0,M.jsxs)(`div`,{style:{height:`42px`,backgroundColor:`#0b0f19`,borderBottom:`1px solid #1e293b`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`0 12px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(he,{size:16,color:`#38bdf8`}),(0,M.jsx)(`select`,{value:n,onChange:e=>r(e.target.value),style:{backgroundColor:`#162032`,border:`1px solid #273549`,borderRadius:`6px`,padding:`4px 10px`,color:`#f8fafc`,fontSize:`13px`,outline:`none`,cursor:`pointer`},children:Object.entries(In).map(([e,t])=>(0,M.jsx)(`option`,{value:e,children:t.label},e))})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsxs)(`button`,{onClick:i,className:`btn-secondary`,style:{padding:`4px 10px`,fontSize:`12px`},title:`Reset code to original starter template`,children:[(0,M.jsx)(Ne,{size:13}),(0,M.jsx)(`span`,{children:`Reset`})]}),(0,M.jsxs)(`button`,{onClick:a,disabled:s||c,className:`btn-secondary`,style:{padding:`4px 12px`,fontSize:`12px`,color:`#38bdf8`,borderColor:`rgba(56, 189, 248, 0.4)`},title:`Run test cases (Ctrl + Enter)`,children:[(0,M.jsx)(Me,{size:13}),(0,M.jsx)(`span`,{children:s?`Running...`:`Run`})]}),(0,M.jsxs)(`button`,{onClick:o,disabled:s||c,className:`btn-success`,style:{padding:`4px 14px`,fontSize:`12px`},title:`Submit solution (Ctrl + Shift + Enter)`,children:[(0,M.jsx)(Fe,{size:13}),(0,M.jsx)(`span`,{children:c?`Evaluating...`:`Submit`})]})]})]}),(0,M.jsx)(`div`,{style:{flex:1,minHeight:0},children:(0,M.jsx)(Fn,{height:`100%`,language:In[n]?.monacoLang||`javascript`,value:e,theme:`vs-dark`,onChange:e=>t(e||``),onMount:(e,t)=>{l.current=e,e.addCommand(t.KeyMod.CtrlCmd|t.KeyCode.Enter,()=>{a()}),e.addCommand(t.KeyMod.CtrlCmd|t.KeyMod.Shift|t.KeyCode.Enter,()=>{o()})},options:{minimap:{enabled:!1},fontSize:14,fontFamily:`'JetBrains Mono', monospace`,lineNumbers:`on`,roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:!1,cursorStyle:`line`,automaticLayout:!0,tabSize:4,suggestOnTriggerCharacters:!0,quickSuggestions:!0,padding:{top:12,bottom:12}}})})]})}function Rn({testCases:e,testResults:t,isRunning:n}){let[r,i]=(0,_.useState)(0),[a,o]=(0,_.useState)(!1),s=t?.results?.[r],c=e[r]||e[0];return(0,M.jsxs)(`div`,{style:{borderTop:`1px solid #1e293b`,backgroundColor:`#0d131f`,display:`flex`,flexDirection:`column`,height:a?`38px`:`260px`,transition:`height 0.2s ease`},children:[(0,M.jsxs)(`div`,{style:{height:`38px`,padding:`0 12px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,backgroundColor:`#090d16`,borderBottom:a?`none`:`1px solid #1e293b`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(We,{size:15,color:`#94a3b8`}),(0,M.jsx)(`span`,{style:{fontSize:`13px`,fontWeight:600,color:`#f8fafc`},children:`Test Result`}),t&&(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginLeft:`12px`},children:[t.allPassed?(0,M.jsxs)(`span`,{style:{fontSize:`12px`,color:`#10b981`,fontWeight:600,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,M.jsx)(j,{size:14}),` Accepted (`,t.passedTests,`/`,t.totalTests,`)`]}):(0,M.jsxs)(`span`,{style:{fontSize:`12px`,color:`#ef4444`,fontWeight:600,display:`flex`,alignItems:`center`,gap:`4px`},children:[(0,M.jsx)(fe,{size:14}),` Wrong Answer (`,t.passedTests,`/`,t.totalTests,` Passed)`]}),(0,M.jsxs)(`span`,{style:{fontSize:`12px`,color:`#64748b`},children:[`in `,t.totalTimeMs,` ms`]})]})]}),(0,M.jsx)(`button`,{onClick:()=>o(!a),style:{background:`none`,border:`none`,color:`#94a3b8`,cursor:`pointer`,display:`flex`,padding:`4px`},children:a?(0,M.jsx)(de,{size:16}):(0,M.jsx)(le,{size:16})})]}),!a&&(0,M.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,overflow:`hidden`},children:[(0,M.jsx)(`div`,{style:{display:`flex`,gap:`6px`,padding:`8px 12px`,backgroundColor:`#0d131f`,borderBottom:`1px solid #1e293b`},children:e.map((e,n)=>{let a=t?.results?.[n],o=r===n;return(0,M.jsxs)(`button`,{onClick:()=>i(n),className:`btn-secondary`,style:{padding:`4px 10px`,fontSize:`12px`,backgroundColor:o?`#1e293b`:`transparent`,borderColor:o?`#38bdf8`:`#273549`,color:o?`#38bdf8`:`#94a3b8`,gap:`6px`},children:[a&&(a.passed?(0,M.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,backgroundColor:`#10b981`}}):(0,M.jsx)(`span`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,backgroundColor:`#ef4444`}})),(0,M.jsxs)(`span`,{children:[`Case `,n+1]})]},n)})}),(0,M.jsxs)(`div`,{style:{flex:1,padding:`12px`,overflowY:`auto`,display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`#64748b`,textTransform:`uppercase`,marginBottom:`4px`},children:`Input`}),(0,M.jsx)(`pre`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`6px`,padding:`8px 10px`,fontSize:`12px`,color:`#f8fafc`,fontFamily:`JetBrains Mono, monospace`},children:JSON.stringify(c?.input)})]}),(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`10px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`#64748b`,textTransform:`uppercase`,marginBottom:`4px`},children:`Expected Output`}),(0,M.jsx)(`pre`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`6px`,padding:`8px 10px`,fontSize:`12px`,color:`#34d399`,fontFamily:`JetBrains Mono, monospace`},children:JSON.stringify(c?.expected)})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`#64748b`,textTransform:`uppercase`,marginBottom:`4px`},children:`Your Output`}),(0,M.jsx)(`pre`,{style:{backgroundColor:`#090d16`,border:`1px solid ${s?s.passed?`#10b981`:`#ef4444`:`#1e293b`}`,borderRadius:`6px`,padding:`8px 10px`,fontSize:`12px`,color:s?.passed?`#34d399`:`#f87171`,fontFamily:`JetBrains Mono, monospace`},children:s?JSON.stringify(s.actual):`Not run yet`})]})]}),s?.error&&(0,M.jsxs)(`div`,{style:{backgroundColor:`rgba(239, 68, 68, 0.1)`,border:`1px solid rgba(239, 68, 68, 0.3)`,borderRadius:`6px`,padding:`8px 12px`,color:`#f87171`,fontSize:`12px`},children:[(0,M.jsx)(`strong`,{children:`Runtime Error:`}),` `,s.error]}),s?.logs&&s.logs.length>0&&(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`#64748b`,textTransform:`uppercase`,marginBottom:`4px`},children:`Stdout Logs`}),(0,M.jsx)(`pre`,{style:{backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`6px`,padding:`8px 10px`,fontSize:`12px`,color:`#94a3b8`,fontFamily:`JetBrains Mono, monospace`},children:s.logs.join(`
`)})]})]})]})]})}function zn(e,t){if(e===t)return!0;if(e==null||t==null)return!1;if(typeof e!=typeof t)return String(e)===String(t);if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;if(e.every((e,n)=>zn(e,t[n])))return!0;if(e.length>0&&Array.isArray(e[0])&&Array.isArray(t[0])){let n=e=>e.map(e=>Array.isArray(e)?[...e].sort().join(`,`):String(e)).sort(),r=n(e),i=n(t);return r.every((e,t)=>e===i[t])}return!1}if(typeof e==`object`){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(n=>r.includes(n)&&zn(e[n],t[n]))}return!1}var Bn={async runCode(e,t,n=`javascript`,r=``){if(n===`java`||n===`python`)try{let i=await fetch(`/api/run`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({language:n,code:e,testCases:t,problemId:r})});if(i.ok){let e=await i.json();if(e&&e.results)return e}}catch(e){console.warn(`Backend runner fetch failed, falling back`,e)}return n===`cpp`?{allPassed:!1,totalTests:t.length,passedTests:0,totalTimeMs:0,results:t.map((e,t)=>({testIndex:t+1,input:e.input,expected:e.expected,actual:void 0,passed:!1,executionTimeMs:0,logs:[],error:`C++ Compiler (g++) is not detected on your Windows system. To run C++ locally, install MinGW/GCC, or use Java, Python, or JavaScript.`}))}:this.runJavaScript(e,t)},async runJavaScript(e,t){let n=[],r=0,i=!0;for(let a=0;a<t.length;a++){let o=t[a],s=performance.now(),c=[];try{let t={log:(...e)=>{c.push(e.map(e=>typeof e==`object`?JSON.stringify(e):String(e)).join(` `))}},l=`
          ${e}
          
          const allFuncs = [
            typeof containsDuplicate !== 'undefined' ? containsDuplicate : null,
            typeof isAnagram !== 'undefined' ? isAnagram : null,
            typeof twoSum !== 'undefined' ? twoSum : null,
            typeof groupAnagrams !== 'undefined' ? groupAnagrams : null,
            typeof topKFrequent !== 'undefined' ? topKFrequent : null,
            typeof isPalindrome !== 'undefined' ? isPalindrome : null,
            typeof threeSum !== 'undefined' ? threeSum : null,
            typeof maxArea !== 'undefined' ? maxArea : null,
            typeof maxProfit !== 'undefined' ? maxProfit : null,
            typeof lengthOfLongestSubstring !== 'undefined' ? lengthOfLongestSubstring : null,
            typeof isValid !== 'undefined' ? isValid : null,
            typeof search !== 'undefined' ? search : null,
            typeof reverseList !== 'undefined' ? reverseList : null,
            typeof invertTree !== 'undefined' ? invertTree : null,
            typeof numIslands !== 'undefined' ? numIslands : null,
            typeof climbStairs !== 'undefined' ? climbStairs : null,
            typeof coinChange !== 'undefined' ? coinChange : null,
            typeof singleNumber !== 'undefined' ? singleNumber : null
          ].filter(Boolean);

          const targetFunc = allFuncs[0] || (typeof Solution !== 'undefined' ? new Solution() : null);
          return targetFunc;
        `,u=Function(`console`,l)(t);if(!u)throw Error(`No valid solution function or Solution class found.`);let d=JSON.parse(JSON.stringify(o.input)),f;if(typeof u==`function`)f=u(...d);else if(typeof u==`object`){let e=Object.getOwnPropertyNames(Object.getPrototypeOf(u)).filter(e=>e!==`constructor`);if(e.length>0)f=u[e[0]](...d);else throw Error(`Solution class has no methods`)}let p=performance.now(),m=Math.round((p-s)*100)/100;r+=m;let h=zn(f,o.expected);h||(i=!1),n.push({testIndex:a+1,input:o.input,expected:o.expected,actual:f,passed:h,executionTimeMs:m,logs:c,error:null})}catch(e){let t=performance.now();i=!1,n.push({testIndex:a+1,input:o.input,expected:o.expected,actual:void 0,passed:!1,executionTimeMs:Math.round((t-s)*100)/100,logs:c,error:e.message||String(e)})}}return{allPassed:i,totalTests:t.length,passedTests:n.filter(e=>e.passed).length,totalTimeMs:Math.round(r*100)/100,results:n}}};function Vn({problem:e,problemStatus:t,onStatusChange:n,onOpenSettings:r}){let[i,a]=(0,_.useState)(`java`),[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(e){let t=nt.getCode(e.id,i);s(t||e.starterCode?.[i]||e.starterCode?.javascript||``),l(null)}},[e,i]);let m=t=>{s(t),e&&nt.saveCode(e.id,i,t)},h=()=>{if(e&&window.confirm(`Reset code to starter template? Your current changes will be overwritten.`)){let t=e.starterCode?.[i]||e.starterCode?.javascript||``;s(t),nt.saveCode(e.id,i,t)}},g=async()=>{if(e){d(!0);try{let t=await Bn.runCode(o,e.testCases||[],i,e.id);l(t)}finally{d(!1)}}},v=async()=>{if(e){p(!0);try{let t=await Bn.runCode(o,e.testCases||[],i,e.id);if(l(t),t.allPassed){n(e.id,`solved`);try{et({particleCount:100,spread:70,origin:{y:.6}})}catch{}}else n(e.id,`attempted`)}finally{p(!1)}}},y=t[e.id]?.status===`solved`;return(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,height:`calc(100vh - 60px)`,overflow:`hidden`},children:[(0,M.jsx)(`div`,{style:{height:`100%`,overflow:`hidden`},children:(0,M.jsx)(st,{problem:e,currentCode:o,language:i,testResults:c,onOpenSettings:r,isSolved:y})}),(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,height:`100%`,overflow:`hidden`},children:[(0,M.jsx)(`div`,{style:{flex:1,minHeight:0},children:(0,M.jsx)(Ln,{code:o,onChange:m,language:i,onLanguageChange:a,onReset:h,onRun:g,onSubmit:v,isRunning:u,isSubmitting:f})}),(0,M.jsx)(Rn,{testCases:e.testCases||[],testResults:c,isRunning:u})]})]})}var Hn=[{id:`fundamentals`,title:`Java Fundamentals`,icon:`Blocks`,color:`#38bdf8`,chapters:[{id:`intro-to-java`,title:`Introduction to Java 21`,content:`## What is Java?

Java is a **high-level, class-based, object-oriented** programming language designed to have as few implementation dependencies as possible. Java 21 is the latest **Long-Term Support (LTS)** release.

### Key Features of Java 21
- **Platform Independent**: Write Once, Run Anywhere (WORA) via JVM
- **Strongly Typed**: Every variable must be declared with a type
- **Garbage Collected**: Automatic memory management
- **Multi-threaded**: Built-in support for concurrent programming
- **Virtual Threads (Project Loom)**: Lightweight threads for massive concurrency
- **Pattern Matching**: Modern, expressive conditional logic
- **Record Classes**: Concise data carriers
- **Sealed Classes**: Restricted class hierarchies

### Your First Java Program

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java 21!");
    }
}
\`\`\`

### Java 21 — Simplified Main (Preview)

\`\`\`java
// JEP 463: Implicitly Declared Classes (Preview in 21)
void main() {
    System.out.println("Hello, simplified Java!");
}
\`\`\`

### How Java Compiles & Runs

\`\`\`
+------------------+         +-------------------+         +------------------+
|  Source Code     |  javac  |  Bytecode         |   JVM   |  Native Machine  |
|  (HelloWorld.java)------>  |  (HelloWorld.class)-------> |  Code (Execution)|
+------------------+         +-------------------+         +------------------+
\`\`\`

### JVM Memory Architecture Illustration

\`\`\`
+-------------------------------------------------------------------------------+
|                             JVM RUNTIME DATA AREAS                            |
+-------------------------------------------------------------------------------+
|                                                                               |
|  +---------------------------------+   +-----------------------------------+  |
|  |           HEAP MEMORY           |   |           THREAD STACKS           |  |
|  | (Shared by all threads)         |   | (Per-thread local variables)      |  |
|  |                                 |   |                                   |  |
|  |  +---------------------------+  |   |  +-----------------------------+  |  |
|  |  | Young Gen (Eden, S0, S1)  |  |   |  | Stack Frame (main method)   |  |  |
|  |  +---------------------------+  |   |  |  - Primitives: age = 25     |  |  |
|  |  | Old / Tenured Generation  |  |   |  |  - Object Ref: str -----------------> [ "Hello" Object ]
|  |  +---------------------------+  |   |  +-----------------------------+  |  |
|  +---------------------------------+   +-----------------------------------+  |
|                                                                               |
|  +---------------------------------+   +-----------------------------------+  |
|  |            METASPACE            |   |       NATIVE METHOD STACK         |  |
|  | (Class definitions, methods,    |   | (C/C++ native execution JNI)      |  |
|  |  static variables & bytecodes)  |   |                                   |  |
|  +---------------------------------+   +-----------------------------------+  |
+-------------------------------------------------------------------------------+
\`\`\`

### Key JVM Components:
1. **ClassLoader**: Loads \`.class\` bytecode into the JVM Metaspace.
2. **JIT Compiler (Just-In-Time)**: Converts frequently executed bytecode ("hot spots") directly into native machine code at runtime for high performance.
3. **Garbage Collector (GC)**: Automatically reclaims unreachable objects from the Heap (Generational GC: ZGC, G1GC).`},{id:`variables-data-types`,title:`Variables & Data Types`,content:`## Variables & Data Types

Java is **statically typed** — every variable must have a declared type at compile time.

### Primitive Types

| Type | Size | Range | Default |
|------|------|-------|---------|
| \`byte\` | 1 byte | -128 to 127 | 0 |
| \`short\` | 2 bytes | -32,768 to 32,767 | 0 |
| \`int\` | 4 bytes | -2³¹ to 2³¹-1 | 0 |
| \`long\` | 8 bytes | -2⁶³ to 2⁶³-1 | 0L |
| \`float\` | 4 bytes | ~7 decimal digits | 0.0f |
| \`double\` | 8 bytes | ~15 decimal digits | 0.0d |
| \`char\` | 2 bytes | Unicode (0 to 65535) | '\\u0000' |
| \`boolean\` | 1 bit | true / false | false |

### Variable Declaration & Initialization

\`\`\`java
// Declaration
int age;
String name;

// Declaration + Initialization
int count = 42;
double pi = 3.14159;
boolean isActive = true;
char grade = 'A';
long bigNumber = 9_999_999_999L; // underscores for readability

// Type Inference with var (Java 10+)
var message = "Hello";     // inferred as String
var numbers = List.of(1, 2, 3); // inferred as List<Integer>
\`\`\`

### Wrapper Classes (Autoboxing & Unboxing)

\`\`\`java
// Autoboxing: primitive → wrapper
Integer wrapped = 42;          // int → Integer
Double d = 3.14;               // double → Double

// Unboxing: wrapper → primitive
int unwrapped = wrapped;       // Integer → int

// Useful methods
int parsed = Integer.parseInt("123");
String str = Integer.toString(42);
int max = Integer.MAX_VALUE;   // 2147483647
\`\`\`

### Constants

\`\`\`java
final double PI = 3.14159265358979;
final String APP_NAME = "MyApp";
// PI = 3.14; // ❌ Compile error — cannot reassign final
\`\`\`

### Type Casting

\`\`\`java
// Implicit (widening) — safe, no data loss
int i = 100;
long l = i;        // int → long
double d = l;      // long → double

// Explicit (narrowing) — possible data loss
double x = 9.78;
int y = (int) x;   // 9 (decimal truncated)
\`\`\``},{id:`operators`,title:`Operators & Expressions`,content:`## Operators & Expressions

### Arithmetic Operators

\`\`\`java
int a = 10, b = 3;
System.out.println(a + b);   // 13 (addition)
System.out.println(a - b);   // 7  (subtraction)
System.out.println(a * b);   // 30 (multiplication)
System.out.println(a / b);   // 3  (integer division!)
System.out.println(a % b);   // 1  (modulus/remainder)

// For decimal division, cast to double
System.out.println((double) a / b); // 3.333...
\`\`\`

### Comparison Operators

\`\`\`java
System.out.println(5 == 5);  // true
System.out.println(5 != 3);  // true
System.out.println(5 > 3);   // true
System.out.println(5 < 3);   // false
System.out.println(5 >= 5);  // true
System.out.println(5 <= 3);  // false
\`\`\`

### Logical Operators

\`\`\`java
boolean x = true, y = false;
System.out.println(x && y);  // false (AND — short-circuit)
System.out.println(x || y);  // true  (OR — short-circuit)
System.out.println(!x);      // false (NOT)

// Short-circuit behavior:
// In (a && b), if a is false, b is never evaluated
// In (a || b), if a is true, b is never evaluated
\`\`\`

### Bitwise Operators

\`\`\`java
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary

System.out.println(a & b);   // 1  (0001) — AND
System.out.println(a | b);   // 7  (0111) — OR
System.out.println(a ^ b);   // 6  (0110) — XOR
System.out.println(~a);      // -6 — NOT (inverts all bits)
System.out.println(a << 1);  // 10 (1010) — left shift
System.out.println(a >> 1);  // 2  (0010) — right shift
System.out.println(a >>> 1); // 2 — unsigned right shift
\`\`\`

### Ternary Operator

\`\`\`java
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
// status = "Adult"
\`\`\`

### instanceof with Pattern Matching (Java 16+)

\`\`\`java
Object obj = "Hello";

// Old way
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// New way — pattern matching
if (obj instanceof String s) {
    System.out.println(s.length()); // s is auto-cast
}
\`\`\``},{id:`control-flow`,title:`Control Flow`,content:`## Control Flow Statements

### if / else if / else

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
\`\`\`

### Enhanced Switch Expression (Java 14+)

\`\`\`java
// Classic switch statement
String day = "MONDAY";
switch (day) {
    case "MONDAY":
    case "TUESDAY":
        System.out.println("Start of week");
        break;
    case "FRIDAY":
        System.out.println("TGIF!");
        break;
    default:
        System.out.println("Midweek");
}

// Modern switch EXPRESSION (Java 14+)
String result = switch (day) {
    case "MONDAY", "TUESDAY" -> "Start of week";
    case "FRIDAY" -> "TGIF!";
    case "SATURDAY", "SUNDAY" -> "Weekend!";
    default -> "Midweek";
};

// Switch with blocks and yield
int numLetters = switch (day) {
    case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
    case "TUESDAY" -> 7;
    default -> {
        String trimmed = day.strip();
        yield trimmed.length();
    }
};
\`\`\`

### for Loop

\`\`\`java
// Classic for loop
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// Enhanced for-each loop
int[] numbers = {10, 20, 30, 40};
for (int num : numbers) {
    System.out.println(num);
}
\`\`\`

### while / do-while

\`\`\`java
// while — checks condition BEFORE each iteration
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// do-while — executes at LEAST once
int j = 10;
do {
    System.out.println(j);
    j++;
} while (j < 5); // prints 10, then exits
\`\`\`

### break & continue

\`\`\`java
// break — exit the loop entirely
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.print(i + " "); // 0 1 2 3 4
}

// continue — skip current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    System.out.print(i + " "); // 1 3 5 7 9
}

// Labeled break (for nested loops)
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 2) break outer;
        System.out.print(i + "," + j + " ");
    }
}
\`\`\``},{id:`arrays`,title:`Arrays`,content:`## Arrays

Arrays are **fixed-size**, **zero-indexed** containers that hold elements of the same type.

### Declaration & Initialization

\`\`\`java
// Declaration
int[] numbers;
String[] names;

// Initialization
numbers = new int[5]; // [0, 0, 0, 0, 0]
names = new String[3]; // [null, null, null]

// Inline initialization
int[] primes = {2, 3, 5, 7, 11};
String[] fruits = {"apple", "banana", "cherry"};

// Accessing elements
System.out.println(primes[0]);    // 2
System.out.println(primes.length); // 5

primes[4] = 13; // modify element
\`\`\`

### Iterating Arrays

\`\`\`java
int[] arr = {10, 20, 30, 40, 50};

// Classic for loop
for (int i = 0; i < arr.length; i++) {
    System.out.println("arr[" + i + "] = " + arr[i]);
}

// Enhanced for-each
for (int num : arr) {
    System.out.println(num);
}
\`\`\`

### Multi-Dimensional Arrays

\`\`\`java
// 2D Array (matrix)
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[1][2]); // 6 (row 1, col 2)
System.out.println(matrix.length);    // 3 rows
System.out.println(matrix[0].length); // 3 cols

// Iterating 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
\`\`\`

### java.util.Arrays Utility

\`\`\`java
import java.util.Arrays;

int[] arr = {5, 2, 8, 1, 9};

Arrays.sort(arr);                    // [1, 2, 5, 8, 9]
System.out.println(Arrays.toString(arr));

int idx = Arrays.binarySearch(arr, 5); // 2
int[] copy = Arrays.copyOf(arr, 3);    // [1, 2, 5]
Arrays.fill(arr, 0);                   // [0, 0, 0, 0, 0]

boolean eq = Arrays.equals(
    new int[]{1, 2}, new int[]{1, 2}
); // true
\`\`\``},{id:`strings`,title:`Strings & Text Blocks`,content:`## Strings in Java

Strings are **immutable** objects. Every modification creates a **new** String.

### String Constant Pool vs Heap Memory

\`\`\`
+-------------------------------------------------------------------------+
|                              HEAP MEMORY                                |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   |                      STRING CONSTANT POOL                       |   |
|   |                                                                 |   |
|   |                     [ "Hello" Object ] <---------+              |   |
|   |                     [ "Hi" Object ]              |              |   |
|   +--------------------------------------------------|--------------+   |
|                                                      |                  |
|   [ String Object s2 ] ----------------------------->| (heap reference) |
+------------------------------------------------------|------------------+
                                                       |
STACK FRAME:                                           |
  s1 (ref) --------------------------------------------+
  s3 (ref) --------------------------------------------+ (points to exact same "Hello")
\`\`\`

- **String Literals ('Hello')**: Stored in the **String Constant Pool** inside the JVM Heap to save memory. Reused across identical literals.
- **'new String("Hello")'**: Explicitly allocates a **new object** on the heap, bypassing pool reuse.

### Creating Strings

\`\`\`java
String s1 = "Hello";          // String literal (pooled)
String s2 = new String("Hi"); // new object on heap
String s3 = "Hello";          // same pool reference as s1

System.out.println(s1 == s3);      // true (same pool ref)
System.out.println(s1 == s2);      // false (different objects)
System.out.println(s1.equals(s2)); // Use .equals() for content!
\`\`\`

### Essential String Methods

\`\`\`java
String s = "Hello, World!";

s.length();             // 13
s.charAt(0);            // 'H'
s.indexOf("World");     // 7
s.substring(7);         // "World!"
s.substring(0, 5);      // "Hello"
s.toLowerCase();        // "hello, world!"
s.toUpperCase();        // "HELLO, WORLD!"
s.trim();               // removes leading/trailing whitespace
s.strip();              // (Java 11+) Unicode-aware trim
s.contains("World");    // true
s.startsWith("Hello");  // true
s.endsWith("!");        // true
s.replace("World", "Java"); // "Hello, Java!"
s.split(", ");          // ["Hello", "World!"]
s.toCharArray();        // char[] {'H','e','l',...}
s.isEmpty();            // false
s.isBlank();            // false (Java 11+, checks whitespace)
\`\`\`

### String Formatting

\`\`\`java
// String.format()
String msg = String.format("Name: %s, Age: %d", "Karthik", 25);

// formatted() method (Java 15+)
String msg2 = "Score: %.2f%%".formatted(98.567);
// "Score: 98.57%"
\`\`\`

### Text Blocks (Java 15+)

\`\`\`java
// Multi-line strings with proper indentation
String json = """
        {
            "name": "Karthik",
            "age": 25,
            "skills": ["Java", "DSA"]
        }
        """;

String html = """
        <html>
            <body>
                <h1>Hello</h1>
            </body>
        </html>
        """;
\`\`\`

### StringBuilder (Mutable Strings)

\`\`\`java
// Use StringBuilder for repeated string modifications
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.insert(5, ",");     // "Hello, World"
sb.reverse();          // "dlroW ,olleH"
sb.delete(0, 6);       // ",olleH"

String result = sb.toString();

// Efficient string concatenation in loops:
StringBuilder builder = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    builder.append(i).append(", ");
}
String csv = builder.toString();
\`\`\``},{id:`methods`,title:`Methods`,content:`## Methods

Methods define reusable blocks of logic.

### Method Syntax

\`\`\`java
accessModifier returnType methodName(parameterList) {
    // method body
    return value; // if non-void
}
\`\`\`

### Examples

\`\`\`java
public class MathUtils {

    // Instance method
    public int add(int a, int b) {
        return a + b;
    }

    // Static method — called on class, not instance
    public static int multiply(int a, int b) {
        return a * b;
    }

    // void method — no return value
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Method with variable arguments (varargs)
    public int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }
}

// Usage:
MathUtils utils = new MathUtils();
utils.add(3, 5);                  // 8
MathUtils.multiply(4, 6);         // 24 (static)
utils.greet("Karthik");           // Hello, Karthik!
utils.sum(1, 2, 3, 4, 5);        // 15
\`\`\`

### Method Overloading

\`\`\`java
public class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

Calculator calc = new Calculator();
calc.add(1, 2);       // calls int version → 3
calc.add(1.5, 2.5);   // calls double version → 4.0
calc.add(1, 2, 3);    // calls 3-param version → 6
\`\`\`

### Pass by Value

\`\`\`java
// Java ALWAYS passes by value
// For primitives: copies the value
// For objects: copies the reference (not the object)

void changeValue(int x) {
    x = 100; // doesn't affect caller's variable
}

void changeArray(int[] arr) {
    arr[0] = 100; // DOES affect caller's array
    // because we modified the object the reference points to
}
\`\`\``}]},{id:`oop`,title:`Object-Oriented Programming`,icon:`Boxes`,color:`#a78bfa`,chapters:[{id:`classes-objects`,title:`Classes & Objects`,content:`## Classes & Objects

A **class** is a blueprint; an **object** is an instance of that class.

### Defining a Class

\`\`\`java
public class Student {
    // Fields (instance variables)
    private String name;
    private int age;
    private double gpa;

    // Constructor
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    // Default constructor
    public Student() {
        this("Unknown", 0, 0.0);
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public double getGpa() { return gpa; }

    // Method
    public boolean isHonorRoll() {
        return gpa >= 3.5;
    }

    // toString
    @Override
    public String toString() {
        return "Student{name='%s', age=%d, gpa=%.1f}"
            .formatted(name, age, gpa);
    }
}

// Creating objects
Student s1 = new Student("Karthik", 21, 3.8);
Student s2 = new Student(); // uses default constructor
System.out.println(s1);     // Student{name='Karthik', age=21, gpa=3.8}
System.out.println(s1.isHonorRoll()); // true
\`\`\`

### Access Modifiers

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| \`public\` | ✅ | ✅ | ✅ | ✅ |
| \`protected\` | ✅ | ✅ | ✅ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| \`private\` | ✅ | ❌ | ❌ | ❌ |

### Static Members

\`\`\`java
public class Counter {
    private static int count = 0; // shared across all instances

    public Counter() {
        count++;
    }

    public static int getCount() {
        return count;
    }
}

new Counter();
new Counter();
System.out.println(Counter.getCount()); // 2
\`\`\``},{id:`inheritance`,title:`Inheritance & Polymorphism`,content:`## Inheritance

Inheritance allows a class to **extend** another class, inheriting its fields and methods.

### Basic Inheritance

\`\`\`java
// Parent / Superclass
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println(name + " makes a sound");
    }

    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child / Subclass
public class Dog extends Animal {

    private String breed;

    public Dog(String name, String breed) {
        super(name); // call parent constructor
        this.breed = breed;
    }

    @Override // Method overriding
    public void speak() {
        System.out.println(name + " barks! Woof!");
    }

    // New method specific to Dog
    public void fetch() {
        System.out.println(name + " fetches the ball");
    }
}

Dog dog = new Dog("Buddy", "Labrador");
dog.speak();  // Buddy barks! Woof!  (overridden)
dog.eat();    // Buddy is eating     (inherited)
dog.fetch();  // Buddy fetches the ball
\`\`\`

## Polymorphism

The ability to treat objects of different classes through a **common interface**.

\`\`\`java
// Runtime polymorphism
Animal animal = new Dog("Rex", "Shepherd");
animal.speak(); // "Rex barks! Woof!" — actual type determines behavior
// animal.fetch(); // ❌ Compile error — reference type is Animal

// Using polymorphism with collections
List<Animal> animals = List.of(
    new Dog("Buddy", "Lab"),
    new Cat("Whiskers"),
    new Bird("Tweety")
);

for (Animal a : animals) {
    a.speak(); // each calls its own overridden version
}
\`\`\`

### The \`final\` Keyword

\`\`\`java
final class ImmutableClass { }
// Cannot be extended

class Parent {
    final void criticalMethod() { }
    // Cannot be overridden in child classes
}
\`\`\``},{id:`abstraction-interfaces`,title:`Abstract Classes & Interfaces`,content:`## Abstract Classes

An abstract class **cannot be instantiated** and may contain abstract methods (without body).

\`\`\`java
public abstract class Shape {
    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    // Abstract method — MUST be implemented by subclasses
    public abstract double area();
    public abstract double perimeter();

    // Concrete method — inherited as-is
    public String getColor() {
        return color;
    }
}

public class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }

    @Override
    public double perimeter() {
        return 2 * Math.PI * radius;
    }
}
\`\`\`

## Interfaces

Interfaces define a **contract** — what a class must do, not how.

\`\`\`java
public interface Flyable {
    void fly();                    // abstract method
    double getMaxAltitude();       // abstract method

    // Default method (Java 8+) — provides implementation
    default void land() {
        System.out.println("Landing safely...");
    }

    // Static method
    static boolean canFly(Object obj) {
        return obj instanceof Flyable;
    }

    // Private method (Java 9+) — helper for defaults
    private void logFlight() {
        System.out.println("Flight logged");
    }
}

public interface Swimmable {
    void swim();
}

// A class can implement MULTIPLE interfaces
public class Duck extends Animal implements Flyable, Swimmable {

    public Duck(String name) { super(name); }

    @Override
    public void fly() {
        System.out.println(name + " flaps wings and flies!");
    }

    @Override
    public double getMaxAltitude() { return 500.0; }

    @Override
    public void swim() {
        System.out.println(name + " paddles in water!");
    }
}
\`\`\`

### Abstract Class vs Interface

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Constructors | ✅ Yes | ❌ No |
| State (fields) | ✅ Instance fields | Constants only |
| Multiple | ❌ Single inheritance | ✅ Multiple implementation |
| Methods | Abstract + Concrete | Abstract + Default + Static |
| Use when | Shared state & base logic | Defining capabilities |`},{id:`records`,title:`Records (Java 16+)`,content:`## Record Classes

Records are **immutable data carriers** — Java auto-generates constructor, getters, \`equals()\`, \`hashCode()\`, and \`toString()\`.

### Basic Record

\`\`\`java
// This single line replaces ~50 lines of boilerplate!
public record Point(int x, int y) { }

Point p = new Point(3, 4);
System.out.println(p.x());      // 3 (accessor, not getX!)
System.out.println(p.y());      // 4
System.out.println(p);          // Point[x=3, y=4]

Point p2 = new Point(3, 4);
System.out.println(p.equals(p2)); // true (value equality)
\`\`\`

### Records with Validation

\`\`\`java
public record Person(String name, int age) {
    // Compact constructor for validation
    public Person {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be blank");
        }
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Invalid age: " + age);
        }
        name = name.strip(); // can modify before assignment
    }
}

// Custom methods in records
public record Rectangle(double width, double height) {
    public double area() {
        return width * height;
    }

    public double perimeter() {
        return 2 * (width + height);
    }

    // Static factory method
    public static Rectangle square(double side) {
        return new Rectangle(side, side);
    }
}

Rectangle rect = new Rectangle(5, 3);
System.out.println(rect.area());     // 15.0
Rectangle sq = Rectangle.square(4);
System.out.println(sq);             // Rectangle[width=4.0, height=4.0]
\`\`\`

### Records with Interfaces

\`\`\`java
public sealed interface Shape permits Circle, Rectangle { 
    double area();
}

public record Circle(double radius) implements Shape {
    public double area() { return Math.PI * radius * radius; }
}

public record Rectangle(double w, double h) implements Shape {
    public double area() { return w * h; }
}
\`\`\``},{id:`sealed-classes`,title:`Sealed Classes (Java 17+)`,content:`## Sealed Classes

Sealed classes **restrict which classes** can extend or implement them — giving you control over your type hierarchy.

\`\`\`java
// Only these 3 classes can extend Shape
public sealed class Shape
    permits Circle, Rectangle, Triangle {

    private final String color;

    public Shape(String color) {
        this.color = color;
    }

    public String getColor() { return color; }
}

// 'final' — cannot be further extended
public final class Circle extends Shape {
    private final double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    public double area() { return Math.PI * radius * radius; }
}

// 'sealed' — further restricts its own hierarchy
public sealed class Rectangle extends Shape
    permits Square {

    protected final double width, height;

    public Rectangle(String color, double w, double h) {
        super(color);
        this.width = w;
        this.height = h;
    }
}

// 'non-sealed' — open for extension by anyone
public non-sealed class Triangle extends Shape {
    public Triangle(String color) { super(color); }
}

public final class Square extends Rectangle {
    public Square(String color, double side) {
        super(color, side, side);
    }
}
\`\`\`

### Sealed Interfaces

\`\`\`java
public sealed interface Payment
    permits CreditCard, DebitCard, UPI {
}

public record CreditCard(String number, String cvv) implements Payment {}
public record DebitCard(String number, String pin) implements Payment {}
public record UPI(String vpa) implements Payment {}

// Exhaustive pattern matching (Java 21)
String processPayment(Payment p) {
    return switch (p) {
        case CreditCard c -> "CC ending " + c.number().substring(12);
        case DebitCard d -> "Debit: " + d.number();
        case UPI u -> "UPI: " + u.vpa();
        // No default needed — sealed ensures exhaustiveness!
    };
}
\`\`\``},{id:`enums`,title:`Enums`,content:`## Enums

Enums define a **fixed set of constants** with type safety.

### Basic Enum

\`\`\`java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY,
    FRIDAY, SATURDAY, SUNDAY
}

Day today = Day.FRIDAY;
System.out.println(today);          // FRIDAY
System.out.println(today.name());   // FRIDAY
System.out.println(today.ordinal()); // 4 (0-indexed)

// Iterate all values
for (Day d : Day.values()) {
    System.out.println(d);
}

// Parse from string
Day parsed = Day.valueOf("MONDAY");
\`\`\`

### Enum with Fields & Methods

\`\`\`java
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6),
    MARS   (6.421e+23, 3.3972e6);

    private final double mass;    // kg
    private final double radius;  // meters

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    // Surface gravity: G * mass / radius²
    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }

    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

double earthWeight = 75.0;
double mass = earthWeight / Planet.EARTH.surfaceGravity();
for (Planet p : Planet.values()) {
    System.out.printf("Your weight on %s is %.2f N%n",
        p, p.surfaceWeight(mass));
}
\`\`\`

### Enum with Abstract Methods

\`\`\`java
public enum Operation {
    ADD {
        @Override
        public double apply(double a, double b) { return a + b; }
    },
    SUBTRACT {
        @Override
        public double apply(double a, double b) { return a - b; }
    },
    MULTIPLY {
        @Override
        public double apply(double a, double b) { return a * b; }
    };

    public abstract double apply(double a, double b);
}

double result = Operation.ADD.apply(5, 3); // 8.0
\`\`\``}]},{id:`collections`,title:`Collections Framework`,icon:`Database`,color:`#f472b6`,chapters:[{id:`collections-overview`,title:`Collections Overview`,content:`## Java Collections Framework

The Collections Framework provides **data structures** and **algorithms** for storing and manipulating groups of objects.

### Collection Hierarchy

\`\`\`
            Iterable
               |
           Collection
          /    |     \\
        List  Set   Queue
        |      |      |
   ArrayList  HashSet  PriorityQueue
   LinkedList TreeSet  ArrayDeque
              LinkedHashSet

        Map (separate hierarchy)
         |
     HashMap
     TreeMap
     LinkedHashMap
\`\`\`

### Creating Collections (Java 9+ Factory Methods)

\`\`\`java
// Immutable collections
List<String> names = List.of("Alice", "Bob", "Charlie");
Set<Integer> nums = Set.of(1, 2, 3, 4, 5);
Map<String, Integer> scores = Map.of(
    "Alice", 95,
    "Bob", 87,
    "Charlie", 92
);

// These are IMMUTABLE — .add() or .put() throws UnsupportedOperationException

// Mutable copies
List<String> mutableList = new ArrayList<>(names);
Set<Integer> mutableSet = new HashSet<>(nums);
Map<String, Integer> mutableMap = new HashMap<>(scores);
\`\`\`

### Common Operations

\`\`\`java
List<String> list = new ArrayList<>();

// Add
list.add("Alpha");
list.add("Beta");
list.add(1, "Gamma"); // insert at index 1

// Access
String first = list.get(0);       // "Alpha"
int size = list.size();            // 3
boolean has = list.contains("Beta"); // true

// Remove
list.remove("Beta");       // by value
list.remove(0);            // by index

// Iterate
for (String s : list) { System.out.println(s); }
list.forEach(System.out::println);

// Sort
Collections.sort(list);
list.sort(Comparator.naturalOrder());
list.sort(Comparator.reverseOrder());
\`\`\``},{id:`list-implementations`,title:`List: ArrayList vs LinkedList`,content:`## List Implementations

### ArrayList

Backed by a **resizable array** — best for random access.

\`\`\`java
List<Integer> list = new ArrayList<>();
list.add(10);       // O(1) amortized
list.add(20);
list.add(30);
list.get(1);        // O(1) — fast random access
list.set(1, 25);    // O(1) — replace element
list.remove(0);     // O(n) — shifts elements left

// Useful patterns
List<Integer> nums = new ArrayList<>(List.of(5, 3, 8, 1));
Collections.sort(nums);              // [1, 3, 5, 8]
Collections.reverse(nums);           // [8, 5, 3, 1]
int idx = Collections.binarySearch(nums, 5); // requires sorted
Collections.frequency(nums, 5);      // count occurrences
\`\`\`

### LinkedList

Backed by a **doubly-linked list** — best for frequent insertions/removals at ends.

\`\`\`java
LinkedList<String> list = new LinkedList<>();
list.addFirst("A");   // O(1)
list.addLast("C");    // O(1)
list.add(1, "B");     // O(n) — traverse to index

list.getFirst();      // "A" — O(1)
list.getLast();       // "C" — O(1)
list.get(1);          // "B" — O(n) ⚠️ slow random access

list.removeFirst();   // O(1)
list.removeLast();    // O(1)
\`\`\`

### Performance Comparison

| Operation | ArrayList | LinkedList |
|-----------|-----------|------------|
| get(index) | **O(1)** ✅ | O(n) |
| add(end) | **O(1)** amortized | **O(1)** |
| add(index) | O(n) | O(n)* |
| remove(index) | O(n) | O(n)* |
| addFirst / addLast | O(n) | **O(1)** ✅ |
| Memory | Less (array) | More (node pointers) |

> **Rule of thumb**: Use \`ArrayList\` in 99% of cases. Use \`LinkedList\` only when you need fast operations at both ends (as a Deque).`},{id:`set-implementations`,title:`Set: HashSet, TreeSet, LinkedHashSet`,content:`## Set Implementations

A **Set** stores **unique elements** — no duplicates allowed.

### HashSet

Backed by a **HashMap** — fastest, no ordering guarantee.

\`\`\`java
Set<String> set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("Java");    // duplicate — ignored
System.out.println(set.size()); // 2

set.contains("Java");  // O(1) — fast lookup
set.remove("Python");  // O(1)
\`\`\`

### TreeSet

Backed by a **Red-Black Tree** — elements are **sorted**.

\`\`\`java
Set<Integer> sorted = new TreeSet<>();
sorted.add(30);
sorted.add(10);
sorted.add(20);
System.out.println(sorted); // [10, 20, 30] — always sorted!

// NavigableSet methods
TreeSet<Integer> tree = new TreeSet<>(sorted);
tree.first();              // 10 (smallest)
tree.last();               // 30 (largest)
tree.floor(25);            // 20 (≤ 25)
tree.ceiling(15);          // 20 (≥ 15)
tree.headSet(20);          // [10] (< 20)
tree.tailSet(20);          // [20, 30] (≥ 20)
\`\`\`

### LinkedHashSet

Maintains **insertion order**.

\`\`\`java
Set<String> ordered = new LinkedHashSet<>();
ordered.add("C");
ordered.add("A");
ordered.add("B");
System.out.println(ordered); // [C, A, B] — insertion order
\`\`\`

### Set Operations

\`\`\`java
Set<Integer> a = new HashSet<>(Set.of(1, 2, 3, 4));
Set<Integer> b = new HashSet<>(Set.of(3, 4, 5, 6));

// Union
Set<Integer> union = new HashSet<>(a);
union.addAll(b);    // [1, 2, 3, 4, 5, 6]

// Intersection
Set<Integer> intersection = new HashSet<>(a);
intersection.retainAll(b);  // [3, 4]

// Difference
Set<Integer> diff = new HashSet<>(a);
diff.removeAll(b);  // [1, 2]
\`\`\` `},{id:`map-implementations`,title:`Map: HashMap, TreeMap & More`,content:`## Map Implementations

### HashMap Internal Architecture & Mechanics

\`\`\`
+-----------------------------------------------------------------------------------+
|                            HASHMAP BUCKET ARRAY (Table)                           |
+-----------------------------------------------------------------------------------+
|  Index | Bucket Content                                                           |
| -------+------------------------------------------------------------------------- |
|   [0]  | null                                                                     |
|   [1]  | [ Node: key="Alice", hash=101, val=95 ]                                  |
|   [2]  | [ Node: key="Bob" ] ---> [ Node: key="Dave" ] (Linked List Collision)    |
|   ...  |                                                                          |
|   [7]  | [ TreeNode (Red-Black Tree Root) ]                                       |
|        |     /                                                                   |
|        |  [ TreeNode: "C" ]        [ TreeNode: "Z" ] (Treeified: Threshold >= 8)  |
+-----------------------------------------------------------------------------------+
\`\`\`

#### How HashMap Works Internally:
1. **Hash Calculation**: Computes \`hash = (key.hashCode()) ^ (h >>> 16)\` to spread bits.
2. **Bucket Indexing**: Computes \`index = hash & (n - 1)\` (where \`n\` is array length, default = 16).
3. **Collision Handling**:
   - Uses **Separate Chaining**.
   - **LinkedList Phase**: When bucket has \`< 8\` elements, collisions form a LinkedList.
   - **Treeification Phase (Java 8+)**: When bucket size reaches \`TREEIFY_THRESHOLD = 8\` and table capacity \`>= 64\`, the LinkedList converts into a **Red-Black Tree** to improve worst-case search time from **O(n)** to **O(log n)**!
4. **Load Factor & Resizing**: Default Load Factor = \`0.75\`. When \`size > capacity * 0.75\`, the capacity doubles (e.g. 16 -> 32) and all entries are rehashed.

### Basic HashMap Usage

\`\`\`java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);

scores.get("Alice");         // 95
scores.getOrDefault("Dave", 0); // 0 (key not found)
scores.containsKey("Bob");   // true
scores.containsValue(87);    // true
scores.size();               // 3
scores.remove("Charlie");

// Iterate
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

scores.forEach((k, v) -> System.out.println(k + ": " + v));
\`\`\`

### Advanced Map Operations

\`\`\`java
Map<String, Integer> wordCount = new HashMap<>();

// Counting pattern
String[] words = {"the", "cat", "sat", "on", "the", "mat"};
for (String w : words) {
    wordCount.merge(w, 1, Integer::sum);
    // Or: wordCount.put(w, wordCount.getOrDefault(w, 0) + 1);
}
// {the=2, cat=1, sat=1, on=1, mat=1}

// computeIfAbsent — lazy initialization
Map<String, List<String>> groups = new HashMap<>();
groups.computeIfAbsent("fruits", k -> new ArrayList<>()).add("apple");
groups.computeIfAbsent("fruits", k -> new ArrayList<>()).add("banana");
// {fruits=[apple, banana]}

// putIfAbsent
scores.putIfAbsent("Dave", 0); // only puts if key absent

// replaceAll
scores.replaceAll((key, value) -> value + 5); // boost all scores
\`\`\`

### TreeMap (Sorted Map)

\`\`\`java
Map<String, Integer> sorted = new TreeMap<>(scores);
// Keys are in natural (alphabetical) order

TreeMap<Integer, String> tree = new TreeMap<>();
tree.put(3, "C");
tree.put(1, "A");
tree.put(2, "B");

tree.firstKey();          // 1
tree.lastKey();           // 3
tree.floorKey(2);         // 2
tree.ceilingKey(2);       // 2
tree.subMap(1, 3);        // {1=A, 2=B} (from 1 inclusive to 3 exclusive)
\`\`\`

### LinkedHashMap

\`\`\`java
// Maintains insertion order
Map<String, Integer> linked = new LinkedHashMap<>();
linked.put("C", 3);
linked.put("A", 1);
linked.put("B", 2);
System.out.println(linked.keySet()); // [C, A, B]

// LRU Cache with LinkedHashMap
Map<String, String> lruCache = new LinkedHashMap<>(16, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
        return size() > 100; // max 100 entries
    }
};
\`\`\``},{id:`queue-stack`,title:`Queue, Deque & Stack`,content:`## Queue, Deque & Stack

### Queue (FIFO)

\`\`\`java
Queue<String> queue = new LinkedList<>();
queue.offer("First");   // add to end
queue.offer("Second");
queue.offer("Third");

queue.peek();           // "First" (view front, don't remove)
queue.poll();           // "First" (remove from front)
queue.size();           // 2
\`\`\`

### PriorityQueue (Min-Heap)

\`\`\`java
// Default: Min-Heap (smallest first)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(30);
minHeap.offer(10);
minHeap.offer(20);
minHeap.poll();   // 10 (smallest)
minHeap.poll();   // 20
minHeap.poll();   // 30

// Max-Heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(
    Comparator.reverseOrder()
);
maxHeap.offer(30);
maxHeap.offer(10);
maxHeap.offer(20);
maxHeap.poll();   // 30 (largest)

// Custom comparator
PriorityQueue<int[]> pq = new PriorityQueue<>(
    (a, b) -> a[1] - b[1]  // sort by second element
);
\`\`\`

### Deque (Double-Ended Queue)

\`\`\`java
Deque<String> deque = new ArrayDeque<>();

// Use as Stack (LIFO)
deque.push("A");     // addFirst
deque.push("B");
deque.push("C");
deque.pop();         // "C" (removeFirst)
deque.peek();        // "B" (peekFirst)

// Use as Queue (FIFO)
deque.offerLast("X");
deque.offerLast("Y");
deque.pollFirst();   // "X"

// Both ends
deque.addFirst("front");
deque.addLast("back");
deque.peekFirst();   // "front"
deque.peekLast();    // "back"
\`\`\`

> ⚠️ **Don't use \`java.util.Stack\`** — it's a legacy class. Use **\`ArrayDeque\`** instead.

### Choosing the Right Collection

| Need | Use |
|------|-----|
| Indexed access | \`ArrayList\` |
| Fast add/remove at ends | \`ArrayDeque\` |
| Unique elements | \`HashSet\` |
| Sorted unique elements | \`TreeSet\` |
| Key-Value lookup | \`HashMap\` |
| Sorted key-value | \`TreeMap\` |
| Priority ordering | \`PriorityQueue\` |
| LIFO stack | \`ArrayDeque\` |
| FIFO queue | \`ArrayDeque\` or \`LinkedList\` |`}]},{id:`modern-java`,title:`Modern Java (8–21)`,icon:`Sparkles`,color:`#facc15`,chapters:[{id:`lambdas-functional`,title:`Lambdas & Functional Interfaces`,content:`## Lambda Expressions (Java 8+)

Lambdas enable **functional programming** in Java — passing behavior as arguments.

### Syntax

\`\`\`java
// Full syntax
(parameters) -> { statements; return value; }

// Simplified
(a, b) -> a + b           // expression body (implicit return)
x -> x * 2                // single param (no parens needed)
() -> System.out.println("Hello") // no params
\`\`\`

### Functional Interfaces

A functional interface has **exactly one abstract method** — perfect for lambdas.

\`\`\`java
// Built-in functional interfaces (java.util.function)
Function<String, Integer>   fn = s -> s.length();      // T → R
Predicate<Integer>          p  = n -> n > 0;           // T → boolean
Consumer<String>            c  = s -> System.out.println(s); // T → void
Supplier<Double>            s  = () -> Math.random();  // () → T
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
UnaryOperator<String>       upper = s -> s.toUpperCase();

// Using them
System.out.println(fn.apply("Hello"));   // 5
System.out.println(p.test(42));          // true
c.accept("Printed!");                    // Printed!
System.out.println(s.get());             // 0.7342...
\`\`\`

### Method References

\`\`\`java
// Instead of lambdas, reference existing methods:
Function<String, Integer> len = String::length;       // instance method ref
Consumer<String> printer = System.out::println;        // static method ref
Supplier<List<String>> listFactory = ArrayList::new;   // constructor ref

// Example usage
List<String> names = List.of("Charlie", "Alice", "Bob");

// Lambda
names.stream().sorted((a, b) -> a.compareTo(b));
// Method reference (equivalent)
names.stream().sorted(String::compareTo);

// Print all
names.forEach(System.out::println);
\`\`\`

### Custom Functional Interface

\`\`\`java
@FunctionalInterface
public interface MathOperation {
    double compute(double a, double b);
}

MathOperation add = (a, b) -> a + b;
MathOperation pow = Math::pow;

System.out.println(add.compute(3, 4)); // 7.0
System.out.println(pow.compute(2, 10)); // 1024.0
\`\`\`

### How Lambda Captures Work (Closures)

A lambda can **capture** variables from its enclosing scope. These captured variables must be **effectively final** — assigned once and never modified.

\`\`\`
+------------------------------------------------------+
|  Enclosing Method Scope                              |
|                                                      |
|   int multiplier = 3;  // effectively final ✅       |
|   int counter = 0;     // modified later ❌           |
|                                                      |
|   +----------------------------------------------+   |
|   |  Lambda Closure                              |   |
|   |                                              |   |
|   |  x -> x * multiplier   // ✅ captures copy   |   |
|   |  x -> x * counter      // ❌ compile error    |   |
|   +----------------------------------------------+   |
|                                                      |
|   counter++;  // mutation makes it non-effectively   |
|               // final — lambda can't capture it     |
+------------------------------------------------------+
\`\`\`

\`\`\`java
// ✅ Effectively final — works
String prefix = "Hello";
Consumer<String> greeter = name -> System.out.println(prefix + " " + name);
greeter.accept("World"); // "Hello World"

// ❌ NOT effectively final — compile error
int count = 0;
Runnable bad = () -> count++; // ERROR: count must be effectively final

// ✅ Workaround: use AtomicInteger or array
AtomicInteger atomicCount = new AtomicInteger(0);
Runnable good = () -> atomicCount.incrementAndGet(); // ✅ works
\`\`\`

### Functional Composition (Chaining)

\`\`\`
+----------+     +----------+     +-----------+
| Function |     | Function |     | Function  |
| trim()   | --> | lower()  | --> | length()  |
+----------+     +----------+     +-----------+
  Input:           Step 1:          Step 2:       Output:
 "  HELLO "  -->  "hello"    -->   5            --> 5
\`\`\`

\`\`\`java
// Compose functions with andThen / compose
Function<String, String> trim = String::strip;
Function<String, String> lower = String::toLowerCase;
Function<String, Integer> len = String::length;

// andThen: trim THEN lower THEN get length
Function<String, Integer> pipeline = trim
    .andThen(lower)
    .andThen(len);

System.out.println(pipeline.apply("  HELLO WORLD  ")); // 11

// Predicate composition
Predicate<Integer> isPositive = n -> n > 0;
Predicate<Integer> isEven = n -> n % 2 == 0;

Predicate<Integer> isPositiveAndEven = isPositive.and(isEven);
Predicate<Integer> isPositiveOrEven = isPositive.or(isEven);
Predicate<Integer> isNotPositive = isPositive.negate();

System.out.println(isPositiveAndEven.test(4));  // true
System.out.println(isPositiveAndEven.test(-2)); // false
System.out.println(isNotPositive.test(-5));     // true
\`\`\`

### All Built-in Functional Interfaces

| Interface | Signature | Purpose | Example |
|-----------|-----------|---------|---------|
| Function<T,R> | R apply(T) | Transform T to R | s -> s.length() |
| BiFunction<T,U,R> | R apply(T,U) | Two inputs to R | (a,b) -> a+b |
| Predicate<T> | boolean test(T) | Test condition | n -> n > 0 |
| BiPredicate<T,U> | boolean test(T,U) | Test two inputs | (s,n) -> s.length() > n |
| Consumer<T> | void accept(T) | Consume value | System.out::println |
| BiConsumer<T,U> | void accept(T,U) | Consume two values | map::put |
| Supplier<T> | T get() | Produce value | Math::random |
| UnaryOperator<T> | T apply(T) | Transform same type | String::toUpperCase |
| BinaryOperator<T> | T apply(T,T) | Combine two same | Integer::sum |

> **Key Rule**: Lambdas are NOT anonymous inner classes. They use \`invokedynamic\` bytecode (JSR 292) for better performance — no extra .class file is generated, and the JVM can inline them aggressively.`},{id:`streams-api`,title:`Streams API`,content:`## Streams API (Java 8+)

Streams provide a **declarative** way to process collections — filter, transform, aggregate.

### Creating Streams

\`\`\`java
// From collections
List<String> names = List.of("Alice", "Bob", "Charlie", "Dave");
Stream<String> stream = names.stream();

// From values
Stream<Integer> nums = Stream.of(1, 2, 3, 4, 5);

// From arrays
int[] arr = {1, 2, 3};
IntStream intStream = Arrays.stream(arr);

// Infinite streams
Stream<Integer> infinite = Stream.iterate(0, n -> n + 2); // 0, 2, 4, ...
Stream<Double> randoms = Stream.generate(Math::random);
\`\`\`

### Intermediate Operations (lazy, return Stream)

\`\`\`java
List<String> names = List.of("Alice", "Bob", "Charlie", "Dave", "Anna");

names.stream()
    .filter(s -> s.startsWith("A"))     // [Alice, Anna]
    .map(String::toUpperCase)           // [ALICE, ANNA]
    .sorted()                           // [ALICE, ANNA]
    .distinct()                         // remove duplicates
    .limit(5)                           // first 5 elements
    .skip(1)                            // skip first element
    .peek(System.out::println)          // debug: print each
    .collect(Collectors.toList());      // terminal operation
\`\`\`

### Terminal Operations (trigger processing)

\`\`\`java
List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Collect
List<Integer> evens = nums.stream()
    .filter(n -> n % 2 == 0)
    .toList(); // Java 16+ shorthand for collect(Collectors.toList())

// Reduce
int sum = nums.stream().reduce(0, Integer::sum); // 55
Optional<Integer> max = nums.stream().max(Integer::compareTo);

// Count, min, max
long count = nums.stream().filter(n -> n > 5).count(); // 5

// forEach
nums.stream().forEach(System.out::println);

// anyMatch, allMatch, noneMatch
boolean hasEven = nums.stream().anyMatch(n -> n % 2 == 0);  // true
boolean allPos = nums.stream().allMatch(n -> n > 0);         // true

// toArray
Integer[] arr = nums.stream().toArray(Integer[]::new);
\`\`\`

### Collectors (Grouping & Partitioning)

\`\`\`java
List<String> words = List.of("apple", "banana", "avocado", "blueberry", "cherry");

// Group by first letter
Map<Character, List<String>> grouped = words.stream()
    .collect(Collectors.groupingBy(w -> w.charAt(0)));
// {a=[apple, avocado], b=[banana, blueberry], c=[cherry]}

// Partition by condition
Map<Boolean, List<String>> partitioned = words.stream()
    .collect(Collectors.partitioningBy(w -> w.length() > 5));

// Joining
String csv = words.stream()
    .collect(Collectors.joining(", ")); // "apple, banana, avocado, ..."

// Summarizing
IntSummaryStatistics stats = words.stream()
    .collect(Collectors.summarizingInt(String::length));
// count=5, sum=34, min=5, average=6.8, max=9

// toMap
Map<String, Integer> wordLengths = words.stream()
    .collect(Collectors.toMap(w -> w, String::length));
\`\`\`

### Stream Pipeline Architecture

\`\`\`
+-----------------------------------------------------------+
|                    STREAM PIPELINE                         |
+-----------------------------------------------------------+
|                                                           |
|  SOURCE          INTERMEDIATE OPS (lazy)    TERMINAL OP   |
|  ======          =====================      ===========   |
|                                                           |
|  Collection  --> filter() --> map() -----> collect()      |
|  Array            sorted()    flatMap()    reduce()       |
|  File              peek()     distinct()   forEach()      |
|  Generator         limit()    skip()       count()        |
|                                            toArray()      |
|                                                           |
|  IMPORTANT: No processing happens until a terminal        |
|  operation is invoked! Intermediate ops are LAZY.         |
+-----------------------------------------------------------+
\`\`\`

> **Key Insight**: Streams are **consumed once**. After a terminal operation, the stream is closed. You cannot reuse it — create a new stream from the source.

### flatMap — Flattening Nested Structures

\`\`\`
+------------------+                  +------------------+
| Stream<List<T>>  |    flatMap()     | Stream<T>        |
|                  |  ------------>   |                  |
| [[1,2], [3,4]]   |                  | [1, 2, 3, 4]    |
| [["a"], ["b","c"]]|                 | ["a", "b", "c"] |
+------------------+                  +------------------+
\`\`\`

\`\`\`java
// Flatten nested lists
List<List<String>> nested = List.of(
    List.of("Alice", "Bob"),
    List.of("Charlie"),
    List.of("Dave", "Eve")
);

List<String> flat = nested.stream()
    .flatMap(Collection::stream)
    .toList();
// [Alice, Bob, Charlie, Dave, Eve]

// Real-world: get all unique words from sentences
List<String> sentences = List.of("hello world", "java streams rock");
List<String> words2 = sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
    .distinct()
    .sorted()
    .toList();
// [hello, java, rock, streams, world]
\`\`\`

### Parallel Streams

\`\`\`
+-----------------------------------------------------+
|            PARALLEL STREAM EXECUTION                 |
+-----------------------------------------------------+
|                                                     |
|  Source: [1, 2, 3, 4, 5, 6, 7, 8]                  |
|                                                     |
|  Split into chunks (ForkJoinPool):                  |
|  +--------+  +--------+  +--------+  +--------+    |
|  | [1, 2] |  | [3, 4] |  | [5, 6] |  | [7, 8] |   |
|  +---+----+  +---+----+  +---+----+  +---+----+    |
|      |           |           |           |          |
|   Thread 1    Thread 2    Thread 3    Thread 4      |
|   (process)   (process)   (process)   (process)     |
|      |           |           |           |          |
|      +-----+-----+-----+----+           |          |
|            |                  |          |          |
|        Combine            Combine        |          |
|            +--------+---------+          |          |
|                     |                               |
|                Final Result                         |
+-----------------------------------------------------+
\`\`\`

\`\`\`java
// Parallel processing — auto-uses ForkJoinPool
long count = numbers.parallelStream()
    .filter(n -> isPrime(n))
    .count();

// When to use parallel streams:
// ✅ Large datasets (> 10,000 elements)
// ✅ CPU-intensive per-element operations
// ✅ Independent, stateless operations
// ❌ Small datasets (overhead > benefit)
// ❌ Operations with shared mutable state
// ❌ I/O-bound operations (use Virtual Threads instead)
// ❌ Order-dependent operations (unless using forEachOrdered)
\`\`\`

### Teeing Collector (Java 12+)

\`\`\`java
// Process stream through TWO collectors simultaneously
var result = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).stream()
    .collect(Collectors.teeing(
        Collectors.summingInt(Integer::intValue),   // collector 1: sum
        Collectors.counting(),                       // collector 2: count
        (sum, count2) -> "Sum=" + sum + ", Avg=" + (sum / count2) // merge
    ));
// "Sum=55, Avg=5"
\`\`\`

### Real-World Stream Patterns

\`\`\`java
// 1. Frequency map (word count)
Map<String, Long> frequency = words.stream()
    .collect(Collectors.groupingBy(
        Function.identity(), Collectors.counting()));

// 2. Top-N elements
List<String> top3Longest = words.stream()
    .sorted(Comparator.comparingInt(String::length).reversed())
    .limit(3)
    .toList();

// 3. CSV line to objects
List<Person> people = Files.lines(Path.of("data.csv"))
    .skip(1)  // skip header
    .map(line -> line.split(","))
    .map(parts -> new Person(parts[0], Integer.parseInt(parts[1])))
    .toList();

// 4. Nested grouping
Map<String, Map<Integer, List<Student>>> grouped = students.stream()
    .collect(Collectors.groupingBy(
        Student::department,
        Collectors.groupingBy(Student::year)));

// 5. Stream to Map with merge function (handle duplicates)
Map<String, Integer> merged = items.stream()
    .collect(Collectors.toMap(
        Item::name, Item::quantity, Integer::sum));
\`\`\`

### Stream vs Collection

| Aspect | Collection | Stream |
|--------|-----------|--------|
| Storage | Stores elements in memory | Computes elements on-demand |
| Consumption | Can iterate multiple times | Single-use (consumed once) |
| Eagerness | Eager (all elements exist) | Lazy (computed when needed) |
| Modification | Can add/remove elements | Read-only pipeline |
| Size | Finite | Can be infinite |
| Parallelism | Manual threading | Built-in .parallelStream() |`},{id:`optionals`,title:`Optional<T>`,content:`## Optional (Java 8+)

\`Optional\` is a container that may or may not hold a value — eliminates **NullPointerException**.

### Creating Optionals

\`\`\`java
Optional<String> present = Optional.of("Hello");       // must be non-null
Optional<String> nullable = Optional.ofNullable(null);  // may be null
Optional<String> empty = Optional.empty();              // explicitly empty
\`\`\`

### Using Optionals

\`\`\`java
Optional<String> name = Optional.of("Karthik");

// Check and get
if (name.isPresent()) {
    System.out.println(name.get()); // "Karthik"
}

// ifPresent — functional style
name.ifPresent(n -> System.out.println("Name: " + n));

// ifPresentOrElse (Java 9+)
name.ifPresentOrElse(
    n -> System.out.println("Found: " + n),
    () -> System.out.println("Not found")
);

// Default values
String result = name.orElse("Unknown");
String result2 = name.orElseGet(() -> computeDefault());
String result3 = name.orElseThrow(); // throws NoSuchElementException
String result4 = name.orElseThrow(
    () -> new IllegalStateException("Name required!")
);
\`\`\`

### Transforming Optionals

\`\`\`java
Optional<String> name = Optional.of("  karthik  ");

// map — transform value
Optional<String> upper = name
    .map(String::strip)
    .map(String::toUpperCase);
// Optional["KARTHIK"]

// filter — conditional
Optional<String> long_name = name
    .filter(n -> n.strip().length() > 3);
// Optional["  karthik  "]

// flatMap — when transformation returns Optional
Optional<Integer> length = name
    .flatMap(n -> n.isBlank() ? Optional.empty()
                              : Optional.of(n.strip().length()));
// Optional[7]

// Chaining with or() (Java 9+)
Optional<String> fallback = Optional.<String>empty()
    .or(() -> Optional.of("default"));
// Optional["default"]
\`\`\`

### Stream Integration

\`\`\`java
// Optional.stream() (Java 9+)
List<Optional<String>> opts = List.of(
    Optional.of("A"),
    Optional.empty(),
    Optional.of("B")
);

List<String> values = opts.stream()
    .flatMap(Optional::stream)
    .toList();
// ["A", "B"]
\`\`\``},{id:`pattern-matching`,title:`Pattern Matching (Java 21)`,content:`## Pattern Matching

Java 21 brings **powerful pattern matching** capabilities.

### Pattern Matching for instanceof (Java 16+)

\`\`\`java
Object obj = "Hello World";

if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s.toUpperCase());
}
\`\`\`

### Pattern Matching for switch (Java 21)

\`\`\`java
// Match on type
static String describe(Object obj) {
    return switch (obj) {
        case Integer i when i > 0 -> "Positive int: " + i;
        case Integer i            -> "Non-positive int: " + i;
        case String s             -> "String of length " + s.length();
        case int[] arr            -> "int array of length " + arr.length;
        case null                 -> "null value";
        default                   -> "Unknown: " + obj.getClass();
    };
}

describe(42);         // "Positive int: 42"
describe(-5);         // "Non-positive int: -5"
describe("Hi");       // "String of length 2"
describe(null);       // "null value"
\`\`\`

### Record Patterns (Java 21)

\`\`\`java
record Point(int x, int y) {}
record Circle(Point center, double radius) {}

// Destructure nested records!
static String describeShape(Object shape) {
    return switch (shape) {
        case Circle(Point(int x, int y), double r)
            when r > 10 -> "Large circle at (" + x + "," + y + ")";
        case Circle(Point(int x, int y), double r)
            -> "Circle at (" + x + "," + y + ") r=" + r;
        default -> "Unknown shape";
    };
}

var c = new Circle(new Point(3, 4), 15.0);
describeShape(c); // "Large circle at (3,4)"
\`\`\`

### Guarded Patterns (when clause)

\`\`\`java
sealed interface Shape permits Circle, Rectangle {}
record Circle(double radius) implements Shape {}
record Rectangle(double w, double h) implements Shape {}

## Virtual Threads (Project Loom)

Virtual Threads are **lightweight threads** managed by the JVM, not the OS — enabling millions of concurrent tasks with minimal memory footprint.

### Virtual Threads Architecture & Mounting/Unmounting

\`\`\`
+---------------------------------------------------------------------------------------+
|                                JVM VIRTUAL THREAD POOL                                |
|  [ VThread 1 ]   [ VThread 2 ]   [ VThread 3 ]   ...   [ VThread 1,000,000 ]           |
+---------------------------------------------------------------------------------------+
        |                | (Blocked on I/O)
        | Mounts         v Unmounts (Yields Carrier)
+---------------------------------------------------------------------------------------+
|                       CARRIER THREADS (JVM ForkJoinPool)                             |
|  [ Carrier Thread #1 ]                    [ Carrier Thread #2 ]                       |
+---------------------------------------------------------------------------------------+
        |                                           |
        v                                           v
+---------------------------------------------------------------------------------------+
|                             OS KERNEL THREADS (1:1 with OS)                           |
|  [ OS Thread A ]                          [ OS Thread B ]                             |
+---------------------------------------------------------------------------------------+
\`\`\`

#### How Virtual Threads Work:
1. **Mounting**: When a Virtual Thread runs CPU operations, the JVM **mounts** it onto an OS Carrier Thread (ForkJoinPool worker).
2. **Unmounting on Blocking I/O**: When the Virtual Thread makes a blocking call (DB query, HTTP request, socket read), the JVM **unmounts** it from the Carrier Thread and saves its stack in Heap memory.
3. **Re-mounting**: The Carrier Thread becomes free to process other Virtual Threads immediately. Once the I/O completes, the Virtual Thread is scheduled onto an available Carrier Thread again.

### Creating Virtual Threads

\`\`\`java
// Start a single virtual thread
Thread vt = Thread.startVirtualThread(() -> {
    System.out.println("Running in virtual thread: "
        + Thread.currentThread());
});
vt.join(); // wait for completion

// Using Thread.ofVirtual()
Thread thread = Thread.ofVirtual()
    .name("my-vthread")
    .start(() -> {
        System.out.println("Named virtual thread");
    });
\`\`\`

### Virtual Thread Executor

\`\`\`java
// Process 10,000 tasks concurrently!
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    List<Future<String>> futures = new ArrayList<>();

    for (int i = 0; i < 10_000; i++) {
        final int taskId = i;
        futures.add(executor.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1)); // simulated I/O
            return "Result-" + taskId;
        }));
    }

    // Collect results
    for (var future : futures) {
        System.out.println(future.get());
    }
}
// All 10,000 tasks complete in ~1 second (not 10,000 seconds)
\`\`\`

### Platform vs Virtual Threads

| Feature | Platform Thread | Virtual Thread |
|---------|----------------|----------------|
| Managed by | OS | JVM |
| Cost | ~1MB stack each | ~few KB |
| Max count | ~thousands | **millions** |
| Best for | CPU-bound work | I/O-bound work |
| Scheduling | OS scheduler | JVM carrier threads |

### Structured Concurrency (Preview)

\`\`\`java
// Java 21 Preview — manage related tasks as a unit
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Subtask<String> user = scope.fork(() -> fetchUser(id));
    Subtask<List<Order>> orders = scope.fork(() -> fetchOrders(id));

    scope.join();           // wait for both
    scope.throwIfFailed();  // propagate errors

    return new UserProfile(user.get(), orders.get());
}
\`\`\`

### When to Use Virtual Threads

✅ **Use for**: HTTP servers, database queries, file I/O, API calls, any blocking I/O
❌ **Don't use for**: CPU-intensive computation (use platform threads + ForkJoinPool)`},{id:`var-type-inference`,title:`var — Local Type Inference (Java 10+)`,content:`## Local Variable Type Inference (var)

Since Java 10, you can use \\\`var\\\` to let the compiler infer the type of local variables. This is **not dynamic typing** — Java remains statically typed. The compiler determines the type at compile time.

### How var Works

\\\`\\\`\\\`
+-----------------------------------------------+
|  COMPILE TIME TYPE INFERENCE                  |
+-----------------------------------------------+
|                                               |
|  Source Code:                                 |
|    var name = "Hello";                        |
|                                               |
|  Compiler sees:                               |
|    String name = "Hello";  // inferred type   |
|                                               |
|  Bytecode: IDENTICAL to explicit declaration  |
+-----------------------------------------------+
\\\`\\\`\\\`

### Valid Uses of var

\\\`\\\`\\\`java
// Simple declarations
var name = "Karthik";           // String
var age = 25;                    // int
var pi = 3.14;                   // double
var list = new ArrayList<String>();  // ArrayList<String>
var map = Map.of("a", 1, "b", 2);   // Map<String, Integer>

// Enhanced for loops
var numbers = List.of(1, 2, 3, 4, 5);
for (var n : numbers) {
    System.out.println(n);  // n is Integer
}

// try-with-resources
try (var reader = new BufferedReader(new FileReader("file.txt"))) {
    var line = reader.readLine();
}

// Particularly useful for complex generic types
var entrySet = map.entrySet();
// Instead of: Set<Map.Entry<String, Integer>> entrySet = map.entrySet();
\\\`\\\`\\\`

### Where var CANNOT Be Used

\\\`\\\`\\\`java
// ❌ Method parameters
void process(var data) { }  // ERROR

// ❌ Return types
var getName() { return "Hi"; }  // ERROR

// ❌ Fields (instance or static)
class MyClass { var x = 10; }  // ERROR

// ❌ Without initializer
var x;  // ERROR — compiler can't infer type

// ❌ With null
var x = null;  // ERROR — null has no type

// ❌ Lambda without explicit target type
var fn = (x) -> x * 2;  // ERROR
\\\`\\\`\\\`

### Best Practices

| Use var when... | Avoid var when... |
|-----------------|-------------------|
| Type is obvious from RHS | Type is not clear from context |
| Complex generic types | Primitive numeric types (int, long) |
| Local iteration variables | Public API boundaries |
| var improves readability | var hurts readability |

> **Remember**: \\\`var\\\` is a **reserved type name**, not a keyword. You can still have a variable named \\\`var\\\` (but please don't).`},{id:`switch-expressions`,title:`Switch Expressions (Java 14+)`,content:`## Switch Expressions

Java 14 finalized **switch as an expression** — it can return a value, use arrow syntax, and provides exhaustiveness checking.

### Old vs New Switch

\\\`\\\`\\\`java
// ❌ Old switch (statement, verbose, fall-through bugs)
String day = "MONDAY";
String type;
switch (day) {
    case "MONDAY":
    case "TUESDAY":
    case "WEDNESDAY":
    case "THURSDAY":
    case "FRIDAY":
        type = "Weekday";
        break;  // forget this = bug!
    case "SATURDAY":
    case "SUNDAY":
        type = "Weekend";
        break;
    default:
        type = "Unknown";
}

// ✅ New switch expression (Java 14+)
String type2 = switch (day) {
    case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"
        -> "Weekday";
    case "SATURDAY", "SUNDAY"
        -> "Weekend";
    default -> "Unknown";
};
\\\`\\\`\\\`

### Arrow Labels (No Fall-Through!)

\\\`\\\`\\\`
+-------------------------------------------+
|  OLD SWITCH (fall-through by default)     |
|                                           |
|  case A:        <-- executes             |
|    doA();       <-- runs                  |
|  case B:        <-- FALLS THROUGH! 😱    |
|    doB();       <-- also runs!            |
|    break;       <-- must add explicitly   |
+-------------------------------------------+

+-------------------------------------------+
|  NEW SWITCH (arrow = no fall-through)     |
|                                           |
|  case A -> doA();  <-- ONLY doA runs ✅   |
|  case B -> doB();  <-- separate block     |
+-------------------------------------------+
\\\`\\\`\\\`

### yield — Multi-Statement Blocks

\\\`\\\`\\\`java
int numLetters = switch (day) {
    case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
    case "TUESDAY" -> 7;
    case "WEDNESDAY" -> 9;
    case "THURSDAY", "SATURDAY" -> 8;
    default -> {
        // Multi-line logic needs yield
        System.out.println("Unknown day: " + day);
        yield -1;  // return value from block
    }
};
\\\`\\\`\\\`

### Exhaustiveness with Enums & Sealed Types

\\\`\\\`\\\`java
enum Season { SPRING, SUMMER, AUTUMN, WINTER }

// Compiler ensures ALL enum values are covered — no default needed!
String clothing = switch (season) {
    case SPRING -> "Light jacket";
    case SUMMER -> "T-shirt";
    case AUTUMN -> "Sweater";
    case WINTER -> "Heavy coat";
};

// With sealed types (Java 21)
sealed interface Shape permits Circle, Square {}
record Circle(double r) implements Shape {}
record Square(double s) implements Shape {}

double area = switch (shape) {
    case Circle c -> Math.PI * c.r() * c.r();
    case Square s -> s.s() * s.s();
    // No default needed — sealed types are exhaustive!
};
\\\`\\\`\\\``},{id:`text-blocks`,title:`Text Blocks (Java 15+)`,content:`## Text Blocks

Text Blocks provide a clean way to write **multi-line strings** without escape sequences.

### Basic Syntax

\\\`\\\`\\\`java
// ❌ Old way — painful escaping
String json = "{\\n" +
    "  \\"name\\": \\"Alice\\",\\n" +
    "  \\"age\\": 30\\n" +
    "}";

// ✅ Text Block — clean!
String json2 = """
        {
          "name": "Alice",
          "age": 30
        }
        """;

// SQL query
String sql = """
        SELECT u.name, u.email
        FROM users u
        JOIN orders o ON u.id = o.user_id
        WHERE o.total > 100
        ORDER BY u.name
        """;

// HTML
String html = """
        <html>
          <body>
            <h1>Hello, World!</h1>
          </body>
        </html>
        """;
\\\`\\\`\\\`

### Indentation Rules

\\\`\\\`\\\`
+--------------------------------------------------+
|  TEXT BLOCK INDENTATION                          |
|                                                  |
|  The CLOSING """ determines the left margin:    |
|                                                  |
|  String s = """                                  |
|          Hello      <-- 10 spaces from left      |
|          World      <-- 10 spaces from left      |
|          """;       <-- closing at col 10         |
|                                                  |
|  Result: "Hello\\nWorld" (no leading spaces!)     |
|                                                  |
|  Move closing """ LEFT = add indentation:       |
|  String s = """                                  |
|          Hello                                   |
|          World                                   |
|      """;           <-- closing at col 6          |
|                                                  |
|  Result: "    Hello\\n    World" (4 spaces each)  |
+--------------------------------------------------+
\\\`\\\`\\\`

### String Interpolation with formatted()

\\\`\\\`\\\`java
String name = "Alice";
int age = 30;

// Using formatted() on text blocks
String message = """
        Dear %s,
        You are %d years old.
        Welcome to Java %d!
        """.formatted(name, age, 21);

// Using String.format()
String query = String.format("""
        SELECT * FROM users
        WHERE name = '%s'
        AND age > %d
        """, name, age);
\\\`\\\`\\\``},{id:`primitive-streams`,title:`Primitive Streams (IntStream, LongStream) & Performance`,content:`## Primitive Streams & Performance Optimization

When processing large numeric sequences with \`Stream<Integer>\`, Java creates thousands of wrapper objects (\`Integer\` instances) via **autoboxing**, which puts heavy pressure on the Garbage Collector and degrades cache locality.

### Autoboxing Penalty vs Primitive Streams

\`\`\`
Stream<Integer> (Boxed):
  [ Pointer ] ---> [ Integer Object: 24 bytes overhead ] (Scattered across Heap)
  [ Pointer ] ---> [ Integer Object: 24 bytes overhead ]

IntStream (Unboxed):
  [ 4-byte int ][ 4-byte int ][ 4-byte int ] (Continuous Primitive Array in CPU Cache)
\`\`\`

### Specialized Primitive Stream Types

Java provides three primitive stream specializations in \`java.util.stream\`:
1. **\`IntStream\`** (for \`int\`, \`short\`, \`byte\`, \`char\`)
2. **\`LongStream\`** (for \`long\`)
3. **\`DoubleStream\`** (for \`double\`, \`float\`)

\`\`\`java
import java.util.stream.IntStream;
import java.util.stream.LongStream;

// 1. Range generation
IntStream.range(1, 100);       // 1 to 99 (exclusive)
IntStream.rangeClosed(1, 100); // 1 to 100 (inclusive)

// 2. Direct numeric aggregations (No boxing!)
int sum = IntStream.rangeClosed(1, 1000).sum();          // 500500
double avg = IntStream.of(10, 20, 30, 40).average().orElse(0.0); // 25.0
int max = IntStream.of(5, 8, 2, 9).max().orElse(0);      // 9
long count = IntStream.range(0, 1000).filter(n -> n % 2 == 0).count(); // 500

// 3. Converting between Object Streams and Primitive Streams
List<String> words = List.of("apple", "banana", "cherry");

// mapToInt avoids boxing Integer
int totalLength = words.stream()
    .mapToInt(String::length)
    .sum();

// boxed() converts IntStream back to Stream<Integer>
List<Integer> numbers = IntStream.rangeClosed(1, 10)
    .boxed()
    .toList();
\`\`\`

### Performance Comparison: \`Stream<Integer>\` vs \`IntStream\`

| Stream Type | 10,000,000 Numbers Sum Time | Memory Allocation | GC Pauses |
|-------------|-----------------------------|-------------------|-----------|
| \`Stream<Integer>\` | ~120 ms | ~240 MB (Objects) | High |
| \`IntStream\` | **~8 ms** (15x faster!) | **0 MB** (Stack / Cache) | **Zero** |`},{id:`advanced-collectors`,title:`Advanced Custom Collectors & Downstream Reductions`,content:`## Advanced Collectors & Downstream Reductions

The \`Collectors\` utility class provides deep composition tools to group, transform, and aggregate collections in complex business applications.

### 1. Multi-Level Grouping with Downstream Collectors

\`\`\`java
record Employee(String name, String department, String city, int salary) {}

List<Employee> employees = List.of(
    new Employee("Alice", "Engineering", "New York", 120000),
    new Employee("Bob", "Engineering", "London", 110000),
    new Employee("Charlie", "HR", "New York", 85000),
    new Employee("Dave", "Engineering", "New York", 130000),
    new Employee("Eve", "HR", "London", 90000)
);

// Group by Department -> Count employees
Map<String, Long> countByDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::department, Collectors.counting()));
// {Engineering=3, HR=2}

// Group by Department -> Average salary
Map<String, Double> avgSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::department, 
        Collectors.averagingInt(Employee::salary)
    ));
// {Engineering=120000.0, HR=87500.0}

// Group by Department -> Highest earner in each department
Map<String, Optional<Employee>> topEarnerByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::department,
        Collectors.maxBy(Comparator.comparingInt(Employee::salary))
    ));

// Group by Department -> List of names only (using mapping downstream collector)
Map<String, List<String>> namesByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::department,
        Collectors.mapping(Employee::name, Collectors.toList())
    ));
// {Engineering=[Alice, Bob, Dave], HR=[Charlie, Eve]}
\`\`\`

### 2. \`collectingAndThen\` (Post-processing results)

\`\`\`java
// Extract top earner without returning Optional:
Map<String, Employee> topEarners = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::department,
        Collectors.collectingAndThen(
            Collectors.maxBy(Comparator.comparingInt(Employee::salary)),
            Optional::get
        )
    ));
\`\`\`

### 3. Custom Collector using \`Collector.of()\`

\`\`\`java
// Custom Collector that concatenates strings with brackets: [a, b, c]
Collector<String, StringJoiner, String> bracketCollector = Collector.of(
    () -> new StringJoiner(", ", "[", "]"), // supplier
    StringJoiner::add,                      // accumulator
    StringJoiner::merge,                    // combiner (for parallel streams)
    StringJoiner::toString                  // finisher
);

String result = List.of("Java", "Kotlin", "Scala").stream()
    .collect(bracketCollector);
System.out.println(result); // [Java, Kotlin, Scala]
\`\`\``}]},{id:`annotations-reflection`,title:`Annotations & Reflection`,icon:`Tag`,color:`#c084fc`,chapters:[{id:`annotations`,title:`Annotations`,content:`## Annotations

Annotations provide **metadata** about code — they don't directly affect execution but are used by the compiler, frameworks, and runtime tools.

### Built-in Annotations

\\\`\\\`\\\`java
// @Override — compile-time check that method overrides parent
@Override
public String toString() { return "MyClass"; }

// @Deprecated — marks API as obsolete
@Deprecated(since = "17", forRemoval = true)
public void oldMethod() { }

// @SuppressWarnings — silence compiler warnings
@SuppressWarnings("unchecked")
List<String> list = (List) rawList;

// @FunctionalInterface — compile-time check for single abstract method
@FunctionalInterface
interface Processor { void process(); }

// @SafeVarargs — suppress unchecked warnings for varargs
@SafeVarargs
static <T> List<T> asList(T... elements) {
    return List.of(elements);
}
\\\`\\\`\\\`

### Custom Annotations

\\\`\\\`\\\`java
// Define a custom annotation
@Retention(RetentionPolicy.RUNTIME)  // available at runtime
@Target(ElementType.METHOD)          // can only be on methods
public @interface Cacheable {
    int ttlSeconds() default 300;
    String key() default "";
}

// Use it
public class UserService {
    @Cacheable(ttlSeconds = 600, key = "user")
    public User findUser(String id) {
        return database.query(id);
    }
}
\\\`\\\`\\\`

### Retention Policies

| Policy | Available At | Use Case |
|--------|-------------|----------|
| SOURCE | Compile time only | @Override, @SuppressWarnings |
| CLASS | In .class file (default) | Bytecode analysis tools |
| RUNTIME | Via Reflection at runtime | Frameworks (Spring, JPA) |

### Common Framework Annotations

| Annotation | Framework | Purpose |
|-----------|-----------|---------|
| @Component | Spring | Bean registration |
| @Autowired | Spring | Dependency injection |
| @Entity | JPA | Database table mapping |
| @Test | JUnit | Test method marker |
| @GetMapping | Spring MVC | HTTP GET endpoint |
| @JsonProperty | Jackson | JSON field mapping |
\\`},{id:`reflection`,title:`Reflection API`,content:`## Reflection

Reflection lets you **inspect and modify** classes, methods, and fields at runtime — powerful but use with care.

### Inspecting Classes

\\\`\\\`\\\`java
// Get Class object
Class<?> clazz = String.class;
Class<?> clazz2 = "Hello".getClass();
Class<?> clazz3 = Class.forName("java.lang.String");

// Inspect
System.out.println(clazz.getName());        // java.lang.String
System.out.println(clazz.getSimpleName());   // String
System.out.println(clazz.getPackageName());  // java.lang
System.out.println(clazz.getSuperclass());   // java.lang.Object

// Get all public methods
for (Method m : clazz.getMethods()) {
    System.out.println(m.getName() + " -> " + m.getReturnType());
}

// Get all declared fields (including private)
for (Field f : clazz.getDeclaredFields()) {
    System.out.println(f.getName() + ": " + f.getType());
}
\\\`\\\`\\\`

### Dynamic Invocation

\\\`\\\`\\\`java
// Create instance dynamically
Class<?> clazz = Class.forName("com.app.UserService");
Object instance = clazz.getDeclaredConstructor().newInstance();

// Invoke method dynamically
Method method = clazz.getMethod("findUser", String.class);
Object result = method.invoke(instance, "user-123");

// Access private fields
Field field = clazz.getDeclaredField("cache");
field.setAccessible(true);  // bypass access control
Object value = field.get(instance);
\\\`\\\`\\\`

### Reading Annotations at Runtime

\\\`\\\`\\\`java
// Check and read annotations
Method method = UserService.class.getMethod("findUser", String.class);

if (method.isAnnotationPresent(Cacheable.class)) {
    Cacheable cache = method.getAnnotation(Cacheable.class);
    System.out.println("TTL: " + cache.ttlSeconds()); // 600
    System.out.println("Key: " + cache.key());         // "user"
}
\\\`\\\`\\\`

> **⚠️ Performance Warning**: Reflection is **10-100x slower** than direct calls. Use it for framework initialization, not hot paths. Modern frameworks use compile-time annotation processing when possible.`}]},{id:`memory-gc`,title:`Memory Management & GC`,icon:`HardDrive`,color:`#fb923c`,chapters:[{id:`memory-model`,title:`JVM Memory Model Deep Dive`,content:`## JVM Memory Model

### Memory Areas Explained

\\\`\\\`\\\`
+=====================================================================+
|                          JVM PROCESS MEMORY                         |
+=====================================================================+
|                                                                     |
|  +-------------------------------+  +----------------------------+  |
|  |         HEAP MEMORY           |  |    NON-HEAP MEMORY         |  |
|  |  (shared across all threads)  |  |                            |  |
|  |                               |  |  Metaspace:                |  |
|  |  Young Generation:            |  |    Class metadata          |  |
|  |  +--------+------+------+    |  |    Method bytecode         |  |
|  |  | Eden   |  S0  |  S1  |    |  |    Constant pool           |  |
|  |  | Space  | (from)| (to) |    |  |    (grows as needed)      |  |
|  |  +--------+------+------+    |  |                            |  |
|  |                               |  |  Code Cache:               |  |
|  |  Old Generation:              |  |    JIT compiled code       |  |
|  |  +---------------------------+|  |                            |  |
|  |  | Long-lived objects        ||  |  Thread Stacks:            |  |
|  |  | (survived multiple GCs)   ||  |    Local variables         |  |
|  |  +---------------------------+|  |    Method call frames      |  |
|  +-------------------------------+  +----------------------------+  |
+=====================================================================+
\\\`\\\`\\\`

### Object Lifecycle in Memory

\\\`\\\`\\\`
                    Object Lifecycle
    +----------+     Minor GC      +----------+
    |  Eden    | ----------------> | Survivor |
    |  (new)   |   (if alive)      |  Space   |
    +----------+                   +----------+
                                       |
                                       | After N minor GCs
                                       | (age threshold)
                                       v
                                  +----------+     Major GC
                                  |   Old    | ---------> Deallocated
                                  |   Gen    |  (if dead)
                                  +----------+
\\\`\\\`\\\`

### Stack vs Heap

| Feature | Stack | Heap |
|---------|-------|------|
| Stores | Primitives, references | Objects, arrays |
| Thread safety | Thread-private | Shared (needs sync) |
| Speed | Very fast (LIFO) | Slower (GC managed) |
| Size | Small (~512KB-1MB) | Large (configurable) |
| Cleanup | Auto on method return | Garbage Collector |
| Error | StackOverflowError | OutOfMemoryError |

\\\`\\\`\\\`java
void example() {
    int x = 42;              // x on Stack
    String s = "Hello";      // s (ref) on Stack, "Hello" in String Pool
    int[] arr = new int[10]; // arr (ref) on Stack, array object on Heap
    Person p = new Person(); // p (ref) on Stack, Person object on Heap
}
// Method returns -> Stack frame popped -> x, s, arr, p refs removed
// Heap objects become eligible for GC if no other references exist
\\\`\\\`\\\``},{id:`garbage-collection`,title:`Garbage Collection`,content:`## Garbage Collection (GC)

The JVM automatically reclaims memory from objects that are no longer reachable. You never manually free memory in Java.

### GC Roots & Reachability

\\\`\\\`\\\`
+----------------------------------+
|         GC ROOTS                 |
|  (starting points for marking)  |
+----------------------------------+
|  - Local variables on Stack     |
|  - Active threads               |
|  - Static fields                |
|  - JNI references               |
+----------------------------------+
          |
          v
  +-----------+       +-----------+
  | Object A  | ----> | Object B  |  <- reachable (alive)
  +-----------+       +-----------+
                            |
                            v
                      +-----------+
                      | Object C  |  <- reachable (alive)
                      +-----------+

  +-----------+       +-----------+
  | Object D  | ----> | Object E  |  <- UNREACHABLE (garbage!)
  +-----------+       +-----------+
  (no GC root path)
\\\`\\\`\\\`

### GC Algorithms in Java

| GC | Best For | Key Feature |
|----|----------|-------------|
| **G1 GC** (default) | General purpose | Low-pause, region-based |
| **ZGC** | Ultra-low latency | Sub-millisecond pauses |
| **Shenandoah** | Low latency | Concurrent compaction |
| **Parallel GC** | Throughput | Max throughput, longer pauses |
| **Serial GC** | Small apps | Single-threaded, simple |

### Tuning JVM Memory

\\\`\\\`\\\`java
// JVM flags
// -Xms512m        Initial heap size
// -Xmx4g          Maximum heap size
// -XX:+UseG1GC    Use G1 garbage collector
// -XX:+UseZGC     Use ZGC (Java 15+)
// -XX:MaxGCPauseMillis=200  Target max GC pause
// -Xss512k        Thread stack size
// -XX:+PrintGCDetails  Print GC activity

// Common memory leaks in Java:
// 1. Static collections that grow unbounded
static List<Object> cache = new ArrayList<>(); // ❌ never cleared

// 2. Unclosed resources
// ❌ Connection conn = getConnection(); // never closed
// ✅ try (var conn = getConnection()) { ... }

// 3. Inner class references
// Non-static inner classes hold reference to outer class

// 4. ThreadLocal not removed
ThreadLocal<byte[]> buffer = new ThreadLocal<>();
// ❌ Never call buffer.remove() after use
\\\`\\\`\\\`

### Best Practices

- **Prefer short-lived objects** — they get collected in cheap minor GCs
- **Avoid finalizers** — use \\\\\\\`try-with-resources\\\\\\\` instead
- **Nullify large objects** when done (helps GC in long-lived scopes)
- **Use WeakReference / SoftReference** for caches
- **Monitor with tools**: \\\\\\\`jvisualvm\\\\\\\`, \\\\\\\`jconsole\\\\\\\`, \\\\\\\`jstat -gc\\\\\\\``}]},{id:`design-patterns`,title:`Design Patterns`,icon:`Puzzle`,color:`#a78bfa`,chapters:[{id:`creational-patterns`,title:`Creational Patterns`,content:`## Creational Design Patterns

### Singleton — One Instance Only

\\\`\\\`\\\`java
// Thread-safe Singleton (enum-based — Joshua Bloch recommended)
public enum DatabaseConnection {
    INSTANCE;

    private Connection conn;

    DatabaseConnection() {
        conn = DriverManager.getConnection("jdbc:...");
    }

    public Connection getConnection() { return conn; }
}

// Usage
DatabaseConnection.INSTANCE.getConnection();
\\\`\\\`\\\`

### Builder — Step-by-Step Construction

\\\`\\\`\\\`java
public class User {
    private final String name;
    private final String email;
    private final int age;
    private final String phone;

    private User(Builder builder) {
        this.name = builder.name;
        this.email = builder.email;
        this.age = builder.age;
        this.phone = builder.phone;
    }

    public static class Builder {
        private final String name;   // required
        private String email;        // optional
        private int age;
        private String phone;

        public Builder(String name) { this.name = name; }

        public Builder email(String email) {
            this.email = email; return this;
        }
        public Builder age(int age) {
            this.age = age; return this;
        }
        public Builder phone(String phone) {
            this.phone = phone; return this;
        }
        public User build() { return new User(this); }
    }
}

// Fluent API
User user = new User.Builder("Alice")
    .email("alice@example.com")
    .age(30)
    .build();
\\\`\\\`\\\`

### Factory Method

\\\`\\\`\\\`java
// Define product interface
interface Notification {
    void send(String message);
}

// Concrete products
class EmailNotification implements Notification {
    public void send(String msg) { /* send email */ }
}
class SMSNotification implements Notification {
    public void send(String msg) { /* send SMS */ }
}
class PushNotification implements Notification {
    public void send(String msg) { /* push notification */ }
}

// Factory
class NotificationFactory {
    public static Notification create(String type) {
        return switch (type.toUpperCase()) {
            case "EMAIL" -> new EmailNotification();
            case "SMS"   -> new SMSNotification();
            case "PUSH"  -> new PushNotification();
            default -> throw new IllegalArgumentException("Unknown: " + type);
        };
    }
}

Notification n = NotificationFactory.create("EMAIL");
n.send("Hello!");
\\\`\\\`\\\``},{id:`behavioral-patterns`,title:`Behavioral Patterns`,content:`## Behavioral Design Patterns

### Strategy — Swap Algorithms at Runtime

\\\`\\\`\\\`
+----------------------------+
|        Context             |
|  (uses a Strategy)         |
|                            |
|  strategy.execute(data)    |
+------------+---------------+
             |
             | (interface)
             v
+----------------------------+
|     Strategy Interface     |
|  execute(data)             |
+----------------------------+
    ^          ^          ^
    |          |          |
+-------+  +-------+  +-------+
| Strat |  | Strat |  | Strat |
|   A   |  |   B   |  |   C   |
+-------+  +-------+  +-------+
\\\`\\\`\\\`

\\\`\\\`\\\`java
// Using lambdas (modern approach)
@FunctionalInterface
interface SortStrategy {
    void sort(List<Integer> list);
}

class Sorter {
    private SortStrategy strategy;

    public Sorter(SortStrategy strategy) {
        this.strategy = strategy;
    }

    public void sort(List<Integer> data) {
        strategy.sort(data);
    }
}

// Usage — strategies as lambdas
var sorter = new Sorter(list -> Collections.sort(list));
sorter.sort(myList);

// Swap strategy at runtime
sorter = new Sorter(list -> list.sort(Comparator.reverseOrder()));
\\\`\\\`\\\`

### Observer — Event Notification

\\\`\\\`\\\`java
// Modern Observer with functional interfaces
class EventBus<T> {
    private final List<Consumer<T>> listeners = new ArrayList<>();

    public void subscribe(Consumer<T> listener) {
        listeners.add(listener);
    }

    public void publish(T event) {
        listeners.forEach(l -> l.accept(event));
    }
}

// Usage
var bus = new EventBus<String>();
bus.subscribe(msg -> System.out.println("Logger: " + msg));
bus.subscribe(msg -> System.out.println("Analytics: " + msg));
bus.publish("User signed up!");
// Logger: User signed up!
// Analytics: User signed up!
\\\`\\\`\\\`

### Iterator — Traverse Collections

\\\`\\\`\\\`java
// Java's for-each loop uses Iterator internally
List<String> names = List.of("Alice", "Bob", "Charlie");

// These are equivalent:
for (String name : names) { }

// Under the hood:
Iterator<String> it = names.iterator();
while (it.hasNext()) {
    String name = it.next();
}
\\\`\\\`\\\``},{id:`structural-patterns`,title:`Structural Patterns`,content:`## Structural Design Patterns

### Decorator — Add Behavior Dynamically

\\\`\\\`\\\`
+-------------------+
|   Component       |  <-- Base interface
|   operation()     |
+-------------------+
        ^
        |
+-------------------+     +-------------------------+
| ConcreteComponent |     |      Decorator          |
| operation()       |     |  wraps a Component      |
+-------------------+     |  operation() {          |
                          |    wrapped.operation(); |
                          |    // + extra behavior  |
                          |  }                      |
                          +-------------------------+
\\\`\\\`\\\`

\\\`\\\`\\\`java
// Using Java I/O streams — classic Decorator pattern
InputStream raw = new FileInputStream("data.gz");
InputStream buffered = new BufferedInputStream(raw);        // adds buffering
InputStream unzipped = new GZIPInputStream(buffered);      // adds decompression
Reader reader = new InputStreamReader(unzipped, "UTF-8");   // adds char decoding

// Functional decorator with lambdas
Function<String, String> trim = String::strip;
Function<String, String> lower = String::toLowerCase;
Function<String, String> decorated = trim.andThen(lower);

System.out.println(decorated.apply("  HELLO  ")); // "hello"
\\\`\\\`\\\`

### Adapter — Bridge Incompatible Interfaces

\\\`\\\`\\\`java
// Legacy system uses XML
interface LegacyXMLParser {
    String parseXML(String xml);
}

// New system expects JSON
interface JsonParser {
    String parseJson(String json);
}

// Adapter bridges the gap
class XmlToJsonAdapter implements JsonParser {
    private final LegacyXMLParser xmlParser;

    XmlToJsonAdapter(LegacyXMLParser xmlParser) {
        this.xmlParser = xmlParser;
    }

    @Override
    public String parseJson(String json) {
        String xml = convertJsonToXml(json); // conversion logic
        return xmlParser.parseXML(xml);
    }
}
\\\`\\\`\\\`

### Common Patterns Quick Reference

| Pattern | Type | Purpose | Java Example |
|---------|------|---------|--------------|
| Singleton | Creational | One instance | Runtime.getRuntime() |
| Builder | Creational | Complex construction | StringBuilder |
| Factory | Creational | Delegate instantiation | Calendar.getInstance() |
| Strategy | Behavioral | Swap algorithms | Comparator |
| Observer | Behavioral | Event notification | PropertyChangeListener |
| Iterator | Behavioral | Traverse collection | java.util.Iterator |
| Decorator | Structural | Add behavior | BufferedInputStream |
| Adapter | Structural | Bridge interfaces | InputStreamReader |
| Proxy | Structural | Control access | java.lang.reflect.Proxy |`}]},{id:`string-apis`,title:`String APIs & Regex`,icon:`Type`,color:`#22d3ee`,chapters:[{id:`string-methods`,title:`Essential String Methods`,content:`## Comprehensive String API

### String Immutability

\\\`\\\`\\\`
+--------------------------------------------------+
|  STRING IMMUTABILITY IN JAVA                     |
|                                                  |
|  String s1 = "Hello";                            |
|  String s2 = s1.concat(" World");                |
|                                                  |
|  Heap:                                           |
|  +----------+     +---------------+              |
|  | "Hello"  |     | "Hello World" | <- NEW obj   |
|  +----------+     +---------------+              |
|       ^                  ^                       |
|       |                  |                       |
|     s1 (unchanged)     s2 (points to new)        |
|                                                  |
|  Original "Hello" is NEVER modified.             |
|  Every "modification" creates a NEW String.      |
+--------------------------------------------------+
\\\`\\\`\\\`

### Modern String Methods (Java 11-21)

\\\`\\\`\\\`java
// Java 11+ methods
"  hello  ".strip();         // "hello" (Unicode-aware trim)
"  hello  ".stripLeading();  // "hello  "
"  hello  ".stripTrailing(); // "  hello"
"  ".isBlank();              // true (empty or whitespace)
"Hi\\nWorld".lines().toList();// ["Hi", "World"]
"Ha".repeat(3);              // "HaHaHa"

// Java 12+
"hello".indent(4);           // "    hello\\n"
"hello".transform(s -> s.toUpperCase());  // "HELLO"

// Java 15+ Text Block methods
"Hello World".translateEscapes();  // process \\n, \\t etc.
"Hello World".stripIndent();       // remove incidental whitespace

// Java 21+ Template (Preview)
// String template = STR."Hello \\{name}, you are \\{age}.";
\\\`\\\`\\\`

### StringBuilder vs StringBuffer vs String

| Feature | String | StringBuilder | StringBuffer |
|---------|--------|---------------|--------------|
| Mutable | ❌ No | ✅ Yes | ✅ Yes |
| Thread-safe | ✅ (immutable) | ❌ No | ✅ Yes (synchronized) |
| Performance | Slow for concat | **Fastest** | Slower (sync overhead) |
| Use when | Few modifications | Single-threaded building | Multi-threaded building |

\\\`\\\`\\\`java
// ❌ Slow — creates N intermediate String objects
String result = "";
for (int i = 0; i < 10000; i++) {
    result += i;  // O(n^2) — copies entire string each time!
}

// ✅ Fast — modifies internal buffer
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i);  // O(1) amortized
}
String result2 = sb.toString();
\\\`\\\`\\\`

### String Comparison Deep Dive

\\\`\\\`\\\`java
String a = "Hello";          // String Pool
String b = "Hello";          // Same pool reference
String c = new String("Hello"); // New Heap object

System.out.println(a == b);      // true  (same pool reference)
System.out.println(a == c);      // false (different objects!)
System.out.println(a.equals(c)); // true  (same content) ✅

// ALWAYS use .equals() for String comparison, NEVER ==
\\\`\\\`\\\``},{id:`regex`,title:`Regular Expressions (Regex)`,content:`## Regular Expressions in Java

### Common Regex Patterns

| Pattern | Matches | Example |
|---------|---------|---------|
| \\\\\\\\d | Any digit | "5" |
| \\\\\\\\D | Non-digit | "a" |
| \\\\\\\\w | Word char [a-zA-Z0-9_] | "k" |
| \\\\\\\\s | Whitespace | " " |
| . | Any char (except newline) | "x" |
| [abc] | a, b, or c | "b" |
| [^abc] | NOT a, b, or c | "z" |
| a{2,4} | 2 to 4 'a's | "aaa" |
| ^...$ | Start to end of line | Full match |
| (group) | Capture group | Extract sub-match |

### Using Regex in Java

\\\`\\\`\\\`java
// Simple matching
boolean isEmail = "user@example.com"
    .matches("[\\\\w.]+@[\\\\w.]+\\\\.[a-z]{2,}");  // true

// Pattern + Matcher (reusable, better performance)
Pattern emailPattern = Pattern.compile(
    "([\\\\w.]+)@([\\\\w.]+)\\\\.([a-z]{2,})"
);
Matcher matcher = emailPattern.matcher("alice@gmail.com");

if (matcher.matches()) {
    System.out.println("User: " + matcher.group(1));   // alice
    System.out.println("Domain: " + matcher.group(2)); // gmail
    System.out.println("TLD: " + matcher.group(3));    // com
}

// Find all matches
String text = "Call 123-4567 or 987-6543";
Pattern phonePattern = Pattern.compile("\\\\d{3}-\\\\d{4}");
Matcher m = phonePattern.matcher(text);
while (m.find()) {
    System.out.println("Found: " + m.group());
}
// Found: 123-4567
// Found: 987-6543

// Replace
String cleaned = "Hello   World".replaceAll("\\\\s+", " ");
// "Hello World"

// Split
String[] parts = "a,b,,c".split(",", -1);
// ["a", "b", "", "c"]
\\\`\\\`\\\`

### Named Groups (Java 7+)

\\\`\\\`\\\`java
Pattern datePattern = Pattern.compile(
    "(?<year>\\\\d{4})-(?<month>\\\\d{2})-(?<day>\\\\d{2})"
);
Matcher m2 = datePattern.matcher("2024-12-25");
if (m2.matches()) {
    System.out.println("Year: " + m2.group("year"));   // 2024
    System.out.println("Month: " + m2.group("month")); // 12
    System.out.println("Day: " + m2.group("day"));     // 25
}
\\\`\\\`\\\`

### Common Validation Patterns

\\\`\\\`\\\`java
// Email validation
static final Pattern EMAIL = Pattern.compile(
    "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Za-z]{2,}$"
);

// Phone number (US format)
static final Pattern PHONE = Pattern.compile(
    "^\\\\(?\\\\d{3}\\\\)?[-.\\\\s]?\\\\d{3}[-.\\\\s]?\\\\d{4}$"
);

// Password: 8+ chars, 1 upper, 1 lower, 1 digit, 1 special
static final Pattern STRONG_PASSWORD = Pattern.compile(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\\\d)(?=.*[@#$%^&+=]).{8,}$"
);

// IP address
static final Pattern IPV4 = Pattern.compile(
    "^((25[0-5]|2[0-4]\\\\d|[01]?\\\\d\\\\d?)\\\\.){3}(25[0-5]|2[0-4]\\\\d|[01]?\\\\d\\\\d?)$"
);
\\\`\\\`\\\``}]},{id:`exception-handling`,title:`Exception Handling`,icon:`ShieldAlert`,color:`#f87171`,chapters:[{id:`exceptions`,title:`Exceptions & Error Handling`,content:`## Exception Handling

### Exception Hierarchy

\`\`\`
Throwable
├── Error (don't catch these)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── ...
└── Exception
    ├── IOException (checked)
    ├── SQLException (checked)
    ├── RuntimeException (unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── IllegalArgumentException
    │   ├── ArithmeticException
    │   └── ClassCastException
    └── ...
\`\`\`

### try-catch-finally

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General error: " + e);
} finally {
    System.out.println("Always executes (cleanup)");
}
\`\`\`

### Multi-catch (Java 7+)

\`\`\`java
try {
    // risky code
} catch (IOException | SQLException e) {
    System.out.println("I/O or DB error: " + e.getMessage());
}
\`\`\`

### try-with-resources (Java 7+)

\`\`\`java
// AutoCloseable resources are automatically closed
try (
    var reader = new BufferedReader(new FileReader("data.txt"));
    var writer = new BufferedWriter(new FileWriter("output.txt"))
) {
    String line;
    while ((line = reader.readLine()) != null) {
        writer.write(line.toUpperCase());
        writer.newLine();
    }
} catch (IOException e) {
    System.out.println("File error: " + e.getMessage());
}
// reader & writer are auto-closed even if exception occurs
\`\`\`

### Custom Exceptions

\`\`\`java
// Checked exception
public class InsufficientFundsException extends Exception {
    private final double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds: need " + amount + " more");
        this.amount = amount;
    }

    public double getAmount() { return amount; }
}

// Unchecked exception
public class InvalidUserException extends RuntimeException {
    public InvalidUserException(String userId) {
        super("Invalid user: " + userId);
    }
}

// Using custom exceptions
public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
        throw new InsufficientFundsException(amount - balance);
    }
    balance -= amount;
}
\`\`\`

### Best Practices

\`\`\`java
// ❌ Don't catch generic Exception
try { } catch (Exception e) { }

// ✅ Catch specific exceptions
try { } catch (FileNotFoundException e) { }

// ❌ Don't swallow exceptions silently
try { } catch (IOException e) { /* empty */ }

// ✅ Log or rethrow
try { } catch (IOException e) {
    logger.error("Failed to read file", e);
    throw new ServiceException("File processing failed", e);
}
\`\`\``}]},{id:`generics`,title:`Generics`,icon:`Shapes`,color:`#34d399`,chapters:[{id:`generics-basics`,title:`Generics & Type Safety`,content:`## Generics

Generics enable **type-safe** code that works with any type, caught at compile time rather than runtime.

### Generic Class

\`\`\`java
public class Box<T> {
    private T content;

    public Box(T content) {
        this.content = content;
    }

    public T getContent() { return content; }
    public void setContent(T content) { this.content = content; }
}

Box<String> stringBox = new Box<>("Hello");
String value = stringBox.getContent(); // no casting needed!

Box<Integer> intBox = new Box<>(42);
int num = intBox.getContent();
\`\`\`

### Generic Method

\`\`\`java
public class Util {
    public static <T> T firstNonNull(T a, T b) {
        return a != null ? a : b;
    }

    public static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) >= 0 ? a : b;
    }
}

String s = Util.firstNonNull(null, "default"); // "default"
int m = Util.max(10, 20);                      // 20
\`\`\`

### Bounded Type Parameters

\`\`\`java
// Upper bound: T must be a Number or subclass
public static <T extends Number> double sum(List<T> list) {
    double total = 0;
    for (T item : list) {
        total += item.doubleValue();
    }
    return total;
}

// Multiple bounds
public static <T extends Comparable<T> & Serializable> void process(T item) {
    // T must implement BOTH Comparable AND Serializable
}
\`\`\`

### Wildcards

\`\`\`java
// ? — unknown type
void printAll(List<?> list) {
    for (Object item : list) {
        System.out.println(item);
    }
}

// ? extends T — upper bound (read-only)
double sum(List<? extends Number> nums) {
    double total = 0;
    for (Number n : nums) total += n.doubleValue();
    return total;
    // nums.add(42); // ❌ Cannot add — type unknown
}

// ? super T — lower bound (write)
void addIntegers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
    // Integer i = list.get(0); // ❌ Cannot read as Integer
}
\`\`\`

### PECS Principle

> **P**roducer **E**xtends, **C**onsumer **S**uper

\`\`\`java
// If you READ from a generic collection → use extends
// If you WRITE to a generic collection → use super

public static <T> void copy(
    List<? extends T> source,  // producer (read from)
    List<? super T> dest       // consumer (write to)
) {
    for (T item : source) {
        dest.add(item);
    }
}
\`\`\``}]},{id:`io-files`,title:`I/O & File Handling`,icon:`FileText`,color:`#fb923c`,chapters:[{id:`file-io`,title:`File I/O (NIO.2)`,content:`## File I/O with java.nio.file

### Reading Files

\`\`\`java
import java.nio.file.*;

// Read entire file as string
String content = Files.readString(Path.of("data.txt"));

// Read all lines
List<String> lines = Files.readAllLines(Path.of("data.txt"));

// Stream lines (lazy, memory-efficient for large files)
try (Stream<String> stream = Files.lines(Path.of("data.txt"))) {
    stream
        .filter(line -> !line.isBlank())
        .map(String::strip)
        .forEach(System.out::println);
}
\`\`\`

### Writing Files

\`\`\`java
// Write string
Files.writeString(Path.of("output.txt"), "Hello, Java 21!");

// Write with options
Files.writeString(
    Path.of("log.txt"),
    "New log entry\\n",
    StandardOpenOption.CREATE,
    StandardOpenOption.APPEND
);

// Write lines
List<String> lines = List.of("Line 1", "Line 2", "Line 3");
Files.write(Path.of("output.txt"), lines);
\`\`\`

### Path Operations

\`\`\`java
Path path = Path.of("src", "main", "java", "App.java");

path.getFileName();    // App.java
path.getParent();      // src/main/java
path.toAbsolutePath(); // /home/user/project/src/main/java/App.java
path.getNameCount();   // 4

// Check file properties
Files.exists(path);
Files.isRegularFile(path);
Files.isDirectory(path);
Files.size(path);            // bytes
Files.getLastModifiedTime(path);
\`\`\`

### Directory Operations

\`\`\`java
// Create directory
Files.createDirectory(Path.of("newDir"));
Files.createDirectories(Path.of("a/b/c")); // creates parents too

// List directory
try (Stream<Path> entries = Files.list(Path.of("."))) {
    entries.forEach(System.out::println);
}

// Walk directory tree (recursive)
try (Stream<Path> walk = Files.walk(Path.of("src"))) {
    walk.filter(p -> p.toString().endsWith(".java"))
        .forEach(System.out::println);
}

// Copy, Move, Delete
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
Files.move(source, target, StandardCopyOption.ATOMIC_MOVE);
Files.delete(path); // throws if not exists
Files.deleteIfExists(path);
\`\`\``}]},{id:`database-networking`,title:`Networking, HTTP & JDBC`,icon:`Globe`,color:`#38bdf8`,chapters:[{id:`http-client`,title:`Modern HTTP Client (Java 11-21)`,content:`## Modern HTTP Client (\`java.net.http\`)

Java 11 introduced a modern, non-blocking, HTTP/2-compliant **HttpClient** that replaces outdated \`HttpURLConnection\` and external libraries like Apache HttpClient for standard REST calls.

### Core Architecture

\`\`\`
+---------------------+      +---------------------+      +---------------------+
|     HttpClient      | ---> |     HttpRequest     | ---> |    HttpResponse<T>  |
|  (Client Instance)  |      |  (URI, Method, Body)|      | (Status, Body, Head)|
+---------------------+      +---------------------+      +---------------------+
\`\`\`

### Synchronous GET & POST Requests

\`\`\`java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

// 1. Create client (reusable, thread-safe)
HttpClient client = HttpClient.newBuilder()
    .version(HttpClient.Version.HTTP_2)
    .connectTimeout(Duration.ofSeconds(10))
    .followRedirects(HttpClient.Redirect.NORMAL)
    .build();

// 2. Build GET Request
HttpRequest getRequest = HttpRequest.newBuilder()
    .uri(URI.create("https://api.github.com/users/octocat"))
    .header("Accept", "application/json")
    .GET()
    .build();

// Send synchronously
HttpResponse<String> response = client.send(
    getRequest, 
    HttpResponse.BodyHandlers.ofString()
);

System.out.println("Status: " + response.statusCode());
System.out.println("Body: " + response.body());

// 3. Build POST Request with JSON body
String jsonPayload = """
    {
      "title": "Learn Java 21",
      "completed": false
    }
    """;

HttpRequest postRequest = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/todos"))
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
    .build();

HttpResponse<String> postResponse = client.send(
    postRequest, 
    HttpResponse.BodyHandlers.ofString()
);
System.out.println("Created Status: " + postResponse.statusCode());
\`\`\`

### Asynchronous Non-Blocking Requests (\`CompletableFuture\`)

\`\`\`java
// Send request asynchronously without blocking caller thread:
client.sendAsync(getRequest, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(body -> System.out.println("Async Body: " + body))
    .exceptionally(err -> {
        System.err.println("Request failed: " + err.getMessage());
        return null;
    });
\`\`\``},{id:`jdbc-database`,title:`JDBC & Database Persistence`,content:`## JDBC (Java Database Connectivity)

JDBC is the standard Java API for connecting to relational databases (PostgreSQL, MySQL, Oracle, SQLite, H2).

### Complete CRUD Lifecycle with \`PreparedStatement\`

\`\`\`java
import java.sql.*;

public class DatabaseExample {
    private static final String URL = "jdbc:postgresql://localhost:5432/mydb";
    private static final String USER = "postgres";
    private static final String PASS = "secret";

    public static void main(String[] args) {
        // SQL query with parameterized placeholders (?) to prevent SQL Injection!
        String insertSql = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
        String selectSql = "SELECT id, name, email, age FROM users WHERE age >= ?";

        // Always use try-with-resources for Connection, Statement & ResultSet!
        try (Connection conn = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement insertStmt = conn.prepareStatement(insertSql);
             PreparedStatement selectStmt = conn.prepareStatement(selectSql)) {

            // 1. Insert Record
            insertStmt.setString(1, "Karthik");
            insertStmt.setString(2, "karthik@example.com");
            insertStmt.setInt(3, 25);
            int rowsAffected = insertStmt.executeUpdate();
            System.out.println("Rows inserted: " + rowsAffected);

            // 2. Query Records
            selectStmt.setInt(1, 18);
            try (ResultSet rs = selectStmt.executeQuery()) {
                while (rs.next()) {
                    long id = rs.getLong("id");
                    String name = rs.getString("name");
                    String email = rs.getString("email");
                    int age = rs.getInt("age");
                    System.out.printf("User #%d: %s (%s, age %d)%n", id, name, email, age);
                }
            }

        } catch (SQLException e) {
            System.err.println("Database error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
\`\`\`

### ACID Transactions in JDBC

\`\`\`java
try (Connection conn = DriverManager.getConnection(URL, USER, PASS)) {
    // Disable auto-commit to start a transaction
    conn.setAutoCommit(false);

    try (PreparedStatement debit = conn.prepareStatement(
             "UPDATE accounts SET balance = balance - ? WHERE id = ?");
         PreparedStatement credit = conn.prepareStatement(
             "UPDATE accounts SET balance = balance + ? WHERE id = ?")) {

        // Debit Account A
        debit.setDouble(1, 500.0);
        debit.setInt(2, 101);
        debit.executeUpdate();

        // Credit Account B
        credit.setDouble(1, 500.0);
        credit.setInt(2, 202);
        credit.executeUpdate();

        // Commit both operations together atomically
        conn.commit();
        System.out.println("Transfer successful!");

    } catch (SQLException e) {
        // Rollback on any failure to preserve consistency
        conn.rollback();
        System.err.println("Transaction rolled back: " + e.getMessage());
    } finally {
        conn.setAutoCommit(true);
    }
}
\`\`\``}]},{id:`concurrency`,title:`Concurrency`,icon:`Layers`,color:`#60a5fa`,chapters:[{id:`threads-basics`,title:`Threads & Synchronization`,content:`## Concurrency in Java

### Creating Threads

\`\`\`java
// 1. Implementing Runnable (preferred)
Runnable task = () -> {
    System.out.println("Thread: " + Thread.currentThread().getName());
};
Thread t = new Thread(task, "worker-1");
t.start();

// 2. Extending Thread
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Running in " + getName());
    }
}
new MyThread().start();

// 3. Virtual Threads (Java 21)
Thread.startVirtualThread(() -> {
    System.out.println("Virtual thread!");
});
\`\`\`

### ExecutorService

\`\`\`java
// Thread pool — reuse threads
ExecutorService pool = Executors.newFixedThreadPool(4);

// Submit tasks
Future<String> future = pool.submit(() -> {
    Thread.sleep(1000);
    return "Done!";
});

String result = future.get();       // blocks until complete
String result2 = future.get(5, TimeUnit.SECONDS); // with timeout

// Shutdown
pool.shutdown();                    // graceful
pool.awaitTermination(10, TimeUnit.SECONDS);
\`\`\`

### Synchronization

\`\`\`java
public class BankAccount {
    private double balance;

    // Synchronized method — only one thread at a time
    public synchronized void deposit(double amount) {
        balance += amount;
    }

    public synchronized void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
        }
    }

    // Synchronized block — finer control
    public void transfer(BankAccount to, double amount) {
        synchronized (this) {
            if (this.balance >= amount) {
                this.balance -= amount;
                synchronized (to) {
                    to.balance += amount;
                }
            }
        }
    }
}
\`\`\`

### Concurrent Collections

\`\`\`java
// Thread-safe collections
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("key", 1);
map.computeIfAbsent("key2", k -> 42);

CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
BlockingQueue<String> queue = new LinkedBlockingQueue<>(100);

// Atomic variables
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();     // thread-safe ++
counter.addAndGet(5);          // thread-safe += 5
counter.compareAndSet(6, 10);  // CAS operation
\`\`\`

### CompletableFuture

\`\`\`java
// Async pipeline
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> fetchUserFromDB(userId))
    .thenApply(user -> user.getName())
    .thenApply(String::toUpperCase)
    .exceptionally(ex -> "UNKNOWN");

String name = future.join(); // blocks for result

// Combine multiple futures
CompletableFuture<String> userFuture = CompletableFuture
    .supplyAsync(() -> fetchUser(id));
CompletableFuture<List<Order>> orderFuture = CompletableFuture
    .supplyAsync(() -> fetchOrders(id));

CompletableFuture<UserProfile> combined = userFuture
    .thenCombine(orderFuture, (user, orders) ->
        new UserProfile(user, orders));
\`\`\``}]},{id:`bit-manipulation`,title:`Bit Manipulation & Theory`,icon:`Binary`,color:`#10b981`,chapters:[{id:`bitwise-basics`,title:`Bitwise Operators & 2's Complement`,content:`## Bitwise Operations & Binary Representation

At the hardware level, all data is stored as binary digits (**bits**: \`0\` or \`1\`). Understanding bit manipulation allows you to write ultra-fast, memory-efficient code with **O(1) time and O(1) space**.

### Java Primitive Integer Bit Widths

| Type | Bit Width | Bytes | Value Range |
|------|-----------|-------|-------------|
| \`byte\` | 8 bits | 1 byte | -128 to 127 ($-2^7$ to $2^7-1$) |
| \`short\` | 16 bits | 2 bytes | -32,768 to 32,767 ($-2^{15}$ to $2^{15}-1$) |
| \`int\` | 32 bits | 4 bytes | -2,147,483,648 to 2,147,483,647 ($-2^{31}$ to $2^{31}-1$) |
| \`long\` | 64 bits | 8 bytes | $-2^{63}$ to $2^{63}-1$ |

### Two's Complement Representation (Signed Integers)

Java represents all signed integers using **Two's Complement**.

\`\`\`
+-------------------------------------------------------------------------------+
|                        TWO'S COMPLEMENT (32-bit int)                          |
+-------------------------------------------------------------------------------+
|  Bit 31 (MSB) | Bits 30 - 0                                                   |
|  Sign Bit     | Magnitude Bits                                                |
|  0 = Positive | Value = + (binary value)                                      |
|  1 = Negative | Value = - (~binary value + 1)                                 |
+-------------------------------------------------------------------------------+

Example: 
  +5 in binary:  0000 0000 0000 0000 0000 0000 0000 0101
  Invert bits (~5): 1111 1111 1111 1111 1111 1111 1111 1010
  Add 1 (+1):       1111 1111 1111 1111 1111 1111 1111 1011  (= -5 in Two's Complement)
\`\`\`

### Fundamental Bitwise Operators

\`\`\`
1. AND (&)         2. OR (|)          3. XOR (^)         4. NOT (~)
   0 & 0 = 0          0 | 0 = 0          0 ^ 0 = 0          ~0 = 1
   0 & 1 = 0          0 | 1 = 1          0 ^ 1 = 1          ~1 = 0
   1 & 0 = 0          1 | 0 = 1          1 ^ 0 = 1
   1 & 1 = 1          1 | 1 = 1          1 ^ 1 = 0 (same=0)
\`\`\`

### Bitwise Shift Operators

\`\`\`
+-------------------------------------------------------------------------------+
|                              BIT SHIFT MECHANICS                              |
+-------------------------------------------------------------------------------+
|  Operation        | Symbol | Behavior                                         |
|-------------------+--------+--------------------------------------------------|
| Left Shift        | a << k | Shifts bits left by k, fills right with 0s.      |
|                   |        | Math equivalent: a * 2^k                         |
|-------------------+--------+--------------------------------------------------|
| Arithmetic Right  | a >> k | Shifts bits right by k, preserves SIGN bit (MSB).|
| Shift (Signed)    |        | Math equivalent: a / 2^k                         |
|-------------------+--------+--------------------------------------------------|
| Logical Right     | a >>> k| Shifts bits right by k, ALWAYS fills left with 0s|
| Shift (Unsigned)  |        | Unsigned shift (useful for bitmasks & hashing)   |
+-------------------------------------------------------------------------------+
\`\`\`

\`\`\`java
int a = 5;       //  ...00000101 (binary)
int b = 3;       //  ...00000011 (binary)

System.out.println(a & b);   // 1  (AND:  ...00000001)
System.out.println(a | b);   // 7  (OR:   ...00000111)
System.out.println(a ^ b);   // 6  (XOR:  ...00000110)
System.out.println(~a);      // -6 (NOT:  -(5+1) = -6)

// Shift examples:
int x = 4;       // ...00000100
System.out.println(x << 2);  // 16 (4 * 2^2)
System.out.println(x >> 1);  // 2  (4 / 2^1)

int neg = -8;    // 11111111 11111111 11111111 11111000
System.out.println(neg >> 1);   // -4 (sign preserved)
System.out.println(neg >>> 1);  // 2147483644 (sign NOT preserved, 0 inserted)
\`\`\``},{id:`bit-tricks`,title:`Essential Bit Manipulation Hacks & Tricks`,content:`## Essential Bit Manipulation Tricks & Hacks

Mastering these bit formulas is essential for solving FAANG-level algorithmic challenges in O(1) time.

### 1. Check, Set, Clear, and Toggle $i$-th Bit

\`\`\`
     Bit Index:   7   6   5   4   3   2   1   0
     Number n:    0   0   1   0   1   1   0   1
                                      ^
                                  Target i=2
\`\`\`

\`\`\`java
// 1. Check if i-th bit is set (1) or unset (0)
public boolean isBitSet(int n, int i) {
    return (n & (1 << i)) != 0;
}

// 2. Set the i-th bit to 1
public int setBit(int n, int i) {
    return n | (1 << i);
}

// 3. Clear the i-th bit to 0
public int clearBit(int n, int i) {
    return n & ~(1 << i);
}

// 4. Toggle the i-th bit (0 -> 1 or 1 -> 0)
public int toggleBit(int n, int i) {
    return n ^ (1 << i);
}
\`\`\`

### 2. Brian Kernighan's Algorithm (Clear Lowest Set Bit)

\`n & (n - 1)\` clears the **lowest (rightmost) set bit** of \`n\`.

\`\`\`
Example: n = 12 (binary 1100)
  n     = 1100 (12)
  n - 1 = 1011 (11)
  n & (n-1) = 1000 (8)  <-- lowest set bit cleared!
\`\`\`

\`\`\`java
// Count number of set bits (Hamming Weight) in O(number of 1s) time:
public int countSetBits(int n) {
    int count = 0;
    while (n != 0) {
        n = n & (n - 1); // Clears the lowest set bit in 1 operation!
        count++;
    }
    return count;
}
// Note: Built-in method: Integer.bitCount(n);
\`\`\`

### 3. Power of Two Check

A positive number is a power of 2 if and only if it has **exactly one set bit**.

\`\`\`java
public boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}
// Examples:
// 8 (1000) & 7 (0111) = 0000 -> true
// 6 (0110) & 5 (0101) = 0100 != 0 -> false
\`\`\`

### 4. Extract Lowest Set Bit (LSB)

\`n & (-n)\` isolates the lowest set bit of \`n\`.

\`\`\`
Example: n = 12 (0000 1100)
  -n = ~n + 1 = (1111 0011) + 1 = (1111 0100)
  n & (-n) = (0000 1100) & (1111 0100) = 0000 0100 (4)
\`\`\`

\`\`\`java
int lsb = n & (-n); // Used extensively in Fenwick Trees (Binary Indexed Trees)!
\`\`\`

### 5. XOR Properties & Single Number Problem

\`\`\`
XOR Properties:
1. a ^ 0 = a
2. a ^ a = 0 (self-cancellation)
3. a ^ b ^ a = b (commutative & associative)
\`\`\`

\`\`\`java
// Find single non-duplicate number in array where every other element appears twice:
public int singleNumber(int[] nums) {
    int unique = 0;
    for (int num : nums) {
        unique ^= num; // Duplicate pairs cancel out to 0!
    }
    return unique;
}

// Swap two variables without temporary variable:
public void swap(int a, int b) {
    a ^= b;
    b ^= a;
    a ^= b;
}
\`\`\``},{id:`bit-masking`,title:`Bitmasking, State Compression & Subsets`,content:`## Bitmasking & State Compression

A **Bitmask** uses an integer's binary representation to represent a **set of boolean flags** or a **subset of elements**.

### 1. Generating All $2^n$ Subsets (Power Set)

If a set has $n$ elements, there are $2^n$ total subsets. We can map numbers from $0$ to $2^n - 1$ directly to subsets!

\`\`\`
Array: ["A", "B", "C"]  (n = 3, Total subsets = 2^3 = 8)

Mask (Binary) | Included Elements | Subset
--------------+-------------------+------------
 000 (0)      | None              | []
 001 (1)      | Index 0 (A)       | [A]
 010 (2)      | Index 1 (B)       | [B]
 011 (3)      | Index 0, 1 (A, B) | [A, B]
 100 (4)      | Index 2 (C)       | [C]
 101 (5)      | Index 0, 2 (A, C) | [A, C]
 110 (6)      | Index 1, 2 (B, C) | [B, C]
 111 (7)      | Index 0, 1, 2     | [A, B, C]
\`\`\`

\`\`\`java
public List<List<Integer>> subsets(int[] nums) {
    int n = nums.length;
    int totalSubsets = 1 << n; // 2^n
    List<List<Integer>> result = new ArrayList<>();

    for (int mask = 0; mask < totalSubsets; mask++) {
        List<Integer> current = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            // Check if i-th bit is set in mask
            if ((mask & (1 << i)) != 0) {
                current.add(nums[i]);
            }
        }
        result.add(current);
    }
    return result;
}
\`\`\`

### 2. Fast Character Set Representation (Alphabet Bitmask)

Instead of using a \`HashSet<Character>\` or \`boolean[26]\` array, use a single 32-bit \`int\` bitmask!

\`\`\`java
// Check if word contains all unique lowercase letters ('a'-'z'):
public boolean hasAllUniqueChars(String s) {
    int mask = 0;
    for (char c : s.toCharArray()) {
        int bit = c - 'a';
        if ((mask & (1 << bit)) != 0) {
            return false; // Character already seen!
        }
        mask |= (1 << bit); // Mark character as seen
    }
    return true;
}
\`\`\`

### 3. Java \`BitSet\` Class

For sets larger than 64 bits, use Java's built-in \`java.util.BitSet\`:

\`\`\`java
BitSet bs1 = new BitSet(100);
BitSet bs2 = new BitSet(100);

bs1.set(2);
bs1.set(5);
bs1.set(10);

bs2.set(5);
bs2.set(20);

// Bitwise operations directly on BitSets:
bs1.and(bs2);      // Intersection: keeps only common bits (bit 5)
bs1.or(bs2);       // Union: combines all set bits
bs1.xor(bs2);      // Symmetric difference
System.out.println(bs1.get(5)); // true
System.out.println(bs1.cardinality()); // count of set bits
\`\`\``}]},{id:`dsa-java`,title:`DSA in Java`,icon:`GitBranch`,color:`#2dd4bf`,chapters:[{id:`big-o`,title:`Big-O Notation & Complexity`,content:`## Big-O Notation

Big-O describes how an algorithm's time or space grows as input size \`n\` increases.

### Common Complexities

| Big-O | Name | Example |
|-------|------|---------|
| O(1) | Constant | Array access, HashMap get |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search, single loop |
| O(n log n) | Linearithmic | Merge sort, Tim sort |
| O(n²) | Quadratic | Nested loops, bubble sort |
| O(2ⁿ) | Exponential | Recursive fibonacci |
| O(n!) | Factorial | Permutations |

### Analyzing Code

\`\`\`java
// O(1) — constant
int first = arr[0];

// O(n) — linear
for (int i = 0; i < n; i++) {
    // constant work
}

// O(n²) — quadratic
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // constant work
    }
}

// O(log n) — logarithmic
while (n > 0) {
    n /= 2;
}

// O(n log n)
Arrays.sort(arr); // Tim Sort
\`\`\`

### Space Complexity

\`\`\`java
// O(1) space — in-place
void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// O(n) space — new array
int[] doubled = new int[n];
for (int i = 0; i < n; i++) {
    doubled[i] = arr[i] * 2;
}

// O(n) space — recursion call stack
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // n stack frames
}
\`\`\``},{id:`sorting-algorithms`,title:`Sorting Algorithms`,content:`## Sorting Algorithms in Java

### Built-in Sorting

\`\`\`java
int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr); // Tim Sort — O(n log n)

List<String> names = new ArrayList<>(List.of("Charlie", "Alice", "Bob"));
Collections.sort(names); // Tim Sort

// Custom comparator
names.sort(Comparator.comparingInt(String::length));
names.sort(Comparator.comparing(String::length).reversed());
\`\`\`

### Merge Sort Implementation

\`\`\`java
public static void mergeSort(int[] arr, int left, int right) {
    if (left >= right) return;

    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

private static void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    System.arraycopy(temp, 0, arr, left, temp.length);
}
\`\`\`

### Quick Sort Implementation

\`\`\`java
public static void quickSort(int[] arr, int low, int high) {
    if (low >= high) return;

    int pivotIdx = partition(arr, low, high);
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }

    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}
\`\`\`

### Sorting Comparison

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ |
| Tim Sort | O(n) | O(n log n) | O(n log n) | O(n) | ✅ |`},{id:`common-patterns`,title:`Common DSA Patterns`,content:`## Common DSA Patterns in Java

### Visual Algorithmic Patterns

#### 1. Two Pointers (Inward Convergence)
\`\`\`
  [ 1,  2,  4,  6,  8,  11 ]   Target = 10
    ^                    ^
   Left                Right    (Sum = 12 > 10 -> Right--)

  [ 1,  2,  4,  6,  8,  11 ]
    ^               ^
   Left           Right         (Sum = 9 < 10 -> Left++)

  [ 1,  2,  4,  6,  8,  11 ]
        ^           ^
       Left       Right         (Sum = 10 == 10 -> Found [2, 8]!)
\`\`\`

#### 2. Sliding Window (Dynamic Expansion & Contraction)
\`\`\`
Subarray Sum / Frequency Window:
   Step 1: [ 2,  1,  5,  1 ], k = 3   Window = [2, 1, 5] (Sum = 8)
             L       R

   Step 2: [ 2,  1,  5,  1,  3 ]       Window = [1, 5, 1] (Sum = 7)
                 L       R

   Step 3: [ 2,  1,  5,  1,  3 ]       Window = [5, 1, 3] (Sum = 9 -> Max!)
                     L       R
\`\`\`

#### 3. Tree Traversal Mechanics (BFS vs DFS)
\`\`\`
          ( 1 )                 BFS (Level Order): [1] -> [2, 3] -> [4, 5, 6]
         /                     Queue: Front -> 4, 5, 6 -> Back
       ( 2 )   ( 3 )
      /                       DFS (Pre-order):  Root -> Left -> Right (1, 2, 4, 5, 3, 6)
    ( 4 ) ( 5 )   ( 6 )         DFS (In-order):   Left -> Root -> Right (4, 2, 5, 1, 3, 6)
                                DFS (Post-order): Left -> Right -> Root (4, 5, 2, 6, 3, 1)
\`\`\`

#### 4. Dynamic Programming State Transitions
\`\`\`
   Staircase Problem: dp[i] = dp[i-1] + dp[i-2]

   +-------+-------+-------+-------+-------+
   | dp[0] | dp[1] | dp[2] | dp[3] | dp[4] |
   |   1   |   1   |   2   |   3   |   5   |
   +-------+-------+-------+-------+-------+
                       ^       ^       ^
                       |       |       +-- dp[2] + dp[3] = 5
                       +-------+---------- dp[1] + dp[2] = 3
\`\`\`

### Two Pointers

\`\`\`java
// Check if sorted array has pair summing to target
public boolean twoSum(int[] sorted, int target) {
    int left = 0, right = sorted.length - 1;
    while (left < right) {
        int sum = sorted[left] + sorted[right];
        if (sum == target) return true;
        else if (sum < target) left++;
        else right--;
    }
    return false;
}
\`\`\`

### Sliding Window

\`\`\`java
// Max sum of subarray of size k
public int maxSumSubarray(int[] arr, int k) {
    int windowSum = 0, maxSum = 0;
    for (int i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k) windowSum -= arr[i - k];
        if (i >= k - 1) maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
\`\`\`

### Binary Search Template

\`\`\`java
public int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2; // avoids overflow
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // not found
}
\`\`\`

### BFS Template (Graph/Tree)

\`\`\`java
public void bfs(Map<Integer, List<Integer>> graph, int start) {
    Queue<Integer> queue = new LinkedList<>();
    Set<Integer> visited = new HashSet<>();
    queue.offer(start);
    visited.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.println("Visit: " + node);

        for (int neighbor : graph.getOrDefault(node, List.of())) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.offer(neighbor);
            }
        }
    }
}
\`\`\`

### DFS Template (Graph/Tree)

\`\`\`java
public void dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited) {
    visited.add(node);
    System.out.println("Visit: " + node);

    for (int neighbor : graph.getOrDefault(node, List.of())) {
        if (!visited.contains(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
\`\`\`

### Backtracking Template

\`\`\`java
public void backtrack(List<List<Integer>> result, List<Integer> current,
                      int[] nums, int start) {
    result.add(new ArrayList<>(current)); // save snapshot

    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);             // choose
        backtrack(result, current, nums, i + 1); // explore
        current.remove(current.size() - 1); // un-choose
    }
}
\`\`\`

### Dynamic Programming Template

\`\`\`java
// Bottom-up (tabulation)
public int climbStairs(int n) {
    if (n <= 2) return n;
    int[] dp = new int[n + 1];
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Space-optimized
public int climbStairsOptimized(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
\`\`\``}]}],Un={Blocks:ne,Boxes:oe,Database:ye,Sparkles:He,ShieldAlert:Re,Shapes:Le,FileText:Se,Layers:Ee,GitBranch:we,Flame:Ce,Zap:qe,Code2:ge};function Wn({code:e}){let[t,n]=(0,_.useState)(!1),r=()=>{navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)},i=e=>{if(e.trim().startsWith(`//`))return(0,M.jsx)(`span`,{style:{color:`#64748b`,fontStyle:`italic`},children:e});let t=e.split(/(\s+|[(){}[\].,;:=+\-*/<>!&|^?%"])/g),n=new Set(`public.private.protected.class.interface.record.sealed.permits.non-sealed.extends.implements.static.final.abstract.default.void.return.if.else.switch.case.yield.when.for.while.do.break.continue.try.catch.finally.throw.throws.new.instanceof.var.import.package.this.super.null.true.false`.split(`.`)),r=new Set(`int.long.double.float.boolean.char.byte.short.String.Integer.Double.Long.Boolean.Character.Object.List.ArrayList.LinkedList.Set.HashSet.TreeSet.LinkedHashSet.Map.HashMap.TreeMap.LinkedHashMap.Entry.Queue.Deque.ArrayDeque.PriorityQueue.Optional.Stream.IntStream.Collectors.Thread.Executors.ExecutorService.Future.CompletableFuture.Path.Files.Arrays.Collections.Math.System.Comparator.Function.Predicate.Consumer.Supplier.Exception.RuntimeException`.split(`.`)),i=!1;return t.map((e,t)=>e?e===`"`?(i=!i,(0,M.jsx)(`span`,{style:{color:`#86efac`},children:`"`},t)):i?(0,M.jsx)(`span`,{style:{color:`#86efac`},children:e},t):n.has(e)?(0,M.jsx)(`span`,{style:{color:`#f472b6`,fontWeight:600},children:e},t):r.has(e)?(0,M.jsx)(`span`,{style:{color:`#38bdf8`,fontWeight:500},children:e},t):/^\d+(\.\d+)?[fLdD]?$/.test(e)?(0,M.jsx)(`span`,{style:{color:`#facc15`},children:e},t):e.startsWith(`@`)?(0,M.jsx)(`span`,{style:{color:`#c084fc`,fontStyle:`italic`},children:e},t):(0,M.jsx)(`span`,{style:{color:`#e2e8f0`},children:e},t):null)},a=e.split(`
`);return(0,M.jsxs)(`div`,{style:{position:`relative`,backgroundColor:`#090d16`,border:`1px solid #1e293b`,borderRadius:`10px`,margin:`18px 0`,overflow:`hidden`,boxShadow:`0 4px 20px rgba(0,0,0,0.35)`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`8px 16px`,backgroundColor:`#0f172a`,borderBottom:`1px solid #1e293b`,fontSize:`12px`,color:`#94a3b8`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`5px`},children:[(0,M.jsx)(`span`,{style:{width:`10px`,height:`10px`,borderRadius:`50%`,backgroundColor:`#ef4444`,opacity:.7}}),(0,M.jsx)(`span`,{style:{width:`10px`,height:`10px`,borderRadius:`50%`,backgroundColor:`#f59e0b`,opacity:.7}}),(0,M.jsx)(`span`,{style:{width:`10px`,height:`10px`,borderRadius:`50%`,backgroundColor:`#10b981`,opacity:.7}})]}),(0,M.jsx)(`span`,{style:{color:`#38bdf8`,fontWeight:600,marginLeft:`6px`},children:`Java 21`}),(0,M.jsxs)(`span`,{style:{color:`#64748b`},children:[`• `,a.length,` lines`]})]}),(0,M.jsxs)(`button`,{onClick:r,style:{display:`flex`,alignItems:`center`,gap:`6px`,background:t?`rgba(16, 185, 129, 0.15)`:`rgba(30, 41, 59, 0.7)`,border:`1px solid ${t?`#10b981`:`#334155`}`,color:t?`#10b981`:`#cbd5e1`,padding:`4px 10px`,borderRadius:`6px`,fontSize:`12px`,cursor:`pointer`,transition:`all 0.2s`},children:[t?(0,M.jsx)(ce,{size:13}):(0,M.jsx)(_e,{size:13}),(0,M.jsx)(`span`,{children:t?`Copied!`:`Copy Code`})]})]}),(0,M.jsx)(`pre`,{style:{margin:0,padding:`16px`,overflowX:`auto`,fontSize:`13.5px`,lineHeight:1.6,fontFamily:`JetBrains Mono, monospace`},children:(0,M.jsx)(`code`,{children:a.map((e,t)=>(0,M.jsxs)(`div`,{style:{display:`flex`},children:[(0,M.jsx)(`span`,{style:{display:`inline-block`,width:`32px`,color:`#475569`,textAlign:`right`,marginRight:`16px`,userSelect:`none`,fontSize:`12px`},children:t+1}),(0,M.jsx)(`span`,{style:{flex:1},children:i(e)})]},t))})})]})}function Gn({content:e}){let t=(0,_.useMemo)(()=>{if(!e)return null;let t=[];return e.split(/(```[\s\S]*?```)/g).forEach((e,n)=>{if(e.startsWith("```")){let r=e.match(/```(\w+)?\n?([\s\S]*?)```/),i=r?r[2].trim():e.replace(/```/g,``);t.push((0,M.jsx)(Wn,{code:i},n))}else{let r=e.split(`
`),i=[],a=!1,o=e=>{if(i.length>0){let n=i[0],r=i.slice(2);t.push((0,M.jsx)(`div`,{style:{overflowX:`auto`,margin:`18px 0`},children:(0,M.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`13.5px`,backgroundColor:`#0f172a`,borderRadius:`8px`,overflow:`hidden`,border:`1px solid #1e293b`},children:[(0,M.jsx)(`thead`,{children:(0,M.jsx)(`tr`,{style:{backgroundColor:`#1e293b`,borderBottom:`2px solid #334155`},children:n.map((e,t)=>(0,M.jsx)(`th`,{style:{padding:`10px 14px`,textAlign:`left`,color:`#f8fafc`,fontWeight:600},children:e},t))})}),(0,M.jsx)(`tbody`,{children:r.map((e,t)=>(0,M.jsx)(`tr`,{style:{borderBottom:`1px solid #1e293b`,backgroundColor:t%2==0?`transparent`:`rgba(30, 41, 59, 0.3)`},children:e.map((e,t)=>(0,M.jsx)(`td`,{style:{padding:`10px 14px`,color:`#cbd5e1`},children:Kn(e)},t))},t))})]})},`table-${e}`)),i=[]}};r.forEach((e,r)=>{let s=e.trim();if(s.startsWith(`|`)&&s.endsWith(`|`)){a=!0;let e=s.split(`|`).slice(1,-1).map(e=>e.trim());i.push(e);return}if(a&&(a=!1,o(r)),s){if(s.startsWith(`### `))t.push((0,M.jsxs)(`h3`,{style:{fontSize:`17px`,fontWeight:700,color:`#38bdf8`,marginTop:`24px`,marginBottom:`10px`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`span`,{style:{color:`#818cf8`},children:`#`}),s.replace(`### `,``)]},`${n}-${r}`));else if(s.startsWith(`## `))t.push((0,M.jsx)(`h2`,{style:{fontSize:`21px`,fontWeight:800,color:`#f8fafc`,marginTop:`32px`,marginBottom:`14px`,borderBottom:`1px solid #1e293b`,paddingBottom:`8px`,letterSpacing:`-0.01em`},children:s.replace(`## `,``)},`${n}-${r}`));else if(s.startsWith(`# `))t.push((0,M.jsx)(`h1`,{style:{fontSize:`26px`,fontWeight:800,color:`#f8fafc`,marginTop:`20px`,marginBottom:`16px`,letterSpacing:`-0.02em`},children:s.replace(`# `,``)},`${n}-${r}`));else if(s.startsWith(`> [!NOTE]`)||s.startsWith(`> [!TIP]`)||s.startsWith(`> ⚠️`)||s.startsWith(`> `)){let e=s.replace(/^>\s*(\[!NOTE\]|\[!TIP\]|⚠️)?\s*/,``);t.push((0,M.jsxs)(`div`,{style:{backgroundColor:`rgba(56, 189, 248, 0.08)`,borderLeft:`4px solid #38bdf8`,padding:`12px 16px`,borderRadius:`0 8px 8px 0`,margin:`16px 0`,color:`#cbd5e1`,fontSize:`14px`,lineHeight:1.6},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`,color:`#38bdf8`,fontWeight:600,marginBottom:`4px`},children:[(0,M.jsx)(He,{size:15}),(0,M.jsx)(`span`,{children:`Pro Tip / Note`})]}),(0,M.jsx)(`div`,{children:Kn(e)})]},`${n}-${r}`))}else s.startsWith(`- `)||s.startsWith(`* `)?t.push((0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,gap:`10px`,margin:`6px 0 6px 12px`,color:`#cbd5e1`,fontSize:`14.5px`,lineHeight:1.6},children:[(0,M.jsx)(`span`,{style:{color:`#38bdf8`,fontSize:`16px`,lineHeight:`1.2`},children:`•`}),(0,M.jsx)(`span`,{style:{flex:1},children:Kn(s.substring(2))})]},`${n}-${r}`)):t.push((0,M.jsx)(`p`,{style:{margin:`10px 0`,color:`#cbd5e1`,fontSize:`14.5px`,lineHeight:1.7},children:Kn(s)},`${n}-${r}`))}}),a&&o(`end`)}}),t},[e]);return(0,M.jsx)(`div`,{style:{color:`#cbd5e1`},children:t})}function Kn(e){return e&&e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")?(0,M.jsx)(`code`,{style:{backgroundColor:`rgba(56, 189, 248, 0.12)`,color:`#38bdf8`,padding:`2px 6px`,borderRadius:`4px`,fontSize:`13px`,fontFamily:`JetBrains Mono, monospace`,border:`1px solid rgba(56, 189, 248, 0.25)`},children:e.slice(1,-1)},t):e.startsWith(`**`)&&e.endsWith(`**`)?(0,M.jsx)(`strong`,{style:{color:`#f8fafc`,fontWeight:700},children:e.slice(2,-2)},t):e)}function qn({theoryProgress:e=[],onToggleTheoryRead:t,onNavigateToWorkspace:n}){let[r,i]=(0,_.useState)(Hn[0].id),[a,o]=(0,_.useState)(Hn[0].chapters[0].id),[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(`all`),[d,f]=(0,_.useState)({}),p=e=>{f(t=>({...t,[e]:!t[e]}))},m=(0,_.useMemo)(()=>Hn.find(e=>e.id===r)||Hn[0],[r]),h=(0,_.useMemo)(()=>{for(let e of Hn){let t=e.chapters.find(e=>e.id===a);if(t)return t}return Hn[0].chapters[0]},[a]),g=(0,_.useMemo)(()=>{let e=[];return Hn.forEach(t=>{t.chapters.forEach(n=>{e.push({sectionId:t.id,sectionTitle:t.title,...n})})}),e},[]),v=g.findIndex(e=>e.id===a),y=v>0?g[v-1]:null,b=v<g.length-1?g[v+1]:null,x=(0,_.useMemo)(()=>Hn.map(e=>{if(l===`java21`&&e.id!==`modern-java`&&e.id!==`fundamentals`||l===`oop`&&e.id!==`oop`||l===`collections`&&e.id!==`collections`&&e.id!==`generics`||l===`dsa`&&e.id!==`dsa-java`)return null;if(!s.trim())return e;let t=s.toLowerCase(),n=e.chapters.filter(e=>e.title.toLowerCase().includes(t)||e.content.toLowerCase().includes(t));return n.length===0&&!e.title.toLowerCase().includes(t)?null:{...e,chapters:n.length>0?n:e.chapters}}).filter(Boolean),[s,l]),S=g.length,C=g.filter(t=>e.includes(t.id)).length,w=S>0?Math.round(C/S*100):0,T=e.includes(a),E=(e,t)=>{i(e),o(t),window.scrollTo({top:0,behavior:`smooth`})};return(0,M.jsxs)(`div`,{style:{maxWidth:`1440px`,margin:`0 auto`,padding:`24px 20px`,display:`flex`,gap:`24px`},children:[(0,M.jsxs)(`aside`,{style:{width:`340px`,flexShrink:0,display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,M.jsxs)(`div`,{className:`glass-panel`,style:{padding:`18px`,flexShrink:0},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,marginBottom:`12px`},children:[(0,M.jsx)(`div`,{style:{background:`linear-gradient(135deg, #0284c7 0%, #6366f1 100%)`,padding:`6px`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,boxShadow:`0 0 10px rgba(56, 189, 248, 0.3)`},children:(0,M.jsx)(re,{size:18,color:`#ffffff`})}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h2`,{style:{fontSize:`16px`,fontWeight:800,color:`#f8fafc`},children:`Java 21 Mastery`}),(0,M.jsx)(`p`,{style:{fontSize:`12px`,color:`#94a3b8`},children:`Modern Concepts & DSA Guide`})]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`12px`,marginBottom:`6px`},children:[(0,M.jsx)(`span`,{style:{color:`#94a3b8`},children:`Completion Progress`}),(0,M.jsxs)(`span`,{style:{color:`#10b981`,fontWeight:700},children:[C,`/`,S,` (`,w,`%)`]})]}),(0,M.jsx)(`div`,{style:{width:`100%`,height:`6px`,backgroundColor:`#1e293b`,borderRadius:`4px`,overflow:`hidden`},children:(0,M.jsx)(`div`,{style:{width:`${w}%`,height:`100%`,background:`linear-gradient(90deg, #0284c7 0%, #10b981 100%)`,transition:`width 0.3s ease`}})})]})]}),(0,M.jsxs)(`div`,{className:`glass-panel`,style:{padding:`14px`,flexShrink:0},children:[(0,M.jsxs)(`div`,{style:{position:`relative`,marginBottom:`10px`},children:[(0,M.jsx)(Pe,{size:15,color:`#94a3b8`,style:{position:`absolute`,left:`10px`,top:`10px`}}),(0,M.jsx)(`input`,{type:`text`,placeholder:`Search concepts (e.g. Virtual Threads, Record, Streams)...`,value:s,onChange:e=>c(e.target.value),style:{width:`100%`,backgroundColor:`#0b0f19`,border:`1px solid #1e293b`,borderRadius:`8px`,padding:`8px 12px 8px 34px`,color:`#f8fafc`,fontSize:`13px`,outline:`none`}})]}),(0,M.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`6px`},children:[{id:`all`,label:`All`},{id:`java21`,label:`⚡ Java 21 LTS`},{id:`oop`,label:`OOP & Records`},{id:`collections`,label:`Collections`},{id:`dsa`,label:`DSA Templates`}].map(e=>(0,M.jsx)(`button`,{onClick:()=>u(e.id),style:{fontSize:`11px`,fontWeight:600,padding:`4px 8px`,borderRadius:`6px`,border:l===e.id?`1px solid #38bdf8`:`1px solid #1e293b`,backgroundColor:l===e.id?`rgba(56, 189, 248, 0.15)`:`#0b0f19`,color:l===e.id?`#38bdf8`:`#94a3b8`,cursor:`pointer`,transition:`all 0.15s`},children:e.label},e.id))})]}),(0,M.jsx)(`div`,{style:{overflowY:`auto`,maxHeight:`calc(100vh - 280px)`,display:`flex`,flexDirection:`column`,gap:`10px`,paddingRight:`4px`},children:x.map(n=>{let r=Un[n.icon]||re,i=d[n.id],o=n.chapters.every(t=>e.includes(t.id));return(0,M.jsxs)(`div`,{className:`glass-panel`,style:{overflow:`hidden`,flexShrink:0},children:[(0,M.jsxs)(`div`,{onClick:()=>p(n.id),style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`12px 14px`,backgroundColor:`#131c2e`,cursor:`pointer`,userSelect:`none`,borderBottom:i?`none`:`1px solid #1e293b`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(r,{size:16,color:n.color}),(0,M.jsx)(`span`,{style:{fontSize:`13.5px`,fontWeight:700,color:`#f8fafc`},children:n.title}),(0,M.jsx)(`span`,{style:{fontSize:`11px`,color:`#94a3b8`,backgroundColor:`#1e293b`,padding:`1px 6px`,borderRadius:`10px`},children:n.chapters.length})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`6px`},children:[o&&(0,M.jsx)(j,{size:14,color:`#10b981`}),i?(0,M.jsx)(ue,{size:15,color:`#94a3b8`}):(0,M.jsx)(le,{size:15,color:`#94a3b8`})]})]}),!i&&(0,M.jsx)(`div`,{style:{padding:`6px 8px`,display:`flex`,flexDirection:`column`,gap:`4px`},children:n.chapters.map(r=>{let i=a===r.id,o=e.includes(r.id);return(0,M.jsxs)(`div`,{onClick:()=>E(n.id,r.id),style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`8px 10px`,borderRadius:`6px`,cursor:`pointer`,backgroundColor:i?`rgba(56, 189, 248, 0.12)`:`transparent`,border:`1px solid ${i?`rgba(56, 189, 248, 0.3)`:`transparent`}`,transition:`all 0.15s`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,overflow:`hidden`},children:[(0,M.jsx)(`button`,{onClick:e=>{e.stopPropagation(),t(r.id)},style:{background:`none`,border:`none`,cursor:`pointer`,padding:0,display:`flex`,color:o?`#10b981`:`#475569`},title:o?`Mark unread`:`Mark as read`,children:o?(0,M.jsx)(j,{size:14}):(0,M.jsx)(pe,{size:14})}),(0,M.jsx)(`span`,{style:{fontSize:`13px`,color:i?`#38bdf8`:o?`#94a3b8`:`#e2e8f0`,fontWeight:i?600:400,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:r.title})]}),i&&(0,M.jsx)(ue,{size:14,color:`#38bdf8`})]},r.id)})})]},n.id)})})]}),(0,M.jsx)(`main`,{style:{flex:1,minWidth:0},children:(0,M.jsxs)(`div`,{className:`glass-panel`,style:{padding:`32px 36px`,minHeight:`calc(100vh - 120px)`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,borderBottom:`1px solid #1e293b`,paddingBottom:`20px`,marginBottom:`28px`,gap:`16px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:[(0,M.jsx)(`span`,{style:{backgroundColor:`rgba(56, 189, 248, 0.12)`,color:`#38bdf8`,fontSize:`12px`,fontWeight:700,padding:`3px 8px`,borderRadius:`6px`,border:`1px solid rgba(56, 189, 248, 0.3)`},children:m.title}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`4px`,color:`#94a3b8`,fontSize:`12px`},children:[(0,M.jsx)(me,{size:13}),(0,M.jsx)(`span`,{children:`5-8 min read`})]})]}),(0,M.jsx)(`h1`,{style:{fontSize:`28px`,fontWeight:800,color:`#f8fafc`,letterSpacing:`-0.02em`,margin:0},children:h.title})]}),(0,M.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`},children:(0,M.jsxs)(`button`,{onClick:()=>t(h.id),className:`btn-secondary`,style:{backgroundColor:T?`rgba(16, 185, 129, 0.15)`:`#1e293b`,borderColor:T?`#10b981`:`#334155`,color:T?`#10b981`:`#cbd5e1`},children:[T?(0,M.jsx)(j,{size:15}):(0,M.jsx)(pe,{size:15}),(0,M.jsx)(`span`,{children:T?`Completed`:`Mark Complete`})]})})]}),(0,M.jsx)(`div`,{style:{minHeight:`400px`},children:(0,M.jsx)(Gn,{content:h.content})}),(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,marginTop:`48px`,paddingTop:`24px`,borderTop:`1px solid #1e293b`,gap:`16px`},children:[y?(0,M.jsxs)(`button`,{onClick:()=>E(y.sectionId,y.id),className:`btn-secondary`,style:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`10px 16px`},children:[(0,M.jsx)(ee,{size:16}),(0,M.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`#94a3b8`},children:`Previous`}),(0,M.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:600},children:y.title})]})]}):(0,M.jsx)(`div`,{}),b?(0,M.jsxs)(`button`,{onClick:()=>E(b.sectionId,b.id),className:`btn-primary`,style:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`10px 16px`},children:[(0,M.jsxs)(`div`,{style:{textAlign:`right`},children:[(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`rgba(255,255,255,0.7)`},children:`Next`}),(0,M.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:600},children:b.title})]}),(0,M.jsx)(te,{size:16})]}):(0,M.jsx)(`div`,{})]})]})})]})}function Jn({isOpen:e,onClose:t,onResetAllData:n}){let[r,i]=(0,_.useState)({geminiApiKey:``,theme:`vs-dark`,fontSize:14,autoRunTests:!0,enableSounds:!0}),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{e&&(i(nt.getSettings()),o(!1))},[e]),e?(0,M.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundColor:`rgba(0, 0, 0, 0.7)`,backdropFilter:`blur(6px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:100},children:(0,M.jsxs)(`div`,{className:`glass-panel`,style:{width:`100%`,maxWidth:`520px`,backgroundColor:`#0f172a`,border:`1px solid #334155`,borderRadius:`16px`,overflow:`hidden`,boxShadow:`0 20px 40px rgba(0,0,0,0.5)`},children:[(0,M.jsxs)(`div`,{style:{padding:`16px 20px`,borderBottom:`1px solid #1e293b`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(He,{size:18,color:`#38bdf8`}),(0,M.jsx)(`h2`,{style:{fontSize:`16px`,fontWeight:600,color:`#f8fafc`},children:`Settings & AI Configuration`})]}),(0,M.jsx)(`button`,{onClick:t,style:{background:`none`,border:`none`,color:`#94a3b8`,cursor:`pointer`},children:(0,M.jsx)(Ke,{size:18})})]}),(0,M.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),nt.saveSettings(r),o(!0),setTimeout(()=>{o(!1),t()},1e3)},style:{padding:`20px`,display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginBottom:`6px`},children:[(0,M.jsxs)(`label`,{style:{fontSize:`13px`,fontWeight:500,color:`#e2e8f0`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(Te,{size:14,color:`#38bdf8`}),(0,M.jsx)(`span`,{children:`Google Gemini API Key (Optional)`})]}),(0,M.jsxs)(`a`,{href:`https://aistudio.google.com/app/apikey`,target:`_blank`,rel:`noreferrer`,style:{fontSize:`12px`,color:`#38bdf8`,textDecoration:`none`,display:`flex`,alignItems:`center`,gap:`3px`},children:[(0,M.jsx)(`span`,{children:`Get Free Key`}),(0,M.jsx)(be,{size:11})]})]}),(0,M.jsxs)(`div`,{style:{position:`relative`},children:[(0,M.jsx)(`input`,{type:s?`text`:`password`,placeholder:`AIzaSy...`,value:r.geminiApiKey,onChange:e=>i({...r,geminiApiKey:e.target.value}),style:{width:`100%`,backgroundColor:`#090d16`,border:`1px solid #273549`,borderRadius:`8px`,padding:`10px 12px`,color:`#f8fafc`,fontSize:`13px`,outline:`none`}}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>c(!s),style:{position:`absolute`,right:`10px`,top:`10px`,background:`none`,border:`none`,color:`#64748b`,fontSize:`11px`,cursor:`pointer`},children:s?`Hide`:`Show`})]}),(0,M.jsx)(`p`,{style:{fontSize:`11px`,color:`#64748b`,marginTop:`6px`},children:`*Without an API key, NeetCode AI uses the built-in intelligent offline tutor engine automatically.`})]}),(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:`12px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`label`,{style:{fontSize:`13px`,fontWeight:500,color:`#e2e8f0`,display:`block`,marginBottom:`6px`},children:`Editor Theme`}),(0,M.jsxs)(`select`,{value:r.theme,onChange:e=>i({...r,theme:e.target.value}),style:{width:`100%`,backgroundColor:`#090d16`,border:`1px solid #273549`,borderRadius:`8px`,padding:`8px 12px`,color:`#f8fafc`,fontSize:`13px`,outline:`none`},children:[(0,M.jsx)(`option`,{value:`vs-dark`,children:`VS Dark (Default)`}),(0,M.jsx)(`option`,{value:`light`,children:`Light`})]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`label`,{style:{fontSize:`13px`,fontWeight:500,color:`#e2e8f0`,display:`block`,marginBottom:`6px`},children:`Font Size`}),(0,M.jsxs)(`select`,{value:r.fontSize,onChange:e=>i({...r,fontSize:Number(e.target.value)}),style:{width:`100%`,backgroundColor:`#090d16`,border:`1px solid #273549`,borderRadius:`8px`,padding:`8px 12px`,color:`#f8fafc`,fontSize:`13px`,outline:`none`},children:[(0,M.jsx)(`option`,{value:12,children:`12 px`}),(0,M.jsx)(`option`,{value:14,children:`14 px`}),(0,M.jsx)(`option`,{value:16,children:`16 px`}),(0,M.jsx)(`option`,{value:18,children:`18 px`})]})]})]}),(0,M.jsxs)(`div`,{style:{borderTop:`1px solid #1e293b`,paddingTop:`16px`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:500,color:`#f87171`},children:`Reset Progress`}),(0,M.jsx)(`div`,{style:{fontSize:`11px`,color:`#64748b`},children:`Wipe all solved statuses & user code`})]}),(0,M.jsxs)(`button`,{type:`button`,onClick:()=>{window.confirm(`Are you sure you want to reset all solved problems, notes, and local code? This cannot be undone.`)&&(n(),t())},style:{backgroundColor:`rgba(239, 68, 68, 0.1)`,border:`1px solid rgba(239, 68, 68, 0.3)`,color:`#ef4444`,padding:`6px 12px`,borderRadius:`8px`,fontSize:`12px`,cursor:`pointer`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(Ge,{size:13}),(0,M.jsx)(`span`,{children:`Reset Data`})]})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`10px`,marginTop:`8px`},children:[(0,M.jsx)(`button`,{type:`button`,onClick:t,className:`btn-secondary`,children:`Cancel`}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn-primary`,children:[a?(0,M.jsx)(ce,{size:15}):null,(0,M.jsx)(`span`,{children:a?`Saved!`:`Save Preferences`})]})]})]})]})}):null}function Yn({isOpen:e,onClose:t,problemStatus:n}){if(!e)return null;let r=N.length,i=N.filter(e=>n[e.id]?.status===`solved`).length,a=N.filter(e=>n[e.id]?.status===`attempted`).length,o=N.filter(e=>e.difficulty===`Easy`).length,s=N.filter(e=>e.difficulty===`Easy`&&n[e.id]?.status===`solved`).length,c=N.filter(e=>e.difficulty===`Medium`).length,l=N.filter(e=>e.difficulty===`Medium`&&n[e.id]?.status===`solved`).length,u=N.filter(e=>e.difficulty===`Hard`).length,d=N.filter(e=>e.difficulty===`Hard`&&n[e.id]?.status===`solved`).length;return(0,M.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundColor:`rgba(0, 0, 0, 0.7)`,backdropFilter:`blur(6px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,zIndex:100},children:(0,M.jsxs)(`div`,{className:`glass-panel`,style:{width:`100%`,maxWidth:`560px`,backgroundColor:`#0f172a`,border:`1px solid #334155`,borderRadius:`16px`,overflow:`hidden`,boxShadow:`0 20px 40px rgba(0,0,0,0.5)`,maxHeight:`85vh`,display:`flex`,flexDirection:`column`},children:[(0,M.jsxs)(`div`,{style:{padding:`16px 20px`,borderBottom:`1px solid #1e293b`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(A,{size:18,color:`#38bdf8`}),(0,M.jsx)(`h2`,{style:{fontSize:`16px`,fontWeight:600,color:`#f8fafc`},children:`Your DSA Progress Analytics`})]}),(0,M.jsx)(`button`,{onClick:t,style:{background:`none`,border:`none`,color:`#94a3b8`,cursor:`pointer`},children:(0,M.jsx)(Ke,{size:18})})]}),(0,M.jsxs)(`div`,{style:{padding:`20px`,overflowY:`auto`,display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,M.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`12px`},children:[(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,padding:`14px`,borderRadius:`10px`,border:`1px solid #1e293b`,textAlign:`center`},children:[(0,M.jsx)(`div`,{style:{color:`#38bdf8`,fontSize:`24px`,fontWeight:700},children:i}),(0,M.jsx)(`div`,{style:{color:`#94a3b8`,fontSize:`12px`},children:`Solved`})]}),(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,padding:`14px`,borderRadius:`10px`,border:`1px solid #1e293b`,textAlign:`center`},children:[(0,M.jsx)(`div`,{style:{color:`#f59e0b`,fontSize:`24px`,fontWeight:700},children:a}),(0,M.jsx)(`div`,{style:{color:`#94a3b8`,fontSize:`12px`},children:`Attempted`})]}),(0,M.jsxs)(`div`,{style:{backgroundColor:`#090d16`,padding:`14px`,borderRadius:`10px`,border:`1px solid #1e293b`,textAlign:`center`},children:[(0,M.jsxs)(`div`,{style:{color:`#10b981`,fontSize:`24px`,fontWeight:700},children:[r>0?Math.round(i/r*100):0,`%`]}),(0,M.jsx)(`div`,{style:{color:`#94a3b8`,fontSize:`12px`},children:`Completion`})]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:`#e2e8f0`,marginBottom:`12px`},children:`Difficulty Breakdown`}),(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`13px`,marginBottom:`4px`},children:[(0,M.jsx)(`span`,{style:{color:`#10b981`,fontWeight:500},children:`Easy`}),(0,M.jsxs)(`span`,{style:{color:`#94a3b8`},children:[s,` / `,o,` (`,o>0?Math.round(s/o*100):0,`%)`]})]}),(0,M.jsx)(`div`,{style:{height:`6px`,backgroundColor:`#1e293b`,borderRadius:`4px`,overflow:`hidden`},children:(0,M.jsx)(`div`,{style:{height:`100%`,width:`${o>0?s/o*100:0}%`,backgroundColor:`#10b981`}})})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`13px`,marginBottom:`4px`},children:[(0,M.jsx)(`span`,{style:{color:`#f59e0b`,fontWeight:500},children:`Medium`}),(0,M.jsxs)(`span`,{style:{color:`#94a3b8`},children:[l,` / `,c,` (`,c>0?Math.round(l/c*100):0,`%)`]})]}),(0,M.jsx)(`div`,{style:{height:`6px`,backgroundColor:`#1e293b`,borderRadius:`4px`,overflow:`hidden`},children:(0,M.jsx)(`div`,{style:{height:`100%`,width:`${c>0?l/c*100:0}%`,backgroundColor:`#f59e0b`}})})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`13px`,marginBottom:`4px`},children:[(0,M.jsx)(`span`,{style:{color:`#ef4444`,fontWeight:500},children:`Hard`}),(0,M.jsxs)(`span`,{style:{color:`#94a3b8`},children:[d,` / `,u,` (`,u>0?Math.round(d/u*100):0,`%)`]})]}),(0,M.jsx)(`div`,{style:{height:`6px`,backgroundColor:`#1e293b`,borderRadius:`4px`,overflow:`hidden`},children:(0,M.jsx)(`div`,{style:{height:`100%`,width:`${u>0?d/u*100:0}%`,backgroundColor:`#ef4444`}})})]})]})]}),(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h3`,{style:{fontSize:`14px`,fontWeight:600,color:`#e2e8f0`,marginBottom:`12px`},children:`Topic Mastery`}),(0,M.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:Xe.map(e=>{let t=N.filter(t=>t.category===e.id),r=t.filter(e=>n[e.id]?.status===`solved`).length,i=t.length>0?Math.round(r/t.length*100):0;return(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,fontSize:`13px`,backgroundColor:`#090d16`,padding:`8px 12px`,borderRadius:`8px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`span`,{style:{width:`8px`,height:`8px`,borderRadius:`50%`,backgroundColor:e.color}}),(0,M.jsx)(`span`,{style:{color:`#f1f5f9`},children:e.name})]}),(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsxs)(`span`,{style:{color:`#94a3b8`},children:[r,`/`,t.length]}),(0,M.jsxs)(`span`,{style:{fontSize:`12px`,fontWeight:600,color:i>0?`#38bdf8`:`#64748b`,minWidth:`35px`,textAlign:`right`},children:[i,`%`]})]})]},e.id)})})]})]})]})})}function Xn(){let[e,t]=(0,_.useState)(`roadmap`),[n,r]=(0,_.useState)(N[0]),[i,a]=(0,_.useState)(`all`),[o,s]=(0,_.useState)({}),[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1);(0,_.useEffect)(()=>{s(nt.getProblemStatus()),l(nt.getBookmarks()),d(nt.getTheoryProgress())},[]);let g=(e,t)=>{nt.setProblemStatus(e,t),s(nt.getProblemStatus())},v=e=>{let t=nt.toggleBookmark(e);l(t)},y=e=>{let t=nt.toggleTheoryRead(e);d(t)},b=e=>{r(e),t(`workspace`)},x=e=>{a(e),t(`problems`)},S=()=>{let e=N[Math.floor(Math.random()*N.length)];b(e)},C=()=>{localStorage.clear(),s({}),l([]),d([])},w=N.filter(e=>o[e.id]?.status===`solved`).length;return(0,M.jsxs)(`div`,{style:{minHeight:`100vh`,display:`flex`,flexDirection:`column`,backgroundColor:`#0b0f19`},children:[(0,M.jsx)(Ye,{currentView:e,setCurrentView:t,selectedProblem:n,onSelectRandom:S,solvedCount:w,totalCount:N.length,onOpenSettings:()=>p(!0),onOpenStats:()=>h(!0)}),(0,M.jsxs)(`main`,{style:{flex:1},children:[e===`roadmap`&&(0,M.jsx)(Ze,{problemStatus:o,onSelectCategory:x,onSelectProblem:b}),e===`problems`&&(0,M.jsx)(Qe,{problemStatus:o,bookmarks:c,onToggleBookmark:v,onSelectProblem:b,initialCategory:i}),e===`theory`&&(0,M.jsx)(qn,{theoryProgress:u,onToggleTheoryRead:y,onNavigateToWorkspace:e=>b(e)}),e===`workspace`&&n&&(0,M.jsx)(Vn,{problem:n,problemStatus:o,onStatusChange:g,onOpenSettings:()=>p(!0)})]}),(0,M.jsx)(Jn,{isOpen:f,onClose:()=>p(!1),onResetAllData:C}),(0,M.jsx)(Yn,{isOpen:m,onClose:()=>h(!1),problemStatus:o})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(_.StrictMode,{children:(0,M.jsx)(Xn,{})}));
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function RM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vf={exports:{}},Sa={},Hf={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function bM(){if(t0)return ht;t0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(F,ie,Ne){this.props=F,this.context=ie,this.refs=T,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(F,ie,Ne){this.props=F,this.context=ie,this.refs=T,this.updater=Ne||x}var b=D.prototype=new y;b.constructor=D,M(b,S.prototype),b.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function k(F,ie,Ne){var Q,fe={},xe=null,ve=null;if(ie!=null)for(Q in ie.ref!==void 0&&(ve=ie.ref),ie.key!==void 0&&(xe=""+ie.key),ie)U.call(ie,Q)&&!O.hasOwnProperty(Q)&&(fe[Q]=ie[Q]);var Ae=arguments.length-2;if(Ae===1)fe.children=Ne;else if(1<Ae){for(var Fe=Array(Ae),Je=0;Je<Ae;Je++)Fe[Je]=arguments[Je+2];fe.children=Fe}if(F&&F.defaultProps)for(Q in Ae=F.defaultProps,Ae)fe[Q]===void 0&&(fe[Q]=Ae[Q]);return{$$typeof:n,type:F,key:xe,ref:ve,props:fe,_owner:I.current}}function P(F,ie){return{$$typeof:n,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function V(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ne){return ie[Ne]})}var le=/\/+/g;function ee(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):ie.toString(36)}function ae(F,ie,Ne,Q,fe){var xe=typeof F;(xe==="undefined"||xe==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(xe){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case n:case e:ve=!0}}if(ve)return ve=F,fe=fe(ve),F=Q===""?"."+ee(ve,0):Q,R(fe)?(Ne="",F!=null&&(Ne=F.replace(le,"$&/")+"/"),ae(fe,ie,Ne,"",function(Je){return Je})):fe!=null&&(C(fe)&&(fe=P(fe,Ne+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(le,"$&/")+"/")+F)),ie.push(fe)),1;if(ve=0,Q=Q===""?".":Q+":",R(F))for(var Ae=0;Ae<F.length;Ae++){xe=F[Ae];var Fe=Q+ee(xe,Ae);ve+=ae(xe,ie,Ne,Fe,fe)}else if(Fe=v(F),typeof Fe=="function")for(F=Fe.call(F),Ae=0;!(xe=F.next()).done;)xe=xe.value,Fe=Q+ee(xe,Ae++),ve+=ae(xe,ie,Ne,Fe,fe);else if(xe==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(F,ie,Ne){if(F==null)return F;var Q=[],fe=0;return ae(F,Q,"","",function(xe){return ie.call(Ne,xe,fe++)}),Q}function ce(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Ne){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ne)},function(Ne){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ne)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var re={current:null},B={transition:null},ue={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:he,forEach:function(F,ie,Ne){he(F,function(){ie.apply(this,arguments)},Ne)},count:function(F){var ie=0;return he(F,function(){ie++}),ie},toArray:function(F){return he(F,function(ie){return ie})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ht.Component=S,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=D,ht.StrictMode=r,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=se,ht.cloneElement=function(F,ie,Ne){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Q=M({},F.props),fe=F.key,xe=F.ref,ve=F._owner;if(ie!=null){if(ie.ref!==void 0&&(xe=ie.ref,ve=I.current),ie.key!==void 0&&(fe=""+ie.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Fe in ie)U.call(ie,Fe)&&!O.hasOwnProperty(Fe)&&(Q[Fe]=ie[Fe]===void 0&&Ae!==void 0?Ae[Fe]:ie[Fe])}var Fe=arguments.length-2;if(Fe===1)Q.children=Ne;else if(1<Fe){Ae=Array(Fe);for(var Je=0;Je<Fe;Je++)Ae[Je]=arguments[Je+2];Q.children=Ae}return{$$typeof:n,type:F.type,key:fe,ref:xe,props:Q,_owner:ve}},ht.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},ht.createElement=k,ht.createFactory=function(F){var ie=k.bind(null,F);return ie.type=F,ie},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:c,render:F}},ht.isValidElement=C,ht.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:ce}},ht.memo=function(F,ie){return{$$typeof:h,type:F,compare:ie===void 0?null:ie}},ht.startTransition=function(F){var ie=B.transition;B.transition={};try{F()}finally{B.transition=ie}},ht.unstable_act=se,ht.useCallback=function(F,ie){return re.current.useCallback(F,ie)},ht.useContext=function(F){return re.current.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F){return re.current.useDeferredValue(F)},ht.useEffect=function(F,ie){return re.current.useEffect(F,ie)},ht.useId=function(){return re.current.useId()},ht.useImperativeHandle=function(F,ie,Ne){return re.current.useImperativeHandle(F,ie,Ne)},ht.useInsertionEffect=function(F,ie){return re.current.useInsertionEffect(F,ie)},ht.useLayoutEffect=function(F,ie){return re.current.useLayoutEffect(F,ie)},ht.useMemo=function(F,ie){return re.current.useMemo(F,ie)},ht.useReducer=function(F,ie,Ne){return re.current.useReducer(F,ie,Ne)},ht.useRef=function(F){return re.current.useRef(F)},ht.useState=function(F){return re.current.useState(F)},ht.useSyncExternalStore=function(F,ie,Ne){return re.current.useSyncExternalStore(F,ie,Ne)},ht.useTransition=function(){return re.current.useTransition()},ht.version="18.3.1",ht}var n0;function Bh(){return n0||(n0=1,Hf.exports=bM()),Hf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function PM(){if(i0)return Sa;i0=1;var n=Bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(p in d)r.call(d,p)&&!l.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:v,ref:x,props:g,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=u,Sa.jsxs=u,Sa}var r0;function DM(){return r0||(r0=1,Vf.exports=PM()),Vf.exports}var Y=DM(),we=Bh();const LM=RM(we);var au={},Gf={exports:{}},jn={},Wf={exports:{}},jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function NM(){return s0||(s0=1,function(n){function e(B,ue){var se=B.length;B.push(ue);e:for(;0<se;){var F=se-1>>>1,ie=B[F];if(0<o(ie,ue))B[F]=ue,B[se]=ie,se=F;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ue=B[0],se=B.pop();if(se!==ue){B[0]=se;e:for(var F=0,ie=B.length,Ne=ie>>>1;F<Ne;){var Q=2*(F+1)-1,fe=B[Q],xe=Q+1,ve=B[xe];if(0>o(fe,se))xe<ie&&0>o(ve,fe)?(B[F]=ve,B[xe]=se,F=xe):(B[F]=fe,B[Q]=se,F=Q);else if(xe<ie&&0>o(ve,se))B[F]=ve,B[xe]=se,F=xe;else break e}}return ue}function o(B,ue){var se=B.sortIndex-ue.sortIndex;return se!==0?se:B.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,v=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ue=t(h);ue!==null;){if(ue.callback===null)r(h);else if(ue.startTime<=B)r(h),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(h)}}function R(B){if(T=!1,b(B),!M)if(t(d)!==null)M=!0,ce(U);else{var ue=t(h);ue!==null&&re(R,ue.startTime-B)}}function U(B,ue){M=!1,T&&(T=!1,y(k),k=-1),x=!0;var se=v;try{for(b(ue),g=t(d);g!==null&&(!(g.expirationTime>ue)||B&&!V());){var F=g.callback;if(typeof F=="function"){g.callback=null,v=g.priorityLevel;var ie=F(g.expirationTime<=ue);ue=n.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(d)&&r(d),b(ue)}else r(d);g=t(d)}if(g!==null)var Ne=!0;else{var Q=t(h);Q!==null&&re(R,Q.startTime-ue),Ne=!1}return Ne}finally{g=null,v=se,x=!1}}var I=!1,O=null,k=-1,P=5,C=-1;function V(){return!(n.unstable_now()-C<P)}function le(){if(O!==null){var B=n.unstable_now();C=B;var ue=!0;try{ue=O(!0,B)}finally{ue?ee():(I=!1,O=null)}}else I=!1}var ee;if(typeof D=="function")ee=function(){D(le)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=le,ee=function(){he.postMessage(null)}}else ee=function(){S(le,0)};function ce(B){O=B,I||(I=!0,ee())}function re(B,ue){k=S(function(){B(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,ce(U))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(B){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var se=v;v=ue;try{return B()}finally{v=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,ue){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=v;v=B;try{return ue()}finally{v=se}},n.unstable_scheduleCallback=function(B,ue,se){var F=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,B={id:p++,callback:ue,priorityLevel:B,startTime:se,expirationTime:ie,sortIndex:-1},se>F?(B.sortIndex=se,e(h,B),t(d)===null&&B===t(h)&&(T?(y(k),k=-1):T=!0,re(R,se-F))):(B.sortIndex=ie,e(d,B),M||x||(M=!0,ce(U))),B},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(B){var ue=v;return function(){var se=v;v=ue;try{return B.apply(this,arguments)}finally{v=se}}}}(jf)),jf}var o0;function IM(){return o0||(o0=1,Wf.exports=NM()),Wf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function UM(){if(a0)return jn;a0=1;var n=Bh(),e=IM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return d.call(g,i)?!0:d.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,f,m,_,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,m,f)&&(a=null),f||m===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):m.mustUseProperty?i[m.propertyName]=a===null?m.type===3?!1:"":a:(s=m.attributeName,f=m.attributeNamespace,a===null?i.removeAttribute(s):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),V=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),B=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,F;function ie(i){if(F===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var Ne=!1;function Q(i,s){if(!i||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ne){var f=ne}Reflect.construct(i,[],s)}else{try{s.call()}catch(ne){f=ne}i.call(s.prototype)}else{try{throw Error()}catch(ne){f=ne}i()}}catch(ne){if(ne&&f&&typeof ne.stack=="string"){for(var m=ne.stack.split(`
`),_=f.stack.split(`
`),E=m.length-1,N=_.length-1;1<=E&&0<=N&&m[E]!==_[N];)N--;for(;1<=E&&0<=N;E--,N--)if(m[E]!==_[N]){if(E!==1||N!==1)do if(E--,N--,0>N||m[E]!==_[N]){var z=`
`+m[E].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=E&&0<=N);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?ie(i):""}function fe(i){switch(i.tag){case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return i=Q(i.type,!1),i;case 11:return i=Q(i.type.render,!1),i;case 1:return i=Q(i.type,!0),i;default:return""}}function xe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case I:return"Portal";case P:return"Profiler";case k:return"StrictMode";case ee:return"Suspense";case ae:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case C:return(i._context.displayName||"Context")+".Provider";case le:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case he:return s=i.displayName||null,s!==null?s:xe(i.type)||"Memo";case ce:s=i._payload,i=i._init;try{return xe(i(s))}catch{}}return null}function ve(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Fe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Fe(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(E){f=""+E,_.call(this,E)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function bt(i){i._valueTracker||(i._valueTracker=Je(i))}function vt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Fe(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function H(i,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function bn(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Ae(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function gt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function ft(i,s){gt(i,s);var a=Ae(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Rt(i,s.type,a):s.hasOwnProperty("defaultValue")&&Rt(i,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function qe(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Rt(i,s,a){(s!=="number"||It(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var je=Array.isArray;function L(i,s,a,f){if(i=i.options,s){s={};for(var m=0;m<a.length;m++)s["$"+a[m]]=!0;for(a=0;a<i.length;a++)m=s.hasOwnProperty("$"+i[a].value),i[a].selected!==m&&(i[a].selected=m),m&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Ae(a),s=null,m=0;m<i.length;m++){if(i[m].value===a){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Z(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Ae(a)}}function me(i,s){var a=Ae(s.value),f=Ae(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function _e(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Oe=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,m)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ct(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){Be.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function Ke(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function nt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,m=Ke(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,m):i[a]=m}}var ze=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(ze[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,oe=null,pe=null;function Le(i){if(i=oa(i)){if(typeof Re!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ml(s),Re(i.stateNode,i.type,s))}}function De(i){oe?pe?pe.push(i):pe=[i]:oe=i}function ot(){if(oe){var i=oe,s=pe;if(pe=oe=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Ft(i,s){return i(s)}function en(){}var St=!1;function Bn(i,s,a){if(St)return i(s,a);St=!0;try{return Ft(i,s,a)}finally{St=!1,(oe!==null||pe!==null)&&(en(),ot())}}function Pn(i,s){var a=i.stateNode;if(a===null)return null;var f=Ml(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ns=!1;if(c)try{var dr={};Object.defineProperty(dr,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",dr,dr),window.removeEventListener("test",dr,dr)}catch{Ns=!1}function zi(i,s,a,f,m,_,E,N,z){var ne=Array.prototype.slice.call(arguments,3);try{s.apply(a,ne)}catch(ye){this.onError(ye)}}var Vi=!1,Zr=null,Qr=!1,hr=null,el={onError:function(i){Vi=!0,Zr=i}};function Is(i,s,a,f,m,_,E,N,z){Vi=!1,Zr=null,zi.apply(el,arguments)}function tl(i,s,a,f,m,_,E,N,z){if(Is.apply(this,arguments),Vi){if(Vi){var ne=Zr;Vi=!1,Zr=null}else throw Error(t(198));Qr||(Qr=!0,hr=ne)}}function Ai(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function nl(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function il(i){if(Ai(i)!==i)throw Error(t(188))}function uc(i){var s=i.alternate;if(!s){if(s=Ai(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var m=a.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){a=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===a)return il(m),i;if(_===f)return il(m),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=m,f=_;else{for(var E=!1,N=m.child;N;){if(N===a){E=!0,a=m,f=_;break}if(N===f){E=!0,f=m,a=_;break}N=N.sibling}if(!E){for(N=_.child;N;){if(N===a){E=!0,a=_,f=m;break}if(N===f){E=!0,f=_,a=m;break}N=N.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function rl(i){return i=uc(i),i!==null?sl(i):null}function sl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=sl(i);if(s!==null)return s;i=i.sibling}return null}var ol=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,j=e.unstable_shouldYield,te=e.unstable_requestPaint,$=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,Ge=null;function yt(i){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(tt,i,void 0,(i.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:xt,Wt=Math.log,Bt=Math.LN2;function xt(i){return i>>>=0,i===0?32:31-(Wt(i)/Bt|0)|0}var $e=64,jt=4194304;function _t(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function yn(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,E=a&268435455;if(E!==0){var N=E&~m;N!==0?f=_t(N):(_&=E,_!==0&&(f=_t(_)))}else E=a&~m,E!==0?f=_t(E):_!==0&&(f=_t(_));if(f===0)return 0;if(s!==0&&s!==f&&!(s&m)&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if(f&4&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-at(s),m=1<<a,f|=i[a],s&=~m;return f}function pr(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-at(_),N=1<<E,z=m[E];z===-1?(!(N&a)||N&f)&&(m[E]=pr(N,s)):z<=s&&(i.expiredLanes|=N),_&=~N}}function Hi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nt(){var i=$e;return $e<<=1,!($e&4194240)&&($e=64),i}function xn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function ln(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-at(s),i[s]=a}function gn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var m=31-at(a),_=1<<m;s[m]=0,f[m]=-1,i[m]=-1,a&=~_}}function un(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-at(a),m=1<<f;m&s|i[f]&s&&(i[f]|=s),a&=~m}}var Mt=0;function Ci(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Ip,cc,Up,Fp,Op,fc=!1,al=[],mr=null,gr=null,vr=null,Wo=new Map,jo=new Map,_r=[],Zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kp(i,s){switch(i){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Wo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(s.pointerId)}}function Xo(i,s,a,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=oa(s),s!==null&&cc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function Qx(i,s,a,f,m){switch(s){case"focusin":return mr=Xo(mr,i,s,a,f,m),!0;case"dragenter":return gr=Xo(gr,i,s,a,f,m),!0;case"mouseover":return vr=Xo(vr,i,s,a,f,m),!0;case"pointerover":var _=m.pointerId;return Wo.set(_,Xo(Wo.get(_)||null,i,s,a,f,m)),!0;case"gotpointercapture":return _=m.pointerId,jo.set(_,Xo(jo.get(_)||null,i,s,a,f,m)),!0}return!1}function Bp(i){var s=Jr(i.target);if(s!==null){var a=Ai(s);if(a!==null){if(s=a.tag,s===13){if(s=nl(a),s!==null){i.blockedOn=s,Op(i.priority,function(){Up(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ll(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=hc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);At=f,a.target.dispatchEvent(f),At=null}else return s=oa(a),s!==null&&cc(s),i.blockedOn=a,!1;s.shift()}return!0}function zp(i,s,a){ll(i)&&a.delete(s)}function Jx(){fc=!1,mr!==null&&ll(mr)&&(mr=null),gr!==null&&ll(gr)&&(gr=null),vr!==null&&ll(vr)&&(vr=null),Wo.forEach(zp),jo.forEach(zp)}function Yo(i,s){i.blockedOn===s&&(i.blockedOn=null,fc||(fc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jx)))}function qo(i){function s(m){return Yo(m,i)}if(0<al.length){Yo(al[0],i);for(var a=1;a<al.length;a++){var f=al[a];f.blockedOn===i&&(f.blockedOn=null)}}for(mr!==null&&Yo(mr,i),gr!==null&&Yo(gr,i),vr!==null&&Yo(vr,i),Wo.forEach(s),jo.forEach(s),a=0;a<_r.length;a++)f=_r[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<_r.length&&(a=_r[0],a.blockedOn===null);)Bp(a),a.blockedOn===null&&_r.shift()}var Us=R.ReactCurrentBatchConfig,ul=!0;function eS(i,s,a,f){var m=Mt,_=Us.transition;Us.transition=null;try{Mt=1,dc(i,s,a,f)}finally{Mt=m,Us.transition=_}}function tS(i,s,a,f){var m=Mt,_=Us.transition;Us.transition=null;try{Mt=4,dc(i,s,a,f)}finally{Mt=m,Us.transition=_}}function dc(i,s,a,f){if(ul){var m=hc(i,s,a,f);if(m===null)Pc(i,s,f,cl,a),kp(i,f);else if(Qx(m,i,s,a,f))f.stopPropagation();else if(kp(i,f),s&4&&-1<Zx.indexOf(i)){for(;m!==null;){var _=oa(m);if(_!==null&&Ip(_),_=hc(i,s,a,f),_===null&&Pc(i,s,f,cl,a),_===m)break;m=_}m!==null&&f.stopPropagation()}else Pc(i,s,f,null,a)}}var cl=null;function hc(i,s,a,f){if(cl=null,i=W(f),i=Jr(i),i!==null)if(s=Ai(i),s===null)i=null;else if(a=s.tag,a===13){if(i=nl(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return cl=i,null}function Vp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Me:return 1;case be:return 4;case Ie:case Ve:return 16;case it:return 536870912;default:return 16}default:return 16}}var yr=null,pc=null,fl=null;function Hp(){if(fl)return fl;var i,s=pc,a=s.length,f,m="value"in yr?yr.value:yr.textContent,_=m.length;for(i=0;i<a&&s[i]===m[i];i++);var E=a-i;for(f=1;f<=E&&s[a-f]===m[_-f];f++);return fl=m.slice(i,1<f?1-f:void 0)}function dl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function hl(){return!0}function Gp(){return!1}function Yn(i){function s(a,f,m,_,E){this._reactName=a,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var N in i)i.hasOwnProperty(N)&&(a=i[N],this[N]=a?a(_):_[N]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?hl:Gp,this.isPropagationStopped=Gp,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),s}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=Yn(Fs),$o=se({},Fs,{view:0,detail:0}),nS=Yn($o),gc,vc,Ko,pl=se({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ko&&(Ko&&i.type==="mousemove"?(gc=i.screenX-Ko.screenX,vc=i.screenY-Ko.screenY):vc=gc=0,Ko=i),gc)},movementY:function(i){return"movementY"in i?i.movementY:vc}}),Wp=Yn(pl),iS=se({},pl,{dataTransfer:0}),rS=Yn(iS),sS=se({},$o,{relatedTarget:0}),_c=Yn(sS),oS=se({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),aS=Yn(oS),lS=se({},Fs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),uS=Yn(lS),cS=se({},Fs,{data:0}),jp=Yn(cS),fS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=hS[i])?!!s[i]:!1}function yc(){return pS}var mS=se({},$o,{key:function(i){if(i.key){var s=fS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=dl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?dS[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(i){return i.type==="keypress"?dl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?dl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),gS=Yn(mS),vS=se({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Yn(vS),_S=se({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),yS=Yn(_S),xS=se({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),SS=Yn(xS),MS=se({},pl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ES=Yn(MS),TS=[9,13,27,32],xc=c&&"CompositionEvent"in window,Zo=null;c&&"documentMode"in document&&(Zo=document.documentMode);var wS=c&&"TextEvent"in window&&!Zo,Yp=c&&(!xc||Zo&&8<Zo&&11>=Zo),qp=" ",$p=!1;function Kp(i,s){switch(i){case"keyup":return TS.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Os=!1;function AS(i,s){switch(i){case"compositionend":return Zp(s);case"keypress":return s.which!==32?null:($p=!0,qp);case"textInput":return i=s.data,i===qp&&$p?null:i;default:return null}}function CS(i,s){if(Os)return i==="compositionend"||!xc&&Kp(i,s)?(i=Hp(),fl=pc=yr=null,Os=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Yp&&s.locale!=="ko"?null:s.data;default:return null}}var RS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!RS[i.type]:s==="textarea"}function Jp(i,s,a,f){De(f),s=yl(s,"onChange"),0<s.length&&(a=new mc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Qo=null,Jo=null;function bS(i){vm(i,0)}function ml(i){var s=Hs(i);if(vt(s))return i}function PS(i,s){if(i==="change")return s}var em=!1;if(c){var Sc;if(c){var Mc="oninput"in document;if(!Mc){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Mc=typeof tm.oninput=="function"}Sc=Mc}else Sc=!1;em=Sc&&(!document.documentMode||9<document.documentMode)}function nm(){Qo&&(Qo.detachEvent("onpropertychange",im),Jo=Qo=null)}function im(i){if(i.propertyName==="value"&&ml(Jo)){var s=[];Jp(s,Jo,i,W(i)),Bn(bS,s)}}function DS(i,s,a){i==="focusin"?(nm(),Qo=s,Jo=a,Qo.attachEvent("onpropertychange",im)):i==="focusout"&&nm()}function LS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ml(Jo)}function NS(i,s){if(i==="click")return ml(s)}function IS(i,s){if(i==="input"||i==="change")return ml(s)}function US(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var hi=typeof Object.is=="function"?Object.is:US;function ea(i,s){if(hi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var m=a[f];if(!d.call(s,m)||!hi(i[m],s[m]))return!1}return!0}function rm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function sm(i,s){var a=rm(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rm(a)}}function om(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?om(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function am(){for(var i=window,s=It();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=It(i.document)}return s}function Ec(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function FS(i){var s=am(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&om(a.ownerDocument.documentElement,a)){if(f!==null&&Ec(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=a.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=sm(a,_);var E=sm(a,f);m&&E&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var OS=c&&"documentMode"in document&&11>=document.documentMode,ks=null,Tc=null,ta=null,wc=!1;function lm(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||ks==null||ks!==It(f)||(f=ks,"selectionStart"in f&&Ec(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ta&&ea(ta,f)||(ta=f,f=yl(Tc,"onSelect"),0<f.length&&(s=new mc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=ks)))}function gl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Bs={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Ac={},um={};c&&(um=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function vl(i){if(Ac[i])return Ac[i];if(!Bs[i])return i;var s=Bs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in um)return Ac[i]=s[a];return i}var cm=vl("animationend"),fm=vl("animationiteration"),dm=vl("animationstart"),hm=vl("transitionend"),pm=new Map,mm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(i,s){pm.set(i,s),l(s,[i])}for(var Cc=0;Cc<mm.length;Cc++){var Rc=mm[Cc],kS=Rc.toLowerCase(),BS=Rc[0].toUpperCase()+Rc.slice(1);xr(kS,"on"+BS)}xr(cm,"onAnimationEnd"),xr(fm,"onAnimationIteration"),xr(dm,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(hm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function gm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,tl(f,s,void 0,i),i.currentTarget=null}function vm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var E=f.length-1;0<=E;E--){var N=f[E],z=N.instance,ne=N.currentTarget;if(N=N.listener,z!==_&&m.isPropagationStopped())break e;gm(m,N,ne),_=z}else for(E=0;E<f.length;E++){if(N=f[E],z=N.instance,ne=N.currentTarget,N=N.listener,z!==_&&m.isPropagationStopped())break e;gm(m,N,ne),_=z}}}if(Qr)throw i=hr,Qr=!1,hr=null,i}function Ot(i,s){var a=s[Fc];a===void 0&&(a=s[Fc]=new Set);var f=i+"__bubble";a.has(f)||(_m(s,i,2,!1),a.add(f))}function bc(i,s,a){var f=0;s&&(f|=4),_m(a,i,f,s)}var _l="_reactListening"+Math.random().toString(36).slice(2);function ia(i){if(!i[_l]){i[_l]=!0,r.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||bc(a,!1,i),bc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[_l]||(s[_l]=!0,bc("selectionchange",!1,s))}}function _m(i,s,a,f){switch(Vp(s)){case 1:var m=eS;break;case 4:m=tS;break;default:m=dc}a=m.bind(null,s,a,i),m=void 0,!Ns||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,a,{capture:!0,passive:m}):i.addEventListener(s,a,!0):m!==void 0?i.addEventListener(s,a,{passive:m}):i.addEventListener(s,a,!1)}function Pc(i,s,a,f,m){var _=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var N=f.stateNode.containerInfo;if(N===m||N.nodeType===8&&N.parentNode===m)break;if(E===4)for(E=f.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;E=E.return}for(;N!==null;){if(E=Jr(N),E===null)return;if(z=E.tag,z===5||z===6){f=_=E;continue e}N=N.parentNode}}f=f.return}Bn(function(){var ne=_,ye=W(a),Se=[];e:{var ge=pm.get(i);if(ge!==void 0){var Ue=mc,He=i;switch(i){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":Ue=gS;break;case"focusin":He="focus",Ue=_c;break;case"focusout":He="blur",Ue=_c;break;case"beforeblur":case"afterblur":Ue=_c;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=rS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=yS;break;case cm:case fm:case dm:Ue=aS;break;case hm:Ue=SS;break;case"scroll":Ue=nS;break;case"wheel":Ue=ES;break;case"copy":case"cut":case"paste":Ue=uS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Xp}var We=(s&4)!==0,qt=!We&&i==="scroll",q=We?ge!==null?ge+"Capture":null:ge;We=[];for(var G=ne,K;G!==null;){K=G;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,q!==null&&(Te=Pn(G,q),Te!=null&&We.push(ra(G,Te,K)))),qt)break;G=G.return}0<We.length&&(ge=new Ue(ge,He,null,a,ye),Se.push({event:ge,listeners:We}))}}if(!(s&7)){e:{if(ge=i==="mouseover"||i==="pointerover",Ue=i==="mouseout"||i==="pointerout",ge&&a!==At&&(He=a.relatedTarget||a.fromElement)&&(Jr(He)||He[Gi]))break e;if((Ue||ge)&&(ge=ye.window===ye?ye:(ge=ye.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(He=a.relatedTarget||a.toElement,Ue=ne,He=He?Jr(He):null,He!==null&&(qt=Ai(He),He!==qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ue=null,He=ne),Ue!==He)){if(We=Wp,Te="onMouseLeave",q="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(We=Xp,Te="onPointerLeave",q="onPointerEnter",G="pointer"),qt=Ue==null?ge:Hs(Ue),K=He==null?ge:Hs(He),ge=new We(Te,G+"leave",Ue,a,ye),ge.target=qt,ge.relatedTarget=K,Te=null,Jr(ye)===ne&&(We=new We(q,G+"enter",He,a,ye),We.target=K,We.relatedTarget=qt,Te=We),qt=Te,Ue&&He)t:{for(We=Ue,q=He,G=0,K=We;K;K=zs(K))G++;for(K=0,Te=q;Te;Te=zs(Te))K++;for(;0<G-K;)We=zs(We),G--;for(;0<K-G;)q=zs(q),K--;for(;G--;){if(We===q||q!==null&&We===q.alternate)break t;We=zs(We),q=zs(q)}We=null}else We=null;Ue!==null&&ym(Se,ge,Ue,We,!1),He!==null&&qt!==null&&ym(Se,qt,He,We,!0)}}e:{if(ge=ne?Hs(ne):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var Ye=PS;else if(Qp(ge))if(em)Ye=IS;else{Ye=LS;var Ze=DS}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=NS);if(Ye&&(Ye=Ye(i,ne))){Jp(Se,Ye,a,ye);break e}Ze&&Ze(i,ge,ne),i==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Ze=ne?Hs(ne):window,i){case"focusin":(Qp(Ze)||Ze.contentEditable==="true")&&(ks=Ze,Tc=ne,ta=null);break;case"focusout":ta=Tc=ks=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,lm(Se,a,ye);break;case"selectionchange":if(OS)break;case"keydown":case"keyup":lm(Se,a,ye)}var Qe;if(xc)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Os?Kp(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Yp&&a.locale!=="ko"&&(Os||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Os&&(Qe=Hp()):(yr=ye,pc="value"in yr?yr.value:yr.textContent,Os=!0)),Ze=yl(ne,rt),0<Ze.length&&(rt=new jp(rt,i,null,a,ye),Se.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=Zp(a),Qe!==null&&(rt.data=Qe)))),(Qe=wS?AS(i,a):CS(i,a))&&(ne=yl(ne,"onBeforeInput"),0<ne.length&&(ye=new jp("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:ne}),ye.data=Qe))}vm(Se,s)})}function ra(i,s,a){return{instance:i,listener:s,currentTarget:a}}function yl(i,s){for(var a=s+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=Pn(i,a),_!=null&&f.unshift(ra(i,_,m)),_=Pn(i,s),_!=null&&f.push(ra(i,_,m))),i=i.return}return f}function zs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ym(i,s,a,f,m){for(var _=s._reactName,E=[];a!==null&&a!==f;){var N=a,z=N.alternate,ne=N.stateNode;if(z!==null&&z===f)break;N.tag===5&&ne!==null&&(N=ne,m?(z=Pn(a,_),z!=null&&E.unshift(ra(a,z,N))):m||(z=Pn(a,_),z!=null&&E.push(ra(a,z,N)))),a=a.return}E.length!==0&&i.push({event:s,listeners:E})}var VS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function xm(i){return(typeof i=="string"?i:""+i).replace(VS,`
`).replace(HS,"")}function xl(i,s,a){if(s=xm(s),xm(i)!==s&&a)throw Error(t(425))}function Sl(){}var Dc=null,Lc=null;function Nc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,GS=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(i){return Sm.resolve(null).then(i).catch(jS)}:Ic;function jS(i){setTimeout(function(){throw i})}function Uc(i,s){var a=s,f=0;do{var m=a.nextSibling;if(i.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(f===0){i.removeChild(m),qo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=m}while(a);qo(s)}function Sr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Mm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Vs,sa="__reactProps$"+Vs,Gi="__reactContainer$"+Vs,Fc="__reactEvents$"+Vs,XS="__reactListeners$"+Vs,YS="__reactHandles$"+Vs;function Jr(i){var s=i[Ri];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Gi]||a[Ri]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=Mm(i);i!==null;){if(a=i[Ri])return a;i=Mm(i)}return s}i=a,a=i.parentNode}return null}function oa(i){return i=i[Ri]||i[Gi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Hs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ml(i){return i[sa]||null}var Oc=[],Gs=-1;function Mr(i){return{current:i}}function kt(i){0>Gs||(i.current=Oc[Gs],Oc[Gs]=null,Gs--)}function Ut(i,s){Gs++,Oc[Gs]=i.current,i.current=s}var Er={},Sn=Mr(Er),zn=Mr(!1),es=Er;function Ws(i,s){var a=i.type.contextTypes;if(!a)return Er;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in a)m[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Vn(i){return i=i.childContextTypes,i!=null}function El(){kt(zn),kt(Sn)}function Em(i,s,a){if(Sn.current!==Er)throw Error(t(168));Ut(Sn,s),Ut(zn,a)}function Tm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,ve(i)||"Unknown",m));return se({},a,f)}function Tl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Er,es=Sn.current,Ut(Sn,i),Ut(zn,zn.current),!0}function wm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=Tm(i,s,es),f.__reactInternalMemoizedMergedChildContext=i,kt(zn),kt(Sn),Ut(Sn,i)):kt(zn),Ut(zn,a)}var Wi=null,wl=!1,kc=!1;function Am(i){Wi===null?Wi=[i]:Wi.push(i)}function qS(i){wl=!0,Am(i)}function Tr(){if(!kc&&Wi!==null){kc=!0;var i=0,s=Mt;try{var a=Wi;for(Mt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Wi=null,wl=!1}catch(m){throw Wi!==null&&(Wi=Wi.slice(i+1)),ol(Me,Tr),m}finally{Mt=s,kc=!1}}return null}var js=[],Xs=0,Al=null,Cl=0,ni=[],ii=0,ts=null,ji=1,Xi="";function ns(i,s){js[Xs++]=Cl,js[Xs++]=Al,Al=i,Cl=s}function Cm(i,s,a){ni[ii++]=ji,ni[ii++]=Xi,ni[ii++]=ts,ts=i;var f=ji;i=Xi;var m=32-at(f)-1;f&=~(1<<m),a+=1;var _=32-at(s)+m;if(30<_){var E=m-m%5;_=(f&(1<<E)-1).toString(32),f>>=E,m-=E,ji=1<<32-at(s)+m|a<<m|f,Xi=_+i}else ji=1<<_|a<<m|f,Xi=i}function Bc(i){i.return!==null&&(ns(i,1),Cm(i,1,0))}function zc(i){for(;i===Al;)Al=js[--Xs],js[Xs]=null,Cl=js[--Xs],js[Xs]=null;for(;i===ts;)ts=ni[--ii],ni[ii]=null,Xi=ni[--ii],ni[ii]=null,ji=ni[--ii],ni[ii]=null}var qn=null,$n=null,zt=!1,pi=null;function Rm(i,s){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function bm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,qn=i,$n=Sr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,qn=i,$n=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ts!==null?{id:ji,overflow:Xi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,qn=i,$n=null,!0):!1;default:return!1}}function Vc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Hc(i){if(zt){var s=$n;if(s){var a=s;if(!bm(i,s)){if(Vc(i))throw Error(t(418));s=Sr(a.nextSibling);var f=qn;s&&bm(i,s)?Rm(f,a):(i.flags=i.flags&-4097|2,zt=!1,qn=i)}}else{if(Vc(i))throw Error(t(418));i.flags=i.flags&-4097|2,zt=!1,qn=i}}}function Pm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;qn=i}function Rl(i){if(i!==qn)return!1;if(!zt)return Pm(i),zt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Nc(i.type,i.memoizedProps)),s&&(s=$n)){if(Vc(i))throw Dm(),Error(t(418));for(;s;)Rm(i,s),s=Sr(s.nextSibling)}if(Pm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){$n=Sr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}$n=null}}else $n=qn?Sr(i.stateNode.nextSibling):null;return!0}function Dm(){for(var i=$n;i;)i=Sr(i.nextSibling)}function Ys(){$n=qn=null,zt=!1}function Gc(i){pi===null?pi=[i]:pi.push(i)}var $S=R.ReactCurrentBatchConfig;function aa(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(E){var N=m.refs;E===null?delete N[_]:N[_]=E},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function bl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lm(i){var s=i._init;return s(i._payload)}function Nm(i){function s(q,G){if(i){var K=q.deletions;K===null?(q.deletions=[G],q.flags|=16):K.push(G)}}function a(q,G){if(!i)return null;for(;G!==null;)s(q,G),G=G.sibling;return null}function f(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function m(q,G){return q=Lr(q,G),q.index=0,q.sibling=null,q}function _(q,G,K){return q.index=K,i?(K=q.alternate,K!==null?(K=K.index,K<G?(q.flags|=2,G):K):(q.flags|=2,G)):(q.flags|=1048576,G)}function E(q){return i&&q.alternate===null&&(q.flags|=2),q}function N(q,G,K,Te){return G===null||G.tag!==6?(G=Uf(K,q.mode,Te),G.return=q,G):(G=m(G,K),G.return=q,G)}function z(q,G,K,Te){var Ye=K.type;return Ye===O?ye(q,G,K.props.children,Te,K.key):G!==null&&(G.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Lm(Ye)===G.type)?(Te=m(G,K.props),Te.ref=aa(q,G,K),Te.return=q,Te):(Te=Jl(K.type,K.key,K.props,null,q.mode,Te),Te.ref=aa(q,G,K),Te.return=q,Te)}function ne(q,G,K,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Ff(K,q.mode,Te),G.return=q,G):(G=m(G,K.children||[]),G.return=q,G)}function ye(q,G,K,Te,Ye){return G===null||G.tag!==7?(G=cs(K,q.mode,Te,Ye),G.return=q,G):(G=m(G,K),G.return=q,G)}function Se(q,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Uf(""+G,q.mode,K),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case U:return K=Jl(G.type,G.key,G.props,null,q.mode,K),K.ref=aa(q,null,G),K.return=q,K;case I:return G=Ff(G,q.mode,K),G.return=q,G;case ce:var Te=G._init;return Se(q,Te(G._payload),K)}if(je(G)||ue(G))return G=cs(G,q.mode,K,null),G.return=q,G;bl(q,G)}return null}function ge(q,G,K,Te){var Ye=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ye!==null?null:N(q,G,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return K.key===Ye?z(q,G,K,Te):null;case I:return K.key===Ye?ne(q,G,K,Te):null;case ce:return Ye=K._init,ge(q,G,Ye(K._payload),Te)}if(je(K)||ue(K))return Ye!==null?null:ye(q,G,K,Te,null);bl(q,K)}return null}function Ue(q,G,K,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(K)||null,N(G,q,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return q=q.get(Te.key===null?K:Te.key)||null,z(G,q,Te,Ye);case I:return q=q.get(Te.key===null?K:Te.key)||null,ne(G,q,Te,Ye);case ce:var Ze=Te._init;return Ue(q,G,K,Ze(Te._payload),Ye)}if(je(Te)||ue(Te))return q=q.get(K)||null,ye(G,q,Te,Ye,null);bl(G,Te)}return null}function He(q,G,K,Te){for(var Ye=null,Ze=null,Qe=G,rt=G=0,dn=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(dn=Qe,Qe=null):dn=Qe.sibling;var Tt=ge(q,Qe,K[rt],Te);if(Tt===null){Qe===null&&(Qe=dn);break}i&&Qe&&Tt.alternate===null&&s(q,Qe),G=_(Tt,G,rt),Ze===null?Ye=Tt:Ze.sibling=Tt,Ze=Tt,Qe=dn}if(rt===K.length)return a(q,Qe),zt&&ns(q,rt),Ye;if(Qe===null){for(;rt<K.length;rt++)Qe=Se(q,K[rt],Te),Qe!==null&&(G=_(Qe,G,rt),Ze===null?Ye=Qe:Ze.sibling=Qe,Ze=Qe);return zt&&ns(q,rt),Ye}for(Qe=f(q,Qe);rt<K.length;rt++)dn=Ue(Qe,q,rt,K[rt],Te),dn!==null&&(i&&dn.alternate!==null&&Qe.delete(dn.key===null?rt:dn.key),G=_(dn,G,rt),Ze===null?Ye=dn:Ze.sibling=dn,Ze=dn);return i&&Qe.forEach(function(Nr){return s(q,Nr)}),zt&&ns(q,rt),Ye}function We(q,G,K,Te){var Ye=ue(K);if(typeof Ye!="function")throw Error(t(150));if(K=Ye.call(K),K==null)throw Error(t(151));for(var Ze=Ye=null,Qe=G,rt=G=0,dn=null,Tt=K.next();Qe!==null&&!Tt.done;rt++,Tt=K.next()){Qe.index>rt?(dn=Qe,Qe=null):dn=Qe.sibling;var Nr=ge(q,Qe,Tt.value,Te);if(Nr===null){Qe===null&&(Qe=dn);break}i&&Qe&&Nr.alternate===null&&s(q,Qe),G=_(Nr,G,rt),Ze===null?Ye=Nr:Ze.sibling=Nr,Ze=Nr,Qe=dn}if(Tt.done)return a(q,Qe),zt&&ns(q,rt),Ye;if(Qe===null){for(;!Tt.done;rt++,Tt=K.next())Tt=Se(q,Tt.value,Te),Tt!==null&&(G=_(Tt,G,rt),Ze===null?Ye=Tt:Ze.sibling=Tt,Ze=Tt);return zt&&ns(q,rt),Ye}for(Qe=f(q,Qe);!Tt.done;rt++,Tt=K.next())Tt=Ue(Qe,q,rt,Tt.value,Te),Tt!==null&&(i&&Tt.alternate!==null&&Qe.delete(Tt.key===null?rt:Tt.key),G=_(Tt,G,rt),Ze===null?Ye=Tt:Ze.sibling=Tt,Ze=Tt);return i&&Qe.forEach(function(CM){return s(q,CM)}),zt&&ns(q,rt),Ye}function qt(q,G,K,Te){if(typeof K=="object"&&K!==null&&K.type===O&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case U:e:{for(var Ye=K.key,Ze=G;Ze!==null;){if(Ze.key===Ye){if(Ye=K.type,Ye===O){if(Ze.tag===7){a(q,Ze.sibling),G=m(Ze,K.props.children),G.return=q,q=G;break e}}else if(Ze.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Lm(Ye)===Ze.type){a(q,Ze.sibling),G=m(Ze,K.props),G.ref=aa(q,Ze,K),G.return=q,q=G;break e}a(q,Ze);break}else s(q,Ze);Ze=Ze.sibling}K.type===O?(G=cs(K.props.children,q.mode,Te,K.key),G.return=q,q=G):(Te=Jl(K.type,K.key,K.props,null,q.mode,Te),Te.ref=aa(q,G,K),Te.return=q,q=Te)}return E(q);case I:e:{for(Ze=K.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(q,G.sibling),G=m(G,K.children||[]),G.return=q,q=G;break e}else{a(q,G);break}else s(q,G);G=G.sibling}G=Ff(K,q.mode,Te),G.return=q,q=G}return E(q);case ce:return Ze=K._init,qt(q,G,Ze(K._payload),Te)}if(je(K))return He(q,G,K,Te);if(ue(K))return We(q,G,K,Te);bl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(a(q,G.sibling),G=m(G,K),G.return=q,q=G):(a(q,G),G=Uf(K,q.mode,Te),G.return=q,q=G),E(q)):a(q,G)}return qt}var qs=Nm(!0),Im=Nm(!1),Pl=Mr(null),Dl=null,$s=null,Wc=null;function jc(){Wc=$s=Dl=null}function Xc(i){var s=Pl.current;kt(Pl),i._currentValue=s}function Yc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Ks(i,s){Dl=i,Wc=$s=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(Hn=!0),i.firstContext=null)}function ri(i){var s=i._currentValue;if(Wc!==i)if(i={context:i,memoizedValue:s,next:null},$s===null){if(Dl===null)throw Error(t(308));$s=i,Dl.dependencies={lanes:0,firstContext:i}}else $s=$s.next=i;return s}var is=null;function qc(i){is===null?is=[i]:is.push(i)}function Um(i,s,a,f){var m=s.interleaved;return m===null?(a.next=a,qc(s)):(a.next=m.next,m.next=a),s.interleaved=a,Yi(i,f)}function Yi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var wr=!1;function $c(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function qi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ar(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,Et&2){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,Yi(i,a)}return m=f.interleaved,m===null?(s.next=s,qc(f)):(s.next=m.next,m.next=s),f.interleaved=s,Yi(i,a)}function Ll(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,un(i,a)}}function Om(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var m=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?m=_=E:_=_.next=E,a=a.next}while(a!==null);_===null?m=_=s:_=_.next=s}else m=_=s;a={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Nl(i,s,a,f){var m=i.updateQueue;wr=!1;var _=m.firstBaseUpdate,E=m.lastBaseUpdate,N=m.shared.pending;if(N!==null){m.shared.pending=null;var z=N,ne=z.next;z.next=null,E===null?_=ne:E.next=ne,E=z;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,N=ye.lastBaseUpdate,N!==E&&(N===null?ye.firstBaseUpdate=ne:N.next=ne,ye.lastBaseUpdate=z))}if(_!==null){var Se=m.baseState;E=0,ye=ne=z=null,N=_;do{var ge=N.lane,Ue=N.eventTime;if((f&ge)===ge){ye!==null&&(ye=ye.next={eventTime:Ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var He=i,We=N;switch(ge=s,Ue=a,We.tag){case 1:if(He=We.payload,typeof He=="function"){Se=He.call(Ue,Se,ge);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=We.payload,ge=typeof He=="function"?He.call(Ue,Se,ge):He,ge==null)break e;Se=se({},Se,ge);break e;case 2:wr=!0}}N.callback!==null&&N.lane!==0&&(i.flags|=64,ge=m.effects,ge===null?m.effects=[N]:ge.push(N))}else Ue={eventTime:Ue,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ye===null?(ne=ye=Ue,z=Se):ye=ye.next=Ue,E|=ge;if(N=N.next,N===null){if(N=m.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,m.lastBaseUpdate=ge,m.shared.pending=null}}while(!0);if(ye===null&&(z=Se),m.baseState=z,m.firstBaseUpdate=ne,m.lastBaseUpdate=ye,s=m.shared.interleaved,s!==null){m=s;do E|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);os|=E,i.lanes=E,i.memoizedState=Se}}function km(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=a,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var la={},bi=Mr(la),ua=Mr(la),ca=Mr(la);function rs(i){if(i===la)throw Error(t(174));return i}function Kc(i,s){switch(Ut(ca,s),Ut(ua,i),Ut(bi,la),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Xe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Xe(s,i)}kt(bi),Ut(bi,s)}function Zs(){kt(bi),kt(ua),kt(ca)}function Bm(i){rs(ca.current);var s=rs(bi.current),a=Xe(s,i.type);s!==a&&(Ut(ua,i),Ut(bi,a))}function Zc(i){ua.current===i&&(kt(bi),kt(ua))}var Vt=Mr(0);function Il(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Qc=[];function Jc(){for(var i=0;i<Qc.length;i++)Qc[i]._workInProgressVersionPrimary=null;Qc.length=0}var Ul=R.ReactCurrentDispatcher,ef=R.ReactCurrentBatchConfig,ss=0,Ht=null,tn=null,cn=null,Fl=!1,fa=!1,da=0,KS=0;function Mn(){throw Error(t(321))}function tf(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!hi(i[a],s[a]))return!1;return!0}function nf(i,s,a,f,m,_){if(ss=_,Ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ul.current=i===null||i.memoizedState===null?eM:tM,i=a(f,m),fa){_=0;do{if(fa=!1,da=0,25<=_)throw Error(t(301));_+=1,cn=tn=null,s.updateQueue=null,Ul.current=nM,i=a(f,m)}while(fa)}if(Ul.current=Bl,s=tn!==null&&tn.next!==null,ss=0,cn=tn=Ht=null,Fl=!1,s)throw Error(t(300));return i}function rf(){var i=da!==0;return da=0,i}function Pi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Ht.memoizedState=cn=i:cn=cn.next=i,cn}function si(){if(tn===null){var i=Ht.alternate;i=i!==null?i.memoizedState:null}else i=tn.next;var s=cn===null?Ht.memoizedState:cn.next;if(s!==null)cn=s,tn=i;else{if(i===null)throw Error(t(310));tn=i,i={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},cn===null?Ht.memoizedState=cn=i:cn=cn.next=i}return cn}function ha(i,s){return typeof s=="function"?s(i):s}function sf(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=tn,m=f.baseQueue,_=a.pending;if(_!==null){if(m!==null){var E=m.next;m.next=_.next,_.next=E}f.baseQueue=m=_,a.pending=null}if(m!==null){_=m.next,f=f.baseState;var N=E=null,z=null,ne=_;do{var ye=ne.lane;if((ss&ye)===ye)z!==null&&(z=z.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),f=ne.hasEagerState?ne.eagerState:i(f,ne.action);else{var Se={lane:ye,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};z===null?(N=z=Se,E=f):z=z.next=Se,Ht.lanes|=ye,os|=ye}ne=ne.next}while(ne!==null&&ne!==_);z===null?E=f:z.next=N,hi(f,s.memoizedState)||(Hn=!0),s.memoizedState=f,s.baseState=E,s.baseQueue=z,a.lastRenderedState=f}if(i=a.interleaved,i!==null){m=i;do _=m.lane,Ht.lanes|=_,os|=_,m=m.next;while(m!==i)}else m===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function of(i){var s=si(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,m=a.pending,_=s.memoizedState;if(m!==null){a.pending=null;var E=m=m.next;do _=i(_,E.action),E=E.next;while(E!==m);hi(_,s.memoizedState)||(Hn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function zm(){}function Vm(i,s){var a=Ht,f=si(),m=s(),_=!hi(f.memoizedState,m);if(_&&(f.memoizedState=m,Hn=!0),f=f.queue,af(Wm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,pa(9,Gm.bind(null,a,f,m,s),void 0,null),fn===null)throw Error(t(349));ss&30||Hm(a,s,m)}return m}function Hm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Gm(i,s,a,f){s.value=a,s.getSnapshot=f,jm(s)&&Xm(i)}function Wm(i,s,a){return a(function(){jm(s)&&Xm(i)})}function jm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!hi(i,a)}catch{return!0}}function Xm(i){var s=Yi(i,1);s!==null&&_i(s,i,1,-1)}function Ym(i){var s=Pi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:i},s.queue=i,i=i.dispatch=JS.bind(null,Ht,i),[s.memoizedState,i]}function pa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function qm(){return si().memoizedState}function Ol(i,s,a,f){var m=Pi();Ht.flags|=i,m.memoizedState=pa(1|s,a,void 0,f===void 0?null:f)}function kl(i,s,a,f){var m=si();f=f===void 0?null:f;var _=void 0;if(tn!==null){var E=tn.memoizedState;if(_=E.destroy,f!==null&&tf(f,E.deps)){m.memoizedState=pa(s,a,_,f);return}}Ht.flags|=i,m.memoizedState=pa(1|s,a,_,f)}function $m(i,s){return Ol(8390656,8,i,s)}function af(i,s){return kl(2048,8,i,s)}function Km(i,s){return kl(4,2,i,s)}function Zm(i,s){return kl(4,4,i,s)}function Qm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Jm(i,s,a){return a=a!=null?a.concat([i]):null,kl(4,4,Qm.bind(null,s,i),a)}function lf(){}function eg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&tf(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function tg(i,s){var a=si();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&tf(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function ng(i,s,a){return ss&21?(hi(a,s)||(a=Nt(),Ht.lanes|=a,os|=a,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,Hn=!0),i.memoizedState=a)}function ZS(i,s){var a=Mt;Mt=a!==0&&4>a?a:4,i(!0);var f=ef.transition;ef.transition={};try{i(!1),s()}finally{Mt=a,ef.transition=f}}function ig(){return si().memoizedState}function QS(i,s,a){var f=Pr(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},rg(i))sg(s,a);else if(a=Um(i,s,a,f),a!==null){var m=Nn();_i(a,i,f,m),og(a,s,f)}}function JS(i,s,a){var f=Pr(i),m={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(rg(i))sg(s,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var E=s.lastRenderedState,N=_(E,a);if(m.hasEagerState=!0,m.eagerState=N,hi(N,E)){var z=s.interleaved;z===null?(m.next=m,qc(s)):(m.next=z.next,z.next=m),s.interleaved=m;return}}catch{}finally{}a=Um(i,s,m,f),a!==null&&(m=Nn(),_i(a,i,f,m),og(a,s,f))}}function rg(i){var s=i.alternate;return i===Ht||s!==null&&s===Ht}function sg(i,s){fa=Fl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function og(i,s,a){if(a&4194240){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,un(i,a)}}var Bl={readContext:ri,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},eM={readContext:ri,useCallback:function(i,s){return Pi().memoizedState=[i,s===void 0?null:s],i},useContext:ri,useEffect:$m,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Ol(4194308,4,Qm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Ol(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ol(4,2,i,s)},useMemo:function(i,s){var a=Pi();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Pi();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=QS.bind(null,Ht,i),[f.memoizedState,i]},useRef:function(i){var s=Pi();return i={current:i},s.memoizedState=i},useState:Ym,useDebugValue:lf,useDeferredValue:function(i){return Pi().memoizedState=i},useTransition:function(){var i=Ym(!1),s=i[0];return i=ZS.bind(null,i[1]),Pi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Ht,m=Pi();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),fn===null)throw Error(t(349));ss&30||Hm(f,s,a)}m.memoizedState=a;var _={value:a,getSnapshot:s};return m.queue=_,$m(Wm.bind(null,f,_,i),[i]),f.flags|=2048,pa(9,Gm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Pi(),s=fn.identifierPrefix;if(zt){var a=Xi,f=ji;a=(f&~(1<<32-at(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=da++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=KS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},tM={readContext:ri,useCallback:eg,useContext:ri,useEffect:af,useImperativeHandle:Jm,useInsertionEffect:Km,useLayoutEffect:Zm,useMemo:tg,useReducer:sf,useRef:qm,useState:function(){return sf(ha)},useDebugValue:lf,useDeferredValue:function(i){var s=si();return ng(s,tn.memoizedState,i)},useTransition:function(){var i=sf(ha)[0],s=si().memoizedState;return[i,s]},useMutableSource:zm,useSyncExternalStore:Vm,useId:ig,unstable_isNewReconciler:!1},nM={readContext:ri,useCallback:eg,useContext:ri,useEffect:af,useImperativeHandle:Jm,useInsertionEffect:Km,useLayoutEffect:Zm,useMemo:tg,useReducer:of,useRef:qm,useState:function(){return of(ha)},useDebugValue:lf,useDeferredValue:function(i){var s=si();return tn===null?s.memoizedState=i:ng(s,tn.memoizedState,i)},useTransition:function(){var i=of(ha)[0],s=si().memoizedState;return[i,s]},useMutableSource:zm,useSyncExternalStore:Vm,useId:ig,unstable_isNewReconciler:!1};function mi(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function uf(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:se({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var zl={isMounted:function(i){return(i=i._reactInternals)?Ai(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Nn(),m=Pr(i),_=qi(f,m);_.payload=s,a!=null&&(_.callback=a),s=Ar(i,_,m),s!==null&&(_i(s,i,m,f),Ll(s,i,m))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Nn(),m=Pr(i),_=qi(f,m);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Ar(i,_,m),s!==null&&(_i(s,i,m,f),Ll(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Nn(),f=Pr(i),m=qi(a,f);m.tag=2,s!=null&&(m.callback=s),s=Ar(i,m,f),s!==null&&(_i(s,i,f,a),Ll(s,i,f))}};function ag(i,s,a,f,m,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,E):s.prototype&&s.prototype.isPureReactComponent?!ea(a,f)||!ea(m,_):!0}function lg(i,s,a){var f=!1,m=Er,_=s.contextType;return typeof _=="object"&&_!==null?_=ri(_):(m=Vn(s)?es:Sn.current,f=s.contextTypes,_=(f=f!=null)?Ws(i,m):Er),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),s}function ug(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&zl.enqueueReplaceState(s,s.state,null)}function cf(i,s,a,f){var m=i.stateNode;m.props=a,m.state=i.memoizedState,m.refs={},$c(i);var _=s.contextType;typeof _=="object"&&_!==null?m.context=ri(_):(_=Vn(s)?es:Sn.current,m.context=Ws(i,_)),m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(uf(i,s,_,a),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&zl.enqueueReplaceState(m,m.state,null),Nl(i,a,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Qs(i,s){try{var a="",f=s;do a+=fe(f),f=f.return;while(f);var m=a}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:m,digest:null}}function ff(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function df(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var iM=typeof WeakMap=="function"?WeakMap:Map;function cg(i,s,a){a=qi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Yl||(Yl=!0,Cf=f),df(i,s)},a}function fg(i,s,a){a=qi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;a.payload=function(){return f(m)},a.callback=function(){df(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){df(i,s),typeof f!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function dg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new iM;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(a)||(m.add(a),i=vM.bind(null,i,s,a),s.then(i,i))}function hg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function pg(i,s,a,f,m){return i.mode&1?(i.flags|=65536,i.lanes=m,i):(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=qi(-1,1),s.tag=2,Ar(a,s,1))),a.lanes|=1),i)}var rM=R.ReactCurrentOwner,Hn=!1;function Ln(i,s,a,f){s.child=i===null?Im(s,null,a,f):qs(s,i.child,a,f)}function mg(i,s,a,f,m){a=a.render;var _=s.ref;return Ks(s,m),f=nf(i,s,a,f,_,m),a=rf(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,$i(i,s,m)):(zt&&a&&Bc(s),s.flags|=1,Ln(i,s,f,m),s.child)}function gg(i,s,a,f,m){if(i===null){var _=a.type;return typeof _=="function"&&!If(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,vg(i,s,_,f,m)):(i=Jl(a.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,!(i.lanes&m)){var E=_.memoizedProps;if(a=a.compare,a=a!==null?a:ea,a(E,f)&&i.ref===s.ref)return $i(i,s,m)}return s.flags|=1,i=Lr(_,f),i.ref=s.ref,i.return=s,s.child=i}function vg(i,s,a,f,m){if(i!==null){var _=i.memoizedProps;if(ea(_,f)&&i.ref===s.ref)if(Hn=!1,s.pendingProps=f=_,(i.lanes&m)!==0)i.flags&131072&&(Hn=!0);else return s.lanes=i.lanes,$i(i,s,m)}return hf(i,s,a,f,m)}function _g(i,s,a){var f=s.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(eo,Kn),Kn|=a;else{if(!(a&1073741824))return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ut(eo,Kn),Kn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,Ut(eo,Kn),Kn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,Ut(eo,Kn),Kn|=f;return Ln(i,s,m,a),s.child}function yg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function hf(i,s,a,f,m){var _=Vn(a)?es:Sn.current;return _=Ws(s,_),Ks(s,m),a=nf(i,s,a,f,_,m),f=rf(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,$i(i,s,m)):(zt&&f&&Bc(s),s.flags|=1,Ln(i,s,a,m),s.child)}function xg(i,s,a,f,m){if(Vn(a)){var _=!0;Tl(s)}else _=!1;if(Ks(s,m),s.stateNode===null)Hl(i,s),lg(s,a,f),cf(s,a,f,m),f=!0;else if(i===null){var E=s.stateNode,N=s.memoizedProps;E.props=N;var z=E.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=ri(ne):(ne=Vn(a)?es:Sn.current,ne=Ws(s,ne));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";Se||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==f||z!==ne)&&ug(s,E,f,ne),wr=!1;var ge=s.memoizedState;E.state=ge,Nl(s,f,E,m),z=s.memoizedState,N!==f||ge!==z||zn.current||wr?(typeof ye=="function"&&(uf(s,a,ye,f),z=s.memoizedState),(N=wr||ag(s,a,N,f,ge,z,ne))?(Se||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),E.props=f,E.state=z,E.context=ne,f=N):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{E=s.stateNode,Fm(i,s),N=s.memoizedProps,ne=s.type===s.elementType?N:mi(s.type,N),E.props=ne,Se=s.pendingProps,ge=E.context,z=a.contextType,typeof z=="object"&&z!==null?z=ri(z):(z=Vn(a)?es:Sn.current,z=Ws(s,z));var Ue=a.getDerivedStateFromProps;(ye=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==Se||ge!==z)&&ug(s,E,f,z),wr=!1,ge=s.memoizedState,E.state=ge,Nl(s,f,E,m);var He=s.memoizedState;N!==Se||ge!==He||zn.current||wr?(typeof Ue=="function"&&(uf(s,a,Ue,f),He=s.memoizedState),(ne=wr||ag(s,a,ne,f,ge,He,z)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(f,He,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(f,He,z)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=He),E.props=f,E.state=He,E.context=z,f=ne):(typeof E.componentDidUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===i.memoizedProps&&ge===i.memoizedState||(s.flags|=1024),f=!1)}return pf(i,s,a,f,_,m)}function pf(i,s,a,f,m,_){yg(i,s);var E=(s.flags&128)!==0;if(!f&&!E)return m&&wm(s,a,!1),$i(i,s,_);f=s.stateNode,rM.current=s;var N=E&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&E?(s.child=qs(s,i.child,null,_),s.child=qs(s,null,N,_)):Ln(i,s,N,_),s.memoizedState=f.state,m&&wm(s,a,!0),s.child}function Sg(i){var s=i.stateNode;s.pendingContext?Em(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Em(i,s.context,!1),Kc(i,s.containerInfo)}function Mg(i,s,a,f,m){return Ys(),Gc(m),s.flags|=256,Ln(i,s,a,f),s.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Eg(i,s,a){var f=s.pendingProps,m=Vt.current,_=!1,E=(s.flags&128)!==0,N;if((N=E)||(N=i!==null&&i.memoizedState===null?!1:(m&2)!==0),N?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ut(Vt,m&1),i===null)return Hc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(E=f.children,i=f.fallback,_?(f=s.mode,_=s.child,E={mode:"hidden",children:E},!(f&1)&&_!==null?(_.childLanes=0,_.pendingProps=E):_=eu(E,f,0,null),i=cs(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=gf(a),s.memoizedState=mf,i):vf(s,E));if(m=i.memoizedState,m!==null&&(N=m.dehydrated,N!==null))return sM(i,s,E,f,N,m,a);if(_){_=f.fallback,E=s.mode,m=i.child,N=m.sibling;var z={mode:"hidden",children:f.children};return!(E&1)&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Lr(m,z),f.subtreeFlags=m.subtreeFlags&14680064),N!==null?_=Lr(N,_):(_=cs(_,E,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,E=i.child.memoizedState,E=E===null?gf(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~a,s.memoizedState=mf,f}return _=i.child,i=_.sibling,f=Lr(_,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function vf(i,s){return s=eu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Vl(i,s,a,f){return f!==null&&Gc(f),qs(s,i.child,null,a),i=vf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function sM(i,s,a,f,m,_,E){if(a)return s.flags&256?(s.flags&=-257,f=ff(Error(t(422))),Vl(i,s,E,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=eu({mode:"visible",children:f.children},m,0,null),_=cs(_,m,E,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,s.mode&1&&qs(s,i.child,null,E),s.child.memoizedState=gf(E),s.memoizedState=mf,_);if(!(s.mode&1))return Vl(i,s,E,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var N=f.dgst;return f=N,_=Error(t(419)),f=ff(_,f,void 0),Vl(i,s,E,f)}if(N=(E&i.childLanes)!==0,Hn||N){if(f=fn,f!==null){switch(E&-E){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(f.suspendedLanes|E)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Yi(i,m),_i(f,i,m,-1))}return Nf(),f=ff(Error(t(421))),Vl(i,s,E,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=_M.bind(null,i),m._reactRetry=s,null):(i=_.treeContext,$n=Sr(m.nextSibling),qn=s,zt=!0,pi=null,i!==null&&(ni[ii++]=ji,ni[ii++]=Xi,ni[ii++]=ts,ji=i.id,Xi=i.overflow,ts=s),s=vf(s,f.children),s.flags|=4096,s)}function Tg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Yc(i.return,s,a)}function _f(i,s,a,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=m)}function wg(i,s,a){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if(Ln(i,s,f.children,a),f=Vt.current,f&2)f=f&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Tg(i,a,s);else if(i.tag===19)Tg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ut(Vt,f),!(s.mode&1))s.memoizedState=null;else switch(m){case"forwards":for(a=s.child,m=null;a!==null;)i=a.alternate,i!==null&&Il(i)===null&&(m=a),a=a.sibling;a=m,a===null?(m=s.child,s.child=null):(m=a.sibling,a.sibling=null),_f(s,!1,m,a,_);break;case"backwards":for(a=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Il(i)===null){s.child=m;break}i=m.sibling,m.sibling=a,a=m,m=i}_f(s,!0,a,null,_);break;case"together":_f(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Hl(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function $i(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),os|=s.lanes,!(a&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Lr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Lr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function oM(i,s,a){switch(s.tag){case 3:Sg(s),Ys();break;case 5:Bm(s);break;case 1:Vn(s.type)&&Tl(s);break;case 4:Kc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Ut(Pl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ut(Vt,Vt.current&1),s.flags|=128,null):a&s.child.childLanes?Eg(i,s,a):(Ut(Vt,Vt.current&1),i=$i(i,s,a),i!==null?i.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,i.flags&128){if(f)return wg(i,s,a);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ut(Vt,Vt.current),f)break;return null;case 22:case 23:return s.lanes=0,_g(i,s,a)}return $i(i,s,a)}var Ag,yf,Cg,Rg;Ag=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yf=function(){},Cg=function(i,s,a,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,rs(bi.current);var _=null;switch(a){case"input":m=H(i,m),f=H(i,f),_=[];break;case"select":m=se({},m,{value:void 0}),f=se({},f,{value:void 0}),_=[];break;case"textarea":m=w(i,m),f=w(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Sl)}dt(a,f);var E;a=null;for(ne in m)if(!f.hasOwnProperty(ne)&&m.hasOwnProperty(ne)&&m[ne]!=null)if(ne==="style"){var N=m[ne];for(E in N)N.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(o.hasOwnProperty(ne)?_||(_=[]):(_=_||[]).push(ne,null));for(ne in f){var z=f[ne];if(N=m!=null?m[ne]:void 0,f.hasOwnProperty(ne)&&z!==N&&(z!=null||N!=null))if(ne==="style")if(N){for(E in N)!N.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in z)z.hasOwnProperty(E)&&N[E]!==z[E]&&(a||(a={}),a[E]=z[E])}else a||(_||(_=[]),_.push(ne,a)),a=z;else ne==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,N=N?N.__html:void 0,z!=null&&N!==z&&(_=_||[]).push(ne,z)):ne==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(ne,""+z):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(o.hasOwnProperty(ne)?(z!=null&&ne==="onScroll"&&Ot("scroll",i),_||N===z||(_=[])):(_=_||[]).push(ne,z))}a&&(_=_||[]).push("style",a);var ne=_;(s.updateQueue=ne)&&(s.flags|=4)}},Rg=function(i,s,a,f){a!==f&&(s.flags|=4)};function ma(i,s){if(!zt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function En(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function aM(i,s,a){var f=s.pendingProps;switch(zc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(s),null;case 1:return Vn(s.type)&&El(),En(s),null;case 3:return f=s.stateNode,Zs(),kt(zn),kt(Sn),Jc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Rl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,pi!==null&&(Pf(pi),pi=null))),yf(i,s),En(s),null;case 5:Zc(s);var m=rs(ca.current);if(a=s.type,i!==null&&s.stateNode!=null)Cg(i,s,a,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return En(s),null}if(i=rs(bi.current),Rl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[Ri]=s,f[sa]=_,i=(s.mode&1)!==0,a){case"dialog":Ot("cancel",f),Ot("close",f);break;case"iframe":case"object":case"embed":Ot("load",f);break;case"video":case"audio":for(m=0;m<na.length;m++)Ot(na[m],f);break;case"source":Ot("error",f);break;case"img":case"image":case"link":Ot("error",f),Ot("load",f);break;case"details":Ot("toggle",f);break;case"input":bn(f,_),Ot("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ot("invalid",f);break;case"textarea":Z(f,_),Ot("invalid",f)}dt(a,_),m=null;for(var E in _)if(_.hasOwnProperty(E)){var N=_[E];E==="children"?typeof N=="string"?f.textContent!==N&&(_.suppressHydrationWarning!==!0&&xl(f.textContent,N,i),m=["children",N]):typeof N=="number"&&f.textContent!==""+N&&(_.suppressHydrationWarning!==!0&&xl(f.textContent,N,i),m=["children",""+N]):o.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Ot("scroll",f)}switch(a){case"input":bt(f),qe(f,_,!0);break;case"textarea":bt(f),_e(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=Sl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{E=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=E.createElement(a,{is:f.is}):(i=E.createElement(a),a==="select"&&(E=i,f.multiple?E.multiple=!0:f.size&&(E.size=f.size))):i=E.createElementNS(i,a),i[Ri]=s,i[sa]=f,Ag(i,s,!1,!1),s.stateNode=i;e:{switch(E=st(a,f),a){case"dialog":Ot("cancel",i),Ot("close",i),m=f;break;case"iframe":case"object":case"embed":Ot("load",i),m=f;break;case"video":case"audio":for(m=0;m<na.length;m++)Ot(na[m],i);m=f;break;case"source":Ot("error",i),m=f;break;case"img":case"image":case"link":Ot("error",i),Ot("load",i),m=f;break;case"details":Ot("toggle",i),m=f;break;case"input":bn(i,f),m=H(i,f),Ot("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=se({},f,{value:void 0}),Ot("invalid",i);break;case"textarea":Z(i,f),m=w(i,f),Ot("invalid",i);break;default:m=f}dt(a,m),N=m;for(_ in N)if(N.hasOwnProperty(_)){var z=N[_];_==="style"?nt(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Oe(i,z)):_==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&ct(i,z):typeof z=="number"&&ct(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Ot("scroll",i):z!=null&&b(i,_,z,E))}switch(a){case"input":bt(i),qe(i,f,!1);break;case"textarea":bt(i),_e(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ae(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?L(i,!!f.multiple,_,!1):f.defaultValue!=null&&L(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Sl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return En(s),null;case 6:if(i&&s.stateNode!=null)Rg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=rs(ca.current),rs(bi.current),Rl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Ri]=s,(_=f.nodeValue!==a)&&(i=qn,i!==null))switch(i.tag){case 3:xl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&xl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Ri]=s,s.stateNode=f}return En(s),null;case 13:if(kt(Vt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(zt&&$n!==null&&s.mode&1&&!(s.flags&128))Dm(),Ys(),s.flags|=98560,_=!1;else if(_=Rl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ri]=s}else Ys(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;En(s),_=!1}else pi!==null&&(Pf(pi),pi=null),_=!0;if(!_)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(i===null||Vt.current&1?nn===0&&(nn=3):Nf())),s.updateQueue!==null&&(s.flags|=4),En(s),null);case 4:return Zs(),yf(i,s),i===null&&ia(s.stateNode.containerInfo),En(s),null;case 10:return Xc(s.type._context),En(s),null;case 17:return Vn(s.type)&&El(),En(s),null;case 19:if(kt(Vt),_=s.memoizedState,_===null)return En(s),null;if(f=(s.flags&128)!==0,E=_.rendering,E===null)if(f)ma(_,!1);else{if(nn!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(E=Il(i),E!==null){for(s.flags|=128,ma(_,!1),f=E.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ut(Vt,Vt.current&1|2),s.child}i=i.sibling}_.tail!==null&&$()>to&&(s.flags|=128,f=!0,ma(_,!1),s.lanes=4194304)}else{if(!f)if(i=Il(E),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),ma(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!zt)return En(s),null}else 2*$()-_.renderingStartTime>to&&a!==1073741824&&(s.flags|=128,f=!0,ma(_,!1),s.lanes=4194304);_.isBackwards?(E.sibling=s.child,s.child=E):(a=_.last,a!==null?a.sibling=E:s.child=E,_.last=E)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=$(),s.sibling=null,a=Vt.current,Ut(Vt,f?a&1|2:a&1),s):(En(s),null);case 22:case 23:return Lf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?Kn&1073741824&&(En(s),s.subtreeFlags&6&&(s.flags|=8192)):En(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function lM(i,s){switch(zc(s),s.tag){case 1:return Vn(s.type)&&El(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Zs(),kt(zn),kt(Sn),Jc(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return Zc(s),null;case 13:if(kt(Vt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Ys()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return kt(Vt),null;case 4:return Zs(),null;case 10:return Xc(s.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Gl=!1,Tn=!1,uM=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Js(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Xt(i,s,f)}else a.current=null}function xf(i,s,a){try{a()}catch(f){Xt(i,s,f)}}var bg=!1;function cM(i,s){if(Dc=ul,i=am(),Ec(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var E=0,N=-1,z=-1,ne=0,ye=0,Se=i,ge=null;t:for(;;){for(var Ue;Se!==a||m!==0&&Se.nodeType!==3||(N=E+m),Se!==_||f!==0&&Se.nodeType!==3||(z=E+f),Se.nodeType===3&&(E+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ge=Se,Se=Ue;for(;;){if(Se===i)break t;if(ge===a&&++ne===m&&(N=E),ge===_&&++ye===f&&(z=E),(Ue=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ue}a=N===-1||z===-1?null:{start:N,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lc={focusedElem:i,selectionRange:a},ul=!1,ke=s;ke!==null;)if(s=ke,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ke=i;else for(;ke!==null;){s=ke;try{var He=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var We=He.memoizedProps,qt=He.memoizedState,q=s.stateNode,G=q.getSnapshotBeforeUpdate(s.elementType===s.type?We:mi(s.type,We),qt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ke=i;break}ke=s.return}return He=bg,bg=!1,He}function ga(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&xf(s,a,_)}m=m.next}while(m!==f)}}function Wl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function Sf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Pg(i){var s=i.alternate;s!==null&&(i.alternate=null,Pg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ri],delete s[sa],delete s[Fc],delete s[XS],delete s[YS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Dg(i){return i.tag===5||i.tag===3||i.tag===4}function Lg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Dg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Mf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Sl));else if(f!==4&&(i=i.child,i!==null))for(Mf(i,s,a),i=i.sibling;i!==null;)Mf(i,s,a),i=i.sibling}function Ef(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Ef(i,s,a),i=i.sibling;i!==null;)Ef(i,s,a),i=i.sibling}var vn=null,gi=!1;function Cr(i,s,a){for(a=a.child;a!==null;)Ng(i,s,a),a=a.sibling}function Ng(i,s,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(tt,a)}catch{}switch(a.tag){case 5:Tn||Js(a,s);case 6:var f=vn,m=gi;vn=null,Cr(i,s,a),vn=f,gi=m,vn!==null&&(gi?(i=vn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(gi?(i=vn,a=a.stateNode,i.nodeType===8?Uc(i.parentNode,a):i.nodeType===1&&Uc(i,a),qo(i)):Uc(vn,a.stateNode));break;case 4:f=vn,m=gi,vn=a.stateNode.containerInfo,gi=!0,Cr(i,s,a),vn=f,gi=m;break;case 0:case 11:case 14:case 15:if(!Tn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,E=_.destroy;_=_.tag,E!==void 0&&(_&2||_&4)&&xf(a,s,E),m=m.next}while(m!==f)}Cr(i,s,a);break;case 1:if(!Tn&&(Js(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(N){Xt(a,s,N)}Cr(i,s,a);break;case 21:Cr(i,s,a);break;case 22:a.mode&1?(Tn=(f=Tn)||a.memoizedState!==null,Cr(i,s,a),Tn=f):Cr(i,s,a);break;default:Cr(i,s,a)}}function Ig(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new uM),s.forEach(function(f){var m=yM.bind(null,i,f);a.has(f)||(a.add(f),f.then(m,m))})}}function vi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var m=a[f];try{var _=i,E=s,N=E;e:for(;N!==null;){switch(N.tag){case 5:vn=N.stateNode,gi=!1;break e;case 3:vn=N.stateNode.containerInfo,gi=!0;break e;case 4:vn=N.stateNode.containerInfo,gi=!0;break e}N=N.return}if(vn===null)throw Error(t(160));Ng(_,E,m),vn=null,gi=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(ne){Xt(m,s,ne)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ug(s,i),s=s.sibling}function Ug(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(vi(s,i),Di(i),f&4){try{ga(3,i,i.return),Wl(3,i)}catch(We){Xt(i,i.return,We)}try{ga(5,i,i.return)}catch(We){Xt(i,i.return,We)}}break;case 1:vi(s,i),Di(i),f&512&&a!==null&&Js(a,a.return);break;case 5:if(vi(s,i),Di(i),f&512&&a!==null&&Js(a,a.return),i.flags&32){var m=i.stateNode;try{ct(m,"")}catch(We){Xt(i,i.return,We)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,E=a!==null?a.memoizedProps:_,N=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{N==="input"&&_.type==="radio"&&_.name!=null&&gt(m,_),st(N,E);var ne=st(N,_);for(E=0;E<z.length;E+=2){var ye=z[E],Se=z[E+1];ye==="style"?nt(m,Se):ye==="dangerouslySetInnerHTML"?Oe(m,Se):ye==="children"?ct(m,Se):b(m,ye,Se,ne)}switch(N){case"input":ft(m,_);break;case"textarea":me(m,_);break;case"select":var ge=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ue=_.value;Ue!=null?L(m,!!_.multiple,Ue,!1):ge!==!!_.multiple&&(_.defaultValue!=null?L(m,!!_.multiple,_.defaultValue,!0):L(m,!!_.multiple,_.multiple?[]:"",!1))}m[sa]=_}catch(We){Xt(i,i.return,We)}}break;case 6:if(vi(s,i),Di(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(We){Xt(i,i.return,We)}}break;case 3:if(vi(s,i),Di(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{qo(s.containerInfo)}catch(We){Xt(i,i.return,We)}break;case 4:vi(s,i),Di(i);break;case 13:vi(s,i),Di(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(Af=$())),f&4&&Ig(i);break;case 22:if(ye=a!==null&&a.memoizedState!==null,i.mode&1?(Tn=(ne=Tn)||ye,vi(s,i),Tn=ne):vi(s,i),Di(i),f&8192){if(ne=i.memoizedState!==null,(i.stateNode.isHidden=ne)&&!ye&&i.mode&1)for(ke=i,ye=i.child;ye!==null;){for(Se=ke=ye;ke!==null;){switch(ge=ke,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:ga(4,ge,ge.return);break;case 1:Js(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){f=ge,a=ge.return;try{s=f,He.props=s.memoizedProps,He.state=s.memoizedState,He.componentWillUnmount()}catch(We){Xt(f,a,We)}}break;case 5:Js(ge,ge.return);break;case 22:if(ge.memoizedState!==null){kg(Se);continue}}Ue!==null?(Ue.return=ge,ke=Ue):kg(Se)}ye=ye.sibling}e:for(ye=null,Se=i;;){if(Se.tag===5){if(ye===null){ye=Se;try{m=Se.stateNode,ne?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(N=Se.stateNode,z=Se.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,N.style.display=Ke("display",E))}catch(We){Xt(i,i.return,We)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch(We){Xt(i,i.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:vi(s,i),Di(i),f&4&&Ig(i);break;case 21:break;default:vi(s,i),Di(i)}}function Di(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Dg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(ct(m,""),f.flags&=-33);var _=Lg(i);Ef(i,_,m);break;case 3:case 4:var E=f.stateNode.containerInfo,N=Lg(i);Mf(i,N,E);break;default:throw Error(t(161))}}catch(z){Xt(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function fM(i,s,a){ke=i,Fg(i)}function Fg(i,s,a){for(var f=(i.mode&1)!==0;ke!==null;){var m=ke,_=m.child;if(m.tag===22&&f){var E=m.memoizedState!==null||Gl;if(!E){var N=m.alternate,z=N!==null&&N.memoizedState!==null||Tn;N=Gl;var ne=Tn;if(Gl=E,(Tn=z)&&!ne)for(ke=m;ke!==null;)E=ke,z=E.child,E.tag===22&&E.memoizedState!==null?Bg(m):z!==null?(z.return=E,ke=z):Bg(m);for(;_!==null;)ke=_,Fg(_),_=_.sibling;ke=m,Gl=N,Tn=ne}Og(i)}else m.subtreeFlags&8772&&_!==null?(_.return=m,ke=_):Og(i)}}function Og(i){for(;ke!==null;){var s=ke;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Tn||Wl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Tn)if(a===null)f.componentDidMount();else{var m=s.elementType===s.type?a.memoizedProps:mi(s.type,a.memoizedProps);f.componentDidUpdate(m,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&km(s,_,f);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}km(s,E,a)}break;case 5:var N=s.stateNode;if(a===null&&s.flags&4){a=N;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ne=s.alternate;if(ne!==null){var ye=ne.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&qo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||s.flags&512&&Sf(s)}catch(ge){Xt(s,s.return,ge)}}if(s===i){ke=null;break}if(a=s.sibling,a!==null){a.return=s.return,ke=a;break}ke=s.return}}function kg(i){for(;ke!==null;){var s=ke;if(s===i){ke=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ke=a;break}ke=s.return}}function Bg(i){for(;ke!==null;){var s=ke;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Wl(4,s)}catch(z){Xt(s,a,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(z){Xt(s,m,z)}}var _=s.return;try{Sf(s)}catch(z){Xt(s,_,z)}break;case 5:var E=s.return;try{Sf(s)}catch(z){Xt(s,E,z)}}}catch(z){Xt(s,s.return,z)}if(s===i){ke=null;break}var N=s.sibling;if(N!==null){N.return=s.return,ke=N;break}ke=s.return}}var dM=Math.ceil,jl=R.ReactCurrentDispatcher,Tf=R.ReactCurrentOwner,oi=R.ReactCurrentBatchConfig,Et=0,fn=null,Zt=null,_n=0,Kn=0,eo=Mr(0),nn=0,va=null,os=0,Xl=0,wf=0,_a=null,Gn=null,Af=0,to=1/0,Ki=null,Yl=!1,Cf=null,Rr=null,ql=!1,br=null,$l=0,ya=0,Rf=null,Kl=-1,Zl=0;function Nn(){return Et&6?$():Kl!==-1?Kl:Kl=$()}function Pr(i){return i.mode&1?Et&2&&_n!==0?_n&-_n:$S.transition!==null?(Zl===0&&(Zl=Nt()),Zl):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:Vp(i.type)),i):1}function _i(i,s,a,f){if(50<ya)throw ya=0,Rf=null,Error(t(185));ln(i,a,f),(!(Et&2)||i!==fn)&&(i===fn&&(!(Et&2)&&(Xl|=a),nn===4&&Dr(i,_n)),Wn(i,f),a===1&&Et===0&&!(s.mode&1)&&(to=$()+500,wl&&Tr()))}function Wn(i,s){var a=i.callbackNode;Dn(i,s);var f=yn(i,i===fn?_n:0);if(f===0)a!==null&&A(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&A(a),s===1)i.tag===0?qS(Vg.bind(null,i)):Am(Vg.bind(null,i)),WS(function(){!(Et&6)&&Tr()}),a=null;else{switch(Ci(f)){case 1:a=Me;break;case 4:a=be;break;case 16:a=Ie;break;case 536870912:a=it;break;default:a=Ie}a=$g(a,zg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function zg(i,s){if(Kl=-1,Zl=0,Et&6)throw Error(t(327));var a=i.callbackNode;if(no()&&i.callbackNode!==a)return null;var f=yn(i,i===fn?_n:0);if(f===0)return null;if(f&30||f&i.expiredLanes||s)s=Ql(i,f);else{s=f;var m=Et;Et|=2;var _=Gg();(fn!==i||_n!==s)&&(Ki=null,to=$()+500,ls(i,s));do try{mM();break}catch(N){Hg(i,N)}while(!0);jc(),jl.current=_,Et=m,Zt!==null?s=0:(fn=null,_n=0,s=nn)}if(s!==0){if(s===2&&(m=Hi(i),m!==0&&(f=m,s=bf(i,m))),s===1)throw a=va,ls(i,0),Dr(i,f),Wn(i,$()),a;if(s===6)Dr(i,f);else{if(m=i.current.alternate,!(f&30)&&!hM(m)&&(s=Ql(i,f),s===2&&(_=Hi(i),_!==0&&(f=_,s=bf(i,_))),s===1))throw a=va,ls(i,0),Dr(i,f),Wn(i,$()),a;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:us(i,Gn,Ki);break;case 3:if(Dr(i,f),(f&130023424)===f&&(s=Af+500-$(),10<s)){if(yn(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){Nn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Ic(us.bind(null,i,Gn,Ki),s);break}us(i,Gn,Ki);break;case 4:if(Dr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var E=31-at(f);_=1<<E,E=s[E],E>m&&(m=E),f&=~_}if(f=m,f=$()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*dM(f/1960))-f,10<f){i.timeoutHandle=Ic(us.bind(null,i,Gn,Ki),f);break}us(i,Gn,Ki);break;case 5:us(i,Gn,Ki);break;default:throw Error(t(329))}}}return Wn(i,$()),i.callbackNode===a?zg.bind(null,i):null}function bf(i,s){var a=_a;return i.current.memoizedState.isDehydrated&&(ls(i,s).flags|=256),i=Ql(i,s),i!==2&&(s=Gn,Gn=a,s!==null&&Pf(s)),i}function Pf(i){Gn===null?Gn=i:Gn.push.apply(Gn,i)}function hM(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var m=a[f],_=m.getSnapshot;m=m.value;try{if(!hi(_(),m))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Dr(i,s){for(s&=~wf,s&=~Xl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-at(s),f=1<<a;i[a]=-1,s&=~f}}function Vg(i){if(Et&6)throw Error(t(327));no();var s=yn(i,0);if(!(s&1))return Wn(i,$()),null;var a=Ql(i,s);if(i.tag!==0&&a===2){var f=Hi(i);f!==0&&(s=f,a=bf(i,f))}if(a===1)throw a=va,ls(i,0),Dr(i,s),Wn(i,$()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,us(i,Gn,Ki),Wn(i,$()),null}function Df(i,s){var a=Et;Et|=1;try{return i(s)}finally{Et=a,Et===0&&(to=$()+500,wl&&Tr())}}function as(i){br!==null&&br.tag===0&&!(Et&6)&&no();var s=Et;Et|=1;var a=oi.transition,f=Mt;try{if(oi.transition=null,Mt=1,i)return i()}finally{Mt=f,oi.transition=a,Et=s,!(Et&6)&&Tr()}}function Lf(){Kn=eo.current,kt(eo)}function ls(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,GS(a)),Zt!==null)for(a=Zt.return;a!==null;){var f=a;switch(zc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&El();break;case 3:Zs(),kt(zn),kt(Sn),Jc();break;case 5:Zc(f);break;case 4:Zs();break;case 13:kt(Vt);break;case 19:kt(Vt);break;case 10:Xc(f.type._context);break;case 22:case 23:Lf()}a=a.return}if(fn=i,Zt=i=Lr(i.current,null),_n=Kn=s,nn=0,va=null,wf=Xl=os=0,Gn=_a=null,is!==null){for(s=0;s<is.length;s++)if(a=is[s],f=a.interleaved,f!==null){a.interleaved=null;var m=f.next,_=a.pending;if(_!==null){var E=_.next;_.next=m,f.next=E}a.pending=f}is=null}return i}function Hg(i,s){do{var a=Zt;try{if(jc(),Ul.current=Bl,Fl){for(var f=Ht.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Fl=!1}if(ss=0,cn=tn=Ht=null,fa=!1,da=0,Tf.current=null,a===null||a.return===null){nn=1,va=s,Zt=null;break}e:{var _=i,E=a.return,N=a,z=s;if(s=_n,N.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ne=z,ye=N,Se=ye.tag;if(!(ye.mode&1)&&(Se===0||Se===11||Se===15)){var ge=ye.alternate;ge?(ye.updateQueue=ge.updateQueue,ye.memoizedState=ge.memoizedState,ye.lanes=ge.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ue=hg(E);if(Ue!==null){Ue.flags&=-257,pg(Ue,E,N,_,s),Ue.mode&1&&dg(_,ne,s),s=Ue,z=ne;var He=s.updateQueue;if(He===null){var We=new Set;We.add(z),s.updateQueue=We}else He.add(z);break e}else{if(!(s&1)){dg(_,ne,s),Nf();break e}z=Error(t(426))}}else if(zt&&N.mode&1){var qt=hg(E);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),pg(qt,E,N,_,s),Gc(Qs(z,N));break e}}_=z=Qs(z,N),nn!==4&&(nn=2),_a===null?_a=[_]:_a.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var q=cg(_,z,s);Om(_,q);break e;case 1:N=z;var G=_.type,K=_.stateNode;if(!(_.flags&128)&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Rr===null||!Rr.has(K)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=fg(_,N,s);Om(_,Te);break e}}_=_.return}while(_!==null)}jg(a)}catch(Ye){s=Ye,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Gg(){var i=jl.current;return jl.current=Bl,i===null?Bl:i}function Nf(){(nn===0||nn===3||nn===2)&&(nn=4),fn===null||!(os&268435455)&&!(Xl&268435455)||Dr(fn,_n)}function Ql(i,s){var a=Et;Et|=2;var f=Gg();(fn!==i||_n!==s)&&(Ki=null,ls(i,s));do try{pM();break}catch(m){Hg(i,m)}while(!0);if(jc(),Et=a,jl.current=f,Zt!==null)throw Error(t(261));return fn=null,_n=0,nn}function pM(){for(;Zt!==null;)Wg(Zt)}function mM(){for(;Zt!==null&&!j();)Wg(Zt)}function Wg(i){var s=qg(i.alternate,i,Kn);i.memoizedProps=i.pendingProps,s===null?jg(i):Zt=s,Tf.current=null}function jg(i){var s=i;do{var a=s.alternate;if(i=s.return,s.flags&32768){if(a=lM(a,s),a!==null){a.flags&=32767,Zt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{nn=6,Zt=null;return}}else if(a=aM(a,s,Kn),a!==null){Zt=a;return}if(s=s.sibling,s!==null){Zt=s;return}Zt=s=i}while(s!==null);nn===0&&(nn=5)}function us(i,s,a){var f=Mt,m=oi.transition;try{oi.transition=null,Mt=1,gM(i,s,a,f)}finally{oi.transition=m,Mt=f}return null}function gM(i,s,a,f){do no();while(br!==null);if(Et&6)throw Error(t(327));a=i.finishedWork;var m=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(gn(i,_),i===fn&&(Zt=fn=null,_n=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ql||(ql=!0,$g(Ie,function(){return no(),null})),_=(a.flags&15990)!==0,a.subtreeFlags&15990||_){_=oi.transition,oi.transition=null;var E=Mt;Mt=1;var N=Et;Et|=4,Tf.current=null,cM(i,a),Ug(a,i),FS(Lc),ul=!!Dc,Lc=Dc=null,i.current=a,fM(a),te(),Et=N,Mt=E,oi.transition=_}else i.current=a;if(ql&&(ql=!1,br=i,$l=m),_=i.pendingLanes,_===0&&(Rr=null),yt(a.stateNode),Wn(i,$()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)m=s[a],f(m.value,{componentStack:m.stack,digest:m.digest});if(Yl)throw Yl=!1,i=Cf,Cf=null,i;return $l&1&&i.tag!==0&&no(),_=i.pendingLanes,_&1?i===Rf?ya++:(ya=0,Rf=i):ya=0,Tr(),null}function no(){if(br!==null){var i=Ci($l),s=oi.transition,a=Mt;try{if(oi.transition=null,Mt=16>i?16:i,br===null)var f=!1;else{if(i=br,br=null,$l=0,Et&6)throw Error(t(331));var m=Et;for(Et|=4,ke=i.current;ke!==null;){var _=ke,E=_.child;if(ke.flags&16){var N=_.deletions;if(N!==null){for(var z=0;z<N.length;z++){var ne=N[z];for(ke=ne;ke!==null;){var ye=ke;switch(ye.tag){case 0:case 11:case 15:ga(8,ye,_)}var Se=ye.child;if(Se!==null)Se.return=ye,ke=Se;else for(;ke!==null;){ye=ke;var ge=ye.sibling,Ue=ye.return;if(Pg(ye),ye===ne){ke=null;break}if(ge!==null){ge.return=Ue,ke=ge;break}ke=Ue}}}var He=_.alternate;if(He!==null){var We=He.child;if(We!==null){He.child=null;do{var qt=We.sibling;We.sibling=null,We=qt}while(We!==null)}}ke=_}}if(_.subtreeFlags&2064&&E!==null)E.return=_,ke=E;else e:for(;ke!==null;){if(_=ke,_.flags&2048)switch(_.tag){case 0:case 11:case 15:ga(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,ke=q;break e}ke=_.return}}var G=i.current;for(ke=G;ke!==null;){E=ke;var K=E.child;if(E.subtreeFlags&2064&&K!==null)K.return=E,ke=K;else e:for(E=G;ke!==null;){if(N=ke,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:Wl(9,N)}}catch(Ye){Xt(N,N.return,Ye)}if(N===E){ke=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,ke=Te;break e}ke=N.return}}if(Et=m,Tr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(tt,i)}catch{}f=!0}return f}finally{Mt=a,oi.transition=s}}return!1}function Xg(i,s,a){s=Qs(a,s),s=cg(i,s,1),i=Ar(i,s,1),s=Nn(),i!==null&&(ln(i,1,s),Wn(i,s))}function Xt(i,s,a){if(i.tag===3)Xg(i,i,a);else for(;s!==null;){if(s.tag===3){Xg(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Rr===null||!Rr.has(f))){i=Qs(a,i),i=fg(s,i,1),s=Ar(s,i,1),i=Nn(),s!==null&&(ln(s,1,i),Wn(s,i));break}}s=s.return}}function vM(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Nn(),i.pingedLanes|=i.suspendedLanes&a,fn===i&&(_n&a)===a&&(nn===4||nn===3&&(_n&130023424)===_n&&500>$()-Af?ls(i,0):wf|=a),Wn(i,s)}function Yg(i,s){s===0&&(i.mode&1?(s=jt,jt<<=1,!(jt&130023424)&&(jt=4194304)):s=1);var a=Nn();i=Yi(i,s),i!==null&&(ln(i,s,a),Wn(i,a))}function _M(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Yg(i,a)}function yM(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(a=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Yg(i,a)}var qg;qg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||zn.current)Hn=!0;else{if(!(i.lanes&a)&&!(s.flags&128))return Hn=!1,oM(i,s,a);Hn=!!(i.flags&131072)}else Hn=!1,zt&&s.flags&1048576&&Cm(s,Cl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Hl(i,s),i=s.pendingProps;var m=Ws(s,Sn.current);Ks(s,a),m=nf(null,s,f,i,m,a);var _=rf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Vn(f)?(_=!0,Tl(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,$c(s),m.updater=zl,s.stateNode=m,m._reactInternals=s,cf(s,f,i,a),s=pf(null,s,f,!0,_,a)):(s.tag=0,zt&&_&&Bc(s),Ln(null,s,m,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Hl(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=SM(f),i=mi(f,i),m){case 0:s=hf(null,s,f,i,a);break e;case 1:s=xg(null,s,f,i,a);break e;case 11:s=mg(null,s,f,i,a);break e;case 14:s=gg(null,s,f,mi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:mi(f,m),hf(i,s,f,m,a);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:mi(f,m),xg(i,s,f,m,a);case 3:e:{if(Sg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,Fm(i,s),Nl(s,f,null,a);var E=s.memoizedState;if(f=E.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=Qs(Error(t(423)),s),s=Mg(i,s,f,a,m);break e}else if(f!==m){m=Qs(Error(t(424)),s),s=Mg(i,s,f,a,m);break e}else for($n=Sr(s.stateNode.containerInfo.firstChild),qn=s,zt=!0,pi=null,a=Im(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ys(),f===m){s=$i(i,s,a);break e}Ln(i,s,f,a)}s=s.child}return s;case 5:return Bm(s),i===null&&Hc(s),f=s.type,m=s.pendingProps,_=i!==null?i.memoizedProps:null,E=m.children,Nc(f,m)?E=null:_!==null&&Nc(f,_)&&(s.flags|=32),yg(i,s),Ln(i,s,E,a),s.child;case 6:return i===null&&Hc(s),null;case 13:return Eg(i,s,a);case 4:return Kc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=qs(s,null,f,a):Ln(i,s,f,a),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:mi(f,m),mg(i,s,f,m,a);case 7:return Ln(i,s,s.pendingProps,a),s.child;case 8:return Ln(i,s,s.pendingProps.children,a),s.child;case 12:return Ln(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,E=m.value,Ut(Pl,f._currentValue),f._currentValue=E,_!==null)if(hi(_.value,E)){if(_.children===m.children&&!zn.current){s=$i(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var N=_.dependencies;if(N!==null){E=_.child;for(var z=N.firstContext;z!==null;){if(z.context===f){if(_.tag===1){z=qi(-1,a&-a),z.tag=2;var ne=_.updateQueue;if(ne!==null){ne=ne.shared;var ye=ne.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),ne.pending=z}}_.lanes|=a,z=_.alternate,z!==null&&(z.lanes|=a),Yc(_.return,a,s),N.lanes|=a;break}z=z.next}}else if(_.tag===10)E=_.type===s.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=a,N=E.alternate,N!==null&&(N.lanes|=a),Yc(E,a,s),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===s){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}Ln(i,s,m.children,a),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Ks(s,a),m=ri(m),f=f(m),s.flags|=1,Ln(i,s,f,a),s.child;case 14:return f=s.type,m=mi(f,s.pendingProps),m=mi(f.type,m),gg(i,s,f,m,a);case 15:return vg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:mi(f,m),Hl(i,s),s.tag=1,Vn(f)?(i=!0,Tl(s)):i=!1,Ks(s,a),lg(s,f,m),cf(s,f,m,a),pf(null,s,f,!0,i,a);case 19:return wg(i,s,a);case 22:return _g(i,s,a)}throw Error(t(156,s.tag))};function $g(i,s){return ol(i,s)}function xM(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(i,s,a,f){return new xM(i,s,a,f)}function If(i){return i=i.prototype,!(!i||!i.isReactComponent)}function SM(i){if(typeof i=="function")return If(i)?1:0;if(i!=null){if(i=i.$$typeof,i===le)return 11;if(i===he)return 14}return 2}function Lr(i,s){var a=i.alternate;return a===null?(a=ai(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Jl(i,s,a,f,m,_){var E=2;if(f=i,typeof i=="function")If(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case O:return cs(a.children,m,_,s);case k:E=8,m|=8;break;case P:return i=ai(12,a,s,m|2),i.elementType=P,i.lanes=_,i;case ee:return i=ai(13,a,s,m),i.elementType=ee,i.lanes=_,i;case ae:return i=ai(19,a,s,m),i.elementType=ae,i.lanes=_,i;case re:return eu(a,m,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:E=10;break e;case V:E=9;break e;case le:E=11;break e;case he:E=14;break e;case ce:E=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ai(E,a,s,m),s.elementType=i,s.type=f,s.lanes=_,s}function cs(i,s,a,f){return i=ai(7,i,f,s),i.lanes=a,i}function eu(i,s,a,f){return i=ai(22,i,f,s),i.elementType=re,i.lanes=a,i.stateNode={isHidden:!1},i}function Uf(i,s,a){return i=ai(6,i,null,s),i.lanes=a,i}function Ff(i,s,a){return s=ai(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function MM(i,s,a,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Of(i,s,a,f,m,_,E,N,z){return i=new MM(i,s,a,N,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ai(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(_),i}function EM(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Kg(i){if(!i)return Er;i=i._reactInternals;e:{if(Ai(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Vn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Vn(a))return Tm(i,a,s)}return s}function Zg(i,s,a,f,m,_,E,N,z){return i=Of(a,f,!0,i,m,_,E,N,z),i.context=Kg(null),a=i.current,f=Nn(),m=Pr(a),_=qi(f,m),_.callback=s??null,Ar(a,_,m),i.current.lanes=m,ln(i,m,f),Wn(i,f),i}function tu(i,s,a,f){var m=s.current,_=Nn(),E=Pr(m);return a=Kg(a),s.context===null?s.context=a:s.pendingContext=a,s=qi(_,E),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Ar(m,s,E),i!==null&&(_i(i,m,E,_),Ll(i,m,E)),E}function nu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Qg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function kf(i,s){Qg(i,s),(i=i.alternate)&&Qg(i,s)}var Jg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Bf(i){this._internalRoot=i}iu.prototype.render=Bf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));tu(i,s,null,null)},iu.prototype.unmount=Bf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;as(function(){tu(null,i,null,null)}),s[Gi]=null}};function iu(i){this._internalRoot=i}iu.prototype.unstable_scheduleHydration=function(i){if(i){var s=Fp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<_r.length&&s!==0&&s<_r[a].priority;a++);_r.splice(a,0,i),a===0&&Bp(i)}};function zf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ru(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function e0(){}function TM(i,s,a,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var ne=nu(E);_.call(ne)}}var E=Zg(s,f,i,0,null,!1,!1,"",e0);return i._reactRootContainer=E,i[Gi]=E.current,ia(i.nodeType===8?i.parentNode:i),as(),E}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var N=f;f=function(){var ne=nu(z);N.call(ne)}}var z=Of(i,0,!1,null,null,!1,!1,"",e0);return i._reactRootContainer=z,i[Gi]=z.current,ia(i.nodeType===8?i.parentNode:i),as(function(){tu(s,z,a,f)}),z}function su(i,s,a,f,m){var _=a._reactRootContainer;if(_){var E=_;if(typeof m=="function"){var N=m;m=function(){var z=nu(E);N.call(z)}}tu(s,E,i,m)}else E=TM(a,s,i,m,f);return nu(E)}Ip=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=_t(s.pendingLanes);a!==0&&(un(s,a|1),Wn(s,$()),!(Et&6)&&(to=$()+500,Tr()))}break;case 13:as(function(){var f=Yi(i,1);if(f!==null){var m=Nn();_i(f,i,1,m)}}),kf(i,1)}},cc=function(i){if(i.tag===13){var s=Yi(i,134217728);if(s!==null){var a=Nn();_i(s,i,134217728,a)}kf(i,134217728)}},Up=function(i){if(i.tag===13){var s=Pr(i),a=Yi(i,s);if(a!==null){var f=Nn();_i(a,i,s,f)}kf(i,s)}},Fp=function(){return Mt},Op=function(i,s){var a=Mt;try{return Mt=i,s()}finally{Mt=a}},Re=function(i,s,a){switch(s){case"input":if(ft(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var m=Ml(f);if(!m)throw Error(t(90));vt(f),ft(f,m)}}}break;case"textarea":me(i,a);break;case"select":s=a.value,s!=null&&L(i,!!a.multiple,s,!1)}},Ft=Df,en=as;var wM={usingClientEntryPoint:!1,Events:[oa,Hs,Ml,De,ot,Df]},xa={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AM={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=rl(i),i===null?null:i.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{tt=ou.inject(AM),Ge=ou}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wM,jn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(s))throw Error(t(200));return EM(i,s,null,a)},jn.createRoot=function(i,s){if(!zf(i))throw Error(t(299));var a=!1,f="",m=Jg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Of(i,1,!1,null,null,a,!1,f,m),i[Gi]=s.current,ia(i.nodeType===8?i.parentNode:i),new Bf(s)},jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=rl(s),i=i===null?null:i.stateNode,i},jn.flushSync=function(i){return as(i)},jn.hydrate=function(i,s,a){if(!ru(s))throw Error(t(200));return su(null,i,s,!0,a)},jn.hydrateRoot=function(i,s,a){if(!zf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,m=!1,_="",E=Jg;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=Zg(s,null,i,1,a??null,m,!1,_,E),i[Gi]=s.current,ia(i),f)for(i=0;i<f.length;i++)a=f[i],m=a._getVersion,m=m(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,m]:s.mutableSourceEagerHydrationData.push(a,m);return new iu(s)},jn.render=function(i,s,a){if(!ru(s))throw Error(t(200));return su(null,i,s,!1,a)},jn.unmountComponentAtNode=function(i){if(!ru(i))throw Error(t(40));return i._reactRootContainer?(as(function(){su(null,null,i,!1,function(){i._reactRootContainer=null,i[Gi]=null})}),!0):!1},jn.unstable_batchedUpdates=Df,jn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!ru(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return su(i,s,a,!1,f)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var l0;function FM(){if(l0)return Gf.exports;l0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Gf.exports=UM(),Gf.exports}var u0;function OM(){if(u0)return au;u0=1;var n=FM();return au.createRoot=n.createRoot,au.hydrateRoot=n.hydrateRoot,au}var kM=OM();const N_=we.createContext({});function I_(n){const e=we.useRef(null);return e.current===null&&(e.current=n()),e.current}const zh=we.createContext(null),U_=we.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function BM(n=!0){const e=we.useContext(zh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=we.useId();we.useEffect(()=>{n&&o(l)},[n]);const u=we.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const Vh=typeof window<"u",F_=Vh?we.useLayoutEffect:we.useEffect,Fn=n=>n;let zM=Fn,Ud=Fn;function Hh(n){let e;return()=>(e===void 0&&(e=n()),e)}const Cs=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},ar=n=>n*1e3,lr=n=>n/1e3,VM={skipAnimations:!1,useManualTiming:!1};function HM(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,p=!1,g=!1)=>{const x=g&&r?e:t;return p&&l.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const lu=["read","resolveKeyframes","update","preRender","render","postRender"],GM=40;function O_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=lu.reduce((y,D)=>(y[D]=HM(l),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:p,render:g,postRender:v}=u,x=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,GM),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),p.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(x))},M=()=>{t=!0,r=!0,o.isProcessing||n(x)};return{schedule:lu.reduce((y,D)=>{const b=u[D];return y[D]=(R,U=!1,I=!1)=>(t||M(),b.schedule(R,U,I)),y},{}),cancel:y=>{for(let D=0;D<lu.length;D++)u[lu[D]].cancel(y)},state:o,steps:u}}const{schedule:Ct,cancel:ki,state:pn,steps:Xf}=O_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Fn,!0),k_=we.createContext({strict:!1}),c0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Do={};for(const n in c0)Do[n]={isEnabled:e=>c0[n].some(t=>!!e[t])};function WM(n){for(const e in n)Do[e]={...Do[e],...n[e]}}const jM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ju(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||jM.has(n)}let B_=n=>!ju(n);function XM(n){n&&(B_=e=>e.startsWith("on")?!ju(e):n(e))}try{XM(require("@emotion/is-prop-valid").default)}catch{}function YM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(B_(o)||t===!0&&ju(o)||!e&&!ju(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function qM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const ec=we.createContext({});function za(n){return typeof n=="string"||Array.isArray(n)}function tc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Gh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Wh=["initial",...Gh];function nc(n){return tc(n.animate)||Wh.some(e=>za(n[e]))}function z_(n){return!!(nc(n)||n.variants)}function $M(n,e){if(nc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||za(t)?t:void 0,animate:za(r)?r:void 0}}return n.inherit!==!1?e:{}}function KM(n){const{initial:e,animate:t}=$M(n,we.useContext(ec));return we.useMemo(()=>({initial:e,animate:t}),[f0(e),f0(t)])}function f0(n){return Array.isArray(n)?n.join(" "):n}const ZM=Symbol.for("motionComponentSymbol");function xo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function QM(n,e,t){return we.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):xo(t)&&(t.current=r))},[e])}const jh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),JM="framerAppearId",V_="data-"+jh(JM),{schedule:Xh,cancel:c3}=O_(queueMicrotask,!1),H_=we.createContext({});function eE(n,e,t,r,o){var l,u;const{visualElement:c}=we.useContext(ec),d=we.useContext(k_),h=we.useContext(zh),p=we.useContext(U_).reducedMotion,g=we.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const v=g.current,x=we.useContext(H_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&tE(g.current,t,o,x);const M=we.useRef(!1);we.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const T=t[V_],S=we.useRef(!!T&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,T))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,T)));return F_(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Xh.render(v.render),S.current&&v.animationState&&v.animationState.animateChanges())}),we.useEffect(()=>{v&&(!S.current&&v.animationState&&v.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,T)}),S.current=!1))}),v}function tE(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:G_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&xo(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function G_(n){if(n)return n.options.allowProjection!==!1?n.projection:G_(n.parent)}function nE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&WM(n);function c(h,p){let g;const v={...we.useContext(U_),...h,layoutId:iE(h)},{isStatic:x}=v,M=KM(h),T=r(h,x);if(!x&&Vh){rE();const S=sE(v);g=S.MeasureLayout,M.visualElement=eE(o,T,v,e,S.ProjectionNode)}return Y.jsxs(ec.Provider,{value:M,children:[g&&M.visualElement?Y.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,QM(T,M.visualElement,p),T,x,M.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=we.forwardRef(c);return d[ZM]=o,d}function iE({layoutId:n}){const e=we.useContext(N_).id;return e&&n!==void 0?e+"-"+n:n}function rE(n,e){we.useContext(k_).strict}function sE(n){const{drag:e,layout:t}=Do;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const oE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yh(n){return typeof n!="string"||n.includes("-")?!1:!!(oE.indexOf(n)>-1||/[A-Z]/u.test(n))}function d0(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function qh(n,e,t,r){if(typeof e=="function"){const[o,l]=d0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=d0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Fd=n=>Array.isArray(n),aE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),lE=n=>Fd(n)?n[n.length-1]||0:n,Rn=n=>!!(n&&n.getVelocity);function Iu(n){const e=Rn(n)?n.get():n;return aE(e)?e.toValue():e}function uE({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:cE(r,o,l,n),renderState:e()};return t&&(u.onMount=c=>t({props:r,current:c,...u}),u.onUpdate=c=>t(c)),u}const W_=n=>(e,t)=>{const r=we.useContext(ec),o=we.useContext(zh),l=()=>uE(n,e,r,o);return t?l():I_(l)};function cE(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Iu(l[v]);let{initial:u,animate:c}=n;const d=nc(n),h=z_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const g=p?c:u;if(g&&typeof g!="boolean"&&!tc(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const M=qh(n,v[x]);if(M){const{transitionEnd:T,transition:S,...y}=M;for(const D in y){let b=y[D];if(Array.isArray(b)){const R=p?b.length-1:0;b=b[R]}b!==null&&(o[D]=b)}for(const D in T)o[D]=T[D]}}}return o}const zo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ds=new Set(zo),j_=n=>e=>typeof e=="string"&&e.startsWith(n),X_=j_("--"),fE=j_("var(--"),$h=n=>fE(n)?dE.test(n.split("/*")[0].trim()):!1,dE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Y_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Bi=(n,e,t)=>t>e?e:t<n?n:t,Vo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Va={...Vo,transform:n=>Bi(0,1,n)},uu={...Vo,default:1},Ya=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),zr=Ya("deg"),Ii=Ya("%"),et=Ya("px"),hE=Ya("vh"),pE=Ya("vw"),h0={...Ii,parse:n=>Ii.parse(n)/100,transform:n=>Ii.transform(n*100)},mE={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,backgroundPositionX:et,backgroundPositionY:et},gE={rotate:zr,rotateX:zr,rotateY:zr,rotateZ:zr,scale:uu,scaleX:uu,scaleY:uu,scaleZ:uu,skew:zr,skewX:zr,skewY:zr,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:Va,originX:h0,originY:h0,originZ:et},p0={...Vo,transform:Math.round},Kh={...mE,...gE,zIndex:p0,size:et,fillOpacity:Va,strokeOpacity:Va,numOctaves:p0},vE={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_E=zo.length;function yE(n,e,t){let r="",o=!0;for(let l=0;l<_E;l++){const u=zo[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=Y_(c,Kh[u]);if(!d){o=!1;const p=vE[u]||u;r+=`${p}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function Zh(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Ds.has(d)){u=!0;continue}else if(X_(d)){o[d]=h;continue}else{const p=Y_(h,Kh[d]);d.startsWith("origin")?(c=!0,l[d]=p):r[d]=p}}if(e.transform||(u||t?r.transform=yE(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=l;r.transformOrigin=`${d} ${h} ${p}`}}const xE={offset:"stroke-dashoffset",array:"stroke-dasharray"},SE={offset:"strokeDashoffset",array:"strokeDasharray"};function ME(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?xE:SE;n[l.offset]=et.transform(-r);const u=et.transform(e),c=et.transform(t);n[l.array]=`${u} ${c}`}function m0(n,e,t){return typeof n=="string"?n:et.transform(e+t*n)}function EE(n,e,t){const r=m0(e,n.x,n.width),o=m0(t,n.y,n.height);return`${r} ${o}`}function Qh(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},p,g){if(Zh(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:x,dimensions:M}=n;v.transform&&(M&&(x.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||x.transform)&&(x.transformOrigin=EE(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&ME(v,u,c,d,!1)}const Jh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),q_=()=>({...Jh(),attrs:{}}),ep=n=>typeof n=="string"&&n.toLowerCase()==="svg";function $_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const K_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Z_(n,e,t,r){$_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(K_.has(o)?o:jh(o),e.attrs[o])}const Xu={};function TE(n){Object.assign(Xu,n)}function Q_(n,{layout:e,layoutId:t}){return Ds.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Xu[n]||n==="opacity")}function tp(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(Rn(o[u])||e.style&&Rn(e.style[u])||Q_(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function J_(n,e,t){const r=tp(n,e,t);for(const o in n)if(Rn(n[o])||Rn(e[o])){const l=zo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function wE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const g0=["x","y","width","height","cx","cy","r"],AE={useVisualState:W_({scrapeMotionValuesFromProps:J_,createRenderState:q_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const c in o)if(Ds.has(c)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let c=0;c<g0.length;c++){const d=g0[c];n[d]!==e[d]&&(u=!0)}u&&Ct.read(()=>{wE(t,r),Ct.render(()=>{Qh(r,o,ep(t.tagName),n.transformTemplate),Z_(t,r)})})}})},CE={useVisualState:W_({scrapeMotionValuesFromProps:tp,createRenderState:Jh})};function ey(n,e,t){for(const r in e)!Rn(e[r])&&!Q_(r,t)&&(n[r]=e[r])}function RE({transformTemplate:n},e){return we.useMemo(()=>{const t=Jh();return Zh(t,e,n),Object.assign({},t.vars,t.style)},[e])}function bE(n,e){const t=n.style||{},r={};return ey(r,t,n),Object.assign(r,RE(n,e)),r}function PE(n,e){const t={},r=bE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function DE(n,e,t,r){const o=we.useMemo(()=>{const l=q_();return Qh(l,e,ep(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};ey(l,n.style,n),o.style={...l,...o.style}}return o}function LE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(Yh(t)?DE:PE)(r,l,u,t),h=YM(r,typeof t=="string",n),p=t!==we.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=we.useMemo(()=>Rn(g)?g.get():g,[g]);return we.createElement(t,{...p,children:v})}}function NE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Yh(r)?AE:CE,preloadedFeatures:n,useRender:LE(o),createVisualElement:e,Component:r};return nE(u)}}function ty(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function ic(n,e,t){const r=n.getProps();return qh(r,e,t!==void 0?t:r.custom,n)}const ny=Hh(()=>window.ScrollTimeline!==void 0);class IE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(ny()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class UE extends IE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function np(n,e){return n?n[e]||n.default||n:void 0}const Od=2e4;function iy(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Od;)e+=t,r=n.next(e);return e>=Od?1/0:e}function ip(n){return typeof n=="function"}function v0(n,e){n.timeline=e,n.onfinish=null}const rp=n=>Array.isArray(n)&&typeof n[0]=="number",FE={linearEasing:void 0};function OE(n,e){const t=Hh(n);return()=>{var r;return(r=FE[e])!==null&&r!==void 0?r:t()}}const Yu=OE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ry=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(Cs(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function sy(n){return!!(typeof n=="function"&&Yu()||!n||typeof n=="string"&&(n in kd||Yu())||rp(n)||Array.isArray(n)&&n.every(sy))}const Ra=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,kd={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ra([0,.65,.55,1]),circOut:Ra([.55,0,1,.45]),backIn:Ra([.31,.01,.66,-.59]),backOut:Ra([.33,1.53,.69,.99])};function oy(n,e){if(n)return typeof n=="function"&&Yu()?ry(n,e):rp(n)?Ra(n):Array.isArray(n)?n.map(t=>oy(t,e)||kd.easeOut):kd[n]}const Mi={x:!1,y:!1};function ay(){return Mi.x||Mi.y}function ly(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function uy(n,e){const t=ly(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function _0(n){return e=>{e.pointerType==="touch"||ay()||n(e)}}function kE(n,e,t={}){const[r,o,l]=uy(n,t),u=_0(c=>{const{target:d}=c,h=e(c);if(typeof h!="function"||!d)return;const p=_0(g=>{h(g),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const cy=(n,e)=>e?n===e?!0:cy(n,e.parentElement):!1,sp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,BE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function zE(n){return BE.has(n.tagName)||n.tabIndex!==-1}const ba=new WeakSet;function y0(n){return e=>{e.key==="Enter"&&n(e)}}function Yf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const VE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=y0(()=>{if(ba.has(t))return;Yf(t,"down");const o=y0(()=>{Yf(t,"up")}),l=()=>Yf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function x0(n){return sp(n)&&!ay()}function HE(n,e,t={}){const[r,o,l]=uy(n,t),u=c=>{const d=c.currentTarget;if(!x0(c)||ba.has(d))return;ba.add(d);const h=e(c),p=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!x0(x)||!ba.has(d))&&(ba.delete(d),typeof h=="function"&&h(x,{success:M}))},g=x=>{p(x,t.useGlobalTarget||cy(d,x.target))},v=x=>{p(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{!zE(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>VE(h,o),o)}),l}function GE(n){return n==="x"||n==="y"?Mi[n]?null:(Mi[n]=!0,()=>{Mi[n]=!1}):Mi.x||Mi.y?null:(Mi.x=Mi.y=!0,()=>{Mi.x=Mi.y=!1})}const fy=new Set(["width","height","top","left","right","bottom",...zo]);let Uu;function WE(){Uu=void 0}const Ui={now:()=>(Uu===void 0&&Ui.set(pn.isProcessing||VM.useManualTiming?pn.timestamp:performance.now()),Uu),set:n=>{Uu=n,queueMicrotask(WE)}};function op(n,e){n.indexOf(e)===-1&&n.push(e)}function ap(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class lp{constructor(){this.subscriptions=[]}add(e){return op(this.subscriptions,e),()=>ap(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function up(n,e){return e?n*(1e3/e):0}const S0=30,jE=n=>!isNaN(parseFloat(n));class XE{constructor(e,t={}){this.version="11.18.1",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ui.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=jE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new lp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Ct.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>S0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,S0);return up(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function rr(n,e){return new XE(n,e)}function YE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,rr(t))}function qE(n,e){const t=ic(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=lE(l[u]);YE(n,u,c)}}function $E(n){return!!(Rn(n)&&n.add)}function Bd(n,e){const t=n.getValue("willChange");if($E(t))return t.add(e)}function dy(n){return n.props[V_]}const hy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,KE=1e-7,ZE=12;function QE(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=hy(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>KE&&++c<ZE);return u}function qa(n,e,t,r){if(n===e&&t===r)return Fn;const o=l=>QE(l,0,1,n,t);return l=>l===0||l===1?l:hy(o(l),e,r)}const py=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,my=n=>e=>1-n(1-e),gy=qa(.33,1.53,.69,.99),cp=my(gy),vy=py(cp),_y=n=>(n*=2)<1?.5*cp(n):.5*(2-Math.pow(2,-10*(n-1))),fp=n=>1-Math.sin(Math.acos(n)),yy=my(fp),xy=py(fp),Sy=n=>/^0[^.\s]+$/u.test(n);function JE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Sy(n):!0}const La=n=>Math.round(n*1e5)/1e5,dp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function eT(n){return n==null}const tT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hp=(n,e)=>t=>!!(typeof t=="string"&&tT.test(t)&&t.startsWith(n)||e&&!eT(t)&&Object.prototype.hasOwnProperty.call(t,e)),My=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(dp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},nT=n=>Bi(0,255,n),qf={...Vo,transform:n=>Math.round(nT(n))},Es={test:hp("rgb","red"),parse:My("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+qf.transform(n)+", "+qf.transform(e)+", "+qf.transform(t)+", "+La(Va.transform(r))+")"};function iT(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const zd={test:hp("#"),parse:iT,transform:Es.transform},So={test:hp("hsl","hue"),parse:My("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Ii.transform(La(e))+", "+Ii.transform(La(t))+", "+La(Va.transform(r))+")"},Cn={test:n=>Es.test(n)||zd.test(n)||So.test(n),parse:n=>Es.test(n)?Es.parse(n):So.test(n)?So.parse(n):zd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Es.transform(n):So.transform(n)},rT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sT(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(dp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(rT))===null||t===void 0?void 0:t.length)||0)>0}const Ey="number",Ty="color",oT="var",aT="var(",M0="${}",lT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ha(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(lT,d=>(Cn.test(d)?(r.color.push(l),o.push(Ty),t.push(Cn.parse(d))):d.startsWith(aT)?(r.var.push(l),o.push(oT),t.push(d)):(r.number.push(l),o.push(Ey),t.push(parseFloat(d))),++l,M0)).split(M0);return{values:t,split:c,indexes:r,types:o}}function wy(n){return Ha(n).values}function Ay(n){const{split:e,types:t}=Ha(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===Ey?l+=La(o[u]):c===Ty?l+=Cn.transform(o[u]):l+=o[u]}return l}}const uT=n=>typeof n=="number"?0:n;function cT(n){const e=wy(n);return Ay(n)(e.map(uT))}const Xr={test:sT,parse:wy,createTransformer:Ay,getAnimatableNone:cT},fT=new Set(["brightness","contrast","saturate","opacity"]);function dT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(dp)||[];if(!r)return n;const o=t.replace(r,"");let l=fT.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const hT=/\b([a-z-]*)\(.*?\)/gu,Vd={...Xr,getAnimatableNone:n=>{const e=n.match(hT);return e?e.map(dT).join(" "):n}},pT={...Kh,color:Cn,backgroundColor:Cn,outlineColor:Cn,fill:Cn,stroke:Cn,borderColor:Cn,borderTopColor:Cn,borderRightColor:Cn,borderBottomColor:Cn,borderLeftColor:Cn,filter:Vd,WebkitFilter:Vd},pp=n=>pT[n];function Cy(n,e){let t=pp(n);return t!==Vd&&(t=Xr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const mT=new Set(["auto","none","0"]);function gT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!mT.has(l)&&Ha(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Cy(t,o)}const E0=n=>n===Vo||n===et,T0=(n,e)=>parseFloat(n.split(", ")[e]),w0=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return T0(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?T0(l[1],n):0}},vT=new Set(["x","y","z"]),_T=zo.filter(n=>!vT.has(n));function yT(n){const e=[];return _T.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Lo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:w0(4,13),y:w0(5,14)};Lo.translateX=Lo.x;Lo.translateY=Lo.y;const As=new Set;let Hd=!1,Gd=!1;function Ry(){if(Gd){const n=Array.from(As).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=yT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Gd=!1,Hd=!1,As.forEach(n=>n.complete()),As.clear()}function by(){As.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Gd=!0)})}function xT(){by(),Ry()}class mp{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(As.add(this),Hd||(Hd=!0,Ct.read(by),Ct.resolveKeyframes(Ry))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),As.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,As.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Py=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),ST=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function MT(n){const e=ST.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Dy(n,e,t=1){const[r,o]=MT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return Py(u)?parseFloat(u):u}return $h(o)?Dy(o,e,t+1):o}const Ly=n=>e=>e.test(n),ET={test:n=>n==="auto",parse:n=>n},Ny=[Vo,et,Ii,zr,pE,hE,ET],A0=n=>Ny.find(Ly(n));class Iy extends mp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),$h(h))){const p=Dy(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!fy.has(r)||e.length!==2)return;const[o,l]=e,u=A0(o),c=A0(l);if(u!==c)if(E0(u)&&E0(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)JE(e[o])&&r.push(o);r.length&&gT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Lo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Lo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const C0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Xr.test(n)||n==="0")&&!n.startsWith("url("));function TT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function wT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=C0(o,e),c=C0(l,e);return!u||!c?!1:TT(n)||(t==="spring"||ip(t))&&r}const AT=n=>n!==null;function rc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(AT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const CT=40;class Uy{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ui.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>CT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&xT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ui.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!wT(e,r,o,l))if(u)this.options.duration=0;else{d==null||d(rc(e,this.options,t)),c==null||c(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Gt=(n,e,t)=>n+(e-n)*t;function $f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function RT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=$f(d,c,n+1/3),l=$f(d,c,n),u=$f(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function qu(n,e){return t=>t>0?e:n}const Kf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},bT=[zd,Es,So],PT=n=>bT.find(e=>e.test(n));function R0(n){const e=PT(n);if(!e)return!1;let t=e.parse(n);return e===So&&(t=RT(t)),t}const b0=(n,e)=>{const t=R0(n),r=R0(e);if(!t||!r)return qu(n,e);const o={...t};return l=>(o.red=Kf(t.red,r.red,l),o.green=Kf(t.green,r.green,l),o.blue=Kf(t.blue,r.blue,l),o.alpha=Gt(t.alpha,r.alpha,l),Es.transform(o))},DT=(n,e)=>t=>e(n(t)),$a=(...n)=>n.reduce(DT),Wd=new Set(["none","hidden"]);function LT(n,e){return Wd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function NT(n,e){return t=>Gt(n,e,t)}function gp(n){return typeof n=="number"?NT:typeof n=="string"?$h(n)?qu:Cn.test(n)?b0:FT:Array.isArray(n)?Fy:typeof n=="object"?Cn.test(n)?b0:IT:qu}function Fy(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>gp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function IT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=gp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function UT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const FT=(n,e)=>{const t=Xr.createTransformer(e),r=Ha(n),o=Ha(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Wd.has(n)&&!o.values.length||Wd.has(e)&&!r.values.length?LT(n,e):$a(Fy(UT(r,o),o.values),t):qu(n,e)};function Oy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Gt(n,e,t):gp(n)(n,e)}const OT=5;function ky(n,e,t){const r=Math.max(e-OT,0);return up(t-n(r),e-r)}const Yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},P0=.001;function kT({duration:n=Yt.duration,bounce:e=Yt.bounce,velocity:t=Yt.velocity,mass:r=Yt.mass}){let o,l,u=1-e;u=Bi(Yt.minDamping,Yt.maxDamping,u),n=Bi(Yt.minDuration,Yt.maxDuration,lr(n)),u<1?(o=h=>{const p=h*u,g=p*n,v=p-t,x=jd(h,u),M=Math.exp(-g);return P0-v/x*M},l=h=>{const g=h*u*n,v=g*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),T=jd(Math.pow(h,2),u);return(-o(h)+P0>0?-1:1)*((v-x)*M)/T}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-.001+p*g},l=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const c=5/n,d=zT(o,l,c);if(n=ar(n),isNaN(d))return{stiffness:Yt.stiffness,damping:Yt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const BT=12;function zT(n,e,t){let r=t;for(let o=1;o<BT;o++)r=r-n(r)/e(r);return r}function jd(n,e){return n*Math.sqrt(1-e*e)}const VT=["duration","bounce"],HT=["stiffness","damping","mass"];function D0(n,e){return e.some(t=>n[t]!==void 0)}function GT(n){let e={velocity:Yt.velocity,stiffness:Yt.stiffness,damping:Yt.damping,mass:Yt.mass,isResolvedFromDuration:!1,...n};if(!D0(n,HT)&&D0(n,VT))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*Bi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Yt.mass,stiffness:o,damping:l}}else{const t=kT(n);e={...e,...t,mass:Yt.mass},e.isResolvedFromDuration=!0}return e}function By(n=Yt.visualDuration,e=Yt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:x}=GT({...t,velocity:-lr(t.velocity||0)}),M=v||0,T=h/(2*Math.sqrt(d*p)),S=u-l,y=lr(Math.sqrt(d/p)),D=Math.abs(S)<5;r||(r=D?Yt.restSpeed.granular:Yt.restSpeed.default),o||(o=D?Yt.restDelta.granular:Yt.restDelta.default);let b;if(T<1){const U=jd(y,T);b=I=>{const O=Math.exp(-T*y*I);return u-O*((M+T*y*S)/U*Math.sin(U*I)+S*Math.cos(U*I))}}else if(T===1)b=U=>u-Math.exp(-y*U)*(S+(M+y*S)*U);else{const U=y*Math.sqrt(T*T-1);b=I=>{const O=Math.exp(-T*y*I),k=Math.min(U*I,300);return u-O*((M+T*y*S)*Math.sinh(k)+U*S*Math.cosh(k))/U}}const R={calculatedDuration:x&&g||null,next:U=>{const I=b(U);if(x)c.done=U>=g;else{let O=0;T<1&&(O=U===0?ar(M):ky(b,U,I));const k=Math.abs(O)<=r,P=Math.abs(u-I)<=o;c.done=k&&P}return c.value=c.done?u:I,c},toString:()=>{const U=Math.min(iy(R),Od),I=ry(O=>R.next(U*O).value,U,30);return U+"ms "+I}};return R}function L0({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},x=k=>c!==void 0&&k<c||d!==void 0&&k>d,M=k=>c===void 0?d:d===void 0||Math.abs(c-k)<Math.abs(d-k)?c:d;let T=t*e;const S=g+T,y=u===void 0?S:u(S);y!==S&&(T=y-g);const D=k=>-T*Math.exp(-k/r),b=k=>y+D(k),R=k=>{const P=D(k),C=b(k);v.done=Math.abs(P)<=h,v.value=v.done?y:C};let U,I;const O=k=>{x(v.value)&&(U=k,I=By({keyframes:[v.value,M(v.value)],velocity:ky(b,k,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:p}))};return O(0),{calculatedDuration:null,next:k=>{let P=!1;return!I&&U===void 0&&(P=!0,R(k),O(k)),U!==void 0&&k>=U?I.next(k-U):(!P&&R(k),v)}}}const WT=qa(.42,0,1,1),jT=qa(0,0,.58,1),zy=qa(.42,0,.58,1),XT=n=>Array.isArray(n)&&typeof n[0]!="number",N0={linear:Fn,easeIn:WT,easeInOut:zy,easeOut:jT,circIn:fp,circInOut:xy,circOut:yy,backIn:cp,backInOut:vy,backOut:gy,anticipate:_y},I0=n=>{if(rp(n)){Ud(n.length===4);const[e,t,r,o]=n;return qa(e,t,r,o)}else if(typeof n=="string")return Ud(N0[n]!==void 0),N0[n];return n};function YT(n,e,t){const r=[],o=t||Oy,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Fn:e;c=$a(d,c)}r.push(c)}return r}function Vy(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(Ud(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=YT(e,r,o),d=c.length,h=p=>{if(u&&p<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const v=Cs(n[g],n[g+1],p);return c[g](v)};return t?p=>h(Bi(n[0],n[l-1],p)):h}function qT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Cs(0,e,r);n.push(Gt(t,1,o))}}function Hy(n){const e=[0];return qT(e,n.length-1),e}function $T(n,e){return n.map(t=>t*e)}function KT(n,e){return n.map(()=>e||zy).splice(0,n.length-1)}function $u({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=XT(r)?r.map(I0):I0(r),l={done:!1,value:e[0]},u=$T(t&&t.length===e.length?t:Hy(e),n),c=Vy(u,e,{ease:Array.isArray(o)?o:KT(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const ZT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Ct.update(e,!0),stop:()=>ki(e),now:()=>pn.isProcessing?pn.timestamp:Ui.now()}},QT={decay:L0,inertia:L0,tween:$u,keyframes:$u,spring:By},JT=n=>n/100;class vp extends Uy{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||mp,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=ip(t)?t:QT[t]||$u;let d,h;c!==$u&&typeof e[0]!="number"&&(d=$a(JT,Oy(e[0],e[1])),e=[0,100]);const p=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=iy(p));const{calculatedDuration:g}=p,v=g+o,x=v*(r+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:p,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:x,repeatType:M,repeatDelay:T,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),D=this.speed>=0?y<0:y>p;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let b=this.currentTime,R=l;if(x){const k=Math.min(this.currentTime,p)/g;let P=Math.floor(k),C=k%1;!C&&k>=1&&(C=1),C===1&&P--,P=Math.min(P,x+1),!!(P%2)&&(M==="reverse"?(C=1-C,T&&(C-=T/g)):M==="mirror"&&(R=u)),b=Bi(0,1,C)*g}const U=D?{done:!1,value:d[0]}:R.next(b);c&&(U.value=c(U.value));let{done:I}=U;!D&&h!==null&&(I=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return O&&o!==void 0&&(U.value=rc(d,this.options,o)),S&&S(U.value),O&&this.finish(),U}get duration(){const{resolved:e}=this;return e?lr(e.calculatedDuration):0}get time(){return lr(this.currentTime)}set time(e){e=ar(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=lr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=ZT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const ew=new Set(["opacity","clipPath","filter","transform"]);function tw(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const p=oy(c,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const nw=Hh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ku=10,iw=2e4;function rw(n){return ip(n.type)||n.type==="spring"||!sy(n.ease)}function sw(n,e){const t=new vp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<iw;)r=t.sample(l),o.push(r.value),l+=Ku;return{times:void 0,keyframes:o,duration:l-Ku,ease:"linear"}}const Gy={anticipate:_y,backInOut:vy,circInOut:xy};function ow(n){return n in Gy}class U0 extends Uy{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new Iy(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){var r;let{duration:o=300,times:l,ease:u,type:c,motionValue:d,name:h,startTime:p}=this.options;if(!(!((r=d.owner)===null||r===void 0)&&r.current))return!1;if(typeof u=="string"&&Yu()&&ow(u)&&(u=Gy[u]),rw(this.options)){const{onComplete:v,onUpdate:x,motionValue:M,element:T,...S}=this.options,y=sw(e,S);e=y.keyframes,e.length===1&&(e[1]=e[0]),o=y.duration,l=y.times,u=y.ease,c="keyframes"}const g=tw(d.owner.current,h,e,{...this.options,duration:o,times:l,ease:u});return g.startTime=p??this.calcStartTime(),this.pendingTimeline?(v0(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;d.set(rc(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:o,times:l,type:c,ease:u,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return lr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return lr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=ar(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Fn;const{animation:r}=t;v0(r,e)}return Fn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:g,element:v,...x}=this.options,M=new vp({...x,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),T=ar(this.time);h.setWithVelocity(M.sample(T-Ku).value,M.sample(T).value,Ku)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;return nw()&&r&&ew.has(r)&&t&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const aw={type:"spring",stiffness:500,damping:25,restSpeed:10},lw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),uw={type:"keyframes",duration:.8},cw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fw=(n,{keyframes:e})=>e.length>2?uw:Ds.has(n)?n.startsWith("scale")?lw(e[1]):aw:cw;function dw({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const _p=(n,e,t,r={},o,l)=>u=>{const c=np(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ar(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};dw(c)||(p={...p,...fw(n,p)}),p.duration&&(p.duration=ar(p.duration)),p.repeatDelay&&(p.repeatDelay=ar(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=rc(p.keyframes,c);if(v!==void 0)return Ct.update(()=>{p.onUpdate(v),p.onComplete()}),new UE([])}return!l&&U0.supports(p)?new U0(p):new vp(p)};function hw({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Wy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),x=d[g];if(x===void 0||p&&hw(p,g))continue;const M={delay:t,...np(u||{},g)};let T=!1;if(window.MotionHandoffAnimation){const y=dy(n);if(y){const D=window.MotionHandoffAnimation(y,g,Ct);D!==null&&(M.startTime=D,T=!0)}}Bd(n,g),v.start(_p(g,v,x,n.shouldReduceMotion&&fy.has(g)?{type:!1}:M,n,T));const S=v.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{Ct.update(()=>{c&&qE(n,c)})}),h}function Xd(n,e,t={}){var r;const o=ic(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(Wy(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:v}=l;return pw(n,e,p+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,p]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>p())}else return Promise.all([u(),c(t.delay)])}function pw(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(mw).forEach((h,p)=>{h.notify("AnimationStart",e),u.push(Xd(h,e,{...l,delay:t+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function mw(n,e){return n.sortNodePosition(e)}function gw(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Xd(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Xd(n,e,t);else{const o=typeof e=="function"?ic(n,e,t.custom):e;r=Promise.all(Wy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const vw=Wh.length;function jy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?jy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<vw;t++){const r=Wh[t],o=n.props[r];(za(o)||o===!1)&&(e[r]=o)}return e}const _w=[...Gh].reverse(),yw=Gh.length;function xw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>gw(n,t,r)))}function Sw(n){let e=xw(n),t=F0(),r=!0;const o=d=>(h,p)=>{var g;const v=ic(n,p,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:x,transitionEnd:M,...T}=v;h={...h,...T,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,p=jy(n.parent)||{},g=[],v=new Set;let x={},M=1/0;for(let S=0;S<yw;S++){const y=_w[S],D=t[y],b=h[y]!==void 0?h[y]:p[y],R=za(b),U=y===d?D.isActive:null;U===!1&&(M=S);let I=b===p[y]&&b!==h[y]&&R;if(I&&r&&n.manuallyAnimateOnMount&&(I=!1),D.protectedKeys={...x},!D.isActive&&U===null||!b&&!D.prevProp||tc(b)||typeof b=="boolean")continue;const O=Mw(D.prevProp,b);let k=O||y===d&&D.isActive&&!I&&R||S>M&&R,P=!1;const C=Array.isArray(b)?b:[b];let V=C.reduce(o(y),{});U===!1&&(V={});const{prevResolvedValues:le={}}=D,ee={...le,...V},ae=re=>{k=!0,v.has(re)&&(P=!0,v.delete(re)),D.needsAnimating[re]=!0;const B=n.getValue(re);B&&(B.liveStyle=!1)};for(const re in ee){const B=V[re],ue=le[re];if(x.hasOwnProperty(re))continue;let se=!1;Fd(B)&&Fd(ue)?se=!ty(B,ue):se=B!==ue,se?B!=null?ae(re):v.add(re):B!==void 0&&v.has(re)?ae(re):D.protectedKeys[re]=!0}D.prevProp=b,D.prevResolvedValues=V,D.isActive&&(x={...x,...V}),r&&n.blockInitialAnimation&&(k=!1),k&&(!(I&&O)||P)&&g.push(...C.map(re=>({animation:re,options:{type:y}})))}if(v.size){const S={};v.forEach(y=>{const D=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),S[y]=D??null}),g.push({animation:S})}let T=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(g):Promise.resolve()}function c(d,h){var p;if(t[d].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(v=>{var x;return(x=v.animationState)===null||x===void 0?void 0:x.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=F0(),r=!0}}}function Mw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!ty(e,n):!1}function fs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function F0(){return{animate:fs(!0),whileInView:fs(),whileHover:fs(),whileTap:fs(),whileDrag:fs(),whileFocus:fs(),exit:fs()}}class $r{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Ew extends $r{constructor(e){super(e),e.animationState||(e.animationState=Sw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();tc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Tw=0;class ww extends $r{constructor(){super(...arguments),this.id=Tw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Aw={animation:{Feature:Ew},exit:{Feature:ww}};function Ga(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Ka(n){return{point:{x:n.pageX,y:n.pageY}}}const Cw=n=>e=>sp(e)&&n(e,Ka(e));function Na(n,e,t,r){return Ga(n,e,Cw(t),r)}const O0=(n,e)=>Math.abs(n-e);function Rw(n,e){const t=O0(n.x,e.x),r=O0(n.y,e.y);return Math.sqrt(t**2+r**2)}class Xy{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Qf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,x=Rw(g.offset,{x:0,y:0})>=3;if(!v&&!x)return;const{point:M}=g,{timestamp:T}=pn;this.history.push({...M,timestamp:T});const{onStart:S,onMove:y}=this.handlers;v||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Zf(v,this.transformPagePoint),Ct.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Qf(g.type==="pointercancel"?this.lastMoveEventInfo:Zf(v,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,S),M&&M(g,S)},!sp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Ka(e),c=Zf(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=pn;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,Qf(c,this.history)),this.removeListeners=$a(Na(this.contextWindow,"pointermove",this.handlePointerMove),Na(this.contextWindow,"pointerup",this.handlePointerUp),Na(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ki(this.updatePoint)}}function Zf(n,e){return e?{point:e(n.point)}:n}function k0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Qf({point:n},e){return{point:n,delta:k0(n,Yy(e)),offset:k0(n,bw(e)),velocity:Pw(e,.1)}}function bw(n){return n[0]}function Yy(n){return n[n.length-1]}function Pw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=Yy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ar(e)));)t--;if(!r)return{x:0,y:0};const l=lr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const qy=1e-4,Dw=1-qy,Lw=1+qy,$y=.01,Nw=0-$y,Iw=0+$y;function ti(n){return n.max-n.min}function Uw(n,e,t){return Math.abs(n-e)<=t}function B0(n,e,t,r=.5){n.origin=r,n.originPoint=Gt(e.min,e.max,n.origin),n.scale=ti(t)/ti(e),n.translate=Gt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Dw&&n.scale<=Lw||isNaN(n.scale))&&(n.scale=1),(n.translate>=Nw&&n.translate<=Iw||isNaN(n.translate))&&(n.translate=0)}function Ia(n,e,t,r){B0(n.x,e.x,t.x,r?r.originX:void 0),B0(n.y,e.y,t.y,r?r.originY:void 0)}function z0(n,e,t){n.min=t.min+e.min,n.max=n.min+ti(e)}function Fw(n,e,t){z0(n.x,e.x,t.x),z0(n.y,e.y,t.y)}function V0(n,e,t){n.min=e.min-t.min,n.max=n.min+ti(e)}function Ua(n,e,t){V0(n.x,e.x,t.x),V0(n.y,e.y,t.y)}function Ow(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Gt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Gt(t,n,r.max):Math.min(n,t)),n}function H0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function kw(n,{top:e,left:t,bottom:r,right:o}){return{x:H0(n.x,t,o),y:H0(n.y,e,r)}}function G0(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function Bw(n,e){return{x:G0(n.x,e.x),y:G0(n.y,e.y)}}function zw(n,e){let t=.5;const r=ti(n),o=ti(e);return o>r?t=Cs(e.min,e.max-r,n.min):r>o&&(t=Cs(n.min,n.max-o,e.min)),Bi(0,1,t)}function Vw(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Yd=.35;function Hw(n=Yd){return n===!1?n=0:n===!0&&(n=Yd),{x:W0(n,"left","right"),y:W0(n,"top","bottom")}}function W0(n,e,t){return{min:j0(n,e),max:j0(n,t)}}function j0(n,e){return typeof n=="number"?n:n[e]||0}const X0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mo=()=>({x:X0(),y:X0()}),Y0=()=>({min:0,max:0}),$t=()=>({x:Y0(),y:Y0()});function ci(n){return[n("x"),n("y")]}function Ky({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function Gw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Ww(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Jf(n){return n===void 0||n===1}function qd({scale:n,scaleX:e,scaleY:t}){return!Jf(n)||!Jf(e)||!Jf(t)}function _s(n){return qd(n)||Zy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Zy(n){return q0(n.x)||q0(n.y)}function q0(n){return n&&n!=="0%"}function Zu(n,e,t){const r=n-t,o=e*r;return t+o}function $0(n,e,t,r,o){return o!==void 0&&(n=Zu(n,o,r)),Zu(n,t,r)+e}function $d(n,e=0,t=1,r,o){n.min=$0(n.min,e,t,r,o),n.max=$0(n.max,e,t,r,o)}function Qy(n,{x:e,y:t}){$d(n.x,e.translate,e.scale,e.originPoint),$d(n.y,t.translate,t.scale,t.originPoint)}const K0=.999999999999,Z0=1.0000000000001;function jw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&To(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Qy(n,u)),r&&_s(l.latestValues)&&To(n,l.latestValues))}e.x<Z0&&e.x>K0&&(e.x=1),e.y<Z0&&e.y>K0&&(e.y=1)}function Eo(n,e){n.min=n.min+e,n.max=n.max+e}function Q0(n,e,t,r,o=.5){const l=Gt(n.min,n.max,o);$d(n,e,t,l,r)}function To(n,e){Q0(n.x,e.x,e.scaleX,e.scale,e.originX),Q0(n.y,e.y,e.scaleY,e.scale,e.originY)}function Jy(n,e){return Ky(Ww(n.getBoundingClientRect(),e))}function Xw(n,e,t){const r=Jy(n,t),{scroll:o}=e;return o&&(Eo(r.x,o.offset.x),Eo(r.y,o.offset.y)),r}const ex=({current:n})=>n?n.ownerDocument.defaultView:null,Yw=new WeakMap;class qw{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$t(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ka(p).point)},l=(p,g)=>{const{drag:v,dragPropagation:x,onDragStart:M}=this.getProps();if(v&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=GE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ci(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Ii.test(y)){const{projection:D}=this.visualElement;if(D&&D.layout){const b=D.layout.layoutBox[S];b&&(y=ti(b)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&Ct.postRender(()=>M(p,g)),Bd(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},u=(p,g)=>{const{dragPropagation:v,dragDirectionLock:x,onDirectionLock:M,onDrag:T}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:S}=g;if(x&&this.currentDirection===null){this.currentDirection=$w(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),T&&T(p,g)},c=(p,g)=>this.stop(p,g),d=()=>ci(p=>{var g;return this.getAnimationState(p)==="paused"&&((g=this.getAxisMotionValue(p).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Xy(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:ex(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&Ct.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!cu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=Ow(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&xo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=kw(o.layoutBox,t):this.constraints=!1,this.elastic=Hw(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ci(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=Vw(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!xo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=Xw(r,o.root,this.visualElement.getTransformPagePoint());let u=Bw(o.layout.layoutBox,l);if(t){const c=t(Gw(u));this.hasMutatedConstraints=!!c,c&&(u=Ky(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ci(p=>{if(!cu(p,t,this.currentDirection))return;let g=d[p]||{};u&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Bd(this.visualElement,e),r.start(_p(e,r,0,t,this.visualElement,!1))}stopAnimation(){ci(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ci(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ci(t=>{const{drag:r}=this.getProps();if(!cu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Gt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!xo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ci(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=zw({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ci(u=>{if(!cu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Gt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;Yw.set(this.visualElement,this);const e=this.visualElement.current,t=Na(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();xo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ct.read(r);const u=Ga(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ci(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=d[p].translate,g.set(g.get()+d[p].translate))}),this.visualElement.render())});return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Yd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function cu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function $w(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class Kw extends $r{constructor(e){super(e),this.removeGroupControls=Fn,this.removeListeners=Fn,this.controls=new qw(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Fn}unmount(){this.removeGroupControls(),this.removeListeners()}}const J0=n=>(e,t)=>{n&&Ct.postRender(()=>n(e,t))};class Zw extends $r{constructor(){super(...arguments),this.removePointerDownListener=Fn}onPointerDown(e){this.session=new Xy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ex(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:J0(e),onStart:J0(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ct.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=Na(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Fu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ev(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ma={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(et.test(n))n=parseFloat(n);else return n;const t=ev(n,e.target.x),r=ev(n,e.target.y);return`${t}% ${r}%`}},Qw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Xr.parse(n);if(o.length>5)return r;const l=Xr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Gt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class Jw extends we.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;TE(e1),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Fu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ct.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Xh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function tx(n){const[e,t]=BM(),r=we.useContext(N_);return Y.jsx(Jw,{...n,layoutGroup:r,switchLayoutGroup:we.useContext(H_),isPresent:e,safeToRemove:t})}const e1={borderRadius:{...Ma,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ma,borderTopRightRadius:Ma,borderBottomLeftRadius:Ma,borderBottomRightRadius:Ma,boxShadow:Qw};function t1(n,e,t){const r=Rn(n)?n:rr(n);return r.start(_p("",r,e,t)),r.animation}function n1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const i1=(n,e)=>n.depth-e.depth;class r1{constructor(){this.children=[],this.isDirty=!1}add(e){op(this.children,e),this.isDirty=!0}remove(e){ap(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(i1),this.isDirty=!1,this.children.forEach(e)}}function s1(n,e){const t=Ui.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(ki(r),n(l-e))};return Ct.read(r,!0),()=>ki(r)}const nx=["TopLeft","TopRight","BottomLeft","BottomRight"],o1=nx.length,tv=n=>typeof n=="string"?parseFloat(n):n,nv=n=>typeof n=="number"||et.test(n);function a1(n,e,t,r,o,l){o?(n.opacity=Gt(0,t.opacity!==void 0?t.opacity:1,l1(r)),n.opacityExit=Gt(e.opacity!==void 0?e.opacity:1,0,u1(r))):l&&(n.opacity=Gt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<o1;u++){const c=`border${nx[u]}Radius`;let d=iv(e,c),h=iv(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||nv(d)===nv(h)?(n[c]=Math.max(Gt(tv(d),tv(h),r),0),(Ii.test(h)||Ii.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Gt(e.rotate||0,t.rotate||0,r))}function iv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const l1=ix(0,.5,yy),u1=ix(.5,.95,Fn);function ix(n,e,t){return r=>r<n?0:r>e?1:t(Cs(n,e,r))}function rv(n,e){n.min=e.min,n.max=e.max}function li(n,e){rv(n.x,e.x),rv(n.y,e.y)}function sv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function ov(n,e,t,r,o){return n-=e,n=Zu(n,1/t,r),o!==void 0&&(n=Zu(n,1/o,r)),n}function c1(n,e=0,t=1,r=.5,o,l=n,u=n){if(Ii.test(e)&&(e=parseFloat(e),e=Gt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Gt(l.min,l.max,r);n===l&&(c-=e),n.min=ov(n.min,e,t,c,o),n.max=ov(n.max,e,t,c,o)}function av(n,e,[t,r,o],l,u){c1(n,e[t],e[r],e[o],e.scale,l,u)}const f1=["x","scaleX","originX"],d1=["y","scaleY","originY"];function lv(n,e,t,r){av(n.x,e,f1,t?t.x:void 0,r?r.x:void 0),av(n.y,e,d1,t?t.y:void 0,r?r.y:void 0)}function uv(n){return n.translate===0&&n.scale===1}function rx(n){return uv(n.x)&&uv(n.y)}function cv(n,e){return n.min===e.min&&n.max===e.max}function h1(n,e){return cv(n.x,e.x)&&cv(n.y,e.y)}function fv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function sx(n,e){return fv(n.x,e.x)&&fv(n.y,e.y)}function dv(n){return ti(n.x)/ti(n.y)}function hv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class p1{constructor(){this.members=[]}add(e){op(this.members,e),e.scheduleRender()}remove(e){if(ap(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function m1(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const ys={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Pa=typeof window<"u"&&window.MotionDebug!==void 0,ed=["","X","Y","Z"],g1={visibility:"hidden"},pv=1e3;let v1=0;function td(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function ox(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=dy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ct,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&ox(r)}function ax({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=v1++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Pa&&(ys.totalNodes=ys.resolvedTargetDeltas=ys.recalculatedProjection=0),this.nodes.forEach(x1),this.nodes.forEach(w1),this.nodes.forEach(A1),this.nodes.forEach(S1),Pa&&window.MotionDebug.record(ys)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new r1)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new lp),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=n1(u),this.instance=u;const{layoutId:d,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=s1(v,250),Fu.hasAnimatedSinceResize&&(Fu.hasAnimatedSinceResize=!1,this.nodes.forEach(gv))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||D1,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=p.getProps(),D=!this.targetLayout||!sx(this.targetLayout,M)||x,b=!v&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||b||v&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,b);const R={...np(T,"layout"),onPlay:S,onComplete:y};(p.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else v||gv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,ki(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(C1),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ox(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(mv);return}this.isUpdating||this.nodes.forEach(E1),this.isUpdating=!1,this.nodes.forEach(T1),this.nodes.forEach(_1),this.nodes.forEach(y1),this.clearAllSnapshots();const c=Ui.now();pn.delta=Bi(0,1e3/60,c-pn.timestamp),pn.timestamp=c,pn.isProcessing=!0,Xf.update.process(pn),Xf.preRender.process(pn),Xf.render.process(pn),pn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(M1),this.sharedNodes.forEach(R1)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ct.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ct.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=$t(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!rx(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;u&&(c||_s(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),L1(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return $t();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(N1))){const{scroll:p}=this.root;p&&(Eo(d.x,p.offset.x),Eo(d.y,p.offset.y))}return d}removeElementScroll(u){var c;const d=$t();if(li(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:v}=p;p!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&li(d,u),Eo(d.x,g.offset.x),Eo(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=$t();li(d,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&To(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),_s(p.latestValues)&&To(d,p.latestValues)}return _s(this.latestValues)&&To(d,this.latestValues),d}removeTransform(u){const c=$t();li(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!_s(h.latestValues))continue;qd(h.latestValues)&&h.updateSnapshot();const p=$t(),g=h.measurePageBox();li(p,g),lv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return _s(this.latestValues)&&lv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==pn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=pn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),Ua(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=$t(),this.targetWithTransforms=$t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Fw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):li(this.target,this.layout.layoutBox),Qy(this.target,this.targetDelta)):li(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),Ua(this.relativeTargetOrigin,this.target,x.target),li(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Pa&&ys.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||qd(this.parent.latestValues)||Zy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===pn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;li(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;jw(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=$t());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(sv(this.prevProjectionDelta.x,this.projectionDelta.x),sv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ia(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!hv(this.projectionDelta.x,this.prevProjectionDelta.x)||!hv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Pa&&ys.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mo(),this.projectionDelta=Mo(),this.projectionDeltaWithTransform=Mo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},g=Mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=$t(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=x!==M,S=this.getStack(),y=!S||S.members.length<=1,D=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(P1));this.animationProgress=0;let b;this.mixTargetDelta=R=>{const U=R/1e3;vv(g.x,u.x,U),vv(g.y,u.y,U),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ua(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),b1(this.relativeTarget,this.relativeTargetOrigin,v,U),b&&h1(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=$t()),li(b,this.relativeTarget)),T&&(this.animationValues=p,a1(p,h,this.latestValues,U,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(ki(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ct.update(()=>{Fu.hasAnimatedSinceResize=!0,this.currentAnimation=t1(0,pv,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:p}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&lx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||$t();const g=ti(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=ti(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}li(c,d),To(c,p),Ia(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new p1),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&td("z",u,h,this.animationValues);for(let p=0;p<ed.length;p++)td(`rotate${ed[p]}`,u,h,this.animationValues),td(`skew${ed[p]}`,u,h,this.animationValues);u.render();for(const p in h)u.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return g1;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Iu(u==null?void 0:u.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=Iu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!_s(this.latestValues)&&(T.transform=p?p({},""):"none",this.hasProjected=!1),T}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=m1(this.projectionDeltaWithTransform,this.treeScale,v),p&&(h.transform=p(v,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const T in Xu){if(v[T]===void 0)continue;const{correct:S,applyTo:y}=Xu[T],D=h.transform==="none"?v[T]:S(v[T],g);if(y){const b=y.length;for(let R=0;R<b;R++)h[y[R]]=D}else h[T]=D}return this.options.layoutId&&(h.pointerEvents=g===this?Iu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(mv),this.root.sharedNodes.clear()}}}function _1(n){n.updateLayout()}function y1(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?ci(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=ti(v);v.min=r[g].min,v.max=v.min+x}):lx(l,t.layoutBox,r)&&ci(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],x=ti(r[g]);v.max=v.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const c=Mo();Ia(c,r,t.layoutBox);const d=Mo();u?Ia(d,n.applyTransform(o,!0),t.measuredBox):Ia(d,r,t.layoutBox);const h=!rx(c);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:x}=g;if(v&&x){const M=$t();Ua(M,t.layoutBox,v.layoutBox);const T=$t();Ua(T,r,x.layoutBox),sx(M,T)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function x1(n){Pa&&ys.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function S1(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function M1(n){n.clearSnapshot()}function mv(n){n.clearMeasurements()}function E1(n){n.isLayoutDirty=!1}function T1(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function gv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function w1(n){n.resolveTargetDelta()}function A1(n){n.calcProjection()}function C1(n){n.resetSkewAndRotation()}function R1(n){n.removeLeadSnapshot()}function vv(n,e,t){n.translate=Gt(e.translate,0,t),n.scale=Gt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function _v(n,e,t,r){n.min=Gt(e.min,t.min,r),n.max=Gt(e.max,t.max,r)}function b1(n,e,t,r){_v(n.x,e.x,t.x,r),_v(n.y,e.y,t.y,r)}function P1(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const D1={duration:.45,ease:[.4,0,.1,1]},yv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),xv=yv("applewebkit/")&&!yv("chrome/")?Math.round:Fn;function Sv(n){n.min=xv(n.min),n.max=xv(n.max)}function L1(n){Sv(n.x),Sv(n.y)}function lx(n,e,t){return n==="position"||n==="preserve-aspect"&&!Uw(dv(e),dv(t),.2)}function N1(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const I1=ax({attachResizeListener:(n,e)=>Ga(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nd={current:void 0},ux=ax({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!nd.current){const n=new I1({});n.mount(window),n.setOptions({layoutScroll:!0}),nd.current=n}return nd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),U1={pan:{Feature:Zw},drag:{Feature:Kw,ProjectionNode:ux,MeasureLayout:tx}};function Mv(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Ct.postRender(()=>l(e,Ka(e)))}class F1 extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=kE(e,t=>(Mv(this.node,t,"Start"),r=>Mv(this.node,r,"End"))))}unmount(){}}class O1 extends $r{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(Ga(this.node.current,"focus",()=>this.onFocus()),Ga(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ev(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Ct.postRender(()=>l(e,Ka(e)))}class k1 extends $r{mount(){const{current:e}=this.node;e&&(this.unmount=HE(e,t=>(Ev(this.node,t,"Start"),(r,{success:o})=>Ev(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Kd=new WeakMap,id=new WeakMap,B1=n=>{const e=Kd.get(n.target);e&&e(n)},z1=n=>{n.forEach(B1)};function V1({root:n,...e}){const t=n||document;id.has(t)||id.set(t,{});const r=id.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(z1,{root:n,...e})),r[o]}function H1(n,e,t){const r=V1(e);return Kd.set(n,t),r.observe(n),()=>{Kd.delete(n),r.unobserve(n)}}const G1={some:0,all:1};class W1 extends $r{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:G1[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(d)};return H1(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(j1(e,t))&&this.startObserver()}unmount(){}}function j1({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const X1={inView:{Feature:W1},tap:{Feature:k1},focus:{Feature:O1},hover:{Feature:F1}},Y1={layout:{ProjectionNode:ux,MeasureLayout:tx}},Zd={current:null},cx={current:!1};function q1(){if(cx.current=!0,!!Vh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Zd.current=n.matches;n.addListener(e),e()}else Zd.current=!1}const $1=[...Ny,Cn,Xr],K1=n=>$1.find(Ly(n)),Tv=new WeakMap;function Z1(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Rn(o))n.addValue(r,o);else if(Rn(l))n.addValue(r,rr(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,rr(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const wv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Q1{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=mp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Ui.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Ct.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:p}=u;this.onUpdate=p,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=nc(t),this.isVariantNode=z_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in v){const M=v[x];d[x]!==void 0&&Rn(M)&&M.set(d[x],!1)}}mount(e){this.current=e,Tv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),cx.current||q1(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Zd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Tv.delete(this.current),this.projection&&this.projection.unmount(),ki(this.notifyUpdate),ki(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Ds.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ct.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Do){const t=Do[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$t()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<wv.length;r++){const o=wv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Z1(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=rr(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Py(o)||Sy(o))?o=parseFloat(o):!K1(o)&&Xr.test(t)&&(o=Cy(e,t)),this.setBaseTarget(e,Rn(o)?o.get():o)),Rn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=qh(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Rn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new lp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class fx extends Q1{constructor(){super(...arguments),this.KeyframeResolver=Iy}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Rn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function J1(n){return window.getComputedStyle(n)}class eA extends fx{constructor(){super(...arguments),this.type="html",this.renderInstance=$_}readValueFromInstance(e,t){if(Ds.has(t)){const r=pp(t);return r&&r.default||0}else{const r=J1(e),o=(X_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Jy(e,t)}build(e,t,r){Zh(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return tp(e,t,r)}}class tA extends fx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$t}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ds.has(t)){const r=pp(t);return r&&r.default||0}return t=K_.has(t)?t:jh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return J_(e,t,r)}build(e,t,r){Qh(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){Z_(e,t,r,o)}mount(e){this.isSVGTag=ep(e.tagName),super.mount(e)}}const nA=(n,e)=>Yh(n)?new tA(e):new eA(e,{allowProjection:n!==we.Fragment}),iA=NE({...Aw,...X1,...U1,...Y1},nA),rn=qM(iA);function dx(n,e){let t;const r=()=>{const{currentTime:o}=e,u=(o===null?0:o.value)/100;t!==u&&n(u),t=u};return Ct.update(r,!0),()=>ki(r)}const Ou=new WeakMap;let Vr;function rA(n,e){if(e){const{inlineSize:t,blockSize:r}=e[0];return{width:t,height:r}}else return n instanceof SVGElement&&"getBBox"in n?n.getBBox():{width:n.offsetWidth,height:n.offsetHeight}}function sA({target:n,contentRect:e,borderBoxSize:t}){var r;(r=Ou.get(n))===null||r===void 0||r.forEach(o=>{o({target:n,contentSize:e,get size(){return rA(n,t)}})})}function oA(n){n.forEach(sA)}function aA(){typeof ResizeObserver>"u"||(Vr=new ResizeObserver(oA))}function lA(n,e){Vr||aA();const t=ly(n);return t.forEach(r=>{let o=Ou.get(r);o||(o=new Set,Ou.set(r,o)),o.add(e),Vr==null||Vr.observe(r)}),()=>{t.forEach(r=>{const o=Ou.get(r);o==null||o.delete(e),o!=null&&o.size||Vr==null||Vr.unobserve(r)})}}const ku=new Set;let Fa;function uA(){Fa=()=>{const n={width:window.innerWidth,height:window.innerHeight},e={target:window,size:n,contentSize:n};ku.forEach(t=>t(e))},window.addEventListener("resize",Fa)}function cA(n){return ku.add(n),Fa||uA(),()=>{ku.delete(n),!ku.size&&Fa&&(Fa=void 0)}}function fA(n,e){return typeof n=="function"?cA(n):lA(n,e)}const dA=50,Av=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),hA=()=>({time:0,x:Av(),y:Av()}),pA={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Cv(n,e,t,r){const o=t[e],{length:l,position:u}=pA[e],c=o.current,d=t.time;o.current=n[`scroll${u}`],o.scrollLength=n[`scroll${l}`]-n[`client${l}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Cs(0,o.scrollLength,o.current);const h=r-d;o.velocity=h>dA?0:up(o.current-c,h)}function mA(n,e,t){Cv(n,"x",e,t),Cv(n,"y",e,t),e.time=t}function gA(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(r instanceof HTMLElement)t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const l=r.getBoundingClientRect();t.x+=o.left-l.left,t.y+=o.top-l.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:l}=r.getBBox();t.x+=o,t.y+=l;let u=null,c=r.parentNode;for(;!u;)c.tagName==="svg"&&(u=c),c=r.parentNode;r=u}else break;return t}const Qd={start:0,center:.5,end:1};function Rv(n,e,t=0){let r=0;if(n in Qd&&(n=Qd[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const vA=[0,0];function _A(n,e,t,r){let o=Array.isArray(n)?n:vA,l=0,u=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,Qd[n]?n:"0"]),l=Rv(o[0],t,r),u=Rv(o[1],e),l-u}const yA={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},xA={x:0,y:0};function SA(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function MA(n,e,t){const{offset:r=yA.All}=t,{target:o=n,axis:l="y"}=t,u=l==="y"?"height":"width",c=o!==n?gA(o,n):xA,d=o===n?{width:n.scrollWidth,height:n.scrollHeight}:SA(o),h={width:n.clientWidth,height:n.clientHeight};e[l].offset.length=0;let p=!e[l].interpolate;const g=r.length;for(let v=0;v<g;v++){const x=_A(r[v],h[u],d[u],c[l]);!p&&x!==e[l].interpolatorOffsets[v]&&(p=!0),e[l].offset[v]=x}p&&(e[l].interpolate=Vy(e[l].offset,Hy(r),{clamp:!1}),e[l].interpolatorOffsets=[...e[l].offset]),e[l].progress=Bi(0,1,e[l].interpolate(e[l].current))}function EA(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function TA(n,e,t,r={}){return{measure:()=>EA(n,r.target,t),update:o=>{mA(n,t,o),(r.offset||r.target)&&MA(n,t,r)},notify:()=>e(t)}}const Ea=new WeakMap,bv=new WeakMap,rd=new WeakMap,Pv=n=>n===document.documentElement?window:n;function yp(n,{container:e=document.documentElement,...t}={}){let r=rd.get(e);r||(r=new Set,rd.set(e,r));const o=hA(),l=TA(e,n,o,t);if(r.add(l),!Ea.has(e)){const c=()=>{for(const v of r)v.measure()},d=()=>{for(const v of r)v.update(pn.timestamp)},h=()=>{for(const v of r)v.notify()},p=()=>{Ct.read(c,!1,!0),Ct.read(d,!1,!0),Ct.update(h,!1,!0)};Ea.set(e,p);const g=Pv(e);window.addEventListener("resize",p,{passive:!0}),e!==document.documentElement&&bv.set(e,fA(e,p)),g.addEventListener("scroll",p,{passive:!0})}const u=Ea.get(e);return Ct.read(u,!1,!0),()=>{var c;ki(u);const d=rd.get(e);if(!d||(d.delete(l),d.size))return;const h=Ea.get(e);Ea.delete(e),h&&(Pv(e).removeEventListener("scroll",h),(c=bv.get(e))===null||c===void 0||c(),window.removeEventListener("resize",h))}}function wA({source:n,container:e,axis:t="y"}){n&&(e=n);const r={value:0},o=yp(l=>{r.value=l[t].progress*100},{container:e,axis:t});return{currentTime:r,cancel:o}}const sd=new Map;function hx({source:n,container:e=document.documentElement,axis:t="y"}={}){n&&(e=n),sd.has(e)||sd.set(e,{});const r=sd.get(e);return r[t]||(r[t]=ny()?new ScrollTimeline({source:e,axis:t}):wA({source:e,axis:t})),r[t]}function AA(n){return n.length===2}function px(n){return n&&(n.target||n.offset)}function CA(n,e){return AA(n)||px(e)?yp(t=>{n(t[e.axis].progress,t)},e):dx(n,hx(e))}function RA(n,e){if(n.flatten(),px(e))return n.pause(),yp(t=>{n.time=n.duration*t[e.axis].progress},e);{const t=hx(e);return n.attachTimeline?n.attachTimeline(t,r=>(r.pause(),dx(o=>{r.time=r.duration*o},t))):Fn}}function bA(n,{axis:e="y",...t}={}){const r={axis:e,...t};return typeof n=="function"?CA(n,r):RA(n,r)}function Dv(n,e){zM(!!(!e||e.current))}const PA=()=>({scrollX:rr(0),scrollY:rr(0),scrollXProgress:rr(0),scrollYProgress:rr(0)});function DA({container:n,target:e,layoutEffect:t=!0,...r}={}){const o=I_(PA);return(t?F_:we.useEffect)(()=>(Dv("target",e),Dv("container",n),bA((u,{x:c,y:d})=>{o.scrollX.set(c.current),o.scrollXProgress.set(c.progress),o.scrollY.set(d.current),o.scrollYProgress.set(d.progress)},{...r,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[n,e,JSON.stringify(r.offset)]),o}/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=we.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...c},d)=>we.createElement("svg",{ref:d,...NA,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:mx("lucide",o),...c},[...u.map(([h,p])=>we.createElement(h,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(n,e)=>{const t=we.forwardRef(({className:r,...o},l)=>we.createElement(IA,{ref:l,iconNode:e,className:mx(`lucide-${LA(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]],FA=mn("Brain",UA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],kA=mn("Cloud",OA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Lv=mn("Code",BA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],VA=mn("Crown",zA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],GA=mn("ExternalLink",HA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],jA=mn("FileText",WA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],gx=mn("Github",XA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],qA=mn("Globe",YA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],KA=mn("Lightbulb",$A);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],QA=mn("Linkedin",ZA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],eC=mn("Mail",JA);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],nC=mn("MessageCircle",tC);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],rC=mn("Monitor",iC);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],oC=mn("Palette",sC);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],lC=mn("Send",aC);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Oa=mn("Sparkles",uC);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],fC=mn("Target",cC);/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],hC=mn("Users",dC);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xp="172",Co={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pC=0,Nv=1,mC=2,vx=1,gC=2,nr=3,Yr=0,On=1,ir=2,Wr=0,Ro=1,Iv=2,Uv=3,Fv=4,vC=5,Ss=100,_C=101,yC=102,xC=103,SC=104,MC=200,EC=201,TC=202,wC=203,Jd=204,eh=205,AC=206,CC=207,RC=208,bC=209,PC=210,DC=211,LC=212,NC=213,IC=214,th=0,nh=1,ih=2,No=3,rh=4,sh=5,oh=6,ah=7,_x=0,UC=1,FC=2,jr=0,OC=1,kC=2,BC=3,zC=4,VC=5,HC=6,GC=7,yx=300,Io=301,Uo=302,lh=303,uh=304,sc=306,ch=1e3,Ts=1001,fh=1002,wi=1003,WC=1004,fu=1005,di=1006,od=1007,ws=1008,cr=1009,xx=1010,Sx=1011,Wa=1012,Sp=1013,Rs=1014,sr=1015,Za=1016,Mp=1017,Ep=1018,Fo=1020,Mx=35902,Ex=1021,Tx=1022,Ti=1023,wx=1024,Ax=1025,bo=1026,Oo=1027,Cx=1028,Tp=1029,Rx=1030,wp=1031,Ap=1033,Bu=33776,zu=33777,Vu=33778,Hu=33779,dh=35840,hh=35841,ph=35842,mh=35843,gh=36196,vh=37492,_h=37496,yh=37808,xh=37809,Sh=37810,Mh=37811,Eh=37812,Th=37813,wh=37814,Ah=37815,Ch=37816,Rh=37817,bh=37818,Ph=37819,Dh=37820,Lh=37821,Gu=36492,Nh=36494,Ih=36495,bx=36283,Uh=36284,Fh=36285,Oh=36286,jC=3200,XC=3201,YC=0,qC=1,Gr="",Jn="srgb",ko="srgb-linear",Qu="linear",Pt="srgb",io=7680,Ov=519,$C=512,KC=513,ZC=514,Px=515,QC=516,JC=517,eR=518,tR=519,kv=35044,Bv="300 es",or=2e3,Ju=2001;class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zv=1234567;const ka=Math.PI/180,ja=180/Math.PI;function Ho(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function Cp(n,e){return(n%e+e)%e}function nR(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function iR(n,e,t){return n!==e?(t-n)/(e-n):0}function Ba(n,e,t){return(1-t)*n+t*e}function rR(n,e,t,r){return Ba(n,e,1-Math.exp(-t*r))}function sR(n,e=1){return e-Math.abs(Cp(n,e*2)-e)}function oR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function aR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function uR(n,e){return n+Math.random()*(e-n)}function cR(n){return n*(.5-Math.random())}function fR(n){n!==void 0&&(zv=n);let e=zv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dR(n){return n*ka}function hR(n){return n*ja}function pR(n){return(n&n-1)===0&&n!==0}function mR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vR(n,e,t,r,o){const l=Math.cos,u=Math.sin,c=l(t/2),d=u(t/2),h=l((e+r)/2),p=u((e+r)/2),g=l((e-r)/2),v=u((e-r)/2),x=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":n.set(c*p,d*g,d*v,c*h);break;case"YZY":n.set(d*v,c*p,d*g,c*h);break;case"ZXZ":n.set(d*g,d*v,c*p,c*h);break;case"XZX":n.set(c*p,d*M,d*x,c*h);break;case"YXY":n.set(d*x,c*p,d*M,c*h);break;case"ZYZ":n.set(d*M,d*x,c*p,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function _o(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const _R={DEG2RAD:ka,RAD2DEG:ja,generateUUID:Ho,clamp:mt,euclideanModulo:Cp,mapLinear:nR,inverseLerp:iR,lerp:Ba,damp:rR,pingpong:sR,smoothstep:oR,smootherstep:aR,randInt:lR,randFloat:uR,randFloatSpread:cR,seededRandom:fR,degToRad:dR,radToDeg:hR,isPowerOfTwo:pR,ceilPowerOfTwo:mR,floorPowerOfTwo:gR,setQuaternionFromProperEuler:vR,normalize:In,denormalize:_o};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,u,c,d,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=l,p[5]=d,p[6]=r,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],p=r[4],g=r[7],v=r[2],x=r[5],M=r[8],T=o[0],S=o[3],y=o[6],D=o[1],b=o[4],R=o[7],U=o[2],I=o[5],O=o[8];return l[0]=u*T+c*D+d*U,l[3]=u*S+c*b+d*I,l[6]=u*y+c*R+d*O,l[1]=h*T+p*D+g*U,l[4]=h*S+p*b+g*I,l[7]=h*y+p*R+g*O,l[2]=v*T+x*D+M*U,l[5]=v*S+x*b+M*I,l[8]=v*y+x*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-r*l*p+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,v=c*d-p*l,x=h*l-u*d,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(o*h-p*r)*T,e[2]=(c*r-o*u)*T,e[3]=v*T,e[4]=(p*t-o*d)*T,e[5]=(o*l-c*t)*T,e[6]=x*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ad.makeScale(e,t)),this}rotate(e){return this.premultiply(ad.makeRotation(-e)),this}translate(e,t){return this.premultiply(ad.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ad=new lt;function Dx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yR(){const n=Xa("canvas");return n.style.display="block",n}const Vv={};function yo(n){n in Vv||(Vv[n]=!0,console.warn(n))}function xR(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function SR(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function MR(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hv=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gv=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ER(){const n={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Pt&&(o.r=ur(o.r),o.g=ur(o.g),o.b=ur(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Pt&&(o.r=Po(o.r),o.g=Po(o.g),o.b=Po(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Gr?Qu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[ko]:{primaries:e,whitePoint:r,transfer:Qu,toXYZ:Hv,fromXYZ:Gv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:Hv,fromXYZ:Gv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),n}const wt=ER();function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Po(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ro;class TR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ro===void 0&&(ro=Xa("canvas")),ro.width=e.width,ro.height=e.height;const r=ro.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ro}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ur(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ur(t[r]/255)*255):t[r]=ur(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wR=0;class Lx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(ld(o[u].image)):l.push(ld(o[u]))}else l=ld(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ld(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?TR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AR=0;class kn extends Ls{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=Ts,o=Ts,l=di,u=ws,c=Ti,d=cr,h=kn.DEFAULT_ANISOTROPY,p=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=Ho(),this.name="",this.source=new Lx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ch:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ch:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=yx;kn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,r=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],p=d[4],g=d[8],v=d[1],x=d[5],M=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,R=(x+1)/2,U=(y+1)/2,I=(p+v)/4,O=(g+T)/4,k=(M+S)/4;return b>R&&b>U?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=I/r,l=O/r):R>U?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=I/o,l=k/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=O/l,o=k/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(v-p)*(v-p));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-T)/D,this.z=(v-p)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CR extends Ls{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new kn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Lx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends CR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Nx extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RR extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3];const v=l[u+0],x=l[u+1],M=l[u+2],T=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(g!==T||d!==v||h!==x||p!==M){let S=1-c;const y=d*v+h*x+p*M+g*T,D=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const U=Math.sqrt(b),I=Math.atan2(U,y*D);S=Math.sin(S*I)/U,c=Math.sin(c*I)/U}const R=c*D;if(d=d*S+v*R,h=h*S+x*R,p=p*S+M*R,g=g*S+T*R,S===1-c){const U=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=U,h*=U,p*=U,g*=U}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],p=r[o+3],g=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=c*M+p*g+d*x-h*v,e[t+1]=d*M+p*v+h*g-c*x,e[t+2]=h*M+p*x+c*v-d*g,e[t+3]=p*M-c*g-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),p=c(o/2),g=c(l/2),v=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*p*g+h*x*M,this._y=h*x*g-v*p*M,this._z=h*p*M+v*x*g,this._w=h*p*g-v*x*M;break;case"YXZ":this._x=v*p*g+h*x*M,this._y=h*x*g-v*p*M,this._z=h*p*M-v*x*g,this._w=h*p*g+v*x*M;break;case"ZXY":this._x=v*p*g-h*x*M,this._y=h*x*g+v*p*M,this._z=h*p*M+v*x*g,this._w=h*p*g-v*x*M;break;case"ZYX":this._x=v*p*g-h*x*M,this._y=h*x*g+v*p*M,this._z=h*p*M-v*x*g,this._w=h*p*g+v*x*M;break;case"YZX":this._x=v*p*g+h*x*M,this._y=h*x*g+v*p*M,this._z=h*p*M-v*x*g,this._w=h*p*g-v*x*M;break;case"XZY":this._x=v*p*g-h*x*M,this._y=h*x*g-v*p*M,this._z=h*p*M+v*x*g,this._w=h*p*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],v=r+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>g){const x=2*Math.sqrt(1+r-c-g);this._w=(p-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>g){const x=2*Math.sqrt(1+c-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+p)/x}else{const x=2*Math.sqrt(1+g-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+u*c+o*h-l*d,this._y=o*p+u*d+l*c-r*h,this._z=l*p+u*h+r*d-o*c,this._w=u*p-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),p=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*p,this.y=r+d*p+c*h-l*g,this.z=o+d*g+l*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new J,Wv=new Ps;class Qa{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(l,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),du.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),du.copy(r.boundingBox)),du.applyMatrix4(e.matrixWorld),this.union(du)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),hu.subVectors(this.max,Ta),so.subVectors(e.a,Ta),oo.subVectors(e.b,Ta),ao.subVectors(e.c,Ta),Ir.subVectors(oo,so),Ur.subVectors(ao,oo),ds.subVectors(so,ao);let t=[0,-Ir.z,Ir.y,0,-Ur.z,Ur.y,0,-ds.z,ds.y,Ir.z,0,-Ir.x,Ur.z,0,-Ur.x,ds.z,0,-ds.x,-Ir.y,Ir.x,0,-Ur.y,Ur.x,0,-ds.y,ds.x,0];return!cd(t,so,oo,ao,hu)||(t=[1,0,0,0,1,0,0,0,1],!cd(t,so,oo,ao,hu))?!1:(pu.crossVectors(Ir,Ur),t=[pu.x,pu.y,pu.z],cd(t,so,oo,ao,hu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new J,new J,new J,new J,new J,new J,new J,new J],yi=new J,du=new Qa,so=new J,oo=new J,ao=new J,Ir=new J,Ur=new J,ds=new J,Ta=new J,hu=new J,pu=new J,hs=new J;function cd(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){hs.fromArray(n,l);const c=o.x*Math.abs(hs.x)+o.y*Math.abs(hs.y)+o.z*Math.abs(hs.z),d=e.dot(hs),h=t.dot(hs),p=r.dot(hs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const bR=new Qa,wa=new J,fd=new J;class Rp{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bR.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(wa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(fd)),this.expandByPoint(wa.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new J,dd=new J,mu=new J,Fr=new J,hd=new J,gu=new J,pd=new J;class Ix{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,t),Qi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){dd.copy(e).add(t).multiplyScalar(.5),mu.copy(t).sub(e).normalize(),Fr.copy(this.origin).sub(dd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(mu),c=Fr.dot(this.direction),d=-Fr.dot(mu),h=Fr.lengthSq(),p=Math.abs(1-u*u);let g,v,x,M;if(p>0)if(g=u*d-c,v=u*c-d,M=l*p,g>=0)if(v>=-M)if(v<=M){const T=1/p;g*=T,v*=T,x=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(dd).addScaledVector(mu,v),x}intersectSphere(e,t){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),o=Qi.dot(Qi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(l=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,t,r,o,l){hd.subVectors(t,e),gu.subVectors(r,e),pd.crossVectors(hd,gu);let u=this.direction.dot(pd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Fr.subVectors(this.origin,e);const d=c*this.direction.dot(gu.crossVectors(Fr,gu));if(d<0)return null;const h=c*this.direction.dot(hd.cross(Fr));if(h<0||d+h>u)return null;const p=-c*Fr.dot(pd);return p<0?null:this.at(p/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,r,o,l,u,c,d,h,p,g,v,x,M,T,S){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,p,g,v,x,M,T,S)}set(e,t,r,o,l,u,c,d,h,p,g,v,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=p,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/lo.setFromMatrixColumn(e,0).length(),l=1/lo.setFromMatrixColumn(e,1).length(),u=1/lo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*p,x=u*g,M=c*p,T=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=x+M*h,t[5]=v-T*h,t[9]=-c*d,t[2]=T-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*p,x=d*g,M=h*p,T=h*g;t[0]=v+T*c,t[4]=M*c-x,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=x*c-M,t[6]=T+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*p,x=d*g,M=h*p,T=h*g;t[0]=v-T*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*p,t[9]=T-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*p,x=u*g,M=c*p,T=c*g;t[0]=d*p,t[4]=M*h-x,t[8]=v*h+T,t[1]=d*g,t[5]=T*h+v,t[9]=x*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=c*d,T=c*h;t[0]=d*p,t[4]=T-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=x*g+M,t[10]=v-T*g}else if(e.order==="XZY"){const v=u*d,x=u*h,M=c*d,T=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=v*g+T,t[5]=u*p,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*p,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PR,e,DR)}lookAt(e,t,r){const o=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Or.crossVectors(r,Zn),Or.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Or.crossVectors(r,Zn)),Or.normalize(),vu.crossVectors(Zn,Or),o[0]=Or.x,o[4]=vu.x,o[8]=Zn.x,o[1]=Or.y,o[5]=vu.y,o[9]=Zn.y,o[2]=Or.z,o[6]=vu.z,o[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],p=r[1],g=r[5],v=r[9],x=r[13],M=r[2],T=r[6],S=r[10],y=r[14],D=r[3],b=r[7],R=r[11],U=r[15],I=o[0],O=o[4],k=o[8],P=o[12],C=o[1],V=o[5],le=o[9],ee=o[13],ae=o[2],he=o[6],ce=o[10],re=o[14],B=o[3],ue=o[7],se=o[11],F=o[15];return l[0]=u*I+c*C+d*ae+h*B,l[4]=u*O+c*V+d*he+h*ue,l[8]=u*k+c*le+d*ce+h*se,l[12]=u*P+c*ee+d*re+h*F,l[1]=p*I+g*C+v*ae+x*B,l[5]=p*O+g*V+v*he+x*ue,l[9]=p*k+g*le+v*ce+x*se,l[13]=p*P+g*ee+v*re+x*F,l[2]=M*I+T*C+S*ae+y*B,l[6]=M*O+T*V+S*he+y*ue,l[10]=M*k+T*le+S*ce+y*se,l[14]=M*P+T*ee+S*re+y*F,l[3]=D*I+b*C+R*ae+U*B,l[7]=D*O+b*V+R*he+U*ue,l[11]=D*k+b*le+R*ce+U*se,l[15]=D*P+b*ee+R*re+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],v=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*c*v+r*h*v+o*c*x-r*d*x)+T*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*p-l*d*p)+S*(+t*h*g-t*c*x-l*u*g+r*u*x+l*c*p-r*h*p)+y*(-o*c*p-t*d*g+t*c*v+o*u*g-r*u*v+r*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],v=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],D=g*S*h-T*v*h+T*d*x-c*S*x-g*d*y+c*v*y,b=M*v*h-p*S*h-M*d*x+u*S*x+p*d*y-u*v*y,R=p*T*h-M*g*h+M*c*x-u*T*x-p*c*y+u*g*y,U=M*g*d-p*T*d-M*c*v+u*T*v+p*c*S-u*g*S,I=t*D+r*b+o*R+l*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=D*O,e[1]=(T*v*l-g*S*l-T*o*x+r*S*x+g*o*y-r*v*y)*O,e[2]=(c*S*l-T*d*l+T*o*h-r*S*h-c*o*y+r*d*y)*O,e[3]=(g*d*l-c*v*l-g*o*h+r*v*h+c*o*x-r*d*x)*O,e[4]=b*O,e[5]=(p*S*l-M*v*l+M*o*x-t*S*x-p*o*y+t*v*y)*O,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*O,e[7]=(u*v*l-p*d*l+p*o*h-t*v*h-u*o*x+t*d*x)*O,e[8]=R*O,e[9]=(M*g*l-p*T*l-M*r*x+t*T*x+p*r*y-t*g*y)*O,e[10]=(u*T*l-M*c*l+M*r*h-t*T*h-u*r*y+t*c*y)*O,e[11]=(p*c*l-u*g*l-p*r*h+t*g*h+u*r*x-t*c*x)*O,e[12]=U*O,e[13]=(p*T*o-M*g*o+M*r*v-t*T*v-p*r*S+t*g*S)*O,e[14]=(M*c*o-u*T*o-M*r*d+t*T*d+u*r*S-t*c*S)*O,e[15]=(u*g*o-p*c*o+p*r*d-t*g*d-u*r*v+t*c*v)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,p=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+r,p*d-o*u,0,h*d-o*c,p*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,p=u+u,g=c+c,v=l*h,x=l*p,M=l*g,T=u*p,S=u*g,y=c*g,D=d*h,b=d*p,R=d*g,U=r.x,I=r.y,O=r.z;return o[0]=(1-(T+y))*U,o[1]=(x+R)*U,o[2]=(M-b)*U,o[3]=0,o[4]=(x-R)*I,o[5]=(1-(v+y))*I,o[6]=(S+D)*I,o[7]=0,o[8]=(M+b)*O,o[9]=(S-D)*O,o[10]=(1-(v+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=lo.set(o[0],o[1],o[2]).length();const u=lo.set(o[4],o[5],o[6]).length(),c=lo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const h=1/l,p=1/u,g=1/c;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,t.setFromRotationMatrix(xi),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=or){const d=this.elements,h=2*l/(t-e),p=2*l/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let x,M;if(c===or)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(c===Ju)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=or){const d=this.elements,h=1/(t-e),p=1/(r-o),g=1/(u-l),v=(t+e)*h,x=(r+o)*p;let M,T;if(c===or)M=(u+l)*g,T=-2*g;else if(c===Ju)M=l*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const lo=new J,xi=new Jt,PR=new J(0,0,0),DR=new J(1,1,1),Or=new J,vu=new J,Zn=new J,jv=new Jt,Xv=new Ps;class fr{constructor(e=0,t=0,r=0,o=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return jv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xv.setFromEuler(this),this.setFromQuaternion(Xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let LR=0;const Yv=new J,uo=new Ps,Ji=new Jt,_u=new J,Aa=new J,NR=new J,IR=new Ps,qv=new J(1,0,0),$v=new J(0,1,0),Kv=new J(0,0,1),Zv={type:"added"},UR={type:"removed"},co={type:"childadded",child:null},md={type:"childremoved",child:null};class ei extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LR++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new J,t=new fr,r=new Ps,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new lt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,t){return uo.setFromAxisAngle(e,t),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(qv,e)}rotateY(e){return this.rotateOnAxis($v,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,t){return Yv.copy(e).applyQuaternion(this.quaternion),this.position.add(Yv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qv,e)}translateY(e){return this.translateOnAxis($v,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?_u.copy(e):_u.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Aa,_u,this.up):Ji.lookAt(_u,Aa,this.up),this.quaternion.setFromRotationMatrix(Ji),o&&(Ji.extractRotation(o.matrixWorld),uo.setFromRotationMatrix(Ji),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zv),co.child=e,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(UR),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zv),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,NR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,IR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ei.DEFAULT_UP=new J(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new J,er=new J,gd=new J,tr=new J,fo=new J,ho=new J,Qv=new J,vd=new J,_d=new J,yd=new J,xd=new Kt,Sd=new Kt,Md=new Kt;class Ei{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Si.subVectors(e,t),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Si.subVectors(o,t),er.subVectors(r,t),gd.subVectors(e,t);const u=Si.dot(Si),c=Si.dot(er),d=Si.dot(gd),h=er.dot(er),p=er.dot(gd),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*d-c*p)*v,M=(u*p-c*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,tr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,tr.x),d.addScaledVector(u,tr.y),d.addScaledVector(c,tr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return xd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),xd.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(xd,l.x),u.addScaledVector(Sd,l.y),u.addScaledVector(Md,l.z),u}static isFrontFacing(e,t,r,o){return Si.subVectors(r,t),er.subVectors(e,t),Si.cross(er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Si.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;fo.subVectors(o,r),ho.subVectors(l,r),vd.subVectors(e,r);const d=fo.dot(vd),h=ho.dot(vd);if(d<=0&&h<=0)return t.copy(r);_d.subVectors(e,o);const p=fo.dot(_d),g=ho.dot(_d);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*h;if(v<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(r).addScaledVector(fo,u);yd.subVectors(e,l);const x=fo.dot(yd),M=ho.dot(yd);if(M>=0&&x<=M)return t.copy(l);const T=x*h-d*M;if(T<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(ho,c);const S=p*M-x*g;if(S<=0&&g-p>=0&&x-M>=0)return Qv.subVectors(l,o),c=(g-p)/(g-p+(x-M)),t.copy(o).addScaledVector(Qv,c);const y=1/(S+T+v);return u=T*y,c=v*y,t.copy(r).addScaledVector(fo,u).addScaledVector(ho,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},yu={h:0,s:0,l:0};function Ed(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=Cp(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Ed(u,l,e+1/3),this.g=Ed(u,l,e),this.b=Ed(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=Jn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const r=Fx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Po(e.r),this.g=Po(e.g),this.b=Po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return wt.fromWorkingColorSpace(An.copy(this),e),Math.round(mt(An.r*255,0,255))*65536+Math.round(mt(An.g*255,0,255))*256+Math.round(mt(An.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(An.copy(this),t);const r=An.r,o=An.g,l=An.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Jn){wt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,r=An.g,o=An.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(kr),this.setHSL(kr.h+e,kr.s+t,kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(kr),e.getHSL(yu);const r=Ba(kr.h,yu.h,t),o=Ba(kr.s,yu.s,t),l=Ba(kr.l,yu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Lt;Lt.NAMES=Fx;let FR=0;class oc extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Ro,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=eh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ro&&(r.blending=this.blending),this.side!==Yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jd&&(r.blendSrc=this.blendSrc),this.blendDst!==eh&&(r.blendDst=this.blendDst),this.blendEquation!==Ss&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==No&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ov&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(r.stencilFail=this.stencilFail),this.stencilZFail!==io&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bp extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=_x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new J,xu=new pt;class Fi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=kv,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)xu.fromBufferAttribute(this,t),xu.applyMatrix3(e),this.setXY(t,xu.x,xu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kv&&(e.usage=this.usage),e}}class Ox extends Fi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class kx extends Fi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Oi extends Fi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let OR=0;const ui=new Jt,Td=new ei,po=new J,Qn=new Qa,Ca=new Qa,hn=new J;class Kr extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dx(e)?kx:Ox)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Oi(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];Ca.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(Qn.min,Ca.min),Qn.expandByPoint(hn),hn.addVectors(Qn.max,Ca.max),Qn.expandByPoint(hn)):(Qn.expandByPoint(Ca.min),Qn.expandByPoint(Ca.max))}Qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(hn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)hn.fromBufferAttribute(c,h),d&&(po.fromBufferAttribute(e,h),hn.add(po)),o=Math.max(o,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let k=0;k<r.count;k++)c[k]=new J,d[k]=new J;const h=new J,p=new J,g=new J,v=new pt,x=new pt,M=new pt,T=new J,S=new J;function y(k,P,C){h.fromBufferAttribute(r,k),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,C),v.fromBufferAttribute(l,k),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,C),p.sub(h),g.sub(h),x.sub(v),M.sub(v);const V=1/(x.x*M.y-M.x*x.y);isFinite(V)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(V),S.copy(g).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(V),c[k].add(T),c[P].add(T),c[C].add(T),d[k].add(S),d[P].add(S),d[C].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let k=0,P=D.length;k<P;++k){const C=D[k],V=C.start,le=C.count;for(let ee=V,ae=V+le;ee<ae;ee+=3)y(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const b=new J,R=new J,U=new J,I=new J;function O(k){U.fromBufferAttribute(o,k),I.copy(U);const P=c[k];b.copy(P),b.sub(U.multiplyScalar(U.dot(P))).normalize(),R.crossVectors(I,P);const V=R.dot(d[k])<0?-1:1;u.setXYZW(k,b.x,b.y,b.z,V)}for(let k=0,P=D.length;k<P;++k){const C=D[k],V=C.start,le=C.count;for(let ee=V,ae=V+le;ee<ae;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new J,l=new J,u=new J,c=new J,d=new J,h=new J,p=new J,g=new J;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),c.add(p),d.add(p),h.add(p),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,v=new h.constructor(d.length*p);let x=0,M=0;for(let T=0,S=d.length;T<S;T++){c.isInterleavedBufferAttribute?x=d[T]*c.data.stride+c.offset:x=d[T]*p;for(let y=0;y<p;y++)v[M++]=h[x++]}return new Fi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let p=0,g=h.length;p<g;p++){const v=h[p],x=e(v,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];p.push(x.toJSON(e.data))}p.length>0&&(o[d]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const l=e.morphAttributes;for(const h in l){const p=[],g=l[h];for(let v=0,x=g.length;v<x;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jv=new Jt,ps=new Ix,Su=new Rp,e_=new J,Mu=new J,Eu=new J,Tu=new J,wd=new J,wu=new J,t_=new J,Au=new J;class Ni extends ei{constructor(e=new Kr,t=new bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){wu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const p=c[d],g=l[d];p!==0&&(wd.fromBufferAttribute(g,e),u?wu.addScaledVector(wd,p):wu.addScaledVector(wd.sub(t),p))}t.add(wu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Su.copy(r.boundingSphere),Su.applyMatrix4(l),ps.copy(e.ray).recast(e.near),!(Su.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Su,e_)===null||ps.origin.distanceToSquared(e_)>(e.far-e.near)**2))&&(Jv.copy(l).invert(),ps.copy(e.ray).applyMatrix4(Jv),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,p=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,U=b;R<U;R+=3){const I=c.getX(R),O=c.getX(R+1),k=c.getX(R+2);o=Cu(this,y,e,r,h,p,g,I,O,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(c.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=c.getX(S),b=c.getX(S+1),R=c.getX(S+2);o=Cu(this,u,e,r,h,p,g,D,b,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=D,U=b;R<U;R+=3){const I=R,O=R+1,k=R+2;o=Cu(this,y,e,r,h,p,g,I,O,k),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=S,b=S+1,R=S+2;o=Cu(this,u,e,r,h,p,g,D,b,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function kR(n,e,t,r,o,l,u,c){let d;if(e.side===On?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Yr,c),d===null)return null;Au.copy(c),Au.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Au);return h<t.near||h>t.far?null:{distance:h,point:Au.clone(),object:n}}function Cu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,Mu),n.getVertexPosition(d,Eu),n.getVertexPosition(h,Tu);const p=kR(n,e,t,r,Mu,Eu,Tu,t_);if(p){const g=new J;Ei.getBarycoord(t_,Mu,Eu,Tu,g),o&&(p.uv=Ei.getInterpolatedAttribute(o,c,d,h,g,new pt)),l&&(p.uv1=Ei.getInterpolatedAttribute(l,c,d,h,g,new pt)),u&&(p.normal=Ei.getInterpolatedAttribute(u,c,d,h,g,new J),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new J,materialIndex:0};Ei.getNormal(Mu,Eu,Tu,v.normal),p.face=v,p.barycoord=g}return p}class Ja extends Kr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],p=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Oi(h,3)),this.setAttribute("normal",new Oi(p,3)),this.setAttribute("uv",new Oi(g,2));function M(T,S,y,D,b,R,U,I,O,k,P){const C=R/O,V=U/k,le=R/2,ee=U/2,ae=I/2,he=O+1,ce=k+1;let re=0,B=0;const ue=new J;for(let se=0;se<ce;se++){const F=se*V-ee;for(let ie=0;ie<he;ie++){const Ne=ie*C-le;ue[T]=Ne*D,ue[S]=F*b,ue[y]=ae,h.push(ue.x,ue.y,ue.z),ue[T]=0,ue[S]=0,ue[y]=I>0?1:-1,p.push(ue.x,ue.y,ue.z),g.push(ie/O),g.push(1-se/k),re+=1}}for(let se=0;se<k;se++)for(let F=0;F<O;F++){const ie=v+F+he*se,Ne=v+F+he*(se+1),Q=v+(F+1)+he*(se+1),fe=v+(F+1)+he*se;d.push(ie,Ne,fe),d.push(Ne,Q,fe),B+=6}c.addGroup(x,B,P),x+=B,v+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const r=Bo(n[t]);for(const o in r)e[o]=r[o]}return e}function BR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Bx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const zR={clone:Bo,merge:Un};var VR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VR,this.fragmentShader=HR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=BR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class zx extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Br=new J,n_=new pt,i_=new pt;class fi extends zx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,n_,i_),t.subVectors(i_,n_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ka*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mo=-90,go=1;class GR extends ei{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new fi(mo,go,e,t);o.layers=this.layers,this.add(o);const l=new fi(mo,go,e,t);l.layers=this.layers,this.add(l);const u=new fi(mo,go,e,t);u.layers=this.layers,this.add(u);const c=new fi(mo,go,e,t);c.layers=this.layers,this.add(c);const d=new fi(mo,go,e,t);d.layers=this.layers,this.add(d);const h=new fi(mo,go,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===or)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Vx extends kn{constructor(e,t,r,o,l,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Io,super(e,t,r,o,l,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WR extends bs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Vx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:di}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ja(5,5,5),l=new qr({name:"CubemapFromEquirect",uniforms:Bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Wr});l.uniforms.tEquirect.value=t;const u=new Ni(o,l),c=t.minFilter;return t.minFilter===ws&&(t.minFilter=di),new GR(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class jR extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ad=new J,XR=new J,YR=new lt;class Hr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ad.subVectors(r,t).cross(XR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ad),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||YR.getNormalMatrix(e),o=this.coplanarPoint(Ad).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Rp,Ru=new J;class Hx{constructor(e=new Hr,t=new Hr,r=new Hr,o=new Hr,l=new Hr,u=new Hr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=or){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],p=o[5],g=o[6],v=o[7],x=o[8],M=o[9],T=o[10],S=o[11],y=o[12],D=o[13],b=o[14],R=o[15];if(r[0].setComponents(d-l,v-h,S-x,R-y).normalize(),r[1].setComponents(d+l,v+h,S+x,R+y).normalize(),r[2].setComponents(d+u,v+p,S+M,R+D).normalize(),r[3].setComponents(d-u,v-p,S-M,R-D).normalize(),r[4].setComponents(d-c,v-g,S-T,R-b).normalize(),t===or)r[5].setComponents(d+c,v+g,S+T,R+b).normalize();else if(t===Ju)r[5].setComponents(c,g,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){return ms.center.set(0,0,0),ms.radius=.7071067811865476,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ru.x=o.normal.x>0?e.max.x:e.min.x,Ru.y=o.normal.y>0?e.max.y:e.min.y,Ru.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bu extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gx extends kn{constructor(e,t,r,o,l,u,c,d,h,p=bo){if(p!==bo&&p!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===bo&&(r=Rs),r===void 0&&p===Oo&&(r=Fo),super(null,o,l,u,c,d,p,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:wi,this.minFilter=d!==void 0?d:wi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ac extends Kr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,p=d+1,g=e/c,v=t/d,x=[],M=[],T=[],S=[];for(let y=0;y<p;y++){const D=y*v-u;for(let b=0;b<h;b++){const R=b*g-l;M.push(R,-D,0),T.push(0,0,1),S.push(b/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<c;D++){const b=D+h*y,R=D+h*(y+1),U=D+1+h*(y+1),I=D+1+h*y;x.push(b,R,I),x.push(R,U,I)}this.setIndex(x),this.setAttribute("position",new Oi(M,3)),this.setAttribute("normal",new Oi(T,3)),this.setAttribute("uv",new Oi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pp extends Kr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+c,Math.PI);let h=0;const p=[],g=new J,v=new J,x=[],M=[],T=[],S=[];for(let y=0;y<=r;y++){const D=[],b=y/r;let R=0;y===0&&u===0?R=.5/t:y===r&&d===Math.PI&&(R=-.5/t);for(let U=0;U<=t;U++){const I=U/t;g.x=-e*Math.cos(o+I*l)*Math.sin(u+b*c),g.y=e*Math.cos(u+b*c),g.z=e*Math.sin(o+I*l)*Math.sin(u+b*c),M.push(g.x,g.y,g.z),v.copy(g).normalize(),T.push(v.x,v.y,v.z),S.push(I+R,1-b),D.push(h++)}p.push(D)}for(let y=0;y<r;y++)for(let D=0;D<t;D++){const b=p[y][D+1],R=p[y][D],U=p[y+1][D],I=p[y+1][D+1];(y!==0||u>0)&&x.push(b,R,I),(y!==r-1||d<Math.PI)&&x.push(R,U,I)}this.setIndex(x),this.setAttribute("position",new Oi(M,3)),this.setAttribute("normal",new Oi(T,3)),this.setAttribute("uv",new Oi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qR extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $R extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Wx{constructor(e,t,r){const o=this;let l=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(p){c++,l===!1&&o.onStart!==void 0&&o.onStart(p,u,c),l=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=h.length;g<v;g+=2){const x=h[g],M=h[g+1];if(x.global&&(x.lastIndex=0),x.test(p))return M}return null}}}const KR=new Wx;class Dp{constructor(e){this.manager=e!==void 0?e:KR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dp.DEFAULT_MATERIAL_NAME="__DEFAULT";class ZR extends Dp{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=r_.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const c=Xa("img");function d(){p(),r_.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){p(),o&&o(g),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class QR extends Dp{constructor(e){super(e)}load(e,t,r,o){const l=new kn,u=new ZR(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){l.image=c,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class JR extends zx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eb extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class s_{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tb extends Ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function o_(n,e,t,r){const o=nb(r);switch(t){case Ex:return n*e;case wx:return n*e;case Ax:return n*e*2;case Cx:return n*e/o.components*o.byteLength;case Tp:return n*e/o.components*o.byteLength;case Rx:return n*e*2/o.components*o.byteLength;case wp:return n*e*2/o.components*o.byteLength;case Tx:return n*e*3/o.components*o.byteLength;case Ti:return n*e*4/o.components*o.byteLength;case Ap:return n*e*4/o.components*o.byteLength;case Bu:case zu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vu:case Hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:case mh:return Math.max(n,16)*Math.max(e,8)/4;case dh:case ph:return Math.max(n,8)*Math.max(e,8)/2;case gh:case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Gu:case Nh:case Ih:return Math.ceil(n/4)*Math.ceil(e/4)*16;case bx:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nb(n){switch(n){case cr:case xx:return{byteLength:1,components:1};case Wa:case Sx:case Za:return{byteLength:2,components:1};case Mp:case Ep:return{byteLength:2,components:4};case Rs:case Sp:case sr:return{byteLength:4,components:1};case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function ib(n){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,p),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const p=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,p);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],T=g[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,g[v]=T)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const T=g[x];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,db=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_b=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_P=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$P=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,f2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:rb,alphahash_pars_fragment:sb,alphamap_fragment:ob,alphamap_pars_fragment:ab,alphatest_fragment:lb,alphatest_pars_fragment:ub,aomap_fragment:cb,aomap_pars_fragment:fb,batching_pars_vertex:db,batching_vertex:hb,begin_vertex:pb,beginnormal_vertex:mb,bsdfs:gb,iridescence_fragment:vb,bumpmap_pars_fragment:_b,clipping_planes_fragment:yb,clipping_planes_pars_fragment:xb,clipping_planes_pars_vertex:Sb,clipping_planes_vertex:Mb,color_fragment:Eb,color_pars_fragment:Tb,color_pars_vertex:wb,color_vertex:Ab,common:Cb,cube_uv_reflection_fragment:Rb,defaultnormal_vertex:bb,displacementmap_pars_vertex:Pb,displacementmap_vertex:Db,emissivemap_fragment:Lb,emissivemap_pars_fragment:Nb,colorspace_fragment:Ib,colorspace_pars_fragment:Ub,envmap_fragment:Fb,envmap_common_pars_fragment:Ob,envmap_pars_fragment:kb,envmap_pars_vertex:Bb,envmap_physical_pars_fragment:Kb,envmap_vertex:zb,fog_vertex:Vb,fog_pars_vertex:Hb,fog_fragment:Gb,fog_pars_fragment:Wb,gradientmap_pars_fragment:jb,lightmap_pars_fragment:Xb,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:qb,lights_pars_begin:$b,lights_toon_fragment:Zb,lights_toon_pars_fragment:Qb,lights_phong_fragment:Jb,lights_phong_pars_fragment:eP,lights_physical_fragment:tP,lights_physical_pars_fragment:nP,lights_fragment_begin:iP,lights_fragment_maps:rP,lights_fragment_end:sP,logdepthbuf_fragment:oP,logdepthbuf_pars_fragment:aP,logdepthbuf_pars_vertex:lP,logdepthbuf_vertex:uP,map_fragment:cP,map_pars_fragment:fP,map_particle_fragment:dP,map_particle_pars_fragment:hP,metalnessmap_fragment:pP,metalnessmap_pars_fragment:mP,morphinstance_vertex:gP,morphcolor_vertex:vP,morphnormal_vertex:_P,morphtarget_pars_vertex:yP,morphtarget_vertex:xP,normal_fragment_begin:SP,normal_fragment_maps:MP,normal_pars_fragment:EP,normal_pars_vertex:TP,normal_vertex:wP,normalmap_pars_fragment:AP,clearcoat_normal_fragment_begin:CP,clearcoat_normal_fragment_maps:RP,clearcoat_pars_fragment:bP,iridescence_pars_fragment:PP,opaque_fragment:DP,packing:LP,premultiplied_alpha_fragment:NP,project_vertex:IP,dithering_fragment:UP,dithering_pars_fragment:FP,roughnessmap_fragment:OP,roughnessmap_pars_fragment:kP,shadowmap_pars_fragment:BP,shadowmap_pars_vertex:zP,shadowmap_vertex:VP,shadowmask_pars_fragment:HP,skinbase_vertex:GP,skinning_pars_vertex:WP,skinning_vertex:jP,skinnormal_vertex:XP,specularmap_fragment:YP,specularmap_pars_fragment:qP,tonemapping_fragment:$P,tonemapping_pars_fragment:KP,transmission_fragment:ZP,transmission_pars_fragment:QP,uv_pars_fragment:JP,uv_pars_vertex:e2,uv_vertex:t2,worldpos_vertex:n2,background_vert:i2,background_frag:r2,backgroundCube_vert:s2,backgroundCube_frag:o2,cube_vert:a2,cube_frag:l2,depth_vert:u2,depth_frag:c2,distanceRGBA_vert:f2,distanceRGBA_frag:d2,equirect_vert:h2,equirect_frag:p2,linedashed_vert:m2,linedashed_frag:g2,meshbasic_vert:v2,meshbasic_frag:_2,meshlambert_vert:y2,meshlambert_frag:x2,meshmatcap_vert:S2,meshmatcap_frag:M2,meshnormal_vert:E2,meshnormal_frag:T2,meshphong_vert:w2,meshphong_frag:A2,meshphysical_vert:C2,meshphysical_frag:R2,meshtoon_vert:b2,meshtoon_frag:P2,points_vert:D2,points_frag:L2,shadow_vert:N2,shadow_frag:I2,sprite_vert:U2,sprite_frag:F2},Pe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Li={basic:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Un([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Un([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Un([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Un([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Un([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Un([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Un([Pe.common,Pe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Un([Pe.lights,Pe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Li.physical={uniforms:Un([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Pu={r:0,b:0,g:0},gs=new fr,O2=new Jt;function k2(n,e,t,r,o,l,u){const c=new Lt(0);let d=l===!0?0:1,h,p,g=null,v=0,x=null;function M(b){let R=b.isScene===!0?b.background:null;return R&&R.isTexture&&(R=(b.backgroundBlurriness>0?t:e).get(R)),R}function T(b){let R=!1;const U=M(b);U===null?y(c,d):U&&U.isColor&&(y(U,1),R=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,R){const U=M(R);U&&(U.isCubeTexture||U.mapping===sc)?(p===void 0&&(p=new Ni(new Ja(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:Bo(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),gs.copy(R.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),p.material.uniforms.envMap.value=U,p.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(O2.makeRotationFromEuler(gs)),p.material.toneMapped=wt.getTransfer(U.colorSpace)!==Pt,(g!==U||v!==U.version||x!==n.toneMapping)&&(p.material.needsUpdate=!0,g=U,v=U.version,x=n.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new Ni(new ac(2,2),new qr({name:"BackgroundMaterial",uniforms:Bo(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=wt.getTransfer(U.colorSpace)!==Pt,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=U,v=U.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,R){b.getRGB(Pu,Bx(n)),r.buffers.color.setClear(Pu.r,Pu.g,Pu.b,R,u)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,R=1){c.set(b),d=R,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:T,addToRenderList:S,dispose:D}}function B2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(C,V,le,ee,ae){let he=!1;const ce=g(ee,le,V);l!==ce&&(l=ce,h(l.object)),he=x(C,ee,le,ae),he&&M(C,ee,le,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(C,V,le,ee),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function d(){return n.createVertexArray()}function h(C){return n.bindVertexArray(C)}function p(C){return n.deleteVertexArray(C)}function g(C,V,le){const ee=le.wireframe===!0;let ae=r[C.id];ae===void 0&&(ae={},r[C.id]=ae);let he=ae[V.id];he===void 0&&(he={},ae[V.id]=he);let ce=he[ee];return ce===void 0&&(ce=v(d()),he[ee]=ce),ce}function v(C){const V=[],le=[],ee=[];for(let ae=0;ae<t;ae++)V[ae]=0,le[ae]=0,ee[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:le,attributeDivisors:ee,object:C,attributes:{},index:null}}function x(C,V,le,ee){const ae=l.attributes,he=V.attributes;let ce=0;const re=le.getAttributes();for(const B in re)if(re[B].location>=0){const se=ae[B];let F=he[B];if(F===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;ce++}return l.attributesNum!==ce||l.index!==ee}function M(C,V,le,ee){const ae={},he=V.attributes;let ce=0;const re=le.getAttributes();for(const B in re)if(re[B].location>=0){let se=he[B];se===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),ae[B]=F,ce++}l.attributes=ae,l.attributesNum=ce,l.index=ee}function T(){const C=l.newAttributes;for(let V=0,le=C.length;V<le;V++)C[V]=0}function S(C){y(C,0)}function y(C,V){const le=l.newAttributes,ee=l.enabledAttributes,ae=l.attributeDivisors;le[C]=1,ee[C]===0&&(n.enableVertexAttribArray(C),ee[C]=1),ae[C]!==V&&(n.vertexAttribDivisor(C,V),ae[C]=V)}function D(){const C=l.newAttributes,V=l.enabledAttributes;for(let le=0,ee=V.length;le<ee;le++)V[le]!==C[le]&&(n.disableVertexAttribArray(le),V[le]=0)}function b(C,V,le,ee,ae,he,ce){ce===!0?n.vertexAttribIPointer(C,V,le,ae,he):n.vertexAttribPointer(C,V,le,ee,ae,he)}function R(C,V,le,ee){T();const ae=ee.attributes,he=le.getAttributes(),ce=V.defaultAttributeValues;for(const re in he){const B=he[re];if(B.location>=0){let ue=ae[re];if(ue===void 0&&(re==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),re==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor)),ue!==void 0){const se=ue.normalized,F=ue.itemSize,ie=e.get(ue);if(ie===void 0)continue;const Ne=ie.buffer,Q=ie.type,fe=ie.bytesPerElement,xe=Q===n.INT||Q===n.UNSIGNED_INT||ue.gpuType===Sp;if(ue.isInterleavedBufferAttribute){const ve=ue.data,Ae=ve.stride,Fe=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let Je=0;Je<B.locationSize;Je++)y(B.location+Je,ve.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Je=0;Je<B.locationSize;Je++)S(B.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Je=0;Je<B.locationSize;Je++)b(B.location+Je,F/B.locationSize,Q,se,Ae*fe,(Fe+F/B.locationSize*Je)*fe,xe)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve,ue.meshPerAttribute);C.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve,F/B.locationSize,Q,se,F*fe,F/B.locationSize*ve*fe,xe)}}else if(ce!==void 0){const se=ce[re];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(B.location,se);break;case 3:n.vertexAttrib3fv(B.location,se);break;case 4:n.vertexAttrib4fv(B.location,se);break;default:n.vertexAttrib1fv(B.location,se)}}}}D()}function U(){k();for(const C in r){const V=r[C];for(const le in V){const ee=V[le];for(const ae in ee)p(ee[ae].object),delete ee[ae];delete V[le]}delete r[C]}}function I(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const le in V){const ee=V[le];for(const ae in ee)p(ee[ae].object),delete ee[ae];delete V[le]}delete r[C.id]}function O(C){for(const V in r){const le=r[V];if(le[C.id]===void 0)continue;const ee=le[C.id];for(const ae in ee)p(ee[ae].object),delete ee[ae];delete le[C.id]}}function k(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:k,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function z2(n,e,t){let r;function o(h){r=h}function l(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,g){g!==0&&(n.drawArraysInstanced(r,h,p,g),t.update(p,r,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,g);let x=0;for(let M=0;M<g;M++)x+=p[M];t.update(x,r,1)}function d(h,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],p[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,p,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=p[T]*v[T];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function V2(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ti&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(O){const k=O===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==cr&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==sr&&!k)}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:R,vertexTextures:U,maxSamples:I}}function H2(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Hr,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?p(null):h();else{const D=l?0:r,b=D*4;let R=y.clippingState||null;d.value=R,R=p(M,v,b,x);for(let U=0;U!==b;++U)R[U]=t[U];y.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,v,x,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const y=x+T*4,D=v.matrixWorldInverse;c.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,R=x;b!==T;++b,R+=4)u.copy(g[b]).applyMatrix4(D,c),u.normal.toArray(S,R),S[R+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function G2(n){let e=new WeakMap;function t(u,c){return c===lh?u.mapping=Io:c===uh&&(u.mapping=Uo),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===lh||c===uh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new WR(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Ao=4,a_=[.125,.215,.35,.446,.526,.582],Ms=20,Cd=new JR,l_=new Lt;let Rd=null,bd=0,Pd=0,Dd=!1;const xs=(1+Math.sqrt(5))/2,vo=1/xs,u_=[new J(-xs,vo,0),new J(xs,vo,0),new J(-vo,0,xs),new J(vo,0,xs),new J(0,xs,-vo),new J(0,xs,vo),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class c_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Rd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,bd,Pd),this._renderer.xr.enabled=Dd,e.scissorTest=!1,Du(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Io||e.mapping===Uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Za,format:Ti,colorSpace:ko,depthBuffer:!1},o=f_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W2(l)),this._blurMaterial=j2(l,e,t)}return o}_compileMaterial(e){const t=new Ni(this._lodPlanes[0],e);this._renderer.compile(t,Cd)}_sceneToCubeUV(e,t,r,o){const c=new fi(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(l_),p.toneMapping=jr,p.autoClear=!1;const x=new bp({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),M=new Ni(new Ja,x);let T=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,T=!0):(x.color.copy(l_),T=!0);for(let y=0;y<6;y++){const D=y%3;D===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):D===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const b=this._cubeSize;Du(o,D*b,y>2?b:0,b,b),p.setRenderTarget(o),T&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Io||e.mapping===Uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=h_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Ni(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Du(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Cd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=u_[(o-l-1)%u_.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Ni(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Ms-1),T=l/M,S=isFinite(l)?1+Math.floor(p*T):Ms;S>Ms&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ms}`);const y=[];let D=0;for(let O=0;O<Ms;++O){const k=O/T,P=Math.exp(-k*k/2);y.push(P),O===0?D+=P:O<S&&(D+=2*P)}for(let O=0;O<y.length;O++)y[O]=y[O]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:b}=this;v.dTheta.value=M,v.mipInt.value=b-r;const R=this._sizeLods[o],U=3*R*(o>b-Ao?o-b+Ao:0),I=4*(this._cubeSize-R);Du(t,U,I,3*R,2*R),d.setRenderTarget(t),d.render(g,Cd)}}function W2(n){const e=[],t=[],r=[];let o=n;const l=n-Ao+1+a_.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-Ao?d=a_[u-n+Ao-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,M=6,T=3,S=2,y=1,D=new Float32Array(T*M*x),b=new Float32Array(S*M*x),R=new Float32Array(y*M*x);for(let I=0;I<x;I++){const O=I%3*2/3-1,k=I>2?0:-1,P=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];D.set(P,T*M*I),b.set(v,S*M*I);const C=[I,I,I,I,I,I];R.set(C,y*M*I)}const U=new Kr;U.setAttribute("position",new Fi(D,T)),U.setAttribute("uv",new Fi(b,S)),U.setAttribute("faceIndex",new Fi(R,y)),e.push(U),o>Ao&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function f_(n,e,t){const r=new bs(n,e,t);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Du(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function j2(n,e,t){const r=new Float32Array(Ms),o=new J(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function d_(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function h_(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function X2(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===lh||d===uh,p=d===Io||d===Uo;if(h||p){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new c_(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return h&&x&&x.height>0||p&&x&&o(x)?(t===null&&(t=new c_(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function Y2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&yo("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function q2(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,M=g.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let b=0,R=D.length;b<R;b+=3){const U=D[b+0],I=D[b+1],O=D[b+2];v.push(U,I,I,O,O,U)}}else if(M!==void 0){const D=M.array;T=M.version;for(let b=0,R=D.length/3-1;b<R;b+=3){const U=b+0,I=b+1,O=b+2;v.push(U,I,I,O,O,U)}}else return;const S=new(Dx(v)?kx:Ox)(v,1);S.version=T;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function p(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function $2(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function p(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,T,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*T[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function K2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Z2(n,e,t){const r=new WeakMap,o=new Kt;function l(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let C=function(){k.dispose(),r.delete(c),c.removeEventListener("dispose",C)};var x=C;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],D=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),S===!0&&(R=3);let U=c.attributes.position.count*R,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*I*4*g),k=new Nx(O,U,I,g);k.type=sr,k.needsUpdate=!0;const P=R*4;for(let V=0;V<g;V++){const le=y[V],ee=D[V],ae=b[V],he=U*I*4*V;for(let ce=0;ce<le.count;ce++){const re=ce*P;M===!0&&(o.fromBufferAttribute(le,ce),O[he+re+0]=o.x,O[he+re+1]=o.y,O[he+re+2]=o.z,O[he+re+3]=0),T===!0&&(o.fromBufferAttribute(ee,ce),O[he+re+4]=o.x,O[he+re+5]=o.y,O[he+re+6]=o.z,O[he+re+7]=0),S===!0&&(o.fromBufferAttribute(ae,ce),O[he+re+8]=o.x,O[he+re+9]=o.y,O[he+re+10]=o.z,O[he+re+11]=ae.itemSize===4?o.w:1)}}v={count:g,texture:k,size:new pt(U,I)},r.set(c,v),c.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function Q2(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const Xx=new kn,p_=new Gx(1,1),Yx=new Nx,qx=new RR,$x=new Vx,m_=[],g_=[],v_=new Float32Array(16),__=new Float32Array(9),y_=new Float32Array(4);function Go(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=m_[o];if(l===void 0&&(l=new Float32Array(o),m_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function lc(n,e){let t=g_[e];t===void 0&&(t=new Int32Array(e),g_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function J2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function eD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function iD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;y_.set(r),n.uniformMatrix2fv(this.addr,!1,y_),an(t,r)}}function rD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;__.set(r),n.uniformMatrix3fv(this.addr,!1,__),an(t,r)}}function sD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,r))return;v_.set(r),n.uniformMatrix4fv(this.addr,!1,v_),an(t,r)}}function oD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function lD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function uD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function cD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function dD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function hD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function pD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(p_.compareFunction=Px,l=p_):l=Xx,t.setTexture2D(e||l,o)}function mD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||qx,o)}function gD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||$x,o)}function vD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Yx,o)}function _D(n){switch(n){case 5126:return J2;case 35664:return eD;case 35665:return tD;case 35666:return nD;case 35674:return iD;case 35675:return rD;case 35676:return sD;case 5124:case 35670:return oD;case 35667:case 35671:return aD;case 35668:case 35672:return lD;case 35669:case 35673:return uD;case 5125:return cD;case 36294:return fD;case 36295:return dD;case 36296:return hD;case 35678:case 36198:case 36298:case 36306:case 35682:return pD;case 35679:case 36299:case 36307:return mD;case 35680:case 36300:case 36308:case 36293:return gD;case 36289:case 36303:case 36311:case 36292:return vD}}function yD(n,e){n.uniform1fv(this.addr,e)}function xD(n,e){const t=Go(e,this.size,2);n.uniform2fv(this.addr,t)}function SD(n,e){const t=Go(e,this.size,3);n.uniform3fv(this.addr,t)}function MD(n,e){const t=Go(e,this.size,4);n.uniform4fv(this.addr,t)}function ED(n,e){const t=Go(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function TD(n,e){const t=Go(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wD(n,e){const t=Go(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function AD(n,e){n.uniform1iv(this.addr,e)}function CD(n,e){n.uniform2iv(this.addr,e)}function RD(n,e){n.uniform3iv(this.addr,e)}function bD(n,e){n.uniform4iv(this.addr,e)}function PD(n,e){n.uniform1uiv(this.addr,e)}function DD(n,e){n.uniform2uiv(this.addr,e)}function LD(n,e){n.uniform3uiv(this.addr,e)}function ND(n,e){n.uniform4uiv(this.addr,e)}function ID(n,e,t){const r=this.cache,o=e.length,l=lc(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Xx,l[u])}function UD(n,e,t){const r=this.cache,o=e.length,l=lc(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||qx,l[u])}function FD(n,e,t){const r=this.cache,o=e.length,l=lc(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||$x,l[u])}function OD(n,e,t){const r=this.cache,o=e.length,l=lc(t,o);on(r,l)||(n.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Yx,l[u])}function kD(n){switch(n){case 5126:return yD;case 35664:return xD;case 35665:return SD;case 35666:return MD;case 35674:return ED;case 35675:return TD;case 35676:return wD;case 5124:case 35670:return AD;case 35667:case 35671:return CD;case 35668:case 35672:return RD;case 35669:case 35673:return bD;case 5125:return PD;case 36294:return DD;case 36295:return LD;case 36296:return ND;case 35678:case 36198:case 36298:case 36306:case 35682:return ID;case 35679:case 36299:case 36307:return UD;case 35680:case 36300:case 36308:case 36293:return FD;case 36289:case 36303:case 36311:case 36292:return OD}}class BD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_D(t.type)}}class zD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kD(t.type)}}class VD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function x_(n,e){n.seq.push(e),n.map[e.id]=e}function HD(n,e,t){const r=n.name,o=r.length;for(Ld.lastIndex=0;;){const l=Ld.exec(r),u=Ld.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){x_(t,h===void 0?new BD(c,n,e):new zD(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new VD(c),x_(t,g)),t=g}}}class Wu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);HD(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function S_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const GD=37297;let WD=0;function jD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const M_=new lt;function XD(n){wt._getMatrix(M_,wt.workingColorSpace,n);const e=`mat3( ${M_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Qu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function E_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+jD(n.getShaderSource(e),u)}else return o}function YD(n,e){const t=XD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qD(n,e){let t;switch(e){case OC:t="Linear";break;case kC:t="Reinhard";break;case BC:t="Cineon";break;case zC:t="ACESFilmic";break;case HC:t="AgX";break;case GC:t="Neutral";break;case VC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lu=new J;function $D(){wt.getLuminanceCoefficients(Lu);const n=Lu.x.toFixed(4),e=Lu.y.toFixed(4),t=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function ZD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function QD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Da(n){return n!==""}function T_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JD=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(n){return n.replace(JD,tL)}const eL=new Map;function tL(n,e){let t=ut[e];if(t===void 0){const r=eL.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kh(t)}const nL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A_(n){return n.replace(nL,iL)}function iL(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function C_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function sL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Io:case Uo:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Uo:e="ENVMAP_MODE_REFRACTION";break}return e}function aL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _x:e="ENVMAP_BLENDING_MULTIPLY";break;case UC:e="ENVMAP_BLENDING_MIX";break;case FC:e="ENVMAP_BLENDING_ADD";break}return e}function lL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function uL(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=rL(t),h=sL(t),p=oL(t),g=aL(t),v=lL(t),x=KD(t),M=ZD(l),T=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Da).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Da).join(`
`),y.length>0&&(y+=`
`)):(S=[C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),y=[C_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jr?"#define TONE_MAPPING":"",t.toneMapping!==jr?ut.tonemapping_pars_fragment:"",t.toneMapping!==jr?qD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,YD("linearToOutputTexel",t.outputColorSpace),$D(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),u=kh(u),u=T_(u,t),u=w_(u,t),c=kh(c),c=T_(c,t),c=w_(c,t),u=A_(u),c=A_(c),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=D+S+u,R=D+y+c,U=S_(o,o.VERTEX_SHADER,b),I=S_(o,o.FRAGMENT_SHADER,R);o.attachShader(T,U),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(V){if(n.debug.checkShaderErrors){const le=o.getProgramInfoLog(T).trim(),ee=o.getShaderInfoLog(U).trim(),ae=o.getShaderInfoLog(I).trim();let he=!0,ce=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,U,I);else{const re=E_(o,U,"vertex"),B=E_(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+re+`
`+B)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ee===""||ae==="")&&(ce=!1);ce&&(V.diagnostics={runnable:he,programLog:le,vertexShader:{log:ee,prefix:S},fragmentShader:{log:ae,prefix:y}})}o.deleteShader(U),o.deleteShader(I),k=new Wu(o,T),P=QD(o,T)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(T,GD)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WD++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=I,this}let cL=0;class fL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new dL(e),t.set(e,r)),r}}class dL{constructor(e){this.id=cL++,this.code=e,this.usedTimes=0}}function hL(n,e,t,r,o,l,u){const c=new Ux,d=new fL,h=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,C,V,le,ee){const ae=le.fog,he=ee.geometry,ce=P.isMeshStandardMaterial?le.environment:null,re=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),B=re&&re.mapping===sc?re.image.height:null,ue=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const se=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,F=se!==void 0?se.length:0;let ie=0;he.morphAttributes.position!==void 0&&(ie=1),he.morphAttributes.normal!==void 0&&(ie=2),he.morphAttributes.color!==void 0&&(ie=3);let Ne,Q,fe,xe;if(ue){const St=Li[ue];Ne=St.vertexShader,Q=St.fragmentShader}else Ne=P.vertexShader,Q=P.fragmentShader,d.update(P),fe=d.getVertexShaderID(P),xe=d.getFragmentShaderID(P);const ve=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Fe=ee.isInstancedMesh===!0,Je=ee.isBatchedMesh===!0,bt=!!P.map,vt=!!P.matcap,It=!!re,H=!!P.aoMap,bn=!!P.lightMap,gt=!!P.bumpMap,ft=!!P.normalMap,qe=!!P.displacementMap,Rt=!!P.emissiveMap,je=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,Z=P.clearcoat>0,me=P.dispersion>0,_e=P.iridescence>0,de=P.sheen>0,Xe=P.transmission>0,Ce=w&&!!P.anisotropyMap,Oe=Z&&!!P.clearcoatMap,ct=Z&&!!P.clearcoatNormalMap,Ee=Z&&!!P.clearcoatRoughnessMap,Be=_e&&!!P.iridescenceMap,Ke=_e&&!!P.iridescenceThicknessMap,nt=de&&!!P.sheenColorMap,ze=de&&!!P.sheenRoughnessMap,dt=!!P.specularMap,st=!!P.specularColorMap,At=!!P.specularIntensityMap,W=Xe&&!!P.transmissionMap,Re=Xe&&!!P.thicknessMap,oe=!!P.gradientMap,pe=!!P.alphaMap,Le=P.alphaTest>0,De=!!P.alphaHash,ot=!!P.extensions;let Ft=jr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ft=n.toneMapping);const en={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Ne,fragmentShader:Q,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:xe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Je,batchingColor:Je&&ee._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ee.instanceColor!==null,instancingMorph:Fe&&ee.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ko,alphaToCoverage:!!P.alphaToCoverage,map:bt,matcap:vt,envMap:It,envMapMode:It&&re.mapping,envMapCubeUVHeight:B,aoMap:H,lightMap:bn,bumpMap:gt,normalMap:ft,displacementMap:v&&qe,emissiveMap:Rt,normalMapObjectSpace:ft&&P.normalMapType===qC,normalMapTangentSpace:ft&&P.normalMapType===YC,metalnessMap:je,roughnessMap:L,anisotropy:w,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:Oe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:_e,iridescenceMap:Be,iridescenceThicknessMap:Ke,sheen:de,sheenColorMap:nt,sheenRoughnessMap:ze,specularMap:dt,specularColorMap:st,specularIntensityMap:At,transmission:Xe,transmissionMap:W,thicknessMap:Re,gradientMap:oe,opaque:P.transparent===!1&&P.blending===Ro&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Le,alphaHash:De,combine:P.combine,mapUv:bt&&T(P.map.channel),aoMapUv:H&&T(P.aoMap.channel),lightMapUv:bn&&T(P.lightMap.channel),bumpMapUv:gt&&T(P.bumpMap.channel),normalMapUv:ft&&T(P.normalMap.channel),displacementMapUv:qe&&T(P.displacementMap.channel),emissiveMapUv:Rt&&T(P.emissiveMap.channel),metalnessMapUv:je&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Ce&&T(P.anisotropyMap.channel),clearcoatMapUv:Oe&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(P.sheenRoughnessMap.channel),specularMapUv:dt&&T(P.specularMap.channel),specularColorMapUv:st&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:W&&T(P.transmissionMap.channel),thicknessMapUv:Re&&T(P.thicknessMap.channel),alphaMapUv:pe&&T(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ft||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(bt||pe),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:bt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===ir,flipSided:P.side===On,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function y(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const V in P.defines)C.push(V),C.push(P.defines[V]);return P.isRawShaderMaterial===!1&&(D(C,P),b(C,P),C.push(n.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function b(P,C){c.disableAll(),C.supportsVertexTextures&&c.enable(0),C.instancing&&c.enable(1),C.instancingColor&&c.enable(2),C.instancingMorph&&c.enable(3),C.matcap&&c.enable(4),C.envMap&&c.enable(5),C.normalMapObjectSpace&&c.enable(6),C.normalMapTangentSpace&&c.enable(7),C.clearcoat&&c.enable(8),C.iridescence&&c.enable(9),C.alphaTest&&c.enable(10),C.vertexColors&&c.enable(11),C.vertexAlphas&&c.enable(12),C.vertexUv1s&&c.enable(13),C.vertexUv2s&&c.enable(14),C.vertexUv3s&&c.enable(15),C.vertexTangents&&c.enable(16),C.anisotropy&&c.enable(17),C.alphaHash&&c.enable(18),C.batching&&c.enable(19),C.dispersion&&c.enable(20),C.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reverseDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),P.push(c.mask)}function R(P){const C=M[P.type];let V;if(C){const le=Li[C];V=zR.clone(le.uniforms)}else V=P.uniforms;return V}function U(P,C){let V;for(let le=0,ee=p.length;le<ee;le++){const ae=p[le];if(ae.cacheKey===C){V=ae,++V.usedTimes;break}}return V===void 0&&(V=new uL(n,C,P,l),p.push(V)),V}function I(P){if(--P.usedTimes===0){const C=p.indexOf(P);p[C]=p[p.length-1],p.pop(),P.destroy()}}function O(P){d.remove(P)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:U,releaseProgram:I,releaseShaderCache:O,programs:p,dispose:k}}function pL(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function mL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function R_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function b_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,x,M,T,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=T,y.group=S),e++,y}function c(g,v,x,M,T,S){const y=u(g,v,x,M,T,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,v,x,M,T,S){const y=u(g,v,x,M,T,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||mL),r.length>1&&r.sort(v||R_),o.length>1&&o.sort(v||R_)}function p(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:p,sort:h}}function gL(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new b_,n.set(r,[u])):o>=l.length?(u=new b_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function vL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Lt};break;case"SpotLight":t={position:new J,direction:new J,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function _L(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yL=0;function xL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SL(n){const e=new vL,t=_L(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const o=new J,l=new Jt,u=new Jt;function c(h){let p=0,g=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,D=0,b=0,R=0,U=0,I=0,O=0;h.sort(xL);for(let P=0,C=h.length;P<C;P++){const V=h[P],le=V.color,ee=V.intensity,ae=V.distance,he=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)p+=le.r*ee,g+=le.g*ee,v+=le.b*ee;else if(V.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(V.sh.coefficients[ce],ee);O++}else if(V.isDirectionalLight){const ce=e.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const re=V.shadow,B=t.get(V);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=V.shadow.matrix,D++}r.directional[x]=ce,x++}else if(V.isSpotLight){const ce=e.get(V);ce.position.setFromMatrixPosition(V.matrixWorld),ce.color.copy(le).multiplyScalar(ee),ce.distance=ae,ce.coneCos=Math.cos(V.angle),ce.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ce.decay=V.decay,r.spot[T]=ce;const re=V.shadow;if(V.map&&(r.spotLightMap[U]=V.map,U++,re.updateMatrices(V),V.castShadow&&I++),r.spotLightMatrix[T]=re.matrix,V.castShadow){const B=t.get(V);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=he,R++}T++}else if(V.isRectAreaLight){const ce=e.get(V);ce.color.copy(le).multiplyScalar(ee),ce.halfWidth.set(V.width*.5,0,0),ce.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=ce,S++}else if(V.isPointLight){const ce=e.get(V);if(ce.color.copy(V.color).multiplyScalar(V.intensity),ce.distance=V.distance,ce.decay=V.decay,V.castShadow){const re=V.shadow,B=t.get(V);B.shadowIntensity=re.intensity,B.shadowBias=re.bias,B.shadowNormalBias=re.normalBias,B.shadowRadius=re.radius,B.shadowMapSize=re.mapSize,B.shadowCameraNear=re.camera.near,B.shadowCameraFar=re.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=V.shadow.matrix,b++}r.point[M]=ce,M++}else if(V.isHemisphereLight){const ce=e.get(V);ce.skyColor.copy(V.color).multiplyScalar(ee),ce.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[y]=ce,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==M||k.spotLength!==T||k.rectAreaLength!==S||k.hemiLength!==y||k.numDirectionalShadows!==D||k.numPointShadows!==b||k.numSpotShadows!==R||k.numSpotMaps!==U||k.numLightProbes!==O)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+U-I,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,k.directionalLength=x,k.pointLength=M,k.spotLength=T,k.rectAreaLength=S,k.hemiLength=y,k.numDirectionalShadows=D,k.numPointShadows=b,k.numSpotShadows=R,k.numSpotMaps=U,k.numLightProbes=O,r.version=yL++)}function d(h,p){let g=0,v=0,x=0,M=0,T=0;const S=p.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const b=h[y];if(b.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),g++}else if(b.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(b.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(b.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(S),v++}else if(b.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(S),T++}}}return{setup:c,setupView:d,state:r}}function P_(n){const e=new SL(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function ML(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new P_(n),e.set(o,[c])):l>=u.length?(c=new P_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const EL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wL(n,e,t){let r=new Hx;const o=new pt,l=new pt,u=new Kt,c=new qR({depthPacking:XC}),d=new $R,h={},p=t.maxTextureSize,g={[Yr]:On,[On]:Yr,[ir]:ir},v=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:EL,fragmentShader:TL}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Kr;M.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vx;let y=this.type;this.render=function(I,O,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const P=n.getRenderTarget(),C=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),le=n.state;le.setBlending(Wr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const ee=y!==nr&&this.type===nr,ae=y===nr&&this.type!==nr;for(let he=0,ce=I.length;he<ce;he++){const re=I[he],B=re.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ue=B.getFrameExtents();if(o.multiply(ue),l.copy(B.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/ue.x),o.x=l.x*ue.x,B.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/ue.y),o.y=l.y*ue.y,B.mapSize.y=l.y)),B.map===null||ee===!0||ae===!0){const F=this.type!==nr?{minFilter:wi,magFilter:wi}:{};B.map!==null&&B.map.dispose(),B.map=new bs(o.x,o.y,F),B.map.texture.name=re.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const se=B.getViewportCount();for(let F=0;F<se;F++){const ie=B.getViewport(F);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),le.viewport(u),B.updateMatrices(re,F),r=B.getFrustum(),R(O,k,B.camera,re,this.type)}B.isPointLightShadow!==!0&&this.type===nr&&D(B,k),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,C,V)};function D(I,O){const k=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new bs(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(O,null,k,v,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(O,null,k,x,T,null)}function b(I,O,k,P){let C=null;const V=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)C=V;else if(C=k.isPointLight===!0?d:c,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const le=C.uuid,ee=O.uuid;let ae=h[le];ae===void 0&&(ae={},h[le]=ae);let he=ae[ee];he===void 0&&(he=C.clone(),ae[ee]=he,O.addEventListener("dispose",U)),C=he}if(C.visible=O.visible,C.wireframe=O.wireframe,P===nr?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=n.properties.get(C);le.light=k}return C}function R(I,O,k,P,C){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===nr)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),ae=I.material;if(Array.isArray(ae)){const he=ee.groups;for(let ce=0,re=he.length;ce<re;ce++){const B=he[ce],ue=ae[B.materialIndex];if(ue&&ue.visible){const se=b(I,ue,P,C);I.onBeforeShadow(n,I,O,k,ee,se,B),n.renderBufferDirect(k,null,ee,se,I,B),I.onAfterShadow(n,I,O,k,ee,se,B)}}}else if(ae.visible){const he=b(I,ae,P,C);I.onBeforeShadow(n,I,O,k,ee,he,null),n.renderBufferDirect(k,null,ee,he,I,null),I.onAfterShadow(n,I,O,k,ee,he,null)}}const le=I.children;for(let ee=0,ae=le.length;ee<ae;ee++)R(le[ee],O,k,P,C)}function U(I){I.target.removeEventListener("dispose",U);for(const k in h){const P=h[k],C=I.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const AL={[th]:nh,[ih]:oh,[rh]:ah,[No]:sh,[nh]:th,[oh]:ih,[ah]:rh,[sh]:No};function CL(n,e){function t(){let W=!1;const Re=new Kt;let oe=null;const pe=new Kt(0,0,0,0);return{setMask:function(Le){oe!==Le&&!W&&(n.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){W=Le},setClear:function(Le,De,ot,Ft,en){en===!0&&(Le*=Ft,De*=Ft,ot*=Ft),Re.set(Le,De,ot,Ft),pe.equals(Re)===!1&&(n.clearColor(Le,De,ot,Ft),pe.copy(Re))},reset:function(){W=!1,oe=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,Re=!1,oe=null,pe=null,Le=null;return{setReversed:function(De){if(Re!==De){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=Le;Le=null,this.setClear(Ft)}Re=De},getReversed:function(){return Re},setTest:function(De){De?ve(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(De){oe!==De&&!W&&(n.depthMask(De),oe=De)},setFunc:function(De){if(Re&&(De=AL[De]),pe!==De){switch(De){case th:n.depthFunc(n.NEVER);break;case nh:n.depthFunc(n.ALWAYS);break;case ih:n.depthFunc(n.LESS);break;case No:n.depthFunc(n.LEQUAL);break;case rh:n.depthFunc(n.EQUAL);break;case sh:n.depthFunc(n.GEQUAL);break;case oh:n.depthFunc(n.GREATER);break;case ah:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=De}},setLocked:function(De){W=De},setClear:function(De){Le!==De&&(Re&&(De=1-De),n.clearDepth(De),Le=De)},reset:function(){W=!1,oe=null,pe=null,Le=null,Re=!1}}}function o(){let W=!1,Re=null,oe=null,pe=null,Le=null,De=null,ot=null,Ft=null,en=null;return{setTest:function(St){W||(St?ve(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(St){Re!==St&&!W&&(n.stencilMask(St),Re=St)},setFunc:function(St,Bn,Pn){(oe!==St||pe!==Bn||Le!==Pn)&&(n.stencilFunc(St,Bn,Pn),oe=St,pe=Bn,Le=Pn)},setOp:function(St,Bn,Pn){(De!==St||ot!==Bn||Ft!==Pn)&&(n.stencilOp(St,Bn,Pn),De=St,ot=Bn,Ft=Pn)},setLocked:function(St){W=St},setClear:function(St){en!==St&&(n.clearStencil(St),en=St)},reset:function(){W=!1,Re=null,oe=null,pe=null,Le=null,De=null,ot=null,Ft=null,en=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let p={},g={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,b=null,R=null,U=null,I=null,O=new Lt(0,0,0),k=0,P=!1,C=null,V=null,le=null,ee=null,ae=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,re=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(B)[1]),ce=re>=1):B.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ce=re>=2);let ue=null,se={};const F=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ne=new Kt().fromArray(F),Q=new Kt().fromArray(ie);function fe(W,Re,oe,pe){const Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(W,De),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<oe;ot++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Re+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}const xe={};xe[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ve(n.DEPTH_TEST),u.setFunc(No),gt(!1),ft(Nv),ve(n.CULL_FACE),H(Wr);function ve(W){p[W]!==!0&&(n.enable(W),p[W]=!0)}function Ae(W){p[W]!==!1&&(n.disable(W),p[W]=!1)}function Fe(W,Re){return g[W]!==Re?(n.bindFramebuffer(W,Re),g[W]=Re,W===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Re),W===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(W,Re){let oe=x,pe=!1;if(W){oe=v.get(Re),oe===void 0&&(oe=[],v.set(Re,oe));const Le=W.textures;if(oe.length!==Le.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let De=0,ot=Le.length;De<ot;De++)oe[De]=n.COLOR_ATTACHMENT0+De;oe.length=Le.length,pe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,pe=!0);pe&&n.drawBuffers(oe)}function bt(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const vt={[Ss]:n.FUNC_ADD,[_C]:n.FUNC_SUBTRACT,[yC]:n.FUNC_REVERSE_SUBTRACT};vt[xC]=n.MIN,vt[SC]=n.MAX;const It={[MC]:n.ZERO,[EC]:n.ONE,[TC]:n.SRC_COLOR,[Jd]:n.SRC_ALPHA,[PC]:n.SRC_ALPHA_SATURATE,[RC]:n.DST_COLOR,[AC]:n.DST_ALPHA,[wC]:n.ONE_MINUS_SRC_COLOR,[eh]:n.ONE_MINUS_SRC_ALPHA,[bC]:n.ONE_MINUS_DST_COLOR,[CC]:n.ONE_MINUS_DST_ALPHA,[DC]:n.CONSTANT_COLOR,[LC]:n.ONE_MINUS_CONSTANT_COLOR,[NC]:n.CONSTANT_ALPHA,[IC]:n.ONE_MINUS_CONSTANT_ALPHA};function H(W,Re,oe,pe,Le,De,ot,Ft,en,St){if(W===Wr){T===!0&&(Ae(n.BLEND),T=!1);return}if(T===!1&&(ve(n.BLEND),T=!0),W!==vC){if(W!==S||St!==P){if((y!==Ss||R!==Ss)&&(n.blendEquation(n.FUNC_ADD),y=Ss,R=Ss),St)switch(W){case Ro:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iv:n.blendFunc(n.ONE,n.ONE);break;case Uv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ro:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Iv:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,b=null,U=null,I=null,O.set(0,0,0),k=0,S=W,P=St}return}Le=Le||Re,De=De||oe,ot=ot||pe,(Re!==y||Le!==R)&&(n.blendEquationSeparate(vt[Re],vt[Le]),y=Re,R=Le),(oe!==D||pe!==b||De!==U||ot!==I)&&(n.blendFuncSeparate(It[oe],It[pe],It[De],It[ot]),D=oe,b=pe,U=De,I=ot),(Ft.equals(O)===!1||en!==k)&&(n.blendColor(Ft.r,Ft.g,Ft.b,en),O.copy(Ft),k=en),S=W,P=!1}function bn(W,Re){W.side===ir?Ae(n.CULL_FACE):ve(n.CULL_FACE);let oe=W.side===On;Re&&(oe=!oe),gt(oe),W.blending===Ro&&W.transparent===!1?H(Wr):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const pe=W.stencilWrite;c.setTest(pe),pe&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(W){C!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),C=W)}function ft(W){W!==pC?(ve(n.CULL_FACE),W!==V&&(W===Nv?n.cullFace(n.BACK):W===mC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),V=W}function qe(W){W!==le&&(ce&&n.lineWidth(W),le=W)}function Rt(W,Re,oe){W?(ve(n.POLYGON_OFFSET_FILL),(ee!==Re||ae!==oe)&&(n.polygonOffset(Re,oe),ee=Re,ae=oe)):Ae(n.POLYGON_OFFSET_FILL)}function je(W){W?ve(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function L(W){W===void 0&&(W=n.TEXTURE0+he-1),ue!==W&&(n.activeTexture(W),ue=W)}function w(W,Re,oe){oe===void 0&&(ue===null?oe=n.TEXTURE0+he-1:oe=ue);let pe=se[oe];pe===void 0&&(pe={type:void 0,texture:void 0},se[oe]=pe),(pe.type!==W||pe.texture!==Re)&&(ue!==oe&&(n.activeTexture(oe),ue=oe),n.bindTexture(W,Re||xe[W]),pe.type=W,pe.texture=Re)}function Z(){const W=se[ue];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function de(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Ne.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ne.copy(W))}function ze(W){Q.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function dt(W,Re){let oe=h.get(Re);oe===void 0&&(oe=new WeakMap,h.set(Re,oe));let pe=oe.get(W);pe===void 0&&(pe=n.getUniformBlockIndex(Re,W.name),oe.set(W,pe))}function st(W,Re){const pe=h.get(Re).get(W);d.get(Re)!==pe&&(n.uniformBlockBinding(Re,pe,W.__bindingPointIndex),d.set(Re,pe))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ue=null,se={},g={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,b=null,R=null,U=null,I=null,O=new Lt(0,0,0),k=0,P=!1,C=null,V=null,le=null,ee=null,ae=null,Ne.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:ve,disable:Ae,bindFramebuffer:Fe,drawBuffers:Je,useProgram:bt,setBlending:H,setMaterial:bn,setFlipSided:gt,setCullFace:ft,setLineWidth:qe,setPolygonOffset:Rt,setScissorTest:je,activeTexture:L,bindTexture:w,unbindTexture:Z,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:Be,texImage3D:Ke,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:de,texSubImage3D:Xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Oe,scissor:nt,viewport:ze,reset:At}}function RL(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,p=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):Xa("canvas")}function T(L,w,Z){let me=1;const _e=je(L);if((_e.width>Z||_e.height>Z)&&(me=Z/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(me*_e.width),Xe=Math.floor(me*_e.height);g===void 0&&(g=M(de,Xe));const Ce=w?M(de,Xe):g;return Ce.width=de,Ce.height=Xe,Ce.getContext("2d").drawImage(L,0,0,de,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Xe+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,w,Z,me,_e=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=w;if(w===n.RED&&(Z===n.FLOAT&&(de=n.R32F),Z===n.HALF_FLOAT&&(de=n.R16F),Z===n.UNSIGNED_BYTE&&(de=n.R8)),w===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.R8UI),Z===n.UNSIGNED_SHORT&&(de=n.R16UI),Z===n.UNSIGNED_INT&&(de=n.R32UI),Z===n.BYTE&&(de=n.R8I),Z===n.SHORT&&(de=n.R16I),Z===n.INT&&(de=n.R32I)),w===n.RG&&(Z===n.FLOAT&&(de=n.RG32F),Z===n.HALF_FLOAT&&(de=n.RG16F),Z===n.UNSIGNED_BYTE&&(de=n.RG8)),w===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RG8UI),Z===n.UNSIGNED_SHORT&&(de=n.RG16UI),Z===n.UNSIGNED_INT&&(de=n.RG32UI),Z===n.BYTE&&(de=n.RG8I),Z===n.SHORT&&(de=n.RG16I),Z===n.INT&&(de=n.RG32I)),w===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(de=n.RGB16UI),Z===n.UNSIGNED_INT&&(de=n.RGB32UI),Z===n.BYTE&&(de=n.RGB8I),Z===n.SHORT&&(de=n.RGB16I),Z===n.INT&&(de=n.RGB32I)),w===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),Z===n.UNSIGNED_INT&&(de=n.RGBA32UI),Z===n.BYTE&&(de=n.RGBA8I),Z===n.SHORT&&(de=n.RGBA16I),Z===n.INT&&(de=n.RGBA32I)),w===n.RGB&&Z===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),w===n.RGBA){const Xe=_e?Qu:wt.getTransfer(me);Z===n.FLOAT&&(de=n.RGBA32F),Z===n.HALF_FLOAT&&(de=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(de=Xe===Pt?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(L,w){let Z;return L?w===null||w===Rs||w===Fo?Z=n.DEPTH24_STENCIL8:w===sr?Z=n.DEPTH32F_STENCIL8:w===Wa&&(Z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rs||w===Fo?Z=n.DEPTH_COMPONENT24:w===sr?Z=n.DEPTH_COMPONENT32F:w===Wa&&(Z=n.DEPTH_COMPONENT16),Z}function U(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==wi&&L.minFilter!==di?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=L.target;w.removeEventListener("dispose",I),k(w),w.isVideoTexture&&p.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),C(w)}function k(L){const w=r.get(L);if(w.__webglInit===void 0)return;const Z=L.source,me=v.get(Z);if(me){const _e=me[w.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&P(L),Object.keys(me).length===0&&v.delete(Z)}r.remove(L)}function P(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const Z=L.source,me=v.get(Z);delete me[w.__cacheKey],u.memory.textures--}function C(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let _e=0;_e<w.__webglFramebuffer[me].length;_e++)n.deleteFramebuffer(w.__webglFramebuffer[me][_e]);else n.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)n.deleteFramebuffer(w.__webglFramebuffer[me]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=L.textures;for(let me=0,_e=Z.length;me<_e;me++){const de=r.get(Z[me]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(Z[me])}r.remove(L)}let V=0;function le(){V=0}function ee(){const L=V;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),V+=1,L}function ae(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function he(L,w){const Z=r.get(L);if(L.isVideoTexture&&qe(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,L,w);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function ce(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function re(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){Q(Z,L,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function B(L,w){const Z=r.get(L);if(L.version>0&&Z.__version!==L.version){fe(Z,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const ue={[ch]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[fh]:n.MIRRORED_REPEAT},se={[wi]:n.NEAREST,[WC]:n.NEAREST_MIPMAP_NEAREST,[fu]:n.NEAREST_MIPMAP_LINEAR,[di]:n.LINEAR,[od]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},F={[$C]:n.NEVER,[tR]:n.ALWAYS,[KC]:n.LESS,[Px]:n.LEQUAL,[ZC]:n.EQUAL,[eR]:n.GEQUAL,[QC]:n.GREATER,[JC]:n.NOTEQUAL};function ie(L,w){if(w.type===sr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===di||w.magFilter===od||w.magFilter===fu||w.magFilter===ws||w.minFilter===di||w.minFilter===od||w.minFilter===fu||w.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ue[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ue[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ue[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,se[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wi||w.minFilter!==fu&&w.minFilter!==ws||w.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(L,w){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I));const me=w.source;let _e=v.get(me);_e===void 0&&(_e={},v.set(me,_e));const de=ae(w);if(de!==L.__cacheKey){_e[de]===void 0&&(_e[de]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),_e[de].usedTimes++;const Xe=_e[L.__cacheKey];Xe!==void 0&&(_e[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(w)),L.__cacheKey=de,L.__webglTexture=_e[de].texture}return Z}function Q(L,w,Z){let me=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=n.TEXTURE_3D);const _e=Ne(L,w),de=w.source;t.bindTexture(me,L.__webglTexture,n.TEXTURE0+Z);const Xe=r.get(de);if(de.version!==Xe.__version||_e===!0){t.activeTexture(n.TEXTURE0+Z);const Ce=wt.getPrimaries(wt.workingColorSpace),Oe=w.colorSpace===Gr?null:wt.getPrimaries(w.colorSpace),ct=w.colorSpace===Gr||Ce===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=T(w.image,!1,o.maxTextureSize);Ee=Rt(w,Ee);const Be=l.convert(w.format,w.colorSpace),Ke=l.convert(w.type);let nt=b(w.internalFormat,Be,Ke,w.colorSpace,w.isVideoTexture);ie(me,w);let ze;const dt=w.mipmaps,st=w.isVideoTexture!==!0,At=Xe.__version===void 0||_e===!0,W=de.dataReady,Re=U(w,Ee);if(w.isDepthTexture)nt=R(w.format===Oo,w.type),At&&(st?t.texStorage2D(n.TEXTURE_2D,1,nt,Ee.width,Ee.height):t.texImage2D(n.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Be,Ke,null));else if(w.isDataTexture)if(dt.length>0){st&&At&&t.texStorage2D(n.TEXTURE_2D,Re,nt,dt[0].width,dt[0].height);for(let oe=0,pe=dt.length;oe<pe;oe++)ze=dt[oe],st?W&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,Ke,ze.data):t.texImage2D(n.TEXTURE_2D,oe,nt,ze.width,ze.height,0,Be,Ke,ze.data);w.generateMipmaps=!1}else st?(At&&t.texStorage2D(n.TEXTURE_2D,Re,nt,Ee.width,Ee.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Be,Ke,Ee.data)):t.texImage2D(n.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,Be,Ke,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,nt,dt[0].width,dt[0].height,Ee.depth);for(let oe=0,pe=dt.length;oe<pe;oe++)if(ze=dt[oe],w.format!==Ti)if(Be!==null)if(st){if(W)if(w.layerUpdates.size>0){const Le=o_(ze.width,ze.height,w.format,w.type);for(const De of w.layerUpdates){const ot=ze.data.subarray(De*Le/ze.data.BYTES_PER_ELEMENT,(De+1)*Le/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,De,ze.width,ze.height,1,Be,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,Be,ze.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,nt,ze.width,ze.height,Ee.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ze.width,ze.height,Ee.depth,Be,Ke,ze.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,nt,ze.width,ze.height,Ee.depth,0,Be,Ke,ze.data)}else{st&&At&&t.texStorage2D(n.TEXTURE_2D,Re,nt,dt[0].width,dt[0].height);for(let oe=0,pe=dt.length;oe<pe;oe++)ze=dt[oe],w.format!==Ti?Be!==null?st?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,ze.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,nt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ze.width,ze.height,Be,Ke,ze.data):t.texImage2D(n.TEXTURE_2D,oe,nt,ze.width,ze.height,0,Be,Ke,ze.data)}else if(w.isDataArrayTexture)if(st){if(At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,nt,Ee.width,Ee.height,Ee.depth),W)if(w.layerUpdates.size>0){const oe=o_(Ee.width,Ee.height,w.format,w.type);for(const pe of w.layerUpdates){const Le=Ee.data.subarray(pe*oe/Ee.data.BYTES_PER_ELEMENT,(pe+1)*oe/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,Be,Ke,Le)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Ke,Ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,Be,Ke,Ee.data);else if(w.isData3DTexture)st?(At&&t.texStorage3D(n.TEXTURE_3D,Re,nt,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Ke,Ee.data)):t.texImage3D(n.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,Be,Ke,Ee.data);else if(w.isFramebufferTexture){if(At)if(st)t.texStorage2D(n.TEXTURE_2D,Re,nt,Ee.width,Ee.height);else{let oe=Ee.width,pe=Ee.height;for(let Le=0;Le<Re;Le++)t.texImage2D(n.TEXTURE_2D,Le,nt,oe,pe,0,Be,Ke,null),oe>>=1,pe>>=1}}else if(dt.length>0){if(st&&At){const oe=je(dt[0]);t.texStorage2D(n.TEXTURE_2D,Re,nt,oe.width,oe.height)}for(let oe=0,pe=dt.length;oe<pe;oe++)ze=dt[oe],st?W&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Be,Ke,ze):t.texImage2D(n.TEXTURE_2D,oe,nt,Be,Ke,ze);w.generateMipmaps=!1}else if(st){if(At){const oe=je(Ee);t.texStorage2D(n.TEXTURE_2D,Re,nt,oe.width,oe.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Be,Ke,Ee)}else t.texImage2D(n.TEXTURE_2D,0,nt,Be,Ke,Ee);S(w)&&y(me),Xe.__version=de.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function fe(L,w,Z){if(w.image.length!==6)return;const me=Ne(L,w),_e=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);const de=r.get(_e);if(_e.version!==de.__version||me===!0){t.activeTexture(n.TEXTURE0+Z);const Xe=wt.getPrimaries(wt.workingColorSpace),Ce=w.colorSpace===Gr?null:wt.getPrimaries(w.colorSpace),Oe=w.colorSpace===Gr||Xe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let pe=0;pe<6;pe++)!ct&&!Ee?Be[pe]=T(w.image[pe],!0,o.maxCubemapSize):Be[pe]=Ee?w.image[pe].image:w.image[pe],Be[pe]=Rt(w,Be[pe]);const Ke=Be[0],nt=l.convert(w.format,w.colorSpace),ze=l.convert(w.type),dt=b(w.internalFormat,nt,ze,w.colorSpace),st=w.isVideoTexture!==!0,At=de.__version===void 0||me===!0,W=_e.dataReady;let Re=U(w,Ke);ie(n.TEXTURE_CUBE_MAP,w);let oe;if(ct){st&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,Ke.width,Ke.height);for(let pe=0;pe<6;pe++){oe=Be[pe].mipmaps;for(let Le=0;Le<oe.length;Le++){const De=oe[Le];w.format!==Ti?nt!==null?st?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,nt,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,dt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,0,0,De.width,De.height,nt,ze,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le,dt,De.width,De.height,0,nt,ze,De.data)}}}else{if(oe=w.mipmaps,st&&At){oe.length>0&&Re++;const pe=je(Be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be[pe].width,Be[pe].height,nt,ze,Be[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Be[pe].width,Be[pe].height,0,nt,ze,Be[pe].data);for(let Le=0;Le<oe.length;Le++){const ot=oe[Le].image[pe].image;st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,ot.width,ot.height,nt,ze,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,dt,ot.width,ot.height,0,nt,ze,ot.data)}}else{st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,ze,Be[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,nt,ze,Be[pe]);for(let Le=0;Le<oe.length;Le++){const De=oe[Le];st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,0,0,nt,ze,De.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le+1,dt,nt,ze,De.image[pe])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),de.__version=_e.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function xe(L,w,Z,me,_e,de){const Xe=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),Oe=b(Z.internalFormat,Xe,Ce,Z.colorSpace),ct=r.get(w),Ee=r.get(Z);if(Ee.__renderTarget=w,!ct.__hasExternalTextures){const Be=Math.max(1,w.width>>de),Ke=Math.max(1,w.height>>de);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,de,Oe,Be,Ke,w.depth,0,Xe,Ce,null):t.texImage2D(_e,de,Oe,Be,Ke,0,Xe,Ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,_e,Ee.__webglTexture,0,gt(w)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,_e,Ee.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(L,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const me=w.depthTexture,_e=me&&me.isDepthTexture?me.type:null,de=R(w.stencilBuffer,_e),Xe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=gt(w);ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,de,w.width,w.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,de,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Xe,n.RENDERBUFFER,L)}else{const me=w.textures;for(let _e=0;_e<me.length;_e++){const de=me[_e],Xe=l.convert(de.format,de.colorSpace),Ce=l.convert(de.type),Oe=b(de.internalFormat,Xe,Ce,de.colorSpace),ct=gt(w);Z&&ft(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Oe,w.width,w.height):ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Oe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const _e=me.__webglTexture,de=gt(w);if(w.depthTexture.format===bo)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(w.depthTexture.format===Oo)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Fe(L){const w=r.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const _e=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),w.__depthDisposeCallback=_e}w.__boundDepthTexture=me}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if(Z){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=n.createRenderbuffer(),ve(w.__webglDepthbuffer[me],L,!1);else{const _e=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,de)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ve(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,_e)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(L,w,Z){const me=r.get(L);w!==void 0&&xe(me.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Fe(L)}function bt(L){const w=L.texture,Z=r.get(L),me=r.get(w);L.addEventListener("dispose",O);const _e=L.textures,de=L.isWebGLCubeRenderTarget===!0,Xe=_e.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=w.version,u.memory.textures++),de){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)Z.__webglFramebuffer[Ce][Oe]=n.createFramebuffer()}else Z.__webglFramebuffer[Ce]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Xe)for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ct=r.get(_e[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&ft(L)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Oe=_e[Ce];Z.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const ct=l.convert(Oe.format,Oe.colorSpace),Ee=l.convert(Oe.type),Be=b(Oe.internalFormat,ct,Ee,Oe.colorSpace,L.isXRRenderTarget===!0),Ke=gt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),ie(n.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)xe(Z.__webglFramebuffer[Ce][Oe],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Oe);else xe(Z.__webglFramebuffer[Ce],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ce=0,Oe=_e.length;Ce<Oe;Ce++){const ct=_e[Ce],Ee=r.get(ct);t.bindTexture(n.TEXTURE_2D,Ee.__webglTexture),ie(n.TEXTURE_2D,ct),xe(Z.__webglFramebuffer,L,ct,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),S(ct)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ce=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),ie(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)xe(Z.__webglFramebuffer[Oe],L,w,n.COLOR_ATTACHMENT0,Ce,Oe);else xe(Z.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Ce,0);S(w)&&y(Ce),t.unbindTexture()}L.depthBuffer&&Fe(L)}function vt(L){const w=L.textures;for(let Z=0,me=w.length;Z<me;Z++){const _e=w[Z];if(S(_e)){const de=D(L),Xe=r.get(_e).__webglTexture;t.bindTexture(de,Xe),y(de),t.unbindTexture()}}}const It=[],H=[];function bn(L){if(L.samples>0){if(ft(L)===!1){const w=L.textures,Z=L.width,me=L.height;let _e=n.COLOR_BUFFER_BIT;const de=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xe=r.get(L),Ce=w.length>1;if(Ce)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const ct=r.get(w[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,Z,me,0,0,Z,me,_e,n.NEAREST),d===!0&&(It.length=0,H.length=0,It.push(n.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(It.push(de),H.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Oe]);const ct=r.get(w[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function gt(L){return Math.min(o.maxSamples,L.samples)}function ft(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(L){const w=u.render.frame;p.get(L)!==w&&(p.set(L,w),L.update())}function Rt(L,w){const Z=L.colorSpace,me=L.format,_e=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==ko&&Z!==Gr&&(wt.getTransfer(Z)===Pt?(me!==Ti||_e!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=ce,this.setTexture3D=re,this.setTextureCube=B,this.rebindTextures=Je,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=bn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ft}function bL(n,e){function t(r,o=Gr){let l;const u=wt.getTransfer(o);if(r===cr)return n.UNSIGNED_BYTE;if(r===Mp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ep)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Mx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===xx)return n.BYTE;if(r===Sx)return n.SHORT;if(r===Wa)return n.UNSIGNED_SHORT;if(r===Sp)return n.INT;if(r===Rs)return n.UNSIGNED_INT;if(r===sr)return n.FLOAT;if(r===Za)return n.HALF_FLOAT;if(r===Ex)return n.ALPHA;if(r===Tx)return n.RGB;if(r===Ti)return n.RGBA;if(r===wx)return n.LUMINANCE;if(r===Ax)return n.LUMINANCE_ALPHA;if(r===bo)return n.DEPTH_COMPONENT;if(r===Oo)return n.DEPTH_STENCIL;if(r===Cx)return n.RED;if(r===Tp)return n.RED_INTEGER;if(r===Rx)return n.RG;if(r===wp)return n.RG_INTEGER;if(r===Ap)return n.RGBA_INTEGER;if(r===Bu||r===zu||r===Vu||r===Hu)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Bu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Bu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dh||r===hh||r===ph||r===mh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===dh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ph)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gh||r===vh||r===_h)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===gh||r===vh)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===_h)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yh||r===xh||r===Sh||r===Mh||r===Eh||r===Th||r===wh||r===Ah||r===Ch||r===Rh||r===bh||r===Ph||r===Dh||r===Lh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===yh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Th)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ah)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ch)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ph)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Lh)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gu||r===Nh||r===Ih)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Gu)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ih)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bx||r===Uh||r===Fh||r===Oh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Gu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Uh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const PL={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(PL)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new bu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const DL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new kn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new qr({vertexShader:DL,fragmentShader:LL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ni(new ac(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IL extends Ls{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,v=null,x=null,M=null;const T=new NL,S=t.getContextAttributes();let y=null,D=null;const b=[],R=[],U=new pt;let I=null;const O=new fi;O.viewport=new Kt;const k=new fi;k.viewport=new Kt;const P=[O,k],C=new eb;let V=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=b[Q];return fe===void 0&&(fe=new Nd,b[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=b[Q];return fe===void 0&&(fe=new Nd,b[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=b[Q];return fe===void 0&&(fe=new Nd,b[Q]=fe),fe.getHandSpace()};function ee(Q){const fe=R.indexOf(Q.inputSource);if(fe===-1)return;const xe=b[fe];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,h||u),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ae(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",he);for(let Q=0;Q<b.length;Q++){const fe=R[Q];fe!==null&&(R[Q]=null,b[Q].disconnect(fe))}V=null,le=null,T.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,D=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let xe=null,ve=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?Oo:bo,ve=S.stencil?Fo:Rs);const Fe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Fe),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new bs(v.textureWidth,v.textureHeight,{format:Ti,type:cr,depthTexture:new Gx(v.textureWidth,v.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,xe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new bs(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:cr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Q){for(let fe=0;fe<Q.removed.length;fe++){const xe=Q.removed[fe],ve=R.indexOf(xe);ve>=0&&(R[ve]=null,b[ve].disconnect(xe))}for(let fe=0;fe<Q.added.length;fe++){const xe=Q.added[fe];let ve=R.indexOf(xe);if(ve===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=R.length){R.push(xe),ve=Fe;break}else if(R[Fe]===null){R[Fe]=xe,ve=Fe;break}if(ve===-1)break}const Ae=b[ve];Ae&&Ae.connect(xe)}}const ce=new J,re=new J;function B(Q,fe,xe){ce.setFromMatrixPosition(fe.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const ve=ce.distanceTo(re),Ae=fe.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,Je=Ae[14]/(Ae[10]-1),bt=Ae[14]/(Ae[10]+1),vt=(Ae[9]+1)/Ae[5],It=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],bn=(Fe[8]+1)/Fe[0],gt=Je*H,ft=Je*bn,qe=ve/(-H+bn),Rt=qe*-H;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const je=Je+qe,L=bt+qe,w=gt-Rt,Z=ft+(ve-Rt),me=vt*bt/L*je,_e=It*bt/L*je;Q.projectionMatrix.makePerspective(w,Z,me,_e,je,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let fe=Q.near,xe=Q.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(xe=T.depthFar)),C.near=k.near=O.near=fe,C.far=k.far=O.far=xe,(V!==C.near||le!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,le=C.far),O.layers.mask=Q.layers.mask|2,k.layers.mask=Q.layers.mask|4,C.layers.mask=O.layers.mask|k.layers.mask;const ve=Q.parent,Ae=C.cameras;ue(C,ve);for(let Fe=0;Fe<Ae.length;Fe++)ue(Ae[Fe],ve);Ae.length===2?B(C,O,k):C.projectionMatrix.copy(O.projectionMatrix),se(Q,C,ve)};function se(Q,fe,xe){xe===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ja*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let F=null;function ie(Q,fe){if(p=fe.getViewerPose(h||u),M=fe,p!==null){const xe=p.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let ve=!1;xe.length!==C.cameras.length&&(C.cameras.length=0,ve=!0);for(let Fe=0;Fe<xe.length;Fe++){const Je=xe[Fe];let bt=null;if(x!==null)bt=x.getViewport(Je);else{const It=g.getViewSubImage(v,Je);bt=It.viewport,Fe===0&&(e.setRenderTargetTextures(D,It.colorTexture,v.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(D))}let vt=P[Fe];vt===void 0&&(vt=new fi,vt.layers.enable(Fe),vt.viewport=new Kt,P[Fe]=vt),vt.matrix.fromArray(Je.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Je.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(bt.x,bt.y,bt.width,bt.height),Fe===0&&(C.matrix.copy(vt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ve===!0&&C.cameras.push(vt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Fe=g.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,o.renderState)}}for(let xe=0;xe<b.length;xe++){const ve=R[xe],Ae=b[xe];ve!==null&&Ae!==void 0&&Ae.update(ve,fe,h||u)}F&&F(Q,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ne=new jx;Ne.setAnimationLoop(ie),this.setAnimationLoop=function(Q){F=Q},this.dispose=function(){}}}const vs=new fr,UL=new Jt;function FL(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Bx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,b,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),p(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,D,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===On&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===On&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),b=D.envMap,R=D.envMapRotation;b&&(S.envMap.value=b,vs.copy(R),vs.x*=-1,vs.y*=-1,vs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),S.envMapRotation.value.setFromMatrix4(UL.makeRotationFromEuler(vs)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===On&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function OL(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,b){const R=b.program;r.uniformBlockBinding(D,R)}function h(D,b){let R=o[D.id];R===void 0&&(M(D),R=p(D),o[D.id]=R,D.addEventListener("dispose",S));const U=b.program;r.updateUBOMapping(D,U);const I=e.render.frame;l[D.id]!==I&&(v(D),l[D.id]=I)}function p(D){const b=g();D.__bindingPointIndex=b;const R=n.createBuffer(),U=D.__size,I=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,U,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,R),R}function g(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const b=o[D.id],R=D.uniforms,U=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,O=R.length;I<O;I++){const k=Array.isArray(R[I])?R[I]:[R[I]];for(let P=0,C=k.length;P<C;P++){const V=k[P];if(x(V,I,P,U)===!0){const le=V.__offset,ee=Array.isArray(V.value)?V.value:[V.value];let ae=0;for(let he=0;he<ee.length;he++){const ce=ee[he],re=T(ce);typeof ce=="number"||typeof ce=="boolean"?(V.__data[0]=ce,n.bufferSubData(n.UNIFORM_BUFFER,le+ae,V.__data)):ce.isMatrix3?(V.__data[0]=ce.elements[0],V.__data[1]=ce.elements[1],V.__data[2]=ce.elements[2],V.__data[3]=0,V.__data[4]=ce.elements[3],V.__data[5]=ce.elements[4],V.__data[6]=ce.elements[5],V.__data[7]=0,V.__data[8]=ce.elements[6],V.__data[9]=ce.elements[7],V.__data[10]=ce.elements[8],V.__data[11]=0):(ce.toArray(V.__data,ae),ae+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,b,R,U){const I=D.value,O=b+"_"+R;if(U[O]===void 0)return typeof I=="number"||typeof I=="boolean"?U[O]=I:U[O]=I.clone(),!0;{const k=U[O];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return U[O]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function M(D){const b=D.uniforms;let R=0;const U=16;for(let O=0,k=b.length;O<k;O++){const P=Array.isArray(b[O])?b[O]:[b[O]];for(let C=0,V=P.length;C<V;C++){const le=P[C],ee=Array.isArray(le.value)?le.value:[le.value];for(let ae=0,he=ee.length;ae<he;ae++){const ce=ee[ae],re=T(ce),B=R%U,ue=B%re.boundary,se=B+ue;R+=ue,se!==0&&U-se<re.storage&&(R+=U-se),le.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=R,R+=re.storage}}}const I=R%U;return I>0&&(R+=U-I),D.__size=R,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function S(D){const b=D.target;b.removeEventListener("dispose",S);const R=u.indexOf(b.__bindingPointIndex);u.splice(R,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class kL{constructor(e={}){const{canvas:t=yR(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=jr,this.toneMappingExposure=1;const R=this;let U=!1,I=0,O=0,k=null,P=-1,C=null;const V=new Kt,le=new Kt;let ee=null;const ae=new Lt(0);let he=0,ce=t.width,re=t.height,B=1,ue=null,se=null;const F=new Kt(0,0,ce,re),ie=new Kt(0,0,ce,re);let Ne=!1;const Q=new Hx;let fe=!1,xe=!1;this.transmissionResolutionScale=1;const ve=new Jt,Ae=new Jt,Fe=new J,Je=new Kt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function It(){return k===null?B:1}let H=r;function bn(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xp}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const j="webgl2";if(H=bn(j,A),H===null)throw bn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,ft,qe,Rt,je,L,w,Z,me,_e,de,Xe,Ce,Oe,ct,Ee,Be,Ke,nt,ze,dt,st,At,W;function Re(){gt=new Y2(H),gt.init(),st=new bL(H,gt),ft=new V2(H,gt,e,st),qe=new CL(H,gt),ft.reverseDepthBuffer&&v&&qe.buffers.depth.setReversed(!0),Rt=new K2(H),je=new pL,L=new RL(H,gt,qe,je,ft,st,Rt),w=new G2(R),Z=new X2(R),me=new ib(H),At=new B2(H,me),_e=new q2(H,me,Rt,At),de=new Q2(H,_e,me,Rt),nt=new Z2(H,ft,L),Ee=new H2(je),Xe=new hL(R,w,Z,gt,ft,At,Ee),Ce=new FL(R,je),Oe=new gL,ct=new ML(gt),Ke=new k2(R,w,Z,qe,de,x,d),Be=new wL(R,de,ft),W=new OL(H,Rt,ft,qe),ze=new z2(H,gt,Rt),dt=new $2(H,gt,Rt),Rt.programs=Xe.programs,R.capabilities=ft,R.extensions=gt,R.properties=je,R.renderLists=Oe,R.shadowMap=Be,R.state=qe,R.info=Rt}Re();const oe=new IL(R,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(ce,re,!1))},this.getSize=function(A){return A.set(ce,re)},this.setSize=function(A,j,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,re=j,t.width=Math.floor(A*B),t.height=Math.floor(j*B),te===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ce*B,re*B).floor()},this.setDrawingBufferSize=function(A,j,te){ce=A,re=j,B=te,t.width=Math.floor(A*te),t.height=Math.floor(j*te),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,j,te,$){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,j,te,$),qe.viewport(V.copy(F).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,j,te,$){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,j,te,$),qe.scissor(le.copy(ie).multiplyScalar(B).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){qe.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){se=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,j=!0,te=!0){let $=0;if(A){let X=!1;if(k!==null){const Me=k.texture.format;X=Me===Ap||Me===wp||Me===Tp}if(X){const Me=k.texture.type,be=Me===cr||Me===Rs||Me===Wa||Me===Fo||Me===Mp||Me===Ep,Ie=Ke.getClearColor(),Ve=Ke.getClearAlpha(),it=Ie.r,tt=Ie.g,Ge=Ie.b;be?(M[0]=it,M[1]=tt,M[2]=Ge,M[3]=Ve,H.clearBufferuiv(H.COLOR,0,M)):(T[0]=it,T[1]=tt,T[2]=Ge,T[3]=Ve,H.clearBufferiv(H.COLOR,0,T))}else $|=H.COLOR_BUFFER_BIT}j&&($|=H.DEPTH_BUFFER_BIT),te&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ke.dispose(),Oe.dispose(),ct.dispose(),je.dispose(),w.dispose(),Z.dispose(),de.dispose(),At.dispose(),W.dispose(),Xe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ns),oe.removeEventListener("sessionend",dr),zi.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const A=Rt.autoReset,j=Be.enabled,te=Be.autoUpdate,$=Be.needsUpdate,X=Be.type;Re(),Rt.autoReset=A,Be.enabled=j,Be.autoUpdate=te,Be.needsUpdate=$,Be.type=X}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const j=A.target;j.removeEventListener("dispose",ot),Ft(j)}function Ft(A){en(A),je.remove(A)}function en(A){const j=je.get(A).programs;j!==void 0&&(j.forEach(function(te){Xe.releaseProgram(te)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,te,$,X,Me){j===null&&(j=bt);const be=X.isMesh&&X.matrixWorld.determinant()<0,Ie=nl(A,j,te,$,X);qe.setMaterial($,be);let Ve=te.index,it=1;if($.wireframe===!0){if(Ve=_e.getWireframeAttribute(te),Ve===void 0)return;it=2}const tt=te.drawRange,Ge=te.attributes.position;let yt=tt.start*it,at=(tt.start+tt.count)*it;Me!==null&&(yt=Math.max(yt,Me.start*it),at=Math.min(at,(Me.start+Me.count)*it)),Ve!==null?(yt=Math.max(yt,0),at=Math.min(at,Ve.count)):Ge!=null&&(yt=Math.max(yt,0),at=Math.min(at,Ge.count));const Wt=at-yt;if(Wt<0||Wt===1/0)return;At.setup(X,$,Ie,te,Ve);let Bt,xt=ze;if(Ve!==null&&(Bt=me.get(Ve),xt=dt,xt.setIndex(Bt)),X.isMesh)$.wireframe===!0?(qe.setLineWidth($.wireframeLinewidth*It()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(X.isLine){let $e=$.linewidth;$e===void 0&&($e=1),qe.setLineWidth($e*It()),X.isLineSegments?xt.setMode(H.LINES):X.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else X.isPoints?xt.setMode(H.POINTS):X.isSprite&&xt.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)xt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))xt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const $e=X._multiDrawStarts,jt=X._multiDrawCounts,_t=X._multiDrawCount,yn=Ve?me.get(Ve).bytesPerElement:1,pr=je.get($).currentProgram.getUniforms();for(let Dn=0;Dn<_t;Dn++)pr.setValue(H,"_gl_DrawID",Dn),xt.render($e[Dn]/yn,jt[Dn])}else if(X.isInstancedMesh)xt.renderInstances(yt,Wt,X.count);else if(te.isInstancedBufferGeometry){const $e=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,jt=Math.min(te.instanceCount,$e);xt.renderInstances(yt,Wt,jt)}else xt.render(yt,Wt)};function St(A,j,te){A.transparent===!0&&A.side===ir&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,Is(A,j,te),A.side=Yr,A.needsUpdate=!0,Is(A,j,te),A.side=ir):Is(A,j,te)}this.compile=function(A,j,te=null){te===null&&(te=A),y=ct.get(te),y.init(j),b.push(y),te.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),A!==te&&A.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const $=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const Ie=Me[be];St(Ie,te,X),$.add(Ie)}else St(Me,te,X),$.add(Me)}),b.pop(),y=null,$},this.compileAsync=function(A,j,te=null){const $=this.compile(A,j,te);return new Promise(X=>{function Me(){if($.forEach(function(be){je.get(be).currentProgram.isReady()&&$.delete(be)}),$.size===0){X(A);return}setTimeout(Me,10)}gt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Bn=null;function Pn(A){Bn&&Bn(A)}function Ns(){zi.stop()}function dr(){zi.start()}const zi=new jx;zi.setAnimationLoop(Pn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(A){Bn=A,oe.setAnimationLoop(A),A===null?zi.stop():zi.start()},oe.addEventListener("sessionstart",Ns),oe.addEventListener("sessionend",dr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,j,k),y=ct.get(A,b.length),y.init(j),b.push(y),Ae.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),xe=this.localClippingEnabled,fe=Ee.init(this.clippingPlanes,xe),S=Oe.get(A,D.length),S.init(),D.push(S),oe.enabled===!0&&oe.isPresenting===!0){const Me=R.xr.getDepthSensingMesh();Me!==null&&Vi(Me,j,-1/0,R.sortObjects)}Vi(A,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ue,se),vt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,vt&&Ke.addToRenderList(S,A),this.info.render.frame++,fe===!0&&Ee.beginShadows();const te=y.state.shadowsArray;Be.render(te,A,j),fe===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=S.opaque,X=S.transmissive;if(y.setupLights(),j.isArrayCamera){const Me=j.cameras;if(X.length>0)for(let be=0,Ie=Me.length;be<Ie;be++){const Ve=Me[be];Qr($,X,A,Ve)}vt&&Ke.render(A);for(let be=0,Ie=Me.length;be<Ie;be++){const Ve=Me[be];Zr(S,A,Ve,Ve.viewport)}}else X.length>0&&Qr($,X,A,j),vt&&Ke.render(A),Zr(S,A,j);k!==null&&O===0&&(L.updateMultisampleRenderTarget(k),L.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(R,A,j),At.resetDefaultState(),P=-1,C=null,b.pop(),b.length>0?(y=b[b.length-1],fe===!0&&Ee.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Vi(A,j,te,$){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){$&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const be=de.update(A),Ie=A.material;Ie.visible&&S.push(A,be,Ie,te,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const be=de.update(A),Ie=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Je.copy(be.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ie)){const Ve=be.groups;for(let it=0,tt=Ve.length;it<tt;it++){const Ge=Ve[it],yt=Ie[Ge.materialIndex];yt&&yt.visible&&S.push(A,be,yt,te,Je.z,Ge)}}else Ie.visible&&S.push(A,be,Ie,te,Je.z,null)}}const Me=A.children;for(let be=0,Ie=Me.length;be<Ie;be++)Vi(Me[be],j,te,$)}function Zr(A,j,te,$){const X=A.opaque,Me=A.transmissive,be=A.transparent;y.setupLightsView(te),fe===!0&&Ee.setGlobalState(R.clippingPlanes,te),$&&qe.viewport(V.copy($)),X.length>0&&hr(X,j,te),Me.length>0&&hr(Me,j,te),be.length>0&&hr(be,j,te),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Qr(A,j,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[$.id]===void 0&&(y.state.transmissionRenderTarget[$.id]=new bs(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Za:cr,minFilter:ws,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Me=y.state.transmissionRenderTarget[$.id],be=$.viewport||V;Me.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(Me),R.getClearColor(ae),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),vt&&Ke.render(te);const Ve=R.toneMapping;R.toneMapping=jr;const it=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),y.setupLightsView($),fe===!0&&Ee.setGlobalState(R.clippingPlanes,$),hr(A,te,$),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),gt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ge=0,yt=j.length;Ge<yt;Ge++){const at=j[Ge],Wt=at.object,Bt=at.geometry,xt=at.material,$e=at.group;if(xt.side===ir&&Wt.layers.test($.layers)){const jt=xt.side;xt.side=On,xt.needsUpdate=!0,el(Wt,te,$,Bt,xt,$e),xt.side=jt,xt.needsUpdate=!0,tt=!0}}tt===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}R.setRenderTarget(Ie),R.setClearColor(ae,he),it!==void 0&&($.viewport=it),R.toneMapping=Ve}function hr(A,j,te){const $=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Me=A.length;X<Me;X++){const be=A[X],Ie=be.object,Ve=be.geometry,it=$===null?be.material:$,tt=be.group;Ie.layers.test(te.layers)&&el(Ie,j,te,Ve,it,tt)}}function el(A,j,te,$,X,Me){A.onBeforeRender(R,j,te,$,X,Me),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(R,j,te,$,A,Me),X.transparent===!0&&X.side===ir&&X.forceSinglePass===!1?(X.side=On,X.needsUpdate=!0,R.renderBufferDirect(te,j,$,X,A,Me),X.side=Yr,X.needsUpdate=!0,R.renderBufferDirect(te,j,$,X,A,Me),X.side=ir):R.renderBufferDirect(te,j,$,X,A,Me),A.onAfterRender(R,j,te,$,X,Me)}function Is(A,j,te){j.isScene!==!0&&(j=bt);const $=je.get(A),X=y.state.lights,Me=y.state.shadowsArray,be=X.state.version,Ie=Xe.getParameters(A,X.state,Me,j,te),Ve=Xe.getProgramCacheKey(Ie);let it=$.programs;$.environment=A.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(A.isMeshStandardMaterial?Z:w).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",ot),it=new Map,$.programs=it);let tt=it.get(Ve);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===be)return Ai(A,Ie),tt}else Ie.uniforms=Xe.getUniforms(A),A.onBeforeCompile(Ie,R),tt=Xe.acquireProgram(Ie,Ve),it.set(Ve,tt),$.uniforms=Ie.uniforms;const Ge=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Ee.uniform),Ai(A,Ie),$.needsLights=uc(A),$.lightsStateVersion=be,$.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function tl(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Wu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Ai(A,j){const te=je.get(A);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function nl(A,j,te,$,X){j.isScene!==!0&&(j=bt),L.resetTextureUnits();const Me=j.fog,be=$.isMeshStandardMaterial?j.environment:null,Ie=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ko,Ve=($.isMeshStandardMaterial?Z:w).get($.envMap||be),it=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,at=!!te.morphAttributes.color;let Wt=jr;$.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Wt=R.toneMapping);const Bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,xt=Bt!==void 0?Bt.length:0,$e=je.get($),jt=y.state.lights;if(fe===!0&&(xe===!0||A!==C)){const gn=A===C&&$.id===P;Ee.setState($,A,gn)}let _t=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==jt.state.version||$e.outputColorSpace!==Ie||X.isBatchedMesh&&$e.batching===!1||!X.isBatchedMesh&&$e.batching===!0||X.isBatchedMesh&&$e.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&$e.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&$e.instancing===!1||!X.isInstancedMesh&&$e.instancing===!0||X.isSkinnedMesh&&$e.skinning===!1||!X.isSkinnedMesh&&$e.skinning===!0||X.isInstancedMesh&&$e.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&$e.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&$e.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&$e.instancingMorph===!1&&X.morphTexture!==null||$e.envMap!==Ve||$.fog===!0&&$e.fog!==Me||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ee.numPlanes||$e.numIntersection!==Ee.numIntersection)||$e.vertexAlphas!==it||$e.vertexTangents!==tt||$e.morphTargets!==Ge||$e.morphNormals!==yt||$e.morphColors!==at||$e.toneMapping!==Wt||$e.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,$e.__version=$.version);let yn=$e.currentProgram;_t===!0&&(yn=Is($,j,X));let pr=!1,Dn=!1,Hi=!1;const Nt=yn.getUniforms(),xn=$e.uniforms;if(qe.useProgram(yn.program)&&(pr=!0,Dn=!0,Hi=!0),$.id!==P&&(P=$.id,Dn=!0),pr||C!==A){qe.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),SR(ve),MR(ve),Nt.setValue(H,"projectionMatrix",ve)):Nt.setValue(H,"projectionMatrix",A.projectionMatrix),Nt.setValue(H,"viewMatrix",A.matrixWorldInverse);const un=Nt.map.cameraPosition;un!==void 0&&un.setValue(H,Fe.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Nt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Nt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,Dn=!0,Hi=!0)}if(X.isSkinnedMesh){Nt.setOptional(H,X,"bindMatrix"),Nt.setOptional(H,X,"bindMatrixInverse");const gn=X.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Nt.setValue(H,"boneTexture",gn.boneTexture,L))}X.isBatchedMesh&&(Nt.setOptional(H,X,"batchingTexture"),Nt.setValue(H,"batchingTexture",X._matricesTexture,L),Nt.setOptional(H,X,"batchingIdTexture"),Nt.setValue(H,"batchingIdTexture",X._indirectTexture,L),Nt.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&Nt.setValue(H,"batchingColorTexture",X._colorsTexture,L));const ln=te.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&nt.update(X,te,yn),(Dn||$e.receiveShadow!==X.receiveShadow)&&($e.receiveShadow=X.receiveShadow,Nt.setValue(H,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(xn.envMap.value=Ve,xn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(xn.envMapIntensity.value=j.environmentIntensity),Dn&&(Nt.setValue(H,"toneMappingExposure",R.toneMappingExposure),$e.needsLights&&il(xn,Hi),Me&&$.fog===!0&&Ce.refreshFogUniforms(xn,Me),Ce.refreshMaterialUniforms(xn,$,B,re,y.state.transmissionRenderTarget[A.id]),Wu.upload(H,tl($e),xn,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Wu.upload(H,tl($e),xn,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Nt.setValue(H,"center",X.center),Nt.setValue(H,"modelViewMatrix",X.modelViewMatrix),Nt.setValue(H,"normalMatrix",X.normalMatrix),Nt.setValue(H,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const gn=$.uniformsGroups;for(let un=0,Mt=gn.length;un<Mt;un++){const Ci=gn[un];W.update(Ci,yn),W.bind(Ci,yn)}}return yn}function il(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function uc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,j,te){je.get(A.texture).__webglTexture=j,je.get(A.depthTexture).__webglTexture=te;const $=je.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=te===void 0,$.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const te=je.get(A);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0};const rl=H.createFramebuffer();this.setRenderTarget=function(A,j=0,te=0){k=A,I=j,O=te;let $=!0,X=null,Me=!1,be=!1;if(A){const Ve=je.get(A);if(Ve.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(H.FRAMEBUFFER,null),$=!1;else if(Ve.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ve.__hasExternalTextures)L.rebindTextures(A,je.get(A.texture).__webglTexture,je.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&je.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(be=!0);const tt=je.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?X=tt[j][te]:X=tt[j],Me=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?X=je.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[te]:X=tt,V.copy(A.viewport),le.copy(A.scissor),ee=A.scissorTest}else V.copy(F).multiplyScalar(B).floor(),le.copy(ie).multiplyScalar(B).floor(),ee=Ne;if(te!==0&&(X=rl),qe.bindFramebuffer(H.FRAMEBUFFER,X)&&$&&qe.drawBuffers(A,X),qe.viewport(V),qe.scissor(le),qe.setScissorTest(ee),Me){const Ve=je.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ve.__webglTexture,te)}else if(be){const Ve=je.get(A.texture),it=j;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,te,it)}else if(A!==null&&te!==0){const Ve=je.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ve.__webglTexture,te)}P=-1},this.readRenderTargetPixels=function(A,j,te,$,X,Me,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){qe.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const Ve=A.texture,it=Ve.format,tt=Ve.type;if(!ft.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-$&&te>=0&&te<=A.height-X&&H.readPixels(j,te,$,X,st.convert(it),st.convert(tt),Me)}finally{const Ve=k!==null?je.get(k).__webglFramebuffer:null;qe.bindFramebuffer(H.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,j,te,$,X,Me,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const Ve=A.texture,it=Ve.format,tt=Ve.type;if(!ft.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-$&&te>=0&&te<=A.height-X){qe.bindFramebuffer(H.FRAMEBUFFER,Ie);const Ge=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels(j,te,$,X,st.convert(it),st.convert(tt),0);const yt=k!==null?je.get(k).__webglFramebuffer:null;qe.bindFramebuffer(H.FRAMEBUFFER,yt);const at=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await xR(H,at,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ge),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer(Ge),H.deleteSync(at),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,te=0){A.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-te),X=Math.floor(A.image.width*$),Me=Math.floor(A.image.height*$),be=j!==null?j.x:0,Ie=j!==null?j.y:0;L.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,be,Ie,X,Me),qe.unbindTexture()};const sl=H.createFramebuffer(),ol=H.createFramebuffer();this.copyTextureToTexture=function(A,j,te=null,$=null,X=0,Me=null){A.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],j=arguments[2],Me=arguments[3]||0,te=null),Me===null&&(X!==0?(yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=X,X=0):Me=0);let be,Ie,Ve,it,tt,Ge,yt,at,Wt;const Bt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(te!==null)be=te.max.x-te.min.x,Ie=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,it=te.min.x,tt=te.min.y,Ge=te.isBox3?te.min.z:0;else{const ln=Math.pow(2,-X);be=Math.floor(Bt.width*ln),Ie=Math.floor(Bt.height*ln),A.isDataArrayTexture?Ve=Bt.depth:A.isData3DTexture?Ve=Math.floor(Bt.depth*ln):Ve=1,it=0,tt=0,Ge=0}$!==null?(yt=$.x,at=$.y,Wt=$.z):(yt=0,at=0,Wt=0);const xt=st.convert(j.format),$e=st.convert(j.type);let jt;j.isData3DTexture?(L.setTexture3D(j,0),jt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),jt=H.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=H.getParameter(H.UNPACK_ROW_LENGTH),yn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pr=H.getParameter(H.UNPACK_SKIP_PIXELS),Dn=H.getParameter(H.UNPACK_SKIP_ROWS),Hi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,it),H.pixelStorei(H.UNPACK_SKIP_ROWS,tt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ge);const Nt=A.isDataArrayTexture||A.isData3DTexture,xn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const ln=je.get(A),gn=je.get(j),un=je.get(ln.__renderTarget),Mt=je.get(gn.__renderTarget);qe.bindFramebuffer(H.READ_FRAMEBUFFER,un.__webglFramebuffer),qe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ci=0;Ci<Ve;Ci++)Nt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(A).__webglTexture,X,Ge+Ci),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(j).__webglTexture,Me,Wt+Ci)),H.blitFramebuffer(it,tt,be,Ie,yt,at,be,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);qe.bindFramebuffer(H.READ_FRAMEBUFFER,null),qe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||je.has(A)){const ln=je.get(A),gn=je.get(j);qe.bindFramebuffer(H.READ_FRAMEBUFFER,sl),qe.bindFramebuffer(H.DRAW_FRAMEBUFFER,ol);for(let un=0;un<Ve;un++)Nt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,X,Ge+un):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,X),xn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,Me,Wt+un):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,Me),X!==0?H.blitFramebuffer(it,tt,be,Ie,yt,at,be,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):xn?H.copyTexSubImage3D(jt,Me,yt,at,Wt+un,it,tt,be,Ie):H.copyTexSubImage2D(jt,Me,yt,at,it,tt,be,Ie);qe.bindFramebuffer(H.READ_FRAMEBUFFER,null),qe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else xn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(jt,Me,yt,at,Wt,be,Ie,Ve,xt,$e,Bt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(jt,Me,yt,at,Wt,be,Ie,Ve,xt,Bt.data):H.texSubImage3D(jt,Me,yt,at,Wt,be,Ie,Ve,xt,$e,Bt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,yt,at,be,Ie,xt,$e,Bt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,yt,at,Bt.width,Bt.height,xt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,Me,yt,at,be,Ie,xt,$e,Bt);H.pixelStorei(H.UNPACK_ROW_LENGTH,_t),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pr),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Hi),Me===0&&j.generateMipmaps&&H.generateMipmap(jt),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,j,te=null,$=null,X=0){return A.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,$=arguments[1]||null,A=arguments[2],j=arguments[3],X=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,te,$,X)},this.initRenderTarget=function(A){je.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){I=0,O=0,k=null,qe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const D_={type:"change"},Np={type:"start"},Kx={type:"end"},Nu=new Ix,L_=new Hr,BL=Math.cos(70*_R.DEG2RAD),sn=new J,Xn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6;class zL extends tb{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Co.ROTATE,MIDDLE:Co.DOLLY,RIGHT:Co.PAN},this.touches={ONE:wo.ROTATE,TWO:wo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Ps,this._lastTargetPosition=new J,this._quat=new Ps().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s_,this._sphericalDelta=new s_,this._scale=1,this._panOffset=new J,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new J,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=HL.bind(this),this._onPointerDown=VL.bind(this),this._onPointerUp=GL.bind(this),this._onContextMenu=KL.bind(this),this._onMouseWheel=XL.bind(this),this._onKeyDown=YL.bind(this),this._onTouchStart=qL.bind(this),this._onTouchMove=$L.bind(this),this._onMouseDown=WL.bind(this),this._onMouseMove=jL.bind(this),this._interceptControlDown=ZL.bind(this),this._interceptControlUp=QL.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(D_),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;sn.copy(t).sub(this.target),sn.applyQuaternion(this._quat),this._spherical.setFromVector3(sn),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Xn:r>Math.PI&&(r-=Xn),o<-Math.PI?o+=Xn:o>Math.PI&&(o-=Xn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(sn.setFromSpherical(this._spherical),sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=sn.length();u=this._clampDistance(c*this._scale);const d=c-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const c=new J(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),u=sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Nu.origin.copy(this.object.position),Nu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nu.direction))<BL?this.object.lookAt(this.target):(L_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nu.intersectPlane(L_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(D_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){sn.setFromMatrixColumn(t,0),sn.multiplyScalar(-e),this._panOffset.add(sn)}_panUp(e,t){this.screenSpacePanning===!0?sn.setFromMatrixColumn(t,1):(sn.setFromMatrixColumn(t,0),sn.crossVectors(this.object.up,sn)),sn.multiplyScalar(e),this._panOffset.add(sn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;sn.copy(o).sub(this.target);let l=sn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,c=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function VL(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function HL(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function GL(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kx),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function WL(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Co.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Dt.DOLLY;break;case Co.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}break;case Co.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Np)}function jL(n){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function XL(n){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(n.preventDefault(),this.dispatchEvent(Np),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Kx))}function YL(n){this.enabled!==!1&&this._handleKeyDown(n)}function qL(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Dt.TOUCH_ROTATE;break;case wo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case wo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Dt.TOUCH_DOLLY_PAN;break;case wo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Np)}function $L(n){switch(this._trackPointer(n),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Dt.NONE}}function KL(n){this.enabled!==!1&&n.preventDefault()}function ZL(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QL(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const JL=()=>{const n=we.useRef(null),e=we.useRef(null),[t,r]=we.useState(!0),[o,l]=we.useState(0),[u,c]=we.useState(!1),[d,h]=we.useState(!1),[p,g]=we.useState(!1),[v,x]=we.useState(!0),M=we.useRef(),T=we.useRef(),S=we.useRef(),y=we.useRef(),D=we.useRef(),b=we.useRef();return we.useEffect(()=>{if(!e.current)return;const R=new IntersectionObserver(U=>{U.forEach(I=>{x(I.isIntersecting),T.current&&(T.current.enabled=I.isIntersecting),console.log("Hero section visible:",I.isIntersecting)})},{threshold:.1,rootMargin:"0px"});return R.observe(e.current),()=>{e.current&&R.unobserve(e.current)}},[]),we.useEffect(()=>{if(!n.current)return;const R=new jR;y.current=R;const U=new fi(75,window.innerWidth/window.innerHeight,.1,1e3);U.position.set(0,0,.1),D.current=U;const I=new kL({canvas:n.current,antialias:window.devicePixelRatio<=1,powerPreference:"high-performance",stencil:!1,depth:!1,preserveDrawingBuffer:!0});I.setSize(window.innerWidth,window.innerHeight),I.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),S.current=I;const O=new Pp(500,32,16),k=new Wx;k.onStart=(fe,xe,ve)=>{console.log("Started loading:",fe),l(0)},k.onProgress=(fe,xe,ve)=>{const Ae=xe/ve*100;console.log(`Loading progress: ${Ae.toFixed(0)}%`),l(Ae)},k.onLoad=()=>{console.log("Panorama loaded successfully"),l(100),setTimeout(()=>r(!1),300)},k.onError=fe=>{console.error("Error loading texture:",fe),g(!0),r(!1)};const P=new QR(k),C=()=>(window.innerWidth<768,"https://dl.polyhaven.org/file/ph-assets/HDRIs/extra/Tonemapped%20JPG/qwantani_dusk_2.jpg"),V=P.load(C(),()=>{console.log("Texture loaded")},void 0,fe=>{console.error("Texture loading error:",fe),g(!0),r(!1)});V.colorSpace=Jn,V.minFilter=di,V.magFilter=di,V.generateMipmaps=!1;const le=new bp({map:V,side:On}),ee=new Ni(O,le);b.current=ee,R.add(ee);const ae=new zL(U,I.domElement);T.current=ae,ae.enableZoom=!1,ae.enablePan=!1,ae.rotateSpeed=-.5,ae.enableDamping=!0,ae.dampingFactor=.05,ae.minPolarAngle=0,ae.maxPolarAngle=Math.PI,ae.target.set(0,0,0),ae.update();const he=()=>{c(!0),h(!0)},ce=()=>c(!1),re=()=>c(!1);I.domElement.addEventListener("pointerdown",he),I.domElement.addEventListener("pointerup",ce),I.domElement.addEventListener("pointercancel",re);let B;const ue=()=>{clearTimeout(B),B=setTimeout(()=>{const fe=window.innerWidth,xe=window.innerHeight;U.aspect=fe/xe,U.updateProjectionMatrix(),I.setSize(fe,xe),I.setPixelRatio(Math.min(window.devicePixelRatio,1.5))},100)};window.addEventListener("resize",ue),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(ae.enableDamping=!1);let F=!0;const ie=()=>{F=!document.hidden,console.log("Tab visible:",F)};document.addEventListener("visibilitychange",ie);const Ne=()=>{M.current=requestAnimationFrame(Ne),F&&v&&!t&&(ae.update(),I.render(R,U))};Ne();const Q=setTimeout(()=>{h(!0)},4e3);return()=>{console.log("Cleaning up Three.js resources..."),M.current&&cancelAnimationFrame(M.current),clearTimeout(Q),clearTimeout(B),window.removeEventListener("resize",ue),document.removeEventListener("visibilitychange",ie),I.domElement.removeEventListener("pointerdown",he),I.domElement.removeEventListener("pointerup",ce),I.domElement.removeEventListener("pointercancel",re),O.dispose(),le.dispose(),V.dispose(),I.dispose(),ae.dispose(),y.current=null,D.current=null,S.current=null,T.current=null,b.current=null,console.log("Cleanup complete")}},[t,v]),Y.jsxs("section",{ref:e,id:"home",className:"snap-start snap-always relative w-full h-screen overflow-hidden bg-black",children:[Y.jsx("canvas",{ref:n,className:`absolute inset-0 transition-opacity duration-1000 ${t?"opacity-0":"opacity-100"} ${u?"cursor-grabbing":"cursor-grab"}`,style:{userSelect:"none"}}),t&&!p&&Y.jsx(rn.div,{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black z-20",initial:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:Y.jsxs("div",{className:"text-center max-w-md px-6",children:[Y.jsxs("div",{className:"relative w-32 h-32 mx-auto mb-8",children:[Y.jsx(rn.div,{className:"absolute inset-0 rounded-full border-4 border-transparent border-t-white/30 border-r-white/20",animate:{rotate:360},transition:{duration:2,repeat:1/0,ease:"linear"}}),Y.jsx(rn.div,{className:"absolute inset-2 rounded-full border-4 border-transparent border-t-white/50 border-l-white/30",animate:{rotate:-360},transition:{duration:1.5,repeat:1/0,ease:"linear"}}),Y.jsx(rn.div,{className:"absolute inset-0 flex items-center justify-center",children:Y.jsx(rn.div,{className:"w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm",animate:{scale:[1,1.2,1],opacity:[.5,.8,.5]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}})}),Y.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:Y.jsxs(rn.span,{className:"text-2xl font-bold text-white",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.3},children:[Math.round(o),"%"]},o)})]}),Y.jsxs(rn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.2},children:[Y.jsx("h3",{className:"text-xl font-semibold text-white mb-3 tracking-wide",children:"Loading Panorama"}),Y.jsx("p",{className:"text-white/60 text-sm tracking-wider uppercase mb-6",children:"Preparing your immersive experience"})]}),Y.jsxs("div",{className:"relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm",children:[Y.jsx(rn.div,{className:"absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full",initial:{width:"0%"},animate:{width:`${o}%`},transition:{duration:.3,ease:"easeOut"},style:{boxShadow:"0 0 20px rgba(96, 165, 250, 0.5)"}}),Y.jsx(rn.div,{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",animate:{x:["-100%","200%"]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"},style:{width:"50%"}})]}),Y.jsxs(rn.p,{className:"mt-4 text-white/40 text-xs tracking-wider",animate:{opacity:[.4,.7,.4]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},children:[o<30&&"Initializing 3D environment...",o>=30&&o<70&&"Loading high-resolution textures...",o>=70&&o<100&&"Finalizing scene...",o===100&&"Ready!"]})]})}),p&&Y.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-20",children:Y.jsxs("div",{className:"text-center max-w-md px-6",children:[Y.jsx("p",{className:"text-white/80 text-lg font-light mb-4",children:"Unable to load panorama"}),Y.jsx("p",{className:"text-white/60 text-sm mb-6",children:"Please check your connection and try again"}),Y.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 text-white/90 text-sm tracking-wider uppercase border border-white/20 rounded-lg hover:bg-white/10 transition-all",children:"Reload"})]})}),Y.jsx(rn.div,{className:"absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center",initial:{opacity:0},animate:{opacity:t?0:1},transition:{delay:.5,duration:1},children:Y.jsxs(rn.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:1,duration:1},className:"text-center",children:[Y.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4",style:{fontFamily:"'Inter', system-ui, sans-serif",textShadow:"0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)"},children:[Y.jsx(rn.span,{className:"block text-white",style:{filter:"drop-shadow(0 0 30px rgba(255,255,255,0.3))"},children:"YUSUF"}),Y.jsx(rn.span,{className:"block text-white",style:{filter:"drop-shadow(0 0 30px rgba(255,255,255,0.3))"},children:"SHEIKHALI"})]}),Y.jsx(rn.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1},className:"text-white/90 text-lg md:text-xl tracking-widest uppercase",style:{textShadow:"0 2px 10px rgba(0,0,0,0.8)"},children:"Portfolio"})]})}),!t&&!d&&Y.jsx(rn.div,{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0},transition:{delay:1.5,duration:.8},children:Y.jsx("p",{className:"text-white/70 text-sm md:text-base font-light tracking-wider uppercase text-center",style:{textShadow:"0 2px 10px rgba(0,0,0,0.8)"},children:"Drag to explore • Scroll to continue"})}),Y.jsx(rn.div,{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10",initial:{opacity:0},animate:{opacity:d?1:0},transition:{duration:.5},children:Y.jsx(rn.div,{animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2",children:Y.jsx(rn.div,{animate:{opacity:[1,0,1]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"w-1.5 h-1.5 bg-white/70 rounded-full"})})})]})},e3=LM.memo(({skill:n,category:e})=>{const t={languages:"from-orange-500 to-red-500",frameworks:"from-green-500 to-emerald-500",databases:"from-blue-500 to-cyan-500",tools:"from-purple-500 to-pink-500",systems:"from-yellow-500 to-amber-500"};return Y.jsxs("div",{className:`
      relative px-3 py-2 rounded-xl border border-white/20
      bg-gradient-to-r ${t[e]}
      shadow-lg transition-all duration-300 cursor-pointer
      hover:scale-110 hover:shadow-xl hover:-translate-y-1
      flex items-center gap-2
    `,children:[n.logo&&Y.jsx("img",{src:n.logo,alt:n.name,className:"w-4 h-4 object-contain",onError:r=>r.target.style.display="none",loading:"lazy",decoding:"async"}),Y.jsx("span",{className:"text-white font-medium text-sm",children:n.name})]})}),t3=({item:n,index:e,isDesktop:t,isInView:r})=>{const o=t&&e%2===0;return Y.jsx("div",{className:`relative flex ${t?o?"flex-row":"flex-row-reverse":"flex-row"} items-center mb-16 lg:mb-24`,style:{opacity:r?1:0,transform:r?"translateY(0)":"translateY(40px)",transition:`opacity 0.6s ease-out ${e*.08}s, transform 0.6s ease-out ${e*.08}s`,willChange:r?"auto":"opacity, transform"},children:Y.jsx("div",{className:`w-full ${t?`lg:w-5/12 ${o?"pr-16":"pl-16"}`:"pl-8"}`,children:Y.jsxs("div",{className:"relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:from-white/15 hover:via-white/8 transition-all duration-300 group overflow-hidden shadow-2xl",style:{backfaceVisibility:"hidden"},children:[Y.jsx("div",{className:`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${n.gradient.replace("/20","/60")}`}),Y.jsx("div",{className:"relative mb-6",children:Y.jsx("div",{className:`inline-flex p-4 rounded-2xl bg-gradient-to-br ${n.gradient.replace("/20","/30")} backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`,children:Y.jsx(n.icon,{className:`w-7 h-7 ${n.iconColor||"text-white"}`})})}),Y.jsx("h3",{className:`text-2xl lg:text-3xl font-bold ${n.titleColor} mb-6 tracking-tight`,children:n.title}),n.description&&Y.jsx("p",{className:"text-gray-200 leading-relaxed mb-6 text-base lg:text-lg",children:n.description}),n.points&&Y.jsx("div",{className:"space-y-4 mb-6",children:n.points.map((l,u)=>Y.jsxs("div",{className:"flex items-start gap-3",children:[Y.jsx("div",{className:`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${n.gradient.replace("/20","/80")} flex-shrink-0`}),Y.jsx("p",{className:"text-gray-200 leading-relaxed text-sm lg:text-base",children:l})]},u))}),n.skills&&Y.jsx("div",{className:"flex flex-wrap gap-2",children:n.skills.map(l=>Y.jsx(e3,{skill:l,category:l.category},l.name))})]})})})};function n3(){const[n,e]=we.useState(!1),[t,r]=we.useState(!1),o=we.useRef(null);we.useEffect(()=>{const u=()=>e(window.innerWidth>=1024);return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),we.useEffect(()=>{const u=new IntersectionObserver(([c])=>{c.isIntersecting&&r(!0)},{threshold:.1,rootMargin:"50px"});return o.current&&u.observe(o.current),()=>u.disconnect()},[]);const l=we.useMemo(()=>[{icon:KA,iconColor:"text-orange-400",titleColor:"text-orange-400",gradient:"from-orange-400/20 to-red-400/20",title:"The Spark",description:"My journey began with curiosity for problem solving and a fascination with how technology shapes our world. What started as tinkering with code quickly evolved into a passion for creating meaningful digital experiences."},{icon:Lv,iconColor:"text-green-400",titleColor:"text-green-400",gradient:"from-green-400/20 to-emerald-400/20",title:"Full Stack Mastery",description:"Over 3 years of crafting scalable web applications and mobile solutions. I specialize in modern JavaScript frameworks and have built everything from responsive interfaces to complex backend systems.",skills:[{name:"React",category:"frameworks",logo:"/react.png"},{name:"Node.js",category:"frameworks",logo:"/nodejs.png"},{name:"JavaScript",category:"languages",logo:"/javascript.png"},{name:"Python",category:"languages",logo:"/python.png"}]},{icon:rC,iconColor:"text-blue-400",titleColor:"text-blue-400",gradient:"from-blue-400/20 to-cyan-400/20",title:"Cross Platform Expertise",description:"My experience spans mobile development with Flutter, Kotlin and Swift, database architecture with both SQL and NoSQL solutions, and cloud deployment strategies using modern containerization.",skills:[{name:"Flutter",category:"frameworks",logo:"/flutter.svg"},{name:"Swift",category:"languages",logo:"/swift.png"},{name:"MongoDB",category:"databases",logo:"/mongodb.png"},{name:"Docker",category:"tools",logo:"/docker.png"}]},{icon:fC,iconColor:"text-purple-400",titleColor:"text-purple-400",gradient:"from-purple-400/20 to-pink-400/20",title:"Code Philosophy",description:"What sets me apart is my commitment to writing clean, maintainable code and my passion for user experience. I believe great software isn't just functional, it's intuitive, performant, and accessible.",skills:[{name:"Git",category:"tools",logo:"/git.png"},{name:"CI/CD",category:"tools",logo:"/cicd.png"},{name:"AWS",category:"systems",logo:"/aws.png"},{name:"Linux",category:"systems",logo:"/linux.png"}]},{icon:hC,iconColor:"text-yellow-400",titleColor:"text-yellow-400",gradient:"from-yellow-400/20 to-amber-400/20",title:"Collaborative Impact",description:"I thrive in collaborative environments where I can learn from others while contributing expertise in system architecture and performance optimization. My goal is delivering solutions that exceed expectations.",skills:[{name:"PostgreSQL",category:"databases",logo:"/postgresql.png"},{name:"Postman",category:"tools",logo:"/postman.png"},{name:"VS Code",category:"tools",logo:"/vscode.png"},{name:"C++",category:"languages",logo:"/cpp.png"}]},{icon:FA,iconColor:"text-orange-400",titleColor:"text-orange-400",gradient:"from-orange-400/20 to-red-400/20",title:"Data Science & AI",points:["Developing highly scalable production ready models for various deep learning and statistical use cases","Experience working with Computer Vision and NLP projects using TensorFlow, PyTorch, and scikit learn","Complex quantitative modeling for dynamic forecasting and time series analysis with advanced statistical methods"]},{icon:Lv,iconColor:"text-green-400",titleColor:"text-green-400",gradient:"from-green-400/20 to-emerald-400/20",title:"Full Stack Development",points:["Building responsive, high performance web applications using React, Redux, and modern JavaScript frameworks","Developing cross platform mobile applications using Flutter, React Native, and native Android/iOS development","Creating robust backend systems and APIs using Node.js, Express, Python Flask, and microservices architecture"]},{icon:kA,iconColor:"text-blue-400",titleColor:"text-blue-400",gradient:"from-blue-400/20 to-cyan-400/20",title:"Cloud Infrastructure",points:["Designing and deploying applications on AWS, Google Cloud Platform, and Azure with auto scaling capabilities","Managing containerized applications using Docker and Kubernetes for efficient deployment and orchestration","Implementing CI/CD pipelines for automated testing, building, and deployment of applications"]},{icon:oC,iconColor:"text-purple-400",titleColor:"text-purple-400",gradient:"from-purple-400/20 to-pink-400/20",title:"UI/UX Design",points:["Creating intuitive and visually appealing user interfaces with a focus on accessibility and user experience","Designing comprehensive design systems and style guides for consistent branding across platforms","Proficient in Figma, Adobe Creative Suite, and prototyping tools for rapid design iteration"]}],[]);return Y.jsx("section",{ref:o,className:"snap-start snap-always relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black min-h-screen",children:Y.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto",children:[Y.jsxs("div",{className:"text-center mb-20",style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(30px)",transition:"opacity 0.6s ease-out, transform 0.6s ease-out",willChange:t?"auto":"opacity, transform"},children:[Y.jsx("h2",{className:"text-5xl lg:text-6xl font-bold mb-6",children:Y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-green-400 to-blue-400",children:"My Journey & Expertise"})}),Y.jsx("p",{className:"text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto",children:"From curiosity driven beginnings to full stack expertise. Discover my path and the technologies I have mastered."})]}),Y.jsxs("div",{className:"relative",children:[Y.jsx("div",{className:`absolute ${n?"left-1/2 -translate-x-1/2":"left-3"} h-full w-1`,style:{background:"linear-gradient(180deg, #d3ffd7 0%, #faff00 12%, #14af7d 25%, #ff4d00 37%, #00c8ff 50%, #7856ff 62%, #ff4d00 75%, #14af7d 87%, #d3ffd7 100%)",boxShadow:"0 0 20px rgba(255,255,255,0.3)"}}),l.map((u,c)=>Y.jsx(t3,{item:u,index:c,isDesktop:n,isInView:t},c))]}),Y.jsx("div",{className:`${n?"text-center":"ml-12"} mt-20`,style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(30px)",transition:"opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s",willChange:t?"auto":"opacity, transform"},children:Y.jsxs("div",{className:"relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 inline-block max-w-lg hover:bg-white/10 transition-all duration-300",children:[Y.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[Y.jsx(Oa,{className:"w-6 h-6 text-blue-400"}),Y.jsx("span",{className:"text-xl font-semibold text-blue-400",children:"Ready to Build Something Amazing?"})]}),Y.jsx("p",{className:"text-gray-300",children:"Let's collaborate and create something extraordinary together."})]})})]})})}const i3=({project:n,index:e,isInView:t})=>{const[r,o]=we.useState(!1),[l,u]=we.useState(!1),c=we.useMemo(()=>{const v=[{gradient:"from-orange-400/20 to-red-400/20",accentColor:"text-orange-400",borderColor:"border-orange-400/20"},{gradient:"from-emerald-400/20 to-teal-400/20",accentColor:"text-emerald-400",borderColor:"border-emerald-400/20"},{gradient:"from-blue-400/20 to-indigo-400/20",accentColor:"text-blue-400",borderColor:"border-blue-400/20"},{gradient:"from-purple-400/20 to-pink-400/20",accentColor:"text-purple-400",borderColor:"border-purple-400/20"},{gradient:"from-yellow-400/20 to-orange-400/20",accentColor:"text-yellow-400",borderColor:"border-yellow-400/20"},{gradient:"from-cyan-400/20 to-blue-400/20",accentColor:"text-cyan-400",borderColor:"border-cyan-400/20"}];return v[e%v.length]},[e]),d=we.useCallback(()=>{u(!0)},[]),h=n.title==="Baro",p=n.link.includes("github.com"),g=n.link.includes(".pdf");return Y.jsx("div",{className:"h-full",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(40px)",transition:`opacity 0.6s ease-out ${e*.08}s, transform 0.6s ease-out ${e*.08}s`,willChange:t?"auto":"opacity, transform"},children:Y.jsxs("div",{className:`
        relative h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent 
        backdrop-blur-xl border ${c.borderColor} rounded-3xl overflow-hidden
        transition-all duration-300 group shadow-2xl
        ${r?"from-white/15 via-white/8 border-opacity-40 scale-[1.02]":"border-opacity-100"}
      `,style:{backfaceVisibility:"hidden"},children:[Y.jsx("div",{className:`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient.replace("/20","/60")}`}),Y.jsxs("div",{className:"relative p-8",children:[Y.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[n.title==="Baro"&&!l&&Y.jsx("div",{className:"relative w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400/20 to-red-500/20 p-2.5 backdrop-blur-sm border border-orange-400/30 transition-transform duration-300 hover:scale-110 hover:rotate-3",children:Y.jsx("img",{src:"https://barosomaliapp.netlify.app/assets/app_logo-Dj3Mhh_1.png",alt:"Baro App Logo",className:"w-full h-full object-contain rounded-lg",onError:d,loading:"lazy",decoding:"async"})}),Y.jsx("div",{className:"flex-1",children:Y.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[Y.jsx("h3",{className:`text-2xl lg:text-3xl font-bold ${c.accentColor} tracking-tight`,children:n.title}),h&&Y.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30",children:[Y.jsx(VA,{className:"w-4 h-4 text-yellow-400"}),Y.jsx("span",{className:"text-xs font-semibold text-yellow-300",children:"Founder"})]})]})})]}),Y.jsx("p",{className:"text-gray-200 leading-relaxed text-base lg:text-lg mb-6",children:n.description}),Y.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:n.tags.map((v,x)=>Y.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105",children:[v.logo&&Y.jsx("img",{src:v.logo,alt:v.name,className:"w-4 h-4 object-contain",onError:M=>M.target.style.display="none",loading:"lazy",decoding:"async"}),Y.jsx("span",{className:"text-sm text-gray-300 font-medium",children:v.name})]},x))}),Y.jsx("div",{className:"pt-4",children:Y.jsxs("a",{href:n.link,target:n.link.startsWith("http")?"_blank":"_self",rel:n.link.startsWith("http")?"noopener noreferrer":"",className:`
                inline-flex items-center gap-2 px-6 py-3 rounded-2xl
                bg-gradient-to-r ${c.gradient.replace("/20","/30")}
                backdrop-blur-sm border border-white/20
                text-white font-semibold
                transition-all duration-300 hover:scale-105 hover:-translate-y-1
                hover:border-white/30 hover:shadow-lg
              `,children:[g?Y.jsxs(Y.Fragment,{children:[Y.jsx(jA,{className:"w-5 h-5"}),Y.jsx("span",{children:"View Research"})]}):p?Y.jsxs(Y.Fragment,{children:[Y.jsx(gx,{className:"w-5 h-5"}),Y.jsx("span",{children:"View Code"})]}):Y.jsxs(Y.Fragment,{children:[Y.jsx(qA,{className:"w-5 h-5"}),Y.jsx("span",{children:"Visit Project"})]}),Y.jsx(GA,{className:"w-4 h-4"})]})})]}),Y.jsx("div",{className:`
          absolute top-0 right-0 w-32 h-32 
          bg-gradient-to-bl ${c.gradient} opacity-10 rounded-bl-3xl rounded-tr-3xl
        `})]})})},r3=()=>{const[n,e]=we.useState(!1),t=we.useRef(null);we.useEffect(()=>{const o=new IntersectionObserver(([l])=>{l.isIntersecting&&e(!0)},{threshold:.1,rootMargin:"50px"});return t.current&&o.observe(t.current),()=>o.disconnect()},[]);const r=we.useMemo(()=>[{title:"Baro",description:"Launched a multi platform language learning app (iOS, Android) live on the iOS app store and Google play store, featuring real-time translation, text-to-speech, and multiple learning modes.",tags:[{name:"Flutter",logo:"/flutter.svg"},{name:"Node.js",logo:"/nodejs.png"},{name:"AWS",logo:"/aws.png"},{name:"Azure",logo:"/azure.png"},{name:"Google Cloud",logo:"/gc.png"}],link:"https://barosomaliapp.netlify.app/"},{title:"NutriDex",description:"Developed a label scanner app for health and fitness supplements to track ingredients.",tags:[{name:"Kotlin",logo:"/Kotlin.png"},{name:"Google ML Kit",logo:"/ml.png"},{name:"Google Firestore",logo:"/firestore.png"}],link:"https://github.com/HasanYousaf/NutriDex"},{title:"Bike Sharing Demand Prediction",description:"Built a regression model to predict hourly bike rental demand using the Bike Sharing Dataset.",tags:[{name:"Python",logo:"/python.png"},{name:"PyCaret",logo:"/pycaret.png"}],link:"https://github.com/Yusuf3838/bike-sharing-prediction-pycare"},{title:"Mood Capsule",description:"AI powered app that transforms user moods into personalized experiences with custom images, soundtracks, and recommendations.",tags:[{name:"React",logo:"/react.png"},{name:"TypeScript",logo:"/typescript.png"},{name:"Node.js",logo:"/nodejs.png"},{name:"Express.js",logo:"/express.png"},{name:"Hugging Face",logo:"/huggingface.png"},{name:"AI Horde",logo:"/aihorde.png"}],link:"https://github.com/Yusuf3838/story-mood-crafter"},{title:"Product Marketplace",description:"Created an iOS product marketplace with a serverless backend using AWS Amplify.",tags:[{name:"Swift",logo:"/swift.png"},{name:"iOS",logo:"/ios.svg"},{name:"AWS Amplify",logo:"/amplify.png"}],link:"https://github.com/JonathanHugo/Product-Marketplace"},{title:"Quantum Key Distribution Analysis",description:"IEEE report analyzing quantum key distribution protocols and their applications in secure communication systems.",tags:[{name:"Research",logo:"/research.png"},{name:"IEEE",logo:"/ieee.png"},{name:"Quantum Cryptography",logo:"/quantum.png"}],link:"/QKDReport.pdf"}],[]);return Y.jsx("section",{id:"projects",ref:t,className:"snap-start snap-always relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black",children:Y.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto",children:[Y.jsxs("div",{className:"text-center mb-20",style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(30px)",transition:"opacity 0.6s ease-out, transform 0.6s ease-out",willChange:n?"auto":"opacity, transform"},children:[Y.jsx("h2",{className:"text-5xl lg:text-6xl font-bold mb-6",children:Y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-400 via-blue-400 to-purple-400",children:"Featured Projects"})}),Y.jsxs("div",{className:"flex items-center justify-center gap-3 text-gray-400 text-lg lg:text-xl",children:[Y.jsx(Oa,{className:"w-5 h-5 text-blue-400"}),Y.jsx("p",{children:"Building the future, one project at a time"}),Y.jsx(Oa,{className:"w-5 h-5 text-purple-400"})]})]}),Y.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10",children:r.map((o,l)=>Y.jsx(i3,{project:o,index:l,isInView:n},o.title))}),Y.jsx("div",{className:"text-center mt-20",style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(30px)",transition:"opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s",willChange:n?"auto":"opacity, transform"},children:Y.jsxs("div",{className:"relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 inline-block max-w-3xl hover:bg-white/10 transition-all duration-300",children:[Y.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[Y.jsx(Oa,{className:"w-6 h-6 text-blue-400"}),Y.jsx("span",{className:"text-xl font-semibold text-blue-400",children:"Interested in Collaboration?"})]}),Y.jsx("p",{className:"text-gray-300 text-base lg:text-lg",children:"Let's connect and create something extraordinary together."})]})})]})})},s3=({href:n,icon:e,label:t,description:r,index:o})=>{const[l,u]=we.useState(!1),[c,d]=we.useState(!1),h=we.useRef(null);we.useEffect(()=>{const g=new IntersectionObserver(([v])=>{v.isIntersecting&&d(!0)},{threshold:.2,rootMargin:"-50px"});return h.current&&g.observe(h.current),()=>g.disconnect()},[]);const p=we.useMemo(()=>{const g=[{gradient:"from-orange-400/20 to-red-400/20",iconColor:"text-orange-400",borderColor:"border-orange-400/20",iconBg:"from-orange-400/30 to-red-400/30"},{gradient:"from-emerald-400/20 to-teal-400/20",iconColor:"text-emerald-400",borderColor:"border-emerald-400/20",iconBg:"from-emerald-400/30 to-teal-400/30"},{gradient:"from-blue-400/20 to-cyan-400/20",iconColor:"text-blue-400",borderColor:"border-blue-400/20",iconBg:"from-blue-400/30 to-cyan-400/30"}];return g[o]||g[0]},[o]);return Y.jsx("a",{ref:h,href:n,target:n.startsWith("mailto:")?void 0:"_blank",rel:n.startsWith("mailto:")?void 0:"noopener noreferrer",className:"block h-full",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),style:{opacity:c?1:0,transform:c?"translateY(0)":"translateY(40px)",transition:`all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${o*.15}s`},children:Y.jsxs("div",{className:`
        relative h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent 
        backdrop-blur-xl border ${p.borderColor} rounded-3xl overflow-hidden
        transition-all duration-500 group shadow-2xl
        ${l?"from-white/15 via-white/8 border-opacity-40 -translate-y-2":"border-opacity-100"}
      `,children:[Y.jsx("div",{className:`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient.replace("/20","/60")}`}),Y.jsxs("div",{className:"relative p-8 text-center",children:[Y.jsx("div",{className:"relative mb-6",children:Y.jsx("div",{className:`
              inline-flex p-5 rounded-2xl bg-gradient-to-br ${p.iconBg}
              backdrop-blur-sm border border-white/20 transition-all duration-300
              ${l?"scale-110 rotate-3":"scale-100 rotate-0"}
            `,children:Y.jsx(e,{className:`w-8 h-8 ${p.iconColor}`})})}),Y.jsx("h3",{className:`text-2xl font-bold ${p.iconColor} mb-4 tracking-tight`,children:t}),Y.jsx("p",{className:"text-gray-200 leading-relaxed text-base mb-6",children:r}),Y.jsx("div",{className:`h-0.5 w-12 bg-gradient-to-r ${p.gradient.replace("/20","/60")} rounded-full mx-auto mb-4`}),Y.jsxs("div",{className:"flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300",style:{opacity:l?1:0,transform:l?"translateY(0)":"translateY(8px)"},children:[Y.jsx(lC,{className:`w-4 h-4 ${p.iconColor}`}),Y.jsx("span",{className:p.iconColor,children:"Connect Now"})]})]}),Y.jsx("div",{className:`
          absolute top-0 right-0 w-20 h-20 rounded-bl-3xl rounded-tr-3xl
          bg-gradient-to-bl ${p.gradient} opacity-10
        `})]})})},o3=()=>{const[n,e]=we.useState(!1),t=we.useRef(null);we.useEffect(()=>{const o=new IntersectionObserver(([l])=>{l.isIntersecting&&e(!0)},{threshold:.2});return t.current&&o.observe(t.current),()=>o.disconnect()},[]);const r=we.useMemo(()=>[{href:"mailto:yusuf.sheikhali@outlook.com",icon:eC,label:"Email",description:"Drop me a line and let's start a conversation about your next project"},{href:"https://github.com/Yusuf3838",icon:gx,label:"GitHub",description:"Explore my code, contribute to projects, and see what I'm building"},{href:"https://www.linkedin.com/in/yusufsheikhali/",icon:QA,label:"LinkedIn",description:"Connect professionally and stay updated with my latest work"}],[]);return Y.jsx("section",{id:"contact",className:"snap-start snap-always relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black",children:Y.jsxs("div",{className:"relative z-10 max-w-6xl mx-auto",children:[Y.jsxs("div",{ref:t,className:"text-center mb-16",style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(30px)",transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"},children:[Y.jsx("h2",{className:"text-5xl lg:text-6xl font-bold mb-6",children:Y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-400 to-blue-400",children:"Get In Touch"})}),Y.jsxs("div",{className:"flex items-center justify-center gap-3 text-gray-400 text-lg lg:text-xl mb-8",children:[Y.jsx(nC,{className:"w-5 h-5 text-emerald-400"}),Y.jsx("p",{children:"Let's create something amazing together"}),Y.jsx(Oa,{className:"w-5 h-5 text-blue-400"})]}),Y.jsx("div",{className:"max-w-3xl mx-auto",style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(20px)",transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"},children:Y.jsx("div",{className:"relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500",children:Y.jsx("p",{className:"text-gray-200 text-base lg:text-lg leading-relaxed",children:"I'm always excited to collaborate on innovative projects and explore new opportunities. Whether you have a groundbreaking idea, need technical expertise, or just want to connect, I'd love to hear from you. Let's turn your vision into reality."})})})]}),Y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:r.map((o,l)=>Y.jsx(s3,{...o,index:l},o.label))}),Y.jsx("div",{className:"text-center",style:{opacity:n?1:0,transform:n?"translateY(0)":"translateY(30px)",transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"},children:Y.jsx("div",{className:"relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 inline-block max-w-3xl hover:bg-white/10 transition-all duration-500",children:Y.jsxs("p",{className:"text-gray-200 text-base lg:text-lg",children:[Y.jsx("span",{className:"text-orange-400 font-semibold",children:"Ready to collaborate?"})," ","Choose your preferred way to connect and let's start building something extraordinary."]})})})]})})},a3=()=>Y.jsx("footer",{className:"bg-dark py-8 border-t border-gray-800",children:Y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Y.jsxs("div",{className:"text-center",children:[Y.jsxs("p",{className:"text-gray-400",children:["© ",new Date().getFullYear()," Yusuf Sheikhali. All rights reserved."]}),Y.jsx("p",{className:"text-gray-500 text-sm mt-2",children:"Built with React, Tailwind CSS, and Framer Motion"})]})})}),l3=({children:n})=>{const e=we.useRef(null);return DA({target:e}),Y.jsx("div",{ref:e,className:"snap-y snap-mandatory overflow-y-scroll h-screen w-full",style:{scrollBehavior:"smooth"},children:n})};function u3(){return Y.jsxs(l3,{children:[Y.jsx(JL,{}),Y.jsx(n3,{}),Y.jsx(r3,{}),Y.jsx(o3,{}),Y.jsx(a3,{})]})}kM.createRoot(document.getElementById("root")).render(Y.jsx(we.StrictMode,{children:Y.jsx(u3,{})}));
